// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./object"],function(d,g){function h(a){const c={};for(const b in a)c[a[b]]=b;return c}function e(a){const c=[];for(const b in a)c.push(b);c.sort();return c}class f{constructor(a,c={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=a;this._options=c;this.apiValues=[];this.jsonValues=[];this._apiToJSON=h(a);this.apiValues=e(this._apiToJSON);this.jsonValues=e(this._jsonToAPI);this.read=b=>this.fromJSON(b);this.write=(b,k,l)=>{b=this.toJSON(b);void 0!==b&&g.setDeepValue(l,b,k)};
this.write.isJSONMapWriter=!0}toJSON(a){return null==a?null:this._apiToJSON.hasOwnProperty(a)?(a=this._apiToJSON[a],this._options.useNumericKeys?+a:a):this._options.ignoreUnknown?void 0:a}fromJSON(a){return null!=a&&this._jsonToAPI.hasOwnProperty(a)?this._jsonToAPI[a]:this._options.ignoreUnknown?void 0:a}}d.JSONMap=f;d.strict=function(){return function(a,c){return new f(a,{ignoreUnknown:!0,...c})}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});