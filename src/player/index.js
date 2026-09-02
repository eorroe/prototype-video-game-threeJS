import * as THREE from 'three';
import { Noise, superEllipse, loft, boxRound, ellipsoid, computeNormals, displace, warp, appendMesh, emptyMesh, buildBufferGeometry } from './geo.js';

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
    const group = new THREE.Group();
    group.name = 'player';

    const m = emptyMesh();

    const torsoRings = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const y = t * 1.2;
      const rx = 0.22 + Math.sin(t * Math.PI) * 0.12;
      const rz = 0.14 + Math.sin(t * Math.PI) * 0.08;
      torsoRings.push({ pts: superEllipse(rx, rz, 3, 16), o: [0, y, 0] });
    }
    const torso = loft(torsoRings, { capStart: true, capEnd: true });

    const headGeo = ellipsoid(0.18, 0.22, 0.2, { seg: 16, rows: 10 });
    warp(headGeo, (v) => {
      const t = (v.y - 1.55) / 0.22;
      if (Math.abs(t) < 0.7) {
        v.z += 0.03 * (1 - (t/0.7)**2);
      }
    });

    const neckGeo = emptyMesh();
    for (let i = 0; i <= 6; i++) {
      const t = i / 6;
      const y = t * 0.15;
      const r = 0.08 - t * 0.02;
      const ring = { pts: superEllipse(r, r, 2, 12), o: [0, 1.55 + y, 0] };
      loft([ring], { into: neckGeo, capStart: i===0, capEnd: i===6 });
    }

    const shoulderGeo = ellipsoid(0.12, 0.08, 0.1, { seg: 10, rows: 6 });

    const armUpperGeo = emptyMesh();
    for (let i = 0; i <= 8; i++) {
      const t = i / 8;
      const y = t * 0.7;
      const r = 0.07 - t * 0.015;
      const ring = { pts: superEllipse(r, r, 2, 10), o: [0, y, 0] };
      loft([ring], { into: armUpperGeo, capStart: i===0, capEnd: i===8 });
    }

    const armLowerGeo = emptyMesh();
    for (let i = 0; i <= 8; i++) {
      const t = i / 8;
      const y = t * 0.7;
      const r = 0.06 - t * 0.01;
      const ring = { pts: superEllipse(r, r, 2, 10), o: [0, y, 0] };
      loft([ring], { into: armLowerGeo, capStart: i===0, capEnd: i===8 });
    }

    const handGeo = ellipsoid(0.06, 0.08, 0.04, { seg: 8, rows: 6 });

    const legUpperGeo = emptyMesh();
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const y = t * 0.9;
      const r = 0.1 - t * 0.02;
      const ring = { pts: superEllipse(r, r, 2, 12), o: [0, y, 0] };
      loft([ring], { into: legUpperGeo, capStart: i===0, capEnd: i===10 });
    }

    const legLowerGeo = emptyMesh();
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const y = t * 0.9;
      const r = 0.08 - t * 0.015;
      const ring = { pts: superEllipse(r, r, 2, 12), o: [0, y, 0] };
      loft([ring], { into: legLowerGeo, capStart: i===0, capEnd: i===10 });
    }

    const footGeo = boxRound(0.08, 0.06, 0.2, { n: 3, roundY: 0.3 });

    const allGeo = buildBufferGeometry(torso);
    const headMesh = new THREE.Mesh(buildBufferGeometry(headGeo), mat);
    headMesh.position.y = 1.75;
    group.add(headMesh);

    const neckMesh = new THREE.Mesh(buildBufferGeometry(neckGeo), mat);
    neckMesh.position.y = 1.55;
    group.add(neckMesh);

    const torsoMesh = new THREE.Mesh(buildBufferGeometry(torso), mat);
    torsoMesh.position.y = 0.5;
    group.add(torsoMesh);

    const leftShoulder = new THREE.Mesh(shoulderGeo, mat);
    leftShoulder.position.set(-0.32, 1.35, 0);
    group.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, mat);
    rightShoulder.position.set(0.32, 1.35, 0);
    group.add(rightShoulder);

    const leftArmUpper = new THREE.Mesh(armUpperGeo, mat);
    leftArmUpper.position.set(-0.32, 0.75, 0);
    group.add(leftArmUpper);

    const rightArmUpper = new THREE.Mesh(armUpperGeo, mat);
    rightArmUpper.position.set(0.32, 0.75, 0);
    group.add(rightArmUpper);

    const leftArmLower = new THREE.Mesh(armLowerGeo, mat);
    leftArmLower.position.set(-0.32, -0.05, 0);
    group.add(leftArmLower);

    const rightArmLower = new THREE.Mesh(armLowerGeo, mat);
    rightArmLower.position.set(0.32, -0.05, 0);
    group.add(rightArmLower);

    const leftHand = new THREE.Mesh(handGeo, mat);
    leftHand.position.set(-0.32, -0.75, 0);
    group.add(leftHand);

    const rightHand = new THREE.Mesh(handGeo, mat);
    rightHand.position.set(0.32, -0.75, 0);
    group.add(rightHand);

    const leftLegUpper = new THREE.Mesh(legUpperGeo, mat);
    leftLegUpper.position.set(-0.15, -0.5, 0);
    group.add(leftLegUpper);

    const rightLegUpper = new THREE.Mesh(legUpperGeo, mat);
    rightLegUpper.position.set(0.15, -0.5, 0);
    group.add(rightLegUpper);

    const leftLegLower = new THREE.Mesh(legLowerGeo, mat);
    leftLegLower.position.set(-0.15, -1.4, 0);
    group.add(leftLegLower);

    const rightLegLower = new THREE.Mesh(legLowerGeo, mat);
    rightLegLower.position.set(0.15, -1.4, 0);
    group.add(rightLegLower);

    const leftFoot = new THREE.Mesh(footGeo, mat);
    leftFoot.position.set(-0.15, -1.9, 0.05);
    group.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeo, mat);
    rightFoot.position.set(0.15, -1.9, 0.05);
    group.add(rightFoot);

    group.position.set(0, 2, 0);
    this._scene.add(group);
    this._mesh = group;

    this._rig = new THREE.Group();
    this._rig.name = 'camera-rig';
    this._rig.position.copy(group.position);
    this._rig.position.y += 1.8;
    this._scene.add(this._rig);

    this._camera.position.set(0, 2.5, -8);
    this._rig.add(this._camera);
    this._camera.position.set(0, -0.3, 0);

    this._velocity = new THREE.Vector3();
    this._onGround = false;
    this._health = 100;
    this._built = true;

    console.info(`[player] shape-shifter spawned at ${group.position.x.toFixed(1)}, ${group.position.y.toFixed(1)}, ${group.position.z.toFixed(1)}`);
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
