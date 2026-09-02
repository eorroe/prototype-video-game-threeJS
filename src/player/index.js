import * as THREE from 'three';

export class PlayerSystem {
  static id = 'player';
  static deps = ['physics'];

  constructor() {
    this._position = new THREE.Vector3(13.7, 1.0, 19.8);
    this._velocity = new THREE.Vector3();
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._wishDir = new THREE.Vector3();
    this._rayOrigin = new THREE.Vector3();
    this._rayDir = new THREE.Vector3(0, -1, 0);
    this._up = new THREE.Vector3(0, 1, 0);
    this._grounded = false;
    this._jumpProcessed = false;

    this._walk = 4.5;
    this._sprint = 7.0;
    this._tac = 8.5;
    this._jump = 5.0;
  }

  async init(ctx) {
    this._ctx = ctx;
    this._physics = ctx.get('physics');
    this._input = ctx.input;
    this._camera = ctx.camera;

    const { x, y, z } = this._position;
    console.log(`[player] spawn ${x.toFixed(1)}, ${y.toFixed(1)}, ${z.toFixed(1)} · walk ${this._walk} sprint ${this._sprint} tac ${this._tac} m/s · jump ${this._jump} m/s`);

    this._camera.position.copy(this._position);
    ctx.scene.add(this._camera);
  }

  fixedUpdate(h, ctx) {
    const input = this._input;
    const move = input.moveVector();
    const speed = input.action('sprint') ? this._sprint : this._walk;

    const camera = this._camera;
    const forward = this._forward;
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    const right = this._right;
    right.crossVectors(forward, this._up).normalize();

    const wishDir = this._wishDir;
    wishDir.addScaledVector(forward, move.y);
    wishDir.addScaledVector(right, move.x);
    if (wishDir.lengthSq() > 1) wishDir.normalize();

    this._velocity.y -= 9.8 * h;

    const rayOrigin = this._rayOrigin.copy(this._position);
    rayOrigin.y += 0.1;
    const hit = this._physics.raycast(rayOrigin, this._rayDir, 2.0);
    this._grounded = !!hit;

    if (this._grounded) {
      this._velocity.y = 0;
      this._position.y = hit.point.y + 0.1;
      if (input.actionPressed('jump') && !this._jumpProcessed) {
        this._velocity.y = this._jump;
        this._jumpProcessed = true;
      }
    }
    if (!input.action('jump')) {
      this._jumpProcessed = false;
    }

    this._position.x += wishDir.x * speed * h;
    this._position.z += wishDir.z * speed * h;
    this._position.y += this._velocity.y * h;

    camera.rotation.y -= input.look.x;
    camera.rotation.x -= input.look.y;
    camera.rotation.x = Math.max(-89 * Math.PI / 180, Math.min(89 * Math.PI / 180, camera.rotation.x));

    if (this._grounded && wishDir.lengthSq() > 0.001) {
      ctx.events.emit('player:footstep', {});
    }
  }

  update(dt, ctx) {
    this._camera.position.copy(this._position);
    ctx.events.emit('player:state', {
      stance: 'stand',
      sprinting: this._input.action('sprint'),
      ads: this._input.ads
    });
  }

  dispose() {
    if (this._camera && this._ctx?.scene) {
      this._ctx.scene.remove(this._camera);
    }
  }
}
