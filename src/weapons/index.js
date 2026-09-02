import * as THREE from 'three';

export class WeaponSystem {
  static id = 'weapons';
  static deps = ['render', 'player'];

  async init(ctx) {
    this._ctx = ctx;
    this._input = ctx.input;
    this._rng = ctx.rng.fork();
    this._weaponGroup = new THREE.Group();
    this._weaponGroup.position.set(0.25, -0.3, -0.8);
    ctx.viewScene.add(this._weaponGroup);

    const mat = ctx.get('materials').get('metal_brushed');

    const gunGeo = new THREE.BoxGeometry(0.15, 0.15, 0.8);
    this._gunMesh = new THREE.Mesh(gunGeo, mat);
    this._weaponGroup.add(this._gunMesh);

    const barrelGeo = new THREE.BoxGeometry(0.04, 0.04, 0.35);
    this._barrelMesh = new THREE.Mesh(barrelGeo, mat);
    this._barrelMesh.position.set(0, 0.05, -0.5);
    this._weaponGroup.add(this._barrelMesh);

    this._recoilOffset = new THREE.Vector3();
    this._bobTime = 0;
    this._basePos = new THREE.Vector3(0.25, -0.3, -0.8);

    console.log('[weapons] 1 weapon · viewmodel ready');
  }

  update(dt, ctx) {
    const input = this._input;

    this._weaponGroup.rotation.y = -input.look.x * 0.3;
    this._weaponGroup.rotation.x = input.look.y * 0.2;

    const moveVec = input.moveVector();
    const isMoving = Math.hypot(moveVec.x, moveVec.y) > 0.01;
    if (isMoving) {
      this._bobTime += dt * 10;
    } else {
      this._bobTime *= Math.exp(-dt * 8);
    }
    const bobX = Math.sin(this._bobTime) * 0.015;
    const bobY = Math.abs(Math.cos(this._bobTime)) * 0.008;

    if (input.firePressed) {
      this._recoilOffset.y += 0.04;
      this._recoilOffset.z += 0.02;
      this._recoilOffset.x += this._rng.signed() * 0.01;
    }
    this._recoilOffset.lerp(new THREE.Vector3(), dt * 12);

    this._weaponGroup.position.set(
      this._basePos.x + bobX + this._recoilOffset.x,
      this._basePos.y + bobY + this._recoilOffset.y,
      this._basePos.z + this._recoilOffset.z
    );
  }

  lateUpdate(dt, ctx) {
    this._weaponGroup.position.x += (this._basePos.x - this._weaponGroup.position.x) * 0.1;
    this._weaponGroup.position.y += (this._basePos.y - this._weaponGroup.position.y) * 0.1;
    this._weaponGroup.position.z += (this._basePos.z - this._weaponGroup.position.z) * 0.1;
  }

  dispose() {
    if (this._weaponGroup) {
      this._ctx.viewScene.remove(this._weaponGroup);
      this._weaponGroup.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    }
  }
}
