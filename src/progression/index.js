import * as THREE from 'three';
import { BRANCHES, XP_SOURCES, LEVEL_CAP, xpForLevel, skillPointsForLevel } from './skill-tree.js';
import { saveProgression, loadProgression, clearProgression } from './storage.js';

export class ProgressionSystem {
  static id = 'progression';
  static deps = ['events'];

  constructor() {
    this.level = 1;
    this.xp = 0;
    this.skillPoints = 1;
    this.unlockedNodes = new Set();
    this.activeAbilities = new Set();
    this.evolutionEnergy = 100;
    this.maxEvolutionEnergy = 100;
    this.evolutionEnergyRegenRate = 10;
    this.transforming = false;

    this._totalXp = 0;
    this._pendingXp = [];
    this._abilityCooldowns = new Map();
    this._abilityActive = new Map();
    this._xQueue = [];
    this._lastSave = 0;
  }

  async init(ctx) {
    this.ctx = ctx;
    this.events = ctx.events;
    this._off = [];

    const on = (type, fn) => this._off.push(this.events.on(type, fn));
    on('actor:death', (e) => this._onKill(e));
    on('mission:complete', (e) => this._onMission(e));
    on('area:discover', (e) => this._onDiscovery(e));
    on('player:death', () => this._onDeath());
    on('progression:spend', (e) => this._onSpend(e));

    const saved = loadProgression();
    if (saved) {
      this.level = saved.level ?? 1;
      this.xp = saved.xp ?? 0;
      this.skillPoints = saved.skillPoints ?? 1;
      this.unlockedNodes = new Set(saved.unlockedNodes ?? []);
      this.activeAbilities = new Set(saved.activeAbilities ?? []);
      this.evolutionEnergy = saved.evolutionEnergy ?? 100;
      this._totalXp = this._xpTotalFromLevel(this.level) + this.xp;
    }

    this._emitState();
  }

  _xpTotalFromLevel(level) {
    let total = 0;
    for (let l = 1; l < level; l++) total += xpForLevel(l);
    return total;
  }

  _onKill(e) {
    if (!e || e.by !== this._player()) return;
    const src = XP_SOURCES.kill;
    let amount = src.base;
    if (e.headshot) amount += src.headshot;
    if (e.melee) amount += src.melee;
    this._grantXp(amount, 'kill');
  }

  _onMission(e) {
    if (!e) return;
    let amount = 0;
    if (e.objective) amount += XP_SOURCES.mission.objective;
    if (e.completion) amount += XP_SOURCES.mission.completion;
    if (amount > 0) this._grantXp(amount, 'mission');
  }

  _onDiscovery(e) {
    if (!e) return;
    let amount = 0;
    if (e.area) amount += XP_SOURCES.discovery.area;
    if (e.secret) amount += XP_SOURCES.discovery.secret;
    if (amount > 0) this._grantXp(amount, 'discovery');
  }

  _onDeath() {
    this._abilityActive.clear();
  }

  _onSpend(e) {
    if (!e) return;
    if (e.type === 'node') {
      this.unlockedNodes.add(e.nodeId);
      this.skillPoints = Math.max(0, this.skillPoints - 1);
    } else if (e.type === 'ability') {
      this.activeAbilities.add(e.ability);
      this.evolutionEnergy = Math.max(0, this.evolutionEnergy - (e.cost ?? 20));
    }
    this._recalcBonuses();
    this._emitState();
    this._autoSave();
  }

  _grantXp(amount, source) {
    this._totalXp += amount;
    this._pendingXp.push({ amount, source, time: this.ctx.time.elapsed });
    this._xQueue.push(amount);
    while (this._pendingXp.length > 60) this._pendingXp.shift();
  }

  _tryLevelUp() {
    let leveled = false;
    while (this.level < LEVEL_CAP) {
      const needed = xpForLevel(this.level);
      if (this.xp < needed) break;
      this.xp -= needed;
      this.level++;
      this.skillPoints += skillPointsForLevel(this.level - 1);
      this.maxEvolutionEnergy += 10;
      this.evolutionEnergy = this.maxEvolutionEnergy;
      this.events.emit('progression:levelup', { level: this.level, skillPoints: this.skillPoints });
      leveled = true;
    }
    if (leveled) this._emitState();
  }

  update(dt) {
    const now = this.ctx.time.elapsed;
    let totalGained = 0;
    for (const p of this._pendingXp) {
      if (now - p.time > 0.05) {
        this.xp += p.amount;
        totalGained += p.amount;
        p.consumed = true;
      }
    }
    this._pendingXp = this._pendingXp.filter((p) => !p.consumed);
    if (totalGained > 0) this._tryLevelUp();

    this._updateAbilities(dt);
    this._updateEvolutionEnergy(dt);

    if (now - this._lastSave > 10) {
      this._lastSave = now;
      this._autoSave();
    }
  }

  _updateAbilities(dt) {
    for (const [key, data] of this._abilityActive) {
      data.remaining -= dt;
      if (data.remaining <= 0) {
        this._abilityActive.delete(key);
        this.events.emit('progression:ability_end', { ability: key });
      }
    }
    for (const [key, cd] of this._abilityCooldowns) {
      cd.remaining -= dt;
      if (cd.remaining <= 0) this._abilityCooldowns.delete(key);
    }
  }

  _updateEvolutionEnergy(dt) {
    const rate = this.transforming ? this.evolutionEnergyRegenRate * 0.3 : this.evolutionEnergyRegenRate;
    this.evolutionEnergy = Math.min(this.maxEvolutionEnergy, this.evolutionEnergy + rate * dt);
  }

  canActivateAbility(ability) {
    if (this._abilityActive.has(ability)) return false;
    const cd = this._abilityCooldowns.get(ability);
    if (cd && cd.remaining > 0) return false;
    const node = this._findNodeByAbility(ability);
    const cost = node ? 20 : 20;
    return this.evolutionEnergy >= cost && this.activeAbilities.has(ability);
  }

  activateAbility(ability) {
    if (!this.canActivateAbility(ability)) return false;
    const node = this._findNodeByAbility(ability);
    const cost = 20;
    this.evolutionEnergy -= cost;
    const nodeData = BRANCHES[this._branchOf(ability)];
    const def = nodeData?.nodes.find((n) => n.effects?.ability === ability);
    const duration = def?.effects?.duration ?? 5;
    this._abilityActive.set(ability, { remaining: duration, max: duration });
    this._abilityCooldowns.set(ability, { remaining: (def?.effects?.cooldown ?? 30), max: def?.effects?.cooldown ?? 30 });
    this.events.emit('progression:ability_start', { ability, duration, cooldown: def?.effects?.cooldown ?? 30 });
    this._emitState();
    return true;
  }

  _findNodeByAbility(ability) {
    for (const branch of Object.values(BRANCHES)) {
      const node = branch.nodes.find((n) => n.effects?.ability === ability);
      if (node) return node;
    }
    return null;
  }

  _branchOf(nodeOrAbility) {
    const id = typeof nodeOrAbility === 'string' ? nodeOrAbility : nodeOrAbility.id;
    const prefix = id?.charAt(0);
    for (const [key, branch] of Object.entries(BRANCHES)) {
      if (branch.nodes.some((n) => n.id === id)) return key;
    }
    return null;
  }

  _recalcBonuses() {
    this._bonuses = this._computeBonuses();
  }

  _computeBonuses() {
    const bonuses = {
      damageResistance: 0,
      healthRegenMult: 1,
      transformCooldownMult: 1,
      maxHealthMult: 1,
      meleeDamageMult: 1,
      fireRateMult: 1,
      reloadSpeedMult: 1,
      sprintSpeedMult: 1,
      jumpHeightMult: 1,
      wallRunDurationMult: 1,
      fallDamageMult: 1,
      noiseMult: 1,
      detectionRangeMult: 1,
      backstabMeleeMult: 1,
      damageMult: 1,
      defenseMult: 1,
      speedMult: 1,
      inventorySize: 0,
    };

    const unlocked = [...this.unlockedNodes];
    for (const nodeId of unlocked) {
      for (const branch of Object.values(BRANCHES)) {
        const node = branch.nodes.find((n) => n.id === nodeId);
        if (!node) continue;
        const fx = node.effects;
        if (!fx) continue;
        if (fx.damageResistance) bonuses.damageResistance += fx.damageResistance;
        if (fx.healthRegenMult) bonuses.healthRegenMult *= fx.healthRegenMult;
        if (fx.transformCooldownMult) bonuses.transformCooldownMult *= fx.transformCooldownMult;
        if (fx.maxHealthMult) bonuses.maxHealthMult *= fx.maxHealthMult;
        if (fx.meleeDamageMult) bonuses.meleeDamageMult *= fx.meleeDamageMult;
        if (fx.fireRateMult) bonuses.fireRateMult *= fx.fireRateMult;
        if (fx.reloadSpeedMult) bonuses.reloadSpeedMult *= fx.reloadSpeedMult;
        if (fx.sprintSpeedMult) bonuses.sprintSpeedMult *= fx.sprintSpeedMult;
        if (fx.jumpHeightMult) bonuses.jumpHeightMult *= fx.jumpHeightMult;
        if (fx.wallRunDurationMult) bonuses.wallRunDurationMult *= fx.wallRunDurationMult;
        if (fx.fallDamageMult) bonuses.fallDamageMult *= fx.fallDamageMult;
        if (fx.noiseMult) bonuses.noiseMult *= fx.noiseMult;
        if (fx.detectionRangeMult) bonuses.detectionRangeMult *= fx.detectionRangeMult;
        if (fx.backstabMeleeMult) bonuses.backstabMeleeMult *= fx.backstabMeleeMult;
        if (fx.damageMult) bonuses.damageMult *= fx.damageMult;
        if (fx.defenseMult) bonuses.defenseMult *= fx.defenseMult;
        if (fx.speedMult) bonuses.speedMult *= fx.speedMult;
        if (fx.inventorySize) bonuses.inventorySize += fx.inventorySize;
      }
    }
    return bonuses;
  }

  get bonuses() {
    if (!this._bonuses) this._recalcBonuses();
    return this._bonuses;
  }

  spendSkillPoint(nodeId) {
    const branch = this._branchOf(nodeId);
    const branchData = branch ? BRANCHES[branch] : null;
    if (!branchData) return false;
    const node = branchData.nodes.find((n) => n.id === nodeId);
    if (!node) return false;
    if (this.unlockedNodes.has(nodeId)) return false;
    if (this.skillPoints < node.cost) return false;
    const idx = branchData.nodes.indexOf(node);
    if (idx > 0) {
      const prev = branchData.nodes[idx - 1];
      if (!this.unlockedNodes.has(prev.id)) return false;
    }
    this.events.emit('progression:spend', { type: 'node', nodeId, cost: node.cost });
    return true;
  }

  respec() {
    this.unlockedNodes.clear();
    this.activeAbilities.clear();
    this._abilityActive.clear();
    this._abilityCooldowns.clear();
    this.skillPoints = skillPointsForLevel(this.level);
    this._recalcBonuses();
    this._emitState();
    this._autoSave();
    this.events.emit('progression:respec', { skillPoints: this.skillPoints });
  }

  isAtSafeHouse() {
    const p = this.ctx.peek('player');
    return !!p?.atSafeHouse;
  }

  _emitState() {
    const payload = {
      level: this.level,
      xp: this.xp,
      xpNeeded: xpForLevel(this.level),
      skillPoints: this.skillPoints,
      unlockedNodes: [...this.unlockedNodes],
      activeAbilities: [...this.activeAbilities],
      evolutionEnergy: this.evolutionEnergy,
      maxEvolutionEnergy: this.maxEvolutionEnergy,
      bonuses: this.bonuses,
      xpQueue: [...this._xQueue],
      canRespec: this.isAtSafeHouse(),
    };
    this.events.emit('progression:state', payload);
    this._xQueue.length = 0;
  }

  _autoSave() {
    saveProgression({
      level: this.level,
      xp: this.xp,
      skillPoints: this.skillPoints,
      unlockedNodes: [...this.unlockedNodes],
      activeAbilities: [...this.activeAbilities],
      evolutionEnergy: this.evolutionEnergy,
    });
  }

  _player() {
    return this.ctx.peek('player');
  }

  getHudState() {
    return {
      level: this.level,
      xp: this.xp,
      xpNeeded: xpForLevel(this.level),
      skillPoints: this.skillPoints,
      evolutionEnergy: this.evolutionEnergy,
      maxEvolutionEnergy: this.maxEvolutionEnergy,
      xpQueue: [...this._xQueue],
    };
  }

  dispose() {
    for (const off of this._off) off();
    this._off.length = 0;
    this._autoSave();
  }
}
