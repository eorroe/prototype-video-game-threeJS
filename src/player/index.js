import * as THREE from 'three';
import { bakeAO, bakeGrime, bakeRim, buildBufferGeometryWithColors, tintColor, syncColor } from './vertexColors.js';
import { Noise, superEllipse, loft, boxRound, ellipsoid, computeNormals, displace, warp, appendMesh, emptyMesh, buildBufferGeometry, vcount } from './geo.js';

function limbProfile(topR, botR, seg = 12) {
  const pts = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg;
    const r = topR + (botR - topR) * t;
    pts.push([r, r]);
  }
  return pts;
}

export class PlayerSystem {
  static id = 'player';
  static deps = ['physics'];

  constructor() {
    this._rig = null;
    this._mesh = null;
    this._velocity = new THREE.Vector3();
    this._onGround = false;
    this._health = 100;
    this._built = false;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._input = ctx.input;
    this._scene = ctx.scene;
    this._camera = ctx.camera;
    this._rng = ctx.rng.fork();
    this._noise = new Noise(this._rng);

    const mat = ctx.get('materials').get('black_ops');
    const matBright = mat.clone();
    matBright.color = new THREE.Color(1.0, 1.0, 1.0);
    matBright.vertexColors = true;
    const group = new THREE.Group();
    group.name = 'player';

    const m = emptyMesh();

    const torsoRings = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const y = t * 1.8;
      const rx = 0.32 + Math.sin(t * Math.PI) * 0.18;
      const rz = 0.22 + Math.sin(t * Math.PI) * 0.12;
      torsoRings.push({ pts: superEllipse(rx, rz, 3, 20), o: [0, y, 0] });
    }
    const torso = loft(torsoRings, { capStart: true, capEnd: true });
    bakeAO(torso, this._noise, 0.6);
    bakeGrime(torso, this._noise, 0.3);
    bakeRim(torso, 0.4, 2.0);
    for (let i = 0; i < vcount(torso); i++) tintColor(torso.vc, i * 3, 0.85, 0.90, 0.75);
    syncColor(torso);

    const headGeo = ellipsoid(0.24, 0.28, 0.24, { seg: 20, rows: 12 });
    warp(headGeo, (v) => {
      const t = (v.y - 1.55) / 0.22;
      if (Math.abs(t) < 0.7) {
        v.z += 0.04 * (1 - (t/0.7)**2);
      }
    });
    bakeAO(headGeo, this._noise, 0.6);
    bakeGrime(headGeo, this._noise, 0.3);
    bakeRim(headGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(headGeo); i++) tintColor(headGeo.vc, i * 3, 1.05, 0.90, 0.75);
    syncColor(headGeo);

    const neckGeo = emptyMesh();
    for (let i = 0; i <= 6; i++) {
      const t = i / 6;
      const y = t * 0.2;
      const r = 0.12 - t * 0.03;
      const ring = { pts: superEllipse(r, r, 2, 14), o: [0, 1.55 + y, 0] };
      loft([ring], { into: neckGeo, capStart: i===0, capEnd: i===6 });
    }
    bakeAO(neckGeo, this._noise, 0.6);
    bakeGrime(neckGeo, this._noise, 0.3);
    bakeRim(neckGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(neckGeo); i++) tintColor(neckGeo.vc, i * 3, 0.95, 0.85, 0.70);
    syncColor(neckGeo);

    const shoulderGeo = ellipsoid(0.18, 0.12, 0.14, { seg: 14, rows: 8 });
    bakeAO(shoulderGeo, this._noise, 0.6);
    bakeGrime(shoulderGeo, this._noise, 0.3);
    bakeRim(shoulderGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(shoulderGeo); i++) tintColor(shoulderGeo.vc, i * 3, 1.0, 0.90, 0.75);
    syncColor(shoulderGeo);

    const armUpperGeo = emptyMesh();
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const y = t * 0.9;
      const r = 0.10 - t * 0.02;
      const ring = { pts: superEllipse(r, r, 2, 12), o: [0, y, 0] };
      loft([ring], { into: armUpperGeo, capStart: i===0, capEnd: i===10 });
    }
    bakeAO(armUpperGeo, this._noise, 0.6);
    bakeGrime(armUpperGeo, this._noise, 0.3);
    bakeRim(armUpperGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(armUpperGeo); i++) tintColor(armUpperGeo.vc, i * 3, 0.75, 0.80, 0.65);
    syncColor(armUpperGeo);

    const armLowerGeo = emptyMesh();
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const y = t * 0.85;
      const r = 0.08 - t * 0.015;
      const ring = { pts: superEllipse(r, r, 2, 12), o: [0, y, 0] };
      loft([ring], { into: armLowerGeo, capStart: i===0, capEnd: i===10 });
    }
    bakeAO(armLowerGeo, this._noise, 0.6);
    bakeGrime(armLowerGeo, this._noise, 0.3);
    bakeRim(armLowerGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(armLowerGeo); i++) tintColor(armLowerGeo.vc, i * 3, 0.75, 0.80, 0.65);
    syncColor(armLowerGeo);

    const handGeo = ellipsoid(0.08, 0.1, 0.06, { seg: 10, rows: 8 });
    bakeAO(handGeo, this._noise, 0.6);
    bakeGrime(handGeo, this._noise, 0.3);
    bakeRim(handGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(handGeo); i++) tintColor(handGeo.vc, i * 3, 1.0, 0.85, 0.70);
    syncColor(handGeo);

    const legUpperGeo = emptyMesh();
    for (let i = 0; i <= 12; i++) {
      const t = i / 12;
      const y = t * 1.1;
      const r = 0.14 - t * 0.03;
      const ring = { pts: superEllipse(r, r, 2, 14), o: [0, y, 0] };
      loft([ring], { into: legUpperGeo, capStart: i===0, capEnd: i===12 });
    }
    bakeAO(legUpperGeo, this._noise, 0.6);
    bakeGrime(legUpperGeo, this._noise, 0.3);
    bakeRim(legUpperGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(legUpperGeo); i++) tintColor(legUpperGeo.vc, i * 3, 0.70, 0.75, 0.60);
    syncColor(legUpperGeo);

    const legLowerGeo = emptyMesh();
    for (let i = 0; i <= 12; i++) {
      const t = i / 12;
      const y = t * 1.0;
      const r = 0.11 - t * 0.025;
      const ring = { pts: superEllipse(r, r, 2, 14), o: [0, y, 0] };
      loft([ring], { into: legLowerGeo, capStart: i===0, capEnd: i===12 });
    }
    bakeAO(legLowerGeo, this._noise, 0.6);
    bakeGrime(legLowerGeo, this._noise, 0.3);
    bakeRim(legLowerGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(legLowerGeo); i++) tintColor(legLowerGeo.vc, i * 3, 0.70, 0.75, 0.60);
    syncColor(legLowerGeo);

    const footGeo = boxRound(0.1, 0.08, 0.28, { n: 4, roundY: 0.3 });
    bakeAO(footGeo, this._noise, 0.6);
    bakeGrime(footGeo, this._noise, 0.3);
    bakeRim(footGeo, 0.4, 2.0);
    for (let i = 0; i < vcount(footGeo); i++) tintColor(footGeo.vc, i * 3, 0.5, 0.5, 0.5);
    syncColor(footGeo);

    const allGeo = buildBufferGeometry(torso);
    const headMesh = new THREE.Mesh(buildBufferGeometryWithColors(headGeo), matBright);
    headMesh.position.y = 2.1;
    group.add(headMesh);

    const neckMesh = new THREE.Mesh(buildBufferGeometryWithColors(neckGeo), matBright);
    neckMesh.position.y = 1.9;
    group.add(neckMesh);

    const torsoMesh = new THREE.Mesh(buildBufferGeometryWithColors(torso), matBright);
    torsoMesh.position.y = 0.7;
    group.add(torsoMesh);

    const leftShoulder = new THREE.Mesh(buildBufferGeometryWithColors(shoulderGeo), matBright);
    leftShoulder.position.set(-0.42, 1.65, 0);
    group.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(buildBufferGeometryWithColors(shoulderGeo), matBright);
    rightShoulder.position.set(0.42, 1.65, 0);
    group.add(rightShoulder);

    const leftArmUpper = new THREE.Mesh(buildBufferGeometryWithColors(armUpperGeo), matBright);
    leftArmUpper.position.set(-0.42, 0.9, 0);
    group.add(leftArmUpper);

    const rightArmUpper = new THREE.Mesh(buildBufferGeometryWithColors(armUpperGeo), matBright);
    rightArmUpper.position.set(0.42, 0.9, 0);
    group.add(rightArmUpper);

    const leftArmLower = new THREE.Mesh(buildBufferGeometryWithColors(armLowerGeo), matBright);
    leftArmLower.position.set(-0.42, -0.05, 0);
    group.add(leftArmLower);

    const rightArmLower = new THREE.Mesh(buildBufferGeometryWithColors(armLowerGeo), matBright);
    rightArmLower.position.set(0.42, -0.05, 0);
    group.add(rightArmLower);

    const leftHand = new THREE.Mesh(buildBufferGeometryWithColors(handGeo), matBright);
    leftHand.position.set(-0.42, -1.0, 0);
    group.add(leftHand);

    const rightHand = new THREE.Mesh(buildBufferGeometryWithColors(handGeo), matBright);
    rightHand.position.set(0.42, -1.0, 0);
    group.add(rightHand);

    const leftLegUpper = new THREE.Mesh(buildBufferGeometryWithColors(legUpperGeo), matBright);
    leftLegUpper.position.set(-0.2, -0.6, 0);
    group.add(leftLegUpper);

    const rightLegUpper = new THREE.Mesh(buildBufferGeometryWithColors(legUpperGeo), matBright);
    rightLegUpper.position.set(0.2, -0.6, 0);
    group.add(rightLegUpper);

    const leftLegLower = new THREE.Mesh(buildBufferGeometryWithColors(legLowerGeo), matBright);
    leftLegLower.position.set(-0.2, -1.75, 0);
    group.add(leftLegLower);

    const rightLegLower = new THREE.Mesh(buildBufferGeometryWithColors(legLowerGeo), matBright);
    rightLegLower.position.set(0.2, -1.75, 0);
    group.add(rightLegLower);

    const leftFoot = new THREE.Mesh(buildBufferGeometryWithColors(footGeo), matBright);
    leftFoot.position.set(-0.2, -2.9, 0.08);
    group.add(leftFoot);

    const rightFoot = new THREE.Mesh(buildBufferGeometryWithColors(footGeo), matBright);
    rightFoot.position.set(0.2, -2.9, 0.08);
    group.add(rightFoot);

    group.position.set(0, 2, 15);
    group.scale.setScalar(3.0);
    this._scene.add(group);
    this._mesh = group;

    // Character light to ensure visibility
    const charLight = new THREE.PointLight(0xffffff, 20, 15);
    charLight.position.set(0, 4, 3);
    charLight.name = 'character-light';
    this._scene.add(charLight);

    this._rig = new THREE.Group();
    this._rig.name = 'camera-rig';
    this._rig.position.copy(group.position);
    this._rig.position.y += 2.0;
    this._scene.add(this._rig);

    this._camera.position.set(0, 3, 20);
    this._camera.lookAt(0, 2, 8);

    this._velocity = new THREE.Vector3();
    this._onGround = false;
    this._health = 100;
    this._built = true;

    console.info(`[player] shape-shifter spawned at ${group.position.x.toFixed(1)}, ${group.position.y.toFixed(1)}, ${group.position.z.toFixed(1)}`);
    console.info(`[player] scene children: ${this._scene.children.length}, rig children: ${this._rig.children.length}`);
  }

  fixedUpdate(h, ctx) {
    if (!this._built) return;
    const input = this._input;
    const phys = ctx.get('physics');
    const speed = input.action('sprint') ? 8.5 : 5.0;

    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this._rig.quaternion);
    forward.y = 0; forward.normalize();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this._rig.quaternion);
    right.y = 0; right.normalize();

    const move = new THREE.Vector3();
    if (input.action('forward')) move.add(forward);
    if (input.action('back')) move.sub(forward);
    if (input.action('right')) move.add(right);
    if (input.action('left')) move.sub(right);
    if (move.lengthSq() > 0) move.normalize();

    const gravity = -14;
    this._velocity.y += gravity * h;

    const groundY = phys.groundHeight(this._mesh.position.x, this._mesh.position.z);
    if (this._mesh.position.y <= groundY + 0.1 && this._velocity.y <= 0) {
      this._mesh.position.y = groundY + 0.1;
      this._velocity.y = 0;
      this._onGround = true;
    } else {
      this._onGround = false;
    }

    const target = move.multiplyScalar(speed);
    this._velocity.x = target.x;
    this._velocity.z = target.z;

    this._mesh.position.x += this._velocity.x * h;
    this._mesh.position.y += this._velocity.y * h;
    this._mesh.position.z += this._velocity.z * h;

    if (move.lengthSq() > 0) {
      const angle = Math.atan2(move.x, move.z);
      this._mesh.rotation.y = angle;
    }

    this._rig.position.copy(this._mesh.position);
    this._rig.position.y += 1.8;

    ctx.events.emit('player:state', {
      stance: this._onGround ? 'ground' : 'air',
      sprinting: input.action('sprint'),
      health: this._health,
    });
  }

  update(dt, ctx) {
    if (!this._built) return;
    const look = ctx.input.look;
    this._rig.rotation.y -= look.x;
    this._rig.rotation.x -= look.y;
    this._rig.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this._rig.rotation.x));
  }

  dispose() {
    if (this._mesh) {
      this._scene.remove(this._mesh);
      this._mesh.traverse((c) => {
        c.geometry?.dispose();
        if (c.material) {
          if (Array.isArray(c.material)) c.material.forEach(m => m.dispose());
          else c.material.dispose();
        }
      });
    }
    if (this._rig) {
      this._scene.remove(this._rig);
    }
  }
}
