import * as THREE from 'three';

const SURFACES = {
  concrete: { albedo: [0.55, 0.54, 0.52], roughness: 0.9, metal: 0 },
  metal_painted: { albedo: [0.45, 0.48, 0.52], roughness: 0.6, metal: 0.85 },
  metal_rust: { albedo: [0.6, 0.38, 0.24], roughness: 0.8, metal: 0.8 },
  metal_brushed: { albedo: [0.6, 0.59, 0.58], roughness: 0.45, metal: 0.9 },
  brick: { albedo: [0.6, 0.45, 0.32], roughness: 0.92, metal: 0 },
  wood: { albedo: [0.45, 0.3, 0.18], roughness: 0.85, metal: 0 },
  asphalt: { albedo: [0.15, 0.15, 0.15], roughness: 0.95, metal: 0 },
  gravel: { albedo: [0.45, 0.43, 0.4], roughness: 0.92, metal: 0 },
  dirt: { albedo: [0.35, 0.28, 0.18], roughness: 0.95, metal: 0 },
  plaster: { albedo: [0.7, 0.68, 0.66], roughness: 0.88, metal: 0 },
  fabric: { albedo: [0.28, 0.24, 0.2], roughness: 0.95, metal: 0 },
  corrugated: { albedo: [0.38, 0.38, 0.4], roughness: 0.75, metal: 0.85 },
  rubber: { albedo: [0.12, 0.12, 0.12], roughness: 0.92, metal: 0 },
  foliage: { albedo: [0.14, 0.24, 0.08], roughness: 0.9, metal: 0 },
  burlap: { albedo: [0.4, 0.32, 0.22], roughness: 0.95, metal: 0 },
};

function makeNoiseTexture(renderer, size, fn) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const v = fn(x / size, y / size, x, y);
      img.data[i] = img.data[i + 1] = img.data[i + 2] = Math.floor(v * 255);
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) >>> 0;
  h = ((h ^ (h >>> 13)) * 1274126177) >>> 0;
  return (h & 0x7fffffff) / 0x7fffffff;
}

function smoothNoise(x, y, freq) {
  const ix = Math.floor(x * freq);
  const iy = Math.floor(y * freq);
  const fx = x * freq - ix;
  const fy = y * freq - iy;
  const a = hash(ix, iy);
  const b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1);
  const d = hash(ix + 1, iy + 1);
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x, y, octaves) {
  let v = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < octaves; i++) {
    v += amp * smoothNoise(x, y, freq);
    amp *= 0.5;
    freq *= 2;
  }
  return v;
}

function bakeAlbedo(surface, size) {
  const base = SURFACES[surface] || SURFACES.concrete;
  return makeNoiseTexture(null, size, (u, v) => {
    const n = fbm(u, v, 4);
    const variation = 0.85 + n * 0.3;
    return Math.min(1, base.albedo[0] * variation);
  });
}

function bakeORM(surface, size) {
  const base = SURFACES[surface] || SURFACES.concrete;
  return makeNoiseTexture(null, size, (u, v) => {
    const n = fbm(u + 0.5, v + 0.5, 3);
    const ao = 0.7 + n * 0.3;
    const rough = base.roughness * (0.8 + n * 0.4);
    const metal = base.metal;
    return ao * 0.33 + rough * 0.33 + metal * 0.34;
  });
}

function bakeNormal(surface, size) {
  const base = SURFACES[surface] || SURFACES.concrete;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  const strength = 0.8;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const hL = fbm(u - 1/size, v, 3);
      const hR = fbm(u + 1/size, v, 3);
      const hD = fbm(u, v - 1/size, 3);
      const hU = fbm(u, v + 1/size, 3);
      const dx = (hR - hL) * strength;
      const dy = (hU - hD) * strength;
      const i = (y * size + x) * 4;
      img.data[i] = Math.floor((dx * 0.5 + 0.5) * 255);
      img.data[i + 1] = Math.floor((dy * 0.5 + 0.5) * 255);
      img.data[i + 2] = 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.NoColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

export class MaterialSystem {
  static id = 'materials';
  static deps = ['render'];

  constructor() {
    this._cache = new Map();
    this._sets = new Map();
    this._built = false;
    this._anisotropy = 4;
    this._pending = new Set();
  }

  async init(ctx) {
    this.ctx = ctx;
    const q = ctx.config.q;
    this._anisotropy = Math.min(q.anisotropy, 16);
    const quality = ctx.config.quality;
    const texSize = quality === 'low' ? 256 : quality === 'medium' ? 512 : 1024;
    this._texSize = texSize;
    this._renderer = ctx.peek('render')?.renderer;
    this._buildCore();
    this._built = true;
  }

  _buildCore() {
    const surfaces = Object.keys(SURFACES);
    for (const s of surfaces) {
      if (this._cache.has(s)) continue;
      const albedo = bakeAlbedo(s, this._texSize);
      const orm = bakeORM(s, this._texSize);
      const normal = bakeNormal(s, this._texSize);
      if (this._renderer) {
        albedo.anisotropy = this._anisotropy;
        orm.anisotropy = this._anisotropy;
        normal.anisotropy = this._anisotropy;
      }
      this._sets.set(s, { albedo, orm, normal });
      const base = SURFACES[s];
      const mat = new THREE.MeshStandardMaterial({
        name: `mat_${s}`,
        map: albedo,
        normalMap: normal,
        normalScale: new THREE.Vector2(0.8, 0.8),
        roughnessMap: orm,
        roughness: base.roughness,
        metalness: base.metal,
        envMapIntensity: 0.5,
      });
      mat.userData.surface = s;
      this._cache.set(s, mat);
    }
  }

  get(name) {
    let mat = this._cache.get(name);
    if (!mat) {
      const base = SURFACES[name] || SURFACES.concrete;
      const set = this._sets.get(name) || this._sets.get('concrete');
      mat = new THREE.MeshStandardMaterial({
        name: `mat_${name}`,
        map: set?.albedo,
        normalMap: set?.normal,
        normalScale: new THREE.Vector2(0.8, 0.8),
        roughnessMap: set?.orm,
        roughness: base.roughness,
        metalness: base.metal,
        envMapIntensity: 0.5,
      });
      mat.userData.surface = name;
      this._cache.set(name, mat);
    }
    return mat;
  }

  names() {
    return Object.keys(SURFACES);
  }

  surfaceOf(name) {
    return name;
  }

  prewarmMaterials(ctx) {
    const mats = this._cache.values();
    const r = ctx.get('render');
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    for (const mat of mats) {
      mesh.material = mat;
      scene.add(mesh);
    }
    r.renderer.compileAsync(scene, ctx.camera).then(() => scene.clear());
  }

  dispose() {
    for (const set of this._sets.values()) {
      set.albedo?.dispose();
      set.orm?.dispose();
      set.normal?.dispose();
    }
    for (const mat of this._cache.values()) mat.dispose();
    this._cache.clear();
    this._sets.clear();
  }
}
