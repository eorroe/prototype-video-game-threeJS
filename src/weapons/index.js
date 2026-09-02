import * as THREE from 'three';

export class WeaponSystem {
  static id = 'weapons';
  static deps = ['render', 'player'];

  constructor() {
    this._form = 'claws';
    this._active = false;
    this._cooldown = 0;
    this._forms = ['claws', 'blade', 'hammer'];
    this._built = false;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._player = ctx.get('player');
    this._scene = ctx.scene;
    this._fx = ctx.peek('fx');
    this._rng = ctx.rng.fork();
    this._cooldown = 0;
    this._built = true;
    console.info('[weapons] shape-shift forms ready: claws, blade, hammer');
  }

  update(dt, ctx) {
    if (!this._built) return;
    if (this._cooldown > 0) this._cooldown -= dt;

    if (this._cooldown <= 0 && ctx.input.actionPressed('fire')) {
      this._cooldown = 0.4;
      this._performAttack(ctx);
    }

    if (ctx.input.actionPressed('reload')) {
      this._cycleForm();
    }
  }

  _performAttack(ctx) {
    const player = this._player._mesh;
    if (!player) return;
    const origin = player.position.clone();
    origin.y += 1.2;
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(player.getWorldQuaternion(new THREE.Quaternion()));
    ctx.events.emit('weapon:fire', { weapon: this._form, origin, dir, seed: this._rng.u32() });

    if (this._fx?.spawnSlice) {
      this._fx.spawnSlice(origin, dir);
    }
  }

  _cycleForm() {
    const idx = (this._forms.indexOf(this._form) + 1) % this._forms.length;
    this._form = this._forms[idx];
    console.info(`[weapons] form: ${this._form}`);
  }

  dispose() {
    this._built = false;
  }
}
