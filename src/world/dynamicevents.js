import * as THREE from 'three';
import { Rng } from '../core/rng.js';
import { districtAt, DISTRICT_THEMES } from './districts.js';

/**
 * WORLD — dynamic random events.
 *
 * Events spawn based on district danger level and time of day. The event
 * manager owns the lifecycle: spawn -> play out -> resolve.
 */

export const EVENT_TYPES = {
  firefight: {
    id: 'firefight',
    label: 'Firefight',
    minDanger: 2,
    nightBonus: 0.3,
    cooldown: 120,
  },
  horde: {
    id: 'horde',
    label: 'Infected Horde',
    minDanger: 3,
    nightBonus: 0.8,
    cooldown: 180,
  },
  crash: {
    id: 'crash',
    label: 'Vehicle Crash',
    minDanger: 1,
    nightBonus: 0.1,
    cooldown: 90,
  },
  survivor: {
    id: 'survivor',
    label: 'Survivor Signal',
    minDanger: 1,
    nightBonus: -0.2,
    cooldown: 150,
  },
};

export class DynamicEvents {
  static id = 'dynamicevents';
  static deps = ['ai', 'world', 'sky', 'fx'];

  constructor() {
    this.active = new Map();
    this.lastEventTime = 0;
    this.nextEventIn = 60;
    this.eventLog = [];
  }

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this.ai = ctx.peek('ai');
    this.world = ctx.peek('world');
    this.sky = ctx.peek('sky');
  }

  update(dt) {
    const now = this.ctx.time.elapsed;
    this.nextEventIn -= dt;

    if (this.nextEventIn <= 0 && this.active.size < 3) {
      this._trySpawn(now);
    }

    // Age out old events
    for (const [id, evt] of this.active) {
      evt.age += dt;
      if (evt.age > evt.maxAge) {
        this._resolve(evt);
        this.active.delete(id);
      }
    }
  }

  _trySpawn(now) {
    const player = this.ctx.peek('player');
    const pos = player?.position ?? player?.capsulePosition ?? this.ctx.camera.position;
    if (!pos) return;

    const district = districtAt(pos.x, pos.z);
    if (!district) return;

    const danger = district.dangerLevel;
    const hour = this.sky?.hour ?? 12;
    const isNight = hour < 6 || hour > 19;
    const nightFactor = isNight ? 1 : 0;

    const candidates = Object.values(EVENT_TYPES).filter(e => {
      if (now - this.lastEventTime < e.cooldown) return false;
      if (danger < e.minDanger) return false;
      const roll = this.rng.float();
      const threshold = 0.15 + e.nightBonus * nightFactor + danger * 0.05;
      return roll < threshold;
    });

    if (!candidates.length) {
      this.nextEventIn = this.rng.range(20, 60);
      return;
    }

    const evt = this.rng.pick(candidates);
    this._spawn(evt, pos, district, now);
  }

  _spawn(evt, playerPos, district, now) {
    const rng = this.rng.fork();
    const angle = rng.float() * Math.PI * 2;
    const dist = rng.range(40, 100);
    const x = playerPos.x + Math.cos(angle) * dist;
    const z = playerPos.z + Math.sin(angle) * dist;
    const d = districtAt(x, z);
    if (!d || d.id !== district.id) return;

    const id = `${evt.id}_${now.toFixed(0)}`;
    const record = {
      id,
      type: evt,
      position: new THREE.Vector3(x, 0, z),
      age: 0,
      maxAge: rng.range(60, 120),
      district,
    };

    switch (evt.id) {
      case 'firefight':
        this._spawnFirefight(record, rng);
        break;
      case 'horde':
        this._spawnHorde(record, rng);
        break;
      case 'crash':
        this._spawnCrash(record, rng);
        break;
      case 'survivor':
        this._spawnSurvivor(record, rng);
        break;
    }

    this.active.set(id, record);
    this.lastEventTime = now;
    this.nextEventTime = now + evt.cooldown;
    this.eventLog.push({ time: now, type: evt.id, x, z });
  }

  _spawnFirefight(record, rng) {
    const pos = record.position;
    const variants = ['vanguard', 'irregular', 'breacher'];
    for (let i = 0; i < 4; i++) {
      const ox = pos.x + rng.range(-8, 8);
      const oz = pos.z + rng.range(-8, 8);
      const oy = 0;
      this.ai?.spawn?.(rng.pick(variants), new THREE.Vector3(ox, oy, oz), rng.float() * Math.PI * 2, {
        combat: true,
      });
    }
  }

  _spawnHorde(record, rng) {
    const pos = record.position;
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const dist = rng.range(2, 10);
      const ox = pos.x + Math.cos(angle) * dist;
      const oz = pos.z + Math.sin(angle) * dist;
      this.ai?.spawn?.('irregular', new THREE.Vector3(ox, 0, oz), angle, { horde: true });
    }
  }

  _spawnCrash(record, rng) {
    // Vehicle crash events spawn wreck props and a fire
    const pos = record.position;
    this.ctx.events.emit('event:crash', { position: pos });
  }

  _spawnSurvivor(record, rng) {
    // Survivor events create a waypoint the player can reach
    const pos = record.position;
    this.ctx.events.emit('event:survivor', { position: pos, eventId: record.id });
  }

  _resolve(record) {
    this.ctx.events.emit('event:resolve', { id: record.id, type: record.type.id });
  }

  getActive() {
    return Array.from(this.active.values());
  }
}
