// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../core/Error ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../renderers/support/renderingInfoUtils ./ElevationAligners ./elevationAlignmentUtils ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./interfaces ./lineUtils ../support/FastSymbolUpdates ../../support/debugFlags ../../support/engineContent/line ../../support/renderInfoUtils/line ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/LineMarkerMaterial ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/RibbonLineMaterial ../../../../geometry/Extent ../../../../geometry/Polygon".split(" "),
function(E,X,J,t,A,m,K,L,p,M,N,O,B,w,r,C,P,F,Q,R,S,T,x,U,V){function G(a){switch(a.type){case "extent":if(a instanceof U)return V.fromExtent(a);break;case "polygon":case "polyline":return a}return null}function y(a,b,c){null!=b&&c.symbolLayerStatePatches.push(()=>b.setParameters({color:a}))}const W=["polyline","polygon","extent"],H=new r.ConvertOptions({size:!0,color:!0,rotation:!1,opacity:!0});class D extends O.Graphics3DSymbolLayer{constructor(a,b,c,d){super(a,b,c,d)}async doLoad(){this._fastUpdates=
r.initFastSymbolUpdatesState(this._context.renderer,H);if(!this._drivenProperties.size&&0>(null!=this.symbolLayer.size?this.symbolLayer.size:t.px2pt(1)))throw new J("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values");}_getMaterialParameters(a,b=!1){const c=this._getCombinedOpacityAndColor(b&&this._markerColor||this._materialColor);this._patternHidesLine&&!b&&(c[3]=0);a={width:this._computeMaterialWidth(this.symbolLayer?.size),color:c,hasPolygonOffset:!0,join:this.symbolLayer.join||
"miter",cap:w.parseCapType(this.symbolLayer.cap||"butt"),hasSlicePlane:this._context.slicePlaneEnabled,isClosed:a,stipplePattern:T.getStipplePatternForLinePattern(this.symbolLayer.pattern)};return this._fastUpdates?.visualVariables?{...a,...this._fastUpdates.materialParameters}:a}get _materialColor(){return this.symbolLayer.material?.color}get _markerColor(){return this.symbolLayer.marker?.color}get _lineMaterial(){null==this._materials[f.Line]&&(this._materials[f.Line]=new x.RibbonLineMaterial(this._getMaterialParameters(!1)),
this._context.stage.add(this._materials[f.Line]));return this._materials[f.Line]}get _ringMaterial(){null==this._materials[f.Ring]&&(this._materials[f.Ring]=new x.RibbonLineMaterial(this._getMaterialParameters(!0)),this._context.stage.add(this._materials[f.Ring]));return this._materials[f.Ring]}get _wireframeLineMaterial(){null==this._materials[f.LineWireframe]&&(this._materials[f.LineWireframe]=new x.RibbonLineMaterial({...this._getMaterialParameters(!1),wireframe:!0}),this._context.stage.add(this._materials[f.LineWireframe]));
return this._materials[f.LineWireframe]}get _wireframeRingMaterial(){null==this._materials[f.RingWireframe]&&(this._materials[f.RingWireframe]=new x.RibbonLineMaterial({...this._getMaterialParameters(!0),wireframe:!0}),this._context.stage.add(this._materials[f.RingWireframe]));return this._materials[f.RingWireframe]}get _markerMaterial(){null==this._materials[f.Marker]&&null!=this.symbolLayer.marker&&(this._materials[f.Marker]=new S.LineMarkerMaterial({...this._getMaterialParameters(!1,!0),placement:this.symbolLayer.marker.placement,
markerPrimitive:w.parseLineMarkerStyle(this.symbolLayer.marker.style)}),this._context.stage.add(this._materials[f.Marker]));return this._materials[f.Marker]}destroy(){super.destroy();this._forEachMaterial(a=>this._context.stage.remove(a));this._materials.length=0}_getDrivenSize(a){return this._drivenProperties.size&&a.size?t.pt2px(K.getDriverAxisSizeValueAny(a.size)):1}_getDrivenColor(a){const b=A.fromValues(1,1,1,1);this._drivenProperties.color&&a.color&&(b[0]=a.color[0],b[1]=a.color[1],b[2]=a.color[2],
0<a.color.length&&(b[3]=a.color[3]));this._drivenProperties.opacity&&a.opacity&&(b[3]=a.opacity);return b}createGraphics3DGraphic(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,W,this.symbolLayer.type))return null;const c=this.setGraphicElevationContext(b);this.ensureDrapedStatus("on-the-ground"===c.mode);return this.draped?this._createAsOverlay(a,this._context.layer.uid):this._createAs3DShape(a,c,b.uid)}applyRendererDiff(a,b){for(const c in a.diff)switch(c){case "visualVariables":const d=
this._fastUpdates;if(r.updateFastSymbolUpdatesState(d,b,H))this._forEachMaterial(e=>e?.setParameters(d.materialParameters));else return B.ApplyRendererDiffResult.RecreateSymbol;break;default:return B.ApplyRendererDiffResult.RecreateSymbol}return B.ApplyRendererDiffResult.FastUpdate}prepareSymbolLayerPatch(a){if("partial"===a.diff.type){var b=a.diff.diff,c={};"complete"===b.size?.type&&(c.width=this._computeMaterialWidth(b.size.newValue),delete b.size);"complete"===b.cap?.type&&(c.cap=w.parseCapType(b.cap.newValue??
"butt"),delete b.cap);var d=this._prepareMarkerPatch(a,b);this._prepareMaterialPatch(a,b,d);a.symbolLayerStatePatches.push(()=>this._forEachMaterial(e=>e?.setParameters(c)))}}layerOpacityChanged(){this._forEachMaterial((a,b)=>this._updateMaterialLayerOpacity(a,b===f.Marker))}_forEachMaterial(a){this._materials.forEach(a)}_updateMaterialLayerOpacity(a,b=!1){if(null!=a){var c=a.parameters.color,d=this.symbolLayer?.material?.color;b=this._patternHidesLine&&!b?0:this._getCombinedOpacity(d);c=A.fromValues(c[0],
c[1],c[2],b);a.setParameters({color:c})}}layerElevationInfoChanged(a,b,c){const d=this._elevationContext.mode;c=p.elevationModeChangeUpdateType(D.elevationModeChangeTypes,c,d);if(c!==p.SymbolUpdateType.UPDATE)return c;const e=p.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>e)}slicePlaneEnabledChanged(){const a={hasSlicePlane:this._context.slicePlaneEnabled};this._forEachMaterial(b=>b?.setParameters(a));return!0}physicalBasedRenderingChanged(){return!0}_createAs3DShape(a,
b,c){const d=G(a.graphic.geometry);var e="polygon"===d.type?d.rings:d.paths,g=[];const l=m.create(),h=F.geometryToRenderInfo(d,this._context.elevationProvider,this._context.renderCoordsHelper,b);this._logGeometryCreationWarnings(h,e,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");for(e=0;e<h.lines.length;e++){var n=h.lines[e],k=n.position;n=n.mapPositions;if(null!=this._context.clippingExtent&&(m.empty(l),m.expandWithBuffer(l,n),!m.intersectsClippingArea(l,this._context.clippingExtent)))continue;
k=this._createGeometry("polygon"===d.type?this._ringMaterial:this._lineMaterial,a,k,n,d.type,z.ELEVATED,c);g.push(k);C.debugFlags.LINE_WIREFRAMES&&g.push(k.instantiate({material:"polygon"===d.type?this._wireframeRingMaterial:this._wireframeLineMaterial}));null!=this._markerMaterial&&g.push(k.instantiate({material:this._markerMaterial}))}if(0===g.length)return null;a=new Q.Object3D({geometries:g,castShadow:!1,layerUid:this._context.layer.uid,graphicUid:c});g=new N.Graphics3DObject3DGraphicLayer(this,
a,g,null,null,L.sharedGeometryElevationAligner,b);g.alignedSampledElevation=h.sampledElevation;g.needsElevationUpdates=p.needsElevationUpdates2D(b.mode);return g}_createGeometry(a,b,c,d,e,g,l){g=g===z.DRAPED?{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper}:null;e="polygon"===e;const h=this._fastUpdates?.visualVariables.color,n=this._fastUpdates?.visualVariables.size,k=this._fastUpdates?.visualVariables.opacity;l=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:l,
layerUid:this._context.layer.uid});b={position:c,size:n?null:this._getDrivenSize(b.renderingInfo),color:h?null:this._getDrivenColor(b.renderingInfo),sizeFeature:n?r.getAttributeValue(n.field,b.graphic):null,colorFeature:h?r.getAttributeValue(h.field,b.graphic):null,opacityFeature:k?r.getAttributeValue(k.field,b.graphic):null};return P.createGeometry(a,{overlayInfo:g,removeDuplicateStartEnd:e,mapPositions:d,attributeData:b},l)}_createAsOverlay(a,b){const c=a.graphic,d=G(c.geometry);var e="polygon"===
d.type?d.rings:d.paths;const g="polygon"===d.type?this._ringMaterial:this._lineMaterial;g.renderPriority=this._renderPriority;const l=C.debugFlags.LINE_WIREFRAMES?"polygon"===d.type?this._wireframeRingMaterial:this._wireframeLineMaterial:null,h=this._markerMaterial;null!=l&&(l.renderPriority=this._renderPriority-.001);null!=h&&(h.renderPriority=this._renderPriority-.002);const n=[],k=m.create(),I=m.empty();var q=F.geometryToRenderInfoDraped(d,this._context.overlaySR);this._logGeometryCreationWarnings(q,
e,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");for(const u of q.lines)m.empty(k),m.expandWithBuffer(k,u.position),m.intersectsClippingArea(k,this._context.clippingExtent)&&(m.expandWithAABB(I,k),e=v=>{v=this._createGeometry(v,a,u.position,void 0,d.type,z.DRAPED,c.uid);v=new R.RenderGeometry(v,{layerUid:b,graphicUid:c.uid});n.push(v)},null!=h&&(e(h),q=this.symbolLayer.marker.placement,"begin"!==q&&"begin-end"!==q||m.expandWithBuffer(k,u.position,0,1),"end"!==q&&"begin-end"!==q||m.expandWithBuffer(k,
u.position,u.position.length-3,1)),e(g),C.debugFlags.LINE_WIREFRAMES&&e(l));return new M.Graphics3DDrapedGraphicLayer(this,n,I,this._context.drapeSourceRenderer)}get _patternHidesLine(){const a=this.symbolLayer.pattern;return null!=a&&"style"===a.type&&"none"===a.style}_computeMaterialWidth(a){a=a??t.px2pt(1);return this._drivenProperties.size?this._fastUpdates?.visualVariables.size?t.pt2px(1):1:t.pt2px(a)}_prepareMaterialPatch(a,b,c){var d=b.material;null==d?c.changed&&c.useMaterialColor&&y(this._getCombinedOpacityAndColor(this._materialColor),
this._materials[f.Marker],a):"collection"!==d.type&&(d=this._getCombinedOpacityAndColor("complete"===d.type?d.newValue?.color:"complete"===d.diff.color?.type?d.diff.color.newValue:null),c.useMaterialColor&&y(A.clone(d),this._materials[f.Marker],a),this._patternHidesLine&&(d[3]=0),y(d,this._materials[f.Line],a),delete b.material)}_prepareMarkerPatch(a,b){const c=b.marker,d=this._markerMaterial;if(null==c||"partial"!==c.type||null==c.diff||null!=c.diff.placement||null!=c.diff.style&&"complete"!==c.diff.style.type||
null!=c.diff.color&&"complete"!==c.diff.color.type||null==d)return{changed:!1,useMaterialColor:null==this._markerColor};var e=c.diff.color;const g=null!=e;e=g?e.newValue:null;const l=null==e&&null==this._markerColor;e&&y(this._getCombinedOpacityAndColor(e),d,a);const h=c.diff.style?.newValue;h&&a.symbolLayerStatePatches.push(()=>d.setParameters({markerPrimitive:w.parseLineMarkerStyle(h)}));delete b.marker;return{changed:g,useMaterialColor:l}}}D.elevationModeChangeTypes={definedChanged:p.SymbolUpdateType.RECREATE,
staysOnTheGround:p.SymbolUpdateType.NONE,onTheGroundChanged:p.SymbolUpdateType.RECREATE};var z;(function(a){a[a.DRAPED=0]="DRAPED";a[a.ELEVATED=1]="ELEVATED"})(z||={});var f;(function(a){a[a.Line=0]="Line";a[a.Ring=1]="Ring";a[a.LineWireframe=2]="LineWireframe";a[a.RingWireframe=3]="RingWireframe";a[a.Marker=4]="Marker"})(f||={});E.Graphics3DLineSymbolLayer=D;Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});