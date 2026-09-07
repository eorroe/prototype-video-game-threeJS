import * as THREE from 'three';
import {
  MELEE_TYPES,
  ATTACK_DEFS,
  LIMB_DEFS,
  PARRY,
  COMBO,
  DEATH_STATE,
  LIMB_GROUP,
  MELEE_HUD,
  getLimbGroup,
  getSeverableLimbs,
  limbSeverChance,
  isFinisherAvailable,
} from './melee-defs.js';

const TWO_PI = Math.PI * 2;
const DEG = Math.PI / 180;

const LIMB_NAMES = Object.keys(LIMB_DEFS);

function createLimbState() {
  const limbs = {};
  for (const name of LIMB_NAMES) {
    const def = LIMB_DEFS[name];
    limbs[name] = {
      name,
      health: def.health,
      maxHealth: def.health,
      severThreshold: def.severThreshold,
      severed: false,
      parent: def.parent,
      boneIndex: def.boneIndex,
      group: getLimbGroup(name),
    };
  }
  return limbs;
}

export class LimbHealth {
  constructor() {
    this.limbs = createLimbState();
    this.totalHealth = Object.values(LIMB_DEFS).reduce((s, l) => s + l.health, 0);
    this.alive = true;
    this.deathState = DEATH_STATE.INTACT;
    this.stunTimer = 0;
    this.stunDuration = 0;
    this.staggered = false;
    this.infected = false;
    this.infectionTimer = 0;
    this.parryStunTimer = 0;
    this.parryCounterOpen = false;
    this.counterOpenTimer = 0;
    this.blockTimer = 0;
    this.blockActive = false;
    this.perfectParryTimer = 0;
    this.perfectParryFlashTimer = 0;
    this.stamina = 100;
    this.maxStamina = 100;
    this.staminaRegenRate = 18;
    this.staminaBlockDrain = PARRY.blockStaminaDrain;
    this.staminaRegenDelay = 0.3;
    this.staminaRegenTimer = 0;
  }

  getLimb(name) {
    return this.limbs[name] ?? null;
  }

  damageLimb(limbName, amount, meleeType, attackType) {
    const limb = this.limbs[limbName];
    if (!limb || limb.severed || !this.alive) return { killed: false, severed: false, limb: null };

    limb.health = Math.max(0, limb.health - amount);
    const killed = limb.health <= 0 && limb.group !== 'torso';

    if (killed && limb.group !== 'torso') {
      limb.severed = true;
      this._evaluateDeathState();
      return { killed: true, severed: true, limb };
    }

    const meleeDef = MELEE_TYPES[meleeType] ?? MELEE_TYPES.blade;
    const attackDef = ATTACK_DEFS[attackType] ?? ATTACK_DEFS.light;
    const severChance = limbSeverChance(limbName, meleeType, attackType, amount);
    if (severChance > 0 && Math.random() < severChance) {
      limb.severed = true;
      this.stunTimer = Math.max(this.stunTimer, 0.3);
      this._evaluateDeathState();
      return { killed: true, severed: true, limb };
    }

    if (meleeDef.stunChance > 0 && attackType === 'heavy') {
      const stunChance = meleeDef.stunChance * (attackDef.stunChanceScale ?? 1);
      if (Math.random() < stunChance) {
        this.stunTimer = Math.max(this.stunTimer, 0.6 + Math.random() * 0.5);
        this.staggered = true;
      }
    }

    return { killed: false, severed: false, limb: null };
  }

  _evaluateDeathState() {
    const arms = LIMB_GROUP.ARMS;
    const legs = LIMB_GROUP.LEGS;
    let armCount = 0;
    let legCount = 0;
    let headDead = false;

    for (const name of arms) {
      if (this.limbs[name]?.severed) armCount++;
    }
    for (const name of legs) {
      if (this.limbs[name]?.severed) legCount++;
    }
    headDead = this.limbs.head?.severed ?? false;

    if (headDead) {
      this.deathState = DEATH_STATE.HEADSHOT;
      this.alive = false;
    } else if (armCount === arms.length) {
      this.deathState = DEATH_STATE.BOTH_ARMS;
    } else if (armCount === 1) {
      this.deathState = DEATH_STATE.ONE_ARM;
    } else if (legCount === legs.length) {
      this.deathState = DEATH_STATE.BOTH_LEGS;
    } else if (legCount === 1) {
      this.deathState = DEATH_STATE.ONE_LEG;
    } else if (armCount > 0 || legCount > 0) {
      this.deathState = DEATH_STATE.DISMEMBERED;
    }

    if (headDead || armCount >= 2 || legCount >= 2) {
      this.alive = false;
    }
  }

  applyStun(duration) {
    this.stunTimer = Math.max(this.stunTimer, duration);
    this.staggered = true;
  }

  applyParryStun(duration) {
    this.parryStunTimer = Math.max(this.parryStunTimer, duration);
    this.parryCounterOpen = true;
    this.counterOpenTimer = PARRY.perfectParryCounterWindow;
    this.staggered = true;
  }

  startBlock() {
    if (this.stamina < PARRY.blockStaminaDrain) return false;
    this.blockActive = true;
    this.blockTimer = 0.2;
    return true;
  }

  stopBlock() {
    this.blockActive = false;
    this.blockTimer = 0;
  }

  tryParry() {
    if (this.parryStunTimer > 0) return null;
    const now = this.blockTimer;
    const perfectWindow = PARRY.perfectParryWindow;
    if (now >= 0 && now <= perfectWindow) {
      this.perfectParryTimer = PARRY.perfectParryFlashDuration;
      this.perfectParryFlashTimer = PARRY.perfectParryFlashDuration;
      this.stamina = Math.min(this.maxStamina, this.stamina + PARRY.perfectParryStaminaRefund);
      this.parryStunTimer = PARRY.perfectParryStunDuration;
      this.parryCounterOpen = true;
      this.counterOpenTimer = PARRY.perfectParryCounterWindow;
      this.blockActive = false;
      this.blockTimer = 0;
      return 'perfect';
    }
    if (now >= 0 && now <= 0.12) {
      this.blockTimer = 0;
      this.blockActive = true;
      return 'block';
    }
    return null;
  }

  getDamageReduction() {
    if (!this.blockActive && this.blockTimer <= 0) return 1;
    return this.perfectParryTimer > 0 ? 0 : 1 - PARRY.blockDamageReduction;
  }

  update(dt) {
    if (this.stunTimer > 0) this.stunTimer = Math.max(0, this.stunTimer - dt);
    if (this.parryStunTimer > 0) {
      this.parryStunTimer = Math.max(0, this.parryStunTimer - dt);
      if (this.parryStunTimer <= 0) this.parryCounterOpen = false;
    }
    if (this.counterOpenTimer > 0) {
      this.counterOpenTimer = Math.max(0, this.counterOpenTimer - dt);
      if (this.counterOpenTimer <= 0) this.parryCounterOpen = false;
    }
    if (this.blockTimer > 0 && !this.blockActive) {
      this.blockTimer = Math.max(0, this.blockTimer - dt);
    }
    if (this.perfectParryTimer > 0) this.perfectParryTimer = Math.max(0, this.perfectParryTimer - dt);
    if (this.perfectParryFlashTimer > 0) this.perfectParryFlashTimer = Math.max(0, this.perfectParryFlashTimer - dt);

    if (this.blockActive && this.stamina > 0) {
      this.staminaRegenTimer = 0;
      this.stamina = Math.max(0, this.stamina - this.staminaBlockDrain * dt);
    } else {
      this.staminaRegenTimer += dt;
      if (this.staminaRegenTimer > this.staminaRegenDelay) {
        this.stamina = Math.min(this.maxStamina, this.stamina + this.staminaRegenRate * dt);
      }
    }

    if (this.stunTimer <= 0) this.staggered = false;
  }

  getHudState() {
    return {
      stunTimer: this.stunTimer,
      stunDuration: this.stunDuration,
      staggered: this.staggered,
      stamina: this.stamina,
      maxStamina: this.maxStamina,
      blocking: this.blockActive,
      parryStunTimer: this.parryStunTimer,
      counterOpen: this.parryCounterOpen,
      perfectParryFlash: this.perfectParryFlashTimer > 0,
      comboCount: this._comboCount ?? 0,
      deathState: this.deathState,
      alive: this.alive,
      limbs: Object.values(this.limbs).map((l) => ({
        name: l.name,
        health: l.health,
        maxHealth: l.maxHealth,
        severed: l.severed,
        group: l.group,
      })),
    };
  }

  getSeveredLimbs() {
    return Object.values(this.limbs).filter((l) => l.severed).map((l) => l.name);
  }
}

export class MeleeAttack {
  constructor(type, meleeType, owner) {
    this.type = type;
    this.meleeType = meleeType;
    this.owner = owner;
    this.def = ATTACK_DEFS[type] ?? ATTACK_DEFS.light;
    this.phase = 'windup';
    this.timer = this.def.windup ?? 0;
    this.activeTimer = this.def.active ?? 0.1;
    this.recoveryTimer = this.def.recovery ?? 0.2;
    this.comboTimer = 0;
    this.hitTargets = new Set();
    this.chargeTime = 0;
    this.charging = false;
    this.chargeComplete = false;
    this.damage = this.def.damage ?? 1;
    this.cancelable = false;
    this.comboNext = null;
    this.lungeOffset = 0;
    this.knockback = (MELEE_TYPES[meleeType]?.knockback ?? 0.3) * (this.def.knockbackScale ?? 1);
    this.stunChance = (MELEE_TYPES[meleeType]?.stunChance ?? 0) * (this.def.stunChanceScale ?? 1);
    this.canDismember = MELEE_TYPES[meleeType]?.canDismember ?? false;
    this.infectionChance = MELEE_TYPES[meleeType]?.infectionChance ?? 0;
    this.severScale = this.def.severScale ?? 1;
    this.finished = false;
    this.cancelled = false;
    this._hitApplied = false;
  }

  startCharge() {
    this.charging = true;
    this.chargeTime = 0;
    this.phase = 'charging';
  }

  releaseCharge() {
    if (!this.charging) return;
    this.charging = false;
    this.chargeComplete = true;
    const charge = Math.min(this.chargeTime, this.def.chargeMax ?? 1.8);
    const chargeMin = this.def.chargeMin ?? 0.4;
    const t = Math.max(0, Math.min(1, (charge - chargeMin) / ((this.def.chargeMax ?? 1.8) - chargeMin)));
    const dMin = this.def.damageMin ?? 1.5;
    const dMax = this.def.damageMax ?? 4.5;
    this.damage = dMin + (dMax - dMin) * t;
    this.knockback = (MELEE_TYPES[this.meleeType]?.knockback ?? 0.5) * (this.def.knockbackScale ?? 3) * (0.6 + t * 0.4);
    this.stunChance = (MELEE_TYPES[this.meleeType]?.stunChance ?? 0.15) * (this.def.stunChanceScale ?? 4) * (0.5 + t * 0.5);
    this.canDismember = t > 0.4 && (MELEE_TYPES[this.meleeType]?.canDismember ?? false);
    this.severScale = (this.def.severScale ?? 1.5) * (0.7 + t * 0.3);
    this.phase = 'windup';
    this.timer = this.def.windup ?? 0.12;
    this.cancelable = false;
  }

  update(dt, inputFire) {
    if (this.cancelled || this.finished) return;

    if (this.charging && this.phase === 'charging') {
      this.chargeTime += dt;
      if (this.chargeTime >= (this.def.chargeMax ?? 1.8)) {
        this.releaseCharge();
      }
      return;
    }

    this.timer -= dt;
    switch (this.phase) {
      case 'windup':
        this.cancelable = this.timer <= 0;
        if (this.timer <= 0) {
          this.phase = 'active';
          this.timer = this.activeTimer;
          this.cancelable = false;
        }
        break;
      case 'active':
        this.lungeOffset = Math.max(0, this.lungeOffset - dt * 8);
        if (this.timer <= 0) {
          this.phase = 'recovery';
          this.timer = this.recoveryTimer;
          this.cancelable = false;
        }
        break;
      case 'recovery':
        this.lungeOffset = Math.max(0, this.lungeOffset - dt * 5);
        if (this.timer <= 0) {
          this.finished = true;
          this.phase = 'done';
        }
        break;
      case 'done':
        this.finished = true;
        break;
      default:
        break;
    }

    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0 && this.comboNext) {
        this.comboNext = null;
      }
    }
  }

  getActive() {
    return this.phase === 'active';
  }

  getCanInterrupt() {
    return this.cancellable || this.phase === 'recovery' || this.finished;
  }

  startComboWindow(nextAttackType) {
    const window = this.def.comboWindow ?? COMBO.window;
    this.comboTimer = window;
    this.comboNext = nextAttackType;
  }

  cancel() {
    this.cancelled = true;
    this.finished = true;
    this.phase = 'done';
  }

  getProgress() {
    switch (this.phase) {
      case 'windup':
        return 1 - (this.timer / (this.def.windup ?? 0.1));
      case 'active':
        return 1 - (this.timer / this.activeTimer);
      case 'recovery':
        return 1 + (1 - this.timer / this.recoveryTimer);
      case 'charging':
        return Math.min(1, this.chargeTime / (this.def.chargeMax ?? 1.8));
      default:
        return 1;
    }
  }
}

export class ComboTracker {
  constructor() {
    this.count = 0;
    this.timer = 0;
    this.lastAttackType = null;
    this.lastAttackTime = 0;
    this.heavyAfterLight = false;
    this.lightAfterHeavy = false;
    this.finisherAvailable = false;
    this.displayTimer = 0;
    this.maxCombo = COMBO.maxCombo;
    this.finisherThreshold = COMBO.finisherThreshold;
  }

  registerHit(attackType, enemyStunned) {
    const now = performance.now() / 1000;
    const comboWindow = COMBO.window;
    if (this.lastAttackType && now - this.lastAttackTime < comboWindow) {
      this.count = Math.min(this.maxCombo, this.count + 1);
      this.heavyAfterLight = this.lastAttackType === 'light' && attackType === 'heavy';
      this.lightAfterHeavy = this.lastAttackType === 'heavy' && attackType === 'light';
    } else {
      this.count = 1;
      this.heavyAfterLight = false;
      this.lightAfterHeavy = false;
    }
    this.lastAttackType = attackType;
    this.lastAttackTime = now;
    this.timer = COMBO.displayDuration;
    this.displayTimer = MELEE_HUD.comboFadeTime;
    this.finisherAvailable = isFinisherAvailable(this.count, enemyStunned);
    return { count: this.count, finisherAvailable: this.finisherAvailable };
  }

  registerKill() {
    this.count = Math.max(0, this.count - 1);
    this.displayTimer = MELEE_HUD.comboFadeTime;
    if (this.count <= 0) {
      this.lastAttackType = null;
      this.lastAttackTime = 0;
      this.heavyAfterLight = false;
      this.lightAfterHeavy = false;
      this.finisherAvailable = false;
    }
  }

  canChain(attackType) {
    const now = performance.now() / 1000;
    const window = COMBO.window;
    if (this.lastAttackType && now - this.lastAttackTime < window) {
      if (this.lastAttackType === 'light' && attackType === 'heavy') return true;
      if (this.lastAttackType === 'heavy' && attackType === 'light') return true;
      if (attackType === 'finisher' && this.finisherAvailable) return true;
      if (attackType === 'light') return true;
    }
    return attackType === 'light';
  }

  update(dt) {
    if (this.timer > 0) this.timer = Math.max(0, this.timer - dt);
    if (this.displayTimer > 0) this.displayTimer = Math.max(0, this.displayTimer - dt);
    const now = performance.now() / 1000;
    if (now - this.lastAttackTime > COMBO.window * 2) {
      this.count = 0;
      this.lastAttackType = null;
      this.heavyAfterLight = false;
      this.lightAfterHeavy = false;
      this.finisherAvailable = false;
    }
  }

  getState() {
    return {
      count: this.count,
      timer: this.timer,
      displayTimer: this.displayTimer,
      finisherAvailable: this.finisherAvailable,
      lastAttack: this.lastAttackType,
      heavyAfterLight: this.heavyAfterLight,
      lightAfterHeavy: this.lightAfterHeavy,
    };
  }
}

export class SeveredLimb {
  constructor(limbName, boneIndex, worldPos, worldQuat, boneRadius, ragdoll) {
    this.limbName = limbName;
    this.boneIndex = boneIndex;
    this.worldPos = worldPos.clone();
    this.worldQuat = worldQuat.clone();
    this.boneRadius = boneRadius;
    this.group = getLimbGroup(limbName);
    this.mesh = null;
    this.ragdoll = ragdoll;
    this.velocity = new THREE.Vector3();
    this.angularVelocity = new THREE.Vector3();
    this.alive = true;
    this.age = 0;
    this.lifetime = 12;
    this.attached = true;
  }

  spawnMesh(material) {
    const geo = new THREE.CapsuleGeometry(this.boneRadius * 1.1, this.boneRadius * 3, 8, 8);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.copy(this.worldPos);
    mesh.quaternion.copy(this.worldQuat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.mesh = mesh;
    this.velocity.set(
      (Math.random() - 0.5) * 3,
      2 + Math.random() * 3,
      (Math.random() - 0.5) * 3
    );
    this.angularVelocity.set(
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12
    );
    return mesh;
  }

  update(dt, gravity, physicsWorld) {
    if (!this.alive) return;
    this.age += dt;
    if (this.age > this.lifetime) {
      this.alive = false;
      return;
    }
    if (!this.mesh) return;
    this.velocity.y += gravity * dt;
    this.mesh.position.x += this.velocity.x * dt;
    this.mesh.position.y += this.velocity.y * dt;
    this.mesh.position.z += this.velocity.z * dt;
    this.mesh.rotation.x += this.angularVelocity.x * dt;
    this.mesh.rotation.y += this.angularVelocity.y * dt;
    this.mesh.rotation.z += this.angularVelocity.z * dt;
    const groundY = physicsWorld?.groundHeight?.(this.mesh.position.x, this.mesh.position.z) ?? -Infinity;
    if (this.mesh.position.y < groundY + this.boneRadius) {
      this.mesh.position.y = groundY + this.boneRadius;
      this.velocity.y *= -0.3;
      this.velocity.x *= 0.7;
      this.velocity.z *= 0.7;
      this.angularVelocity.multiplyScalar(0.7);
    }
  }

  dispose() {
    if (this.mesh) {
      this.mesh.geometry?.dispose();
      this.mesh = null;
    }
  }
}

export class MeleeSystem {
  constructor(ctx) {
    this.ctx = ctx;
    this.meleeType = 'blade';
    this.currentAttack = null;
    this.combo = new ComboTracker();
    this.players = new Map();
    this.enemies = new Map();
    this.severedLimbs = [];
    this.limbPool = [];
    this.blocking = false;
    this.parryResult = null;
    this.parryTimer = 0;
    this.staminaDrainTimer = 0;
    this.meleeRange = 1.8;
    this.meleeArc = Math.PI * 0.6;
    this._tmpV3 = new THREE.Vector3();
    this._tmpV3b = new THREE.Vector3();
    this._tmpQuat = new THREE.Quaternion();
    this._rayOrigin = new THREE.Vector3();
    this._rayDir = new THREE.Vector3();
    this._hitResults = [];
    this._physics = null;
    this._fx = null;
    this._audio = null;
    this._rng = null;
    this._off = [];
    this.stats = { attacks: 0, hits: 0, kills: 0, dismemberments: 0, perfectParries: 0 };
  }

  static id = 'melee';
  static deps = ['physics', 'fx', 'audio', 'events'];

  async init(ctx) {
    this.ctx = ctx;
    this._rng = ctx.rng.fork();
    this._physics = ctx.peek('physics');
    this._fx = ctx.peek('fx');
    this._audio = ctx.peek('audio');
    this._off.push(
      ctx.events.on('melee:attack', (e) => this._onMeleeAttack(e)),
      ctx.events.on('melee:block', (e) => this._onBlock(e)),
      ctx.events.on('melee:parry', (e) => this._onParry(e)),
      ctx.events.on('melee:charge_start', (e) => this._onChargeStart(e)),
      ctx.events.on('melee:charge_release', (e) => this._onChargeRelease(e)),
      ctx.events.on('actor:death', (e) => this._onActorDeath(e)),
    );
    this.player = ctx.peek('player');
    this._registerPlayer();
    console.info(`[melee] system initialised · type: ${this.meleeType}`);
  }

  _registerPlayer() {
    if (!this.player) return;
    const limbHealth = new LimbHealth();
    this.players.set(this.player, limbHealth);
    const onDamage = (e) => {
      if (!e || e.target !== this.player) return;
      const reduction = limbHealth.getDamageReduction();
      const actualDamage = e.amount * reduction;
      if (actualDamage <= 0) return;
      const stunChance = e.stunChance ?? 0;
      if (Math.random() < stunChance && limbHealth.stunTimer <= 0) {
        limbHealth.applyStun(0.5 + Math.random() * 0.8);
      }
      if (e.infectionChance && Math.random() < e.infectionChance) {
        limbHealth.infected = true;
        limbHealth.infectionTimer = 10;
      }
      if (limbHealth.blockActive && limbHealth.blockTimer > 0 && !limbHealth.perfectParryTimer) {
        this._parryResult = { type: 'block', blocked: true };
        this.parryTimer = 0.15;
      }
    };
    this._off.push(this.ctx.events.on('damage:dealt', onDamage));
  }

  _onMeleeAttack(e) {
    if (!e) return;
    const attacker = e.attacker;
    const attackType = e.attackType ?? 'light';
    const meleeType = e.meleeType ?? this.meleeType;
    if (this.currentAttack && this.currentAttack.getCanInterrupt()) {
      this.currentAttack.cancel();
    }
    const attack = new MeleeAttack(attackType, meleeType, attacker);
    const limbH = this._getLimbHealth(attacker);
    if (limbH && limbH.stamina < attack.def.staminaCost) return;
    if (limbH) limbH.stamina -= attack.def.staminaCost;
    this.currentAttack = attack;
    this.parryResult = null;
    this.stats.attacks++;
    if (attackType === 'finisher') {
      const comboState = this.combo.getState();
      if (!comboState.finisherAvailable) return;
    }
    this._executeMelee(attack);
  }

  _onBlock(e) {
    if (!e) return;
    const defender = e.target ?? this.player;
    const limbH = this._getLimbHealth(defender);
    if (!limbH) return;
    const result = limbH.tryParry();
    if (result === 'perfect') {
      this.parryResult = { type: 'perfect', target: defender };
      this.parryTimer = PARRY.perfectParryFlashDuration;
      this.stats.perfectParries++;
      this.ctx.events.emit('melee:perfect_parry', { target: defender });
    } else if (result === 'block') {
      this.parryResult = { type: 'block', blocked: true, target: defender };
      this.parryTimer = 0.1;
    }
  }

  _onParry(e) {
    if (!e) return;
  }

  _onChargeStart(e) {
    if (!e || !this.currentAttack) return;
    this.currentAttack.startCharge();
  }

  _onChargeRelease(e) {
    if (!e || !this.currentAttack) return;
    this.currentAttack.releaseCharge();
    this._executeMelee(this.currentAttack);
  }

  _onActorDeath(e) {
    if (!e) return;
    const actor = e.actor;
    if (actor && this.enemies.has(actor)) {
      this.combo.registerKill();
    }
  }

  _getLimbHealth(entity) {
    if (!entity) return null;
    return this.players.get(entity) ?? this.enemies.get(entity) ?? null;
  }

  _registerEnemy(enemy) {
    if (!enemy || this.enemies.has(enemy)) return;
    const limbHealth = new LimbHealth();
    this.enemies.set(enemy, limbHealth);
  }

  _unregisterEnemy(enemy) {
    if (!enemy) return;
    this.enemies.delete(enemy);
  }

  _executeMelee(attack) {
    const origin = this._getMeleeOrigin(attack.owner);
    const dir = this._getMeleeDirection(attack.owner);
    const reach = MELEE_TYPES[attack.meleeType]?.stabReach ?? 1.4;
    const arc = MELEE_TYPES[attack.meleeType]?.slashAngle ?? Math.PI * 0.7;
    const lunge = attack.def.lunge ?? 0.5;
    const hits = this._sweepMelee(origin, dir, reach, arc, lunge, attack.owner);
    const damagedTargets = [];
    for (const hit of hits) {
      if (attack.hitTargets.has(hit.entity)) continue;
      attack.hitTargets.add(hit.entity);
      const limbH = this._getLimbHealth(hit.entity);
      if (!limbH) continue;
      const rawDamage = attack.damage * 34;
      const reduction = limbH.getDamageReduction();
      const actualDamage = rawDamage * (1 - reduction);
      if (actualDamage <= 0) continue;
      const targetLimb = hit.limbName ?? 'torso';
      const result = limbH.damageLimb(targetLimb, actualDamage, attack.meleeType, attack.type);
      if (result.severed && result.limb) {
        this._spawnSeveredLimb(result.limb, hit.point, hit.normal, attack.owner);
        this.stats.dismemberments++;
      }
      if (limbH.stunTimer <= 0 && Math.random() < attack.stunChance) {
        limbH.applyStun(0.5 + Math.random() * 0.7);
      }
      if (attack.infectionChance > 0 && Math.random() < attack.infectionChance) {
        limbH.infected = true;
        limbH.infectionTimer = 10;
      }
      const knockbackVel = dir.clone().multiplyScalar(attack.knockback * 3);
      this._applyKnockback(hit.entity, knockbackVel);
      damagedTargets.push({ entity: hit.entity, damage: actualDamage, result });
      this.stats.hits++;
      const comboState = this.combo.registerHit(attack.type, limbH.staggered);
      if (limbH.alive === false) {
        this.stats.kills++;
        limbH.deathState = result.limb?.name === 'head' ? DEATH_STATE.HEADSHOT : limbH.deathState;
      }
      this.ctx.events.emit('melee:hit', {
        attacker: attack.owner,
        target: hit.entity,
        amount: actualDamage,
        killed: limbH.alive === false,
        headshot: result.limb?.group === 'head',
        limb: result.limb,
        attackType: attack.type,
        meleeType: attack.meleeType,
        comboCount: comboState.count,
        point: hit.point?.clone() ?? null,
        normal: hit.normal?.clone() ?? null,
      });
      this._spawnMeleeImpact(hit.point, hit.normal, attack.meleeType);
    }
    this._playMeleeFeedback(attack, damagedTargets.length > 0);
  }

  _sweepMelee(origin, dir, reach, arc, lunge, owner) {
    const hits = [];
    const physics = this._physics;
    if (!physics) return hits;
    const rng = this._rng;
    const meleeMask = physics.MASK?.CHARACTER ?? 0xffff;
    const enemies = this.enemies;
    for (const [enemy, limbH] of enemies) {
      if (enemy === owner) continue;
      if (!limbH?.alive) continue;
      const pos = enemy.position?.clone?.() ?? enemy.getPosition?.()?.clone?.() ?? new THREE.Vector3();
      const dist = origin.distanceTo(pos);
      if (dist > reach + 0.6) continue;
      const toEnemy = pos.clone().sub(origin).normalize();
      const dot = dir.dot(toEnemy);
      const angleThreshold = Math.cos(arc * 0.5);
      if (dot < angleThreshold && dist > 0.3) continue;
      const limbHits = this._hitLimbCheck(origin, dir, reach, enemy, limbH);
      for (const lh of limbHits) {
        hits.push(lh);
      }
    }
    return hits;
  }

  _hitLimbCheck(origin, dir, reach, enemy, limbH) {
    const hits = [];
    const enemyPos = enemy.position?.clone?.() ?? enemy.getPosition?.()?.clone?.() ?? new THREE.Vector3();
    for (const [name, limb] of Object.entries(limbH.limbs)) {
      if (limb.severed) continue;
      const boneOffset = this._getLimbWorldOffset(enemy, limb.boneIndex, limb.group);
      if (!boneOffset) continue;
      const limbWorldPos = enemyPos.clone().add(boneOffset);
      const dist = origin.distanceTo(limbWorldPos);
      if (dist > reach + 0.4) continue;
      const toLimb = limbWorldPos.clone().sub(origin).normalize();
      const dot = dir.dot(toLimb);
      if (dot < 0.3 && dist > 0.4) continue;
      const radius = LIMB_DEFS[name]?.severThreshold ? LIMB_DEFS[name].severThreshold * 0.04 : 0.08;
      hits.push({
        entity: enemy,
        limbName: name,
        point: limbWorldPos.clone(),
        normal: toLimb.clone().negate(),
        distance: dist,
        radius,
      });
    }
    return hits;
  }

  _getLimbWorldOffset(enemy, boneIndex, group) {
    const offsets = {
      head: new THREE.Vector3(0, 1.55, 0),
      torso: new THREE.Vector3(0, 1.1, 0),
      upperArmL: new THREE.Vector3(-0.3, 1.3, 0),
      upperArmR: new THREE.Vector3(0.3, 1.3, 0),
      forearmL: new THREE.Vector3(-0.3, 1.05, 0),
      forearmR: new THREE.Vector3(0.3, 1.05, 0),
      handL: new THREE.Vector3(-0.3, 0.85, 0),
      handR: new THREE.Vector3(0.3, 0.85, 0),
      thighL: new THREE.Vector3(-0.15, 0.9, 0),
      thighR: new THREE.Vector3(0.15, 0.9, 0),
      shinL: new THREE.Vector3(-0.15, 0.55, 0),
      shinR: new THREE.Vector3(0.15, 0.55, 0),
    };
    return offsets[group] ?? new THREE.Vector3(0, 1.0, 0);
  }

  _getMeleeOrigin(owner) {
    const pos = owner?.position?.clone?.() ?? owner?.eyePosition?.clone?.() ?? new THREE.Vector3();
    pos.y += 1.4;
    return pos;
  }

  _getMeleeDirection(owner) {
    const forward = owner?.forward?.clone?.() ?? new THREE.Vector3(0, 0, -1);
    return forward.normalize();
  }

  _applyKnockback(entity, velocity) {
    if (entity?.applyImpulse) {
      entity.applyImpulse(velocity.x, velocity.y + 2, velocity.z, entity.position.x, entity.position.y, entity.position.z);
    }
    if (entity?.rig?.applyImpulse && entity.ragdoll) {
      entity.rig.applyImpulse(velocity.x, velocity.y + 2, velocity.z);
    }
  }

  _spawnSeveredLimb(limb, point, normal, attacker) {
    const boneIndex = limb.boneIndex;
    const boneRadius = LIMB_DEFS[limb.name]?.severThreshold ? LIMB_DEFS[limb.name].severThreshold * 0.04 : 0.06;
    const severed = new SeveredLimb(limb.name, boneIndex, point, new THREE.Quaternion(), boneRadius, null);
    const matKey = limb.group === 'head' ? 'flesh' : 'flesh';
    const material = this.ctx.mats?.get?.(matKey) ?? new THREE.MeshStandardMaterial({ color: 0xcc4444 });
    const mesh = severed.spawnMesh(material);
    this.ctx.scene?.add?.(mesh);
    this.severedLimbs.push(severed);
    this.ctx.events.emit('melee:dismember', { limb: limb.name, point: point.clone(), normal: normal.clone() });
  }

  _spawnMeleeImpact(point, normal, meleeType) {
    const fx = this._fx;
    if (!fx || !point) return;
    const isBlade = meleeType === 'blade';
    const isInfected = meleeType === 'infected_claw';
    const nSparks = isBlade ? 8 : 4;
    for (let i = 0; i < nSparks; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        Math.random() * 2,
        (Math.random() - 0.5) * 2
      ).normalize();
      const sparkSpeed = 3 + Math.random() * 6;
      this.ctx.events.emit('fx:spark', {
        x: point.x + normal.x * 0.01,
        y: point.y + normal.y * 0.01,
        z: point.z + normal.z * 0.01,
        vx: v.x * sparkSpeed,
        vy: v.y * sparkSpeed + 1,
        vz: v.z * sparkSpeed,
        life: 0.2 + Math.random() * 0.4,
        kelvin: isBlade ? 2200 : 1500,
      });
    }
    if (isInfected) {
      for (let i = 0; i < 6; i++) {
        this.ctx.events.emit('fx:puff', {
          x: point.x,
          y: point.y,
          z: point.z,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 1.5 + 0.5,
          vz: (Math.random() - 0.5) * 2,
          life: 0.4 + Math.random() * 0.6,
          color: [0.2, 0.6, 0.1],
          size: 0.03 + Math.random() * 0.05,
        });
      }
    }
  }

  _playMeleeFeedback(attack, hitSomething) {
    const audio = this._audio;
    if (!audio) return;
    const type = attack.meleeType;
    const atk = attack.type;
    if (hitSomething) {
      audio?.play?.(`melee_${type}_hit`, { gain: 0.8 }) ?? audio?.playUi?.(`melee_hit`, 0.8);
      if (attack.stunChance > 0.2) {
        audio?.play?.('melee_stun', { gain: 0.5 }) ?? audio?.playUi?.('melee_stun', 0.5);
      }
    } else {
      audio?.play?.(`melee_${type}_swing`, { gain: 0.5 }) ?? audio?.playUi?.('melee_swing', 0.5);
    }
  }

  setMeleeType(type) {
    if (MELEE_TYPES[type]) {
      this.meleeType = type;
    }
  }

  getMeleeType() {
    return this.meleeType;
  }

  getCurrentAttack() {
    return this.currentAttack;
  }

  getComboState() {
    return this.combo.getState();
  }

  getParryResult() {
    return this.parryResult;
  }

  getBlockState(limbHealth) {
    if (!limbHealth) return { blocking: false, stamina: 100, parryStun: 0, counterOpen: false, perfectFlash: false };
    return {
      blocking: limbHealth.blockActive,
      stamina: limbHealth.stamina,
      parryStun: limbHealth.parryStunTimer,
      counterOpen: limbHealth.parryCounterOpen,
      perfectFlash: limbHealth.perfectParryFlashTimer > 0,
      stunTimer: limbHealth.stunTimer,
    };
  }

  update(dt) {
    if (this.currentAttack) {
      this.currentAttack.update(dt);
      if (this.currentAttack.finished) {
        this.currentAttack = null;
      }
    }
    this.combo.update(dt);
    if (this.parryTimer > 0) this.parryTimer = Math.max(0, this.parryTimer - dt);
    if (this.parryResult && this.parryTimer <= 0) {
      this.parryResult = null;
    }
    for (const [, limbH] of this.players) limbH.update(dt);
    for (const [, limbH] of this.enemies) limbH.update(dt);
    for (let i = this.severedLimbs.length - 1; i >= 0; i--) {
      const sl = this.severedLimbs[i];
      sl.update(dt, -20.6, this._physics);
      if (!sl.alive) {
        sl.dispose();
        this.severedLimbs.splice(i, 1);
      }
    }
    if (this.player) {
      const playerLimb = this.players.get(this.player);
      if (playerLimb) {
        if (playerLimb.infected) {
          playerLimb.infectionTimer -= dt;
          if (playerLimb.infectionTimer <= 0) playerLimb.infected = false;
        }
      }
    }
  }

  lateUpdate(dt) {
    this.update(dt);
  }

  dispose() {
    for (const off of this._off ?? []) off?.();
    for (const sl of this.severedLimbs) sl.dispose();
    this.severedLimbs.length = 0;
  }
}
