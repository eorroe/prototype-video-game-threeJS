import * as THREE from 'three';
import { Rng } from '../core/rng.js';
import { districtAt, DISTRICT_THEMES } from './districts.js';

/**
 * WORLD — dynamic spawning system.
 *
 * Spawns enemies, vehicles and interactive props based on:
 *   - District danger level
 *   - Day/night cycle (from sky system)
 *   - Player proximity
 *   - Active events
 *
 * Replaces the static garrison in ai.populate() with a living world that
 * continuously refreshes its population.
 */

export class SpawnSystem {
  static id = 'spawner';
  static deps = ['ai', 'world', 'sky', 'fx'];

  constructor() {
    this.spawns = [];
    this.activeAgents = [];
    this._spawnBudget = 0;
    this._despawnDist = 120;
    this._spawnDist = 80;
    this._respawnTimer = 0;
    this._respawnInterval = 8;
    this.maxAgents = 24;
  }

  async init(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this.ai = ctx.peek('ai');
    this.world = ctx.peek('world');
    this.sky = ctx.peek('sky');
  }

  update(dt) {
    if (!this.ai) return;
    const player = this.ctx.peek('player');
    const pos = player?.position ?? player?.capsulePosition ?? this.ctx.camera.position;
    if (!pos) return;

    const district = districtAt(pos.x, pos.z);
    const danger = district?.dangerLevel ?? 2;
    const hour = this.sky?.hour ?? 12;
    const isNight = hour < 6 || hour > 19;

    // Night spawn multiplier
    const nightMult = isNight ? 1.5 : 1.0;
    const budget = Math.floor(danger * 2 * nightMult);

    // Despawn far agents
    for (let i = this.activeAgents.length - 1; i >= 0; i--) {
      const a = this.activeAgents[i];
      if (!a.alive) {
        this.activeAgents.splice(i, 1);
        continue;
      }
      const d = a.position.distanceTo(pos);
      if (d > this._despawnDist) {
        this.ai.agents = this.ai.agents.filter(ag => ag !== a);
        this.activeAgents.splice(i, 1);
      }
    }

    // Respawn timer
    this._respawnTimer += dt;
    if (this._respawnTimer >= this._respawnInterval && this.activeAgents.length < this.maxAgents) {
      this._respawnTimer = 0;
      this._spawnWave(pos, danger, isNight);
    }
  }

  _spawnWave(playerPos, danger, isNight) {
    if (!this.ai) return;
    const count = Math.min(this.maxAgents - this.activeAgents.length, Math.floor(danger * 1.5));
    const district = districtAt(playerPos.x, playerPos.z);
    const theme = district ? DISTRICT_THEMES[district.id] : null;
    const mix = theme?.enemyMix ?? { vanguard: 0.4, irregular: 0.4, breacher: 0.2 };

    const variants = Object.entries(mix).sort((a, b) => b[1] - a[1]).map(e => e[0]);

    for (let i = 0; i < count; i++) {
      const angle = this.rng.float() * Math.PI * 2;
      const dist = this.rng.range(this._spawnDist * 0.5, this._spawnDist);
      const x = playerPos.x + Math.cos(angle) * dist;
      const z = playerPos.z + Math.sin(angle) * dist;
      const y = this.ai.groundAt(x, z, playerPos.y + 4);
      const variant = this.rng.pick(variants);

      const agent = this.ai.spawn(variant, new THREE.Vector3(x, y, z), angle + Math.PI);
      this.activeAgents.push(agent);
    }
  }

  getActiveCount() {
    return this.activeAgents.filter(a => a.alive).length;
  }
}
