import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark2/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[puppeteer] Starting...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: '/home/agent_31ed5e5f-d0ff-47b8-87c6-9147117955f1/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('prewarm') || text.includes('error') || text.includes('Error')) {
      console.log(`[console] ${text}`);
    }
  });

  try {
    console.log('[puppeteer] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle0',
      timeout: 180000,
    });

    for (let i = 0; i < 120; i++) {
      await page.waitForTimeout(1000);
      try {
        const ready = await page.evaluate(() => window.__READY__);
        if (ready) {
          console.log(`[puppeteer] __READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    await page.screenshot({ path: `${OUT_DIR}/puppeteer.png`, type: 'png' });
    console.log('[puppeteer] Screenshot saved');
    
  } catch (e) {
    console.log(`[puppeteer] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
