// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/decorators/cast ../../../../core/RandomLCG ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ./ButtonMenuItem".split(" "),function(b,a,e,g,k,l,h,f){a=class extends a{constructor(c){super(c);this.items=null;this.open=!1}castItems(c){return c?c.map(d=>d instanceof f?d:new f(d)):null}};b.__decorate([e.property()],a.prototype,"items",
void 0);b.__decorate([g.cast("items")],a.prototype,"castItems",null);b.__decorate([e.property()],a.prototype,"open",void 0);return a=b.__decorate([h.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],a)});