import sharp from 'sharp';
import { readdirSync, writeFileSync } from 'fs';

const framesDir = './references/frames';

const files = readdirSync(framesDir)
  .filter(f => f.endsWith('.jpg'))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

async function analyze() {
  const hudFrames = [];
  const noHudFrames = [];
  const results = [];
  
  for (const file of files) {
    const frameNum = parseInt(file.match(/\d+/)[0]);
    const filepath = framesDir + '/' + file;
    const metadata = await sharp(filepath).metadata();
    const w = metadata.width;
    const h = metadata.height;
    
    const cropW = Math.floor(w * 0.16);
    const cropH = Math.floor(h * 0.30);
    const { data } = await sharp(filepath).extract({ 
      left: w - cropW, top: h - cropH, width: cropW, height: cropH 
    }).raw().toBuffer({ resolveWithObject: true });
    
    let bright = 0;
    let total = data.length / 3;
    for (let i = 0; i < data.length; i += 3) {
      const br = (data[i] + data[i+1] + data[i+2]) / 3;
      if (br > 180) bright++;
    }
    
    const brightPct = bright / total * 100;
    results.push({ frame: frameNum, filename: file, brightPct });
    
    if (brightPct > 1.5) {
      hudFrames.push(frameNum);
    } else {
      noHudFrames.push(frameNum);
    }
  }
  
  console.log('Total frames: ' + files.length);
  console.log('\nFrames WITH HUD (' + hudFrames.length + '):');
  console.log('  ' + hudFrames.map(f => 'prototype_' + String(f).padStart(4, '0') + '.jpg').join(', '));
  console.log('\nFrames WITHOUT HUD (' + noHudFrames.length + '):');
  console.log('  First 20: ' + noHudFrames.slice(0, 20).map(f => 'prototype_' + String(f).padStart(4, '0') + '.jpg').join(', '));
  
  writeFileSync('./hud_detection_results.json', JSON.stringify(results, null, 2));
}

analyze();
