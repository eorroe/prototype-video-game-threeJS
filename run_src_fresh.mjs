import { chromium } from 'playwright';

const PORT = 5175;

async function main() {
  console.log('[fresh] Starting fresh browser per shot...');
  
  for (let i = 0; i < 5; i++) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

    page.on('console', msg => {
      const text = msg.text();
      if (text.includes('READY') || text.includes('error') || text.includes('Error')) {
        console.log(`[shot${i+1}] ${text}`);
      }
    });

    try {
      await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
        waitUntil: 'networkidle',
        timeout: 180000,
      });

      for (let j = 0; j < 120; j++) {
        await page.waitForTimeout(1000);
        try {
          const ready = await page.evaluate(() => window.__READY__, { timeout: 5000 });
          if (ready) {
            console.log(`[shot${i+1}] __READY__ after ${(j+1)}s`);
            break;
          }
        } catch (e) {
          // ignore
        }
      }

      const filename = `src_benchmark/shots/fresh_${String(i + 1).padStart(2, '0')}.png`;
      await page.screenshot({ path: filename, type: 'png', timeout: 120000 });
      console.log(`[shot${i+1}] Saved`);
    } catch (e) {
      console.log(`[shot${i+1}] Error: ${e.message}`);
    } finally {
      await browser.close();
    }
  }
}

main();
