// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Identifiable ../../../core/Logger ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/contains ../../../geometry/support/near".split(" "),function(b,d,h,k,l,e,q,r,m,n,g,p){var f;b.GeometryConstraint=f=class extends k.NumericIdentifiableMixin(h){constructor(a){super(a);this.spatialReference=
this.geometry=null}get normalizedGeometry(){if(null==this.geometry||!this.spatialReference)return null;if(!this.spatialReference.equals(this.geometry.spatialReference))try{return n.project(this.geometry,this.spatialReference)}catch(a){return l.getLogger(this).error("#constraints.geometry","could not project the geometry to the view's spatial reference",{geometry:this.geometry,spatialReference:this.spatialReference,error:a}),null}return this.geometry}constrain(a,c){if(null==this.normalizedGeometry)return a;
c=a.targetGeometry;if("extent"===this.normalizedGeometry.type?g.extentContainsPoint(this.normalizedGeometry,c):g.polygonContainsPoint(this.normalizedGeometry,c))return a;({coordinate:c}=p.nearestCoordinate(this.normalizedGeometry,c));if(!c)return a;a.targetGeometry=c;return a}clone(){return new f({geometry:this.geometry?.clone(),spatialReference:this.spatialReference?.clone()})}};d.__decorate([e.property({constructOnly:!0})],b.GeometryConstraint.prototype,"geometry",void 0);d.__decorate([e.property({readOnly:!0})],
b.GeometryConstraint.prototype,"normalizedGeometry",null);d.__decorate([e.property({constructOnly:!0})],b.GeometryConstraint.prototype,"spatialReference",void 0);b.GeometryConstraint=f=d.__decorate([m.subclass("esri.views.2d.constraints.GeometryConstraint")],b.GeometryConstraint);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});