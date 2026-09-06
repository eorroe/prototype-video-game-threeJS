import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { dirname } from 'path';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;
const DURATION = 5 * 60 * 1000; // 5 minutes
const INTERVAL = 10 * 1000; // 10 seconds
const TOTAL_SHOTS = 30;

async function main() {
  console.log(`[benchmark] Starting sample-code benchmark...`);
  console.log(`[benchmark] Port: ${PORT}`);
  console.log(`[benchmark] Duration: ${DURATION / 1000}s, Interval: ${INTERVAL / 1000}s, Total shots: ${TOTAL_SHOTS}`);

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
    console.log(`[benchmark] Loading page...`);
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    // Wait for __READY__ or timeout
    for (let i = 0; i < 180; i++) {
      await page.waitForTimeout(1000);
      ready = await page.evaluate(() => window.__READY__ === true);
      if (ready) {
        readyTime = Date.now() - startTime;
        console.log(`[benchmark] __READY__ at ${readyTime}ms`);
        break;
      }
    }

    if (!ready) {
      console.log(`[benchmark] TIMEOUT: __READY__ not set within 180s`);
    }

    // Take screenshots
    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const shotTime = Date.now() - startTime;
      const filename = `${OUT_DIR}/sample_${String(i + 1).padStart(2, '0')}_${String(shotTime).padStart(6, '0')}ms.png`;
      
      try {
        await page.screenshot({ path: filename, type: 'png', timeout: 60000 });
        console.log(`[benchmark] Shot ${i + 1}/${TOTAL_SHOTS} saved: ${filename} (t=${shotTime}ms)`);
      } catch (e) {
        console.log(`[benchmark] Shot ${i + 1} error: ${e.message}`);
      }

      if (i < TOTAL_SHOTS - 1) {
        await page.waitForTimeout(INTERVAL);
      }
    }

    console.log(`[benchmark] Complete. Ready time: ${readyTime}ms`);
  } catch (e) {
    console.log(`[benchmark] Fatal error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
