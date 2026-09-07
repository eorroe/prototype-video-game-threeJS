import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[net] Starting with networkidle...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    console.log(`[console] ${msg.text()}`);
  });

  try {
    console.log('[net] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });
    console.log('[net] Page loaded (networkidle)');

    console.log('[net] Waiting for ready...');
    await page.waitForFunction(() => window.__READY__, { timeout: 120000 });
    console.log('[net] Ready!');

    console.log('[net] Taking screenshot...');
    await page.screenshot({ path: `${OUT_DIR}/networkidle.png`, type: 'png', timeout: 120000 });
    console.log('[net] Screenshot saved');
    
  } catch (e) {
    console.log(`[net] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
