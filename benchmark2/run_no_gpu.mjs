import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[nogpu] Starting with --disable-gpu...');
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--disable-gpu', '--disable-software-rasterizer']
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
    
    console.log('[nogpu] Taking screenshot...');
    await page.screenshot({ path: `${OUT_DIR}/no_gpu.png`, type: 'png', timeout: 30000 });
    console.log('[nogpu] Screenshot saved');
    
  } catch (e) {
    console.log(`[nogpu] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
