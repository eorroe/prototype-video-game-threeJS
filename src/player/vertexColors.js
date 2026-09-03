import * as THREE from 'three';
import { vcount, buildBufferGeometry } from './geo.js';

function ensureVC(mesh) {
  if (!mesh.vc) {
    mesh.vc = new Float64Array(mesh.p.length);
    mesh.vc.fill(1);
  }
  if (!mesh.color) {
    mesh.color = new Float64Array(mesh.p.length);
    mesh.color.fill(1);
  }
}

export function syncColor(mesh) {
  if (mesh.vc && mesh.color) {
    mesh.color.set(mesh.vc);
  }
}

function setGray(mesh, i, v) {
  mesh.vc[i * 3] = v;
  mesh.vc[i * 3 + 1] = v;
  mesh.vc[i * 3 + 2] = v;
}

function mulGray(mesh, i, f) {
  mesh.vc[i * 3] *= f;
  mesh.vc[i * 3 + 1] *= f;
  mesh.vc[i * 3 + 2] *= f;
}

function mulColor(colors, index, r, g, b) {
  colors[index] *= r;
  colors[index + 1] *= g;
  colors[index + 2] *= b;
}

export function tintColor(colors, index, r, g, b) {
  mulColor(colors, index, r, g, b);
}

function computeFaceNormals(P, I) {
  const fc = I.length / 3;
  const fn = new Float64Array(fc * 3);
  for (let t = 0; t < fc; t++) {
    const a = I[t * 3] * 3;
    const b = I[t * 3 + 1] * 3;
    const c = I[t * 3 + 2] * 3;
    const ax = P[a], ay = P[a + 1], az = P[a + 2];
    const e1x = P[b] - ax, e1y = P[b + 1] - ay, e1z = P[b + 2] - az;
    const e2x = P[c] - ax, e2y = P[c + 1] - ay, e2z = P[c + 2] - az;
    const nx = e1y * e2z - e1z * e2y;
    const ny = e1z * e2x - e1x * e2z;
    const nz = e1x * e2y - e1y * e2x;
    const l = Math.hypot(nx, ny, nz) || 1;
    fn[t * 3] = nx / l;
    fn[t * 3 + 1] = ny / l;
    fn[t * 3 + 2] = nz / l;
  }
  return fn;
}

export function bakeAO(mesh, noise, strength = 1.0) {
  ensureVC(mesh);
  const P = mesh.p, N = mesh.n, I = mesh.i;
  const nv = vcount(mesh);

  if (I && I.length > 0) {
    const fc = I.length / 3;
    const fn = computeFaceNormals(P, I);
    const conc = new Float64Array(nv);
    const cnt = new Uint32Array(nv);

    for (let t = 0; t < fc; t++) {
      const fx = fn[t * 3], fy = fn[t * 3 + 1], fz = fn[t * 3 + 2];
      for (let k = 0; k < 3; k++) {
        const vi = I[t * 3 + k];
        const nx = N[vi * 3], ny = N[vi * 3 + 1], nz = N[vi * 3 + 2];
        const d = nx * fx + ny * fy + nz * fz;
        if (d < 0) {
          conc[vi] += -d;
          cnt[vi]++;
        }
      }
    }

    for (let i = 0; i < nv; i++) {
      let ao = 1.0;
      if (cnt[i] > 0) {
        ao = Math.max(0, 1 - (conc[i] / cnt[i]) * strength);
      }
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
      const n = noise.fbm3(x * 0.5, y * 0.5, z * 0.5, 3) * 0.5 + 0.5;
      ao *= (0.85 + n * 0.15);
      setGray(mesh, i, Math.max(0, Math.min(1, ao)));
    }
  } else {
    for (let i = 0; i < nv; i++) {
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
      const n = noise.fbm3(x * 0.5, y * 0.5, z * 0.5, 3) * 0.5 + 0.5;
      setGray(mesh, i, Math.max(0, Math.min(1, 0.85 + n * 0.15)));
    }
  }

  syncColor(mesh);
}

export function bakeGrime(mesh, noise, amount = 0.3) {
  ensureVC(mesh);
  const P = mesh.p, N = mesh.n;
  const nv = vcount(mesh);

  for (let i = 0; i < nv; i++) {
    const down = Math.max(0, -N[i * 3 + 1]) * 0.5;
    const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
    const crev = 1 - Math.abs(noise.fbm3(x * 1.5, y * 1.5, z * 1.5, 4));
    const g = (down + crev * 0.5) * amount;
    const n = noise.fbm3(x * 0.3 + 100, y * 0.3 + 100, z * 0.3 + 100, 3) * 0.5 + 0.5;
    const grime = g * (0.5 + n * 0.5);
    mulGray(mesh, i, Math.max(0, 1 - grime));
  }

  syncColor(mesh);
}

export function bakeRim(mesh, strength = 0.5, power = 3.0) {
  ensureVC(mesh);
  const N = mesh.n;
  const nv = vcount(mesh);

  for (let i = 0; i < nv; i++) {
    const viewDot = Math.abs(N[i * 3 + 2]);
    const rim = Math.pow(Math.max(0, 1 - viewDot), power) * strength;
    mulGray(mesh, i, Math.max(0, 1 - rim));
  }

  syncColor(mesh);
}

export function buildBufferGeometryWithColors(m) {
  const geo = buildBufferGeometry(m);
  if (m.vc) {
    geo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(m.vc), 3));
  }
  return geo;
}
