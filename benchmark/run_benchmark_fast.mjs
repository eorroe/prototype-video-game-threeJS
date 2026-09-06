import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { dirname } from 'path';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;
const DURATION = 5 * 60 * 1000;
const INTERVAL = 10 * 1000;
const TOTAL_SHOTS = 30;

async function main() {
  console.log(`[benchmark-fast] Testing with ?prewarm=0...`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('__READY__') || text.includes('prewarm') || text.includes('boot') || text.includes('error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  const startTime = Date.now();
  let ready = false;
  let readyTime = 0;

  try {
    console.log(`[benchmark-fast] Loading page with ?prewarm=0...`);
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    for (let i = 0; i < 180; i++) {
      await page.waitForTimeout(1000);
      ready = await page.evaluate(() => window.__READY__ === true);
      if (ready) {
        readyTime = Date.now() - startTime;
        console.log(`[benchmark-fast] __READY__ at ${readyTime}ms`);
        break;
      }
    }

    if (!ready) {
      console.log(`[benchmark-fast] TIMEOUT: __READY__ not set within 180s`);
    }

    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const shotTime = Date.now() - startTime;
      const filename = `${OUT_DIR}/sample_prewarm0_${String(i + 1).padStart(2, '0')}_${String(shotTime).padStart(6, '0')}ms.png`;
      
      try {
        await page.screenshot({ path: filename, type: 'png', timeout: 60000 });
        console.log(`[benchmark-fast] Shot ${i + 1}/${TOTAL_SHOTS} saved: ${filename} (t=${shotTime}ms)`);
      } catch (e) {
        console.log(`[benchmark-fast] Shot ${i + 1} error: ${e.message}`);
      }

      if (i < TOTAL_SHOTS - 1) {
        await page.waitForTimeout(INTERVAL);
      }
    }

    console.log(`[benchmark-fast] Complete. Ready time: ${readyTime}ms`);
  } catch (e) {
    console.log(`[benchmark-fast] Fatal error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
