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
  shape.quadraticCurveTo(-w/2, h/2, -w/2, h/2 + r);
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

function addPart(group, geo, mat, x, y, z, ry = 0, sx = 1, sy = 1, sz = 1) {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function createSetbackBuilding(baseW, baseH, baseD, levels, mat) {
  const group = new THREE.Group();
  let y = 0;
  let w = baseW, d = baseD;
  
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    const h = level.h || baseH / levels.length;
    const shrink = level.shrink || 0;
    const offsetX = level.offsetX || 0;
    const offsetZ = level.offsetZ || 0;
    
    if (i > 0) y += h;
    const geo = box(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(offsetX, y, offsetZ);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    
    w -= shrink * 2;
    d -= shrink * 2;
  }
  
  return group;
}

function createRooftopStructures(baseW, baseD, mat, rng) {
  const group = new THREE.Group();
  const count = 2 + Math.floor(rng() * 4);
  
  for (let i = 0; i < count; i++) {
    const w = 0.5 + rng() * 2;
    const d = 0.5 + rng() * 2;
    const h = 0.5 + rng() * 2;
    const x = (rng() - 0.5) * (baseW - w);
    const z = (rng() - 0.5) * (baseD - d);
    
    const geo = box(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, h/2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  
  return group;
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
    this._buildStreetDetails();

    this._stabiliseLightCount(lightBudget);

    const ms = performance.now() - t0;
    this.stats.drawCalls = this.root.children.length;
    console.info(`[world] built ${this.stats.drawCalls} objects, scene total children: ${this._scene.children.length}`);
  }

  _buildGround() {
    const geo = new THREE.PlaneGeometry(200, 200, 80, 80);
    geo.rotateX(-Math.PI / 2);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      let y = 0;
      y += Math.sin(x * 0.04) * Math.cos(z * 0.04) * 0.4;
      y += Math.sin(x * 0.08 + 1.3) * 0.2;
      y += Math.cos(z * 0.1 + 0.7) * 0.15;
      y += Math.sin(x * 0.15) * Math.cos(z * 0.15) * 0.08;
      positions.setY(i, y);
    }
    geo.computeVertexNormals();

    const mat = this._matFor('asphalt');
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'ground';
    this.root.add(mesh);
    this.bounds.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), new THREE.Vector3(200, 0.5, 200));

    // Add sidewalk strips
    const sidewalkMat = this._matFor('concrete');
    for (let i = -10; i <= 10; i += 2) {
      const swGeo = box(0.3, 0.05, 20);
      const sw = new THREE.Mesh(swGeo, sidewalkMat);
      sw.position.set(i * 10, 0.02, 0);
      sw.receiveShadow = true;
      sw.name = 'sidewalk';
      this.root.add(sw);
    }
  }

  _buildBuildings() {
    const seed = 12345;
    let s = seed;
    const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return (s >>> 0) / 4294967296; };

    const layouts = [
      { x: -35, z: -30, w: 18, d: 24, h: 120, surface: 'concrete', style: 'setback', levels: 6 },
      { x: 30, z: -35, w: 20, d: 22, h: 100, surface: 'brick', style: 'setback', levels: 5 },
      { x: -28, z: 35, w: 14, d: 18, h: 70, surface: 'plaster', style: 'simple' },
      { x: 35, z: 30, w: 22, d: 20, h: 85, surface: 'concrete', style: 'setback', levels: 5 },
      { x: -45, z: 0, w: 12, d: 32, h: 180, surface: 'concrete', style: 'tower', levels: 10 },
      { x: 45, z: 0, w: 12, d: 30, h: 150, surface: 'brick', style: 'tower', levels: 9 },
      { x: 0, z: 50, w: 24, d: 14, h: 75, surface: 'plaster', style: 'simple' },
      { x: -25, z: -50, w: 16, d: 16, h: 200, surface: 'concrete', style: 'tower', levels: 12 },
      { x: 30, z: 45, w: 18, d: 20, h: 110, surface: 'brick', style: 'setback', levels: 6 },
      { x: -50, z: 25, w: 20, d: 16, h: 130, surface: 'concrete', style: 'setback', levels: 7 },
      { x: 50, z: -25, w: 16, d: 22, h: 120, surface: 'plaster', style: 'simple' },
      { x: -12, z: 12, w: 12, d: 12, h: 250, surface: 'metal_painted', style: 'tower', levels: 15 },
      { x: 20, z: -18, w: 14, d: 14, h: 160, surface: 'concrete', style: 'tower', levels: 9 },
      { x: -35, z: -12, w: 16, d: 20, h: 90, surface: 'brick', style: 'simple' },
      { x: 35, z: 15, w: 18, d: 16, h: 100, surface: 'concrete', style: 'setback', levels: 6 },
      { x: -55, z: -35, w: 22, d: 32, h: 140, surface: 'concrete', style: 'setback', levels: 8 },
      { x: 55, z: 35, w: 24, d: 28, h: 150, surface: 'brick', style: 'setback', levels: 8 },
      { x: 0, z: -55, w: 28, d: 16, h: 80, surface: 'metal_painted', style: 'simple' },
      { x: -18, z: 55, w: 16, d: 22, h: 95, surface: 'concrete', style: 'setback', levels: 6 },
      { x: 22, z: -50, w: 20, d: 18, h: 105, surface: 'brick', style: 'tower', levels: 7 },
    ];

    for (const b of layouts) {
      const mat = this._matFor(b.surface);
      const roofMat = this._matFor('concrete');
      const group = new THREE.Group();
      group.name = `building_${b.x}_${b.z}`;
      
      let buildingGroup;
      
      if (b.style === 'setback' && b.levels) {
        const levels = [];
        const baseH = b.h / b.levels;
        for (let i = 0; i < b.levels; i++) {
          levels.push({
            h: baseH * (0.8 + rand() * 0.4),
            shrink: i < b.levels - 1 ? 0.5 + rand() * 1.5 : 0,
            offsetX: i < b.levels - 1 ? (rand() - 0.5) * 1 : 0,
            offsetZ: i < b.levels - 1 ? (rand() - 0.5) * 1 : 0,
          });
        }
        buildingGroup = createSetbackBuilding(b.w, b.h, b.d, levels, mat);
      } else if (b.style === 'tower') {
        const towerH = b.h * (0.7 + rand() * 0.3);
        const spireH = b.h - towerH;
        buildingGroup = new THREE.Group();
        
        const baseGeo = box(b.w, towerH, b.d);
        const baseMesh = new THREE.Mesh(baseGeo, mat);
        baseMesh.castShadow = true;
        baseMesh.receiveShadow = true;
        buildingGroup.add(baseMesh);
        
        if (spireH > 0.5) {
          const spireGeo = box(b.w * 0.3, spireH, b.d * 0.3);
          const spire = new THREE.Mesh(spireGeo, roofMat);
          spire.position.y = towerH;
          spire.castShadow = true;
          spire.receiveShadow = true;
          buildingGroup.add(spire);
        }
      } else {
        const h = b.h * (0.8 + rand() * 0.4);
        const geo = box(b.w, h, b.d);
        buildingGroup = new THREE.Group();
        const mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        buildingGroup.add(mesh);
      }
      
      buildingGroup.position.set(b.x, 0, b.z);
      group.add(buildingGroup);
      
      // Add rooftop structures
      const rooftop = createRooftopStructures(b.w, b.d, roofMat, rand);
      rooftop.position.y = b.h;
      group.add(rooftop);
      
      // Add roof
      const roofGeo = box(b.w + 0.5, 0.3, b.d + 0.5);
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = b.h;
      roof.castShadow = true;
      roof.name = `roof_${b.x}_${b.z}`;
      group.add(roof);
      
      this.root.add(group);
    }
  }

  _buildProps() {
    const mat = this._matFor('metal_rust');
    const count = 150;
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
    const debrisCount = 300;
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

  _buildStreetDetails() {
    const concreteMat = this._matFor('concrete');
    const metalMat = this._matFor('metal_rust');
    
    // Barricades
    const barricadeGeo = box(2, 0.8, 0.3);
    for (let i = 0; i < 8; i++) {
      const barricade = new THREE.Mesh(barricadeGeo, metalMat);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 15 + (i % 3) * 5;
      barricade.position.set(
        Math.cos(angle) * radius,
        0.4,
        Math.sin(angle) * radius
      );
      barricade.rotation.y = angle + Math.PI / 2;
      barricade.castShadow = true;
      barricade.receiveShadow = true;
      barricade.name = 'barricade';
      this.root.add(barricade);
    }
    
    // Rubble piles
    const rubbleGeo = box(1.5, 0.6, 1.5);
    for (let i = 0; i < 12; i++) {
      const rubble = new THREE.Mesh(rubbleGeo, concreteMat);
      const angle = (i / 12) * Math.PI * 2 + 0.3;
      const radius = 8 + (i % 4) * 4;
      rubble.position.set(
        Math.cos(angle) * radius,
        0.3,
        Math.sin(angle) * radius
      );
      rubble.rotation.y = (i * 1.7) % (Math.PI * 2);
      rubble.scale.setScalar(0.6 + (i % 3) * 0.4);
      rubble.castShadow = true;
      rubble.receiveShadow = true;
      rubble.name = 'rubble';
      this.root.add(rubble);
    }
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
}
