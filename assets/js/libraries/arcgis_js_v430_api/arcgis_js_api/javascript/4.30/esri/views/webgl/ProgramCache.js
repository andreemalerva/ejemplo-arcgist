// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/NestedMap","./Program"],function(e,l,f,g){class h{constructor(a){this._rctx=a;this._store=new f.NestedMap}dispose(){this._store.forEach(a=>a.forEach(b=>b.dispose()));this._store.clear()}acquire(a,b,c,k){const d=this._store.get(a,b);if(null!=d)return d.ref(),d;c=new g.Program(this._rctx,a,b,c,k);c.ref();this._store.set(a,b,c);return c}get test(){}}e.ProgramCache=h;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});