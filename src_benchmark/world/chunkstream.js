import * as THREE from 'three';
import { Rng } from '../core/rng.js';
import { districtAt, districtCell, districtCentre, districtRng, DISTRICT_GRID, DISTRICT_THEMES } from './districts.js';
import { Assembler } from './builder.js';
import { BUILDINGS, STREET, SET_PIECES, GATE } from './layout.js';
import { buildGround } from './ground.js';
import { buildBuilding, collapseRoof } from './buildings.js';
import { registerProps } from './props.js';
import {
  registerDressingProps as registerDress,
  dressStreet,
  dressBuildings,
  scatterDebris,
  buildGate,
  buildPerimeter,
  groundY,
  isOpen,
} from './dressing.js';

/**
 * WORLD — chunk-based streaming.
 *
 * The open world is divided into 200x200m district cells. Only the districts
 * within streaming distance of the player are built and resident in the scene.
 * Each district is generated procedurally from its theme and a deterministic
 * seed, so leaving and re-entering a district rebuilds it identically.
 *
 * CHUNK HIERARCHY
 *   District (200x200m)  — theme, spawn list, collectibles, activities
 *     -> Sub-chunk (64x64m) — Assembler bucket, prop LOD groups
 *
 * TRANSITIONS
 *   Where two districts meet, a 20m blend zone mixes props and buildings from
 *   both themes so the player never sees a hard cut.
 */

const STREAM_DIST = 240; // build districts within this radius
const UNSTREAM_DIST = 320; // drop districts beyond this radius
const BLEND_ZONE = 20; // metres of overlap between districts

const _v = new THREE.Vector3();

export class ChunkStreamer {
  constructor(ctx) {
    this.ctx = ctx;
    this.rng = ctx.rng.fork();
    this.root = new THREE.Group();
    this.root.name = 'world_chunks';
    ctx.scene.add(this.root);

    this.districts = new Map(); // "col,row" -> { theme, root, assembler, built, bounds }
    this.activeCells = new Set();
    this._pending = new Set();
    this.stats = { districts: 0, staticTris: 0, instTris: 0, drawCalls: 0 };

    this._world = ctx.peek('world');
    this._playerPos = new THREE.Vector3();
  }

  async init() {
    // Pre-register prop prototypes shared by all districts.
    const A = new Assembler({ materials: this.ctx.get('materials'), rng: this.rng, render: this.ctx.peek('render') });
    registerProps(A, this.rng);
    registerDress(A, this.rng);
    A.releaseCache();
  }

  update(dt) {
    const player = this.ctx.peek('player');
    const pos = player?.position ?? player?.capsulePosition ?? this.ctx.camera.position;
    if (!pos) return;
    this._playerPos.copy(pos);

    const { col: pc, row: pr } = districtCell(pos.x, pos.z);
    const needed = new Set();

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const c = pc + dc;
        const r = pr + dr;
        if (c < 0 || c >= DISTRICT_GRID.cols || r < 0 || r >= DISTRICT_GRID.rows) continue;
        const key = `${c},${r}`;
        needed.add(key);
        if (!this.districts.has(key) && !this._pending.has(key)) {
          this._pending.add(key);
          this._buildDistrict(c, r).then(() => this._pending.delete(key));
        }
      }
    }

    // Stream out far districts
    for (const [key, dist] of this.districts) {
      if (!needed.has(key)) {
        dist.root.parent?.remove(dist.root);
        dist.assembler?.dispose();
        this.districts.delete(key);
      }
    }

    this.activeCells = needed;
    this.stats.districts = this.districts.size;
  }

  async _buildDistrict(col, row) {
    const themeName = DISTRICT_MAP[row]?.[col]?.theme;
    if (!themeName) return;
    const theme = DISTRICT_THEMES[themeName];
    const rng = districtRng(col, row, this.rng);
    const centre = districtCentre(col, row);

    const A = new Assembler({
      materials: this.ctx.get('materials'),
      rng,
      render: this.ctx.peek('render'),
    });

    // Transform so district centre is at origin for this build.
    A.setTransform(0, -centre.x, -centre.z);

    registerProps(A, rng);
    registerDress(A, rng);

    // Ground
    buildGround(A, rng);

    // Buildings with theme override
    const infos = [];
    const dBuildings = this._themeBuildings(theme, rng, centre);
    for (const spec of dBuildings) {
      const info = buildBuilding(A, rng, spec);
      infos.push(info);
      if (spec.collapse && rng.float() < 0.3) {
        collapseRoof(A, rng, spec, info, {
          x: spec.x + rng.range(-2, 2),
          z: spec.z + rng.range(-2, 2),
        });
      }
    }

    // District-specific dressing
    dressStreet(A, rng);
    dressBuildings(A, rng, infos);
    scatterDebris(A, rng);

    // District props with theme mix
    this._dressDistrict(A, rng, theme, centre);

    // Blend props at edges
    this._dressBlends(A, rng, col, row, centre);

    A.finalize(this.root, this.ctx.peek('physics'));

    const bounds = new THREE.Box3(
      new THREE.Vector3(centre.x - DISTRICT_GRID.cellSize / 2, -2, centre.z - DISTRICT_GRID.cellSize / 2),
      new THREE.Vector3(centre.x + DISTRICT_GRID.cellSize / 2, 26, centre.z + DISTRICT_GRID.cellSize / 2),
    );

    this.districts.set(`${col},${row}`, {
      theme,
      col,
      row,
      centre,
      root: A.meshes[0]?.parent ?? this.root,
      assembler: A,
      built: true,
      bounds,
      spawnPoints: this._spawnPointsForDistrict(centre, rng),
    });

    this.stats.staticTris += A.stats.staticTris;
    this.stats.instTris += A.stats.instTris;
    this.stats.drawCalls += A.stats.drawCalls;
  }

  _themeBuildings(theme, rng, centre) {
    const cs = DISTRICT_GRID.cellSize;
    const hx = cs / 2 - 10;
    const hz = cs / 2 - 10;
    const buildings = [];
    const count = 6 + rng.int(0, 6);

    for (let i = 0; i < count; i++) {
      const x = centre.x + rng.range(-hx, hx);
      const z = centre.z + rng.range(-hz, hz);
      const w = rng.range(8, 18);
      const d = rng.range(8, 18);
      const floors = rng.int(1, 4);
      const wallKey = rng.pick(theme.wallKeys);
      const damage = theme.buildingDamage * rng.range(0.5, 1.5);

      buildings.push({
        id: `d_${centre.x}_${centre.z}_${i}`,
        x, z, w, d,
        floors,
        wallKey,
        damage: Math.min(1, damage),
        streetSide: rng.int(0, 3),
        secondarySide: (rng.int(0, 3) + 2) % 4,
        balconies: rng.float() < 0.5 ? rng.range(0.2, 0.7) : 0,
        doorBays: { [rng.int(0, 3)]: rng.int(0, 2) },
        roofProps: rng.int(1, 5),
        collapse: rng.float() < 0.15,
        enterable: rng.float() < 0.3,
        skipSides: rng.float() < 0.3 ? [rng.int(0, 3)] : undefined,
      });
    }
    return buildings;
  }

  _dressDistrict(A, rng, theme, centre) {
    const cs = DISTRICT_GRID.cellSize;
    const hz = cs / 2;
    const count = 30 + rng.int(0, 40);
    const mix = theme.propMix;
    const ids = Object.keys(mix);
    const weights = ids.map(id => mix[id] ?? 0.1);

    for (let i = 0; i < count; i++) {
      const x = centre.x + rng.range(-cs / 2 + 2, cs / 2 - 2);
      const z = centre.z + rng.range(-hz + 2, hz - 2);
      if (!isOpen(x, z, 0.3)) continue;
      const id = this._weightedPick(rng, ids, weights);
      const y = groundY(x, z);
      const s = rng.range(0.7, 1.3);
      A.put(id, x, y, z, rng.float() * 6.28, s, [1, rng.range(0.8, 1.5), 1], rng.range(-0.2, 0.2), rng.range(-0.2, 0.2));
    }
  }

  _dressBlends(A, rng, col, row, centre) {
    // Blend zone: extra props at edges where neighbouring districts meet.
    const cs = DISTRICT_GRID.cellSize;
    const blendCount = 15;
    const dirs = [
      { dx: -1, dz: 0, side: 'west' },
      { dx: 1, dz: 0, side: 'east' },
      { dx: 0, dz: -1, side: 'south' },
      { dx: 0, dz: 1, side: 'north' },
    ];

    for (const dir of dirs) {
      const nc = col + dir.dx;
      const nr = row + dir.dz;
      if (nc < 0 || nc >= DISTRICT_GRID.cols || nr < 0 || nr >= DISTRICT_GRID.rows) continue;
      const neighbour = DISTRICT_MAP[nr]?.[nc]?.theme;
      if (!neighbour) continue;
      const nTheme = DISTRICT_THEMES[neighbour];

      for (let i = 0; i < blendCount; i++) {
        const t = rng.float();
        let x, z;
        if (dir.side === 'west') {
          x = centre.x - cs / 2 + t * BLEND_ZONE;
          z = centre.z + rng.range(-cs / 2, cs / 2);
        } else if (dir.side === 'east') {
          x = centre.x + cs / 2 - t * BLEND_ZONE;
          z = centre.z + rng.range(-cs / 2, cs / 2);
        } else if (dir.side === 'south') {
          x = centre.x + rng.range(-cs / 2, cs / 2);
          z = centre.z - cs / 2 + t * BLEND_ZONE;
        } else {
          x = centre.x + rng.range(-cs / 2, cs / 2);
          z = centre.z + cs / 2 - t * BLEND_ZONE;
        }
        if (!isOpen(x, z, 0.3)) continue;
        const themeMix = rng.float() < 0.5 ? theme : nTheme;
        const y = groundY(x, z);
        const mix = themeMix.propMix;
        const id = rng.pick(Object.keys(mix));
        A.put(id, x, y, z, rng.float() * 6.28, rng.range(0.8, 1.2), [1, 1, 1]);
      }
    }
  }

  _spawnPointsForDistrict(centre, rng) {
    const cs = DISTRICT_GRID.cellSize;
    const points = [];
    for (let i = 0; i < 8; i++) {
      points.push({
        position: new THREE.Vector3(
          centre.x + rng.range(-cs / 3, cs / 3),
          0,
          centre.z + rng.range(-cs / 3, cs / 3)
        ),
        yaw: rng.float() * Math.PI * 2,
        tag: `district_${centre.x.toFixed(0)}_${centre.z.toFixed(0)}`,
      });
    }
    return points;
  }

  _weightedPick(rng, items, weights) {
    const total = weights.reduce((a, b) => a + b, 0);
    let r = rng.float() * total;
    for (let i = 0; i < items.length; i++) {
      r -= weights[i];
      if (r <= 0) return items[i];
    }
    return items[items.length - 1];
  }

  getDistrictAt(wx, wz) {
    const { col, row } = districtCell(wx, wz);
    return this.districts.get(`${col},${row}`) ?? null;
  }

  dispose() {
    for (const dist of this.districts.values()) {
      dist.root.parent?.remove(dist.root);
      dist.assembler?.dispose();
    }
    this.districts.clear();
    this.root.parent?.remove(this.root);
  }
}
