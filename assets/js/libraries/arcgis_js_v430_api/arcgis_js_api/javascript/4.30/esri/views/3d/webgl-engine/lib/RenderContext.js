// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/time ../../webgl/RenderCamera ../core/shaderLibrary/ShaderOutput ./BindParameters ./Material".split(" "),function(b,k,l,m,n,c){class f{constructor(d,e,a=null){this.rctx=d;this.sliceHelper=a;this.lastFrameCamera=new l;this.output=m.ShaderOutput.Color;this.renderOccludedMask=g;this.bindParameters=new n.BindParameters(e,null!=a?a.plane:null);this.bindParameters.alignPixelEnabled=!0}}class p extends f{constructor(d,e,a,h){super(d,a,h);this.offscreenRenderingHelper=e;this.sliceHelper=
h;this.time=k.Milliseconds(0)}}const g=c.RenderOccludedFlag.Occlude|c.RenderOccludedFlag.OccludeAndTransparent|c.RenderOccludedFlag.OccludeAndTransparentStencil;b.OverlayRenderContext=f;b.RenderContext=p;b.defaultRenderOccludedMask=g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});