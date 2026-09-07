import * as THREE from 'three';

const G3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
  [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
  [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
];

export class Noise {
  constructor(rng) {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = rng.int(0, i);
      const t = p[i]; p[i] = p[j]; p[j] = t;
    }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }
  n3(x, y, z) {
    const p = this.perm;
    const fx = Math.floor(x), fy = Math.floor(y), fz = Math.floor(z);
    const X = fx & 255, Y = fy & 255, Z = fz & 255;
    x -= fx; y -= fy; z -= fz;
    const u = x * x * x * (x * (x * 6 - 15) + 10);
    const v = y * y * y * (y * (y * 6 - 15) + 10);
    const w = z * z * z * (z * (z * 6 - 15) + 10);
    const A = p[X] + Y, B = p[X + 1] + Y;
    const AA = p[A] + Z, AB = p[A + 1] + Z;
    const BA = p[B] + Z, BB = p[B + 1] + Z;
    const g = (h, dx, dy, dz) => { const q = G3[h % 12]; return q[0]*dx + q[1]*dy + q[2]*dz; };
    const lerp = (a, b, t) => a + (b - a) * t;
    return lerp(
      lerp(lerp(g(p[AA],x,y,z), g(p[BA],x-1,y,z), u), lerp(g(p[AB],x,y-1,z), g(p[BB],x-1,y-1,z), u), v),
      lerp(lerp(g(p[AA+1],x,y,z-1), g(p[BA+1],x-1,y,z-1), u), lerp(g(p[AB+1],x,y-1,z-1), g(p[BB+1],x-1,y-1,z-1), u), v),
      w
    );
  }
  fbm3(x, y, z, oct = 4, lac = 2.03, gain = 0.5) {
    let a = 0.5, f = 1, s = 0, norm = 0;
    for (let i = 0; i < oct; i++) { s += a * this.n3(x*f,y*f,z*f); norm += a; a *= gain; f *= lac; }
    return s / norm;
  }
  ridge3(x, y, z, oct = 3) {
    let a = 0.5, f = 1, s = 0, norm = 0;
    for (let i = 0; i < oct; i++) { s += a * (1 - Math.abs(this.n3(x*f,y*f,z*f))*2); norm += a; a *= 0.5; f *= 2.07; }
    return s / norm;
  }
}

export function emptyMesh() { return { p: [], n: [], uv: [], i: [] }; }
export function vcount(m) { return m.p.length / 3; }

export function superEllipse(rx, rz, n = 2, seg = 16, rot = 0) {
  const pts = new Array(seg);
  const e = 2 / n;
  for (let i = 0; i < seg; i++) {
    const t = (i / seg) * Math.PI * 2 + rot;
    const c = Math.cos(t), s = Math.sin(t);
    pts[i] = [rx * Math.sign(c) * Math.abs(c)**e, rz * Math.sign(s) * Math.abs(s)**e];
  }
  return pts;
}

export function ellipseProfile(rx, rz, seg = 16, rot = 0) { return superEllipse(rx, rz, 2, seg, rot); }

export function loft(rings, opts = {}) {
  const out = opts.into ?? emptyMesh();
  const closed = opts.closed !== false;
  const k = rings[0].pts.length;
  const P = out.p, N = out.n, UV = out.uv, I = out.i;
  const base = vcount(out);
  const uArr = new Float64Array(k + 1);
  const pos = [];
  const v = new THREE.Vector3();
  let vLen = 0, prevCentre = null, centres = [];

  for (let r = 0; r < rings.length; r++) {
    const ring = rings[r];
    const o = ring.o ?? [0,0,0];
    const s = ring.s ?? [1,1];
    const arr = new Float64Array(k * 3);
    let cx = 0, cy = 0, cz = 0;
    for (let j = 0; j < k; j++) {
      const pt = ring.pts[j];
      v.set(pt[0]*s[0], ring.y ?? 0, pt[1]*s[1]);
      if (ring.q) v.applyQuaternion(ring.q);
      v.x += o[0]; v.y += o[1]; v.z += o[2];
      arr[j*3] = v.x; arr[j*3+1] = v.y; arr[j*3+2] = v.z;
      cx += v.x; cy += v.y; cz += v.z;
    }
    cx /= k; cy /= k; cz /= k;
    centres.push([cx, cy, cz]);
    if (prevCentre) vLen += Math.hypot(cx-prevCentre[0], cy-prevCentre[1], cz-prevCentre[2]);
    prevCentre = [cx, cy, cz];
    pos.push({ arr, v: vLen });
  }

  { const a = pos[0].arr; uArr[0] = 0;
    for (let j = 1; j <= k; j++) {
      const j0 = ((j-1)%k)*3, j1 = (j%k)*3;
      uArr[j] = uArr[j-1] + Math.hypot(a[j1]-a[j0], a[j1+1]-a[j0+1], a[j1+2]-a[j0+2]);
    }
  }

  const cols = closed ? k + 1 : k;
  for (let r = 0; r < pos.length; r++) {
    const arr = pos[r].arr;
    for (let c = 0; c < cols; c++) {
      const j = (c % k) * 3;
      P.push(arr[j], arr[j+1], arr[j+2]);
      N.push(0,0,0);
      UV.push(uArr[c], pos[r].v);
    }
  }

  for (let r = 0; r + 1 < pos.length; r++) {
    for (let c = 0; c + 1 < cols; c++) {
      const a = base + r*cols + c, b = a+1, d = base + (r+1)*cols + c, e = d+1;
      I.push(a,d,b,b,d,e);
    }
  }

  const cap = (ringIndex, flip) => {
    const arr = pos[ringIndex].arr, c = centres[ringIndex], cIdx = vcount(out);
    P.push(c[0],c[1],c[2]); N.push(0,0,0); UV.push(uArr[k]*0.5, pos[ringIndex].v);
    const start = vcount(out);
    for (let j = 0; j < k; j++) {
      P.push(arr[j*3],arr[j*3+1],arr[j*3+2]); N.push(0,0,0);
      const ang = (j/k)*Math.PI*2;
      UV.push(uArr[k]*0.5 + Math.cos(ang)*0.02, pos[ringIndex].v + Math.sin(ang)*0.02);
    }
    for (let j = 0; j < k; j++) {
      const a = start+j, b = start+((j+1)%k);
      if (flip) I.push(cIdx,b,a); else I.push(cIdx,a,b);
    }
  };
  if (opts.capStart) cap(0, true);
  if (opts.capEnd) cap(pos.length-1, false);
  return out;
}

export function pathFrames(points, upRef = [0,0,1]) {
  const frames = [];
  const dir = new THREE.Vector3(), up = new THREE.Vector3();
  const m = new THREE.Matrix4(), x = new THREE.Vector3(), z = new THREE.Vector3();
  for (let i = 0; i < points.length; i++) {
    const a = points[Math.max(0,i-1)], b = points[Math.min(points.length-1,i+1)];
    dir.set(b[0]-a[0], b[1]-a[1], b[2]-a[2]);
    if (dir.lengthSq() < 1e-12) dir.set(0,1,0);
    dir.normalize();
    up.set(upRef[0],upRef[1],upRef[2]);
    if (Math.abs(up.dot(dir)) > 0.97) up.set(1,0,0);
    x.copy(dir).cross(up).normalize();
    z.copy(x).cross(dir).normalize();
    m.makeBasis(x, dir, z);
    frames.push(new THREE.Quaternion().setFromRotationMatrix(m));
  }
  return frames;
}

export function tube(points, profile, opts = {}) {
  const frames = opts.frames ?? pathFrames(points, opts.up ?? [0,0,1]);
  const rings = [];
  for (let i = 0; i < points.length; i++) {
    rings.push({ pts: profile(i/(points.length-1), i), o: points[i], q: frames[i] });
  }
  return loft(rings, opts);
}

export function revolve(profile, seg = 20, opts = {}) {
  const rings = [];
  for (let i = 0; i < profile.length; i++) {
    const [r, y] = profile[i];
    const rz = opts.squash ? r * opts.squash : r;
    rings.push({ pts: ellipseProfile(Math.max(1e-4,r), Math.max(1e-4,rz), seg), o: [0,y,0] });
  }
  return loft(rings, opts);
}

export function boxRound(hx, hy, hz, opts = {}) {
  const n = opts.n ?? 5, seg = opts.seg ?? 20, rows = opts.rows ?? 9;
  const roundY = opts.roundY ?? 0.28, ny = opts.ny ?? 5;
  const rings = [];
  for (let r = 0; r < rows; r++) {
    const t = r / (rows-1);
    const y = (t*2-1)*hy;
    const a = Math.min(1, Math.abs(y)/hy);
    const k = Math.min(1, Math.max(0, (a-(1-roundY))/roundY));
    const env = Math.max(0, 1 - k**ny) ** (1/ny);
    const e = Math.max(0.02, env);
    rings.push({ pts: superEllipse(hx*e, hz*e, n, seg), o: [0,y,0] });
  }
  return loft(rings, { ...opts, capStart: false, capEnd: false });
}

export function ellipsoid(rx, ry, rz, opts = {}) {
  const seg = opts.seg ?? 22, rows = opts.rows ?? 14;
  const v0 = opts.v0 ?? 0, v1 = opts.v1 ?? 1;
  const rings = [];
  for (let r = 0; r < rows; r++) {
    const t = v0 + (v1-v0) * (r/(rows-1));
    const phi = t * Math.PI;
    const y = -Math.cos(phi) * ry;
    const s = Math.sin(phi);
    rings.push({ pts: ellipseProfile(Math.max(1e-4,rx*s), Math.max(1e-4,rz*s), seg), o: [0,y,0] });
  }
  return loft(rings, opts);
}

export function computeNormals(m, from = 0) {
  const P = m.p, N = m.n, I = m.i;
  for (let i = from*3; i < N.length; i++) N[i] = 0;
  for (let t = 0; t < I.length; t += 3) {
    const a = I[t]*3, b = I[t+1]*3, c = I[t+2]*3;
    if (a < from*3 && b < from*3 && c < from*3) continue;
    const ax=P[a],ay=P[a+1],az=P[a+2];
    const e1x=P[b]-ax,e1y=P[b+1]-ay,e1z=P[b+2]-az;
    const e2x=P[c]-ax,e2y=P[c+1]-ay,e2z=P[c+2]-az;
    const nx=e1y*e2z-e1z*e2y, ny=e1z*e2x-e1x*e2z, nz=e1x*e2y-e1y*e2x;
    N[a]+=nx;N[a+1]+=ny;N[a+2]+=nz;
    N[b]+=nx;N[b+1]+=ny;N[b+2]+=nz;
    N[c]+=nx;N[c+1]+=ny;N[c+2]+=nz;
  }
  for (let i = from*3; i < N.length; i += 3) {
    const l = Math.hypot(N[i],N[i+1],N[i+2]) || 1;
    N[i]/=l; N[i+1]/=l; N[i+2]/=l;
  }
  return m;
}

export function displace(m, fn, from = 0) {
  const P = m.p, N = m.n;
  const n = vcount(m);
  for (let i = from; i < n; i++) {
    const x=P[i*3],y=P[i*3+1],z=P[i*3+2];
    const nx=N[i*3],ny=N[i*3+1],nz=N[i*3+2];
    const d = fn(x,y,z,nx,ny,nz,i);
    if (!d) continue;
    P[i*3]=x+nx*d; P[i*3+1]=y+ny*d; P[i*3+2]=z+nz*d;
  }
  return m;
}

export function warp(m, fn, from = 0) {
  const P = m.p;
  const v = new THREE.Vector3();
  const n = vcount(m);
  for (let i = from; i < n; i++) {
    v.set(P[i*3],P[i*3+1],P[i*3+2]);
    fn(v, i);
    P[i*3]=v.x; P[i*3+1]=v.y; P[i*3+2]=v.z;
  }
  return m;
}

export function appendMesh(dst, src) {
  const base = vcount(dst);
  for (let i = 0; i < src.p.length; i++) dst.p.push(src.p[i]);
  for (let i = 0; i < src.n.length; i++) dst.n.push(src.n[i]);
  for (let i = 0; i < src.uv.length; i++) dst.uv.push(src.uv[i]);
  for (let i = 0; i < src.i.length; i++) dst.i.push(src.i[i] + base);
  return dst;
}

export function buildBufferGeometry(m) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(m.p, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(m.n, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(m.uv, 2));
  geo.setIndex(m.i);
  return geo;
}
