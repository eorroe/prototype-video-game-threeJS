import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[debug3] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    console.log(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  try {
    console.log('[debug3] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });
    console.log('[debug3] Page loaded (networkidle)');
    
    // Wait for engine to be ready
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[debug3] __READY__ after ${(i+1)}s`);
        break;
      }
    }
    
    console.log('[debug3] Taking screenshot...');
    await page.screenshot({ path: `${OUT_DIR}/debug_final.png`, type: 'png', timeout: 30000 });
    console.log('[debug3] Screenshot saved');
    
  } catch (e) {
    console.log(`[debug3] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
