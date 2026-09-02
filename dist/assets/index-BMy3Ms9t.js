(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="180",Xl=0,Va=1,ql=2,il=1,sl=2,fn=3,xn=0,Rt=1,en=2,sn=0,zn=1,Ha=2,Ga=3,Wa=4,Yl=5,On=100,jl=101,$l=102,Kl=103,Zl=104,Jl=200,Ql=201,ec=202,tc=203,Sr=204,yr=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,cc=213,hc=214,br=0,Er=1,Tr=2,ui=3,Ar=4,Rr=5,Cr=6,Pr=7,rl=0,uc=1,dc=2,vn=0,fc=1,pc=2,mc=3,gc=4,vc=5,_c=6,xc=7,al=300,di=301,fi=302,bs=303,Dr=304,Rs=306,pi=1e3,Dt=1001,Lr=1002,dt=1003,Mc=1004,ji=1005,ht=1006,Os=1007,tn=1008,Gt=1009,ol=1010,ll=1011,Bi=1012,pa=1013,kn=1014,Nt=1015,zt=1016,ma=1017,ga=1018,zi=1020,cl=35902,hl=35899,ul=1021,dl=1022,_t=1023,ki=1026,Vi=1027,Wi=1028,va=1029,_i=1030,_a=1031,xa=1033,xs=33776,Ms=33777,ws=33778,Ss=33779,Ur=35840,Ir=35841,Fr=35842,Nr=35843,Or=36196,Br=37492,zr=37496,kr=37808,Vr=37809,Hr=37810,Gr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,jr=37816,$r=37817,Kr=37818,Zr=37819,Jr=37820,Qr=37821,ea=36492,ta=36494,na=36495,ia=36283,sa=36284,ra=36285,aa=36286,wc=3200,Sc=3201,fl=0,yc=1,$t="",St="srgb",mi="srgb-linear",Es="linear",Ke="srgb",Wn=7680,Xa=519,bc=512,Ec=513,Tc=514,pl=515,Ac=516,Rc=517,Cc=518,Pc=519,qa=35044,oa="300 es",nn=2e3,Ts=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const Fi=Math.PI/180,Hi=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function Ma(s,e){return(s%e+e)%e}function Dc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Lc(s,e,t){return s!==e?(t-s)/(e-s):0}function Ni(s,e,t){return(1-t)*s+t*e}function Uc(s,e,t,n){return Ni(s,e,1-Math.exp(-t*n))}function Ic(s,e=1){return e-Math.abs(Ma(s,e*2)-e)}function Fc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Oc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bc(s,e){return s+Math.random()*(e-s)}function zc(s){return s*(.5-Math.random())}function kc(s){s!==void 0&&(Ya=s);let e=Ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vc(s){return s*Fi}function Hc(s){return s*Hi}function Gc(s){return(s&s-1)===0&&s!==0}function Wc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qc(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ml={DEG2RAD:Fi,RAD2DEG:Hi,generateUUID:Mi,clamp:ke,euclideanModulo:Ma,mapLinear:Dc,inverseLerp:Lc,lerp:Ni,damp:Uc,pingpong:Ic,smoothstep:Fc,smootherstep:Nc,randInt:Oc,randFloat:Bc,randFloatSpread:zc,seededRandom:kc,degToRad:Vc,radToDeg:Hc,isPowerOfTwo:Gc,ceilPowerOfTwo:Wc,floorPowerOfTwo:Xc,setQuaternionFromProperEuler:qc,normalize:Tt,denormalize:ai};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==m||h!==g){let p=1-o;const u=l*d+c*m+h*g+f*v,y=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const T=Math.sqrt(b),A=Math.atan2(T,u*y);p=Math.sin(p*A)/T,o=Math.sin(o*A)/T}const w=o*y;if(l=l*p+d*w,c=c*p+m*w,h=h*p+g*w,f=f*p+v*w,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-o*m,e[t+2]=c*g+h*m+o*d-l*f,e[t+3]=h*g-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new C,ja=new wi;class Oe{constructor(e,t,n,i,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],v=i[0],p=i[3],u=i[6],y=i[1],b=i[4],w=i[7],T=i[2],A=i[5],P=i[8];return r[0]=a*v+o*y+l*T,r[3]=a*p+o*b+l*A,r[6]=a*u+o*w+l*P,r[1]=c*v+h*y+f*T,r[4]=c*p+h*b+f*A,r[7]=c*u+h*w+f*P,r[2]=d*v+m*y+g*T,r[5]=d*p+m*b+g*A,r[8]=d*u+m*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Oe;function gl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yc(){const s=As("canvas");return s.style.display="block",s}const $a={};function Gi(s){s in $a||($a[s]=!0,console.warn(s))}function jc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ka=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Za=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $c(){const s={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$t?Es:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mi]:{primaries:e,whitePoint:n,transfer:Es,toXYZ:Ka,fromXYZ:Za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Ka,fromXYZ:Za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}const Xe=$c();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xn;class Kc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=As("canvas")),Xn.width=e.width,Xn.height=e.height;const i=Xn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zc=0;class wa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ks(i[a].image)):r.push(ks(i[a]))}else r=ks(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;const Vs=new C;class yt extends xi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Dt,i=Dt,r=ht,a=tn,o=_t,l=Gt,c=yt.DEFAULT_ANISOTROPY,h=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Mi(),this.name="",this.source=new wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vs).x}get height(){return this.source.getSize(Vs).y}get depth(){return this.source.getSize(Vs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=al;yt.DEFAULT_ANISOTROPY=1;class Ee{constructor(e=0,t=0,n=0,i=1){Ee.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,w=(m+1)/2,T=(u+1)/2,A=(h+d)/4,P=(f+v)/4,F=(g+p)/4;return b>w&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=P/n):w>T?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=F/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=P/r,i=F/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ee(0,0,e,t),this.scissorTest=!1,this.viewport=new Ee(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new yt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new wa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sa extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eh extends Wt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Sa(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class vl extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Ki.subVectors(this.max,Ti),qn.subVectors(e.a,Ti),Yn.subVectors(e.b,Ti),jn.subVectors(e.c,Ti),Mn.subVectors(Yn,qn),wn.subVectors(jn,Yn),Cn.subVectors(qn,jn);let t=[0,-Mn.z,Mn.y,0,-wn.z,wn.y,0,-Cn.z,Cn.y,Mn.z,0,-Mn.x,wn.z,0,-wn.x,Cn.z,0,-Cn.x,-Mn.y,Mn.x,0,-wn.y,wn.x,0,-Cn.y,Cn.x,0];return!Hs(t,qn,Yn,jn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,qn,Yn,jn,Ki))?!1:(Zi.crossVectors(Mn,wn),t=[Zi.x,Zi.y,Zi.z],Hs(t,qn,Yn,jn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new C,new C,new C,new C,new C,new C,new C,new C],qt=new C,$i=new Tn,qn=new C,Yn=new C,jn=new C,Mn=new C,wn=new C,Cn=new C,Ti=new C,Ki=new C,Zi=new C,Pn=new C;function Hs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const th=new Tn,Ai=new C,Gs=new C;class Hn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):th.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Gs)),this.expandByPoint(Ai.copy(e.center).sub(Gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cn=new C,Ws=new C,Ji=new C,Sn=new C,Xs=new C,Qi=new C,qs=new C;class _l{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ws.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Ws);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ji),o=Sn.dot(this.direction),l=-Sn.dot(Ji),c=Sn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ws).addScaledVector(Ji,d),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,i,r){Xs.subVectors(t,e),Qi.subVectors(n,e),qs.crossVectors(Xs,Qi);let a=this.direction.dot(qs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(Qi.crossVectors(Sn,Qi));if(l<0)return null;const c=o*this.direction.dot(Xs.cross(Sn));if(c<0||l+c>a)return null;const h=-o*Sn.dot(qs);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,r,a,o,l,c,h,f,d,m,g,v,p){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,d,m,g,v,p)}set(e,t,n,i,r,a,o,l,c,h,f,d,m,g,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,g=c*h,v=c*f;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,g=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nh,e,ih)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),yn.crossVectors(n,It),yn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),yn.crossVectors(n,It)),yn.normalize(),es.crossVectors(It,yn),i[0]=yn.x,i[4]=es.x,i[8]=It.x,i[1]=yn.y,i[5]=es.y,i[9]=It.y,i[2]=yn.z,i[6]=es.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],u=n[14],y=n[3],b=n[7],w=n[11],T=n[15],A=i[0],P=i[4],F=i[8],S=i[12],M=i[1],D=i[5],O=i[9],B=i[13],W=i[2],Y=i[6],X=i[10],te=i[14],V=i[3],re=i[7],he=i[11],ye=i[15];return r[0]=a*A+o*M+l*W+c*V,r[4]=a*P+o*D+l*Y+c*re,r[8]=a*F+o*O+l*X+c*he,r[12]=a*S+o*B+l*te+c*ye,r[1]=h*A+f*M+d*W+m*V,r[5]=h*P+f*D+d*Y+m*re,r[9]=h*F+f*O+d*X+m*he,r[13]=h*S+f*B+d*te+m*ye,r[2]=g*A+v*M+p*W+u*V,r[6]=g*P+v*D+p*Y+u*re,r[10]=g*F+v*O+p*X+u*he,r[14]=g*S+v*B+p*te+u*ye,r[3]=y*A+b*M+w*W+T*V,r[7]=y*P+b*D+w*Y+T*re,r[11]=y*F+b*O+w*X+T*he,r[15]=y*S+b*B+w*te+T*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],u=e[15];return g*(+r*l*f-i*c*f-r*o*d+n*c*d+i*o*m-n*l*m)+v*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*h-r*l*h)+p*(+t*c*f-t*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+u*(-i*o*h-t*l*f+t*o*d+i*a*f-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],u=e[15],y=f*p*c-v*d*c+v*l*m-o*p*m-f*l*u+o*d*u,b=g*d*c-h*p*c-g*l*m+a*p*m+h*l*u-a*d*u,w=h*v*c-g*f*c+g*o*m-a*v*m-h*o*u+a*f*u,T=g*f*l-h*v*l-g*o*d+a*v*d+h*o*p-a*f*p,A=t*y+n*b+i*w+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=y*P,e[1]=(v*d*r-f*p*r-v*i*m+n*p*m+f*i*u-n*d*u)*P,e[2]=(o*p*r-v*l*r+v*i*c-n*p*c-o*i*u+n*l*u)*P,e[3]=(f*l*r-o*d*r-f*i*c+n*d*c+o*i*m-n*l*m)*P,e[4]=b*P,e[5]=(h*p*r-g*d*r+g*i*m-t*p*m-h*i*u+t*d*u)*P,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*u-t*l*u)*P,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*m+t*l*m)*P,e[8]=w*P,e[9]=(g*f*r-h*v*r-g*n*m+t*v*m+h*n*u-t*f*u)*P,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*u+t*o*u)*P,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*m-t*o*m)*P,e[12]=T*P,e[13]=(h*v*i-g*f*i+g*n*d-t*v*d-h*n*p+t*f*p)*P,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*p-t*o*p)*P,e[15]=(a*f*i-h*o*i+h*n*l-t*f*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,m=r*h,g=r*f,v=a*h,p=a*f,u=o*f,y=l*c,b=l*h,w=l*f,T=n.x,A=n.y,P=n.z;return i[0]=(1-(v+u))*T,i[1]=(m+w)*T,i[2]=(g-b)*T,i[3]=0,i[4]=(m-w)*A,i[5]=(1-(d+u))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+b)*P,i[9]=(p-y)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$n.set(i[0],i[1],i[2]).length();const a=$n.set(i[4],i[5],i[6]).length(),o=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const c=1/r,h=1/a,f=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=nn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===nn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ts)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=nn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===nn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ts)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new C,Yt=new Ie,nh=new C(0,0,0),ih=new C(1,1,1),yn=new C,es=new C,It=new C,Ja=new Ie,Qa=new wi;class rn{constructor(e=0,t=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const eo=new C,Kn=new wi,hn=new Ie,ts=new C,Ri=new C,rh=new C,ah=new wi,to=new C(1,0,0),no=new C(0,1,0),io=new C(0,0,1),so={type:"added"},oh={type:"removed"},Zn={type:"childadded",child:null},Ys={type:"childremoved",child:null};class ft extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new C,t=new rn,n=new wi,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Oe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(to,e)}rotateY(e){return this.rotateOnAxis(no,e)}rotateZ(e){return this.rotateOnAxis(io,e)}translateOnAxis(e,t){return eo.copy(e).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(to,e)}translateY(e){return this.translateOnAxis(no,e)}translateZ(e){return this.translateOnAxis(io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ri,ts,this.up):hn.lookAt(ts,Ri,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(hn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(so),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(so),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new C(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new C,un=new C,js=new C,dn=new C,Jn=new C,Qn=new C,ro=new C,$s=new C,Ks=new C,Zs=new C,Js=new Ee,Qs=new Ee,er=new Ee;class Kt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),un.subVectors(n,t),js.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(un),l=jt.dot(js),c=un.dot(un),h=un.dot(js),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Js.setScalar(0),Qs.setScalar(0),er.setScalar(0),Js.fromBufferAttribute(e,t),Qs.fromBufferAttribute(e,n),er.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Js,r.x),a.addScaledVector(Qs,r.y),a.addScaledVector(er,r.z),a}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),un.subVectors(e,t),jt.cross(un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),jt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Jn.subVectors(i,n),Qn.subVectors(r,n),$s.subVectors(e,n);const l=Jn.dot($s),c=Qn.dot($s);if(l<=0&&c<=0)return t.copy(n);Ks.subVectors(e,i);const h=Jn.dot(Ks),f=Qn.dot(Ks);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Jn,a);Zs.subVectors(e,r);const m=Jn.dot(Zs),g=Qn.dot(Zs);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qn,o);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return ro.subVectors(r,i),o=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(ro,o);const u=1/(p+v+d);return a=v*u,o=d*u,t.copy(n).addScaledVector(Jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function tr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Ma(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=tr(a,r,e+1/3),this.g=tr(a,r,e),this.b=tr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Xe.workingToColorSpace(wt.copy(this),e),Math.round(ke(wt.r*255,0,255))*65536+Math.round(ke(wt.g*255,0,255))*256+Math.round(ke(wt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=St){Xe.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ns);const n=Ni(bn.h,ns.h,t),i=Ni(bn.s,ns.s,t),r=Ni(bn.l,ns.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new He;He.NAMES=xl;let lh=0;class Xi extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=zn,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=yr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=ch();function ch(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function hh(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ke(s,-65504,65504),pn.floatView[0]=s;const e=pn.uint32View[0],t=e>>23&511;return pn.baseTable[t]+((e&8388607)>>pn.shiftTable[t])}function uh(s){const e=s>>10;return pn.uint32View[0]=pn.mantissaTable[pn.offsetTable[e]+(s&1023)]+pn.exponentTable[e],pn.floatView[0]}class la{static toHalfFloat(e){return hh(e)}static fromHalfFloat(e){return uh(e)}}const ut=new C,is=new ce;let dh=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Nt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class Ml extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wl extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fh=0;const Ht=new Ie,nr=new ft,ei=new C,Ft=new Tn,Ci=new Tn,vt=new C;class an extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?wl:Ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return nr.lookAt(e),nr.updateMatrix(),this.applyMatrix4(nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ft.min,Ci.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,Ci.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(Ci.min),Ft.expandByPoint(Ci.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(e,c),vt.add(ei)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new C,l[F]=new C;const c=new C,h=new C,f=new C,d=new ce,m=new ce,g=new ce,v=new C,p=new C;function u(F,S,M){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),o[F].add(v),o[S].add(v),o[M].add(v),l[F].add(p),l[S].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,S=y.length;F<S;++F){const M=y[F],D=M.start,O=M.count;for(let B=D,W=D+O;B<W;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new C,w=new C,T=new C,A=new C;function P(F){T.fromBufferAttribute(i,F),A.copy(T);const S=o[F];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),w.crossVectors(A,S);const D=w.dot(l[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,D)}for(let F=0,S=y.length;F<S;++F){const M=y[F],D=M.start,O=M.count;for(let B=D,W=D+O;B<W;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new Ot(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new Ie,Dn=new _l,ss=new Hn,oo=new C,rs=new C,as=new C,os=new C,ir=new C,ls=new C,lo=new C,cs=new C;class je extends ft{constructor(e=new an,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(ir.fromBufferAttribute(f,e),a?ls.addScaledVector(ir,h):ls.addScaledVector(ir.sub(t),h))}t.add(ls)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(ss.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(ss,oo)===null||Dn.origin.distanceToSquared(oo)>(e.far-e.near)**2))&&(ao.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(ao),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],u=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=b;w<T;w+=3){const A=o.getX(w),P=o.getX(w+1),F=o.getX(w+2);i=hs(this,u,e,n,c,h,f,A,P,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const y=o.getX(p),b=o.getX(p+1),w=o.getX(p+2);i=hs(this,a,e,n,c,h,f,y,b,w),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],u=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=b;w<T;w+=3){const A=w,P=w+1,F=w+2;i=hs(this,u,e,n,c,h,f,A,P,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const y=p,b=p+1,w=p+2;i=hs(this,a,e,n,c,h,f,y,b,w),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ph(s,e,t,n,i,r,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===xn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:s}}function hs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,rs),s.getVertexPosition(l,as),s.getVertexPosition(c,os);const h=ph(s,e,t,n,rs,as,os,lo);if(h){const f=new C;Kt.getBarycoord(lo,rs,as,os,f),i&&(h.uv=Kt.getInterpolatedAttribute(i,o,l,c,f,new ce)),r&&(h.uv1=Kt.getInterpolatedAttribute(r,o,l,c,f,new ce)),a&&(h.normal=Kt.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};Kt.getNormal(rs,as,os,d.normal),h.face=d,h.barycoord=f}return h}class Zt extends an{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2));function g(v,p,u,y,b,w,T,A,P,F,S){const M=w/P,D=T/F,O=w/2,B=T/2,W=A/2,Y=P+1,X=F+1;let te=0,V=0;const re=new C;for(let he=0;he<X;he++){const ye=he*D-B;for(let ze=0;ze<Y;ze++){const Qe=ze*M-O;re[v]=Qe*y,re[p]=ye*b,re[u]=W,c.push(re.x,re.y,re.z),re[v]=0,re[p]=0,re[u]=A>0?1:-1,h.push(re.x,re.y,re.z),f.push(ze/P),f.push(1-he/F),te+=1}}for(let he=0;he<F;he++)for(let ye=0;ye<P;ye++){const ze=d+ye+Y*he,Qe=d+ye+Y*(he+1),nt=d+(ye+1)+Y*(he+1),qe=d+(ye+1)+Y*he;l.push(ze,Qe,qe),l.push(Qe,nt,qe),V+=6}o.addGroup(m,V,S),m+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=gi(s[t]);for(const i in n)e[i]=n[i]}return e}function mh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const gh={clone:gi,merge:At};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ea extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new C,co=new ce,ho=new ce;class Pt extends Ea{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,co,ho),t.subVectors(ho,co)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class xh extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(ti,ni,e,t);i.layers=this.layers,this.add(i);const r=new Pt(ti,ni,e,t);r.layers=this.layers,this.add(r);const a=new Pt(ti,ni,e,t);a.layers=this.layers,this.add(a);const o=new Pt(ti,ni,e,t);o.layers=this.layers,this.add(o);const l=new Pt(ti,ni,e,t);l.layers=this.layers,this.add(l);const c=new Pt(ti,ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yl extends yt{constructor(e=[],t=di,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mh extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zt(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:sn});r.uniforms.tEquirect.value=t;const a=new je(i,r),o=t.minFilter;return t.minFilter===tn&&(t.minFilter=ht),new xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class gn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wh={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vi extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ta extends yt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=dt,h=dt,f,d){super(null,a,o,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ii=new Ie,fo=new Ie,us=[],po=new Tn,Sh=new Ie,Pi=new je,Di=new Hn;class mo extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),po.copy(e.boundingBox).applyMatrix4(ii),this.boundingBox.union(po)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),Di.copy(e.boundingSphere).applyMatrix4(ii),this.boundingSphere.union(Di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),e.ray.intersectsSphere(Di)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ii),fo.multiplyMatrices(n,ii),Pi.matrixWorld=fo,Pi.raycast(e,us);for(let a=0,o=us.length;a<o;a++){const l=us[a];l.instanceId=r,l.object=this,t.push(l)}us.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ta(new Float32Array(i*this.count),i,this.count,Wi,Nt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rr=new C,yh=new C,bh=new Oe;class Fn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rr.subVectors(n,t).cross(yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bh.getNormalMatrix(e),i=this.coplanarPoint(rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Hn,Eh=new ce(.5,.5),ds=new C;class Aa{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],m=r[7],g=r[8],v=r[9],p=r[10],u=r[11],y=r[12],b=r[13],w=r[14],T=r[15];if(i[0].setComponents(c-a,m-h,u-g,T-y).normalize(),i[1].setComponents(c+a,m+h,u+g,T+y).normalize(),i[2].setComponents(c+o,m+f,u+v,T+b).normalize(),i[3].setComponents(c-o,m-f,u-v,T-b).normalize(),n)i[4].setComponents(l,d,p,w).normalize(),i[5].setComponents(c-l,m-d,u-p,T-w).normalize();else if(i[4].setComponents(c-l,m-d,u-p,T-w).normalize(),t===nn)i[5].setComponents(c+l,m+d,u+p,T+w).normalize();else if(t===Ts)i[5].setComponents(l,d,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){Ln.center.set(0,0,0);const t=Eh.distanceTo(e.center);return Ln.radius=.7071067811865476+t,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ds.x=i.normal.x>0?e.max.x:e.min.x,ds.y=i.normal.y>0?e.max.y:e.min.y,ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ra extends yt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bl extends yt{constructor(e,t,n=kn,i,r,a,o=dt,l=dt,c,h=ki,f=1){if(h!==ki&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class El extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cs extends an{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,m=2*f+d,g=n*2+r,v=i+1,p=new C,u=new C;for(let y=0;y<=g;y++){let b=0,w=0,T=0,A=0;if(y<=n){const S=y/n,M=S*Math.PI/2;w=-h-e*Math.cos(M),T=e*Math.sin(M),A=-e*Math.cos(M),b=S*f}else if(y<=n+r){const S=(y-n)/r;w=-h+S*t,T=e,A=0,b=f+S*d}else{const S=(y-n-r)/n,M=S*Math.PI/2;w=h+e*Math.sin(M),T=e*Math.cos(M),A=e*Math.sin(M),b=f+d+S*f}const P=Math.max(0,Math.min(1,b/m));let F=0;y===0?F=.5/i:y===g&&(F=-.5/i);for(let S=0;S<=i;S++){const M=S/i,D=M*Math.PI*2,O=Math.sin(D),B=Math.cos(D);u.x=-T*B,u.y=w,u.z=T*O,o.push(u.x,u.y,u.z),p.set(-T*B,A,T*O),p.normalize(),l.push(p.x,p.y,p.z),c.push(M+F,P)}if(y>0){const S=(y-1)*v;for(let M=0;M<i;M++){const D=S+M,O=S+M+1,B=y*v+M,W=y*v+M+1;a.push(D,O,B),a.push(O,W,B)}}}this.setIndex(a),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Si extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,d=t/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const y=u*d-a;for(let b=0;b<c;b++){const w=b*f-r;g.push(w,-y,0),v.push(0,0,1),p.push(b/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const b=y+c*u,w=y+c*(u+1),T=y+1+c*(u+1),A=y+1+c*u;m.push(b,w,A),m.push(w,T,A)}this.setIndex(m),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vn extends an{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,d=new C,m=[],g=[],v=[],p=[];for(let u=0;u<=n;u++){const y=[],b=u/n;let w=0;u===0&&a===0?w=.5/t:u===n&&l===Math.PI&&(w=-.5/t);for(let T=0;T<=t;T++){const A=T/t;f.x=-e*Math.cos(i+A*r)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(i+A*r)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(A+w,1-b),y.push(c++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const b=h[u][y+1],w=h[u][y],T=h[u+1][y],A=h[u+1][y+1];(u!==0||a>0)&&m.push(b,w,A),(u!==n-1||l<Math.PI)&&m.push(w,T,A)}this.setIndex(m),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oi extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Th extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ah extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ps extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tl extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ar=new Ie,go=new C,vo=new C;class Al{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _o=new Ie,Li=new C,or=new C;class Rh extends Al{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Li.setFromMatrixPosition(e.matrixWorld),n.position.copy(Li),or.copy(n.position),or.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-Li.x,-Li.y,-Li.z),_o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o,n.coordinateSystem,n.reversedDepth)}}class Rl extends Ps{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ca extends Ea{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ch extends Al{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oi extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ph extends Ps{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dh extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xo=new Ie;class Lh{constructor(e,t,n=0,i=1/0){this.ray=new _l(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xo),this}intersectObject(e,t=!0,n=[]){return ca(e,this,n,t),n.sort(Mo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ca(e[i],this,n,t);return n.sort(Mo),n}}function Mo(s,e){return s.distance-e.distance}function ca(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)ca(r[a],e,t,!0)}}function wo(s,e,t,n){const i=Uh(n);switch(t){case ul:return s*e;case Wi:return s*e/i.components*i.byteLength;case va:return s*e/i.components*i.byteLength;case _i:return s*e*2/i.components*i.byteLength;case _a:return s*e*2/i.components*i.byteLength;case dl:return s*e*3/i.components*i.byteLength;case _t:return s*e*4/i.components*i.byteLength;case xa:return s*e*4/i.components*i.byteLength;case xs:case Ms:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ws:case Ss:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ir:case Nr:return Math.max(s,16)*Math.max(e,8)/4;case Ur:case Fr:return Math.max(s,8)*Math.max(e,8)/2;case Or:case Br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $r:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ea:case ta:case na:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ia:case sa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ra:case aa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uh(s){switch(s){case Gt:case ol:return{byteLength:1,components:1};case Bi:case ll:case zt:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case kn:case pa:case Nt:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ih(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Fh,alphahash_pars_fragment:Nh,alphamap_fragment:Oh,alphamap_pars_fragment:Bh,alphatest_fragment:zh,alphatest_pars_fragment:kh,aomap_fragment:Vh,aomap_pars_fragment:Hh,batching_pars_vertex:Gh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:qh,bsdfs:Yh,iridescence_fragment:jh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:nu,color_vertex:iu,common:su,cube_uv_reflection_fragment:ru,defaultnormal_vertex:au,displacementmap_pars_vertex:ou,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Au,envmap_vertex:vu,fog_vertex:_u,fog_pars_vertex:xu,fog_fragment:Mu,fog_pars_fragment:wu,gradientmap_pars_fragment:Su,lightmap_pars_fragment:yu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Eu,lights_pars_begin:Tu,lights_toon_fragment:Ru,lights_toon_pars_fragment:Cu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Du,lights_physical_fragment:Lu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Iu,lights_fragment_maps:Fu,lights_fragment_end:Nu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:ku,map_fragment:Vu,map_pars_fragment:Hu,map_particle_fragment:Gu,map_particle_pars_fragment:Wu,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:qu,morphinstance_vertex:Yu,morphcolor_vertex:ju,morphnormal_vertex:$u,morphtarget_pars_vertex:Ku,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,opaque_fragment:ld,packing:cd,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:vd,shadowmap_vertex:_d,shadowmask_pars_fragment:xd,skinbase_vertex:Md,skinning_pars_vertex:wd,skinning_vertex:Sd,skinnormal_vertex:yd,specularmap_fragment:bd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Pd,uv_pars_vertex:Dd,uv_vertex:Ld,worldpos_vertex:Ud,background_vert:Id,background_frag:Fd,backgroundCube_vert:Nd,backgroundCube_frag:Od,cube_vert:Bd,cube_frag:zd,depth_vert:kd,depth_frag:Vd,distanceRGBA_vert:Hd,distanceRGBA_frag:Gd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:Yd,meshbasic_vert:jd,meshbasic_frag:$d,meshlambert_vert:Kd,meshlambert_frag:Zd,meshmatcap_vert:Jd,meshmatcap_frag:Qd,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:lf,points_vert:cf,points_frag:hf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Qt={basic:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:At([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:At([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:At([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:At([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:At([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:At([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:At([se.common,se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:At([se.lights,se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const fs={r:0,b:0,g:0},Un=new rn,mf=new Ie;function gf(s,e,t,n,i,r,a){const o=new He(0);let l=r===!0?0:1,c,h,f=null,d=0,m=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function v(b){let w=!1;const T=g(b);T===null?u(o,l):T&&T.isColor&&(u(T,1),w=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,w){const T=g(w);T&&(T.isCubeTexture||T.mapping===Rs)?(h===void 0&&(h=new je(new Zt(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:gi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Un.copy(w.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(Un)),h.material.toneMapped=Xe.getTransfer(T.colorSpace)!==Ke,(f!==T||d!==T.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,f=T,d=T.version,m=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new je(new Si(2,2),new Xt({name:"BackgroundMaterial",uniforms:gi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(T.colorSpace)!==Ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,m=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,w){b.getRGB(fs,Sl(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,w,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:v,addToRenderList:p,dispose:y}}function vf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,D,O,B,W){let Y=!1;const X=f(B,O,D);r!==X&&(r=X,c(r.object)),Y=m(M,B,O,W),Y&&g(M,B,O,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,w(M,D,O,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function f(M,D,O){const B=O.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Y=W[D.id];Y===void 0&&(Y={},W[D.id]=Y);let X=Y[B];return X===void 0&&(X=d(l()),Y[B]=X),X}function d(M){const D=[],O=[],B=[];for(let W=0;W<t;W++)D[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,D,O,B){const W=r.attributes,Y=D.attributes;let X=0;const te=O.getAttributes();for(const V in te)if(te[V].location>=0){const he=W[V];let ye=Y[V];if(ye===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(M,D,O,B){const W={},Y=D.attributes;let X=0;const te=O.getAttributes();for(const V in te)if(te[V].location>=0){let he=Y[V];he===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),W[V]=ye,X++}r.attributes=W,r.attributesNum=X,r.index=B}function v(){const M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function p(M){u(M,0)}function u(M,D){const O=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;O[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),W[M]!==D&&(s.vertexAttribDivisor(M,D),W[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let O=0,B=D.length;O<B;O++)D[O]!==M[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function b(M,D,O,B,W,Y,X){X===!0?s.vertexAttribIPointer(M,D,O,W,Y):s.vertexAttribPointer(M,D,O,B,W,Y)}function w(M,D,O,B){v();const W=B.attributes,Y=O.getAttributes(),X=D.defaultAttributeValues;for(const te in Y){const V=Y[te];if(V.location>=0){let re=W[te];if(re===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const he=re.normalized,ye=re.itemSize,ze=e.get(re);if(ze===void 0)continue;const Qe=ze.buffer,nt=ze.type,qe=ze.bytesPerElement,q=nt===s.INT||nt===s.UNSIGNED_INT||re.gpuType===pa;if(re.isInterleavedBufferAttribute){const K=re.data,fe=K.stride,De=re.offset;if(K.isInstancedInterleavedBuffer){for(let Se=0;Se<V.locationSize;Se++)u(V.location+Se,K.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<V.locationSize;Se++)p(V.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let Se=0;Se<V.locationSize;Se++)b(V.location+Se,ye/V.locationSize,nt,he,fe*qe,(De+ye/V.locationSize*Se)*qe,q)}else{if(re.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)u(V.location+K,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let K=0;K<V.locationSize;K++)p(V.location+K);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let K=0;K<V.locationSize;K++)b(V.location+K,ye/V.locationSize,nt,he,ye*qe,ye/V.locationSize*K*qe,q)}}else if(X!==void 0){const he=X[te];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(V.location,he);break;case 3:s.vertexAttrib3fv(V.location,he);break;case 4:s.vertexAttrib4fv(V.location,he);break;default:s.vertexAttrib1fv(V.location,he)}}}}y()}function T(){F();for(const M in n){const D=n[M];for(const O in D){const B=D[O];for(const W in B)h(B[W].object),delete B[W];delete D[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const O in D){const B=D[O];for(const W in B)h(B[W].object),delete B[W];delete D[O]}delete n[M.id]}function P(M){for(const D in n){const O=n[D];if(O[M.id]===void 0)continue;const B=O[M.id];for(const W in B)h(B[W].object),delete B[W];delete O[M.id]}}function F(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function _f(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,n,1)}function l(c,h,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==_t&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const F=P===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gt&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nt&&!F)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:T,maxSamples:A}}function Mf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Fn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,u=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,b=y*4;let w=u.clippingState||null;l.value=w,w=h(g,d,b,m);for(let T=0;T!==b;++T)w[T]=t[T];u.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,w=m;b!==v;++b,w+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function wf(s){let e=new WeakMap;function t(a,o){return o===bs?a.mapping=di:o===Dr&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bs||o===Dr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const li=4,So=[.125,.215,.35,.446,.526,.582],Bn=20,lr=new Ca,yo=new He;let cr=null,hr=0,ur=0,dr=!1;const Nn=(1+Math.sqrt(5))/2,si=1/Nn,bo=[new C(-Nn,si,0),new C(Nn,si,0),new C(-si,0,Nn),new C(si,0,Nn),new C(0,Nn,-si),new C(0,Nn,si),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Sf=new C;class ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Sf}=r;cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cr,hr,ur),this._renderer.xr.enabled=dr,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:zt,format:_t,colorSpace:mi,depthBuffer:!1},i=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yf(r)),this._blurMaterial=bf(r,e,t)}return i}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,i,r){const l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(yo),f.toneMapping=vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const v=new ba({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),p=new je(new Zt,v);let u=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,u=!0):(v.color.copy(yo),u=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const T=this._cubeSize;ps(i,w*T,b>2?T:0,T,T),f.setRenderTarget(i),u&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===di||e.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bo[(i-r-1)%bo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new je(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Bn;p>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const u=[];let y=0;for(let P=0;P<Bn;++P){const F=P/v,S=Math.exp(-F*F/2);u.push(S),P===0?y+=S:P<p&&(y+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const w=this._sizeLods[i],T=3*w*(i>b-li?i-b+li:0),A=4*(this._cubeSize-w);ps(t,T,A,3*w,2*w),l.setRenderTarget(t),l.render(f,lr)}}function yf(s){const e=[],t=[],n=[];let i=s;const r=s-li+1+So.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-li?l=So[a-s+li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,v=3,p=2,u=1,y=new Float32Array(v*g*m),b=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,F=A>2?0:-1,S=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];y.set(S,v*g*A),b.set(d,p*g*A);const M=[A,A,A,A,A,A];w.set(M,u*g*A)}const T=new an;T.setAttribute("position",new Ot(y,v)),T.setAttribute("uv",new Ot(b,p)),T.setAttribute("faceIndex",new Ot(w,u)),e.push(T),i>li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(s,e,t){const n=new Wt(s,e,t);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bf(s,e,t){const n=new Float32Array(Bn),i=new C(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function To(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Ao(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ef(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bs||l===Dr,h=l===di||l===fi;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ha(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new ha(s)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Af(s,e,t,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let b=0,w=y.length;b<w;b+=3){const T=y[b+0],A=y[b+1],P=y[b+2];d.push(T,A,A,P,P,T)}}else if(g!==void 0){const y=g.array;v=g.version;for(let b=0,w=y.length/3-1;b<w;b+=3){const T=b+0,A=b+1,P=b+2;d.push(T,A,A,P,P,T)}}else return;const p=new(gl(d)?wl:Ml)(d,1);p.version=v;const u=r.get(f);u&&e.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Rf(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){s.drawElements(n,m,r,d*a),t.update(m,n,1)}function c(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,d*a,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,n,1)}function f(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let u=0;for(let y=0;y<g;y++)u+=m[y]*v[y];t.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Cf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pf(s,e,t){const n=new WeakMap,i=new Ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let w=o.attributes.position.count*b,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*f),P=new Sa(A,w,T,f);P.type=Nt,P.needsUpdate=!0;const F=b*4;for(let M=0;M<f;M++){const D=p[M],O=u[M],B=y[M],W=w*T*4*M;for(let Y=0;Y<D.count;Y++){const X=Y*F;m===!0&&(i.fromBufferAttribute(D,Y),A[W+X+0]=i.x,A[W+X+1]=i.y,A[W+X+2]=i.z,A[W+X+3]=0),g===!0&&(i.fromBufferAttribute(O,Y),A[W+X+4]=i.x,A[W+X+5]=i.y,A[W+X+6]=i.z,A[W+X+7]=0),v===!0&&(i.fromBufferAttribute(B,Y),A[W+X+8]=i.x,A[W+X+9]=i.y,A[W+X+10]=i.z,A[W+X+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:P,size:new ce(w,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Df(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Pl=new yt,Ro=new bl(1,1),Dl=new Sa,Ll=new vl,Ul=new yl,Co=[],Po=[],Do=new Float32Array(16),Lo=new Float32Array(9),Uo=new Float32Array(4);function yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Co[i];if(r===void 0&&(r=new Float32Array(i),Co[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ds(s,e){let t=Po[e];t===void 0&&(t=new Int32Array(e),Po[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Lf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function If(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function Nf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Uo.set(n),s.uniformMatrix2fv(this.addr,!1,Uo),mt(t,n)}}function Of(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Lo.set(n),s.uniformMatrix3fv(this.addr,!1,Lo),mt(t,n)}}function Bf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Do.set(n),s.uniformMatrix4fv(this.addr,!1,Do),mt(t,n)}}function zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),mt(t,e)}}function Vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),mt(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),mt(t,e)}}function Gf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),mt(t,e)}}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),mt(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),mt(t,e)}}function Yf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ro.compareFunction=pl,r=Ro):r=Pl,t.setTexture2D(e||r,i)}function jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ll,i)}function $f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ul,i)}function Kf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dl,i)}function Zf(s){switch(s){case 5126:return Lf;case 35664:return Uf;case 35665:return If;case 35666:return Ff;case 35674:return Nf;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return kf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return Gf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Kf}}function Jf(s,e){s.uniform1fv(this.addr,e)}function Qf(s,e){const t=yi(e,this.size,2);s.uniform2fv(this.addr,t)}function ep(s,e){const t=yi(e,this.size,3);s.uniform3fv(this.addr,t)}function tp(s,e){const t=yi(e,this.size,4);s.uniform4fv(this.addr,t)}function np(s,e){const t=yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ip(s,e){const t=yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sp(s,e){const t=yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rp(s,e){s.uniform1iv(this.addr,e)}function ap(s,e){s.uniform2iv(this.addr,e)}function op(s,e){s.uniform3iv(this.addr,e)}function lp(s,e){s.uniform4iv(this.addr,e)}function cp(s,e){s.uniform1uiv(this.addr,e)}function hp(s,e){s.uniform2uiv(this.addr,e)}function up(s,e){s.uniform3uiv(this.addr,e)}function dp(s,e){s.uniform4uiv(this.addr,e)}function fp(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pl,r[a])}function pp(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ll,r[a])}function mp(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ul,r[a])}function gp(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Dl,r[a])}function vp(s){switch(s){case 5126:return Jf;case 35664:return Qf;case 35665:return ep;case 35666:return tp;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zf(t.type)}}class xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vp(t.type)}}class Mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Io(s,e){s.seq.push(e),s.map[e.id]=e}function wp(s,e,t){const n=s.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),a=fr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Io(t,c===void 0?new _p(o,s,e):new xp(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Mp(o),Io(t,f)),t=f}}}class ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);wp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Sp=37297;let yp=0;function bp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const No=new Oe;function Ep(s){Xe._getMatrix(No,Xe.workingColorSpace,s);const e=`mat3( ${No.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Es:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Oo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bp(s.getShaderSource(e),o)}else return r}function Tp(s,e){const t=Ep(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ap(s,e){let t;switch(e){case fc:t="Linear";break;case pc:t="Reinhard";break;case mc:t="Cineon";break;case gc:t="ACESFilmic";break;case _c:t="AgX";break;case xc:t="Neutral";break;case vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new C;function Rp(){Xe.getLuminanceCoefficients(ms);const s=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Pp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ii(s){return s!==""}function Bo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(s){return s.replace(Lp,Ip)}const Up=new Map;function Ip(s,e){let t=Ne[e];if(t===void 0){const n=Up.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ua(t)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(s){return s.replace(Fp,Np)}function Np(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===il?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rl:e="ENVMAP_BLENDING_MULTIPLY";break;case uc:e="ENVMAP_BLENDING_MIX";break;case dc:e="ENVMAP_BLENDING_ADD";break}return e}function Vp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Op(t),c=Bp(t),h=zp(t),f=kp(t),d=Vp(t),m=Cp(t),g=Pp(r),v=i.createProgram();let p,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ii).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ii).join(`
`),u.length>0&&(u+=`
`)):(p=[Vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),u=[Vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==vn?Ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Tp("linearToOutputTexel",t.outputColorSpace),Rp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=ua(a),a=Bo(a,t),a=zo(a,t),o=ua(o),o=Bo(o,t),o=zo(o,t),a=ko(a),o=ko(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=y+p+a,w=y+u+o,T=Fo(i,i.VERTEX_SHADER,b),A=Fo(i,i.FRAGMENT_SHADER,w);i.attachShader(v,T),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(D){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",B=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(A)||"",Y=O.trim(),X=B.trim(),te=W.trim();let V=!0,re=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,A);else{const he=Oo(i,T,"vertex"),ye=Oo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+he+`
`+ye)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||te==="")&&(re=!1);re&&(D.diagnostics={runnable:V,programLog:Y,vertexShader:{log:X,prefix:p},fragmentShader:{log:te,prefix:u}})}i.deleteShader(T),i.deleteShader(A),F=new ys(i,v),S=Dp(i,v)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Sp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}let Gp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xp(e),t.set(e,n)),n}}class Xp{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}}function qp(s,e,t,n,i,r,a){const o=new ya,l=new Wp,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,D,O,B){const W=O.fog,Y=B.geometry,X=S.isMeshStandardMaterial?O.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),V=te&&te.mapping===Rs?te.image.height:null,re=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=he!==void 0?he.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let Qe,nt,qe,q;if(re){const Ye=Qt[re];Qe=Ye.vertexShader,nt=Ye.fragmentShader}else Qe=S.vertexShader,nt=S.fragmentShader,l.update(S),qe=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const K=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,Se=B.isBatchedMesh===!0,Ge=!!S.map,xt=!!S.matcap,R=!!te,it=!!S.aoMap,Ue=!!S.lightMap,Ce=!!S.bumpMap,ge=!!S.normalMap,st=!!S.displacementMap,ve=!!S.emissiveMap,Be=!!S.metalnessMap,gt=!!S.roughnessMap,ct=S.anisotropy>0,E=S.clearcoat>0,_=S.dispersion>0,N=S.iridescence>0,G=S.sheen>0,$=S.transmission>0,H=ct&&!!S.anisotropyMap,we=E&&!!S.clearcoatMap,ne=E&&!!S.clearcoatNormalMap,_e=E&&!!S.clearcoatRoughnessMap,xe=N&&!!S.iridescenceMap,Q=N&&!!S.iridescenceThicknessMap,le=G&&!!S.sheenColorMap,Re=G&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ae=!!S.specularColorMap,Fe=!!S.specularIntensityMap,L=$&&!!S.transmissionMap,ee=$&&!!S.thicknessMap,ie=!!S.gradientMap,de=!!S.alphaMap,Z=S.alphaTest>0,j=!!S.alphaHash,me=!!S.extensions;let Le=vn;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=s.toneMapping);const et={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:nt,defines:S.defines,customVertexShaderID:qe,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Se,batchingColor:Se&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:mi,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:xt,envMap:R,envMapMode:R&&te.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:Ue,bumpMap:Ce,normalMap:ge,displacementMap:d&&st,emissiveMap:ve,normalMapObjectSpace:ge&&S.normalMapType===yc,normalMapTangentSpace:ge&&S.normalMapType===fl,metalnessMap:Be,roughnessMap:gt,anisotropy:ct,anisotropyMap:H,clearcoat:E,clearcoatMap:we,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:_,iridescence:N,iridescenceMap:xe,iridescenceThicknessMap:Q,sheen:G,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:ae,specularIntensityMap:Fe,transmission:$,transmissionMap:L,thicknessMap:ee,gradientMap:ie,opaque:S.transparent===!1&&S.blending===zn&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:Z,alphaHash:j,combine:S.combine,mapUv:Ge&&v(S.map.channel),aoMapUv:it&&v(S.aoMap.channel),lightMapUv:Ue&&v(S.lightMap.channel),bumpMapUv:Ce&&v(S.bumpMap.channel),normalMapUv:ge&&v(S.normalMap.channel),displacementMapUv:st&&v(S.displacementMap.channel),emissiveMapUv:ve&&v(S.emissiveMap.channel),metalnessMapUv:Be&&v(S.metalnessMap.channel),roughnessMapUv:gt&&v(S.roughnessMap.channel),anisotropyMapUv:H&&v(S.anisotropyMap.channel),clearcoatMapUv:we&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(S.sheenRoughnessMap.channel),specularMapUv:Me&&v(S.specularMap.channel),specularColorMapUv:ae&&v(S.specularColorMap.channel),specularIntensityMapUv:Fe&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:ee&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||ct),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Ge||de),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Ke,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===Ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(M,S),b(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function w(S){const M=g[S.type];let D;if(M){const O=Qt[M];D=gh.clone(O.uniforms)}else D=S.uniforms;return D}function T(S,M){let D;for(let O=0,B=h.length;O<B;O++){const W=h[O];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Hp(s,M,S,r),h.push(D)),D}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:F}}function Yp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function jp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ho(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Go(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,g,v,p){let u=s[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},s[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=p),e++,u}function o(f,d,m,g,v,p){const u=a(f,d,m,g,v,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function l(f,d,m,g,v,p){const u=a(f,d,m,g,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||jp),n.length>1&&n.sort(d||Ho),i.length>1&&i.sort(d||Ho)}function h(){for(let f=e,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function $p(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Go,s.set(n,[a])):i>=r.length?(a=new Go,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new He};break;case"SpotLight":t={position:new C,direction:new C,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Zp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jp=0;function Qp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function em(s){const e=new Kp,t=Zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Ie,a=new Ie;function o(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,y=0,b=0,w=0,T=0,A=0,P=0;c.sort(Qp);for(let S=0,M=c.length;S<M;S++){const D=c[S],O=D.color,B=D.intensity,W=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*B,f+=O.g*B,d+=O.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);P++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,V=t.get(D);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=D.shadow.matrix,y++}n.directional[m]=X,m++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[v]=X;const te=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,te.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[v]=te.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Y,w++}v++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(O).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=X,p++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const te=D.shadow,V=t.get(D);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[u]=X,u++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==y||F.numPointShadows!==b||F.numSpotShadows!==w||F.numSpotMaps!==T||F.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=y,F.numPointShadows=b,F.numSpotShadows=w,F.numSpotMaps=T,F.numLightProbes=P,n.version=Jp++)}function l(c,h){let f=0,d=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const b=c[u];if(b.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),f++}else if(b.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Wo(s){const e=new em(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Wo(s),e.set(i,[o])):r>=a.length?(o=new Wo(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sm(s,e,t){let n=new Aa;const i=new ce,r=new ce,a=new Ee,o=new Th({depthPacking:Sc}),l=new Ah,c={},h=t.maxTextureSize,f={[xn]:Rt,[Rt]:xn,[en]:en},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:nm,fragmentShader:im}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let u=this.type;this.render=function(A,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(sn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==fn&&this.type===fn,W=u===fn&&this.type!==fn;for(let Y=0,X=A.length;Y<X;Y++){const te=A[Y],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const re=V.getFrameExtents();if(i.multiply(re),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const ye=this.type!==fn?{minFilter:dt,magFilter:dt}:{};V.map!==null&&V.map.dispose(),V.map=new Wt(i.x,i.y,ye),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const he=V.getViewportCount();for(let ye=0;ye<he;ye++){const ze=V.getViewport(ye);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),O.viewport(a),V.updateMatrices(te,ye),n=V.getFrustum(),w(P,F,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&y(V,F),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(S,M,D)};function y(A,P){const F=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,F,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,F,m,v,null)}function b(A,P,F,S){let M=null;const D=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=F.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=M.uuid,B=P.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let Y=W[B];Y===void 0&&(Y=M.clone(),W[B]=Y,P.addEventListener("dispose",T)),M=Y}if(M.visible=P.visible,M.wireframe=P.wireframe,S===fn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=F}return M}function w(A,P,F,S,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const Y=B.groups;for(let X=0,te=Y.length;X<te;X++){const V=Y[X],re=W[V.materialIndex];if(re&&re.visible){const he=b(A,re,S,M);A.onBeforeShadow(s,A,P,F,B,he,V),s.renderBufferDirect(F,null,B,he,A,V),A.onAfterShadow(s,A,P,F,B,he,V)}}}else if(W.visible){const Y=b(A,W,S,M);A.onBeforeShadow(s,A,P,F,B,Y,null),s.renderBufferDirect(F,null,B,Y,A,null),A.onAfterShadow(s,A,P,F,B,Y,null)}}const O=A.children;for(let B=0,W=O.length;B<W;B++)w(O[B],P,F,S,M)}function T(A){A.target.removeEventListener("dispose",T);for(const F in c){const S=c[F],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const rm={[br]:Er,[Tr]:Cr,[Ar]:Pr,[ui]:Rr,[Er]:br,[Cr]:Tr,[Pr]:Ar,[Rr]:ui};function am(s,e){function t(){let L=!1;const ee=new Ee;let ie=null;const de=new Ee(0,0,0,0);return{setMask:function(Z){ie!==Z&&!L&&(s.colorMask(Z,Z,Z,Z),ie=Z)},setLocked:function(Z){L=Z},setClear:function(Z,j,me,Le,et){et===!0&&(Z*=Le,j*=Le,me*=Le),ee.set(Z,j,me,Le),de.equals(ee)===!1&&(s.clearColor(Z,j,me,Le),de.copy(ee))},reset:function(){L=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,ie=null,de=null,Z=null;return{setReversed:function(j){if(ee!==j){const me=e.get("EXT_clip_control");j?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=j;const Le=Z;Z=null,this.setClear(Le)}},getReversed:function(){return ee},setTest:function(j){j?K(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(j){ie!==j&&!L&&(s.depthMask(j),ie=j)},setFunc:function(j){if(ee&&(j=rm[j]),de!==j){switch(j){case br:s.depthFunc(s.NEVER);break;case Er:s.depthFunc(s.ALWAYS);break;case Tr:s.depthFunc(s.LESS);break;case ui:s.depthFunc(s.LEQUAL);break;case Ar:s.depthFunc(s.EQUAL);break;case Rr:s.depthFunc(s.GEQUAL);break;case Cr:s.depthFunc(s.GREATER);break;case Pr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=j}},setLocked:function(j){L=j},setClear:function(j){Z!==j&&(ee&&(j=1-j),s.clearDepth(j),Z=j)},reset:function(){L=!1,ie=null,de=null,Z=null,ee=!1}}}function i(){let L=!1,ee=null,ie=null,de=null,Z=null,j=null,me=null,Le=null,et=null;return{setTest:function(Ye){L||(Ye?K(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Ye){ee!==Ye&&!L&&(s.stencilMask(Ye),ee=Ye)},setFunc:function(Ye,on,Jt){(ie!==Ye||de!==on||Z!==Jt)&&(s.stencilFunc(Ye,on,Jt),ie=Ye,de=on,Z=Jt)},setOp:function(Ye,on,Jt){(j!==Ye||me!==on||Le!==Jt)&&(s.stencilOp(Ye,on,Jt),j=Ye,me=on,Le=Jt)},setLocked:function(Ye){L=Ye},setClear:function(Ye){et!==Ye&&(s.clearStencil(Ye),et=Ye)},reset:function(){L=!1,ee=null,ie=null,de=null,Z=null,j=null,me=null,Le=null,et=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,u=null,y=null,b=null,w=null,T=null,A=null,P=new He(0,0,0),F=0,S=!1,M=null,D=null,O=null,B=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,te=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=te>=2);let re=null,he={};const ye=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),Qe=new Ee().fromArray(ye),nt=new Ee().fromArray(ze);function qe(L,ee,ie,de){const Z=new Uint8Array(4),j=s.createTexture();s.bindTexture(L,j),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<ie;me++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ee,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Z):s.texImage2D(ee+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Z);return j}const q={};q[s.TEXTURE_2D]=qe(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(ui),Ce(!1),ge(Va),K(s.CULL_FACE),it(sn);function K(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function fe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function De(L,ee){return f[L]!==ee?(s.bindFramebuffer(L,ee),f[L]=ee,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ee),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ee),!0):!1}function Se(L,ee){let ie=m,de=!1;if(L){ie=d.get(ee),ie===void 0&&(ie=[],d.set(ee,ie));const Z=L.textures;if(ie.length!==Z.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let j=0,me=Z.length;j<me;j++)ie[j]=s.COLOR_ATTACHMENT0+j;ie.length=Z.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function Ge(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const xt={[On]:s.FUNC_ADD,[jl]:s.FUNC_SUBTRACT,[$l]:s.FUNC_REVERSE_SUBTRACT};xt[Kl]=s.MIN,xt[Zl]=s.MAX;const R={[Jl]:s.ZERO,[Ql]:s.ONE,[ec]:s.SRC_COLOR,[Sr]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[sc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[tc]:s.ONE_MINUS_SRC_COLOR,[yr]:s.ONE_MINUS_SRC_ALPHA,[rc]:s.ONE_MINUS_DST_COLOR,[ic]:s.ONE_MINUS_DST_ALPHA,[oc]:s.CONSTANT_COLOR,[lc]:s.ONE_MINUS_CONSTANT_COLOR,[cc]:s.CONSTANT_ALPHA,[hc]:s.ONE_MINUS_CONSTANT_ALPHA};function it(L,ee,ie,de,Z,j,me,Le,et,Ye){if(L===sn){v===!0&&(fe(s.BLEND),v=!1);return}if(v===!1&&(K(s.BLEND),v=!0),L!==Yl){if(L!==p||Ye!==S){if((u!==On||w!==On)&&(s.blendEquation(s.FUNC_ADD),u=On,w=On),Ye)switch(L){case zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.ONE,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ga:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,A=null,P.set(0,0,0),F=0,p=L,S=Ye}return}Z=Z||ee,j=j||ie,me=me||de,(ee!==u||Z!==w)&&(s.blendEquationSeparate(xt[ee],xt[Z]),u=ee,w=Z),(ie!==y||de!==b||j!==T||me!==A)&&(s.blendFuncSeparate(R[ie],R[de],R[j],R[me]),y=ie,b=de,T=j,A=me),(Le.equals(P)===!1||et!==F)&&(s.blendColor(Le.r,Le.g,Le.b,et),P.copy(Le),F=et),p=L,S=!1}function Ue(L,ee){L.side===en?fe(s.CULL_FACE):K(s.CULL_FACE);let ie=L.side===Rt;ee&&(ie=!ie),Ce(ie),L.blending===zn&&L.transparent===!1?it(sn):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function ge(L){L!==Xl?(K(s.CULL_FACE),L!==D&&(L===Va?s.cullFace(s.BACK):L===ql?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),D=L}function st(L){L!==O&&(X&&s.lineWidth(L),O=L)}function ve(L,ee,ie){L?(K(s.POLYGON_OFFSET_FILL),(B!==ee||W!==ie)&&(s.polygonOffset(ee,ie),B=ee,W=ie)):fe(s.POLYGON_OFFSET_FILL)}function Be(L){L?K(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function gt(L){L===void 0&&(L=s.TEXTURE0+Y-1),re!==L&&(s.activeTexture(L),re=L)}function ct(L,ee,ie){ie===void 0&&(re===null?ie=s.TEXTURE0+Y-1:ie=re);let de=he[ie];de===void 0&&(de={type:void 0,texture:void 0},he[ie]=de),(de.type!==L||de.texture!==ee)&&(re!==ie&&(s.activeTexture(ie),re=ie),s.bindTexture(L,ee||q[L]),de.type=L,de.texture=ee)}function E(){const L=he[re];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(L){Qe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function Re(L){nt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function Me(L,ee){let ie=c.get(ee);ie===void 0&&(ie=new WeakMap,c.set(ee,ie));let de=ie.get(L);de===void 0&&(de=s.getUniformBlockIndex(ee,L.name),ie.set(L,de))}function ae(L,ee){const de=c.get(ee).get(L);l.get(ee)!==de&&(s.uniformBlockBinding(ee,de,L.__bindingPointIndex),l.set(ee,de))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,he={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,u=null,y=null,b=null,w=null,T=null,A=null,P=new He(0,0,0),F=0,S=!1,M=null,D=null,O=null,B=null,W=null,Qe.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:fe,bindFramebuffer:De,drawBuffers:Se,useProgram:Ge,setBlending:it,setMaterial:Ue,setFlipSided:Ce,setCullFace:ge,setLineWidth:st,setPolygonOffset:ve,setScissorTest:Be,activeTexture:gt,bindTexture:ct,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:xe,texImage3D:Q,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:_e,texSubImage2D:G,texSubImage3D:$,compressedTexSubImage2D:H,compressedTexSubImage3D:we,scissor:le,viewport:Re,reset:Fe}}function om(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):As("canvas")}function v(E,_,N){let G=1;const $=ct(E);if(($.width>N||$.height>N)&&(G=N/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const H=Math.floor(G*$.width),we=Math.floor(G*$.height);f===void 0&&(f=g(H,we));const ne=_?g(H,we):f;return ne.width=H,ne.height=we,ne.getContext("2d").drawImage(E,0,0,H,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+H+"x"+we+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function p(E){return E.generateMipmaps}function u(E){s.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(E,_,N,G,$=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=_;if(_===s.RED&&(N===s.FLOAT&&(H=s.R32F),N===s.HALF_FLOAT&&(H=s.R16F),N===s.UNSIGNED_BYTE&&(H=s.R8)),_===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.R8UI),N===s.UNSIGNED_SHORT&&(H=s.R16UI),N===s.UNSIGNED_INT&&(H=s.R32UI),N===s.BYTE&&(H=s.R8I),N===s.SHORT&&(H=s.R16I),N===s.INT&&(H=s.R32I)),_===s.RG&&(N===s.FLOAT&&(H=s.RG32F),N===s.HALF_FLOAT&&(H=s.RG16F),N===s.UNSIGNED_BYTE&&(H=s.RG8)),_===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RG8UI),N===s.UNSIGNED_SHORT&&(H=s.RG16UI),N===s.UNSIGNED_INT&&(H=s.RG32UI),N===s.BYTE&&(H=s.RG8I),N===s.SHORT&&(H=s.RG16I),N===s.INT&&(H=s.RG32I)),_===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RGB8UI),N===s.UNSIGNED_SHORT&&(H=s.RGB16UI),N===s.UNSIGNED_INT&&(H=s.RGB32UI),N===s.BYTE&&(H=s.RGB8I),N===s.SHORT&&(H=s.RGB16I),N===s.INT&&(H=s.RGB32I)),_===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),N===s.UNSIGNED_INT&&(H=s.RGBA32UI),N===s.BYTE&&(H=s.RGBA8I),N===s.SHORT&&(H=s.RGBA16I),N===s.INT&&(H=s.RGBA32I)),_===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),_===s.RGBA){const we=$?Es:Xe.getTransfer(G);N===s.FLOAT&&(H=s.RGBA32F),N===s.HALF_FLOAT&&(H=s.RGBA16F),N===s.UNSIGNED_BYTE&&(H=we===Ke?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function w(E,_){let N;return E?_===null||_===kn||_===zi?N=s.DEPTH24_STENCIL8:_===Nt?N=s.DEPTH32F_STENCIL8:_===Bi&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===kn||_===zi?N=s.DEPTH_COMPONENT24:_===Nt?N=s.DEPTH_COMPONENT32F:_===Bi&&(N=s.DEPTH_COMPONENT16),N}function T(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==dt&&E.minFilter!==ht?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),F(_),_.isVideoTexture&&h.delete(_)}function P(E){const _=E.target;_.removeEventListener("dispose",P),M(_)}function F(E){const _=n.get(E);if(_.__webglInit===void 0)return;const N=E.source,G=d.get(N);if(G){const $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(E),Object.keys(G).length===0&&d.delete(N)}n.remove(E)}function S(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const N=E.source,G=d.get(N);delete G[_.__cacheKey],a.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)s.deleteFramebuffer(_.__webglFramebuffer[G][$]);else s.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)s.deleteFramebuffer(_.__webglFramebuffer[G]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let G=0,$=N.length;G<$;G++){const H=n.get(N[G]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(N[G])}n.remove(E)}let D=0;function O(){D=0}function B(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Y(E,_){const N=n.get(E);if(E.isVideoTexture&&Be(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+_)}function X(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){q(N,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+_)}function te(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){q(N,E,_);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+_)}function V(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){K(N,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+_)}const re={[pi]:s.REPEAT,[Dt]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},he={[dt]:s.NEAREST,[Mc]:s.NEAREST_MIPMAP_NEAREST,[ji]:s.NEAREST_MIPMAP_LINEAR,[ht]:s.LINEAR,[Os]:s.LINEAR_MIPMAP_NEAREST,[tn]:s.LINEAR_MIPMAP_LINEAR},ye={[bc]:s.NEVER,[Pc]:s.ALWAYS,[Ec]:s.LESS,[pl]:s.LEQUAL,[Tc]:s.EQUAL,[Cc]:s.GEQUAL,[Ac]:s.GREATER,[Rc]:s.NOTEQUAL};function ze(E,_){if(_.type===Nt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ht||_.magFilter===Os||_.magFilter===ji||_.magFilter===tn||_.minFilter===ht||_.minFilter===Os||_.minFilter===ji||_.minFilter===tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,re[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,re[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,re[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,he[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dt||_.minFilter!==ji&&_.minFilter!==tn||_.type===Nt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let $=d.get(G);$===void 0&&($={},d.set(G,$));const H=W(_);if(H!==E.__cacheKey){$[H]===void 0&&($[H]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[H].usedTimes++;const we=$[E.__cacheKey];we!==void 0&&($[E.__cacheKey].usedTimes--,we.usedTimes===0&&S(_)),E.__cacheKey=H,E.__webglTexture=$[H].texture}return N}function nt(E,_,N){return Math.floor(Math.floor(E/N)/_)}function qe(E,_,N,G){const H=E.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,N,G,_.data);else{H.sort((Q,le)=>Q.start-le.start);let we=0;for(let Q=1;Q<H.length;Q++){const le=H[we],Re=H[Q],Me=le.start+le.count,ae=nt(Re.start,_.width,4),Fe=nt(le.start,_.width,4);Re.start<=Me+1&&ae===Fe&&nt(Re.start+Re.count-1,_.width,4)===ae?le.count=Math.max(le.count,Re.start+Re.count-le.start):(++we,H[we]=Re)}H.length=we+1;const ne=s.getParameter(s.UNPACK_ROW_LENGTH),_e=s.getParameter(s.UNPACK_SKIP_PIXELS),xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Q=0,le=H.length;Q<le;Q++){const Re=H[Q],Me=Math.floor(Re.start/4),ae=Math.ceil(Re.count/4),Fe=Me%_.width,L=Math.floor(Me/_.width),ee=ae,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Fe,L,ee,ie,N,G,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function q(E,_,N){let G=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=s.TEXTURE_3D);const $=Qe(E,_),H=_.source;t.bindTexture(G,E.__webglTexture,s.TEXTURE0+N);const we=n.get(H);if(H.version!==we.__version||$===!0){t.activeTexture(s.TEXTURE0+N);const ne=Xe.getPrimaries(Xe.workingColorSpace),_e=_.colorSpace===$t?null:Xe.getPrimaries(_.colorSpace),xe=_.colorSpace===$t||ne===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Q=v(_.image,!1,i.maxTextureSize);Q=gt(_,Q);const le=r.convert(_.format,_.colorSpace),Re=r.convert(_.type);let Me=b(_.internalFormat,le,Re,_.colorSpace,_.isVideoTexture);ze(G,_);let ae;const Fe=_.mipmaps,L=_.isVideoTexture!==!0,ee=we.__version===void 0||$===!0,ie=H.dataReady,de=T(_,Q);if(_.isDepthTexture)Me=w(_.format===Vi,_.type),ee&&(L?t.texStorage2D(s.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Me,Q.width,Q.height,0,le,Re,null));else if(_.isDataTexture)if(Fe.length>0){L&&ee&&t.texStorage2D(s.TEXTURE_2D,de,Me,Fe[0].width,Fe[0].height);for(let Z=0,j=Fe.length;Z<j;Z++)ae=Fe[Z],L?ie&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,le,Re,ae.data):t.texImage2D(s.TEXTURE_2D,Z,Me,ae.width,ae.height,0,le,Re,ae.data);_.generateMipmaps=!1}else L?(ee&&t.texStorage2D(s.TEXTURE_2D,de,Me,Q.width,Q.height),ie&&qe(_,Q,le,Re)):t.texImage2D(s.TEXTURE_2D,0,Me,Q.width,Q.height,0,le,Re,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Me,Fe[0].width,Fe[0].height,Q.depth);for(let Z=0,j=Fe.length;Z<j;Z++)if(ae=Fe[Z],_.format!==_t)if(le!==null)if(L){if(ie)if(_.layerUpdates.size>0){const me=wo(ae.width,ae.height,_.format,_.type);for(const Le of _.layerUpdates){const et=ae.data.subarray(Le*me/ae.data.BYTES_PER_ELEMENT,(Le+1)*me/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,Le,ae.width,ae.height,1,le,et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,le,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Me,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,le,Re,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,Me,ae.width,ae.height,Q.depth,0,le,Re,ae.data)}else{L&&ee&&t.texStorage2D(s.TEXTURE_2D,de,Me,Fe[0].width,Fe[0].height);for(let Z=0,j=Fe.length;Z<j;Z++)ae=Fe[Z],_.format!==_t?le!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,le,Re,ae.data):t.texImage2D(s.TEXTURE_2D,Z,Me,ae.width,ae.height,0,le,Re,ae.data)}else if(_.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Me,Q.width,Q.height,Q.depth),ie)if(_.layerUpdates.size>0){const Z=wo(Q.width,Q.height,_.format,_.type);for(const j of _.layerUpdates){const me=Q.data.subarray(j*Z/Q.data.BYTES_PER_ELEMENT,(j+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,Re,me)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Re,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,le,Re,Q.data);else if(_.isData3DTexture)L?(ee&&t.texStorage3D(s.TEXTURE_3D,de,Me,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Re,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,le,Re,Q.data);else if(_.isFramebufferTexture){if(ee)if(L)t.texStorage2D(s.TEXTURE_2D,de,Me,Q.width,Q.height);else{let Z=Q.width,j=Q.height;for(let me=0;me<de;me++)t.texImage2D(s.TEXTURE_2D,me,Me,Z,j,0,le,Re,null),Z>>=1,j>>=1}}else if(Fe.length>0){if(L&&ee){const Z=ct(Fe[0]);t.texStorage2D(s.TEXTURE_2D,de,Me,Z.width,Z.height)}for(let Z=0,j=Fe.length;Z<j;Z++)ae=Fe[Z],L?ie&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,le,Re,ae):t.texImage2D(s.TEXTURE_2D,Z,Me,le,Re,ae);_.generateMipmaps=!1}else if(L){if(ee){const Z=ct(Q);t.texStorage2D(s.TEXTURE_2D,de,Me,Z.width,Z.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Re,Q)}else t.texImage2D(s.TEXTURE_2D,0,Me,le,Re,Q);p(_)&&u(G),we.__version=H.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function K(E,_,N){if(_.image.length!==6)return;const G=Qe(E,_),$=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+N);const H=n.get($);if($.version!==H.__version||G===!0){t.activeTexture(s.TEXTURE0+N);const we=Xe.getPrimaries(Xe.workingColorSpace),ne=_.colorSpace===$t?null:Xe.getPrimaries(_.colorSpace),_e=_.colorSpace===$t||we===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!xe&&!Q?le[j]=v(_.image[j],!0,i.maxCubemapSize):le[j]=Q?_.image[j].image:_.image[j],le[j]=gt(_,le[j]);const Re=le[0],Me=r.convert(_.format,_.colorSpace),ae=r.convert(_.type),Fe=b(_.internalFormat,Me,ae,_.colorSpace),L=_.isVideoTexture!==!0,ee=H.__version===void 0||G===!0,ie=$.dataReady;let de=T(_,Re);ze(s.TEXTURE_CUBE_MAP,_);let Z;if(xe){L&&ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Fe,Re.width,Re.height);for(let j=0;j<6;j++){Z=le[j].mipmaps;for(let me=0;me<Z.length;me++){const Le=Z[me];_.format!==_t?Me!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,Le.width,Le.height,Me,ae,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,Fe,Le.width,Le.height,0,Me,ae,Le.data)}}}else{if(Z=_.mipmaps,L&&ee){Z.length>0&&de++;const j=ct(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Fe,j.width,j.height)}for(let j=0;j<6;j++)if(Q){L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Me,ae,le[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,le[j].width,le[j].height,0,Me,ae,le[j].data);for(let me=0;me<Z.length;me++){const et=Z[me].image[j].image;L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,et.width,et.height,Me,ae,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,Fe,et.width,et.height,0,Me,ae,et.data)}}else{L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me,ae,le[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,Me,ae,le[j]);for(let me=0;me<Z.length;me++){const Le=Z[me];L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,Me,ae,Le.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,Fe,Me,ae,Le.image[j])}}}p(_)&&u(s.TEXTURE_CUBE_MAP),H.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function fe(E,_,N,G,$,H){const we=r.convert(N.format,N.colorSpace),ne=r.convert(N.type),_e=b(N.internalFormat,we,ne,N.colorSpace),xe=n.get(_),Q=n.get(N);if(Q.__renderTarget=_,!xe.__hasExternalTextures){const le=Math.max(1,_.width>>H),Re=Math.max(1,_.height>>H);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,H,_e,le,Re,_.depth,0,we,ne,null):t.texImage2D($,H,_e,le,Re,0,we,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,$,Q.__webglTexture,0,st(_)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,$,Q.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(E,_,N){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,H=w(_.stencilBuffer,$),we=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=st(_);ve(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,H,_.width,_.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,H,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,H,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,E)}else{const G=_.textures;for(let $=0;$<G.length;$++){const H=G[$],we=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),_e=b(H.internalFormat,we,ne,H.colorSpace),xe=st(_);N&&ve(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,_e,_.width,_.height):ve(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,_e,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,_e,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const $=G.__webglTexture,H=st(_);if(_.depthTexture.format===ki)ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(_.depthTexture.format===Vi)ve(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ge(E){const _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const G=E.texture.mipmaps;G&&G.length>0?Se(_.__webglFramebuffer[0],E):Se(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=s.createRenderbuffer(),De(_.__webglDepthbuffer[G],E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,H)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),De(_.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(E,_,N){const G=n.get(E);_!==void 0&&fe(G.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ge(E)}function R(E){const _=E.texture,N=n.get(E),G=n.get(_);E.addEventListener("dispose",P);const $=E.textures,H=E.isWebGLCubeRenderTarget===!0,we=$.length>1;if(we||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=_.version,a.memory.textures++),H){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let _e=0;_e<_.mipmaps.length;_e++)N.__webglFramebuffer[ne][_e]=s.createFramebuffer()}else N.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)N.__webglFramebuffer[ne]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(we)for(let ne=0,_e=$.length;ne<_e;ne++){const xe=n.get($[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&ve(E)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const _e=$[ne];N.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const xe=r.convert(_e.format,_e.colorSpace),Q=r.convert(_e.type),le=b(_e.internalFormat,xe,Q,_e.colorSpace,E.isXRRenderTarget===!0),Re=st(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),De(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),ze(s.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)fe(N.__webglFramebuffer[ne][_e],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else fe(N.__webglFramebuffer[ne],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(_)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ne=0,_e=$.length;ne<_e;ne++){const xe=$[ne],Q=n.get(xe);let le=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),ze(le,xe),fe(N.__webglFramebuffer,E,xe,s.COLOR_ATTACHMENT0+ne,le,0),p(xe)&&u(le)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,G.__webglTexture),ze(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)fe(N.__webglFramebuffer[_e],E,_,s.COLOR_ATTACHMENT0,ne,_e);else fe(N.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ne,0);p(_)&&u(ne),t.unbindTexture()}E.depthBuffer&&Ge(E)}function it(E){const _=E.textures;for(let N=0,G=_.length;N<G;N++){const $=_[N];if(p($)){const H=y(E),we=n.get($).__webglTexture;t.bindTexture(H,we),u(H),t.unbindTexture()}}}const Ue=[],Ce=[];function ge(E){if(E.samples>0){if(ve(E)===!1){const _=E.textures,N=E.width,G=E.height;let $=s.COLOR_BUFFER_BIT;const H=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(E),ne=_.length>1;if(ne)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const _e=E.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const Q=n.get(_[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,N,G,0,0,N,G,$,s.NEAREST),l===!0&&(Ue.length=0,Ce.length=0,Ue.push(s.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ue.push(H),Ce.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const Q=n.get(_[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function st(E){return Math.min(i.maxSamples,E.samples)}function ve(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function gt(E,_){const N=E.colorSpace,G=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==mi&&N!==$t&&(Xe.getTransfer(N)===Ke?(G!==_t||$!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ct(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=xt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function lm(s,e){function t(n,i=$t){let r;const a=Xe.getTransfer(i);if(n===Gt)return s.UNSIGNED_BYTE;if(n===ma)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ol)return s.BYTE;if(n===ll)return s.SHORT;if(n===Bi)return s.UNSIGNED_SHORT;if(n===pa)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===Nt)return s.FLOAT;if(n===zt)return s.HALF_FLOAT;if(n===ul)return s.ALPHA;if(n===dl)return s.RGB;if(n===_t)return s.RGBA;if(n===ki)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===Wi)return s.RED;if(n===va)return s.RED_INTEGER;if(n===_i)return s.RG;if(n===_a)return s.RG_INTEGER;if(n===xa)return s.RGBA_INTEGER;if(n===xs||n===Ms||n===ws||n===Ss)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ur||n===Ir||n===Fr||n===Nr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===Br||n===zr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Or||n===Br)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kr||n===Vr||n===Hr||n===Gr||n===Wr||n===Xr||n===qr||n===Yr||n===jr||n===$r||n===Kr||n===Zr||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$r)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===ta||n===na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ea)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new El(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:cm,fragmentShader:hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dm extends xi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new um,u={},y=t.getContextAttributes();let b=null,w=null;const T=[],A=[],P=new ce;let F=null;const S=new Pt;S.viewport=new Ee;const M=new Pt;M.viewport=new Ee;const D=[S,M],O=new Dh;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=T[q];return K===void 0&&(K=new sr,T[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=T[q];return K===void 0&&(K=new sr,T[q]=K),K.getGripSpace()},this.getHand=function(q){let K=T[q];return K===void 0&&(K=new sr,T[q]=K),K.getHandSpace()};function Y(q){const K=A.indexOf(q.inputSource);if(K===-1)return;const fe=T[K];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||a),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",te);for(let q=0;q<T.length;q++){const K=A[q];K!==null&&(A[q]=null,T[q].disconnect(K))}B=null,W=null,p.reset();for(const q in u)delete u[q];e.setRenderTarget(b),m=null,d=null,f=null,i=null,w=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",X),i.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Vi:ki,De=y.stencil?zi:kn);const Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Wt(d.textureWidth,d.textureHeight,{format:_t,type:Gt,depthTexture:new bl(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Wt(m.framebufferWidth,m.framebufferHeight,{format:_t,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(q){for(let K=0;K<q.removed.length;K++){const fe=q.removed[K],De=A.indexOf(fe);De>=0&&(A[De]=null,T[De].disconnect(fe))}for(let K=0;K<q.added.length;K++){const fe=q.added[K];let De=A.indexOf(fe);if(De===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=A.length){A.push(fe),De=Ge;break}else if(A[Ge]===null){A[Ge]=fe,De=Ge;break}if(De===-1)break}const Se=T[De];Se&&Se.connect(fe)}}const V=new C,re=new C;function he(q,K,fe){V.setFromMatrixPosition(K.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const De=V.distanceTo(re),Se=K.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,xt=Se[14]/(Se[10]-1),R=Se[14]/(Se[10]+1),it=(Se[9]+1)/Se[5],Ue=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],ge=(Ge[8]+1)/Ge[0],st=xt*Ce,ve=xt*ge,Be=De/(-Ce+ge),gt=Be*-Ce;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ct=xt+Be,E=R+Be,_=st-gt,N=ve+(De-gt),G=it*R/E*ct,$=Ue*R/E*ct;q.projectionMatrix.makePerspective(_,N,G,$,ct,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ye(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,fe=q.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),O.near=M.near=S.near=K,O.far=M.far=S.far=fe,(B!==O.near||W!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,W=O.far),O.layers.mask=q.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const De=q.parent,Se=O.cameras;ye(O,De);for(let Ge=0;Ge<Se.length;Ge++)ye(Se[Ge],De);Se.length===2?he(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),ze(q,O,De)};function ze(q,K,fe){fe===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(q){return u[q]};let Qe=null;function nt(q,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let De=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let R=0;R<fe.length;R++){const it=fe[R];let Ue=null;if(m!==null)Ue=m.getViewport(it);else{const ge=f.getViewSubImage(d,it);Ue=ge.viewport,R===0&&(e.setRenderTargetTextures(w,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(w))}let Ce=D[R];Ce===void 0&&(Ce=new Pt,Ce.layers.enable(R),Ce.viewport=new Ee,D[R]=Ce),Ce.matrix.fromArray(it.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(it.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),R===0&&(O.matrix.copy(Ce.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(Ce)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const R=f.getDepthInformation(fe[0]);R&&R.isValid&&R.texture&&p.init(R,i.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let R=0;R<fe.length;R++){const it=fe[R].camera;if(it){let Ue=u[it];Ue||(Ue=new El,u[it]=Ue);const Ce=f.getCameraImage(it);Ue.sourceTexture=Ce}}}}for(let fe=0;fe<T.length;fe++){const De=A[fe],Se=T[fe];De!==null&&Se!==void 0&&Se.update(De,K,c||a)}Qe&&Qe(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const qe=new Cl;qe.setAnimationLoop(nt),this.setAnimationLoop=function(q){Qe=q},this.dispose=function(){}}}const In=new rn,fm=new Ie;function pm(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Sl(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,y,b,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,y,b):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Rt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Rt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u),b=y.envMap,w=y.envMapRotation;b&&(p.envMap.value=b,In.copy(w),In.x*=-1,In.y*=-1,In.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(In)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=b*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(y,T);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const b=f();y.__bindingPointIndex=b;const w=s.createBuffer(),T=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=i[y.id],w=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,P=w.length;A<P;A++){const F=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,M=F.length;S<M;S++){const D=F[S];if(m(D,A,S,T)===!0){const O=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Y=0;Y<B.length;Y++){const X=B[Y],te=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,b,w,T){const A=y.value,P=b+"_"+w;if(T[P]===void 0)return typeof A=="number"||typeof A=="boolean"?T[P]=A:T[P]=A.clone(),!0;{const F=T[P];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return T[P]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(y){const b=y.uniforms;let w=0;const T=16;for(let P=0,F=b.length;P<F;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,D=S.length;M<D;M++){const O=S[M],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Y=B.length;W<Y;W++){const X=B[W],te=v(X),V=w%T,re=V%te.boundary,he=V+re;w+=re,he!==0&&T-he<te.storage&&(w+=T-he),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=te.storage}}}const A=w%T;return A>0&&(w+=T-A),y.__size=w,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function u(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class gm{constructor(e={}){const{canvas:t=Yc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let T=!1;this._outputColorSpace=St;let A=0,P=0,F=null,S=-1,M=null;const D=new Ee,O=new Ee;let B=null;const W=new He(0);let Y=0,X=t.width,te=t.height,V=1,re=null,he=null;const ye=new Ee(0,0,X,te),ze=new Ee(0,0,X,te);let Qe=!1;const nt=new Aa;let qe=!1,q=!1;const K=new Ie,fe=new C,De=new Ee,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function xt(){return F===null?V:1}let R=n;function it(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fa}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Z,!1),R===null){const U="webgl2";if(R=it(U,x),R===null)throw it(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ue,Ce,ge,st,ve,Be,gt,ct,E,_,N,G,$,H,we,ne,_e,xe,Q,le,Re,Me,ae,Fe;function L(){Ue=new Tf(R),Ue.init(),Me=new lm(R,Ue),Ce=new xf(R,Ue,e,Me),ge=new am(R,Ue),Ce.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),st=new Cf(R),ve=new Yp,Be=new om(R,Ue,ge,ve,Ce,Me,st),gt=new wf(w),ct=new Ef(w),E=new Ih(R),ae=new vf(R,E),_=new Af(R,E,st,ae),N=new Df(R,_,E,st),Q=new Pf(R,Ce,Be),ne=new Mf(ve),G=new qp(w,gt,ct,Ue,Ce,ae,ne),$=new pm(w,ve),H=new $p,we=new tm(Ue),xe=new gf(w,gt,ct,ge,N,m,l),_e=new sm(w,N,Ce),Fe=new mm(R,st,Ce,ge),le=new _f(R,Ue,st),Re=new Rf(R,Ue,st),st.programs=G.programs,w.capabilities=Ce,w.extensions=Ue,w.properties=ve,w.renderLists=H,w.shadowMap=_e,w.state=ge,w.info=st}L();const ee=new dm(w,R);this.xr=ee,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Ue.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ue.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(X,te,!1))},this.getSize=function(x){return x.set(X,te)},this.setSize=function(x,U,z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,te=U,t.width=Math.floor(x*V),t.height=Math.floor(U*V),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(X*V,te*V).floor()},this.setDrawingBufferSize=function(x,U,z){X=x,te=U,V=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,U,z,k){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,U,z,k),ge.viewport(D.copy(ye).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(ze)},this.setScissor=function(x,U,z,k){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,U,z,k),ge.scissor(O.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(x){ge.setScissorTest(Qe=x)},this.setOpaqueSort=function(x){re=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let k=0;if(x){let I=!1;if(F!==null){const J=F.texture.format;I=J===xa||J===_a||J===va}if(I){const J=F.texture.type,oe=J===Gt||J===kn||J===Bi||J===zi||J===ma||J===ga,pe=xe.getClearColor(),ue=xe.getClearAlpha(),Ae=pe.r,Pe=pe.g,be=pe.b;oe?(g[0]=Ae,g[1]=Pe,g[2]=be,g[3]=ue,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Ae,v[1]=Pe,v[2]=be,v[3]=ue,R.clearBufferiv(R.COLOR,0,v))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),xe.dispose(),H.dispose(),we.dispose(),ve.dispose(),gt.dispose(),ct.dispose(),N.dispose(),ae.dispose(),Fe.dispose(),G.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Jt),ee.removeEventListener("sessionend",Fa),An.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=st.autoReset,U=_e.enabled,z=_e.autoUpdate,k=_e.needsUpdate,I=_e.type;L(),st.autoReset=x,_e.enabled=U,_e.autoUpdate=z,_e.needsUpdate=k,_e.type=I}function Z(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function j(x){const U=x.target;U.removeEventListener("dispose",j),me(U)}function me(x){Le(x),ve.remove(x)}function Le(x){const U=ve.get(x).programs;U!==void 0&&(U.forEach(function(z){G.releaseProgram(z)}),x.isShaderMaterial&&G.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,k,I,J){U===null&&(U=Se);const oe=I.isMesh&&I.matrixWorld.determinant()<0,pe=zl(x,U,z,k,I);ge.setMaterial(k,oe);let ue=z.index,Ae=1;if(k.wireframe===!0){if(ue=_.getWireframeAttribute(z),ue===void 0)return;Ae=2}const Pe=z.drawRange,be=z.attributes.position;let Ve=Pe.start*Ae,$e=(Pe.start+Pe.count)*Ae;J!==null&&(Ve=Math.max(Ve,J.start*Ae),$e=Math.min($e,(J.start+J.count)*Ae)),ue!==null?(Ve=Math.max(Ve,0),$e=Math.min($e,ue.count)):be!=null&&(Ve=Math.max(Ve,0),$e=Math.min($e,be.count));const ot=$e-Ve;if(ot<0||ot===1/0)return;ae.setup(I,k,pe,z,ue);let tt,Ze=le;if(ue!==null&&(tt=E.get(ue),Ze=Re,Ze.setIndex(tt)),I.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*xt()),Ze.setMode(R.LINES)):Ze.setMode(R.TRIANGLES);else if(I.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*xt()),I.isLineSegments?Ze.setMode(R.LINES):I.isLineLoop?Ze.setMode(R.LINE_LOOP):Ze.setMode(R.LINE_STRIP)}else I.isPoints?Ze.setMode(R.POINTS):I.isSprite&&Ze.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Te=I._multiDrawStarts,rt=I._multiDrawCounts,We=I._multiDrawCount,Lt=ue?E.get(ue).bytesPerElement:1,Gn=ve.get(k).currentProgram.getUniforms();for(let Ut=0;Ut<We;Ut++)Gn.setValue(R,"_gl_DrawID",Ut),Ze.render(Te[Ut]/Lt,rt[Ut])}else if(I.isInstancedMesh)Ze.renderInstances(Ve,ot,I.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rt=Math.min(z.instanceCount,Te);Ze.renderInstances(Ve,ot,rt)}else Ze.render(Ve,ot)};function et(x,U,z){x.transparent===!0&&x.side===en&&x.forceSinglePass===!1?(x.side=Rt,x.needsUpdate=!0,Yi(x,U,z),x.side=xn,x.needsUpdate=!0,Yi(x,U,z),x.side=en):Yi(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),u=we.get(z),u.init(U),b.push(u),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),x!==z&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const k=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let oe=0;oe<J.length;oe++){const pe=J[oe];et(pe,z,I),k.add(pe)}else et(J,z,I),k.add(J)}),u=b.pop(),k},this.compileAsync=function(x,U,z=null){const k=this.compile(x,U,z);return new Promise(I=>{function J(){if(k.forEach(function(oe){ve.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){I(x);return}setTimeout(J,10)}Ue.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ye=null;function on(x){Ye&&Ye(x)}function Jt(){An.stop()}function Fa(){An.start()}const An=new Cl;An.setAnimationLoop(on),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(x){Ye=x,ee.setAnimationLoop(x),x===null?An.stop():An.start()},ee.addEventListener("sessionstart",Jt),ee.addEventListener("sessionend",Fa),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,U,F),u=we.get(x,b.length),u.init(U),b.push(u),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(K,nn,U.reversedDepth),q=this.localClippingEnabled,qe=ne.init(this.clippingPlanes,q),p=H.get(x,y.length),p.init(),y.push(p),ee.enabled===!0&&ee.isPresenting===!0){const J=w.xr.getDepthSensingMesh();J!==null&&Fs(J,U,-1/0,w.sortObjects)}Fs(x,U,0,w.sortObjects),p.finish(),w.sortObjects===!0&&p.sort(re,he),Ge=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ge&&xe.addToRenderList(p,x),this.info.render.frame++,qe===!0&&ne.beginShadows();const z=u.state.shadowsArray;_e.render(z,x,U),qe===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,I=p.transmissive;if(u.setupLights(),U.isArrayCamera){const J=U.cameras;if(I.length>0)for(let oe=0,pe=J.length;oe<pe;oe++){const ue=J[oe];Oa(k,I,x,ue)}Ge&&xe.render(x);for(let oe=0,pe=J.length;oe<pe;oe++){const ue=J[oe];Na(p,x,ue,ue.viewport)}}else I.length>0&&Oa(k,I,x,U),Ge&&xe.render(x),Na(p,x,U);F!==null&&P===0&&(Be.updateMultisampleRenderTarget(F),Be.updateRenderTargetMipmap(F)),x.isScene===!0&&x.onAfterRender(w,x,U),ae.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],qe===!0&&ne.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Fs(x,U,z,k){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||nt.intersectsSprite(x)){k&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(K);const oe=N.update(x),pe=x.material;pe.visible&&p.push(x,oe,pe,z,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||nt.intersectsObject(x))){const oe=N.update(x),pe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),De.copy(oe.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(K)),Array.isArray(pe)){const ue=oe.groups;for(let Ae=0,Pe=ue.length;Ae<Pe;Ae++){const be=ue[Ae],Ve=pe[be.materialIndex];Ve&&Ve.visible&&p.push(x,oe,Ve,z,De.z,be)}}else pe.visible&&p.push(x,oe,pe,z,De.z,null)}}const J=x.children;for(let oe=0,pe=J.length;oe<pe;oe++)Fs(J[oe],U,z,k)}function Na(x,U,z,k){const I=x.opaque,J=x.transmissive,oe=x.transparent;u.setupLightsView(z),qe===!0&&ne.setGlobalState(w.clippingPlanes,z),k&&ge.viewport(D.copy(k)),I.length>0&&qi(I,U,z),J.length>0&&qi(J,U,z),oe.length>0&&qi(oe,U,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Oa(x,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new Wt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?zt:Gt,minFilter:tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const J=u.state.transmissionRenderTarget[k.id],oe=k.viewport||D;J.setSize(oe.z*w.transmissionResolutionScale,oe.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),ue=w.getActiveCubeFace(),Ae=w.getActiveMipmapLevel();w.setRenderTarget(J),w.getClearColor(W),Y=w.getClearAlpha(),Y<1&&w.setClearColor(16777215,.5),w.clear(),Ge&&xe.render(z);const Pe=w.toneMapping;w.toneMapping=vn;const be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),qe===!0&&ne.setGlobalState(w.clippingPlanes,k),qi(x,z,k),Be.updateMultisampleRenderTarget(J),Be.updateRenderTargetMipmap(J),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let $e=0,ot=U.length;$e<ot;$e++){const tt=U[$e],Ze=tt.object,Te=tt.geometry,rt=tt.material,We=tt.group;if(rt.side===en&&Ze.layers.test(k.layers)){const Lt=rt.side;rt.side=Rt,rt.needsUpdate=!0,Ba(Ze,z,k,Te,rt,We),rt.side=Lt,rt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(J),Be.updateRenderTargetMipmap(J))}w.setRenderTarget(pe,ue,Ae),w.setClearColor(W,Y),be!==void 0&&(k.viewport=be),w.toneMapping=Pe}function qi(x,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const oe=x[I],pe=oe.object,ue=oe.geometry,Ae=oe.group;let Pe=oe.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),pe.layers.test(z.layers)&&Ba(pe,U,z,ue,Pe,Ae)}}function Ba(x,U,z,k,I,J){x.onBeforeRender(w,U,z,k,I,J),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(w,U,z,k,x,J),I.transparent===!0&&I.side===en&&I.forceSinglePass===!1?(I.side=Rt,I.needsUpdate=!0,w.renderBufferDirect(z,U,k,I,x,J),I.side=xn,I.needsUpdate=!0,w.renderBufferDirect(z,U,k,I,x,J),I.side=en):w.renderBufferDirect(z,U,k,I,x,J),x.onAfterRender(w,U,z,k,I,J)}function Yi(x,U,z){U.isScene!==!0&&(U=Se);const k=ve.get(x),I=u.state.lights,J=u.state.shadowsArray,oe=I.state.version,pe=G.getParameters(x,I.state,J,U,z),ue=G.getProgramCacheKey(pe);let Ae=k.programs;k.environment=x.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(x.isMeshStandardMaterial?ct:gt).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",j),Ae=new Map,k.programs=Ae);let Pe=Ae.get(ue);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===oe)return ka(x,pe),Pe}else pe.uniforms=G.getUniforms(x),x.onBeforeCompile(pe,w),Pe=G.acquireProgram(pe,ue),Ae.set(ue,Pe),k.uniforms=pe.uniforms;const be=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=ne.uniform),ka(x,pe),k.needsLights=Vl(x),k.lightsStateVersion=oe,k.needsLights&&(be.ambientLightColor.value=I.state.ambient,be.lightProbe.value=I.state.probe,be.directionalLights.value=I.state.directional,be.directionalLightShadows.value=I.state.directionalShadow,be.spotLights.value=I.state.spot,be.spotLightShadows.value=I.state.spotShadow,be.rectAreaLights.value=I.state.rectArea,be.ltc_1.value=I.state.rectAreaLTC1,be.ltc_2.value=I.state.rectAreaLTC2,be.pointLights.value=I.state.point,be.pointLightShadows.value=I.state.pointShadow,be.hemisphereLights.value=I.state.hemi,be.directionalShadowMap.value=I.state.directionalShadowMap,be.directionalShadowMatrix.value=I.state.directionalShadowMatrix,be.spotShadowMap.value=I.state.spotShadowMap,be.spotLightMatrix.value=I.state.spotLightMatrix,be.spotLightMap.value=I.state.spotLightMap,be.pointShadowMap.value=I.state.pointShadowMap,be.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function za(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=ys.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function ka(x,U){const z=ve.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function zl(x,U,z,k,I){U.isScene!==!0&&(U=Se),Be.resetTextureUnits();const J=U.fog,oe=k.isMeshStandardMaterial?U.environment:null,pe=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:mi,ue=(k.isMeshStandardMaterial?ct:gt).get(k.envMap||oe),Ae=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,$e=!!z.morphAttributes.color;let ot=vn;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ot=w.toneMapping);const tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=tt!==void 0?tt.length:0,Te=ve.get(k),rt=u.state.lights;if(qe===!0&&(q===!0||x!==M)){const Et=x===M&&k.id===S;ne.setState(k,x,Et)}let We=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==rt.state.version||Te.outputColorSpace!==pe||I.isBatchedMesh&&Te.batching===!1||!I.isBatchedMesh&&Te.batching===!0||I.isBatchedMesh&&Te.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Te.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Te.instancing===!1||!I.isInstancedMesh&&Te.instancing===!0||I.isSkinnedMesh&&Te.skinning===!1||!I.isSkinnedMesh&&Te.skinning===!0||I.isInstancedMesh&&Te.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Te.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Te.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Te.instancingMorph===!1&&I.morphTexture!==null||Te.envMap!==ue||k.fog===!0&&Te.fog!==J||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Pe||Te.morphTargets!==be||Te.morphNormals!==Ve||Te.morphColors!==$e||Te.toneMapping!==ot||Te.morphTargetsCount!==Ze)&&(We=!0):(We=!0,Te.__version=k.version);let Lt=Te.currentProgram;We===!0&&(Lt=Yi(k,U,I));let Gn=!1,Ut=!1,Ei=!1;const at=Lt.getUniforms(),kt=Te.uniforms;if(ge.useProgram(Lt.program)&&(Gn=!0,Ut=!0,Ei=!0),k.id!==S&&(S=k.id,Ut=!0),Gn||M!==x){ge.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),at.setValue(R,"projectionMatrix",x.projectionMatrix),at.setValue(R,"viewMatrix",x.matrixWorldInverse);const Ct=at.map.cameraPosition;Ct!==void 0&&Ct.setValue(R,fe.setFromMatrixPosition(x.matrixWorld)),Ce.logarithmicDepthBuffer&&at.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ut=!0,Ei=!0)}if(I.isSkinnedMesh){at.setOptional(R,I,"bindMatrix"),at.setOptional(R,I,"bindMatrixInverse");const Et=I.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),at.setValue(R,"boneTexture",Et.boneTexture,Be))}I.isBatchedMesh&&(at.setOptional(R,I,"batchingTexture"),at.setValue(R,"batchingTexture",I._matricesTexture,Be),at.setOptional(R,I,"batchingIdTexture"),at.setValue(R,"batchingIdTexture",I._indirectTexture,Be),at.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&at.setValue(R,"batchingColorTexture",I._colorsTexture,Be));const Vt=z.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&Q.update(I,z,Lt),(Ut||Te.receiveShadow!==I.receiveShadow)&&(Te.receiveShadow=I.receiveShadow,at.setValue(R,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(kt.envMap.value=ue,kt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(kt.envMapIntensity.value=U.environmentIntensity),Ut&&(at.setValue(R,"toneMappingExposure",w.toneMappingExposure),Te.needsLights&&kl(kt,Ei),J&&k.fog===!0&&$.refreshFogUniforms(kt,J),$.refreshMaterialUniforms(kt,k,V,te,u.state.transmissionRenderTarget[x.id]),ys.upload(R,za(Te),kt,Be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ys.upload(R,za(Te),kt,Be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(R,"center",I.center),at.setValue(R,"modelViewMatrix",I.modelViewMatrix),at.setValue(R,"normalMatrix",I.normalMatrix),at.setValue(R,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Et=k.uniformsGroups;for(let Ct=0,Ns=Et.length;Ct<Ns;Ct++){const Rn=Et[Ct];Fe.update(Rn,Lt),Fe.bind(Rn,Lt)}}return Lt}function kl(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Vl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,U,z){const k=ve.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ve.get(x.texture).__webglTexture=U,ve.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const z=ve.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Hl=R.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){F=x,A=U,P=z;let k=!0,I=null,J=!1,oe=!1;if(x){const ue=ve.get(x);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(ue.__webglFramebuffer===void 0)Be.setupRenderTarget(x);else if(ue.__hasExternalTextures)Be.rebindTextures(x,ve.get(x.texture).__webglTexture,ve.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&ve.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(x)}}const Ae=x.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(oe=!0);const Pe=ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?I=Pe[U][z]:I=Pe[U],J=!0):x.samples>0&&Be.useMultisampledRTT(x)===!1?I=ve.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?I=Pe[z]:I=Pe,D.copy(x.viewport),O.copy(x.scissor),B=x.scissorTest}else D.copy(ye).multiplyScalar(V).floor(),O.copy(ze).multiplyScalar(V).floor(),B=Qe;if(z!==0&&(I=Hl),ge.bindFramebuffer(R.FRAMEBUFFER,I)&&k&&ge.drawBuffers(x,I),ge.viewport(D),ge.scissor(O),ge.setScissorTest(B),J){const ue=ve.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,z)}else if(oe){const ue=U;for(let Ae=0;Ae<x.textures.length;Ae++){const Pe=ve.get(x.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,z,ue)}}else if(x!==null&&z!==0){const ue=ve.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ue.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(x,U,z,k,I,J,oe,pe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){ge.bindFramebuffer(R.FRAMEBUFFER,ue);try{const Ae=x.textures[pe],Pe=Ae.format,be=Ae.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-k&&z>=0&&z<=x.height-I&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(U,z,k,I,Me.convert(Pe),Me.convert(be),J))}finally{const Ae=F!==null?ve.get(F).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,k,I,J,oe,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue)if(U>=0&&U<=x.width-k&&z>=0&&z<=x.height-I){ge.bindFramebuffer(R.FRAMEBUFFER,ue);const Ae=x.textures[pe],Pe=Ae.format,be=Ae.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.bufferData(R.PIXEL_PACK_BUFFER,J.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(U,z,k,I,Me.convert(Pe),Me.convert(be),0);const $e=F!==null?ve.get(F).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,$e);const ot=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await jc(R,ot,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,J),R.deleteBuffer(Ve),R.deleteSync(ot),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){const k=Math.pow(2,-z),I=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),oe=U!==null?U.x:0,pe=U!==null?U.y:0;Be.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,oe,pe,I,J),ge.unbindTexture()};const Gl=R.createFramebuffer(),Wl=R.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,k=null,I=0,J=null){J===null&&(I!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let oe,pe,ue,Ae,Pe,be,Ve,$e,ot;const tt=x.isCompressedTexture?x.mipmaps[J]:x.image;if(z!==null)oe=z.max.x-z.min.x,pe=z.max.y-z.min.y,ue=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,Pe=z.min.y,be=z.isBox3?z.min.z:0;else{const Vt=Math.pow(2,-I);oe=Math.floor(tt.width*Vt),pe=Math.floor(tt.height*Vt),x.isDataArrayTexture?ue=tt.depth:x.isData3DTexture?ue=Math.floor(tt.depth*Vt):ue=1,Ae=0,Pe=0,be=0}k!==null?(Ve=k.x,$e=k.y,ot=k.z):(Ve=0,$e=0,ot=0);const Ze=Me.convert(U.format),Te=Me.convert(U.type);let rt;U.isData3DTexture?(Be.setTexture3D(U,0),rt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),rt=R.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),rt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const We=R.getParameter(R.UNPACK_ROW_LENGTH),Lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Gn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ut=R.getParameter(R.UNPACK_SKIP_ROWS),Ei=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,tt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be);const at=x.isDataArrayTexture||x.isData3DTexture,kt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Vt=ve.get(x),Et=ve.get(U),Ct=ve.get(Vt.__renderTarget),Ns=ve.get(Et.__renderTarget);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Rn=0;Rn<ue;Rn++)at&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(x).__webglTexture,I,be+Rn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,J,ot+Rn)),R.blitFramebuffer(Ae,Pe,oe,pe,Ve,$e,oe,pe,R.DEPTH_BUFFER_BIT,R.NEAREST);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||ve.has(x)){const Vt=ve.get(x),Et=ve.get(U);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Gl),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,Wl);for(let Ct=0;Ct<ue;Ct++)at?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Vt.__webglTexture,I,be+Ct):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Vt.__webglTexture,I),kt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Et.__webglTexture,J,ot+Ct):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Et.__webglTexture,J),I!==0?R.blitFramebuffer(Ae,Pe,oe,pe,Ve,$e,oe,pe,R.COLOR_BUFFER_BIT,R.NEAREST):kt?R.copyTexSubImage3D(rt,J,Ve,$e,ot+Ct,Ae,Pe,oe,pe):R.copyTexSubImage2D(rt,J,Ve,$e,Ae,Pe,oe,pe);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else kt?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(rt,J,Ve,$e,ot,oe,pe,ue,Ze,Te,tt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(rt,J,Ve,$e,ot,oe,pe,ue,Ze,tt.data):R.texSubImage3D(rt,J,Ve,$e,ot,oe,pe,ue,Ze,Te,tt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,J,Ve,$e,oe,pe,Ze,Te,tt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,J,Ve,$e,tt.width,tt.height,Ze,tt.data):R.texSubImage2D(R.TEXTURE_2D,J,Ve,$e,oe,pe,Ze,Te,tt);R.pixelStorei(R.UNPACK_ROW_LENGTH,We),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ut),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ei),J===0&&U.generateMipmaps&&R.generateMipmap(rt),ge.unbindTexture()},this.initRenderTarget=function(x){ve.get(x).__webglFramebuffer===void 0&&Be.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Be.setTextureCube(x,0):x.isData3DTexture?Be.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Be.setTexture2DArray(x,0):Be.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){A=0,P=0,F=null,ge.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class vm{#e=new Map;#t=[];add(e){const t=e.constructor.id;if(!t)throw new Error(`${e.constructor.name} is missing a static id`);if(this.#e.has(t))throw new Error(`duplicate subsystem id "${t}"`);return this.#e.set(t,e),this}get(e){const t=this.#e.get(e);if(!t)throw new Error(`subsystem "${e}" not registered`);return t}peek(e){return this.#e.get(e)??null}has(e){return this.#e.has(e)}resolve(){const e=new Map,t=[],n=(i,r)=>{const a=e.get(i);if(a===1)return;if(a===0)throw new Error(`dependency cycle at "${i}" (via ${r})`);const o=this.#e.get(i);if(!o)throw new Error(`"${r}" depends on unregistered subsystem "${i}"`);e.set(i,0);for(const l of o.constructor.deps??[])n(l,i);e.set(i,1),t.push(o)};for(const i of this.#e.keys())n(i,"<root>");return this.#t=t,t}get ordered(){return this.#t.length?this.#t:this.resolve()}#n=new Map;with(e){let t=this.#n.get(e);return t||(t=this.ordered.filter(n=>typeof n[e]=="function"),this.#n.set(e,t)),t}invalidate(){this.#n.clear()}}class _m{#e=new Map;on(e,t){return(this.#e.get(e)??this.#e.set(e,new Set).get(e)).add(t),()=>this.off(e,t)}once(e,t){const n=this.on(e,i=>{n(),t(i)});return n}off(e,t){this.#e.get(e)?.delete(t)}emit(e,t){const n=this.#e.get(e);if(n)for(const i of[...n])try{i(t)}catch(r){console.error(`[events] handler for "${e}" threw:`,r)}}clear(){this.#e.clear()}}const xm=120,Ui=1/xm,Xo=8,pr={low:{renderScale:.72,shadowMapSize:1024,cascades:3,shadowDistance:60,taa:!1,gtao:!1,ssr:!1,volumetrics:!1,motionBlur:!1,bloom:!0,anisotropy:4,particleBudget:2e3,decalBudget:64},medium:{renderScale:.85,shadowMapSize:2048,cascades:3,shadowDistance:90,taa:!0,gtao:!0,ssr:!1,volumetrics:!0,motionBlur:!0,bloom:!0,anisotropy:8,particleBudget:6e3,decalBudget:128},high:{renderScale:1,shadowMapSize:2048,cascades:4,shadowDistance:140,taa:!0,gtao:!0,ssr:!0,volumetrics:!0,motionBlur:!0,bloom:!0,anisotropy:16,particleBudget:12e3,decalBudget:256},ultra:{renderScale:1,shadowMapSize:4096,cascades:4,shadowDistance:200,taa:!0,gtao:!0,ssr:!0,volumetrics:!0,motionBlur:!0,bloom:!0,anisotropy:16,particleBudget:24e3,decalBudget:512}},Mm={quality:"ultra",fov:80,adsFovScale:.72,sensitivity:.0022,adsSensScale:.65,invertY:!1,exposure:1,deterministic:!1};function wm(s={}){const e={...Mm,...s};return e.q={...pr[e.quality]},e.setQuality=t=>{if(!pr[t])throw new Error(`unknown quality preset "${t}"`);e.quality=t,Object.assign(e.q,pr[t])},e}const qo={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],jump:["Space"],crouch:["ControlLeft","KeyC"],prone:["KeyZ"],sprint:["ShiftLeft"],reload:["KeyR"],use:["KeyF"],melee:["KeyV"],leanLeft:["KeyQ"],leanRight:["KeyE"],swapWeapon:["Digit1","Digit2","Tab"],grenade:["KeyG"],flashlight:["KeyT"],pause:["Escape"]};class Sm{constructor(e,t){this.canvas=e,this.config=t,this.down=new Set,this._pressed=new Set,this._released=new Set,this._pendingDown=new Set,this._pendingUp=new Set,this.look={x:0,y:0},this._rawLook={x:0,y:0},this.wheel=0,this._pendingWheel=0,this.pointerLocked=!1,this.enabled=!0,this.frozen=!1,this.gamepadIndex=null,this.stick={moveX:0,moveY:0,lookX:0,lookY:0},this._bound={keydown:this._onKeyDown.bind(this),keyup:this._onKeyUp.bind(this),mousedown:this._onMouseDown.bind(this),mouseup:this._onMouseUp.bind(this),mousemove:this._onMouseMove.bind(this),wheel:this._onWheel.bind(this),lockchange:this._onLockChange.bind(this),blur:this._onBlur.bind(this),contextmenu:n=>n.preventDefault()}}attach(){addEventListener("keydown",this._bound.keydown),addEventListener("keyup",this._bound.keyup),addEventListener("mousedown",this._bound.mousedown),addEventListener("mouseup",this._bound.mouseup),addEventListener("mousemove",this._bound.mousemove),addEventListener("wheel",this._bound.wheel,{passive:!0}),addEventListener("blur",this._bound.blur),document.addEventListener("pointerlockchange",this._bound.lockchange),this.canvas.addEventListener("contextmenu",this._bound.contextmenu)}detach(){removeEventListener("keydown",this._bound.keydown),removeEventListener("keyup",this._bound.keyup),removeEventListener("mousedown",this._bound.mousedown),removeEventListener("mouseup",this._bound.mouseup),removeEventListener("mousemove",this._bound.mousemove),removeEventListener("wheel",this._bound.wheel),removeEventListener("blur",this._bound.blur),document.removeEventListener("pointerlockchange",this._bound.lockchange),this.canvas.removeEventListener("contextmenu",this._bound.contextmenu)}requestPointerLock(){try{const e=this.canvas.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}_onKeyDown(e){this.enabled&&(e.repeat||(!e.metaKey&&!e.ctrlKey&&e.preventDefault(),this._pendingDown.add(e.code)))}_onKeyUp(e){this.enabled&&this._pendingUp.add(e.code)}_onMouseDown(e){this.enabled&&(!this.pointerLocked&&e.button===0&&this.requestPointerLock(),this._pendingDown.add(`Mouse${e.button}`))}_onMouseUp(e){this.enabled&&this._pendingUp.add(`Mouse${e.button}`)}_onMouseMove(e){!this.enabled||!this.pointerLocked||this.frozen||(this._rawLook.x+=e.movementX??0,this._rawLook.y+=e.movementY??0)}_onWheel(e){this.enabled&&(this._pendingWheel+=Math.sign(e.deltaY))}_onLockChange(){this.pointerLocked=document.pointerLockElement===this.canvas,this.pointerLocked||this._onBlur()}_onBlur(){for(const e of this.down)this._pendingUp.add(e);this._rawLook.x=0,this._rawLook.y=0}beginFrame(){this._pressed.clear(),this._released.clear();for(const t of this._pendingDown)this.down.has(t)||(this.down.add(t),this._pressed.add(t));for(const t of this._pendingUp)this.down.delete(t)&&this._released.add(t);this._pendingDown.clear(),this._pendingUp.clear();const e=this.config.sensitivity;this.look.x=this.frozen?0:this._rawLook.x*e,this.look.y=this.frozen?0:this._rawLook.y*e*(this.config.invertY?-1:1),this._rawLook.x=0,this._rawLook.y=0,this.wheel=this._pendingWheel,this._pendingWheel=0,this._pollGamepad()}endFrame(){}_pollGamepad(){const e=navigator.getGamepads?.()??[],t=e[this.gamepadIndex??0]??e.find(Boolean);if(!t){this.stick.moveX=this.stick.moveY=this.stick.lookX=this.stick.lookY=0;return}const n=r=>Math.abs(r)<.16?0:(r-Math.sign(r)*.16)/.84;this.stick.moveX=n(t.axes[0]??0),this.stick.moveY=n(t.axes[1]??0);const i=r=>Math.sign(r)*Math.abs(r)**2.4;this.stick.lookX=i(n(t.axes[2]??0)),this.stick.lookY=i(n(t.axes[3]??0))}action(e){const t=qo[e];if(!t)return!1;for(const n of t)if(this.down.has(n))return!0;return!1}actionPressed(e){const t=qo[e];if(!t)return!1;for(const n of t)if(this._pressed.has(n))return!0;return!1}held(e){return this.down.has(e)}pressed(e){return this._pressed.has(e)}released(e){return this._released.has(e)}get fire(){return this.down.has("Mouse0")}get firePressed(){return this._pressed.has("Mouse0")}get ads(){return this.down.has("Mouse2")}moveVector(e={x:0,y:0}){let t=(this.action("right")?1:0)-(this.action("left")?1:0),n=(this.action("forward")?1:0)-(this.action("back")?1:0);t+=this.stick.moveX,n-=this.stick.moveY;const i=Math.hypot(t,n);return i>1&&(t/=i,n/=i),e.x=t,e.y=n,e}}class Da{constructor(e=2654435769){this.seed(e)}seed(e){let t=e>>>0;const n=()=>{t=t+2654435769>>>0;let i=t;return i=Math.imul(i^i>>>16,569420461),i=Math.imul(i^i>>>15,1935289751),(i^i>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this}u32(){const e=(i,r)=>(i<<r|i>>>32-r)>>>0,t=Math.imul(e(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2^=this.s0,this.s3^=this.s1,this.s1^=this.s2,this.s0^=this.s3,this.s2^=n,this.s3=e(this.s3,11),t}float(){return this.u32()/4294967296}range(e,t){return e+(t-e)*this.float()}int(e,t){return e+this.u32()%(t-e+1)}signed(){return this.float()*2-1}gauss(){if(this._spare!==void 0){const i=this._spare;return this._spare=void 0,i}let e=0;for(;e===0;)e=this.float();const t=Math.sqrt(-2*Math.log(e)),n=2*Math.PI*this.float();return this._spare=t*Math.sin(n),t*Math.cos(n)}pick(e){return e[this.u32()%e.length]}disc(e={x:0,y:0}){const t=Math.sqrt(this.float()),n=this.float()*Math.PI*2;return e.x=Math.cos(n)*t,e.y=Math.sin(n)*t,e}fork(){return new Da(this.u32())}}class ym{constructor({canvas:e,config:t}){this.canvas=e,this.config=t,this.registry=new vm,this.events=new _m,this.input=new Sm(e,t),this.rng=new Da(t.deterministic?1592594996:Math.random()*2**32>>>0),this.scene=new vi,this.camera=new Pt(t.fov,1,.05,1200),this.camera.rotation.order="YXZ",this.viewScene=new vi,this.viewCamera=new Pt(60,1,.005,12),this.time={elapsed:0,raw:0,dt:0,fixed:Ui,alpha:0,scale:1,frame:0},this.ctx={engine:this,scene:this.scene,camera:this.camera,viewScene:this.viewScene,viewCamera:this.viewCamera,canvas:e,config:t,events:this.events,input:this.input,time:this.time,rng:this.rng,get:n=>this.registry.get(n),peek:n=>this.registry.peek(n),has:n=>this.registry.has(n)},this._accum=0,this._last=0,this._running=!1,this._onResize=()=>this.resize()}add(e,t){return this.registry.add(new e(t)),this}async init(){const e=this.registry.resolve();for(const t of e){const n=performance.now();await t.init?.(this.ctx);const i=performance.now()-n;i>50&&console.info(`[engine] ${t.constructor.id} init ${i.toFixed(0)}ms`)}return this.input.attach(),addEventListener("resize",this._onResize),this.resize(),this}resize(){const e=Math.max(1,this.canvas.clientWidth||innerWidth),t=Math.max(1,this.canvas.clientHeight||innerHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.viewCamera.aspect=e/t,this.viewCamera.updateProjectionMatrix();for(const n of this.registry.with("resize"))n.resize(e,t,this.ctx);this.events.emit("resize",{width:e,height:t})}start(){this._running||(this._running=!0,this._last=performance.now(),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop))}stop(){this._running=!1}_loop(e){this._running&&(requestAnimationFrame(this._loop),this.step(e))}step(e=performance.now()){const t=this.time,n=Math.min(.1,Math.max(0,(e-this._last)/1e3));this._last=e,t.raw+=n,t.dt=n*t.scale,t.elapsed+=t.dt,t.frame++,this.input.beginFrame(),this._accum+=t.dt;let i=0;const r=this.registry.with("fixedUpdate");for(;this._accum>=Ui&&i<Xo;){for(const o of r)o.fixedUpdate(Ui,this.ctx);this._accum-=Ui,i++}i===Xo&&(this._accum=0),t.alpha=this._accum/Ui;for(const o of this.registry.with("update"))o.update(t.dt,this.ctx);for(const o of this.registry.with("lateUpdate"))o.lateUpdate(t.dt,this.ctx);const a=this.registry.peek("render");typeof a?.render=="function"&&a.render(this.ctx),this.input.endFrame()}dispose(){this.stop(),removeEventListener("resize",this._onResize),this.input.detach();for(const e of[...this.registry.ordered].reverse())e.dispose?.();this.events.clear()}}const bm=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}
`,bt=`
#ifndef OW_COMMON
#define OW_COMMON

const float OW_PI = 3.141592653589793;
const float OW_HALF_PI = 1.5707963267948966;

float owLum( vec3 c ) { return dot( c, vec3( 0.2126, 0.7152, 0.0722 ) ); }

// --- sRGB transfer ---------------------------------------------------------
vec3 owLinearToSrgb( vec3 c ) {
  c = max( c, vec3( 0.0 ) );
  return mix( c * 12.92, 1.055 * pow( c, vec3( 0.41666667 ) ) - 0.055, step( 0.0031308, c ) );
}
vec3 owSrgbToLinear( vec3 c ) {
  return mix( c / 12.92, pow( ( c + 0.055 ) / 1.055, vec3( 2.4 ) ), step( 0.04045, c ) );
}

// --- YCoCg (TAA neighbourhood clipping works far better in YCoCg) ----------
vec3 owRgbToYCoCg( vec3 c ) {
  return vec3(
     0.25 * c.r + 0.5 * c.g + 0.25 * c.b,
     0.5  * c.r              - 0.5  * c.b,
    -0.25 * c.r + 0.5 * c.g - 0.25 * c.b );
}
vec3 owYCoCgToRgb( vec3 c ) {
  float t = c.x - c.z;
  return vec3( t + c.y, c.x + c.z, t - c.y );
}

// --- octahedral normal packing --------------------------------------------
vec2 owOctWrap( vec2 v ) {
  return ( 1.0 - abs( v.yx ) ) * vec2( v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0 );
}
vec2 owEncodeNormal( vec3 n ) {
  n /= ( abs( n.x ) + abs( n.y ) + abs( n.z ) + 1e-8 );
  n.xy = n.z >= 0.0 ? n.xy : owOctWrap( n.xy );
  return n.xy;
}
vec3 owDecodeNormal( vec2 f ) {
  vec3 n = vec3( f.x, f.y, 1.0 - abs( f.x ) - abs( f.y ) );
  float t = max( -n.z, 0.0 );
  n.xy += vec2( n.x >= 0.0 ? -t : t, n.y >= 0.0 ? -t : t );
  return normalize( n );
}

// --- noise -----------------------------------------------------------------
// Interleaved gradient noise (Jimenez) — the right dither for rotating
// sample kernels that a temporal filter then resolves.
float owIGN( vec2 p ) {
  return fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) );
}
float owHash12( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}
vec2 owHash22( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * vec3( 0.1031, 0.1030, 0.0973 ) );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.xx + p3.yz ) * p3.zy );
}
// Blue-ish 8x8 ordered dither, used to break up 8-bit output banding.
float owDither( vec2 p ) {
  return owHash12( floor( p ) ) - 0.5;
}

// --- reconstruction --------------------------------------------------------
// View-space position from a uv + POSITIVE linear view depth.
vec3 owViewPos( vec2 uv, float depth, mat4 projInv ) {
  vec4 h = projInv * vec4( uv * 2.0 - 1.0, 1.0, 1.0 );
  vec3 dir = h.xyz / h.w;
  dir /= max( 1e-6, -dir.z );
  return dir * depth;
}
// The unit ray (z = -1 plane) through a uv.
vec3 owViewRay( vec2 uv, mat4 projInv ) {
  vec4 h = projInv * vec4( uv * 2.0 - 1.0, 1.0, 1.0 );
  vec3 dir = h.xyz / h.w;
  return dir / max( 1e-6, -dir.z );
}

#endif
`,Em=`
#ifndef OW_TONEMAP
#define OW_TONEMAP

const mat3 OW_REC2020_FROM_SRGB = mat3(
  vec3( 0.6274, 0.0691, 0.0164 ),
  vec3( 0.3293, 0.9195, 0.0880 ),
  vec3( 0.0433, 0.0113, 0.8956 ) );
const mat3 OW_SRGB_FROM_REC2020 = mat3(
  vec3(  1.6605, -0.1246, -0.0182 ),
  vec3( -0.5876,  1.1329, -0.1006 ),
  vec3( -0.0728, -0.0083,  1.1187 ) );

vec3 owAgxContrast( vec3 x ) {
  vec3 x2 = x * x;
  vec3 x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x
       + 0.4298 * x2 + 0.1191 * x - 0.00232;
}

// AgX with a punchy "look" applied in log space: this is what gives the
// modern shooter contrast without the ACES magenta-highlight problem.
vec3 owAgX( vec3 color, float slope, float power, float sat ) {
  const mat3 inset = mat3(
    vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
    vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
    vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 ) );
  const mat3 outset = mat3(
    vec3(  1.1271005818144368, -0.1413297634984383, -0.14132976349843826 ),
    vec3( -0.11060664309660323, 1.157823702216272, -0.11060664309660294 ),
    vec3( -0.016493938717834573, -0.016493938717834257, 1.2519364065950405 ) );
  const float minEv = -12.47393;
  const float maxEv = 4.026069;

  color = OW_REC2020_FROM_SRGB * color;
  color = inset * color;
  color = max( color, 1e-10 );
  color = ( log2( color ) - minEv ) / ( maxEv - minEv );
  color = clamp( color, 0.0, 1.0 );

  // look: slope / power / saturation in log space
  color = pow( max( color * slope, 0.0 ), vec3( power ) );
  float l = owLum( color );
  color = l + sat * ( color - l );

  color = owAgxContrast( clamp( color, 0.0, 1.0 ) );
  color = outset * color;
  color = pow( max( color, vec3( 0.0 ) ), vec3( 2.2 ) );
  color = OW_SRGB_FROM_REC2020 * color;
  return clamp( color, 0.0, 1.0 );
}

vec3 owRRTODTFit( vec3 v ) {
  vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
  vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
  return a / b;
}
vec3 owACES( vec3 color ) {
  const mat3 inMat = mat3(
    vec3( 0.59719, 0.07600, 0.02840 ),
    vec3( 0.35458, 0.90834, 0.13383 ),
    vec3( 0.04823, 0.01566, 0.83777 ) );
  const mat3 outMat = mat3(
    vec3(  1.60475, -0.10208, -0.00327 ),
    vec3( -0.53108,  1.10813, -0.07276 ),
    vec3( -0.07367, -0.00605,  1.07602 ) );
  color = inMat * color;
  color = owRRTODTFit( color );
  color = outMat * color;
  return clamp( color, 0.0, 1.0 );
}

#endif
`,Ls=new an;Ls.setAttribute("position",new Ot(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));Ls.setAttribute("uv",new Ot(new Float32Array([0,0,2,0,0,2]),2));Ls.boundingSphere=new Hn(new C,1e8);const La=new vi;La.matrixAutoUpdate=!1;const Tm=new Ea,Us=new je(Ls,null);Us.frustumCulled=!1;Us.matrixAutoUpdate=!1;La.add(Us);function Il(s,e,t,n=!1,i=0){Us.material=e,s.setRenderTarget(t,i),n&&s.clear(!0,!1,!1),s.render(La,Tm)}class lt{constructor(e,t,n,i={}){this.name=e,this.uniforms=n,this.material=new Xt({name:e,uniforms:n,vertexShader:bm,fragmentShader:t,depthTest:!1,depthWrite:!1,blending:i.blending??sn,defines:i.defines??{},glslVersion:i.glslVersion??null,transparent:i.blending!==void 0&&i.blending!==sn})}render(e,t,n=!1){Il(e,this.material,t,n)}dispose(){this.material.dispose()}}function Je(s,e,t={}){const n=new Wt(Math.max(1,s),Math.max(1,e),{type:zt,format:_t,minFilter:ht,magFilter:ht,wrapS:Dt,wrapT:Dt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,...t});return n.texture.name=t.name??"hdr",n}const Yo=new C,gs=new C,Am=new C(0,1,0),Rm=new C(0,0,1),mr=new Ee,jo=new Ie,gr=new Hn,vr=new C;class Cm{constructor(e,t){this.renderer=e,this.cascades=Math.max(1,Math.min(4,t.cascades|0)),this.mapSize=Math.min(t.mapSize??2048,2048),this.maxDistance=t.maxDistance??140,this.lambda=.86,this.backDistance=140,this.enabled=!0,this.rt=new eh(this.mapSize,this.mapSize,this.cascades,{type:Nt,format:Wi,minFilter:dt,magFilter:dt,wrapS:Dt,wrapT:Dt,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1}),this.rt.texture.name="csm",this.cameras=[],this.matrices=[];for(let n=0;n<this.cascades;n++){const i=new Ca(-1,1,1,-1,.01,1e3);i.matrixAutoUpdate=!1,this.cameras.push(i),this.matrices.push(new Ie)}this.uniforms={owCsmMaps:{value:this.rt.texture},owCsmMatrix:{value:this.matrices},owCsmSplit:{value:new Ee(1e9,1e9,1e9,1e9)},owCsmSplitNear:{value:new Ee(0,0,0,0)},owCsmTexel:{value:new Ee(.01,.01,.01,.01)},owCsmRange:{value:new Ee(1,1,1,1)},owCsmMapSize:{value:new ce(this.mapSize,1/this.mapSize)},owSunDirView:{value:new C(0,1,0)},owSunDirWorld:{value:new C(0,1,0)},owCsmParams:{value:new Ee(1,.022,9,0)}},this.depthMaterial=new Xt({name:"csm-depth",side:en,vertexShader:`
        #include <common>
        #include <batching_pars_vertex>
        #include <skinning_pars_vertex>
        #include <morphtarget_pars_vertex>
        void main() {
          #include <batching_vertex>
          #include <beginnormal_vertex>
          #include <morphinstance_vertex>
          #include <morphnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <begin_vertex>
          #include <morphtarget_vertex>
          #include <skinning_vertex>
          #include <project_vertex>
        }
      `,fragmentShader:`
        void main() { gl_FragColor = vec4( gl_FragCoord.z, 0.0, 0.0, 1.0 ); }
      `}),this._splits=new Float32Array(this.cascades+1),this._prevClear=new He,this._fitCenter=[],this._fitRadius=new Float32Array(this.cascades),this._fitBack=new Float32Array(this.cascades);for(let n=0;n<this.cascades;n++)this._fitCenter.push(new C);this._sunAxis=new C(0,1,0),this._culled=[],this._nCulled=0,this.casterCounts=new Int32Array(this.cascades),this.emptyCascades=0}update(e,t,n=.022){const i=e.near,r=Math.min(e.far,this.maxDistance),a=this.cascades,o=this._splits;o[0]=i;for(let p=1;p<a;p++){const u=p/a,y=i*Math.pow(r/i,u),b=i+(r-i)*u;o[p]=this.lambda*y+(1-this.lambda)*b}o[a]=r;const l=Math.tan(ml.degToRad(e.fov*.5)),c=l*e.aspect,h=l*l+c*c,f=this.uniforms.owCsmSplit.value,d=this.uniforms.owCsmSplitNear.value,m=this.uniforms.owCsmTexel.value,g=this.uniforms.owCsmRange.value,v=["x","y","z","w"];for(let p=0;p<a;p++){const u=o[p],y=o[p+1];let b,w;h*h*(y+u)>=y-u?(b=-y,w=y*Math.sqrt(h)):(b=-.5*(y+u)*(1+h),w=.5*Math.sqrt((y-u)*(y-u)+2*(y*y+u*u)*h+(y+u)*(y+u)*h*h)),w=Math.ceil(w*16)/16,gs.set(0,0,b).applyMatrix4(e.matrixWorld);const T=this.cameras[p],A=Math.abs(t.y)>.98?Rm:Am;Yo.copy(gs).addScaledVector(t,w+this.backDistance),T.position.copy(Yo),T.up.copy(A),T.lookAt(gs),T.updateMatrix(),T.matrixWorld.copy(T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert(),T.left=-w,T.right=w,T.top=w,T.bottom=-w,T.near=0,T.far=2*w+this.backDistance,T.updateProjectionMatrix(),jo.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),mr.set(0,0,0,1).applyMatrix4(jo);const P=this.mapSize*.5,F=mr.x*P,S=mr.y*P,M=(Math.round(F)-F)/P,D=(Math.round(S)-S)/P;T.projectionMatrix.elements[12]+=M,T.projectionMatrix.elements[13]+=D,T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),this.matrices[p].multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),this._fitCenter[p].copy(gs),this._fitRadius[p]=w,this._fitBack[p]=this.backDistance,f[v[p]]=y,d[v[p]]=u,m[v[p]]=2*w/this.mapSize,g[v[p]]=T.far-T.near}for(let p=a;p<4;p++)f[v[p]]=1e9,d[v[p]]=1e9,m[v[p]]=.01,g[v[p]]=1;this._sunAxis.copy(t),this.uniforms.owSunDirWorld.value.copy(t),this.uniforms.owSunDirView.value.copy(t).transformDirection(e.matrixWorldInverse).normalize(),this.uniforms.owCsmParams.value.y=n}_cullCascade(e,t,n){const i=this._fitCenter[e],r=this._fitRadius[e],a=32*(2*r)/this.mapSize,o=r+a,l=-r-a,c=r+this._fitBack[e]+a,h=this._sunAxis;let f=0;for(let d=0;d<n;d++){const m=t[d];if(m.visible===!1)continue;if(m.frustumCulled===!1){f++;continue}let g=m.boundingSphere;if(g===void 0){const b=m.geometry;if(b===void 0){f++;continue}b.boundingSphere===null&&b.computeBoundingSphere(),g=b.boundingSphere}else g===null&&(m.computeBoundingSphere(),g=m.boundingSphere);if(g==null){f++;continue}gr.copy(g).applyMatrix4(m.matrixWorld),vr.subVectors(gr.center,i);const v=vr.dot(h),p=gr.radius;if(v+p<l||v-p>c){m.visible=!1,this._culled[this._nCulled++]=m;continue}const u=vr.lengthSq()-v*v,y=o+p;if(u>y*y){m.visible=!1,this._culled[this._nCulled++]=m;continue}f++}return f}_restoreCulled(){for(let e=0;e<this._nCulled;e++)this._culled[e].visible=!0;this._nCulled=0}render(e,t,n=null,i=0){const r=t.overrideMaterial,a=e.autoClear;e.getClearColor(this._prevClear);const o=e.getClearAlpha();t.overrideMaterial=this.depthMaterial,e.autoClear=!1,e.setClearColor(16777215,1),this.emptyCascades=0;for(let l=0;l<this.cascades;l++){const c=n===null?-1:this._cullCascade(l,n,i);this.casterCounts[l]=c,e.setRenderTarget(this.rt,l),e.clear(!0,!0,!1),c!==0?e.render(t,this.cameras[l]):this.emptyCascades++,n!==null&&this._restoreCulled()}t.overrideMaterial=r,e.autoClear=a,e.setClearColor(this._prevClear,o),e.setRenderTarget(null)}snapshotFit(){const e=this.uniforms;return{split:e.owCsmSplit.value.clone(),splitNear:e.owCsmSplitNear.value.clone(),texel:e.owCsmTexel.value.clone(),range:e.owCsmRange.value.clone(),sunView:e.owSunDirView.value.clone(),sunWorld:e.owSunDirWorld.value.clone(),params:e.owCsmParams.value.clone(),matrices:this.matrices.map(t=>t.clone()),splits:this._splits.slice(),sunAxis:this._sunAxis.clone(),fitCenter:this._fitCenter.map(t=>t.clone()),fitRadius:this._fitRadius.slice(),fitBack:this._fitBack.slice(),cameras:this.cameras.map(t=>({position:t.position.clone(),quaternion:t.quaternion.clone(),up:t.up.clone(),left:t.left,right:t.right,top:t.top,bottom:t.bottom,near:t.near,far:t.far,matrix:t.matrix.clone(),matrixWorld:t.matrixWorld.clone(),matrixWorldInverse:t.matrixWorldInverse.clone(),projectionMatrix:t.projectionMatrix.clone(),projectionMatrixInverse:t.projectionMatrixInverse.clone()}))}}restoreFit(e){if(!e)return;const t=this.uniforms;t.owCsmSplit.value.copy(e.split),t.owCsmSplitNear.value.copy(e.splitNear),t.owCsmTexel.value.copy(e.texel),t.owCsmRange.value.copy(e.range),t.owSunDirView.value.copy(e.sunView),t.owSunDirWorld.value.copy(e.sunWorld),t.owCsmParams.value.copy(e.params);for(let n=0;n<this.matrices.length;n++)this.matrices[n].copy(e.matrices[n]);this._splits.set(e.splits),this._sunAxis.copy(e.sunAxis);for(let n=0;n<this._fitCenter.length;n++)this._fitCenter[n].copy(e.fitCenter[n]);this._fitRadius.set(e.fitRadius),this._fitBack.set(e.fitBack);for(let n=0;n<this.cameras.length;n++){const i=this.cameras[n],r=e.cameras[n];i.position.copy(r.position),i.quaternion.copy(r.quaternion),i.up.copy(r.up),i.left=r.left,i.right=r.right,i.top=r.top,i.bottom=r.bottom,i.near=r.near,i.far=r.far,i.matrix.copy(r.matrix),i.matrixWorld.copy(r.matrixWorld),i.matrixWorldInverse.copy(r.matrixWorldInverse),i.projectionMatrix.copy(r.projectionMatrix),i.projectionMatrixInverse.copy(r.projectionMatrixInverse)}}setStrength(e){this.uniforms.owCsmParams.value.x=e}setJitter(e){this.uniforms.owCsmParams.value.w=e}dispose(){this.rt.dispose(),this.depthMaterial.dispose()}}function Pm(s,e){const t=e>=3?16:e>=2?12:8,n=e>=3?20:e>=2?14:8,i=e>=2;return`
#define OW_CASCADES ${s}
#define OW_BLOCKER_TAPS ${t}
#define OW_PCF_TAPS ${n}
${i?"#define OW_PCSS 1":""}

uniform highp sampler2DArray owCsmMaps;
uniform mat4 owCsmMatrix[ OW_CASCADES ];
uniform vec4 owCsmSplit;
uniform vec4 owCsmSplitNear;
uniform vec4 owCsmTexel;
uniform vec4 owCsmRange;
uniform vec2 owCsmMapSize;
uniform vec3 owSunDirView;
uniform vec3 owSunDirWorld;
uniform vec4 owCsmParams;

float owIGNoise( vec2 p ) {
  return fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) );
}

vec2 owVogel( int i, int n, float phi ) {
  float r = sqrt( ( float( i ) + 0.5 ) / float( n ) );
  float theta = float( i ) * 2.39996323 + phi;
  return vec2( cos( theta ), sin( theta ) ) * r;
}

float owCsmTap( float layer, vec2 uv ) {
  return texture( owCsmMaps, vec3( uv, layer ) ).r;
}

float owCsmCascade( int c, vec3 wPos, vec3 wN, float NdL, float rot ) {
  float texelWorld = owCsmTexel[ c ];
  float range = owCsmRange[ c ];
  float layer = float( c );

  // normal offset — pushes the sample point off the surface by roughly one
  // shadow texel, scaled up at grazing angles where the texel projects wide.
  vec3 p = wPos + wN * ( texelWorld * ( 0.55 + 1.1 * ( 1.0 - NdL ) ) );
  vec4 sc = owCsmMatrix[ c ] * vec4( p, 1.0 );
  vec3 proj = sc.xyz / sc.w * 0.5 + 0.5;
  if ( proj.z >= 1.0 || proj.z <= 0.0 ) return 1.0;
  vec2 uv = proj.xy;
  vec2 edge = min( uv, 1.0 - uv );
  if ( min( edge.x, edge.y ) <= 0.0 ) return 1.0;

  float slope = clamp( sqrt( max( 0.0, 1.0 - NdL * NdL ) ) / max( NdL, 0.12 ), 0.0, 5.0 );
  float bias = ( texelWorld * ( 0.7 + 1.15 * slope ) ) / range;
  float recv = proj.z - bias;

  float invTex = owCsmMapSize.y;
  float extent = texelWorld * owCsmMapSize.x;   // cascade world extent
  float maxR = owCsmParams.z * invTex;
  float filterR = 1.4 * invTex;

  #ifdef OW_PCSS
    float searchR = min( maxR, 10.0 * invTex );
    float blocker = 0.0;
    float count = 0.0;
    for ( int i = 0; i < OW_BLOCKER_TAPS; i ++ ) {
      float d = owCsmTap( layer, uv + owVogel( i, OW_BLOCKER_TAPS, rot ) * searchR );
      if ( d < recv ) { blocker += d; count += 1.0; }
    }
    if ( count < 0.5 ) return 1.0;
    blocker /= count;
    float gap = max( 0.0, ( recv - blocker ) * range );
    float penumbra = gap * owCsmParams.y;         // metres of penumbra
    filterR = clamp( penumbra / extent, 1.0 * invTex, maxR );
  #endif

  float sum = 0.0;
  for ( int i = 0; i < OW_PCF_TAPS; i ++ ) {
    float d = owCsmTap( layer, uv + owVogel( i, OW_PCF_TAPS, rot ) * filterR );
    sum += step( recv, d );
  }
  return sum / float( OW_PCF_TAPS );
}

// posView / nrmView are three's view-space geometryPosition / geometryNormal.
float owSunShadow( vec3 lightDirView, vec3 posView, vec3 nrmView ) {
  if ( owCsmParams.x <= 0.0 ) return 1.0;
  if ( dot( lightDirView, owSunDirView ) < 0.999 ) return 1.0;

  float vd = -posView.z;
  if ( vd >= owCsmSplit[ OW_CASCADES - 1 ] ) return 1.0;

  vec3 wPos = cameraPosition + ( posView * mat3( viewMatrix ) );
  vec3 wN = normalize( nrmView * mat3( viewMatrix ) );
  float NdL = dot( wN, owSunDirWorld );
  if ( NdL <= 0.0 ) return 1.0;

  float rot = owIGNoise( gl_FragCoord.xy + owCsmParams.w ) * 6.2831853;

  int c = OW_CASCADES - 1;
  for ( int i = 0; i < OW_CASCADES; i ++ ) {
    if ( vd < owCsmSplit[ i ] ) { c = i; break; }
  }

  float s = owCsmCascade( c, wPos, wN, NdL, rot );

  // cross-fade the last 12% of a cascade into the next one
  if ( c < OW_CASCADES - 1 ) {
    float a = owCsmSplitNear[ c ];
    float b = owCsmSplit[ c ];
    float t = smoothstep( mix( a, b, 0.88 ), b, vd );
    if ( t > 0.001 ) s = mix( s, owCsmCascade( c + 1, wPos, wN, NdL, rot ), t );
  }

  // fade the whole thing out at the far edge so there is no hard terminator
  float fadeOut = smoothstep( owCsmSplit[ OW_CASCADES - 1 ],
                              owCsmSplit[ OW_CASCADES - 1 ] * 0.88, vd );
  s = mix( 1.0, s, fadeOut );

  return mix( 1.0, s, owCsmParams.x );
}
`}const Dm=9,da=10;class Ua{constructor(e,t){this.cascades=t.cascades,this.quality=t.quality,this.key=`ow-patch-${Dm}-${t.cascades}-${t.quality}`,this.uniforms={...e,owAoTex:{value:null},owContactTex:{value:null},owSsrTex:{value:null},owScreenTexel:{value:new ce(1/1920,1/1080)},owFeat:{value:new Ee(0,0,0,1)},owAoStrength:{value:new ce(1,.6)},owSkyFill:{value:new C(0,0,0)},owGroundFill:{value:new C(0,0,0)},owFillGain:{value:new ce(1,1)},owFillDir:{value:new Ee(-.95,.85,-.05,.7)},owIndirect:{value:new Ee(1,1,0,0)},owRoomXf:{value:new Ee(1,0,0,0)},owRooms:{value:$o(da)},owRoomsY:{value:$o(da)}},this.chunk=Pm(t.cascades,t.quality),this.rooms=this.uniforms.owRooms.value,this.roomsY=this.uniforms.owRoomsY.value,this._patched=new WeakSet,this.count=0}static isLit(e){return!!(e&&(e.isMeshStandardMaterial||e.isMeshPhysicalMaterial||e.isMeshPhongMaterial||e.isMeshLambertMaterial||e.isMeshToonMaterial))}patch(e){if(!e||this._patched.has(e)||!Ua.isLit(e)||e.userData?.owNoPatch)return!1;this._patched.add(e),this.count++;const t=this.uniforms,n=this.chunk+Lm,i=e.onBeforeCompile,r=e.customProgramCacheKey,a=this.key;return e.onBeforeCompile=function(o,l){typeof i=="function"&&i.call(this,o,l);for(const h in t)o.uniforms[h]=t[h];o.fragmentShader=o.fragmentShader.replace("#include <lights_pars_begin>",`#include <lights_pars_begin>
`+n);const c=Ne.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
        directLight.color *= receiveShadow ? owSunShadow( directionalLight.direction, geometryPosition, geometryNormal ) * owContactShadow( directionalLight.direction ) : 1.0;
        // Micro-shadowing. AO belongs on indirect light, but a cascade texel is
        // tens of centimetres wide and the contact ray only runs along the sun
        // direction, so the last centimetre of a wall/soffit junction gets no
        // occlusion from EITHER and the frame comes back with razor-sharp
        // junctions and nothing grounded. A small fraction of the AO term on
        // the direct light is what every shipping renderer uses to close that
        // gap; at 0.35 it costs 2-3% on an open surface and a third of the key
        // in a crevice.
        directLight.color *= mix( 1.0, owSampleAO(), owAoStrength.x * 0.35 );`);o.fragmentShader=o.fragmentShader.replace("#include <lights_fragment_begin>",c),o.fragmentShader=o.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
        #if defined( RE_IndirectDiffuse )
        {
          float owAo = owSampleAO();
          if ( owAo < 1.0 ) {
            vec3 owBounce = owMultiBounce( owAo, diffuseColor.rgb );
            irradiance *= owBounce;
            iblIrradiance *= owBounce;
            #if defined( STANDARD ) && defined( RE_IndirectSpecular )
              radiance *= mix( 1.0, owSpecularOcclusion( owAo, material.roughness ), owAoStrength.y );
            #endif
          }

          // --- interior/exterior indirect budget -----------------------------
          // Skylight cannot reach the middle of a closed room, and letting it
          // do so is what makes a doorway read as a hole cut in a card instead
          // of as an aperture two stops over the room it lights. The gate is a
          // coarse room volume test (see RenderSystem._updateRooms) with an AO
          // term folded in, floored so nothing ever goes black.
          vec3 owWP = cameraPosition + ( geometryPosition * mat3( viewMatrix ) );
          float owIndoor = owInteriorGate( owWP, owAo );

          // --- two-band hemispheric bounce fill ------------------------------
          // Cool sky above, warm street below — but *gated by the normal*, not
          // lerped: the sky band belongs to up-facing and vertical geometry and
          // the ground band to soffits, undersides and low-angle faces. Lerping
          // them put a warm street bounce on every wall and made shadows come
          // out warmer than the sun that cast them.
          // Occluded with sqrt(AO), never AO: a fill term that AO can drive to
          // zero is not a fill, it is just another way to make a black hole.
          vec3 owWN = inverseTransformDirection( normal, viewMatrix );
          float owFillAo = sqrt( max( owAo, 0.0 ) );
          float owUp = clamp( owWN.y, -1.0, 1.0 );
          // Cosine-hemisphere visibility of the sky, not a narrow smoothstep:
          // a vertical wall genuinely sees half the sky dome, and clipping it
          // to a third of the band was most of why a shaded facade came back
          // dead neutral — the blue term was small enough for the (achromatic)
          // env map and the warm bounce to bury it.
          float owSkyG = smoothstep( owFillDir.x, owFillDir.y, owUp ) * owIndoor;
          float owGndG = smoothstep( owFillDir.z, owFillDir.w, -owUp );
          irradiance += ( owSkyFill * owSkyG + owGroundFill * owGndG * owIndoor )
            * ( owFillAo * owFillGain.x );

          // The PMREM sky is the dominant indirect term in the frame, so the
          // interior gate and the indirect budget have to bite here or the
          // key:fill ratio is whatever the env map happens to be.
          iblIrradiance *= owIndirect.x * owIndoor;

          // --- warm sun bounce off whatever the sun is actually hitting ------
          // A single wrap term from the anti-sun hemisphere: the wall in shade
          // is lit by the sunlit wall across the street, and that is the light
          // that makes shadowed geometry read as shape instead of silhouette.
          //
          // Gated by owIndoor as well. It was not, and it is scaled off the sun,
          // so the inside of every room was receiving the street's bounce at
          // full strength through a metre of masonry — which is why an interior
          // metered the same as the sunlit exterior framed in its own doorway.
          irradiance += owGroundFill *
            ( owSunBounce( owWN ) * owFillGain.y * owFillAo * owIndoor );
        }
        #endif
        #if defined( STANDARD ) && defined( RE_IndirectSpecular ) && defined( USE_ENVMAP )
        if ( owFeat.z > 0.5 && material.roughness < 0.62 ) {
          vec4 owSsr = texture2D( owSsrTex, gl_FragCoord.xy * owScreenTexel );
          float owW = owSsr.a * smoothstep( 0.62, 0.14, material.roughness );
          radiance = mix( radiance, owSsr.rgb, clamp( owW, 0.0, 1.0 ) );
        }
        #endif
        `)},e.customProgramCacheKey=function(){const o=typeof r=="function"?r.call(this):"";return a+o},e.needsUpdate=!0,!0}setScreenSize(e,t){this.uniforms.owScreenTexel.value.set(1/e,1/t)}dispose(){this._patched=new WeakSet}}function $o(s){const e=new Array(s);for(let t=0;t<s;t++)e[t]=new Ee(0,0,0,0);return e}const Lm=`
#define OW_ROOMS ${da}
uniform sampler2D owAoTex;
uniform sampler2D owContactTex;
uniform sampler2D owSsrTex;
uniform vec2 owScreenTexel;
uniform vec4 owFeat;
uniform vec2 owAoStrength;
uniform vec3 owSkyFill;
uniform vec3 owGroundFill;
uniform vec2 owFillGain;
uniform vec4 owFillDir;
uniform vec4 owIndirect;
uniform vec4 owRoomXf;
uniform vec4 owRooms[ OW_ROOMS ];
uniform vec4 owRoomsY[ OW_ROOMS ];

/**
 * 1 outdoors, -> owIndirect.y deep inside a coarse interior volume.
 *
 * The volumes are the enterable buildings' footprints, tested in LEVEL space
 * (one yaw, so a 2D rotate is enough) by *depth inside the box* rather than by
 * containment: a facade's outer skin sits exactly on the footprint boundary at
 * depth 0 and its inner skin one wall thickness in, so a 6..30 cm feather
 * separates the two faces of the same wall without needing per-room geometry.
 */
float owInteriorGate( vec3 worldPos, float ao ) {
  float indoor = 0.0;
  if ( owIndirect.z > 0.5 ) {
    float lx = worldPos.x * owRoomXf.x + worldPos.z * owRoomXf.y + owRoomXf.z;
    float lz = -worldPos.x * owRoomXf.y + worldPos.z * owRoomXf.x + owRoomXf.w;
    int n = int( owIndirect.z );
    for ( int i = 0; i < OW_ROOMS; i ++ ) {
      if ( i >= n ) break;
      vec4 r = owRooms[ i ];
      vec4 ry = owRoomsY[ i ];
      float d = min(
        min( r.z - abs( lx - r.x ), r.w - abs( lz - r.y ) ),
        min( worldPos.y - ry.x, ry.y - worldPos.y ) );
      indoor = max( indoor, smoothstep( 0.06, 0.30, d ) );
    }
  }
  // Even outside a tagged volume, a pocket the sky genuinely cannot see should
  // not receive full skylight — that is what the AO buffer knows and the room
  // list does not (arcades, stairwells, under-awning market stalls). Mixed in
  // at 0.6 so it shapes rather than doubling up as a second AO multiply.
  float aoGate = mix( 1.0, smoothstep( 0.45, 0.98, ao ), 0.6 );
  float g = min( 1.0 - indoor, aoGate );
  return mix( owIndirect.y, 1.0, clamp( g, 0.0, 1.0 ) );
}

float owSampleAO() {
  if ( owFeat.x < 0.5 ) return 1.0;
  float ao = texture2D( owAoTex, gl_FragCoord.xy * owScreenTexel ).r;
  // Floor the visibility: real crevices are filled by multiply-scattered light,
  // and an AO term that reaches 0 is a dark halo, not occlusion.
  return mix( 1.0, max( ao, 0.25 ), owAoStrength.x );
}

/**
 * Wrapped diffuse from the anti-sun hemisphere — the reflected street key.
 * The wrap is tight (0.12 rather than 0.35): a face turned away from the sunlit
 * side of the street receives none of its bounce, and a wide wrap is what let
 * this warm term reach every surface in the frame at once.
 */
float owSunBounce( vec3 worldNormal ) {
  vec3 anti = normalize( vec3( -owSunDirWorld.x, 0.28, -owSunDirWorld.z ) + vec3( 1e-4 ) );
  return clamp( ( dot( worldNormal, anti ) + 0.12 ) / 1.12, 0.0, 1.0 );
}

// Jimenez GTAO multi-bounce: dark albedos occlude more than bright ones,
// which stops AO turning white plaster into grey mud.
vec3 owMultiBounce( float ao, vec3 albedo ) {
  vec3 a = 2.0404 * albedo - 0.3324;
  vec3 b = -4.7951 * albedo + 0.6417;
  vec3 c = 2.7552 * albedo + 0.6903;
  return clamp( ao * ( ao * ( ao * a + b ) + c ), vec3( ao ), vec3( 1.0 ) );
}

// Rough surfaces gather from a wide cone, so they see more occlusion.
float owSpecularOcclusion( float ao, float rough ) {
  float r2 = rough * rough;
  return clamp( pow( max( ao, 0.0 ), 1.0 + r2 * 2.0 ), 0.0, 1.0 );
}

float owContactShadow( vec3 lightDirView ) {
  if ( owFeat.y < 0.5 ) return 1.0;
  if ( dot( lightDirView, owSunDirView ) < 0.999 ) return 1.0;
  return texture2D( owContactTex, gl_FragCoord.xy * owScreenTexel ).r;
}

`,Um=.7;class Im{constructor(){this.rt=null,this.width=1,this.height=1,this.prev=new Map,this._seen=new Set,this.material=new Xt({name:"ow-prepass",glslVersion:oa,side:xn,uniforms:{owPrevModelMatrix:{value:new Ie},owCurrVP:{value:new Ie},owPrevVP:{value:new Ie},owMatId:{value:0},owCoverage:{value:1}},vertexShader:`
        #include <common>
        #include <batching_pars_vertex>
        #include <skinning_pars_vertex>
        #include <morphtarget_pars_vertex>

        uniform mat4 owPrevModelMatrix;
        uniform mat4 owCurrVP;
        uniform mat4 owPrevVP;

        varying vec3 vNrm;
        varying vec4 vCurrClip;
        varying vec4 vPrevClip;
        varying float vViewDepth;

        void main() {
          #include <batching_vertex>
          #include <beginnormal_vertex>
          #include <morphinstance_vertex>
          #include <morphnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <defaultnormal_vertex>
          #include <begin_vertex>
          #include <morphtarget_vertex>
          #include <skinning_vertex>
          #include <project_vertex>

          vNrm = transformedNormal;
          vViewDepth = -mvPosition.z;

          vec4 objPos = vec4( transformed, 1.0 );
          #ifdef USE_BATCHING
            objPos = batchingMatrix * objPos;
          #endif
          #ifdef USE_INSTANCING
            objPos = instanceMatrix * objPos;
          #endif
          vCurrClip = owCurrVP * ( modelMatrix * objPos );
          vPrevClip = owPrevVP * ( owPrevModelMatrix * objPos );
        }
      `,fragmentShader:`
        precision highp float;
        ${bt}
        uniform float owMatId;
        uniform float owCoverage;

        varying vec3 vNrm;
        varying vec4 vCurrClip;
        varying vec4 vPrevClip;
        varying float vViewDepth;

        layout(location = 0) out vec4 gNormal;
        layout(location = 1) out vec4 gVelocity;
        layout(location = 2) out vec4 gDepth;

        void main() {
          vec3 n = normalize( vNrm );
          if ( !gl_FrontFacing ) n = -n;
          gNormal = vec4( owEncodeNormal( n ), owCoverage, owMatId );

          vec2 a = vCurrClip.xy / max( 1e-6, vCurrClip.w );
          vec2 b = vPrevClip.xy / max( 1e-6, vPrevClip.w );
          gVelocity = vec4( ( a - b ) * 0.5, 0.0, 0.0 );

          gDepth = vec4( vViewDepth, 0.0, 0.0, 0.0 );
        }
      `}),this.material.onBeforeRender=(e,t,n,i,r)=>{const a=this.material.uniforms,o=this.prev.get(r.id);o!==void 0?a.owPrevModelMatrix.value.copy(o):a.owPrevModelMatrix.value.copy(r.matrixWorld),a.owMatId.value=r.userData!==void 0&&r.userData.owMatId||0,a.owCoverage.value=r.isSkinnedMesh===!0||r.morphTargetInfluences!==void 0&&r.morphTargetInfluences!==null?Um:1,this.material.uniformsNeedUpdate=!0}}setSize(e,t){if(e=Math.max(1,e|0),t=Math.max(1,t|0),this.rt&&this.width===e&&this.height===t)return;this.width=e,this.height=t,this.rt&&this.rt.dispose();const n=new Wt(e,t,{count:3,type:zt,format:_t,minFilter:dt,magFilter:dt,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1});n.textures[0].name="gb-normal",n.textures[1].format=_i,n.textures[1].type=zt,n.textures[1].name="gb-velocity",n.textures[2].format=Wi,n.textures[2].type=Nt,n.textures[2].name="gb-depth";for(const i of n.textures)i.minFilter=dt,i.magFilter=dt,i.generateMipmaps=!1;this.rt=n}get normalTexture(){return this.rt.textures[0]}get velocityTexture(){return this.rt.textures[1]}get depthTexture(){return this.rt.textures[2]}render(e,t,n,i,r,a){const o=this.material.uniforms;o.owCurrVP.value.copy(i),o.owPrevVP.value.copy(r);const l=t.overrideMaterial;t.overrideMaterial=this.material,e.setRenderTarget(this.rt),a?e.clear(!0,!0,!1):e.clear(!1,!0,!1),e.render(t,n),t.overrideMaterial=l}beginRecord(){this._seen.clear()}recordMatrices(e,t){for(let n=0;n<t;n++){const i=e[n];this._seen.add(i.id);let r=this.prev.get(i.id);r===void 0&&(r=new Ie,this.prev.set(i.id,r)),r.copy(i.matrixWorld)}}endRecord(){if(this.prev.size>this._seen.size*2+64)for(const e of this.prev.keys())this._seen.has(e)||this.prev.delete(e)}dispose(){this.rt&&this.rt.dispose(),this.material.dispose(),this.prev.clear()}}const Fm=`
precision highp float;
${bt}

uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform mat4 uProjInv;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform float uP11;
uniform vec4 uParams;   // x radius(m)  y intensity  z frame  w thickness
varying vec2 vUv;

#define OW_SLICES 3
#define OW_STEPS 8

float owArc( float h, float n, float cosN, float sinN ) {
  return 0.25 * ( -cos( 2.0 * h - n ) + cosN + 2.0 * h * sinN );
}

void main() {
  vec4 nrm = texture2D( tNormal, vUv );
  if ( nrm.z < 0.5 ) { gl_FragColor = vec4( 1.0, 1e4, 0.0, 1.0 ); return; }

  float depth = texture2D( tDepth, vUv ).r;
  vec3 P = owViewPos( vUv, depth, uProjInv );
  vec3 N = owDecodeNormal( nrm.xy );
  vec3 V = normalize( -P );

  float radius = uParams.x;
  // world radius -> pixels
  float radiusPx = radius * uP11 * 0.5 * uResolution.y / max( 0.2, depth );
  radiusPx = clamp( radiusPx, 6.0, 128.0 );

  float noise = owIGN( gl_FragCoord.xy + uParams.z * 5.588238 );
  float noise2 = owHash12( gl_FragCoord.xy * 0.371 + uParams.z );

  float invR2 = 1.0 / ( radius * radius );
  float visibility = 0.0;

  for ( int s = 0; s < OW_SLICES; s ++ ) {
    float phi = ( float( s ) + noise ) * ( OW_PI / float( OW_SLICES ) );
    vec2 dir2 = vec2( cos( phi ), sin( phi ) );
    vec3 sliceDir = vec3( dir2, 0.0 );

    vec3 axis = normalize( cross( sliceDir, V ) );
    vec3 projN = N - axis * dot( N, axis );
    float projLen = length( projN );
    if ( projLen < 1e-4 ) continue;
    vec3 projNn = projN / projLen;

    vec3 orthoDir = normalize( sliceDir - V * dot( sliceDir, V ) );
    float cosN = clamp( dot( projNn, V ), -1.0, 1.0 );
    float n = sign( dot( orthoDir, projNn ) ) * acos( cosN );
    float sinN = sin( n );

    // Horizons are signed relative to orthoDir: the +dir2 side carries the
    // POSITIVE angle. Getting this the wrong way round collapses the
    // visibility arc on every grazing surface.
    float cosHPos = -1.0;
    float cosHNeg = -1.0;

    for ( int t = 0; t < OW_STEPS; t ++ ) {
      // QUADRATIC step distribution, not linear.
      //
      // A 1.35 m radius on a wall three metres away is 316 px, clamped to 128,
      // which with eight linear steps put the FIRST sample sixteen pixels out.
      // Everything inside that — the wall/soffit junction, the foot of a
      // column, the gap under a crate, i.e. every contact in the frame — was
      // simply never sampled, and the buffer came back at 0.92 visibility
      // almost everywhere with nothing but a wide soft gradient in it. Weighting
      // the steps toward the origin puts the first three inside six pixels while
      // still reaching the full radius, at the same eight taps.
      //
      // +1 px minimum: a sample that lands back on the centre texel produces a
      // garbage horizon direction that closes the visibility arc completely.
      float ft = ( float( t ) + noise2 ) / float( OW_STEPS );
      float off = radiusPx * ft * ft + 1.0;
      vec2 duv = dir2 * off * uTexel;

      // +dir
      vec2 uv1 = vUv + duv;
      if ( uv1.x > 0.0 && uv1.x < 1.0 && uv1.y > 0.0 && uv1.y < 1.0 ) {
        float d1 = texture2D( tDepth, uv1 ).r;
        float cov1 = texture2D( tNormal, uv1 ).z;
        if ( cov1 > 0.5 ) {
          vec3 ds = owViewPos( uv1, d1, uProjInv ) - P;
          float len2 = dot( ds, ds );
          if ( len2 > 2e-5 ) {
            float inv = inversesqrt( len2 );
            float c = dot( ds, V ) * inv;
            float fall = clamp( len2 * invR2, 0.0, 1.0 );
            fall *= fall;
            cosHPos = max( cosHPos, mix( c, cosHPos, fall ) );
          }
        }
      }

      // -dir
      vec2 uv2 = vUv - duv;
      if ( uv2.x > 0.0 && uv2.x < 1.0 && uv2.y > 0.0 && uv2.y < 1.0 ) {
        float d2 = texture2D( tDepth, uv2 ).r;
        float cov2 = texture2D( tNormal, uv2 ).z;
        if ( cov2 > 0.5 ) {
          vec3 ds = owViewPos( uv2, d2, uProjInv ) - P;
          float len2 = dot( ds, ds );
          if ( len2 > 2e-5 ) {
            float inv = inversesqrt( len2 );
            float c = dot( ds, V ) * inv;
            float fall = clamp( len2 * invR2, 0.0, 1.0 );
            fall *= fall;
            cosHNeg = max( cosHNeg, mix( c, cosHNeg, fall ) );
          }
        }
      }
    }

    float h1 = -acos( clamp( cosHNeg, -1.0, 1.0 ) );
    float h2 = acos( clamp( cosHPos, -1.0, 1.0 ) );
    h1 = n + max( h1 - n, -OW_HALF_PI );
    h2 = n + min( h2 - n, OW_HALF_PI );

    // A single slice legitimately integrates to more than 1 on tilted
    // surfaces; the excess is what compensates the slices whose projected
    // normal is short. Clamping per slice (or per frame) biases the whole
    // buffer dark, which is the classic "my SSAO looks like dirt" bug.
    visibility += projLen * ( owArc( h1, n, cosN, sinN ) + owArc( h2, n, cosN, sinN ) );
  }

  visibility = clamp( visibility / float( OW_SLICES ), 0.0, 4.0 );

  gl_FragColor = vec4( visibility, depth, 0.0, 1.0 );
}
`,Nm=`
precision highp float;
${bt}
uniform sampler2D tCurrent;
uniform sampler2D tHistory;
uniform sampler2D tVelocity;
uniform sampler2D tNormal;
uniform vec2 uTexel;
uniform float uFeedback;
varying vec2 vUv;

void main() {
  vec2 cur = texture2D( tCurrent, vUv ).rg;
  vec2 vel = texture2D( tVelocity, vUv ).rg;
  vec2 huv = vUv - vel;

  float w = uFeedback;
  if ( huv.x < 0.0 || huv.x > 1.0 || huv.y < 0.0 || huv.y > 1.0 ) w = 0.0;

  vec2 hist = texture2D( tHistory, huv ).rg;
  // reject on depth discontinuity (disocclusion)
  float rel = abs( hist.y - cur.y ) / max( 0.05, cur.y );
  w *= exp( -rel * 30.0 );

  // A wide neighbourhood window only: the per-frame signal is 3 slices of a
  // stochastic integral, so a tight clamp would just re-inject its variance.
  float mn = cur.x, mx = cur.x;
  for ( int i = 0; i < 4; i ++ ) {
    vec2 o = vec2( i == 0 ? 1.0 : i == 1 ? -1.0 : 0.0, i == 2 ? 1.0 : i == 3 ? -1.0 : 0.0 );
    float s = texture2D( tCurrent, vUv + o * uTexel * 2.0 ).r;
    mn = min( mn, s ); mx = max( mx, s );
  }
  float h = clamp( hist.x, mn - 0.45, mx + 0.45 );

  gl_FragColor = vec4( mix( cur.x, h, w ), cur.y, 0.0, 1.0 );
}
`,Om=`
precision highp float;
uniform sampler2D tAo;
uniform vec2 uDirection;
uniform vec2 uParams;   // x: apply the intensity curve on this pass
varying vec2 vUv;

void main() {
  vec2 c = texture2D( tAo, vUv ).rg;
  float sum = c.r * 0.4;
  float wsum = 0.4;
  for ( int i = 1; i <= 3; i ++ ) {
    float w0 = 0.4 / float( i + 1 );
    vec2 o = uDirection * float( i );
    vec2 a = texture2D( tAo, vUv + o ).rg;
    vec2 b = texture2D( tAo, vUv - o ).rg;
    float wa = w0 * exp( -abs( a.g - c.g ) * 22.0 / max( 0.1, c.g ) );
    float wb = w0 * exp( -abs( b.g - c.g ) * 22.0 / max( 0.1, c.g ) );
    sum += a.r * wa + b.r * wb;
    wsum += wa + wb;
  }
  float ao = sum / wsum;
  if ( uParams.x > 0.5 ) ao = pow( clamp( ao, 0.0, 1.0 ), uParams.y );
  gl_FragColor = vec4( ao, c.g, 0.0, 1.0 );
}
`;class Bm{constructor(){this.core=new lt("ow-gtao",Fm,{tDepth:{value:null},tNormal:{value:null},uProjInv:{value:new Ie},uTexel:{value:new ce},uResolution:{value:new ce},uP11:{value:1},uParams:{value:new Ee(.9,1.35,0,.4)}}),this.temporal=new lt("ow-gtao-temporal",Nm,{tCurrent:{value:null},tHistory:{value:null},tVelocity:{value:null},tNormal:{value:null},uTexel:{value:new ce},uFeedback:{value:.92}}),this.blur=new lt("ow-gtao-blur",Om,{tAo:{value:null},uDirection:{value:new ce},uParams:{value:new ce(0,1.25)}}),this.rtRaw=null,this.rtBlur=null,this.rtFinal=null,this.history=[null,null],this._flip=0,this.texture=null}setSize(e,t){this.dispose(!0);const n={type:zt,format:_i,name:"gtao"};this.rtRaw=Je(e,t,n),this.rtBlur=Je(e,t,n),this.rtFinal=Je(e,t,n),this.history[0]=Je(e,t,n),this.history[1]=Je(e,t,n),this.core.uniforms.uTexel.value.set(1/e,1/t),this.core.uniforms.uResolution.value.set(e,t),this.temporal.uniforms.uTexel.value.set(1/e,1/t),this._texel=new ce(1/e,1/t)}render(e,t,n,i,r){const a=this.core.uniforms;a.tDepth.value=t.depthTexture,a.tNormal.value=t.normalTexture,a.uProjInv.value.copy(n.projectionMatrixInverse),a.uP11.value=n.projectionMatrix.elements[5],a.uParams.value.z=r?i%64:0,this.core.render(e,this.rtRaw);let o=this.rtRaw;if(r){const c=this.history[this._flip],h=this.history[this._flip^1],f=this.temporal.uniforms;f.tCurrent.value=this.rtRaw.texture,f.tHistory.value=c.texture,f.tVelocity.value=t.velocityTexture,this.temporal.render(e,h),this._flip^=1,o=h}const l=this.blur.uniforms;return l.tAo.value=o.texture,l.uDirection.value.set(this._texel.x,0),l.uParams.value.x=0,this.blur.render(e,this.rtBlur),l.tAo.value=this.rtBlur.texture,l.uDirection.value.set(0,this._texel.y),l.uParams.value.x=1,this.blur.render(e,this.rtFinal),this.texture=this.rtFinal.texture,this.texture}setRadius(e){this.core.uniforms.uParams.value.x=e}setIntensity(e){this.blur.uniforms.uParams.value.y=e}dispose(e=!1){this.rtRaw?.dispose(),this.rtBlur?.dispose(),this.rtFinal?.dispose(),this.history[0]?.dispose(),this.history[1]?.dispose(),this.rtRaw=this.rtBlur=this.rtFinal=null,this.history[0]=this.history[1]=null,e||(this.core.dispose(),this.temporal.dispose(),this.blur.dispose())}}const zm=`
precision highp float;
${bt}

uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform mat4 uProj;
uniform mat4 uProjInv;
uniform vec3 uSunDirView;
uniform vec4 uParams;   // x length(m)  y thickness(m)  z frame  w strength
varying vec2 vUv;

#define OW_CS_STEPS 14

void main() {
  vec4 nrm = texture2D( tNormal, vUv );
  if ( nrm.z < 0.5 ) { gl_FragColor = vec4( 1.0, 1e4, 0.0, 1.0 ); return; }

  float depth = texture2D( tDepth, vUv ).r;
  vec3 P = owViewPos( vUv, depth, uProjInv );
  vec3 N = owDecodeNormal( nrm.xy );
  vec3 L = uSunDirView;

  float NdL = dot( N, L );
  if ( NdL <= 0.02 ) { gl_FragColor = vec4( 1.0, depth, 0.0, 1.0 ); return; }

  float len = uParams.x * clamp( depth * 0.08 + 0.75, 0.75, 2.5 );
  float jitter = owIGN( gl_FragCoord.xy + uParams.z * 3.1717 );

  vec3 origin = P + N * ( 0.012 + depth * 0.0015 );
  vec3 stepV = L * ( len / float( OW_CS_STEPS ) );

  float occ = 0.0;
  for ( int i = 0; i < OW_CS_STEPS; i ++ ) {
    vec3 sp = origin + stepV * ( float( i ) + jitter );
    vec4 clip = uProj * vec4( sp, 1.0 );
    vec2 suv = clip.xy / clip.w * 0.5 + 0.5;
    if ( suv.x <= 0.0 || suv.x >= 1.0 || suv.y <= 0.0 || suv.y >= 1.0 ) break;

    float sceneDepth = texture2D( tDepth, suv ).r;
    float cov = texture2D( tNormal, suv ).z;
    if ( cov < 0.5 ) continue;

    float diff = -sp.z - sceneDepth;
    float bias = 0.004 + sceneDepth * 0.0025;
    if ( diff > bias && diff < uParams.y ) {
      // fade with distance travelled so the shadow dissolves rather than ends
      float t = ( float( i ) + jitter ) / float( OW_CS_STEPS );
      occ = max( occ, 1.0 - t * t );
      break;
    }
  }

  float shadow = 1.0 - occ * uParams.w;
  gl_FragColor = vec4( shadow, depth, 0.0, 1.0 );
}
`,km=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uDirection;
varying vec2 vUv;
void main() {
  vec2 c = texture2D( tSrc, vUv ).rg;
  float sum = c.r * 0.5;
  float wsum = 0.5;
  for ( int i = 1; i <= 2; i ++ ) {
    vec2 o = uDirection * float( i );
    vec2 a = texture2D( tSrc, vUv + o ).rg;
    vec2 b = texture2D( tSrc, vUv - o ).rg;
    float w = 0.3 / float( i );
    float wa = w * exp( -abs( a.g - c.g ) * 40.0 / max( 0.1, c.g ) );
    float wb = w * exp( -abs( b.g - c.g ) * 40.0 / max( 0.1, c.g ) );
    sum += a.r * wa + b.r * wb;
    wsum += wa + wb;
  }
  gl_FragColor = vec4( sum / wsum, c.g, 0.0, 1.0 );
}
`;class Vm{constructor(){this.pass=new lt("ow-contact",zm,{tDepth:{value:null},tNormal:{value:null},uProj:{value:new Ie},uProjInv:{value:new Ie},uSunDirView:{value:new C(0,1,0)},uParams:{value:new Ee(.4,.42,0,1)}}),this.blur=new lt("ow-contact-blur",km,{tSrc:{value:null},uDirection:{value:new ce}}),this.rtA=null,this.rtB=null,this.texture=null}setLength(e){this.pass.uniforms.uParams.value.x=e}setStrength(e){this.pass.uniforms.uParams.value.w=e}setSize(e,t){this.rtA?.dispose(),this.rtB?.dispose();const n={type:zt,format:_i,name:"contact"};this.rtA=Je(e,t,n),this.rtB=Je(e,t,n),this._texel=new ce(1/e,1/t)}render(e,t,n,i,r){const a=this.pass.uniforms;a.tDepth.value=t.depthTexture,a.tNormal.value=t.normalTexture,a.uProj.value.copy(n.projectionMatrix),a.uProjInv.value.copy(n.projectionMatrixInverse),a.uSunDirView.value.copy(i),a.uParams.value.z=r%64,this.pass.render(e,this.rtA);const o=this.blur.uniforms;return o.tSrc.value=this.rtA.texture,o.uDirection.value.set(this._texel.x,0),this.blur.render(e,this.rtB),o.tSrc.value=this.rtB.texture,o.uDirection.value.set(0,this._texel.y),this.blur.render(e,this.rtA),this.texture=this.rtA.texture,this.texture}dispose(){this.rtA?.dispose(),this.rtB?.dispose(),this.pass.dispose(),this.blur.dispose()}}const Hm=`
precision highp float;
${bt}

uniform sampler2D tColor;      // previous resolved frame (HDR)
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform sampler2D tVelocity;
uniform mat4 uProj;
uniform mat4 uProjInv;
uniform vec2 uTexel;
uniform vec4 uParams;   // x maxDistance  y thickness  z frame  w intensity
varying vec2 vUv;

#define OW_SSR_STEPS 28
#define OW_SSR_REFINE 5

void main() {
  vec4 nrm = texture2D( tNormal, vUv );
  if ( nrm.z < 0.5 ) { gl_FragColor = vec4( 0.0 ); return; }

  float depth = texture2D( tDepth, vUv ).r;
  vec3 P = owViewPos( vUv, depth, uProjInv );
  vec3 N = owDecodeNormal( nrm.xy );
  vec3 V = normalize( P );
  vec3 R = reflect( V, N );

  // Rays coming back at the camera cannot be resolved on screen.
  float facing = clamp( dot( -V, R ), 0.0, 1.0 );
  if ( facing > 0.94 ) { gl_FragColor = vec4( 0.0 ); return; }

  float maxDist = uParams.x;
  float jitter = owIGN( gl_FragCoord.xy + uParams.z * 7.331 );

  vec3 start = P + N * ( 0.02 + depth * 0.002 );
  float t = 0.06 + jitter * 0.06;
  float prevT = t;
  float stepScale = pow( maxDist / 0.06, 1.0 / float( OW_SSR_STEPS ) );

  bool hit = false;
  vec2 hitUv = vec2( 0.0 );
  float hitDiff = 0.0;

  for ( int i = 0; i < OW_SSR_STEPS; i ++ ) {
    vec3 sp = start + R * t;
    if ( sp.z > -0.05 ) break;
    vec4 clip = uProj * vec4( sp, 1.0 );
    vec2 suv = clip.xy / clip.w * 0.5 + 0.5;
    if ( suv.x <= 0.0 || suv.x >= 1.0 || suv.y <= 0.0 || suv.y >= 1.0 ) break;

    float sceneDepth = texture2D( tDepth, suv ).r;
    float cov = texture2D( tNormal, suv ).z;
    float diff = -sp.z - sceneDepth;

    if ( cov > 0.5 && diff > 0.0 && diff < uParams.y + t * 0.06 ) {
      // binary refine between prevT and t
      float lo = prevT, hi = t;
      for ( int k = 0; k < OW_SSR_REFINE; k ++ ) {
        float mid = ( lo + hi ) * 0.5;
        vec3 mp = start + R * mid;
        vec4 mc = uProj * vec4( mp, 1.0 );
        vec2 muv = mc.xy / mc.w * 0.5 + 0.5;
        float md = texture2D( tDepth, muv ).r;
        if ( -mp.z - md > 0.0 ) hi = mid; else lo = mid;
      }
      vec3 fp = start + R * hi;
      vec4 fc = uProj * vec4( fp, 1.0 );
      hitUv = fc.xy / fc.w * 0.5 + 0.5;
      hitDiff = diff;
      hit = true;
      break;
    }
    prevT = t;
    t *= stepScale;
    if ( t > maxDist ) break;
  }

  if ( !hit ) { gl_FragColor = vec4( 0.0 ); return; }

  // Reproject the hit into the previous frame so the colour lines up.
  vec2 vel = texture2D( tVelocity, hitUv ).rg;
  vec2 srcUv = clamp( hitUv - vel, vec2( 0.001 ), vec2( 0.999 ) );
  vec3 color = texture2D( tColor, srcUv ).rgb;

  // Confidence: fade at screen borders, at grazing back-facing rays, and with
  // how far the ray had to travel.
  vec2 edge = smoothstep( vec2( 0.0 ), vec2( 0.12 ), hitUv ) *
              smoothstep( vec2( 0.0 ), vec2( 0.12 ), 1.0 - hitUv );
  float conf = edge.x * edge.y;
  conf *= 1.0 - smoothstep( 0.7, 0.94, facing );
  conf *= 1.0 - smoothstep( maxDist * 0.55, maxDist, t );
  conf *= 1.0 - smoothstep( uParams.y * 0.5, uParams.y, hitDiff );

  gl_FragColor = vec4( max( color, vec3( 0.0 ) ), clamp( conf, 0.0, 1.0 ) * uParams.w );
}
`,Gm=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uDirection;
varying vec2 vUv;
void main() {
  vec4 sum = texture2D( tSrc, vUv ) * 0.4;
  float w = 0.4;
  for ( int i = 1; i <= 2; i ++ ) {
    float wi = 0.3 / float( i );
    sum += texture2D( tSrc, vUv + uDirection * float( i ) ) * wi;
    sum += texture2D( tSrc, vUv - uDirection * float( i ) ) * wi;
    w += wi * 2.0;
  }
  gl_FragColor = sum / w;
}
`;class Wm{constructor(){this.pass=new lt("ow-ssr",Hm,{tColor:{value:null},tDepth:{value:null},tNormal:{value:null},tVelocity:{value:null},uProj:{value:new Ie},uProjInv:{value:new Ie},uTexel:{value:new ce},uParams:{value:new Ee(24,.6,0,1)}}),this.blur=new lt("ow-ssr-blur",Gm,{tSrc:{value:null},uDirection:{value:new ce}}),this.rtA=null,this.rtB=null,this.texture=null}setSize(e,t){this.rtA?.dispose(),this.rtB?.dispose();const n=Math.max(1,e>>1),i=Math.max(1,t>>1);this.rtA=Je(n,i,{name:"ssr"}),this.rtB=Je(n,i,{name:"ssr-blur"}),this.pass.uniforms.uTexel.value.set(1/n,1/i),this._texel=new ce(1/n,1/i)}render(e,t,n,i,r){const a=this.pass.uniforms;a.tColor.value=n,a.tDepth.value=t.depthTexture,a.tNormal.value=t.normalTexture,a.tVelocity.value=t.velocityTexture,a.uProj.value.copy(i.projectionMatrix),a.uProjInv.value.copy(i.projectionMatrixInverse),a.uParams.value.z=r%64,this.pass.render(e,this.rtA);const o=this.blur.uniforms;return o.tSrc.value=this.rtA.texture,o.uDirection.value.set(this._texel.x,0),this.blur.render(e,this.rtB),o.tSrc.value=this.rtB.texture,o.uDirection.value.set(0,this._texel.y),this.blur.render(e,this.rtA),this.texture=this.rtA.texture,this.texture}dispose(){this.rtA?.dispose(),this.rtB?.dispose(),this.pass.dispose(),this.blur.dispose()}}const Ko=(()=>{const s=(t,n)=>{let i=1,r=0;for(;t>0;)i/=n,r+=i*(t%n),t=Math.floor(t/n);return r},e=[];for(let t=1;t<=16;t++)e.push([s(t,2)-.5,s(t,3)-.5]);return e})(),Xm=`
precision highp float;
${bt}

uniform sampler2D tCurrent;
uniform sampler2D tHistory;
uniform sampler2D tVelocity;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform mat4 uInvVP;
uniform mat4 uPrevVP;
uniform vec4 uParams;   // x feedback  y clipGamma  z first-frame  w motionScale
varying vec2 vUv;

vec3 tonemapW( vec3 c ) { return c / ( 1.0 + owLum( c ) ); }
vec3 tonemapWInv( vec3 c ) { return c / max( 1e-4, 1.0 - owLum( c ) ); }

vec3 sampleCatmullRom( sampler2D tex, vec2 uv ) {
  vec2 texSize = uResolution;
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor( samplePos - 0.5 ) + 0.5;
  vec2 f = samplePos - texPos1;

  vec2 w0 = f * ( -0.5 + f * ( 1.0 - 0.5 * f ) );
  vec2 w1 = 1.0 + f * f * ( -2.5 + 1.5 * f );
  vec2 w2 = f * ( 0.5 + f * ( 2.0 - 1.5 * f ) );
  vec2 w3 = f * f * ( -0.5 + 0.5 * f );

  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / max( w12, vec2( 1e-5 ) );

  vec2 texPos0 = ( texPos1 - 1.0 ) / texSize;
  vec2 texPos3 = ( texPos1 + 2.0 ) / texSize;
  vec2 texPos12 = ( texPos1 + offset12 ) / texSize;

  vec3 result = vec3( 0.0 );
  float wsum = 0.0;
  float wa = w12.x * w0.y;  result += texture2D( tex, vec2( texPos12.x, texPos0.y ) ).rgb * wa; wsum += wa;
  float wb = w0.x * w12.y;  result += texture2D( tex, vec2( texPos0.x, texPos12.y ) ).rgb * wb; wsum += wb;
  float wc = w12.x * w12.y; result += texture2D( tex, vec2( texPos12.x, texPos12.y ) ).rgb * wc; wsum += wc;
  float wd = w3.x * w12.y;  result += texture2D( tex, vec2( texPos3.x, texPos12.y ) ).rgb * wd; wsum += wd;
  float we = w12.x * w3.y;  result += texture2D( tex, vec2( texPos12.x, texPos3.y ) ).rgb * we; wsum += we;
  return result / max( wsum, 1e-5 );
}

void main() {
  vec3 current = texture2D( tCurrent, vUv ).rgb;

  if ( uParams.z > 0.5 ) { gl_FragColor = vec4( current, 1.0 ); return; }

  // --- velocity, dilated to the closest-depth neighbour ---------------------
  vec2 bestUv = vUv;
  float bestDepth = 1e9;
  for ( int i = 0; i < 9; i ++ ) {
    vec2 o = vec2( float( i % 3 ) - 1.0, float( i / 3 ) - 1.0 ) * uTexel;
    vec2 uv = vUv + o;
    vec4 n = texture2D( tNormal, uv );
    float d = n.z > 0.5 ? texture2D( tDepth, uv ).r : 1e8;
    if ( d < bestDepth ) { bestDepth = d; bestUv = uv; }
  }

  // Geometry that deforms inside its own transform (skinned characters, morphed
  // meshes) is tagged with a reduced coverage by the prepass, because a
  // matrix-difference velocity buffer cannot describe a moving elbow. Those
  // pixels get a much tighter variance clip and a much shorter history tail:
  // slightly noisier, but no background dragged through the silhouette.
  // The step() against 0.5 keeps the sky out of it: uncovered pixels are
  // coverage 0, which is "no surface", not "a deforming surface".
  float ca = texture2D( tNormal, vUv ).z;
  float cb = texture2D( tNormal, bestUv ).z;
  float dynamic = max(
    step( 0.5, ca ) * ( 1.0 - smoothstep( 0.72, 0.92, ca ) ),
    step( 0.5, cb ) * ( 1.0 - smoothstep( 0.72, 0.92, cb ) ) );

  vec2 vel;
  vec4 nrm = texture2D( tNormal, bestUv );
  if ( nrm.z > 0.5 ) {
    vel = texture2D( tVelocity, bestUv ).rg;
  } else {
    // background: reproject the far plane with the previous camera
    vec4 h = uInvVP * vec4( vUv * 2.0 - 1.0, 1.0, 1.0 );
    vec3 wpos = h.xyz / h.w;
    vec4 pc = uPrevVP * vec4( wpos, 1.0 );
    vec2 prevUv = ( pc.xy / pc.w ) * 0.5 + 0.5;
    vel = vUv - prevUv;
  }

  vec2 huv = vUv - vel;

  // --- neighbourhood statistics in YCoCg ------------------------------------
  vec3 m1 = vec3( 0.0 );
  vec3 m2 = vec3( 0.0 );
  vec3 nmin = vec3( 1e9 );
  vec3 nmax = vec3( -1e9 );
  for ( int i = 0; i < 9; i ++ ) {
    vec2 o = vec2( float( i % 3 ) - 1.0, float( i / 3 ) - 1.0 ) * uTexel;
    vec3 c = owRgbToYCoCg( tonemapW( texture2D( tCurrent, vUv + o ).rgb ) );
    m1 += c;
    m2 += c * c;
    nmin = min( nmin, c );
    nmax = max( nmax, c );
  }
  vec3 mean = m1 / 9.0;
  vec3 sigma = sqrt( max( m2 / 9.0 - mean * mean, vec3( 0.0 ) ) );
  float gamma = uParams.y * mix( 1.0, 0.38, dynamic );
  vec3 lo = max( mean - gamma * sigma, nmin );
  vec3 hi = min( mean + gamma * sigma, nmax );

  vec3 historyRgb = sampleCatmullRom( tHistory, huv );
  historyRgb = max( historyRgb, vec3( 0.0 ) );
  vec3 hist = owRgbToYCoCg( tonemapW( historyRgb ) );

  // clip toward the neighbourhood centre rather than clamping per channel:
  // clamping kills sub-pixel detail, clipping keeps it.
  vec3 centre = 0.5 * ( lo + hi );
  vec3 extent = 0.5 * ( hi - lo ) + 1e-5;
  vec3 dir = hist - centre;
  vec3 ts = abs( extent / max( abs( dir ), vec3( 1e-5 ) ) );
  float clipT = clamp( min( ts.x, min( ts.y, ts.z ) ), 0.0, 1.0 );
  vec3 clipped = centre + dir * clipT;

  float feedback = uParams.x;
  if ( huv.x < 0.0 || huv.x > 1.0 || huv.y < 0.0 || huv.y > 1.0 ) feedback = 0.0;

  // fast motion -> trust the history less
  float speed = length( vel * uResolution );
  feedback *= mix( 1.0, 0.72, clamp( speed / 24.0, 0.0, 1.0 ) );
  // heavy clipping means we were rejecting: shorten the tail
  feedback *= mix( 0.82, 1.0, clipT );
  // deforming geometry: cap the tail outright, no velocity describes it
  feedback = min( feedback, mix( 1.0, 0.55, dynamic ) );

  vec3 curY = owRgbToYCoCg( tonemapW( current ) );

  // luminance weighting (Karis) — suppresses the shimmer that a plain lerp
  // leaves on specular highlights
  float wc = 1.0 / ( 1.0 + curY.x );
  float wh = 1.0 / ( 1.0 + clipped.x );
  float sum = mix( wc, wh, feedback );
  vec3 outY = ( curY * wc * ( 1.0 - feedback ) + clipped * wh * feedback ) / max( sum, 1e-5 );

  vec3 result = tonemapWInv( owYCoCgToRgb( outY ) );
  gl_FragColor = vec4( max( result, vec3( 0.0 ) ), 1.0 );
}
`;class qm{constructor(){this.pass=new lt("ow-taa",Xm,{tCurrent:{value:null},tHistory:{value:null},tVelocity:{value:null},tNormal:{value:null},tDepth:{value:null},uTexel:{value:new ce},uResolution:{value:new ce},uInvVP:{value:new Ie},uPrevVP:{value:new Ie},uParams:{value:new Ee(.92,1.25,1,1)}}),this.history=[null,null],this._flip=0,this.index=0,this.jitter=new ce,this.texture=null,this._needsReset=!0}setSize(e,t){this.history[0]?.dispose(),this.history[1]?.dispose(),this.history[0]=Je(e,t,{name:"taa-a"}),this.history[1]=Je(e,t,{name:"taa-b"}),this.pass.uniforms.uTexel.value.set(1/e,1/t),this.pass.uniforms.uResolution.value.set(e,t),this._needsReset=!0}nextJitter(){const e=Ko[this.index%Ko.length];return this.index++,this.jitter.set(e[0],e[1]),this.jitter}reset(){this._needsReset=!0}render(e,t,n,i,r){const a=this.pass.uniforms;a.tCurrent.value=t,a.tHistory.value=this.history[this._flip].texture,a.tVelocity.value=n.velocityTexture,a.tNormal.value=n.normalTexture,a.tDepth.value=n.depthTexture,a.uInvVP.value.copy(i),a.uPrevVP.value.copy(r),a.uParams.value.z=this._needsReset?1:0,this._needsReset=!1;const o=this.history[this._flip^1];return this.pass.render(e,o),this._flip^=1,this.texture=o.texture,this.texture}get previousTexture(){return this.history[this._flip].texture}dispose(){this.history[0]?.dispose(),this.history[1]?.dispose(),this.pass.dispose()}}const Ym=`
precision highp float;
uniform sampler2D tVelocity;
uniform vec2 uTexel;      // texel size of the full-res velocity buffer
varying vec2 vUv;
// 8x8 taps spread over the 16x16 source tile centred on this output texel.
void main() {
  vec2 best = vec2( 0.0 );
  float bestLen = 0.0;
  for ( int y = 0; y < 8; y ++ ) {
    for ( int x = 0; x < 8; x ++ ) {
      vec2 o = ( vec2( float( x ), float( y ) ) - 3.5 ) * 2.0 * uTexel;
      vec2 v = texture2D( tVelocity, vUv + o ).rg;
      float l = dot( v, v );
      if ( l > bestLen ) { bestLen = l; best = v; }
    }
  }
  gl_FragColor = vec4( best, 0.0, 1.0 );
}
`,jm=`
precision highp float;
${bt}
uniform sampler2D tColor;
uniform sampler2D tVelocity;
uniform sampler2D tTile;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec2 uTexel;
uniform vec2 uResolution;
uniform vec4 uParams;   // x shutter, y maxRadiusPx, z frame, w intensity
varying vec2 vUv;

#define OW_MB_TAPS 12

void main() {
  vec4 centre = texture2D( tColor, vUv );
  vec2 tileVel = texture2D( tTile, vUv ).rg;
  vec2 ownVel = texture2D( tVelocity, vUv ).rg;

  vec2 vel = length( tileVel ) > length( ownVel ) ? tileVel : ownVel;
  vel *= uParams.x;

  float pixels = length( vel * uResolution );
  if ( pixels < 1.0 ) { gl_FragColor = centre; return; }

  float maxPx = uParams.y;
  if ( pixels > maxPx ) vel *= maxPx / pixels;

  float centreDepth = texture2D( tDepth, vUv ).r;
  float cov = texture2D( tNormal, vUv ).z;
  if ( cov < 0.5 ) centreDepth = 1e5;

  float jitter = owIGN( gl_FragCoord.xy + uParams.z * 2.717 ) - 0.5;

  vec3 sum = centre.rgb;
  float wsum = 1.0;
  for ( int i = 1; i <= OW_MB_TAPS; i ++ ) {
    float t = ( float( i ) + jitter ) / float( OW_MB_TAPS );
    vec2 o = vel * ( t - 0.5 );
    for ( int s = 0; s < 2; s ++ ) {
      vec2 uv = vUv + ( s == 0 ? o : -o );
      if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 ) continue;
      float d = texture2D( tDepth, uv ).r;
      float c = texture2D( tNormal, uv ).z;
      if ( c < 0.5 ) d = 1e5;
      // a sample that is much further away than the centre is background
      // leaking in — down-weight it
      float w = 1.0 - smoothstep( 0.0, 1.5, ( d - centreDepth ) / max( 1.0, centreDepth ) );
      w = mix( 0.15, 1.0, clamp( w, 0.0, 1.0 ) ) * ( 1.0 - t * 0.35 );
      sum += texture2D( tColor, uv ).rgb * w;
      wsum += w;
    }
  }

  vec3 blurred = sum / wsum;
  gl_FragColor = vec4( mix( centre.rgb, blurred, uParams.w ), centre.a );
}
`;class $m{constructor(){this.tilePass=new lt("ow-mb-tile",Ym,{tVelocity:{value:null},uTexel:{value:new ce}}),this.blurPass=new lt("ow-mb",jm,{tColor:{value:null},tVelocity:{value:null},tTile:{value:null},tDepth:{value:null},tNormal:{value:null},uTexel:{value:new ce},uResolution:{value:new ce},uParams:{value:new Ee(.5,48,0,1)}}),this.tileRt=null,this.outRt=null}setSize(e,t){this.tileRt?.dispose(),this.outRt?.dispose();const n=Math.max(1,Math.ceil(e/16)),i=Math.max(1,Math.ceil(t/16));this.tileRt=Je(n,i,{format:_i,name:"mb-tile"}),this.outRt=Je(e,t,{name:"mb"}),this.tilePass.uniforms.uTexel.value.set(1/e,1/t),this.blurPass.uniforms.uTexel.value.set(1/e,1/t),this.blurPass.uniforms.uResolution.value.set(e,t)}render(e,t,n,i,r){this.tilePass.uniforms.tVelocity.value=n.velocityTexture,this.tilePass.render(e,this.tileRt);const a=this.blurPass.uniforms;return a.tColor.value=t,a.tVelocity.value=n.velocityTexture,a.tTile.value=this.tileRt.texture,a.tDepth.value=n.depthTexture,a.tNormal.value=n.normalTexture,a.uParams.value.x=r,a.uParams.value.z=i%64,this.blurPass.render(e,this.outRt),this.outRt.texture}dispose(){this.tileRt?.dispose(),this.outRt?.dispose(),this.tilePass.dispose(),this.blurPass.dispose()}}const Fl=`
uniform sampler2D tDepth;
// x maxCoC(px)  y nearRatio  z focusMin  w focusMax
uniform vec4 uFocus;
// x farStartScale  y farRange  z nearScale  w unused
uniform vec4 uRange;

float owFocusDistance() {
  float c = texture2D( tDepth, vec2( 0.5 ) ).r;
  if ( c <= 0.0 ) c = 1e4;                       // aiming at the sky
  return clamp( c, uFocus.z, uFocus.w );
}

float owCoC( float depth, float focus ) {
  float d = depth <= 0.0 ? 1e4 : depth;
  float farStart = focus * uRange.x + 1.0;
  float far = smoothstep( farStart, farStart + uRange.y, d );
  float nearEnd = focus * uRange.z;
  float near = 1.0 - smoothstep( nearEnd * 0.35, nearEnd, d );
  return uFocus.x * max( far, near * uFocus.y );
}
`,Km=`
precision highp float;
${bt}
${Fl}
uniform sampler2D tColor;
uniform vec2 uSrcTexel;
varying vec2 vUv;

void main() {
  float focus = owFocusDistance();

  vec2 o = uSrcTexel * 0.5;
  vec3 c0 = max( texture2D( tColor, vUv + vec2( -o.x, -o.y ) ).rgb, vec3( 0.0 ) );
  vec3 c1 = max( texture2D( tColor, vUv + vec2(  o.x, -o.y ) ).rgb, vec3( 0.0 ) );
  vec3 c2 = max( texture2D( tColor, vUv + vec2( -o.x,  o.y ) ).rgb, vec3( 0.0 ) );
  vec3 c3 = max( texture2D( tColor, vUv + vec2(  o.x,  o.y ) ).rgb, vec3( 0.0 ) );

  float d0 = texture2D( tDepth, vUv + vec2( -o.x, -o.y ) ).r;
  float d1 = texture2D( tDepth, vUv + vec2(  o.x, -o.y ) ).r;
  float d2 = texture2D( tDepth, vUv + vec2( -o.x,  o.y ) ).r;
  float d3 = texture2D( tDepth, vUv + vec2(  o.x,  o.y ) ).r;

  // Weight the colour toward the MORE blurred taps: averaging a sharp
  // background into a blurred foreground is what makes cheap DOF look like a
  // halo around every silhouette.
  float k0 = owCoC( d0, focus ), k1 = owCoC( d1, focus );
  float k2 = owCoC( d2, focus ), k3 = owCoC( d3, focus );
  float w0 = k0 + 0.05, w1 = k1 + 0.05, w2 = k2 + 0.05, w3 = k3 + 0.05;
  vec3 col = ( c0 * w0 + c1 * w1 + c2 * w2 + c3 * w3 ) / ( w0 + w1 + w2 + w3 );

  gl_FragColor = vec4( col, max( max( k0, k1 ), max( k2, k3 ) ) );
}
`,Zm=`
precision highp float;
${bt}
uniform sampler2D tSrc;
uniform vec2 uTexel;       // HALF-res texel
uniform vec2 uParams;      // x maxCoC(px, full res), y frame
varying vec2 vUv;

#define OW_DOF_TAPS 32

void main() {
  vec4 centre = texture2D( tSrc, vUv );
  // Radius in half-res pixels. Always the maximum: in-focus taps contribute a
  // weight of zero, so a fixed loop is both correct and branch free.
  float radius = max( uParams.x * 0.5, 1.0 );

  float rot = owIGN( gl_FragCoord.xy + uParams.y * 5.371 ) * 6.2831853;
  float cr = cos( rot );
  float sr = sin( rot );

  vec3 sum = centre.rgb;
  float wsum = 1.0;
  float maxCoc = centre.a;

  for ( int i = 0; i < OW_DOF_TAPS; i ++ ) {
    float t = ( float( i ) + 0.5 ) / float( OW_DOF_TAPS );
    float ang = float( i ) * 2.39996323 + rot;
    vec2 dir = vec2( cos( ang ), sin( ang ) );
    vec2 off = dir * sqrt( t ) * radius;
    vec4 s = texture2D( tSrc, vUv + off * uTexel );
    float dist = length( off );
    // scatter-as-gather: this tap only reaches us if its own CoC is wide enough
    float w = clamp( s.a * 0.5 - dist + 1.0, 0.0, 1.0 );
    sum += s.rgb * w;
    wsum += w;
    maxCoc = max( maxCoc, s.a );
  }

  gl_FragColor = vec4( sum / max( wsum, 1e-4 ), maxCoc );
}
`,Jm=`
precision highp float;
${bt}
${Fl}
uniform sampler2D tColor;
uniform sampler2D tBlur;
varying vec2 vUv;

void main() {
  vec3 sharp = max( texture2D( tColor, vUv ).rgb, vec3( 0.0 ) );
  vec4 blur = texture2D( tBlur, vUv );
  float focus = owFocusDistance();
  float coc = owCoC( texture2D( tDepth, vUv ).r, focus );
  // Dilate with the gathered neighbourhood maximum so a blurred foreground
  // actually bleeds over the sharp thing behind it.
  coc = max( coc, blur.a * 0.85 );
  float m = smoothstep( 0.35, 1.45, coc );
  gl_FragColor = vec4( mix( sharp, max( blur.rgb, vec3( 0.0 ) ), m ), 1.0 );
}
`;class Qm{constructor(){const e=new Ee(5,.6,3,20),t=new Ee(1.2,20,.55,0);this.pre=new lt("ow-dof-pre",Km,{tColor:{value:null},tDepth:{value:null},uSrcTexel:{value:new ce},uFocus:{value:e},uRange:{value:t}}),this.gather=new lt("ow-dof-gather",Zm,{tSrc:{value:null},uTexel:{value:new ce},uParams:{value:new ce(5,0)}}),this.combine=new lt("ow-dof-combine",Jm,{tColor:{value:null},tBlur:{value:null},tDepth:{value:null},uFocus:{value:e},uRange:{value:t}}),this._focus=e,this._range=t,this.rtA=null,this.rtB=null,this.width=1,this.height=1}setSize(e,t){this.rtA?.dispose(),this.rtB?.dispose();const n=Math.max(1,e>>1),i=Math.max(1,t>>1);this.rtA=Je(n,i,{name:"dof-a"}),this.rtB=Je(n,i,{name:"dof-b"}),this.width=e,this.height=t,this.pre.uniforms.uSrcTexel.value.set(1/e,1/t),this.gather.uniforms.uTexel.value.set(1/n,1/i)}render(e,t,n,i,r,a,o){const l=a.dofMaxCoc*(this.height/1080)*r;this._focus.set(l,a.dofNearRatio,a.dofFocusMin,a.dofFocusMax),this._range.set(a.dofFarStart,a.dofFarRange,a.dofNearScale,0);const c=this.pre.uniforms;c.tColor.value=t,c.tDepth.value=n.depthTexture,this.pre.render(e,this.rtA);const h=this.gather.uniforms;h.tSrc.value=this.rtA.texture,h.uParams.value.set(l,o%64),this.gather.render(e,this.rtB);const f=this.combine.uniforms;return f.tColor.value=t,f.tBlur.value=this.rtB.texture,f.tDepth.value=n.depthTexture,this.combine.render(e,i),i.texture}dispose(){this.rtA?.dispose(),this.rtB?.dispose(),this.pre.dispose(),this.gather.dispose(),this.combine.dispose()}}const e0=`
precision highp float;
${bt}
uniform sampler2D tSrc;
uniform sampler2D tExposure;
uniform vec2 uTexel;      // texel size of the SOURCE
uniform vec4 uParams;     // x karis, y threshold, z knee
varying vec2 vUv;

vec3 fetch( vec2 uv ) { return max( texture2D( tSrc, uv ).rgb, vec3( 0.0 ) ); }
float karisWeight( vec3 c ) { return 1.0 / ( 1.0 + owLum( c ) ); }

// Soft-knee highlight prefilter (Unreal/COD style). Max-channel driven so a
// saturated light — a red tracer, an orange muzzle flash — blooms as readily as
// a white one instead of being judged on its luminance alone.
vec3 owBloomPrefilter( vec3 c, float thr, float knee ) {
  float l = max( max( c.r, c.g ), c.b );
  float soft = clamp( l - thr + knee, 0.0, 2.0 * knee );
  soft = soft * soft / ( 4.0 * knee + 1e-5 );
  return c * ( max( soft, l - thr ) / max( l, 1e-4 ) );
}

void main() {
  vec2 t = uTexel;
  vec3 a = fetch( vUv + vec2( -2.0 * t.x,  2.0 * t.y ) );
  vec3 b = fetch( vUv + vec2(  0.0,        2.0 * t.y ) );
  vec3 c = fetch( vUv + vec2(  2.0 * t.x,  2.0 * t.y ) );
  vec3 d = fetch( vUv + vec2( -2.0 * t.x,  0.0 ) );
  vec3 e = fetch( vUv );
  vec3 f = fetch( vUv + vec2(  2.0 * t.x,  0.0 ) );
  vec3 g = fetch( vUv + vec2( -2.0 * t.x, -2.0 * t.y ) );
  vec3 h = fetch( vUv + vec2(  0.0,       -2.0 * t.y ) );
  vec3 i = fetch( vUv + vec2(  2.0 * t.x, -2.0 * t.y ) );
  vec3 j = fetch( vUv + vec2( -t.x,  t.y ) );
  vec3 k = fetch( vUv + vec2(  t.x,  t.y ) );
  vec3 l = fetch( vUv + vec2( -t.x, -t.y ) );
  vec3 m = fetch( vUv + vec2(  t.x, -t.y ) );

  vec3 result;
  if ( uParams.x > 0.5 ) {
    // exposure first so the firefly clamp AND the threshold are both in
    // display-referred terms — a fixed linear threshold on unscaled radiance
    // would mean something different at every time of day.
    float ex = texture2D( tExposure, vec2( 0.5 ) ).r;
    a *= ex; b *= ex; c *= ex; d *= ex; e *= ex; f *= ex; g *= ex;
    h *= ex; i *= ex; j *= ex; k *= ex; l *= ex; m *= ex;
    float thr = uParams.y;
    float knee = max( uParams.z, 1e-4 );
    a = owBloomPrefilter( a, thr, knee ); b = owBloomPrefilter( b, thr, knee );
    c = owBloomPrefilter( c, thr, knee ); d = owBloomPrefilter( d, thr, knee );
    e = owBloomPrefilter( e, thr, knee ); f = owBloomPrefilter( f, thr, knee );
    g = owBloomPrefilter( g, thr, knee ); h = owBloomPrefilter( h, thr, knee );
    i = owBloomPrefilter( i, thr, knee ); j = owBloomPrefilter( j, thr, knee );
    k = owBloomPrefilter( k, thr, knee ); l = owBloomPrefilter( l, thr, knee );
    m = owBloomPrefilter( m, thr, knee );
    vec3 g0 = ( a + b + d + e ) * 0.25;
    vec3 g1 = ( b + c + e + f ) * 0.25;
    vec3 g2 = ( d + e + g + h ) * 0.25;
    vec3 g3 = ( e + f + h + i ) * 0.25;
    vec3 g4 = ( j + k + l + m ) * 0.25;
    float w0 = karisWeight( g0 ) * 0.125;
    float w1 = karisWeight( g1 ) * 0.125;
    float w2 = karisWeight( g2 ) * 0.125;
    float w3 = karisWeight( g3 ) * 0.125;
    float w4 = karisWeight( g4 ) * 0.5;
    result = ( g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4 ) /
             max( w0 + w1 + w2 + w3 + w4, 1e-5 );
    result = min( result, vec3( 24.0 ) );
  } else {
    result = e * 0.125;
    result += ( a + c + g + i ) * 0.03125;
    result += ( b + d + f + h ) * 0.0625;
    result += ( j + k + l + m ) * 0.125;
  }
  gl_FragColor = vec4( result, 1.0 );
}
`,t0=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;   // texel size of the SOURCE (smaller mip)
uniform float uRadius;
uniform float uWeight;
varying vec2 vUv;

void main() {
  vec2 t = uTexel * uRadius;
  vec3 a = texture2D( tSrc, vUv + vec2( -t.x,  t.y ) ).rgb;
  vec3 b = texture2D( tSrc, vUv + vec2(  0.0,  t.y ) ).rgb;
  vec3 c = texture2D( tSrc, vUv + vec2(  t.x,  t.y ) ).rgb;
  vec3 d = texture2D( tSrc, vUv + vec2( -t.x,  0.0 ) ).rgb;
  vec3 e = texture2D( tSrc, vUv ).rgb;
  vec3 f = texture2D( tSrc, vUv + vec2(  t.x,  0.0 ) ).rgb;
  vec3 g = texture2D( tSrc, vUv + vec2( -t.x, -t.y ) ).rgb;
  vec3 h = texture2D( tSrc, vUv + vec2(  0.0, -t.y ) ).rgb;
  vec3 i = texture2D( tSrc, vUv + vec2(  t.x, -t.y ) ).rgb;
  vec3 sum = e * 4.0 + ( b + d + f + h ) * 2.0 + ( a + c + g + i );
  // Alpha 0.5 + normal blending = lerp(dst, src, 0.5), i.e. an energy
  // PRESERVING accumulation. Adding the mips outright (what most WebGL bloom
  // does) multiplies total energy by the mip count and turns the whole frame
  // into haze.
  gl_FragColor = vec4( sum * 0.0625, uWeight );
}
`;class n0{constructor(e=6){this.levels=e,this.down=new lt("ow-bloom-down",e0,{tSrc:{value:null},tExposure:{value:null},uTexel:{value:new ce},uParams:{value:new Ee(0,1,.6,0)}}),this.threshold=1,this.knee=.6,this.up=new lt("ow-bloom-up",t0,{tSrc:{value:null},uTexel:{value:new ce},uRadius:{value:1},uWeight:{value:.5}}),this.up.material.blending=zn,this.up.material.premultipliedAlpha=!1,this.up.material.transparent=!0,this.mips=[],this.texture=null}setSize(e,t){for(const r of this.mips)r.rt.dispose();this.mips.length=0;let n=e,i=t;for(let r=0;r<this.levels&&(n=Math.max(1,Math.floor(n/2)),i=Math.max(1,Math.floor(i/2)),this.mips.push({rt:Je(n,i,{name:`bloom${r}`}),w:n,h:i}),!(n<=2||i<=2));r++);}render(e,t,n,i,r){const a=this.mips.length;if(a===0)return null;const o=this.down.uniforms;o.tExposure.value=r;for(let c=0;c<a;c++){const h=c===0?t:this.mips[c-1].rt.texture,f=c===0?n:this.mips[c-1].w,d=c===0?i:this.mips[c-1].h;o.tSrc.value=h,o.uTexel.value.set(1/f,1/d),o.uParams.value.set(c===0?1:0,this.threshold,this.knee,0),this.down.render(e,this.mips[c].rt)}const l=this.up.uniforms;for(let c=a-1;c>0;c--){l.tSrc.value=this.mips[c].rt.texture,l.uTexel.value.set(1/this.mips[c].w,1/this.mips[c].h);const h=c>=a-2;l.uRadius.value=h?.62:1,l.uWeight.value=h?.34:.5,this.up.render(e,this.mips[c-1].rt)}return l.uWeight.value=.5,this.texture=this.mips[0].rt.texture,this.texture}dispose(){for(const e of this.mips)e.rt.dispose();this.mips.length=0,this.down.dispose(),this.up.dispose()}}const i0=`
precision highp float;
${bt}
uniform sampler2D tSrc;
uniform sampler2D tDepth;
uniform vec2 uTexel;
uniform vec4 uMeter;   // x skyWeight, y farDistance(m), z tapClamp, w hasDepth
uniform vec2 uSkyKnee; // luminance range over which the sky de-weight ramps in
varying vec2 vUv;

// Per-tap clamp: the solar disc is authored at radiance 4000 and a specular
// hit off a rail can be worse. One such pixel inside a 4-tap box would drag
// the whole log-average by stops, so every tap is limited before the log.
float owMeterTap( vec2 uv ) {
  vec3 c = max( texture2D( tSrc, uv ).rgb, vec3( 0.0 ) );
  return min( owLum( c ), uMeter.z );
}

void main() {
  float lum = owMeterTap( vUv + vec2( -1.0, -1.0 ) * uTexel );
  lum += owMeterTap( vUv + vec2(  1.0, -1.0 ) * uTexel );
  lum += owMeterTap( vUv + vec2( -1.0,  1.0 ) * uTexel );
  lum += owMeterTap( vUv + vec2(  1.0,  1.0 ) * uTexel );
  lum = max( lum * 0.25, 1e-5 );

  // centre-weighted metering: the middle of the frame is what the player aims at
  vec2 d = ( vUv - 0.5 ) * 2.0;
  float w = exp( -dot( d, d ) * 1.1 );

  // ...but do NOT meter off a BRIGHT sky. A sunlit sky band fills the upper
  // half of almost every exterior shot; letting it into the average pulls the
  // exposure down until the street it is lighting reads as night. Depth is 0
  // where no geometry was written (sky), and anything past uMeter.y is aerial
  // perspective — also mostly sky.
  //
  // The de-weight ramps in with the sky's own luminance, and that matters: a
  // moonlit night sky is legitimate scene content and the only absolute anchor
  // the meter has at night. De-weight it unconditionally and night adapts up
  // until it looks like an overcast afternoon.
  if ( uMeter.w > 0.5 ) {
    float depth = texture2D( tDepth, vUv ).r;
    if ( depth <= 0.0 || depth > uMeter.y ) {
      w *= mix( 1.0, uMeter.x, smoothstep( uSkyKnee.x, uSkyKnee.y, lum ) );
    }
  }

  gl_FragColor = vec4( log2( lum ) * w, w, 0.0, 1.0 );
}
`,s0=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 s = vec2( 0.0 );
  for ( int y = 0; y < 4; y ++ ) {
    for ( int x = 0; x < 4; x ++ ) {
      vec2 o = ( vec2( float( x ), float( y ) ) - 1.5 ) * uTexel;
      s += texture2D( tSrc, vUv + o ).rg;
    }
  }
  gl_FragColor = vec4( s / 16.0, 0.0, 1.0 );
}
`,r0=`
precision highp float;
uniform sampler2D tSrc;
uniform sampler2D tPrev;
uniform vec4 uParams;   // x dt, y speedUp, z speedDown, w manual EV bias
uniform vec4 uLimits;   // x minEV, y maxEV, z reset, w keyScale
varying vec2 vUv;

void main() {
  vec2 s = texture2D( tSrc, vec2( 0.5 ) ).rg;
  float avgLogLum = s.x / max( s.y, 1e-4 );
  float lum = max( exp2( avgLogLum ), 1e-5 );

  // EV100 from average scene luminance, then the photometric exposure.
  // uParams.w is the compensation and it is ADDED: a higher EV100 means a
  // smaller exposure, so + is darker — which is the sign both this file's header
  // and RenderSystem.setExposureBias have always claimed and the subtraction
  // here has always contradicted.
  float ev100 = log2( lum * 100.0 / 12.5 ) + uParams.w;
  ev100 = clamp( ev100, uLimits.x, uLimits.y );

  float prevEv = texture2D( tPrev, vec2( 0.5 ) ).g;
  if ( uLimits.z > 0.5 ) prevEv = ev100;

  float speed = ev100 > prevEv ? uParams.z : uParams.y;
  float k = 1.0 - exp( -uParams.x * speed );
  float ev = mix( prevEv, ev100, clamp( k, 0.0, 1.0 ) );

  float maxLum = 1.2 * exp2( ev );       // 78/(q*S) with q=0.65,S=100 -> 1.2
  float exposure = uLimits.w / maxLum;

  gl_FragColor = vec4( exposure, ev, 0.0, 1.0 );
}
`;class a0{constructor(){this.logPass=new lt("ow-loglum",i0,{tSrc:{value:null},tDepth:{value:null},uTexel:{value:new ce},uMeter:{value:new Ee(.15,400,40,0)},uSkyKnee:{value:new ce(.06,.3)}}),this.reducePass=new lt("ow-reduce",s0,{tSrc:{value:null},uTexel:{value:new ce}}),this.adaptPass=new lt("ow-adapt",r0,{tSrc:{value:null},tPrev:{value:null},uParams:{value:new Ee(.016,1.4,3.2,0)},uLimits:{value:new Ee(-4,16,1,1)}});const e={type:Nt,format:_t,name:"exposure"};this.rt64=Je(64,64,e),this.rt16=Je(16,16,e),this.rt4=Je(4,4,e),this.rt1=Je(1,1,e),this.adapt=[Je(1,1,e),Je(1,1,e)],this._flip=0,this.enabled=!0,this.manual=1,this._reset=!0}get texture(){return this.adapt[this._flip].texture}reset(){this._reset=!0}update(e,t,n,i,r,a,o,l){const c=this.logPass.uniforms;c.tSrc.value=t,c.tDepth.value=l??null,c.uMeter.value.w=l?1:0,c.uTexel.value.set(1/n,1/i),this.logPass.render(e,this.rt64);const h=this.reducePass.uniforms;h.tSrc.value=this.rt64.texture,h.uTexel.value.set(1/64,1/64),this.reducePass.render(e,this.rt16),h.tSrc.value=this.rt16.texture,h.uTexel.value.set(1/16,1/16),this.reducePass.render(e,this.rt4),h.tSrc.value=this.rt4.texture,h.uTexel.value.set(1/4,1/4),this.reducePass.render(e,this.rt1);const f=this.adaptPass.uniforms;f.tSrc.value=this.rt1.texture,f.tPrev.value=this.adapt[this._flip].texture,f.uParams.value.x=Math.min(r,.1),f.uParams.value.w=a,f.uLimits.value.z=this._reset?1:0,f.uLimits.value.w=o,this._reset=!1;const d=this.adapt[this._flip^1];return this.adaptPass.render(e,d),this._flip^=1,d.texture}setLimits(e,t){this.adaptPass.uniforms.uLimits.value.x=e,this.adaptPass.uniforms.uLimits.value.y=t}dispose(){this.rt64.dispose(),this.rt16.dispose(),this.rt4.dispose(),this.rt1.dispose(),this.adapt[0].dispose(),this.adapt[1].dispose(),this.logPass.dispose(),this.reducePass.dispose(),this.adaptPass.dispose()}}const o0=33,ri=[.2126,.7152,.0722],Zo={default:{slope:[1,.995,.985],offset:[-.004,-.002,.004],power:[1,1.005,1.02],shadowTint:[-.001,.006,.022],highlightTint:[.03,.014,-.006],saturation:1.2,contrast:1.28,pivot:.5,highlightDesat:.1,toe:.008,shoulder:.6,shoulderSoft:1.2}};function l0(s){const e=Math.min(.98,Math.max(.05,s.shoulder)),t=Math.max(.001,s.shoulderSoft??.55*(1-e)),n=s.pivot*Math.pow(1/s.pivot,s.contrast),i=1-Math.exp(-Math.max(n-e,.001)/t);return{k:e,s:t,norm:i}}function c0(s,e,t){let n=s[0],i=s[1],r=s[2];n=Math.pow(Math.max(0,n*e.slope[0]+e.offset[0]),e.power[0]),i=Math.pow(Math.max(0,i*e.slope[1]+e.offset[1]),e.power[1]),r=Math.pow(Math.max(0,r*e.slope[2]+e.offset[2]),e.power[2]);const a=n*ri[0]+i*ri[1]+r*ri[2],o=Math.pow(1-Math.min(1,a),2.2),l=Math.pow(Math.min(1,a),2);n+=e.shadowTint[0]*o+e.highlightTint[0]*l,i+=e.shadowTint[1]*o+e.highlightTint[1]*l,r+=e.shadowTint[2]*o+e.highlightTint[2]*l;const c=n*ri[0]+i*ri[1]+r*ri[2];n=c+(n-c)*e.saturation,i=c+(i-c)*e.saturation,r=c+(r-c)*e.saturation;const h=e.highlightDesat*Math.pow(Math.min(1,Math.max(0,c)),3);n+=(c-n)*h,i+=(c-i)*h,r+=(c-r)*h;const f=d=>{const m=Math.max(0,d);let g=m<=0?0:e.pivot*Math.pow(m/e.pivot,e.contrast);return g>t.k&&(g=t.k+(1-t.k)*((1-Math.exp(-(g-t.k)/t.s))/t.norm)),e.toe+(1-e.toe)*Math.min(1,Math.max(0,g))};return[f(n),f(i),f(r)]}function h0(s="default"){const e=Zo[s]??Zo.default,t=l0(e),n=o0,i=new Uint8Array(n*n*n*4);let r=0;for(let o=0;o<n;o++)for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=[c/(n-1),l/(n-1),o/(n-1)],f=c0(h,e,t);i[r++]=Math.round(Math.min(1,Math.max(0,f[0]))*255),i[r++]=Math.round(Math.min(1,Math.max(0,f[1]))*255),i[r++]=Math.round(Math.min(1,Math.max(0,f[2]))*255),i[r++]=255}const a=new vl(i,n,n,n);return a.format=_t,a.type=Gt,a.minFilter=ht,a.magFilter=ht,a.wrapS=Dt,a.wrapT=Dt,a.wrapR=Dt,a.unpackAlignment=1,a.needsUpdate=!0,a.name="ow-grade-lut",{texture:a,size:n}}const u0=`
precision highp float;
${bt}
${Em}

uniform sampler2D tColor;
uniform sampler2D tBloom;
uniform sampler2D tExposure;
uniform sampler3D tLut;

uniform vec2 uTexel;
uniform vec2 uResolution;
uniform vec4 uLens;      // x chromatic, y vignette, z grainAmount, w time
uniform vec4 uGrade;     // x bloomStrength, y lutStrength, z sharpen, w lutSize
uniform vec4 uLook;      // x agx slope, y agx power, z agx sat, w exposureBias
varying vec2 vUv;

vec3 sampleLut( vec3 c ) {
  float n = uGrade.w;
  vec3 uvw = clamp( c, 0.0, 1.0 ) * ( ( n - 1.0 ) / n ) + ( 0.5 / n );
  return texture( tLut, uvw ).rgb;
}

void main() {
  float exposure = texture2D( tExposure, vec2( 0.5 ) ).r * uLook.w;

  vec2 d = vUv - 0.5;
  float r2 = dot( d, d );

  // --- chromatic aberration: sample the scene three times with a radial
  //     offset that grows toward the corners, like a real lens
  vec3 hdr;
  float ca = uLens.x * r2;
  if ( ca > 0.00002 ) {
    vec2 o = d * ca;
    hdr.r = texture2D( tColor, vUv + o ).r;
    hdr.g = texture2D( tColor, vUv ).g;
    hdr.b = texture2D( tColor, vUv - o ).b;
  } else {
    hdr = texture2D( tColor, vUv ).rgb;
  }
  vec3 centre = max( texture2D( tColor, vUv ).rgb, vec3( 0.0 ) );
  hdr = max( hdr, vec3( 0.0 ) );

  vec3 n1 = max( texture2D( tColor, vUv + vec2( uTexel.x, 0.0 ) ).rgb, vec3( 0.0 ) );
  vec3 n2 = max( texture2D( tColor, vUv - vec2( uTexel.x, 0.0 ) ).rgb, vec3( 0.0 ) );
  vec3 n3 = max( texture2D( tColor, vUv + vec2( 0.0, uTexel.y ) ).rgb, vec3( 0.0 ) );
  vec3 n4 = max( texture2D( tColor, vUv - vec2( 0.0, uTexel.y ) ).rgb, vec3( 0.0 ) );

  // --- chroma clean-up in the darks ---------------------------------------
  // A 4-tap CHROMA-only blur, applied only in the bottom three stops and
  // fading out completely by the mid-tones. It keeps each pixel's own
  // luminance exactly — so no detail, edge or texture is softened — and only
  // pulls its hue toward the neighbourhood's.
  //
  // The post chain is no longer the source of the per-pixel chroma speckle
  // over dark surfaces (measured: turning grain, CA and sharpen off together
  // moves the high-frequency chroma metric by under 5%), but the night frame
  // still reads as speckled because a ~14x exposure amplifies whatever chroma
  // variance the shading has. The eye has almost no chroma acuity down there,
  // which is exactly why every codec and every denoiser throws dark chroma
  // away, and why doing it here costs nothing visible but the noise.
  {
    vec3 nb = ( n1 + n2 + n3 + n4 ) * 0.25;
    float lh = owLum( hdr );
    float ln = owLum( nb );
    float w = ( 1.0 - smoothstep( 0.003, 0.030, lh ) ) * 0.60;
    if ( w > 0.005 && ln > 1e-6 ) hdr = mix( hdr, nb * ( lh / ln ), w );
  }

  // --- sharpen (contrast adaptive, only where TAA softened things) ---------
  // LUMINANCE ONLY, and computed from the UNSHIFTED centre tap. The old code
  // sharpened hdr, which is the chromatically-aberrated fetch, against a blur
  // of unshifted neighbours: the difference therefore *contained the CA offset
  // itself* and the sharpen amplified it, which is where the coarse
  // magenta/green fringing on every high-contrast edge came from. A scalar gain
  // around the centre luminance cannot invent chroma at all.
  if ( uGrade.z > 0.001 ) {
    float l1 = owLum( n1 ), l2 = owLum( n2 ), l3 = owLum( n3 ), l4 = owLum( n4 );
    float lc = owLum( centre );
    float lmn = min( min( l1, l2 ), min( l3, l4 ) );
    float lmx = max( max( l1, l2 ), max( l3, l4 ) );
    float lblur = ( l1 + l2 + l3 + l4 ) * 0.25;
    // contrast adaptive: less sharpening where local contrast is already high
    float contrast = ( lmx - lmn ) / ( lmx + lmn + 0.02 );
    float amount = uGrade.z * ( 1.0 - clamp( contrast * 1.6, 0.0, 1.0 ) );
    // ...and none at all down in the noise floor, where "detail" is grain.
    amount *= smoothstep( 0.004, 0.03, lc );
    float gain = ( lc + ( lc - lblur ) * amount ) / max( lc, 1e-4 );
    hdr *= clamp( gain, 0.0, 4.0 );
  }

  hdr *= exposure;

  // --- bloom (already exposure-scaled AND thresholded in the prefilter) ----
  // ADDED, not mixed. mix() with an unthresholded pyramid is veiling glare: it
  // replaces N% of every pixel with a blurred copy of the frame, which is a
  // milky haze you cannot turn up far enough to see a specular event. The
  // pyramid now only carries what is above display white, so adding it puts
  // light around the sun disc, the glints and the muzzle flash and leaves the
  // rest of the frame exactly where the tone curve put it.
  vec3 bloom = max( texture2D( tBloom, vUv ).rgb, vec3( 0.0 ) );
  hdr += bloom * max( uGrade.x, 0.0 );

  // --- vignette: cos^4 natural falloff, in LINEAR LIGHT --------------------
  // Lens shading is a transmission loss, so it belongs in front of the tone
  // curve, not behind it. Applied in display space it was a flat multiply on the
  // code value: at 0.24 it scaled everything outside the middle sixth of the
  // frame by 0.85..0.81, which put a hard ceiling of ~210 code values on the sky
  // and made display white unreachable anywhere but dead centre. In linear light
  // the same 0.24 costs a quarter of a stop, which the filmic shoulder absorbs
  // in the highlights (a few code values) while still visibly weighting the mids
  // and shadows toward the corners — which is the whole point of a vignette.
  float cos4 = pow( 1.0 / ( 1.0 + r2 * 2.4 ), 2.0 );
  hdr *= mix( 1.0, cos4, uLens.y );

  // --- tone map ------------------------------------------------------------
  vec3 col = owAgX( hdr, uLook.x, uLook.y, uLook.z );

  // --- DISPLAY TRANSFORM ---------------------------------------------------
  // Everything below this line is display-referred (code values, 0..1 sRGB).
  // The grade LUT and the grain are authored in that space:
  // the LUT's toe/shadowTint are additive *code value* offsets, so feeding it
  // linear light turned a 0.008 toe into a hard linear floor and painted the
  // whole frame's shadows blue-grey. Encode first, grade second.
  col = clamp( col, 0.0, 1.0 );
  vec3 disp = owLinearToSrgb( col );

  // --- procedural film grade (display-referred) ----------------------------
  vec3 graded = sampleLut( disp );
  disp = mix( disp, graded, uGrade.y );

  // --- grain, in code-value space, LESS of it in the darks -----------------
  // Real sensor noise is loudest in the mid/upper mids once it has been
  // through a display transform; in the darks it is what the eye reads as
  // "dirty image", so the response is deliberately the opposite of the naive
  // "more grain where it is dark".
  if ( uLens.z > 0.0005 ) {
    float g = owHash12( gl_FragCoord.xy + uLens.w * 137.13 ) - 0.5;
    float g2 = owHash12( gl_FragCoord.xy * 1.7 - uLens.w * 71.3 ) - 0.5;
    float noise = ( g * 0.65 + g2 * 0.35 );
    float l = owLum( disp );
    float response = uLens.z * ( 0.35 + 0.65 * smoothstep( 0.0, 0.30, l ) );
    disp += noise * response;
  }

  // ordered dither before the 8-bit write kills gradient banding in the sky
  disp += ( owHash12( gl_FragCoord.xy * 0.5 + uLens.w ) - 0.5 ) * 0.0022;

  gl_FragColor = vec4( disp, 1.0 );
}
`,d0=`
precision highp float;
${bt}
uniform sampler2D tColor;
uniform vec2 uTexel;
varying vec2 vUv;

// Compact FXAA 3.11-style edge filter, used only when TAA is off so the
// no-temporal path still has clean silhouettes.
void main() {
  vec3 rgbNW = texture2D( tColor, vUv + vec2( -1.0, -1.0 ) * uTexel ).rgb;
  vec3 rgbNE = texture2D( tColor, vUv + vec2(  1.0, -1.0 ) * uTexel ).rgb;
  vec3 rgbSW = texture2D( tColor, vUv + vec2( -1.0,  1.0 ) * uTexel ).rgb;
  vec3 rgbSE = texture2D( tColor, vUv + vec2(  1.0,  1.0 ) * uTexel ).rgb;
  vec4 texColor = texture2D( tColor, vUv );
  vec3 rgbM = texColor.rgb;

  float lumaNW = owLum( rgbNW );
  float lumaNE = owLum( rgbNE );
  float lumaSW = owLum( rgbSW );
  float lumaSE = owLum( rgbSE );
  float lumaM  = owLum( rgbM );
  float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
  float lumaMax = max( lumaM, max( max( lumaNW, lumaNE ), max( lumaSW, lumaSE ) ) );

  if ( lumaMax - lumaMin < max( 0.0312, lumaMax * 0.125 ) ) {
    gl_FragColor = texColor;
    return;
  }

  vec2 dir = vec2(
    -( ( lumaNW + lumaNE ) - ( lumaSW + lumaSE ) ),
      ( ( lumaNW + lumaSW ) - ( lumaNE + lumaSE ) ) );
  float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * 0.03125, 0.0078125 );
  float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
  dir = clamp( dir * rcpDirMin, -8.0, 8.0 ) * uTexel;

  vec3 rgbA = 0.5 * (
    texture2D( tColor, vUv + dir * ( 1.0 / 3.0 - 0.5 ) ).rgb +
    texture2D( tColor, vUv + dir * ( 2.0 / 3.0 - 0.5 ) ).rgb );
  vec3 rgbB = rgbA * 0.5 + 0.25 * (
    texture2D( tColor, vUv - dir * 0.5 ).rgb +
    texture2D( tColor, vUv + dir * 0.5 ).rgb );

  float lumaB = owLum( rgbB );
  gl_FragColor = vec4( ( lumaB < lumaMin || lumaB > lumaMax ) ? rgbA : rgbB, texColor.a );
}
`,f0=`
precision highp float;
${bt}
uniform sampler2D tColor;
uniform sampler2D tView;
uniform vec2 uTexel;
varying vec2 vUv;

vec4 fetchView( vec2 uv ) { return max( texture2D( tView, uv ), vec4( 0.0 ) ); }
// Alpha is part of the edge signal: the silhouette against an empty background
// is a step in coverage, not in luminance.
float edgeLuma( vec4 c ) { return owLum( c.rgb ) + c.a; }

void main() {
  vec3 world = texture2D( tColor, vUv ).rgb;

  vec4 m = fetchView( vUv );
  vec4 nw = fetchView( vUv + vec2( -1.0, -1.0 ) * uTexel );
  vec4 ne = fetchView( vUv + vec2(  1.0, -1.0 ) * uTexel );
  vec4 sw = fetchView( vUv + vec2( -1.0,  1.0 ) * uTexel );
  vec4 se = fetchView( vUv + vec2(  1.0,  1.0 ) * uTexel );

  float lm = edgeLuma( m );
  float lnw = edgeLuma( nw );
  float lne = edgeLuma( ne );
  float lsw = edgeLuma( sw );
  float lse = edgeLuma( se );
  float lmin = min( lm, min( min( lnw, lne ), min( lsw, lse ) ) );
  float lmax = max( lm, max( max( lnw, lne ), max( lsw, lse ) ) );

  vec4 v = m;
  if ( lmax - lmin >= max( 0.045, lmax * 0.11 ) ) {
    vec2 dir = vec2(
      -( ( lnw + lne ) - ( lsw + lse ) ),
        ( ( lnw + lsw ) - ( lne + lse ) ) );
    float dirReduce = max( ( lnw + lne + lsw + lse ) * 0.03125, 0.0078125 );
    float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
    dir = clamp( dir * rcpDirMin, -6.0, 6.0 ) * uTexel;

    vec4 a = 0.5 * (
      fetchView( vUv + dir * ( 1.0 / 3.0 - 0.5 ) ) +
      fetchView( vUv + dir * ( 2.0 / 3.0 - 0.5 ) ) );
    vec4 b = a * 0.5 + 0.25 * (
      fetchView( vUv - dir * 0.5 ) + fetchView( vUv + dir * 0.5 ) );
    float lb = edgeLuma( b );
    v = ( lb < lmin || lb > lmax ) ? a : b;
  }

  float alpha = clamp( v.a, 0.0, 1.0 );
  gl_FragColor = vec4( world * ( 1.0 - alpha ) + v.rgb, 1.0 );
}
`;function p0(){return new lt("ow-view-composite",f0,{tColor:{value:null},tView:{value:null},uTexel:{value:new ce}})}const m0=`
precision highp float;
${bt}
uniform sampler2D tSrc;
uniform int uMode;
varying vec2 vUv;
void main() {
  vec4 s = texture2D( tSrc, vUv );
  vec3 c;
  if ( uMode == 0 ) c = vec3( s.r );                       // scalar (AO, shadow)
  else if ( uMode == 1 ) c = owDecodeNormal( s.xy ) * 0.5 + 0.5;
  else if ( uMode == 2 ) c = vec3( abs( s.rg ) * 40.0, 0.0 ); // velocity
  else if ( uMode == 3 ) c = vec3( fract( s.r * 0.05 ) );  // linear depth
  else if ( uMode == 4 ) c = s.rgb;                        // raw colour
  else c = vec3( s.a );                                    // confidence
  gl_FragColor = vec4( owLinearToSrgb( clamp( c, 0.0, 1.0 ) ), 1.0 );
}
`;function g0(){return new lt("ow-debug",m0,{tSrc:{value:null},uMode:{value:0}})}function v0(s){return new lt("ow-composite",u0,{tColor:{value:null},tBloom:{value:null},tExposure:{value:null},tLut:{value:s.texture},uTexel:{value:new ce},uResolution:{value:new ce},uLens:{value:new Ee(.0016,.24,.01,0)},uGrade:{value:new Ee(.05,.85,.22,s.size)},uLook:{value:new Ee(1,1,1.08,1)}})}function _0(){return new lt("ow-fxaa",d0,{tColor:{value:null},uTexel:{value:new ce}})}function x0(s,e,t){const n=Math.max(-.2,s.y),i=s.x*e.x+s.y*e.y+s.z*e.z,r=Math.acos(Math.min(1,Math.max(-1,i))),a=Math.max(0,e.y),o=Math.pow(Math.max(.02,a),.45),l=Math.pow(1-Math.max(0,n),5),c=[.14,.28,.62],h=[.72,.76,.82];let f=c[0]+(h[0]-c[0])*l,d=c[1]+(h[1]-c[1])*l,m=c[2]+(h[2]-c[2])*l;const g=1.5*Math.exp(-r*3.2)+.35*Math.exp(-r*.6),v=[1,.72,.42];f+=g*v[0]*.55,d+=g*v[1]*.55,m+=g*v[2]*.55;const p=Math.pow(1-Math.min(1,a*2.4),2);f*=1+p*.5,d*=1-p*.12,m*=1-p*.35;let u=.34*o;if(s.y<0){const y=Math.min(1,-s.y*3),b=.62;return t[0]=(f*(1-y)+b*1.05*y)*u,t[1]=(d*(1-y)+b*.95*y)*u,t[2]=(m*(1-y)+b*.78*y)*u,t}return t[0]=f*u,t[1]=d*u,t[2]=m*u,t}function M0(s,e){const i=new Uint16Array(524288),r=new C,a=[0,0,0],o=la.toHalfFloat;let l=0;for(let d=0;d<256;d++){const m=(1-(d+.5)/256)*Math.PI,g=Math.sin(m),v=Math.cos(m);for(let p=0;p<512;p++){const u=(p+.5)/512*Math.PI*2-Math.PI;r.set(g*Math.sin(u),v,g*Math.cos(u)),x0(r,e,a),i[l++]=o(a[0]),i[l++]=o(a[1]),i[l++]=o(a[2]),i[l++]=o(1)}}const c=new Ta(i,512,256,_t,zt);c.mapping=bs,c.minFilter=ht,c.magFilter=ht,c.colorSpace=$t,c.needsUpdate=!0;const h=new ha(s);h.compileEquirectangularShader();const f=h.fromEquirectangular(c);return h.dispose(),f.texture.name="ow-fallback-env",{target:f,equirect:c}}function _r(s,e,t){const n=(c,h)=>t[t[c&255]+(h&255)&255]/255,i=c=>c*c*(3-2*c);let r=.5,a=1,o=0,l=0;for(let c=0;c<5;c++){const h=s*a,f=e*a,d=Math.floor(h),m=Math.floor(f),g=i(h-d),v=i(f-m),p=n(d,m),u=n(d+1,m),y=n(d,m+1),b=n(d+1,m+1),w=p+(u-p)*g+(y-p)*v+(p-u-y+b)*g*v;o+=w*r,l+=r,r*=.5,a*=2.07}return o/l}function xr(s,e,t){const n=new Uint8Array(256);for(let d=0;d<256;d++)n[d]=s.int(0,255);const i=new Uint8Array(e*e*4),r=new Uint8Array(e*e*4),a=new Uint8Array(e*e*4),o=new Float32Array(e*e),l=t.scale??6;for(let d=0;d<e;d++)for(let m=0;m<e;m++){const g=m/e*l,v=d/e*l;let p=_r(g,v,n);const u=_r(g*7.3,v*7.3,n);if(p=p*.75+u*.25,t.cracks){const y=Math.abs(_r(g*1.7+5.5,v*1.7-2.2,n)-.5)*2;p-=Math.pow(1-Math.min(1,y*3.2),6)*.55}o[d*e+m]=p}const c=t.base,h=t.variation??.22;for(let d=0;d<e;d++)for(let m=0;m<e;m++){const g=d*e+m,v=o[g],p=Math.pow(1-v,2.2),u=1-h*.5+v*h,y=c[0]*u*(1-p*.35),b=c[1]*u*(1-p*.38),w=c[2]*u*(1-p*.42);i[g*4]=Math.min(255,y*255),i[g*4+1]=Math.min(255,b*255),i[g*4+2]=Math.min(255,w*255),i[g*4+3]=255;const T=(t.rough??.75)+(v-.5)*(t.roughVar??.3);a[g*4]=255,a[g*4+1]=Math.max(0,Math.min(255,T*255)),a[g*4+2]=0,a[g*4+3]=255;const A=o[d*e+(m+1)%e],P=o[d*e+(m-1+e)%e],F=o[(d+1)%e*e+m],S=o[(d-1+e)%e*e+m],M=(t.bump??2.4)*e*.004,D=(P-A)*M,O=(S-F)*M,B=Math.hypot(D,O,1);r[g*4]=(D/B*.5+.5)*255,r[g*4+1]=(O/B*.5+.5)*255,r[g*4+2]=1/B*.5*255+127,r[g*4+3]=255}const f=(d,m)=>{const g=new Ta(d,e,e,_t);return g.wrapS=g.wrapT=pi,g.minFilter=tn,g.magFilter=ht,g.generateMipmaps=!0,g.anisotropy=8,g.colorSpace=m?St:$t,g.needsUpdate=!0,g};return{map:f(i,!0),normalMap:f(r,!1),ormMap:f(a,!1)}}const Jo=[[12,18],[-8.5,3.2],[3.2,5],[16,22],[6,10],[4,12],[2.5,6]];function Mr(s,e,t,n,i){const r=t+i,a=n+i;for(let o=0;o<Jo.length;o++){const l=Jo[o];if(Math.abs(l[0]-s)<r&&Math.abs(l[1]-e)<a)return!1}return!0}class w0{constructor(e){this.rng=e,this.group=new gn,this.group.name="ow-render-probe",this.group.userData.owProbe=!0,this.disposables=[],this.built=!1}build(){if(this.built)return this.group;this.built=!0;const e=this.rng,t=xr(e,256,{base:[.42,.41,.39],rough:.82,roughVar:.3,cracks:!0,bump:2,scale:5}),n=xr(e,256,{base:[.16,.16,.17],rough:.62,roughVar:.42,bump:3,scale:9}),i=xr(e,256,{base:[.36,.24,.16],rough:.5,roughVar:.45,bump:2.2,scale:4});this.disposables.push(...Object.values(t),...Object.values(n),...Object.values(i));const r=(v,p={})=>{const u=new Oi({map:v.map,normalMap:v.normalMap,roughnessMap:v.ormMap,metalnessMap:v.ormMap,roughness:1,metalness:p.metalness??0,normalScale:new ce(p.normalScale??1,p.normalScale??1),envMapIntensity:1});return this.disposables.push(u),u},a=r(n);a.map.repeat.set(18,18),a.normalMap.repeat.set(18,18),a.roughnessMap.repeat.set(18,18);const o=new Si(120,120,1,1);o.rotateX(-Math.PI/2);const l=new je(o,a);l.receiveShadow=!0,this.disposables.push(o),this.group.add(l);const c=r(t,{normalScale:1.2});c.map.repeat.set(3,3),c.normalMap.repeat.set(3,3),c.roughnessMap.repeat.set(3,3);const h=new Zt(1,1,1);this.disposables.push(h);for(let v=0;v<14;v++){const p=v%2===0?-1:1,u=e.range(4,8),y=e.range(4,11),b=e.range(5,9),w=-22+v*3.4+e.range(-1,1);let T=p*e.range(9,13);for(let P=0;P<4&&!Mr(T,w,u/2,b/2,1.5);P++)T+=p*2.5;if(!Mr(T,w,u/2,b/2,1.5))continue;const A=new je(h,c);A.scale.set(u,y,b),A.position.set(T,y/2,w),A.rotation.y=e.range(-.05,.05),A.castShadow=!0,A.receiveShadow=!0,this.group.add(A)}const f=r(i,{metalness:0,normalScale:1.4});for(let v=0;v<22;v++){const p=e.range(.4,1.1),u=p*e.range(.7,1.2),y=e.range(-8,8),b=e.range(-14,14),w=e.range(0,Math.PI*2);if(!Mr(y,b,p*.71,p*.71,.9))continue;const T=new je(h,f);T.scale.set(p,u,p),T.position.set(y,u/2,b),T.rotation.y=w,T.castShadow=!0,T.receiveShadow=!0,this.group.add(T)}const d=new Vn(.55,48,32);this.disposables.push(d);for(let v=0;v<4;v++){const p=new Oi({color:new He().setHSL(.08,.05,.62),metalness:1,roughness:.06+v*.14,envMapIntensity:1});this.disposables.push(p);const u=new je(d,p);u.position.set(-3+v*2,.55,3),u.castShadow=!0,u.receiveShadow=!0,this.group.add(u)}const m=new Vn(.12,16,12),g=new Oi({color:0,emissive:new He(1,.72,.42),emissiveIntensity:40,roughness:1});this.disposables.push(m,g);for(let v=0;v<3;v++){const p=new je(m,g);p.position.set(-9.5,4.2,-10+v*9),this.group.add(p);const u=new Rl(16756848,12,18,2);u.position.copy(p.position),this.group.add(u)}return this.group}dispose(){for(const e of this.disposables)e.dispose?.();this.disposables.length=0,this.group.clear()}}const S0={low:0,medium:1,high:2,ultra:3},y0=30,Qo=4.6;class b0{static id="render";static deps=[];async init(e){this.ctx=e;const t=e.config,n=t.q;this.q=n,this.qLevel=S0[t.quality]??3,this.rng=e.rng.fork(),this.frame=0;const i=new gm({canvas:e.canvas,antialias:!1,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});if(!i.capabilities.isWebGL2)throw new Error("[render] WebGL2 is required");i.autoClear=!1,i.autoClearColor=!1,i.autoClearDepth=!1,i.info.autoReset=!1,i.outputColorSpace=St,i.toneMapping=vn,i.shadowMap.enabled=!0,i.shadowMap.type=sl,i.shadowMap.autoUpdate=!0,i.setClearColor(0,1),this.renderer=i;const r=i.compile.bind(i);i.compile=(c,h,f)=>(c===e.scene?this._patchLikeFrame(e.scene,!1):c===e.viewScene&&this._patchLikeFrame(e.viewScene,!0),r(c,h,f)),this.maxAnisotropy=Math.min(n.anisotropy,i.capabilities.getMaxAnisotropy()),this.csm=new Cm(i,{cascades:n.cascades,mapSize:n.shadowMapSize,maxDistance:n.shadowDistance}),this.patcher=new Ua(this.csm.uniforms,{cascades:this.csm.cascades,quality:this.qLevel}),this.gbuffer=new Im,this.gtao=n.gtao?new Bm:null,this.contact=this.qLevel>=1?new Vm:null,this.ssr=n.ssr?new Wm:null,this.taa=n.taa?new qm:null,this.motionBlur=n.motionBlur?new $m:null,this.dof=this.qLevel>=1?new Qm:null,this.bloom=n.bloom?new n0(this.qLevel>=2?6:5):null,this.exposure=new a0,this.exposure.setLimits(-4.3,20),this.lut=h0("default"),this.composite=v0(this.lut),this.viewComposite=p0(),this.fxaa=n.taa?null:_0(),this._viewSamples=this.qLevel>=2?4:this.qLevel>=1?2:0,this.needsPrepass=!0,this.hdrRt=null,this.viewRt=null,this.ldrRt=null,this.pingRt=[null,null],this._pingIndex=0,this._adsT=0,this._weapons=null,this._tmpV3=new C,this._tmpV3b=new C,this._fillHue=new C,this._fillHue2=new C,this._fillSkySave=new C,this._fillGroundSave=new C,this._ambLevel=.6,this._roomsReady=!1,this._skyExposureBias=0,this.sun=new oi(16771268,4.3),this.sun.name="ow-fallback-sun",this.sun.position.set(-42,46,26),this.sun.castShadow=!1,this.sun.target.position.set(0,0,0),e.scene.add(this.sun),e.scene.add(this.sun.target),this.activeSun=this.sun,this.sunDir=new C(0,1,0),this.sunDirView=new C(0,1,0),this.viewSun=new oi(16771268,2),this.viewSun.name="ow-viewmodel-key",this.viewKeyFill=new oi(10405119,.6),this.viewKeyFill.name="ow-viewmodel-fill",this.viewRim=new oi(16766888,1),this.viewRim.name="ow-viewmodel-rim",this.viewFill=new Tl(9418495,3551274,.35),this.viewBounce=new oi(16758906,.5),this.viewBounce.name="ow-viewmodel-bounce",this._viewKeyDir=new C(-.45,.75,.55).normalize(),this._viewFillDir=new C(.6,-.15,.5).normalize(),this._viewRimDir=new C(.2,.35,-.9).normalize(),this._viewBounceDir=new C(-.2,-.86,.47).normalize(),this._tmpV3c=new C;for(const c of[this.viewSun,this.viewKeyFill,this.viewRim,this.viewBounce])c.castShadow=!1,e.viewScene.add(c,c.target);e.viewScene.add(this.viewFill),this._viewRigChildren=e.viewScene.children.length;const a=M0(i,this._dirFromLight(this.sun,this.sunDir));this.envTarget=a.target,this.envEquirect=a.equirect,this.envMap=this.envTarget.texture,e.scene.environment||(e.scene.environment=this.envMap),e.scene.background||(e.scene.background=this.envEquirect),e.viewScene.environment=e.scene.environment,this._assignedViewEnv=e.scene.environment,this.passes=[],this.lights=[],this._draw=[],this._nDraw=0,this._hide=[],this._nHide=0,this._noShadow=[],this._nNoShadow=0,this._dirLights=[],this._nDirLights=0,this._foreignMeshes=0,this._currVP=new Ie,this._prevVP=new Ie,this._invVP=new Ie,this._camPos=new C,this._jitterSaved=new ce,this._viewVisible=!1,this._readback=new Float32Array(4),this._readback2=new Float32Array(4),this._jittered=!1,this._firstFrame=!0,this.screenSize={width:1,height:1},this.displaySize={width:1,height:1},this.depthTexture=null,this.velocityTexture=null,this.normalTexture=null,this.aoTexture=null,this.exposureTexture=this.exposure.texture,this.settings={exposureBias:0,exposureKey:1.06,autoExposure:!0,bloomStrength:.14,bloomThreshold:1.6,bloomKnee:.9,chromatic:.0011,vignette:.24,adsVignette:.34,grain:.01,dofMaxCoc:3.3,dofNearRatio:.38,dofFocusMin:3,dofFocusMax:18,dofFarStart:1.15,dofFarRange:18,dofNearScale:.55,sharpen:.25,lutStrength:1,shutter:.42,aoRadius:1.35,aoIntensity:1.1,contactLength:.4,contactStrength:1,skyFill:.32,groundFill:.013,bounceFill:.008,iblDiffuse:.03,interiorIndirect:.035,practicalGain:.55,viewFillOcclusion:.45,viewKeyScale:.55,viewKeyMax:2.6,viewFillRatio:.3,viewRimRatio:.5,viewHemiRatio:.16,viewBounceRatio:.34,viewKeyGamma:.65,shadowStrength:1,sunSoftness:.024},this._applySettings(),this.probe=new w0(this.rng.fork()),this.probeActive=!1,this._probeExposure=e.config.deterministic===!0,this.debugView=new URLSearchParams(location.search).get("rview")||null,this._debugPass=null,this._noCascadeCull=/[?&]owNoCascadeCull=1/.test(location.search),this._visit=this._visit.bind(this),this._visitView=this._visitView.bind(this);const o=e.canvas.clientWidth||1920,l=e.canvas.clientHeight||1080;this.resize(o,l,e),console.info(`[render] WebGL2 · ${t.quality} · ${this.csm.cascades}x${this.csm.mapSize} CSM · taa:${!!this.taa} gtao:${!!this.gtao} ssr:${!!this.ssr} mb:${!!this.motionBlur}`)}registerPass(e){return this.passes.push(e),this.passes.sort((t,n)=>(t.order??0)-(n.order??0)),e.resize&&e.resize(this.screenSize.width,this.screenSize.height),()=>{const t=this.passes.indexOf(e);t>=0&&this.passes.splice(t,1)}}addLight(e,t={}){return!e||this.lights.some(n=>n.light===e)||this.lights.push({light:e,range:t.range??e.distance??25,priority:t.priority??1,baseIntensity:e.intensity}),e}removeLight(e){const t=this.lights.findIndex(n=>n.light===e);t>=0&&this.lights.splice(t,1)}requestEnvMap(){return this.ctx?.scene.environment??this.envMap}setEnvMap(e){this.ctx.scene.environment=e,this.ctx.viewScene.environment=e,this.envMap=e}patchMaterials(e){e.traverse(t=>{const n=t.material;if(n)if(Array.isArray(n))for(const i of n)this.patcher.patch(i);else this.patcher.patch(n)})}_patchLikeFrame(e,t){e.traverseVisible(n=>{if(t){if(n.isMesh!==!0)return}else if(n.isMesh!==!0&&n.isPoints!==!0&&n.isSprite!==!0&&n.isLine!==!0)return;const i=n.material;if(Array.isArray(i))for(let r=0;r<i.length;r++)this.patcher.patch(i[r]);else i&&this.patcher.patch(i)})}setExposureBias(e){this.settings.exposureBias=e}async prewarmMaterials({post:e=!0,shadow:t=this.frame===0}={}){const n=performance.now(),i=this.renderer,r=this.ctx;if(!i||!r)return{ok:!1,reason:"not initialised"};const a=i.info.programs?.length??0,o=i.getRenderTarget();try{this._patchLikeFrame(r.scene,!1),this._patchLikeFrame(r.viewScene,!0);try{await i.compileAsync(r.scene,r.camera),await i.compileAsync(r.viewScene,r.viewCamera)}catch{i.compile(r.scene,r.camera),i.compile(r.viewScene,r.viewCamera)}if(t){const c=r.camera;c.updateMatrixWorld(),this._collect(r.scene),this._syncSun(c);const h=r.scene.background,f=this.csm.snapshotFit(),d={dir:this.sunDir.clone(),dirView:this.sunDirView.clone(),active:this.activeSun,fallbackVisible:this.sun.visible,ambLevel:this._ambLevel};r.scene.background=null,this._hideList(this._hide,this._nHide),this._hideList(this._noShadow,this._nNoShadow),this.csm.update(c,this.sunDir,this.settings.sunSoftness),this.csm.render(i,r.scene,this._draw,this._nDraw),this._showList(this._noShadow,this._nNoShadow),this.gbuffer.render(i,r.scene,c,this._currVP.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),this._currVP,!0),this._showList(this._hide,this._nHide),r.scene.background=h,this.csm.restoreFit(f),this.sunDir.copy(d.dir),this.sunDirView.copy(d.dirView),this.activeSun=d.active,this.sun.visible=d.fallbackVisible,this._ambLevel=d.ambLevel}if(e){const c=Je(4,4,{name:"prewarm-scratch"}),h=[];this._collectPassMaterials(h);for(const f of h)try{Il(i,f,c)}catch{}c.dispose()}}catch(c){return{ok:!1,reason:String(c&&c.message?c.message:c)}}finally{i.setRenderTarget(o)}const l=i.info.programs?.length??0;return{ok:!0,ms:Math.round(performance.now()-n),programsBefore:a,programsAfter:l,compiled:l-a,parallel:!!i.getContext().getExtension("KHR_parallel_shader_compile")}}_collectPassMaterials(e){const t=n=>{n&&n.material&&e.push(n.material)};return t(this.composite),t(this.viewComposite),t(this.fxaa),this.gtao&&(t(this.gtao.core),t(this.gtao.temporal),t(this.gtao.blur)),this.contact&&(t(this.contact.pass),t(this.contact.blur)),this.ssr&&(t(this.ssr.pass),t(this.ssr.blur)),this.taa&&t(this.taa.pass),this.motionBlur&&(t(this.motionBlur.tilePass),t(this.motionBlur.blurPass)),this.dof&&(t(this.dof.pre),t(this.dof.gather),t(this.dof.combine)),this.bloom&&(t(this.bloom.down),t(this.bloom.up)),t(this.exposure.logPass),t(this.exposure.reducePass),t(this.exposure.adaptPass),e}get hdrTexture(){return this.hdrRt?.texture??null}probeHdr(e,t,n,i){const r=this.hdrRt;if(!r)return null;const a=this.screenSize.width,o=this.screenSize.height,l=Math.max(0,Math.round(e*a)),c=Math.max(0,Math.round((1-i)*o)),h=Math.max(1,Math.min(a-l,Math.round((n-e)*a))),f=Math.max(1,Math.min(o-c,Math.round((i-t)*o))),d=r.texture.type===zt,m=d?new Uint16Array(h*f*4):new Float32Array(h*f*4);this.renderer.readRenderTargetPixels(r,l,c,h,f,m);const g=d?la.fromHalfFloat:w=>w;let v=0,p=0,u=0,y=0;const b=h*f;for(let w=0;w<b;w++){const T=g(m[w*4]),A=g(m[w*4+1]),P=g(m[w*4+2]);v+=T,p+=A,u+=P,y=Math.max(y,T,A,P)}return{r:v/b,g:p/b,b:u/b,max:y,n:b}}probeHdrGrid(e=32,t=18){const n=this.hdrRt;if(!n)return null;const i=this.screenSize.width,r=this.screenSize.height,a=n.texture.type===zt,o=a?new Uint16Array(i*r*4):new Float32Array(i*r*4);this.renderer.readRenderTargetPixels(n,0,0,i,r,o);const l=a?la.fromHalfFloat:d=>d,c=new Float32Array(e*t*3),h=new Float32Array(e*t);for(let d=0;d<r;d++){const m=Math.min(t-1,Math.floor((r-1-d)/r*t));for(let g=0;g<i;g++){const v=Math.min(e-1,Math.floor(g/i*e)),p=(d*i+g)*4,u=(m*e+v)*3;c[u]+=l(o[p]),c[u+1]+=l(o[p+1]),c[u+2]+=l(o[p+2]),h[m*e+v]++}}const f=[];for(let d=0;d<e*t;d++){const m=Math.max(1,h[d]);f.push([c[d*3]/m,c[d*3+1]/m,c[d*3+2]/m])}return{cols:e,rows:t,cells:f}}_applySettings(){const e=this.settings,t=this.composite.uniforms;t.uLens.value.set(e.chromatic,e.vignette,e.grain,0),t.uGrade.value.set(e.bloomStrength,e.lutStrength,this.taa?e.sharpen:0,this.lut.size),this.csm.setStrength(e.shadowStrength),this.bloom&&(this.bloom.threshold=e.bloomThreshold,this.bloom.knee=e.bloomKnee),this.gtao&&(this.gtao.setRadius(e.aoRadius),this.gtao.setIntensity(e.aoIntensity)),this.contact&&(this.contact.setLength(e.contactLength),this.contact.setStrength(e.contactStrength))}resize(e,t,n){const i=Math.min(globalThis.devicePixelRatio||1,1.5);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1);const r=Math.max(1,Math.floor(e*i)),a=Math.max(1,Math.floor(t*i)),o=Math.max(1,Math.floor(r*this.q.renderScale)),l=Math.max(1,Math.floor(a*this.q.renderScale));if(this.displaySize.width=r,this.displaySize.height=a,!(this.screenSize.width===o&&this.screenSize.height===l&&this.hdrRt)){this.screenSize.width=o,this.screenSize.height=l,this.hdrRt?.dispose(),this.hdrRt=Je(o,l,{depthBuffer:!0,name:"hdr"}),this.viewRt?.dispose(),this.viewRt=Je(o,l,{depthBuffer:!0,samples:this._viewSamples,name:"viewmodel"}),this.pingRt[0]?.dispose(),this.pingRt[1]?.dispose(),this.pingRt[0]=Je(o,l,{name:"ping0"}),this.pingRt[1]=Je(o,l,{name:"ping1"}),this.ldrRt?.dispose(),this.ldrRt=null,this.fxaa&&(this.ldrRt=new Wt(o,l,{type:Gt,format:_t,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1})),this.gbuffer.setSize(o,l),this.gtao?.setSize(o,l),this.contact?.setSize(o,l),this.ssr?.setSize(o,l),this.taa?.setSize(o,l),this.motionBlur?.setSize(o,l),this.dof?.setSize(o,l),this.bloom?.setSize(o,l),this.patcher.setScreenSize(o,l),this.viewComposite.uniforms.uTexel.value.set(1/o,1/l),this.composite.uniforms.uTexel.value.set(1/o,1/l),this.composite.uniforms.uResolution.value.set(o,l),this.fxaa&&this.fxaa.uniforms.uTexel.value.set(1/o,1/l),this.depthTexture=this.gbuffer.depthTexture,this.velocityTexture=this.gbuffer.velocityTexture,this.normalTexture=this.gbuffer.normalTexture;for(const c of this.passes)c.resize?.(o,l);this.taa?.reset(),this.exposure.reset()}}_visit(e){if(e.isMesh===!0||e.isPoints===!0||e.isSprite===!0||e.isLine===!0){const t=e.material;let n=!1;if(Array.isArray(t))for(let r=0;r<t.length;r++)this.patcher.patch(t[r]),t[r]&&t[r].transparent===!0&&(n=!0);else t&&(this.patcher.patch(t),n=t.transparent===!0);e.isMesh!==!0&&(n=!0),e.userData.owProbe!==!0&&this._foreignMeshes++;const i=e.userData;n||i.owNoPrepass===!0?this._hide[this._nHide++]=e:(this._draw[this._nDraw++]=e,i.owNoShadow===!0&&(this._noShadow[this._nNoShadow++]=e))}else e.isDirectionalLight===!0&&(this._dirLights[this._nDirLights++]=e)}_collect(e){this._nDraw=0,this._nHide=0,this._nNoShadow=0,this._nDirLights=0,this._foreignMeshes=0,e.traverseVisible(this._visit)}_hideList(e,t){for(let n=0;n<t;n++)e[n].visible=!1}_showList(e,t){for(let n=0;n<t;n++)e[n].visible=!0}_dirFromLight(e,t){return e.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(e.matrixWorld),e.target&&(e.target.updateWorldMatrix(!0,!1),this._tmpV3b.setFromMatrixPosition(e.target.matrixWorld),t.sub(this._tmpV3b)),t.lengthSq()<1e-8&&t.set(0,1,0),t.normalize()}_syncSun(e){let t=null,n=-1;for(let i=0;i<this._nDirLights;i++){const r=this._dirLights[i];r!==this.sun&&r.intensity>n&&(t=r,n=r.intensity)}t&&n>.01?(this.sun.visible&&(this.sun.visible=!1),t.castShadow&&(t.castShadow=!1),this.activeSun=t):(this.sun.visible=!0,this.activeSun=this.sun),this._dirFromLight(this.activeSun,this.sunDir),this.sunDirView.copy(this.sunDir).transformDirection(e.matrixWorldInverse).normalize()}_updateViewRig(e){const t=this.settings,n=Math.max(this.activeSun.intensity,this._ambLevel/.15),i=Qo*Math.pow(Math.min(n/Qo,1),t.viewKeyGamma),r=Math.min(i*t.viewKeyScale,t.viewKeyMax);this.viewSun.color.copy(this.activeSun.color),this.viewSun.intensity=r;const a=this._fillHue;this.viewKeyFill.color.setRGB(a.x,a.y,a.z),this.viewKeyFill.intensity=r*t.viewFillRatio;const o=this.activeSun.color;this.viewRim.color.setRGB(o.r,o.g*.94,o.b*.82),this.viewRim.intensity=r*t.viewRimRatio,this.viewFill.intensity=r*t.viewHemiRatio;const l=this._fillHue2;Math.max(l.x,l.y,l.z)>1e-5&&this.viewBounce.color.setRGB(l.x,l.y*.86,l.z*.62),this.viewBounce.intensity=r*t.viewBounceRatio,this._placeViewLight(this.viewSun,this._viewKeyDir,e),this._placeViewLight(this.viewKeyFill,this._viewFillDir,e),this._placeViewLight(this.viewRim,this._viewRimDir,e),this._placeViewLight(this.viewBounce,this._viewBounceDir,e)}_placeViewLight(e,t,n){const i=this._tmpV3c.copy(t).transformDirection(n.matrixWorld);e.target.position.setFromMatrixPosition(n.matrixWorld),e.position.copy(e.target.position).addScaledVector(i,4),e.updateMatrixWorld(!0),e.target.updateMatrixWorld(!0)}_updateBounceFill(){const e=this.settings,t=this.patcher.uniforms,n=Math.max(0,this.activeSun.intensity),i=this.ctx.peek("sky"),r=i?.ambientColor,a=this._fillHue;r&&Math.max(r.r,r.g,r.b)>1e-5?(a.set(r.r,r.g,r.b),this._ambLevel=Math.max(a.x,a.y,a.z)):(a.set(.36,.56,1),this._ambLevel=.15*n),a.divideScalar(Math.max(a.x,a.y,a.z));{const d=.2126*a.x+.7152*a.y+.0722*a.z,m=1.18;a.set(Math.max(0,d+(a.x-d)*m),Math.max(0,d+(a.y-d)*m),Math.max(0,d+(a.z-d)*m)),a.divideScalar(Math.max(a.x,a.y,a.z,1e-6))}const o=this._ambLevel/.15,l=e.skyFill*o;t.owSkyFill.value.set(a.x*l,a.y*l,a.z*l);const c=this.activeSun.color,h=this._fillHue2.set(c.r*.33,c.g*.29,c.b*.225);h.divideScalar(Math.max(h.x,h.y,h.z,1e-6));const f=e.groundFill*n;t.owGroundFill.value.set(h.x*f,h.y*f,h.z*f),t.owFillGain.value.set(1,e.bounceFill/Math.max(e.groundFill,1e-6)),t.owIndirect.value.x=e.iblDiffuse*(i?.indirectScale??1),t.owIndirect.value.y=e.interiorIndirect,this._skyExposureBias=i?.exposureBias??0}_updateRooms(){if(this._roomsReady)return;const e=this.ctx.peek("world"),t=e?.buildings;if(!t||!e.levelToWorld)return;this._roomsReady=!0;const n=e.levelToWorld(0,0,0,this._tmpV3),i=n.x,r=n.z,a=e.levelToWorld(1,0,0,this._tmpV3b),o=a.x-i,l=a.z-r,c=1/Math.max(1e-6,Math.hypot(o,l)),h=o*c,f=l*c;this.patcher.uniforms.owRoomXf.value.set(h,f,-(i*h+r*f),-(-i*f+r*h));const d=this.patcher.rooms,m=this.patcher.roomsY;let g=0;for(const v of t){const p=v?.spec;if(!p||p.enterable!==!0||p.collapse===!0||p.ruin===!0)continue;if(g>=d.length)break;d[g].set(p.x,p.z,p.w*.5,p.d*.5);let u=(v.roofY??12)-.06;const y=p.setback?.from;y!==void 0&&v.floorY?.[y]!==void 0&&(u=v.floorY[y]-.06),m[g].set(-.8,u,0,0),g++}this.patcher.uniforms.owIndirect.value.z=g,g>0&&console.info(`[render] indirect gate: ${g} interior volumes`)}_ensureProbe(e){if(this.probeActive){this._foreignMeshes>=6&&(e.scene.remove(this.probe.group),this.probe.dispose(),this.probeActive=!1,this.taa?.reset());return}if(this.frame>4||this._foreignMeshes>=6)return;const n=this.probe.build();n.traverse(i=>{i.userData.owProbe=!0}),e.scene.add(n),this.probeActive=!0}_cullLights(e){const t=this.settings;for(let n=0;n<this.lights.length;n++){const i=this.lights[n];i.applied!==void 0&&i.light.intensity!==i.applied&&(i.baseIntensity=i.light.intensity);const r=i.light.position.distanceTo(e),a=1-ml.smoothstep(r,i.range*.75,i.range*1.15),o=i.range<=y0?t.practicalGain:1;i.applied=i.baseIntensity*a*o,i.light.intensity=i.applied,i.light.visible=a>.002}}render(e){const t=this.renderer,{scene:n,camera:i,viewScene:r,viewCamera:a}=e,o=Math.min(.1,Math.max(1/480,e.time.dt||1/60));this.frame++,t.info.reset(),i.updateMatrixWorld(),a.updateMatrixWorld(),this._collect(n),this._ensureProbe(e),this._syncSun(i),this._updateRooms(),this._updateBounceFill(),this._updateViewRig(a),this._camPos.setFromMatrixPosition(i.matrixWorld),this._cullLights(this._camPos),this._adsT=this._readAds(),e.scene.environment!==this.envMap&&(this.envMap=e.scene.environment),e.viewScene.environment!==e.scene.environment&&(e.viewScene.environment===null||e.viewScene.environment===this._assignedViewEnv)&&(e.viewScene.environment=e.scene.environment,this._assignedViewEnv=e.scene.environment),this._currVP.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._invVP.copy(this._currVP).invert(),this._firstFrame&&this._prevVP.copy(this._currVP);const l=n.background;this.csm.enabled&&(this.csm.update(i,this.sunDir,this.settings.sunSoftness),this.csm.setJitter(this.taa?this.frame%8:0),n.background=null,this._hideList(this._hide,this._nHide),this._hideList(this._noShadow,this._nNoShadow),this.csm.render(t,n,this._noCascadeCull?null:this._draw,this._nDraw),this._showList(this._noShadow,this._nNoShadow),this._showList(this._hide,this._nHide),n.background=l),this.taa&&this._applyJitter(i);const c=this.gbuffer;this.needsPrepass&&(n.background=null,this._hideList(this._hide,this._nHide),c.render(t,n,i,this._currVP,this._prevVP,!0),this._showList(this._hide,this._nHide),n.background=l);const h=this.patcher.uniforms.owFeat.value;if(h.set(0,0,0,1),this.gtao&&this.needsPrepass&&(this.patcher.uniforms.owAoTex.value=this.gtao.render(t,c,i,this.frame,!!this.taa),this.aoTexture=this.patcher.uniforms.owAoTex.value,h.x=1),this.contact&&this.needsPrepass&&(this.patcher.uniforms.owContactTex.value=this.contact.render(t,c,i,this.sunDirView,this.frame),h.y=1),this.ssr&&this.needsPrepass&&!this._firstFrame){const p=this.taa?this.taa.previousTexture:this.hdrRt.texture;this.patcher.uniforms.owSsrTex.value=this.ssr.render(t,c,p,i,this.frame),h.z=1}if(this.csm.uniforms.owSunDirView.value.copy(this.sunDirView),t.setRenderTarget(this.hdrRt),t.clear(!0,!0,!1),t.render(n,i),this._viewVisible=r.children.length>this._viewRigChildren,this._viewVisible){this._tmpV3.setFromMatrixPosition(a.matrixWorld);const p=this._tmpV3.distanceToSquared(this._camPos)<.25,u=this.csm.uniforms.owCsmParams.value.x,y=h.y;p||(this.csm.uniforms.owCsmParams.value.x=0),h.y=0,this.csm.uniforms.owSunDirView.value.copy(this.sunDir).transformDirection(a.matrixWorldInverse).normalize();const b=this.patcher.uniforms.owSkyFill.value,w=this.patcher.uniforms.owGroundFill.value;this._fillSkySave.copy(b),this._fillGroundSave.copy(w),b.multiplyScalar(this.settings.viewFillOcclusion),w.multiplyScalar(this.settings.viewFillOcclusion);const T=this.patcher.uniforms.owIndirect.value.z;this.patcher.uniforms.owIndirect.value.z=0,this._collectViewScene(r),t.setRenderTarget(this.viewRt),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(r,a),t.setClearColor(0,1),this.csm.uniforms.owCsmParams.value.x=u,h.y=y,b.copy(this._fillSkySave),w.copy(this._fillGroundSave),this.patcher.uniforms.owIndirect.value.z=T}this.taa&&this._removeJitter(i);let f=this.hdrRt.texture;if(this.taa&&(f=this.taa.render(t,f,c,this._invVP,this._prevVP)),this.motionBlur){const p=this.settings.shutter*(.016666666666666666/o);f=this.motionBlur.render(t,f,c,this.frame,p)}if(this.dof&&this._adsT>.01&&this.needsPrepass){const p=this.pingRt[this._pingIndex];f=this.dof.render(t,f,c,p,this._adsT,this.settings,this.frame),this._pingIndex^=1}for(let p=0;p<this.passes.length;p++){const u=this.passes[p];if(u.enabled===!1)continue;const y=this.pingRt[this._pingIndex];u.render(t,f,y,this),f=y.texture,this._pingIndex^=1}if(this._viewVisible){const p=this.viewComposite.uniforms,u=this.pingRt[this._pingIndex];p.tColor.value=f,p.tView.value=this.viewRt.texture,this.viewComposite.render(t,u),f=u.texture,this._pingIndex^=1}const d=this.settings,m=this.exposure.update(t,f,this.screenSize.width,this.screenSize.height,d.autoExposure?o:1e3,d.exposureBias+this._skyExposureBias,d.exposureKey,this.needsPrepass?this.depthTexture:null);this.exposureTexture=m;let g=null;this.bloom&&(g=this.bloom.render(t,f,this.screenSize.width,this.screenSize.height,m));const v=this.composite.uniforms;v.tColor.value=f,v.tBloom.value=g??f,v.tExposure.value=m,v.uGrade.value.x=g?d.bloomStrength:0,v.uGrade.value.z=this.taa?d.sharpen:0,v.uLens.value.y=d.vignette+(d.adsVignette-d.vignette)*this._adsT,v.uLens.value.w=e.time.elapsed,v.uLook.value.w=this.ctx.config.exposure??1,this.debugView?this._renderDebug(t,f):this.fxaa?(this.composite.render(t,this.ldrRt),this.fxaa.uniforms.tColor.value=this.ldrRt.texture,this.fxaa.render(t,null)):this.composite.render(t,null),c.beginRecord(),c.recordMatrices(this._draw,this._nDraw),c.endRecord(),this._prevVP.copy(this._currVP),this._firstFrame=!1,t.setRenderTarget(null),this._probeExposure&&this._logExposure()}_visitView(e){if(e.isMesh===!0){const t=e.material;if(Array.isArray(t))for(let n=0;n<t.length;n++)this.patcher.patch(t[n]);else t&&this.patcher.patch(t)}}_renderDebug(e,t){this._debugPass||(this._debugPass=g0());const n=this._debugPass.uniforms,i=this.gbuffer,r={ao:[this.aoTexture,0],normal:[i.normalTexture,1],velocity:[i.velocityTexture,2],depth:[i.depthTexture,3],ssr:[this.ssr?.texture,4],ssrmask:[this.ssr?.texture,5],contact:[this.contact?.texture,0],bloom:[this.bloom?.texture,4],view:[this.viewRt?.texture,4],viewalpha:[this.viewRt?.texture,5],color:[t,4]},a=r[this.debugView]??r.color;n.tSrc.value=a[0]??t,n.uMode.value=a[1],this._debugPass.render(e,null)}debugExposure(){const e=this._readback;this.renderer.readRenderTargetPixels(this.exposure.rt1,0,0,1,1,e);const t=e[0]/Math.max(e[1],1e-4),n=this._readback2;return this.renderer.readRenderTargetPixels(this.exposure.adapt[this.exposure._flip],0,0,1,1,n),{avgLum:Math.pow(2,t),ev100:n[1],exposure:n[0]}}_logExposure(){if(this.frame%90!==0)return;const e=this.debugExposure(),t=this.patcher.uniforms,n=i=>`${i.x.toFixed(3)},${i.y.toFixed(3)},${i.z.toFixed(3)}`;console.info(`[render] frame ${this.frame} avgLum ${e.avgLum.toFixed(4)} ev100 ${e.ev100.toFixed(2)} exposure ${e.exposure.toFixed(4)} sun=${this.activeSun.intensity.toFixed(3)} skyFill=${n(t.owSkyFill.value)} gndFill=${n(t.owGroundFill.value)} ibl=${t.owIndirect.value.x.toFixed(3)} indoor=${t.owIndirect.value.y.toFixed(3)} rooms=${t.owIndirect.value.z}`)}_collectViewScene(e){e.traverseVisible(this._visitView)}_applyJitter(e){const t=this.taa.nextJitter(),n=t.x*2/this.screenSize.width,i=t.y*2/this.screenSize.height;this._jitterSaved.set(e.projectionMatrix.elements[8],e.projectionMatrix.elements[9]),e.projectionMatrix.elements[8]+=n,e.projectionMatrix.elements[9]+=i,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this._jittered=!0}_removeJitter(e){this._jittered&&(e.projectionMatrix.elements[8]=this._jitterSaved.x,e.projectionMatrix.elements[9]=this._jitterSaved.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this._jittered=!1)}_readAds(){this._weapons||(this._weapons=this.ctx.peek("weapons")||null);const e=this._weapons;if(!e)return 0;const t=e.adsProgress;return typeof t=="number"&&t===t?Math.min(1,Math.max(0,t)):0}dispose(){this.csm.dispose(),this.gbuffer.dispose(),this.gtao?.dispose(),this.contact?.dispose(),this.ssr?.dispose(),this.taa?.dispose(),this.motionBlur?.dispose(),this.dof?.dispose(),this.bloom?.dispose(),this.exposure.dispose(),this.composite.dispose(),this.viewComposite.dispose(),this.fxaa?.dispose(),this.lut.texture.dispose(),this.envEquirect?.dispose(),this.hdrRt?.dispose(),this.viewRt?.dispose(),this.ldrRt?.dispose(),this.pingRt[0]?.dispose(),this.pingRt[1]?.dispose(),this.envTarget?.dispose(),this.probeActive&&(this.ctx?.scene.remove(this.probe.group),this.probe.dispose()),this._debugPass?.dispose(),this.patcher.dispose(),this.renderer.dispose()}}const mn={concrete:{albedo:[.18,.17,.16],roughness:.92,metal:0},metal_painted:{albedo:[.15,.16,.18],roughness:.65,metal:.85},metal_rust:{albedo:[.22,.14,.09],roughness:.82,metal:.8},metal_brushed:{albedo:[.22,.21,.2],roughness:.5,metal:.9},brick:{albedo:[.22,.16,.11],roughness:.93,metal:0},wood:{albedo:[.16,.1,.06],roughness:.88,metal:0},asphalt:{albedo:[.07,.07,.07],roughness:.96,metal:0},gravel:{albedo:[.16,.15,.14],roughness:.93,metal:0},dirt:{albedo:[.13,.1,.06],roughness:.96,metal:0},plaster:{albedo:[.28,.26,.24],roughness:.9,metal:0},fabric:{albedo:[.1,.08,.07],roughness:.96,metal:0},corrugated:{albedo:[.14,.14,.15],roughness:.78,metal:.85},rubber:{albedo:[.05,.05,.05],roughness:.93,metal:0},foliage:{albedo:[.06,.1,.04],roughness:.92,metal:0},burlap:{albedo:[.16,.13,.09],roughness:.96,metal:0},black_ops:{albedo:[.04,.04,.05],roughness:.6,metal:.1},flesh:{albedo:[.35,.22,.18],roughness:.7,metal:0},infected:{albedo:[.25,.3,.18],roughness:.85,metal:0}};function Nl(s,e,t){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),r=i.createImageData(e,e);for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=(o*e+l)*4,h=t(l/e,o/e,l,o);r.data[c]=r.data[c+1]=r.data[c+2]=Math.floor(h*255),r.data[c+3]=255}i.putImageData(r,0,0);const a=new Ra(n);return a.wrapS=a.wrapT=pi,a.colorSpace=St,a.magFilter=ht,a.minFilter=tn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function vs(s,e){let t=s*374761393+e*668265263>>>0;return t=(t^t>>>13)*1274126177>>>0,(t&2147483647)/2147483647}function E0(s,e,t){const n=Math.floor(s*t),i=Math.floor(e*t),r=s*t-n,a=e*t-i,o=vs(n,i),l=vs(n+1,i),c=vs(n,i+1),h=vs(n+1,i+1),f=r*r*(3-2*r),d=a*a*(3-2*a);return o+(l-o)*f+(c-o)*d+(o-l-c+h)*f*d}function ci(s,e,t){let n=0,i=.5,r=1;for(let a=0;a<t;a++)n+=i*E0(s,e,r),i*=.5,r*=2;return n}function T0(s,e){const t=mn[s]||mn.concrete;return Nl(null,e,(n,i)=>{const a=.85+ci(n,i,4)*.3;return Math.min(1,t.albedo[0]*a)})}function A0(s,e){const t=mn[s]||mn.concrete;return Nl(null,e,(n,i)=>{const r=ci(n+.5,i+.5,3),a=.7+r*.3,o=t.roughness*(.8+r*.4),l=t.metal;return a*.33+o*.33+l*.34})}function R0(s,e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),i=n.createImageData(e,e),r=.8;for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=l/e,h=o/e,f=ci(c-1/e,h,3),d=ci(c+1/e,h,3),m=ci(c,h-1/e,3),g=ci(c,h+1/e,3),v=(d-f)*r,p=(g-m)*r,u=(o*e+l)*4;i.data[u]=Math.floor((v*.5+.5)*255),i.data[u+1]=Math.floor((p*.5+.5)*255),i.data[u+2]=255,i.data[u+3]=255}n.putImageData(i,0,0);const a=new Ra(t);return a.wrapS=a.wrapT=pi,a.colorSpace=$t,a.magFilter=ht,a.minFilter=tn,a.generateMipmaps=!0,a.needsUpdate=!0,a}class C0{static id="materials";static deps=["render"];constructor(){this._cache=new Map,this._sets=new Map,this._built=!1,this._anisotropy=4,this._pending=new Set}async init(e){this.ctx=e;const t=e.config.q;this._anisotropy=Math.min(t.anisotropy,16);const n=e.config.quality,i=n==="low"?256:n==="medium"?512:1024;this._texSize=i,this._renderer=e.peek("render")?.renderer,this._buildCore(),this._built=!0}_buildCore(){const e=Object.keys(mn);for(const t of e){if(this._cache.has(t))continue;const n=T0(t,this._texSize),i=A0(t,this._texSize),r=R0(t,this._texSize);this._renderer&&(n.anisotropy=this._anisotropy,i.anisotropy=this._anisotropy,r.anisotropy=this._anisotropy),this._sets.set(t,{albedo:n,orm:i,normal:r});const a=mn[t],o=new Oi({name:`mat_${t}`,map:n,normalMap:r,normalScale:new ce(.8,.8),roughnessMap:i,roughness:a.roughness,metalness:a.metal,envMapIntensity:.5});o.userData.surface=t,this._cache.set(t,o)}}get(e){let t=this._cache.get(e);if(!t){const n=mn[e]||mn.concrete,i=this._sets.get(e)||this._sets.get("concrete");t=new Oi({name:`mat_${e}`,map:i?.albedo,normalMap:i?.normal,normalScale:new ce(.8,.8),roughnessMap:i?.orm,roughness:n.roughness,metalness:n.metal,envMapIntensity:.5}),t.userData.surface=e,this._cache.set(e,t)}return t}names(){return Object.keys(mn)}surfaceOf(e){return e}prewarmMaterials(e){const t=this._cache.values(),n=e.get("render"),i=new vi,r=new je(new Zt(1,1,1));for(const a of t)r.material=a,i.add(r);n.renderer.compileAsync(i,e.camera).then(()=>i.clear())}dispose(){for(const e of this._sets.values())e.albedo?.dispose(),e.orm?.dispose(),e.normal?.dispose();for(const e of this._cache.values())e.dispose();this._cache.clear(),this._sets.clear()}}class P0{static id="sky";static deps=["render"];constructor(){this._dirty=!0,this._time=16.5,this._lat=45,this._sunAltitude=.5,this._sunAzimuth=0,this._ambient=[.2,.3,.5],this._sun=null,this._envMap=null}async init(e){this.ctx=e,this._renderer=e.get("render").renderer,this._scene=e.scene,this._build()}_build(){this._sun&&(this._scene.remove(this._sun),this._scene.remove(this._sun.target),this._sun.dispose?.());const e=this._time,t=Math.sin(e/24*Math.PI*2-Math.PI/2);this._sunAltitude=t;const n=Math.max(2.5,Math.sin(Math.max(0,t))*6),i=[.75,.78,.85];this._sun=new oi(new He(i[0],i[1],i[2]),n),this._sun.name="ow-sun",this._sun.position.set(-60,35,40),this._sun.castShadow=!1,this._scene.add(this._sun),this._scene.add(this._sun.target);const r=new Tl(6715272,2236962,1);r.name="ow-hemi",this._scene.add(r);const a=new Ph(3359829,1.2);a.name="ow-ambient",this._scene.add(a),this._updateSkyDome(),this._updateEnvMap()}_updateSkyDome(){const e=this._scene.getObjectByName("ow-sky-dome");e&&(this._scene.remove(e),e.geometry?.dispose(),e.material?.dispose()),this._sunAltitude;const t=[.18,.2,.24],n=[.28,.3,.35],i=[.08,.07,.06],r=document.createElement("canvas");r.width=2,r.height=256;const a=r.getContext("2d");for(let f=0;f<256;f++){const d=f/255;let m;if(d<.5){const g=d/.5;m=[t[0]+(n[0]-t[0])*g,t[1]+(n[1]-t[1])*g,t[2]+(n[2]-t[2])*g]}else{const g=(d-.5)/.5;m=[n[0]+(i[0]-n[0])*g,n[1]+(i[1]-n[1])*g,n[2]+(i[2]-n[2])*g]}a.fillStyle=`rgb(${Math.floor(m[0]*255)},${Math.floor(m[1]*255)},${Math.floor(m[2]*255)})`,a.fillRect(0,f,2,1)}const o=new Ra(r);o.colorSpace=St,o.needsUpdate=!0;const l=new Vn(500,32,15),c=new Xt({uniforms:{skyTex:{value:o}},vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWorldPos;
        uniform sampler2D skyTex;
        void main() {
          vec3 dir = normalize(vWorldPos);
          float t = dir.y * 0.5 + 0.5;
          vec3 col = texture2D(skyTex, vec2(0.5, t)).rgb;
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Rt,depthWrite:!1}),h=new je(l,c);h.name="ow-sky-dome",this._scene.add(h)}_updateEnvMap(){this._envMap&&(this._envMap.dispose?.(),this._envMap=null);const e=this.ctx.peek("render");e?.setEnvMap&&e.setEnvMap(null)}setTime(e){this._time=(e%24+24)%24,this._build()}dispose(){const e=this._scene.getObjectByName("ow-sky-dome");e&&(this._scene.remove(e),e.geometry?.dispose(),e.material?.dispose()),this._sun&&(this._scene.remove(this._sun),this._scene.remove(this._sun.target))}}function _s(s,e,t){const n=new Zt(s,e,t);return n.translate(0,e/2,0),n}class D0{static id="world";static deps=["materials","render"];constructor(){this.root=new gn,this.root.name="world",this.bounds=new Tn,this.spawnPoints=[],this.stats={staticTris:0,instTris:0,instances:0,drawCalls:0},this._materials=new Map,this._ballast=[],this._built=!1}async init(e){this.ctx=e,this._mat=e.get("materials"),this._scene=e.scene,this._scene.add(this.root),this._build(),this._built=!0}_matFor(e){return this._materials.has(e)||this._materials.set(e,this._mat.get(e)),this._materials.get(e)}_build(){const e=performance.now(),n=this.ctx.peek("render")?.settings?.practicalGain?17:20;this._ballast=[],this._buildGround(),this._buildBuildings(),this._buildProps(),this._stabiliseLightCount(n),performance.now()-e,this.stats.drawCalls=this.root.children.length}_buildGround(){const e=new Si(200,200,60,60);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let r=0;r<t.count;r++){const a=t.getX(r),o=t.getZ(r);let l=0;l+=Math.sin(a*.04)*Math.cos(o*.04)*.4,l+=Math.sin(a*.08+1.3)*.2,l+=Math.cos(o*.1+.7)*.15,t.setY(r,l)}e.computeVertexNormals();const n=this._matFor("asphalt"),i=new je(e,n);i.receiveShadow=!0,i.name="ground",this.root.add(i),this.bounds.setFromCenterAndSize(new C(0,0,0),new C(200,.5,200))}_buildBuildings(){const e=[{x:-25,z:-20,w:12,d:18,h:16,surface:"concrete",damaged:!0},{x:20,z:-25,w:14,d:16,h:18,surface:"brick",damaged:!0},{x:-20,z:25,w:10,d:12,h:12,surface:"plaster",damaged:!1},{x:25,z:20,w:16,d:14,h:14,surface:"concrete",damaged:!0},{x:0,z:-30,w:20,d:10,h:10,surface:"metal_painted",damaged:!0},{x:-30,z:0,w:8,d:22,h:22,surface:"concrete",damaged:!0},{x:30,z:0,w:8,d:20,h:20,surface:"brick",damaged:!1},{x:0,z:35,w:18,d:8,h:10,surface:"plaster",damaged:!0}];let n=12345;const i=()=>(n=n*1664525+1013904223>>>0,(n>>>0)/4294967296);for(const r of e){const a=r.damaged?r.h*(.6+i()*.4):r.h,o=_s(r.w,a,r.d),l=this._matFor(r.surface),c=new je(o,l);if(c.position.set(r.x,0,r.z),c.castShadow=!0,c.receiveShadow=!0,c.name=`building_${r.x}_${r.z}`,this.root.add(c),r.surface==="concrete"||r.surface==="brick"){const h=_s(r.w+.5,.3,r.d+.5),f=this._matFor("concrete"),d=new je(h,f);d.position.set(r.x,a,r.z),d.castShadow=!0,d.name=`roof_${r.x}_${r.z}`,this.root.add(d)}}}_buildProps(){const e=this._matFor("metal_rust"),t=100,n=_s(.8,1.2,.8),i=new mo(n,e,t);i.name="barrels";const r=new ft;let o=42;const l=()=>(o=o*1664525+1013904223>>>0,(o>>>0)/4294967296);for(let p=0;p<t;p++)r.position.set((l()-.5)*240,.6,(l()-.5)*240),r.scale.setScalar(.7+l()*.6),r.rotation.y=l()*Math.PI*2,r.updateMatrix(),i.setMatrixAt(p,r.matrix);i.instanceMatrix.needsUpdate=!0,i.castShadow=!0,i.receiveShadow=!0,this.root.add(i),this.stats.instances+=t;const c=this._matFor("concrete"),h=200,f=_s(.4,.2,.4),d=new mo(f,c,h);d.name="debris";const m=new ft;let g=999;const v=()=>(g=g*1664525+1013904223>>>0,(g>>>0)/4294967296);for(let p=0;p<h;p++)m.position.set((v()-.5)*200,.1,(v()-.5)*200),m.scale.setScalar(.3+v()*.7),m.rotation.set(v()*.3,v()*Math.PI*2,v()*.3),m.updateMatrix(),d.setMatrixAt(p,m.matrix);d.instanceMatrix.needsUpdate=!0,d.receiveShadow=!0,this.root.add(d),this.stats.instances+=h}_stabiliseLightCount(e){for(;this._ballast.length<e;){const t=new Rl(16777215,0,0);t.name="ow-ballast",t.visible=!0,this._scene.add(t),this._ballast.push(t)}for(const t of this._ballast)t.intensity=0,t.visible=!0}prewarmMaterials(e){const t=["concrete","brick","plaster","asphalt","metal_painted","metal_rust","wood","gravel","dirt","rubber","fabric","corrugated","foliage","burlap"],n=e.get("render"),i=new vi,r=new je(new Zt(1,1,1));for(const a of t)r.material=this._matFor(a),i.add(r);return n.renderer.compileAsync(i,e.camera).then(()=>i.clear())}dispose(){for(;this.root.children.length;){const e=this.root.children[0];this.root.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}for(const e of this._ballast)this._scene.remove(e);this._ballast=[]}}const L0={concrete:"concrete",brick:"concrete",plaster:"plaster",metal_painted:"metal",metal_rust:"metal",metal_brushed:"metal",corrugated:"metal",wood:"wood",asphalt:"concrete",gravel:"dirt",dirt:"dirt",fabric:"fabric",burlap:"fabric",foliage:"foliage",rubber:"rubber"};class U0{static id="physics";static deps=["world"];static SURFACES=["concrete","metal","wood","dirt","sand","glass","water","foliage","fabric","flesh","rubber","plaster"];constructor(){this._world=null,this._scene=null,this._bounds=null,this._raycaster=new Lh,this._rayOrigin=new C,this._rayDir=new C(0,-1,0),this._cache=new Map}async init(e){this._world=e.get("world"),this._scene=e.scene,this._bounds=this._world.bounds,this._cache=new Map,this._world.root.traverse(t=>{t.isMesh&&(t.userData.surface||(t.material?.userData?.surface?t.userData.surface=t.material.userData.surface:t.name==="ground"?t.userData.surface="asphalt":t.name.startsWith("building_")||t.name.startsWith("roof_")?t.userData.surface="concrete":t.name==="barrels"&&(t.userData.surface="metal_rust")))})}fixedUpdate(e,t){}raycast(e,t,n=100){this._rayOrigin.copy(e),this._rayDir.copy(t).normalize(),this._raycaster.set(this._rayOrigin,this._rayDir),this._raycaster.far=Math.max(.01,n);const i=this._raycaster.intersectObjects(this._scene.children,!0);if(i.length===0)return null;const r=i[0],a=r.object;let o=a.userData?.surface;!o&&a.material?.userData?.surface&&(o=a.material.userData.surface),o=L0[o]||"concrete";let l;return r.face?(l=r.face.normal.clone(),a.normalMatrix&&l.applyMatrix3(a.normalMatrix).normalize()):l=new C(0,1,0),{point:r.point.clone(),normal:l,surface:o}}groundHeight(e,t){return Math.sin(e*.05)*Math.cos(t*.05)*.3+Math.sin(e*.1+1)*.15+Math.cos(t*.12)*.1}dispose(){this._cache.clear(),this._raycaster.dispose?.(),this._world=null,this._scene=null,this._bounds=null}}class I0{static id="player";static deps=["physics"];constructor(){this._rig=null,this._mesh=null,this._velocity=new C,this._onGround=!1,this._health=100,this._built=!1}async init(e){this.ctx=e,this._input=e.input,this._scene=e.scene,this._camera=e.camera;const t=e.get("materials").get("black_ops"),n=new gn;n.name="player";const i=new je(new Cs(.4,1.6,4,8),t);i.position.y=1,n.add(i);const r=new je(new Vn(.22,8,6),t);r.position.y=1.9,n.add(r),n.position.set(0,2,0),this._scene.add(n),this._mesh=n,this._rig=new gn,this._rig.name="camera-rig",this._rig.position.copy(n.position),this._rig.position.y+=1.6,this._scene.add(this._rig),this._camera.position.set(0,3,-8),this._rig.add(this._camera),this._camera.position.set(0,1.2,0),this._velocity=new C,this._onGround=!1,this._health=100,this._built=!0,console.info(`[player] shape-shifter spawned at ${n.position.x.toFixed(1)}, ${n.position.y.toFixed(1)}, ${n.position.z.toFixed(1)}`)}fixedUpdate(e,t){if(!this._built)return;const n=this._input,i=t.get("physics"),r=n.action("sprint")?8.5:5,a=new C(0,0,-1).applyQuaternion(this._rig.quaternion);a.y=0,a.normalize();const o=new C(1,0,0).applyQuaternion(this._rig.quaternion);o.y=0,o.normalize();const l=new C;n.action("forward")&&l.add(a),n.action("back")&&l.sub(a),n.action("right")&&l.add(o),n.action("left")&&l.sub(o),l.lengthSq()>0&&l.normalize();const c=-14;this._velocity.y+=c*e;const h=i.groundHeight(this._mesh.position.x,this._mesh.position.z);this._mesh.position.y<=h+.1&&this._velocity.y<=0?(this._mesh.position.y=h+.1,this._velocity.y=0,this._onGround=!0):this._onGround=!1;const f=l.multiplyScalar(r);if(this._velocity.x=f.x,this._velocity.z=f.z,this._mesh.position.x+=this._velocity.x*e,this._mesh.position.y+=this._velocity.y*e,this._mesh.position.z+=this._velocity.z*e,l.lengthSq()>0){const d=Math.atan2(l.x,l.z);this._mesh.rotation.y=d}this._rig.position.copy(this._mesh.position),this._rig.position.y+=1.6,t.events.emit("player:state",{stance:this._onGround?"ground":"air",sprinting:n.action("sprint"),health:this._health})}update(e,t){if(!this._built)return;const n=t.input.look;this._rig.rotation.y-=n.x*.002,this._rig.rotation.x-=n.y*.002,this._rig.rotation.x=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this._rig.rotation.x))}dispose(){this._mesh&&(this._scene.remove(this._mesh),this._mesh.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})),this._rig&&this._scene.remove(this._rig)}}class F0{static id="weapons";static deps=["render","player"];constructor(){this._form="claws",this._active=!1,this._cooldown=0,this._forms=["claws","blade","hammer"],this._built=!1}async init(e){this.ctx=e,this._player=e.get("player"),this._scene=e.scene,this._fx=e.peek("fx"),this._rng=e.rng.fork(),this._cooldown=0,this._built=!0,console.info("[weapons] shape-shift forms ready: claws, blade, hammer")}update(e,t){this._built&&(this._cooldown>0&&(this._cooldown-=e),this._cooldown<=0&&t.input.actionPressed("fire")&&(this._cooldown=.4,this._performAttack(t)),t.input.actionPressed("reload")&&this._cycleForm())}_performAttack(e){const t=this._player._mesh;if(!t)return;const n=t.position.clone();n.y+=1.2;const i=new C(0,0,-1).applyQuaternion(t.getWorldQuaternion(new wi));e.events.emit("weapon:fire",{weapon:this._form,origin:n,dir:i,seed:this._rng.u32()}),this._fx?.spawnSlice&&this._fx.spawnSlice(n,i)}_cycleForm(){const e=(this._forms.indexOf(this._form)+1)%this._forms.length;this._form=this._forms[e],console.info(`[weapons] form: ${this._form}`)}dispose(){this._built=!1}}class N0{static id="fx";static deps=["render","weapons"];constructor(){this._slices=[],this._geometries=[],this._materials=[],this._built=!1}async init(e){this.ctx=e,this._scene=e.scene,this._built=!0,console.info("[fx] ready — slice/power effects")}spawnSlice(e,t){const n=new Zt(.08,.08,1.2),i=new ba({color:8956620,transparent:!0,opacity:.9}),r=new je(n,i);r.position.copy(e),r.lookAt(e.clone().add(t)),r.userData.life=.12,this._scene.add(r),this._slices.push(r),this._geometries.push(n),this._materials.push(i)}update(e,t){for(let n=this._slices.length-1;n>=0;n--){const i=this._slices[n];i.userData.life-=e,i.userData.life<=0&&(this._scene.remove(i),i.geometry.dispose(),i.material.dispose(),this._slices.splice(n,1),this._geometries.splice(n,1),this._materials.splice(n,1))}}lateUpdate(e,t){}dispose(){for(const e of this._slices)this._scene.remove(e),e.geometry.dispose(),e.material.dispose();this._slices.length=0,this._geometries.length=0,this._materials.length=0}}const el=[[10,1.5,15],[-15,1.5,-10],[5,1.5,-20],[-8,1.5,8],[12,1.5,-15]],O0=20,B0=3.5;class z0{static id="ai";static deps=["world","player"];constructor(){this._actors=[],this._geometries=[],this._materials=new Map,this._tmpDir=new C}async init(e){this.ctx=e,this._scene=e.scene,this._player=e.get("player"),this._matInfected=e.get("materials").get("infected"),this._matFlesh=e.get("materials").get("flesh");const t=new Cs(.45,1.4,4,8),n=new Vn(.24,8,6);this._geometries.push(t,n);for(let i=0;i<el.length;i++){const[r,a,o]=el[i],l=new gn;l.name=`infected_${i}`;const c=new je(t,this._matInfected);c.position.y=1,l.add(c);const h=new je(n,this._matFlesh);h.position.y=1.85,l.add(h),l.position.set(r,a,o),this._scene.add(l),this._actors.push({group:l,speed:B0+i*.3,state:"idle"})}console.info(`[ai] ${this._actors.length} infected actors spawned`)}update(e,t){if(!this._actors.length)return;const n=this._player._mesh?.position;if(n)for(const i of this._actors){const r=this._tmpDir.copy(n).sub(i.group.position);r.length(),r.y=0;const a=r.length();a>.01&&r.normalize(),a<O0?(i.state="chase",i.group.position.x+=r.x*i.speed*e,i.group.position.z+=r.z*i.speed*e,a>.01&&(i.group.rotation.y=Math.atan2(r.x,r.z))):i.state="idle"}}prewarmMaterials(e){const t=e.get("render"),n=new vi,i=new je(new Zt(1,1,1));return i.material=this._matInfected,n.add(i),t.renderer.compileAsync(n,e.camera).then(()=>n.clear())}dispose(){for(const e of this._actors)this._scene.remove(e.group),e.group.traverse(t=>{t.geometry=void 0,t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())});for(const e of this._geometries)e.dispose();this._actors=[],this._geometries=[]}}class k0{static id="ui";static deps=["render"];constructor(){this._root=null,this._healthBar=null,this._powerBar=null,this._minimap=null}async init(e){this.ctx=e,this._build(),console.info("[ui] Prototype-style HUD ready")}_build(){const e=document.createElement("div");e.id="prototype-hud",e.style.cssText="position:fixed;inset:0;pointer-events:none;font-family:ui-monospace,monospace;color:#8a9a8a;font-size:12px;z-index:10;";const t=document.createElement("div");t.style.cssText="position:absolute;bottom:40px;left:40px;width:200px;";const n=document.createElement("div");n.textContent="HEALTH",n.style.cssText="font-size:10px;letter-spacing:2px;margin-bottom:4px;color:#5a6a5a;";const i=document.createElement("div");i.style.cssText="width:100%;height:6px;background:rgba(0,0,0,0.6);border:1px solid #2a3a2a;";const r=document.createElement("div");r.style.cssText="width:100%;height:100%;background:#2d5a2d;transition:width 0.2s;",i.appendChild(r),t.appendChild(n),t.appendChild(i),e.appendChild(t),this._healthBar=r;const a=document.createElement("div");a.style.cssText="position:absolute;bottom:40px;right:40px;width:120px;";const o=document.createElement("div");o.textContent="POWERS",o.style.cssText="font-size:10px;letter-spacing:2px;margin-bottom:4px;color:#5a6a5a;";const l=document.createElement("div");l.style.cssText="width:100%;height:6px;background:rgba(0,0,0,0.6);border:1px solid #2a3a2a;";const c=document.createElement("div");c.style.cssText="width:100%;height:100%;background:#5a2d5a;transition:width 0.2s;",l.appendChild(c),a.appendChild(o),a.appendChild(l),e.appendChild(a),this._powerBar=c;const h=document.createElement("div");h.style.cssText="position:absolute;top:20px;right:20px;width:140px;height:140px;background:rgba(0,0,0,0.5);border:1px solid #2a3a2a;border-radius:50%;overflow:hidden;";const f=document.createElement("div");f.style.cssText="position:absolute;top:50%;left:50%;width:4px;height:4px;background:#8a9a8a;border-radius:50%;transform:translate(-50%,-50%);",h.appendChild(f),e.appendChild(h),this._minimap=h;const d=document.createElement("div");d.id="infected-count",d.style.cssText="position:absolute;top:20px;left:20px;font-size:11px;color:#5a6a5a;",d.textContent="INFECTED: 0",e.appendChild(d),document.body.appendChild(e),this._root=e,this._infectedCount=d}update(e,t){if(!this._root)return;const n=t.peek("player"),i=t.peek("ai");if(n){const r=Math.max(0,n._health||0);this._healthBar.style.width=`${r}%`}if(i){const r=i._actors?.length||0;this._infectedCount.textContent=`INFECTED: ${r}`}}dispose(){this._root&&(this._root.remove(),this._root=null)}}class V0{static id="audio";static deps=["player"];async init(e){this.ctx_=new(window.AudioContext||window.webkitAudioContext),console.log("[audio] context ready")}update(e,t){}dispose(){this.ctx_&&(this.ctx_.close(),this.ctx_=null)}}const wr={hero:{pos:[12,1.75,18],look:[-4,2.2,-6],fov:75,time:16.5,doc:"Wide establishing shot down the main street — reads overall art direction."},interior:{pos:[-8.5,1.7,3.2],look:[2,1.6,-2],fov:70,time:16.5,doc:"Interior with light shafts through windows — bounce, AO, volumetrics."},detail:{pos:[3.2,1.35,5],look:[1.4,1.1,2.2],fov:45,time:16.5,doc:"Close-up on wall/prop materials — texel density, normal maps, grime."},sunset:{pos:[16,3.2,22],look:[-10,3,-14],fov:65,time:19.2,doc:"Low sun — atmospheric scattering, long shadows, god rays, bloom."},night:{pos:[12,1.75,18],look:[-4,2.2,-6],fov:75,time:1.5,doc:"Night — artificial lights, exposure adaptation, shadow quality in the dark."},weapon:{pos:[6,1.7,10],look:[-2,1.8,-2],fov:80,time:16.5,apply:s=>s.ctx.peek("weapons")?.debugPose?.("idle"),doc:"Hip-fire viewmodel — weapon silhouette, materials, hand rig."},ads:{pos:[6,1.7,10],look:[-2,1.8,-2],fov:58,time:16.5,apply:s=>s.ctx.peek("weapons")?.debugPose?.("ads"),doc:"Aiming down sights — optic alignment, depth of field, reticle."},muzzle:{pos:[6,1.7,10],look:[-2,1.8,-2],fov:80,time:16.5,apply:(s,e)=>s.ctx.peek("weapons")?.debugPose?.("fire",e),doc:"Mid-recoil with muzzle flash — flash shape, light spill, shell eject."},combat:{pos:[4,1.7,12],look:[-6,1.7,-4],fov:80,time:16.5,apply:s=>s.ctx.peek("ai")?.debugStage?.("firefight"),doc:"Enemies mid-firefight — character quality, animation, impact FX."},impacts:{pos:[2.5,1.6,6],look:[-1.8,1.5,9],fov:60,time:16.5,apply:s=>s.ctx.peek("fx")?.debugBurst?.("wall"),doc:"Bullet impacts on a wall — decals, debris, dust puffs, sparks."},hud:{pos:[12,1.75,18],look:[-4,2.2,-6],fov:80,time:16.5,apply:s=>s.ctx.peek("ui")?.debugState?.("combat"),doc:"Full HUD in combat — layout, typography, readability, hit feedback."}};function H0(s,{capture:e,lockstep:t=!1}={}){if(window.__SHOTS__=wr,window.__APPLY_SHOT__=(i,r={})=>{const a=wr[i];if(!a)return{error:`unknown shot "${i}"`,available:Object.keys(wr)};s.input.frozen=!0,s.input.enabled=!1;const o=s.ctx.peek("player");o?.setControlEnabled?.(!1);const l=s.camera;l.position.fromArray(a.pos);const c=new C().fromArray(a.look);return l.lookAt(c),a.fov&&(l.fov=a.fov,l.updateProjectionMatrix()),o?.teleport?.(l.position,l.rotation),s.ctx.peek("weapons")?.debugPose?.("idle"),s.ctx.peek("fx")?.debugBurst?.("none"),s.ctx.peek("ui")?.debugState?.("clean"),a.time!==void 0&&s.ctx.peek("sky")?.setTimeOfDay?.(a.time),a.apply?.(s,r),s.events.emit("shot:applied",{name:i,shot:a}),{applied:i,pos:a.pos,fov:a.fov??s.config.fov}},e){s.input.frozen=!0;let i=0;s.step=(r=>function(){return this._last=i,i+=1e3/60,r.call(this,i)})(s.step)}window.__RENDER_INFO__=null,s.events.on("resize",()=>{});const n=()=>{const i=s.ctx.peek("render");window.__RENDER_INFO__={frame:s.time.frame,calls:i?.renderer?.info.render.calls??0,tris:i?.renderer?.info.render.triangles??0,programs:i?.renderer?.info.programs?.length??0,textures:i?.renderer?.info.memory.textures??0,geometries:i?.renderer?.info.memory.geometries??0,ms:s.time.dt*1e3}};if(t)s.start=function(){this._running=!0},window.__LOCKSTEP__=!0,window.__PUMP__=(i=1)=>new Promise(r=>{let a=0;const o=()=>{s.step(),n(),++a>=i?r(s.time.frame):requestAnimationFrame(o)};requestAnimationFrame(o)}),window.__PRESENT__=(i=2)=>new Promise(r=>{let a=0;const o=()=>++a>=i?r(s.time.frame):requestAnimationFrame(o);requestAnimationFrame(o)});else{window.__LOCKSTEP__=!1,window.__PUMP__=(r=1)=>new Promise(a=>{let o=0;const l=()=>++o>=r?a(s.time.frame):requestAnimationFrame(l);requestAnimationFrame(l)}),window.__PRESENT__=window.__PUMP__;const i=()=>{n(),requestAnimationFrame(i)};requestAnimationFrame(i)}return{pump:window.__PUMP__,present:window.__PRESENT__,lockstep:!!t}}const tl=[{pos:[12,1.75,18],look:[-4,2.2,-6]},{pos:[-8.5,1.7,3.2],look:[2,1.6,-2]},{pos:[3.2,1.35,5],look:[1.4,1.1,2.2]},{pos:[4,1.7,12],look:[-6,1.7,-4]}],G0=new Set(["fx"]),W0=!1;async function X0(s,{onProgress:e=()=>{},transients:t=!1,drawFrames:n=!1}={}){const i=performance.now(),a=s.ctx.peek("render")?.renderer;if(!a)return{ok:!1,reason:"no renderer"};const o=a.info.programs?.length??0,l=s.camera,c={pos:l.position.clone(),quat:l.quaternion.clone(),fov:l.fov},h=s.time,f={elapsed:h.elapsed,raw:h.raw,dt:h.dt,alpha:h.alpha,frame:h.frame},d=s.rng,m={s0:d.s0,s1:d.s1,s2:d.s2,s3:d.s3,spare:d._spare},g=s._accum,v=[()=>s.ctx.peek("ai")?.debugStage?.("firefight"),()=>s.ctx.peek("fx")?.debugBurst?.("wall"),()=>s.ctx.peek("fx")?.debugBurst?.("explosion"),()=>s.ctx.peek("fx")?.debugBurst?.("muzzle"),()=>s.ctx.peek("fx")?.debugBurst?.("combat"),()=>s.ctx.peek("weapons")?.debugPose?.("fire"),()=>s.ctx.peek("weapons")?.debugPose?.("ads"),()=>s.ctx.peek("ui")?.debugState?.("combat")],p=new Wt(1,1,{depthBuffer:!1,stencilBuffer:!1}),u=a.getRenderTarget(),y=a.getActiveCubeFace?.()??0,b=a.getActiveMipmapLevel?.()??0,w=async()=>{a.setRenderTarget(p);try{await a.compileAsync(s.scene,s.camera),await a.compileAsync(s.viewScene,s.viewCamera)}catch{try{a.compile(s.scene,s.camera),a.compile(s.viewScene,s.viewCamera)}catch{}}finally{a.setRenderTarget(u,y,b)}},T=()=>new Promise(P=>requestAnimationFrame(P));try{let P=0;const F=tl.length*2+(t?v.length:0)+1,S=()=>e(Math.min(1,++P/F));for(const B of tl)l.position.set(...B.pos),l.lookAt(...B.look),l.updateMatrixWorld(!0),await w(),S(),n&&(s.step(),await T(),s.step(),await T()),S();l.position.copy(c.pos),l.quaternion.copy(c.quat),l.fov=c.fov,l.updateProjectionMatrix(),l.updateMatrixWorld(!0);const M=[],D=s.registry.peek?.("render");D&&typeof D.prewarmMaterials=="function"&&M.push(D);for(const B of s.registry.ordered??[])B!==D&&(G0.has(B.constructor?.id)||typeof B.prewarmMaterials=="function"&&M.push(B));const O={};for(const B of M){const W=B.constructor?.id??"?";try{const Y=B===D?{post:!0,shadow:W0}:s.ctx;O[W]=await B.prewarmMaterials(Y)??{ok:!0}}catch(Y){O[W]={ok:!1,reason:String(Y?.message??Y)}}}s.__prewarmHooks=O;for(const B of t?v:[]){try{B()}catch{}s.step(),await T(),await w(),s.step(),await T(),S()}S()}finally{for(const P of t?[()=>s.ctx.peek("fx")?.debugBurst?.("none"),()=>s.ctx.peek("weapons")?.debugPose?.("idle"),()=>s.ctx.peek("ui")?.debugState?.("clean"),()=>s.ctx.peek("ai")?.debugStage?.("none")]:[])try{P()}catch{}l.position.copy(c.pos),l.quaternion.copy(c.quat),l.fov=c.fov,l.updateProjectionMatrix(),l.updateMatrixWorld(!0),Object.assign(s.time,f),d.s0=m.s0,d.s1=m.s1,d.s2=m.s2,d.s3=m.s3,d._spare=m.spare,s._accum=g,s._last=performance.now(),a.setRenderTarget(u,y,b),p.dispose()}const A=a.info.programs?.length??0;return{ok:!0,hooks:s.__prewarmHooks,ms:Math.round(performance.now()-i),programsBefore:o,programsAfter:A,compiled:A-o,parallel:!!a.getContext().getExtension("KHR_parallel_shader_compile")}}const Is=new URLSearchParams(location.search),Ia=Is.get("capture")==="1",Ol=Ia&&Is.get("lockstep")==="1",q0=wm({quality:Is.get("q")??"ultra",deterministic:Ia}),Y0=document.getElementById("game"),bi=new ym({canvas:Y0,config:q0});bi.add(b0).add(C0).add(P0).add(D0).add(U0).add(I0).add(F0).add(N0).add(z0).add(k0).add(V0);try{await bi.init()}catch(s){throw console.error("[boot] init failed",s),document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;inset:0;padding:2rem;color:#f66;background:#000;
       font:12px/1.5 ui-monospace,monospace;overflow:auto;z-index:9999;white-space:pre-wrap">
BOOT FAILURE

${s.stack??s.message}</pre>`),s}const j0=H0(bi,{capture:Ia,lockstep:Ol}),Bl=Is.get("prewarm")==="0"?{ok:!1,reason:"disabled by ?prewarm=0"}:await X0(bi);console.info("[boot] prewarm",Bl);window.__PREWARM__=Bl;bi.start();const nl=3;if(Ol)await j0.pump(nl),window.__READY__=!0;else{let s=0;const e=()=>{if(++s>=nl){window.__READY__=!0;return}requestAnimationFrame(e)};requestAnimationFrame(e)}window.__ENGINE__=bi;
//# sourceMappingURL=index-BMy3Ms9t.js.map
