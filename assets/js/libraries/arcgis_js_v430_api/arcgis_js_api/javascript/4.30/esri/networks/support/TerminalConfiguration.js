// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./Terminal".split(" "),function(b,c,a,d,h,k,l,e,f){c=new c.JSONMap({esriUNTMBidirectional:"bidirectional",esriUNTMDirectional:"directional"});a=class extends a.JSONSupport{constructor(g){super(g);this.name=this.id=this.defaultConfiguration=null;this.terminals=[];this.traversabilityModel=
null}};b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"defaultConfiguration",void 0);b.__decorate([d.property({type:Number,json:{read:{source:"terminalConfigurationId"},write:{target:"terminalConfigurationId"}}})],a.prototype,"id",void 0);b.__decorate([d.property({type:String,json:{read:{source:"terminalConfigurationName"},write:{target:"terminalConfigurationName"}}})],a.prototype,"name",void 0);b.__decorate([d.property({type:[f],json:{write:!0}})],a.prototype,"terminals",void 0);
b.__decorate([d.property({type:c.apiValues,json:{type:c.jsonValues,read:c.read,write:c.write}})],a.prototype,"traversabilityModel",void 0);return a=b.__decorate([e.subclass("esri.networks.support.TerminalConfiguration")],a)});