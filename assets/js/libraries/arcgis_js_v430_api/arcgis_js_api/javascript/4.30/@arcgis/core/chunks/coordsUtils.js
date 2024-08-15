/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{e as n}from"../core/lang.js";import{A as t}from"./Axis.js";import{j as r}from"./unitUtils.js";function e(n){if(!n)return null;if(Array.isArray(n))return n;const t=n.hasZ,r=n.hasM;if("point"===n.type)return r&&t?[n.x,n.y,n.z,n.m]:t?[n.x,n.y,n.z]:r?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){const t=n.clone().normalize();if(!t)return null;let r=!1,e=!1;return t.forEach((n=>{n.hasZ&&(r=!0),n.hasM&&(e=!0)})),t.map((n=>{const t=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(r&&n.hasZ){const r=.5*(n.zmax-n.zmin);for(let n=0;n<t.length;n++)t[n].push(r)}if(e&&n.hasM){const r=.5*(n.mmax-n.mmin);for(let n=0;n<t.length;n++)t[n].push(r)}return t}))}return null}function i(n,t){const r=t[0]-n[0],e=t[1]-n[1];if(n.length>2&&t.length>2){const i=n[2]-t[2];return Math.sqrt(r*r+e*e+i*i)}return Math.sqrt(r*r+e*e)}function s(n,t,r){const e=n[0]+r*(t[0]-n[0]),i=n[1]+r*(t[1]-n[1]);return n.length>2&&t.length>2?[e,i,n[2]+r*(t[2]-n[2])]:[e,i]}function o(n,t,r,e){return u(n,t,r[e],r[e+1])}function u(n,t,r,e){const[i,s]=t,[o,u]=r,[f,l]=e,c=f-o,a=l-u,p=c*c+a*a,h=(i-o)*c+(s-u)*a,m=Math.min(1,Math.max(0,h/p));return n[0]=o+c*m,n[1]=u+a*m,n}function f(n,t,r,e,i,s){let o=r,u=e,f=i-o,l=s-u;if(0!==f||0!==l){const r=((n-o)*f+(t-u)*l)/(f*f+l*l);r>1?(o=i,u=s):r>0&&(o+=f*r,u+=l*r)}return f=n-o,l=t-u,f*f+l*l}function l(n,t){return s(n,t,.5)}function c(n){const t=n.length;let r=0;for(let e=0;e<t-1;++e)r+=i(n[e],n[e+1]);return r}function a(n,t){if(t<=0)return n[0];const r=n.length;let e=0;for(let o=0;o<r-1;++o){const r=i(n[o],n[o+1]);if(t-e<r){const i=(t-e)/r;return s(n[o],n[o+1],i)}e+=r}return n[r-1]}function p(n,r=t.X,e=t.Y){let i=0;const s=n.length;let o=n[0];for(let t=1;t<s;t++){const s=n[t];i+=(s[r]-o[r])*(s[e]+o[e]),o=s}if(!h(n)){const t=n[0];i+=(t[r]-o[r])*(t[e]+o[e])}return i>=0}function h(t){const r=t.length;return r<3||n(t[0],t[r-1])}function m(n){"rings"in n&&(g(n),function(n){if(!("rings"in n))return!1;if(0===n.rings.length||p(n.rings[0]))return!1;for(const t of n.rings)t.reverse()}(n))}function g(n){if(!("rings"in n))return!1;let t=!1;for(const r of n.rings)h(r)||(r.push(r[0].slice()),t=!0);return t}function y(n){return"polygon"!==n.type&&"polyline"!==n.type||x("polygon"===n.type?n.rings:n.paths,n.spatialReference),n}function x(n,t){const e=r(t);if(!e)return;const i=e.valid[0],s=e.valid[1],o=s-i;for(const t of n){let n=1/0,r=-1/0;for(const e of t){const t=M(e[0],i,s);n=Math.min(n,t),r=Math.max(r,t),e[0]=t}const e=r-n;o-e<e&&t.forEach((n=>{n[0]<0&&(n[0]+=o)}))}}function M(n,t,r){const e=r-t;return n<t?r-(t-n)%e:n>r?t+(n-t)%e:n}function j(n,t){if(n===t)return!0;if(n.type!==t.type)return!1;if("point"===n.type||"mesh"===n.type||"extent"===n.type)return!0;if("multipoint"===n.type)return n.points.length===t.points.length;const[r,e]="polyline"===n.type?[n.paths,t.paths]:[n.rings,t.rings];return r.length===e.length&&r.every(((n,t)=>n.length===e[t].length))}export{x as a,c as b,g as c,a as d,e,f,i as g,l as h,p as i,m as j,M as k,j as l,u as m,o as p,y as u};
