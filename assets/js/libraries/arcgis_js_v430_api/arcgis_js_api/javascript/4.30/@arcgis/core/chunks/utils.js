/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{h as r}from"./handleUtils.js";import{clone as t}from"../core/lang.js";function n(r){return r.__accessor__??null}function e(r,t){return null!=r?.metadata?.[t]}function a(r,t,n){return i(r,t,n?{policy:n,path:""}:null)}function i(r,n,e){return n?Object.keys(n).reduce(((r,a)=>{const s=a;let u=null,o="merge";if(e&&(u=e.path?`${e.path}.${a}`:a,o=e.policy(u)),"replace"===o)return r[s]=n[s],r;if("replace-arrays"===o&&Array.isArray(r[s]))return r[s]=n[s],r;if(void 0===r[s])return r[s]=t(n[s]),r;let c=r[s],l=n[s];if(c===l)return r;if(Array.isArray(l)||Array.isArray(r))c=c?Array.isArray(c)?r[s]=c.concat():r[s]=[c]:r[s]=[],l&&(Array.isArray(l)||(l=[l]),l.forEach((r=>{c.includes(r)||c.push(r)})));else if(l&&"object"==typeof l)if(e){const t=e.path;e.path=u,r[s]=i(c,l,e),e.path=t}else r[s]=i(c,l,null);else r.hasOwnProperty(a)&&!n.hasOwnProperty(a)||(r[s]=l);return r}),r||{}):r}function s(r){return Array.isArray(r)?r:r.split(".")}function u(r){return r.includes(",")?r.split(",").map((r=>r.trim())):[r.trim()]}function o(t,n,e,a){const i=function(r){if(Array.isArray(r)){const t=[];for(const n of r)t.push(...u(n));return t}return u(r)}(n);if(1!==i.length){const n=i.map((r=>a(t,r,e)));return r(n)}return a(t,i[0],e)}export{o as a,n as g,e as i,a as m,s as p};
