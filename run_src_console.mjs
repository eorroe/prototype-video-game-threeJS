import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const PORT = 5175;

async function main() {
  console.log('[console] Capturing console output...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  const logs = [];
  page.on('console', msg => {
    logs.push(`[${msg.type()}] ${msg.text()}`);
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
          console.log(`[console] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    await page.waitForTimeout(5000);
    
    writeFileSync('src_benchmark/shots/console.log', logs.join('\n'));
    console.log(`[console] Saved ${logs.length} log lines`);
    
    await page.screenshot({ path: 'src_benchmark/shots/console_shot.png', type: 'png', timeout: 120000 });
    console.log('[console] Screenshot saved');
    
  } catch (e) {
    console.log(`[console] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
