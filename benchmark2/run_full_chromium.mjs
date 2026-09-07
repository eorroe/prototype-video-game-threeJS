import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[full] Starting with full Chromium...');
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

    await page.waitForTimeout(5000);
    
    console.log('[full] Taking screenshot...');
    await page.screenshot({ path: `${OUT_DIR}/full_chromium.png`, type: 'png', timeout: 30000 });
    console.log('[full] Screenshot saved');
    
  } catch (e) {
    console.log(`[full] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
