import * as THREE from 'three';

export class FxSystem {
  static id = 'fx';
  static deps = ['render', 'weapons'];

  async init(ctx) {
    this._ctx = ctx;
    this._weapons = ctx.get('weapons');
    this._rng = ctx.rng.fork();

    const flashGeo = new THREE.PlaneGeometry(0.08, 0.08);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffffaa,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      side: THREE.DoubleSide,
    });
    this._flash = new THREE.Mesh(flashGeo, flashMat);
    this._flash.position.set(0, 0.05, -0.675);
    this._flash.visible = false;
    this._weapons._weaponGroup.add(this._flash);

    this._flashTimer = 0;

    const tracerGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(6);
    tracerGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const tracerMat = new THREE.LineBasicMaterial({
      color: 0xffffee,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });
    this._tracer = new THREE.Line(tracerGeo, tracerMat);
    this._tracer.visible = false;
    ctx.viewScene.add(this._tracer);

    this._tracerAge = 0;

    console.log('[fx] ready — particles deferred');
  }

  update(dt, ctx) {
    const input = ctx.input;

    if (input.firePressed) {
      this._flash.visible = true;
      this._flashTimer = 0.05;
      const scale = 0.8 + this._rng.float() * 0.4;
      this._flash.scale.setScalar(scale);
    }

    if (this._flashTimer > 0) {
      this._flashTimer -= dt;
      if (this._flashTimer <= 0) {
        this._flash.visible = false;
      }
    }
  }

  lateUpdate(dt, ctx) {
    if (this._tracerAge > 0) {
      this._tracerAge -= dt;
      if (this._tracerAge <= 0) {
        this._tracer.visible = false;
      }
    }
  }

  dispose() {
    if (this._flash) {
      this._weapons._weaponGroup.remove(this._flash);
      this._flash.geometry.dispose();
      this._flash.material.dispose();
    }
    if (this._tracer) {
      this._ctx.viewScene.remove(this._tracer);
      this._tracer.geometry.dispose();
      this._tracer.material.dispose();
    }
  }
}
