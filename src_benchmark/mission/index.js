/**
 * MISSION — objective tracker, story state machine, NPC dialogue, reward system.
 *
 * Frame contract
 * --------------
 *   update(dt, ctx)
 *     - advance hack timers
 *     - check GoTo / Escort proximity
 *     - tick survival timers
 *     - advance dynamic event spawn timers
 *     - poll interact key for NPCs / terminals / items
 *     - push active objectives into `ui`
 *
 * Events emitted
 * --------------
 *   mission:start        { id, title, description, type }
 *   mission:complete     { id, title, rewards }
 *   mission:fail         { id, reason }
 *   mission:dialogue     { lines, index, speaker, missionId }
 *   mission:objective:complete { id, label, missionId }
 *   mission:objective:update   { id, label, progress, missionId }
 *   mission:choice       { options: [{ text, nextMission }], missionId }
 *   mission:available    { id, title, giver }
 *
 * Events consumed
 * ---------------
 *   player:state   — position and death
 *   actor:death    — kill objectives
 *   mission:interact — player pressed interact near an entity
 *   mission:choice  — player selected a story branch
 */

import * as THREE from 'three';
import {
  MISSION_TYPES,
  OBJECTIVE_TYPES,
  MISSION_STATUS,
  STORY_MISSIONS,
  SIDE_MISSIONS,
  DYNAMIC_EVENTS,
  ALL_MISSIONS,
  getMissionById,
  getAvailableMissions,
} from './data.js';

const INTERACT_RADIUS = 3.5;
const INTERACT_KEY = 'use';

export class MissionSystem {
  static id = 'mission';
  static deps = [];

  constructor() {
    this.ctx = null;
    this.rng = null;

    /** missionId -> instance */
    this.missions = new Map();
    /** Set of completed mission ids */
    this.completed = new Set();
    /** Set of failed mission ids */
    this.failed = new Set();
    /** Currently active mission ids */
    this.active = new Set();
    /** Dialogue state */
    this.dialogue = null;
    /** Pending choice state */
    this.choice = null;

    /** Registered interactable objects */
    this.interactables = new Map();
    /** Registered item spawns */
    this.itemSpawns = new Map();
    /** Registered terminals */
    this.terminals = new Map();

    /** Dynamic event spawn timer */
    this._dynamicTimer = 0;
    this._dynamicCooldown = 45;

    /** Scratch */
    this._v = new THREE.Vector3();
    this._playerPos = new THREE.Vector3();
    this._interactPressed = false;
    this._lastInteract = false;
  }

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this._off = [];
    const on = (t, fn) => this._off.push(ctx.events.on(t, fn));

    on('player:state', (e) => this._onPlayerState(e));
    on('player:death', () => this._onPlayerDeath());
    on('actor:death', (e) => this._onActorDeath(e));
    on('mission:interact', (e) => this._onInteract(e));
    on('mission:choice', (e) => this._onChoice(e));

    this._ui = ctx.peek('ui');

    console.info('[mission] system ready');
  }

  /* ==================================================================== */
  /* public API                                                           */
  /* ==================================================================== */

  startMission(id) {
    const def = getMissionById(id);
    if (!def) return false;
    if (this.active.has(id) || this.completed.has(id)) return false;
    const prereqsOk = def.prerequisites.every((p) => this.completed.has(p));
    if (!prereqsOk && !def.prerequisites.length) return false;

    const instance = {
      id: def.id,
      type: def.type,
      title: def.title,
      description: def.description,
      giver: def.giver,
      status: MISSION_STATUS.ACTIVE,
      objectives: def.objectives.map((o) => ({ ...o, progress: 0, completed: false })),
      rewards: def.rewards,
      failConditions: def.failConditions,
      timeLimit: def.timeLimit ?? 0,
      timeElapsed: 0,
      choices: def.choices ?? [],
      nextMissions: def.nextMissions ?? [],
      dialogueIndex: 0,
      dialogue: def.dialogue ?? [],
      repeatable: def.repeatable ?? false,
      cooldown: def.cooldown ?? 0,
      complete: false,
      _origDef: def,
    };

    this.missions.set(id, instance);
    this.active.add(id);

    if (instance.dialogue.length > 0) {
      this._showDialogue(instance);
    } else {
      this.ctx.events.emit('mission:start', { id, title: def.title, description: def.description, type: def.type });
    }

    this._syncObjectivesToUI();
    return true;
  }

  abandonMission(id) {
    const inst = this.missions.get(id);
    if (!inst || inst.status !== MISSION_STATUS.ACTIVE) return;
    inst.status = MISSION_STATUS.FAILED;
    this.active.delete(id);
    this.failed.add(id);
    this.ctx.events.emit('mission:fail', { id, reason: 'abandoned' });
    this._syncObjectivesToUI();
  }

  failMission(id, reason = 'unknown') {
    const inst = this.missions.get(id);
    if (!inst || inst.status !== MISSION_STATUS.ACTIVE) return;
    inst.status = MISSION_STATUS.FAILED;
    this.active.delete(id);
    this.failed.add(id);
    this.ctx.events.emit('mission:fail', { id, reason });
    this._syncObjectivesToUI();
  }

  completeObjective(objectiveId) {
    for (const [missionId, inst] of this.missions) {
      const obj = inst.objectives.find((o) => o.id === objectiveId);
      if (!obj || obj.completed) continue;
      obj.completed = true;
      obj.progress = obj.count || 1;
      this.ctx.events.emit('mission:objective:complete', { id: objectiveId, label: obj.label, missionId });
      this._checkMissionCompletion(inst);
      this._syncObjectivesToUI();
      return;
    }
  }

  getActiveObjectives() {
    const out = [];
    for (const id of this.active) {
      const inst = this.missions.get(id);
      if (!inst || inst.status !== MISSION_STATUS.ACTIVE) continue;
      for (const o of inst.objectives) {
        if (!o.completed) out.push({ ...o, name: o.label, missionId: id, missionTitle: inst.title });
      }
    }
    return out;
  }

  getActiveMissions() {
    return [...this.active].map((id) => this.missions.get(id)).filter(Boolean);
  }

  getCompletedMissions() {
    return [...this.completed];
  }

  isObjectiveActive(objectiveId) {
    return this.getActiveObjectives().some((o) => o.id === objectiveId);
  }

  getStoryPhase() {
    if (this.completed.has('infiltrate_infected_nest')) return 4;
    if (this.completed.has('uncover_conspiracy')) return 3;
    if (this.completed.has('find_survivors')) return 2;
    if (this.completed.has('escape_infected_zone')) return 1;
    return 0;
  }

  showDialogue(lines, speaker = 'UNKNOWN') {
    if (!lines || !lines.length) return;
    this.dialogue = { lines, index: 0, speaker };
    this.ctx.events.emit('mission:dialogue', { lines, index: 0, speaker, missionId: null });
  }

  advanceDialogue() {
    if (!this.dialogue) return;
    this.dialogue.index++;
    if (this.dialogue.index >= this.dialogue.lines.length) {
      this.hideDialogue();
      return;
    }
    this.ctx.events.emit('mission:dialogue', {
      lines: this.dialogue.lines,
      index: this.dialogue.index,
      speaker: this.dialogue.speaker,
      missionId: null,
    });
  }

  hideDialogue() {
    this.dialogue = null;
    this.ctx.events.emit('mission:dialogue:hide', {});
  }

  showChoice(options, missionId) {
    this.choice = { options, missionId };
    this.ctx.events.emit('mission:choice', { options, missionId });
  }

  registerInteractable({ id, position, type, label, missionId }) {
    this.interactables.set(id, { id, position: new THREE.Vector3(position.x, position.y, position.z), type, label, missionId });
  }

  registerItemSpawn({ id, position, itemId, missionId }) {
    this.itemSpawns.set(id, { id, position: new THREE.Vector3(position.x, position.y, position.z), itemId, missionId, collected: false });
  }

  registerTerminal({ id, position, missionId }) {
    this.terminals.set(id, { id, position: new THREE.Vector3(position.x, position.y, position.z), missionId });
  }

  /* ==================================================================== */
  /* internal logic                                                       */
  /* ==================================================================== */

  _onPlayerState(e) {
    if (!e) return;
    const p = this.ctx.peek('player');
    const pos = p?.position ?? p?.feetPosition ?? this.ctx.camera.position;
    this._playerPos.copy(pos);
    this._checkProximityObjectives();
    this._checkInteractables();
  }

  _onPlayerDeath() {
    for (const id of this.active) {
      const inst = this.missions.get(id);
      if (!inst) continue;
      if (inst.failConditions.some((c) => c.type === 'death')) {
        this.failMission(id, 'player_died');
        return;
      }
    }
  }

  _onActorDeath(e) {
    if (!e || !e.target) return;
    const name = e.target.name ?? e.target?.constructor?.name ?? '';
    for (const [missionId, inst] of this.missions) {
      for (const o of inst.objectives) {
        if (o.completed || o.type !== OBJECTIVE_TYPES.KILL) continue;
        if ((o.target && name.toLowerCase().includes(o.target.toLowerCase())) || o.target === '*') {
          o.progress++;
          if (o.progress >= o.count) {
            o.completed = true;
            this.ctx.events.emit('mission:objective:complete', { id: o.id, label: o.label, missionId });
            this._checkMissionCompletion(inst);
          } else {
            this.ctx.events.emit('mission:objective:update', { id: o.id, label: o.label, progress: o.progress, missionId, max: o.count });
          }
        }
      }
    }
  }

  _onInteract(e) {
    if (!e || !e.targetId) return;
    const item = this.interactables.get(e.targetId);
    if (item && item.missionId) {
      const inst = this.missions.get(item.missionId);
      if (inst && inst.status === MISSION_STATUS.ACTIVE) {
        const obj = inst.objectives.find((o) => !o.completed && o.type === OBJECTIVE_TYPES.GOTO && o.label === item.label);
        if (obj) {
          obj.completed = true;
          obj.progress = obj.count;
          this.ctx.events.emit('mission:objective:complete', { id: obj.id, label: obj.label, missionId: item.missionId });
          this._checkMissionCompletion(inst);
          this._syncObjectivesToUI();
        }
      }
    }

    const terminal = this.terminals.get(e.targetId);
    if (terminal && terminal.missionId) {
      const inst = this.missions.get(terminal.missionId);
      if (inst && inst.status === MISSION_STATUS.ACTIVE) {
        const obj = inst.objectives.find((o) => !o.completed && o.type === OBJECTIVE_TYPES.HACK);
        if (obj) {
          obj._hacking = true;
        }
      }
    }
  }

  _onChoice(e) {
    if (!e || !this.choice) return;
    const chosen = this.choice.options.find((o) => o.text === e.text);
    if (!chosen) return;
    const currentId = this.choice.missionId;
    this.choice = null;
    if (currentId) {
      const inst = this.missions.get(currentId);
      if (inst) {
        inst.complete = true;
        this._grantRewards(inst);
        inst.status = MISSION_STATUS.COMPLETED;
        this.active.delete(currentId);
        this.completed.add(currentId);
        this.ctx.events.emit('mission:complete', { id: currentId, title: inst.title, rewards: inst.rewards });
      }
    }
    if (chosen.nextMission) {
      this.startMission(chosen.nextMission);
    }
  }

  _checkProximityObjectives() {
    const p = this._playerPos;
    for (const [missionId, inst] of this.missions) {
      if (inst.status !== MISSION_STATUS.ACTIVE) continue;
      for (const o of inst.objectives) {
        if (o.completed) continue;

        if (o.type === OBJECTIVE_TYPES.GOTO && o.position) {
          const d = p.distanceTo(o.position);
          if (d <= o.radius) {
            o.completed = true;
            this.ctx.events.emit('mission:objective:complete', { id: o.id, label: o.label, missionId });
            this._checkMissionCompletion(inst);
          }
        } else if (o.type === OBJECTIVE_TYPES.HACK && o.position && !o._hacking) {
          const d = p.distanceTo(o.position);
          if (d <= o.radius + 1) {
            o._hacking = true;
            o._hackStart = this.ctx.time.elapsed;
          }
        } else if (o.type === OBJECTIVE_TYPES.ESCORT && o.position) {
          const d = p.distanceTo(o.position);
          if (d <= o.radius) {
            o._escorting = true;
          }
        } else if (o.type === OBJECTIVE_TYPES.SURVIVE && o.position) {
          const d = p.distanceTo(o.position);
          if (d <= o.radius + 2) {
            o._surviving = true;
          }
        } else if (o.type === OBJECTIVE_TYPES.COLLECT) {
          for (const [spawnId, spawn] of this.itemSpawns) {
            if (spawn.collected || spawn.itemId !== o.itemId) continue;
            const d = p.distanceTo(spawn.position);
            if (d <= INTERACT_RADIUS) {
              spawn.collected = true;
              o.progress++;
              if (o.progress >= o.count) {
                o.completed = true;
                this.ctx.events.emit('mission:objective:complete', { id: o.id, label: o.label, missionId });
                this._checkMissionCompletion(inst);
              } else {
                this.ctx.events.emit('mission:objective:update', { id: o.id, label: o.label, progress: o.progress, missionId, max: o.count });
              }
            }
          }
        }
      }
    }
  }

  _checkInteractables() {
    const p = this._playerPos;
    const input = this.ctx.input;
    const interactNow = input?.actionPressed(INTERACT_KEY) ?? false;
    const justPressed = interactNow && !this._lastInteract;
    this._lastInteract = interactNow;

    if (!justPressed) return;

    let nearest = null;
    let nearDist = INTERACT_RADIUS;
    for (const [, item] of this.interactables) {
      const d = p.distanceTo(item.position);
      if (d < nearDist) {
        nearDist = d;
        nearest = item;
      }
    }

    if (nearest) {
      this.ctx.events.emit('mission:interact', { targetId: nearest.id, type: nearest.type, label: nearest.label });
    }
  }

  _checkMissionCompletion(inst) {
    const allDone = inst.objectives.every((o) => o.completed);
    if (!allDone) return;

    if (inst.choices && inst.choices.length > 0) {
      this.showChoice(inst.choices, inst.id);
      return;
    }

    inst.complete = true;
    this._grantRewards(inst);
    inst.status = MISSION_STATUS.COMPLETED;
    this.active.delete(inst.id);
    this.completed.add(inst.id);
    this.ctx.events.emit('mission:complete', { id: inst.id, title: inst.title, rewards: inst.rewards });

    for (const nextId of inst.nextMissions) {
      this._autoStartNext(nextId);
    }
  }

  _autoStartNext(id) {
    const def = getMissionById(id);
    if (!def) return;
    if (def.type === MISSION_TYPES.DYNAMIC) return;
    if (this.active.has(id) || this.completed.has(id)) return;
    const prereqsOk = def.prerequisites.every((p) => this.completed.has(p));
    if (prereqsOk) {
      this.startMission(id);
    }
  }

  _grantRewards(inst) {
    const r = inst.rewards;
    if (!r) return;
    const payload = { xp: 0, money: 0, items: [], unlocks: [] };
    if (r.xp) payload.xp = r.xp;
    if (r.money) payload.money = r.money;
    if (r.items) payload.items = r.items;
    if (r.unlocks) payload.unlocks = r.unlocks;
    this.ctx.events.emit('mission:reward', payload);
  }

  _showDialogue(inst) {
    if (!inst.dialogue.length) return;
    this.dialogue = { lines: inst.dialogue, index: 0, speaker: inst.giver ?? 'UNKNOWN' };
    this.ctx.events.emit('mission:dialogue', {
      lines: inst.dialogue,
      index: 0,
      speaker: this.dialogue.speaker,
      missionId: inst.id,
    });
  }

  _syncObjectivesToUI() {
    const ui = this._ui;
    if (!ui) return;
    const list = this.getActiveObjectives();
    if (ui.setObjectives) ui.setObjectives(list);
  }

  /* ==================================================================== */
  /* frame                                                                 */
  /* ==================================================================== */

  update(dt, ctx) {
    if (this.ctx === null) this.ctx = ctx;

    for (const [id, inst] of this.missions) {
      if (inst.status !== MISSION_STATUS.ACTIVE) continue;

      inst.timeElapsed += dt;
      if (inst.timeLimit > 0 && inst.timeElapsed >= inst.timeLimit) {
        this.failMission(id, 'timeout');
        continue;
      }

      let allDone = true;
      for (const o of inst.objectives) {
        if (o.completed) continue;
        allDone = false;

        if (o.type === OBJECTIVE_TYPES.HACK && o._hacking) {
          const elapsed = ctx.time.elapsed - (o._hackStart ?? ctx.time.elapsed);
          o.progress = Math.min(1, elapsed / o.duration);
          if (o.progress >= 1) {
            o.completed = true;
            this.ctx.events.emit('mission:objective:complete', { id: o.id, label: o.label, missionId: id });
          } else {
            this.ctx.events.emit('mission:objective:update', { id: o.id, label: o.label, progress: o.progress, missionId: id, max: 1 });
          }
        } else if (o.type === OBJECTIVE_TYPES.SURVIVE && o._surviving) {
          const waveDuration = o.duration / Math.max(1, o.waveCount);
          o.progress = Math.min(1, (o.duration * (o.waveCount / Math.max(1, o.waveCount))) / o.duration);
          if (o.progress >= 1) {
            o.completed = true;
            this.ctx.events.emit('mission:objective:complete', { id: o.id, label: o.label, missionId: id });
          }
        } else if (o.type === OBJECTIVE_TYPES.ESCORT && o._escorting) {
          const d = this._playerPos.distanceTo(o.position);
          if (d <= o.radius) {
            o.progress = 1;
            o.completed = true;
            this.ctx.events.emit('mission:objective:complete', { id: o.id, label: o.label, missionId: id });
          }
        }
      }

      if (allDone) {
        this._checkMissionCompletion(inst);
      }
    }

    this._checkFailConditions();

    this._dynamicTimer += dt;
    if (this._dynamicTimer >= this._dynamicCooldown) {
      this._dynamicTimer = 0;
      this._trySpawnDynamicEvent();
    }

    if (this.dialogue && this.ctx.input?.actionPressed(INTERACT_KEY)) {
      this.advanceDialogue();
    }

    if (this.choice && this.ctx.input) {
      for (let i = 0; i < this.choice.options.length; i++) {
        if (this.ctx.input.pressed(`Digit${i + 1}`)) {
          this.ctx.events.emit('mission:choice', { text: this.choice.options[i].text });
          break;
        }
      }
    }

    this._syncObjectivesToUI();
  }

  _checkFailConditions() {
    const playerDead = this.ctx.peek('player')?.dead ?? false;
    for (const id of this.active) {
      const inst = this.missions.get(id);
      if (!inst || inst.status !== MISSION_STATUS.ACTIVE) continue;
      for (const cond of inst.failConditions) {
        if (cond.type === 'death' && playerDead) {
          this.failMission(id, 'player_died');
          return;
        }
        if (cond.type === 'timeout' && inst.timeElapsed >= cond.limit) {
          this.failMission(id, 'timeout');
          return;
        }
      }
    }
  }

  _trySpawnDynamicEvent() {
    const available = getAvailableMissions([...this.completed]);
    const dynamics = available.filter((m) => m.type === MISSION_TYPES.DYNAMIC);
    if (!dynamics.length) return;

    const choice = dynamics[Math.floor(this.rng.float() * dynamics.length)];
    if (!choice) return;

    const cd = this._dynamicCooldowns?.get(choice.id) ?? 0;
    if (cd > 0) return;

    this._dynamicCooldowns = this._dynamicCooldowns ?? new Map();
    this._dynamicCooldowns.set(choice.id, choice.cooldown ?? 180);

    this.startMission(choice.id);
  }

  /* ==================================================================== */
  /* lateUpdate                                                            */
  /* ==================================================================== */

  lateUpdate(dt, ctx) {
    if (this._dynamicCooldowns) {
      for (const [id, t] of this._dynamicCooldowns) {
        const next = t - dt;
        if (next <= 0) this._dynamicCooldowns.delete(id);
        else this._dynamicCooldowns.set(id, next);
      }
    }
  }

  /* ==================================================================== */
  /* dispose                                                               */
  /* ==================================================================== */

  dispose() {
    for (const off of this._off ?? []) off();
    this._off.length = 0;
    this.missions.clear();
    this.active.clear();
    this.completed.clear();
    this.failed.clear();
    this.interactables.clear();
    this.itemSpawns.clear();
    this.terminals.clear();
    this.dialogue = null;
    this.choice = null;
  }
}
