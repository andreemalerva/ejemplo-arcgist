// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/has ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/rbush/PooledRBush ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures".split(" "),function(c,e,l,m,n,g,t,u,p,q,r,k){c.SpatialIndex2D=class extends l{constructor(a){super(a);
this._index=new q.PooledRBush(9,m("esri-csp-restrictions")?b=>({minX:b.extent[0],minY:b.extent[1],maxX:b.extent[2],maxY:b.extent[3]}):[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]);this._missing=new Set;this._boundsByFeature=new Map;this.objectIdField=this.hasM=this.hasZ=this.spatialReference=null;this.updating=!1}setup(a){this._addMany(a)}destroy(){this._missing.clear();this._index=n.destroyMaybe(this._index);this._boundsByFeature.clear();this._boundsByFeature=null}update(){0<this._missing.size&&
(this._addMany(Array.from(this._missing.values())),this.updating=!1,this._missing.clear())}get updatingRemaining(){return this._missing.size}queryGraphicUIDsInExtent(a,b,f){null!=b&&b.equals(this.spatialReference)&&(d.minX=a[0],d.minY=a[1],d.maxX=a[2],d.maxY=a[3],this.update(),this._index.search(d,h=>f(h.graphic.uid)))}add(a){this._missing.add(a);this.updating=!0}remove(a){this._missing.delete(a)?this.updating=0<this._missing.size:a.extent&&(this._index.remove(a),a=k.getObjectId(a.graphic,this._get("objectIdField")),
null!=a&&this._boundsByFeature.delete(a))}_addMany(a){if(0!==a.length){var b=this._get("objectIdField");for(const f of a){f.computeExtent(this.spatialReference);const h=k.getObjectId(f.graphic,b);null!=h&&this._boundsByFeature.set(h,f.extent)}this._index.load(a)}}clear(){this._index.clear();this._missing.clear();this._boundsByFeature.clear();this.updating=!1}forEachInBounds(a,b){d.minX=a[0];d.minY=a[1];d.maxX=a[2];d.maxY=a[3];this.update();this._index.search(d,f=>{b(f)})}getBounds(a,b){this.update();
return(a=this._boundsByFeature.get(a))?r.fromRect(b,a):null}};e.__decorate([g.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"spatialReference",void 0);e.__decorate([g.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"hasZ",void 0);e.__decorate([g.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"hasM",void 0);e.__decorate([g.property({constructOnly:!0})],c.SpatialIndex2D.prototype,"objectIdField",void 0);e.__decorate([g.property()],c.SpatialIndex2D.prototype,"updating",
void 0);e.__decorate([g.property({readOnly:!0})],c.SpatialIndex2D.prototype,"updatingRemaining",null);c.SpatialIndex2D=e.__decorate([p.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],c.SpatialIndex2D);const d={minX:0,minY:0,maxX:0,maxY:0};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});