import * as THREE from 'three';
import { Rng } from '../core/rng.js';

/**
 * WORLD — district definitions and themes.
 *
 * The open world is divided into districts. Each district has a theme that
 * controls building colours, prop mix, enemy types, ambient sound and
 * weather. Transitions between districts are seamless: neighbouring districts
 * share a blend zone where both themes contribute.
 */

export const DISTRICT_THEMES = {
  commercial: {
    id: 'commercial',
    label: 'Commercial District',
    wallKeys: ['plaster_cream', 'plaster_sand', 'plaster_white'],
    trimKeys: ['concrete', 'metal_blue'],
    propMix: {
      crate_a: 1.0, crate_b: 0.8, barrel_rust: 0.6, barrel_blue: 0.5,
      stall: 0.3, sign_board: 0.7, sign_hang: 0.5, lamp_post: 0.4,
      ac_unit: 0.8, sat_dish: 0.3, water_tank: 0.2,
    },
    enemyMix: { vanguard: 0.5, irregular: 0.3, breacher: 0.2 },
    dangerLevel: 2,
    ambience: 'street_day',
    fogDensity: 1.0,
    buildingDamage: 0.2,
    spawnWeight: 1.0,
  },
  industrial: {
    id: 'industrial',
    label: 'Industrial Zone',
    wallKeys: ['concrete', 'concrete_dark', 'plaster_sand'],
    trimKeys: ['metal_rust', 'metal_dark', 'concrete'],
    propMix: {
      barrel_rust: 1.0, barrel_blue: 0.7, barrel_wood: 0.4,
      crate_a: 0.8, crate_c: 0.6, block_big: 0.9, block_small: 0.7,
      jersey: 0.5, gas_bottle: 0.8, ac_unit: 0.9, water_tank: 0.7,
      lamp_post: 0.2, sign_board: 0.3,
    },
    enemyMix: { vanguard: 0.3, irregular: 0.4, breacher: 0.3 },
    dangerLevel: 3,
    ambience: 'industrial_day',
    fogDensity: 1.3,
    buildingDamage: 0.35,
    spawnWeight: 0.8,
  },
  residential: {
    id: 'residential',
    label: 'Residential Area',
    wallKeys: ['plaster_cream', 'plaster_pink', 'plaster_blue', 'plaster_white'],
    trimKeys: ['concrete', 'wood_dark', 'metal_green'],
    propMix: {
      crate_a: 0.5, crate_b: 0.6, barrel_wood: 0.5,
      chair: 0.4, table: 0.3, table_small: 0.3, mattress: 0.3,
      cabinet: 0.2, shelf: 0.3, planter: 0.5, shrub: 0.4,
      sign_hang: 0.4, lamp_post: 0.5,
    },
    enemyMix: { vanguard: 0.4, irregular: 0.4, breacher: 0.2 },
    dangerLevel: 1,
    ambience: 'residential_day',
    fogDensity: 0.9,
    buildingDamage: 0.15,
    spawnWeight: 1.0,
  },
  infected: {
    id: 'infected',
    label: 'Infested Zone',
    wallKeys: ['plaster_sand', 'concrete_dark', 'brick_fine'],
    trimKeys: ['concrete', 'metal_rust'],
    propMix: {
      sandbag_a: 1.0, sandbag_b: 0.9, sandbag_c: 0.8,
      jersey: 0.8, block_big: 0.7, crate_a: 0.6, barrel_rust: 0.5,
      tyre: 0.6, tyre_small: 0.4, plank_a: 0.5, plank_b: 0.5,
      brick_a: 0.9, brick_b: 0.9, slab_shard: 0.7, rebar: 0.6,
    },
    enemyMix: { vanguard: 0.2, irregular: 0.3, breacher: 0.5 },
    dangerLevel: 5,
    ambience: 'infected_day',
    fogDensity: 1.8,
    buildingDamage: 0.7,
    spawnWeight: 0.6,
    infected: true,
  },
};

/**
 * District layout in world space. Each district is a grid cell.
 * The world is a 5x5 grid of districts, each 200x200m.
 * The player starts in the centre (commercial district).
 */
export const DISTRICT_GRID = {
  cellSize: 200,
  cols: 5,
  rows: 5,
};

/**
 * District assignment by grid coordinates [col, row].
 * (0,0) is bottom-left. (2,2) is centre.
 */
export const DISTRICT_MAP = [
  [{ theme: 'industrial' }, { theme: 'industrial' }, { theme: 'commercial' }, { theme: 'residential' }, { theme: 'residential' }],
  [{ theme: 'industrial' }, { theme: 'infected' },    { theme: 'commercial' }, { theme: 'residential' }, { theme: 'residential' }],
  [{ theme: 'commercial' }, { theme: 'commercial' },  { theme: 'commercial' }, { theme: 'residential' }, { theme: 'infected' }],
  [{ theme: 'industrial' }, { theme: 'commercial' },  { theme: 'residential' }, { theme: 'infected' },    { theme: 'infected' }],
  [{ theme: 'industrial' }, { theme: 'industrial' },  { theme: 'residential' }, { theme: 'infected' },    { theme: 'infected' }],
];

/**
 * Safe house locations in world space [x, z, districtCol, districtRow].
 */
export const SAFE_HOUSES = [
  { id: 'spawn_market', label: 'Market Safe House', x: 0, z: 0, col: 2, row: 2, unlocked: true },
  { id: 'warehouse', label: 'Old Warehouse', x: -180, z: 80, col: 1, row: 3, unlocked: false },
  { id: 'apartment', label: 'Apartment Block', x: 200, z: -120, col: 3, row: 1, unlocked: false },
  { id: 'outskirts', label: 'Outskirts Bunker', x: -200, z: -200, col: 0, row: 0, unlocked: false },
  { id: 'docks', label: 'Docks Warehouse', x: 300, z: 200, col: 4, row: 4, unlocked: false },
];

/**
 * Collectible definitions.
 */
export const COLLECTIBLE_TYPES = {
  lore: {
    id: 'lore',
    label: 'Document',
    icon: 'doc',
    xp: 50,
    color: 0xffdd88,
  },
  upgrade: {
    id: 'upgrade',
    label: 'Weapon Part',
    icon: 'wrench',
    xp: 100,
    color: 0x88ffaa,
  },
  weapon: {
    id: 'weapon',
    label: 'Weapon Cache',
    icon: 'gun',
    xp: 200,
    color: 0xff6644,
  },
};

/**
 * Side activity definitions.
 */
export const ACTIVITY_TYPES = {
  rescue: {
    id: 'rescue',
    label: 'Rescue Survivor',
    icon: 'survivor',
    xp: 300,
    reward: 'unlock',
  },
  clear: {
    id: 'clear',
    label: 'Clear Infected Zone',
    icon: 'target',
    xp: 500,
    reward: 'loot',
  },
};

/**
 * Get the district theme at world position.
 */
export function districtAt(wx, wz) {
  const cs = DISTRICT_GRID.cellSize;
  const col = Math.floor((wx + cs * DISTRICT_GRID.cols / 2) / cs);
  const row = Math.floor((wz + cs * DISTRICT_GRID.rows / 2) / cs);
  if (col < 0 || col >= DISTRICT_GRID.cols || row < 0 || row >= DISTRICT_GRID.rows) return null;
  const themeName = DISTRICT_MAP[row]?.[col]?.theme;
  return themeName ? DISTRICT_THEMES[themeName] : null;
}

/**
 * Get the district grid cell for world position.
 */
export function districtCell(wx, wz) {
  const cs = DISTRICT_GRID.cellSize;
  const col = Math.floor((wx + cs * DISTRICT_GRID.cols / 2) / cs);
  const row = Math.floor((wz + cs * DISTRICT_GRID.rows / 2) / cs);
  return { col, row };
}

/**
 * Get world-space centre of a district cell.
 */
export function districtCentre(col, row) {
  const cs = DISTRICT_GRID.cellSize;
  return {
    x: col * cs - (DISTRICT_GRID.cols - 1) * cs / 2,
    z: row * cs - (DISTRICT_GRID.rows - 1) * cs / 2,
  };
}

/**
 * Seeded RNG for a district cell.
 */
export function districtRng(col, row, forkFrom) {
  const cs = DISTRICT_GRID.cellSize;
  const seed = (col * 73856093) ^ (row * 19349663) ^ ((col + row) * 83492791);
  return forkFrom.fork().seed(seed >>> 0);
}
