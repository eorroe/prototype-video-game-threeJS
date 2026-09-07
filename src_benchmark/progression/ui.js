import { el, clamp, clamp01, setStyle } from '../ui/util.js';
import { BRANCHES } from './skill-tree.js';

const LAYER_CLASS = 'ow-skills';

const CSS = `
.ow-skills {
  position:absolute; left:50%; top:50%;
  transform: translate(-50%,-50%);
  width: calc(900px * var(--k)); max-width: 96vw;
  max-height: 92vh; overflow-y: auto;
  background: linear-gradient(160deg, rgba(4,6,8,.94) 0%, rgba(4,6,8,.86) 100%);
  backdrop-filter: blur(calc(8px * var(--k))) saturate(.7) brightness(.85);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: calc(6px * var(--k));
  box-shadow: 0 0 calc(40px * var(--k)) rgba(0,0,0,.85), inset 0 0 0 1px rgba(255,255,255,.04);
  padding: calc(var(--u) * 3.5);
  pointer-events: auto;
  font-family: var(--ff);
  color: var(--ink);
  display: none;
}
.ow-skills.open { display: block; }
.ow-skills-head {
  display:flex; align-items:center; justify-content:space-between;
  margin-bottom: calc(var(--u) * 3);
}
.ow-skills-title {
  font-family: var(--fd); font-size: calc(22px * var(--k)); font-weight:700;
  letter-spacing:.25em; text-shadow: var(--sh-o2);
}
.ow-skills-close {
  appearance:none; border:1px solid var(--hair); background:rgba(255,255,255,.04);
  color: var(--ink-2); font-family:var(--ff); font-weight:600; text-transform:uppercase;
  font-size: calc(10px * var(--k)); letter-spacing:.18em;
  padding: calc(var(--u) * 1.3) calc(var(--u) * 2.2);
  cursor:pointer; transition: color .12s, background .12s;
}
.ow-skills-close:hover { color: var(--ink); background: rgba(255,255,255,.08); }
.ow-skills-meta {
  display:flex; gap: calc(var(--u) * 3); margin-bottom: calc(var(--u) * 3);
  font-size: calc(11px * var(--k)); letter-spacing:.18em; color: var(--ink-2);
  text-shadow: var(--sh-o1);
}
.ow-skills-meta b { color: var(--amber); font-family: var(--fm); font-weight:700; }
.ow-branches {
  display:grid; grid-template-columns: repeat(5, 1fr); gap: calc(var(--u) * 2);
}
.ow-branch {
  background: rgba(6,10,13,.55);
  border: 1px solid var(--hair-2);
  border-radius: calc(4px * var(--k));
  padding: calc(var(--u) * 2);
  display:flex; flex-direction:column; gap: calc(var(--u) * 1.4);
}
.ow-branch-head {
  font-size: calc(11px * var(--k)); letter-spacing:.22em; font-weight:700;
  text-align:center; text-shadow: var(--sh-o1);
}
.ow-node {
  position:relative; display:flex; align-items:center; gap: calc(var(--u) * 1.4);
  padding: calc(var(--u) * 1.1) calc(var(--u) * 1.4);
  background: rgba(4,8,11,.55);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: calc(3px * var(--k));
  cursor:pointer; transition: background .1s, border-color .1s;
}
.ow-node:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.18); }
.ow-node.locked { opacity:.5; cursor:not-allowed; }
.ow-node.unlocked { border-color: rgba(255,255,255,.22); background: rgba(255,255,255,.04); }
.ow-node-icon {
  width: calc(18px * var(--k)); height: calc(18px * var(--k));
  display:flex; align-items:center; justify-content:center;
  font-size: calc(14px * var(--k)); font-weight:700;
  text-shadow: 0 0 calc(6px * var(--k)) currentColor;
}
.ow-node-body { flex:1; min-width:0; }
.ow-node-lbl {
  font-size: calc(10.5px * var(--k)); letter-spacing:.16em; font-weight:700;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.ow-node-desc {
  font-size: calc(9px * var(--k)); letter-spacing:.12em; color: var(--ink-2);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.ow-node-cost {
  font-family: var(--fm); font-size: calc(10px * var(--k)); color: var(--amber);
  text-shadow: var(--sh-o1); white-space:nowrap;
}
.ow-node.active .ow-node-icon { animation: ow-pulse 1.4s ease-in-out infinite; }
@keyframes ow-pulse {
  0%,100% { opacity:1; transform: scale(1); }
  50% { opacity:.55; transform: scale(1.25); }
}
.ow-skills-foot {
  margin-top: calc(var(--u) * 2.5);
  display:flex; justify-content:space-between; align-items:center;
  font-size: calc(10.5px * var(--k)); letter-spacing:.16em; color: var(--ink-2);
  text-shadow: var(--sh-o1);
}
.ow-btn-respec {
  appearance:none; border:1px solid var(--red); background:rgba(141,15,10,.18);
  color: var(--red); font-family:var(--ff); font-weight:600; text-transform:uppercase;
  font-size: calc(10px * var(--k)); letter-spacing:.18em;
  padding: calc(var(--u) * 1.4) calc(var(--u) * 3);
  cursor:pointer; transition: background .12s;
}
.ow-btn-respec:hover { background:rgba(141,15,10,.38); }
.ow-btn-respec:disabled { opacity:.35; cursor:not-allowed; }
`;

export class SkillTreePanel {
  constructor(host, ctx) {
    this.ctx = ctx;
    this.host = host;
    this.open = false;
    this._build();
  }

  _build() {
    this.root = el('div', LAYER_CLASS, this.host);
    this.root.innerHTML = `
      <style>${CSS}</style>
      <div class="ow-skills-head">
        <div class="ow-skills-title">EVOLUTION TREE</div>
        <button class="ow-skills-close">Close</button>
      </div>
      <div class="ow-skills-meta">
        <span>Level <b data-m="level">1</b></span>
        <span>XP <b data-m="xp">0</b>/<b data-m="xpNeed">100</b></span>
        <span>Points <b data-m="points">1</b></span>
        <span>Energy <b data-m="energy">100</b>/<b data-m="energyMax">100</b></span>
      </div>
      <div class="ow-branches" data-role="branches"></div>
      <div class="ow-skills-foot">
        <span data-m="status"></span>
        <button class="ow-btn-respec" data-act="respec">Respec</button>
      </div>
    `;
    this._branchesEl = this.root.querySelector('[data-role="branches"]');
    this._closeBtn = this.root.querySelector('.ow-skills-close');
    this._respecBtn = this.root.querySelector('[data-act="respec"]');
    this._meta = {};
    for (const k of ['level', 'xp', 'xpNeed', 'points', 'energy', 'energyMax', 'status']) {
      this._meta[k] = this.root.querySelector(`[data-m="${k}"]`);
    }
    this._closeBtn.addEventListener('click', () => this.toggle(false));
    this._respecBtn.addEventListener('click', () => this._respec());
    this._renderBranches();
  }

  _renderBranches() {
    this._branchesEl.innerHTML = '';
    for (const branch of Object.values(BRANCHES)) {
      const col = el('div', 'ow-branch', this._branchesEl);
      col.innerHTML = `<div class="ow-branch-head" style="color:${branch.color}">${branch.icon} ${branch.label}</div>`;
      for (const node of branch.nodes) {
        const row = el('div', 'ow-node', col);
        row.dataset.nodeId = node.id;
        row.innerHTML = `
          <div class="ow-node-icon" style="color:${branch.color}">${branch.icon}</div>
          <div class="ow-node-body">
            <div class="ow-node-lbl">${node.label}</div>
            <div class="ow-node-desc">${node.description}</div>
          </div>
          <div class="ow-node-cost">${node.cost}pt</div>
        `;
        row.addEventListener('click', () => this._onNodeClick(node));
      }
    }
  }

  _onNodeClick(node) {
    const prog = this.ctx.get('progression');
    if (!prog) return;
    if (prog.unlockedNodes.has(node.id)) return;
    prog.spendSkillPoint(node.id);
  }

  _respec() {
    const prog = this.ctx.get('progression');
    if (!prog) return;
    prog.respec();
  }

  toggle(v) {
    this.open = typeof v === 'boolean' ? v : !this.open;
    if (this.open) this.root.classList.add('open');
    else this.root.classList.remove('open');
    this._sync();
  }

  update(dt, ctx) {
    this._sync();
  }

  _sync() {
    const prog = this.ctx.peek('progression');
    if (!prog) return;
    const s = prog.getHudState();
    this._meta.level.textContent = s.level;
    this._meta.xp.textContent = Math.floor(s.xp);
    this._meta.xpNeed.textContent = xpForLevel(s.level);
    this._meta.points.textContent = s.skillPoints;
    this._meta.energy.textContent = Math.floor(s.evolutionEnergy);
    this._meta.energyMax.textContent = s.maxEvolutionEnergy;
    this._meta.status.textContent = s.skillPoints > 0 ? `${s.skillPoints} point${s.skillPoints > 1 ? 's' : ''} available` : '';
    this._respecBtn.disabled = !s.canRespec;
    for (const row of this._branchesEl.querySelectorAll('.ow-node')) {
      const id = row.dataset.nodeId;
      const isUnlocked = prog.unlockedNodes.has(id);
      row.classList.toggle('unlocked', isUnlocked);
      row.classList.toggle('locked', !isUnlocked);
      row.classList.toggle('active', isUnlocked);
    }
  }

  dispose() {
    this.root?.remove();
  }
}

function xpForLevel(level) {
  if (level >= 50) return Infinity;
  return Math.floor(100 * Math.pow(level, 1.8));
}
