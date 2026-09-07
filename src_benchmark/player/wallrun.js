import * as THREE from 'three';
import { MOVE } from './tuning.js';
import { clamp, clamp01 } from './springs.js';

export const WALL_NONE = 0;
export const WALL_LEFT = 1;
export const WALL_RIGHT = 2;

export class WallRunProbe {
  constructor(physics) {
    this.physics = physics;
    this._p0 = new THREE.Vector3();
    this._p1 = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this.result = {
      side: WALL_NONE,
      normalX: 0,
      normalY: 0,
      normalZ: 0,
      distance: 0,
      surface: 'concrete',
    };
  }

  probe(c, fx, fz, speed) {
    const phys = this.physics;
    const m = MOVE.wallRun;
    const r = this.result;
    r.side = WALL_NONE;

    if (!phys || !c.touchingWall) return WALL_NONE;

    const nx = c.wallNormal.x;
    const ny = c.wallNormal.y;
    const nz = c.wallNormal.z;

    if (ny > m.wallAngle || ny < -0.3) return WALL_NONE;

    const intoWall = -(fx * nx + fz * nz);
    if (intoWall < 0.15) return WALL_NONE;

    const side = nx * fz - nz * fx;
    const wallSide = side > 0 ? WALL_LEFT : WALL_RIGHT;

    r.side = wallSide;
    r.normalX = nx;
    r.normalY = ny;
    r.normalZ = nz;
    r.distance = c.groundDistance || 0.5;
    r.surface = c.groundSurfaceName;

    return wallSide;
  }
}

export class WallRunMotion {
  constructor() {
    this.active = false;
    this.side = WALL_NONE;
    this.t = 0;
    this.duration = 0;
    this.normalX = 0;
    this.normalY = 0;
    this.normalZ = 0;
    this.tangentX = 0;
    this.tangentZ = 0;
    this.speed = 0;
    this.exitVx = 0;
    this.exitVy = 0;
    this.exitVz = 0;
    this.cameraRoll = 0;
    this.cameraTilt = 0;
    this.staminaDrained = 0;
    this.surface = 'concrete';
  }

  begin(side, nx, ny, nz, speed, surface) {
    const m = MOVE.wallRun;
    this.active = true;
    this.side = side;
    this.t = 0;
    this.duration = m.maxDuration;
    this.normalX = nx;
    this.normalY = ny;
    this.normalZ = nz;

    const upDot = Math.abs(ny);
    const tangentX = nz;
    const tangentZ = -nx;
    const tl = Math.hypot(tangentX, tangentZ) || 1;
    this.tangentX = tangentX / tl;
    this.tangentZ = tangentZ / tl;

    this.speed = clamp(speed, m.minSpeedToStart, m.maxSpeed);
    this.surface = surface;
    this.staminaDrained = 0;
    this.cameraRoll = side === WALL_LEFT ? m.cameraRoll : -m.cameraRoll;
    this.cameraTilt = m.cameraTilt;
  }

  end() {
    this.active = false;
    this.side = WALL_NONE;
    this.cameraRoll = 0;
    this.cameraTilt = 0;
  }

  step(h, wishLen, wishX, wishZ, staminaAvailable) {
    if (!this.active) return false;
    const m = MOVE.wallRun;
    this.t += h;

    const staminaCost = m.staminaDrain * h;
    if (staminaCost > staminaAvailable) {
      this._fail();
      return false;
    }
    this.staminaDrained += staminaCost;

    const targetSpeed = wishLen > 0.1
      ? m.maxSpeed * clamp01(wishLen)
      : m.maxSpeed * 0.7;
    this.speed = approach(this.speed, targetSpeed, m.accel, h);

    const along = this.speed * this.tangentX;
    const across = this.speed * this.tangentZ;
    const currentDir = this.speed > 0.1 ? 1 : 0;
    this.exitVx = this.tangentX * this.speed * currentDir;
    this.exitVy = 0;
    this.exitVz = this.tangentZ * this.speed * currentDir;

    if (this.t >= this.duration) {
      this._fail();
      return false;
    }

    return true;
  }

  jumpOff() {
    const m = MOVE.wallRun;
    const kickX = -this.normalX * m.jumpOffSpeed;
    const kickZ = -this.normalZ * m.jumpOffSpeed;
    const tangentComponent = this.speed * 0.5;
    this.exitVx = kickX + this.tangentX * tangentComponent;
    this.exitVy = m.jumpOffBurst;
    this.exitVz = kickZ + this.tangentZ * tangentComponent;
    const l = Math.hypot(this.exitVx, this.exitVz);
    if (l > m.maxSpeed * 1.3) {
      const s = (m.maxSpeed * 1.3) / l;
      this.exitVx *= s;
      this.exitVz *= s;
    }
    this.end();
    return this.exitVx * this.exitVx + this.exitVy * this.exitVy + this.exitVz * this.exitVz;
  }

  _fail() {
    this.exitVx = this.tangentX * this.speed;
    this.exitVy = -2.5;
    this.exitVz = this.tangentZ * this.speed;
    this.end();
  }

  get progress() {
    return this.duration > 0 ? clamp01(this.t / this.duration) : 1;
  }
}
