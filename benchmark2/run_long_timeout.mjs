import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[long] Starting with long timeouts...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  try {
    console.log('[long] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    console.log('[long] Waiting for ready...');
    await page.waitForFunction(() => window.__READY__, { timeout: 120000 });
    console.log('[long] Ready!');

    console.log('[long] Taking screenshot...');
    await page.screenshot({ path: `${OUT_DIR}/long_timeout.png`, type: 'png', timeout: 120000 });
    console.log('[long] Screenshot saved');
    
  } catch (e) {
    console.log(`[long] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
