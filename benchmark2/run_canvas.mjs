import { chromium } from 'playwright';

const OUT_DIR = 'benchmark2/shots';

const PORT = 5174;

async function main() {
  console.log('[canvas] Starting...');
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

    await page.waitForTimeout(10000);
    
    // Try to screenshot just the canvas element
    const canvas = await page.$('canvas');
    if (canvas) {
      console.log('[canvas] Found canvas, taking element screenshot...');
      await canvas.screenshot({ path: `${OUT_DIR}/canvas_only.png`, type: 'png', timeout: 30000 });
      console.log('[canvas] Canvas screenshot saved');
    } else {
      console.log('[canvas] No canvas found');
    }
    
  } catch (e) {
    console.log(`[canvas] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
