// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(e,m,d,n,p,q,r,t,u,v,w,x,f,g,y,z){function h(){const a=new y.ShaderBuilder,{attributes:A,varyings:B,vertex:k,fragment:c}=a;A.add(z.VertexAttribute.POSITION,"vec2");B.add("worldRay","vec3");k.uniforms.add(new g.Matrix4PassUniform("inverseProjectionMatrix",(l,b)=>b.camera.inverseProjectionMatrix),new g.Matrix4PassUniform("inverseViewMatrix",(l,b)=>m.invertOrIdentity(C,b.camera.viewMatrix)));k.code.add(f.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`);c.include(v.ColorConversion);c.include(w.RgbaFloatEncoding);a.include(n.EvaluateAmbientLighting,{pbrMode:r.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2});a.include(t.PiUtils);a.include(p.Gamma);a.include(q.MainLighting);a.include(u.CloudsParallaxShading);c.uniforms.add(new x.Float3PassUniform("cameraPosition",(l,b)=>b.camera.eye));c.code.add(f.glsl`void main() {
vec4 cloudsColor = renderClouds(normalize(worldRay), cameraPosition);
fragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`);return a}const C=d.create();d=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));e.CloudsCompositionShader=d;e.build=h});