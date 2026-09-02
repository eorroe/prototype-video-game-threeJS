import * as THREE from 'three';

function box(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(0, h / 2, 0);
  return g;
}

function chamferBox(w, h, d, r = 0.1) {
  const shape = new THREE.Shape();
  shape.moveTo(-w/2 + r, -h/2);
  shape.lineTo(w/2 - r, -h/2);
  shape.quadraticCurveTo(w/2, -h/2, w/2, -h/2 + r);
  shape.lineTo(w/2, h/2 - r);
  shape.quadraticCurveTo(w/2, h/2, w/2 - r, h/2);
  shape.lineTo(-w/2 + r, h/2);
  shape.quadraticCurveTo(-w/2, h/2, -w/2, h/2 - r);
  shape.lineTo(-w/2, -h/2 + r);
  shape.quadraticCurveTo(-w/2, -h/2, -w/2 + r, -h/2);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: d,
    bevelEnabled: true,
    bevelThickness: r,
    bevelSize: r,
    bevelSegments: 1,
  });
  geo.translate(0, h/2, -d/2);
  return geo;
}

export class WorldSystem {
  static id = 'world';
  static deps = ['materials', 'render'];

  constructor() {
    this.root = new THREE.Group();
    this.root.name = 'world';
    this.bounds = new THREE.Box3();
    this.spawnPoints = [];
    this.stats = { staticTris: 0, instTris: 0, instances: 0, drawCalls: 0 };
    this._materials = new Map();
    this._ballast = [];
    this._built = false;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._mat = ctx.get('materials');
    this._scene = ctx.scene;
    this._scene.add(this.root);
    this._build();
    this._built = true;
  }

  _matFor(surface) {
    if (!this._materials.has(surface)) {
      this._materials.set(surface, this._mat.get(surface));
    }
    return this._materials.get(surface);
  }

  _build() {
    const t0 = performance.now();
    const r = this.ctx.peek('render');
    const lightBudget = r?.settings?.practicalGain ? 17 : 20;
    this._ballast = [];

    this._buildGround();
    this._buildBuildings();
    this._buildProps();

    this._stabiliseLightCount(lightBudget);

    const ms = performance.now() - t0;
    this.stats.drawCalls = this.root.children.length;
    console.info(`[world] built ${this.stats.drawCalls} objects, scene total children: ${this._scene.children.length}`);
  }

  _buildGround() {
    const geo = new THREE.PlaneGeometry(200, 200, 60, 60);
    geo.rotateX(-Math.PI / 2);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      let y = 0;
      y += Math.sin(x * 0.04) * Math.cos(z * 0.04) * 0.4;
      y += Math.sin(x * 0.08 + 1.3) * 0.2;
      y += Math.cos(z * 0.1 + 0.7) * 0.15;
      positions.setY(i, y);
    }
    geo.computeVertexNormals();

    const mat = this._matFor('asphalt');
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'ground';
    this.root.add(mesh);
    this.bounds.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), new THREE.Vector3(200, 0.5, 200));

    const debugMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const debugBox = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), debugMat);
    debugBox.position.set(0, 1, -5);
    debugBox.name = 'debug-marker';
    this.root.add(debugBox);
  }

  _buildBuildings() {
    const layouts = [
      { x: -25, z: -20, w: 12, d: 18, h: 16, surface: 'concrete', damaged: true },
      { x: 20, z: -25, w: 14, d: 16, h: 18, surface: 'brick', damaged: true },
      { x: -20, z: 25, w: 10, d: 12, h: 12, surface: 'plaster', damaged: false },
      { x: 25, z: 20, w: 16, d: 14, h: 14, surface: 'concrete', damaged: true },
      { x: 0, z: -30, w: 20, d: 10, h: 10, surface: 'metal_painted', damaged: true },
      { x: -30, z: 0, w: 8, d: 22, h: 22, surface: 'concrete', damaged: true },
      { x: 30, z: 0, w: 8, d: 20, h: 20, surface: 'brick', damaged: false },
      { x: 0, z: 35, w: 18, d: 8, h: 10, surface: 'plaster', damaged: true },
    ];

    const seed = 12345;
    let s = seed;
    const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return (s >>> 0) / 4294967296; };

    for (const b of layouts) {
      const h = b.damaged ? b.h * (0.6 + rand() * 0.4) : b.h;
      const geo = box(b.w, h, b.d);
      const mat = this._matFor(b.surface);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(b.x, 0, b.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = `building_${b.x}_${b.z}`;
      this.root.add(mesh);

      if (b.surface === 'concrete' || b.surface === 'brick') {
        const roofGeo = box(b.w + 0.5, 0.3, b.d + 0.5);
        const roofMat = this._matFor('concrete');
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.set(b.x, h, b.z);
        roof.castShadow = true;
        roof.name = `roof_${b.x}_${b.z}`;
        this.root.add(roof);
      }
    }
  }

  _buildProps() {
    const mat = this._matFor('metal_rust');
    const count = 100;
    const geo = box(0.8, 1.2, 0.8);
    const instances = new THREE.InstancedMesh(geo, mat, count);
    instances.name = 'barrels';
    const dummy = new THREE.Object3D();
    const seed = 42;
    let s = seed;
    const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return (s >>> 0) / 4294967296; };
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (rand() - 0.5) * 240,
        0.6,
        (rand() - 0.5) * 240
      );
      dummy.scale.setScalar(0.7 + rand() * 0.6);
      dummy.rotation.y = rand() * Math.PI * 2;
      dummy.updateMatrix();
      instances.setMatrixAt(i, dummy.matrix);
    }
    instances.instanceMatrix.needsUpdate = true;
    instances.castShadow = true;
    instances.receiveShadow = true;
    this.root.add(instances);
    this.stats.instances += count;

    const debrisMat = this._matFor('concrete');
    const debrisCount = 200;
    const debrisGeo = box(0.4, 0.2, 0.4);
    const debris = new THREE.InstancedMesh(debrisGeo, debrisMat, debrisCount);
    debris.name = 'debris';
    const dummy2 = new THREE.Object3D();
    let s2 = 999;
    const rand2 = () => { s2 = (s2 * 1664525 + 1013904223) >>> 0; return (s2 >>> 0) / 4294967296; };
    for (let i = 0; i < debrisCount; i++) {
      dummy2.position.set(
        (rand2() - 0.5) * 200,
        0.1,
        (rand2() - 0.5) * 200
      );
      dummy2.scale.setScalar(0.3 + rand2() * 0.7);
      dummy2.rotation.set(rand2() * 0.3, rand2() * Math.PI * 2, rand2() * 0.3);
      dummy2.updateMatrix();
      debris.setMatrixAt(i, dummy2.matrix);
    }
    debris.instanceMatrix.needsUpdate = true;
    debris.receiveShadow = true;
    this.root.add(debris);
    this.stats.instances += debrisCount;
  }

  _stabiliseLightCount(slotBudget) {
    while (this._ballast.length < slotBudget) {
      const light = new THREE.PointLight(0xffffff, 0, 0);
      light.name = 'ow-ballast';
      light.visible = true;
      this._scene.add(light);
      this._ballast.push(light);
    }
    for (const l of this._ballast) {
      l.intensity = 0;
      l.visible = true;
    }
  }

  prewarmMaterials(ctx) {
    const surfaces = ['concrete', 'brick', 'plaster', 'asphalt', 'metal_painted', 'metal_rust', 'wood', 'gravel', 'dirt', 'rubber', 'fabric', 'corrugated', 'foliage', 'burlap'];
    const r = ctx.get('render');
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    for (const s of surfaces) {
      mesh.material = this._matFor(s);
      scene.add(mesh);
    }
    return r.renderer.compileAsync(scene, ctx.camera).then(() => scene.clear());
  }

  dispose() {
    while (this.root.children.length) {
      const c = this.root.children[0];
      this.root.remove(c);
      if (c.geometry) c.geometry.dispose();
      if (c.material) {
        if (Array.isArray(c.material)) c.material.forEach(m => m.dispose());
        else c.material.dispose();
      }
    }
    for (const l of this._ballast) {
      this._scene.remove(l);
    }
    this._ballast = [];
  }
}
