import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[fullh] Starting with full Chromium headless...');
  const browser = await chromium.launch({ 
    headless: true,
    executablePath: '/home/agent_31ed5e5f-d0ff-47b8-87c6-9147117955f1/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
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
          console.log(`[fullh] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    console.log('[fullh] Taking screenshot...');
    await page.screenshot({ path: `${OUT_DIR}/full_headless.png`, type: 'png', timeout: 120000 });
    console.log('[fullh] Screenshot saved');
    
  } catch (e) {
    console.log(`[fullh] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
