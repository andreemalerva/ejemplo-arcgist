// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){class g{constructor(a,b,c,e,f){this.subscription=a;this.reader=b;this.clear=c;this.end=e;this.debugInfo=f;this.type="append"}get id(){return this.subscription.tile.id}createMessage(a,b,c){return{type:"append",clear:this.clear,id:this.id,append:a,end:this.end,debugInfo:this.debugInfo,subscriptionVesrion:this.subscription.version,version:b,attributeEpoch:c}}}class h{constructor(a,b,c,e,f){this.subscription=a;this.reader=b;this.remove=c;this.end=e;this.debugInfo=f;this.type=
"update"}get id(){return this.subscription.tile.id}createMessage(a,b,c){return{type:"update",id:this.id,modify:a,debugInfo:this.debugInfo,remove:this.remove,version:b,subscriptionVesrion:this.subscription.version,end:this.end,attributeEpoch:c}}}d.FeatureTileAppendMessage=g;d.FeatureTileUpdateMessage=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});