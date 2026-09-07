import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[debug5] Starting WITH prewarm...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('error') || text.includes('Error') || text.includes('warning') || text.includes('READY') || text.includes('prewarm')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  try {
    console.log('[debug5] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });
    
    // Wait for ready
    for (let i = 0; i < 120; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[debug5] __READY__ after ${(i+1)}s`);
        break;
      }
    }
    
    const prewarm = await page.evaluate(() => window.__PREWARM__);
    console.log('[debug5] Prewarm:', JSON.stringify(prewarm));
    
    await page.screenshot({ path: `${OUT_DIR}/debug_prewarm.png`, type: 'png', timeout: 30000 });
    console.log('[debug5] Screenshot saved');
    
  } catch (e) {
    console.log(`[debug5] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
