/**
 * Mission UI panel: active objectives list, brief popup, dialogue, reward preview.
 *
 * Layout
 * ------
 *   Objectives list  — bottom-left, stacked under vitals
 *   Brief popup      — top-center, fades in on mission start, fades out
 *   Dialogue         — bottom-center, above prompt
 *   Reward preview   — center screen, banner-style
 */

import { el, setText, setStyle, setClass, clamp, clamp01, damp, ease } from '../ui/util.js';

const MAX_OBJECTIVES = 8;

export class MissionPanel {
  constructor(parent, rng) {
    this.rng = rng;
    this.k = 1;
    this.vw = 1920;
    this.vh = 1080;

    this.root = el('div', 'ow-mission', parent);

    this.listRoot = el('div', 'ow-mission-list', this.root);
    this._listItems = new Array(MAX_OBJECTIVES);
    for (let i = 0; i < MAX_OBJECTIVES; i++) {
      const row = el('div', 'ow-mission-row', this.listRoot);
      const icon = el('div', 'ow-mission-icon', row, '');
      const label = el('div', 'ow-mission-label', row, '');
      const prog = el('div', 'ow-mission-prog', row, '');
      row._icon = icon;
      row._label = label;
      row._prog = prog;
      row.style.display = 'none';
      this._listItems[i] = row;
    }

    this.briefRoot = el('div', 'ow-mission-brief', this.root);
    this.briefRoot.style.display = 'none';
    this._briefTitle = el('div', 'ow-mission-brief-t', this.briefRoot, '');
    this._briefDesc = el('div', 'ow-mission-brief-d', this.briefRoot, '');

    this.dialogueRoot = el('div', 'ow-mission-dialogue', this.root);
    this.dialogueRoot.style.display = 'none';
    this._dlgSpeaker = el('div', 'ow-mission-dialogue-s', this.dialogueRoot, '');
    this._dlgText = el('div', 'ow-mission-dialogue-t', this.dialogueRoot, '');
    this._dlgPrompt = el('div', 'ow-mission-dialogue-p', this.dialogueRoot, 'PRESS F TO CONTINUE');

    this.rewardRoot = el('div', 'ow-mission-rewards', this.root);
    this.rewardRoot.style.display = 'none';
    this._rewardTitle = el('div', 'ow-mission-rewards-t', this.rewardRoot, 'MISSION COMPLETE');
    this._rewardBody = el('div', 'ow-mission-rewards-b', this.rewardRoot, '');

    this.choiceRoot = el('div', 'ow-mission-choices', this.root);
    this.choiceRoot.style.display = 'none';
    this._choiceBody = el('div', 'ow-mission-choices-b', this.choiceRoot, '');

    this._briefLife = 0;
    this._briefOpacity = 0;
    this._briefTarget = 0;

    this._dialogueLife = 0;
    this._dialogueOpacity = 0;
    this._dialogueTarget = 0;

    this._rewardLife = 0;
    this._rewardOpacity = 0;
    this._rewardTarget = 0;

    this._objectives = [];
    this._objectiveMap = new Map();
  }

  setObjectives(list) {
    this._objectives = list ?? [];
    this._objectiveMap.clear();
    for (let i = 0; i < this._objectives.length; i++) {
      this._objectiveMap.set(this._objectives[i].id, this._objectives[i]);
    }
  }

  showBrief(title, description, life = 5) {
    setText(this._briefTitle, title ?? '');
    setText(this._briefDesc, description ?? '');
    this.briefRoot.style.display = '';
    this._briefLife = life;
    this._briefTarget = 1;
  }

  hideBrief() {
    this._briefTarget = 0;
    this._briefLife = 0.4;
  }

  showDialogue(speaker, text, prompt = 'PRESS F') {
    setText(this._dlgSpeaker, speaker ?? '');
    setText(this._dlgText, text ?? '');
    setText(this._dlgPrompt, prompt);
    this.dialogueRoot.style.display = '';
    this._dialogueLife = 999;
    this._dialogueTarget = 1;
  }

  hideDialogue() {
    this._dialogueTarget = 0;
    this._dialogueLife = 0.25;
  }

  showRewards(title, rewards) {
    setText(this._rewardTitle, title ?? 'MISSION COMPLETE');
    const parts = [];
    if (rewards?.xp) parts.push(`+${rewards.xp} XP`);
    if (rewards?.money) parts.push(`$${rewards.money}`);
    if (rewards?.items?.length) {
      for (const it of rewards.items) parts.push(it.replace(/_/g, ' ').toUpperCase());
    }
    setText(this._rewardBody, parts.join('  ·  ') || '—');
    this.rewardRoot.style.display = '';
    this._rewardLife = 4.5;
    this._rewardTarget = 1;
  }

  hideRewards() {
    this._rewardTarget = 0;
    this._rewardLife = 0.4;
  }

  showChoices(options) {
    if (!options || !options.length) return;
    const html = options.map((o, i) => `[${i + 1}] ${o.text}`).join('<br>');
    this._choiceBody.innerHTML = html;
    this.choiceRoot.style.display = '';
    this._choiceOptions = options;
    this._choiceOpacity = 1;
    this._choiceTarget = 1;
  }

  hideChoices() {
    this._choiceTarget = 0;
    this.choiceRoot.style.display = 'none';
    this._choiceOptions = null;
  }

  /* --------------------------------------------------------------- frame --- */

  update(dt, ctx) {
    const k = this.k;
    const rawDt = clamp(dt, 0, 0.1);

    this._briefOpacity = damp(this._briefOpacity, this._briefTarget, 8, rawDt);
    if (this._briefTarget === 0 && this._briefOpacity < 0.01 && this._briefLife <= 0) {
      this.briefRoot.style.display = 'none';
      this._briefOpacity = 0;
    }
    if (this._briefTarget === 1 && this._briefLife > 0) this._briefLife -= rawDt;
    if (this._briefLife <= 0 && this._briefTarget === 1) this._briefTarget = 0;
    setStyle(this.briefRoot, 'opacity', this._briefOpacity.toFixed(3));

    this._dialogueOpacity = damp(this._dialogueOpacity, this._dialogueTarget, 10, rawDt);
    if (this._dialogueTarget === 0 && this._dialogueOpacity < 0.01 && this._dialogueLife <= 0) {
      this.dialogueRoot.style.display = 'none';
      this._dialogueOpacity = 0;
    }
    if (this._dialogueTarget === 1 && this._dialogueLife > 0) this._dialogueLife -= rawDt;
    if (this._dialogueLife <= 0 && this._dialogueTarget === 1) this._dialogueTarget = 0;
    setStyle(this.dialogueRoot, 'opacity', this._dialogueOpacity.toFixed(3));

    this._rewardOpacity = damp(this._rewardOpacity, this._rewardTarget, 6, rawDt);
    if (this._rewardTarget === 0 && this._rewardOpacity < 0.01 && this._rewardLife <= 0) {
      this.rewardRoot.style.display = 'none';
      this._rewardOpacity = 0;
    }
    if (this._rewardTarget === 1 && this._rewardLife > 0) this._rewardLife -= rawDt;
    if (this._rewardLife <= 0 && this._rewardTarget === 1) this._rewardTarget = 0;
    setStyle(this.rewardRoot, 'opacity', this._rewardOpacity.toFixed(3));

    if (this._choiceOptions) {
      const idx = Math.min(1, this._choiceOpacity);
      setStyle(this.choiceRoot, 'opacity', idx.toFixed(3));
    }

    const n = Math.min(this._objectives.length, MAX_OBJECTIVES);
    for (let i = 0; i < n; i++) {
      const o = this._objectives[i];
      const row = this._listItems[i];
      if (!row) continue;
      row.style.display = '';
      setText(row._label, o.label ?? '');
      if (o.completed) {
        setText(row._prog, 'DONE');
        setClass(row, 'done', true);
      } else if (o.type === 'Survive') {
        const pct = Math.round((o.progress ?? 0) * 100);
        setText(row._prog, `${pct}%`);
        setClass(row, 'done', false);
      } else if (o.type === 'Hack') {
        const pct = Math.round((o.progress ?? 0) * 100);
        setText(row._prog, `${pct}%`);
        setClass(row, 'done', false);
      } else {
        const cur = o.progress ?? 0;
        const max = o.count ?? 1;
        setText(row._prog, `${cur}/${max}`);
        setClass(row, 'done', false);
      }
      setClass(row, o.type.toLowerCase(), true);
    }
    for (let i = n; i < MAX_OBJECTIVES; i++) {
      if (this._listItems[i]) this._listItems[i].style.display = 'none';
    }
  }

  resize(w, h) {
    this.vw = w;
    this.vh = h;
    this.k = clamp(h / 1080, 0.62, 2.4);
  }

  dispose() {
    this.root.remove();
  }
}
