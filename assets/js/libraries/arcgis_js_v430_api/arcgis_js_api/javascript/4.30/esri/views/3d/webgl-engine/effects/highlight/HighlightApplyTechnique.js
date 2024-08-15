// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../core/shaderTechnique/ReloadableShaderModule ../../core/shaderTechnique/ShaderTechnique ../../lib/DefaultVertexAttributeLocations ../../lib/Program ../../../../../chunks/HighlightApply.glsl ../../../../webgl/enums ../../../../webgl/renderState".split(" "),function(f,e,g,h,k,l,m,a,b){class c extends h.ShaderTechnique{initializeProgram(d){return new l.Program(d.rctx,c.shader.get().build(),k.Default3D)}initializePipeline(){return b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.SRC_ALPHA,
a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:b.defaultColorWriteParams})}}c.shader=new g.ReloadableShaderModule(m.HighlightApply,()=>new Promise((d,n)=>f(["../../shaders/HighlightApply.glsl"],d,n)));e.HighlightApplyTechnique=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});