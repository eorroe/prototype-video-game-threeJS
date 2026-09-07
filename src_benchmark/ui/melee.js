import { el, setStyle, clamp01, damp, ease } from './util.js';

const MELEE_TYPE_LABELS = {
  blade: 'BLADE',
  blunt: 'BLUNT',
  infected_claw: 'INFECTED',
};

const MELEE_TYPE_COLORS = {
  blade: '#c0c0c0',
  blunt: '#d4845c',
  infected_claw: '#5cd44a',
};

export class MeleeHud {
  constructor(parent) {
    this.root = el('div', 'ow-melee-hud', parent);
    this.comboEl = el('div', 'ow-melee-combo', this.root);
    this.comboCount = el('span', 'ow-melee-combo-count', this.comboEl);
    this.comboLabel = el('span', 'ow-melee-combo-label', this.comboEl);
    this.comboLabel.textContent = 'HIT';
    this.finisherEl = el('div', 'ow-melee-finisher', this.root);
    this.finisherLabel = el('span', 'ow-melee-finisher-label', this.finisherEl);
    this.finisherLabel.textContent = 'FINISHER READY';
    this.stunBarEl = el('div', 'ow-melee-stun-bar', this.root);
    this.stunBarFill = el('div', 'ow-melee-stun-fill', this.stunBarEl);
    this.staminaEl = el('div', 'ow-melee-stamina', this.root);
    this.staminaFill = el('div', 'ow-melee-stamina-fill', this.staminaEl);
    this.parryFlashEl = el('div', 'ow-melee-parry-flash', this.root);
    this.parryFlashEl.textContent = 'PARRY';
    this.blockIndicator = el('div', 'ow-melee-block', this.root);
    this.blockIndicator.textContent = 'BLOCKING';
    this.chargeEl = el('div', 'ow-melee-charge', this.root);
    this.chargeFill = el('div', 'ow-melee-charge-fill', this.chargeEl);
    this.typeLabel = el('div', 'ow-melee-type', this.root);
    this.typeLabel.textContent = 'BLADE';
    this.dismemberEl = el('div', 'ow-melee-dismember', this.root);
    this.dismemberLabel = el('span', 'ow-melee-dismember-label', this.dismemberEl);
    this.dismemberLabel.textContent = 'LIMB SEVERED';
    this._comboAlpha = 0;
    this._stunAlpha = 0;
    this._parryAlpha = 0;
    this._dismemberAlpha = 0;
    this._chargeAlpha = 0;
    this._finisherAlpha = 0;
    this._blockAlpha = 0;
    this._staminaAlpha = 0;
    this._typeAlpha = 0;
  }

  update(dt, state) {
    if (!state) return;
    const combo = state.meleeComboCount ?? 0;
    const finisherAvailable = state.meleeFinisherAvailable ?? false;
    const stunTimer = state.meleeStunTimer ?? 0;
    const perfectFlash = state.meleePerfectParryFlash ?? false;
    const blocking = state.meleeBlocking ?? false;
    const charging = state.meleeCharging ?? false;
    const chargeProgress = state.meleeChargeProgress ?? 0;
    const stamina = state.meleeStamina ?? 100;
    const meleeType = state.meleeType ?? 'blade';
    const meleeActive = state.meleeActive ?? false;

    const comboFade = state.meleeComboCount > 0 ? 1 : 0;
    this._comboAlpha = damp(this._comboAlpha, comboFade, 8, dt);
    this.comboCount.textContent = String(combo);
    this.comboLabel.textContent = combo >= 5 ? 'MASSACRE' : combo >= 3 ? 'BRUTAL' : 'HIT';
    setStyle(this.comboEl, 'opacity', clamp01(this._comboAlpha).toFixed(3));

    this._finisherAlpha = damp(this._finisherAlpha, finisherAvailable ? 1 : 0, 6, dt);
    setStyle(this.finisherEl, 'opacity', clamp01(this._finisherAlpha).toFixed(3));
    if (finisherAvailable) {
      this.finisherEl.classList.add('ow-melee-finisher-active');
    } else {
      this.finisherEl.classList.remove('ow-melee-finisher-active');
    }

    const stunAlpha = stunTimer > 0 ? 1 : 0;
    this._stunAlpha = damp(this._stunAlpha, stunAlpha, 10, dt);
    const stunPct = clamp01(stunTimer / 0.8);
    setStyle(this.stunBarFill, 'width', `${(stunPct * 100).toFixed(1)}%`);
    setStyle(this.stunBarEl, 'opacity', clamp01(this._stunAlpha).toFixed(3));

    this._staminaAlpha = damp(this._staminaAlpha, meleeActive || blocking ? 1 : 0, 6, dt);
    const stamPct = clamp01(stamina / 100);
    setStyle(this.staminaFill, 'width', `${(stamPct * 100).toFixed(1)}%`);
    setStyle(this.staminaEl, 'opacity', clamp01(this._staminaAlpha).toFixed(3));

    this._parryAlpha = damp(this._parryAlpha, perfectFlash ? 1 : 0, 12, dt);
    setStyle(this.parryFlashEl, 'opacity', clamp01(this._parryAlpha).toFixed(3));

    this._blockAlpha = damp(this._blockAlpha, blocking ? 1 : 0, 10, dt);
    setStyle(this.blockIndicator, 'opacity', clamp01(this._blockAlpha).toFixed(3));

    this._chargeAlpha = damp(this._chargeAlpha, charging ? 1 : 0, 8, dt);
    setStyle(this.chargeEl, 'opacity', clamp01(this._chargeAlpha).toFixed(3));
    setStyle(this.chargeFill, 'width', `${(chargeProgress * 100).toFixed(1)}%`);

    const typeAlpha = meleeActive ? 1 : 0.6;
    this._typeAlpha = damp(this._typeAlpha, typeAlpha, 6, dt);
    this.typeLabel.textContent = MELEE_TYPE_LABELS[meleeType] ?? 'BLADE';
    this.typeLabel.style.color = MELEE_TYPE_COLORS[meleeType] ?? '#c0c0c0';
    setStyle(this.typeLabel, 'opacity', clamp01(this._typeAlpha).toFixed(3));

    this._dismemberAlpha = damp(this._dismemberAlpha, 0, 4, dt);
    setStyle(this.dismemberEl, 'opacity', clamp01(this._dismemberAlpha).toFixed(3));
  }

  showDismemberment(limbName) {
    this.dismemberLabel.textContent = `${limbName.toUpperCase()} SEVERED`;
    this._dismemberAlpha = 1;
  }

  showParry() {
    this._parryAlpha = 1;
  }

  dispose() {
    this.root.remove();
  }
}
