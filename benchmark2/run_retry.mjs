import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[retry] Starting with retries...');
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
          console.log(`[retry] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    // Try screenshot with retries
    for (let attempt = 1; attempt <= 5; attempt++) {
      try {
        const filename = `${OUT_DIR}/retry_${attempt}.png`;
        console.log(`[retry] Attempt ${attempt}: taking screenshot...`);
        await page.screenshot({ path: filename, type: 'png', timeout: 60000 });
        console.log(`[retry] Attempt ${attempt}: success!`);
        break;
      } catch (e) {
        console.log(`[retry] Attempt ${attempt}: ${e.message}`);
        await page.waitForTimeout(3000);
      }
    }
    
  } catch (e) {
    console.log(`[retry] Fatal error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
