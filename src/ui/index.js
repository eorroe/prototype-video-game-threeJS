export class UiSystem {
  static id = 'ui';
  static deps = ['render'];

  constructor() {
    this._root = null;
    this._healthBar = null;
    this._powerBar = null;
    this._minimap = null;
  }

  async init(ctx) {
    this.ctx = ctx;
    this._build();
    console.info('[ui] Prototype-style HUD ready');
  }

  _build() {
    const root = document.createElement('div');
    root.id = 'prototype-hud';
    root.style.cssText = 'position:fixed;inset:0;pointer-events:none;font-family:ui-monospace,monospace;color:#8a9a8a;font-size:12px;z-index:10;';

    const healthWrap = document.createElement('div');
    healthWrap.style.cssText = 'position:absolute;bottom:40px;left:40px;width:200px;';
    const healthLabel = document.createElement('div');
    healthLabel.textContent = 'HEALTH';
    healthLabel.style.cssText = 'font-size:10px;letter-spacing:2px;margin-bottom:4px;color:#5a6a5a;';
    const healthBar = document.createElement('div');
    healthBar.style.cssText = 'width:100%;height:6px;background:rgba(0,0,0,0.6);border:1px solid #2a3a2a;';
    const healthFill = document.createElement('div');
    healthFill.style.cssText = 'width:100%;height:100%;background:#2d5a2d;transition:width 0.2s;';
    healthBar.appendChild(healthFill);
    healthWrap.appendChild(healthLabel);
    healthWrap.appendChild(healthBar);
    root.appendChild(healthWrap);
    this._healthBar = healthFill;

    const powerWrap = document.createElement('div');
    powerWrap.style.cssText = 'position:absolute;bottom:40px;right:40px;width:120px;';
    const powerLabel = document.createElement('div');
    powerLabel.textContent = 'POWERS';
    powerLabel.style.cssText = 'font-size:10px;letter-spacing:2px;margin-bottom:4px;color:#5a6a5a;';
    const powerBar = document.createElement('div');
    powerBar.style.cssText = 'width:100%;height:6px;background:rgba(0,0,0,0.6);border:1px solid #2a3a2a;';
    const powerFill = document.createElement('div');
    powerFill.style.cssText = 'width:100%;height:100%;background:#5a2d5a;transition:width 0.2s;';
    powerBar.appendChild(powerFill);
    powerWrap.appendChild(powerLabel);
    powerWrap.appendChild(powerBar);
    root.appendChild(powerWrap);
    this._powerBar = powerFill;

    const minimap = document.createElement('div');
    minimap.style.cssText = 'position:absolute;top:20px;right:20px;width:140px;height:140px;background:rgba(0,0,0,0.5);border:1px solid #2a3a2a;border-radius:50%;overflow:hidden;';
    const minimapDot = document.createElement('div');
    minimapDot.style.cssText = 'position:absolute;top:50%;left:50%;width:4px;height:4px;background:#8a9a8a;border-radius:50%;transform:translate(-50%,-50%);';
    minimap.appendChild(minimapDot);
    root.appendChild(minimap);
    this._minimap = minimap;

    const infectedCount = document.createElement('div');
    infectedCount.id = 'infected-count';
    infectedCount.style.cssText = 'position:absolute;top:20px;left:20px;font-size:11px;color:#5a6a5a;';
    infectedCount.textContent = 'INFECTED: 0';
    root.appendChild(infectedCount);

    document.body.appendChild(root);
    this._root = root;
    this._infectedCount = infectedCount;
  }

  update(dt, ctx) {
    if (!this._root) return;
    const player = ctx.peek('player');
    const ai = ctx.peek('ai');
    if (player) {
      const h = Math.max(0, player._health || 0);
      this._healthBar.style.width = `${h}%`;
    }
    if (ai) {
      const count = ai._actors?.length || 0;
      this._infectedCount.textContent = `INFECTED: ${count}`;
    }
  }

  dispose() {
    if (this._root) {
      this._root.remove();
      this._root = null;
    }
  }
}
