// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Color ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,e,a,d,g,h,k,f){a=class extends a{constructor(){super(...arguments);this.color=new e([0,255,255]);this.haloOpacity=1;this.fillOpacity=.25;this.multiHighlightEnabled=!1}equals(c){return this.color.equals(c.color)&&(this.haloColor||this.color).equals(c.haloColor||
c.color)&&this.haloOpacity===c.haloOpacity&&this.fillOpacity===c.fillOpacity&&this.multiHighlightEnabled===c.multiHighlightEnabled}};b.__decorate([d.property({type:e})],a.prototype,"color",void 0);b.__decorate([d.property({type:e})],a.prototype,"haloColor",void 0);b.__decorate([d.property()],a.prototype,"haloOpacity",void 0);b.__decorate([d.property()],a.prototype,"fillOpacity",void 0);b.__decorate([d.property()],a.prototype,"multiHighlightEnabled",void 0);return a=b.__decorate([f.subclass("esri.views.2d.support.HighlightOptions")],
a)});