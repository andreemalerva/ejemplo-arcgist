// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./VisualVariableLegendOptions".split(" "),function(c,d,a,g,h,e,f){var b;a=b=class extends f{constructor(){super(...arguments);this.customValues=null}clone(){return new b({title:this.title,showLegend:this.showLegend,customValues:this.customValues?.slice(0)})}};c.__decorate([d.property({type:[Number],json:{write:!0}})],
a.prototype,"customValues",void 0);return a=b=c.__decorate([e.subclass("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],a)});