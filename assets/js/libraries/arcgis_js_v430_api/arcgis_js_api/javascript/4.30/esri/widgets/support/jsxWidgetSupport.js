// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/handleUtils","./symbols"],function(h,p,k){function l(b,a){let d=a.children;if(d?.length)for(var c=0;c<d.length;++c)d[c]=l(b,d[c]);else d=q;c=a.vnodeSelector;if(m(c)){a=a.properties||r;const f=a.key||c;return{vnodeSelector:"div",properties:{key:f,afterCreate:t,afterUpdate:u,afterRemoved:n,parentWidget:b,widgetConstructor:c,widgetProperties:{...a,key:f,children:d}},children:void 0,text:void 0,domNode:null}}return a}function t(b,a,d,{parentWidget:c,widgetConstructor:f,widgetProperties:v}){const e=
new f(v);e.container=b;g.set(b,e);e.afterCreate?.(e,b);c.addHandles(p.makeHandle(()=>n(b)));queueMicrotask(()=>{e[k.widgetTestDataSymbol].projector.renderNow()})}function u(b,a,d,{widgetProperties:c}){if(a=g.get(b))a.set(c),a.afterUpdate?.(a,b)}function n(b){const a=g.get(b);a&&(a.afterRemoved?.(a,b),a.destroy(),g.delete(b))}function m(b){return"function"===typeof b&&b[k.widgetSymbol]}const q=[],r={},g=new WeakMap;h.isWidgetConstructor=m;h.processWidgets=l;Object.defineProperty(h,Symbol.toStringTag,
{value:"Module"})});