// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/has ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../geometry/projection ../../../../geometry/projection/computeTranslationToOriginAndRotation ../../../../geometry/projection/projectBuffer ../../../../geometry/projection/projectVectorToPoint ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/FloatArray ../../../../geometry/support/Indices ../../../../geometry/support/MeshComponent ../../../../geometry/support/MeshMaterialMetallicRoughness ../../../../geometry/support/MeshTextureTransform ../../../../geometry/support/meshVertexSpaceUtils ../../../../geometry/support/spatialReferenceUtils ../../../../chunks/vec3 ../../../../geometry/support/meshUtils/projection ../../../../layers/graphics/dehydratedPoint ../../../../layers/graphics/sources/interfaces ../../../ViewingMode ../../glTF/internal/resourceUtils ../../glTF/internal/TextureTransformUtils ./ElevationAligners ./elevationAlignmentUtils ./Graphics3DMeshObject3DGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./MeshFastUpdateProcessor ../support/edgeUtils ../support/symbolColorUtils ../../support/debugFlags ../../webgl-engine/lib/Attribute ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/ContentObjectType ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/NativeLineMaterial ../../webgl-engine/materials/pbrUtils ../../../webgl/enums".split(" "),
function(na,P,Ya,Aa,ba,oa,T,I,Ba,u,J,pa,Ca,ca,Da,Ea,U,qa,ra,Fa,Ga,Ha,sa,V,ta,y,Ia,K,W,Ja,Q,da,X,Ka,La,Ma,ua,Na,va,wa,L,F,ea,fa,Oa,Pa,A,Qa,ha,ia,ja){function xa(a,b){const c=qa.newFloatArray(b.length),d=Array(3*b.length);for(let e=0;e<b.length;e+=3){const f=Y(a,b,e,G);for(let g=0;3>g;g++)c[e+g]=f[g],d[e+g]=e/3}return new ka(c,d,!1)}function ya(a,b,c,d,e,f){const g=3*b[c],h=3*b[c+1];b=3*b[c+2];d[0]=a[g];d[1]=a[g+1];d[2]=a[g+2];e[0]=a[h];e[1]=a[h+1];e[2]=a[h+2];f[0]=a[b];f[1]=a[b+1];f[2]=a[b+2]}function Y(a,
b,c,d){ya(a,b,c,k,D,O);u.subtract(D,D,k);u.subtract(O,O,k);u.cross(k,D,O);u.normalize(d,k);return d}function R(a){if(!a)return null;const {scale:b,offset:c,rotation:d}=a;return{scale:b,offset:c,rotation:Aa.deg2rad(d)}}function Ra(a="repeat"){return"string"===typeof a?(a=la(a),{s:a,t:a}):{s:la(a.horizontal),t:la(a.vertical)}}function la(a){switch(a){case "clamp":return ja.TextureWrapMode.CLAMP_TO_EDGE;case "mirror":return ja.TextureWrapMode.MIRRORED_REPEAT;default:return ja.TextureWrapMode.REPEAT}}
function N(a){return null==a?"-":a instanceof P?a.toHex():a.contentHash}function S(a){const {offset:b,scale:c,rotation:d}=a??Sa;return`${b[0]},${b[1]},${d},${c[0]},${c[1]}`}const Ta=["mesh"];class Ua extends Ma.Graphics3DSymbolLayer{constructor(a,b,c,d){super(a,b,c,d);this._materialInfoCache=new ua.MaterialInfoCache;this._fastUpdateProcessor=new ua.MeshFastUpdateProcessor;this._textures=new Map;this.ensureDrapedStatus(!1)}async doLoad(){wa.debugFlags.DRAW_MESH_GEOMETRY_NORMALS&&(this._debugVertexNormalMaterial=
new ha.NativeLineMaterial({color:[1,0,1,1]}),this._debugTangentNormalMaterial=new ha.NativeLineMaterial({color:[1,.5,0,1]}),this._debugFaceNormalMaterial=new ha.NativeLineMaterial({color:[0,1,1,1]}))}destroy(){super.destroy();this._textures.forEach(a=>a.unload());this._context.stage.removeMany(this._materialInfoCache.materials);this._context.stage.removeMany(Array.from(this._textures.values()));this._materialInfoCache.clear();this._textures.clear();this._fastUpdateProcessor.destroy(this._context.stage)}get materials(){return this._materialInfoCache.materials}createGraphics3DGraphic(a){const b=
a.graphic;if(!this._validateGeometry(b.geometry,Ta,"fill on mesh-3d"))return null;const c=this.setGraphicElevationContext(b);return this._createAs3DShape(b,a.renderingInfo,c,b.uid)}onRemoveGraphic(a){this._fastUpdateProcessor.onRemoveGraphic(a,this._materialInfoCache,this._context)}layerOpacityChanged(a,b){const c=this._getLayerOpacity();this._updateMaterialParameters(d=>{d.material.setParameters({layerOpacity:c});const e=d.material.parameters;this._setMaterialTransparentParameter(e,d);d.material.setParameters({transparent:e.transparent})});
a.forEach(d=>b(d)?.layerOpacityChanged(c,this._context.isAsync))}layerElevationInfoChanged(a,b){return this.updateGraphics3DGraphicElevationInfo(a,b,X.needsElevationUpdates3D)}slicePlaneEnabledChanged(a,b){this._updateMaterialParameters(({material:c})=>{c.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})});a.forEach(c=>b(c)?.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync));return!0}physicalBasedRenderingChanged(){const a=this._usePBR();this._updateMaterialParameters(({material:b})=>
b.setParameters({usePBR:a}));return!0}updateTransform(a,b,c,d){if(!a.fastTransformUpdatesAllowed)return!1;var e=a.fastTransformUpdatesEnabled;switch(d){case K.MeshTransformUpdateAction.EnableFastUpdates:if(e)return!0;break;case K.MeshTransformUpdateAction.DisableFastUpdates:if(!e)return!0;break;default:if(!e)return this.updateTransform(a,b,c,K.MeshTransformUpdateAction.EnableFastUpdates)?(a.autoDisableFastTransformUpdates(()=>this.updateTransform(a,b,c,K.MeshTransformUpdateAction.DisableFastUpdates)),
!0):!1}e=this._context.renderCoordsHelper.spatialReference;const f=Va,{origin:g,transform:h}=c;if(!ca.computeTranslationToOriginAndRotation(b,u.set(k,g.x,g.y,g.z??0),f,e))return!1;switch(d){case K.MeshTransformUpdateAction.EnableFastUpdates:this._fastUpdateProcessor.enable(a,this._materialInfoCache,this._context);break;case K.MeshTransformUpdateAction.DisableFastUpdates:this._fastUpdateProcessor.disable(a,this._materialInfoCache,this._context);break;case K.MeshTransformUpdateAction.UpdateFastLocalOrigin:a.updateFastLocalOrigin(f,
h,this._context.localOriginFactory)}const {elevationContext:n}=a;n.centerPointInElevationSR=this._getCenterPointInElevationSR(f);const {elevationProvider:p,renderCoordsHelper:v}=this._context;a.alignedSampledElevation=da.perObjectElevationAligner(a,n,p.spatialReference,(m,z)=>X.evaluateElevationInfoAtPoint(m,p,n,v,z),v,f);a.updateTransform(f,h,this._context.isAsync);a.updateAutoDisableFastTransformUpdates(()=>this.updateTransform(a,b,c,K.MeshTransformUpdateAction.DisableFastUpdates));return!0}_requiresSymbolVertexColors(){return this._drivenProperties.color||
this._drivenProperties.opacity}_materialPropertiesDefault(a,b){const c=this._requiresSymbolVertexColors(),d=!!a.vertexAttributes.color;a=!!a.vertexAttributes.tangent;return{hasSymbolVertexColors:c,hasVertexColors:d,hasVertexTangents:a,uid:`vc:${d},vt:${a},vct${b},svc:${c}`}}_materialProperties(a,b,c){a=this._materialPropertiesDefault(a,c);if(!b.material)return a;const {color:d,colorTexture:e,colorTextureTransform:f,normalTexture:g,normalTextureTransform:h,doubleSided:n,alphaCutoff:p,alphaMode:v}=
b.material;c=N(d);var m=N(e),z=S(f),E=N(g),l=S(h);a.color=d;a.colorTexture=e;a.normalTexture=g;a.uid=`${a.uid},cmuid:${c},ctmuid:${m},cttuid:${z},ntmuid:${E},nttuid:${l},ds:${n},ac:${p},am:${v}`;if(b.material instanceof Ga){const {metallic:r,roughness:q,metallicRoughnessTexture:t,metallicRoughnessTextureTransform:B,emissiveColor:x,emissiveTexture:w,emissiveTextureTransform:M,occlusionTexture:H,occlusionTextureTransform:za}=b.material;b=N(t);c=S(B);m=N(x);z=N(w);E=S(M);l=N(H);const Wa=S(za);a.metallic=
r;a.roughness=q;a.metallicRoughnessTexture=t;a.emissiveColor=x;a.emissiveTexture=w;a.occlusionTexture=H;a.colorTextureTransform=R(f);a.normalTextureTransform=R(h);a.emissiveTextureTransform=R(M);a.occlusionTextureTransform=R(za);a.metallicRoughnessTextureTransform=R(B);a.uid=`${a.uid},mrm:${r},mrr:${q},mrt:${b},mrtt:${c},emuid:${m},etmuid:${z},ett:${E},otmuid:${l},ott:${Wa}`}return a}_getInternalTextureId(a){return this._getInternalTexture(a,F.AlphaDiscardMode.Opaque)?.id}_getInternalTexture(a,b){const c=
a.data??a.url;if(!c)return null;const d=`${a.contentHash}/${b}`;var e=this._textures.get(d);e||(e=null,e=this._context.stage.renderView.renderingContext.parameters.maxMaxAnisotropy,a={wrap:Ra(a.wrap),noUnpackFlip:!0,maxAnisotropy:e,mipmap:1<e},Ja.isEncodedMeshTexture(c)?(e=c.data,a.preMultiplyAlpha=!1,a.encoding=c.encoding):(e=c,a.preMultiplyAlpha=b!==F.AlphaDiscardMode.Opaque,a.downsampleUncompressed=this._context.graphicsCoreOwner.view.qualitySettings.graphics3D.uncompressedTextureDownsamplingEnabled),
e=new Pa.Texture(e,a),this._textures.set(d,e),e.load(this._context.stage.renderView.renderingContext),this._context.stage.add(e));return e}_setInternalMaterialParameters(a,b){if(null!=a.color){var c=a.color;b.diffuse=P.toUnitRGB(c);b.opacity=c.a}null!=a.colorTexture&&((c=this._getInternalTexture(a.colorTexture,b.textureAlphaMode))?(b.textureId=c.id,b.textureAlphaPremultiplied=!!c.parameters.preMultiplyAlpha):b.textureId=void 0);a.normalTexture&&(b.normalTextureId=this._getInternalTextureId(a.normalTexture));
a.emissiveColor&&(b.emissiveFactor=P.toUnitRGB(a.emissiveColor));a.emissiveTexture&&(b.emissiveTextureId=this._getInternalTextureId(a.emissiveTexture));a.occlusionTexture&&(b.occlusionTextureId=this._getInternalTextureId(a.occlusionTexture));a.metallicRoughnessTexture&&(b.metallicRoughnessTextureId=this._getInternalTextureId(a.metallicRoughnessTexture));b.colorTextureTransformMatrix=Q.getTransformMatrix(a.colorTextureTransform);b.normalTextureTransformMatrix=Q.getTransformMatrix(a.normalTextureTransform);
c=null!=a.normalTextureTransform?.scale?a.normalTextureTransform?.scale:Ba.ONES;b.scale=[c[0],c[1]];b.occlusionTextureTransformMatrix=Q.getTransformMatrix(a.occlusionTextureTransform);b.emissiveTextureTransformMatrix=Q.getTransformMatrix(a.emissiveTextureTransform);b.metallicRoughnessTextureTransformMatrix=Q.getTransformMatrix(a.metallicRoughnessTextureTransform)}_setExternalMaterialParameters(a){let b=this.symbolLayer.material?.colorMixMode??null;if(this._drivenProperties.color)a.externalColor=pa.ONES;
else{const c=this.symbolLayer.material?.color??null;c?a.externalColor=P.toUnitRGBA(c):(b=null,a.externalColor=pa.ONES)}b&&(a.colorMixMode=b);a.castShadows=!!this.symbolLayer.castShadows}_getOrCreateMaterial(a,b){var c=b.material?.color,d=b.material?.colorTexture,e=b.material?.alphaMode,f="blend"===e;if(e="opaque"!==e){a:{e=a.vertexAttributes.color;if(null!=e)for(let g=3;g<e.length;g+=4)if(255!==e[g]){e=!0;break a}e=!1}e=e||null!=c&&1>c.a||d?.transparent||f}c=e;a=this._materialProperties(a,b,c);if(d=
this._materialInfoCache.byUid(a.uid))return d.material;c={uid:a.uid,material:null,isComponentTransparent:c,alphaMode:b.material?b.material.alphaMode:"opaque"};d=ia.useSchematicPBR({normalTexture:a.normalTexture,metallicRoughnessTexture:a.metallicRoughnessTexture,metallicFactor:a.metallic,roughnessFactor:a.roughness,emissiveTexture:a.emissiveTexture,emissiveFactor:P.toUnitRGB(a.emissiveColor),occlusionTexture:a.occlusionTexture});f={usePBR:this._usePBR(),isSchematic:d,hasVertexColors:a.hasVertexColors,
hasSymbolColors:a.hasSymbolVertexColors,hasVertexTangents:a.hasVertexTangents,ambient:J.ZEROS,diffuse:J.ONES,opacity:1,doubleSided:!0,doubleSidedType:"winding-order",cullFace:F.CullFaceOptions.None,layerOpacity:this._getLayerOpacity(),hasSlicePlane:this._context.slicePlaneEnabled,initTextureTransparent:!0};f.mrrFactors=d?[...ia.defaultSchematicMRRFactors]:[a.metallic,a.roughness,ia.defaultAdvancedMRRFactors[2]];b.material&&(f.doubleSided=b.material.doubleSided,f.cullFace=b.material.doubleSided?F.CullFaceOptions.None:
F.CullFaceOptions.Back,f.textureAlphaCutoff=b.material.alphaCutoff);this._setExternalMaterialParameters(f);this._setMaterialTransparentParameter(f,c);this._setInternalMaterialParameters(a,f);b=new Qa.DefaultMaterial(f);c.material=b;this._materialInfoCache.set(a.uid,c);this._context.stage.add(b);return b}_usePBR(){return this._context.physicalBasedRenderingEnabled}_setMaterialTransparentParameter(a,b){a.transparent=this.needsDrivenTransparentPass||b.isComponentTransparent||1>a.layerOpacity||1>a.opacity||
a.externalColor&&1>a.externalColor[3];a.textureAlphaMode="auto"===b.alphaMode?a.transparent?F.AlphaDiscardMode.MaskBlend:F.AlphaDiscardMode.Opaque:"opaque"===b.alphaMode?F.AlphaDiscardMode.Opaque:"mask"===b.alphaMode?F.AlphaDiscardMode.Mask:F.AlphaDiscardMode.Blend}_createFaceDebugNormals(a,b){const c=b.length;var d=a.spatialReference.isGeographic?20015077/180:1;a=.1*Math.max(a.extent.width*d,a.extent.height*d,a.extent.zmax-a.extent.zmin);d=[];const e=[],f=b[0].transformation,g=ba.normalFromMat4(oa.create(),
f);for(let n=0;n<c;n++){var h=b[n].attributes.get(A.VertexAttribute.POSITION);if(!h)continue;const p=h.data;h=h.indices;for(let v=0;v<h.length;v+=3)Y(p,h,v,G),ya(p,h,v,k,D,O),u.add(k,k,D),u.add(k,k,O),u.scale(k,k,1/3),u.transformMat4(k,k,f),d.push(...k),u.transformMat3(G,G,g),u.normalize(G,G),u.scaleAndAdd(k,k,G,a),d.push(...k),e.push(e.length),e.push(e.length)}return d.length?new fa.Geometry(this._debugFaceNormalMaterial,[[A.VertexAttribute.POSITION,new L.Attribute(d,e,3,!0)]],null,ea.ContentObjectType.Line):
null}_createPerVertexDebugVectors(a,b,c,d,e){const f=b.length;var g=a.spatialReference.isGeographic?20015077/180:1;a=.1*e*Math.max(a.extent.width*g,a.extent.height*g,a.extent.zmax-a.extent.zmin);e=[];g=[];const h=b[0].transformation,n=ba.normalFromMat4(oa.create(),h);c===A.VertexAttribute.TANGENT&&ba.fromMat4(n,h);for(let m=0;m<f;m++){var p=b[m],v=p.attributes.get(A.VertexAttribute.POSITION);p=p.attributes.get(c);if(!v||!p)continue;const z=v.data;v=v.indices;const E=p.data,l=p.indices;for(let r=0;r<
v.length;r++){const q=3*v[r],t=l[r]*p.stride;u.set(k,z[q+0],z[q+1],z[q+2]);u.transformMat4(k,k,h);e.push(...k);u.set(D,E[t+0],E[t+1],E[t+2]);u.transformMat3(D,D,n);u.normalize(D,D);u.scaleAndAdd(k,k,D,a);e.push(...k);g.push(g.length);g.push(g.length)}}return e.length?new fa.Geometry(d,[[A.VertexAttribute.POSITION,new L.Attribute(e,g,3,!0)]],null,ea.ContentObjectType.Line):null}_createAs3DShape(a,b,c,d){a=a.geometry;if("mesh"!==a.type)return null;b=this._createGeometryInfo(a,b,d);if(null==b)return null;
const {geometries:e,objectTransformation:f}=b;if(wa.debugFlags.DRAW_MESH_GEOMETRY_NORMALS){b=this._createPerVertexDebugVectors(a,e,A.VertexAttribute.NORMAL,this._debugVertexNormalMaterial,1);const n=this._createPerVertexDebugVectors(a,e,A.VertexAttribute.TANGENT,this._debugTangentNormalMaterial,.5),p=this._createFaceDebugNormals(a,e);b&&e.push(b);n&&e.push(n);p&&e.push(p)}d=new Oa.Object3D({geometries:e,layerUid:this._context.layer.uid,graphicUid:d,isElevationSource:!0});d.transformation=f;b=(b=Na.createMaterial(this.symbolLayer,
{opacity:this._getLayerOpacity()}))?new La.Object3DEdgeState(e[0].material,[b],{mergeGeometries:!0,hasSlicePlane:this._context.slicePlaneEnabled}):null;b=new Ka.Graphics3DMeshObject3DGraphicLayer(this,d,e,null,null,da.perObjectElevationAligner,c,b);this._fastUpdateProcessor.onAddGraphic();b.needsElevationUpdates=X.needsElevationUpdates3D(c.mode);b.useObjectOriginAsAttachmentOrigin=!0;b.fastTransformUpdatesAllowed=this._fastTransformUpdatesAllowed(a);c.centerPointInElevationSR=this._getCenterPointInElevationSR(d.transformation);
const {elevationProvider:g,renderCoordsHelper:h}=this._context;b.alignedSampledElevation=da.perObjectElevationAligner(b,c,g.spatialReference,(n,p)=>X.evaluateElevationInfoAtPoint(n,g,c,h,p),h);return b}_fastTransformUpdatesAllowed(a){const {vertexSpace:b,spatialReference:c}=a;if(!sa.isRelativeVertexSpace(b))return!1;({type:a}=b);var {view:d}=this._context.graphicsCoreOwner;const {viewingMode:e}=d.state;d=d.spatialReference;return e===W.ViewingMode.Global&&"local"===a||e===W.ViewingMode.Local&&V.equals(d,
c)&&"georeferenced"===a&&!c.isGeographic}_getCenterPointInElevationSR(a){const b=Ia.makeDehydratedPoint(0,0,0,null!=this._context.elevationProvider.spatialReference?this._context.elevationProvider.spatialReference:null);Ea.projectVectorToPoint([a[12],a[13],a[14]],this._context.renderCoordsHelper.spatialReference,b);return b}_passthroughReprojectionInfo(a){return a.reprojection===C.NONE&&!!a.objectTransformation}_createPositionBuffer(a,b){const c=a.vertexAttributes.position;let d=c,e=null;if(b.reprojection===
C.NONE)return{position:d,georeferencedPositionBuffer:e};const f=b.reprojection===C.RENDER?b.transformBeforeProject:null;f&&(d=ta.transformMat4(new Float64Array(d.length),d,f));const {normal:g,tangent:h}=a.vertexAttributes;this._passthroughReprojectionInfo(b)||!g&&!h||(e=d);b=d===c||d===e?new Float64Array(d.length):d;Da.projectBuffer(d,a.spatialReference,0,b,this._context.renderCoordsHelper.spatialReference,0,d.length/3);return{position:b,georeferencedPositionBuffer:e}}_createNormalBuffer(a,b,c,d){const e=
a.vertexAttributes.normal;if(null==e)return null;let f=e;const g=d.reprojection===C.RENDER?d.transformBeforeProject:null;g&&(f=y.transformNormal(f,new Float32Array(f.length),g));if(d.reprojection===C.NONE)return f;if("local"===this._context.graphicsCoreOwner.view.viewingMode)return V.isPlateCarree(this._context.renderCoordsHelper.spatialReference)?null==c?null:a.spatialReference.isGeographic?(a=f===e?new Float32Array(f.length):f,y.transformVectorENUPlateCarree(f,y.VectorType.NORMAL,c,a)):a.spatialReference.isWebMercator?
(a=f===e?new Float32Array(f.length):f,y.transformVectorWMPlateCarree(f,y.VectorType.NORMAL,c,a)):f:f;if(null==c)return null;d=f===e?new Float32Array(f.length):f;return y.projectNormalToPCPF(f,c,b,a.spatialReference,d)}_createTangentBuffer(a,b,c,d){const e=a.vertexAttributes.tangent;if(null==e)return null;let f=e;const g=d.reprojection===C.RENDER?d.transformBeforeProject:null;g&&(f=y.transformTangent(f,new Float32Array(f.length),g));if(d.reprojection===C.NONE)return f;if("local"===this._context.graphicsCoreOwner.view.viewingMode)return V.isPlateCarree(this._context.renderCoordsHelper.spatialReference)?
null==c?null:a.spatialReference.isGeographic?(a=f===e?new Float32Array(f.length):f,y.transformVectorENUPlateCarree(f,y.VectorType.TANGENT,c,a)):a.spatialReference.isWebMercator?(a=f===e?new Float32Array(f.length):f,y.transformVectorWMPlateCarree(f,y.VectorType.TANGENT,c,a)):f:f;if(null==c)return null;d=f===e?new Float32Array(f.length):f;return y.projectTangentToPCPF(f,c,b,a.spatialReference,d)}_createSymbolColorBuffer(a){if(this._requiresSymbolVertexColors()){a=this._getVertexOpacityAndColor(a);const b=
va.parseColorMixMode(this.symbolLayer?.material?.colorMixMode),c=new Uint8Array(4);va.encodeSymbolColor(a,b,c);return c}return null}_createBuffers(a,b){var c=a.vertexAttributes&&a.vertexAttributes.position;if(!c)return this.logger.warn("Mesh geometry must contain position vertex attributes"),null;var d=a.vertexAttributes.normal;const e=a.vertexAttributes.uv;var f=a.vertexAttributes.tangent;if(d&&d.length!==c.length)return this.logger.warn("Mesh normal vertex buffer must contain the same number of elements as the position buffer"),
null;if(f&&f.length/4!==c.length/3)return this.logger.warn("Mesh tangent vertex buffer must contain the same number of elements as the position buffer"),null;if(e&&e.length/2!==c.length/3)return this.logger.warn("Mesh uv vertex buffer must contain the same number of elements as the position buffer"),null;d=this._computeReprojectionInfo(a);const {position:g,georeferencedPositionBuffer:h}=this._createPositionBuffer(a,d);c=a.vertexAttributes.color;b=this._createSymbolColorBuffer(b);f=this._createNormalBuffer(a,
g,h,d);const n=this._createTangentBuffer(a,g,h,d),{transformation:p,position:v,normal:m,tangent:z}=this._passthroughReprojectionInfo(d)?{transformation:d.objectTransformation,position:g,normal:f,tangent:n}:this._transformOriginLocal(a,g,f,n);a=d.reprojection===C.NONE&&d.geometryTransformation?d.geometryTransformation:I.create();return{positionBuffer:v,normalBuffer:m,tangentBuffer:z,uvBuffer:e,colorBuffer:c,symbolColorBuffer:b,objectTransformation:p,geometryTransformation:a}}_computeReprojectionInfo(a){var {vertexSpace:b}=
a;const c="georeferenced"===b.type?V.equals(this._context.renderCoordsHelper.spatialReference,a.spatialReference)?C.NONE:C.RENDER:C.NONE;if(sa.isAbsoluteVertexSpace(b))return{reprojection:c};const d=b.origin;b=I.create();const e=a.transform?.localMatrix??I.IDENTITY;if(c===C.NONE)return ca.computeTranslationToOriginAndRotation(a.spatialReference,d,b,this._context.renderCoordsHelper.spatialReference),a=I.clone(e),{reprojection:c,objectTransformation:b,geometryTransformation:a};a=T.fromTranslation(I.create(),
d);T.multiply(a,a,e);return{reprojection:c,transformBeforeProject:a}}_transformOriginLocal(a,b,c,d){var e=this._context.renderCoordsHelper.spatialReference,f=a.anchor;Z[0]=f.x;Z[1]=f.y;Z[2]=f.z??0;f=I.create();ca.computeTranslationToOriginAndRotation(a.spatialReference,Z,f,e);T.invert(aa,f);const {position:g,normal:h,tangent:n}=a.vertexAttributes;a=b===g?new Float64Array(b.length):b;ta.transformMat4(a,b,aa);b=c?c===h?new Float32Array(c.length):c:null;e=d?d===n?new Float32Array(d.length):d:null;c&&
b&&y.transformNormal(c,b,aa);d&&e&&y.transformTangent(d,e,aa);return{transformation:f,position:a,normal:b,tangent:e}}_validateFaces(a,b){a=a.vertexAttributes.position.length/3;if(b=b.faces){let c=-1;for(let d=0;d<b.length;d++){const e=b[d];e>c&&(c=e)}if(a<=c)return this.logger.warn(`Vertex index ${c} is out of bounds of the mesh position buffer`),!1}else if(0!==a%3)return this.logger.warn("Mesh position buffer length must be a multiple of 9 if no component faces are defined (3 values per vertex * 3 vertices per triangle)"),
!1;return!0}_isOutsideClippingArea(a){if(!this._context.clippingExtent)return!1;var b=a.vertexAttributes?.position;if(!b)return!1;a=y.project({positions:b,transform:a.transform,vertexSpace:a.vertexSpace,inSpatialReference:a.spatialReference,outSpatialReference:this._context.elevationProvider.spatialReference??a.spatialReference,localMode:this._context.stage.viewingMode===W.ViewingMode.Local});if(!a)return!1;b=a.length/3;U.empty(ma);U.expandWithBuffer(ma,a,0,b);return!U.intersectsClippingArea(ma,this._context.clippingExtent)}_createGeometryInfo(a,
b,c){if(!Ca.canProjectWithoutEngine(a.spatialReference,this._context.renderCoordsHelper.spatialReference))return this.logger.warn("Geometry spatial reference is not compatible with the view"),null;if(!this._validateVertexSpace(a)||this._isOutsideClippingArea(a))return null;b=this._createBuffers(a,b);if(null==b)return null;const {positionBuffer:d,uvBuffer:e,colorBuffer:f,symbolColorBuffer:g,normalBuffer:h,tangentBuffer:n,objectTransformation:p,geometryTransformation:v}=b;var m=a.components??Xa;b=[];
let z=!1;var E=T.getTranslation(k,p);E=this._context.localOriginFactory.getOrigin(E);for(const M of m){if(!this._validateFaces(a,M))return null;m=M.faces??ra.getContinuousIndexArray(a.vertexAttributes.position.length/3);if(0!==m.length){a:{var l=d;var r=m;switch(M.shading||"flat"){default:case "source":var q=h,t=M,B=r;if(null==q)l=xa(l,B);else{r=!1;if(!t.trustSourceNormals)for(t=0;t<B.length;t+=3){Y(l,B,t,G);for(var x=0;3>x;x++){var w=3*B[t+x];k[0]=q[w];k[1]=q[w+1];k[2]=q[w+2];0>u.dot(G,k)&&(q[w]=
-q[w],q[w+1]=-q[w+1],q[w+2]=-q[w+2],r=!0)}}l=new ka(q,B,r)}break a;case "flat":l=xa(l,r);break a;case "smooth":B=l;l=r;q={};for(r=0;r<l.length;r+=3)for(t=Y(B,l,r,G),x=0;3>x;x++){w=l[r+x];let H=q[w];H||(H={normal:J.create(),count:0},q[w]=H);u.add(H.normal,H.normal,t);H.count++}B=qa.newFloatArray(3*l.length);r=Array(3*l.length);for(t=0;t<l.length;t++){x=q[l[t]];1!==x.count&&(u.normalize(x.normal,x.normal),x.count=1);for(w=0;3>w;w++)B[3*t+w]=x.normal[w];r[t]=t}l=new ka(B,r,!1)}}l.didFlipNormals&&(z=
!0);l=[[A.VertexAttribute.POSITION,new L.Attribute(d,m,3,!0)],[A.VertexAttribute.NORMAL,new L.Attribute(l.normals,l.indices,3,!0)]];f&&l.push([A.VertexAttribute.COLOR,new L.Attribute(f,m,4,!0)]);g&&l.push([A.VertexAttribute.SYMBOLCOLOR,new L.Attribute(g,ra.getZeroIndexArray(m.length),4,!0)]);e&&l.push([A.VertexAttribute.UV0,new L.Attribute(e,m,2,!0)]);n&&l.push([A.VertexAttribute.TANGENT,new L.Attribute(n,m,4,!0)]);m=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:c,layerUid:this._context.layer.uid});
q=this._getOrCreateMaterial(a,M);m=new fa.Geometry(q,l,null,ea.ContentObjectType.Mesh,m);m.transformation=v;m.localOrigin=E;b.push(m)}}z&&this.logger.warn("Normals have been automatically flipped to be consistent with the counter clock wise face winding order. It is better to generate mesh geometries that have consistent normals.");return{geometries:b,objectTransformation:p}}_updateMaterialParameters(a){this._materialInfoCache.forEachMaterialInfo(a);this._fastUpdateProcessor.forEachMaterialInfo(a);
this._fastUpdateProcessor.forEachClonedMaterial((b,c)=>{c.setParameters(b.parameters)})}_validateVertexSpace(a){const {_context:{graphicsCoreOwner:{view:{state:{viewingMode:b}}}}}=this;({vertexSpace:a}=a);return b===W.ViewingMode.Local&&"local"===a.type?(this.logger.warn("Displaying a mesh with a local vertex space in a view in local viewing mode is not supported."),!1):!0}test(){return{...super.test(),materials:this._materialInfoCache.materials}}}class ka{constructor(a,b,c){this.normals=a;this.indices=
b;this.didFlipNormals=c}}const Sa=new Ha,Z=J.create(),k=J.create(),D=J.create(),O=J.create(),G=J.create(),aa=I.create(),Va=I.create(),ma=U.create(),Xa=[new Fa];var C;(function(a){a[a.NONE=0]="NONE";a[a.RENDER=1]="RENDER"})(C||={});na.Graphics3DMeshFillSymbolLayer=Ua;Object.defineProperty(na,Symbol.toStringTag,{value:"Module"})});