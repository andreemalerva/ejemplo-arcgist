// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Error ../../../../core/Logger ../../../../core/MapUtils ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/Version ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../core/libs/gl-matrix-2/math/quat ../../../../core/libs/gl-matrix-2/factories/quatf64 ../../../../geometry/support/buffer/BufferView ../../../../chunks/scalar ../../../../core/has ./BinaryStreamReader ./enums ./fillDefaults ./pathUtils ./resourceUtils ../../../webgl/enums".split(" "),
function(y,e,H,I,C,r,D,q,t,J,K,g,z,S,E,A,B,L,u,f){function M(a){switch(a.componentType){case f.DataType.BYTE:return new g.BufferViewVec2i8(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case f.DataType.UNSIGNED_BYTE:return new g.BufferViewVec2u8(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case f.DataType.SHORT:return new g.BufferViewVec2i16(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case f.DataType.UNSIGNED_SHORT:return new g.BufferViewVec2u16(a.raw,
a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case f.DataType.UNSIGNED_INT:return new g.BufferViewVec2u32(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case f.DataType.FLOAT:return new g.BufferViewVec2f(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount)}}function k(a,b){return new a(b.raw,b.byteOffset,b.byteStride,b.byteOffset+b.byteStride*(b.entryCount-1)+b.componentByteSize*b.componentCount)}function F(a){if(null!=a.extensions?.KHR_texture_basisu)return a.extensions.KHR_texture_basisu.source;
if(null!==a.source)return a.source;throw new e("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.");}class n{constructor(a,b,c,d){this._context=a;this.uri=b;this.json=c;this._glbBuffer=d;this._bufferLoaders=new Map;this._textureLoaders=new Map;this._textureCache=new Map;this._materialCache=new Map;this._nodeParentMap=new Map;this._nodeTransformCache=new Map;this._supportedExtensions=["KHR_texture_basisu",
"KHR_texture_transform"];this._baseUri=L.splitURI(this.uri).dirPart;this._checkVersionSupported();this._checkRequiredExtensionsSupported();if(null==c.scenes)throw new e("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==c.meshes)throw new e("gltf-loader-unsupported-feature","Meshes must be defined");if(null==c.nodes)throw new e("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(a,b,c){if(r.isDataProtocol(b)){var d=r.dataComponents(b);
if(d&&"model/gltf-binary"!==d.mediaType)try{const h=JSON.parse(d.isBase64?atob(d.data):d.data);return new n(a,b,h)}catch{}d=r.dataToArrayBuffer(b);if(n._isGLBData(d))return this._fromGLBData(a,b,d)}if(N.test(b)||"gltf"===c?.expectedType)return c=await a.loadJSON(b,c),new n(a,b,c);d=await a.loadBinary(b,c);if(n._isGLBData(d))return this._fromGLBData(a,b,d);if(O.test(b)||"glb"===c?.expectedType)throw new e("gltf-loader-invalid-glb","This is not a valid glb file.");c=await a.loadJSON(b,c);return new n(a,
b,c)}static _isGLBData(a){if(null==a)return!1;a=new E.BinaryStreamReader(a);return 4<=a.remainingBytes()&&1179937895===a.readUint32()}static async _fromGLBData(a,b,c){c=await n._parseGLBData(c);return new n(a,b,c.json,c.binaryData)}static async _parseGLBData(a){const b=new E.BinaryStreamReader(a);if(12>b.remainingBytes())throw new e("gltf-loader-error","glb binary data is insufficiently large.");var c=b.readUint32(),d=b.readUint32();const h=b.readUint32();if(1179937895!==c)throw new e("gltf-loader-error",
"Magic first 4 bytes do not fit to expected glb value.");if(a.byteLength<h)throw new e("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==d)throw new e("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");a=0;let l,m;for(;8<=b.remainingBytes();){c=b.readUint32();d=b.readUint32();if(0===a){if(1313821514!==d)throw new e("gltf-loader-error","First glb chunk must be JSON.");if(0>c)throw new e("gltf-loader-error",
"No JSON data found.");l=await u.jsonFromBinaryData(b.readUint8Array(c))}else if(1===a){if(5130562!==d)throw new e("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");m=b.readUint8Array(c)}else H.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");a+=1}if(!l)throw new e("gltf-loader-error","No glb JSON chunk detected.");return{json:l,binaryData:m}}async getBuffer(a,b){const c=this.json.buffers[a];if(null==c.uri){if(null==this._glbBuffer)throw new e("gltf-loader-error",
"glb buffer not present");return this._glbBuffer}a=await this._getBufferLoader(a,b);if(a.byteLength!==c.byteLength)throw new e("gltf-loader-error","Buffer byte lengths should match.");return a}async _getBufferLoader(a,b){const c=this._bufferLoaders.get(a);if(c)return c;b=this._context.loadBinary(this._resolveUri(this.json.buffers[a].uri),b).then(d=>new Uint8Array(d));this._bufferLoaders.set(a,b);return b}async getAccessor(a,b){if(!this.json.accessors)throw new e("gltf-loader-unsupported-feature",
"Accessors missing.");a=this.json.accessors[a];if(null==a?.bufferView)throw new e("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(a.type in[A.AttributeType.MAT2,A.AttributeType.MAT3,A.AttributeType.MAT4])throw new e("gltf-loader-unsupported-feature",`AttributeType ${a.type} is not supported`);const c=this.json.bufferViews[a.bufferView];b=await this.getBuffer(c.buffer,b);const d=P[a.type],h=Q[a.componentType],l=d*h,m=c.byteStride||l;return{raw:b.buffer,byteStride:m,
byteOffset:b.byteOffset+(c.byteOffset||0)+(a.byteOffset||0),entryCount:a.count,isDenselyPacked:m===l,componentCount:d,componentByteSize:h,componentType:a.componentType,min:a.min,max:a.max,normalized:!!a.normalized}}async getIndexData(a,b){if(null!=a.indices)if(a=await this.getAccessor(a.indices,b),a.isDenselyPacked)switch(a.componentType){case f.DataType.UNSIGNED_BYTE:return new Uint8Array(a.raw,a.byteOffset,a.entryCount);case f.DataType.UNSIGNED_SHORT:return new Uint16Array(a.raw,a.byteOffset,a.entryCount);
case f.DataType.UNSIGNED_INT:return new Uint32Array(a.raw,a.byteOffset,a.entryCount)}else switch(a.componentType){case f.DataType.UNSIGNED_BYTE:return z.makeDense(k(g.BufferViewUint8,a));case f.DataType.UNSIGNED_SHORT:return z.makeDense(k(g.BufferViewUint16,a));case f.DataType.UNSIGNED_INT:return z.makeDense(k(g.BufferViewUint32,a))}}async getPositionData(a,b){if(null==a.attributes.POSITION)throw new e("gltf-loader-unsupported-feature","No POSITION vertex data found.");a=await this.getAccessor(a.attributes.POSITION,
b);if(a.componentType!==f.DataType.FLOAT)throw new e("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+f.DataType[a.componentType]);if(3!==a.componentCount)throw new e("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return k(g.BufferViewVec3f,a)}async getNormalData(a,b){if(null==a.attributes.NORMAL)throw new e("gltf-loader-error","No NORMAL vertex data found.");a=await this.getAccessor(a.attributes.NORMAL,
b);if(a.componentType!==f.DataType.FLOAT)throw new e("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+f.DataType[a.componentType]);if(3!==a.componentCount)throw new e("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return k(g.BufferViewVec3f,a)}async getTangentData(a,b){if(null==a.attributes.TANGENT)throw new e("gltf-loader-error","No TANGENT vertex data found.");a=await this.getAccessor(a.attributes.TANGENT,
b);if(a.componentType!==f.DataType.FLOAT)throw new e("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+f.DataType[a.componentType]);if(4!==a.componentCount)throw new e("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+a.componentCount.toFixed());return new g.BufferViewVec4f(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount)}async getTextureCoordinates(a,b){if(null==a.attributes.TEXCOORD_0)throw new e("gltf-loader-error",
"No TEXCOORD_0 vertex data found.");a=await this.getAccessor(a.attributes.TEXCOORD_0,b);if(2!==a.componentCount)throw new e("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+a.componentCount.toFixed());if(a.componentType===f.DataType.FLOAT)return k(g.BufferViewVec2f,a);if(!a.normalized)throw new e("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return M(a)}async getVertexColors(a,
b){if(null==a.attributes.COLOR_0)throw new e("gltf-loader-error","No COLOR_0 vertex data found.");a=await this.getAccessor(a.attributes.COLOR_0,b);if(4!==a.componentCount&&3!==a.componentCount)throw new e("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+a.componentCount.toFixed());if(4===a.componentCount){if(a.componentType===f.DataType.FLOAT)return k(g.BufferViewVec4f,a);if(a.componentType===f.DataType.UNSIGNED_BYTE)return k(g.BufferViewVec4u8,a);if(a.componentType===
f.DataType.UNSIGNED_SHORT)return k(g.BufferViewVec4u16,a)}else if(3===a.componentCount){if(a.componentType===f.DataType.FLOAT)return k(g.BufferViewVec3f,a);if(a.componentType===f.DataType.UNSIGNED_BYTE)return k(g.BufferViewVec3u8,a);if(a.componentType===f.DataType.UNSIGNED_SHORT)return k(g.BufferViewVec3u16,a)}throw new e("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+f.DataType[a.componentType]);}hasPositions(a){return void 0!==a.attributes.POSITION}hasNormals(a){return void 0!==
a.attributes.NORMAL}hasVertexColors(a){return void 0!==a.attributes.COLOR_0}hasTextureCoordinates(a){return void 0!==a.attributes.TEXCOORD_0}hasTangents(a){return void 0!==a.attributes.TANGENT}async getMaterial(a,b,c){var d=a.material?this._materialCache.get(a.material):void 0;if(!d){d=null!=a.material?B.material(this.json.materials[a.material]):B.material();const h=d.pbrMetallicRoughness,l=this.hasVertexColors(a),m=this.getTexture(h.baseColorTexture,b),v=this.getTexture(d.normalTexture,b),w=c?this.getTexture(d.occlusionTexture,
b):void 0,p=c?this.getTexture(d.emissiveTexture,b):void 0;b=c?this.getTexture(h.metallicRoughnessTexture,b):void 0;a=null!=a.material?a.material:-1;d={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:h.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:await m,normalTexture:await v,name:d.name,id:a,occlusionTexture:await w,emissiveTexture:await p,emissiveFactor:d.emissiveFactor,metallicFactor:h.metallicFactor,roughnessFactor:h.roughnessFactor,metallicRoughnessTexture:await b,hasVertexColors:l,
ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode,colorTextureTransform:h?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:d.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:d.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:d.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:h?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:d.extras.ESRI_receiveAmbientOcclusion,
receiveShadows:d.extras.ESRI_receiveShadows}}return d}async getTexture(a,b){if(a){if(0!==(a.texCoord||0))throw new e("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");var c=a.index;a=this.json.textures[c];var d=B.textureSampler(null!=a.sampler?this.json.samplers[a.sampler]:{}),h=F(a),l=this.json.images[h],m=await this._loadTextureImageData(c,a,b);return I.getOrCreateMapValue(this._textureCache,c,()=>{const v=p=>33071===p||33648===p||10497===p,w=p=>{throw new e("gltf-loader-error",
`Unexpected TextureSampler WrapMode: ${p}`);};return{data:m,wrapS:v(d.wrapS)?d.wrapS:w(d.wrapS),wrapT:v(d.wrapT)?d.wrapT:w(d.wrapT),minFilter:d.minFilter,name:l.name,id:c}})}}getNodeTransform(a){if(void 0===a)return G;var b=this._nodeTransformCache.get(a);if(!b){b=this.getNodeTransform(this._getNodeParent(a));const c=this.json.nodes[a];c.matrix?b=q.multiply(t.create(),b,c.matrix):c.translation||c.rotation||c.scale?(b=t.clone(b),c.translation&&q.translate(b,b,c.translation),c.rotation&&(x[3]=J.getAxisAngle(x,
c.rotation),q.rotate(b,b,x[3],x)),c.scale&&q.scale(b,b,c.scale)):b=t.clone(b);this._nodeTransformCache.set(a,b)}return b}_resolveUri(a){return r.makeAbsolute(a,this._baseUri)}_getNodeParent(a){return this._nodeParentMap.get(a)}_checkVersionSupported(){const a=D.Version.parse(this.json.asset.version,"glTF");R.validate(a)}_checkRequiredExtensionsSupported(){const a=this.json;if(a.extensionsRequired&&!a.extensionsRequired.every(b=>this._supportedExtensions.includes(b)))throw new e("gltf-loader-unsupported-feature",
"gltf loader was not able to load unsupported feature. Required extensions: "+a.extensionsRequired.join(", "));}_computeNodeParents(){this.json.nodes.forEach((a,b)=>{a.children&&a.children.forEach(c=>{this._nodeParentMap.set(c,b)})})}async _loadTextureImageData(a,b,c){const d=this._textureLoaders.get(a);if(d)return d;b=this._createTextureLoader(b,c);this._textureLoaders.set(a,b);return b}async _createTextureLoader(a,b){a=F(a);a=this.json.images[a];if(a.uri)return a.uri.endsWith(".ktx2")?(b=await this._context.loadBinary(this._resolveUri(a.uri),
b),new u.EncodedMeshTexture(new Uint8Array(b))):this._context.loadImage(this._resolveUri(a.uri),b);if(null==a.bufferView)throw new e("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==a.mimeType)throw new e("gltf-loader-unsupported-feature","Image mimeType must be defined.");const c=this.json.bufferViews[a.bufferView];b=await this.getBuffer(c.buffer,b);if(null!=c.byteStride)throw new e("gltf-loader-unsupported-feature","byteStride not supported for image buffer");return u.imageFromBinaryData(new Uint8Array(b.buffer,
b.byteOffset+(c.byteOffset||0),c.byteLength),a.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const a=await C.allSettledValues(Array.from(this._bufferLoaders.values())),b=await C.allSettledValues(Array.from(this._textureLoaders.values()));return a.reduce((c,d)=>c+(d?.byteLength??0),0)+b.reduce((c,d)=>c+(d?u.isEncodedMeshTexture(d)?d.data.byteLength:d.width*d.height*4:0),0)}}const G=q.fromXRotation(t.create(),Math.PI/2),R=new D.Version(2,0,"glTF"),x=K.create(),
P={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Q={[f.DataType.BYTE]:1,[f.DataType.UNSIGNED_BYTE]:1,[f.DataType.SHORT]:2,[f.DataType.UNSIGNED_SHORT]:2,[f.DataType.HALF_FLOAT]:2,[f.DataType.FLOAT]:4,[f.DataType.INT]:4,[f.DataType.UNSIGNED_INT]:4},N=/\.gltf$/i,O=/\.glb$/i;y.GLTFResource=n;y.transformGltfToEngine=G;Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});