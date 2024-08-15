// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Clonable ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,c,g,d,e,k,l,h){b.ClipDistanceConstraint=class extends g.Clonable{constructor(){super(...arguments);this.mode="auto"}get near(){return this._get("near")}set near(a){this._set("near",a);a>=this._get("far")&&(this.far=a+1E-9);this.mode=
"manual"}castNear(a){return Math.max(1E-8,a)}get far(){return this._get("far")}set far(a){this._set("far",a);a<=this._get("near")&&(this.near=a-1E-9);this.mode="manual"}castFar(a){return Math.max(1E-8,a)}autoUpdate(a,f){"auto"===this.mode&&(this._get("near")!==a&&this._set("near",a),this._get("far")!==f&&this._set("far",f))}};c.__decorate([d.property({type:Number,value:1E-8})],b.ClipDistanceConstraint.prototype,"near",null);c.__decorate([e.cast("near")],b.ClipDistanceConstraint.prototype,"castNear",
null);c.__decorate([d.property({type:Number,value:1E-8})],b.ClipDistanceConstraint.prototype,"far",null);c.__decorate([e.cast("far")],b.ClipDistanceConstraint.prototype,"castFar",null);c.__decorate([d.property({type:["auto","manual"]})],b.ClipDistanceConstraint.prototype,"mode",void 0);b.ClipDistanceConstraint=c.__decorate([h.subclass("esri.views.3d.constraints.ClipDistanceConstraint")],b.ClipDistanceConstraint);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});