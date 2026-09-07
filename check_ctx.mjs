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

    await page.waitForTimeout(5000);

    const info = await page.evaluate(() => {
      const engine = window.__ENGINE__;
      const render = engine.ctx.peek('render');
      
      return {
        engineConfigExposure: engine?.config?.exposure,
        renderCtxConfigExposure: render?.ctx?.config?.exposure,
        renderCtxIsEngineCtx: render?.ctx === engine?.ctx,
        renderCtxConfigIsEngineConfig: render?.ctx?.config === engine?.config,
      };
    });
    console.log('Ctx info:', JSON.stringify(info, null, 2));
    
  } catch (e) {
    console.log(`Error: ${e.message}`);
  } finally {
    await browser.close();
  }
}

main();
