import { el, setStyle } from './util.js';

/**
 * UI — loading screen for fast travel.
 *
 * Shows a semi-transparent overlay with a progress bar and a gameplay tip
 * while the player is travelling between safe houses.
 */

const TIPS = [
  'Infected zones are most dangerous at night.',
  'Clear buildings from the roof for better cover.',
  'Listen for audio cues to locate survivors.',
  'High ground gives you a tactical advantage.',
  'Conserve ammunition in the industrial district.',
  'Check corners before entering tight spaces.',
  'Night vision is limited — use light sources carefully.',
  'Rescue survivors to unlock new safe houses.',
  'Car crashes often contain useful supplies.',
  'Infected hordes are attracted to loud noises.',
];

export class LoadingScreen {
  constructor(host) {
    this.root = el('div', 'ow-loading', host);
    this.root.style.display = 'none';
    this.tipEl = el('div', 'ow-loading-tip', this.root);
    this.barEl = el('div', 'ow-loading-bar', this.root);
    this._visible = false;
    this._progress = 0;
    this._tip = '';
  }

  show(tip) {
    this._visible = true;
    this._tip = tip ?? TIPS[Math.floor(Math.random() * TIPS.length)];
    this._progress = 0;
    this.root.style.display = 'flex';
    this.tipEl.textContent = this._tip;
    this._updateBar();
  }

  hide() {
    this._visible = false;
    this.root.style.display = 'none';
  }

  setProgress(t) {
    this._progress = Math.max(0, Math.min(1, t));
    this._updateBar();
  }

  _updateBar() {
    const pct = `${(this._progress * 100).toFixed(0)}%`;
    this.barEl.textContent = pct;
    this.barEl.style.width = pct;
  }

  dispose() {
    this.root.remove();
  }
}
