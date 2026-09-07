/**
 * AI — infected/zombie enemy faction.
 *
 * Adds `buildInfected` geometry variant and `InfectedAgent` with horde
 * grouping, frenzy mode, infection spread, and distinct death animations.
 *
 * NEW EVENTS emitted:
 *   infection:caught   { actor }          — player just became infected
 *   infection:cured    { actor }          — player used an antiviral
 *   actor:infected_death { actor, mode }  — infected died (collapse|crawl|explode)
 */

import * as THREE from 'three';
import { RIG } from './rig.js';
import { CharacterBuilder, Noise, appendMesh, computeNormals, emptyMesh, loft, tube, ellipsoid, displace, boxRound, warp } from './geo.js';
import * as P from './parts.js';
import { buildWeapon } from './weapon.js';
import { CLOTH_TILE } from './textures.js';

/* ------------------------------------------------------------------ */
/*  Material catalogue (shared with soldier.js)                        */
/* ------------------------------------------------------------------ */

const MATERIALS = {
  cloth:   { tile: CLOTH_TILE },
  plate:   { tile: 0.42 },
  gear:    { tile: 0.26 },
  boot:    { tile: 0.26 },
  skin:    { tile: 0.20 },
  polymer: { tile: 0.15 },
  steel:   { tile: 0.18 },
  rubber:  { tile: 0.11 },
  glass:   { tile: 1.0 },
  /** Exposed muscle — wet, dark red */
  muscle:  { tile: 0.18 },
  /** Exposed bone — dry, yellowish white */
  bone:    { tile: 0.20 },
};

const ROUGH = { cloth: 0.85 / 0.905, plate: 0.55 / 0.62, boot: 0.7 / 0.79 };
const DETAIL_TILE = 0.05;

const GEAR = {
  webbing: [0.70, 0.70, 0.70],
  sling:   [0.70, 0.70, 0.70],
  pouch:   [0.84, 0.84, 0.84],
  pouchAlt:[0.76, 0.76, 0.76],
  dump:    [0.72, 0.72, 0.72],
  belt:    [0.62, 0.61, 0.57],
  pad:     [0.55, 0.55, 0.55],
  strap:   [0.56, 0.56, 0.56],
  wrap:    [0.56, 0.54, 0.50],
  glove:   [0.38, 0.372, 0.363],
  boot:    [0.22, 0.209, 0.198],
  lace:    [0.21, 0.204, 0.198],
  mask:    [0.62, 0.63, 0.66],
};

/* ------------------------------------------------------------------ */
/*  Infected variant definition                                        */
/* ------------------------------------------------------------------ */

export const INFECTED_VARIANT = {
  camo: 'arid',
  clothTint: [0.55, 0.48, 0.38],
  gearTint: [0.50, 0.42, 0.30],
  plateTint: [0.45, 0.38, 0.28],
  skinTint: [0.42, 0.58, 0.18],
  muscleTint: [0.55, 0.10, 0.06],
  boneTint: [0.72, 0.68, 0.52],
  eyeEmissive: [0.20, 1.0, 0.08],
  helmet: false,
  headWrap: false,
  goggles: false,
  shades: false,
  faceWrap: false,
  beard: false,
  kneePads: false,
  fullCarrier: false,
  weapon: 'ak',
  bulk: 1.08,
  scale: 0.97,
  hunch: 0.18,
  asym: 1.06,
  growthProb: 0.7,
};

/* ------------------------------------------------------------------ */
/*  Bone bind-position helper                                          */
/* ------------------------------------------------------------------ */

const bp = (name) => {
  const v = RIG.bindPos[RIG.index(name)];
  return [v.x, v.y, v.z];
};

/* ------------------------------------------------------------------ */
/*  Helper: displaced growth sphere                                   */
/* ------------------------------------------------------------------ */

function addGrowth(B, nz, pos, radius, bones, noiseAmp = 0.018) {
  const nVertices = 10;
  const mesh = ellipsoid(radius * 1.0, radius * 0.85, radius * 0.75, nVertices, nVertices);
  displace(mesh, (v) => {
    const n = nz.n3(v.x * 40 + pos[0] * 7.3, v.y * 40 + pos[1] * 7.3, v.z * 40 + pos[2] * 7.3);
    return n * noiseAmp;
  });
  B.add(mesh, {
    material: 'muscle',
    bone: bones[0],
    bones,
    bias: [1, 0.6],
    colour: [0.7, 0.12, 0.06],
    grime: 0.9,
    dirt: 0.8,
    dust: 0.3,
    wear: 0.1,
    name: `growth_${pos[0].toFixed(2)}_${pos[1].toFixed(2)}`,
  });
}

/* ------------------------------------------------------------------ */
/*  buildInfected — one infected skinned geometry                      */
/* ------------------------------------------------------------------ */

export function buildInfected(name, { rng, materials }) {
  const V = INFECTED_VARIANT;
  const nz = new Noise(rng.fork());
  const B = new CharacterBuilder(RIG, { noise: nz, materials: MATERIALS });

  const shR = bp('UpperArmR'), elR = bp('ForearmR'), wrR = bp('HandR');
  const shL = bp('UpperArmL'), elL = bp('ForearmL'), wrL = bp('HandL');
  const hipR = bp('UpLegR'), knR = bp('LegR'), anR = bp('FootR');
  const hipL = bp('UpLegL'), knL = bp('LegL'), anL = bp('FootL');
  const head = bp('Head');
  const spine1 = bp('Spine1');
  const spine2 = bp('Spine2');

  /* ---- hunched spine: add anterior offset to upper-torso proxies ---- */
  const hunch = V.hunch;

  /* ---------------- occlusion proxies (infected: hunched) ----------- */
  B.occlude([0, 0.95 - hunch * 0.3, -0.01], [0, 1.42 - hunch * 0.5, 0.0], 0.155, 1.0);
  B.occlude([0, 1.17, 0.130], [0, 1.40, 0.138], 0.11, 1.0);
  B.occlude([0, 1.20, -0.105], [0, 1.40, -0.112], 0.105, 0.8);
  B.occlude([-0.17, 1.16, 0.02], [-0.17, 1.30, 0.02], 0.055, 0.7);
  B.occlude([0.17, 1.16, 0.02], [0.17, 1.30, 0.02], 0.055, 0.7);
  B.occlude([0, 1.60 - hunch * 0.5, 0.0], [0, 1.80 - hunch * 0.6, -0.01], 0.122, 1.0);
  B.occlude(shR, elR, 0.058, 0.7);
  B.occlude(shL, elL, 0.058, 0.7);
  B.occlude(hipR, knR, 0.085, 0.8);
  B.occlude(hipL, knL, 0.085, 0.8);
  B.occlude([0, 0.90, -0.01], [0, 1.05, -0.01], 0.15, 0.8);
  B.occlude(wrR, [wrR[0], wrR[1] + 0.05, wrR[2]], 0.044, 0.9);
  B.occlude(wrL, [wrL[0], wrL[1] + 0.05, wrL[2]], 0.044, 0.9);

  /* ---------------- uniform (ragged, torn) ------------------------- */
  B.add(P.jacketTorso(nz, { bulk: V.bulk, ragged: true }), {
    material: 'cloth',
    bones: ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'ClavicleR', 'ClavicleL', 'UpperArmR', 'UpperArmL'],
    bias: [1, 1, 1, 1, 0.8, 0.55, 0.55, 0.30, 0.30],
    colour: [1, 1, 1],
    grime: 0.95,
    dirt: 0.85,
    dust: 0.55,
    wear: 0.45,
    name: 'jacket',
  });

  B.add(P.pelvis(nz, { ragged: true }), {
    material: 'cloth',
    bones: ['Hips', 'Spine', 'UpLegR', 'UpLegL'],
    bias: [1, 0.7, 0.5, 0.5],
    colour: [0.92, 0.88, 0.78],
    grime: 0.95,
    dirt: 0.9,
    dust: 0.35,
    wear: 0.55,
    name: 'pelvis',
  });

  B.add(P.collar(nz, { ragged: true }), {
    material: 'cloth',
    bones: ['Neck', 'Spine2', 'Head'],
    bias: [1, 0.8, 0.3],
    colour: [0.85, 0.80, 0.70],
    grime: 1.0,
    dust: 0.4,
    wear: 0.6,
    name: 'collar',
  });

  /* ---------------- sleeves (torn, asymmetric) ---------------------- */
  const asym = V.asym;
  for (const [sh, el, wr, side, suffix, bulkScale] of [
    [shR, elR, wrR, -1, 'R', 1.0],
    [shL, elL, wrL,  1, 'L', asym],
  ]) {
    B.add(P.shoulderCap(nz, sh, side * bulkScale), {
      material: 'cloth',
      bones: [`Clavicle${suffix}`, `UpperArm${suffix}`, 'Spine2'],
      bias: [0.8, 1, 0.4],
      colour: [1, 1, 1],
      grime: 0.85,
      dust: 0.6,
      wear: 0.5,
      name: `shoulder${suffix}`,
    });

    const tubeRadii = [0.050, 0.062, 0.056, 0.048, 0.042, 0.038];
    B.add(
      P.limbTube(nz, [sh[0] + side * 0.012, sh[1] + 0.055, sh[2]], el, wr, tubeRadii, {
        rings: 18,
        seg: 14,
        fold: 0.002,
        crease: 0.005,
        bend: [0, 0, -1],
        ragged: true,
        tearProb: 0.5,
      }),
      {
        material: 'cloth',
        bones: [`Clavicle${suffix}`, `UpperArm${suffix}`, `Forearm${suffix}`, `Hand${suffix}`, 'Spine2'],
        bias: [0.5, 1, 1, 0.7, 0.25],
        colour: [1, 1, 1],
        grime: 0.9,
        dirt: 0.5,
        dust: 0.4,
        wear: 0.6,
        name: `sleeve${suffix}`,
      }
    );
  }

  /* ---------------- trousers (ragged, asymmetric leg bulk) ---------- */
  for (const [hip, kn, an, suffix] of [
    [hipR, knR, anR, 'R'],
    [hipL, knL, anL, 'L'],
  ]) {
    const legBulk = suffix === 'R' ? 1.0 : 0.9;
    B.add(
      P.limbTube(nz, hip, kn, [an[0], an[1] + 0.085, an[2] + 0.008],
        [0.090 * legBulk, 0.085, 0.076, 0.068, 0.062, 0.060, 0.064], {
        rings: 22,
        seg: 15,
        fold: 0.002,
        crease: 0.005,
        bend: [0, 0, -1],
        ragged: true,
      }),
      {
        material: 'cloth',
        bones: ['Hips', `UpLeg${suffix}`, `Leg${suffix}`, `Foot${suffix}`],
        bias: [0.6, 1, 1, 0.5],
        colour: [0.94, 0.90, 0.80],
        grime: 0.9,
        dirt: 0.9,
        dust: 0.3,
        wear: 0.65,
        name: `leg${suffix}`,
      }
    );
    B.add(P.boot(nz, an, suffix === 'R' ? -1 : 1), {
      material: 'boot',
      bones: [`Leg${suffix}`, `Foot${suffix}`, `Toe${suffix}`],
      bias: [0.55, 1, 0.6],
      colour: GEAR.boot,
      grime: 0.95,
      dirt: 1.0,
      dust: 0.6,
      wear: 0.8,
      name: `boot${suffix}`,
    });
    B.add(P.bootSole(an), {
      material: 'rubber',
      bones: [`Foot${suffix}`, `Toe${suffix}`],
      bias: [1, 0.8],
      grime: 0.95,
      dirt: 1.0,
      name: `sole${suffix}`,
    });
  }

  /* ---------------- minimal gear (torn) ----------------------------- */
  B.add(P.plateCarrier(nz, { ...V, fullCarrier: false, ragged: true }), {
    material: 'gear',
    bones: ['Spine', 'Spine1', 'Spine2', 'ClavicleR', 'ClavicleL'],
    bias: [0.7, 1, 1, 0.45, 0.45],
    colour: [0.50, 0.42, 0.28],
    grime: 0.95,
    dirt: 0.7,
    dust: 0.45,
    wear: 0.7,
    name: 'carrier',
  });

  B.add(P.carrierWebbing(), {
    material: 'gear',
    bones: ['Spine1', 'Spine2'],
    bias: [1, 1],
    colour: GEAR.webbing,
    grime: 1.0,
    dust: 0.4,
    wear: 0.5,
    name: 'webbing',
  });

  /* ---------------- EXPOSED MUSCLE / TORSO -------------------------- */
  const torsoMid = [spine1[0], spine1[1] - hunch * 0.4, spine1[2]];
  const torsoMuscle = ellipsoid(0.155, 0.22, 0.10, 12, 10);
  displace(torsoMuscle, (v) => {
    const n = nz.n3(v.x * 18 + 1.7, v.y * 18 + 3.1, v.z * 18 + 0.5);
    return n * 0.022;
  });
  B.add(torsoMuscle, {
    material: 'muscle',
    bone: 'Spine1',
    bones: ['Spine', 'Spine1', 'Spine2'],
    bias: [0.5, 1, 0.5],
    colour: V.muscleTint,
    grime: 0.7,
    dirt: 0.5,
    dust: 0.1,
    wear: 0.0,
    name: 'torsoMuscle',
  });

  /* ribcage hints: vertical rib-like bulges */
  for (let i = 0; i < 5; i++) {
    const ry = 1.08 + i * 0.06 - hunch * 0.2;
    const rib = tube(
      [spine1[0] - 0.04, ry - 0.02, spine1[2] - 0.06],
      [spine1[0] + 0.04, ry, spine1[2] - 0.06],
      [0.012, 0.008], { rings: 4, seg: 6 }
    );
    B.add(rib, {
      material: 'bone',
      bone: 'Spine1',
      colour: V.boneTint,
      grime: 0.5,
      dirt: 0.6,
      wear: 0.1,
      name: `rib_${i}`,
    });
  }

  /* ---------------- EXPOSED BONE ARMS (forearms) -------------------- */
  for (const [el, wr, suffix] of [
    [elR, wrR, 'R'],
    [elL, wrL, 'L'],
  ]) {
    const forearmBone = tube(
      [el[0], el[1] - 0.02, el[2]],
      [wr[0], wr[1] + 0.02, wr[2]],
      [0.028, 0.018, 0.012], { rings: 8, seg: 8 }
    );
    B.add(forearmBone, {
      material: 'bone',
      bone: `Forearm${suffix}`,
      bones: [`Forearm${suffix}`, `Hand${suffix}`],
      bias: [1, 0.5],
      colour: V.boneTint,
      grime: 0.4,
      dirt: 0.7,
      wear: 0.05,
      name: `forearmBone${suffix}`,
    });
  }

  /* ---------------- SKULL (exposed, with glowing eyes) -------------- */
  const skullBase = ellipsoid(0.075, 0.09, 0.08, 10, 8);
  displace(skullBase, (v) => {
    const n = nz.n3(v.x * 25 + 2.1, v.y * 25 + 1.2, v.z * 25 + 0.8);
    return n * 0.012;
  });
  B.add(skullBase, {
    material: 'bone',
    bone: 'Head',
    colour: V.boneTint,
    grime: 0.3,
    dirt: 0.5,
    wear: 0.0,
    name: 'skull',
  });

  /* jaw */
  const jaw = boxRound(0.06, 0.025, 0.05, 0.008, 2, 2, 2);
  B.add(jaw, {
    material: 'bone',
    bone: 'Head',
    colour: V.boneTint,
    grime: 0.4,
    dirt: 0.7,
    name: 'jaw',
  });

  /* GLOWING EYES */
  for (const side of [-1, 1]) {
    const eyeX = head[0] + side * 0.028;
    const eyeY = head[1] + 0.025;
    const eyeZ = head[2] - 0.055;
    const eyeGeo = ellipsoid(0.012, 0.008, 0.006, 6, 6);
    B.add(eyeGeo, {
      material: 'glass',
      bone: 'Head',
      colour: V.eyeEmissive,
      grime: 0.05,
      wear: 0.0,
      name: `infectedEye${side > 0 ? 'R' : 'L'}`,
    });
  }

  /* viral growths on head */
  const growthPositions = [
    [0.04, 0.06, -0.03],
    [-0.05, 0.04, -0.04],
    [0.06, -0.02, -0.02],
    [-0.03, 0.07, 0.01],
  ];
  for (const gp of growthPositions) {
    if (rng.float() < V.growthProb) {
      const gPos = [head[0] + gp[0], head[1] + gp[1], head[2] + gp[2]];
      addGrowth(B, nz, gPos, 0.012 + rng.range(0, 0.01), ['Head'], 0.025);
    }
  }

  /* neck: exposed spine column */
  const neckBone = tube(
    [head[0], head[1] - 0.10, head[2] - 0.01],
    [head[0], head[1] - 0.04, head[2] + 0.01],
    [0.010, 0.006], { rings: 5, seg: 6 }
  );
  B.add(neckBone, {
    material: 'bone',
    bone: 'Head',
    bones: ['Head', 'Spine2'],
    bias: [1, 0.5],
    colour: V.boneTint,
    grime: 0.4,
    dirt: 0.5,
    wear: 0.0,
    name: 'neckBone',
  });

  /* ---------------- HANDS (exposed bone, clawed) -------------------- */
  for (const [wr, suffix] of [
    [wrR, 'R'],
    [wrL, 'L'],
  ]) {
    const handBone = boxRound(0.022, 0.035, 0.015, 0.005, 2, 2, 2);
    B.add(handBone, {
      material: 'bone',
      bone: `Hand${suffix}`,
      colour: V.boneTint,
      grime: 0.3,
      dirt: 0.6,
      name: `handBone${suffix}`,
    });
    /* claw talons */
    for (let c = 0; c < 3; c++) {
      const claw = tube(
        [wr[0] + (c - 1) * 0.006, wr[1] - 0.02, wr[2] - 0.02],
        [wr[0] + (c - 1) * 0.005, wr[1] - 0.05, wr[2] - 0.04],
        [0.002, 0.001], { rings: 3, seg: 4 }
      );
      B.add(claw, {
        material: 'bone',
        bone: `Hand${suffix}`,
        colour: V.boneTint,
        grime: 0.3,
        name: `claw_${suffix}_${c}`,
      });
    }
  }

  /* ---------------- viral growths on shoulders ---------------------- */
  for (const [sh, side] of [
    [shR, -1],
    [shL, 1],
  ]) {
    if (rng.float() < V.growthProb * 0.7) {
      const gp = [sh[0] + side * 0.04, sh[1] + 0.04, sh[2] - 0.03];
      addGrowth(B, nz, gp, 0.018 + rng.range(0, 0.012),
        [`Clavicle${side === -1 ? 'R' : 'L'}`, `UpperArm${side === -1 ? 'R' : 'L'}`], 0.03);
    }
  }

  /* ---------------- viral growths on spine -------------------------- */
  for (let i = 0; i < 3; i++) {
    if (rng.float() < V.growthProb * 0.5) {
      const gy = 1.15 + i * 0.12 - hunch * 0.3;
      const gp = [spine1[0] + rng.signed() * 0.04, gy, spine1[2] - 0.08];
      addGrowth(B, nz, gp, 0.01 + rng.range(0, 0.008),
        ['Spine', 'Spine1'], 0.02);
    }
  }

  /* ---------------- weapon (crude, bare hands — AK variant) --------- */
  const W = buildWeapon(nz, V.weapon, rng);
  B.add(W.steel, { material: 'steel', bone: 'HandR', grime: 0.7, wear: 0.5, name: 'wpnSteel' });
  B.add(W.polymer, { material: 'polymer', bone: 'HandR', grime: 0.7, wear: 0.5, name: 'wpnPoly' });
  B.add(W.rubber, { material: 'rubber', bone: 'HandR', grime: 0.8, name: 'wpnRubber' });

  const built = B.build();

  /* Infected adds muscle + bone to the slot list (after glass) */
  const EXTRA_SLOTS = ['muscle', 'bone'];
  const allMaterialNames = [...built.materialNames, ...EXTRA_SLOTS.filter(s => !built.materialNames.includes(s))];

  const mats = resolveInfectedMaterials(name, allMaterialNames, materials, V);

  return {
    geometry: built.geometry,
    materials: mats,
    parts: built.parts,
    weapon: W,
    stats: { vertices: built.vertices, triangles: built.triangles },
    variant: V,
  };
}

/* ------------------------------------------------------------------ */
/*  Material resolver for infected (extends soldier slots)            */
/* ------------------------------------------------------------------ */

export const INFECTED_MATERIAL_SLOTS = Object.freeze([
  'cloth', 'gear', 'boot', 'rubber', 'plate', 'polymer', 'muscle', 'bone', 'skin', 'glass', 'steel',
]);

export function resolveInfectedMaterials(name, slots, materials, V = INFECTED_VARIANT) {
  const detail = (set, matName, normal, rough) => ({
    set, scale: MATERIALS[matName].tile / DETAIL_TILE, normal, rough,
  });
  return slots.map((n) => {
    switch (n) {
      case 'cloth':
        return materials.get('camo_arid', {
          key: `${name}_cloth`,
          tint: V.clothTint,
          rough: ROUGH.cloth,
          metal: 1,
          normalScale: 1.15,
          detail: detail('cloth', 'cloth', 0.45, 0.16),
        });
      case 'gear':
        return materials.get('nylon', {
          key: `${name}_gear`,
          tint: V.gearTint,
          normalScale: 1.1,
          detail: detail('nylon', 'gear', 0.5, 0.14),
        });
      case 'boot':
        return materials.get('nylon', {
          key: `${name}_boot`,
          tint: V.gearTint,
          rough: ROUGH.boot,
          normalScale: 1.1,
          detail: detail('nylon', 'boot', 0.5, 0.10),
        });
      case 'plate':
        return materials.get('plate', {
          key: `${name}_plate`,
          tint: V.plateTint,
          rough: ROUGH.plate,
          normalScale: 1.0,
          detail: detail('nylon', 'plate', 0.45, 0.10),
        });
      case 'muscle':
        return materials.get('skin', {
          key: `${name}_muscle`,
          tint: V.muscleTint,
          normalScale: 1.4,
          ao: 0.5,
          roughness: 0.72,
          metal: 0.0,
        });
      case 'bone':
        return materials.get('polymer', {
          key: `${name}_bone`,
          tint: V.boneTint,
          normalScale: 0.6,
          roughness: 0.55,
          metal: 0.02,
        });
      case 'skin':
        return materials.get('skin', {
          key: `${name}_skin`,
          tint: V.skinTint,
          normalScale: 0.8,
          ao: 0.6,
        });
      case 'polymer':
        return materials.get('polymer', { key: `${name}_poly`, normalScale: 1.0 });
      case 'steel':
        return materials.get('steel', { key: `${name}_steel`, normalScale: 1.0 });
      case 'rubber':
        return materials.get('rubber', { key: `${name}_rubber`, normalScale: 1.2 });
      case 'glass':
        return materials.get('glass', { key: `${name}_glass` });
      default:
        return materials.get('polymer', { key: `${name}_${n}` });
    }
  });
}

/* ================================================================== */
/*  InfectedAgent — infected/zombie AI behaviour                       */
/* ================================================================== */

import { Agent, STATE } from './agent.js';

export class InfectedAgent extends Agent {
  constructor(ai, opts = {}) {
    super(ai, { ...opts, variant: opts.variant ?? 'infected' });
    this.infected = true;
    this.team = opts.team ?? 2;

    this.frenzyRange = 5.5;
    this.infectionRange = 2.2;
    this.frenzyDamageMult = 2.2;
    this.hordeGroupRadius = 7;
    this._infectedDeathMode = 'collapse';
    this._crawling = false;
    this._lastInfectionProximityTick = 0;
  }

  update(dt, ctx) {
    if (!this.alive) return;
    this._updateProximityInfection(dt, ctx);
    this._updateHordeAttraction(dt);
    super.update(dt, ctx);
    this._applyFrenzySpeed();
  }

  _updateHordeAttraction(dt) {
    const infected = this.ai.agents.filter(a => a !== this && a.alive && a.infected);
    if (infected.length < 2) return;
    const cx = infected.reduce((s, a) => s + a.position.x, 0) / infected.length;
    const cz = infected.reduce((s, a) => s + a.position.z, 0) / infected.length;
    const groupCenter = new THREE.Vector3(cx, this.position.y, cz);
    if (this.position.distanceTo(groupCenter) > this.hordeGroupRadius) {
      if (!this.hasMoveTarget || this.stateTime > 6) {
        this._goTo(groupCenter);
      }
    }
  }

  _applyFrenzySpeed() {
    if (!this.hasTarget) return;
    const dist = this.position.distanceTo(this.lastKnown);
    if (dist < this.frenzyRange) {
      this.desiredSpeed = Math.max(this.desiredSpeed, 7.0);
      this.weaponDamage = (this.def?.variant?.weaponDamage ?? 17) * this.frenzyDamageMult;
    } else {
      this.weaponDamage = this.def?.variant?.weaponDamage ?? 17;
    }
  }

  _updateProximityInfection(dt, ctx) {
    if (this._lastInfectionProximityTick > 0) {
      this._lastInfectionProximityTick -= dt;
      return;
    }
    const player = ctx.peek('player');
    if (!player || player.health?.dead) return;
    if (player.infected) return;
    const pPos = player.eyePosition ?? player.position;
    const d = this.eye.distanceTo(pPos);
    if (d < this.infectionRange) {
      this._lastInfectionProximityTick = 1.0;
      ctx.events.emit('damage:dealt', {
        target: player,
        amount: 0,
        from: this.position,
        source: this,
        infected: true,
        headshot: false,
        killed: false,
        point: pPos,
      });
    }
  }

  _think(dt) {
    super._think(dt);
    if (!this.alive) return;
    const distToPlayer = this.position.distanceTo(
      this.ai.playerPosition(new THREE.Vector3())
    );
    if (distToPlayer < this.frenzyRange && this.hasTarget) {
      this.wantFire = true;
      this.peekTimer = 0;
    }
  }

  _combat(dt) {
    const target = this.hasTarget ? this.lastKnown : this.lastKnownAge < 5 ? this.lastKnown : null;
    if (!target) {
      this._setState(STATE.ALERT);
      return;
    }
    const dist = this.position.distanceTo(target);

    if (dist > 2.5) {
      this._goTo(target);
      this.desiredSpeed = Math.max(this.desiredSpeed, 4.5);
    } else {
      this.hasMoveTarget = false;
      this.desiredSpeed = 0;
    }

    this.wantFire = this.hasTarget && dist < this.weaponRange;
    this.peekTimer = 0;
    this.peeking = this.targetVisible !== false;
    this.aimWeight = this.peeking ? 1 : 0.7;
  }

  applyDamage(amount, part, point, dir) {
    if (!this.alive) return;
    this.health -= amount;
    this.alertness = 1;
    this.suppression = Math.min(1.6, this.suppression + 0.35);
    if (dir) {
      this._v.copy(point).addScaledVector(dir, -14);
      if (this.lastKnownAge > 0.5) {
        this.lastKnown.copy(this._v);
        this.lastKnownAge = 0.4;
      }
    }
    if (this.state === STATE.IDLE || this.state === STATE.PATROL) this._setState(STATE.ALERT);

    if (this.health <= 0) {
      const headshot = part === 'head';
      const legHit = part === 'leg';
      this._infectedDeathMode = headshot ? 'explode' : legHit ? 'crawl' : 'collapse';
      if (legHit) this._crawling = true;
      this.die(point, dir, amount);
      return;
    }
    const side = dir ? Math.sign(dir.x * Math.cos(this.yaw) - dir.z * Math.sin(this.yaw)) || 1 : 1;
    const region =
      part === 'head' ? 'head'
        : part === 'arm' ? (this._sideOf(point) < 0 ? 'armR' : 'armL')
          : part === 'leg' ? (this._sideOf(point) < 0 ? 'legR' : 'legL')
            : 'torso';
    this.animator.hit(region, side, Math.min(1.4, 0.5 + amount / 45));
  }

  die(point, dir, amount = 30) {
    if (!this.alive) return;
    this.alive = false;
    this.state = STATE.DEAD;
    this.wantFire = false;
    this.animator.enabled = false;
    this.ai.cover?.release(this.id);
    if (this.controller) this.phys.removeCharacter(this.controller);
    this.controller = null;
    for (const c of this.colliders) this.phys?.removeCollider(c);
    this.colliders.length = 0;

    this.group.updateMatrixWorld(true);
    const impulse = this._v2
      .copy(dir ?? this._v.set(0, 0, 1))
      .normalize()
      .multiplyScalar(Math.min(5.5, 1.5 + amount * 0.02));
    const hitPoint = point ?? this._v.copy(this.position).setY(this.position.y + 1.2);

    const rd = this._makeRagdoll(impulse, hitPoint);
    if (rd) {
      this.__ragdoll = rd;
      this.ragdoll = rd;
    }
    this.ctx.events.emit('actor:death', { actor: this, point: hitPoint, impulse, headshot: false });
    this.ctx.events.emit('actor:infected_death', { actor: this, mode: this._infectedDeathMode });
    this.deadTime = 0;
  }

  _throwGrenade(target) { /* infected do not use grenades */ }
}

