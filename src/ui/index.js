export class UiSystem {
  static id = 'ui';
  static deps = ['render'];

  constructor() {
    this._root = null;
    this._healthFill = null;
    this._ammoText = null;
  }

  async init(ctx) {
    this.ctx = ctx;

    this._root = document.createElement('div');
    this._root.style.cssText =
      'position:fixed;inset:0;pointer-events:none;z-index:100;font-family:ui-monospace,monospace;';

    const crosshair = document.createElement('div');
    crosshair.style.cssText =
      'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);' +
      'width:4px;height:4px;background:#fff;border-radius:50%;box-shadow:0 0 2px #000;';
    this._root.appendChild(crosshair);

    const healthWrap = document.createElement('div');
    healthWrap.style.cssText = 'position:absolute;top:16px;left:16px;';
    const healthLabel = document.createElement('div');
    healthLabel.style.cssText = 'color:#fff;font-size:12px;text-shadow:0 0 4px #000;margin-bottom:4px;';
    healthLabel.textContent = 'HEALTH';
    healthWrap.appendChild(healthLabel);
    const healthBar = document.createElement('div');
    healthBar.style.cssText = 'width:200px;height:12px;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.3);';
    this._healthFill = document.createElement('div');
    this._healthFill.style.cssText = 'width:100%;height:100%;background:#4c4;transition:width .2s;';
    healthBar.appendChild(this._healthFill);
    healthWrap.appendChild(healthBar);
    this._root.appendChild(healthWrap);

    const ammoWrap = document.createElement('div');
    ammoWrap.style.cssText = 'position:absolute;bottom:24px;right:24px;text-align:right;';
    const ammoLabel = document.createElement('div');
    ammoLabel.style.cssText = 'color:rgba(255,255,255,0.6);font-size:11px;text-shadow:0 0 4px #000;';
    ammoLabel.textContent = 'AMMO';
    ammoWrap.appendChild(ammoLabel);
    this._ammoText = document.createElement('div');
    this._ammoText.style.cssText = 'color:#fff;font-size:28px;font-weight:bold;text-shadow:0 0 6px #000;line-height:1.2;';
    this._ammoText.textContent = '30 / 90';
    ammoWrap.appendChild(this._ammoText);
    this._root.appendChild(ammoWrap);

    document.body.appendChild(this._root);
    console.log('[ui] HUD ready');
  }

  update(dt, ctx) {
    if (this._healthFill) {
      this._healthFill.style.width = '85%';
    }
    if (this._ammoText) {
      this._ammoText.textContent = '30 / 90';
    }
  }

  dispose() {
    if (this._root && this._root.parentNode) {
      this._root.parentNode.removeChild(this._root);
    }
    this._root = null;
    this._healthFill = null;
    this._ammoText = null;
  }
}
