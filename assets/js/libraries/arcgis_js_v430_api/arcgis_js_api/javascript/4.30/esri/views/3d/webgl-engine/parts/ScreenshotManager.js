// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/promiseUtils ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../lib/basicInterfaces ../lib/rendererUtils ../../../support/RenderState ../../../support/screenshotUtils ../../../webgl/enums ../../../webgl/FramebufferObject ../../../../core/imageUtils".split(" "),function(n,u,v,k,t,w,x,l,y,p){class z{constructor(c,a,d){this.parameters=c;this.frameHasDecorations=a;this.fbos=d}}class A{constructor(c,a,d){this._rctx=c;this._renderFunctions=a;this._forceCameraHook=d;
this.supersample=!0;this._screenshotQueue=[]}destroy(){this._rctx=null}async takeScreenshot(c){await this._renderFunctions.prepareOverlay();this._renderFunctions.requestRenderScene(k.RenderRequestType.BACKGROUND);const a=u.createResolver();this._screenshotQueue.push({settings:c,resolver:a});return a.promise}update(c,a){for(const d of this._screenshotQueue){if(null==this._rctx){d.resolver.reject();continue}const b=this._renderScreenshot(c,{...d.settings,pixelRatio:d.settings.pixelRatio*c.parameters.camera.pixelRatio},
a);d.resolver(b)}this._screenshotQueue.length=0}_renderScreenshotOverlay(c,a,d){c.width=a.width;c.height=a.height;const b=c.getContext("2d"),f=d.pixelRatio;b.save();b.translate(0,a.height);b.scale(1,-1);d.region&&b.translate(-d.region.x,-d.region.y);b.scale(f,f);a=this._renderFunctions.renderOverlay(c,d.disableDecorations?k.Decorations.OFF:k.Decorations.ON,a);b.restore();return a}_readbackScreenshot(c,a){return c.resample?this._readbackScreenshotResampled({...c,resample:c.resample},a):this._readbackScreenshotImmediate(c,
a)}_readbackScreenshotResampled(c,a){const {framebufferWidth:d,framebufferHeight:b,region:f,resample:e}=c,h=this._ensureScreenshotEncodeCanvas();let g=p.createEmptyImageData(d,b,h);this._rctx.gl.readPixels(0,0,d,b,l.PixelFormat.RGBA,l.DataType.UNSIGNED_BYTE,new Uint8Array(g.data.buffer));a();g=this._renderScreenshotOverlay(h,g,{...c,region:void 0});c=p.createEmptyImageData(f.width,f.height,h);return x.resampleHermite(g,c,!0,e.region.x,b-(e.region.y+e.region.height),e.region.width,e.region.height)}_readbackScreenshotImmediate(c,
a){const {framebufferHeight:d,region:b}=c,f=this._ensureScreenshotEncodeCanvas(),e=p.createEmptyImageData(b.width,b.height,f);this._rctx.gl.readPixels(b.x,d-(b.y+b.height),b.width,b.height,l.PixelFormat.RGBA,l.DataType.UNSIGNED_BYTE,new Uint8Array(e.data.buffer));a();return this._renderScreenshotOverlay(f,e,c)}_renderScreenshot(c,a,d){var b=c.parameters.camera,f={width:a.framebufferWidth,height:a.framebufferHeight};y.ensureAttachmentMaxSize(f,Math.min(this._rctx.parameters.maxTextureSize,this._rctx.parameters.maxRenderbufferSize));
var e=!1,h=a.disableDecorations&&c.frameHasDecorations,g=a.ignorePadding&&b.pixelRatio!==a.pixelRatio;h=f.width!==b.fullWidth||f.height!==b.fullHeight||h||g||a.objectAndLayerIdColor;let q=null,r=null;if(h){e=b.clone();if(a.ignorePadding){g=v.clone(e.padding);for(let m=0;4>m;m++)g[m]=Math.round(g[m]/e.pixelRatio*a.pixelRatio);e.padding=g}e.fullWidth=f.width;e.fullHeight=f.height;e.pixelRatio=a.pixelRatio;f=b.fovX-e.fovX;g=b.fovY-e.fovY;0>f&&f<g?e.fovX=b.fovX:0>g&&g<f&&(e.fovY=b.fovY);b={camera:e,contentCamera:e,
mode:w.RenderState.IDLE,alignPixelEnabled:!0,contentPixelRatio:e.pixelRatio};this._forceCameraHook(b);e=!0;d=this._renderFunctions.renderScene(b,d,a.objectAndLayerIdColor?t.RendererTarget.ObjectAndLayerID:t.RendererTarget.Screenshot,a.disableDecorations?k.Decorations.OFF:k.Decorations.ON);r=d.screen;q=d.oid}this._rctx.bindFramebuffer(r?.fbo);d=this._readbackScreenshot(a,()=>{this._rctx.bindFramebuffer(null);r?.release()});b=null;a.objectAndLayerIdColor&&(this._rctx.bindFramebuffer(q?.fbo),b=this._readbackScreenshot(a,
()=>{this._rctx.bindFramebuffer(null);q?.release()}),this._rctx.bindFramebuffer(null));if(h&&!this._rctx.contextAttributes.alpha)for(a=3;a<d.data.length;a+=4)d.data[a]=255;if(b&&!this._rctx.contextAttributes.alpha)for(a=3;a<b.data.length;a+=4)b.data[a]=255;e&&this._forceCameraHook(c.parameters);return[d,b]}_ensureScreenshotEncodeCanvas(){this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas"));return this._screenshotEncodeCanvas}}n.ScreenshotContext=z;n.ScreenshotManager=
A;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});