// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../colorUtils","../../core/screenUtils","../../core/libs/gl-matrix-2/factories/mat4f32","./colorMatrixFunctions"],function(e,r,t,q,f){function d(a,b,c){return a+(b-a)*c}function g(a){return Math.round(1E3*t.px2pt(a))/1E3}class k{constructor(a,b,c){this.strength=a;this.radius=b;this.threshold=c;this.type="bloom"}interpolate(a,b,c){this.strength=d(a.strength,b.strength,c);this.radius=d(a.radius,b.radius,c);this.threshold=d(a.threshold,b.threshold,c)}clone(){return new k(this.strength,
this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:g(this.radius),strength:this.strength,threshold:this.threshold}}}class l{constructor(a){this.radius=a;this.type="blur"}interpolate(a,b,c){this.radius=Math.round(d(a.radius,b.radius,c))}clone(){return new l(this.radius)}toJSON(){return{type:"blur",radius:g(this.radius)}}}class h{constructor(a,b){this.type=a;this.amount=b;if("invert"===this.type||"grayscale"===this.type||"sepia"===this.type)this.amount=Math.min(this.amount,1)}get colorMatrix(){this._colorMatrix||
this._updateMatrix();return this._colorMatrix}interpolate(a,b,c){this.amount=d(a.amount,b.amount,c);this._updateMatrix()}clone(){return new h(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const a=this._colorMatrix||q.create();switch(this.type){case "brightness":this._colorMatrix=f.brightness(a,this.amount);break;case "contrast":this._colorMatrix=f.contrast(a,this.amount);break;case "grayscale":this._colorMatrix=f.grayscale(a,this.amount);break;case "invert":this._colorMatrix=
f.invert(a,this.amount);break;case "saturate":this._colorMatrix=f.saturate(a,this.amount);break;case "sepia":this._colorMatrix=f.sepia(a,this.amount)}}}class m{constructor(a,b,c,u){this.offsetX=a;this.offsetY=b;this.blurRadius=c;this.color=u;this.type="drop-shadow"}interpolate(a,b,c){this.offsetX=d(a.offsetX,b.offsetX,c);this.offsetY=d(a.offsetY,b.offsetY,c);this.blurRadius=d(a.blurRadius,b.blurRadius,c);this.color[0]=Math.round(d(a.color[0],b.color[0],c));this.color[1]=Math.round(d(a.color[1],b.color[1],
c));this.color[2]=Math.round(d(a.color[2],b.color[2],c));this.color[3]=d(a.color[3],b.color[3],c)}clone(){return new m(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const a=[...this.color];a[3]*=255;return{type:"drop-shadow",xoffset:g(this.offsetX),yoffset:g(this.offsetY),blurRadius:g(this.blurRadius),color:a}}}class n{constructor(a){this.angle=a;this.type="hue-rotate"}get colorMatrix(){this._colorMatrix||this._updateMatrix();return this._colorMatrix}interpolate(a,b,c){this.angle=
d(a.angle,b.angle,c);this._updateMatrix()}clone(){return new n(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const a=this._colorMatrix||q.create();this._colorMatrix=f.rotateHue(a,this.angle)}}class p{constructor(a){this.amount=a;this.type="opacity";this.amount=Math.min(this.amount,1)}interpolate(a,b,c){this.amount=d(a.amount,b.amount,c)}clone(){return new p(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}e.BloomEffect=k;e.BlurEffect=l;e.ColorMatrixEffect=
h;e.DropShadowEffect=m;e.HueRotateEffect=n;e.OpacityEffect=p;e.createEffectWithInitialValues=function(a){switch(a.type){case "grayscale":case "sepia":case "invert":return new h(a.type,0);case "saturate":case "brightness":case "contrast":return new h(a.type,1);case "opacity":return new p(1);case "hue-rotate":return new n(0);case "blur":return new l(0);case "drop-shadow":return new m(0,0,0,[...r.getNamedColor("transparent")]);case "bloom":return new k(0,0,1)}};Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});