// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/Error ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection/projectBuffer ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/DoubleArray ./elevationAlignmentUtils ./Graphics3DObject3DGraphicLayer ./Graphics3DPathSymbolLayerConstants ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ../support/FastSymbolUpdates ../../support/ElevationProvider ../../webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Path ../../webgl-engine/lib/PathBuilder ../../webgl-engine/lib/PathCapBuilder ../../webgl-engine/lib/PathExtruder ../../webgl-engine/lib/PathGeometry ../../webgl-engine/lib/PathGeometryData ../../webgl-engine/lib/pathGeometryUtils ../../webgl-engine/lib/PathProfile ../../webgl-engine/lib/PathVertex ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/PathMaterial".split(" "),
function(M,Aa,fa,ha,N,O,P,Q,R,S,C,G,D,ia,H,ja,T,I,w,ka,la,U,ma,na,oa,t,E,u,V,pa,W,qa,ra,sa,ta){function X(a,b,e){const {origin:g,positions:h}=a;let c=a.offset;switch(b){default:case u.UpVectorAlignment.World:for(const n of a.vertices)f[0]=h[c++]+g[0],f[1]=h[c++]+g[1],f[2]=h[c++]+g[2],e.worldUpAtPosition(f,f),n.setFrameFromUpVector(f);break;case u.UpVectorAlignment.Path:f[0]=h[c]+g[0],f[1]=h[c+1]+g[1],f[2]=h[c+2]+g[2],e.worldUpAtPosition(f,f),pa.computeMinimumRotationTangentFrame(a,f)}}function Y(a,
b,e){switch(a){case "symbol-value":return e;case "proportional":return b;default:return a}}const ua=["polyline"];class va extends ja.Graphics3DSymbolLayer{constructor(a,b,e,g){super(a,b,e,g);this._intrinsicSize=P.fromValues(1,1);this._upVectorAlignment=u.UpVectorAlignment.Path;this._stencilWidth=.1;this.usedMemory=0;this.ensureDrapedStatus(!1)}async doLoad(){var a=null!=this.symbolLayer.width?this.symbolLayer.width:this.symbolLayer.height;const b=null!=this.symbolLayer.height?this.symbolLayer.height:
a;this._vvConvertOptions=new w.ConvertOptions({size:!0,color:!0,rotation:!1,opacity:!0},[1,1,1],[a,1,b],this._context.renderCoordsHelper.unitInMeters);this._fastUpdates=0<this._context.renderer?.visualVariables?.length?w.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):null;var e=this.symbolLayer.anchor||"center";this._upVectorAlignment="heading"===this.symbolLayer.profileRotation?u.UpVectorAlignment.World:u.UpVectorAlignment.Path;var g=this.symbolLayer.profile||"circle";
switch(g){default:case "circle":this._profile=W.circleProfiles[e];break;case "quad":this._profile=W.quadProfiles[e]}switch(this.symbolLayer.join){case "round":this._extruder=new E.MiterExtruder(0,H.pathNumRoundJoinSubdivisions);break;case "bevel":this._extruder=new E.MiterExtruder(0,1);break;case "miter":this._extruder=new E.MiterExtruder(.8*Math.PI,1);break;default:this._extruder=new E.SimpleExtruder}e=this.symbolLayer.cap||"butt";switch(e){case "none":this._startCap=new t.NoCapBuilder;this._endCap=
new t.NoCapBuilder;break;default:this._startCap=new t.TriangulationCapBuilder(this._profile,0);this._endCap=new t.TriangulationCapBuilder(this._profile,0,!0);break;case "square":this._startCap=new t.TriangulationCapBuilder(this._profile,-.5);this._endCap=new t.TriangulationCapBuilder(this._profile,.5,!0);break;case "round":g="quad"===g,this._startCap=new t.RoundCapBuilder({profile:this._profile,flip:!1,breakNormals:g,subdivisions:H.pathNumRoundCapExtrusionSubdivisions}),this._endCap=new t.RoundCapBuilder({profile:this._profile,
flip:!0,breakNormals:g,subdivisions:H.pathNumRoundCapExtrusionSubdivisions})}var h=this._getCombinedOpacityAndColor(this.symbolLayer?.material?.color);g=R.fromArray(h);h=h[3];const c=1>h||this.needsDrivenTransparentPass;e={diffuse:g,ambient:g,opacity:h,transparent:c,hasVertexColors:!1,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,cullFace:c||"none"===e?U.CullFaceOptions.None:U.CullFaceOptions.Back,offsetTransparentBackfaces:!0};if(!this._drivenProperties.size&&
(O.set(this._intrinsicSize,a,b),!T.isValidSize(this._intrinsicSize[0])||!T.isValidSize(this._intrinsicSize[1])))throw new fa("graphics3dpathsymbollayer:invalid-size","Symbol sizes may not be negative values");this._fastUpdates?.visualVariables.size||O.scale(this._intrinsicSize,this._intrinsicSize,1/this._context.renderCoordsHelper.unitInMeters);this._fastUpdates?(a={...e,...this._fastUpdates.materialParameters,size:P.fromArray(this._intrinsicSize)},this._materials[0]=new ta.PathMaterial(a)):(e.hasVertexColors=
this._drivenProperties.color||this._drivenProperties.opacity,e.normalType=la.NormalType.Compressed,this._materials[0]=new sa.DefaultMaterial(e));this._materials[0].setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});this._context.stage.add(this._materials[0])}destroy(){super.destroy();this._context.stage.remove(this._materials[0]);this._materials[0]=null;this._materials.length=0}createGraphics3DGraphic(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,ua,this.symbolLayer.type))return null;
const e=this.setGraphicElevationContext(b);return this._createAs3DShape(b,a.renderingInfo,e,b.uid)}layerOpacityChanged(){const a=this._getCombinedOpacity(this.symbolLayer?.material?.color),b=1>a||this.needsDrivenTransparentPass;this._materials[0]?.setParameters({opacity:a,transparent:b})}layerElevationInfoChanged(a,b){return this.updateGraphics3DGraphicElevationInfo(a,b,D.needsElevationUpdates3D)}slicePlaneEnabledChanged(){this._materials[0]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});
return!0}physicalBasedRenderingChanged(){this._materials[0]?.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});return!0}applyRendererDiff(a,b){for(const e in a.diff)switch(e){case "visualVariables":if(w.updateFastSymbolUpdatesState(this._fastUpdates,b,this._vvConvertOptions))this._materials[0]?.setParameters(this._fastUpdates.materialParameters);else return I.ApplyRendererDiffResult.RecreateSymbol;break;default:return I.ApplyRendererDiffResult.RecreateSymbol}return I.ApplyRendererDiffResult.FastUpdate}_getVertexData(a){let b=
0;const e=a.paths,g=[],h=a.spatialReference,c=this._context.elevationProvider.spatialReference,n=this._context.renderCoordsHelper.spatialReference;for(var m of e)b+=m.length;m=G.newDoubleArray(3*b);let v=0;for(const z of e){g.push({offset:v,numVertices:z.length});for(const d of z)m[v++]=d[0],m[v++]=d[1],m[v++]=a.hasZ?d[2]:0}if(null!=c&&!h.equals(c)&&!S.projectBuffer(m,h,0,m,c,0,b))return null;null==c||c.equals(n)?a=G.doubleArrayFrom(m):(a=G.newDoubleArray(3*b),S.projectBuffer(m,c,0,a,n,0,b));return{pathVertexDataInfos:g,
vertexDataES:m,vertexDataRS:a}}_createAs3DShape(a,b,e,g){this.usedMemory=0;var h=a.geometry;const c=this._getVertexData(h);if(null==c)return this.logger.warn("PathSymbol3DLayer geometry failed to be created (failed to project geometry to view spatial reference)"),null;if(0===c.pathVertexDataInfos.length)return 0!==h.paths.length&&h.paths.some(r=>0<r.length)||this.logger.warn("PathSymbol3DLayer geometry failed to be created (no paths were defined)"),null;var n=[];h=h.spatialReference;const m=C.create(),
v=this._context.renderCoordsHelper,z=new ka.SamplePosition(c.vertexDataES);for(const r of c.pathVertexDataInfos){var d=r.numVertices;if(!(2>d)){var p=r.offset;if(null!=this._context.clippingExtent&&(C.empty(m),C.expandWithBuffer(m,c.vertexDataES,p,d),!C.intersectsClippingArea(m,this._context.clippingExtent)))continue;var l=[];d=p+3*d;for(var k=p;k<d;k+=3){z.offset=k;const A=D.evaluateElevationAlignmentAtPoint(z,this._context.elevationProvider,e,v);Q.set(f,c.vertexDataRS[k],c.vertexDataRS[k+1],c.vertexDataRS[k+
2]);v.setAltitude(f,A);c.vertexDataRS[k]=f[0];c.vertexDataRS[k+1]=f[1];c.vertexDataRS[k+2]=f[2];l.push(qa.newPathVertex(this._upVectorAlignment))}p=new na.Path(l,c.vertexDataES,c.vertexDataRS,p);X(p,this._upVectorAlignment,this._context.renderCoordsHelper);p=new oa.PathBuilder(p,this._profile,this._extruder,this._startCap,this._endCap);l=null;this._fastUpdates?(k=this._fastUpdates.visualVariables,l=w.getAttributeValue(k.size?.field,a)??0,d=w.getAttributeValue(k.color?.field,a)??0,k=w.getAttributeValue(k.opacity?.field,
a)??0,l=new V.FastUpdatePathGeometry(p,l,d,k)):(l=[this._intrinsicSize[0],this._intrinsicSize[1]],this._drivenProperties.size&&(d=b.size,l[0]*=Y(d[0],"symbol-value"===d[2]?this.symbolLayer.height||0:d[2],this.symbolLayer.width||0),l[1]*=Y(d[2],"symbol-value"===d[0]?this.symbolLayer.width||0:d[0],this.symbolLayer.height||0)),d=void 0,this._drivenProperties.color&&(d=b.color),this._drivenProperties.opacity&&null!=b.opacity&&(d=d?[d[0],d[1],d[2],b.opacity]:[1,1,1,b.opacity]),k=new V.StaticPathGeometry(p),
k.bake(l),d&&k.bakeVertexColors(d),l=k);d=l.createGeometryData();k=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:g,layerUid:this._context.layer.uid});l=new u.PathGeometry(this._materials[0],d,l,h,this._stencilWidth,k);l.transformation=ha.translate(N.create(),N.IDENTITY,p.path.origin);n.push(l);this.usedMemory+=p.usedMemory}}if(0===n.length)return null;a=new ma.Object3D({geometries:n,layerUid:this._context.layer.uid,graphicUid:g});n=new ia.Graphics3DObject3DGraphicLayer(this,
a,n,null,null,(r,A,J,wa,Z)=>{A=this._upVectorAlignment;r=r.stageObject;J=r.geometries;var aa=0;for(const B of J){if(!u.isPathGeometry(B))continue;const ba=B.path,ca=ba.builder.path;var F=ca,xa=wa,ya=Z;let da=0;const {origin:x,vertices:ea,positions:y,positionsES:K}=F,za=F.offset+3*ea.length;for(let q=F.offset;q<za;q+=3)Q.set(f,K[q],K[q+1],K[q+2]),xa(f,L),da+=L.sampledElevation,f[0]=y[q]+x[0],f[1]=y[q+1]+x[1],f[2]=y[q+2]+x[2],ya.setAltitude(f,L.z),y[q]=f[0]-x[0],y[q+1]=f[1]-x[1],y[q+2]=f[2]-x[2];F.updatePathVertexInformation();
aa+=da/ea.length;A!==u.UpVectorAlignment.World&&X(ca,A,Z);ba.onPathChanged(B);B.invalidateBoundingInfo();r.geometryVertexAttributeUpdated(B,ra.VertexAttribute.POSITION)}return aa/J.length},e);n.alignedSampledElevation=0;n.needsElevationUpdates=D.needsElevationUpdates3D(e.mode);return n}}const f=R.create(),L=new D.SampleElevationInfo;M.Graphics3DPathSymbolLayer=va;Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});