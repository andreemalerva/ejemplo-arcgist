// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["./accessorSupport/tracking","./accessorSupport/tracking/SimpleObservable"],function(b,d){class e{constructor(a){this._observable=new d.SimpleObservable;this._map=new Map(a)}get size(){b.trackAccess(this._observable);return this._map.size}clear(){0<this._map.size&&(this._map.clear(),this._observable.notify())}delete(a){(a=this._map.delete(a))&&this._observable.notify();return a}entries(){b.trackAccess(this._observable);return this._map.entries()}forEach(a,c){b.trackAccess(this._observable);
this._map.forEach((f,g)=>a.call(c,f,g,this),c)}get(a){b.trackAccess(this._observable);return this._map.get(a)}has(a){b.trackAccess(this._observable);return this._map.has(a)}keys(){b.trackAccess(this._observable);return this._map.keys()}set(a,c){this._map.set(a,c);this._observable.notify();return this}values(){b.trackAccess(this._observable);return this._map.values()}[Symbol.iterator](){b.trackAccess(this._observable);return this._map[Symbol.iterator]()}get [Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}
return e});