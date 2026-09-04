(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="180",gc=0,ca=1,vc=2,Rl=1,Cl=2,Sn=3,An=0,Dt=1,dn=2,pn=0,Kn=1,ha=2,ua=3,da=4,_c=5,jn=100,xc=101,wc=102,Mc=103,Sc=104,yc=200,bc=201,Ec=202,Tc=203,Vr=204,Hr=205,Ac=206,Rc=207,Cc=208,Pc=209,Dc=210,Lc=211,Uc=212,Ic=213,Fc=214,Gr=0,Wr=1,Xr=2,bi=3,qr=4,Yr=5,jr=6,$r=7,Pl=0,Nc=1,Oc=2,En=0,Bc=1,kc=2,zc=3,Vc=4,Hc=5,Gc=6,Wc=7,Dl=300,Ei=301,Ti=302,Bs=303,Kr=304,Hs=306,Zn=1e3,Ft=1001,Zr=1002,ft=1003,Xc=1004,as=1005,rt=1006,Js=1007,an=1008,Kt=1009,Ll=1010,Ul=1011,Ki=1012,No=1013,Jn=1014,Wt=1015,qt=1016,Oo=1017,Bo=1018,Zi=1020,Il=35902,Fl=35899,Nl=1021,Ol=1022,wt=1023,Ji=1026,Qi=1027,is=1028,ko=1029,Ri=1030,zo=1031,Vo=1033,Us=33776,Is=33777,Fs=33778,Ns=33779,Jr=35840,Qr=35841,eo=35842,to=35843,no=36196,io=37492,so=37496,ro=37808,oo=37809,ao=37810,lo=37811,co=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,vo=37819,_o=37820,xo=37821,wo=36492,Mo=36494,So=36495,yo=36283,bo=36284,Eo=36285,To=36286,qc=3200,Yc=3201,Bl=0,jc=1,rn="",Et="srgb",Nn="srgb-linear",ks="linear",Ke="srgb",ni=7680,fa=519,$c=512,Kc=513,Zc=514,kl=515,Jc=516,Qc=517,eh=518,th=519,pa=35044,Ao="300 es",fn=2e3,zs=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ma=1234567;const qi=Math.PI/180,es=180/Math.PI;function Pi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function Ho(s,e){return(s%e+e)%e}function nh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ih(s,e,t){return s!==e?(t-s)/(e-s):0}function Yi(s,e,t){return(1-t)*s+t*e}function sh(s,e,t,n){return Yi(s,e,1-Math.exp(-t*n))}function rh(s,e=1){return e-Math.abs(Ho(s,e*2)-e)}function oh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ah(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ch(s,e){return s+Math.random()*(e-s)}function hh(s){return s*(.5-Math.random())}function uh(s){s!==void 0&&(ma=s);let e=ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dh(s){return s*qi}function fh(s){return s*es}function ph(s){return(s&s-1)===0&&s!==0}function mh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vh(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _i(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zl={DEG2RAD:qi,RAD2DEG:es,generateUUID:Pi,clamp:Ve,euclideanModulo:Ho,mapLinear:nh,inverseLerp:ih,lerp:Yi,damp:sh,pingpong:rh,smoothstep:oh,smootherstep:ah,randInt:lh,randFloat:ch,randFloatSpread:hh,seededRandom:uh,degToRad:dh,radToDeg:fh,isPowerOfTwo:ph,ceilPowerOfTwo:mh,floorPowerOfTwo:gh,setQuaternionFromProperEuler:vh,normalize:Ct,denormalize:_i};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*v,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const E=Math.sqrt(M),A=Math.atan2(E,f*w);p=Math.sin(p*A)/E,a=Math.sin(a*A)/E}const _=a*w;if(l=l*p+d*_,c=c*p+m*_,h=h*p+g*_,u=u*p+v*_,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new D,ga=new Di;class ke{constructor(e,t,n,i,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],v=i[0],p=i[3],f=i[6],w=i[1],M=i[4],_=i[7],E=i[2],A=i[5],R=i[8];return r[0]=o*v+a*w+l*E,r[3]=o*p+a*M+l*A,r[6]=o*f+a*_+l*R,r[1]=c*v+h*w+u*E,r[4]=c*p+h*M+u*A,r[7]=c*f+h*_+u*R,r[2]=d*v+m*w+g*E,r[5]=d*p+m*M+g*A,r[8]=d*f+m*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(er.makeScale(e,t)),this}rotate(e){return this.premultiply(er.makeRotation(-e)),this}translate(e,t){return this.premultiply(er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const er=new ke;function Vl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _h(){const s=Vs("canvas");return s.style.display="block",s}const va={};function ts(s){s in va||(va[s]=!0,console.warn(s))}function xh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const _a=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xa=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wh(){const s={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ke&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rn?ks:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Nn]:{primaries:e,whitePoint:n,transfer:ks,toXYZ:_a,fromXYZ:xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:_a,fromXYZ:xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),s}const qe=wh();function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Mh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ii===void 0&&(ii=Vs("canvas")),ii.width=e.width,ii.height=e.height;const i=ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tr(i[o].image)):r.push(tr(i[o]))}else r=tr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function tr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;const nr=new D;class Tt extends Ci{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Ft,i=Ft,r=rt,o=an,a=wt,l=Kt,c=Tt.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Pi(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nr).x}get height(){return this.source.getSize(nr).y}get depth(){return this.source.getSize(nr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Dl;Tt.DEFAULT_ANISOTROPY=1;class Te{constructor(e=0,t=0,n=0,i=1){Te.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(m+1)/2,E=(f+1)/2,A=(h+d)/4,R=(u+v)/4,L=(g+p)/4;return M>_&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=R/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=L/r),this.set(n,i,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Te(0,0,e,t),this.scissorTest=!1,this.viewport=new Te(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Tt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Go(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wo extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eh extends Zt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Wo(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Hl extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),cs.subVectors(this.max,Ni),si.subVectors(e.a,Ni),ri.subVectors(e.b,Ni),oi.subVectors(e.c,Ni),Rn.subVectors(ri,si),Cn.subVectors(oi,ri),zn.subVectors(si,oi);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-zn.z,zn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,zn.z,0,-zn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-zn.y,zn.x,0];return!ir(t,si,ri,oi,cs)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,si,ri,oi,cs))?!1:(hs.crossVectors(Rn,Cn),t=[hs.x,hs.y,hs.z],ir(t,si,ri,oi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,ls=new On,si=new D,ri=new D,oi=new D,Rn=new D,Cn=new D,zn=new D,Ni=new D,cs=new D,hs=new D,Vn=new D;function ir(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vn.fromArray(s,r);const a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Th=new On,Oi=new D,sr=new D;class ei{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(sr)),this.expandByPoint(Oi.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _n=new D,rr=new D,us=new D,Pn=new D,or=new D,ds=new D,ar=new D;class Gl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rr.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(us),a=Pn.dot(this.direction),l=-Pn.dot(us),c=Pn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rr).addScaledVector(us,d),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,r){or.subVectors(t,e),ds.subVectors(n,e),ar.crossVectors(or,ds);let o=this.direction.dot(ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,e);const l=a*this.direction.dot(ds.crossVectors(Pn,ds));if(l<0)return null;const c=a*this.direction.dot(or.cross(Pn));if(c<0||l+c>o)return null;const h=-a*Pn.dot(ar);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,i,r,o,a,l,c,h,u,d,m,g,v,p){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,m,g,v,p)}set(e,t,n,i,r,o,a,l,c,h,u,d,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,Rh)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Dn.crossVectors(n,kt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Dn.crossVectors(n,kt)),Dn.normalize(),fs.crossVectors(kt,Dn),i[0]=Dn.x,i[4]=fs.x,i[8]=kt.x,i[1]=Dn.y,i[5]=fs.y,i[9]=kt.y,i[2]=Dn.z,i[6]=fs.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],w=n[3],M=n[7],_=n[11],E=n[15],A=i[0],R=i[4],L=i[8],b=i[12],y=i[1],U=i[5],B=i[9],k=i[13],W=i[2],q=i[6],X=i[10],ee=i[14],P=i[3],Z=i[7],re=i[11],ce=i[15];return r[0]=o*A+a*y+l*W+c*P,r[4]=o*R+a*U+l*q+c*Z,r[8]=o*L+a*B+l*X+c*re,r[12]=o*b+a*k+l*ee+c*ce,r[1]=h*A+u*y+d*W+m*P,r[5]=h*R+u*U+d*q+m*Z,r[9]=h*L+u*B+d*X+m*re,r[13]=h*b+u*k+d*ee+m*ce,r[2]=g*A+v*y+p*W+f*P,r[6]=g*R+v*U+p*q+f*Z,r[10]=g*L+v*B+p*X+f*re,r[14]=g*b+v*k+p*ee+f*ce,r[3]=w*A+M*y+_*W+E*P,r[7]=w*R+M*U+_*q+E*Z,r[11]=w*L+M*B+_*X+E*re,r[15]=w*b+M*k+_*ee+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*m-n*l*m)+v*(+t*l*m-t*c*d+r*o*d-i*o*m+i*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],w=u*p*c-v*d*c+v*l*m-a*p*m-u*l*f+a*d*f,M=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,_=h*v*c-g*u*c+g*a*m-o*v*m-h*a*f+o*u*f,E=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,A=t*w+n*M+i*_+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=w*R,e[1]=(v*d*r-u*p*r-v*i*m+n*p*m+u*i*f-n*d*f)*R,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*f+n*l*f)*R,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*m-n*l*m)*R,e[4]=M*R,e[5]=(h*p*r-g*d*r+g*i*m-t*p*m-h*i*f+t*d*f)*R,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*f-t*l*f)*R,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*m+t*l*m)*R,e[8]=_*R,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*f-t*u*f)*R,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*R,e[12]=E*R,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*p+t*u*p)*R,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*p-t*a*p)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,v=o*h,p=o*u,f=a*u,w=l*c,M=l*h,_=l*u,E=n.x,A=n.y,R=n.z;return i[0]=(1-(v+f))*E,i[1]=(m+_)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(m-_)*A,i[5]=(1-(d+f))*A,i[6]=(p+w)*A,i[7]=0,i[8]=(g+M)*R,i[9]=(p-w)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ai.set(i[0],i[1],i[2]).length();const o=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/r,h=1/o,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=fn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===fn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=fn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===fn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===zs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new D,tn=new Ne,Ah=new D(0,0,0),Rh=new D(1,1,1),Dn=new D,fs=new D,kt=new D,wa=new Ne,Ma=new Di;class mn{constructor(e=0,t=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const Sa=new D,li=new Di,xn=new Ne,ps=new D,Bi=new D,Ph=new D,Dh=new Di,ya=new D(1,0,0),ba=new D(0,1,0),Ea=new D(0,0,1),Ta={type:"added"},Lh={type:"removed"},ci={type:"childadded",child:null},lr={type:"childremoved",child:null};class pt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new D,t=new mn,n=new Di,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ke}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(ba,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return Sa.copy(e).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(ba,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Bi,ps,this.up):xn.lookAt(ps,Bi,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(xn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ta),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lh),lr.child=e,this.dispatchEvent(lr),lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ta),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new D,wn=new D,cr=new D,Mn=new D,hi=new D,ui=new D,Aa=new D,hr=new D,ur=new D,dr=new D,fr=new Te,pr=new Te,mr=new Te;class on{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),wn.subVectors(n,t),cr.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(wn),l=nn.dot(cr),c=wn.dot(wn),h=wn.dot(cr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return fr.setScalar(0),pr.setScalar(0),mr.setScalar(0),fr.fromBufferAttribute(e,t),pr.fromBufferAttribute(e,n),mr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fr,r.x),o.addScaledVector(pr,r.y),o.addScaledVector(mr,r.z),o}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),wn.subVectors(e,t),nn.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),nn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(r,n),hr.subVectors(e,n);const l=hi.dot(hr),c=ui.dot(hr);if(l<=0&&c<=0)return t.copy(n);ur.subVectors(e,i);const h=hi.dot(ur),u=ui.dot(ur);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(hi,o);dr.subVectors(e,r);const m=hi.dot(dr),g=ui.dot(dr);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ui,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Aa.subVectors(r,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(Aa,a);const f=1/(p+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},ms={h:0,s:0,l:0};function gr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Ho(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gr(o,r,e+1/3),this.g=gr(o,r,e),this.b=gr(o,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return qe.workingToColorSpace(bt.copy(this),e),Math.round(Ve(bt.r*255,0,255))*65536+Math.round(Ve(bt.g*255,0,255))*256+Math.round(Ve(bt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,r=bt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Et){qe.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(ms);const n=Yi(Ln.h,ms.h,t),i=Yi(Ln.s,ms.s,t),r=Yi(Ln.l,ms.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new He;He.NAMES=Wl;let Uh=0;class ss extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Kn,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Hr,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Hr&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qo extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yn=Ih();function Ih(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Fh(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ve(s,-65504,65504),yn.floatView[0]=s;const e=yn.uint32View[0],t=e>>23&511;return yn.baseTable[t]+((e&8388607)>>yn.shiftTable[t])}function Nh(s){const e=s>>10;return yn.uint32View[0]=yn.mantissaTable[yn.offsetTable[e]+(s&1023)]+yn.exponentTable[e],yn.floatView[0]}class Ro{static toHalfFloat(e){return Fh(e)}static fromHalfFloat(e){return Nh(e)}}const ut=new D,gs=new ue;let Oh=0;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=Wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}}class Xl extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bh=0;const $t=new Ne,vr=new pt,di=new D,zt=new On,ki=new On,_t=new D;class ln extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)?ql:Xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(zt.min,ki.min),zt.expandByPoint(_t),_t.addVectors(zt.max,ki.max),zt.expandByPoint(_t)):(zt.expandByPoint(ki.min),zt.expandByPoint(ki.max))}zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_t.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(e,c),_t.add(di)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,d=new ue,m=new ue,g=new ue,v=new D,p=new D;function f(L,b,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(U),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(U),a[L].add(v),a[b].add(v),a[y].add(v),l[L].add(p),l[b].add(p),l[y].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,b=w.length;L<b;++L){const y=w[L],U=y.start,B=y.count;for(let k=U,W=U+B;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new D,_=new D,E=new D,A=new D;function R(L){E.fromBufferAttribute(i,L),A.copy(E);const b=a[L];M.copy(b),M.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(A,b);const U=_.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,U)}for(let L=0,b=w.length;L<b;++L){const y=w[L],U=y.start,B=y.count;for(let k=U,W=U+B;k<W;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new Ne,Hn=new Gl,vs=new ei,Ca=new D,_s=new D,xs=new D,ws=new D,_r=new D,Ms=new D,Pa=new D,Ss=new D;class Se extends pt{constructor(e=new ln,t=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(_r.fromBufferAttribute(u,e),o?Ms.addScaledVector(_r,h):Ms.addScaledVector(_r.sub(t),h))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(vs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(vs,Ca)===null||Hn.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(Ra.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=w,E=M;_<E;_+=3){const A=a.getX(_),R=a.getX(_+1),L=a.getX(_+2);i=ys(this,f,e,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const w=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);i=ys(this,o,e,n,c,h,u,w,M,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=w,E=M;_<E;_+=3){const A=_,R=_+1,L=_+2;i=ys(this,f,e,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const w=p,M=p+1,_=p+2;i=ys(this,o,e,n,c,h,u,w,M,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function kh(s,e,t,n,i,r,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===An,a),l===null)return null;Ss.copy(a),Ss.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:s}}function ys(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,_s),s.getVertexPosition(l,xs),s.getVertexPosition(c,ws);const h=kh(s,e,t,n,_s,xs,ws,Pa);if(h){const u=new D;on.getBarycoord(Pa,_s,xs,ws,u),i&&(h.uv=on.getInterpolatedAttribute(i,a,l,c,u,new ue)),r&&(h.uv1=on.getInterpolatedAttribute(r,a,l,c,u,new ue)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};on.getNormal(_s,xs,ws,d.normal),h.face=d,h.barycoord=u}return h}class Jt extends ln{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(v,p,f,w,M,_,E,A,R,L,b){const y=_/R,U=E/L,B=_/2,k=E/2,W=A/2,q=R+1,X=L+1;let ee=0,P=0;const Z=new D;for(let re=0;re<X;re++){const ce=re*U-k;for(let Re=0;Re<q;Re++){const Qe=Re*y-B;Z[v]=Qe*w,Z[p]=ce*M,Z[f]=W,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[p]=0,Z[f]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Re/R),u.push(1-re/L),ee+=1}}for(let re=0;re<L;re++)for(let ce=0;ce<R;ce++){const Re=d+ce+q*re,Qe=d+ce+q*(re+1),nt=d+(ce+1)+q*(re+1),Ye=d+(ce+1)+q*re;l.push(Re,Qe,Ye),l.push(Qe,nt,Ye),P+=6}a.addGroup(m,P,b),m+=P,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const n=Ai(s[t]);for(const i in n)e[i]=n[i]}return e}function zh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Vh={clone:Ai,merge:Pt};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yo extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new D,Da=new ue,La=new ue;class It extends Yo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Da,La),t.subVectors(La,Da)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Wh extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new It(fi,pi,e,t);i.layers=this.layers,this.add(i);const r=new It(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new It(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new It(fi,pi,e,t);a.layers=this.layers,this.add(a);const l=new It(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new It(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jl extends Tt{constructor(e=[],t=Ei,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xh extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jt(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:pn});r.uniforms.tEquirect.value=t;const o=new Se(i,r),a=t.minFilter;return t.minFilter===an&&(t.minFilter=rt),new Wh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Nt extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qn extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jo extends Tt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ft,h=ft,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new Ne,Ia=new Ne,bs=[],Fa=new On,Yh=new Ne,zi=new Se,Vi=new ei;class Na extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Fa.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(Fa)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Vi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mi),Ia.multiplyMatrices(n,mi),zi.matrixWorld=Ia,zi.raycast(e,bs);for(let o=0,a=bs.length;o<a;o++){const l=bs[o];l.instanceId=r,l.object=this,t.push(l)}bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(i*this.count),i,this.count,is,Wt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wr=new D,jh=new D,$h=new ke;class qn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wr.subVectors(n,t).cross(jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$h.getNormalMatrix(e),i=this.coplanarPoint(wr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ei,Kh=new ue(.5,.5),Es=new D;class $o{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],m=r[7],g=r[8],v=r[9],p=r[10],f=r[11],w=r[12],M=r[13],_=r[14],E=r[15];if(i[0].setComponents(c-o,m-h,f-g,E-w).normalize(),i[1].setComponents(c+o,m+h,f+g,E+w).normalize(),i[2].setComponents(c+a,m+u,f+v,E+M).normalize(),i[3].setComponents(c-a,m-u,f-v,E-M).normalize(),n)i[4].setComponents(l,d,p,_).normalize(),i[5].setComponents(c-l,m-d,f-p,E-_).normalize();else if(i[4].setComponents(c-l,m-d,f-p,E-_).normalize(),t===fn)i[5].setComponents(c+l,m+d,f+p,E+_).normalize();else if(t===zs)i[5].setComponents(l,d,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=Kh.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Es.x=i.normal.x>0?e.max.x:e.min.x,Es.y=i.normal.y>0?e.max.y:e.min.y,Es.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gs extends Tt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $l extends Tt{constructor(e,t,n=Jn,i,r,o,a=ft,l=ft,c,h=Ji,u=1){if(h!==Ji&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kl extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){const w=f*d-o;for(let M=0;M<c;M++){const _=M*u-r;g.push(_,-w,0),v.push(0,0,1),p.push(M/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const M=w+c*f,_=w+c*(f+1),E=w+1+c*(f+1),A=w+1+c*f;m.push(M,_,A),m.push(_,E,A)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}class ns extends ln{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){const w=[],M=f/n;let _=0;f===0&&o===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(i+A*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(A+_,1-M),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const M=h[f][w+1],_=h[f][w],E=h[f+1][w],A=h[f+1][w+1];(f!==0||o>0)&&m.push(M,_,A),(f!==n-1||l<Math.PI)&&m.push(_,E,A)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zh extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jh extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ws extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zl extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Mr=new Ne,Oa=new D,Ba=new D;class Jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),Mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ka=new Ne,Hi=new D,Sr=new D;class Qh extends Jl{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hi),Sr.copy(n.position),Sr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sr),n.updateMatrixWorld(),i.makeTranslation(-Hi.x,-Hi.y,-Hi.z),ka.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka,n.coordinateSystem,n.reversedDepth)}}class Ko extends Ws{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zo extends Yo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eu extends Jl{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xi extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tu extends Ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nu extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const za=new Ne;class iu{constructor(e,t,n=0,i=1/0){this.ray=new Gl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return za.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(za),this}intersectObject(e,t=!0,n=[]){return Co(e,this,n,t),n.sort(Va),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Co(e[i],this,n,t);return n.sort(Va),n}}function Va(s,e){return s.distance-e.distance}function Co(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Co(r[o],e,t,!0)}}function Ha(s,e,t,n){const i=su(n);switch(t){case Nl:return s*e;case is:return s*e/i.components*i.byteLength;case ko:return s*e/i.components*i.byteLength;case Ri:return s*e*2/i.components*i.byteLength;case zo:return s*e*2/i.components*i.byteLength;case Ol:return s*e*3/i.components*i.byteLength;case wt:return s*e*4/i.components*i.byteLength;case Vo:return s*e*4/i.components*i.byteLength;case Us:case Is:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Ns:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qr:case to:return Math.max(s,16)*Math.max(e,8)/4;case Jr:case eo:return Math.max(s,8)*Math.max(e,8)/2;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case lo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ho:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case po:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case go:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wo:case Mo:case So:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yo:case bo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Eo:case To:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function su(s){switch(s){case Kt:case Ll:return{byteLength:1,components:1};case Ki:case Ul:case qt:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case Jn:case No:case Wt:return{byteLength:4,components:1};case Il:case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ql(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ru(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
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
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,du=`#ifdef USE_AOMAP
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
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
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
#endif`,mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_u=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xu=`#ifdef USE_IRIDESCENCE
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
#endif`,wu=`#ifdef USE_BUMPMAP
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
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cu=`#define PI 3.141592653589793
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
} // validated`,Pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Du=`vec3 transformedNormal = objectNormal;
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
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yu=`#ifdef USE_GRADIENTMAP
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
}`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zu=`uniform bool receiveShadow;
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
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
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
#endif`,sd=`struct PhysicalMaterial {
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
}`,rd=`
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,md=`#if defined( USE_POINTS_UV )
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
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,ef=`#ifdef USE_TRANSMISSION
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`#include <common>
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
}`,ff=`#if DEPTH_PACKING == 3200
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
}`,pf=`#define DISTANCE
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
}`,mf=`#define DISTANCE
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`uniform float scale;
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
}`,xf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Sf=`#define LAMBERT
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
}`,yf=`#define LAMBERT
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
}`,bf=`#define MATCAP
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
}`,Ef=`#define MATCAP
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
}`,Tf=`#define NORMAL
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
}`,Af=`#define NORMAL
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
}`,Rf=`#define PHONG
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
}`,Cf=`#define PHONG
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
}`,Pf=`#define STANDARD
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
}`,Df=`#define STANDARD
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
}`,Lf=`#define TOON
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
}`,Uf=`#define TOON
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
}`,If=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,Of=`uniform vec3 color;
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
}`,Bf=`uniform float rotation;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:ou,alphahash_pars_fragment:au,alphamap_fragment:lu,alphamap_pars_fragment:cu,alphatest_fragment:hu,alphatest_pars_fragment:uu,aomap_fragment:du,aomap_pars_fragment:fu,batching_pars_vertex:pu,batching_vertex:mu,begin_vertex:gu,beginnormal_vertex:vu,bsdfs:_u,iridescence_fragment:xu,bumpmap_pars_fragment:wu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:yu,clipping_planes_vertex:bu,color_fragment:Eu,color_pars_fragment:Tu,color_pars_vertex:Au,color_vertex:Ru,common:Cu,cube_uv_reflection_fragment:Pu,defaultnormal_vertex:Du,displacementmap_pars_vertex:Lu,displacementmap_vertex:Uu,emissivemap_fragment:Iu,emissivemap_pars_fragment:Fu,colorspace_fragment:Nu,colorspace_pars_fragment:Ou,envmap_fragment:Bu,envmap_common_pars_fragment:ku,envmap_pars_fragment:zu,envmap_pars_vertex:Vu,envmap_physical_pars_fragment:Ju,envmap_vertex:Hu,fog_vertex:Gu,fog_pars_vertex:Wu,fog_fragment:Xu,fog_pars_fragment:qu,gradientmap_pars_fragment:Yu,lightmap_pars_fragment:ju,lights_lambert_fragment:$u,lights_lambert_pars_fragment:Ku,lights_pars_begin:Zu,lights_toon_fragment:Qu,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:od,lights_fragment_end:ad,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:dd,map_pars_fragment:fd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:vd,morphinstance_vertex:_d,morphcolor_vertex:xd,morphnormal_vertex:wd,morphtarget_pars_vertex:Md,morphtarget_vertex:Sd,normal_fragment_begin:yd,normal_fragment_maps:bd,normal_pars_fragment:Ed,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Ld,opaque_fragment:Ud,packing:Id,premultiplied_alpha_fragment:Fd,project_vertex:Nd,dithering_fragment:Od,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:jd,specularmap_fragment:$d,specularmap_pars_fragment:Kd,tonemapping_fragment:Zd,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:ef,uv_pars_fragment:tf,uv_pars_vertex:nf,uv_vertex:sf,worldpos_vertex:rf,background_vert:of,background_frag:af,backgroundCube_vert:lf,backgroundCube_frag:cf,cube_vert:hf,cube_frag:uf,depth_vert:df,depth_frag:ff,distanceRGBA_vert:pf,distanceRGBA_frag:mf,equirect_vert:gf,equirect_frag:vf,linedashed_vert:_f,linedashed_frag:xf,meshbasic_vert:wf,meshbasic_frag:Mf,meshlambert_vert:Sf,meshlambert_frag:yf,meshmatcap_vert:bf,meshmatcap_frag:Ef,meshnormal_vert:Tf,meshnormal_frag:Af,meshphong_vert:Rf,meshphong_frag:Cf,meshphysical_vert:Pf,meshphysical_frag:Df,meshtoon_vert:Lf,meshtoon_frag:Uf,points_vert:If,points_frag:Ff,shadow_vert:Nf,shadow_frag:Of,sprite_vert:Bf,sprite_frag:kf},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},un={basic:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Pt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Pt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Pt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Pt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Pt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Pt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Pt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Pt([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};un.physical={uniforms:Pt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ts={r:0,b:0,g:0},Wn=new mn,zf=new Ne;function Vf(s,e,t,n,i,r,o){const a=new He(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function v(M){let _=!1;const E=g(M);E===null?f(a,l):E&&E.isColor&&(f(E,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===Hs)?(h===void 0&&(h=new Se(new Jt(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Ai(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wn.copy(_.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zf.makeRotationFromEuler(Wn)),h.material.toneMapped=qe.getTransfer(E.colorSpace)!==Ke,(u!==E||d!==E.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Se(new Li(2,2),new Qt({name:"BackgroundMaterial",uniforms:Ai(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,_){M.getRGB(Ts,Yl(s)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,_,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:v,addToRenderList:p,dispose:w}}function Hf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,U,B,k,W){let q=!1;const X=u(k,B,U);r!==X&&(r=X,c(r.object)),q=m(y,k,B,W),q&&g(y,k,B,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(y,U,B,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,U,B){const k=B.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[U.id];q===void 0&&(q={},W[U.id]=q);let X=q[k];return X===void 0&&(X=d(l()),q[k]=X),X}function d(y){const U=[],B=[],k=[];for(let W=0;W<t;W++)U[W]=0,B[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,U,B,k){const W=r.attributes,q=U.attributes;let X=0;const ee=B.getAttributes();for(const P in ee)if(ee[P].location>=0){const re=W[P];let ce=q[P];if(ce===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(y,U,B,k){const W={},q=U.attributes;let X=0;const ee=B.getAttributes();for(const P in ee)if(ee[P].location>=0){let re=q[P];re===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),W[P]=ce,X++}r.attributes=W,r.attributesNum=X,r.index=k}function v(){const y=r.newAttributes;for(let U=0,B=y.length;U<B;U++)y[U]=0}function p(y){f(y,0)}function f(y,U){const B=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;B[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),W[y]!==U&&(s.vertexAttribDivisor(y,U),W[y]=U)}function w(){const y=r.newAttributes,U=r.enabledAttributes;for(let B=0,k=U.length;B<k;B++)U[B]!==y[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function M(y,U,B,k,W,q,X){X===!0?s.vertexAttribIPointer(y,U,B,W,q):s.vertexAttribPointer(y,U,B,k,W,q)}function _(y,U,B,k){v();const W=k.attributes,q=B.getAttributes(),X=U.defaultAttributeValues;for(const ee in q){const P=q[ee];if(P.location>=0){let Z=W[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const re=Z.normalized,ce=Z.itemSize,Re=e.get(Z);if(Re===void 0)continue;const Qe=Re.buffer,nt=Re.type,Ye=Re.bytesPerElement,Y=nt===s.INT||nt===s.UNSIGNED_INT||Z.gpuType===No;if(Z.isInterleavedBufferAttribute){const K=Z.data,pe=K.stride,Ue=Z.offset;if(K.isInstancedInterleavedBuffer){for(let be=0;be<P.locationSize;be++)f(P.location+be,K.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<P.locationSize;be++)p(P.location+be);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let be=0;be<P.locationSize;be++)M(P.location+be,ce/P.locationSize,nt,re,pe*Ye,(Ue+ce/P.locationSize*be)*Ye,Y)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<P.locationSize;K++)f(P.location+K,Z.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<P.locationSize;K++)p(P.location+K);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let K=0;K<P.locationSize;K++)M(P.location+K,ce/P.locationSize,nt,re,ce*Ye,ce/P.locationSize*K*Ye,Y)}}else if(X!==void 0){const re=X[ee];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(P.location,re);break;case 3:s.vertexAttrib3fv(P.location,re);break;case 4:s.vertexAttrib4fv(P.location,re);break;default:s.vertexAttrib1fv(P.location,re)}}}}w()}function E(){L();for(const y in n){const U=n[y];for(const B in U){const k=U[B];for(const W in k)h(k[W].object),delete k[W];delete U[B]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const U=n[y.id];for(const B in U){const k=U[B];for(const W in k)h(k[W].object),delete k[W];delete U[B]}delete n[y.id]}function R(y){for(const U in n){const B=n[U];if(B[y.id]===void 0)continue;const k=B[y.id];for(const W in k)h(k[W].object),delete k[W];delete B[y.id]}}function L(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Gf(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==wt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wt&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function Xf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new qn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const w=r?0:n,M=w*4;let _=f.clippingState||null;l.value=_,_=h(g,d,M,m);for(let E=0;E!==M;++E)_[E]=t[E];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,_=m;M!==v;++M,_+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function qf(s){let e=new WeakMap;function t(o,a){return a===Bs?o.mapping=Ei:a===Kr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bs||a===Kr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xh(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Mi=4,Ga=[.125,.215,.35,.446,.526,.582],$n=20,yr=new Zo,Wa=new He;let br=null,Er=0,Tr=0,Ar=!1;const Yn=(1+Math.sqrt(5))/2,gi=1/Yn,Xa=[new D(-Yn,gi,0),new D(Yn,gi,0),new D(-gi,0,Yn),new D(gi,0,Yn),new D(0,Yn,-gi),new D(0,Yn,gi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Yf=new D;class Po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Yf}=r;br=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(br,Er,Tr),this._renderer.xr.enabled=Ar,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),br=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rt,minFilter:rt,generateMipmaps:!1,type:qt,format:wt,colorSpace:Nn,depthBuffer:!1},i=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(r)),this._blurMaterial=$f(r,e,t)}return i}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,i,r){const l=new It(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Wa),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new qo({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),p=new Se(new Jt,v);let f=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,f=!0):(v.color.copy(Wa),f=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const E=this._cubeSize;As(i,_*E,M>2?E:0,E,E),u.setRenderTarget(i),f&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xa[(i-r-1)%Xa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Se(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*$n-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):$n;p>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const f=[];let w=0;for(let R=0;R<$n;++R){const L=R/v,b=Math.exp(-L*L/2);f.push(b),R===0?w+=b:R<p&&(w+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[i],E=3*_*(i>M-Mi?i-M+Mi:0),A=4*(this._cubeSize-_);As(t,E,A,3*_,2*_),l.setRenderTarget(t),l.render(u,yr)}}function jf(s){const e=[],t=[],n=[];let i=s;const r=s-Mi+1+Ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Mi?l=Ga[o-s+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,w=new Float32Array(v*g*m),M=new Float32Array(p*g*m),_=new Float32Array(f*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,L=A>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];w.set(b,v*g*A),M.set(d,p*g*A);const y=[A,A,A,A,A,A];_.set(y,f*g*A)}const E=new ln;E.setAttribute("position",new Xt(w,v)),E.setAttribute("uv",new Xt(M,p)),E.setAttribute("faceIndex",new Xt(_,f)),e.push(E),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qa(s,e,t){const n=new Zt(s,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function $f(s,e,t){const n=new Float32Array($n),i=new D(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ya(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ja(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function Kf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bs||l===Kr,h=l===Ei||l===Ti;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Po(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new Po(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jf(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let M=0,_=w.length;M<_;M+=3){const E=w[M+0],A=w[M+1],R=w[M+2];d.push(E,A,A,R,R,E)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,_=w.length/3-1;M<_;M+=3){const E=M+0,A=M+1,R=M+2;d.push(E,A,A,R,R,E)}}else return;const p=new(Vl(d)?ql:Xl)(d,1);p.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qf(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){s.drawElements(n,m,r,d*o),t.update(m,n,1)}function c(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,d*o,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function u(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*v[w];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ep(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tp(s,e,t){const n=new WeakMap,i=new Te;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=a.attributes.position.count*M,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*E*4*u),R=new Wo(A,_,E,u);R.type=Wt,R.needsUpdate=!0;const L=M*4;for(let y=0;y<u;y++){const U=p[y],B=f[y],k=w[y],W=_*E*4*y;for(let q=0;q<U.count;q++){const X=q*L;m===!0&&(i.fromBufferAttribute(U,q),A[W+X+0]=i.x,A[W+X+1]=i.y,A[W+X+2]=i.z,A[W+X+3]=0),g===!0&&(i.fromBufferAttribute(B,q),A[W+X+4]=i.x,A[W+X+5]=i.y,A[W+X+6]=i.z,A[W+X+7]=0),v===!0&&(i.fromBufferAttribute(k,q),A[W+X+8]=i.x,A[W+X+9]=i.y,A[W+X+10]=i.z,A[W+X+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new ue(_,E)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function np(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ec=new Tt,$a=new $l(1,1),tc=new Wo,nc=new Hl,ic=new jl,Ka=[],Za=[],Ja=new Float32Array(16),Qa=new Float32Array(9),el=new Float32Array(4);function Ui(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ka[i];if(r===void 0&&(r=new Float32Array(i),Ka[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xs(s,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ip(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function ap(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;el.set(n),s.uniformMatrix2fv(this.addr,!1,el),gt(t,n)}}function lp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Qa.set(n),s.uniformMatrix3fv(this.addr,!1,Qa),gt(t,n)}}function cp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Ja.set(n),s.uniformMatrix4fv(this.addr,!1,Ja),gt(t,n)}}function hp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function pp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function _p(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($a.compareFunction=kl,r=$a):r=ec,t.setTexture2D(e||r,i)}function xp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nc,i)}function wp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ic,i)}function Mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tc,i)}function Sp(s){switch(s){case 5126:return ip;case 35664:return sp;case 35665:return rp;case 35666:return op;case 35674:return ap;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return fp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Mp}}function yp(s,e){s.uniform1fv(this.addr,e)}function bp(s,e){const t=Ui(e,this.size,2);s.uniform2fv(this.addr,t)}function Ep(s,e){const t=Ui(e,this.size,3);s.uniform3fv(this.addr,t)}function Tp(s,e){const t=Ui(e,this.size,4);s.uniform4fv(this.addr,t)}function Ap(s,e){const t=Ui(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rp(s,e){const t=Ui(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cp(s,e){const t=Ui(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pp(s,e){s.uniform1iv(this.addr,e)}function Dp(s,e){s.uniform2iv(this.addr,e)}function Lp(s,e){s.uniform3iv(this.addr,e)}function Up(s,e){s.uniform4iv(this.addr,e)}function Ip(s,e){s.uniform1uiv(this.addr,e)}function Fp(s,e){s.uniform2uiv(this.addr,e)}function Np(s,e){s.uniform3uiv(this.addr,e)}function Op(s,e){s.uniform4uiv(this.addr,e)}function Bp(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ec,r[o])}function kp(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||nc,r[o])}function zp(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ic,r[o])}function Vp(s,e,t){const n=this.cache,i=e.length,r=Xs(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tc,r[o])}function Hp(s){switch(s){case 5126:return yp;case 35664:return bp;case 35665:return Ep;case 35666:return Tp;case 35674:return Ap;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Dp;case 35668:case 35672:return Lp;case 35669:case 35673:return Up;case 5125:return Ip;case 36294:return Fp;case 36295:return Np;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Vp}}class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sp(t.type)}}class Wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hp(t.type)}}class Xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function tl(s,e){s.seq.push(e),s.map[e.id]=e}function qp(s,e,t){const n=s.name,i=n.length;for(Rr.lastIndex=0;;){const r=Rr.exec(n),o=Rr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tl(t,c===void 0?new Gp(a,s,e):new Wp(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Xp(a),tl(t,u)),t=u}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);qp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function nl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Yp=37297;let jp=0;function $p(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const il=new ke;function Kp(s){qe._getMatrix(il,qe.workingColorSpace,s);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case ks:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$p(s.getShaderSource(e),a)}else return r}function Zp(s,e){const t=Kp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jp(s,e){let t;switch(e){case Bc:t="Linear";break;case kc:t="Reinhard";break;case zc:t="Cineon";break;case Vc:t="ACESFilmic";break;case Gc:t="AgX";break;case Wc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new D;function Qp(){qe.getLuminanceCoefficients(Rs);const s=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function tm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xi(s){return s!==""}function rl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(s){return s.replace(im,rm)}const sm=new Map;function rm(s,e){let t=Be[e];if(t===void 0){const n=sm.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(s){return s.replace(om,am)}function am(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ll(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function lm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function cm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case Ti:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function um(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Nc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function dm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fm(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lm(t),c=cm(t),h=hm(t),u=um(t),d=dm(t),m=em(t),g=tm(r),v=i.createProgram();let p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),f.length>0&&(f+=`
`)):(p=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),f=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Be.tonemapping_pars_fragment:"",t.toneMapping!==En?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Zp("linearToOutputTexel",t.outputColorSpace),Qp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Do(o),o=rl(o,t),o=ol(o,t),a=Do(a),a=rl(a,t),a=ol(a,t),o=al(o),a=al(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=w+p+o,_=w+f+a,E=nl(i,i.VERTEX_SHADER,M),A=nl(i,i.FRAGMENT_SHADER,_);i.attachShader(v,E),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(U){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(v)||"",k=i.getShaderInfoLog(E)||"",W=i.getShaderInfoLog(A)||"",q=B.trim(),X=k.trim(),ee=W.trim();let P=!0,Z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(P=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,E,A);else{const re=sl(i,E,"vertex"),ce=sl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+re+`
`+ce)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(X===""||ee==="")&&(Z=!1);Z&&(U.diagnostics={runnable:P,programLog:q,vertexShader:{log:X,prefix:p},fragmentShader:{log:ee,prefix:f}})}i.deleteShader(E),i.deleteShader(A),L=new Os(i,v),b=nm(i,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Yp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gm(e),t.set(e,n)),n}}class gm{constructor(e){this.id=pm++,this.code=e,this.usedTimes=0}}function vm(s,e,t,n,i,r,o){const a=new Xo,l=new mm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,U,B,k){const W=B.fog,q=k.geometry,X=b.isMeshStandardMaterial?B.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),P=ee&&ee.mapping===Hs?ee.image.height:null,Z=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=re!==void 0?re.length:0;let Re=0;q.morphAttributes.position!==void 0&&(Re=1),q.morphAttributes.normal!==void 0&&(Re=2),q.morphAttributes.color!==void 0&&(Re=3);let Qe,nt,Ye,Y;if(Z){const je=un[Z];Qe=je.vertexShader,nt=je.fragmentShader}else Qe=b.vertexShader,nt=b.fragmentShader,l.update(b),Ye=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const K=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,We=!!b.map,St=!!b.matcap,C=!!ee,it=!!b.aoMap,Fe=!!b.lightMap,De=!!b.bumpMap,ve=!!b.normalMap,st=!!b.displacementMap,_e=!!b.emissiveMap,ze=!!b.metalnessMap,vt=!!b.roughnessMap,ht=b.anisotropy>0,T=b.clearcoat>0,x=b.dispersion>0,O=b.iridescence>0,G=b.sheen>0,$=b.transmission>0,H=ht&&!!b.anisotropyMap,ye=T&&!!b.clearcoatMap,ie=T&&!!b.clearcoatNormalMap,xe=T&&!!b.clearcoatRoughnessMap,we=O&&!!b.iridescenceMap,te=O&&!!b.iridescenceThicknessMap,he=G&&!!b.sheenColorMap,Pe=G&&!!b.sheenRoughnessMap,Me=!!b.specularMap,ae=!!b.specularColorMap,Oe=!!b.specularIntensityMap,I=$&&!!b.transmissionMap,ne=$&&!!b.thicknessMap,se=!!b.gradientMap,fe=!!b.alphaMap,J=b.alphaTest>0,j=!!b.alphaHash,ge=!!b.extensions;let Ie=En;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const et={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:nt,defines:b.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Nn,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:St,envMap:C,envMapMode:C&&ee.mapping,envMapCubeUVHeight:P,aoMap:it,lightMap:Fe,bumpMap:De,normalMap:ve,displacementMap:d&&st,emissiveMap:_e,normalMapObjectSpace:ve&&b.normalMapType===jc,normalMapTangentSpace:ve&&b.normalMapType===Bl,metalnessMap:ze,roughnessMap:vt,anisotropy:ht,anisotropyMap:H,clearcoat:T,clearcoatMap:ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:x,iridescence:O,iridescenceMap:we,iridescenceThicknessMap:te,sheen:G,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:ae,specularIntensityMap:Oe,transmission:$,transmissionMap:I,thicknessMap:ne,gradientMap:se,opaque:b.transparent===!1&&b.blending===Kn&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:j,combine:b.combine,mapUv:We&&v(b.map.channel),aoMapUv:it&&v(b.aoMap.channel),lightMapUv:Fe&&v(b.lightMap.channel),bumpMapUv:De&&v(b.bumpMap.channel),normalMapUv:ve&&v(b.normalMap.channel),displacementMapUv:st&&v(b.displacementMap.channel),emissiveMapUv:_e&&v(b.emissiveMap.channel),metalnessMapUv:ze&&v(b.metalnessMap.channel),roughnessMapUv:vt&&v(b.roughnessMap.channel),anisotropyMapUv:H&&v(b.anisotropyMap.channel),clearcoatMapUv:ye&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(b.sheenRoughnessMap.channel),specularMapUv:Me&&v(b.specularMap.channel),specularColorMapUv:ae&&v(b.specularColorMap.channel),specularIntensityMapUv:Oe&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:ne&&v(b.thicknessMap.channel),alphaMapUv:fe&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ve||ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(We||fe),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&qe.getTransfer(b.map.colorSpace)===Ke,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&qe.getTransfer(b.emissiveMap.colorSpace)===Ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)y.push(U),y.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(w(y,b),M(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const y=g[b.type];let U;if(y){const B=un[y];U=Vh.clone(B.uniforms)}else U=b.uniforms;return U}function E(b,y){let U;for(let B=0,k=h.length;B<k;B++){const W=h[B];if(W.cacheKey===y){U=W,++U.usedTimes;break}}return U===void 0&&(U=new fm(s,y,b,r),h.push(U)),U}function A(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function _m(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,v,p){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function a(u,d,m,g,v,p){const f=o(u,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function l(u,d,m,g,v,p){const f=o(u,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||xm),n.length>1&&n.sort(d||cl),i.length>1&&i.sort(d||cl)}function h(){for(let u=e,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function wm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new hl,s.set(n,[o])):i>=r.length?(o=new hl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Mm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Sm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ym=0;function bm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Em(s){const e=new Mm,t=Sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Ne,o=new Ne;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,w=0,M=0,_=0,E=0,A=0,R=0;c.sort(bm);for(let b=0,y=c.length;b<y;b++){const U=c[b],B=U.color,k=U.intensity,W=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*k,u+=B.g*k,d+=B.b*k;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],k);R++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,P=t.get(U);P.shadowIntensity=ee.intensity,P.shadowBias=ee.bias,P.shadowNormalBias=ee.normalBias,P.shadowRadius=ee.radius,P.shadowMapSize=ee.mapSize,n.directionalShadow[m]=P,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=U.shadow.matrix,w++}n.directional[m]=X,m++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(B).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[v]=X;const ee=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,ee.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[v]=ee.matrix,U.castShadow){const P=t.get(U);P.shadowIntensity=ee.intensity,P.shadowBias=ee.bias,P.shadowNormalBias=ee.normalBias,P.shadowRadius=ee.radius,P.shadowMapSize=ee.mapSize,n.spotShadow[v]=P,n.spotShadowMap[v]=q,_++}v++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=X,p++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const ee=U.shadow,P=t.get(U);P.shadowIntensity=ee.intensity,P.shadowBias=ee.bias,P.shadowNormalBias=ee.normalBias,P.shadowRadius=ee.radius,P.shadowMapSize=ee.mapSize,P.shadowCameraNear=ee.camera.near,P.shadowCameraFar=ee.camera.far,n.pointShadow[g]=P,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=U.shadow.matrix,M++}n.point[g]=X,g++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(k),X.groundColor.copy(U.groundColor).multiplyScalar(k),n.hemi[f]=X,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==E||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=E,L.numLightProbes=R,n.version=ym++)}function l(c,h){let u=0,d=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const M=c[f];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),u++}else if(M.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function ul(s){const e=new Em(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tm(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ul(s),e.set(i,[a])):r>=o.length?(a=new ul(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
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
}`;function Cm(s,e,t){let n=new $o;const i=new ue,r=new ue,o=new Te,a=new Zh({depthPacking:Yc}),l=new Jh,c={},h=t.maxTextureSize,u={[An]:Dt,[Dt]:An,[dn]:dn},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Se(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let f=this.type;this.render=function(A,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),B=s.state;B.setBlending(pn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=f!==Sn&&this.type===Sn,W=f===Sn&&this.type!==Sn;for(let q=0,X=A.length;q<X;q++){const ee=A[q],P=ee.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const Z=P.getFrameExtents();if(i.multiply(Z),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,P.mapSize.y=r.y)),P.map===null||k===!0||W===!0){const ce=this.type!==Sn?{minFilter:ft,magFilter:ft}:{};P.map!==null&&P.map.dispose(),P.map=new Zt(i.x,i.y,ce),P.map.texture.name=ee.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const re=P.getViewportCount();for(let ce=0;ce<re;ce++){const Re=P.getViewport(ce);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),B.viewport(o),P.updateMatrices(ee,ce),n=P.getFrustum(),_(R,L,P.camera,ee,this.type)}P.isPointLightShadow!==!0&&this.type===Sn&&w(P,L),P.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(b,y,U)};function w(A,R){const L=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,L,m,v,null)}function M(A,R,L,b){let y=null;const U=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)y=U;else if(y=L.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=y.uuid,k=R.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let q=W[k];q===void 0&&(q=y.clone(),W[k]=q,R.addEventListener("dispose",E)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Sn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=s.properties.get(y);B.light=L}return y}function _(A,R,L,b,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const q=k.groups;for(let X=0,ee=q.length;X<ee;X++){const P=q[X],Z=W[P.materialIndex];if(Z&&Z.visible){const re=M(A,Z,b,y);A.onBeforeShadow(s,A,R,L,k,re,P),s.renderBufferDirect(L,null,k,re,A,P),A.onAfterShadow(s,A,R,L,k,re,P)}}}else if(W.visible){const q=M(A,W,b,y);A.onBeforeShadow(s,A,R,L,k,q,null),s.renderBufferDirect(L,null,k,q,A,null),A.onAfterShadow(s,A,R,L,k,q,null)}}const B=A.children;for(let k=0,W=B.length;k<W;k++)_(B[k],R,L,b,y)}function E(A){A.target.removeEventListener("dispose",E);for(const L in c){const b=c[L],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Pm={[Gr]:Wr,[Xr]:jr,[qr]:$r,[bi]:Yr,[Wr]:Gr,[jr]:Xr,[$r]:qr,[Yr]:bi};function Dm(s,e){function t(){let I=!1;const ne=new Te;let se=null;const fe=new Te(0,0,0,0);return{setMask:function(J){se!==J&&!I&&(s.colorMask(J,J,J,J),se=J)},setLocked:function(J){I=J},setClear:function(J,j,ge,Ie,et){et===!0&&(J*=Ie,j*=Ie,ge*=Ie),ne.set(J,j,ge,Ie),fe.equals(ne)===!1&&(s.clearColor(J,j,ge,Ie),fe.copy(ne))},reset:function(){I=!1,se=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,se=null,fe=null,J=null;return{setReversed:function(j){if(ne!==j){const ge=e.get("EXT_clip_control");j?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ne=j;const Ie=J;J=null,this.setClear(Ie)}},getReversed:function(){return ne},setTest:function(j){j?K(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(j){se!==j&&!I&&(s.depthMask(j),se=j)},setFunc:function(j){if(ne&&(j=Pm[j]),fe!==j){switch(j){case Gr:s.depthFunc(s.NEVER);break;case Wr:s.depthFunc(s.ALWAYS);break;case Xr:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case qr:s.depthFunc(s.EQUAL);break;case Yr:s.depthFunc(s.GEQUAL);break;case jr:s.depthFunc(s.GREATER);break;case $r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=j}},setLocked:function(j){I=j},setClear:function(j){J!==j&&(ne&&(j=1-j),s.clearDepth(j),J=j)},reset:function(){I=!1,se=null,fe=null,J=null,ne=!1}}}function i(){let I=!1,ne=null,se=null,fe=null,J=null,j=null,ge=null,Ie=null,et=null;return{setTest:function(je){I||(je?K(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(je){ne!==je&&!I&&(s.stencilMask(je),ne=je)},setFunc:function(je,gn,cn){(se!==je||fe!==gn||J!==cn)&&(s.stencilFunc(je,gn,cn),se=je,fe=gn,J=cn)},setOp:function(je,gn,cn){(j!==je||ge!==gn||Ie!==cn)&&(s.stencilOp(je,gn,cn),j=je,ge=gn,Ie=cn)},setLocked:function(je){I=je},setClear:function(je){et!==je&&(s.clearStencil(je),et=je)},reset:function(){I=!1,ne=null,se=null,fe=null,J=null,j=null,ge=null,Ie=null,et=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,M=null,_=null,E=null,A=null,R=new He(0,0,0),L=0,b=!1,y=null,U=null,B=null,k=null,W=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const P=s.getParameter(s.VERSION);P.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),X=ee>=1):P.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),X=ee>=2);let Z=null,re={};const ce=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),Qe=new Te().fromArray(ce),nt=new Te().fromArray(Re);function Ye(I,ne,se,fe){const J=new Uint8Array(4),j=s.createTexture();s.bindTexture(I,j),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<se;ge++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ne+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return j}const Y={};Y[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(s.DEPTH_TEST),o.setFunc(bi),De(!1),ve(ca),K(s.CULL_FACE),it(pn);function K(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ue(I,ne){return u[I]!==ne?(s.bindFramebuffer(I,ne),u[I]=ne,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function be(I,ne){let se=m,fe=!1;if(I){se=d.get(ne),se===void 0&&(se=[],d.set(ne,se));const J=I.textures;if(se.length!==J.length||se[0]!==s.COLOR_ATTACHMENT0){for(let j=0,ge=J.length;j<ge;j++)se[j]=s.COLOR_ATTACHMENT0+j;se.length=J.length,fe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,fe=!0);fe&&s.drawBuffers(se)}function We(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const St={[jn]:s.FUNC_ADD,[xc]:s.FUNC_SUBTRACT,[wc]:s.FUNC_REVERSE_SUBTRACT};St[Mc]=s.MIN,St[Sc]=s.MAX;const C={[yc]:s.ZERO,[bc]:s.ONE,[Ec]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[Dc]:s.SRC_ALPHA_SATURATE,[Cc]:s.DST_COLOR,[Ac]:s.DST_ALPHA,[Tc]:s.ONE_MINUS_SRC_COLOR,[Hr]:s.ONE_MINUS_SRC_ALPHA,[Pc]:s.ONE_MINUS_DST_COLOR,[Rc]:s.ONE_MINUS_DST_ALPHA,[Lc]:s.CONSTANT_COLOR,[Uc]:s.ONE_MINUS_CONSTANT_COLOR,[Ic]:s.CONSTANT_ALPHA,[Fc]:s.ONE_MINUS_CONSTANT_ALPHA};function it(I,ne,se,fe,J,j,ge,Ie,et,je){if(I===pn){v===!0&&(pe(s.BLEND),v=!1);return}if(v===!1&&(K(s.BLEND),v=!0),I!==_c){if(I!==p||je!==b){if((f!==jn||_!==jn)&&(s.blendEquation(s.FUNC_ADD),f=jn,_=jn),je)switch(I){case Kn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ha:s.blendFunc(s.ONE,s.ONE);break;case ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case da:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ua:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case da:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,M=null,E=null,A=null,R.set(0,0,0),L=0,p=I,b=je}return}J=J||ne,j=j||se,ge=ge||fe,(ne!==f||J!==_)&&(s.blendEquationSeparate(St[ne],St[J]),f=ne,_=J),(se!==w||fe!==M||j!==E||ge!==A)&&(s.blendFuncSeparate(C[se],C[fe],C[j],C[ge]),w=se,M=fe,E=j,A=ge),(Ie.equals(R)===!1||et!==L)&&(s.blendColor(Ie.r,Ie.g,Ie.b,et),R.copy(Ie),L=et),p=I,b=!1}function Fe(I,ne){I.side===dn?pe(s.CULL_FACE):K(s.CULL_FACE);let se=I.side===Dt;ne&&(se=!se),De(se),I.blending===Kn&&I.transparent===!1?it(pn):it(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;a.setTest(fe),fe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function ve(I){I!==gc?(K(s.CULL_FACE),I!==U&&(I===ca?s.cullFace(s.BACK):I===vc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),U=I}function st(I){I!==B&&(X&&s.lineWidth(I),B=I)}function _e(I,ne,se){I?(K(s.POLYGON_OFFSET_FILL),(k!==ne||W!==se)&&(s.polygonOffset(ne,se),k=ne,W=se)):pe(s.POLYGON_OFFSET_FILL)}function ze(I){I?K(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function vt(I){I===void 0&&(I=s.TEXTURE0+q-1),Z!==I&&(s.activeTexture(I),Z=I)}function ht(I,ne,se){se===void 0&&(Z===null?se=s.TEXTURE0+q-1:se=Z);let fe=re[se];fe===void 0&&(fe={type:void 0,texture:void 0},re[se]=fe),(fe.type!==I||fe.texture!==ne)&&(Z!==se&&(s.activeTexture(se),Z=se),s.bindTexture(I,ne||Y[I]),fe.type=I,fe.texture=ne)}function T(){const I=re[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){Qe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function Pe(I){nt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),nt.copy(I))}function Me(I,ne){let se=c.get(ne);se===void 0&&(se=new WeakMap,c.set(ne,se));let fe=se.get(I);fe===void 0&&(fe=s.getUniformBlockIndex(ne,I.name),se.set(I,fe))}function ae(I,ne){const fe=c.get(ne).get(I);l.get(ne)!==fe&&(s.uniformBlockBinding(ne,fe,I.__bindingPointIndex),l.set(ne,fe))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,re={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,w=null,M=null,_=null,E=null,A=null,R=new He(0,0,0),L=0,b=!1,y=null,U=null,B=null,k=null,W=null,Qe.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:pe,bindFramebuffer:Ue,drawBuffers:be,useProgram:We,setBlending:it,setMaterial:Fe,setFlipSided:De,setCullFace:ve,setLineWidth:st,setPolygonOffset:_e,setScissorTest:ze,activeTexture:vt,bindTexture:ht,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:we,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:xe,texSubImage2D:G,texSubImage3D:$,compressedTexSubImage2D:H,compressedTexSubImage3D:ye,scissor:he,viewport:Pe,reset:Oe}}function Lm(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):Vs("canvas")}function v(T,x,O){let G=1;const $=ht(T);if(($.width>O||$.height>O)&&(G=O/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(G*$.width),ye=Math.floor(G*$.height);u===void 0&&(u=g(H,ye));const ie=x?g(H,ye):u;return ie.width=H,ie.height=ye,ie.getContext("2d").drawImage(T,0,0,H,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+H+"x"+ye+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(T,x,O,G,$=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=x;if(x===s.RED&&(O===s.FLOAT&&(H=s.R32F),O===s.HALF_FLOAT&&(H=s.R16F),O===s.UNSIGNED_BYTE&&(H=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.R8UI),O===s.UNSIGNED_SHORT&&(H=s.R16UI),O===s.UNSIGNED_INT&&(H=s.R32UI),O===s.BYTE&&(H=s.R8I),O===s.SHORT&&(H=s.R16I),O===s.INT&&(H=s.R32I)),x===s.RG&&(O===s.FLOAT&&(H=s.RG32F),O===s.HALF_FLOAT&&(H=s.RG16F),O===s.UNSIGNED_BYTE&&(H=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RG8UI),O===s.UNSIGNED_SHORT&&(H=s.RG16UI),O===s.UNSIGNED_INT&&(H=s.RG32UI),O===s.BYTE&&(H=s.RG8I),O===s.SHORT&&(H=s.RG16I),O===s.INT&&(H=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGB8UI),O===s.UNSIGNED_SHORT&&(H=s.RGB16UI),O===s.UNSIGNED_INT&&(H=s.RGB32UI),O===s.BYTE&&(H=s.RGB8I),O===s.SHORT&&(H=s.RGB16I),O===s.INT&&(H=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),O===s.UNSIGNED_INT&&(H=s.RGBA32UI),O===s.BYTE&&(H=s.RGBA8I),O===s.SHORT&&(H=s.RGBA16I),O===s.INT&&(H=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),x===s.RGBA){const ye=$?ks:qe.getTransfer(G);O===s.FLOAT&&(H=s.RGBA32F),O===s.HALF_FLOAT&&(H=s.RGBA16F),O===s.UNSIGNED_BYTE&&(H=ye===Ke?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function _(T,x){let O;return T?x===null||x===Jn||x===Zi?O=s.DEPTH24_STENCIL8:x===Wt?O=s.DEPTH32F_STENCIL8:x===Ki&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Zi?O=s.DEPTH_COMPONENT24:x===Wt?O=s.DEPTH_COMPONENT32F:x===Ki&&(O=s.DEPTH_COMPONENT16),O}function E(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ft&&T.minFilter!==rt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),L(x),x.isVideoTexture&&h.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),y(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,G=d.get(O);if(G){const $=G[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(T),Object.keys(G).length===0&&d.delete(O)}n.remove(T)}function b(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const O=T.source,G=d.get(O);delete G[x.__cacheKey],o.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let $=0;$<x.__webglFramebuffer[G].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[G][$]);else s.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)s.deleteFramebuffer(x.__webglFramebuffer[G]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let G=0,$=O.length;G<$;G++){const H=n.get(O[G]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(O[G])}n.remove(T)}let U=0;function B(){U=0}function k(){const T=U;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),U+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function q(T,x){const O=n.get(T);if(T.isVideoTexture&&ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function X(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function ee(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function P(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const Z={[Zn]:s.REPEAT,[Ft]:s.CLAMP_TO_EDGE,[Zr]:s.MIRRORED_REPEAT},re={[ft]:s.NEAREST,[Xc]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[rt]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[an]:s.LINEAR_MIPMAP_LINEAR},ce={[$c]:s.NEVER,[th]:s.ALWAYS,[Kc]:s.LESS,[kl]:s.LEQUAL,[Zc]:s.EQUAL,[eh]:s.GEQUAL,[Jc]:s.GREATER,[Qc]:s.NOTEQUAL};function Re(T,x){if(x.type===Wt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===rt||x.magFilter===Js||x.magFilter===as||x.magFilter===an||x.minFilter===rt||x.minFilter===Js||x.minFilter===as||x.minFilter===an)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Z[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Z[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Z[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,re[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,re[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ft||x.minFilter!==as&&x.minFilter!==an||x.type===Wt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const G=x.source;let $=d.get(G);$===void 0&&($={},d.set(G,$));const H=W(x);if(H!==T.__cacheKey){$[H]===void 0&&($[H]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[H].usedTimes++;const ye=$[T.__cacheKey];ye!==void 0&&($[T.__cacheKey].usedTimes--,ye.usedTimes===0&&b(x)),T.__cacheKey=H,T.__webglTexture=$[H].texture}return O}function nt(T,x,O){return Math.floor(Math.floor(T/O)/x)}function Ye(T,x,O,G){const H=T.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{H.sort((te,he)=>te.start-he.start);let ye=0;for(let te=1;te<H.length;te++){const he=H[ye],Pe=H[te],Me=he.start+he.count,ae=nt(Pe.start,x.width,4),Oe=nt(he.start,x.width,4);Pe.start<=Me+1&&ae===Oe&&nt(Pe.start+Pe.count-1,x.width,4)===ae?he.count=Math.max(he.count,Pe.start+Pe.count-he.start):(++ye,H[ye]=Pe)}H.length=ye+1;const ie=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let te=0,he=H.length;te<he;te++){const Pe=H[te],Me=Math.floor(Pe.start/4),ae=Math.ceil(Pe.count/4),Oe=Me%x.width,I=Math.floor(Me/x.width),ne=ae,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Oe,I,ne,se,O,G,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Y(T,x,O){let G=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=s.TEXTURE_3D);const $=Qe(T,x),H=x.source;t.bindTexture(G,T.__webglTexture,s.TEXTURE0+O);const ye=n.get(H);if(H.version!==ye.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const ie=qe.getPrimaries(qe.workingColorSpace),xe=x.colorSpace===rn?null:qe.getPrimaries(x.colorSpace),we=x.colorSpace===rn||ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let te=v(x.image,!1,i.maxTextureSize);te=vt(x,te);const he=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let Me=M(x.internalFormat,he,Pe,x.colorSpace,x.isVideoTexture);Re(G,x);let ae;const Oe=x.mipmaps,I=x.isVideoTexture!==!0,ne=ye.__version===void 0||$===!0,se=H.dataReady,fe=E(x,te);if(x.isDepthTexture)Me=_(x.format===Qi,x.type),ne&&(I?t.texStorage2D(s.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,he,Pe,null));else if(x.isDataTexture)if(Oe.length>0){I&&ne&&t.texStorage2D(s.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let J=0,j=Oe.length;J<j;J++)ae=Oe[J],I?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,he,Pe,ae.data):t.texImage2D(s.TEXTURE_2D,J,Me,ae.width,ae.height,0,he,Pe,ae.data);x.generateMipmaps=!1}else I?(ne&&t.texStorage2D(s.TEXTURE_2D,fe,Me,te.width,te.height),se&&Ye(x,te,he,Pe)):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,he,Pe,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Me,Oe[0].width,Oe[0].height,te.depth);for(let J=0,j=Oe.length;J<j;J++)if(ae=Oe[J],x.format!==wt)if(he!==null)if(I){if(se)if(x.layerUpdates.size>0){const ge=Ha(ae.width,ae.height,x.format,x.type);for(const Ie of x.layerUpdates){const et=ae.data.subarray(Ie*ge/ae.data.BYTES_PER_ELEMENT,(Ie+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Ie,ae.width,ae.height,1,he,et)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,te.depth,he,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,te.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,te.depth,he,Pe,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,te.depth,0,he,Pe,ae.data)}else{I&&ne&&t.texStorage2D(s.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let J=0,j=Oe.length;J<j;J++)ae=Oe[J],x.format!==wt?he!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,he,Pe,ae.data):t.texImage2D(s.TEXTURE_2D,J,Me,ae.width,ae.height,0,he,Pe,ae.data)}else if(x.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Me,te.width,te.height,te.depth),se)if(x.layerUpdates.size>0){const J=Ha(te.width,te.height,x.format,x.type);for(const j of x.layerUpdates){const ge=te.data.subarray(j*J/te.data.BYTES_PER_ELEMENT,(j+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,he,Pe,ge)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Pe,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,he,Pe,te.data);else if(x.isData3DTexture)I?(ne&&t.texStorage3D(s.TEXTURE_3D,fe,Me,te.width,te.height,te.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Pe,te.data)):t.texImage3D(s.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,he,Pe,te.data);else if(x.isFramebufferTexture){if(ne)if(I)t.texStorage2D(s.TEXTURE_2D,fe,Me,te.width,te.height);else{let J=te.width,j=te.height;for(let ge=0;ge<fe;ge++)t.texImage2D(s.TEXTURE_2D,ge,Me,J,j,0,he,Pe,null),J>>=1,j>>=1}}else if(Oe.length>0){if(I&&ne){const J=ht(Oe[0]);t.texStorage2D(s.TEXTURE_2D,fe,Me,J.width,J.height)}for(let J=0,j=Oe.length;J<j;J++)ae=Oe[J],I?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he,Pe,ae):t.texImage2D(s.TEXTURE_2D,J,Me,he,Pe,ae);x.generateMipmaps=!1}else if(I){if(ne){const J=ht(te);t.texStorage2D(s.TEXTURE_2D,fe,Me,J.width,J.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Pe,te)}else t.texImage2D(s.TEXTURE_2D,0,Me,he,Pe,te);p(x)&&f(G),ye.__version=H.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function K(T,x,O){if(x.image.length!==6)return;const G=Qe(T,x),$=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const H=n.get($);if($.version!==H.__version||G===!0){t.activeTexture(s.TEXTURE0+O);const ye=qe.getPrimaries(qe.workingColorSpace),ie=x.colorSpace===rn?null:qe.getPrimaries(x.colorSpace),xe=x.colorSpace===rn||ye===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,he=[];for(let j=0;j<6;j++)!we&&!te?he[j]=v(x.image[j],!0,i.maxCubemapSize):he[j]=te?x.image[j].image:x.image[j],he[j]=vt(x,he[j]);const Pe=he[0],Me=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),Oe=M(x.internalFormat,Me,ae,x.colorSpace),I=x.isVideoTexture!==!0,ne=H.__version===void 0||G===!0,se=$.dataReady;let fe=E(x,Pe);Re(s.TEXTURE_CUBE_MAP,x);let J;if(we){I&&ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Oe,Pe.width,Pe.height);for(let j=0;j<6;j++){J=he[j].mipmaps;for(let ge=0;ge<J.length;ge++){const Ie=J[ge];x.format!==wt?Me!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,Oe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,0,0,Ie.width,Ie.height,Me,ae,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,Oe,Ie.width,Ie.height,0,Me,ae,Ie.data)}}}else{if(J=x.mipmaps,I&&ne){J.length>0&&fe++;const j=ht(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Oe,j.width,j.height)}for(let j=0;j<6;j++)if(te){I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,he[j].width,he[j].height,Me,ae,he[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Oe,he[j].width,he[j].height,0,Me,ae,he[j].data);for(let ge=0;ge<J.length;ge++){const et=J[ge].image[j].image;I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,0,0,et.width,et.height,Me,ae,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,Oe,et.width,et.height,0,Me,ae,et.data)}}else{I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me,ae,he[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Oe,Me,ae,he[j]);for(let ge=0;ge<J.length;ge++){const Ie=J[ge];I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,0,0,Me,ae,Ie.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,Oe,Me,ae,Ie.image[j])}}}p(x)&&f(s.TEXTURE_CUBE_MAP),H.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function pe(T,x,O,G,$,H){const ye=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),xe=M(O.internalFormat,ye,ie,O.colorSpace),we=n.get(x),te=n.get(O);if(te.__renderTarget=x,!we.__hasExternalTextures){const he=Math.max(1,x.width>>H),Pe=Math.max(1,x.height>>H);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,H,xe,he,Pe,x.depth,0,ye,ie,null):t.texImage2D($,H,xe,he,Pe,0,ye,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),_e(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,$,te.__webglTexture,0,st(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,$,te.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(T,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,$=G&&G.isDepthTexture?G.type:null,H=_(x.stencilBuffer,$),ye=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=st(x);_e(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,H,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,H,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,H,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,T)}else{const G=x.textures;for(let $=0;$<G.length;$++){const H=G[$],ye=r.convert(H.format,H.colorSpace),ie=r.convert(H.type),xe=M(H.internalFormat,ye,ie,H.colorSpace),we=st(x);O&&_e(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,xe,x.width,x.height):_e(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,xe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,xe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const $=G.__webglTexture,H=st(x);if(x.depthTexture.format===Ji)_e(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(x.depthTexture.format===Qi)_e(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function We(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=G}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const G=T.texture.mipmaps;G&&G.length>0?be(x.__webglFramebuffer[0],T):be(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=s.createRenderbuffer(),Ue(x.__webglDepthbuffer[G],T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,H)}}else{const G=T.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ue(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(T,x,O){const G=n.get(T);x!==void 0&&pe(G.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&We(T)}function C(T){const x=T.texture,O=n.get(T),G=n.get(x);T.addEventListener("dispose",R);const $=T.textures,H=T.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=x.version,o.memory.textures++),H){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)O.__webglFramebuffer[ie][xe]=s.createFramebuffer()}else O.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)O.__webglFramebuffer[ie]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ie=0,xe=$.length;ie<xe;ie++){const we=n.get($[ie]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&_e(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const xe=$[ie];O.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const we=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),he=M(xe.internalFormat,we,te,xe.colorSpace,T.isXRRenderTarget===!0),Pe=st(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Re(s.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(O.__webglFramebuffer[ie][xe],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else pe(O.__webglFramebuffer[ie],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,xe=$.length;ie<xe;ie++){const we=$[ie],te=n.get(we);let he=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),Re(he,we),pe(O.__webglFramebuffer,T,we,s.COLOR_ATTACHMENT0+ie,he,0),p(we)&&f(he)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),Re(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(O.__webglFramebuffer[xe],T,x,s.COLOR_ATTACHMENT0,ie,xe);else pe(O.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ie,0);p(x)&&f(ie),t.unbindTexture()}T.depthBuffer&&We(T)}function it(T){const x=T.textures;for(let O=0,G=x.length;O<G;O++){const $=x[O];if(p($)){const H=w(T),ye=n.get($).__webglTexture;t.bindTexture(H,ye),f(H),t.unbindTexture()}}}const Fe=[],De=[];function ve(T){if(T.samples>0){if(_e(T)===!1){const x=T.textures,O=T.width,G=T.height;let $=s.COLOR_BUFFER_BIT;const H=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(T),ie=x.length>1;if(ie)for(let we=0;we<x.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=T.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<x.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const te=n.get(x[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,O,G,0,0,O,G,$,s.NEAREST),l===!0&&(Fe.length=0,De.length=0,Fe.push(s.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(H),De.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,De)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<x.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const te=n.get(x[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function st(T){return Math.min(i.maxSamples,T.samples)}function _e(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ze(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function vt(T,x){const O=T.colorSpace,G=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Nn&&O!==rn&&(qe.getTransfer(O)===Ke?(G!==wt||$!==Kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=P,this.rebindTextures=St,this.setupRenderTarget=C,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=_e}function Um(s,e){function t(n,i=rn){let r;const o=qe.getTransfer(i);if(n===Kt)return s.UNSIGNED_BYTE;if(n===Oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return s.BYTE;if(n===Ul)return s.SHORT;if(n===Ki)return s.UNSIGNED_SHORT;if(n===No)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===Wt)return s.FLOAT;if(n===qt)return s.HALF_FLOAT;if(n===Nl)return s.ALPHA;if(n===Ol)return s.RGB;if(n===wt)return s.RGBA;if(n===Ji)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===is)return s.RED;if(n===ko)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===zo)return s.RG_INTEGER;if(n===Vo)return s.RGBA_INTEGER;if(n===Us||n===Is||n===Fs||n===Ns)if(o===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===Qr||n===eo||n===to)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===io)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===so)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ro)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Mo||n===So)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===bo||n===Eo||n===To)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
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

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qt({vertexShader:Im,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Om extends Ci{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Nm,f={},w=t.getContextAttributes();let M=null,_=null;const E=[],A=[],R=new ue;let L=null;const b=new It;b.viewport=new Te;const y=new It;y.viewport=new Te;const U=[b,y],B=new nu;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=E[Y];return K===void 0&&(K=new xr,E[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=E[Y];return K===void 0&&(K=new xr,E[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=E[Y];return K===void 0&&(K=new xr,E[Y]=K),K.getHandSpace()};function q(Y){const K=A.indexOf(Y.inputSource);if(K===-1)return;const pe=E[K];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<E.length;Y++){const K=A[Y];K!==null&&(A[Y]=null,E[Y].disconnect(K))}k=null,W=null,p.reset();for(const Y in f)delete f[Y];e.setRenderTarget(M),m=null,d=null,u=null,i=null,_=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",X),i.addEventListener("inputsourceschange",ee),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ue=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?Qi:Ji,Ue=w.stencil?Zi:Jn);const We={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Zt(d.textureWidth,d.textureHeight,{format:wt,type:Kt,depthTexture:new $l(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Zt(m.framebufferWidth,m.framebufferHeight,{format:wt,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(Y){for(let K=0;K<Y.removed.length;K++){const pe=Y.removed[K],Ue=A.indexOf(pe);Ue>=0&&(A[Ue]=null,E[Ue].disconnect(pe))}for(let K=0;K<Y.added.length;K++){const pe=Y.added[K];let Ue=A.indexOf(pe);if(Ue===-1){for(let We=0;We<E.length;We++)if(We>=A.length){A.push(pe),Ue=We;break}else if(A[We]===null){A[We]=pe,Ue=We;break}if(Ue===-1)break}const be=E[Ue];be&&be.connect(pe)}}const P=new D,Z=new D;function re(Y,K,pe){P.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const Ue=P.distanceTo(Z),be=K.projectionMatrix.elements,We=pe.projectionMatrix.elements,St=be[14]/(be[10]-1),C=be[14]/(be[10]+1),it=(be[9]+1)/be[5],Fe=(be[9]-1)/be[5],De=(be[8]-1)/be[0],ve=(We[8]+1)/We[0],st=St*De,_e=St*ve,ze=Ue/(-De+ve),vt=ze*-De;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(vt),Y.translateZ(ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ht=St+ze,T=C+ze,x=st-vt,O=_e+(Ue-vt),G=it*C/T*ht,$=Fe*C/T*ht;Y.projectionMatrix.makePerspective(x,O,G,$,ht,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,pe=Y.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),B.near=y.near=b.near=K,B.far=y.far=b.far=pe,(k!==B.near||W!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,W=B.far),B.layers.mask=Y.layers.mask|6,b.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;const Ue=Y.parent,be=B.cameras;ce(B,Ue);for(let We=0;We<be.length;We++)ce(be[We],Ue);be.length===2?re(B,b,y):B.projectionMatrix.copy(b.projectionMatrix),Re(Y,B,Ue)};function Re(Y,K,pe){pe===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Y){return f[Y]};let Qe=null;function nt(Y,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ue=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let C=0;C<pe.length;C++){const it=pe[C];let Fe=null;if(m!==null)Fe=m.getViewport(it);else{const ve=u.getViewSubImage(d,it);Fe=ve.viewport,C===0&&(e.setRenderTargetTextures(_,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(_))}let De=U[C];De===void 0&&(De=new It,De.layers.enable(C),De.viewport=new Te,U[C]=De),De.matrix.fromArray(it.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(it.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),C===0&&(B.matrix.copy(De.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(De)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const C=u.getDepthInformation(pe[0]);C&&C.isValid&&C.texture&&p.init(C,i.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<pe.length;C++){const it=pe[C].camera;if(it){let Fe=f[it];Fe||(Fe=new Kl,f[it]=Fe);const De=u.getCameraImage(it);Fe.sourceTexture=De}}}}for(let pe=0;pe<E.length;pe++){const Ue=A[pe],be=E[pe];Ue!==null&&be!==void 0&&be.update(Ue,K,c||o)}Qe&&Qe(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ye=new Ql;Ye.setAnimationLoop(nt),this.setAnimationLoop=function(Y){Qe=Y},this.dispose=function(){}}}const Xn=new mn,Bm=new Ne;function km(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Yl(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,w,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,_)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=e.get(f),M=w.envMap,_=w.envMapRotation;M&&(p.envMap.value=M,Xn.copy(_),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),p.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Xn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zm(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const _=M.program;n.uniformBlockBinding(w,_)}function c(w,M){let _=i[w.id];_===void 0&&(g(w),_=h(w),i[w.id]=_,w.addEventListener("dispose",p));const E=M.program;n.updateUBOMapping(w,E);const A=e.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){const M=u();w.__bindingPointIndex=M;const _=s.createBuffer(),E=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=i[w.id],_=w.uniforms,E=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,R=_.length;A<R;A++){const L=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,y=L.length;b<y;b++){const U=L[b];if(m(U,A,b,E)===!0){const B=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let q=0;q<k.length;q++){const X=k[q],ee=v(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,B+W,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(w,M,_,E){const A=w.value,R=M+"_"+_;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const L=E[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return E[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){const M=w.uniforms;let _=0;const E=16;for(let R=0,L=M.length;R<L;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,U=b.length;y<U;y++){const B=b[y],k=Array.isArray(B.value)?B.value:[B.value];for(let W=0,q=k.length;W<q;W++){const X=k[W],ee=v(X),P=_%E,Z=P%ee.boundary,re=P+Z;_+=Z,re!==0&&E-re<ee.storage&&(_+=E-re),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ee.storage}}}const A=_%E;return A>0&&(_+=E-A),w.__size=_,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Vm{constructor(e={}){const{canvas:t=_h(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,f=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=Et;let A=0,R=0,L=null,b=-1,y=null;const U=new Te,B=new Te;let k=null;const W=new He(0);let q=0,X=t.width,ee=t.height,P=1,Z=null,re=null;const ce=new Te(0,0,X,ee),Re=new Te(0,0,X,ee);let Qe=!1;const nt=new $o;let Ye=!1,Y=!1;const K=new Ne,pe=new D,Ue=new Te,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function St(){return L===null?P:1}let C=n;function it(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const F="webgl2";if(C=it(F,S),C===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,De,ve,st,_e,ze,vt,ht,T,x,O,G,$,H,ye,ie,xe,we,te,he,Pe,Me,ae,Oe;function I(){Fe=new Zf(C),Fe.init(),Me=new Um(C,Fe),De=new Wf(C,Fe,e,Me),ve=new Dm(C,Fe),De.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),st=new ep(C),_e=new _m,ze=new Lm(C,Fe,ve,_e,De,Me,st),vt=new qf(_),ht=new Kf(_),T=new ru(C),ae=new Hf(C,T),x=new Jf(C,T,st,ae),O=new np(C,x,T,st),te=new tp(C,De,ze),ie=new Xf(_e),G=new vm(_,vt,ht,Fe,De,ae,ie),$=new km(_,_e),H=new wm,ye=new Tm(Fe),we=new Vf(_,vt,ht,ve,O,m,l),xe=new Cm(_,O,De),Oe=new zm(C,st,De,ve),he=new Gf(C,Fe,st),Pe=new Qf(C,Fe,st),st.programs=G.programs,_.capabilities=De,_.extensions=Fe,_.properties=_e,_.renderLists=H,_.shadowMap=xe,_.state=ve,_.info=st}I();const ne=new Om(_,C);this.xr=ne,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(S){S!==void 0&&(P=S,this.setSize(X,ee,!1))},this.getSize=function(S){return S.set(X,ee)},this.setSize=function(S,F,z=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,ee=F,t.width=Math.floor(S*P),t.height=Math.floor(F*P),z===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(X*P,ee*P).floor()},this.setDrawingBufferSize=function(S,F,z){X=S,ee=F,P=z,t.width=Math.floor(S*z),t.height=Math.floor(F*z),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(U)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,F,z,V){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,F,z,V),ve.viewport(U.copy(ce).multiplyScalar(P).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,F,z,V){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,F,z,V),ve.scissor(B.copy(Re).multiplyScalar(P).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(S){ve.setScissorTest(Qe=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,z=!0){let V=0;if(S){let N=!1;if(L!==null){const Q=L.texture.format;N=Q===Vo||Q===zo||Q===ko}if(N){const Q=L.texture.type,le=Q===Kt||Q===Jn||Q===Ki||Q===Zi||Q===Oo||Q===Bo,me=we.getClearColor(),de=we.getClearAlpha(),Ce=me.r,Le=me.g,Ee=me.b;le?(g[0]=Ce,g[1]=Le,g[2]=Ee,g[3]=de,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ce,v[1]=Le,v[2]=Ee,v[3]=de,C.clearBufferiv(C.COLOR,0,v))}else V|=C.COLOR_BUFFER_BIT}F&&(V|=C.DEPTH_BUFFER_BIT),z&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),we.dispose(),H.dispose(),ye.dispose(),_e.dispose(),vt.dispose(),ht.dispose(),O.dispose(),ae.dispose(),Oe.dispose(),G.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",cn),ne.removeEventListener("sessionend",ia),Bn.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=st.autoReset,F=xe.enabled,z=xe.autoUpdate,V=xe.needsUpdate,N=xe.type;I(),st.autoReset=S,xe.enabled=F,xe.autoUpdate=z,xe.needsUpdate=V,xe.type=N}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function j(S){const F=S.target;F.removeEventListener("dispose",j),ge(F)}function ge(S){Ie(S),_e.remove(S)}function Ie(S){const F=_e.get(S).programs;F!==void 0&&(F.forEach(function(z){G.releaseProgram(z)}),S.isShaderMaterial&&G.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,z,V,N,Q){F===null&&(F=be);const le=N.isMesh&&N.matrixWorld.determinant()<0,me=hc(S,F,z,V,N);ve.setMaterial(V,le);let de=z.index,Ce=1;if(V.wireframe===!0){if(de=x.getWireframeAttribute(z),de===void 0)return;Ce=2}const Le=z.drawRange,Ee=z.attributes.position;let Ge=Le.start*Ce,$e=(Le.start+Le.count)*Ce;Q!==null&&(Ge=Math.max(Ge,Q.start*Ce),$e=Math.min($e,(Q.start+Q.count)*Ce)),de!==null?(Ge=Math.max(Ge,0),$e=Math.min($e,de.count)):Ee!=null&&(Ge=Math.max(Ge,0),$e=Math.min($e,Ee.count));const lt=$e-Ge;if(lt<0||lt===1/0)return;ae.setup(N,V,me,z,de);let tt,Ze=he;if(de!==null&&(tt=T.get(de),Ze=Pe,Ze.setIndex(tt)),N.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*St()),Ze.setMode(C.LINES)):Ze.setMode(C.TRIANGLES);else if(N.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),ve.setLineWidth(Ae*St()),N.isLineSegments?Ze.setMode(C.LINES):N.isLineLoop?Ze.setMode(C.LINE_LOOP):Ze.setMode(C.LINE_STRIP)}else N.isPoints?Ze.setMode(C.POINTS):N.isSprite&&Ze.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,ot=N._multiDrawCounts,Xe=N._multiDrawCount,Ot=de?T.get(de).bytesPerElement:1,ti=_e.get(V).currentProgram.getUniforms();for(let Bt=0;Bt<Xe;Bt++)ti.setValue(C,"_gl_DrawID",Bt),Ze.render(Ae[Bt]/Ot,ot[Bt])}else if(N.isInstancedMesh)Ze.renderInstances(Ge,lt,N.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ot=Math.min(z.instanceCount,Ae);Ze.renderInstances(Ge,lt,ot)}else Ze.render(Ge,lt)};function et(S,F,z){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,os(S,F,z),S.side=An,S.needsUpdate=!0,os(S,F,z),S.side=dn):os(S,F,z)}this.compile=function(S,F,z=null){z===null&&(z=S),f=ye.get(z),f.init(F),M.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const me=Q[le];et(me,z,N),V.add(me)}else et(Q,z,N),V.add(Q)}),f=M.pop(),V},this.compileAsync=function(S,F,z=null){const V=this.compile(S,F,z);return new Promise(N=>{function Q(){if(V.forEach(function(le){_e.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){N(S);return}setTimeout(Q,10)}Fe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function gn(S){je&&je(S)}function cn(){Bn.stop()}function ia(){Bn.start()}const Bn=new Ql;Bn.setAnimationLoop(gn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(S){je=S,ne.setAnimationLoop(S),S===null?Bn.stop():Bn.start()},ne.addEventListener("sessionstart",cn),ne.addEventListener("sessionend",ia),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,F,L),f=ye.get(S,M.length),f.init(F),M.push(f),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(K,fn,F.reversedDepth),Y=this.localClippingEnabled,Ye=ie.init(this.clippingPlanes,Y),p=H.get(S,w.length),p.init(),w.push(p),ne.enabled===!0&&ne.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&Ks(Q,F,-1/0,_.sortObjects)}Ks(S,F,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(Z,re),We=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,We&&we.addToRenderList(p,S),this.info.render.frame++,Ye===!0&&ie.beginShadows();const z=f.state.shadowsArray;xe.render(z,S,F),Ye===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,N=p.transmissive;if(f.setupLights(),F.isArrayCamera){const Q=F.cameras;if(N.length>0)for(let le=0,me=Q.length;le<me;le++){const de=Q[le];ra(V,N,S,de)}We&&we.render(S);for(let le=0,me=Q.length;le<me;le++){const de=Q[le];sa(p,S,de,de.viewport)}}else N.length>0&&ra(V,N,S,F),We&&we.render(S),sa(p,S,F);L!==null&&R===0&&(ze.updateMultisampleRenderTarget(L),ze.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(_,S,F),ae.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],Ye===!0&&ie.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Ks(S,F,z,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||nt.intersectsSprite(S)){V&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const le=O.update(S),me=S.material;me.visible&&p.push(S,le,me,z,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||nt.intersectsObject(S))){const le=O.update(S),me=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ue.copy(le.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(me)){const de=le.groups;for(let Ce=0,Le=de.length;Ce<Le;Ce++){const Ee=de[Ce],Ge=me[Ee.materialIndex];Ge&&Ge.visible&&p.push(S,le,Ge,z,Ue.z,Ee)}}else me.visible&&p.push(S,le,me,z,Ue.z,null)}}const Q=S.children;for(let le=0,me=Q.length;le<me;le++)Ks(Q[le],F,z,V)}function sa(S,F,z,V){const N=S.opaque,Q=S.transmissive,le=S.transparent;f.setupLightsView(z),Ye===!0&&ie.setGlobalState(_.clippingPlanes,z),V&&ve.viewport(U.copy(V)),N.length>0&&rs(N,F,z),Q.length>0&&rs(Q,F,z),le.length>0&&rs(le,F,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ra(S,F,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Zt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?qt:Kt,minFilter:an,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Q=f.state.transmissionRenderTarget[V.id],le=V.viewport||U;Q.setSize(le.z*_.transmissionResolutionScale,le.w*_.transmissionResolutionScale);const me=_.getRenderTarget(),de=_.getActiveCubeFace(),Ce=_.getActiveMipmapLevel();_.setRenderTarget(Q),_.getClearColor(W),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),We&&we.render(z);const Le=_.toneMapping;_.toneMapping=En;const Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Ye===!0&&ie.setGlobalState(_.clippingPlanes,V),rs(S,z,V),ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let $e=0,lt=F.length;$e<lt;$e++){const tt=F[$e],Ze=tt.object,Ae=tt.geometry,ot=tt.material,Xe=tt.group;if(ot.side===dn&&Ze.layers.test(V.layers)){const Ot=ot.side;ot.side=Dt,ot.needsUpdate=!0,oa(Ze,z,V,Ae,ot,Xe),ot.side=Ot,ot.needsUpdate=!0,Ge=!0}}Ge===!0&&(ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q))}_.setRenderTarget(me,de,Ce),_.setClearColor(W,q),Ee!==void 0&&(V.viewport=Ee),_.toneMapping=Le}function rs(S,F,z){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,Q=S.length;N<Q;N++){const le=S[N],me=le.object,de=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&V!==null&&(Le=V),me.layers.test(z.layers)&&oa(me,F,z,de,Le,Ce)}}function oa(S,F,z,V,N,Q){S.onBeforeRender(_,F,z,V,N,Q),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,F,z,V,S,Q),N.transparent===!0&&N.side===dn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,_.renderBufferDirect(z,F,V,N,S,Q),N.side=An,N.needsUpdate=!0,_.renderBufferDirect(z,F,V,N,S,Q),N.side=dn):_.renderBufferDirect(z,F,V,N,S,Q),S.onAfterRender(_,F,z,V,N,Q)}function os(S,F,z){F.isScene!==!0&&(F=be);const V=_e.get(S),N=f.state.lights,Q=f.state.shadowsArray,le=N.state.version,me=G.getParameters(S,N.state,Q,F,z),de=G.getProgramCacheKey(me);let Ce=V.programs;V.environment=S.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(S.isMeshStandardMaterial?ht:vt).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",j),Ce=new Map,V.programs=Ce);let Le=Ce.get(de);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===le)return la(S,me),Le}else me.uniforms=G.getUniforms(S),S.onBeforeCompile(me,_),Le=G.acquireProgram(me,de),Ce.set(de,Le),V.uniforms=me.uniforms;const Ee=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),la(S,me),V.needsLights=dc(S),V.lightsStateVersion=le,V.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function aa(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function la(S,F){const z=_e.get(S);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function hc(S,F,z,V,N){F.isScene!==!0&&(F=be),ze.resetTextureUnits();const Q=F.fog,le=V.isMeshStandardMaterial?F.environment:null,me=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Nn,de=(V.isMeshStandardMaterial?ht:vt).get(V.envMap||le),Ce=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!z.morphAttributes.position,Ge=!!z.morphAttributes.normal,$e=!!z.morphAttributes.color;let lt=En;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(lt=_.toneMapping);const tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=tt!==void 0?tt.length:0,Ae=_e.get(V),ot=f.state.lights;if(Ye===!0&&(Y===!0||S!==y)){const Rt=S===y&&V.id===b;ie.setState(V,S,Rt)}let Xe=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ot.state.version||Ae.outputColorSpace!==me||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==de||V.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Le||Ae.morphTargets!==Ee||Ae.morphNormals!==Ge||Ae.morphColors!==$e||Ae.toneMapping!==lt||Ae.morphTargetsCount!==Ze)&&(Xe=!0):(Xe=!0,Ae.__version=V.version);let Ot=Ae.currentProgram;Xe===!0&&(Ot=os(V,F,N));let ti=!1,Bt=!1,Fi=!1;const at=Ot.getUniforms(),Yt=Ae.uniforms;if(ve.useProgram(Ot.program)&&(ti=!0,Bt=!0,Fi=!0),V.id!==b&&(b=V.id,Bt=!0),ti||y!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(C,"projectionMatrix",S.projectionMatrix),at.setValue(C,"viewMatrix",S.matrixWorldInverse);const Lt=at.map.cameraPosition;Lt!==void 0&&Lt.setValue(C,pe.setFromMatrixPosition(S.matrixWorld)),De.logarithmicDepthBuffer&&at.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Bt=!0,Fi=!0)}if(N.isSkinnedMesh){at.setOptional(C,N,"bindMatrix"),at.setOptional(C,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),at.setValue(C,"boneTexture",Rt.boneTexture,ze))}N.isBatchedMesh&&(at.setOptional(C,N,"batchingTexture"),at.setValue(C,"batchingTexture",N._matricesTexture,ze),at.setOptional(C,N,"batchingIdTexture"),at.setValue(C,"batchingIdTexture",N._indirectTexture,ze),at.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(C,"batchingColorTexture",N._colorsTexture,ze));const jt=z.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&te.update(N,z,Ot),(Bt||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,at.setValue(C,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yt.envMap.value=de,Yt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(Yt.envMapIntensity.value=F.environmentIntensity),Bt&&(at.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ae.needsLights&&uc(Yt,Fi),Q&&V.fog===!0&&$.refreshFogUniforms(Yt,Q),$.refreshMaterialUniforms(Yt,V,P,ee,f.state.transmissionRenderTarget[S.id]),Os.upload(C,aa(Ae),Yt,ze)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Os.upload(C,aa(Ae),Yt,ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(C,"center",N.center),at.setValue(C,"modelViewMatrix",N.modelViewMatrix),at.setValue(C,"normalMatrix",N.normalMatrix),at.setValue(C,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Rt=V.uniformsGroups;for(let Lt=0,Zs=Rt.length;Lt<Zs;Lt++){const kn=Rt[Lt];Oe.update(kn,Ot),Oe.bind(kn,Ot)}}return Ot}function uc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function dc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,F,z){const V=_e.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_e.get(S.texture).__webglTexture=F,_e.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const z=_e.get(S);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const fc=C.createFramebuffer();this.setRenderTarget=function(S,F=0,z=0){L=S,A=F,R=z;let V=!0,N=null,Q=!1,le=!1;if(S){const de=_e.get(S);if(de.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(de.__hasExternalTextures)ze.rebindTextures(S,_e.get(S.texture).__webglTexture,_e.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ee=S.depthTexture;if(de.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(S.width!==Ee.image.width||S.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}const Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=_e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?N=Le[F][z]:N=Le[F],Q=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?N=_e.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[z]:N=Le,U.copy(S.viewport),B.copy(S.scissor),k=S.scissorTest}else U.copy(ce).multiplyScalar(P).floor(),B.copy(Re).multiplyScalar(P).floor(),k=Qe;if(z!==0&&(N=fc),ve.bindFramebuffer(C.FRAMEBUFFER,N)&&V&&ve.drawBuffers(S,N),ve.viewport(U),ve.scissor(B),ve.setScissorTest(k),Q){const de=_e.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,z)}else if(le){const de=F;for(let Ce=0;Ce<S.textures.length;Ce++){const Le=_e.get(S.textures[Ce]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,z,de)}}else if(S!==null&&z!==0){const de=_e.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(S,F,z,V,N,Q,le,me=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ve.bindFramebuffer(C.FRAMEBUFFER,de);try{const Ce=S.textures[me],Le=Ce.format,Ee=Ce.type;if(!De.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&z>=0&&z<=S.height-N&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(F,z,V,N,Me.convert(Le),Me.convert(Ee),Q))}finally{const Ce=L!==null?_e.get(L).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,F,z,V,N,Q,le,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(F>=0&&F<=S.width-V&&z>=0&&z<=S.height-N){ve.bindFramebuffer(C.FRAMEBUFFER,de);const Ce=S.textures[me],Le=Ce.format,Ee=Ce.type;if(!De.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(F,z,V,N,Me.convert(Le),Me.convert(Ee),0);const $e=L!==null?_e.get(L).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,$e);const lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await xh(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Ge),C.deleteSync(lt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,z=0){const V=Math.pow(2,-z),N=Math.floor(S.image.width*V),Q=Math.floor(S.image.height*V),le=F!==null?F.x:0,me=F!==null?F.y:0;ze.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,le,me,N,Q),ve.unbindTexture()};const pc=C.createFramebuffer(),mc=C.createFramebuffer();this.copyTextureToTexture=function(S,F,z=null,V=null,N=0,Q=null){Q===null&&(N!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,me,de,Ce,Le,Ee,Ge,$e,lt;const tt=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(z!==null)le=z.max.x-z.min.x,me=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Le=z.min.y,Ee=z.isBox3?z.min.z:0;else{const jt=Math.pow(2,-N);le=Math.floor(tt.width*jt),me=Math.floor(tt.height*jt),S.isDataArrayTexture?de=tt.depth:S.isData3DTexture?de=Math.floor(tt.depth*jt):de=1,Ce=0,Le=0,Ee=0}V!==null?(Ge=V.x,$e=V.y,lt=V.z):(Ge=0,$e=0,lt=0);const Ze=Me.convert(F.format),Ae=Me.convert(F.type);let ot;F.isData3DTexture?(ze.setTexture3D(F,0),ot=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),ot=C.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Xe=C.getParameter(C.UNPACK_ROW_LENGTH),Ot=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ti=C.getParameter(C.UNPACK_SKIP_PIXELS),Bt=C.getParameter(C.UNPACK_SKIP_ROWS),Fi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,tt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,tt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);const at=S.isDataArrayTexture||S.isData3DTexture,Yt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const jt=_e.get(S),Rt=_e.get(F),Lt=_e.get(jt.__renderTarget),Zs=_e.get(Rt.__renderTarget);ve.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let kn=0;kn<de;kn++)at&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(S).__webglTexture,N,Ee+kn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,Q,lt+kn)),C.blitFramebuffer(Ce,Le,le,me,Ge,$e,le,me,C.DEPTH_BUFFER_BIT,C.NEAREST);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||_e.has(S)){const jt=_e.get(S),Rt=_e.get(F);ve.bindFramebuffer(C.READ_FRAMEBUFFER,pc),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,mc);for(let Lt=0;Lt<de;Lt++)at?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,jt.__webglTexture,N,Ee+Lt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,jt.__webglTexture,N),Yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,Q,lt+Lt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Rt.__webglTexture,Q),N!==0?C.blitFramebuffer(Ce,Le,le,me,Ge,$e,le,me,C.COLOR_BUFFER_BIT,C.NEAREST):Yt?C.copyTexSubImage3D(ot,Q,Ge,$e,lt+Lt,Ce,Le,le,me):C.copyTexSubImage2D(ot,Q,Ge,$e,Ce,Le,le,me);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Yt?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(ot,Q,Ge,$e,lt,le,me,de,Ze,Ae,tt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(ot,Q,Ge,$e,lt,le,me,de,Ze,tt.data):C.texSubImage3D(ot,Q,Ge,$e,lt,le,me,de,Ze,Ae,tt):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Ge,$e,le,me,Ze,Ae,tt.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Ge,$e,tt.width,tt.height,Ze,tt.data):C.texSubImage2D(C.TEXTURE_2D,Q,Ge,$e,le,me,Ze,Ae,tt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ot),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ti),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Fi),Q===0&&F.generateMipmaps&&C.generateMipmap(ot),ve.unbindTexture()},this.initRenderTarget=function(S){_e.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,ve.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Hm{#e=new Map;#t=[];add(e){const t=e.constructor.id;if(!t)throw new Error(`${e.constructor.name} is missing a static id`);if(this.#e.has(t))throw new Error(`duplicate subsystem id "${t}"`);return this.#e.set(t,e),this}get(e){const t=this.#e.get(e);if(!t)throw new Error(`subsystem "${e}" not registered`);return t}peek(e){return this.#e.get(e)??null}has(e){return this.#e.has(e)}resolve(){const e=new Map,t=[],n=(i,r)=>{const o=e.get(i);if(o===1)return;if(o===0)throw new Error(`dependency cycle at "${i}" (via ${r})`);const a=this.#e.get(i);if(!a)throw new Error(`"${r}" depends on unregistered subsystem "${i}"`);e.set(i,0);for(const l of a.constructor.deps??[])n(l,i);e.set(i,1),t.push(a)};for(const i of this.#e.keys())n(i,"<root>");return this.#t=t,t}get ordered(){return this.#t.length?this.#t:this.resolve()}#n=new Map;with(e){let t=this.#n.get(e);return t||(t=this.ordered.filter(n=>typeof n[e]=="function"),this.#n.set(e,t)),t}invalidate(){this.#n.clear()}}class Gm{#e=new Map;on(e,t){return(this.#e.get(e)??this.#e.set(e,new Set).get(e)).add(t),()=>this.off(e,t)}once(e,t){const n=this.on(e,i=>{n(),t(i)});return n}off(e,t){this.#e.get(e)?.delete(t)}emit(e,t){const n=this.#e.get(e);if(n)for(const i of[...n])try{i(t)}catch(r){console.error(`[events] handler for "${e}" threw:`,r)}}clear(){this.#e.clear()}}const Wm=120,Gi=1/Wm,dl=8,Cr={low:{renderScale:.72,shadowMapSize:1024,cascades:3,shadowDistance:60,taa:!1,gtao:!1,ssr:!1,volumetrics:!1,motionBlur:!1,bloom:!0,anisotropy:4,particleBudget:2e3,decalBudget:64},medium:{renderScale:.85,shadowMapSize:2048,cascades:3,shadowDistance:90,taa:!0,gtao:!0,ssr:!1,volumetrics:!0,motionBlur:!0,bloom:!0,anisotropy:8,particleBudget:6e3,decalBudget:128},high:{renderScale:1,shadowMapSize:2048,cascades:4,shadowDistance:140,taa:!0,gtao:!0,ssr:!0,volumetrics:!0,motionBlur:!0,bloom:!0,anisotropy:16,particleBudget:12e3,decalBudget:256},ultra:{renderScale:1,shadowMapSize:4096,cascades:4,shadowDistance:200,taa:!0,gtao:!0,ssr:!0,volumetrics:!0,motionBlur:!0,bloom:!0,anisotropy:16,particleBudget:24e3,decalBudget:512}},Xm={quality:"ultra",fov:80,adsFovScale:.72,sensitivity:.0022,adsSensScale:.65,invertY:!1,exposure:1,deterministic:!1};function qm(s={}){const e={...Xm,...s};return e.q={...Cr[e.quality]},e.setQuality=t=>{if(!Cr[t])throw new Error(`unknown quality preset "${t}"`);e.quality=t,Object.assign(e.q,Cr[t])},e}const fl={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],jump:["Space"],crouch:["ControlLeft","KeyC"],prone:["KeyZ"],sprint:["ShiftLeft"],reload:["KeyR"],use:["KeyF"],melee:["KeyV"],leanLeft:["KeyQ"],leanRight:["KeyE"],swapWeapon:["Digit1","Digit2","Tab"],grenade:["KeyG"],flashlight:["KeyT"],pause:["Escape"]};class Ym{constructor(e,t){this.canvas=e,this.config=t,this.down=new Set,this._pressed=new Set,this._released=new Set,this._pendingDown=new Set,this._pendingUp=new Set,this.look={x:0,y:0},this._rawLook={x:0,y:0},this.wheel=0,this._pendingWheel=0,this.pointerLocked=!1,this.enabled=!0,this.frozen=!1,this.gamepadIndex=null,this.stick={moveX:0,moveY:0,lookX:0,lookY:0},this._bound={keydown:this._onKeyDown.bind(this),keyup:this._onKeyUp.bind(this),mousedown:this._onMouseDown.bind(this),mouseup:this._onMouseUp.bind(this),mousemove:this._onMouseMove.bind(this),wheel:this._onWheel.bind(this),lockchange:this._onLockChange.bind(this),blur:this._onBlur.bind(this),contextmenu:n=>n.preventDefault()}}attach(){addEventListener("keydown",this._bound.keydown),addEventListener("keyup",this._bound.keyup),addEventListener("mousedown",this._bound.mousedown),addEventListener("mouseup",this._bound.mouseup),addEventListener("mousemove",this._bound.mousemove),addEventListener("wheel",this._bound.wheel,{passive:!0}),addEventListener("blur",this._bound.blur),document.addEventListener("pointerlockchange",this._bound.lockchange),this.canvas.addEventListener("contextmenu",this._bound.contextmenu)}detach(){removeEventListener("keydown",this._bound.keydown),removeEventListener("keyup",this._bound.keyup),removeEventListener("mousedown",this._bound.mousedown),removeEventListener("mouseup",this._bound.mouseup),removeEventListener("mousemove",this._bound.mousemove),removeEventListener("wheel",this._bound.wheel),removeEventListener("blur",this._bound.blur),document.removeEventListener("pointerlockchange",this._bound.lockchange),this.canvas.removeEventListener("contextmenu",this._bound.contextmenu)}requestPointerLock(){try{const e=this.canvas.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}_onKeyDown(e){this.enabled&&(e.repeat||(!e.metaKey&&!e.ctrlKey&&e.preventDefault(),this._pendingDown.add(e.code)))}_onKeyUp(e){this.enabled&&this._pendingUp.add(e.code)}_onMouseDown(e){this.enabled&&(!this.pointerLocked&&e.button===0&&this.requestPointerLock(),this._pendingDown.add(`Mouse${e.button}`))}_onMouseUp(e){this.enabled&&this._pendingUp.add(`Mouse${e.button}`)}_onMouseMove(e){!this.enabled||!this.pointerLocked||this.frozen||(this._rawLook.x+=e.movementX??0,this._rawLook.y+=e.movementY??0)}_onWheel(e){this.enabled&&(this._pendingWheel+=Math.sign(e.deltaY))}_onLockChange(){this.pointerLocked=document.pointerLockElement===this.canvas,this.pointerLocked||this._onBlur()}_onBlur(){for(const e of this.down)this._pendingUp.add(e);this._rawLook.x=0,this._rawLook.y=0}beginFrame(){this._pressed.clear(),this._released.clear();for(const t of this._pendingDown)this.down.has(t)||(this.down.add(t),this._pressed.add(t));for(const t of this._pendingUp)this.down.delete(t)&&this._released.add(t);this._pendingDown.clear(),this._pendingUp.clear();const e=this.config.sensitivity;this.look.x=this.frozen?0:this._rawLook.x*e,this.look.y=this.frozen?0:this._rawLook.y*e*(this.config.invertY?-1:1),this._rawLook.x=0,this._rawLook.y=0,this.wheel=this._pendingWheel,this._pendingWheel=0,this._pollGamepad()}endFrame(){}_pollGamepad(){const e=navigator.getGamepads?.()??[],t=e[this.gamepadIndex??0]??e.find(Boolean);if(!t){this.stick.moveX=this.stick.moveY=this.stick.lookX=this.stick.lookY=0;return}const n=r=>Math.abs(r)<.16?0:(r-Math.sign(r)*.16)/.84;this.stick.moveX=n(t.axes[0]??0),this.stick.moveY=n(t.axes[1]??0);const i=r=>Math.sign(r)*Math.abs(r)**2.4;this.stick.lookX=i(n(t.axes[2]??0)),this.stick.lookY=i(n(t.axes[3]??0))}action(e){const t=fl[e];if(!t)return!1;for(const n of t)if(this.down.has(n))return!0;return!1}actionPressed(e){const t=fl[e];if(!t)return!1;for(const n of t)if(this._pressed.has(n))return!0;return!1}held(e){return this.down.has(e)}pressed(e){return this._pressed.has(e)}released(e){return this._released.has(e)}get fire(){return this.down.has("Mouse0")}get firePressed(){return this._pressed.has("Mouse0")}get ads(){return this.down.has("Mouse2")}moveVector(e={x:0,y:0}){let t=(this.action("right")?1:0)-(this.action("left")?1:0),n=(this.action("forward")?1:0)-(this.action("back")?1:0);t+=this.stick.moveX,n-=this.stick.moveY;const i=Math.hypot(t,n);return i>1&&(t/=i,n/=i),e.x=t,e.y=n,e}}class Qo{constructor(e=2654435769){this.seed(e)}seed(e){let t=e>>>0;const n=()=>{t=t+2654435769>>>0;let i=t;return i=Math.imul(i^i>>>16,569420461),i=Math.imul(i^i>>>15,1935289751),(i^i>>>15)>>>0};return this.s0=n(),this.s1=n(),this.s2=n(),this.s3=n(),this}u32(){const e=(i,r)=>(i<<r|i>>>32-r)>>>0,t=Math.imul(e(Math.imul(this.s1,5)>>>0,7),9)>>>0,n=this.s1<<9>>>0;return this.s2^=this.s0,this.s3^=this.s1,this.s1^=this.s2,this.s0^=this.s3,this.s2^=n,this.s3=e(this.s3,11),t}float(){return this.u32()/4294967296}range(e,t){return e+(t-e)*this.float()}int(e,t){return e+this.u32()%(t-e+1)}signed(){return this.float()*2-1}gauss(){if(this._spare!==void 0){const i=this._spare;return this._spare=void 0,i}let e=0;for(;e===0;)e=this.float();const t=Math.sqrt(-2*Math.log(e)),n=2*Math.PI*this.float();return this._spare=t*Math.sin(n),t*Math.cos(n)}pick(e){return e[this.u32()%e.length]}disc(e={x:0,y:0}){const t=Math.sqrt(this.float()),n=this.float()*Math.PI*2;return e.x=Math.cos(n)*t,e.y=Math.sin(n)*t,e}fork(){return new Qo(this.u32())}}class jm{constructor({canvas:e,config:t}){this.canvas=e,this.config=t,this.registry=new Hm,this.events=new Gm,this.input=new Ym(e,t),this.rng=new Qo(t.deterministic?1592594996:Math.random()*2**32>>>0),this.scene=new Qn,this.camera=new It(t.fov,1,.05,1200),this.camera.rotation.order="YXZ",this.viewScene=new Qn,this.viewCamera=new It(60,1,.005,12),this.time={elapsed:0,raw:0,dt:0,fixed:Gi,alpha:0,scale:1,frame:0},this.ctx={engine:this,scene:this.scene,camera:this.camera,viewScene:this.viewScene,viewCamera:this.viewCamera,canvas:e,config:t,events:this.events,input:this.input,time:this.time,rng:this.rng,get:n=>this.registry.get(n),peek:n=>this.registry.peek(n),has:n=>this.registry.has(n)},this._accum=0,this._last=0,this._running=!1,this._onResize=()=>this.resize()}add(e,t){return this.registry.add(new e(t)),this}async init(){const e=this.registry.resolve();for(const t of e){const n=performance.now();await t.init?.(this.ctx);const i=performance.now()-n;i>50&&console.info(`[engine] ${t.constructor.id} init ${i.toFixed(0)}ms`)}return this.input.attach(),addEventListener("resize",this._onResize),this.resize(),this}resize(){const e=Math.max(1,this.canvas.clientWidth||innerWidth),t=Math.max(1,this.canvas.clientHeight||innerHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.viewCamera.aspect=e/t,this.viewCamera.updateProjectionMatrix();for(const n of this.registry.with("resize"))n.resize(e,t,this.ctx);this.events.emit("resize",{width:e,height:t})}start(){this._running||(this._running=!0,this._last=performance.now(),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop))}stop(){this._running=!1}_loop(e){this._running&&(requestAnimationFrame(this._loop),this.step(e))}step(e=performance.now()){const t=this.time,n=Math.min(.1,Math.max(0,(e-this._last)/1e3));this._last=e,t.raw+=n,t.dt=n*t.scale,t.elapsed+=t.dt,t.frame++,this.input.beginFrame(),this._accum+=t.dt;let i=0;const r=this.registry.with("fixedUpdate");for(;this._accum>=Gi&&i<dl;){for(const a of r)a.fixedUpdate(Gi,this.ctx);this._accum-=Gi,i++}i===dl&&(this._accum=0),t.alpha=this._accum/Gi;for(const a of this.registry.with("update"))a.update(t.dt,this.ctx);for(const a of this.registry.with("lateUpdate"))a.lateUpdate(t.dt,this.ctx);const o=this.registry.peek("render");typeof o?.render=="function"&&o.render(this.ctx),this.input.endFrame()}dispose(){this.stop(),removeEventListener("resize",this._onResize),this.input.detach();for(const e of[...this.registry.ordered].reverse())e.dispose?.();this.events.clear()}}const $m=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}
`,At=`
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
`,Km=`
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
`,qs=new ln;qs.setAttribute("position",new Xt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));qs.setAttribute("uv",new Xt(new Float32Array([0,0,2,0,0,2]),2));qs.boundingSphere=new ei(new D,1e8);const ea=new Qn;ea.matrixAutoUpdate=!1;const Zm=new Yo,Ys=new Se(qs,null);Ys.frustumCulled=!1;Ys.matrixAutoUpdate=!1;ea.add(Ys);function sc(s,e,t,n=!1,i=0){Ys.material=e,s.setRenderTarget(t,i),n&&s.clear(!0,!1,!1),s.render(ea,Zm)}class ct{constructor(e,t,n,i={}){this.name=e,this.uniforms=n,this.material=new Qt({name:e,uniforms:n,vertexShader:$m,fragmentShader:t,depthTest:!1,depthWrite:!1,blending:i.blending??pn,defines:i.defines??{},glslVersion:i.glslVersion??null,transparent:i.blending!==void 0&&i.blending!==pn})}render(e,t,n=!1){sc(e,this.material,t,n)}dispose(){this.material.dispose()}}function Je(s,e,t={}){const n=new Zt(Math.max(1,s),Math.max(1,e),{type:qt,format:wt,minFilter:rt,magFilter:rt,wrapS:Ft,wrapT:Ft,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,...t});return n.texture.name=t.name??"hdr",n.texture.colorSpace=Nn,n}const pl=new D,Cs=new D,Jm=new D(0,1,0),Qm=new D(0,0,1),Pr=new Te,ml=new Ne,Dr=new ei,Lr=new D;class e0{constructor(e,t){this.renderer=e,this.cascades=Math.max(1,Math.min(4,t.cascades|0)),this.mapSize=Math.min(t.mapSize??2048,2048),this.maxDistance=t.maxDistance??140,this.lambda=.86,this.backDistance=140,this.enabled=!0,this.rt=new Eh(this.mapSize,this.mapSize,this.cascades,{type:Wt,format:is,minFilter:ft,magFilter:ft,wrapS:Ft,wrapT:Ft,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1}),this.rt.texture.name="csm",this.cameras=[],this.matrices=[];for(let n=0;n<this.cascades;n++){const i=new Zo(-1,1,1,-1,.01,1e3);i.matrixAutoUpdate=!1,this.cameras.push(i),this.matrices.push(new Ne)}this.uniforms={owCsmMaps:{value:this.rt.texture},owCsmMatrix:{value:this.matrices},owCsmSplit:{value:new Te(1e9,1e9,1e9,1e9)},owCsmSplitNear:{value:new Te(0,0,0,0)},owCsmTexel:{value:new Te(.01,.01,.01,.01)},owCsmRange:{value:new Te(1,1,1,1)},owCsmMapSize:{value:new ue(this.mapSize,1/this.mapSize)},owSunDirView:{value:new D(0,1,0)},owSunDirWorld:{value:new D(0,1,0)},owCsmParams:{value:new Te(1,.022,9,0)}},this.depthMaterial=new Qt({name:"csm-depth",side:dn,vertexShader:`
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
      `}),this._splits=new Float32Array(this.cascades+1),this._prevClear=new He,this._fitCenter=[],this._fitRadius=new Float32Array(this.cascades),this._fitBack=new Float32Array(this.cascades);for(let n=0;n<this.cascades;n++)this._fitCenter.push(new D);this._sunAxis=new D(0,1,0),this._culled=[],this._nCulled=0,this.casterCounts=new Int32Array(this.cascades),this.emptyCascades=0}update(e,t,n=.022){const i=e.near,r=Math.min(e.far,this.maxDistance),o=this.cascades,a=this._splits;a[0]=i;for(let p=1;p<o;p++){const f=p/o,w=i*Math.pow(r/i,f),M=i+(r-i)*f;a[p]=this.lambda*w+(1-this.lambda)*M}a[o]=r;const l=Math.tan(zl.degToRad(e.fov*.5)),c=l*e.aspect,h=l*l+c*c,u=this.uniforms.owCsmSplit.value,d=this.uniforms.owCsmSplitNear.value,m=this.uniforms.owCsmTexel.value,g=this.uniforms.owCsmRange.value,v=["x","y","z","w"];for(let p=0;p<o;p++){const f=a[p],w=a[p+1];let M,_;h*h*(w+f)>=w-f?(M=-w,_=w*Math.sqrt(h)):(M=-.5*(w+f)*(1+h),_=.5*Math.sqrt((w-f)*(w-f)+2*(w*w+f*f)*h+(w+f)*(w+f)*h*h)),_=Math.ceil(_*16)/16,Cs.set(0,0,M).applyMatrix4(e.matrixWorld);const E=this.cameras[p],A=Math.abs(t.y)>.98?Qm:Jm;pl.copy(Cs).addScaledVector(t,_+this.backDistance),E.position.copy(pl),E.up.copy(A),E.lookAt(Cs),E.updateMatrix(),E.matrixWorld.copy(E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert(),E.left=-_,E.right=_,E.top=_,E.bottom=-_,E.near=0,E.far=2*_+this.backDistance,E.updateProjectionMatrix(),ml.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),Pr.set(0,0,0,1).applyMatrix4(ml);const R=this.mapSize*.5,L=Pr.x*R,b=Pr.y*R,y=(Math.round(L)-L)/R,U=(Math.round(b)-b)/R;E.projectionMatrix.elements[12]+=y,E.projectionMatrix.elements[13]+=U,E.projectionMatrixInverse.copy(E.projectionMatrix).invert(),this.matrices[p].multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),this._fitCenter[p].copy(Cs),this._fitRadius[p]=_,this._fitBack[p]=this.backDistance,u[v[p]]=w,d[v[p]]=f,m[v[p]]=2*_/this.mapSize,g[v[p]]=E.far-E.near}for(let p=o;p<4;p++)u[v[p]]=1e9,d[v[p]]=1e9,m[v[p]]=.01,g[v[p]]=1;this._sunAxis.copy(t),this.uniforms.owSunDirWorld.value.copy(t),this.uniforms.owSunDirView.value.copy(t).transformDirection(e.matrixWorldInverse).normalize(),this.uniforms.owCsmParams.value.y=n}_cullCascade(e,t,n){const i=this._fitCenter[e],r=this._fitRadius[e],o=32*(2*r)/this.mapSize,a=r+o,l=-r-o,c=r+this._fitBack[e]+o,h=this._sunAxis;let u=0;for(let d=0;d<n;d++){const m=t[d];if(m.visible===!1)continue;if(m.frustumCulled===!1){u++;continue}let g=m.boundingSphere;if(g===void 0){const M=m.geometry;if(M===void 0){u++;continue}M.boundingSphere===null&&M.computeBoundingSphere(),g=M.boundingSphere}else g===null&&(m.computeBoundingSphere(),g=m.boundingSphere);if(g==null){u++;continue}Dr.copy(g).applyMatrix4(m.matrixWorld),Lr.subVectors(Dr.center,i);const v=Lr.dot(h),p=Dr.radius;if(v+p<l||v-p>c){m.visible=!1,this._culled[this._nCulled++]=m;continue}const f=Lr.lengthSq()-v*v,w=a+p;if(f>w*w){m.visible=!1,this._culled[this._nCulled++]=m;continue}u++}return u}_restoreCulled(){for(let e=0;e<this._nCulled;e++)this._culled[e].visible=!0;this._nCulled=0}render(e,t,n=null,i=0){const r=t.overrideMaterial,o=e.autoClear;e.getClearColor(this._prevClear);const a=e.getClearAlpha();t.overrideMaterial=this.depthMaterial,e.autoClear=!1,e.setClearColor(16777215,1),this.emptyCascades=0;for(let l=0;l<this.cascades;l++){const c=n===null?-1:this._cullCascade(l,n,i);this.casterCounts[l]=c,e.setRenderTarget(this.rt,l),e.clear(!0,!0,!1),c!==0?e.render(t,this.cameras[l]):this.emptyCascades++,n!==null&&this._restoreCulled()}t.overrideMaterial=r,e.autoClear=o,e.setClearColor(this._prevClear,a),e.setRenderTarget(null)}snapshotFit(){const e=this.uniforms;return{split:e.owCsmSplit.value.clone(),splitNear:e.owCsmSplitNear.value.clone(),texel:e.owCsmTexel.value.clone(),range:e.owCsmRange.value.clone(),sunView:e.owSunDirView.value.clone(),sunWorld:e.owSunDirWorld.value.clone(),params:e.owCsmParams.value.clone(),matrices:this.matrices.map(t=>t.clone()),splits:this._splits.slice(),sunAxis:this._sunAxis.clone(),fitCenter:this._fitCenter.map(t=>t.clone()),fitRadius:this._fitRadius.slice(),fitBack:this._fitBack.slice(),cameras:this.cameras.map(t=>({position:t.position.clone(),quaternion:t.quaternion.clone(),up:t.up.clone(),left:t.left,right:t.right,top:t.top,bottom:t.bottom,near:t.near,far:t.far,matrix:t.matrix.clone(),matrixWorld:t.matrixWorld.clone(),matrixWorldInverse:t.matrixWorldInverse.clone(),projectionMatrix:t.projectionMatrix.clone(),projectionMatrixInverse:t.projectionMatrixInverse.clone()}))}}restoreFit(e){if(!e)return;const t=this.uniforms;t.owCsmSplit.value.copy(e.split),t.owCsmSplitNear.value.copy(e.splitNear),t.owCsmTexel.value.copy(e.texel),t.owCsmRange.value.copy(e.range),t.owSunDirView.value.copy(e.sunView),t.owSunDirWorld.value.copy(e.sunWorld),t.owCsmParams.value.copy(e.params);for(let n=0;n<this.matrices.length;n++)this.matrices[n].copy(e.matrices[n]);this._splits.set(e.splits),this._sunAxis.copy(e.sunAxis);for(let n=0;n<this._fitCenter.length;n++)this._fitCenter[n].copy(e.fitCenter[n]);this._fitRadius.set(e.fitRadius),this._fitBack.set(e.fitBack);for(let n=0;n<this.cameras.length;n++){const i=this.cameras[n],r=e.cameras[n];i.position.copy(r.position),i.quaternion.copy(r.quaternion),i.up.copy(r.up),i.left=r.left,i.right=r.right,i.top=r.top,i.bottom=r.bottom,i.near=r.near,i.far=r.far,i.matrix.copy(r.matrix),i.matrixWorld.copy(r.matrixWorld),i.matrixWorldInverse.copy(r.matrixWorldInverse),i.projectionMatrix.copy(r.projectionMatrix),i.projectionMatrixInverse.copy(r.projectionMatrixInverse)}}setStrength(e){this.uniforms.owCsmParams.value.x=e}setJitter(e){this.uniforms.owCsmParams.value.w=e}dispose(){this.rt.dispose(),this.depthMaterial.dispose()}}function t0(s,e){const t=e>=3?16:e>=2?12:8,n=e>=3?20:e>=2?14:8,i=e>=2;return`
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
`}const n0=9,Lo=10;class ta{constructor(e,t){this.cascades=t.cascades,this.quality=t.quality,this.key=`ow-patch-${n0}-${t.cascades}-${t.quality}`,this.uniforms={...e,owAoTex:{value:null},owContactTex:{value:null},owSsrTex:{value:null},owScreenTexel:{value:new ue(1/1920,1/1080)},owFeat:{value:new Te(0,0,0,1)},owAoStrength:{value:new ue(1,.6)},owSkyFill:{value:new D(0,0,0)},owGroundFill:{value:new D(0,0,0)},owFillGain:{value:new ue(1,1)},owFillDir:{value:new Te(-.95,.85,-.05,.7)},owIndirect:{value:new Te(1,1,0,0)},owRoomXf:{value:new Te(1,0,0,0)},owRooms:{value:gl(Lo)},owRoomsY:{value:gl(Lo)}},this.chunk=t0(t.cascades,t.quality),this.rooms=this.uniforms.owRooms.value,this.roomsY=this.uniforms.owRoomsY.value,this._patched=new WeakSet,this.count=0}static isLit(e){return!!(e&&(e.isMeshStandardMaterial||e.isMeshPhysicalMaterial||e.isMeshPhongMaterial||e.isMeshLambertMaterial||e.isMeshToonMaterial))}patch(e){if(!e||this._patched.has(e)||!ta.isLit(e)||e.userData?.owNoPatch)return!1;this._patched.add(e),this.count++;const t=this.uniforms,n=this.chunk+i0,i=e.onBeforeCompile,r=e.customProgramCacheKey,o=this.key;return e.onBeforeCompile=function(a,l){typeof i=="function"&&i.call(this,a,l);for(const h in t)a.uniforms[h]=t[h];a.fragmentShader=a.fragmentShader.replace("#include <lights_pars_begin>",`#include <lights_pars_begin>
`+n);const c=Be.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
        directLight.color *= receiveShadow ? owSunShadow( directionalLight.direction, geometryPosition, geometryNormal ) * owContactShadow( directionalLight.direction ) : 1.0;
        // Micro-shadowing. AO belongs on indirect light, but a cascade texel is
        // tens of centimetres wide and the contact ray only runs along the sun
        // direction, so the last centimetre of a wall/soffit junction gets no
        // occlusion from EITHER and the frame comes back with razor-sharp
        // junctions and nothing grounded. A small fraction of the AO term on
        // the direct light is what every shipping renderer uses to close that
        // gap; at 0.35 it costs 2-3% on an open surface and a third of the key
        // in a crevice.
        directLight.color *= mix( 1.0, owSampleAO(), owAoStrength.x * 0.35 );`);a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_begin>",c),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
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
        `)},e.customProgramCacheKey=function(){const a=typeof r=="function"?r.call(this):"";return o+a},e.needsUpdate=!0,!0}setScreenSize(e,t){this.uniforms.owScreenTexel.value.set(1/e,1/t)}dispose(){this._patched=new WeakSet}}function gl(s){const e=new Array(s);for(let t=0;t<s;t++)e[t]=new Te(0,0,0,0);return e}const i0=`
#define OW_ROOMS ${Lo}
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

`,s0=.7;class r0{constructor(){this.rt=null,this.width=1,this.height=1,this.prev=new Map,this._seen=new Set,this.material=new Qt({name:"ow-prepass",glslVersion:Ao,side:An,uniforms:{owPrevModelMatrix:{value:new Ne},owCurrVP:{value:new Ne},owPrevVP:{value:new Ne},owMatId:{value:0},owCoverage:{value:1}},vertexShader:`
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
        ${At}
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
      `}),this.material.onBeforeRender=(e,t,n,i,r)=>{const o=this.material.uniforms,a=this.prev.get(r.id);a!==void 0?o.owPrevModelMatrix.value.copy(a):o.owPrevModelMatrix.value.copy(r.matrixWorld),o.owMatId.value=r.userData!==void 0&&r.userData.owMatId||0,o.owCoverage.value=r.isSkinnedMesh===!0||r.morphTargetInfluences!==void 0&&r.morphTargetInfluences!==null?s0:1,this.material.uniformsNeedUpdate=!0}}setSize(e,t){if(e=Math.max(1,e|0),t=Math.max(1,t|0),this.rt&&this.width===e&&this.height===t)return;this.width=e,this.height=t,this.rt&&this.rt.dispose();const n=new Zt(e,t,{count:3,type:qt,format:wt,minFilter:ft,magFilter:ft,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1});n.textures[0].name="gb-normal",n.textures[1].format=Ri,n.textures[1].type=qt,n.textures[1].name="gb-velocity",n.textures[2].format=is,n.textures[2].type=Wt,n.textures[2].name="gb-depth";for(const i of n.textures)i.minFilter=ft,i.magFilter=ft,i.generateMipmaps=!1;this.rt=n}get normalTexture(){return this.rt.textures[0]}get velocityTexture(){return this.rt.textures[1]}get depthTexture(){return this.rt.textures[2]}render(e,t,n,i,r,o){const a=this.material.uniforms;a.owCurrVP.value.copy(i),a.owPrevVP.value.copy(r);const l=t.overrideMaterial;t.overrideMaterial=this.material,e.setRenderTarget(this.rt),o?e.clear(!0,!0,!1):e.clear(!1,!0,!1),e.render(t,n),t.overrideMaterial=l}beginRecord(){this._seen.clear()}recordMatrices(e,t){for(let n=0;n<t;n++){const i=e[n];this._seen.add(i.id);let r=this.prev.get(i.id);r===void 0&&(r=new Ne,this.prev.set(i.id,r)),r.copy(i.matrixWorld)}}endRecord(){if(this.prev.size>this._seen.size*2+64)for(const e of this.prev.keys())this._seen.has(e)||this.prev.delete(e)}dispose(){this.rt&&this.rt.dispose(),this.material.dispose(),this.prev.clear()}}const o0=`
precision highp float;
${At}

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
`,a0=`
precision highp float;
${At}
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
`,l0=`
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
`;class c0{constructor(){this.core=new ct("ow-gtao",o0,{tDepth:{value:null},tNormal:{value:null},uProjInv:{value:new Ne},uTexel:{value:new ue},uResolution:{value:new ue},uP11:{value:1},uParams:{value:new Te(.9,1.35,0,.4)}}),this.temporal=new ct("ow-gtao-temporal",a0,{tCurrent:{value:null},tHistory:{value:null},tVelocity:{value:null},tNormal:{value:null},uTexel:{value:new ue},uFeedback:{value:.92}}),this.blur=new ct("ow-gtao-blur",l0,{tAo:{value:null},uDirection:{value:new ue},uParams:{value:new ue(0,1.25)}}),this.rtRaw=null,this.rtBlur=null,this.rtFinal=null,this.history=[null,null],this._flip=0,this.texture=null}setSize(e,t){this.dispose(!0);const n={type:qt,format:Ri,name:"gtao"};this.rtRaw=Je(e,t,n),this.rtBlur=Je(e,t,n),this.rtFinal=Je(e,t,n),this.history[0]=Je(e,t,n),this.history[1]=Je(e,t,n),this.core.uniforms.uTexel.value.set(1/e,1/t),this.core.uniforms.uResolution.value.set(e,t),this.temporal.uniforms.uTexel.value.set(1/e,1/t),this._texel=new ue(1/e,1/t)}render(e,t,n,i,r){const o=this.core.uniforms;o.tDepth.value=t.depthTexture,o.tNormal.value=t.normalTexture,o.uProjInv.value.copy(n.projectionMatrixInverse),o.uP11.value=n.projectionMatrix.elements[5],o.uParams.value.z=r?i%64:0,this.core.render(e,this.rtRaw);let a=this.rtRaw;if(r){const c=this.history[this._flip],h=this.history[this._flip^1],u=this.temporal.uniforms;u.tCurrent.value=this.rtRaw.texture,u.tHistory.value=c.texture,u.tVelocity.value=t.velocityTexture,this.temporal.render(e,h),this._flip^=1,a=h}const l=this.blur.uniforms;return l.tAo.value=a.texture,l.uDirection.value.set(this._texel.x,0),l.uParams.value.x=0,this.blur.render(e,this.rtBlur),l.tAo.value=this.rtBlur.texture,l.uDirection.value.set(0,this._texel.y),l.uParams.value.x=1,this.blur.render(e,this.rtFinal),this.texture=this.rtFinal.texture,this.texture}setRadius(e){this.core.uniforms.uParams.value.x=e}setIntensity(e){this.blur.uniforms.uParams.value.y=e}dispose(e=!1){this.rtRaw?.dispose(),this.rtBlur?.dispose(),this.rtFinal?.dispose(),this.history[0]?.dispose(),this.history[1]?.dispose(),this.rtRaw=this.rtBlur=this.rtFinal=null,this.history[0]=this.history[1]=null,e||(this.core.dispose(),this.temporal.dispose(),this.blur.dispose())}}const h0=`
precision highp float;
${At}

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
`,u0=`
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
`;class d0{constructor(){this.pass=new ct("ow-contact",h0,{tDepth:{value:null},tNormal:{value:null},uProj:{value:new Ne},uProjInv:{value:new Ne},uSunDirView:{value:new D(0,1,0)},uParams:{value:new Te(.4,.42,0,1)}}),this.blur=new ct("ow-contact-blur",u0,{tSrc:{value:null},uDirection:{value:new ue}}),this.rtA=null,this.rtB=null,this.texture=null}setLength(e){this.pass.uniforms.uParams.value.x=e}setStrength(e){this.pass.uniforms.uParams.value.w=e}setSize(e,t){this.rtA?.dispose(),this.rtB?.dispose();const n={type:qt,format:Ri,name:"contact"};this.rtA=Je(e,t,n),this.rtB=Je(e,t,n),this._texel=new ue(1/e,1/t)}render(e,t,n,i,r){const o=this.pass.uniforms;o.tDepth.value=t.depthTexture,o.tNormal.value=t.normalTexture,o.uProj.value.copy(n.projectionMatrix),o.uProjInv.value.copy(n.projectionMatrixInverse),o.uSunDirView.value.copy(i),o.uParams.value.z=r%64,this.pass.render(e,this.rtA);const a=this.blur.uniforms;return a.tSrc.value=this.rtA.texture,a.uDirection.value.set(this._texel.x,0),this.blur.render(e,this.rtB),a.tSrc.value=this.rtB.texture,a.uDirection.value.set(0,this._texel.y),this.blur.render(e,this.rtA),this.texture=this.rtA.texture,this.texture}dispose(){this.rtA?.dispose(),this.rtB?.dispose(),this.pass.dispose(),this.blur.dispose()}}const f0=`
precision highp float;
${At}

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
`,p0=`
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
`;class m0{constructor(){this.pass=new ct("ow-ssr",f0,{tColor:{value:null},tDepth:{value:null},tNormal:{value:null},tVelocity:{value:null},uProj:{value:new Ne},uProjInv:{value:new Ne},uTexel:{value:new ue},uParams:{value:new Te(24,.6,0,1)}}),this.blur=new ct("ow-ssr-blur",p0,{tSrc:{value:null},uDirection:{value:new ue}}),this.rtA=null,this.rtB=null,this.texture=null}setSize(e,t){this.rtA?.dispose(),this.rtB?.dispose();const n=Math.max(1,e>>1),i=Math.max(1,t>>1);this.rtA=Je(n,i,{name:"ssr"}),this.rtB=Je(n,i,{name:"ssr-blur"}),this.pass.uniforms.uTexel.value.set(1/n,1/i),this._texel=new ue(1/n,1/i)}render(e,t,n,i,r){const o=this.pass.uniforms;o.tColor.value=n,o.tDepth.value=t.depthTexture,o.tNormal.value=t.normalTexture,o.tVelocity.value=t.velocityTexture,o.uProj.value.copy(i.projectionMatrix),o.uProjInv.value.copy(i.projectionMatrixInverse),o.uParams.value.z=r%64,this.pass.render(e,this.rtA);const a=this.blur.uniforms;return a.tSrc.value=this.rtA.texture,a.uDirection.value.set(this._texel.x,0),this.blur.render(e,this.rtB),a.tSrc.value=this.rtB.texture,a.uDirection.value.set(0,this._texel.y),this.blur.render(e,this.rtA),this.texture=this.rtA.texture,this.texture}dispose(){this.rtA?.dispose(),this.rtB?.dispose(),this.pass.dispose(),this.blur.dispose()}}const vl=(()=>{const s=(t,n)=>{let i=1,r=0;for(;t>0;)i/=n,r+=i*(t%n),t=Math.floor(t/n);return r},e=[];for(let t=1;t<=16;t++)e.push([s(t,2)-.5,s(t,3)-.5]);return e})(),g0=`
precision highp float;
${At}

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
`;class v0{constructor(){this.pass=new ct("ow-taa",g0,{tCurrent:{value:null},tHistory:{value:null},tVelocity:{value:null},tNormal:{value:null},tDepth:{value:null},uTexel:{value:new ue},uResolution:{value:new ue},uInvVP:{value:new Ne},uPrevVP:{value:new Ne},uParams:{value:new Te(.92,1.25,1,1)}}),this.history=[null,null],this._flip=0,this.index=0,this.jitter=new ue,this.texture=null,this._needsReset=!0}setSize(e,t){this.history[0]?.dispose(),this.history[1]?.dispose(),this.history[0]=Je(e,t,{name:"taa-a"}),this.history[1]=Je(e,t,{name:"taa-b"}),this.pass.uniforms.uTexel.value.set(1/e,1/t),this.pass.uniforms.uResolution.value.set(e,t),this._needsReset=!0}nextJitter(){const e=vl[this.index%vl.length];return this.index++,this.jitter.set(e[0],e[1]),this.jitter}reset(){this._needsReset=!0}render(e,t,n,i,r){const o=this.pass.uniforms;o.tCurrent.value=t,o.tHistory.value=this.history[this._flip].texture,o.tVelocity.value=n.velocityTexture,o.tNormal.value=n.normalTexture,o.tDepth.value=n.depthTexture,o.uInvVP.value.copy(i),o.uPrevVP.value.copy(r),o.uParams.value.z=this._needsReset?1:0,this._needsReset=!1;const a=this.history[this._flip^1];return this.pass.render(e,a),this._flip^=1,this.texture=a.texture,this.texture}get previousTexture(){return this.history[this._flip].texture}dispose(){this.history[0]?.dispose(),this.history[1]?.dispose(),this.pass.dispose()}}const _0=`
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
`,x0=`
precision highp float;
${At}
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
`;class w0{constructor(){this.tilePass=new ct("ow-mb-tile",_0,{tVelocity:{value:null},uTexel:{value:new ue}}),this.blurPass=new ct("ow-mb",x0,{tColor:{value:null},tVelocity:{value:null},tTile:{value:null},tDepth:{value:null},tNormal:{value:null},uTexel:{value:new ue},uResolution:{value:new ue},uParams:{value:new Te(.5,48,0,1)}}),this.tileRt=null,this.outRt=null}setSize(e,t){this.tileRt?.dispose(),this.outRt?.dispose();const n=Math.max(1,Math.ceil(e/16)),i=Math.max(1,Math.ceil(t/16));this.tileRt=Je(n,i,{format:Ri,name:"mb-tile"}),this.outRt=Je(e,t,{name:"mb"}),this.tilePass.uniforms.uTexel.value.set(1/e,1/t),this.blurPass.uniforms.uTexel.value.set(1/e,1/t),this.blurPass.uniforms.uResolution.value.set(e,t)}render(e,t,n,i,r){this.tilePass.uniforms.tVelocity.value=n.velocityTexture,this.tilePass.render(e,this.tileRt);const o=this.blurPass.uniforms;return o.tColor.value=t,o.tVelocity.value=n.velocityTexture,o.tTile.value=this.tileRt.texture,o.tDepth.value=n.depthTexture,o.tNormal.value=n.normalTexture,o.uParams.value.x=r,o.uParams.value.z=i%64,this.blurPass.render(e,this.outRt),this.outRt.texture}dispose(){this.tileRt?.dispose(),this.outRt?.dispose(),this.tilePass.dispose(),this.blurPass.dispose()}}const rc=`
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
`,M0=`
precision highp float;
${At}
${rc}
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
`,S0=`
precision highp float;
${At}
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
`,y0=`
precision highp float;
${At}
${rc}
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
`;class b0{constructor(){const e=new Te(5,.6,3,20),t=new Te(1.2,20,.55,0);this.pre=new ct("ow-dof-pre",M0,{tColor:{value:null},tDepth:{value:null},uSrcTexel:{value:new ue},uFocus:{value:e},uRange:{value:t}}),this.gather=new ct("ow-dof-gather",S0,{tSrc:{value:null},uTexel:{value:new ue},uParams:{value:new ue(5,0)}}),this.combine=new ct("ow-dof-combine",y0,{tColor:{value:null},tBlur:{value:null},tDepth:{value:null},uFocus:{value:e},uRange:{value:t}}),this._focus=e,this._range=t,this.rtA=null,this.rtB=null,this.width=1,this.height=1}setSize(e,t){this.rtA?.dispose(),this.rtB?.dispose();const n=Math.max(1,e>>1),i=Math.max(1,t>>1);this.rtA=Je(n,i,{name:"dof-a"}),this.rtB=Je(n,i,{name:"dof-b"}),this.width=e,this.height=t,this.pre.uniforms.uSrcTexel.value.set(1/e,1/t),this.gather.uniforms.uTexel.value.set(1/n,1/i)}render(e,t,n,i,r,o,a){const l=o.dofMaxCoc*(this.height/1080)*r;this._focus.set(l,o.dofNearRatio,o.dofFocusMin,o.dofFocusMax),this._range.set(o.dofFarStart,o.dofFarRange,o.dofNearScale,0);const c=this.pre.uniforms;c.tColor.value=t,c.tDepth.value=n.depthTexture,this.pre.render(e,this.rtA);const h=this.gather.uniforms;h.tSrc.value=this.rtA.texture,h.uParams.value.set(l,a%64),this.gather.render(e,this.rtB);const u=this.combine.uniforms;return u.tColor.value=t,u.tBlur.value=this.rtB.texture,u.tDepth.value=n.depthTexture,this.combine.render(e,i),i.texture}dispose(){this.rtA?.dispose(),this.rtB?.dispose(),this.pre.dispose(),this.gather.dispose(),this.combine.dispose()}}const E0=`
precision highp float;
${At}
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
`,T0=`
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
`;class A0{constructor(e=6){this.levels=e,this.down=new ct("ow-bloom-down",E0,{tSrc:{value:null},tExposure:{value:null},uTexel:{value:new ue},uParams:{value:new Te(0,1,.6,0)}}),this.threshold=1,this.knee=.6,this.up=new ct("ow-bloom-up",T0,{tSrc:{value:null},uTexel:{value:new ue},uRadius:{value:1},uWeight:{value:.5}}),this.up.material.blending=Kn,this.up.material.premultipliedAlpha=!1,this.up.material.transparent=!0,this.mips=[],this.texture=null}setSize(e,t){for(const r of this.mips)r.rt.dispose();this.mips.length=0;let n=e,i=t;for(let r=0;r<this.levels&&(n=Math.max(1,Math.floor(n/2)),i=Math.max(1,Math.floor(i/2)),this.mips.push({rt:Je(n,i,{name:`bloom${r}`}),w:n,h:i}),!(n<=2||i<=2));r++);}render(e,t,n,i,r){const o=this.mips.length;if(o===0)return null;const a=this.down.uniforms;a.tExposure.value=r;for(let c=0;c<o;c++){const h=c===0?t:this.mips[c-1].rt.texture,u=c===0?n:this.mips[c-1].w,d=c===0?i:this.mips[c-1].h;a.tSrc.value=h,a.uTexel.value.set(1/u,1/d),a.uParams.value.set(c===0?1:0,this.threshold,this.knee,0),this.down.render(e,this.mips[c].rt)}const l=this.up.uniforms;for(let c=o-1;c>0;c--){l.tSrc.value=this.mips[c].rt.texture,l.uTexel.value.set(1/this.mips[c].w,1/this.mips[c].h);const h=c>=o-2;l.uRadius.value=h?.62:1,l.uWeight.value=h?.34:.5,this.up.render(e,this.mips[c-1].rt)}return l.uWeight.value=.5,this.texture=this.mips[0].rt.texture,this.texture}dispose(){for(const e of this.mips)e.rt.dispose();this.mips.length=0,this.down.dispose(),this.up.dispose()}}const R0=`
precision highp float;
${At}
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
`,C0=`
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
`,P0=`
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
`;class D0{constructor(){this.logPass=new ct("ow-loglum",R0,{tSrc:{value:null},tDepth:{value:null},uTexel:{value:new ue},uMeter:{value:new Te(.15,400,40,0)},uSkyKnee:{value:new ue(.06,.3)}}),this.reducePass=new ct("ow-reduce",C0,{tSrc:{value:null},uTexel:{value:new ue}}),this.adaptPass=new ct("ow-adapt",P0,{tSrc:{value:null},tPrev:{value:null},uParams:{value:new Te(.016,1.4,3.2,0)},uLimits:{value:new Te(-4,16,1,1)}});const e={type:Wt,format:wt,name:"exposure"};this.rt64=Je(64,64,e),this.rt16=Je(16,16,e),this.rt4=Je(4,4,e),this.rt1=Je(1,1,e),this.adapt=[Je(1,1,e),Je(1,1,e)],this._flip=0,this.enabled=!0,this.manual=1,this._reset=!0}get texture(){return this.adapt[this._flip].texture}reset(){this._reset=!0}update(e,t,n,i,r,o,a,l){const c=this.logPass.uniforms;c.tSrc.value=t,c.tDepth.value=l??null,c.uMeter.value.w=l?1:0,c.uTexel.value.set(1/n,1/i),this.logPass.render(e,this.rt64);const h=this.reducePass.uniforms;h.tSrc.value=this.rt64.texture,h.uTexel.value.set(1/64,1/64),this.reducePass.render(e,this.rt16),h.tSrc.value=this.rt16.texture,h.uTexel.value.set(1/16,1/16),this.reducePass.render(e,this.rt4),h.tSrc.value=this.rt4.texture,h.uTexel.value.set(1/4,1/4),this.reducePass.render(e,this.rt1);const u=this.adaptPass.uniforms;u.tSrc.value=this.rt1.texture,u.tPrev.value=this.adapt[this._flip].texture,u.uParams.value.x=Math.min(r,.1),u.uParams.value.w=o,u.uLimits.value.z=this._reset?1:0,u.uLimits.value.w=a,this._reset=!1;const d=this.adapt[this._flip^1];return this.adaptPass.render(e,d),this._flip^=1,d.texture}setLimits(e,t){this.adaptPass.uniforms.uLimits.value.x=e,this.adaptPass.uniforms.uLimits.value.y=t}dispose(){this.rt64.dispose(),this.rt16.dispose(),this.rt4.dispose(),this.rt1.dispose(),this.adapt[0].dispose(),this.adapt[1].dispose(),this.logPass.dispose(),this.reducePass.dispose(),this.adaptPass.dispose()}}const L0=33,vi=[.2126,.7152,.0722],_l={default:{slope:[1,.995,.985],offset:[-.004,-.002,.004],power:[1,1.005,1.02],shadowTint:[-.001,.006,.022],highlightTint:[.03,.014,-.006],saturation:1.2,contrast:1.28,pivot:.5,highlightDesat:.1,toe:.008,shoulder:.6,shoulderSoft:1.2}};function U0(s){const e=Math.min(.98,Math.max(.05,s.shoulder)),t=Math.max(.001,s.shoulderSoft??.55*(1-e)),n=s.pivot*Math.pow(1/s.pivot,s.contrast),i=1-Math.exp(-Math.max(n-e,.001)/t);return{k:e,s:t,norm:i}}function I0(s,e,t){let n=s[0],i=s[1],r=s[2];n=Math.pow(Math.max(0,n*e.slope[0]+e.offset[0]),e.power[0]),i=Math.pow(Math.max(0,i*e.slope[1]+e.offset[1]),e.power[1]),r=Math.pow(Math.max(0,r*e.slope[2]+e.offset[2]),e.power[2]);const o=n*vi[0]+i*vi[1]+r*vi[2],a=Math.pow(1-Math.min(1,o),2.2),l=Math.pow(Math.min(1,o),2);n+=e.shadowTint[0]*a+e.highlightTint[0]*l,i+=e.shadowTint[1]*a+e.highlightTint[1]*l,r+=e.shadowTint[2]*a+e.highlightTint[2]*l;const c=n*vi[0]+i*vi[1]+r*vi[2];n=c+(n-c)*e.saturation,i=c+(i-c)*e.saturation,r=c+(r-c)*e.saturation;const h=e.highlightDesat*Math.pow(Math.min(1,Math.max(0,c)),3);n+=(c-n)*h,i+=(c-i)*h,r+=(c-r)*h;const u=d=>{const m=Math.max(0,d);let g=m<=0?0:e.pivot*Math.pow(m/e.pivot,e.contrast);return g>t.k&&(g=t.k+(1-t.k)*((1-Math.exp(-(g-t.k)/t.s))/t.norm)),e.toe+(1-e.toe)*Math.min(1,Math.max(0,g))};return[u(n),u(i),u(r)]}function F0(s="default"){const e=_l[s]??_l.default,t=U0(e),n=L0,i=new Uint8Array(n*n*n*4);let r=0;for(let a=0;a<n;a++)for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=[c/(n-1),l/(n-1),a/(n-1)],u=I0(h,e,t);i[r++]=Math.round(Math.min(1,Math.max(0,u[0]))*255),i[r++]=Math.round(Math.min(1,Math.max(0,u[1]))*255),i[r++]=Math.round(Math.min(1,Math.max(0,u[2]))*255),i[r++]=255}const o=new Hl(i,n,n,n);return o.format=wt,o.type=Kt,o.minFilter=rt,o.magFilter=rt,o.wrapS=Ft,o.wrapT=Ft,o.wrapR=Ft,o.unpackAlignment=1,o.needsUpdate=!0,o.name="ow-grade-lut",{texture:o,size:n}}const N0=`
precision highp float;
${At}
${Km}

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
`,O0=`
precision highp float;
${At}
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
`,B0=`
precision highp float;
${At}
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
`;function k0(){return new ct("ow-view-composite",B0,{tColor:{value:null},tView:{value:null},uTexel:{value:new ue}})}const z0=`
precision highp float;
${At}
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
`;function V0(){return new ct("ow-debug",z0,{tSrc:{value:null},uMode:{value:0}})}function H0(s){return new ct("ow-composite",N0,{tColor:{value:null},tBloom:{value:null},tExposure:{value:null},tLut:{value:s.texture},uTexel:{value:new ue},uResolution:{value:new ue},uLens:{value:new Te(.0016,.24,.01,0)},uGrade:{value:new Te(.05,.85,.22,s.size)},uLook:{value:new Te(1,1,1.08,1)}})}function G0(){return new ct("ow-fxaa",O0,{tColor:{value:null},uTexel:{value:new ue}})}function W0(s,e,t){const n=Math.max(-.2,s.y),i=s.x*e.x+s.y*e.y+s.z*e.z,r=Math.acos(Math.min(1,Math.max(-1,i))),o=Math.max(0,e.y),a=Math.pow(Math.max(.02,o),.45),l=Math.pow(1-Math.max(0,n),5),c=[.14,.28,.62],h=[.72,.76,.82];let u=c[0]+(h[0]-c[0])*l,d=c[1]+(h[1]-c[1])*l,m=c[2]+(h[2]-c[2])*l;const g=1.5*Math.exp(-r*3.2)+.35*Math.exp(-r*.6),v=[1,.72,.42];u+=g*v[0]*.55,d+=g*v[1]*.55,m+=g*v[2]*.55;const p=Math.pow(1-Math.min(1,o*2.4),2);u*=1+p*.5,d*=1-p*.12,m*=1-p*.35;let f=.34*a;if(s.y<0){const w=Math.min(1,-s.y*3),M=.62;return t[0]=(u*(1-w)+M*1.05*w)*f,t[1]=(d*(1-w)+M*.95*w)*f,t[2]=(m*(1-w)+M*.78*w)*f,t}return t[0]=u*f,t[1]=d*f,t[2]=m*f,t}function X0(s,e){const i=new Uint16Array(524288),r=new D,o=[0,0,0],a=Ro.toHalfFloat;let l=0;for(let d=0;d<256;d++){const m=(1-(d+.5)/256)*Math.PI,g=Math.sin(m),v=Math.cos(m);for(let p=0;p<512;p++){const f=(p+.5)/512*Math.PI*2-Math.PI;r.set(g*Math.sin(f),v,g*Math.cos(f)),W0(r,e,o),i[l++]=a(o[0]),i[l++]=a(o[1]),i[l++]=a(o[2]),i[l++]=a(1)}}const c=new jo(i,512,256,wt,qt);c.mapping=Bs,c.minFilter=rt,c.magFilter=rt,c.colorSpace=rn,c.needsUpdate=!0;const h=new Po(s);h.compileEquirectangularShader();const u=h.fromEquirectangular(c);return h.dispose(),u.texture.name="ow-fallback-env",{target:u,equirect:c}}function Ur(s,e,t){const n=(c,h)=>t[t[c&255]+(h&255)&255]/255,i=c=>c*c*(3-2*c);let r=.5,o=1,a=0,l=0;for(let c=0;c<5;c++){const h=s*o,u=e*o,d=Math.floor(h),m=Math.floor(u),g=i(h-d),v=i(u-m),p=n(d,m),f=n(d+1,m),w=n(d,m+1),M=n(d+1,m+1),_=p+(f-p)*g+(w-p)*v+(p-f-w+M)*g*v;a+=_*r,l+=r,r*=.5,o*=2.07}return a/l}function Ir(s,e,t){const n=new Uint8Array(256);for(let d=0;d<256;d++)n[d]=s.int(0,255);const i=new Uint8Array(e*e*4),r=new Uint8Array(e*e*4),o=new Uint8Array(e*e*4),a=new Float32Array(e*e),l=t.scale??6;for(let d=0;d<e;d++)for(let m=0;m<e;m++){const g=m/e*l,v=d/e*l;let p=Ur(g,v,n);const f=Ur(g*7.3,v*7.3,n);if(p=p*.75+f*.25,t.cracks){const w=Math.abs(Ur(g*1.7+5.5,v*1.7-2.2,n)-.5)*2;p-=Math.pow(1-Math.min(1,w*3.2),6)*.55}a[d*e+m]=p}const c=t.base,h=t.variation??.22;for(let d=0;d<e;d++)for(let m=0;m<e;m++){const g=d*e+m,v=a[g],p=Math.pow(1-v,2.2),f=1-h*.5+v*h,w=c[0]*f*(1-p*.35),M=c[1]*f*(1-p*.38),_=c[2]*f*(1-p*.42);i[g*4]=Math.min(255,w*255),i[g*4+1]=Math.min(255,M*255),i[g*4+2]=Math.min(255,_*255),i[g*4+3]=255;const E=(t.rough??.75)+(v-.5)*(t.roughVar??.3);o[g*4]=255,o[g*4+1]=Math.max(0,Math.min(255,E*255)),o[g*4+2]=0,o[g*4+3]=255;const A=a[d*e+(m+1)%e],R=a[d*e+(m-1+e)%e],L=a[(d+1)%e*e+m],b=a[(d-1+e)%e*e+m],y=(t.bump??2.4)*e*.004,U=(R-A)*y,B=(b-L)*y,k=Math.hypot(U,B,1);r[g*4]=(U/k*.5+.5)*255,r[g*4+1]=(B/k*.5+.5)*255,r[g*4+2]=1/k*.5*255+127,r[g*4+3]=255}const u=(d,m)=>{const g=new jo(d,e,e,wt);return g.wrapS=g.wrapT=Zn,g.minFilter=an,g.magFilter=rt,g.generateMipmaps=!0,g.anisotropy=8,g.colorSpace=m?Et:rn,g.needsUpdate=!0,g};return{map:u(i,!0),normalMap:u(r,!1),ormMap:u(o,!1)}}const xl=[[12,18],[-8.5,3.2],[3.2,5],[16,22],[6,10],[4,12],[2.5,6]];function Fr(s,e,t,n,i){const r=t+i,o=n+i;for(let a=0;a<xl.length;a++){const l=xl[a];if(Math.abs(l[0]-s)<r&&Math.abs(l[1]-e)<o)return!1}return!0}class q0{constructor(e){this.rng=e,this.group=new Nt,this.group.name="ow-render-probe",this.group.userData.owProbe=!0,this.disposables=[],this.built=!1}build(){if(this.built)return this.group;this.built=!0;const e=this.rng,t=Ir(e,256,{base:[.42,.41,.39],rough:.82,roughVar:.3,cracks:!0,bump:2,scale:5}),n=Ir(e,256,{base:[.16,.16,.17],rough:.62,roughVar:.42,bump:3,scale:9}),i=Ir(e,256,{base:[.36,.24,.16],rough:.5,roughVar:.45,bump:2.2,scale:4});this.disposables.push(...Object.values(t),...Object.values(n),...Object.values(i));const r=(v,p={})=>{const f=new ji({map:v.map,normalMap:v.normalMap,roughnessMap:v.ormMap,metalnessMap:v.ormMap,roughness:1,metalness:p.metalness??0,normalScale:new ue(p.normalScale??1,p.normalScale??1),envMapIntensity:1});return this.disposables.push(f),f},o=r(n);o.map.repeat.set(18,18),o.normalMap.repeat.set(18,18),o.roughnessMap.repeat.set(18,18);const a=new Li(120,120,1,1);a.rotateX(-Math.PI/2);const l=new Se(a,o);l.receiveShadow=!0,this.disposables.push(a),this.group.add(l);const c=r(t,{normalScale:1.2});c.map.repeat.set(3,3),c.normalMap.repeat.set(3,3),c.roughnessMap.repeat.set(3,3);const h=new Jt(1,1,1);this.disposables.push(h);for(let v=0;v<14;v++){const p=v%2===0?-1:1,f=e.range(4,8),w=e.range(4,11),M=e.range(5,9),_=-22+v*3.4+e.range(-1,1);let E=p*e.range(9,13);for(let R=0;R<4&&!Fr(E,_,f/2,M/2,1.5);R++)E+=p*2.5;if(!Fr(E,_,f/2,M/2,1.5))continue;const A=new Se(h,c);A.scale.set(f,w,M),A.position.set(E,w/2,_),A.rotation.y=e.range(-.05,.05),A.castShadow=!0,A.receiveShadow=!0,this.group.add(A)}const u=r(i,{metalness:0,normalScale:1.4});for(let v=0;v<22;v++){const p=e.range(.4,1.1),f=p*e.range(.7,1.2),w=e.range(-8,8),M=e.range(-14,14),_=e.range(0,Math.PI*2);if(!Fr(w,M,p*.71,p*.71,.9))continue;const E=new Se(h,u);E.scale.set(p,f,p),E.position.set(w,f/2,M),E.rotation.y=_,E.castShadow=!0,E.receiveShadow=!0,this.group.add(E)}const d=new ns(.55,48,32);this.disposables.push(d);for(let v=0;v<4;v++){const p=new ji({color:new He().setHSL(.08,.05,.62),metalness:1,roughness:.06+v*.14,envMapIntensity:1});this.disposables.push(p);const f=new Se(d,p);f.position.set(-3+v*2,.55,3),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f)}const m=new ns(.12,16,12),g=new ji({color:0,emissive:new He(1,.72,.42),emissiveIntensity:40,roughness:1});this.disposables.push(m,g);for(let v=0;v<3;v++){const p=new Se(m,g);p.position.set(-9.5,4.2,-10+v*9),this.group.add(p);const f=new Ko(16756848,12,18,2);f.position.copy(p.position),this.group.add(f)}return this.group}dispose(){for(const e of this.disposables)e.dispose?.();this.disposables.length=0,this.group.clear()}}const Y0={low:0,medium:1,high:2,ultra:3},j0=30,wl=4.6;class $0{static id="render";static deps=[];async init(e){this.ctx=e;const t=e.config,n=t.q;this.q=n,this.qLevel=Y0[t.quality]??3,this.rng=e.rng.fork(),this.frame=0;const i=new Vm({canvas:e.canvas,antialias:!1,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});if(!i.capabilities.isWebGL2)throw new Error("[render] WebGL2 is required");i.autoClear=!1,i.autoClearColor=!1,i.autoClearDepth=!1,i.info.autoReset=!1,i.outputColorSpace=Et,i.toneMapping=En,i.shadowMap.enabled=!0,i.shadowMap.type=Cl,i.shadowMap.autoUpdate=!0,i.setClearColor(0,1),this.renderer=i;const r=i.compile.bind(i);i.compile=(c,h,u)=>(c===e.scene?this._patchLikeFrame(e.scene,!1):c===e.viewScene&&this._patchLikeFrame(e.viewScene,!0),r(c,h,u)),this.maxAnisotropy=Math.min(n.anisotropy,i.capabilities.getMaxAnisotropy()),this.csm=new e0(i,{cascades:n.cascades,mapSize:n.shadowMapSize,maxDistance:n.shadowDistance}),this.patcher=new ta(this.csm.uniforms,{cascades:this.csm.cascades,quality:this.qLevel}),this.gbuffer=new r0,this.gtao=n.gtao?new c0:null,this.contact=this.qLevel>=1?new d0:null,this.ssr=n.ssr?new m0:null,this.taa=n.taa?new v0:null,this.motionBlur=n.motionBlur?new w0:null,this.dof=this.qLevel>=1?new b0:null,this.bloom=n.bloom?new A0(this.qLevel>=2?6:5):null,this.exposure=new D0,this.exposure.setLimits(-4.3,20),this.lut=F0("default"),this.composite=H0(this.lut),this.viewComposite=k0(),this.fxaa=n.taa?null:G0(),this._viewSamples=this.qLevel>=2?4:this.qLevel>=1?2:0,this.needsPrepass=!0,this.hdrRt=null,this.viewRt=null,this.ldrRt=null,this.pingRt=[null,null],this._pingIndex=0,this._adsT=0,this._weapons=null,this._tmpV3=new D,this._tmpV3b=new D,this._fillHue=new D,this._fillHue2=new D,this._fillSkySave=new D,this._fillGroundSave=new D,this._ambLevel=.6,this._roomsReady=!1,this._skyExposureBias=0,this.sun=new xi(16771268,4.3),this.sun.name="ow-fallback-sun",this.sun.position.set(-42,46,26),this.sun.castShadow=!1,this.sun.target.position.set(0,0,0),e.scene.add(this.sun),e.scene.add(this.sun.target),this.activeSun=this.sun,this.sunDir=new D(0,1,0),this.sunDirView=new D(0,1,0),this.viewSun=new xi(16771268,2),this.viewSun.name="ow-viewmodel-key",this.viewKeyFill=new xi(10405119,.6),this.viewKeyFill.name="ow-viewmodel-fill",this.viewRim=new xi(16766888,1),this.viewRim.name="ow-viewmodel-rim",this.viewFill=new Zl(9418495,3551274,.35),this.viewBounce=new xi(16758906,.5),this.viewBounce.name="ow-viewmodel-bounce",this._viewKeyDir=new D(-.45,.75,.55).normalize(),this._viewFillDir=new D(.6,-.15,.5).normalize(),this._viewRimDir=new D(.2,.35,-.9).normalize(),this._viewBounceDir=new D(-.2,-.86,.47).normalize(),this._tmpV3c=new D;for(const c of[this.viewSun,this.viewKeyFill,this.viewRim,this.viewBounce])c.castShadow=!1,e.viewScene.add(c,c.target);e.viewScene.add(this.viewFill),this._viewRigChildren=e.viewScene.children.length;const o=X0(i,this._dirFromLight(this.sun,this.sunDir));this.envTarget=o.target,this.envEquirect=o.equirect,this.envMap=this.envTarget.texture,e.scene.environment||(e.scene.environment=this.envMap),e.scene.background||(e.scene.background=this.envEquirect),e.viewScene.environment=e.scene.environment,this._assignedViewEnv=e.scene.environment,this.passes=[],this.lights=[],this._draw=[],this._nDraw=0,this._hide=[],this._nHide=0,this._noShadow=[],this._nNoShadow=0,this._dirLights=[],this._nDirLights=0,this._foreignMeshes=0,this._currVP=new Ne,this._prevVP=new Ne,this._invVP=new Ne,this._camPos=new D,this._jitterSaved=new ue,this._viewVisible=!1,this._readback=new Float32Array(4),this._readback2=new Float32Array(4),this._jittered=!1,this._firstFrame=!0,this.screenSize={width:1,height:1},this.displaySize={width:1,height:1},this.depthTexture=null,this.velocityTexture=null,this.normalTexture=null,this.aoTexture=null,this.exposureTexture=this.exposure.texture,this.settings={exposureBias:0,exposureKey:1.06,autoExposure:!0,bloomStrength:.14,bloomThreshold:1.6,bloomKnee:.9,chromatic:.0011,vignette:.24,adsVignette:.34,grain:.01,dofMaxCoc:3.3,dofNearRatio:.38,dofFocusMin:3,dofFocusMax:18,dofFarStart:1.15,dofFarRange:18,dofNearScale:.55,sharpen:.25,lutStrength:1,shutter:.42,aoRadius:1.35,aoIntensity:1.1,contactLength:.4,contactStrength:1,skyFill:.32,groundFill:.013,bounceFill:.008,iblDiffuse:.03,interiorIndirect:.035,practicalGain:.55,viewFillOcclusion:.45,viewKeyScale:.55,viewKeyMax:2.6,viewFillRatio:.3,viewRimRatio:.5,viewHemiRatio:.16,viewBounceRatio:.34,viewKeyGamma:.65,shadowStrength:1,sunSoftness:.024},this._applySettings(),this.probe=new q0(this.rng.fork()),this.probeActive=!1,this._probeExposure=e.config.deterministic===!0,this.debugView=new URLSearchParams(location.search).get("rview")||null,this._debugPass=null,this._noCascadeCull=/[?&]owNoCascadeCull=1/.test(location.search),this._visit=this._visit.bind(this),this._visitView=this._visitView.bind(this);const a=e.canvas.clientWidth||1920,l=e.canvas.clientHeight||1080;this.resize(a,l,e),console.info(`[render] WebGL2 · ${t.quality} · ${this.csm.cascades}x${this.csm.mapSize} CSM · taa:${!!this.taa} gtao:${!!this.gtao} ssr:${!!this.ssr} mb:${!!this.motionBlur}`)}registerPass(e){return this.passes.push(e),this.passes.sort((t,n)=>(t.order??0)-(n.order??0)),e.resize&&e.resize(this.screenSize.width,this.screenSize.height),()=>{const t=this.passes.indexOf(e);t>=0&&this.passes.splice(t,1)}}addLight(e,t={}){return!e||this.lights.some(n=>n.light===e)||this.lights.push({light:e,range:t.range??e.distance??25,priority:t.priority??1,baseIntensity:e.intensity}),e}removeLight(e){const t=this.lights.findIndex(n=>n.light===e);t>=0&&this.lights.splice(t,1)}requestEnvMap(){return this.ctx?.scene.environment??this.envMap}setEnvMap(e){this.ctx.scene.environment=e,this.ctx.viewScene.environment=e,this.envMap=e}patchMaterials(e){e.traverse(t=>{const n=t.material;if(n)if(Array.isArray(n))for(const i of n)this.patcher.patch(i);else this.patcher.patch(n)})}_patchLikeFrame(e,t){e.traverseVisible(n=>{if(t){if(n.isMesh!==!0)return}else if(n.isMesh!==!0&&n.isPoints!==!0&&n.isSprite!==!0&&n.isLine!==!0)return;const i=n.material;if(Array.isArray(i))for(let r=0;r<i.length;r++)this.patcher.patch(i[r]);else i&&this.patcher.patch(i)})}setExposureBias(e){this.settings.exposureBias=e}async prewarmMaterials({post:e=!0,shadow:t=this.frame===0}={}){const n=performance.now(),i=this.renderer,r=this.ctx;if(!i||!r)return{ok:!1,reason:"not initialised"};const o=i.info.programs?.length??0,a=i.getRenderTarget();try{this._patchLikeFrame(r.scene,!1),this._patchLikeFrame(r.viewScene,!0);try{await i.compileAsync(r.scene,r.camera),await i.compileAsync(r.viewScene,r.viewCamera)}catch{i.compile(r.scene,r.camera),i.compile(r.viewScene,r.viewCamera)}if(t){const c=r.camera;c.updateMatrixWorld(),this._collect(r.scene),this._syncSun(c);const h=r.scene.background,u=this.csm.snapshotFit(),d={dir:this.sunDir.clone(),dirView:this.sunDirView.clone(),active:this.activeSun,fallbackVisible:this.sun.visible,ambLevel:this._ambLevel};r.scene.background=null,this._hideList(this._hide,this._nHide),this._hideList(this._noShadow,this._nNoShadow),this.csm.update(c,this.sunDir,this.settings.sunSoftness),this.csm.render(i,r.scene,this._draw,this._nDraw),this._showList(this._noShadow,this._nNoShadow),this.gbuffer.render(i,r.scene,c,this._currVP.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),this._currVP,!0),this._showList(this._hide,this._nHide),r.scene.background=h,this.csm.restoreFit(u),this.sunDir.copy(d.dir),this.sunDirView.copy(d.dirView),this.activeSun=d.active,this.sun.visible=d.fallbackVisible,this._ambLevel=d.ambLevel}if(e){const c=Je(4,4,{name:"prewarm-scratch"}),h=[];this._collectPassMaterials(h);for(const u of h)try{sc(i,u,c)}catch{}c.dispose()}}catch(c){return{ok:!1,reason:String(c&&c.message?c.message:c)}}finally{i.setRenderTarget(a)}const l=i.info.programs?.length??0;return{ok:!0,ms:Math.round(performance.now()-n),programsBefore:o,programsAfter:l,compiled:l-o,parallel:!!i.getContext().getExtension("KHR_parallel_shader_compile")}}_collectPassMaterials(e){const t=n=>{n&&n.material&&e.push(n.material)};return t(this.composite),t(this.viewComposite),t(this.fxaa),this.gtao&&(t(this.gtao.core),t(this.gtao.temporal),t(this.gtao.blur)),this.contact&&(t(this.contact.pass),t(this.contact.blur)),this.ssr&&(t(this.ssr.pass),t(this.ssr.blur)),this.taa&&t(this.taa.pass),this.motionBlur&&(t(this.motionBlur.tilePass),t(this.motionBlur.blurPass)),this.dof&&(t(this.dof.pre),t(this.dof.gather),t(this.dof.combine)),this.bloom&&(t(this.bloom.down),t(this.bloom.up)),t(this.exposure.logPass),t(this.exposure.reducePass),t(this.exposure.adaptPass),e}get hdrTexture(){return this.hdrRt?.texture??null}probeHdr(e,t,n,i){const r=this.hdrRt;if(!r)return null;const o=this.screenSize.width,a=this.screenSize.height,l=Math.max(0,Math.round(e*o)),c=Math.max(0,Math.round((1-i)*a)),h=Math.max(1,Math.min(o-l,Math.round((n-e)*o))),u=Math.max(1,Math.min(a-c,Math.round((i-t)*a))),d=r.texture.type===qt,m=d?new Uint16Array(h*u*4):new Float32Array(h*u*4);this.renderer.readRenderTargetPixels(r,l,c,h,u,m);const g=d?Ro.fromHalfFloat:_=>_;let v=0,p=0,f=0,w=0;const M=h*u;for(let _=0;_<M;_++){const E=g(m[_*4]),A=g(m[_*4+1]),R=g(m[_*4+2]);v+=E,p+=A,f+=R,w=Math.max(w,E,A,R)}return{r:v/M,g:p/M,b:f/M,max:w,n:M}}probeHdrGrid(e=32,t=18){const n=this.hdrRt;if(!n)return null;const i=this.screenSize.width,r=this.screenSize.height,o=n.texture.type===qt,a=o?new Uint16Array(i*r*4):new Float32Array(i*r*4);this.renderer.readRenderTargetPixels(n,0,0,i,r,a);const l=o?Ro.fromHalfFloat:d=>d,c=new Float32Array(e*t*3),h=new Float32Array(e*t);for(let d=0;d<r;d++){const m=Math.min(t-1,Math.floor((r-1-d)/r*t));for(let g=0;g<i;g++){const v=Math.min(e-1,Math.floor(g/i*e)),p=(d*i+g)*4,f=(m*e+v)*3;c[f]+=l(a[p]),c[f+1]+=l(a[p+1]),c[f+2]+=l(a[p+2]),h[m*e+v]++}}const u=[];for(let d=0;d<e*t;d++){const m=Math.max(1,h[d]);u.push([c[d*3]/m,c[d*3+1]/m,c[d*3+2]/m])}return{cols:e,rows:t,cells:u}}_applySettings(){const e=this.settings,t=this.composite.uniforms;t.uLens.value.set(e.chromatic,e.vignette,e.grain,0),t.uGrade.value.set(e.bloomStrength,e.lutStrength,this.taa?e.sharpen:0,this.lut.size),this.csm.setStrength(e.shadowStrength),this.bloom&&(this.bloom.threshold=e.bloomThreshold,this.bloom.knee=e.bloomKnee),this.gtao&&(this.gtao.setRadius(e.aoRadius),this.gtao.setIntensity(e.aoIntensity)),this.contact&&(this.contact.setLength(e.contactLength),this.contact.setStrength(e.contactStrength))}resize(e,t,n){const i=Math.min(globalThis.devicePixelRatio||1,1.5);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1);const r=Math.max(1,Math.floor(e*i)),o=Math.max(1,Math.floor(t*i)),a=Math.max(1,Math.floor(r*this.q.renderScale)),l=Math.max(1,Math.floor(o*this.q.renderScale));if(this.displaySize.width=r,this.displaySize.height=o,!(this.screenSize.width===a&&this.screenSize.height===l&&this.hdrRt)){this.screenSize.width=a,this.screenSize.height=l,this.hdrRt?.dispose(),this.hdrRt=Je(a,l,{depthBuffer:!0,name:"hdr"}),this.viewRt?.dispose(),this.viewRt=Je(a,l,{depthBuffer:!0,samples:this._viewSamples,name:"viewmodel"}),this.pingRt[0]?.dispose(),this.pingRt[1]?.dispose(),this.pingRt[0]=Je(a,l,{name:"ping0"}),this.pingRt[1]=Je(a,l,{name:"ping1"}),this.ldrRt?.dispose(),this.ldrRt=null,this.fxaa&&(this.ldrRt=new Zt(a,l,{type:Kt,format:wt,minFilter:rt,magFilter:rt,depthBuffer:!1,stencilBuffer:!1})),this.gbuffer.setSize(a,l),this.gtao?.setSize(a,l),this.contact?.setSize(a,l),this.ssr?.setSize(a,l),this.taa?.setSize(a,l),this.motionBlur?.setSize(a,l),this.dof?.setSize(a,l),this.bloom?.setSize(a,l),this.patcher.setScreenSize(a,l),this.viewComposite.uniforms.uTexel.value.set(1/a,1/l),this.composite.uniforms.uTexel.value.set(1/a,1/l),this.composite.uniforms.uResolution.value.set(a,l),this.fxaa&&this.fxaa.uniforms.uTexel.value.set(1/a,1/l),this.depthTexture=this.gbuffer.depthTexture,this.velocityTexture=this.gbuffer.velocityTexture,this.normalTexture=this.gbuffer.normalTexture;for(const c of this.passes)c.resize?.(a,l);this.taa?.reset(),this.exposure.reset()}}_visit(e){if(e.isMesh===!0||e.isPoints===!0||e.isSprite===!0||e.isLine===!0){const t=e.material;let n=!1;if(Array.isArray(t))for(let r=0;r<t.length;r++)this.patcher.patch(t[r]),t[r]&&t[r].transparent===!0&&(n=!0);else t&&(this.patcher.patch(t),n=t.transparent===!0);e.isMesh!==!0&&(n=!0),e.userData.owProbe!==!0&&this._foreignMeshes++;const i=e.userData;n||i.owNoPrepass===!0?this._hide[this._nHide++]=e:(this._draw[this._nDraw++]=e,i.owNoShadow===!0&&(this._noShadow[this._nNoShadow++]=e))}else e.isDirectionalLight===!0&&(this._dirLights[this._nDirLights++]=e)}_collect(e){this._nDraw=0,this._nHide=0,this._nNoShadow=0,this._nDirLights=0,this._foreignMeshes=0,e.traverseVisible(this._visit)}_hideList(e,t){for(let n=0;n<t;n++)e[n].visible=!1}_showList(e,t){for(let n=0;n<t;n++)e[n].visible=!0}_dirFromLight(e,t){return e.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(e.matrixWorld),e.target&&(e.target.updateWorldMatrix(!0,!1),this._tmpV3b.setFromMatrixPosition(e.target.matrixWorld),t.sub(this._tmpV3b)),t.lengthSq()<1e-8&&t.set(0,1,0),t.normalize()}_syncSun(e){let t=null,n=-1;for(let i=0;i<this._nDirLights;i++){const r=this._dirLights[i];r!==this.sun&&r.intensity>n&&(t=r,n=r.intensity)}t&&n>.01?(this.sun.visible&&(this.sun.visible=!1),t.castShadow&&(t.castShadow=!1),this.activeSun=t):(this.sun.visible=!0,this.activeSun=this.sun),this._dirFromLight(this.activeSun,this.sunDir),this.sunDirView.copy(this.sunDir).transformDirection(e.matrixWorldInverse).normalize()}_updateViewRig(e){const t=this.settings,n=Math.max(this.activeSun.intensity,this._ambLevel/.15),i=wl*Math.pow(Math.min(n/wl,1),t.viewKeyGamma),r=Math.min(i*t.viewKeyScale,t.viewKeyMax);this.viewSun.color.copy(this.activeSun.color),this.viewSun.intensity=r;const o=this._fillHue;this.viewKeyFill.color.setRGB(o.x,o.y,o.z),this.viewKeyFill.intensity=r*t.viewFillRatio;const a=this.activeSun.color;this.viewRim.color.setRGB(a.r,a.g*.94,a.b*.82),this.viewRim.intensity=r*t.viewRimRatio,this.viewFill.intensity=r*t.viewHemiRatio;const l=this._fillHue2;Math.max(l.x,l.y,l.z)>1e-5&&this.viewBounce.color.setRGB(l.x,l.y*.86,l.z*.62),this.viewBounce.intensity=r*t.viewBounceRatio,this._placeViewLight(this.viewSun,this._viewKeyDir,e),this._placeViewLight(this.viewKeyFill,this._viewFillDir,e),this._placeViewLight(this.viewRim,this._viewRimDir,e),this._placeViewLight(this.viewBounce,this._viewBounceDir,e)}_placeViewLight(e,t,n){const i=this._tmpV3c.copy(t).transformDirection(n.matrixWorld);e.target.position.setFromMatrixPosition(n.matrixWorld),e.position.copy(e.target.position).addScaledVector(i,4),e.updateMatrixWorld(!0),e.target.updateMatrixWorld(!0)}_updateBounceFill(){const e=this.settings,t=this.patcher.uniforms,n=Math.max(0,this.activeSun.intensity),i=this.ctx.peek("sky"),r=i?.ambientColor,o=this._fillHue;r&&Math.max(r.r,r.g,r.b)>1e-5?(o.set(r.r,r.g,r.b),this._ambLevel=Math.max(o.x,o.y,o.z)):(o.set(.36,.56,1),this._ambLevel=.15*n),o.divideScalar(Math.max(o.x,o.y,o.z));{const d=.2126*o.x+.7152*o.y+.0722*o.z,m=1.18;o.set(Math.max(0,d+(o.x-d)*m),Math.max(0,d+(o.y-d)*m),Math.max(0,d+(o.z-d)*m)),o.divideScalar(Math.max(o.x,o.y,o.z,1e-6))}const a=this._ambLevel/.15,l=e.skyFill*a;t.owSkyFill.value.set(o.x*l,o.y*l,o.z*l);const c=this.activeSun.color,h=this._fillHue2.set(c.r*.33,c.g*.29,c.b*.225);h.divideScalar(Math.max(h.x,h.y,h.z,1e-6));const u=e.groundFill*n;t.owGroundFill.value.set(h.x*u,h.y*u,h.z*u),t.owFillGain.value.set(1,e.bounceFill/Math.max(e.groundFill,1e-6)),t.owIndirect.value.x=e.iblDiffuse*(i?.indirectScale??1),t.owIndirect.value.y=e.interiorIndirect,this._skyExposureBias=i?.exposureBias??0}_updateRooms(){if(this._roomsReady)return;const e=this.ctx.peek("world"),t=e?.buildings;if(!t||!e.levelToWorld)return;this._roomsReady=!0;const n=e.levelToWorld(0,0,0,this._tmpV3),i=n.x,r=n.z,o=e.levelToWorld(1,0,0,this._tmpV3b),a=o.x-i,l=o.z-r,c=1/Math.max(1e-6,Math.hypot(a,l)),h=a*c,u=l*c;this.patcher.uniforms.owRoomXf.value.set(h,u,-(i*h+r*u),-(-i*u+r*h));const d=this.patcher.rooms,m=this.patcher.roomsY;let g=0;for(const v of t){const p=v?.spec;if(!p||p.enterable!==!0||p.collapse===!0||p.ruin===!0)continue;if(g>=d.length)break;d[g].set(p.x,p.z,p.w*.5,p.d*.5);let f=(v.roofY??12)-.06;const w=p.setback?.from;w!==void 0&&v.floorY?.[w]!==void 0&&(f=v.floorY[w]-.06),m[g].set(-.8,f,0,0),g++}this.patcher.uniforms.owIndirect.value.z=g,g>0&&console.info(`[render] indirect gate: ${g} interior volumes`)}_ensureProbe(e){if(this.probeActive){this._foreignMeshes>=6&&(e.scene.remove(this.probe.group),this.probe.dispose(),this.probeActive=!1,this.taa?.reset());return}if(this.frame>4||this._foreignMeshes>=6)return;const n=this.probe.build();n.traverse(i=>{i.userData.owProbe=!0}),e.scene.add(n),this.probeActive=!0}_cullLights(e){const t=this.settings;for(let n=0;n<this.lights.length;n++){const i=this.lights[n];i.applied!==void 0&&i.light.intensity!==i.applied&&(i.baseIntensity=i.light.intensity);const r=i.light.position.distanceTo(e),o=1-zl.smoothstep(r,i.range*.75,i.range*1.15),a=i.range<=j0?t.practicalGain:1;i.applied=i.baseIntensity*o*a,i.light.intensity=i.applied,i.light.visible=o>.002}}render(e){const t=this.renderer,{scene:n,camera:i,viewScene:r,viewCamera:o}=e,a=Math.min(.1,Math.max(1/480,e.time.dt||1/60));this.frame++,t.info.reset(),i.updateMatrixWorld(),o.updateMatrixWorld(),this._collect(n),this._ensureProbe(e),this._syncSun(i),this._updateRooms(),this._updateBounceFill(),this._updateViewRig(o),this._camPos.setFromMatrixPosition(i.matrixWorld),this._cullLights(this._camPos),this._adsT=this._readAds(),e.scene.environment!==this.envMap&&(this.envMap=e.scene.environment),e.viewScene.environment!==e.scene.environment&&(e.viewScene.environment===null||e.viewScene.environment===this._assignedViewEnv)&&(e.viewScene.environment=e.scene.environment,this._assignedViewEnv=e.scene.environment),this._currVP.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._invVP.copy(this._currVP).invert(),this._firstFrame&&this._prevVP.copy(this._currVP);const l=n.background;this.csm.enabled&&(this.csm.update(i,this.sunDir,this.settings.sunSoftness),this.csm.setJitter(this.taa?this.frame%8:0),n.background=null,this._hideList(this._hide,this._nHide),this._hideList(this._noShadow,this._nNoShadow),this.csm.render(t,n,this._noCascadeCull?null:this._draw,this._nDraw),this._showList(this._noShadow,this._nNoShadow),this._showList(this._hide,this._nHide),n.background=l),this.taa&&this._applyJitter(i);const c=this.gbuffer;this.needsPrepass&&(n.background=null,this._hideList(this._hide,this._nHide),c.render(t,n,i,this._currVP,this._prevVP,!0),this._showList(this._hide,this._nHide),n.background=l);const h=this.patcher.uniforms.owFeat.value;if(h.set(0,0,0,1),this.gtao&&this.needsPrepass&&(this.patcher.uniforms.owAoTex.value=this.gtao.render(t,c,i,this.frame,!!this.taa),this.aoTexture=this.patcher.uniforms.owAoTex.value,h.x=1),this.contact&&this.needsPrepass&&(this.patcher.uniforms.owContactTex.value=this.contact.render(t,c,i,this.sunDirView,this.frame),h.y=1),this.ssr&&this.needsPrepass&&!this._firstFrame){const p=this.taa?this.taa.previousTexture:this.hdrRt.texture;this.patcher.uniforms.owSsrTex.value=this.ssr.render(t,c,p,i,this.frame),h.z=1}if(this.csm.uniforms.owSunDirView.value.copy(this.sunDirView),t.setRenderTarget(this.hdrRt),t.clear(!0,!0,!1),t.render(n,i),this._viewVisible=r.children.length>this._viewRigChildren,this._viewVisible){this._tmpV3.setFromMatrixPosition(o.matrixWorld);const p=this._tmpV3.distanceToSquared(this._camPos)<.25,f=this.csm.uniforms.owCsmParams.value.x,w=h.y;p||(this.csm.uniforms.owCsmParams.value.x=0),h.y=0,this.csm.uniforms.owSunDirView.value.copy(this.sunDir).transformDirection(o.matrixWorldInverse).normalize();const M=this.patcher.uniforms.owSkyFill.value,_=this.patcher.uniforms.owGroundFill.value;this._fillSkySave.copy(M),this._fillGroundSave.copy(_),M.multiplyScalar(this.settings.viewFillOcclusion),_.multiplyScalar(this.settings.viewFillOcclusion);const E=this.patcher.uniforms.owIndirect.value.z;this.patcher.uniforms.owIndirect.value.z=0,this._collectViewScene(r),t.setRenderTarget(this.viewRt),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(r,o),t.setClearColor(0,1),this.csm.uniforms.owCsmParams.value.x=f,h.y=w,M.copy(this._fillSkySave),_.copy(this._fillGroundSave),this.patcher.uniforms.owIndirect.value.z=E}this.taa&&this._removeJitter(i);let u=this.hdrRt.texture;if(this.taa&&(u=this.taa.render(t,u,c,this._invVP,this._prevVP)),this.motionBlur){const p=this.settings.shutter*(.016666666666666666/a);u=this.motionBlur.render(t,u,c,this.frame,p)}if(this.dof&&this._adsT>.01&&this.needsPrepass){const p=this.pingRt[this._pingIndex];u=this.dof.render(t,u,c,p,this._adsT,this.settings,this.frame),this._pingIndex^=1}for(let p=0;p<this.passes.length;p++){const f=this.passes[p];if(f.enabled===!1)continue;const w=this.pingRt[this._pingIndex];f.render(t,u,w,this),u=w.texture,this._pingIndex^=1}if(this._viewVisible){const p=this.viewComposite.uniforms,f=this.pingRt[this._pingIndex];p.tColor.value=u,p.tView.value=this.viewRt.texture,this.viewComposite.render(t,f),u=f.texture,this._pingIndex^=1}const d=this.settings,m=this.exposure.update(t,u,this.screenSize.width,this.screenSize.height,d.autoExposure?a:1e3,d.exposureBias+this._skyExposureBias,d.exposureKey,this.needsPrepass?this.depthTexture:null);this.exposureTexture=m;let g=null;this.bloom&&(g=this.bloom.render(t,u,this.screenSize.width,this.screenSize.height,m));const v=this.composite.uniforms;v.tColor.value=u,v.tBloom.value=g??u,v.tExposure.value=m,v.uGrade.value.x=g?d.bloomStrength:0,v.uGrade.value.z=this.taa?d.sharpen:0,v.uLens.value.y=d.vignette+(d.adsVignette-d.vignette)*this._adsT,v.uLens.value.w=e.time.elapsed,v.uLook.value.w=this.ctx.config.exposure??1,this.debugView?this._renderDebug(t,u):this.fxaa?(this.composite.render(t,this.ldrRt),this.fxaa.uniforms.tColor.value=this.ldrRt.texture,this.fxaa.render(t,null)):this.composite.render(t,null),c.beginRecord(),c.recordMatrices(this._draw,this._nDraw),c.endRecord(),this._prevVP.copy(this._currVP),this._firstFrame=!1,t.setRenderTarget(null),this._probeExposure&&this._logExposure()}_visitView(e){if(e.isMesh===!0){const t=e.material;if(Array.isArray(t))for(let n=0;n<t.length;n++)this.patcher.patch(t[n]);else t&&this.patcher.patch(t)}}_renderDebug(e,t){this._debugPass||(this._debugPass=V0());const n=this._debugPass.uniforms,i=this.gbuffer,r={ao:[this.aoTexture,0],normal:[i.normalTexture,1],velocity:[i.velocityTexture,2],depth:[i.depthTexture,3],ssr:[this.ssr?.texture,4],ssrmask:[this.ssr?.texture,5],contact:[this.contact?.texture,0],bloom:[this.bloom?.texture,4],view:[this.viewRt?.texture,4],viewalpha:[this.viewRt?.texture,5],color:[t,4]},o=r[this.debugView]??r.color;n.tSrc.value=o[0]??t,n.uMode.value=o[1],this._debugPass.render(e,null)}debugExposure(){const e=this._readback;this.renderer.readRenderTargetPixels(this.exposure.rt1,0,0,1,1,e);const t=e[0]/Math.max(e[1],1e-4),n=this._readback2;return this.renderer.readRenderTargetPixels(this.exposure.adapt[this.exposure._flip],0,0,1,1,n),{avgLum:Math.pow(2,t),ev100:n[1],exposure:n[0]}}_logExposure(){if(this.frame%90!==0)return;const e=this.debugExposure(),t=this.patcher.uniforms,n=i=>`${i.x.toFixed(3)},${i.y.toFixed(3)},${i.z.toFixed(3)}`;console.info(`[render] frame ${this.frame} avgLum ${e.avgLum.toFixed(4)} ev100 ${e.ev100.toFixed(2)} exposure ${e.exposure.toFixed(4)} sun=${this.activeSun.intensity.toFixed(3)} skyFill=${n(t.owSkyFill.value)} gndFill=${n(t.owGroundFill.value)} ibl=${t.owIndirect.value.x.toFixed(3)} indoor=${t.owIndirect.value.y.toFixed(3)} rooms=${t.owIndirect.value.z}`)}_collectViewScene(e){e.traverseVisible(this._visitView)}_applyJitter(e){const t=this.taa.nextJitter(),n=t.x*2/this.screenSize.width,i=t.y*2/this.screenSize.height;this._jitterSaved.set(e.projectionMatrix.elements[8],e.projectionMatrix.elements[9]),e.projectionMatrix.elements[8]+=n,e.projectionMatrix.elements[9]+=i,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this._jittered=!0}_removeJitter(e){this._jittered&&(e.projectionMatrix.elements[8]=this._jitterSaved.x,e.projectionMatrix.elements[9]=this._jitterSaved.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this._jittered=!1)}_readAds(){this._weapons||(this._weapons=this.ctx.peek("weapons")||null);const e=this._weapons;if(!e)return 0;const t=e.adsProgress;return typeof t=="number"&&t===t?Math.min(1,Math.max(0,t)):0}dispose(){this.csm.dispose(),this.gbuffer.dispose(),this.gtao?.dispose(),this.contact?.dispose(),this.ssr?.dispose(),this.taa?.dispose(),this.motionBlur?.dispose(),this.dof?.dispose(),this.bloom?.dispose(),this.exposure.dispose(),this.composite.dispose(),this.viewComposite.dispose(),this.fxaa?.dispose(),this.lut.texture.dispose(),this.envEquirect?.dispose(),this.hdrRt?.dispose(),this.viewRt?.dispose(),this.ldrRt?.dispose(),this.pingRt[0]?.dispose(),this.pingRt[1]?.dispose(),this.envTarget?.dispose(),this.probeActive&&(this.ctx?.scene.remove(this.probe.group),this.probe.dispose()),this._debugPass?.dispose(),this.patcher.dispose(),this.renderer.dispose()}}const bn={concrete:{albedo:[.65,.63,.6],roughness:.92,metal:0},metal_painted:{albedo:[.55,.58,.62],roughness:.65,metal:.85},metal_rust:{albedo:[.65,.42,.27],roughness:.82,metal:.8},metal_brushed:{albedo:[.65,.64,.62],roughness:.5,metal:.9},brick:{albedo:[.65,.5,.36],roughness:.93,metal:0},wood:{albedo:[.5,.33,.18],roughness:.88,metal:0},asphalt:{albedo:[.22,.22,.22],roughness:.96,metal:0},gravel:{albedo:[.55,.53,.5],roughness:.93,metal:0},dirt:{albedo:[.45,.35,.22],roughness:.96,metal:0},plaster:{albedo:[.7,.68,.65],roughness:.9,metal:0},fabric:{albedo:[.32,.27,.22],roughness:.96,metal:0},corrugated:{albedo:[.45,.45,.48],roughness:.78,metal:.85},rubber:{albedo:[.15,.15,.15],roughness:.93,metal:0},foliage:{albedo:[.22,.37,.13],roughness:.92,metal:0},burlap:{albedo:[.5,.41,.27],roughness:.96,metal:0},black_ops:{albedo:[.18,.18,.22],roughness:.6,metal:.1},flesh:{albedo:[.28,.18,.16],roughness:.7,metal:0},infected:{albedo:[.22,.27,.16],roughness:.85,metal:0}};function K0(s,e,t){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),r=i.createImageData(e,e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=(a*e+l)*4,h=t(l/e,a/e,l,a);r.data[c]=r.data[c+1]=r.data[c+2]=Math.floor(h*255),r.data[c+3]=255}i.putImageData(r,0,0);const o=new Gs(n);return o.wrapS=o.wrapT=Zn,o.colorSpace=Et,o.magFilter=rt,o.minFilter=an,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Z0(s,e){const t=document.createElement("canvas");t.width=t.height=s;const n=t.getContext("2d"),i=n.createImageData(s,s);for(let o=0;o<s;o++)for(let a=0;a<s;a++){const l=(o*s+a)*4,[c,h,u]=e(a/s,o/s);i.data[l]=Math.floor(c*255),i.data[l+1]=Math.floor(h*255),i.data[l+2]=Math.floor(u*255),i.data[l+3]=255}n.putImageData(i,0,0);const r=new Gs(t);return r.wrapS=r.wrapT=Zn,r.colorSpace=Et,r.magFilter=rt,r.minFilter=an,r.generateMipmaps=!0,r.needsUpdate=!0,r}function Ps(s,e){let t=s*374761393+e*668265263>>>0;return t=(t^t>>>13)*1274126177>>>0,(t&2147483647)/2147483647}function J0(s,e,t){const n=Math.floor(s*t),i=Math.floor(e*t),r=s*t-n,o=e*t-i,a=Ps(n,i),l=Ps(n+1,i),c=Ps(n,i+1),h=Ps(n+1,i+1),u=r*r*(3-2*r),d=o*o*(3-2*o);return a+(l-a)*u+(c-a)*d+(a-l-c+h)*u*d}function Si(s,e,t){let n=0,i=.5,r=1;for(let o=0;o<t;o++)n+=i*J0(s,e,r),i*=.5,r*=2;return n}function Q0(s,e){const t=bn[s]||bn.concrete;return Z0(e,(n,i)=>{const o=.85+Si(n,i,4)*.3;return[Math.min(1,t.albedo[0]*o),Math.min(1,t.albedo[1]*o),Math.min(1,t.albedo[2]*o)]})}function eg(s,e){const t=bn[s]||bn.concrete;return K0(null,e,(n,i)=>{const r=Si(n+.5,i+.5,3),o=.7+r*.3,a=t.roughness*(.8+r*.4),l=t.metal;return o*.33+a*.33+l*.34})}function tg(s,e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),i=n.createImageData(e,e),r=.8;for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=l/e,h=a/e,u=Si(c-1/e,h,3),d=Si(c+1/e,h,3),m=Si(c,h-1/e,3),g=Si(c,h+1/e,3),v=(d-u)*r,p=(g-m)*r,f=(a*e+l)*4;i.data[f]=Math.floor((v*.5+.5)*255),i.data[f+1]=Math.floor((p*.5+.5)*255),i.data[f+2]=255,i.data[f+3]=255}n.putImageData(i,0,0);const o=new Gs(t);return o.wrapS=o.wrapT=Zn,o.colorSpace=rn,o.magFilter=rt,o.minFilter=an,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Ml(s){s.onBeforeCompile=e=>{e.uniforms.owRimStrength={value:.3},e.uniforms.owRimPower={value:3},e.vertexShader=e.vertexShader.replace("#include <normal_vertex>",`#include <normal_vertex>
      vGeometricNormal = normalize(normalMatrix * normal);`),e.vertexShader=e.vertexShader.replace("varying vec3 vViewPosition;",`varying vec3 vViewPosition;
      varying vec3 vGeometricNormal;`),e.vertexShader=e.vertexShader.replace("#include <worldpos_vertex>","#include <worldpos_vertex>"),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
      uniform float owRimStrength;
      uniform float owRimPower;`),e.fragmentShader=e.fragmentShader.replace("varying vec3 vViewPosition;",`varying vec3 vViewPosition;
      varying vec3 vGeometricNormal;`),e.fragmentShader=e.fragmentShader.replace("#include <tonemapping_fragment>",`float NdotV = abs(dot(normalize(vViewPosition), vGeometricNormal));
      float rim = pow(1.0 - NdotV, owRimPower) * owRimStrength;
      outgoingLight *= (1.0 - rim);
      #include <tonemapping_fragment>`)}}function Sl(s){s.vertexColors=!0,s.userData.owNoShadow&&(s.userData.owNoShadow=!0)}class ng{static id="materials";static deps=["render"];constructor(){this._cache=new Map,this._sets=new Map,this._built=!1,this._anisotropy=4,this._pending=new Set}async init(e){this.ctx=e;const t=e.config.q;this._anisotropy=Math.min(t.anisotropy,16);const n=e.config.quality,i=n==="low"?256:n==="medium"?512:1024;this._texSize=i,this._renderer=e.peek("render")?.renderer,this._buildCore(),this._built=!0}_buildCore(){const e=Object.keys(bn);for(const t of e){if(this._cache.has(t))continue;const n=Q0(t,this._texSize),i=eg(t,this._texSize),r=tg(t,this._texSize);this._renderer&&(n.anisotropy=this._anisotropy,i.anisotropy=this._anisotropy,r.anisotropy=this._anisotropy),this._sets.set(t,{albedo:n,orm:i,normal:r});const o=bn[t],a=new ji({name:`mat_${t}`,map:n,normalMap:r,normalScale:new ue(.8,.8),roughnessMap:i,roughness:o.roughness,metalness:o.metal,envMapIntensity:.5});a.userData.surface=t,Sl(a),Ml(a),this._cache.set(t,a)}}get(e){let t=this._cache.get(e);if(!t){const n=bn[e]||bn.concrete,i=this._sets.get(e)||this._sets.get("concrete");t=new ji({name:`mat_${e}`,map:i?.albedo,normalMap:i?.normal,normalScale:new ue(.8,.8),roughnessMap:i?.orm,roughness:n.roughness,metalness:n.metal,envMapIntensity:.5}),t.userData.surface=e,Sl(t),Ml(t),this._cache.set(e,t)}return t}names(){return Object.keys(bn)}surfaceOf(e){return e}prewarmMaterials(e){const t=this._cache.values(),n=e.get("render"),i=new Qn,r=new Se(new Jt(1,1,1));for(const o of t)r.material=o,i.add(r);n.renderer.compileAsync(i,e.camera).then(()=>i.clear())}dispose(){for(const e of this._sets.values())e.albedo?.dispose(),e.orm?.dispose(),e.normal?.dispose();for(const e of this._cache.values())e.dispose();this._cache.clear(),this._sets.clear()}}class ig{static id="sky";static deps=["render"];constructor(){this._dirty=!0,this._time=16.5,this._lat=45,this._sunAltitude=.5,this._sunAzimuth=0,this._ambient=[.2,.3,.5],this._sun=null,this._envMap=null}async init(e){this.ctx=e,this._renderer=e.get("render").renderer,this._scene=e.scene,this._build()}_build(){this._sun&&(this._scene.remove(this._sun),this._scene.remove(this._sun.target),this._sun.dispose?.());const e=this._time,t=Math.sin(e/24*Math.PI*2-Math.PI/2);this._sunAltitude=t;const n=Math.max(100,Math.sin(Math.max(0,t))*200),i=[.9,.93,1];this._sun=new xi(new He(i[0],i[1],i[2]),n),this._sun.name="ow-sun",this._sun.position.set(-60,35,40),this._sun.castShadow=!1,this._scene.add(this._sun),this._scene.add(this._sun.target);const r=new Zl(13426158,4473924,30);r.name="ow-hemi",this._scene.add(r);const o=new tu(8952234,15);o.name="ow-ambient",this._scene.add(o),this._updateSkyDome(),this._updateEnvMap()}_updateSkyDome(){const e=this._scene.getObjectByName("ow-sky-dome");e&&(this._scene.remove(e),e.geometry?.dispose(),e.material?.dispose()),this._sunAltitude;const t=[10,10,10],n=[10,10,10],i=[5,5,5],r=document.createElement("canvas");r.width=2,r.height=256;const o=r.getContext("2d");for(let u=0;u<256;u++){const d=u/255;let m;if(d<.5){const g=d/.5;m=[t[0]+(n[0]-t[0])*g,t[1]+(n[1]-t[1])*g,t[2]+(n[2]-t[2])*g]}else{const g=(d-.5)/.5;m=[n[0]+(i[0]-n[0])*g,n[1]+(i[1]-n[1])*g,n[2]+(i[2]-n[2])*g]}o.fillStyle=`rgb(${Math.floor(m[0]*255)},${Math.floor(m[1]*255)},${Math.floor(m[2]*255)})`,o.fillRect(0,u,2,1)}const a=new Gs(r);a.colorSpace=Nn,a.minFilter=rt,a.magFilter=rt,a.generateMipmaps=!1,a.needsUpdate=!0;const l=new ns(500,32,15),c=new Qt({uniforms:{skyTex:{value:a}},vertexShader:`
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
          float t = 0.5 - dir.y * 0.5;
          vec3 col = texture2D(skyTex, vec2(0.5, t)).rgb * 10.0;
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Dt,depthWrite:!1,depthTest:!1}),h=new Se(l,c);h.name="ow-sky-dome",h.frustumCulled=!1,h.renderOrder=-1e3,this._scene.add(h)}_updateEnvMap(){this._envMap&&(this._envMap.dispose?.(),this._envMap=null);const e=this.ctx.peek("render");e?.setEnvMap&&e.setEnvMap(null)}setTime(e){this._time=(e%24+24)%24,this._build()}dispose(){const e=this._scene.getObjectByName("ow-sky-dome");e&&(this._scene.remove(e),e.geometry?.dispose(),e.material?.dispose()),this._sun&&(this._scene.remove(this._sun),this._scene.remove(this._sun.target))}}function sn(s,e,t){const n=new Jt(s,e,t);return n.translate(0,e/2,0),n}function sg(s,e,t,n,i){const r=new Nt;let o=0,a=s,l=t;for(let c=0;c<n.length;c++){const h=n[c],u=h.h||e/n.length,d=h.shrink||0,m=h.offsetX||0,g=h.offsetZ||0;c>0&&(o+=u);const v=sn(a,u,l),p=new Se(v,i);p.position.set(m,o,g),p.castShadow=!0,p.receiveShadow=!0,r.add(p),a-=d*2,l-=d*2}return r}function rg(s,e,t,n){const i=new Nt,r=2+Math.floor(n()*4);for(let o=0;o<r;o++){const a=.5+n()*2,l=.5+n()*2,c=.5+n()*2,h=(n()-.5)*(s-a),u=(n()-.5)*(e-l),d=sn(a,c,l),m=new Se(d,t);m.position.set(h,c/2,u),m.castShadow=!0,m.receiveShadow=!0,i.add(m)}return i}class og{static id="world";static deps=["materials","render"];constructor(){this.root=new Nt,this.root.name="world",this.bounds=new On,this.spawnPoints=[],this.stats={staticTris:0,instTris:0,instances:0,drawCalls:0},this._materials=new Map,this._ballast=[],this._built=!1}async init(e){this.ctx=e,this._mat=e.get("materials"),this._scene=e.scene,this._scene.add(this.root),this._build(),this._built=!0}_matFor(e){return this._materials.has(e)||this._materials.set(e,this._mat.get(e)),this._materials.get(e)}_build(){const e=performance.now(),n=this.ctx.peek("render")?.settings?.practicalGain?17:20;this._ballast=[],this._buildGround(),this._buildBuildings(),this._buildProps(),this._buildStreetDetails(),this._stabiliseLightCount(n),performance.now()-e,this.stats.drawCalls=this.root.children.length,console.info(`[world] built ${this.stats.drawCalls} objects, scene total children: ${this._scene.children.length}`)}_buildGround(){const e=new Li(200,200,80,80);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let o=0;o<t.count;o++){const a=t.getX(o),l=t.getZ(o);let c=0;c+=Math.sin(a*.04)*Math.cos(l*.04)*.4,c+=Math.sin(a*.08+1.3)*.2,c+=Math.cos(l*.1+.7)*.15,c+=Math.sin(a*.15)*Math.cos(l*.15)*.08,t.setY(o,c)}e.computeVertexNormals();const n=this._matFor("asphalt"),i=new Se(e,n);i.receiveShadow=!0,i.name="ground",this.root.add(i),this.bounds.setFromCenterAndSize(new D(0,0,0),new D(200,.5,200));const r=this._matFor("concrete");for(let o=-10;o<=10;o+=2){const a=sn(.3,.05,20),l=new Se(a,r);l.position.set(o*10,.02,0),l.receiveShadow=!0,l.name="sidewalk",this.root.add(l)}}_buildBuildings(){let t=12345;const n=()=>(t=t*1664525+1013904223>>>0,(t>>>0)/4294967296),i=[{x:-35,z:-30,w:18,d:24,h:120,surface:"concrete",style:"setback",levels:6},{x:30,z:-35,w:20,d:22,h:100,surface:"brick",style:"setback",levels:5},{x:-28,z:35,w:14,d:18,h:70,surface:"plaster",style:"simple"},{x:35,z:30,w:22,d:20,h:85,surface:"concrete",style:"setback",levels:5},{x:-45,z:0,w:12,d:32,h:180,surface:"concrete",style:"tower",levels:10},{x:45,z:0,w:12,d:30,h:150,surface:"brick",style:"tower",levels:9},{x:0,z:50,w:24,d:14,h:75,surface:"plaster",style:"simple"},{x:-25,z:-50,w:16,d:16,h:200,surface:"concrete",style:"tower",levels:12},{x:30,z:45,w:18,d:20,h:110,surface:"brick",style:"setback",levels:6},{x:-50,z:25,w:20,d:16,h:130,surface:"concrete",style:"setback",levels:7},{x:50,z:-25,w:16,d:22,h:120,surface:"plaster",style:"simple"},{x:-12,z:12,w:12,d:12,h:250,surface:"metal_painted",style:"tower",levels:15},{x:20,z:-18,w:14,d:14,h:160,surface:"concrete",style:"tower",levels:9},{x:-35,z:-12,w:16,d:20,h:90,surface:"brick",style:"simple"},{x:35,z:15,w:18,d:16,h:100,surface:"concrete",style:"setback",levels:6},{x:-55,z:-35,w:22,d:32,h:140,surface:"concrete",style:"setback",levels:8},{x:55,z:35,w:24,d:28,h:150,surface:"brick",style:"setback",levels:8},{x:0,z:-55,w:28,d:16,h:80,surface:"metal_painted",style:"simple"},{x:-18,z:55,w:16,d:22,h:95,surface:"concrete",style:"setback",levels:6},{x:22,z:-50,w:20,d:18,h:105,surface:"brick",style:"tower",levels:7}];for(const r of i){const o=this._matFor(r.surface),a=this._matFor("concrete"),l=new Nt;l.name=`building_${r.x}_${r.z}`;let c;if(r.style==="setback"&&r.levels){const m=[],g=r.h/r.levels;for(let v=0;v<r.levels;v++)m.push({h:g*(.8+n()*.4),shrink:v<r.levels-1?.5+n()*1.5:0,offsetX:v<r.levels-1?(n()-.5)*1:0,offsetZ:v<r.levels-1?(n()-.5)*1:0});c=sg(r.w,r.h,r.d,m,o)}else if(r.style==="tower"){const m=r.h*(.7+n()*.3),g=r.h-m;c=new Nt;const v=sn(r.w,m,r.d),p=new Se(v,o);if(p.castShadow=!0,p.receiveShadow=!0,c.add(p),g>.5){const f=sn(r.w*.3,g,r.d*.3),w=new Se(f,a);w.position.y=m,w.castShadow=!0,w.receiveShadow=!0,c.add(w)}}else{const m=r.h*(.8+n()*.4),g=sn(r.w,m,r.d);c=new Nt;const v=new Se(g,o);v.castShadow=!0,v.receiveShadow=!0,c.add(v)}c.position.set(r.x,0,r.z),l.add(c);const h=rg(r.w,r.d,a,n);h.position.y=r.h,l.add(h);const u=sn(r.w+.5,.3,r.d+.5),d=new Se(u,a);d.position.y=r.h,d.castShadow=!0,d.name=`roof_${r.x}_${r.z}`,l.add(d),this.root.add(l)}}_buildProps(){const e=this._matFor("metal_rust"),t=150,n=sn(.8,1.2,.8),i=new Na(n,e,t);i.name="barrels";const r=new pt;let a=42;const l=()=>(a=a*1664525+1013904223>>>0,(a>>>0)/4294967296);for(let p=0;p<t;p++)r.position.set((l()-.5)*240,.6,(l()-.5)*240),r.scale.setScalar(.7+l()*.6),r.rotation.y=l()*Math.PI*2,r.updateMatrix(),i.setMatrixAt(p,r.matrix);i.instanceMatrix.needsUpdate=!0,i.castShadow=!0,i.receiveShadow=!0,this.root.add(i),this.stats.instances+=t;const c=this._matFor("concrete"),h=300,u=sn(.4,.2,.4),d=new Na(u,c,h);d.name="debris";const m=new pt;let g=999;const v=()=>(g=g*1664525+1013904223>>>0,(g>>>0)/4294967296);for(let p=0;p<h;p++)m.position.set((v()-.5)*200,.1,(v()-.5)*200),m.scale.setScalar(.3+v()*.7),m.rotation.set(v()*.3,v()*Math.PI*2,v()*.3),m.updateMatrix(),d.setMatrixAt(p,m.matrix);d.instanceMatrix.needsUpdate=!0,d.receiveShadow=!0,this.root.add(d),this.stats.instances+=h}_buildStreetDetails(){const e=this._matFor("concrete"),t=this._matFor("metal_rust"),n=sn(2,.8,.3);for(let r=0;r<8;r++){const o=new Se(n,t),a=r/8*Math.PI*2,l=15+r%3*5;o.position.set(Math.cos(a)*l,.4,Math.sin(a)*l),o.rotation.y=a+Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,o.name="barricade",this.root.add(o)}const i=sn(1.5,.6,1.5);for(let r=0;r<12;r++){const o=new Se(i,e),a=r/12*Math.PI*2+.3,l=8+r%4*4;o.position.set(Math.cos(a)*l,.3,Math.sin(a)*l),o.rotation.y=r*1.7%(Math.PI*2),o.scale.setScalar(.6+r%3*.4),o.castShadow=!0,o.receiveShadow=!0,o.name="rubble",this.root.add(o)}}_stabiliseLightCount(e){for(;this._ballast.length<e;){const t=new Ko(16777215,0,0);t.name="ow-ballast",t.visible=!0,this._scene.add(t),this._ballast.push(t)}for(const t of this._ballast)t.intensity=0,t.visible=!0}prewarmMaterials(e){const t=["concrete","brick","plaster","asphalt","metal_painted","metal_rust","wood","gravel","dirt","rubber","fabric","corrugated","foliage","burlap"],n=e.get("render"),i=new Qn,r=new Se(new Jt(1,1,1));for(const o of t)r.material=this._matFor(o),i.add(r);return n.renderer.compileAsync(i,e.camera).then(()=>i.clear())}dispose(){for(;this.root.children.length;){const e=this.root.children[0];this.root.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}for(const e of this._ballast)this._scene.remove(e);this._ballast=[]}prewarmMaterials(e){const t=["concrete","brick","plaster","asphalt","metal_painted","metal_rust","wood","gravel","dirt","rubber","fabric","corrugated","foliage","burlap"],n=e.get("render"),i=new Qn,r=new Se(new Jt(1,1,1));for(const o of t)r.material=this._matFor(o),i.add(r);return n.renderer.compileAsync(i,e.camera).then(()=>i.clear())}}const ag={concrete:"concrete",brick:"concrete",plaster:"plaster",metal_painted:"metal",metal_rust:"metal",metal_brushed:"metal",corrugated:"metal",wood:"wood",asphalt:"concrete",gravel:"dirt",dirt:"dirt",fabric:"fabric",burlap:"fabric",foliage:"foliage",rubber:"rubber"};class lg{static id="physics";static deps=["world"];static SURFACES=["concrete","metal","wood","dirt","sand","glass","water","foliage","fabric","flesh","rubber","plaster"];constructor(){this._world=null,this._scene=null,this._bounds=null,this._raycaster=new iu,this._rayOrigin=new D,this._rayDir=new D(0,-1,0),this._cache=new Map}async init(e){this._world=e.get("world"),this._scene=e.scene,this._bounds=this._world.bounds,this._cache=new Map,this._world.root.traverse(t=>{t.isMesh&&(t.userData.surface||(t.material?.userData?.surface?t.userData.surface=t.material.userData.surface:t.name==="ground"?t.userData.surface="asphalt":t.name.startsWith("building_")||t.name.startsWith("roof_")?t.userData.surface="concrete":t.name==="barrels"&&(t.userData.surface="metal_rust")))})}fixedUpdate(e,t){}raycast(e,t,n=100){this._rayOrigin.copy(e),this._rayDir.copy(t).normalize(),this._raycaster.set(this._rayOrigin,this._rayDir),this._raycaster.far=Math.max(.01,n);const i=this._raycaster.intersectObjects(this._scene.children,!0);if(i.length===0)return null;const r=i[0],o=r.object;let a=o.userData?.surface;!a&&o.material?.userData?.surface&&(a=o.material.userData.surface),a=ag[a]||"concrete";let l;return r.face?(l=r.face.normal.clone(),o.normalMatrix&&l.applyMatrix3(o.normalMatrix).normalize()):l=new D(0,1,0),{point:r.point.clone(),normal:l,surface:a}}groundHeight(e,t){return Math.sin(e*.05)*Math.cos(t*.05)*.3+Math.sin(e*.1+1)*.15+Math.cos(t*.12)*.1}dispose(){this._cache.clear(),this._raycaster.dispose?.(),this._world=null,this._scene=null,this._bounds=null}}const cg=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];let hg=class{constructor(e){const t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){const i=e.int(0,n),r=t[n];t[n]=t[i],t[i]=r}this.perm=new Uint8Array(512);for(let n=0;n<512;n++)this.perm[n]=t[n&255]}n3(e,t,n){const i=this.perm,r=Math.floor(e),o=Math.floor(t),a=Math.floor(n),l=r&255,c=o&255,h=a&255;e-=r,t-=o,n-=a;const u=e*e*e*(e*(e*6-15)+10),d=t*t*t*(t*(t*6-15)+10),m=n*n*n*(n*(n*6-15)+10),g=i[l]+c,v=i[l+1]+c,p=i[g]+h,f=i[g+1]+h,w=i[v]+h,M=i[v+1]+h,_=(A,R,L,b)=>{const y=cg[A%12];return y[0]*R+y[1]*L+y[2]*b},E=(A,R,L)=>A+(R-A)*L;return E(E(E(_(i[p],e,t,n),_(i[w],e-1,t,n),u),E(_(i[f],e,t-1,n),_(i[M],e-1,t-1,n),u),d),E(E(_(i[p+1],e,t,n-1),_(i[w+1],e-1,t,n-1),u),E(_(i[f+1],e,t-1,n-1),_(i[M+1],e-1,t-1,n-1),u),d),m)}fbm3(e,t,n,i=4,r=2.03,o=.5){let a=.5,l=1,c=0,h=0;for(let u=0;u<i;u++)c+=a*this.n3(e*l,t*l,n*l),h+=a,a*=o,l*=r;return c/h}ridge3(e,t,n,i=3){let r=.5,o=1,a=0,l=0;for(let c=0;c<i;c++)a+=r*(1-Math.abs(this.n3(e*o,t*o,n*o))*2),l+=r,r*=.5,o*=2.07;return a/l}};function wi(){return{p:[],n:[],uv:[],i:[]}}function xt(s){return s.p.length/3}function In(s,e,t=2,n=16,i=0){const r=new Array(n),o=2/t;for(let a=0;a<n;a++){const l=a/n*Math.PI*2+i,c=Math.cos(l),h=Math.sin(l);r[a]=[s*Math.sign(c)*Math.abs(c)**o,e*Math.sign(h)*Math.abs(h)**o]}return r}function ug(s,e,t=16,n=0){return In(s,e,2,t,n)}function Fn(s,e={}){const t=e.into??wi(),n=e.closed!==!1,i=s[0].pts.length,r=t.p,o=t.n,a=t.uv,l=t.i,c=xt(t),h=new Float64Array(i+1),u=[],d=new D;let m=0,g=null,v=[];for(let w=0;w<s.length;w++){const M=s[w],_=M.o??[0,0,0],E=M.s??[1,1],A=new Float64Array(i*3);let R=0,L=0,b=0;for(let y=0;y<i;y++){const U=M.pts[y];d.set(U[0]*E[0],M.y??0,U[1]*E[1]),M.q&&d.applyQuaternion(M.q),d.x+=_[0],d.y+=_[1],d.z+=_[2],A[y*3]=d.x,A[y*3+1]=d.y,A[y*3+2]=d.z,R+=d.x,L+=d.y,b+=d.z}R/=i,L/=i,b/=i,v.push([R,L,b]),g&&(m+=Math.hypot(R-g[0],L-g[1],b-g[2])),g=[R,L,b],u.push({arr:A,v:m})}{const w=u[0].arr;h[0]=0;for(let M=1;M<=i;M++){const _=(M-1)%i*3,E=M%i*3;h[M]=h[M-1]+Math.hypot(w[E]-w[_],w[E+1]-w[_+1],w[E+2]-w[_+2])}}const p=n?i+1:i;for(let w=0;w<u.length;w++){const M=u[w].arr;for(let _=0;_<p;_++){const E=_%i*3;r.push(M[E],M[E+1],M[E+2]),o.push(0,0,0),a.push(h[_],u[w].v)}}for(let w=0;w+1<u.length;w++)for(let M=0;M+1<p;M++){const _=c+w*p+M,E=_+1,A=c+(w+1)*p+M,R=A+1;l.push(_,A,E,E,A,R)}const f=(w,M)=>{const _=u[w].arr,E=v[w],A=xt(t);r.push(E[0],E[1],E[2]),o.push(0,0,0),a.push(h[i]*.5,u[w].v);const R=xt(t);for(let L=0;L<i;L++){r.push(_[L*3],_[L*3+1],_[L*3+2]),o.push(0,0,0);const b=L/i*Math.PI*2;a.push(h[i]*.5+Math.cos(b)*.02,u[w].v+Math.sin(b)*.02)}for(let L=0;L<i;L++){const b=R+L,y=R+(L+1)%i;M?l.push(A,y,b):l.push(A,b,y)}};return e.capStart&&f(0,!0),e.capEnd&&f(u.length-1,!1),t}function dg(s,e,t,n={}){const i=n.n??5,r=n.seg??20,o=n.rows??9,a=n.roundY??.28,l=n.ny??5,c=[];for(let h=0;h<o;h++){const d=(h/(o-1)*2-1)*e,m=Math.min(1,Math.abs(d)/e),g=Math.min(1,Math.max(0,(m-(1-a))/a)),v=Math.max(0,1-g**l)**(1/l),p=Math.max(.02,v);c.push({pts:In(s*p,t*p,i,r),o:[0,d,0]})}return Fn(c,{...n,capStart:!1,capEnd:!1})}function Nr(s,e,t,n={}){const i=n.seg??22,r=n.rows??14,o=n.v0??0,a=n.v1??1,l=[];for(let c=0;c<r;c++){const u=(o+(a-o)*(c/(r-1)))*Math.PI,d=-Math.cos(u)*e,m=Math.sin(u);l.push({pts:ug(Math.max(1e-4,s*m),Math.max(1e-4,t*m),i),o:[0,d,0]})}return Fn(l,n)}function fg(s,e,t=0){const n=s.p,i=new D,r=xt(s);for(let o=t;o<r;o++)i.set(n[o*3],n[o*3+1],n[o*3+2]),e(i,o),n[o*3]=i.x,n[o*3+1]=i.y,n[o*3+2]=i.z;return s}function oc(s){const e=new ln;return e.setAttribute("position",new Mt(s.p,3)),e.setAttribute("normal",new Mt(s.n,3)),e.setAttribute("uv",new Mt(s.uv,2)),e.setIndex(s.i),e}function js(s){s.vc||(s.vc=new Float64Array(s.p.length),s.vc.fill(1)),s.color||(s.color=new Float64Array(s.p.length),s.color.fill(1))}function Ut(s){s.vc&&s.color&&s.color.set(s.vc)}function yl(s,e,t){s.vc[e*3]=t,s.vc[e*3+1]=t,s.vc[e*3+2]=t}function ac(s,e,t){s.vc[e*3]*=t,s.vc[e*3+1]*=t,s.vc[e*3+2]*=t}function hn(s,e,t,n,i){s[e]+=t,s[e+1]+=n,s[e+2]+=i}function Or(s,e,t,n,i,r=.3){js(s);const o=s.p,a=xt(s);for(let l=0;l<a;l++){const c=o[l*3],h=o[l*3+1],u=o[l*3+2],d=e.fbm3(c*2,h*2,u*2,3)*r,m=e.fbm3(c*2+100,h*2+100,u*2+100,3)*r,g=e.fbm3(c*2+200,h*2+200,u*2+200,3)*r,v=s.vc[l*3];s.vc[l*3]=(t+d)*v,s.vc[l*3+1]=(n+m)*v,s.vc[l*3+2]=(i+g)*v}Ut(s)}function pg(s,e){const t=e.length/3,n=new Float64Array(t*3);for(let i=0;i<t;i++){const r=e[i*3]*3,o=e[i*3+1]*3,a=e[i*3+2]*3,l=s[r],c=s[r+1],h=s[r+2],u=s[o]-l,d=s[o+1]-c,m=s[o+2]-h,g=s[a]-l,v=s[a+1]-c,p=s[a+2]-h,f=d*p-m*v,w=m*g-u*p,M=u*v-d*g,_=Math.hypot(f,w,M)||1;n[i*3]=f/_,n[i*3+1]=w/_,n[i*3+2]=M/_}return n}function Vt(s,e,t=1){js(s);const n=s.p,i=s.n,r=s.i,o=xt(s);if(r&&r.length>0){const a=r.length/3,l=pg(n,r),c=new Float64Array(o),h=new Uint32Array(o);for(let u=0;u<a;u++){const d=l[u*3],m=l[u*3+1],g=l[u*3+2];for(let v=0;v<3;v++){const p=r[u*3+v],f=i[p*3],w=i[p*3+1],M=i[p*3+2],_=f*d+w*m+M*g;_<0&&(c[p]+=-_,h[p]++)}}for(let u=0;u<o;u++){let d=1;h[u]>0&&(d=Math.max(0,1-c[u]/h[u]*t));const m=n[u*3],g=n[u*3+1],v=n[u*3+2],p=e.fbm3(m*.5,g*.5,v*.5,3)*.5+.5;d*=.85+p*.15,yl(s,u,Math.max(0,Math.min(1,d)))}}else for(let a=0;a<o;a++){const l=n[a*3],c=n[a*3+1],h=n[a*3+2],u=e.fbm3(l*.5,c*.5,h*.5,3)*.5+.5;yl(s,a,Math.max(0,Math.min(1,.85+u*.15)))}Ut(s)}function Ht(s,e,t=.3){js(s);const n=s.p,i=s.n,r=xt(s);for(let o=0;o<r;o++){const a=Math.max(0,-i[o*3+1])*.5,l=n[o*3],c=n[o*3+1],h=n[o*3+2],u=1-Math.abs(e.fbm3(l*1.5,c*1.5,h*1.5,4)),d=(a+u*.5)*t,m=e.fbm3(l*.3+100,c*.3+100,h*.3+100,3)*.5+.5,g=d*(.5+m*.5);ac(s,o,Math.max(0,1-g))}Ut(s)}function Gt(s,e=.5,t=3){js(s);const n=s.n,i=xt(s);for(let r=0;r<i;r++){const o=Math.abs(n[r*3+2]),a=Math.pow(Math.max(0,1-o),t)*e;ac(s,r,Math.max(0,1-a))}Ut(s)}function dt(s){const e=oc(s);return s.vc&&e.setAttribute("color",new Mt(new Float32Array(s.vc),3)),e}class mg{static id="player";static deps=["physics"];constructor(){this._rig=null,this._mesh=null,this._velocity=new D,this._onGround=!1,this._health=100,this._built=!1}async init(e){this.ctx=e,this._input=e.input,this._scene=e.scene,this._camera=e.camera,this._rng=e.rng.fork(),this._noise=new hg(this._rng);const n=e.get("materials").get("black_ops").clone();n.color=new He(1,1,1),n.vertexColors=!0;const i=new Nt;i.name="player";const r=[];for(let P=0;P<=10;P++){const Z=P/10,re=Z*1.8,ce=.32+Math.sin(Z*Math.PI)*.18,Re=.22+Math.sin(Z*Math.PI)*.12;r.push({pts:In(ce,Re,3,20),o:[0,re,0]})}const o=Fn(r,{capStart:!0,capEnd:!0});Vt(o,this._noise,.6),Ht(o,this._noise,.3),Gt(o,.4,2);for(let P=0;P<xt(o);P++)hn(o.vc,P*3,.85,.9,.75);Ut(o);const a=Nr(.24,.28,.24,{seg:20,rows:12});fg(a,P=>{const Z=(P.y-1.55)/.22;Math.abs(Z)<.7&&(P.z+=.04*(1-(Z/.7)**2))}),Vt(a,this._noise,.6),Ht(a,this._noise,.3),Gt(a,.4,2);for(let P=0;P<xt(a);P++)hn(a.vc,P*3,1.05,.9,.75);Ut(a);const l=wi();for(let P=0;P<=6;P++){const Z=P/6,re=Z*.2,ce=.12-Z*.03,Re={pts:In(ce,ce,2,14),o:[0,1.55+re,0]};Fn([Re],{into:l,capStart:P===0,capEnd:P===6})}Vt(l,this._noise,.6),Ht(l,this._noise,.3),Gt(l,.4,2);for(let P=0;P<xt(l);P++)hn(l.vc,P*3,.95,.85,.7);Ut(l);const c=Nr(.18,.12,.14,{seg:14,rows:8});Vt(c,this._noise,.6),Ht(c,this._noise,.3),Gt(c,.4,2);for(let P=0;P<xt(c);P++)hn(c.vc,P*3,1,.9,.75);Ut(c);const h=wi();for(let P=0;P<=10;P++){const Z=P/10,re=Z*.9,ce=.1-Z*.02,Re={pts:In(ce,ce,2,12),o:[0,re,0]};Fn([Re],{into:h,capStart:P===0,capEnd:P===10})}Vt(h,this._noise,.6),Ht(h,this._noise,.3),Gt(h,.4,2);for(let P=0;P<xt(h);P++)hn(h.vc,P*3,.75,.8,.65);Ut(h);const u=wi();for(let P=0;P<=10;P++){const Z=P/10,re=Z*.85,ce=.08-Z*.015,Re={pts:In(ce,ce,2,12),o:[0,re,0]};Fn([Re],{into:u,capStart:P===0,capEnd:P===10})}Vt(u,this._noise,.6),Ht(u,this._noise,.3),Gt(u,.4,2);for(let P=0;P<xt(u);P++)hn(u.vc,P*3,.75,.8,.65);Ut(u);const d=Nr(.08,.1,.06,{seg:10,rows:8});Vt(d,this._noise,.6),Ht(d,this._noise,.3),Gt(d,.4,2);for(let P=0;P<xt(d);P++)hn(d.vc,P*3,1,.85,.7);Ut(d);const m=wi();for(let P=0;P<=12;P++){const Z=P/12,re=Z*1.1,ce=.14-Z*.03,Re={pts:In(ce,ce,2,14),o:[0,re,0]};Fn([Re],{into:m,capStart:P===0,capEnd:P===12})}Vt(m,this._noise,.6),Ht(m,this._noise,.3),Gt(m,.4,2);for(let P=0;P<xt(m);P++)hn(m.vc,P*3,.7,.75,.6);Ut(m);const g=wi();for(let P=0;P<=12;P++){const Z=P/12,re=Z*1,ce=.11-Z*.025,Re={pts:In(ce,ce,2,14),o:[0,re,0]};Fn([Re],{into:g,capStart:P===0,capEnd:P===12})}Vt(g,this._noise,.6),Ht(g,this._noise,.3),Gt(g,.4,2);for(let P=0;P<xt(g);P++)hn(g.vc,P*3,.7,.75,.6);Ut(g);const v=dg(.1,.08,.28,{n:4,roundY:.3});Vt(v,this._noise,.6),Ht(v,this._noise,.3),Gt(v,.4,2);for(let P=0;P<xt(v);P++)hn(v.vc,P*3,.5,.5,.5);Ut(v),oc(o);const p=new Se(dt(a),n);p.position.y=2.1,i.add(p);const f=new Se(dt(l),n);f.position.y=1.9,i.add(f);const w=new Se(dt(o),n);w.position.y=.7,i.add(w);const M=new Se(dt(c),n);M.position.set(-.42,1.65,0),i.add(M);const _=new Se(dt(c),n);_.position.set(.42,1.65,0),i.add(_);const E=new Se(dt(h),n);E.position.set(-.42,.9,0),i.add(E);const A=new Se(dt(h),n);A.position.set(.42,.9,0),i.add(A);const R=new Se(dt(u),n);R.position.set(-.42,-.05,0),i.add(R);const L=new Se(dt(u),n);L.position.set(.42,-.05,0),i.add(L);const b=new Se(dt(d),n);b.position.set(-.42,-1,0),i.add(b);const y=new Se(dt(d),n);y.position.set(.42,-1,0),i.add(y);const U=new Se(dt(m),n);U.position.set(-.2,-.6,0),i.add(U);const B=new Se(dt(m),n);B.position.set(.2,-.6,0),i.add(B);const k=new Se(dt(g),n);k.position.set(-.2,-1.75,0),i.add(k);const W=new Se(dt(g),n);W.position.set(.2,-1.75,0),i.add(W);const q=new Se(dt(v),n);q.position.set(-.2,-2.9,.08),i.add(q);const X=new Se(dt(v),n);X.position.set(.2,-2.9,.08),i.add(X),i.position.set(0,2,15),i.scale.setScalar(3),this._scene.add(i),this._mesh=i;const ee=new Ko(16777215,20,15);ee.position.set(0,4,3),ee.name="character-light",this._scene.add(ee),this._rig=new Nt,this._rig.name="camera-rig",this._rig.position.copy(i.position),this._rig.position.y+=2,this._scene.add(this._rig),this._camera.position.set(0,3,20),this._camera.lookAt(0,2,8),this._velocity=new D,this._onGround=!1,this._health=100,this._built=!0,console.info(`[player] shape-shifter spawned at ${i.position.x.toFixed(1)}, ${i.position.y.toFixed(1)}, ${i.position.z.toFixed(1)}`),console.info(`[player] scene children: ${this._scene.children.length}, rig children: ${this._rig.children.length}`)}fixedUpdate(e,t){if(!this._built)return;const n=this._input,i=t.get("physics"),r=n.action("sprint")?8.5:5,o=new D(0,0,-1).applyQuaternion(this._rig.quaternion);o.y=0,o.normalize();const a=new D(1,0,0).applyQuaternion(this._rig.quaternion);a.y=0,a.normalize();const l=new D;n.action("forward")&&l.add(o),n.action("back")&&l.sub(o),n.action("right")&&l.add(a),n.action("left")&&l.sub(a),l.lengthSq()>0&&l.normalize();const c=-14;this._velocity.y+=c*e;const h=i.groundHeight(this._mesh.position.x,this._mesh.position.z);this._mesh.position.y<=h+.1&&this._velocity.y<=0?(this._mesh.position.y=h+.1,this._velocity.y=0,this._onGround=!0):this._onGround=!1;const u=l.multiplyScalar(r);if(this._velocity.x=u.x,this._velocity.z=u.z,this._mesh.position.x+=this._velocity.x*e,this._mesh.position.y+=this._velocity.y*e,this._mesh.position.z+=this._velocity.z*e,l.lengthSq()>0){const d=Math.atan2(l.x,l.z);this._mesh.rotation.y=d}this._rig.position.copy(this._mesh.position),this._rig.position.y+=1.8,t.events.emit("player:state",{stance:this._onGround?"ground":"air",sprinting:n.action("sprint"),health:this._health})}update(e,t){if(!this._built)return;const n=t.input.look;this._rig.rotation.y-=n.x,this._rig.rotation.x-=n.y,this._rig.rotation.x=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this._rig.rotation.x))}dispose(){this._mesh&&(this._scene.remove(this._mesh),this._mesh.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})),this._rig&&this._scene.remove(this._rig)}}class gg{static id="weapons";static deps=["render","player"];constructor(){this._form="claws",this._active=!1,this._cooldown=0,this._forms=["claws","blade","hammer"],this._built=!1}async init(e){this.ctx=e,this._player=e.get("player"),this._scene=e.scene,this._fx=e.peek("fx"),this._rng=e.rng.fork(),this._cooldown=0,this._built=!0,console.info("[weapons] shape-shift forms ready: claws, blade, hammer")}update(e,t){this._built&&(this._cooldown>0&&(this._cooldown-=e),this._cooldown<=0&&t.input.actionPressed("fire")&&(this._cooldown=.4,this._performAttack(t)),t.input.actionPressed("reload")&&this._cycleForm())}_performAttack(e){const t=this._player._mesh;if(!t)return;const n=t.position.clone();n.y+=1.2;const i=new D(0,0,-1).applyQuaternion(t.getWorldQuaternion(new Di));e.events.emit("weapon:fire",{weapon:this._form,origin:n,dir:i,seed:this._rng.u32()}),this._fx?.spawnSlice&&this._fx.spawnSlice(n,i)}_cycleForm(){const e=(this._forms.indexOf(this._form)+1)%this._forms.length;this._form=this._forms[e],console.info(`[weapons] form: ${this._form}`)}dispose(){this._built=!1}}class vg{static id="fx";static deps=["render","weapons"];constructor(){this._slices=[],this._geometries=[],this._materials=[],this._built=!1}async init(e){this.ctx=e,this._scene=e.scene,this._built=!0,console.info("[fx] ready — slice/power effects")}spawnSlice(e,t){const n=new Jt(.08,.08,1.2),i=new qo({color:8956620,transparent:!0,opacity:.9}),r=new Se(n,i);r.position.copy(e),r.lookAt(e.clone().add(t)),r.userData.life=.12,this._scene.add(r),this._slices.push(r),this._geometries.push(n),this._materials.push(i)}update(e,t){for(let n=this._slices.length-1;n>=0;n--){const i=this._slices[n];i.userData.life-=e,i.userData.life<=0&&(this._scene.remove(i),i.geometry.dispose(),i.material.dispose(),this._slices.splice(n,1),this._geometries.splice(n,1),this._materials.splice(n,1))}}lateUpdate(e,t){}dispose(){for(const e of this._slices)this._scene.remove(e),e.geometry.dispose(),e.material.dispose();this._slices.length=0,this._geometries.length=0,this._materials.length=0}}const _g=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];class Br{constructor(e){const t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){const i=e.int(0,n),r=t[n];t[n]=t[i],t[i]=r}this.perm=new Uint8Array(512);for(let n=0;n<512;n++)this.perm[n]=t[n&255]}n3(e,t,n){const i=this.perm,r=Math.floor(e),o=Math.floor(t),a=Math.floor(n),l=r&255,c=o&255,h=a&255;e-=r,t-=o,n-=a;const u=e*e*e*(e*(e*6-15)+10),d=t*t*t*(t*(t*6-15)+10),m=n*n*n*(n*(n*6-15)+10),g=i[l]+c,v=i[l+1]+c,p=i[g]+h,f=i[g+1]+h,w=i[v]+h,M=i[v+1]+h,_=(A,R,L,b)=>{const y=_g[A%12];return y[0]*R+y[1]*L+y[2]*b},E=(A,R,L)=>A+(R-A)*L;return E(E(E(_(i[p],e,t,n),_(i[w],e-1,t,n),u),E(_(i[f],e,t-1,n),_(i[M],e-1,t-1,n),u),d),E(E(_(i[p+1],e,t,n-1),_(i[w+1],e-1,t,n-1),u),E(_(i[f+1],e,t-1,n-1),_(i[M+1],e-1,t-1,n-1),u),d),m)}fbm3(e,t,n,i=4,r=2.03,o=.5){let a=.5,l=1,c=0,h=0;for(let u=0;u<i;u++)c+=a*this.n3(e*l,t*l,n*l),h+=a,a*=o,l*=r;return c/h}ridge3(e,t,n,i=3){let r=.5,o=1,a=0,l=0;for(let c=0;c<i;c++)a+=r*(1-Math.abs(this.n3(e*o,t*o,n*o))*2),l+=r,r*=.5,o*=2.07;return a/l}}function xg(){return{p:[],n:[],uv:[],i:[]}}function $i(s){return s.p.length/3}function Uo(s,e,t=2,n=16,i=0){const r=new Array(n),o=2/t;for(let a=0;a<n;a++){const l=a/n*Math.PI*2+i,c=Math.cos(l),h=Math.sin(l);r[a]=[s*Math.sign(c)*Math.abs(c)**o,e*Math.sign(h)*Math.abs(h)**o]}return r}function wg(s,e,t=16,n=0){return Uo(s,e,2,t,n)}function Io(s,e={}){const t=e.into??xg(),n=e.closed!==!1,i=s[0].pts.length,r=t.p,o=t.n,a=t.uv,l=t.i,c=$i(t),h=new Float64Array(i+1),u=[],d=new D;let m=0,g=null,v=[];for(let w=0;w<s.length;w++){const M=s[w],_=M.o??[0,0,0],E=M.s??[1,1],A=new Float64Array(i*3);let R=0,L=0,b=0;for(let y=0;y<i;y++){const U=M.pts[y];d.set(U[0]*E[0],M.y??0,U[1]*E[1]),M.q&&d.applyQuaternion(M.q),d.x+=_[0],d.y+=_[1],d.z+=_[2],A[y*3]=d.x,A[y*3+1]=d.y,A[y*3+2]=d.z,R+=d.x,L+=d.y,b+=d.z}R/=i,L/=i,b/=i,v.push([R,L,b]),g&&(m+=Math.hypot(R-g[0],L-g[1],b-g[2])),g=[R,L,b],u.push({arr:A,v:m})}{const w=u[0].arr;h[0]=0;for(let M=1;M<=i;M++){const _=(M-1)%i*3,E=M%i*3;h[M]=h[M-1]+Math.hypot(w[E]-w[_],w[E+1]-w[_+1],w[E+2]-w[_+2])}}const p=n?i+1:i;for(let w=0;w<u.length;w++){const M=u[w].arr;for(let _=0;_<p;_++){const E=_%i*3;r.push(M[E],M[E+1],M[E+2]),o.push(0,0,0),a.push(h[_],u[w].v)}}for(let w=0;w+1<u.length;w++)for(let M=0;M+1<p;M++){const _=c+w*p+M,E=_+1,A=c+(w+1)*p+M,R=A+1;l.push(_,A,E,E,A,R)}const f=(w,M)=>{const _=u[w].arr,E=v[w],A=$i(t);r.push(E[0],E[1],E[2]),o.push(0,0,0),a.push(h[i]*.5,u[w].v);const R=$i(t);for(let L=0;L<i;L++){r.push(_[L*3],_[L*3+1],_[L*3+2]),o.push(0,0,0);const b=L/i*Math.PI*2;a.push(h[i]*.5+Math.cos(b)*.02,u[w].v+Math.sin(b)*.02)}for(let L=0;L<i;L++){const b=R+L,y=R+(L+1)%i;M?l.push(A,y,b):l.push(A,b,y)}};return e.capStart&&f(0,!0),e.capEnd&&f(u.length-1,!1),t}function bl(s,e,t,n={}){const i=n.seg??22,r=n.rows??14,o=n.v0??0,a=n.v1??1,l=[];for(let c=0;c<r;c++){const u=(o+(a-o)*(c/(r-1)))*Math.PI,d=-Math.cos(u)*e,m=Math.sin(u);l.push({pts:wg(Math.max(1e-4,s*m),Math.max(1e-4,t*m),i),o:[0,d,0]})}return Io(l,n)}function Ds(s,e=0){const t=s.p,n=s.n,i=s.i;for(let r=e*3;r<n.length;r++)n[r]=0;for(let r=0;r<i.length;r+=3){const o=i[r]*3,a=i[r+1]*3,l=i[r+2]*3;if(o<e*3&&a<e*3&&l<e*3)continue;const c=t[o],h=t[o+1],u=t[o+2],d=t[a]-c,m=t[a+1]-h,g=t[a+2]-u,v=t[l]-c,p=t[l+1]-h,f=t[l+2]-u,w=m*f-g*p,M=g*v-d*f,_=d*p-m*v;n[o]+=w,n[o+1]+=M,n[o+2]+=_,n[a]+=w,n[a+1]+=M,n[a+2]+=_,n[l]+=w,n[l+1]+=M,n[l+2]+=_}for(let r=e*3;r<n.length;r+=3){const o=Math.hypot(n[r],n[r+1],n[r+2])||1;n[r]/=o,n[r+1]/=o,n[r+2]/=o}return s}function kr(s,e,t=0){const n=s.p,i=s.n,r=$i(s);for(let o=t;o<r;o++){const a=n[o*3],l=n[o*3+1],c=n[o*3+2],h=i[o*3],u=i[o*3+1],d=i[o*3+2],m=e(a,l,c,h,u,d,o);m&&(n[o*3]=a+h*m,n[o*3+1]=l+u*m,n[o*3+2]=c+d*m)}return s}function Mg(s,e,t=0){const n=s.p,i=new D,r=$i(s);for(let o=t;o<r;o++)i.set(n[o*3],n[o*3+1],n[o*3+2]),e(i,o),n[o*3]=i.x,n[o*3+1]=i.y,n[o*3+2]=i.z;return s}function Sg(s){const e=new ln;return e.setAttribute("position",new Mt(s.p,3)),e.setAttribute("normal",new Mt(s.n,3)),e.setAttribute("uv",new Mt(s.uv,2)),e.setIndex(s.i),e}const El=[[10,2,20],[-15,2,-10],[5,2,-20],[-8,2,12],[12,2,-18]],yg=20,bg=3.5;class Eg{static id="ai";static deps=["world","player"];constructor(){this._actors=[],this._geometries=[],this._materials=new Map,this._tmpDir=new D}_buildBody(e){const t=new Br(e),n=[],i=20,r=14;for(let l=0;l<r;l++){const c=l/(r-1),h=(c-.5)*2,u=.7+.3*Math.sin(c*Math.PI),d=.65*u,m=.5*u;n.push({pts:Uo(d,m,2.5,i),y:h})}const o=Io(n,{capStart:!0,capEnd:!0});return kr(o,(l,c,h,u,d,m)=>.06*t.fbm3(l*4,c*4,h*4,4)),Ds(o),Vt(o,t,.6),Ht(o,t,.3),Gt(o,.4,2),Or(o,t,.4,.5,.35,.3),dt(o)}_buildHead(e){const t=new Br(e),n=bl(.35,.4,.32,{v0:0,v1:.85,seg:16,rows:10});return Mg(n,(r,o)=>{if(r.y<-.05){const a=Math.max(0,(-r.y-.05)/.35);r.z+=.2*a}}),kr(n,(r,o,a)=>.015*t.fbm3(r*8,o*8,a*8,3)),Ds(n),Vt(n,t,.6),Ht(n,t,.3),Gt(n,.4,2),Or(n,t,.6,.5,.45,.3),dt(n)}_buildClaw(){const e=[];for(let i=0;i<8;i++){const r=i/7,o=.1*(1-r*.7),a=.1*(1-r*.7),l=r*.6;e.push({pts:Uo(o,a,2,10),y:l})}const n=Io(e,{capStart:!0,capEnd:!0});return Ds(n),Sg(n)}_buildHump(e){const t=new Br(e),n=bl(.35,.25,.28,{v0:.1,v1:.7,seg:12,rows:8});return kr(n,(r,o,a)=>.035*t.fbm3(r*5,o*5,a*5,3)),Ds(n),Vt(n,t,.6),Ht(n,t,.3),Gt(n,.4,2),Or(n,t,.35,.45,.3,.3),dt(n)}async init(e){this.ctx=e,this._scene=e.scene,this._player=e.get("player"),this._matInfected=e.get("materials").get("infected"),this._matFlesh=e.get("materials").get("flesh"),this._matClaws=e.get("materials").get("metal_brushed");const t=this._buildClaw();this._geometries.push(t);for(let n=0;n<El.length;n++){const[i,r,o]=El[n],a=e.rng.fork(n),l=new Nt;l.name=`infected_${n}`;const c=this._buildBody(a);this._geometries.push(c);const h=new Se(c,this._matInfected);h.position.y=1.4,l.add(h);const u=this._buildHead(a);this._geometries.push(u);const d=new Se(u,this._matFlesh);d.position.y=2.4,l.add(d);const m=new Se(t,this._matClaws);m.position.set(-.65,1.6,-.4),m.rotation.x=Math.PI/2,l.add(m);const g=new Se(t,this._matClaws);g.position.set(.65,1.6,-.4),g.rotation.x=Math.PI/2,l.add(g);const v=this._buildHump(a);this._geometries.push(v);const p=new Se(v,this._matInfected);p.position.set(0,2.1,-.25),p.scale.set(1.2,.7,1),l.add(p),l.position.set(i,r,o),l.scale.setScalar(1.3),this._scene.add(l),this._actors.push({group:l,speed:bg+n*.3,state:"idle"})}console.info(`[ai] ${this._actors.length} infected actors spawned`)}update(e,t){if(!this._actors.length)return;const n=this._player._mesh?.position;if(n)for(const i of this._actors){const r=this._tmpDir.copy(n).sub(i.group.position);r.length(),r.y=0;const o=r.length();o>.01&&r.normalize(),o<yg?(i.state="chase",i.group.position.x+=r.x*i.speed*e,i.group.position.z+=r.z*i.speed*e,o>.01&&(i.group.rotation.y=Math.atan2(r.x,r.z))):i.state="idle"}}prewarmMaterials(e){const t=e.get("render"),n=new Qn,i=new Jt(1,1,1);return n.add(new Se(i,this._matInfected)),n.add(new Se(i,this._matFlesh)),n.add(new Se(i,this._matClaws)),t.renderer.compileAsync(n,e.camera).then(()=>n.clear())}dispose(){for(const e of this._actors)this._scene.remove(e.group),e.group.traverse(t=>{t.geometry=void 0,t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())});for(const e of this._geometries)e.dispose();this._actors=[],this._geometries=[]}}class Tg{static id="ui";static deps=["render"];constructor(){this._root=null,this._healthBar=null,this._powerBar=null,this._minimap=null}async init(e){this.ctx=e,this._build(),console.info("[ui] Prototype-style HUD ready")}_build(){const e=document.createElement("div");e.id="prototype-hud",e.style.cssText="position:fixed;inset:0;pointer-events:none;font-family:ui-monospace,monospace;color:#8a9a8a;font-size:12px;z-index:10;";const t=document.createElement("div");t.style.cssText="position:absolute;bottom:40px;left:40px;width:200px;";const n=document.createElement("div");n.textContent="HEALTH",n.style.cssText="font-size:10px;letter-spacing:2px;margin-bottom:4px;color:#5a6a5a;";const i=document.createElement("div");i.style.cssText="width:100%;height:6px;background:rgba(0,0,0,0.6);border:1px solid #2a3a2a;";const r=document.createElement("div");r.style.cssText="width:100%;height:100%;background:#2d5a2d;transition:width 0.2s;",i.appendChild(r),t.appendChild(n),t.appendChild(i),e.appendChild(t),this._healthBar=r;const o=document.createElement("div");o.style.cssText="position:absolute;bottom:40px;right:40px;width:120px;";const a=document.createElement("div");a.textContent="POWERS",a.style.cssText="font-size:10px;letter-spacing:2px;margin-bottom:4px;color:#5a6a5a;";const l=document.createElement("div");l.style.cssText="width:100%;height:6px;background:rgba(0,0,0,0.6);border:1px solid #2a3a2a;";const c=document.createElement("div");c.style.cssText="width:100%;height:100%;background:#5a2d5a;transition:width 0.2s;",l.appendChild(c),o.appendChild(a),o.appendChild(l),e.appendChild(o),this._powerBar=c;const h=document.createElement("div");h.style.cssText="position:absolute;top:20px;right:20px;width:140px;height:140px;background:rgba(0,0,0,0.5);border:1px solid #2a3a2a;border-radius:50%;overflow:hidden;";const u=document.createElement("div");u.style.cssText="position:absolute;top:50%;left:50%;width:4px;height:4px;background:#8a9a8a;border-radius:50%;transform:translate(-50%,-50%);",h.appendChild(u),e.appendChild(h),this._minimap=h;const d=document.createElement("div");d.id="infected-count",d.style.cssText="position:absolute;top:20px;left:20px;font-size:11px;color:#5a6a5a;",d.textContent="INFECTED: 0",e.appendChild(d),document.body.appendChild(e),this._root=e,this._infectedCount=d}update(e,t){if(!this._root)return;const n=t.peek("player"),i=t.peek("ai");if(n){const r=Math.max(0,n._health||0);this._healthBar.style.width=`${r}%`}if(i){const r=i._actors?.length||0;this._infectedCount.textContent=`INFECTED: ${r}`}}dispose(){this._root&&(this._root.remove(),this._root=null)}}class Ag{static id="audio";static deps=["player"];async init(e){this.ctx_=new(window.AudioContext||window.webkitAudioContext),console.log("[audio] context ready")}update(e,t){}dispose(){this.ctx_&&(this.ctx_.close(),this.ctx_=null)}}const zr={hero:{pos:[12,1.75,18],look:[-4,2.2,-6],fov:75,time:16.5,doc:"Wide establishing shot down the main street — reads overall art direction."},interior:{pos:[-8.5,1.7,3.2],look:[2,1.6,-2],fov:70,time:16.5,doc:"Interior with light shafts through windows — bounce, AO, volumetrics."},detail:{pos:[3.2,1.35,5],look:[1.4,1.1,2.2],fov:45,time:16.5,doc:"Close-up on wall/prop materials — texel density, normal maps, grime."},sunset:{pos:[16,3.2,22],look:[-10,3,-14],fov:65,time:19.2,doc:"Low sun — atmospheric scattering, long shadows, god rays, bloom."},night:{pos:[12,1.75,18],look:[-4,2.2,-6],fov:75,time:1.5,doc:"Night — artificial lights, exposure adaptation, shadow quality in the dark."},weapon:{pos:[6,1.7,10],look:[-2,1.8,-2],fov:80,time:16.5,apply:s=>s.ctx.peek("weapons")?.debugPose?.("idle"),doc:"Hip-fire viewmodel — weapon silhouette, materials, hand rig."},ads:{pos:[6,1.7,10],look:[-2,1.8,-2],fov:58,time:16.5,apply:s=>s.ctx.peek("weapons")?.debugPose?.("ads"),doc:"Aiming down sights — optic alignment, depth of field, reticle."},muzzle:{pos:[6,1.7,10],look:[-2,1.8,-2],fov:80,time:16.5,apply:(s,e)=>s.ctx.peek("weapons")?.debugPose?.("fire",e),doc:"Mid-recoil with muzzle flash — flash shape, light spill, shell eject."},combat:{pos:[4,1.7,12],look:[-6,1.7,-4],fov:80,time:16.5,apply:s=>s.ctx.peek("ai")?.debugStage?.("firefight"),doc:"Enemies mid-firefight — character quality, animation, impact FX."},impacts:{pos:[2.5,1.6,6],look:[-1.8,1.5,9],fov:60,time:16.5,apply:s=>s.ctx.peek("fx")?.debugBurst?.("wall"),doc:"Bullet impacts on a wall — decals, debris, dust puffs, sparks."},hud:{pos:[12,1.75,18],look:[-4,2.2,-6],fov:80,time:16.5,apply:s=>s.ctx.peek("ui")?.debugState?.("combat"),doc:"Full HUD in combat — layout, typography, readability, hit feedback."}};function Rg(s,{capture:e,lockstep:t=!1}={}){if(window.__SHOTS__=zr,window.__APPLY_SHOT__=(i,r={})=>{const o=zr[i];if(!o)return{error:`unknown shot "${i}"`,available:Object.keys(zr)};s.input.frozen=!0,s.input.enabled=!1;const a=s.ctx.peek("player");a?.setControlEnabled?.(!1);const l=s.camera;l.position.fromArray(o.pos);const c=new D().fromArray(o.look);return l.lookAt(c),o.fov&&(l.fov=o.fov,l.updateProjectionMatrix()),a?.teleport?.(l.position,l.rotation),s.ctx.peek("weapons")?.debugPose?.("idle"),s.ctx.peek("fx")?.debugBurst?.("none"),s.ctx.peek("ui")?.debugState?.("clean"),o.time!==void 0&&s.ctx.peek("sky")?.setTimeOfDay?.(o.time),o.apply?.(s,r),s.events.emit("shot:applied",{name:i,shot:o}),{applied:i,pos:o.pos,fov:o.fov??s.config.fov}},e){s.input.frozen=!0;let i=0;s.step=(r=>function(){return this._last=i,i+=1e3/60,r.call(this,i)})(s.step)}window.__RENDER_INFO__=null,s.events.on("resize",()=>{});const n=()=>{const i=s.ctx.peek("render");window.__RENDER_INFO__={frame:s.time.frame,calls:i?.renderer?.info.render.calls??0,tris:i?.renderer?.info.render.triangles??0,programs:i?.renderer?.info.programs?.length??0,textures:i?.renderer?.info.memory.textures??0,geometries:i?.renderer?.info.memory.geometries??0,ms:s.time.dt*1e3}};if(t)s.start=function(){this._running=!0},window.__LOCKSTEP__=!0,window.__PUMP__=(i=1)=>new Promise(r=>{let o=0;const a=()=>{s.step(),n(),++o>=i?r(s.time.frame):requestAnimationFrame(a)};requestAnimationFrame(a)}),window.__PRESENT__=(i=2)=>new Promise(r=>{let o=0;const a=()=>++o>=i?r(s.time.frame):requestAnimationFrame(a);requestAnimationFrame(a)});else{window.__LOCKSTEP__=!1,window.__PUMP__=(r=1)=>new Promise(o=>{let a=0;const l=()=>++a>=r?o(s.time.frame):requestAnimationFrame(l);requestAnimationFrame(l)}),window.__PRESENT__=window.__PUMP__;const i=()=>{n(),requestAnimationFrame(i)};requestAnimationFrame(i)}return{pump:window.__PUMP__,present:window.__PRESENT__,lockstep:!!t}}const Tl=[{pos:[12,1.75,18],look:[-4,2.2,-6]},{pos:[-8.5,1.7,3.2],look:[2,1.6,-2]},{pos:[3.2,1.35,5],look:[1.4,1.1,2.2]},{pos:[4,1.7,12],look:[-6,1.7,-4]}],Cg=new Set(["fx"]),Pg=!1;async function Dg(s,{onProgress:e=()=>{},transients:t=!1,drawFrames:n=!1}={}){const i=performance.now(),o=s.ctx.peek("render")?.renderer;if(!o)return{ok:!1,reason:"no renderer"};const a=o.info.programs?.length??0,l=s.camera,c={pos:l.position.clone(),quat:l.quaternion.clone(),fov:l.fov},h=s.time,u={elapsed:h.elapsed,raw:h.raw,dt:h.dt,alpha:h.alpha,frame:h.frame},d=s.rng,m={s0:d.s0,s1:d.s1,s2:d.s2,s3:d.s3,spare:d._spare},g=s._accum,v=[()=>s.ctx.peek("ai")?.debugStage?.("firefight"),()=>s.ctx.peek("fx")?.debugBurst?.("wall"),()=>s.ctx.peek("fx")?.debugBurst?.("explosion"),()=>s.ctx.peek("fx")?.debugBurst?.("muzzle"),()=>s.ctx.peek("fx")?.debugBurst?.("combat"),()=>s.ctx.peek("weapons")?.debugPose?.("fire"),()=>s.ctx.peek("weapons")?.debugPose?.("ads"),()=>s.ctx.peek("ui")?.debugState?.("combat")],p=new Zt(1,1,{depthBuffer:!1,stencilBuffer:!1}),f=o.getRenderTarget(),w=o.getActiveCubeFace?.()??0,M=o.getActiveMipmapLevel?.()??0,_=async()=>{o.setRenderTarget(p);try{await o.compileAsync(s.scene,s.camera),await o.compileAsync(s.viewScene,s.viewCamera)}catch{try{o.compile(s.scene,s.camera),o.compile(s.viewScene,s.viewCamera)}catch{}}finally{o.setRenderTarget(f,w,M)}},E=()=>new Promise(R=>requestAnimationFrame(R));try{let R=0;const L=Tl.length*2+(t?v.length:0)+1,b=()=>e(Math.min(1,++R/L));for(const k of Tl)l.position.set(...k.pos),l.lookAt(...k.look),l.updateMatrixWorld(!0),await _(),b(),n&&(s.step(),await E(),s.step(),await E()),b();l.position.copy(c.pos),l.quaternion.copy(c.quat),l.fov=c.fov,l.updateProjectionMatrix(),l.updateMatrixWorld(!0);const y=[],U=s.registry.peek?.("render");U&&typeof U.prewarmMaterials=="function"&&y.push(U);for(const k of s.registry.ordered??[])k!==U&&(Cg.has(k.constructor?.id)||typeof k.prewarmMaterials=="function"&&y.push(k));const B={};for(const k of y){const W=k.constructor?.id??"?";try{const q=k===U?{post:!0,shadow:Pg}:s.ctx;B[W]=await k.prewarmMaterials(q)??{ok:!0}}catch(q){B[W]={ok:!1,reason:String(q?.message??q)}}}s.__prewarmHooks=B;for(const k of t?v:[]){try{k()}catch{}s.step(),await E(),await _(),s.step(),await E(),b()}b()}finally{for(const R of t?[()=>s.ctx.peek("fx")?.debugBurst?.("none"),()=>s.ctx.peek("weapons")?.debugPose?.("idle"),()=>s.ctx.peek("ui")?.debugState?.("clean"),()=>s.ctx.peek("ai")?.debugStage?.("none")]:[])try{R()}catch{}l.position.copy(c.pos),l.quaternion.copy(c.quat),l.fov=c.fov,l.updateProjectionMatrix(),l.updateMatrixWorld(!0),Object.assign(s.time,u),d.s0=m.s0,d.s1=m.s1,d.s2=m.s2,d.s3=m.s3,d._spare=m.spare,s._accum=g,s._last=performance.now(),o.setRenderTarget(f,w,M),p.dispose()}const A=o.info.programs?.length??0;return{ok:!0,hooks:s.__prewarmHooks,ms:Math.round(performance.now()-i),programsBefore:a,programsAfter:A,compiled:A-a,parallel:!!o.getContext().getExtension("KHR_parallel_shader_compile")}}const $s=new URLSearchParams(location.search),na=$s.get("capture")==="1",lc=na&&$s.get("lockstep")==="1",Lg=qm({quality:$s.get("q")??"ultra",deterministic:na}),Ug=document.getElementById("game"),Ii=new jm({canvas:Ug,config:Lg});Ii.add($0).add(ng).add(ig).add(og).add(lg).add(mg).add(gg).add(vg).add(Eg).add(Tg).add(Ag);try{await Ii.init()}catch(s){throw console.error("[boot] init failed",s),document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;inset:0;padding:2rem;color:#f66;background:#000;
       font:12px/1.5 ui-monospace,monospace;overflow:auto;z-index:9999;white-space:pre-wrap">
 BOOT FAILURE

${s.stack??s.message}</pre>`),s}const Wi=document.getElementById("blocker");Wi&&(Wi.style.cssText="display:none !important;visibility:hidden !important;pointer-events:none !important;",Wi.setAttribute("disabled",""),setTimeout(()=>Wi.remove(),0),setTimeout(()=>Wi.remove(),1e3));const Ls=document.getElementById("game");Ls&&(Ls.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;z-index:9999;display:block;",Ls.remove(),document.body.appendChild(Ls));const Ig=Rg(Ii,{capture:na,lockstep:lc}),cc=$s.get("prewarm")==="0"?{ok:!1,reason:"disabled by ?prewarm=0"}:await Dg(Ii);console.info("[boot] prewarm",cc);window.__PREWARM__=cc;Ii.start();const Al=3;if(lc)await Ig.pump(Al),window.__READY__=!0;else{let s=0;const e=()=>{if(++s>=Al){window.__READY__=!0;return}requestAnimationFrame(e)};requestAnimationFrame(e)}window.__ENGINE__=Ii;
//# sourceMappingURL=index-By9y1s3w.js.map
