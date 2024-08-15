// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Evented ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/projection".split(" "),function(c,b,h,e,m,n,p,k,l){b=class extends b.EventedAccessor{constructor(f){super(f);this.location=null;this.screenLocationEnabled=!1;this.view=null;this.addHandles([h.when(()=>{const a=this.screenLocationEnabled?this.view:null;return a?[a.size,
"3d"===a.type?a.camera:a.viewpoint]:null},()=>this.notifyChange("screenLocation")),h.watch(()=>this.screenLocation,(a,g)=>{null!=a&&null!=g&&this.emit("view-change")})])}destroy(){this.view=null}get screenLocation(){const {location:f,view:a,screenLocationEnabled:g}=this;var d=a?.spatialReference;d=d?l.projectOrLoad(f,d).geometry:null;return g&&d&&a?.ready?a.toScreen(d):null}};c.__decorate([e.property()],b.prototype,"location",void 0);c.__decorate([e.property()],b.prototype,"screenLocation",null);
c.__decorate([e.property()],b.prototype,"screenLocationEnabled",void 0);c.__decorate([e.property()],b.prototype,"view",void 0);return b=c.__decorate([k.subclass("esri.widgets.support.AnchorElementViewModel")],b)});