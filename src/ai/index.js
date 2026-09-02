import * as THREE from 'three';

const CAMO_PALETTE = {
  camo_arid:    { albedo: [0.55, 0.42, 0.28], roughness: 0.9,  metal: 0 },
  camo_woodland:{ albedo: [0.15, 0.22, 0.10], roughness: 0.95, metal: 0 },
  camo_urban:   { albedo: [0.38, 0.40, 0.44], roughness: 0.85, metal: 0 },
};

function makeCamoMat(name) {
  const p = CAMO_PALETTE[name] || CAMO_PALETTE.camo_arid;
  return new THREE.MeshStandardMaterial({
    name,
    color: new THREE.Color(p.albedo[0], p.albedo[1], p.albedo[2]),
    roughness: p.roughness,
    metalness: p.metal,
    envMapIntensity: 0.5,
  });
}

const SPAWN_POINTS = [
  [10, 1.5, 15],
  [-15, 1.5, -10],
  [5, 1.5, -20],
];

const CHASE_DIST = 5;
const STOP_DIST = 3;
const MOVE_SPEED = 1.5;

export class AiSystem {
  static id = 'ai';
  static deps = ['world', 'player'];

  constructor() {
    this._actors = [];
    this._geometries = [];
    this._materials = new Map();
    this._tmpDir = new THREE.Vector3();
  }

  async init(ctx) {
    this.ctx = ctx;
    this._scene = ctx.scene;
    this._player = ctx.get('player');
    this._rng = ctx.rng.fork();

    for (const name of Object.keys(CAMO_PALETTE)) {
      this._materials.set(name, makeCamoMat(name));
    }

    const bodyGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.2, 8);
    bodyGeo.translate(0, 0.6, 0);
    const headGeo = new THREE.SphereGeometry(0.3, 8, 6);
    headGeo.translate(0, 1.35, 0);
    this._geometries.push(bodyGeo, headGeo);

    const mat = this._materials.get('camo_arid');

    for (const pos of SPAWN_POINTS) {
      const group = new THREE.Group();
      group.name = 'enemy';

      const body = new THREE.Mesh(bodyGeo, mat);
      const head = new THREE.Mesh(headGeo, mat);
      group.add(body, head);

      group.position.set(pos[0], pos[1], pos[2]);
      group.rotation.y = this._rng.range(0, Math.PI * 2);

      this._scene.add(group);
      this._actors.push(group);
    }

    console.log('[ai] 3 actors · simple behaviour');
  }

  update(dt, ctx) {
    const playerPos = this._player._position;
    const dir = this._tmpDir;

    for (const actor of this._actors) {
      const dx = playerPos.x - actor.position.x;
      const dz = playerPos.z - actor.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      const lookTarget = new THREE.Vector3(playerPos.x, actor.position.y, playerPos.z);
      actor.lookAt(lookTarget);

      if (dist > CHASE_DIST) {
        dir.set(dx, 0, dz).normalize();
        actor.position.x += dir.x * MOVE_SPEED * dt;
        actor.position.z += dir.z * MOVE_SPEED * dt;
      }
    }
  }

  prewarmMaterials(ctx) {
    const r = ctx.get('render');
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    for (const mat of this._materials.values()) {
      mesh.material = mat;
      scene.add(mesh);
    }
    return r.renderer.compileAsync(scene, ctx.camera).then(() => scene.clear());
  }

  dispose() {
    for (const actor of this._actors) {
      this._scene.remove(actor);
      actor.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    this._actors = [];
    this._geometries = [];
    this._materials.clear();
  }
}
