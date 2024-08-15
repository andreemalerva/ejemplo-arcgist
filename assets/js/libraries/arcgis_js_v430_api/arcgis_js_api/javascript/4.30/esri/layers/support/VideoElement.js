// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Error ../../core/events ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./MediaElementBase".split(" "),function(d,f,g,h,e,c,p,k,l){c=class extends l{constructor(a){super(a);this.autoplay=!0;this.content=null;this.type="video"}load(){const a=this.video;if("string"===typeof a){const b=document.createElement("video");b.src=a;b.crossOrigin="anonymous";b.autoplay=
!0;b.muted=!0;b.loop=!0;b.playsInline=!0;this.addResolvingPromise(this._loadVideo(b).then(()=>{this._set("content",b)}))}else a instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(a).then(()=>{this._set("content",a)})):this.addResolvingPromise(Promise.reject(new f("video-element:invalid-video-type","Invalid video type",{video:a})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(a){"not-loaded"!==
this.loadStatus?h.getLogger(this).error("#video","video cannot be changed after the element is loaded."):this._set("video",a)}_loadVideo(a){return new Promise((b,m)=>{const n=g.once(a,"canplay",()=>{this.removeHandles("canplay");this.autoplay?a.play().then(b,m):b()});this.addHandles(n,"canplay");"anonymous"!==a.crossOrigin&&(a.crossOrigin="anonymous",a.src?.includes("blob:")||(a.src=a.src))})}};d.__decorate([e.property()],c.prototype,"autoplay",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,
"content",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"contentWidth",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"contentHeight",null);d.__decorate([e.property()],c.prototype,"video",null);return c=d.__decorate([k.subclass("esri.layers.support.VideoElement")],c)});