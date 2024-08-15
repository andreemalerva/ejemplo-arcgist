// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,h,k,l,g){function d(e){e=Number(e);return isNaN(e)?void 0:e}var f;a=f=class extends a.JSONSupport{constructor(){super(...arguments);this.name=null;this.solarIrradiance=this.reflectanceGain=this.reflectanceBias=this.radianceGain=this.radianceBias=this.maxWavelength=this.minWavelength=
void 0}clone(){return new f({name:this.name,minWavelength:this.minWavelength,maxWavelength:this.maxWavelength,radianceBias:this.radianceBias,radianceGain:this.radianceGain,reflectanceBias:this.reflectanceBias,reflectanceGain:this.reflectanceGain,solarIrradiance:this.solarIrradiance})}};b.__decorate([c.property({json:{name:"BandName",write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({json:{name:"WavelengthMin",read:{reader:d},write:!0}})],a.prototype,"minWavelength",void 0);b.__decorate([c.property({json:{name:"WavelengthMax",
read:{reader:d},write:!0}})],a.prototype,"maxWavelength",void 0);b.__decorate([c.property({json:{name:"RadianceBias",read:{reader:d},write:!0}})],a.prototype,"radianceBias",void 0);b.__decorate([c.property({json:{name:"RadianceGain",read:{reader:d},write:!0}})],a.prototype,"radianceGain",void 0);b.__decorate([c.property({json:{name:"ReflectanceBias",read:{reader:d},write:!0}})],a.prototype,"reflectanceBias",void 0);b.__decorate([c.property({json:{name:"ReflectanceGain",read:{reader:d},write:!0}})],
a.prototype,"reflectanceGain",void 0);b.__decorate([c.property({json:{name:"SolarIrradiance",read:{reader:d},write:!0}})],a.prototype,"solarIrradiance",void 0);return a=f=b.__decorate([g.subclass("esri.layers.support.RasterBandInfo")],a)});