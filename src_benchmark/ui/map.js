import { el, setStyle } from './util.js';

/**
 * UI — world map overlay.
 *
 * Shows district boundaries, safe houses, collectibles and active events.
 * Drawn as a DOM overlay rather than a Three.js quad so it can use CSS for
 * typography and interaction.
 */

const MAX_BLIPS = 48;

export class MapUI {
  constructor(host, rng) {
    this.root = el('div', 'ow-map', host);
    this.root.style.display = 'none';
    this.canvas = el('canvas', 'ow-map-canvas', this.root);
    this.ctx = this.canvas.getContext('2d');
    this._blips = new Array(MAX_BLIPS);
    for (let i = 0; i < MAX_BLIPS; i++) this._blips[i] = { x: 0, z: 0, kind: 'enemy', heading: 0 };
    this._blipCount = 0;
    this._visible = false;
    this._k = 1;
    this._vw = 1920;
    this._vh = 1080;
  }

  resize(k) {
    this._k = k;
    const s = this._k;
    this.canvas.width = this._vw * s;
    this.canvas.height = this._vh * s;
    this.canvas.style.width = `${this._vw * s}px`;
    this.canvas.style.height = `${this._vh * s}px`;
  }

  show() {
    this._visible = true;
    this.root.style.display = 'block';
  }

  hide() {
    this._visible = false;
    this.root.style.display = 'none';
  }

  toggle() {
    if (this._visible) this.hide();
    else this.show();
  }

  draw(state) {
    if (!this._visible) return;
    const c = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const k = this._k;

    c.clearRect(0, 0, w, h);

    // Background
    c.fillStyle = 'rgba(0,0,0,0.75)';
    c.fillRect(0, 0, w, h);

    // Border
    c.strokeStyle = 'rgba(255,255,255,0.3)';
    c.lineWidth = 1 * k;
    c.strokeRect(4 * k, 4 * k, w - 8 * k, h - 8 * k);

    // District grid
    const gridSize = 40 * k;
    const cx = w / 2;
    const cy = h / 2;
    const scale = 0.15 * k;

    c.strokeStyle = 'rgba(255,255,255,0.15)';
    c.lineWidth = 1;
    for (let i = -5; i <= 5; i++) {
      c.beginPath();
      c.moveTo(cx + i * gridSize, 20 * k);
      c.lineTo(cx + i * gridSize, h - 20 * k);
      c.stroke();
      c.beginPath();
      c.moveTo(20 * k, cy + i * gridSize);
      c.lineTo(w - 20 * k, cy + i * gridSize);
      c.stroke();
    }

    // Player position
    const px = cx + state.x * scale;
    const pz = cy + state.z * scale;

    // Safe houses
    for (const b of state.blips ?? []) {
      const bx = cx + b.x * scale;
      const bz = cy + b.z * scale;
      if (b.kind === 'friend') {
        c.fillStyle = '#4f4';
        c.beginPath();
        c.arc(bx, bz, 3 * k, 0, Math.PI * 2);
        c.fill();
      }
    }

    // Player arrow
    c.save();
    c.translate(px, pz);
    c.rotate(-state.heading * Math.PI / 180);
    c.fillStyle = '#0ff';
    c.beginPath();
    c.moveTo(0, -6 * k);
    c.lineTo(-4 * k, 4 * k);
    c.lineTo(4 * k, 4 * k);
    c.closePath();
    c.fill();
    c.restore();

    // Title
    c.fillStyle = '#fff';
    c.font = `${14 * k}px ui-monospace, monospace`;
    c.textAlign = 'center';
    c.fillText('WORLD MAP', cx, 16 * k);
  }

  dispose() {
    this.root.remove();
  }
}
