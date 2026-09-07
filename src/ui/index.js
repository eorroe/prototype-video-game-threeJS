import * as THREE from 'three';
import { installStyles, removeStyles } from './style.js';
import { el, clamp, clamp01, damp, setStyle } from './util.js';
import { Crosshair } from './crosshair.js';
import { Hitmarkers } from './hitmarkers.js';
import { DamageArcs } from './damage.js';
import { HealthFx } from './health.js';
import { AmmoPanel } from './ammo.js';
import { Killfeed } from './killfeed.js';
import { Compass, MatchBar } from './compass.js';
import { Minimap } from './minimap.js';
import { WorldMarkers } from './markers.js';
import { Prompt, Banner } from './prompts.js';
import { PauseMenu } from './menu.js';
import { CombatDemo } from './demo.js';
import { MeleeHud } from './melee.js';
import { MapUI } from './map.js';
import { LoadingScreen } from './loading.js';
import { MissionPanel } from '../mission/ui.js';
import { SkillTreePanel } from '../progression/ui.js';

const MAX_BLIPS = 48;

/**
 * ===========================================================================
 * HUD / UI subsystem
 * ===========================================================================
 *
 * A DOM+CSS overlay (see style.js for the design system) driven entirely from
 * `lateUpdate`, after the camera has reached its final transform for the frame.
 * Nothing animates on a CSS keyframe or transition: every value is integrated
 * from `dt` here, which is what makes the capture harness deterministic and
 * lets the whole HUD freeze correctly when the game is paused.
 *
 * ---------------------------------------------------------------------------
 * PUBLIC API — `const ui = ctx.get('ui')`
 * ---------------------------------------------------------------------------
 *   ui.hitmarker(kind)                  'hit' | 'armour' | 'head' | 'kill'
 *   ui.damageNumber(worldPos, n, kind)  'hit' | 'hs' | 'armour' | 'kill'
 *   ui.hurt(amount, dirX, dirZ)         directional arc + flash + flinch
 *   ui.killfeed.push({attacker,victim,headshot,mine,attackerFriendly})
 *   ui.banner.show(title, sub, life)    kill / objective confirmation
 *   ui.setPrompt({key,text,sub,progress}) / ui.clearPrompt()
 *   ui.setObjectives([{position,label,name}])
 *   ui.setBlips([{x,z,kind:'enemy'|'friend',heading}])
 *   ui.spawnGrenade(worldPos, fuse)
 *   ui.setMatch({scoreUs,scoreThem,timeLeft,mode})
 *   ui.setHudVisible(bool)              hide everything (cinematics)
 *   ui.pause() / ui.resume() / ui.menu.toggle()
 *   ui.debugState('combat'|'menu'|'clean')
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS SUBSYSTEM READS FROM OTHERS (all optional, all duck-typed)
 * ---------------------------------------------------------------------------
 *   weapons.getHudState() -> { name, mode, ammo, reserve, magSize, reloading,
 *                              reloadProgress, ads, spread, lethalCount,
 *                              tacticalCount }
 *   player.getHudState()  -> { health, maxHealth, armour, maxArmour, regen,
 *                              move, sprint, crouch, ads, airborne, position }
 *                            (or plain `player.health` / `player.position`)
 *   ai.getHudActors()     -> [{ position, alive, friendly, heading }]
 *   audio.playUi(id, gain) | audio.play(id) — hit ticks, heartbeat, warnings
 *
 * Events consumed: weapon:fire, weapon:reload, damage:dealt, damage:taken,
 * actor:death, player:state, explosion, resize.
 * Events emitted:  ui:pause, ui:quality, ui:sensitivity, ui:fov, ui:setting.
 *
 * ---------------------------------------------------------------------------
 * WHAT MUST STAY ON THE MAIN THREAD (cannot be moved to a Worker)
 * ---------------------------------------------------------------------------
 *   - All DOM mutations (element creation, classList, style updates). DOM is
 *     strictly main-thread only.
 *   - All Canvas2D operations (minimap, markers, damage numbers). Canvas2D
 *     is not available in Web Workers without OffscreenCanvas, which requires
 *     a complete DOM rewrite to transfer control.
 *   - `lateUpdate()` must be synchronous: it is called every frame from the
 *     main loop and must finish before the next frame's `render()`.
 */
export class UiSystem {
  static id = 'ui';
  static deps = ['render'];

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    installStyles();

    const host = document.getElementById('ui') ?? document.body;
    this.root = el('div', 'ow-hud', host);

    // Hide the start blocker on first interaction
    const blocker = document.getElementById('blocker');
    if (blocker) {
      const hideBlocker = () => {
        blocker.classList.add('hidden');
        document.removeEventListener('mousedown', hideBlocker);
        document.removeEventListener('keydown', hideBlocker);
        setTimeout(() => this.setHudVisible(true), 400);
      };
      document.addEventListener('mousedown', hideBlocker, { once: true });
      document.addEventListener('keydown', hideBlocker, { once: true });
    }

    // Stacking order: hurt overlays sit under the HUD, the menu over everything.
    this.hurtLayer = el('div', 'ow-layer', this.root);
    this.worldLayer = el('div', 'ow-layer', this.root);
    this.centreLayer = el('div', 'ow-layer', this.root);
    this.chromeLayer = el('div', 'ow-layer', this.root);

    this.health = new HealthFx(this.hurtLayer, this.chromeLayer);
    this.markers = new WorldMarkers(this.worldLayer, this.rng.fork());
    this.arcs = new DamageArcs(this.centreLayer);
    this.crosshair = new Crosshair(this.centreLayer);
    this.hit = new Hitmarkers(this.centreLayer);
    this.minimap = new Minimap(this.chromeLayer, this.rng.fork());
    this.compass = new Compass(this.chromeLayer);
    this.matchBar = new MatchBar(this.chromeLayer);
    this.killfeed = new Killfeed(this.chromeLayer);
    this.ammo = null;
    this.prompt = new Prompt(this.chromeLayer);
    this.banner = new Banner(this.chromeLayer);
    this.menu = new PauseMenu(this.root, ctx);
    this.melee = new MeleeHud(this.chromeLayer);
    this.map = new MapUI(this.root, this.rng.fork());
    this.loading = new LoadingScreen(this.root);
    this.missionPanel = new MissionPanel(this.chromeLayer, this.rng.fork());
    this.skillTree = null;

    this.health.onBeat = (i) => this.sfx('heartbeat', 0.35 + i * 0.5);

    /** Single source of truth for everything the HUD draws. */
    this.state = {
      health: 100,
      maxHealth: 100,
      armour: 0,
      maxArmour: 150,
      regen: false,
      ammo: 30,
      reserve: 210,
      magSize: 30,
      reloading: false,
      reloadProgress: 0,
      weaponName: 'M4A1',
      fireMode: 'AUTO',
      lethalCount: 2,
      tacticalCount: 1,
      move: 0,
      sprint: false,
      crouch: false,
      ads: false,
      airborne: false,
      baseSpread: 5.5,
      scoreUs: 0,
      scoreThem: 0,
      timeLeft: 600,
      mode: 'TDM',
      /** true when no player/weapons subsystem is driving us (stub-safe demo) */
      simulate: false,
      hasWeapon: false,
      time: 0,
    };

    this.k = 1;
    this.vw = 1920;
    this.vh = 1080;
    this.hudVisible = 0;
    this.hudTarget = 0;
    this._hudRevealTimer = null;

    this.loading = new LoadingScreen(this.root);
    this._lastKillAt = -10;
    this._regenTimer = 0;
    this._hadPointerLock = false;
    this._bakeFrame = 0;

    this._pos = new THREE.Vector3();
    this._prevPos = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this._tmp = new THREE.Vector3();
    this._objectives = [];
    this._compassObjs = [];
    this._blips = new Array(MAX_BLIPS);
    for (let i = 0; i < MAX_BLIPS; i++) this._blips[i] = { x: 0, z: 0, kind: 'enemy', heading: 0 };
    this._blipCount = 0;
    this._blipView = [];

    this.demo = null;

    this._unsubs = [];
    const on = (type, fn) => this._unsubs.push(ctx.events.on(type, fn));

    on('weapon:fire', (e) => {
      this.crosshair.onFire(e?.recoil ?? 1);
      if (this.state.simulate) return;
      const w = this._weaponState();
      if (!w) this.state.ammo = Math.max(0, this.state.ammo - 1);
    });

    on('weapon:reload', (e) => {
      const s = this.state;
      if (e?.phase === 'start') {
        s.reloading = true;
        s.reloadProgress = 0;
      } else if (e?.phase === 'end') {
        s.reloading = false;
        if (!this._weaponState()) {
          const take = Math.min(s.magSize - s.ammo, s.reserve);
          s.ammo += take;
          s.reserve -= take;
        }
      }
    });

    on('damage:dealt', (e) => {
      if (!e) return;
      // The payload means "damage dealt TO e.target". `ai` uses it for enemy
      // rounds that connect with the player, which must not draw a hitmarker or
      // a "YOU killed" killfeed row — that arrives as `damage:taken` below.
      if (this._isPlayerTarget(e.target)) return;
      const kind = e.killed ? 'kill' : e.headshot ? 'head' : e.armour ? 'armour' : 'hit';
      this.hitmarker(kind);
      if (e.point) {
        this.damageNumber(
          e.point,
          e.amount ?? 0,
          e.killed ? 'kill' : e.headshot ? 'hs' : e.armour ? 'armour' : 'hit'
        );
      }
      if (e.killed) {
        this._lastKillAt = ctx.time.elapsed;
        this.killfeed.push({
          attacker: 'YOU',
          victim: e.target?.name ?? e.name ?? 'ENEMY',
          headshot: !!e.headshot,
          mine: true,
        });
        this.banner.show('Enemy Eliminated', e.headshot ? '+150 XP · HEADSHOT' : '+100 XP');
        this.state.scoreUs++;
      }
    });

    on('damage:taken', (e) => {
      const amount = e?.amount ?? 10;
      if (e?.health !== undefined) this.state.health = e.health;
      else this.state.health = Math.max(0, this.state.health - amount);
      let dx = 0;
      let dz = 1;
      if (e?.from) {
        this._tmp.copy(e.from).sub(this._playerPos());
        dx = this._tmp.x;
        dz = this._tmp.z;
      }
      this.hurt(amount, dx, dz);
    });

    on('actor:death', (e) => {
      if (ctx.time.elapsed - this._lastKillAt < 0.3) return; // already credited
      this.killfeed.push({
        attacker: e?.by?.name ?? 'ENEMY',
        victim: e?.actor?.name ?? 'OPERATOR',
        attackerFriendly: false,
      });
    });

    on('explosion', (e) => {
      if (!e?.position) return;
      this._tmp.copy(e.position).sub(this._playerPos());
      const d = this._tmp.length();
      if (d < (e.radius ?? 6) * 2.5) this.crosshair.onFlinch(0.6);
    });

    on('player:state', (e) => {
      if (!e) return;
      const s = this.state;
      if (e.ads !== undefined) s.ads = !!e.ads;
      if (e.sprinting !== undefined) s.sprint = !!e.sprinting;
      if (e.stance !== undefined) s.crouch = e.stance === 'crouch' || e.stance === 'prone';
    });

    on('melee:hit', (e) => {
      if (!e) return;
      const kind = e.killed ? 'kill' : e.headshot ? 'head' : 'hit';
      this.hitmarker(kind);
      if (e.point) {
        this.damageNumber(e.point, e.amount ?? 0, e.killed ? 'kill' : e.headshot ? 'hs' : 'hit');
      }
      if (e.comboCount >= 3) {
        this.banner.show(`COMBO x${e.comboCount}`, e.comboCount >= 5 ? 'MASSACRE' : 'BRUTAL', 1.2);
      }
      if (e.limb?.severed) {
        this.melee?.showDismemberment?.(e.limb.name);
      }
    });

    on('melee:dismember', (e) => {
      if (!e) return;
      this.melee?.showDismemberment?.(e.limb);
    });

    on('melee:perfect_parry', (e) => {
      this.melee?.showParry?.();
      this.crosshair.onHit();
    });

    on('mission:start', (e) => {
      if (!e) return;
      this.missionPanel.showBrief(e.title, e.description, 6);
      this.banner.show(e.title, e.type === 'main' ? 'MISSION STARTED' : 'OBJECTIVE AVAILABLE', 4);
    });

    on('mission:complete', (e) => {
      if (!e) return;
      this.missionPanel.showRewards('MISSION COMPLETE', e.rewards);
      this.banner.show(e.title, 'COMPLETED', 3.5);
    });

    on('mission:fail', (e) => {
      if (!e) return;
      this.banner.show('MISSION FAILED', e.reason ?? '', 4);
    });

    on('mission:dialogue', (e) => {
      if (!e) return;
      this.missionPanel.showDialogue(e.speaker, e.lines[e.index] ?? '', 'PRESS F');
    });

    on('mission:dialogue:hide', () => {
      this.missionPanel.hideDialogue();
    });

    on('mission:choice', (e) => {
      if (!e?.options?.length) return;
      this.missionPanel.showChoices(e.options);
      this.prompt.set({ key: '1-2', text: 'CHOOSE', sub: 'Press 1 or 2' });
    });

    on('mission:complete', (e) => {
      if (!e) return;
      this.banner.show(e.label, 'COMPLETED', 2.5);
    });

    on('mission:reward', (e) => {
      if (!e?.xp) return;
      this.state.scoreUs += (e.xp / 100) | 0;
    });

    on('progression:state', () => this._syncSkillTree());

    this.resize(ctx.canvas.clientWidth || innerWidth, ctx.canvas.clientHeight || innerHeight, ctx);
    this._prevPos.copy(this._playerPos());
  }

  _ensureSkillTree() {
    if (!this.skillTree) {
      this.skillTree = new SkillTreePanel(this.root, this.ctx);
    }
    return this.skillTree;
  }

  /* ------------------------------------------------------------- helpers -- */

  _weaponState() {
    const w = this.ctx.peek('weapons');
    if (!w) return null;
    const s = typeof w.getHudState === 'function' ? w.getHudState() : w.hudState ?? null;
    return s && typeof s === 'object' ? s : null;
  }

  /** True when a `damage:dealt` payload is aimed at the local player. */
  _isPlayerTarget(t) {
    if (!t) return false;
    return t === 'player' || t === this.ctx.peek('player') || t.isPlayer === true;
  }

  _playerState() {
    const p = this.ctx.peek('player');
    if (!p) return null;
    const s = typeof p.getHudState === 'function' ? p.getHudState() : p.hudState ?? null;
    return s && typeof s === 'object' ? s : null;
  }

  _playerPos() {
    const p = this.ctx.peek('player');
    const pos = p?.position ?? p?.getPosition?.();
    if (pos && pos.isVector3) return this._pos.copy(pos);
    return this._pos.copy(this.ctx.camera.position);
  }

  /** Fire-and-forget audio; the audio subsystem may not exist yet. */
  sfx(id, gain = 1) {
    const a = this.ctx.peek('audio');
    if (!a) return;
    try {
      if (typeof a.playUi === 'function') a.playUi(id, gain);
      else if (typeof a.play === 'function') a.play(id, { gain });
      else if (typeof a.sfx === 'function') a.sfx(id, gain);
    } catch {
      /* audio is optional feedback — never let it break the HUD */
    }
  }

  /* ---------------------------------------------------------------- api --- */

  hitmarker(kind = 'hit') {
    this.hit.spawn(kind);
    this.crosshair.onHit();
    this.sfx(
      kind === 'kill' ? 'hit_kill' : kind === 'head' ? 'hit_head' : kind === 'armour' ? 'hit_armour' : 'hit_flesh',
      kind === 'kill' ? 1 : 0.7
    );
  }

  damageNumber(worldPos, amount, kind = 'hit') {
    this.markers.spawnDamage(worldPos, amount, kind);
  }

  /** Incoming damage: arc toward the source, screen flash, reticle flinch. */
  hurt(amount = 10, dirX = 0, dirZ = 1) {
    const i = clamp01(amount / 40);
    this.arcs.spawn(dirX, dirZ, 0.45 + i * 0.55);
    this.health.onDamage(i);
    this.crosshair.onFlinch(0.5 + i);
    this._regenTimer = 0;
    this.state.regen = false;
    this.sfx('player_hurt', 0.6 + i * 0.4);
  }

  setPrompt(p) {
    this.prompt.set(p);
  }

  clearPrompt() {
    this.prompt.clear();
  }

  setObjectives(list) {
    this._objectives = list ?? [];
  }

  addObjective(o) {
    this._objectives.push(o);
  }

  removeObjective(id) {
    const i = this._objectives.findIndex((o) => o.id === id);
    if (i >= 0) this._objectives.splice(i, 1);
  }

  /** Copies into a preallocated array — the caller's array is not retained. */
  setBlips(list) {
    const n = Math.min(list?.length ?? 0, MAX_BLIPS);
    for (let i = 0; i < n; i++) {
      const src = list[i];
      const dst = this._blips[i];
      dst.x = src.x ?? src.position?.x ?? 0;
      dst.z = src.z ?? src.position?.z ?? 0;
      dst.kind = src.kind ?? (src.friendly ? 'friend' : 'enemy');
      dst.heading = src.heading ?? 0;
    }
    this._blipCount = n;
  }

  spawnGrenade(worldPos, fuse = 2.4) {
    this.markers.spawnGrenade(worldPos, fuse);
    this.sfx('grenade_warn', 0.6);
  }

  setMatch(m) {
    Object.assign(this.state, m);
  }

  setHudVisible(v) {
    this.hudTarget = v ? 1 : 0;
  }

  pause() {
    this.menu.show();
  }

  resume() {
    this.menu.close();
  }

  /* --------------------------------------------------------------- debug -- */

  /**
   * Populate a representative state for screenshots / critics.
   * 'combat' runs the scripted firefight timeline in demo.js.
   */
  debugState(name = 'combat') {
    if (name === 'clean') {
      this.demo?.stop(this);
      this.demo = null;
      this.state.simulate = false;
      this.killfeed.clear();
      this.arcs.clear();
      this.hit.clear();
      this.markers.clear();
      this.clearPrompt();
      if (this.ammo) {
        this.ammo.dispose();
        this.ammo = null;
      }
      return { state: 'clean' };
    }
    if (name === 'menu') {
      this.debugState('combat');
      this.menu.show();
      return { state: 'menu' };
    }
    if (!this.demo) this.demo = new CombatDemo();
    this.demo.start(this);
    return { state: 'combat', frames: 'timeline keyed to frame 90' };
  }

  /* -------------------------------------------------------------- frame --- */

  lateUpdate(dt, ctx) {
    const t = ctx.time;
    const rawDt = clamp(t.raw - this._lastRaw, 0, 0.1);
    this._lastRaw = t.raw;
    const s = this.state;
    s.time = t.elapsed;

    // ---- pause -----------------------------------------------------------
    if (ctx.input.enabled && !ctx.input.frozen) {
      if (ctx.input.actionPressed('pause')) this.menu.toggle();
      if (ctx.input.pressed('KeyK')) {
        const st = this._ensureSkillTree();
        st.toggle();
      }
      if (ctx.input.pressed('KeyM')) {
        this.map.toggle();
      }
      // Losing pointer lock mid-match is the same intent as pressing Escape.
      if (ctx.input.pointerLocked) this._hadPointerLock = true;
      else if (this._hadPointerLock && !this.menu.open) {
        this._hadPointerLock = false;
        this.menu.show();
      }
    }
    this.menu.update(rawDt);

    // ---- external state --------------------------------------------------
    // `simulate` means a scripted debug timeline owns the HUD numbers; letting
    // the live weapon/player state through would fight it every frame.
    const ws = s.simulate ? null : this._weaponState();
    s.hasWeapon = s.simulate ? true : !!ws && !!ws.name;
    if (s.hasWeapon) {
      if (!this.ammo) this.ammo = new AmmoPanel(this.chromeLayer);
    } else if (this.ammo) {
      this.ammo.dispose();
      this.ammo = null;
    }
    if (ws) {
      if (ws.name) s.weaponName = ws.name;
      if (ws.mode) s.fireMode = ws.mode;
      if (ws.ammo !== undefined) s.ammo = ws.ammo;
      if (ws.reserve !== undefined) s.reserve = ws.reserve;
      if (ws.magSize !== undefined) s.magSize = ws.magSize;
      if (ws.reloading !== undefined) s.reloading = !!ws.reloading;
      if (ws.reloadProgress !== undefined) s.reloadProgress = ws.reloadProgress;
      if (ws.ads !== undefined) s.ads = !!ws.ads;
      if (ws.spread !== undefined) s.baseSpread = 4 + ws.spread * 40;
      if (ws.lethalCount !== undefined) s.lethalCount = ws.lethalCount;
      if (ws.tacticalCount !== undefined) s.tacticalCount = ws.tacticalCount;
    }

    const ps = s.simulate ? null : this._playerState();
    const player = ctx.peek('player');
    if (ps) {
      if (ps.health !== undefined) s.health = ps.health;
      if (ps.maxHealth !== undefined) s.maxHealth = ps.maxHealth;
      if (ps.armour !== undefined) s.armour = ps.armour;
      else if (ps.armor !== undefined) s.armour = ps.armor;
      if (ps.regen !== undefined) s.regen = !!ps.regen;
      if (ps.move !== undefined) s.move = ps.move;
      if (ps.sprint !== undefined) s.sprint = !!ps.sprint;
      if (ps.crouch !== undefined) s.crouch = !!ps.crouch;
      if (ps.ads !== undefined) s.ads = !!ps.ads;
      if (ps.airborne !== undefined) s.airborne = !!ps.airborne;
    } else if (player && typeof player.health === 'number') {
      s.health = player.health;
    }

    // ---- movement-derived reticle bloom (works with any player system) ----
    const pos = this._playerPos();
    if (!ps && !s.simulate) {
      this._dir.copy(pos).sub(this._prevPos);
      this._dir.y = 0;
      const speed = dt > 0 ? this._dir.length() / dt : 0;
      s.move = damp(s.move, clamp01(speed / 6.2), 12, Math.max(rawDt, 1e-3));
      if (!this._weaponState()) s.ads = ctx.input.ads && ctx.input.enabled;
    }
    this._prevPos.copy(pos);

    // ---- health regeneration when nobody else owns health ----------------
    if (!ps && !s.simulate && s.health < s.maxHealth) {
      this._regenTimer += dt;
      if (this._regenTimer > 4.5) {
        if (!s.regen) {
          s.regen = true;
          this.health.onRegenStart();
          this.sfx('regen', 0.4);
        }
        s.health = Math.min(s.maxHealth, s.health + dt * 24);
      }
    }

    // ---- demo timeline ---------------------------------------------------
    if (this.demo?.active) this.demo.update(this, dt);

    // ---- fast travel -----------------------------------------------------
    const ft = ctx.peek('fasttravel');
    if (ft) {
      if (ft.isTraveling()) {
        this.loading.show(ft.getCurrentTip());
        this.loading.setProgress(ft.getProgress());
        this.map.hide();
      } else {
        this.loading.hide();
        // Show prompt near safe houses
        const nearby = ft.discoverNearby(pos.x, pos.z);
        if (nearby && !ft.isUnlocked(nearby.id)) {
          this.setPrompt({ key: 'interact', text: `Discover ${nearby.label}`, sub: 'Press E' });
        } else if (ft.getAvailable().length > 1) {
          this.setPrompt({ key: 'map', text: 'Fast Travel', sub: 'Press M for map' });
        }
      }
    }

    // ---- map --------------------------------------------------------------
    if (this.map._visible) {
      this.map.draw(this._mmState);
    }

    // ---- ai blips --------------------------------------------------------
    this._collectBlips();

    // ---- camera basis ----------------------------------------------------
    const m = ctx.camera.matrixWorld.elements;
    let rx = m[0];
    let rz = m[2];
    let fx = -m[8];
    let fz = -m[10];
    const rl = Math.hypot(rx, rz) || 1;
    const fl = Math.hypot(fx, fz) || 1;
    rx /= rl;
    rz /= rl;
    fx /= fl;
    fz /= fl;
    const heading = (Math.atan2(fx, -fz) * 180) / Math.PI;

    // ---- widgets ---------------------------------------------------------
    const hudGoal = this.hudTarget * (this.menu.open ? 0.15 : 1);
    this.hudVisible = damp(this.hudVisible, hudGoal, 10, rawDt);
    setStyle(this.chromeLayer, 'opacity', this.hudVisible.toFixed(3));
    setStyle(this.worldLayer, 'opacity', this.hudVisible.toFixed(3));
    setStyle(this.centreLayer, 'opacity', this.hudVisible.toFixed(3));

    this.crosshair.update(dt, s);
    this.hit.update(dt);
    this.arcs.update(dt, rx, rz, fx, fz);
    this.health.update(dt, s);
    if (this.ammo) this.ammo.update(dt, s);
    this.killfeed.update(dt);
    this.matchBar.update(s);
    this.prompt.update(dt);
    this.banner.update(dt);
    this.missionPanel.update(dt, this);
    this.missionPanel.setObjectives(this._objectives);
    if (this.skillTree?.open) this.skillTree.update(dt, ctx);
    this.melee?.update?.(dt, s);

    this._buildCompassObjectives(pos);
    this.compass.update(heading, this._compassObjs);

    this.markers.updateObjectives(this._objectives, ctx.camera, this.vw, this.vh, this.k);
    this.markers.updateGrenades(dt, ctx.camera, this.vw, this.vh, this.k);
    this.markers.updateDamage(dt, ctx.camera, this.vw, this.vh, this.k);

    // ---- minimap ---------------------------------------------------------
    if (!this.minimap.bakeDone && ++this._bakeFrame > 6 && this._bakeFrame % 20 === 0) {
      this.minimap.tryBake(ctx);
    }
    this._blipView.length = this._blipCount;
    for (let i = 0; i < this._blipCount; i++) this._blipView[i] = this._blips[i];
    this._mmState = this._mmState ?? { x: 0, z: 0, heading: 0, fov: 80, blips: null, objectives: null };
    this._mmState.x = pos.x;
    this._mmState.z = pos.z;
    this._mmState.heading = heading;
    this._mmState.fov = ctx.camera.fov;
    this._mmState.blips = this._blipView;
    this._mmState.objectives = this._mmObjs ?? (this._mmObjs = []);
    this._mmObjs.length = 0;
    for (const o of this._objectives) {
      if (!o.position) continue;
      this._mmObjs.push(o._mm ?? (o._mm = { x: 0, z: 0, label: o.label }));
      const last = this._mmObjs[this._mmObjs.length - 1];
      last.x = o.position.x;
      last.z = o.position.z;
      last.label = o.label;
    }
    this.minimap.draw(this._mmState);
  }

  _collectBlips() {
    if (this.demo?.active) return; // demo drives its own contacts
    const ai = this.ctx.peek('ai');
    const list = typeof ai?.getHudActors === 'function' ? ai.getHudActors() : ai?.actors ?? null;
    if (!Array.isArray(list)) return;
    let n = 0;
    for (let i = 0; i < list.length && n < MAX_BLIPS; i++) {
      const a = list[i];
      const p = a?.position ?? a?.pos;
      if (!p || a.alive === false || a.dead === true) continue;
      const b = this._blips[n++];
      b.x = p.x;
      b.z = p.z;
      b.kind = a.friendly ? 'friend' : 'enemy';
      b.heading = a.heading ?? (a.yaw !== undefined ? (a.yaw * 180) / Math.PI : 0);
    }
    this._blipCount = n;
  }

  _buildCompassObjectives(pos) {
    const out = this._compassObjs;
    out.length = 0;
    for (const o of this._objectives) {
      if (!o.position) continue;
      const dx = o.position.x - pos.x;
      const dz = o.position.z - pos.z;
      const bearing = (Math.atan2(dx, -dz) * 180) / Math.PI;
      out.push(o._cmp ?? (o._cmp = { bearing: 0, label: o.label, color: o.color }));
      const last = out[out.length - 1];
      last.bearing = bearing;
      last.label = o.label;
      last.color = o.color;
    }
    return out;
  }

  _syncSkillTree() {
    this.skillTree?._sync();
  }

  resize(w, h, ctx) {
    this.vw = w;
    this.vh = h;
    this.k = clamp(h / 1080, 0.62, 2.4);
    this.root.style.setProperty('--k', this.k.toFixed(4));
    this.crosshair.setScale(this.k);
    this.compass.setScale(this.k);
    this.minimap.resize(this.k);
    this.missionPanel?.resize?.(w, h);
  }

  dispose() {
    for (const off of this._unsubs) off();
    this._unsubs.length = 0;
    this.crosshair.dispose();
    this.hit.dispose();
    this.arcs.dispose();
    this.health.dispose();
    if (this.ammo) this.ammo.dispose();
    this.killfeed.dispose();
    this.compass.dispose();
    this.matchBar.dispose();
    this.minimap.dispose();
    this.markers.dispose();
    this.prompt.dispose();
    this.banner.dispose();
    this.menu.dispose();
    this.map.dispose();
    this.loading.dispose();
    this.root.remove();
    removeStyles();
  }
}
