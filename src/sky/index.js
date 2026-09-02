import * as THREE from 'three';

function createGradientTexture(topColor, bottomColor, size = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, size);
  gradient.addColorStop(0, `rgb(${topColor.map(c => Math.floor(c * 255)).join(',')})`);
  gradient.addColorStop(1, `rgb(${bottomColor.map(c => Math.floor(c * 255)).join(',')})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function sunColor(elevation) {
  const t = Math.max(0, Math.min(1, (elevation + 0.1) / 0.4));
  const r = 1.0;
  const g = 0.65 + t * 0.25;
  const b = 0.4 + t * 0.4;
  return [r, g, b];
}

export class SkySystem {
  static id = 'sky';
  static deps = ['render'];

  constructor() {
    this._dirty = true;
    this._time = 16.5;
    this._lat = 45;
    this._sunAltitude = 0.5;
    this._sunAzimuth = 0;
    this._ambient = [0.2, 0.3, 0.5];
    this._sun = null;
    this._envMap = null;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._renderer = ctx.get('render').renderer;
    this._scene = ctx.scene;
    this._build();
  }

  _build() {
    if (this._sun) {
      this._scene.remove(this._sun);
      this._scene.remove(this._sun.target);
      this._sun.dispose?.();
    }

    const hour = this._time;
    const alt = Math.sin((hour / 24) * Math.PI * 2 - Math.PI / 2);
    this._sunAltitude = alt;
    const intensity = Math.max(4, Math.sin(Math.max(0, alt)) * 12);
    const col = [0.75, 0.78, 0.85];

    this._sun = new THREE.DirectionalLight(
      new THREE.Color(col[0], col[1], col[2]),
      intensity
    );
    this._sun.name = 'ow-sun';
    this._sun.position.set(-60, 35, 40);
    this._sun.castShadow = false;
    this._scene.add(this._sun);
    this._scene.add(this._sun.target);

    const hemi = new THREE.HemisphereLight(0x8899aa, 0x222222, 2.5);
    hemi.name = 'ow-hemi';
    this._scene.add(hemi);

    const ambient = new THREE.AmbientLight(0x445566, 2.0);
    ambient.name = 'ow-ambient';
    this._scene.add(ambient);

    this._updateSkyDome();
    this._updateEnvMap();
  }

  _updateSkyDome() {
    const existing = this._scene.getObjectByName('ow-sky-dome');
    if (existing) {
      this._scene.remove(existing);
      existing.geometry?.dispose();
      existing.material?.dispose();
    }

    const alt = this._sunAltitude;
    const zenith = [0.18, 0.2, 0.24];
    const horizon = [0.28, 0.3, 0.35];
    const ground = [0.08, 0.07, 0.06];

    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    for (let y = 0; y < 256; y++) {
      const t = y / 255;
      let col;
      if (t < 0.5) {
        const s = t / 0.5;
        col = [
          zenith[0] + (horizon[0] - zenith[0]) * s,
          zenith[1] + (horizon[1] - zenith[1]) * s,
          zenith[2] + (horizon[2] - zenith[2]) * s,
        ];
      } else {
        const s = (t - 0.5) / 0.5;
        col = [
          horizon[0] + (ground[0] - horizon[0]) * s,
          horizon[1] + (ground[1] - horizon[1]) * s,
          horizon[2] + (ground[2] - horizon[2]) * s,
        ];
      }
      ctx.fillStyle = `rgb(${Math.floor(col[0]*255)},${Math.floor(col[1]*255)},${Math.floor(col[2]*255)})`;
      ctx.fillRect(0, y, 2, 1);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;

    const geo = new THREE.SphereGeometry(500, 32, 15);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        skyTex: { value: tex },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vWorldPos;
        uniform sampler2D skyTex;
        void main() {
          vec3 dir = normalize(vWorldPos);
          float t = dir.y * 0.5 + 0.5;
          vec3 col = texture2D(skyTex, vec2(0.5, t)).rgb;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });

    const dome = new THREE.Mesh(geo, mat);
    dome.name = 'ow-sky-dome';
    this._scene.add(dome);
  }

  _updateEnvMap() {
    if (this._envMap) {
      this._envMap.dispose?.();
      this._envMap = null;
    }
    const r = this.ctx.peek('render');
    if (r?.setEnvMap) {
      r.setEnvMap(null);
    }
  }

  setTime(hour) {
    this._time = ((hour % 24) + 24) % 24;
    this._build();
  }

  dispose() {
    const dome = this._scene.getObjectByName('ow-sky-dome');
    if (dome) {
      this._scene.remove(dome);
      dome.geometry?.dispose();
      dome.material?.dispose();
    }
    if (this._sun) {
      this._scene.remove(this._sun);
      this._scene.remove(this._sun.target);
    }
  }
}
