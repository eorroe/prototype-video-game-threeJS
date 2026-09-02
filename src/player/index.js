import * as THREE from 'three';

function createLimb(w, h, d) {
  const g = new THREE.CylinderGeometry(w * 0.8, w, h, 6, 1);
  g.translate(0, h / 2, 0);
  return g;
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

    const mat = ctx.get('materials').get('black_ops');
    const group = new THREE.Group();
    group.name = 'player';

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.3, 1.2, 8), mat);
    torso.position.y = 1.1;
    group.add(torso);

    const chest = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat);
    chest.position.y = 1.6;
    group.add(chest);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), mat);
    head.position.y = 1.95;
    group.add(head);

    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mat);
    jaw.position.y = 1.78;
    group.add(jaw);

    const leftArm = new THREE.Group();
    const leftShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 4), mat);
    leftArm.add(leftShoulder);
    const leftUpper = new THREE.Mesh(createLimb(0.1, 0.7, 0.1), mat);
    leftUpper.position.y = -0.35;
    leftArm.add(leftUpper);
    const leftLower = new THREE.Mesh(createLimb(0.08, 0.7, 0.08), mat);
    leftLower.position.y = -1.05;
    leftArm.add(leftLower);
    leftArm.position.set(-0.42, 1.55, 0);
    group.add(leftArm);

    const rightArm = new THREE.Group();
    const rightShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 4), mat);
    rightArm.add(rightShoulder);
    const rightUpper = new THREE.Mesh(createLimb(0.1, 0.7, 0.1), mat);
    rightUpper.position.y = -0.35;
    rightArm.add(rightUpper);
    const rightLower = new THREE.Mesh(createLimb(0.08, 0.7, 0.08), mat);
    rightLower.position.y = -1.05;
    rightArm.add(rightLower);
    rightArm.position.set(0.42, 1.55, 0);
    group.add(rightArm);

    const leftLeg = new THREE.Group();
    const leftThigh = new THREE.Mesh(createLimb(0.14, 0.9, 0.14), mat);
    leftLeg.add(leftThigh);
    const leftShin = new THREE.Mesh(createLimb(0.1, 0.9, 0.1), mat);
    leftShin.position.y = -0.9;
    leftLeg.add(leftShin);
    const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.25), mat);
    leftFoot.position.set(0, -1.8, 0.08);
    leftLeg.add(leftFoot);
    leftLeg.position.set(-0.18, 0.6, 0);
    group.add(leftLeg);

    const rightLeg = new THREE.Group();
    const rightThigh = new THREE.Mesh(createLimb(0.14, 0.9, 0.14), mat);
    rightLeg.add(rightThigh);
    const rightShin = new THREE.Mesh(createLimb(0.1, 0.9, 0.1), mat);
    rightShin.position.y = -0.9;
    rightLeg.add(rightShin);
    const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.25), mat);
    rightFoot.position.set(0, -1.8, 0.08);
    rightLeg.add(rightFoot);
    rightLeg.position.set(0.18, 0.6, 0);
    group.add(rightLeg);

    group.position.set(0, 2, 0);
    this._scene.add(group);
    this._mesh = group;

    this._rig = new THREE.Group();
    this._rig.name = 'camera-rig';
    this._rig.position.copy(group.position);
    this._rig.position.y += 1.7;
    this._scene.add(this._rig);

    this._camera.position.set(0, 2.2, -7);
    this._rig.add(this._camera);
    this._camera.position.set(0, -0.5, 0);

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
    forward.y = 0;
    forward.normalize();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this._rig.quaternion);
    right.y = 0;
    right.normalize();

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
    this._rig.position.y += 1.7;

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
