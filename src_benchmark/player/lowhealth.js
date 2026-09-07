/**
 * Low-health screen treatment, registered with `render` as a post pass.
 *
 * Runs in the HDR/linear domain *before* tonemapping, which is the only place
 * this can go without fighting the film curve: desaturating after AgX crushes
 * the highlights instead of draining the colour.
 *
 * Three stacked cues, all driven from `Health`:
 *   desaturation    blood loss reads as the world losing colour
 *   arterial vignette  a soft, warm-red edge that pulses with the heartbeat
 *   hit flash       a short, sharp radial wash on the frame you are hit
 *
 * The pass sets `enabled = false` whenever it would be a no-op so a healthy
 * player pays nothing — not even the ping-pong blit.
 */

import * as THREE from 'three';

// RawShaderMaterial: three prepends nothing, so every attribute and the
// precision qualifier are declared by hand.
const VERT = /* glsl */ `
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;
/** x lowHealth, y pulse, z hitFlash, w critical */
uniform vec4 uState;
/** x infectionAmount, y pulse, z=0, w=0 */
uniform vec4 uInfection;
uniform vec2 uAspect;
uniform sampler2D uExposure;
out vec4 fragColor;

void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float amount = uState.x;
  float pulse = uState.y;
  float flash = uState.z;
  float infAmt = uInfection.x;
  float infPulse = uInfection.y;

  vec2 d = (vUv - 0.5) * uAspect;
  float r = length(d) * 1.414;

  // ---- desaturation ----------------------------------------------------
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float sat = amount * (0.74 + 0.16 * pulse);
  c = mix(c, vec3(luma) * vec3(0.93, 0.97, 1.06), clamp(sat, 0.0, 0.94));

  // ---- low-health edge darkening ---------------------------------------
  float wide = smoothstep(0.18, 1.0, r);
  float beat = amount * (0.32 + 0.68 * pulse);
  c *= 1.0 - wide * (0.40 + 0.28 * beat) * amount;

  // ---- arterial rim ----------------------------------------------------
  float rim = smoothstep(0.34, 1.1, r);
  float k = rim * beat;
  c *= mix(vec3(1.0), vec3(1.16, 0.26, 0.22), clamp(k * 0.98, 0.0, 1.0));
  float invExp = 1.0 / max(1e-3, texture(uExposure, vec2(0.5)).r);
  c += vec3(0.115, 0.008, 0.005) * k * invExp;

  // ---- infection vignette ----------------------------------------------
  // A red-green tinted vignette that pulses, indicating viral infection.
  if (infAmt > 0.004) {
    float infRim = smoothstep(0.12, 1.05, r);
    float infBeat = infAmt * (0.5 + 0.5 * infPulse);
    float infMask = infRim * infBeat;
    c *= mix(vec3(1.0), vec3(0.7, 0.15, 0.08), clamp(infMask * 0.55, 0.0, 1.0));
    c += vec3(0.06, 0.025, 0.005) * infMask * invExp;
    // slight desaturation under infection
    float infLuma = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(c, vec3(infLuma) * vec3(1.04, 0.97, 0.93), clamp(infAmt * 0.35, 0.0, 0.7));
  }

  // ---- hit flash -------------------------------------------------------
  if (flash > 0.001) {
    float ring = 0.3 + 0.7 * smoothstep(0.05, 0.95, r);
    float f = clamp(flash * ring, 0.0, 1.0);
    c *= mix(vec3(1.0), vec3(1.3, 0.4, 0.34), f);
    c += vec3(0.16, 0.012, 0.008) * f * invExp;
  }

  fragColor = vec4(c, 1.0);
}
`;

export class LowHealthPass {
  constructor() {
    this.name = 'player:lowhealth';
    /** After fx/volumetrics, before metering — the grade should meter darker. */
    this.order = 40;
    this.enabled = false;

    // 1x1 fallback so the shader is valid before `render` publishes a real
    // exposure texture (and if auto-exposure is ever switched off).
    this.unitExposure = new THREE.DataTexture(
      new Float32Array([1, 1, 1, 1]), 1, 1, THREE.RGBAFormat, THREE.FloatType
    );
    this.unitExposure.needsUpdate = true;

    this.uniforms = {
      uTex: { value: null },
      uState: { value: new THREE.Vector4(0, 0, 0, 0) },
      uInfection: { value: new THREE.Vector4(0, 0, 0, 0) },
      uAspect: { value: new THREE.Vector2(1, 1) },
      uExposure: { value: this.unitExposure },
    };
    this.material = new THREE.RawShaderMaterial({
      name: this.name,
      glslVersion: THREE.GLSL3,
      uniforms: this.uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
    });

    // Own fullscreen triangle — this file may not import render/'s helpers.
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
    );
    this.geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
    this.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e8);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.matrixAutoUpdate = false;
    this.scene = new THREE.Scene();
    this.scene.matrixAutoUpdate = false;
    this.scene.add(this.mesh);
    this.camera = new THREE.Camera();
  }

  /** @param {import('./health.js').Health} health */
  sync(health) {
    const amount = health.effect;
    const flash = health.hitFlash;
    const player = health.ctx?.peek?.('player');
    const infAmt = player?.infected ? (player.infectionMeter / player.infectionMax) : 0;
    this.enabled = amount > 0.004 || flash > 0.004 || infAmt > 0.004;
    if (!this.enabled) return;
    const s = this.uniforms.uState.value;
    s.set(amount, health.pulse, flash, health.critical ? 1 : 0);
    const inf = this.uniforms.uInfection.value;
    inf.set(infAmt, infAmt * (0.5 + 0.5 * Math.sin(health.ctx.time.elapsed * 4.5)), 0, 0);
  }

  resize(w, h) {
    // Keep the vignette circular regardless of aspect.
    const a = this.uniforms.uAspect.value;
    if (w >= h) a.set(1, h / Math.max(1, w));
    else a.set(w / Math.max(1, h), 1);
  }

  render(renderer, inputTexture, target, r) {
    this.uniforms.uTex.value = inputTexture;
    this.uniforms.uExposure.value = r?.exposureTexture ?? this.unitExposure;
    renderer.setRenderTarget(target);
    renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.material.dispose();
    this.geometry.dispose();
    this.unitExposure.dispose();
  }
}
