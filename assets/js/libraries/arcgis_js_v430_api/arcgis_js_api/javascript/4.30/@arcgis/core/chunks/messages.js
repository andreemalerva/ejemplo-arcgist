/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import{m as s}from"./handleUtils.js";import{createResolver as n}from"../core/promiseUtils.js";import{b as e,g as r}from"./locale.js";const o=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,i={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function a(t){return t in i}const d=[],l=new Map;function c(t){for(const s of l.keys())m(t.pattern,s)&&l.delete(s)}function u(t){return d.includes(t)||(c(t),d.unshift(t)),s((()=>{const s=d.indexOf(t);s>-1&&(d.splice(s,1),c(t))}))}async function h(s){const n=r();l.has(s)||l.set(s,async function(s,n){const e=[];for(const t of d)if(m(t.pattern,s))try{return await t.fetchMessageBundle(s,n)}catch(t){e.push(t)}if(e.length)throw new t("intl:message-bundle-error",`Errors occurred while loading "${s}"`,{errors:e});throw new t("intl:no-message-bundle-loader",`No loader found for message bundle "${s}"`)}(s,n));const e=l.get(s);return e&&await _.add(e),e}function f(t){if(!o.test(t))return null;const s=o.exec(t);if(null===s)return null;const[,n,e]=s,r=n+(e?"-"+e.toUpperCase():"");return a(r)?r:a(n)?n:null}function m(t,s){return"string"==typeof t?s.startsWith(t):t.test(s)}e((()=>{l.clear()}));const _=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=n())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}};export{h as f,f as n,u as r};
