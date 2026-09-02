import * as THREE from 'three';

const SPAWN_POINTS = [
  [10, 1.5, 15],
  [-15, 1.5, -10],
  [5, 1.5, -20],
  [-8, 1.5, 8],
  [12, 1.5, -15],
];

const CHASE_DIST = 20;
const MOVE_SPEED = 3.5;

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
    this._matInfected = ctx.get('materials').get('infected');
    this._matFlesh = ctx.get('materials').get('flesh');
    this._matClaws = ctx.get('materials').get('metal_brushed');

    const geoBody = new THREE.CapsuleGeometry(0.5, 1.4, 4, 8);
    const geoHead = new THREE.SphereGeometry(0.28, 8, 6);
    const geoClaw = new THREE.ConeGeometry(0.06, 0.4, 4);
    this._geometries.push(geoBody, geoHead, geoClaw);

    for (let i = 0; i < SPAWN_POINTS.length; i++) {
      const [x, y, z] = SPAWN_POINTS[i];
      const group = new THREE.Group();
      group.name = `infected_${i}`;

      const body = new THREE.Mesh(geoBody, this._matInfected);
      body.position.y = 1.1;
      group.add(body);

      const head = new THREE.Mesh(geoHead, this._matFlesh);
      head.position.y = 1.9;
      group.add(head);

      const leftClaw = new THREE.Mesh(geoClaw, this._matClaws);
      leftClaw.position.set(-0.5, 1.3, -0.3);
      leftClaw.rotation.x = Math.PI / 2;
      group.add(leftClaw);

      const rightClaw = new THREE.Mesh(geoClaw, this._matClaws);
      rightClaw.position.set(0.5, 1.3, -0.3);
      rightClaw.rotation.x = Math.PI / 2;
      group.add(rightClaw);

      const hump = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 4), this._matInfected);
      hump.position.set(0, 1.7, -0.2);
      hump.scale.set(1, 0.6, 0.8);
      group.add(hump);

      group.position.set(x, y, z);
      group.scale.setScalar(1.05);
      this._scene.add(group);
      this._actors.push({
        group,
        speed: MOVE_SPEED + (i * 0.3),
        state: 'idle',
      });
    }

    console.info(`[ai] ${this._actors.length} infected actors spawned`);
  }

  update(dt, ctx) {
    if (!this._actors.length) return;
    const playerPos = this._player._mesh?.position;
    if (!playerPos) return;

    for (const actor of this._actors) {
      const dir = this._tmpDir.copy(playerPos).sub(actor.group.position);
      const dist = dir.length();
      dir.y = 0;
      const distXZ = dir.length();
      if (distXZ > 0.01) dir.normalize();

      if (distXZ < CHASE_DIST) {
        actor.state = 'chase';
        actor.group.position.x += dir.x * actor.speed * dt;
        actor.group.position.z += dir.z * actor.speed * dt;
        if (distXZ > 0.01) {
          actor.group.rotation.y = Math.atan2(dir.x, dir.z);
        }
      } else {
        actor.state = 'idle';
      }
    }
  }

  prewarmMaterials(ctx) {
    const r = ctx.get('render');
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    mesh.material = this._matInfected;
    scene.add(mesh);
    return r.renderer.compileAsync(scene, ctx.camera).then(() => scene.clear());
  }

  dispose() {
    for (const actor of this._actors) {
      this._scene.remove(actor.group);
      actor.group.traverse((c) => {
        c.geometry = undefined;
        if (c.material) {
          if (Array.isArray(c.material)) c.material.forEach(m => m.dispose());
          else c.material.dispose();
        }
      });
    }
    for (const g of this._geometries) g.dispose();
    this._actors = [];
    this._geometries = [];
  }
}
