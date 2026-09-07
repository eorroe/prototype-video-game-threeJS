import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[cdp2] Starting...');
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
          console.log(`[cdp2] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    console.log('[cdp2] Taking CDP screenshot...');
    const client = await page.context().newCDPSession(page);
    const { data } = await client.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false,
    });
    writeFileSync(`${OUT_DIR}/cdp_direct2.png`, Buffer.from(data, 'base64'));
    console.log('[cdp2] CDP screenshot saved');
    
  } catch (e) {
    console.log(`[cdp2] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
