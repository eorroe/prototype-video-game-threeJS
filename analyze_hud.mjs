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
    
    // Crop bottom-right region where HUD ammo appears
    const cropW = Math.floor(w * 0.28);
    const cropH = Math.floor(h * 0.35);
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
    
    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;
      
      if (brightness > 180) brightPixels++;
      if (r > 200 && g > 200 && b > 200) whitePixels++;
      if (r > 200 && g > 150 && b < 80) amberPixels++;
      if (r > 200 && g < 80 && b < 80) redPixels++;
      if (r < 100 && g > 180 && b > 220) cyanPixels++;
    }
    
    const brightPct = (brightPixels / totalPixels) * 100;
    const whitePct = (whitePixels / totalPixels) * 100;
    
    // Also check top-right for killfeed
    const krCropH = Math.floor(h * 0.25);
    const krCropW = Math.floor(w * 0.30);
    const { data: krData } = await sharp(filepath)
      .extract({ left: w - krCropW, top: 0, width: krCropW, height: krCropH })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    let krBrightPixels = 0;
    for (let i = 0; i < krData.length; i += 3) {
      const r = krData[i];
      const g = krData[i + 1];
      const b = krData[i + 2];
      if ((r + g + b) / 3 > 150) krBrightPixels++;
    }
    const krBrightPct = (krBrightPixels / (krData.length / 3)) * 100;
    
    results.push({
      frame: frameNum,
      filename: file,
      dimensions: `${w}x${h}`,
      bottomRightBrightPct: +brightPct.toFixed(2),
      bottomRightWhitePct: +whitePct.toFixed(2),
      amberPixels,
      redPixels,
      cyanPixels,
      topRightBrightPct: +krBrightPct.toFixed(2),
      likelyHud: brightPct > 3 || whitePct > 1 || krBrightPct > 5,
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
  console.log('Frames:', withHud.map(r => `prototype_${String(r.frame).padStart(4, '0')}.jpg`).join(', '));
}

console.log(`\nFrames likely WITHOUT HUD: ${withoutHud.length}`);
if (withoutHud.length > 0 && withoutHud.length <= 30) {
  console.log('Frames:', withoutHud.map(r => `prototype_${String(r.frame).padStart(4, '0')}.jpg`).join(', '));
}

if (withHud.length > 0) {
  console.log('\n=== Detailed HUD Frames ===');
  for (const r of withHud) {
    console.log(`\nFrame ${r.frame} (${r.filename}):`);
    console.log(`  Bottom-right bright: ${r.bottomRightBrightPct}%, white: ${r.bottomRightWhitePct}%`);
    console.log(`  Amber: ${r.amberPixels}, Red: ${r.redPixels}, Cyan: ${r.cyanPixels}`);
    console.log(`  Top-right bright: ${r.topRightBrightPct}%`);
  }
}

writeFileSync(join(__dirname, 'hud_analysis_results.json'), JSON.stringify(results, null, 2));
console.log('\nFull results saved to hud_analysis_results.json');
