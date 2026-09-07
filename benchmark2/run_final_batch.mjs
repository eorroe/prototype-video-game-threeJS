import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;
const TOTAL_SHOTS = 30;

async function main() {
  console.log('[final] Starting unaltered sample-code screenshot batch...');
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
      waitUntil: 'networkidle',
      timeout: 180000,
    });
    console.log('[final] Page loaded (networkidle)');

    console.log('[final] Waiting for __READY__...');
    await page.waitForFunction(() => window.__READY__, { timeout: 120000 });
    console.log('[final] __READY__ detected');

    for (let i = 0; i < TOTAL_SHOTS; i++) {
      const filename = `${OUT_DIR}/shot_${String(i + 1).padStart(2, '0')}.png`;
      try {
        await page.screenshot({ path: filename, type: 'png', timeout: 120000 });
        console.log(`[final] Shot ${i + 1}/${TOTAL_SHOTS} saved`);
      } catch (e) {
        console.log(`[final] Shot ${i + 1} error: ${e.message}`);
      }
      await page.waitForTimeout(10000);
    }
  } catch (e) {
    console.log(`[final] Fatal error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
