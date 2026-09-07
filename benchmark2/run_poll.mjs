import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[poll] Starting...');
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
          console.log(`[poll] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore timeout, keep polling
      }
    }

    await page.screenshot({ path: `${OUT_DIR}/poll.png`, type: 'png', timeout: 120000 });
    console.log('[poll] Screenshot saved');
    
  } catch (e) {
    console.log(`[poll] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
