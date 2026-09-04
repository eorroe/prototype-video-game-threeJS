import * as THREE from 'three';
import { Noise, superEllipse, loft, ellipsoid, boxRound, computeNormals, displace, warp, buildBufferGeometry } from './geo.js';
import { bakeAO, bakeGrime, bakeRim, bakeColor, buildBufferGeometryWithColors } from '../player/vertexColors.js';

const SPAWN_POINTS = [
  [10, 2, 20],
  [-15, 2, -10],
  [5, 2, -20],
  [-8, 2, 12],
  [12, 2, -18],
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

  _buildBody(rng) {
    const noise = new Noise(rng);
    const rings = [];
    const seg = 20;
    const rows = 14;
    for (let r = 0; r < rows; r++) {
      const t = r / (rows - 1);
      const y = (t - 0.5) * 2.0;
      const bulge = 0.7 + 0.3 * Math.sin(t * Math.PI);
      const rx = 0.65 * bulge;
      const rz = 0.5 * bulge;
      rings.push({ pts: superEllipse(rx, rz, 2.5, seg), y });
    }
    const mesh = loft(rings, { capStart: true, capEnd: true });
    displace(mesh, (x, y, z, nx, ny, nz) => {
      return 0.06 * noise.fbm3(x * 4, y * 4, z * 4, 4);
    });
    computeNormals(mesh);
    bakeAO(mesh, noise, 0.6);
    bakeGrime(mesh, noise, 0.3);
    bakeRim(mesh, 0.4, 2.0);
    bakeColor(mesh, noise, 0.40, 0.50, 0.35, 0.3);
    const geo = buildBufferGeometryWithColors(mesh);
    return geo;
  }

  _buildHead(rng) {
    const noise = new Noise(rng);
    const mesh = ellipsoid(0.35, 0.4, 0.32, { v0: 0, v1: 0.85, seg: 16, rows: 10 });
    warp(mesh, (v, i) => {
      if (v.y < -0.05) {
        const t = Math.max(0, (-v.y - 0.05) / 0.35);
        v.z += 0.2 * t;
      }
    });
    displace(mesh, (x, y, z) => {
      return 0.015 * noise.fbm3(x * 8, y * 8, z * 8, 3);
    });
    computeNormals(mesh);
    bakeAO(mesh, noise, 0.6);
    bakeGrime(mesh, noise, 0.3);
    bakeRim(mesh, 0.4, 2.0);
    bakeColor(mesh, noise, 0.60, 0.50, 0.45, 0.3);
    const geo = buildBufferGeometryWithColors(mesh);
    return geo;
  }

  _buildClaw() {
    const rings = [];
    const seg = 10;
    for (let r = 0; r < 8; r++) {
      const t = r / 7;
      const rx = 0.1 * (1 - t * 0.7);
      const rz = 0.1 * (1 - t * 0.7);
      const y = t * 0.6;
      rings.push({ pts: superEllipse(rx, rz, 2, seg), y });
    }
    const mesh = loft(rings, { capStart: true, capEnd: true });
    computeNormals(mesh);
    return buildBufferGeometry(mesh);
  }

  _buildHump(rng) {
    const noise = new Noise(rng);
    const mesh = ellipsoid(0.35, 0.25, 0.28, { v0: 0.1, v1: 0.7, seg: 12, rows: 8 });
    displace(mesh, (x, y, z) => {
      return 0.035 * noise.fbm3(x * 5, y * 5, z * 5, 3);
    });
    computeNormals(mesh);
    bakeAO(mesh, noise, 0.6);
    bakeGrime(mesh, noise, 0.3);
    bakeRim(mesh, 0.4, 2.0);
    bakeColor(mesh, noise, 0.35, 0.45, 0.30, 0.3);
    const geo = buildBufferGeometryWithColors(mesh);
    return geo;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._scene = ctx.scene;
    this._player = ctx.get('player');
    this._matInfected = ctx.get('materials').get('infected');
    this._matFlesh = ctx.get('materials').get('flesh');
    this._matClaws = ctx.get('materials').get('metal_brushed');

    const geoClaw = this._buildClaw();
    this._geometries.push(geoClaw);

    for (let i = 0; i < SPAWN_POINTS.length; i++) {
      const [x, y, z] = SPAWN_POINTS[i];
      const rng = ctx.rng.fork(i);

      const group = new THREE.Group();
      group.name = `infected_${i}`;

      const geoBody = this._buildBody(rng);
      this._geometries.push(geoBody);
      const body = new THREE.Mesh(geoBody, this._matInfected);
      body.position.y = 1.4;
      group.add(body);

      const geoHead = this._buildHead(rng);
      this._geometries.push(geoHead);
      const head = new THREE.Mesh(geoHead, this._matFlesh);
      head.position.y = 2.4;
      group.add(head);

      const leftClaw = new THREE.Mesh(geoClaw, this._matClaws);
      leftClaw.position.set(-0.65, 1.6, -0.4);
      leftClaw.rotation.x = Math.PI / 2;
      group.add(leftClaw);

      const rightClaw = new THREE.Mesh(geoClaw, this._matClaws);
      rightClaw.position.set(0.65, 1.6, -0.4);
      rightClaw.rotation.x = Math.PI / 2;
      group.add(rightClaw);

      const geoHump = this._buildHump(rng);
      this._geometries.push(geoHump);
      const hump = new THREE.Mesh(geoHump, this._matInfected);
      hump.position.set(0, 2.1, -0.25);
      hump.scale.set(1.2, 0.7, 1.0);
      group.add(hump);

      group.position.set(x, y, z);
      group.scale.setScalar(1.3);
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
    const box = new THREE.BoxGeometry(1, 1, 1);
    scene.add(new THREE.Mesh(box, this._matInfected));
    scene.add(new THREE.Mesh(box, this._matFlesh));
    scene.add(new THREE.Mesh(box, this._matClaws));
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
