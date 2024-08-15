/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{g as t}from"./_commonjsHelpers.js";function e(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,r,o,i={exports:{}};n=i,r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,o=function(t={}){var e,n,o=t;o.ready=new Promise(((t,r)=>{e=t,n=r}));var i=Object.assign({},o),a="object"==typeof window,f="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var s,u="";(a||f)&&(f?u=self.location.href:"undefined"!=typeof document&&document.currentScript&&(u=document.currentScript.src),r&&(u=r),u=0!==u.indexOf("blob:")?u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):"",f&&(s=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var c,l,p=o.print||console.log.bind(console),h=o.printErr||console.error.bind(console);Object.assign(o,i),i=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(c=o.wasmBinary),"object"!=typeof WebAssembly&&R("no native wasm support detected");var m,d,y=!1;function v(){var t=l.buffer;o.HEAP8=new Int8Array(t),o.HEAP16=new Int16Array(t),o.HEAPU8=m=new Uint8Array(t),o.HEAPU16=new Uint16Array(t),o.HEAP32=new Int32Array(t),o.HEAPU32=d=new Uint32Array(t),o.HEAPF32=new Float32Array(t),o.HEAPF64=new Float64Array(t)}var g=[],b=[],w=[],A=0,E=null;function R(t){o.onAbort?.(t),h(t="Aborted("+t+")"),y=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}var P,S,_=t=>t.startsWith("data:application/octet-stream;base64,");function H(t){if(t==P&&c)return new Uint8Array(c);if(s)return s(t);throw"both async and sync fetching of the wasm failed"}function j(t,e,n){return function(t){return c||!a&&!f||"function"!=typeof fetch?Promise.resolve().then((()=>H(t))):fetch(t,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((()=>H(t)))}(t).then((t=>WebAssembly.instantiate(t,e))).then((t=>t)).then(n,(t=>{h(`failed to asynchronously prepare wasm: ${t}`),R(t)}))}_(P="libtess.wasm")||(S=P,P=o.locateFile?o.locateFile(S,u):u+S);var I=t=>{for(;t.length>0;)t.shift()(o)};o.noExitRuntime;var x,T=t=>{var e=(t-l.buffer.byteLength+65535)/65536;try{return l.grow(e),v(),1}catch(t){}},O=[null,[],[]],W="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,C=[],F=t=>{var e=C[t];return e||(t>=C.length&&(C.length=t+1),C[t]=e=x.get(t)),e},M={e:()=>{throw 1/0},g:(t,e,n)=>m.copyWithin(t,e,e+n),f:t=>{var e=m.length,n=2147483648;if((t>>>=0)>n)return!1;for(var r,o=1;o<=4;o*=2){var i=e*(1+.2/o);i=Math.min(i,t+100663296);var a=Math.min(n,(r=Math.max(t,i))+(65536-r%65536)%65536);if(T(a))return!0}return!1},c:(t,e,n,r)=>{for(var o=0,i=0;i<n;i++){var a=d[e>>2],f=d[e+4>>2];e+=8;for(var s=0;s<f;s++)u=t,c=m[a+s],l=void 0,l=O[u],0===c||10===c?((1===u?p:h)(((t,e,n)=>{for(var r=e+void 0,o=e;t[o]&&!(o>=r);)++o;if(o-e>16&&t.buffer&&W)return W.decode(t.subarray(e,o));for(var i="";e<o;){var a=t[e++];if(128&a){var f=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|f<<6|s:(7&a)<<18|f<<12|s<<6|63&t[e++])<65536)i+=String.fromCharCode(a);else{var u=a-65536;i+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else i+=String.fromCharCode((31&a)<<6|f)}else i+=String.fromCharCode(a)}return i})(l,0)),l.length=0):l.push(c);o+=f}var u,c,l;return d[r>>2]=o,0},b:function(t,e){var n=k();try{return F(t)(e)}catch(t){if(q(n),t!==t+0)throw t;D(1,0)}},h:function(t,e,n,r){var o=k();try{return F(t)(e,n,r)}catch(t){if(q(o),t!==t+0)throw t;D(1,0)}},d:function(t,e){var n=k();try{F(t)(e)}catch(t){if(q(n),t!==t+0)throw t;D(1,0)}},a:function(t,e,n){var r=k();try{F(t)(e,n)}catch(t){if(q(r),t!==t+0)throw t;D(1,0)}}},U=function(){var t,e,r,i,a={a:M};function f(t,e){var n;return U=t.exports,l=U.i,v(),x=U.m,n=U.j,b.unshift(n),function(t){if(A--,o.monitorRunDependencies?.(A),0==A&&E){var e=E;E=null,e()}}(),U}if(A++,o.monitorRunDependencies?.(A),o.instantiateWasm)try{return o.instantiateWasm(a,f)}catch(t){h(`Module.instantiateWasm callback failed with error: ${t}`),n(t)}return(t=c,e=P,r=a,i=function(t){f(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||_(e)||"function"!=typeof fetch?j(e,r,i):fetch(e,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,r).then(i,(function(t){return h(`wasm streaming compile failed: ${t}`),h("falling back to ArrayBuffer instantiation"),j(e,r,i)}))))).catch(n),{}}();o._malloc=t=>(o._malloc=U.k)(t),o._free=t=>(o._free=U.l)(t),o._triangulate=(t,e,n,r,i,a)=>(o._triangulate=U.n)(t,e,n,r,i,a);var B,D=(t,e)=>(D=U.o)(t,e),k=()=>(k=U.p)(),q=t=>(q=U.q)(t);function L(){function t(){B||(B=!0,o.calledRun=!0,y||(I(b),e(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),w.unshift(t);var t;I(w)}()))}A>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),g.unshift(t);var t;I(g)}(),A>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(E=function t(){B||L(),B||(E=t)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();L();let z=null,N=null,$=null,Y=null,G=0;return o.triangulate=(t,e,n)=>{z||(z=o._triangulate);let r=o.HEAPF32;const i=o.HEAP32.BYTES_PER_ELEMENT,a=r.BYTES_PER_ELEMENT;n>G&&(G=n,$&&(o._free($),$=0),N&&(o._free(N),N=0)),$||($=o._malloc(n*a)),Y||(Y=o._malloc(4e3*i));const f=2*n;N||(N=o._malloc(f*a)),r=o.HEAPF32,r.set(t,$/a),o.HEAP32.set(e,Y/i);const s=f/2,u=z($,Y,Math.min(e.length,4e3),2,N,s),c=2*u;r=o.HEAPF32;const l=r.slice(N/a,N/a+c),p={};return p.buffer=l,p.vertexCount=u,p},t.ready},n.exports=o;var a=i.exports;const f=e({__proto__:null,default:t(a)},[a]);export{f as l};
