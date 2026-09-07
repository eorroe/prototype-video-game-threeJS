import sharp from 'sharp';

const framesDir = './references/frames';
const ammoHudFrames = [66, 88, 89, 90, 91, 92, 148, 181, 200, 201, 202];

async function analyze() {
  console.log('=== Weapon region analysis for ammo-HUD frames ===');
  console.log('Region: bottom-center, 50% width, 35% height\n');
  
  for (const frameNum of ammoHudFrames) {
    const filepath = framesDir + '/prototype_' + String(frameNum).padStart(4, '0') + '.jpg';
    const metadata = await sharp(filepath).metadata();
    const w = metadata.width;
    const h = metadata.height;
    
    const wx = Math.floor(w * 0.25);
    const wy = Math.floor(h * 0.50);
    const ww = Math.floor(w * 0.50);
    const wh = Math.floor(h * 0.35);
    const { data } = await sharp(filepath).extract({ left: wx, top: wy, width: ww, height: wh }).raw().toBuffer({ resolveWithObject: true });
    
    let veryDark = 0, dark = 0, mid = 0, bright = 0;
    for (let i = 0; i < data.length; i += 3) {
      const br = (data[i] + data[i+1] + data[i+2]) / 3;
      if (br < 30) veryDark++;
      else if (br < 80) dark++;
      else if (br < 180) mid++;
      else bright++;
    }
    
    const total = ww * wh;
    console.log('Frame ' + frameNum + ':');
    console.log('  Very dark (<30): ' + (veryDark/total*100).toFixed(1) + '%');
    console.log('  Dark (30-80): ' + (dark/total*100).toFixed(1) + '%');
    console.log('  Mid (80-180): ' + (mid/total*100).toFixed(1) + '%');
    console.log('  Bright (>180): ' + (bright/total*100).toFixed(1) + '%');
    console.log('  Total dark+veryDark: ' + ((veryDark+dark)/total*100).toFixed(1) + '%');
    console.log('');
  }
}

analyze();
