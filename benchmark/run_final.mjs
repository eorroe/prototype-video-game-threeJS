import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;
const TOTAL_SHOTS = 5;

async function main() {
  console.log('[final] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  try {
    console.log('[final] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    // Wait for ready
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[final] __READY__ after ${(i+1)}s`);
        break;
      }
    }
    
    // Take screenshots
    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const t = Date.now();
      await page.screenshot({ path: `${OUT_DIR}/final_${String(i+1).padStart(2,'0')}.png`, type: 'png', timeout: 15000 });
      console.log(`[final] Shot ${i+1} saved (${Date.now() - t}ms)`);
      if (i < TOTAL_SHOTS - 1) await page.waitForTimeout(2000);
    }
    
  } catch (e) {
    console.log(`[final] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
