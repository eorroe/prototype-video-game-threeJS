import * as THREE from 'three';
import { Engine } from './core/engine.js';
import { createConfig } from './core/config.js';

if (THREE.ShaderChunk && !THREE.ShaderChunk['morphinstance_vertex']) {
  THREE.ShaderChunk['morphinstance_vertex'] = '// morphinstance_vertex: no-op in r160';
}

import { RenderSystem } from './render/index.js';
import { MaterialSystem } from './materials/index.js';
import { SkySystem } from './sky/index.js';
import { WorldSystem } from './world/index.js';
import { PhysicsSystem } from './physics/index.js';
import { PlayerSystem } from './player/index.js';
import { WeaponSystem } from './weapons/index.js';
import { FxSystem } from './fx/index.js';
import { AiSystem } from './ai/index.js';
import { UiSystem } from './ui/index.js';
import { AudioSystem } from './audio/index.js';
import { MissionSystem } from './mission/index.js';
import { FastTravelSystem } from './world/fasttravel.js';
import { CollectiblesSystem } from './world/collectibles.js';
import { DynamicEvents } from './world/dynamicevents.js';
import { SpawnSystem } from './world/spawning.js';
import { ProgressionSystem } from './progression/index.js';

import { installShotApi } from './dev/shots.js';
import { prewarm } from './core/prewarm.js';

const params = new URLSearchParams(location.search);
const capture = params.get('capture') === '1';
// Deterministic shutter for the pixel gate: the engine does not schedule its own
// frames, the driver advances exactly N of them through window.__PUMP__. Opt-in,
// because tools that measure real frame pacing (tools/perf.mjs) need the loop to
// free-run. See the long comment in src/dev/shots.js.
const lockstep = capture && params.get('lockstep') === '1';

const config = createConfig({
  quality: params.get('q') ?? 'ultra',
  deterministic: capture,
});

const canvas = document.getElementById('game');

const engine = new Engine({ canvas, config });

// Registration order is irrelevant — Registry topo-sorts on static deps.
engine
  .add(RenderSystem)
  .add(MaterialSystem)
  .add(SkySystem)
  .add(WorldSystem)
  .add(PhysicsSystem)
  .add(PlayerSystem)
  .add(WeaponSystem)
  .add(FxSystem)
  .add(AiSystem)
  .add(UiSystem)
  .add(AudioSystem)
  .add(FastTravelSystem)
  .add(CollectiblesSystem)
  .add(DynamicEvents)
  .add(SpawnSystem)
  .add(MissionSystem)
  .add(ProgressionSystem);

try {
  await engine.init();
} catch (err) {
  console.error('[boot] init failed', err);
  document.body.insertAdjacentHTML(
    'beforeend',
    `<pre style="position:fixed;inset:0;padding:2rem;color:#f66;background:#000;
       font:12px/1.5 ui-monospace,monospace;overflow:auto;z-index:9999;white-space:pre-wrap">
BOOT FAILURE\n\n${err.stack ?? err.message}</pre>`
  );
  throw err;
}

const shotApi = installShotApi(engine, { capture, lockstep });

// Start the engine loop immediately so the first frame paints without waiting
// for shader prewarm. Prewarm continues in the background and only blocks the
// capture/ready handshake, not the first paint.
engine.start();

const warmup = params.get('prewarm') === '0'
  ? Promise.resolve({ ok: false, reason: 'disabled by ?prewarm=0' })
  : prewarm(engine);
window.__PREWARM__ = { ok: false, reason: 'pending' };
warmup.then((r) => {
  window.__PREWARM__ = r;
  console.info('[boot] prewarm', r);
}).catch((err) => {
  console.warn('[boot] prewarm error', err);
  window.__PREWARM__ = { ok: false, reason: String(err?.message ?? err) };
});

// Capture harness handshake: only flag ready once a frame has actually landed.
//
// BOOT_FRAMES is deliberately a frame COUNT, not a rAF race. In lockstep mode the
// engine has no loop of its own, so we hand-pump exactly this many frames and only
// then raise __READY__; the shot is therefore always applied at engine frame 3, no
// matter how long boot (or pre-warm) took in wall-clock terms.
const BOOT_FRAMES = 3;
if (lockstep) {
  await shotApi.pump(BOOT_FRAMES);
  window.__READY__ = true;
} else {
  let warm = 0;
  const readyProbe = () => {
    if (++warm >= BOOT_FRAMES) {
      window.__READY__ = true;
      return;
    }
    requestAnimationFrame(readyProbe);
  };
  requestAnimationFrame(readyProbe);
}

window.__ENGINE__ = engine;

if (lockstep) {
  const mission = engine.ctx.get('mission');
  mission.startMission('escape_infected_zone');
} else {
  requestAnimationFrame(() => {
    const mission = engine.ctx.get('mission');
    mission.startMission('escape_infected_zone');
  });
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => engine.dispose());
}
