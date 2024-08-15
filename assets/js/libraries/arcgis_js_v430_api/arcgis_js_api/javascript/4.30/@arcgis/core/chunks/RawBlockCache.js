/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../geometry.js";import{a as e,b as t,s as n}from"./rasterProjectionHelper.js";import r from"../geometry/Point.js";const l=new Map,o=new class{constructor(e=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=e,this._interval=Math.min(e,t)}decreaseRefCount(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.refCount--,e.refCount<=0&&(r.delete(n),e.controller&&e.controller.abort()),e.refCount}return 0}getBlock(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.ts=Date.now(),e.refCount++,r.delete(n),r.set(n,e),e.block}return null}putBlock(e,t,n,r){const l=this._cachedBlocks,o=e+"/"+t;if(l.has(o)){const e=l.get(o);e.ts=Date.now(),e.refCount++}else l.set(o,{block:n,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(e,t){const n=this._cachedBlocks,r=e+"/"+t;n.has(r)&&n.delete(r)}updateMaxSize(e){this._size=e,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const e=this._cachedBlocks;this._timer=setInterval((()=>{const t=Array.from(e),n=Date.now();for(let r=0;r<t.length&&t[r][1].ts<=n-this._duration;r++)e.delete(t[r][0]);0===e.size&&this._clearTimer()}),this._interval)}_trim(){const e=this._cachedBlocks;if(-1===this._size||this._size>=e.size)return;const t=Array.from(e);for(let n=0;n<t.length-this._size;n++)e.delete(t[n][0])}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}};function s(e,t){return null==t?e:`${e}?sliceId=${t}`}function c(e,t){const n={extent:null,rasterInfo:t,cache:new Map},r=l.get(e);return r?(r.push(n),r.length-1):(l.set(e,[n]),0)}function i(e,t){const n=l.get(e);n&&(n[t]=null,n.some((e=>null!=e))||l.delete(e))}function a(e,t,n){const r=l.get(e);if(!r)return null==t?o.decreaseRefCount(e,n):0;if(null==t||null==r[t])return o.decreaseRefCount(e,n);const s=r[t]?.cache,c=s?.get(n);if(s&&c){if(c.refCount--,0===c.refCount){s.delete(n);for(let e=0;e<r.length;e++)r[e]?.cache.delete(n);c.controller&&c.controller.abort()}return c.refCount}return 0}function u(e,t,n){const r=l.get(e);if(!r)return null==t?o.getBlock(e,n):null;if(null==t||null==r[t]){for(let e=0;e<r.length;e++){const t=r[e]?.cache.get(n);if(t)return t.refCount++,t.block}return o.getBlock(e,n)}const s=r[t]?.cache.get(n);if(s)return s.refCount++,s.block;for(let e=0;e<r.length;e++){if(e===t||!r[e])continue;const l=r[e]?.cache,o=l?.get(n);if(l&&o)return o.refCount++,l.set(n,o),o.block}return null}function h(e,t,n,r,s=null){const c=l.get(e);if(!c)return void(null==t&&o.putBlock(e,n,r,s));if(null==t||null==c[t])return void o.putBlock(e,n,r,s);const i={refCount:1,block:r,isResolved:!1,isRejected:!1,controller:s};r.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),c[t]?.cache.set(n,i)}function f(e,t,n){const r=l.get(e);r?null!=t&&null!=r[t]?r[t]?.cache.delete(n):o.deleteBlock(e,n):null==t&&o.deleteBlock(e,n)}function m(o,s,c,i,a,u,h=null){const f=function(e,t){const n=l.get(e);return n?n[t]??null:null}(o,s);if(!f)return;const m=f.extent,{cache:d,rasterInfo:x}=f;if(m&&m.xmin===c.xmin&&m.xmax===c.xmax&&m.ymin===c.ymin&&m.ymax===c.ymax)return;i=i??0;const g=c.clone().normalize(),{spatialReference:_,transform:y}=x,k=new Set;for(let l=0;l<g.length;l++){const o=g[l];if(o.xmax-o.xmin<=i||o.ymax-o.ymin<=i)continue;let s=e(o,_,h);null!=y&&(s=y.inverseTransform(s));const c=new r({x:i,y:i,spatialReference:o.spatialReference});if(null==a&&!(a=t(c,_,o,h)))return;const{pyramidLevel:f,pyramidResolution:m,excessiveReading:d}=n(a,x,u||"closest");if(d)return;const{storageInfo:p}=x,{origin:B}=p,C={x:Math.max(0,Math.floor((s.xmin-B.x)/m.x)),y:Math.max(0,Math.floor((B.y-s.ymax)/m.y))},M=Math.ceil((s.xmax-s.xmin)/m.x-.1),R=Math.ceil((s.ymax-s.ymin)/m.y-.1),b=f>0?p.pyramidBlockWidth:p.blockWidth,v=f>0?p.pyramidBlockHeight:p.blockHeight,z=1,w=Math.max(0,Math.floor(C.x/b)-z),j=Math.max(0,Math.floor(C.y/v)-z),I=Math.floor((C.x+M-1)/b)+z,T=Math.floor((C.y+R-1)/v)+z;for(let e=j;e<=T;e++)for(let t=w;t<=I;t++)k.add(`${f}/${e}/${t}`)}d.forEach(((e,t)=>{if(!k.has(t)){const e=d.get(t);(null==e||e.isResolved||e.isRejected)&&d.delete(t)}})),f.extent={xmin:c.xmin,ymin:c.ymin,xmax:c.xmax,ymax:c.ymax}}export{u as a,a as b,i as c,f as d,s as g,h as p,c as r,m as u};
