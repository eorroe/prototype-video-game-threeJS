import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[notimeout] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  try {
    await page.goto(`http://127.0.0.1:${PORT}/`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    await page.waitForTimeout(8000);
    
    console.log('[notimeout] Taking screenshot with no timeout...');
    const start = Date.now();
    await page.screenshot({ path: `${OUT_DIR}/no_timeout.png`, type: 'png', timeout: 0 });
    console.log(`[notimeout] Screenshot saved in ${Date.now() - start}ms`);
    
  } catch (e) {
    console.log(`[notimeout] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
