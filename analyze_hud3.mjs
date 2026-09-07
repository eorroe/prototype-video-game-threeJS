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
    
    // Precise ammo panel region in bottom-right
    const cropW = Math.floor(w * 0.16);  
    const cropH = Math.floor(h * 0.30);  
    const cropX = w - cropW;
    const cropY = h - cropH;
    
    const { data } = await sharp(filepath)
      .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    let brightPixels = 0;
    let totalPixels = data.length / 3;
    let whitePixels = 0;
    let veryBrightPixels = 0;
    let darkPixels = 0;
    
    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;
      
      if (brightness > 200) brightPixels++;
      if (brightness > 230) veryBrightPixels++;
      if (r > 210 && g > 210 && b > 210) whitePixels++;
      if (brightness < 40) darkPixels++;
    }
    
    const brightPct = (brightPixels / totalPixels) * 100;
    const veryBrightPct = (veryBrightPixels / totalPixels) * 100;
    const whitePct = (whitePixels / totalPixels) * 100;
    const darkPct = (darkPixels / totalPixels) * 100;
    
    // Check center-bottom for weapon model (first-person view)
    // The weapon model is typically in the lower-center of the screen
    const wmCropW = Math.floor(w * 0.35);
    const wmCropH = Math.floor(h * 0.30);
    const wmCropX = Math.floor(w * 0.30);
    const wmCropY = Math.floor(h * 0.55);
    
    const { data: wmData } = await sharp(filepath)
      .extract({ left: wmCropX, top: wmCropY, width: wmCropW, height: wmCropH })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    let wmEdgePixels = 0;
    let wmBrightPixels = 0;
    // Look for high-contrast edges (weapon silhouette)
    for (let y = 0; y < wmCropH; y++) {
      for (let x = 0; x < wmCropW; x++) {
        const idx = (y * wmCropW + x) * 3;
        const r = wmData[idx];
        const g = wmData[idx + 1];
        const b = wmData[idx + 2];
        const brightness = (r + g + b) / 3;
        
        if (brightness > 150) wmBrightPixels++;
        
        // Check neighboring pixel for edge detection
        if (x < wmCropW - 1) {
          const nidx = (y * wmCropW + x + 1) * 3;
          const nr = wmData[nidx];
          const ng = wmData[nidx + 1];
          const nb = wmData[nidx + 2];
          const nbright = (nr + ng + nb) / 3;
          if (Math.abs(brightness - nbright) > 60) wmEdgePixels++;
        }
      }
    }
    const wmEdgePct = (wmEdgePixels / (wmCropW * wmCropH)) * 100;
    const wmBrightPct = (wmBrightPixels / (wmCropW * wmCropH)) * 100;
    
    results.push({
      frame: frameNum,
      filename: file,
      dimensions: `${w}x${h}`,
      bottomRightBrightPct: +brightPct.toFixed(2),
      bottomRightVeryBrightPct: +veryBrightPct.toFixed(2),
      bottomRightWhitePct: +whitePct.toFixed(2),
      bottomRightDarkPct: +darkPct.toFixed(2),
      weaponModelEdgePct: +wmEdgePct.toFixed(2),
      weaponModelBrightPct: +wmBrightPct.toFixed(2),
      likelyHud: brightPct > 2 || whitePct > 0.8 || veryBrightPct > 1,
      hasWeaponModel: wmEdgePct > 8 && wmBrightPct > 3,
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
  for (const r of withHud) {
    console.log(`  Frame ${r.frame} (${r.filename}): br_bright=${r.bottomRightBrightPct}%, br_white=${r.bottomRightWhitePct}%, br_verybright=${r.bottomRightVeryBrightPct}%, weapon_model=${r.hasWeaponModel ? 'YES' : 'NO'}`);
  }
}

console.log(`\nFrames likely WITHOUT HUD: ${withoutHud.length}`);

// Analyze frames with HUD for potential issues
const hudFrames = withHud.filter(r => !r.error);
if (hudFrames.length > 0) {
  console.log('\n=== HUD Frame Analysis ===');
  
  // Group frames
  const withWeaponAndHud = hudFrames.filter(r => r.hasWeaponModel);
  const withoutWeaponButWithHud = hudFrames.filter(r => !r.hasWeaponModel);
  
  console.log(`\nFrames WITH weapon model AND HUD: ${withWeaponAndHud.length}`);
  if (withWeaponAndHud.length > 0) {
    console.log('  These are expected: character has weapon, HUD shows ammo');
    console.log('  Frames:', withWeaponAndHud.map(r => `prototype_${String(r.frame).padStart(4, '0')}.jpg`).join(', '));
  }
  
  console.log(`\nFrames WITHOUT weapon model BUT WITH HUD: ${withoutWeaponButWithHud.length}`);
  if (withoutWeaponButWithHud.length > 0) {
    console.log('  POTENTIAL ISSUE: HUD shows weapons/ammo when character may have no weapon!');
    console.log('  Frames:', withoutWeaponButWithHud.map(r => `prototype_${String(r.frame).padStart(4, '0')}.jpg`).join(', '));
    for (const r of withoutWeaponButWithHud) {
      console.log(`    Frame ${r.frame}: br_bright=${r.bottomRightBrightPct}%, br_white=${r.bottomRightWhitePct}%`);
    }
  }
}

writeFileSync(join(__dirname, 'hud_analysis_results3.json'), JSON.stringify(results, null, 2));
console.log('\nFull results saved to hud_analysis_results3.json');
