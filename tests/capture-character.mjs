import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const PORT = 5173;
const OUT = resolve(import.meta.dirname, 'char-test.png');

async function ensureServer() {
  const p = spawn(resolve(ROOT, 'node_modules/.bin/vite'), ['--port', String(PORT), '--strictPort'], {
    cwd: ROOT,
    stdio: 'ignore',
    env: { ...process.env, OW_NO_HMR: '1' },
  });
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 250));
    try {
      const s = await fetch(`http://127.0.0.1:${PORT}/tests/character.html`).catch(() => null);
      if (s) return p;
    } catch {}
  }
  p.kill();
  throw new Error('vite failed to start');
}

const server = await ensureServer();
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

await page.goto(`http://127.0.0.1:${PORT}/tests/character.html`, { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForFunction('window.__READY__ === true', null, { timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: OUT, type: 'png' });
console.log('Character test screenshot saved to', OUT);

await browser.close();
if (server) server.kill();
