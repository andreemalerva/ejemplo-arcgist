// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/mathUtils","../../../../interactive/dragEventPipeline"],function(c,d,e){class f{constructor(){this._lastDragEvent=null;this.next=new e.EventPipeline;this._enabled=!1}get enabled(){return this._enabled}set enabled(a){if(this._enabled!==a&&null!=this._lastDragEvent){const b={...this._lastDragEvent,action:"update"};a&&this._adjustScaleFactors(b);this.next.execute(b)}this._enabled=a}createDragEventPipelineStep(){this._lastDragEvent=null;return a=>{this._lastDragEvent=
"end"!==a.action?{...a}:null;this._enabled&&this._adjustScaleFactors(a);return a}}_adjustScaleFactors(a){const b=0!==a.direction[0]&&0!==a.direction[1]?Math.max(Math.abs(a.factor1),Math.abs(a.factor2)):0===a.direction[0]?Math.abs(a.factor2):Math.abs(a.factor1);a.factor1=0>a.factor1?-b:b;a.factor2=0>a.factor2?-b:b}}class g{constructor(){this._lastDragEvent=null;this.next=new e.EventPipeline;this._enabled=!1}get enabled(){return this._enabled}set enabled(a){if(this._enabled!==a&&null!=this._lastDragEvent){const b=
{...this._lastDragEvent,action:"update"};a&&this._adjustRotateAngle(b);this.next.execute(b)}this._enabled=a}createDragEventPipelineStep(){this._lastDragEvent=null;return a=>{this._lastDragEvent="end"!==a.action?{...a}:null;this._enabled&&this._adjustRotateAngle(a);return a}}_adjustRotateAngle(a){const b=d.rad2deg(a.rotateAngle);a.rotateAngle=d.deg2rad(5*Math.round(b/5))}}c.PreserveAspectRatio=f;c.SnapRotation=g;c.onGrabChangedHandle=function(a,b){b.cursor="start"===a.action?"grabbing":"grab"};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});