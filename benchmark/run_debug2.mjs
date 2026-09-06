import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'benchmark/shots';
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5174;

async function main() {
  console.log('[debug2] Starting...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('error') || text.includes('Error') || text.includes('warning') || text.includes('READY')) {
      console.log(`[${msg.type()}] ${text}`);
    }
  });

  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  try {
    console.log('[debug2] Loading page...');
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'domcontentloaded',
      timeout: 180000,
    });

    // Take screenshot immediately
    await page.screenshot({ path: `${OUT_DIR}/debug_immediate.png`, type: 'png', timeout: 10000 });
    console.log('[debug2] Immediate screenshot saved');
    
    // Check for overlays
    const dom = await page.evaluate(() => {
      const all = document.querySelectorAll('*');
      let overlays = [];
      for (const el of all) {
        const style = getComputedStyle(el);
        if ((style.position === 'fixed' || style.position === 'absolute') && 
            (style.zIndex > 100 || style.zIndex === 'auto') &&
            el.id !== 'game') {
          overlays.push({
            id: el.id,
            tag: el.tagName,
            class: el.className,
            zIndex: style.zIndex,
            bg: style.backgroundColor,
            display: style.display,
            visible: el.offsetWidth > 0 && el.offsetHeight > 0,
          });
        }
      }
      return overlays.slice(0, 20);
    });
    console.log('[debug2] Overlays:', JSON.stringify(dom, null, 2));
    
    // Wait for ready
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(1000);
      const ready = await page.evaluate(() => window.__READY__);
      if (ready) {
        console.log(`[debug2] __READY__ after ${(i+1)}s`);
        break;
      }
    }
    
    await page.screenshot({ path: `${OUT_DIR}/debug_ready.png`, type: 'png', timeout: 10000 });
    console.log('[debug2] Ready screenshot saved');
    
    // Check body children count and visibility
    const body = await page.evaluate(() => {
      const body = document.body;
      const game = document.getElementById('game');
      return {
        bodyChildren: body.children.length,
        bodyBg: getComputedStyle(body).backgroundColor,
        gameVisible: game ? (game.offsetWidth > 0 && game.offsetHeight > 0) : false,
        gameDisplay: game ? getComputedStyle(game).display : 'none',
      };
    });
    console.log('[debug2] Body:', JSON.stringify(body, null, 2));
    
  } catch (e) {
    console.log(`[debug2] Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
