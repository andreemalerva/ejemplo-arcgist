// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/Warning ../../core/Logger ../../core/has ../../core/RandomLCG ../../core/Error ../../core/accessorSupport/decorators/subclass ../../geometry/Polygon ../../geometry/projection".split(" "),function(l,d,m,h,p,q,r,t,n,g,k){var e;d=e=class extends m.JSONSupportMixin(d.ofType(g)){constructor(a){super(a)}clone(){return new e(this.items.map(a=>a.clone()))}write(a,c){return this.toJSON(c)}toJSON(a){const c=a?.layer?.spatialReference;
return c?this.toArray().map(b=>{if(!c.equals(b.spatialReference)){if(!k.canProjectWithoutEngine(b.spatialReference,c))return a?.messages&&a.messages.push(new h("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})),null;const f=new g;k.projectPolygon(b,f,c);b=f}b=b.toJSON(a);delete b.spatialReference;return b}).filter(b=>null!=b):(a?.messages&&a.messages.push(new h("scenefilter:unsupported",
"Writing Scene filters without context layer is not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})),this.toArray().map(b=>b.toJSON(a)))}static fromJSON(a,c){const b=new e;a.forEach(f=>b.add(g.fromJSON(f,c)));return b}};return d=e=l.__decorate([n.subclass("esri.layers.support.PolygonCollection")],d)});