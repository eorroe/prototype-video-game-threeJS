import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'src_benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5175;
const TOTAL_SHOTS = 5;

async function main() {
  console.log('[src] Starting src capture...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  try {
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });

    for (let i = 0; i < 120; i++) {
      await page.waitForTimeout(1000);
      try {
        const ready = await page.evaluate(() => window.__READY__, { timeout: 5000 });
        if (ready) {
          console.log(`[src] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const filename = `${OUT_DIR}/src_${String(i + 1).padStart(2, '0')}.png`;
      try {
        await page.screenshot({ path: filename, type: 'png', timeout: 120000 });
        console.log(`[src] Shot ${i + 1}/${TOTAL_SHOTS} saved`);
      } catch (e) {
        console.log(`[src] Shot ${i + 1} error: ${e.message}`);
      }
      await page.waitForTimeout(10000);
    }
  } catch (e) {
    console.log(`[src] Fatal error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
