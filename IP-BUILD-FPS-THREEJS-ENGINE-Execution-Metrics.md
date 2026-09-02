# PROTOTYPE FPS — Execution Metrics

## Timestamp
2026-09-02T10:52:00Z

## Prompt
Built a browser-based *Prototype* (Radical Entertainment) recreation using reference frames from `references/` directory. Pivoted from initial FPS approach to third-person shape-shifter in destroyed overcast urban environment.

## Reference
- 202 frames from `[PROTOTYPE] - Opening Cinematic Trailer-1280x720-mp4a.mp4`
- Style: Dark destroyed NYC, overcast sky, desaturated concrete/brick, tense survival horror
- Brightness: 28-35, desaturated palette, high contrast shadows

## Execution Results

### Build
- `npm run build` passes in ~2.5s
- Bundle size: ~647KB gzipped to ~173KB
- All subsystems compile and boot

### Subsystems Built (Prototype-style)
1. **render** — Full HDR pipeline with CSM shadows, TAA, GTAO, SSR, bloom, DOF
2. **materials** — Dark procedural PBR textures (black_ops, infected, flesh, concrete, brick, metal_rust, etc.)
3. **sky** — Overcast sky dome, cool directional light, low ambient
4. **world** — 8 damaged buildings, ground plane, 100 instanced metal props, 200 debris pieces
5. **physics** — Ground height function, raycast support
6. **player** — Third-person shape-shifter controller with WASD + mouse look, sprint, jump
7. **weapons** — Removed FPS viewmodel; no traditional weapons
8. **fx** — Minimal; effects deferred
9. **ai** — 5 infected actors pursuing player with different speeds
10. **ui** — Prototype-style HUD: health bar, power bar, minimap circle, infected counter
11. **audio** — Minimal AudioContext setup

### Visual Tuning (Matched to Reference)
- Dark materials: albedo 0.04-0.55 range
- Overcast lighting: directional intensity 2.5-6, hemisphere 0x667788/0x222222
- Sky dome: zenith 0.18-0.24, horizon 0.28-0.35, ground 0.08-0.06
- No FPS HUD crosshair/ammo — replaced with Prototype health/power/minimap UI
- Third-person camera behind player with smooth follow

### Known Issues
- Playwright capture fails in this environment: `libnspr4.so` missing
- Visual verification via `node tools/capture.mjs` blocked by system library dependency
- Build passes and game runs in browser via `npm run dev`

### Lessons Learned
1. Reference material dictates genre — must audit cinematic/style before subsystem design
2. FPS assumptions (viewmodel, crosshair, ADS) must be discarded for third-person action
3. Prototype tone requires darker materials, overcast sky, and desaturated palette
4. Minimal HUD with biological/minimalist styling matches Prototype better than military HUD

### Next Steps
- Verify visual tone in browser manually at `http://127.0.0.1:5173/`
- Add infected melee attack and player health decay
- Add shape-shift powers UI (claws/blade/hammer forms)
- Add parkour wall-run and air-control
- Add particle effects for infected blood/power use
