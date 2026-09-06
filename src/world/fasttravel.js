import * as THREE from 'three';
import { SAFE_HOUSES } from './districts.js';
import { Rng } from '../core/rng.js';

/**
 * WORLD — fast travel system.
 *
 * Safe houses are unlockable travel points. Once discovered, the player can
 * fast travel between them from the map UI. Travel triggers a loading screen
 * with gameplay tips.
 */

const TRAVEL_TIME = 3.0; // seconds of loading screen
const TIPS = [
  'Infected zones are most dangerous at night.',
  'Clear buildings from the roof for better cover.',
  'Listen for audio cues to locate survivors.',
  'High ground gives you a tactical advantage.',
  ' conserve ammunition in the industrial district.',
  'Check corners before entering tight spaces.',
  'Night vision is limited — use light sources carefully.',
  'Rescue survivors to unlock new safe houses.',
  'Car crashes often contain useful supplies.',
  'Infected hordes are attracted to loud noises.',
];

export class FastTravelSystem {
  static id = 'fasttravel';
  static deps = ['ui', 'world', 'player'];

  constructor() {
    this.unlocked = new Set();
    this.currentTarget = null;
    this.traveling = false;
    this.travelTimer = 0;
    this.tip = '';
    this.onArrive = null;
  }

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this.ui = ctx.peek('ui');
    this._unlockDefault();
  }

  _unlockDefault() {
    this.unlocked.add('spawn_market');
  }

  unlock(id) {
    if (this.unlocked.has(id)) return false;
    this.unlocked.add(id);
    this.ui?.banner?.show('Safe House Unlocked', 'Fast travel available');
    return true;
  }

  isUnlocked(id) {
    return this.unlocked.has(id);
  }

  getAvailable() {
    return SAFE_HOUSES.filter(h => this.unlocked.has(h.id));
  }

  getDiscoverable() {
    return SAFE_HOUSES.filter(h => !this.unlocked.has(h.id));
  }

  discoverNearby(wx, wz, radius = 15) {
    for (const house of this.getDiscoverable()) {
      const d = Math.hypot(house.x - wx, house.z - wz);
      if (d < radius) {
        this.unlock(house.id);
        return house;
      }
    }
    return null;
  }

  startTravel(targetId, onArrive) {
    if (!this.unlocked.has(targetId)) return false;
    if (this.traveling) return false;
    const target = SAFE_HOUSES.find(h => h.id === targetId);
    if (!target) return false;

    this.currentTarget = target;
    this.traveling = true;
    this.travelTimer = TRAVEL_TIME;
    this.tip = TIPS[this.rng.int(0, TIPS.length - 1)];
    this.onArrive = onArrive;
    return true;
  }

  update(dt) {
    if (!this.traveling) return;
    this.travelTimer -= dt;
    if (this.travelTimer <= 0) {
      this.traveling = false;
      if (this.onArrive && this.currentTarget) {
        const target = this.currentTarget;
        this.onArrive(target);
        this.currentTarget = null;
      }
    }
  }

  getProgress() {
    return this.traveling ? 1 - this.travelTimer / TRAVEL_TIME : 0;
  }

  getCurrentTip() {
    return this.tip;
  }

  isTraveling() {
    return this.traveling;
  }

  getTarget() {
    return this.currentTarget;
  }
}
