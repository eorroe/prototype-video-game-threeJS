import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;
const TOTAL_SHOTS = 30;

async function main() {
  console.log('[30] Starting 30-shot batch with q=low...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  try {
    console.log('[30] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0&q=low`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });

    for (let i = 0; i < 120; i++) {
      await page.waitForTimeout(1000);
      try {
        const ready = await page.evaluate(() => window.__READY__, { timeout: 5000 });
        if (ready) {
          console.log(`[30] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const filename = `${OUT_DIR}/shot_${String(i + 1).padStart(2, '0')}.png`;
      try {
        await page.screenshot({ path: filename, type: 'png', timeout: 120000 });
        console.log(`[30] Shot ${i + 1}/${TOTAL_SHOTS} saved`);
      } catch (e) {
        console.log(`[30] Shot ${i + 1} error: ${e.message}`);
      }
      await page.waitForTimeout(10000);
    }
  } catch (e) {
    console.log(`[30] Fatal error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
