// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a.JSONSupport{constructor(e){super(e);this.url=this.itemId=null}};b.__decorate([c.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],a.prototype,"itemId",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],
a.prototype,"url",void 0);return a=b.__decorate([d.subclass("esri.rest.support.DataFile")],a)});