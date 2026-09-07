import sharp from 'sharp';
import { readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const framesDir = join(__dirname, 'references/frames');

const files = readdirSync(framesDir)
  .filter(f => f.endsWith('.jpg') || f.endsWith('.JPG'))
  .sort((a, b) => {
    const na = parseInt(a.match(/\d+/)[0]);
    const nb = parseInt(b.match(/\d+/)[0]);
    return na - nb;
  });

console.log(`Found ${files.length} frame files`);

const results = [];

for (const file of files) {
  const frameNum = parseInt(file.match(/\d+/)[0]);
  const filepath = join(framesDir, file);
  
  try {
    const metadata = await sharp(filepath).metadata();
    const w = metadata.width;
    const h = metadata.height;
    
    // More focused bottom-right region for ammo panel
    // Based on CSS: right: ~17px, bottom: ~17px at 1080p
    // Panel width: ~112px, so region is roughly rightmost 140px, bottommost 220px
    const cropW = Math.floor(w * 0.14);  // ~180px at 1280
    const cropH = Math.floor(h * 0.32);  // ~230px at 720
    const cropX = w - cropW;
    const cropY = h - cropH;
    
    const { data } = await sharp(filepath)
      .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    let brightPixels = 0;
    let totalPixels = data.length / 3;
    let whitePixels = 0;
    let amberPixels = 0;
    let redPixels = 0;
    let cyanPixels = 0;
    let veryBrightPixels = 0;
    
    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;
      
      if (brightness > 180) brightPixels++;
      if (brightness > 220) veryBrightPixels++;
      if (r > 200 && g > 200 && b > 200) whitePixels++;
      if (r > 220 && g > 160 && b < 100 && g > r * 0.7) amberPixels++;
      if (r > 200 && g < 100 && b < 100 && r > g * 1.5) redPixels++;
      if (r < 120 && g > 180 && b > 200) cyanPixels++;
    }
    
    const brightPct = (brightPixels / totalPixels) * 100;
    const whitePct = (whitePixels / totalPixels) * 100;
    const veryBrightPct = (veryBrightPixels / totalPixels) * 100;
    
    // Also check bottom-left for health HUD
    const blCropW = Math.floor(w * 0.22);
    const blCropH = Math.floor(h * 0.25);
    const { data: blData } = await sharp(filepath)
      .extract({ left: 0, top: h - blCropH, width: blCropW, height: blCropH })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    let blBrightPixels = 0;
    for (let i = 0; i < blData.length; i += 3) {
      const r = blData[i];
      const g = blData[i + 1];
      const b = blData[i + 2];
      if ((r + g + b) / 3 > 150) blBrightPixels++;
    }
    const blBrightPct = (blBrightPixels / (blData.length / 3)) * 100;
    
    // Check center for crosshair
    const ccCropW = Math.floor(w * 0.08);
    const ccCropH = Math.floor(h * 0.08);
    const { data: ccData } = await sharp(filepath)
      .extract({ left: Math.floor(w/2 - ccCropW/2), top: Math.floor(h/2 - ccCropH/2), width: ccCropW, height: ccCropH })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    let ccBrightPixels = 0;
    for (let i = 0; i < ccData.length; i += 3) {
      const r = ccData[i];
      const g = ccData[i + 1];
      const b = ccData[i + 2];
      if ((r + g + b) / 3 > 150) ccBrightPixels++;
    }
    const ccBrightPct = (ccBrightPixels / (ccData.length / 3)) * 100;
    
    results.push({
      frame: frameNum,
      filename: file,
      dimensions: `${w}x${h}`,
      bottomRightBrightPct: +brightPct.toFixed(2),
      bottomRightVeryBrightPct: +veryBrightPct.toFixed(2),
      bottomRightWhitePct: +whitePct.toFixed(2),
      amberPixels,
      redPixels,
      cyanPixels,
      bottomLeftBrightPct: +blBrightPct.toFixed(2),
      crosshairBrightPct: +ccBrightPct.toFixed(2),
      likelyHud: brightPct > 1.5 || whitePct > 0.5 || amberPixels > 10 || redPixels > 10 || blBrightPct > 5,
      brightPixels,
      totalPixels: Math.floor(totalPixels)
    });
    
  } catch (e) {
    results.push({ frame: frameNum, filename: file, error: e.message });
  }
}

console.log('\n=== HUD Analysis Results ===\n');
const withHud = results.filter(r => r.likelyHud);
const withoutHud = results.filter(r => !r.likelyHud && !r.error);

console.log(`Frames likely WITH HUD: ${withHud.length}`);
if (withHud.length > 0) {
  console.log('Frames:', withHud.map(r => `prototype_${String(r.frame).padStart(4, '0')}.jpg (br: ${r.bottomRightBrightPct}%, bl: ${r.bottomLeftBrightPct}%, cc: ${r.crosshairBrightPct}%)`).join('\n  '));
}

console.log(`\nFrames likely WITHOUT HUD: ${withoutHud.length}`);
if (withoutHud.length > 0 && withoutHud.length <= 30) {
  console.log('First 30:', withoutHud.map(r => `prototype_${String(r.frame).padStart(4, '0')}.jpg`).join(', '));
}

if (withHud.length > 0) {
  console.log('\n=== Detailed HUD Frames ===');
  for (const r of withHud) {
    console.log(`\nFrame ${r.frame} (${r.filename}):`);
    console.log(`  Bottom-right bright: ${r.bottomRightBrightPct}%, very bright: ${r.bottomRightVeryBrightPct}%, white: ${r.bottomRightWhitePct}%`);
    console.log(`  Amber: ${r.amberPixels}, Red: ${r.redPixels}, Cyan: ${r.cyanPixels}`);
    console.log(`  Bottom-left bright: ${r.bottomLeftBrightPct}%, Crosshair: ${r.crosshairBrightPct}%`);
  }
}

writeFileSync(join(__dirname, 'hud_analysis_results2.json'), JSON.stringify(results, null, 2));
console.log('\nFull results saved to hud_analysis_results2.json');
