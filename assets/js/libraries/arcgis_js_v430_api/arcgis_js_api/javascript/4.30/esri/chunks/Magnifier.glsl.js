// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../core/screenUtils ./vec42 ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(e,f,r,g,l,t,h,u,k,v){function m(){const b=new u.ShaderBuilder;
b.attributes.add(v.VertexAttribute.POSITION,"vec2");b.vertex.uniforms.add(new t.Float4PassUniform("drawPosition",(a,c)=>{var d=c.camera.pixelRatio;const w=a.magnifier.offset.x*d,x=a.magnifier.offset.y*d;f.screenPointObjectToArray(a.magnifier.position,n);const p=c.camera.screenToRender(n,y);a=Math.ceil(d*a.magnifier.size);d=c.camera.fullWidth;c=c.camera.fullHeight;return r.set(z,-1+(p[0]+w)/d*2,-1+(p[1]-x)/c*2,a/d*2,a/c*2)}));b.varyings.add("vUV","vec2");b.vertex.code.add(h.glsl`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`);b.fragment.uniforms.add(new k.Texture2DPassUniform("textureInput",a=>a.input));b.fragment.uniforms.add(new k.Texture2DPassUniform("textureMask",a=>a.mask));b.fragment.uniforms.add(new k.Texture2DPassUniform("textureOverlay",a=>a.overlay));b.fragment.uniforms.add(new l.BooleanPassUniform("maskEnabled",a=>a.magnifier.maskEnabled));b.fragment.uniforms.add(new l.BooleanPassUniform("overlayEnabled",a=>a.magnifier.overlayEnabled));b.fragment.code.add(h.glsl`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
}`);return b}class q extends h.NoParameters{constructor(){super(...arguments);this.input=this.overlay=this.mask=null;this.size=0}}const n=f.createScreenPointArray(),y=f.createRenderScreenPointArray(),z=g.create();g=Object.freeze(Object.defineProperty({__proto__:null,MagnifierPassParameters:q,build:m},Symbol.toStringTag,{value:"Module"}));e.Magnifier=g;e.MagnifierPassParameters=q;e.build=m});