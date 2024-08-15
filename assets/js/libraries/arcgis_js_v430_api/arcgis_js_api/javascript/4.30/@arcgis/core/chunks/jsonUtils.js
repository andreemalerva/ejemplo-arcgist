/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{s as t}from"../config.js";import{p as s}from"./parser.js";import{i as r}from"./utils3.js";function a(e,t,s){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const s of e)t.push({scale:s.scale,value:o(s.value)});return t}return o(e)}(e)}catch(e){s?.messages?.push(e)}return null}function n(e,a,n,o){try{const o=function(e){const t=s(e);return t?r(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}(e);t(n,o,a)}catch(e){o.messages&&o.messages.push(e)}}function o(e){if(!e?.length)return"";const t=[];for(const r of e){let e=[];switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[c(r,"amount")];break;case"blur":e=[c(r,"radius","pt")];break;case"hue-rotate":e=[c(r,"angle","deg")];break;case"drop-shadow":e=[c(r,"xoffset","pt"),c(r,"yoffset","pt"),c(r,"blurRadius","pt"),i(r,"color")];break;case"bloom":e=[c(r,"strength"),c(r,"radius","pt"),c(r,"threshold")]}const a=`${r.type}(${e.filter(Boolean).join(" ")})`;s(a),t.push(a)}return t.join(" ")}function c(t,s,r){if(null==t[s])throw new e("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});return r?t[s]+r:""+t[s]}function i(t,s){if(null==t[s])throw new e("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});const r=t[s];return`rgba(${r[0]||0}, ${r[1]||0}, ${r[2]||0}, ${r[3]/255||0})`}export{o as e,a as r,n as w};
