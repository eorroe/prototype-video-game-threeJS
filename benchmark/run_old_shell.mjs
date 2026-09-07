import { chromium } from 'playwright';

const PORT = 5174;

async function main() {
  console.log('[old] Starting with old headless shell...');
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
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[old] __READY__ after ${(i+1)}s`);
        break;
      }
    }

    console.log('[old] Taking screenshot...');
    await page.screenshot({ path: 'benchmark/shots/old_shell.png', type: 'png', timeout: 30000 });
    console.log('[old] Screenshot saved');
    
  } catch (e) {
    console.log(`[old] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
