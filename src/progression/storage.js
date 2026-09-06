const STORAGE_KEY = 'progression.save.v1';

export function saveProgression(data) {
  try {
    const blob = JSON.stringify({
      version: 1,
      level: data.level,
      xp: data.xp,
      skillPoints: data.skillPoints,
      unlockedNodes: data.unlockedNodes,
      activeAbilities: data.activeAbilities,
      evolutionEnergy: data.evolutionEnergy,
      timestamp: Date.now(),
    });
    localStorage.setItem(STORAGE_KEY, blob);
  } catch {
    /* quota exceeded or private mode — silent fail */
  }
}

export function loadProgression() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== 1) return null;
    return data;
  } catch {
    return null;
  }
}

export function clearProgression() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
