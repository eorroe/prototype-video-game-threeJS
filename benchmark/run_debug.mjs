import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[debug] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    console.log(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  try {
    console.log('[debug] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    // Wait a bit for everything to settle
    await page.waitForTimeout(5000);
    
    // Take a screenshot
    await page.screenshot({ path: `${OUT_DIR}/debug_initial.png`, type: 'png' });
    console.log('[debug] Initial screenshot saved');
    
    // Check DOM state
    const dom = await page.evaluate(() => {
      const canvas = document.getElementById('game');
      const blocker = document.getElementById('blocker');
      const ui = document.getElementById('ui');
      const body = document.body;
      return {
        canvas: canvas ? { visible: canvas.offsetWidth > 0, width: canvas.width, height: canvas.height } : null,
        blocker: blocker ? { visible: blocker.offsetWidth > 0, display: getComputedStyle(blocker).display } : null,
        ui: ui ? { visible: ui.offsetWidth > 0 } : null,
        bodyBg: getComputedStyle(body).backgroundColor,
        bodyChildren: body.children.length,
      };
    });
    console.log('[debug] DOM state:', JSON.stringify(dom, null, 2));
    
    // Check WebGL context
    const webgl = await page.evaluate(() => {
      const canvas = document.getElementById('game');
      if (!canvas) return 'no canvas';
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) return 'no webgl context';
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      return {
        renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'unknown',
        version: gl.getParameter(gl.VERSION),
      };
    });
    console.log('[debug] WebGL:', JSON.stringify(webgl, null, 2));

    await page.waitForTimeout(30000);
    await page.screenshot({ path: `${OUT_DIR}/debug_30s.png`, type: 'png' });
    console.log('[debug] 30s screenshot saved');
    
  } catch (e) {
    console.log(`[debug] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
