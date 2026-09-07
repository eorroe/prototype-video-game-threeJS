import sharp from 'sharp';
import { readdirSync, writeFileSync } from 'fs';

const framesDir = './references/frames';

const files = readdirSync(framesDir)
  .filter(f => f.endsWith('.jpg'))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

async function analyze() {
  const hudFrames = [];
  const results = [];
  
  for (const file of files) {
    const frameNum = parseInt(file.match(/\d+/)[0]);
    const filepath = framesDir + '/' + file;
    const metadata = await sharp(filepath).metadata();
    const w = metadata.width;
    const h = metadata.height;
    
    // Check bottom-right (ammo panel)
    const brCropW = Math.floor(w * 0.16);
    const brCropH = Math.floor(h * 0.30);
    const { data: brData } = await sharp(filepath).extract({ 
      left: w - brCropW, top: h - brCropH, width: brCropW, height: brCropH 
    }).raw().toBuffer({ resolveWithObject: true });
    
    let brBright = 0;
    let brTotal = brData.length / 3;
    for (let i = 0; i < brData.length; i += 3) {
      const br = (brData[i] + brData[i+1] + brData[i+2]) / 3;
      if (br > 180) brBright++;
    }
    
    // Check center (crosshair)
    const ccCropW = Math.floor(w * 0.08);
    const ccCropH = Math.floor(h * 0.08);
    const { data: ccData } = await sharp(filepath).extract({ 
      left: Math.floor(w/2 - ccCropW/2), top: Math.floor(h/2 - ccCropH/2), 
      width: ccCropW, height: ccCropH 
    }).raw().toBuffer({ resolveWithObject: true });
    
    let ccBright = 0;
    let ccTotal = ccData.length / 3;
    for (let i = 0; i < ccData.length; i += 3) {
      const br = (ccData[i] + ccData[i+1] + ccData[i+2]) / 3;
      if (br > 150) ccBright++;
    }
    
    // Check top-right (killfeed)
    const krCropW = Math.floor(w * 0.30);
    const krCropH = Math.floor(h * 0.20);
    const { data: krData } = await sharp(filepath).extract({ 
      left: w - krCropW, top: 0, width: krCropW, height: krCropH 
    }).raw().toBuffer({ resolveWithObject: true });
    
    let krBright = 0;
    let krTotal = krData.length / 3;
    for (let i = 0; i < krData.length; i += 3) {
      const br = (krData[i] + krData[i+1] + krData[i+2]) / 3;
      if (br > 150) krBright++;
    }
    
    const hasHud = (brBright / brTotal * 100) > 1.5 || 
                   (ccBright / ccTotal * 100) > 5 || 
                   (krBright / krTotal * 100) > 5;
    
    results.push({ 
      frame: frameNum, 
      filename: file, 
      brBrightPct: (brBright / brTotal * 100).toFixed(2),
      ccBrightPct: (ccBright / ccTotal * 100).toFixed(2),
      krBrightPct: (krBright / krTotal * 100).toFixed(2),
      hasHud 
    });
    
    if (hasHud) {
      hudFrames.push(frameNum);
    }
  }
  
  console.log('Total frames: ' + files.length);
  console.log('\nFrames WITH HUD (' + hudFrames.length + '):');
  console.log('  ' + hudFrames.map(f => 'prototype_' + String(f).padStart(4, '0') + '.jpg').join(', '));
  
  writeFileSync('./hud_detection_results2.json', JSON.stringify(results, null, 2));
}

analyze();
