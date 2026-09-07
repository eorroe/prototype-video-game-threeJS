import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[simple] Starting...');
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
    console.log('[simple] Loading page without capture params...');
    await page.goto(`http://127.0.0.1:${PORT}/`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    await page.waitForTimeout(5000);
    
    const info = await page.evaluate(() => ({
      ready: window.__READY__,
      prewarm: window.__PREWARM__,
      bodyChildren: document.body.children.length,
    }));
    console.log('[simple] Info:', JSON.stringify(info));

    await page.screenshot({ path: `${OUT_DIR}/simple.png`, type: 'png', timeout: 30000 });
    console.log('[simple] Screenshot saved');
    
  } catch (e) {
    console.log(`[simple] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
