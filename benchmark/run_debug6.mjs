import { chromium } from 'playwright';

const PORT = 5174;

async function main() {
  console.log('[debug6] Checking body/canvas styles...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => console.log(`[${msg.type()}] ${msg.text()}`));

  try {
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });
    
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[debug6] __READY__ after ${(i+1)}s`);
        break;
      }
    }
    
    const styles = await page.evaluate(() => {
      const body = document.body;
      const canvas = document.getElementById('game');
      const html = document.documentElement;
      return {
        body: {
          bg: getComputedStyle(body).backgroundColor,
          margin: getComputedStyle(body).margin,
          overflow: getComputedStyle(body).overflow,
        },
        html: {
          bg: getComputedStyle(html).backgroundColor,
          margin: getComputedStyle(html).margin,
        },
        canvas: {
          display: getComputedStyle(canvas).display,
          position: getComputedStyle(canvas).position,
          width: canvas.width,
          height: canvas.height,
          styleWidth: canvas.style.width,
          styleHeight: canvas.style.height,
          offsetWidth: canvas.offsetWidth,
          offsetHeight: canvas.offsetHeight,
        }
      };
    });
    console.log('[debug6] Styles:', JSON.stringify(styles, null, 2));
    
  } catch (e) {
    console.log(`[debug6] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
