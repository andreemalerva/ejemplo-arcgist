// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger","../../../webgl/enums","../../../webgl/Texture"],function(m,u,h,v){function n(d){return d.charCodeAt(0)+(d.charCodeAt(1)<<8)+(d.charCodeAt(2)<<16)+(d.charCodeAt(3)<<24)}function p(d,c){var a=new Int32Array(d,0,31);if(542327876!==a[0])return k().error("Invalid magic number in DDS header"),null;if(!(a[20]&4))return k().error("Unsupported format, must contain a FourCC code"),null;var b=a[21];let g;switch(b){case w:b=8;g=h.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT;
break;case x:b=16;g=h.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case y:b=16;g=h.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return k().error("Unsupported FourCC code:",String.fromCharCode(b&255,b>>8&255,b>>16&255,b>>24&255)),null}let l=1,e=a[4],f=a[3];if(0!==(e&3)||0!==(f&3))k().warn("Rounding up compressed texture size to nearest multiple of 4."),e=e+3&-4,f=f+3&-4;const z=e,A=f;a[2]&131072&&!1!==c&&(l=Math.max(1,a[7]));let q=a[1]+4;const r=[];for(let t=0;t<
l;++t)a=(e+3>>2)*(f+3>>2)*b,c=new Uint8Array(d,q,a),r.push(c),q+=a,e=Math.max(1,e>>1),f=Math.max(1,f>>1);return{textureData:{type:"compressed",levels:r},internalFormat:g,width:z,height:A}}const k=()=>u.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),w=n("DXT1"),x=n("DXT3"),y=n("DXT5");m.createDDSTexture=function(d,c,a){a=p(a,c.hasMipmap??!1);if(null==a)throw Error("DDS texture data is null");const {textureData:b,internalFormat:g,width:l,height:e}=a;c.samplingMode=1<b.levels.length?h.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:
h.TextureSamplingMode.LINEAR;c.hasMipmap=1<b.levels.length;c.internalFormat=g;c.width=l;c.height=e;return new v.Texture(d,c,b)};m.createDDSTextureData=p;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});