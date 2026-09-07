const DEG = Math.PI / 180;

export const MELEE_TYPES = {
  blade: {
    id: 'blade',
    label: 'Blade',
    canDismember: true,
    severMultiplier: 1.0,
    stunChance: 0.05,
    knockback: 0.3,
    infectionChance: 0,
    slashAngle: Math.PI * 0.7,
    stabReach: 1.4,
  },
  blunt: {
    id: 'blunt',
    label: 'Blunt',
    canDismember: false,
    severMultiplier: 0,
    stunChance: 0.45,
    knockback: 1.2,
    infectionChance: 0,
    slashAngle: Math.PI * 0.5,
    stabReach: 1.0,
  },
  infected_claw: {
    id: 'infected_claw',
    label: 'Infected Claw',
    canDismember: true,
    severMultiplier: 0.7,
    stunChance: 0.15,
    knockback: 0.5,
    infectionChance: 0.8,
    slashAngle: Math.PI * 0.65,
    stabReach: 1.1,
  },
};

export const ATTACK_DEFS = {
  light: {
    id: 'light',
    label: 'Light Attack',
    windup: 0.08,
    active: 0.1,
    recovery: 0.22,
    comboWindow: 0.35,
    damage: 1.0,
    staminaCost: 8,
    parryWindow: 0.12,
    perfectParryWindow: 0.04,
    lunge: 0.4,
  },
  heavy: {
    id: 'heavy',
    label: 'Heavy Attack',
    windup: 0.22,
    active: 0.18,
    recovery: 0.42,
    comboWindow: 0.28,
    damage: 2.2,
    staminaCost: 18,
    parryWindow: 0.08,
    perfectParryWindow: 0.025,
    lunge: 0.9,
    knockbackScale: 1.8,
    stunChanceScale: 2.5,
  },
  charged: {
    id: 'charged',
    label: 'Charged Attack',
    chargeMin: 0.4,
    chargeMax: 1.8,
    active: 0.22,
    recovery: 0.55,
    comboWindow: 0.4,
    damageMin: 1.5,
    damageMax: 4.5,
    staminaCost: 25,
    parryWindow: 0.06,
    perfectParryWindow: 0.02,
    lunge: 1.4,
    knockbackScale: 3.0,
    stunChanceScale: 4.0,
    severScale: 1.5,
  },
  finisher: {
    id: 'finisher',
    label: 'Finisher',
    windup: 0.3,
    active: 0.25,
    recovery: 0.5,
    damage: 3.5,
    staminaCost: 30,
    parryWindow: 0.05,
    perfectParryWindow: 0.015,
    lunge: 1.0,
    knockbackScale: 2.5,
    stunChanceScale: 3.0,
    severScale: 2.0,
  },
};

export const LIMB_DEFS = {
  head: { name: 'head', health: 40, severThreshold: 60, parent: null, boneIndex: 4 },
  torso: { name: 'torso', health: 120, severThreshold: 200, parent: null, boneIndex: 2 },
  upperArmL: { name: 'upperArmL', health: 30, severThreshold: 45, parent: 'torso', boneIndex: 5 },
  upperArmR: { name: 'upperArmR', health: 30, severThreshold: 45, parent: 'torso', boneIndex: 8 },
  forearmL: { name: 'forearmL', health: 25, severThreshold: 35, parent: 'upperArmL', boneIndex: 6 },
  forearmR: { name: 'forearmR', health: 25, severThreshold: 35, parent: 'upperArmR', boneIndex: 9 },
  handL: { name: 'handL', health: 12, severThreshold: 18, parent: 'forearmL', boneIndex: 7 },
  handR: { name: 'handR', health: 12, severThreshold: 18, parent: 'forearmR', boneIndex: 10 },
  thighL: { name: 'thighL', health: 50, severThreshold: 70, parent: 'torso', boneIndex: 11 },
  thighR: { name: 'thighR', health: 50, severThreshold: 70, parent: 'torso', boneIndex: 13 },
  shinL: { name: 'shinL', health: 40, severThreshold: 55, parent: 'thighL', boneIndex: 12 },
  shinR: { name: 'shinR', health: 40, severThreshold: 55, parent: 'thighR', boneIndex: 14 },
};

export const PARRY = {
  blockDamageReduction: 0.7,
  perfectParryStunDuration: 0.5,
  perfectParryCounterWindow: 0.35,
  perfectParryBonusDamage: 1.5,
  parryCooldown: 0.15,
  perfectParryFlashDuration: 0.2,
  blockStaminaDrain: 5,
  perfectParryStaminaRefund: 8,
};

export const COMBO = {
  window: 0.6,
  maxCombo: 8,
  finisherThreshold: 3,
  finisherStaggerRequired: true,
  decayPerKill: 0.3,
  displayDuration: 1.2,
};

export const DEATH_STATE = {
  INTACT: 'intact',
  ONE_ARM: 'one_arm',
  BOTH_ARMS: 'both_arms',
  ONE_LEG: 'one_leg',
  BOTH_LEGS: 'both_legs',
  HEADSHOT: 'headshot',
  DISMEMBERED: 'dismembered',
};

export const LIMB_GROUP = {
  ARMS: ['upperArmL', 'forearmL', 'handL', 'upperArmR', 'forearmR', 'handR'],
  LEGS: ['thighL', 'shinL', 'thighR', 'shinR'],
  HEAD: ['head'],
};

export const MELEE_HUD = {
  comboFadeTime: 1.5,
  stunBarHeight: 4,
  stunBarWidth: 80,
  parryFlashDuration: 0.2,
};

export function getLimbGroup(limbName) {
  if (LIMB_GROUP.HEAD.includes(limbName)) return 'head';
  if (LIMB_GROUP.ARMS.includes(limbName)) return 'arm';
  if (LIMB_GROUP.LEGS.includes(limbName)) return 'leg';
  return 'torso';
}

export function getSeverableLimbs(meleeType) {
  const def = MELEE_TYPES[meleeType] ?? MELEE_TYPES.blade;
  if (!def.canDismember) return [];
  const limbs = [];
  if (def.severMultiplier >= 0.7) limbs.push('head');
  if (def.severMultiplier >= 0.5) limbs.push('upperArmL', 'upperArmR');
  if (def.severMultiplier >= 0.4) limbs.push('forearmL', 'forearmR', 'thighL', 'thighR');
  if (def.severMultiplier >= 0.3) limbs.push('shinL', 'shinR', 'handL', 'handR');
  return limbs;
}

export function limbSeverChance(limbName, meleeType, attackType, damage) {
  const limbDef = LIMB_DEFS[limbName];
  const meleeDef = MELEE_TYPES[meleeType] ?? MELEE_TYPES.blade;
  const attackDef = ATTACK_DEFS[attackType] ?? ATTACK_DEFS.light;
  if (!limbDef || !meleeDef.canDismember) return 0;
  const excess = damage - limbDef.severThreshold;
  if (excess <= 0) return 0;
  const baseChance = Math.min(1, excess / (limbDef.severThreshold * 1.5));
  const meleeScale = meleeDef.severMultiplier;
  const attackScale = attackDef.severScale ?? 1.0;
  const isBlade = meleeType === 'blade' ? 1.5 : 1.0;
  return Math.min(1, baseChance * meleeScale * attackScale * isBlade);
}

export function isFinisherAvailable(comboCount, enemyStunned) {
  return (
    comboCount >= COMBO.finisherThreshold &&
    (!COMBO.finisherStaggerRequired || enemyStunned)
  );
}
