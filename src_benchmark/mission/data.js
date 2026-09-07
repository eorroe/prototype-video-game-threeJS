/**
 * Mission data definitions: story beats, objectives, rewards, NPC dialogue.
 *
 * Types
 * -----
 *   main      story-critical, scripted sequences
 *   side      optional NPC requests, zone control
 *   dynamic   random encounters, time-limited events
 *
 * Objective kinds
 * ---------------
 *   GoTo      reach a world position within radius
 *   Kill      eliminate N targets of a given faction/name
 *   Escort    reach a destination with an NPC alive
 *   Collect   gather N of a given item
 *   Hack      hold position near a terminal for duration
 *   Survive   hold position against N waves for duration
 */

import * as THREE from 'three';

export const MISSION_TYPES = Object.freeze({
  MAIN: 'main',
  SIDE: 'side',
  DYNAMIC: 'dynamic',
});

export const OBJECTIVE_TYPES = Object.freeze({
  GOTO: 'GoTo',
  KILL: 'Kill',
  ESCORT: 'Escort',
  COLLECT: 'Collect',
  HACK: 'Hack',
  SURVIVE: 'Survive',
});

export const MISSION_STATUS = Object.freeze({
  LOCKED: 'locked',
  AVAILABLE: 'available',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  FAILED: 'failed',
});

export function createObjective({ type, label, target, count = 1, position, radius = 3, duration = 0, waveCount = 1, itemId = null, npcId = null }) {
  return {
    id: `${type}_${label}_${Math.random().toString(36).slice(2, 7)}`,
    type,
    label,
    target,
    count,
    position: position ? new THREE.Vector3(position.x, position.y, position.z) : null,
    radius,
    duration,
    waveCount,
    itemId,
    npcId,
    progress: 0,
    completed: false,
  };
}

export const STORY_MISSIONS = Object.freeze({
  ESCAPE_INFECTED_ZONE: {
    id: 'escape_infected_zone',
    type: MISSION_TYPES.MAIN,
    title: 'BREACH PROTOCOL',
    description: 'The zone has been overrun. Get to the extraction point. Any route you take will be contested.',
    giver: 'commander_hale',
    dialogue: [
      'Listen up. The quarantine failed. This whole sector is compromised.',
      'We have a bird en route to the north gate. You have ninety seconds.',
      'Stay low, keep moving. The infected are everywhere.',
    ],
    prerequisites: [],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_CHECKPOINT_A', position: { x: 25, y: 0, z: -30 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.SURVIVE, label: 'HOLD_POSITION', position: { x: 25, y: 0, z: -30 }, duration: 30, waveCount: 3 }),
      createObjective({ type: OBJECTIVE_TYPES.HACK, label: 'OPEN_GATE', position: { x: 40, y: 0, z: -55 }, duration: 8 }),
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_EXTRACTION', position: { x: 55, y: 0, z: -70 }, count: 1 }),
    ],
    rewards: { xp: 500, money: 200, items: ['medkit'], unlocks: ['side_mission_supply_run'] },
    failConditions: [{ type: 'death' }, { type: 'timeout', limit: 150 }],
    timeLimit: 150,
    nextMissions: ['find_survivors'],
  },

  FIND_SURVIVORS: {
    id: 'find_survivors',
    type: MISSION_TYPES.MAIN,
    title: 'GHOST SIGNAL',
    description: 'A distress beacon is still active in the residential district. Someone is alive in there.',
    giver: 'commander_hale',
    dialogue: [
      'That beacon is the only friendly signal we have left on this grid.',
      'Find them, get them to the rally point. Do not leave anyone behind.',
    ],
    prerequisites: ['escape_infected_zone'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_RESIDENTIAL', position: { x: -40, y: 0, z: 20 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.COLLECT, label: 'FIND_SUPPLIES', position: { x: -50, y: 0, z: 15 }, itemId: 'supply_cache', count: 3 }),
      createObjective({ type: OBJECTIVE_TYPES.ESCORT, label: 'ESCORT_SURVIVOR', position: { x: -15, y: 0, z: 5 }, npcId: 'dr_reyes' }),
    ],
    rewards: { xp: 600, money: 300, items: ['armour_plate'], unlocks: ['side_mission_zone_control', 'uncover_conspiracy'] },
    failConditions: [{ type: 'npc_dies', npcId: 'dr_reyes' }],
    nextMissions: ['uncover_conspiracy'],
  },

  UNCOVER_CONSPIRACY: {
    id: 'uncover_conspiracy',
    type: MISSION_TYPES.MAIN,
    title: 'BLACKSITE',
    description: 'Dr. Reyes mentions a lab hidden beneath the city. The military did not evacuate — they locked it down.',
    giver: 'dr_reyes',
    dialogue: [
      'There is a sub-level beneath the research tower. They were studying the infection vector.',
      'If the military sealed it, they were hiding something. Find out what.',
    ],
    prerequisites: ['find_survivors'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_RESEARCH_TOWER', position: { x: 0, y: 0, z: -80 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.HACK, label: 'ACCESS_SUBLEVEL', position: { x: 0, y: -5, z: -80 }, duration: 12 }),
      createObjective({ type: OBJECTIVE_TYPES.COLLECT, label: 'DOWNLOAD_DATA', position: { x: 0, y: -8, z: -90 }, itemId: 'classified_drive', count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.KILL, label: 'ELIMINATE_TARGET', target: 'blacksite_guard', count: 4 }),
    ],
    rewards: { xp: 800, money: 500, items: ['pistol_suppressor', 'armour_plate'], unlocks: ['infiltrate_infected_nest'] },
    failConditions: [{ type: 'timeout', limit: 300 }],
    nextMissions: ['infiltrate_infected_nest'],
  },

  INFILTRATE_INFECTED_NEST: {
    id: 'infiltrate_infected_nest',
    type: MISSION_TYPES.MAIN,
    title: 'THE HIVE',
    description: 'The source of the infection is a biomass nest under the old metro station. End it.',
    giver: 'commander_hale',
    dialogue: [
      'This is it. The nest is the only thing keeping the horde coordinated.',
      'You have two options: overload the core and burn the whole site, or plant a beacon and let the evac team extract it.',
      'Choose wisely. The second option keeps the research intact — but it also keeps the threat alive.',
    ],
    prerequisites: ['uncover_conspiracy'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_METRO', position: { x: 60, y: -3, z: 40 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.SURVIVE, label: 'HOLD_ENTRANCE', position: { x: 60, y: -3, z: 40 }, duration: 45, waveCount: 5 }),
      createObjective({ type: OBJECTIVE_TYPES.HACK, label: 'ACCESS_CORE', position: { x: 65, y: -6, z: 45 }, duration: 15 }),
    ],
    choices: [
      { text: 'Overload the core', nextMission: 'ending_sacrifice' },
      { text: 'Plant the beacon', nextMission: 'ending_compromise' },
    ],
    rewards: { xp: 1000, money: 800, items: ['assault_rifle', 'medkit', 'armour_plate'], unlocks: [] },
    failConditions: [{ type: 'death' }, { type: 'timeout', limit: 240 }],
  },

  ENDING_SACRIFICE: {
    id: 'ending_sacrifice',
    type: MISSION_TYPES.MAIN,
    title: 'ENDING: PURGE',
    description: 'You trigger the overload. The nest burns. The city is saved, but the research — and any chance of a cure — is gone.',
    giver: null,
    dialogue: [
      'The charges blow. The sky over the metro goes orange.',
      'There is no data to recover now. No specimens. Just ash.',
      'You made the hard call. The city is clean. That is enough.',
    ],
    prerequisites: ['infiltrate_infected_nest'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'ESCAPE_BLAST_RADIUS', position: { x: 80, y: 0, z: 70 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.SURVIVE, label: 'HOLD_AT_EXTRACTION', position: { x: 80, y: 0, z: 70 }, duration: 20, waveCount: 2 }),
    ],
    rewards: { xp: 1500, money: 1000, items: [], unlocks: [] },
    failConditions: [{ type: 'death' }, { type: 'timeout', limit: 60 }],
    nextMissions: [],
  },

  ENDING_COMPROMISE: {
    id: 'ending_compromise',
    type: MISSION_TYPES.MAIN,
    title: 'ENDING: CONTAINMENT',
    description: 'You plant the beacon. The evac team extracts the core. The research lives, but so does the infection\'s origin.',
    giver: null,
    dialogue: [
      'The chopper lifts the core into the clouds.',
      'Dr. Reyes will study it. The military will weaponise it.',
      'The city is quiet, but the war is not over. You just changed its shape.',
    ],
    prerequisites: ['infiltrate_infected_nest'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_RALLY_POINT', position: { x: 80, y: 0, z: 70 }, count: 1 }),
    ],
    rewards: { xp: 1200, money: 600, items: ['blacksite_keycard'], unlocks: ['side_mission_dynamic_encounter'] },
    failConditions: [{ type: 'death' }],
    nextMissions: [],
  },
});

export const SIDE_MISSIONS = Object.freeze({
  SUPPLY_RUN: {
    id: 'side_mission_supply_run',
    type: MISSION_TYPES.SIDE,
    title: 'SIDE: SUPPLY RUN',
    description: 'A survivor needs medical supplies from the pharmacy on Main Street.',
    giver: 'dr_reyes',
    dialogue: [
      'We are almost out of morphine and antibiotics.',
      'The pharmacy is two blocks east. Watch the windows — infected climb now.',
    ],
    prerequisites: ['find_survivors'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_PHARMACY', position: { x: -20, y: 0, z: -10 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.COLLECT, label: 'GATHER_MEDICAL', position: { x: -20, y: 0, z: -10 }, itemId: 'medical_supplies', count: 5 }),
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'RETURN_TO_CAMP', position: { x: -15, y: 0, z: 5 }, count: 1 }),
    ],
    rewards: { xp: 300, money: 150, items: ['medkit'], unlocks: [] },
    failConditions: [{ type: 'timeout', limit: 180 }],
    repeatable: true,
    cooldown: 60,
    nextMissions: [],
  },

  ZONE_CONTROL: {
    id: 'side_mission_zone_control',
    type: MISSION_TYPES.SIDE,
    title: 'SIDE: HOLD THE LINE',
    description: 'The north checkpoint is under assault. Reinforce the defenders.',
    giver: 'commander_hale',
    dialogue: [
      'The north wall just went hot. Three squads are holding, but they will break.',
      'Get up there and keep them from crossing.',
    ],
    prerequisites: ['find_survivors'],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_NORTH_WALL', position: { x: 30, y: 0, z: 10 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.SURVIVE, label: 'DEFEND_CHECKPOINT', position: { x: 30, y: 0, z: 10 }, duration: 60, waveCount: 4 }),
    ],
    rewards: { xp: 400, money: 250, items: ['ammo_box'], unlocks: [] },
    failConditions: [{ type: 'timeout', limit: 90 }],
    repeatable: true,
    cooldown: 120,
    nextMissions: [],
  },
});

export const DYNAMIC_EVENTS = Object.freeze({
  RANDOM_ENCOUNTER: {
    id: 'dynamic_encounter',
    type: MISSION_TYPES.DYNAMIC,
    title: 'DYNAMIC: STRANDED',
    description: 'You encounter a lone survivor pinned down by infected. Help them.',
    giver: null,
    dialogue: [
      'Over here! Please, I have nowhere to go!',
    ],
    prerequisites: [],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_SURVIVOR', position: { x: 15, y: 0, z: 30 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.KILL, label: 'CLEAR_INFECTED', target: 'infected', count: 6 }),
      createObjective({ type: OBJECTIVE_TYPES.ESCORT, label: 'ESCORT_TO_SAFETY', position: { x: -10, y: 0, z: 10 }, npcId: 'stranded_survivor' }),
    ],
    rewards: { xp: 200, money: 100, items: ['medkit'], unlocks: [] },
    failConditions: [{ type: 'npc_dies', npcId: 'stranded_survivor' }, { type: 'timeout', limit: 120 }],
    cooldown: 180,
    repeatable: true,
    nextMissions: [],
  },

  EMERGENCY_EXTRACTION: {
    id: 'emergency_extraction',
    type: MISSION_TYPES.DYNAMIC,
    title: 'DYNAMIC: EXTRACTION',
    description: 'A downed pilot needs extraction before the nest calls in the horde.',
    giver: null,
    dialogue: [
      'This is Viper Two-One. I am pinned at the crash site.',
      'I can hold for two minutes. Make it count.',
    ],
    prerequisites: [],
    objectives: [
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_CRASH_SITE', position: { x: -55, y: 0, z: -40 }, count: 1 }),
      createObjective({ type: OBJECTIVE_TYPES.SURVIVE, label: 'PROTECT_PILOT', position: { x: -55, y: 0, z: -40 }, duration: 120, waveCount: 3 }),
      createObjective({ type: OBJECTIVE_TYPES.GOTO, label: 'REACH_HELIPAD', position: { x: -60, y: 0, z: -60 }, count: 1 }),
    ],
    rewards: { xp: 350, money: 180, items: ['assault_rifle_ammo'], unlocks: [] },
    failConditions: [{ type: 'timeout', limit: 150 }],
    cooldown: 240,
    repeatable: true,
    nextMissions: [],
  },
});

export const ALL_MISSIONS = Object.freeze({
  ...STORY_MISSIONS,
  ...SIDE_MISSIONS,
  ...DYNAMIC_EVENTS,
});

export function getMissionById(id) {
  return ALL_MISSIONS[id] || null;
}

export function getAvailableMissions(completedIds) {
  const out = [];
  for (const key in ALL_MISSIONS) {
    const m = ALL_MISSIONS[key];
    if (m.prerequisites.length === 0 || m.prerequisites.every((p) => completedIds.includes(p))) {
      out.push(m);
    }
  }
  return out;
}
