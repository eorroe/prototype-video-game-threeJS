import * as THREE from 'three';

console.log('Testing WebGLMultipleRenderTargets...');
console.log('Has WebGLMultipleRenderTargets:', typeof THREE.WebGLMultipleRenderTargets);

try {
  const rt = new THREE.WebGLMultipleRenderTargets(100, 100, 3, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
  });
  console.log('Created MRT:', rt);
  console.log('rt.texture:', rt.texture);
  console.log('rt.texture.length:', rt.texture?.length);
  console.log('rt.texture[0]:', rt.texture?.[0]);
} catch (e) {
  console.error('Error:', e.message);
}
