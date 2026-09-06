/**
 * PLAYER — movement state machine, camera feel, health.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * WHAT LIVES HERE
 *   movement.js   the state machine: stand/crouch/prone/sprint/tacsprint/slide/
 *                 jump/fall/mantle/vault (+ lean). 120 Hz, fully interruptible.
 *   camera.js     bob, landing dip, step shift, strafe/turn roll, breathing
 *                 sway, recoil + weapon kick channels, trauma shake, FOV.
 *   mantle.js     ledge detection via physics capsule sweeps + the rooted climb.
 *   health.js     health, regen, suppression, damage direction, heartbeat.
 *   lowhealth.js  the low-health screen treatment, registered with `render`.
 *   tuning.js     every number, with the CoD values it was calibrated against.
 *   springs.js    spring/damper + easing maths.
 *
 * Collision is *never* computed here — everything goes through
 * `physics.createCharacter()` capsule sweeps.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * PUBLIC API — `const p = ctx.get('player')`
 * ────────────────────────────────────────────────────────────────────────────
 * TRANSFORM
 *   p.position        Vector3, FEET (bottom of the capsule), interpolated
 *   p.eyePosition     Vector3, the composed camera position
 *   p.velocity        Vector3, m/s
 *   p.forward         Vector3, unit view forward
 *   p.yaw / p.pitch   radians (yaw is the movement basis, camera adds feel)
 *   p.speed / p.horizontalSpeed
 *   p.character       the physics CharacterController (read-only)
 *   p.height          capsule height of the current stance
 *   p.hitbox          physics collider on LAYER.PLAYER — trace against the
 *                     player with `phys.MASK.BULLET | phys.LAYER.PLAYER`
 *
 * STATE
 *   p.state           'stand'|'crouch'|'prone'|'sprint'|'tacsprint'|'slide'|
 *                     'jump'|'fall'|'mantle'|'vault'|'lean'
 *   p.stance          'stand'|'crouch'|'prone'
 *   p.sprinting  p.tacticalSprint  p.sliding  p.grounded  p.airborne
 *   p.mantling   p.leanAmount (-1..1)   p.slideProgress (0..1)
 *
 * AIM
 *   p.adsRequested            true while the aim button is held
 *   p.adsProgress             0..1 blend actually in use
 *   p.setAdsProgress(v)       `weapons` owns the real curve — push it here and
 *                             the camera FOV, sway and move speed follow it
 *
 * CAMERA FEEL (for `weapons`, `fx`, `ai`)
 *   p.addRecoil(pitch, yaw, roll, punch)   camera-owned recoil impulse (radians)
 *   p.addKick(pitch, yaw, roll)            independent weapon kick channel
 *   p.addTrauma(a)                         0..1 noise shake (explosions, hits)
 *   p.viewKick                             { pitch, yaw, roll, punch } this frame
 *   p.cameraRig                            the rig, if you need the raw springs
 *
 * HEALTH
 *   p.health  p.maxHealth  p.healthFraction  p.lowHealth  p.dead
 *   p.suppression  p.damageIndicators
 *   p.applyDamage(amount, fromVector3, opts)   p.heal(a)   p.addSuppression(a)
 *
 * CONTROL
 *   p.setControlEnabled(bool)     shot harness / cutscenes
 *   p.teleport(eyePosition, rotationEulerOrYaw)
 *   p.respawn(index)
 *   p.debugState(name)            'sprint'|'slide'|'crouch'|'hurt'|'critical'|
 *                                 'air'|'reset'
 *
 * EVENTS EMITTED
 *   player:state      { stance, sprinting, sliding, ads, state, grounded, ... }
 *   player:land       { velocity, surface, position }
 *   player:footstep   { position, surface, running, left, speed, stance }
 *   damage:taken      { amount, from, health, direction }
 *   player:health     { health, fraction, low, critical, regenerating, ... }  *
 *   player:heartbeat  { strength, fraction }                                  *
 *   player:mantle     { kind, height }                                        *
 *   player:jump       { position }                                            *
 *   player:death      { position }                                            *
 *   player:transform   { form, from, energy, label }                         *
 *   player:ability     { form }                                               *
 *   (*) not in the canonical table in ARCHITECTURE.md — additive, optional, and
 *   safe to ignore. The canonical `player:state` payload carries `health` too so
 *   a listener that only knows the documented four fields still gets everything.
 */

import * as THREE from 'three';
import { Movement } from './movement.js';
import { CameraRig } from './camera.js';
import { Health } from './health.js';
import { LowHealthPass } from './lowhealth.js';
import { STANCE, MOVE, CAMERA, HEALTH, FOOTSTEP, JUMP_SPEED } from './tuning.js';
import { clamp, clamp01, lerp, approach, DEG } from './springs.js';
import { WALL_LEFT, WALL_RIGHT } from './wallrun.js';

export class PlayerSystem {
  static id = 'player';
  static deps = ['physics', 'world', 'render'];

  constructor() {
    /** Lets `ai` / `physics` recognise the local player from an owner pointer. */
    this.isPlayer = true;
    this.movement = null;
    this.rig = null;
    this.health = null;
    this.lowHealthPass = null;
    this.hitbox = null;

    this.controlEnabled = true;
    this.adsAmount = 0;
    this._adsExternal = false;
    this._adsExternalAge = 0;
    this.adsRequested = false;

    this.targetLocked = false;
    this.lockTarget = null;
    this.targetLockRequested = false;

    this.morph = null;

    this._lookFrame = -1;
    this._prevYaw = 0;

    /* ---- infection state -------------------------------------------- */
    this.infected = false;
    this.infectionMeter = 0;
    this.infectionMax = 8;
    this.infectionDrainRate = 6;
    this.infectionCooldown = 0;
    this.antivirals = 3;
    this._lastInfectionSource = null;

    // preallocated event payloads
    this._statePayload = {
      stance: 'stand', sprinting: false, sliding: false, ads: false,
      state: 'stand', grounded: true, airborne: false, mantling: false,
      wallrunning: false, dashing: false,
      lean: 0, speed: 0, health: HEALTH.max, healthFraction: 1, crouched: false,
      stamina: 1, targetLocked: false,
      infected: false, infectionMeter: 0, antivirals: 3,
    };
    this._landPayload = { velocity: 0, surface: 'concrete', position: new THREE.Vector3() };
    this._stepPayload = {
      position: new THREE.Vector3(), surface: 'concrete', running: false,
      left: false, speed: 0, stance: 'stand',
    };
    this._mantlePayload = { kind: 'none', height: 0 };
    this._jumpPayload = { position: new THREE.Vector3() };
    this._wallRunPayload = { side: 'none', duration: 0 };
    this._dashPayload = { direction: new THREE.Vector3(), stamina: 0 };
    // Preallocated HUD snapshot polled by `ui` (see getHudState).
    this._hudState = {
      health: HEALTH.max, maxHealth: HEALTH.max, regen: false, dead: false,
      move: 0, sprint: false, crouch: false, ads: false, airborne: false,
      suppression: 0, position: null,
      infected: false, infectionMeter: 0, antivirals: 3,
      morphForm: 'none', morphFormLabel: 'Default',
      evolutionEnergy: 1, morphCooldown: 0,
      meleeMultiplier: 1,
      meleeActive: false, meleeType: 'blade', meleeComboCount: 0,
      meleeFinisherAvailable: false, meleeStamina: 100, meleeBlocking: false,
      meleeStunTimer: 0, meleePerfectParryFlash: false, meleeDeathState: 'intact',
    };

    this._tmp = new THREE.Vector3();
    /** Last emitted discrete state, compared field-wise so no string is built. */
    this._prev = {
      state: '', stance: '', sprinting: false, tacticalSprint: false,
      sliding: false, grounded: true, ads: false, mantling: false,
      wallrunning: false, dashing: false, targetLocked: false, infected: false,
    };
    this._offEvents = [];
  }

  /* ==================================================================== */
  /* init                                                                 */
  /* ==================================================================== */

  async init(ctx) {
    this.ctx = ctx;
    this.physics = ctx.get('physics');
    this.rng = ctx.rng.fork();

    this.movement = new Movement(ctx, this);
    this.rig = new CameraRig(ctx);
    this.health = new Health(ctx, this.rig);

    // ---- spawn -----------------------------------------------------------
    const spawn = this._resolveSpawn();
    this.movement.init(this.physics, spawn.feet);
    this.movement.yaw = spawn.yaw;
    this.movement.pitch = 0;
    this._prevYaw = spawn.yaw;
    this.rig.reset(STANCE.stand.eye);
    this.rig.update(1 / 60, this.movement, this.health);
    this.rig.applyTo(ctx.camera);

    // ---- hitbox ----------------------------------------------------------
    // A capsule on the PLAYER layer so `ai` has something to shoot at. PLAYER is
    // deliberately absent from MASK.BULLET and MASK.CHARACTER, so it can never
    // be hit by the player's own muzzle ray and never blocks the player's own
    // movement sweeps: an AI that wants to hit us traces with
    //   phys.MASK.BULLET | phys.LAYER.PLAYER
    this.hitbox = this.physics.addCollider({
      shape: 'capsule',
      layer: this.physics.LAYER.PLAYER,
      surface: 'flesh',
      owner: this,
      part: 'torso',
      radius: 0.3,
    });
    this._syncHitbox();

    // ---- low-health treatment -------------------------------------------
    const render = ctx.peek('render');
    if (render?.registerPass) {
      this.lowHealthPass = new LowHealthPass();
      this._unregisterPass = render.registerPass(this.lowHealthPass);
    }

    // ---- morph / shape-shift --------------------------------------------
    this.morph = new MorphSystem();
    await this.morph.init(ctx);

    // ---- incoming damage / suppression ----------------------------------
    const on = (type, fn) => this._offEvents.push(ctx.events.on(type, fn));
    on('damage:dealt', (e) => this._onDamageDealt(e));
    on('explosion', (e) => this._onExplosion(e));
    on('bullet:impact', (e) => this._onBulletImpact(e));
    on('actor:death', (e) => this._onActorDeath(e));
    on('progression:state', (e) => this._onProgressionState(e));

    console.info(
      `[player] spawn ${spawn.feet.x.toFixed(1)}, ${spawn.feet.y.toFixed(2)}, ` +
      `${spawn.feet.z.toFixed(1)} · walk ${STANCE.stand.speed} sprint ${MOVE.sprintSpeed} ` +
      `tac ${MOVE.tacSprintSpeed} m/s · jump ${JUMP_SPEED.toFixed(2)} m/s (apex 0.60 m)`
    );
  }

  _resolveSpawn() {
    const world = this.ctx.peek('world');
    const out = { feet: new THREE.Vector3(0, 0.2, 0), yaw: 0 };
    const sp = world?.spawn?.(0);
    if (sp?.position) {
      out.feet.copy(sp.position);
      out.yaw = sp.yaw ?? 0;
    }
    // Physics owns the exact floor; drop onto it so we never start embedded.
    const gy = this.physics.groundHeight(out.feet.x, out.feet.z, out.feet.y + 6);
    out.feet.y = Number.isFinite(gy) ? gy + 0.03 : out.feet.y + 0.2;
    return out;
  }

  /* ==================================================================== */
  /* look                                                                 */
  /* ==================================================================== */

  /**
   * Mouse/stick look is consumed once per rendered frame. It happens in the
   * first fixed step when there is one (so movement uses this frame's yaw with
   * zero latency) and in update() otherwise — above 120 fps a frame can contain
   * no fixed step at all and dropping the delta there would feel like a hitch.
   */
  _consumeLook(dt) {
    const frame = this.ctx.time.frame;
    if (frame === this._lookFrame) return;
    this._lookFrame = frame;
    const m = this.movement;
    if (!this.controlEnabled) {
      m.yawRate = 0;
      return;
    }
    const input = this.ctx.input;
    const cfg = this.ctx.config;
    const sens = lerp(1, cfg.adsSensScale, clamp01(this.adsAmount));

    let dYaw = -input.look.x * sens;
    let dPitch = -input.look.y * sens;

    // Gamepad: rate-based, already curved by Input.
    const stick = input.stick;
    if (stick.lookX || stick.lookY) {
      const rate = 3.1 * sens; // rad/s at full deflection
      dYaw -= stick.lookX * rate * dt;
      dPitch -= stick.lookY * rate * dt;
    }
    // Mantles are rooted: you keep your head, but the shoulders are committed.
    if (m.mantleMotion.active) {
      dYaw *= 0.55;
      dPitch *= 0.55;
    }

    if (cfg.thirdPerson) {
      if (!this.targetLocked) {
        this.rig.orbitYaw -= dYaw;
        this.rig.orbitPitch = clamp(this.rig.orbitPitch - dPitch, -this.rig._tpPitchLimit, this.rig._tpPitchLimit);
      }
      m.yaw = this.rig.orbitYaw;
      m.pitch = 0;
    } else {
      m.yaw += dYaw;
      m.pitch = clamp(m.pitch + dPitch, -CAMERA.pitchLimit, CAMERA.pitchLimit);
    }
    // Keep yaw bounded so long sessions never lose float precision.
    if (m.yaw > Math.PI) m.yaw -= Math.PI * 2;
    else if (m.yaw < -Math.PI) m.yaw += Math.PI * 2;

    m.yawRate = dt > 1e-5 ? dYaw / dt : 0;
    this._prevYaw = m.yaw;
  }

  /* ==================================================================== */
  /* frame                                                                */
  /* ==================================================================== */

  fixedUpdate(h, ctx) {
    if (!this.movement) return;
    this._consumeLook(ctx.time.dt > 1e-5 ? ctx.time.dt : h);
    this.movement.latchInput(ctx.time.frame);
    if (!this.controlEnabled) return;
    this.movement.adsAmount = this.adsAmount;
    this.movement.step(h);
  }

  update(dt, ctx) {
    if (!this.movement) return;
    this._consumeLook(dt);
    this.movement.latchInput(ctx.time.frame);

    this._updateAds(dt);
    this._updateTargetLock(dt);
    this._drainMovementEvents();
    this.health.update(dt);

    this.morph?.update(dt, ctx);
    this._syncViewmodelForm();

    this._updateInfection(dt, ctx);

    const prog = this.ctx.peek('progression');
    if (prog && !this.health.dead && this.health.value < this.health.max) {
      const bonus = (prog.bonuses?.healthRegenMult ?? 1) - 1;
      if (bonus > 0) this.health.heal(HEALTH.regenRate * bonus * dt);
    }

    this.rig.update(dt, this.movement, this.health);
    if (this.controlEnabled) this.rig.applyTo(ctx.camera);
    else this.rig.forward.set(0, 0, -1).applyQuaternion(ctx.camera.quaternion);

    this.lowHealthPass?.sync(this.health);
    this._syncHitbox();
    this._publishState();
  }

  /** Keep the AI-facing hitbox on the interpolated capsule. */
  _syncHitbox() {
    if (!this.hitbox) return;
    const m = this.movement;
    const p = m.renderPosition;
    const r = 0.3;
    const h = STANCE[m.stance].height;
    this.hitbox.setSegment(p.x, p.y + r, p.z, p.x, p.y + Math.max(r, h - r), p.z, r);
    this.hitbox.enabled = !this.health.dead;
  }

  _updateAds(dt) {
    const input = this.ctx.input;
    const m = this.movement;
    this.adsRequested =
      this.controlEnabled && input.ads && !m.mantleMotion.active && !m.sliding && !this.health.dead;

    if (this._adsExternal) {
      // `weapons` is driving the blend; stop trusting it if it goes quiet.
      this._adsExternalAge += dt;
      if (this._adsExternalAge > 0.6) this._adsExternal = false;
    }
    if (!this._adsExternal) {
      this.adsAmount = approach(this.adsAmount, this.adsRequested ? 1 : 0, 0.075, dt);
    }
    m.adsAmount = this.adsAmount;
  }

  _updateTargetLock(dt) {
    const input = this.ctx.input;
    const m = this.movement;
    this.targetLockRequested = input.action('targetLock');

    if (this.targetLockRequested) {
      if (!this.targetLocked) {
        this.lockTarget = this._findLockTarget();
        this.targetLocked = this.lockTarget !== null;
      }
    } else {
      this.targetLocked = false;
      this.lockTarget = null;
    }

    if (this.targetLocked && this.lockTarget?.dead) {
      this.targetLocked = false;
      this.lockTarget = null;
    }

    m.targetLocked = this.targetLocked;
    m.lockTarget = this.lockTarget;
  }

  _findLockTarget() {
    const ai = this.ctx.peek('ai');
    if (!ai || !ai.agents || ai.agents.length === 0) return null;
    const phys = this.ctx.get('physics');
    if (!phys) return null;

    const eyePos = this.rig.eyePosition.clone();
    const yaw = this.movement.yaw;
    const pitch = this.movement.pitch;
    const fwd = new THREE.Vector3(
      -Math.sin(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      -Math.cos(yaw) * Math.cos(pitch)
    ).normalize();

    let best = null;
    let bestScore = Infinity;
    const maxDist = 40;
    const cosHalf = Math.cos(Math.PI / 5);

    for (const agent of ai.agents) {
      if (agent.dead) continue;
      const toA = new THREE.Vector3().subVectors(agent.position, eyePos);
      const dist = toA.length();
      if (dist < 0.5 || dist > maxDist) continue;
      toA.normalize();
      const dot = fwd.dot(toA);
      if (dot < cosHalf) continue;
      if (!phys.lineOfSight(eyePos, agent.position, phys.MASK.WORLD | phys.MASK.CHARACTER)) continue;
      const score = dist / Math.max(dot, 0.01);
      if (score < bestScore) {
        bestScore = score;
        best = agent;
      }
    }
    return best;
  }

  /** Turn the movement machine's one-shot flags into events + camera impulses. */
  _drainMovementEvents() {
    const m = this.movement;

    if (m.landEvent.pending) {
      m.landEvent.pending = false;
      const speed = m.landEvent.speed;
      const mag = this.rig.onLand(speed);
      this._landPayload.velocity = speed;
      this._landPayload.surface = m.landEvent.surface;
      this._landPayload.position.copy(m.position);
      this.ctx.events.emit('player:land', this._landPayload);
      // Fall damage — CoD only hurts you past a real drop.
      const L = CAMERA.land;
      if (speed > L.damageSpeed) {
        this.health.damage((speed - L.damageSpeed) * L.damagePerSpeed, null, { type: 'fall' });
      }
      if (mag > 0.35) this.movement._footHold = FOOTSTEP.landHold;
    }

    if (m.stepEvent.pending) {
      m.stepEvent.pending = false;
      const e = this._stepPayload;
      e.position.set(m.stepEvent.x, m.stepEvent.y, m.stepEvent.z);
      e.surface = m.stepEvent.surface;
      e.running = m.stepEvent.running;
      e.left = m.stepEvent.left;
      e.speed = m.horizontalSpeed;
      e.stance = m.stance;
      this.rig.onFootstep(e.running, m.stance);
      this.ctx.events.emit('player:footstep', e);
    }

    if (m.jumped) {
      m.jumped = false;
      this.rig.addRecoil(-0.35 * DEG, 0, 0, 0.004);
      this._jumpPayload.position.copy(m.position);
      this.ctx.events.emit('player:jump', this._jumpPayload);
    }

    if (m.slideStarted) {
      m.slideStarted = false;
      this.rig.onSlideStart(m._slideSide);
    }
    if (m.slideEnded) m.slideEnded = false;

    if (m.mantleEvent.pending) {
      m.mantleEvent.pending = false;
      this._mantlePayload.kind = m.mantleEvent.kind;
      this._mantlePayload.height = m.mantleEvent.height;
      this.rig.addTrauma(m.mantleEvent.kind === 'vault' ? 0.08 : 0.14);
      this.ctx.events.emit('player:mantle', this._mantlePayload);
    }

    if (m.wallrunning && !this._prev.wallrunning) {
      this._wallRunPayload.side = m.wallRunSide === WALL_LEFT ? 'left' : 'right';
      this._wallRunPayload.duration = MOVE.wallRun.maxDuration;
      this.ctx.events.emit('player:wallrun', this._wallRunPayload);
    }
    if (!m.wallrunning && this._prev.wallrunning) {
      this.ctx.events.emit('player:wallrunEnd', {});
    }
    if (m.dashing && !this._prev.dashing) {
      this._dashPayload.direction.set(m.dashDirX, 0, m.dashDirZ);
      this._dashPayload.stamina = MOVE.airDash.staminaCost;
      this.ctx.events.emit('player:dash', this._dashPayload);
    }
  }

  _publishState() {
    const m = this.movement;
    const s = this._statePayload;
    const leaning = Math.abs(m.leanAmount) > 0.35;
    const state = leaning && (m.state === 'stand' || m.state === 'crouch') ? 'lean' : m.state;
    s.state = state;
    s.stance = m.stance;
    s.crouched = m.stance !== 'stand';
    s.sprinting = m.sprinting;
    s.tacticalSprint = m.tacticalSprint;
    s.sliding = m.sliding;
    s.ads = this.adsAmount > 0.5;
    s.adsProgress = this.adsAmount;
    s.grounded = m.grounded;
    s.airborne = !m.grounded;
    s.mantling = m.mantleMotion.active;
    s.wallrunning = m.wallrunning;
    s.dashing = m.dashing;
    s.lean = m.leanAmount;
    s.speed = m.horizontalSpeed;
    s.health = this.health.value;
    s.healthFraction = this.health.fraction;
    s.infected = this.infected;
    s.infectionMeter = this.infectionMeter / this.infectionMax;
    s.antivirals = this.antivirals;
    s.stamina = m.stamina.fraction;
    s.targetLocked = this.targetLocked;
    // Emit only when something discrete actually changed. Field-wise compare,
    // because building a key string every frame would be a per-frame allocation.
    const q = this._prev;
    if (
      q.state !== s.state || q.stance !== s.stance || q.sprinting !== s.sprinting ||
      q.tacticalSprint !== s.tacticalSprint || q.sliding !== s.sliding ||
      q.grounded !== s.grounded || q.ads !== s.ads || q.mantling !== s.mantling ||
      q.wallrunning !== s.wallrunning || q.dashing !== s.dashing ||
      q.targetLocked !== s.targetLocked || q.infected !== s.infected
    ) {
      q.state = s.state; q.stance = s.stance; q.sprinting = s.sprinting;
      q.tacticalSprint = s.tacticalSprint; q.sliding = s.sliding;
      q.grounded = s.grounded; q.ads = s.ads; q.mantling = s.mantling;
      q.wallrunning = s.wallrunning; q.dashing = s.dashing;
      q.targetLocked = s.targetLocked; q.infected = s.infected;
      this.ctx.events.emit('player:state', s);
    }
  }

  /* ==================================================================== */
  /* incoming damage                                                      */
  /* ==================================================================== */

  _onDamageDealt(e) {
    if (!e) return;
    const t = e.target;
    if (t !== this && t !== 'player' && t?.isPlayer !== true) return;
    const from = e.from ?? e.source?.position ?? e.point ?? null;
    this.applyDamage(e.amount ?? 0, from, { type: 'bullet' });
    if (e.infected && !this.infected) {
      this._applyInfection(e.source);
    }
  }

  _onExplosion(e) {
    if (!e?.position) return;
    const eye = this.ctx.camera.position;
    const r = e.radius ?? 5;
    const d = this._tmp.copy(e.position).distanceTo(eye);
    if (d > r * 1.6) return;
    // Occluded blasts still shake you, they just do not wound you.
    const clear = this.physics.lineOfSight(e.position, eye, this.physics.MASK.EXPLOSION);
    const falloff = Math.pow(clamp01(1 - d / r), 1.6);
    this.rig.addTrauma(clamp01(falloff * 1.4));
    this.health.addSuppression(HEALTH.suppression.perExplosion * falloff);
    if (clear && falloff > 0.02) {
      this.applyDamage((e.damage ?? 90) * falloff, e.position, { type: 'explosion' });
    }
  }

  _onBulletImpact(e) {
    if (!e?.point || this.health.dead) return;
    const eye = this.ctx.camera.position;
    const dx = e.point.x - eye.x, dy = e.point.y - eye.y, dz = e.point.z - eye.z;
    const d2 = dx * dx + dy * dy + dz * dz;
    const R = HEALTH.suppression.radius;
    if (d2 > R * R) return;
    // Heuristic: rounds we fired land where we are looking. Anything cracking in
    // beside or behind us is somebody shooting at us.
    const d = Math.sqrt(d2) || 1e-4;
    const f = this.rig.forward;
    if ((dx * f.x + dy * f.y + dz * f.z) / d > 0.55) return;
    this.health.addSuppression(HEALTH.suppression.perNearMiss * (1 - d / R));
  }

  _meleeState() {
    const weapons = this.ctx.peek('weapons');
    return weapons?.getMeleeState?.() ?? null;
  }

  _onProgressionState(e) {
    if (!e) return;
    this.health.max = Math.floor(HEALTH.max * (e.bonuses?.maxHealthMult ?? 1));
    this.health.value = Math.min(this.health.value, this.health.max);
  }

  /* ==================================================================== */
  /* infection                                                            */
  /* ==================================================================== */

  _updateInfection(dt, ctx) {
    if (this.health.dead) return;
    if (this.infectionCooldown > 0) this.infectionCooldown -= dt;

    if (this.infected) {
      this.health.damage(this.infectionDrainRate * dt, this._lastInfectionSource, { type: 'infection' });
      return;
    }

    const ai = ctx.peek('ai');
    if (!ai?.agents) return;
    const eye = this.eyePosition;
    let nearestDist = Infinity;
    let nearestAgent = null;
    for (const a of ai.agents) {
      if (!a.alive || !a.infected) continue;
      const d = eye.distanceTo(a.position);
      if (d < nearestDist) { nearestDist = d; nearestAgent = a; }
    }
    if (nearestAgent && nearestDist < 4.5) {
      const proxRate = Math.max(0, 1 - (nearestDist - 1.5) / 3.0);
      this.infectionMeter += proxRate * dt;
      if (this.infectionMeter >= this.infectionMax) {
        this._applyInfection(nearestAgent);
      }
    } else if (nearestDist > 6.0) {
      this.infectionMeter = Math.max(0, this.infectionMeter - dt * 1.5);
    }
  }

  _applyInfection(source) {
    if (this.infected || this.health.dead) return;
    this.infected = true;
    this.infectionMeter = this.infectionMax;
    this._lastInfectionSource = source?.position ?? null;
    this.ctx.events.emit('infection:caught', { actor: this, source });
    this.health.regenerating = false;
  }

  _useAntiviral() {
    if (!this.infected || this.antivirals <= 0 || this.infectionCooldown > 0) return false;
    this.antivirals--;
    this.infectionCooldown = 2;
    this.infected = false;
    this.infectionMeter = 0;
    this._lastInfectionSource = null;
    this.ctx.events.emit('infection:cured', { actor: this });
    return true;
  }

  _onActorDeath(e) {
    if (!e?.actor?.infected) return;
    this.infectionMeter = Math.min(this.infectionMax, this.infectionMeter + 1.2);
  }

  /* ==================================================================== */
  /* public API                                                           */
  /* ==================================================================== */

  /**
   * HUD adapter polled by `ui` every lateUpdate. Shape is fixed by the contract
   * documented at the top of src/ui/index.js. Preallocated and mutated in place.
   */
  getHudState() {
    const h = this._hudState;
    const m = this.movement;
    const hp = this.health;
    h.health = hp.value;
    h.maxHealth = hp.max;
    h.regen = hp.regenerating;
    h.dead = hp.dead;
    h.suppression = hp.suppression;
    // 0..1 against tactical sprint, which is the fastest the player can move —
    // `ui` uses this directly as the reticle-bloom weight.
    h.move = Math.min(1, m.horizontalSpeed / MOVE.tacSprintSpeed);
    h.sprint = m.sprinting || m.tacticalSprint;
    h.crouch = m.stance === 'crouch' || m.stance === 'prone';
    h.ads = this.adsAmount > 0.5;
    h.airborne = !m.grounded;
    h.position = this.position;
    h.wallrunning = m.wallrunning;
    h.dashing = m.dashing;
    h.stamina = m.stamina.fraction;
    h.infected = this.infected;
    h.infectionMeter = this.infectionMeter;
    h.infectionMax = this.infectionMax;
    const melee = this._meleeState?.();
    if (melee) {
      h.meleeActive = melee.attacking;
      h.meleeComboCount = melee.comboCount;
      h.meleeFinisherAvailable = melee.finisherAvailable;
      h.meleeStamina = melee.stamina;
      h.meleeBlocking = melee.blocking;
      h.meleeType = melee.type;
      h.meleeStunTimer = melee.stunTimer;
      h.meleePerfectParryFlash = melee.perfectParryFlash;
      h.meleeDeathState = melee.deathState;
    }
    h.staminaDepleted = m.stamina.depleted;
    h.infected = this.infected;
    h.infectionMeter = this.infectionMeter / this.infectionMax;
    h.antivirals = this.antivirals;
    h.morphForm = this.form;
    h.morphFormLabel = this.formLabel;
    h.evolutionEnergy = this.evolutionEnergyFraction;
    h.morphCooldown = this.morphCooldownFraction;
    h.meleeMultiplier = this.meleeMultiplier;
    return h;
  }

  get position() {
    return this.movement.renderPosition;
  }
  get feetPosition() {
    return this.movement.position;
  }
  get eyePosition() {
    return this.rig.eyePosition;
  }
  get velocity() {
    return this.movement.velocity;
  }
  get forward() {
    return this.rig.forward;
  }
  get yaw() {
    return this.movement.yaw;
  }
  get pitch() {
    return this.movement.pitch;
  }
  get speed() {
    return this.movement.speed;
  }
  get horizontalSpeed() {
    return this.movement.horizontalSpeed;
  }
  get character() {
    return this.movement.character;
  }
  get state() {
    return this._statePayload.state;
  }
  get stance() {
    return this.movement.stance;
  }
  get sprinting() {
    return this.movement.sprinting;
  }
  get tacticalSprint() {
    return this.movement.tacticalSprint;
  }
  get sliding() {
    return this.movement.sliding;
  }
  get slideProgress() {
    return this.movement.slideProgress;
  }
  get grounded() {
    return this.movement.grounded;
  }
  get airborne() {
    return !this.movement.grounded;
  }
  get mantling() {
    return this.movement.mantleMotion.active;
  }
  get leanAmount() {
    return this.movement.leanAmount;
  }
  get eyeHeight() {
    return this.rig.eye;
  }
  get adsProgress() {
    return this.adsAmount;
  }
  get viewKick() {
    return this.rig.viewKick;
  }
  get cameraRig() {
    return this.rig;
  }
  get height() {
    return STANCE[this.movement.stance].height;
  }
  get maxHealth() {
    return this.health.max;
  }
  get healthFraction() {
    return this.health.fraction;
  }
  get lowHealth() {
    return this.health.low;
  }
  get dead() {
    return this.health.dead;
  }
  get suppression() {
    return this.health.suppression;
  }
  get damageIndicators() {
    return this.health.indicators;
  }
  get heartbeatPulse() {
    return this.health.pulse;
  }
  get bobPhase() {
    return this.rig.bobPhase;
  }
  get wallrunning() {
    return this.movement.wallrunning;
  }
  get dashing() {
    return this.movement.dashing;
  }
  get stamina() {
    return this.movement.stamina.fraction;
  }
  get staminaDepleted() {
    return this.movement.stamina.depleted;
  }

  /** `weapons` owns the ADS curve; hand it over and everything else follows. */
  setAdsProgress(v) {
    this.adsAmount = clamp01(v);
    this._adsExternal = true;
    this._adsExternalAge = 0;
    this.movement.adsAmount = this.adsAmount;
  }

  addRecoil(pitch, yaw, roll, punch) {
    this.rig.addRecoil(pitch, yaw, roll, punch);
  }
  addKick(pitch, yaw, roll) {
    this.rig.addKick(pitch, yaw, roll);
  }
  addTrauma(a) {
    this.rig.addTrauma(a);
  }
  /** Alias some subsystems may reach for. */
  addCameraShake(a) {
    this.rig.addTrauma(a);
  }

  applyDamage(amount, from, opts) {
    return this.health.damage(amount, from ?? null, { yaw: this.movement.yaw, ...opts });
  }
  heal(a) {
    this.health.heal(a);
  }
  addSuppression(a) {
    this.health.addSuppression(a);
  }
  useAntiviral() {
    return this._useAntiviral();
  }

  setControlEnabled(on) {
    this.controlEnabled = !!on;
    this.movement.controlEnabled = this.controlEnabled;
    if (!on) {
      this.movement.latchInput(-2); // flush held keys
      this.movement.velocity.set(0, 0, 0);
      this.movement.sprinting = false;
      this.movement.tacticalSprint = false;
      this.movement.sliding = false;
      this.movement.wallrunning = false;
      this.movement.wallRunMotion.end();
      this.movement.dashing = false;
      this.movement.cancelMantle();
      this.adsAmount = 0;
      this._adsExternal = false;
    } else {
      this.movement._cmdFrame = -1;
    }
  }

  /**
   * Move the player. `eyeOrPos` is the EYE position (that is what the shot
   * harness hands us — it passes the camera transform); `rot` may be a
   * THREE.Euler, an object with `.y`, or a yaw in radians.
   */
  teleport(eyeOrPos, rot) {
    if (!eyeOrPos) return;
    const eyeH = STANCE.stand.eye;
    const feetY = eyeOrPos.y - eyeH;
    if (typeof rot === 'number') {
      this.movement.yaw = rot;
    } else if (rot) {
      this.movement.yaw = rot.y ?? this.movement.yaw;
      this.movement.pitch = clamp(rot.x ?? 0, -CAMERA.pitchLimit, CAMERA.pitchLimit);
    }
    this.movement.teleport(eyeOrPos.x, feetY, eyeOrPos.z);
    this.rig.reset(eyeH);
    this.rig.eyePosition.set(eyeOrPos.x, eyeOrPos.y, eyeOrPos.z);
    this.rig.fov = this.ctx.config.fov;
    this._lookFrame = this.ctx.time.frame;
    this._prev.state = '';
  }

  respawn(index = 0) {
    const world = this.ctx.peek('world');
    const sp = world?.spawn?.(index);
    this.health.reset(true);
    if (!sp?.position) return;
    const gy = this.physics.groundHeight(sp.position.x, sp.position.z, sp.position.y + 6);
    const feetY = Number.isFinite(gy) ? gy + 0.03 : sp.position.y;
    this.movement.yaw = sp.yaw ?? 0;
    this.movement.pitch = 0;
    this.movement.teleport(sp.position.x, feetY, sp.position.z);
    this.rig.reset(STANCE.stand.eye);
  }

  /** Named states for dev overlays and future shots. */
  debugState(name) {
    const m = this.movement;
    switch (name) {
      case 'sprint':
        m.stanceWant = 'stand';
        m.sprinting = true;
        m.velocity.set(-Math.sin(m.yaw), 0, -Math.cos(m.yaw)).multiplyScalar(MOVE.sprintSpeed);
        break;
      case 'tacsprint':
        m.sprinting = true;
        m.tacticalSprint = true;
        break;
      case 'crouch':
        m.stanceWant = 'crouch';
        break;
      case 'prone':
        m.stanceWant = 'prone';
        break;
      case 'slide':
        m.sprinting = true;
        m.velocity.set(-Math.sin(m.yaw), 0, -Math.cos(m.yaw)).multiplyScalar(MOVE.sprintSpeed);
        m._beginSlide(m.cmd, m._wish.set(-Math.sin(m.yaw), 0, -Math.cos(m.yaw)), 1, MOVE.sprintSpeed);
        m.slideStarted = false;
        this.rig.onSlideStart(1);
        break;
      case 'air':
        m.velocity.y = JUMP_SPEED;
        m.grounded = false;
        break;
      case 'hurt':
        this.health.value = this.health.max * 0.28;
        this.health.lastDamageTime = this.ctx.time.elapsed;
        this.health.effect = clamp01((HEALTH.lowThreshold - 0.28) / HEALTH.lowThreshold);
        break;
      case 'critical':
        this.health.value = this.health.max * 0.11;
        this.health.lastDamageTime = this.ctx.time.elapsed;
        this.health.effect = 1;
        this.health.hitFlash = 0.6;
        break;
      case 'reset':
        this.health.reset(true);
        this.health.effect = 0;
        break;
      default:
        break;
    }
    return {
      state: this.state, stance: m.stance, speed: m.horizontalSpeed,
      health: this.health.value, ads: this.adsAmount,
    };
  }

  /** Snapshot for the dev HUD / debugging. */
  get stats() {
    const m = this.movement;
    return {
      state: this.state,
      stance: m.stance,
      speed: m.horizontalSpeed,
      vertical: m.velocity.y,
      grounded: m.grounded,
      lean: m.leanAmount,
      fov: this.rig.fov,
      health: this.health.value,
      suppression: this.health.suppression,
    };
  }

  /* ==================================================================== */
  /*  morph / shape-shift public API                                       */
  /* ==================================================================== */

  transformTo(formId) { return this.morph?.transformTo(formId) ?? false; }

  triggerAbility() { return this.morph?.triggerAbility() ?? null; }

  activateAbility() { return this.morph?.activateAbility() ?? false; }

  deactivateAbility() { this.morph?.deactivateAbility(); }

  get form() { return this.morph?.form ?? 'none'; }
  get formLabel() { return this.morph?.getFormLabel() ?? 'Default'; }
  get evolutionEnergy() { return this.morph?.energy ?? 0; }
  get evolutionEnergyFraction() { return this.morph?.getEnergyFraction() ?? 1; }
  get morphCooldownFraction() { return this.morph?.getCooldownFraction() ?? 0; }
  get meleeMultiplier() { return this.morph?.getMeleeMultiplier() ?? 1; }
  get isMorphClimbing() { return this.morph?.canClimb() ?? false; }
  get isSilent() { return this.morph?.isSilent() ?? false; }

  _syncViewmodelForm() {
    const vm = this.ctx.peek('viewmodel');
    if (vm?.setMorphForm) vm.setMorphForm(this.morph?.form ?? 'none');
  }

  dispose() {
    for (const off of this._offEvents) off?.();
    this._offEvents.length = 0;
    if (this.hitbox) {
      this.physics?.removeCollider(this.hitbox);
      this.hitbox = null;
    }
    this._unregisterPass?.();
    this.lowHealthPass?.dispose();
    this.lowHealthPass = null;
    this.movement?.dispose();
    this.morph?.dispose();
    this.morph = null;
  }
}
