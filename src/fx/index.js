import * as THREE from 'three';

export class FxSystem {
  static id = 'fx';
  static deps = ['render', 'weapons'];

  constructor() {
    this._slices = [];
    this._geometries = [];
    this._materials = [];
    this._built = false;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._scene = ctx.scene;
    this._built = true;
    console.info('[fx] ready — slice/power effects');
  }

  spawnSlice(origin, dir) {
    const geo = new THREE.BoxGeometry(0.08, 0.08, 1.2);
    const mat = new THREE.MeshBasicMaterial({ color: 0x88aacc, transparent: true, opacity: 0.9 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(origin);
    mesh.lookAt(origin.clone().add(dir));
    mesh.userData.life = 0.12;
    this._scene.add(mesh);
    this._slices.push(mesh);
    this._geometries.push(geo);
    this._materials.push(mat);
  }

  update(dt, ctx) {
    for (let i = this._slices.length - 1; i >= 0; i--) {
      const s = this._slices[i];
      s.userData.life -= dt;
      if (s.userData.life <= 0) {
        this._scene.remove(s);
        s.geometry.dispose();
        s.material.dispose();
        this._slices.splice(i, 1);
        this._geometries.splice(i, 1);
        this._materials.splice(i, 1);
      }
    }
  }

  lateUpdate(dt, ctx) {}

  dispose() {
    for (const s of this._slices) {
      this._scene.remove(s);
      s.geometry.dispose();
      s.material.dispose();
    }
    this._slices.length = 0;
    this._geometries.length = 0;
    this._materials.length = 0;
  }
}
