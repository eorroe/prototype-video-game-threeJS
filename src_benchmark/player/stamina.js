import { MOVE } from './tuning.js';
import { clamp, clamp01, approach } from './springs.js';

export class Stamina {
  constructor() {
    this.pool = MOVE.stamina.max;
    this.max = MOVE.stamina.max;
    this.regenRate = MOVE.stamina.regenRate;
    this.regenRateStanding = MOVE.stamina.regenRateStanding;
    this.regenDelay = MOVE.stamina.regenDelay;
    this._exerting = false;
    this._drainPerSec = 0;
    this._lastExert = -999;
    this._regenTimer = 0;
    this._depleted = false;
    this._depletedTime = 0;
    this._recentlyExerted = false;
    this._regenPause = 0;
  }

  exert(costPerSec) {
    if (this._depleted) return false;
    this._exerting = true;
    this._drainPerSec = Math.max(this._drainPerSec, costPerSec);
    this._lastExert = 0;
    this._regenPause = this.regenDelay;
    return true;
  }

  oneShot(cost) {
    if (this._depleted) return false;
    const newPool = this.pool - cost;
    if (newPool < 0) {
      this.pool = 0;
      this._depleted = true;
      this._depletedTime = 0;
      this._regenPause = this.regenDelay + 0.3;
      return false;
    }
    this.pool = newPool;
    this._lastExert = 0;
    this._regenPause = this.regenDelay;
    return true;
  }

  update(h, standingStill, horizontalSpeed) {
    this._exerting = false;
    this._drainPerSec = 0;

    if (this._depleted) {
      this._depletedTime += h;
      if (this.pool > 0) {
        this._depleted = false;
        this._regenPause = this.regenDelay;
      }
    }

    if (this._regenPause > 0) {
      this._regenPause = Math.max(0, this._regenPause - h);
    }

    const wantRegen = this._regenPause <= 0 && !this._exerting;
    const rate = standingStill ? this.regenRateStanding : this.regenRate;

    if (wantRegen) {
      this.pool = Math.min(this.max, this.pool + rate * h);
    }

    this._recentlyExerted = this._regenPause > 0;
  }

  get fraction() {
    return this.pool / this.max;
  }

  get available() {
    return this.pool > 0;
  }

  get depleted() {
    return this._depleted;
  }

  get recentlyExerted() {
    return this._recentlyExerted;
  }
}
