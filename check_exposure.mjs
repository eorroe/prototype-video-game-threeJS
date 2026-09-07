import { chromium } from 'playwright';

const PORT = 5175;

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('READY') || text.includes('exposure') || text.includes('Error')) {
      console.log(`[console] ${text}`);
    }
  });

  try {
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1&shot=hero&prewarm=0`, {
      waitUntil: 'networkidle',
      timeout: 180000,
    });

    for (let i = 0; i < 120; i++) {
      await page.waitForTimeout(1000);
      try {
        const ready = await page.evaluate(() => window.__READY__, { timeout: 5000 });
        if (ready) {
          console.log(`__READY__ after ${(i+1)}s`);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    const exposure = await page.evaluate(() => {
      const engine = window.__ENGINE__;
      const render = engine.ctx.peek('render');
      return {
        configExposure: engine?.config?.exposure,
        settingsExposureBias: render?.settings?.exposureBias,
        lookW: render?.composite?.uniforms?.uLook?.value?.w,
        exposureTexture: render?.exposureTexture?.value?.r,
      };
    });
    console.log('Exposure info:', JSON.stringify(exposure, null, 2));
    
  } catch (e) {
    console.log(`Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
