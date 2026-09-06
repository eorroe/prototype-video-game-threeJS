import * as THREE from 'three';
import { emptyMesh, appendMesh, buildBufferGeometry, computeNormals, displace } from '../player/geo.js';
import { MORPH } from './tuning.js';

const FORMS = {
  none: {
    id: 'none',
    label: 'Default',
    color: [0, 0, 0],
    colorIntensity: 0,
    energyCost: 0,
    energyDrainPerSec: 0,
    cooldown: 0,
    canClimb: false,
    silent: false,
    meleeMultiplier: 1,
    disguises: false,
  },
  blade: {
    id: 'blade',
    label: 'Blade',
    color: [0.75, 0.04, 0.04],
    colorIntensity: 0.55,
    energyCost: 12,
    energyDrainPerSec: 4,
    cooldown: 1.2,
    canClimb: false,
    silent: false,
    meleeMultiplier: 3,
    disguises: false,
    reach: 3.2,
    trail: true,
  },
  claw: {
    id: 'claw',
    label: 'Claw',
    color: [0.06, 0.06, 0.08],
    colorIntensity: 0.7,
    energyCost: 10,
    energyDrainPerSec: 2.5,
    cooldown: 0.9,
    canClimb: true,
    silent: true,
    meleeMultiplier: 1.8,
    disguises: false,
    climbSurfaces: new Set(['metal_vent', 'wood_rough', 'concrete_wall', 'stone', 'fabric']),
  },
  tail: {
    id: 'tail',
    label: 'Tail',
    color: [0.12, 0.45, 0.12],
    colorIntensity: 0.6,
    energyCost: 14,
    energyDrainPerSec: 5,
    cooldown: 1.5,
    canClimb: false,
    silent: false,
    meleeMultiplier: 1,
    disguises: false,
    aoeRadius: 3.5,
    whipDamage: 45,
    canGrab: true,
  },
  disguise: {
    id: 'disguise',
    label: 'Disguise',
    color: [0.9, 0.88, 0.82],
    colorIntensity: 0,
    energyCost: 8,
    energyDrainPerSec: 1.5,
    cooldown: 2.0,
    canClimb: false,
    silent: true,
    meleeMultiplier: 1,
    disguises: true,
  },
};

const ENERGY_MAX = MORPH.energyMax;
const ENERGY_REGEN_RATE = MORPH.energyRegen;
const TRAIL_LIFETIME = MORPH.blade.trailLife;

const BLADE_COLOR = new THREE.Color(0.95, 0.12, 0.08);
const CLAW_COLOR = new THREE.Color(0.04, 0.04, 0.06);
const TAIL_COLOR = new THREE.Color(0.1, 0.55, 0.12);

export class MorphSystem {
  static id = 'morph';
  static deps = [];

  constructor() {
    this.form = 'none';
    this.energy = ENERGY_MAX;
    this.cooldownTimer = 0;
    this.abilityActive = false;
    this.abilityTimer = 0;
    this.transitionProgress = 0;
    this.transitioning = false;

    this.animTime = 0;
    this.bladeExtension = 0;
    this.tailPhase = 0;
    this.clawGrip = 0;

    this.trailParticles = [];
    this._trailTimer = 0;

    this.disguiseBuffer = null;
    this._disguiseGeo = null;
    this._disguiseMats = null;

    this.playerGeoGroup = null;
    this.playerColorAttr = null;
    this.originalColors = null;
    this.formBlendAttr = null;
    this._playerMeshes = [];
    this.materials = null;

    this._onKillOff = null;
    this._onTransformOff = null;
  }

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this._wireEvents(ctx);
  }

  _wireEvents(ctx) {
    const ev = ctx.events;
    this._onKillOff = ev.on('actor:death', (e) => this._onEnemyKilled(e));
    this._onTransformOff = ev.on('morph:transform', (e) => {
      if (e?.form && FORMS[e.form]) this.transformTo(e.form);
    });
  }

  _onEnemyKilled(e) {
    if (this.form !== 'disguise') return;
    const actor = e?.actor;
    const variant = actor?.variant ?? actor?.modelVariant ?? null;
    if (!variant) return;
    this.disguiseBuffer = {
      variant,
      soldierData: actor?.soldierData ?? null,
      timestamp: this.ctx?.time?.elapsed ?? 0,
    };
  }

  update(dt, ctx) {
    if (dt <= 0) return;

    if (this.cooldownTimer > 0) {
      this.cooldownTimer = Math.max(0, this.cooldownTimer - dt);
    }

    this._regenerateEnergy(dt);

    const f = FORMS[this.form];
    if (f && f.energyDrainPerSec > 0 && this.abilityActive) {
      this.energy = Math.max(0, this.energy - f.energyDrainPerSec * dt);
      if (this.energy <= 0) {
        this.abilityActive = false;
        this.transformTo('none');
      }
    }

    this.animTime += dt;

    if (this.form === 'blade') {
      this.bladeExtension = Math.min(1, this.bladeExtension + dt * 6);
      if (f.trail) this._updateTrail(dt, ctx);
    } else {
      this.bladeExtension = Math.max(0, this.bladeExtension - dt * 8);
      this._clearTrail();
    }

    if (this.form === 'tail') {
      this.tailPhase += dt * 3.5;
    }

    if (this.form === 'claw') {
      this.clawGrip = Math.min(1, this.clawGrip + dt * 5);
    } else {
      this.clawGrip = Math.max(0, this.clawGrip - dt * 4);
    }

    if (this.transitioning) {
      this.transitionProgress = Math.min(1, this.transitionProgress + dt * 7);
      if (this.transitionProgress >= 1) {
        this.transitioning = false;
        this.transitionProgress = 1;
      }
    }

    this._syncFormColor();
  }

  _regenerateEnergy(dt) {
    const drain = FORMS[this.form]?.energyDrainPerSec ?? 0;
    if (drain === 0 || !this.abilityActive) {
      const rate = drain > 0 ? ENERGY_REGEN_RATE * 0.3 : ENERGY_REGEN_RATE;
      this.energy = Math.min(ENERGY_MAX, this.energy + rate * dt);
    }
  }

  transformTo(formId) {
    if (formId === this.form) return false;
    const target = FORMS[formId];
    if (!target) return false;

    if (this.form !== 'none' && this.cooldownTimer > 0) return false;

    const cost = target.energyCost;
    if (cost > 0 && this.energy < cost) return false;

    if (cost > 0) this.energy -= cost;
    this.cooldownTimer = target.cooldown;

    const prevForm = this.form;
    this.form = formId;
    this.abilityActive = true;
    this.abilityTimer = 0;
    this.transitionProgress = 0;
    this.transitioning = true;

    if (this.form === 'blade') this.bladeExtension = 0;
    if (this.form === 'claw') this.clawGrip = 0;
    if (this.form === 'disguise' && !this.disguiseBuffer) {
      this.disguiseBuffer = { variant: 'vanguard', soldierData: null, timestamp: 0 };
    }

    this._applyFormGeo();

    this.ctx?.events?.emit('player:transform', {
      form: formId,
      from: prevForm,
      energy: this.energy,
      label: target.label,
    });

    this._playTransformSound(formId, prevForm);
    return true;
  }

  triggerAbility() {
    if (!this.abilityActive || this.cooldownTimer > 0) return null;
    const f = FORMS[this.form];
    if (!f || this.form === 'none') return null;

    this.ctx?.events?.emit('player:ability', { form: this.form });
    return { form: this.form, meleeMultiplier: f.meleeMultiplier };
  }

  activateAbility() {
    if (this.form === 'none') return false;
    this.abilityActive = true;
    return true;
  }

  deactivateAbility() {
    this.abilityActive = false;
  }

  getEnergyFraction() { return this.energy / ENERGY_MAX; }
  getCooldownFraction() {
    const f = FORMS[this.form];
    return f ? this.cooldownTimer / f.cooldown : 0;
  }
  getFormLabel() { return FORMS[this.form]?.label ?? 'Default'; }
  getMeleeMultiplier() { return FORMS[this.form]?.meleeMultiplier ?? 1; }
  canClimb() { return FORMS[this.form]?.canClimb ?? false; }
  getClimbSurfaces() { return FORMS[this.form]?.climbSurfaces ?? null; }
  isSilent() { return FORMS[this.form]?.silent ?? false; }
  getFormColor() { return FORMS[this.form]?.color ?? [0, 0, 0]; }
  getColorIntensity() { return FORMS[this.form]?.colorIntensity ?? 0; }

  setPlayerGeoGroup(group) { this.playerGeoGroup = group; }
  setPlayerColorAttr(attr) { this.playerColorAttr = attr; }
  setFormBlendAttr(attr) { this.formBlendAttr = attr; }
  setMaterials(mats) { this.materials = mats; }
  addPlayerMesh(mesh) { this._playerMeshes.push(mesh); }

  storeOriginalColors() {
    if (!this.playerColorAttr) return;
    const arr = this.playerColorAttr.array;
    this.originalColors = new Float32Array(arr.length);
    this.originalColors.set(arr);
  }

  _applyFormGeo() {
    if (!this.playerGeoGroup) return;
    const f = FORMS[this.form];
    if (!f || this.form === 'none' || this.form === 'disguise') {
      this._restoreBaseGeo();
      return;
    }
    this._storeBaseGeo();
    const baseMesh = this.playerGeoGroup.getObjectByProperty('name', 'player-base');
    if (!baseMesh) return;
    const geo = baseMesh.geometry;
    const modifier = this._geoModifiers[this.form];
    if (modifier) modifier(geo, this.rng);
  }

  _storeBaseGeo() {
    if (this._baseGeoStored || !this.playerGeoGroup) return;
    const baseMesh = this.playerGeoGroup.getObjectByProperty('name', 'player-base');
    if (!baseMesh) return;
    this._storedBaseGeo = baseMesh.geometry.clone();
    this._baseGeoStored = true;
  }

  _restoreBaseGeo() {
    if (!this._storedBaseGeo || !this.playerGeoGroup) return;
    const baseMesh = this.playerGeoGroup.getObjectByProperty('name', 'player-base');
    if (!baseMesh) return;
    baseMesh.geometry.dispose();
    baseMesh.geometry = this._storedBaseGeo.clone();
    if (this.playerColorAttr && this.originalColors) {
      this.playerColorAttr.array.set(this.originalColors);
      this.playerColorAttr.needsUpdate = true;
    }
    if (this.formBlendAttr) {
      const arr = this.formBlendAttr.array;
      for (let i = 0; i < arr.length; i++) arr[i] = 0;
      this.formBlendAttr.needsUpdate = true;
    }
  }

  _syncFormColor() {
    if (this.formBlendAttr) {
      const arr = this.formBlendAttr.array;
      const intensity = this.getColorIntensity();
      const t = this.transitioning ? this.transitionProgress : 1;
      const val = intensity * t;
      for (let i = 0; i < arr.length; i++) arr[i] = val;
      this.formBlendAttr.needsUpdate = true;
    }
    const mats = this.materials;
    if (!mats?.tune) return;
    const color = this.getFormColor();
    const intensity = this.getColorIntensity();
    const t = this.transitioning ? this.transitionProgress : 1;
    const ci = intensity * t;
    if (ci < 0.001) {
      mats.tune(null, { formColor: [0, 0, 0], formIntensity: 0 });
      return;
    }
    const tc = new THREE.Color(color[0], color[1], color[2]);
    for (const mesh of this._playerMeshes) {
      if (mesh.material) mats.tune(mesh.material, { formColor: tc, formIntensity: ci });
    }
  }

  _updateTrail(dt, ctx) {
    this._trailTimer += dt;
    const pos = ctx?.camera?.position;
    if (!pos || this._trailTimer < 0.04) return;
    this._trailTimer = 0;
    this.trailParticles.push({
      position: pos.clone().add(new THREE.Vector3(
        this.rng.range(-0.06, 0.06),
        this.rng.range(-0.1, 0.05),
        this.rng.range(-0.06, 0.06)
      )),
      life: TRAIL_LIFETIME,
      maxLife: TRAIL_LIFETIME,
      size: this.rng.range(0.015, 0.055),
    });
    if (this.trailParticles.length > 60) this.trailParticles.shift();
    for (let i = this.trailParticles.length - 1; i >= 0; i--) {
      this.trailParticles[i].life -= dt;
      if (this.trailParticles[i].life <= 0) this.trailParticles.splice(i, 1);
    }
  }

  _clearTrail() {
    this.trailParticles = [];
  }

  _buildBladeGeo() {
    const m = emptyMesh();
    const ext = this.bladeExtension;
    const len = 0.28 * ext;
    const w = 0.018;
    const nx = [[-w, 0, 0], [w, 0, 0]];
    const pts = [
      [0, 0, 0], [0, 0, 0],
      [0, len * 0.5, -w * 1.2], [0, len * 0.5, w * 1.2],
      [0, len, -w * 0.3], [0, len, w * 0.3],
      [0, len + 0.04, 0],
    ];
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -Math.PI * 0.5));
    const v = new THREE.Vector3();
    const idx = [0, 2, 1, 1, 2, 3, 2, 4, 3, 3, 4, 5, 4, 6, 5];
    for (const i of idx) {
      v.set(...pts[i]);
      v.applyQuaternion(q);
      m.p.push(v.x, v.y, v.z);
      m.n.push(0, 0, 1);
      m.uv.push(0, 0);
    }
    m.i.push(...Array.from({ length: idx.length / 3 }, (_, i) => [i * 3, i * 3 + 1, i * 3 + 2]));
    computeNormals(m);
    return buildBufferGeometry(m);
  }

  _buildClawGeo() {
    const m = emptyMesh();
    const len = 0.055 + this.clawGrip * 0.04;
    const tip = [[0, len, 0]];
    const base = [
      [-0.012, 0, -0.008], [0.012, 0, -0.008],
      [-0.012, 0, 0.008], [0.012, 0, 0.008],
    ];
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.3, 0, 0));
    const v = new THREE.Vector3();
    const all = [...base, ...tip];
    for (const p of all) { v.set(...p).applyQuaternion(q); m.p.push(v.x, v.y, v.z); m.n.push(0, 0, 1); m.uv.push(0, 0); }
    const idx = [0, 4, 1, 1, 4, 5, 2, 5, 3, 3, 5, 4];
    for (const i of idx) { m.i.push(i); }
    computeNormals(m);
    return buildBufferGeometry(m);
  }

  _buildTailGeo() {
    const m = emptyMesh();
    const segs = 9;
    const totalLen = 0.95;
    const maxR = 0.07;
    const phase = this.tailPhase;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const r = maxR * (1 - t * 0.85) * (0.85 + 0.15 * Math.sin(t * Math.PI * 3 + phase));
      const y = -t * totalLen;
      const x = Math.sin(t * Math.PI * 1.8 + phase) * 0.04;
      const z = Math.cos(t * Math.PI * 1.3 + phase * 0.7) * 0.03;
      const k = 20;
      for (let j = 0; j < k; j++) {
        const a = (j / k) * Math.PI * 2;
        m.p.push(x + Math.cos(a) * r, y, z + Math.sin(a) * r);
        m.n.push(Math.cos(a), 0, Math.sin(a));
        m.uv.push(j / k, t);
      }
    }
    for (let r = 0; r < segs; r++) {
      for (let c = 0; c < 20; c++) {
        const a = r * 21 + c, b = a + 1, d = (r + 1) * 21 + c, e = d + 1;
        m.i.push(a, d, b, b, d, e);
      }
    }
    computeNormals(m);
    return buildBufferGeometry(m);
  }

  _geoModifiers = {
    blade: (geo, rng) => {
      displace(geo, (x, y, z) => {
        const ridge = 1 - Math.abs(y * 8 - 3.5) / 3.5;
        return Math.max(0, ridge * 0.018);
      });
      if (geo.attributes.color) {
        const c = geo.attributes.color.array;
        for (let i = 0; i < c.length; i += 3) {
          const ridge = 1 - Math.abs(c[i + 1] * 2 - 0.5);
          c[i] = Math.min(1, c[i] + 0.3 * ridge);
          c[i + 1] *= 0.4;
          c[i + 2] *= 0.3;
        }
        geo.attributes.color.needsUpdate = true;
      }
    },
    claw: (geo, rng) => {
      displace(geo, (x, y, z) => {
        const w = Math.abs(x) < 0.03 ? 0.012 : 0;
        return w;
      });
      if (geo.attributes.color) {
        const c = geo.attributes.color.array;
        for (let i = 0; i < c.length; i += 3) {
          c[i] *= 0.25;
          c[i + 1] *= 0.22;
          c[i + 2] *= 0.28;
        }
        geo.attributes.color.needsUpdate = true;
      }
    },
    tail: (geo, rng) => {
      displace(geo, (x, y, z) => {
        const vein = Math.sin(y * 14 + rng?.range?.(0, 6) ?? 0) * 0.5 + 0.5;
        return vein > 0.82 ? vein * 0.025 : 0;
      });
      if (geo.attributes.color) {
        const c = geo.attributes.color.array;
        for (let i = 0; i < c.length; i += 3) {
          c[i] *= 0.45;
          c[i + 1] = Math.min(1, c[i + 1] * 0.75 + 0.15);
          c[i + 2] *= 0.35;
        }
        geo.attributes.color.needsUpdate = true;
      }
    },
  };

  getTrailParticles() { return this.trailParticles; }

  _playTransformSound(formId, prevForm) {
    try {
      const audio = this.ctx?.get?.('audio');
      if (!audio?.play) return;
      const freqs = { blade: 320, claw: 180, tail: 90, disguise: 440, none: 600 };
      const freq = freqs[formId] ?? 400;
      audio.play('morph_transform', null, { morphFreq: freq, morphForm: formId, level: 0.6 });
    } catch { /* audio not ready */ }
  }

  dispose() {
    if (this._onKillOff) { this._onKillOff(); this._onKillOff = null; }
    if (this._onTransformOff) { this._onTransformOff(); this._onTransformOff = null; }
    this._clearTrail();
    if (this._storedBaseGeo) { this._storedBaseGeo.dispose(); this._storedBaseGeo = null; }
  }
}
