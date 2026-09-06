import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[debug4] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    console.log(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  try {
    console.log('[debug4] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });
    
    // Wait for ready
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[debug4] __READY__ after ${(i+1)}s`);
        break;
      }
    }
    
    // Check WebGL framebuffer
    const glInfo = await page.evaluate(() => {
      const canvas = document.getElementById('game');
      if (!canvas) return 'no canvas';
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) return 'no webgl';
      
      const pixels = new Uint8Array(4);
      gl.readPixels(640, 360, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      
      return {
        centerPixel: Array.from(pixels),
        status: gl.getParameter(gl.FRAMEBUFFER_STATUS),
        error: gl.getError(),
      };
    });
    console.log('[debug4] WebGL center pixel:', JSON.stringify(glInfo));
    
    await page.screenshot({ path: `${OUT_DIR}/debug_gl.png`, type: 'png', timeout: 30000 });
    console.log('[debug4] Screenshot saved');
    
  } catch (e) {
    console.log(`[debug4] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
