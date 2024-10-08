// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(c,h,e,k,d){function f(){const b=new k.ShaderBuilder;b.include(h.ScreenSpacePass);b.fragment.uniforms.add(new d.Texture2DPassUniform("colorTexture",a=>a.colorTexture),new d.Texture2DPassUniform("alphaTexture",a=>a.alphaTexture),
new d.Texture2DPassUniform("frontFaceTexture",a=>a.frontFaceTexture));b.fragment.code.add(e.glsl`void main() {
float srcAlpha = texture(alphaTexture, uv).r;
if(srcAlpha <= 1e-5){
discard;
}
vec4 srcColor = texture(colorTexture, uv);
vec4 frontFace = texture(frontFaceTexture, uv);
fragColor = vec4(mix(srcColor.rgb / srcAlpha, frontFace.rgb, frontFace.a), 1.0 - srcColor.a);
}`);return b}class g extends e.NoParameters{}const l=Object.freeze(Object.defineProperty({__proto__:null,OITCompositingPassParameters:g,build:f},Symbol.toStringTag,{value:"Module"}));c.OITCompositing=l;c.OITCompositingPassParameters=g;c.build=f});