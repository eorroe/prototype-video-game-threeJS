import * as THREE from 'three';

const SURFACE_MAP = {
  concrete: 'concrete',
  brick: 'concrete',
  plaster: 'plaster',
  metal_painted: 'metal',
  metal_rust: 'metal',
  metal_brushed: 'metal',
  corrugated: 'metal',
  wood: 'wood',
  asphalt: 'concrete',
  gravel: 'dirt',
  dirt: 'dirt',
  fabric: 'fabric',
  burlap: 'fabric',
  foliage: 'foliage',
  rubber: 'rubber',
};

export class PhysicsSystem {
  static id = 'physics';
  static deps = ['world'];
  static SURFACES = ['concrete', 'metal', 'wood', 'dirt', 'sand', 'glass', 'water', 'foliage', 'fabric', 'flesh', 'rubber', 'plaster'];

  constructor() {
    this._world = null;
    this._scene = null;
    this._bounds = null;
    this._raycaster = new THREE.Raycaster();
    this._rayOrigin = new THREE.Vector3();
    this._rayDir = new THREE.Vector3(0, -1, 0);
    this._cache = new Map();
  }

  async init(ctx) {
    this._world = ctx.get('world');
    this._scene = ctx.scene;
    this._bounds = this._world.bounds;
    this._cache = new Map();

    this._world.root.traverse((obj) => {
      if (!obj.isMesh) return;
      if (!obj.userData.surface) {
        if (obj.material?.userData?.surface) {
          obj.userData.surface = obj.material.userData.surface;
        } else if (obj.name === 'ground') {
          obj.userData.surface = 'asphalt';
        } else if (obj.name.startsWith('building_') || obj.name.startsWith('roof_')) {
          obj.userData.surface = 'concrete';
        } else if (obj.name === 'barrels') {
          obj.userData.surface = 'metal_rust';
        }
      }
    });
  }

  fixedUpdate(h, ctx) {
  }

  raycast(origin, dir, maxDist = 100) {
    this._rayOrigin.copy(origin);
    this._rayDir.copy(dir).normalize();
    this._raycaster.set(this._rayOrigin, this._rayDir);
    this._raycaster.far = Math.max(0.01, maxDist);

    const intersects = this._raycaster.intersectObjects(this._scene.children, true);
    if (intersects.length === 0) return null;

    const hit = intersects[0];
    const obj = hit.object;
    let surface = obj.userData?.surface;

    if (!surface && obj.material?.userData?.surface) {
      surface = obj.material.userData.surface;
    }

    surface = SURFACE_MAP[surface] || 'concrete';

    let normal;
    if (hit.face) {
      normal = hit.face.normal.clone();
      if (obj.normalMatrix) {
        normal.applyMatrix3(obj.normalMatrix).normalize();
      }
    } else {
      normal = new THREE.Vector3(0, 1, 0);
    }

    return {
      point: hit.point.clone(),
      normal,
      surface
    };
  }

  groundHeight(x, z) {
    return Math.sin(x * 0.05) * Math.cos(z * 0.05) * 0.3 + Math.sin(x * 0.1 + 1) * 0.15 + Math.cos(z * 0.12) * 0.1;
  }

  dispose() {
    this._cache.clear();
    this._raycaster.dispose?.();
    this._world = null;
    this._scene = null;
    this._bounds = null;
  }
}
