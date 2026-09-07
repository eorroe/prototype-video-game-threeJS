import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;
const TOTAL_SHOTS = 5;

async function main() {
  console.log('[cdp] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  try {
    console.log('[cdp] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[cdp] __READY__ after ${(i+1)}s`);
        break;
      }
    }

    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const filename = `${OUT_DIR}/cdp_${String(i+1).padStart(2,'0')}.png`;
      try {
        await page.screenshot({ path: filename, type: 'png', timeout: 0 });
        console.log(`[cdp] Shot ${i+1} saved`);
      } catch (e) {
        console.log(`[cdp] Shot ${i+1} error: ${e.message}`);
      }
      await page.waitForTimeout(2000);
    }
  } catch (e) {
    console.log(`[cdp] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
