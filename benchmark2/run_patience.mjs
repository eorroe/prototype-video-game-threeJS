import { chromium } from 'playwright';

const PORT = 5174;

async function main() {
  console.log('[patience] Starting...');
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
    await page.goto(`http://127.0.0.1:${PORT}/`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    await page.waitForTimeout(10000);
    console.log('[patience] Taking screenshot with no timeout...');
    const start = Date.now();
    await page.screenshot({ path: 'benchmark2/shots/patience.png', type: 'png', timeout: 0 });
    console.log(`[patience] Screenshot saved in ${Date.now() - start}ms`);
  } catch (e) {
    console.log(`[patience] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
