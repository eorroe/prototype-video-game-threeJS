import { chromium } from 'playwright';

const PORT = 5175;

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  try {
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });

    for (let i = 0; i < 120; i++) {
      await page.waitForTimeout(1000);
      try {
        const data = await page.evaluate(() => ({
          ready: window.__READY__,
          frame: window.__ENGINE__?.time?.frame,
          exposure: window.__ENGINE__?.config?.exposure,
          uLookW: window.__ENGINE__?.ctx?.peek('render')?.composite?.uniforms?.uLook?.value?.w,
        }), { timeout: 5000 });
        
        console.log(`t=${(i+1)}s: ready=${data.ready}, frame=${data.frame}, exposure=${data.exposure}, uLook.w=${data.uLookW}`);
        
        if (data.ready) break;
      } catch (e) {
        // ignore
      }
    }
    
  } catch (e) {
    console.log(`Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
