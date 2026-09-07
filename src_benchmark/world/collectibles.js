import * as THREE from 'three';
import { COLLECTIBLE_TYPES, ACTIVITY_TYPES, districtAt } from './districts.js';
import { Rng } from '../core/rng.js';

/**
 * WORLD — collectibles and exploration incentives.
 *
 * Collectibles are scattered around the world: lore documents, weapon upgrade
 * parts and hidden weapon caches. Hidden caches and underground areas are
 * placed off the main paths. Side activities (rescue survivors, clear infected
 * zones) are generated per district.
 */

const MAX_COLLECTIBLES = 80;
const MAX_ACTIVITIES = 20;

export class CollectiblesSystem {
  static id = 'collectibles';
  static deps = ['world', 'ui', 'ai'];

  constructor() {
    this.collectibles = [];
    this.activities = [];
    this.discovered = new Set();
    this.collected = new Set();
  }

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this.world = ctx.peek('world');
    this.ui = ctx.peek('ui');
    this.ai = ctx.peek('ai');
    this._generate();
  }

  _generate() {
    this.collectibles = [];
    this.activities = [];
    const rng = this.rng;

    // Scatter collectibles across the world
    for (let i = 0; i < MAX_COLLECTIBLES; i++) {
      const type = this._pickType(rng);
      const x = rng.range(-450, 450);
      const z = rng.range(-450, 450);
      const district = districtAt(x, z);
      if (!district) continue;

      this.collectibles.push({
        id: `col_${i}`,
        type,
        position: new THREE.Vector3(x, 1.2, z),
        district,
        collected: false,
        hidden: rng.float() < 0.3,
      });
    }

    // Generate side activities
    for (let i = 0; i < MAX_ACTIVITIES; i++) {
      const type = rng.pick(Object.values(ACTIVITY_TYPES));
      const x = rng.range(-400, 400);
      const z = rng.range(-400, 400);
      const district = districtAt(x, z);
      if (!district) continue;

      this.activities.push({
        id: `act_${i}`,
        type,
        position: new THREE.Vector3(x, 0, z),
        district,
        active: true,
        progress: 0,
      });
    }
  }

  _pickType(rng) {
    const r = rng.float();
    if (r < 0.5) return COLLECTIBLE_TYPES.lore;
    if (r < 0.8) return COLLECTIBLE_TYPES.upgrade;
    return COLLECTIBLE_TYPES.weapon;
  }

  update(dt) {
    const player = this.ctx.peek('player');
    const pos = player?.position ?? player?.capsulePosition ?? this.ctx.camera.position;
    if (!pos) return;

    // Check collectible proximity
    for (const col of this.collectibles) {
      if (col.collected) continue;
      const d = pos.distanceTo(col.position);
      if (d < 3.0) {
        col.collected = true;
        this.collected.add(col.id);
        this.ui?.banner?.show(col.type.label, `+${col.type.xp} XP`);
        this.ctx.events.emit('collectible:found', col);
      }
    }

    // Check activity proximity
    for (const act of this.activities) {
      if (!act.active) continue;
      const d = pos.distanceTo(act.position);
      if (d < 5.0) {
        act.progress = Math.min(1, act.progress + dt * 0.3);
        if (act.progress >= 1) {
          act.active = false;
          this.ui?.banner?.show(act.type.label, `+${act.type.xp} XP`);
          this.ctx.events.emit('activity:complete', act);
          // Spawn activity-specific entities
          this._spawnActivityRewards(act);
        }
      }
    }
  }

  _spawnActivityRewards(act) {
    if (!this.ai) return;
    const pos = act.position;
    if (act.type.id === 'rescue') {
      // Spawn a survivor NPC (represented as a non-hostile agent)
      // In a full implementation this would spawn a friendly NPC
    } else if (act.type.id === 'clear') {
      // Spawn extra enemies as a final wave
      for (let i = 0; i < 3; i++) {
        const a = pos.clone();
        a.x += (Math.random() - 0.5) * 8;
        a.z += (Math.random() - 0.5) * 8;
        a.y = 0;
        this.ai.spawn('irregular', a, Math.random() * Math.PI * 2);
      }
    }
  }

  getNearbyCollectibles(pos, radius = 50) {
    return this.collectibles.filter(c => {
      if (c.collected) return false;
      return pos.distanceTo(c.position) < radius;
    });
  }

  getNearbyActivities(pos, radius = 80) {
    return this.activities.filter(a => {
      if (!a.active) return false;
      return pos.distanceTo(a.position) < radius;
    });
  }

  getStats() {
    return {
      total: this.collectibles.length,
      collected: this.collected.size,
      activities: this.activities.filter(a => !a.active).length,
    };
  }
}
