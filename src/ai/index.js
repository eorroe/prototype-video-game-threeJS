import * as THREE from 'three';
import { Noise, superEllipse, loft, ellipsoid, boxRound, computeNormals, displace, warp, buildBufferGeometry } from './geo.js';

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

  _buildBody(rng) {
    const noise = new Noise(rng);
    const rings = [];
    const seg = 16;
    const rows = 10;
    for (let r = 0; r < rows; r++) {
      const t = r / (rows - 1);
      const y = (t - 0.5) * 1.4;
      const bulge = 0.65 + 0.35 * Math.sin(t * Math.PI);
      const rx = 0.5 * bulge;
      const rz = 0.38 * bulge;
      rings.push({ pts: superEllipse(rx, rz, 2.5, seg), y });
    }
    const mesh = loft(rings, { capStart: true, capEnd: true });
    displace(mesh, (x, y, z, nx, ny, nz) => {
      return 0.045 * noise.fbm3(x * 4, y * 4, z * 4, 4);
    });
    computeNormals(mesh);
    const geo = buildBufferGeometry(mesh);
    const count = geo.attributes.position.count;
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ny = mesh.n[i * 3 + 1];
      const x = mesh.p[i * 3], y = mesh.p[i * 3 + 1], z = mesh.p[i * 3 + 2];
      const ao = 0.35 + 0.65 * Math.max(0, ny);
      const grime = 0.8 + 0.2 * Math.sin(x * 6.1 + noise.n3(x, y, z)) * Math.cos(z * 4.7);
      const c = ao * grime;
      colors[i * 3] = 0.14 * c;
      colors[i * 3 + 1] = 0.18 * c;
      colors[i * 3 + 2] = 0.14 * c;
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }

  _buildHead(rng) {
    const noise = new Noise(rng);
    const mesh = ellipsoid(0.28, 0.32, 0.26, { v0: 0, v1: 0.85, seg: 12, rows: 8 });
    warp(mesh, (v, i) => {
      if (v.y < -0.05) {
        const t = Math.max(0, (-v.y - 0.05) / 0.27);
        v.z += 0.15 * t;
      }
    });
    displace(mesh, (x, y, z) => {
      return 0.01 * noise.fbm3(x * 8, y * 8, z * 8, 3);
    });
    computeNormals(mesh);
    const geo = buildBufferGeometry(mesh);
    const count = geo.attributes.position.count;
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ny = mesh.n[i * 3 + 1];
      const x = mesh.p[i * 3], y = mesh.p[i * 3 + 1], z = mesh.p[i * 3 + 2];
      const ao = 0.4 + 0.6 * Math.max(0, ny);
      const grime = 0.85 + 0.15 * Math.sin(x * 8.3) * Math.cos(z * 6.1);
      const c = ao * grime;
      colors[i * 3] = 0.28 * c;
      colors[i * 3 + 1] = 0.22 * c;
      colors[i * 3 + 2] = 0.20 * c;
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }

  _buildClaw() {
    const rings = [];
    const seg = 8;
    for (let r = 0; r < 6; r++) {
      const t = r / 5;
      const rx = 0.07 * (1 - t * 0.65);
      const rz = 0.07 * (1 - t * 0.65);
      const y = t * 0.45;
      rings.push({ pts: superEllipse(rx, rz, 2, seg), y });
    }
    const mesh = loft(rings, { capStart: true, capEnd: true });
    computeNormals(mesh);
    return buildBufferGeometry(mesh);
  }

  _buildHump(rng) {
    const noise = new Noise(rng);
    const mesh = ellipsoid(0.25, 0.18, 0.2, { v0: 0.1, v1: 0.7, seg: 10, rows: 6 });
    displace(mesh, (x, y, z) => {
      return 0.025 * noise.fbm3(x * 5, y * 5, z * 5, 3);
    });
    computeNormals(mesh);
    const geo = buildBufferGeometry(mesh);
    const count = geo.attributes.position.count;
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ny = mesh.n[i * 3 + 1];
      const x = mesh.p[i * 3], y = mesh.p[i * 3 + 1], z = mesh.p[i * 3 + 2];
      const ao = 0.45 + 0.55 * Math.max(0, ny);
      const grime = 0.8 + 0.2 * Math.sin(x * 5.7 + 1.3) * Math.cos(z * 4.3);
      const c = ao * grime;
      colors[i * 3] = 0.12 * c;
      colors[i * 3 + 1] = 0.16 * c;
      colors[i * 3 + 2] = 0.12 * c;
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
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
      body.position.y = 1.1;
      group.add(body);

      const geoHead = this._buildHead(rng);
      this._geometries.push(geoHead);
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

      const geoHump = this._buildHump(rng);
      this._geometries.push(geoHump);
      const hump = new THREE.Mesh(geoHump, this._matInfected);
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
