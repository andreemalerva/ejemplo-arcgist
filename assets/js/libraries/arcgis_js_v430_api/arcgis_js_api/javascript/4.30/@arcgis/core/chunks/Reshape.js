/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../geometry.js";import e from"../Graphic.js";import{c as i}from"./asyncUtils.js";import o from"../core/Collection.js";import s from"../core/Error.js";import r from"../core/Evented.js";import{L as p}from"./Logger.js";import{d as n,b as a,a as l}from"./maybe.js";import{watch as c,syncAndInitial as h,sync as m,when as d,initial as y}from"../core/reactiveUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as v}from"../core/accessorSupport/decorators/subclass.js";import{j as g,h as j,e as _}from"./coordsUtils.js";import f from"../layers/GraphicsLayer.js";import b from"../symbols/SimpleMarkerSymbol.js";import{V as x}from"./ViewingMode.js";import{S}from"./SnappingVisualizer2D.js";import{c as G}from"./drawUtils.js";import M from"./GraphicMover.js";import V from"../views/draw/support/HighlightHelper.js";import{a as w}from"./layerUtils.js";import{h as I}from"./handleUtils.js";import{z as E}from"./quantityUtils.js";import{c as T}from"./screenUtils.js";import U from"../geometry/Point.js";import{c as k,b as C,g as O,e as L}from"./automaticAreaMeasurementUtils.js";import{M as R,S as D}from"./SelectedVertexTooltipInfo.js";import{T as A}from"./TranslateTooltipInfo.js";import{S as H,T as P}from"./Tooltip.js";import{c as F,a as z}from"./automaticLengthMeasurementUtils.js";import{d as B}from"./euclideanLengthMeasurementUtils.js";import{s as Z}from"./settings3.js";import{V as q}from"./InputManager.js";import{c as W,E as N}from"./EditGeometryOperations.js";import{s as Q}from"./keybindings.js";import{S as J}from"./isSupportedObject.js";import{S as X}from"./SnappingContext.js";import Y from"../geometry/Polyline.js";import"./ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./metadata.js";import"./utils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../config.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./Axis.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./GraphicsCollection.js";import"../layers/Layer.js";import"../TimeExtent.js";import"./timeUtils.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./vec2.js";import"./vec2f64.js";import"./enums2.js";import"./normalizedPoint.js";import"./dehydratedPoint.js";import"./elevationInfoUtils.js";import"./Settings2.js";import"./SnappingVisualizer.js";import"./RightAngleSnappingHint.js";import"./PointSnappingHint.js";import"./GraphicManipulator.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./projectPointToVector.js";import"./defaults.js";import"./defaultsJSON.js";import"./drapedUtils.js";import"./screenUtils2.js";import"./layerViewUtils.js";import"./featureUtils.js";import"./layerUtils2.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./Queue.js";import"../core/signal.js";import"../geometry/coordinateFormatter.js";import"../geometry/support/MeshTransform.js";import"./mat4f64.js";import"./quat.js";import"./vec4.js";import"./quatf64.js";import"./axisAngleDegrees.js";import"./vec4f64.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"./angularMeasurementUtils.js";import"./Cyclical.js";import"./projectVectorToVector.js";import"../geometry/support/geodesicUtils.js";import"./uuid.js";import"./quantityFormatUtils.js";import"./unitFormatUtils.js";import"./ByteSizeUnit.js";import"./viewUtils.js";import"../geometry/geometryEngine.js";import"./geometryEngineBase.js";import"./hydrated.js";import"./euclideanAreaMeasurementUtils.js";import"./earcut.js";import"./plane.js";import"./mat3f64.js";import"./mathUtils2.js";import"./triangle.js";import"./ray.js";import"./lineSegment.js";import"./geodesicAreaMeasurementUtils.js";import"./themeUtils.js";import"../widgets/Widget.js";import"./domUtils.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./jsxFactory.js";import"./a11yUtils.js";import"./memoize.js";import"./getDefaultUnitForView.js";import"./messageBundle.js";import"./directionModeIcons.js";import"./spatialReferenceEllipsoidUtils.js";import"./compilerUtils.js";import"./geometry2dUtils.js";import"../views/interactive/sketch/SketchLabelOptions.js";import"../views/interactive/sketch/SketchTooltipOptions.js";import"./SketchTooltipVisibleElements.js";import"../views/interactive/sketch/SketchValueOptions.js";let K=class extends H{constructor(t){super(t),this.type="translate-vertex",this.distance=E,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=E,this.elevation=null,this.area=null,this.totalLength=null}};function $(t,e){let i=!1;function o(){const t=e(),i=t.sketchOptions.tooltips.effectiveEnabled?t.activeTooltipInfo:null;return{...t,activeTooltipInfo:i}}return I([c((()=>{const t=o();return{context:t,geometry:t.graphic?.geometry,vertexGeometry:t.selectedVertex?.geometry}}),(({context:e})=>{i=!0,function(t){const e=t.activeTooltipInfo;if(e){switch(e?.type){case"move-point":return function(t,{graphic:e}){tt(t,e,e?.geometry)}(e,t);case"selected-vertex":return function(t,{graphic:e,selectedVertex:i}){tt(t,e,i?.geometry);const o=e?.geometry;switch(o?.type){case"polygon":t.geometryType="polygon",t.totalLength.visible=!1,t.area.actual=C(o);break;case"polyline":t.geometryType="polyline",t.totalLength.actual=F(o),t.area.visible=!1}}(e,t)}e.sketchOptions=t.sketchOptions}}(e),t.info=e.activeTooltipInfo,i=!1}),h),c((()=>{const t=o(),{activeTooltipInfo:e}=t;if(e&&"key"in e)return{context:t,key:e.key}}),((t,e)=>{t&&!i&&e&&t.key!==e.key&&function(t){function e(e,i){const o=i?.geometry;if(!o||"point"!==o.type)return;const{dx:s,dy:r,dz:p}=O(e,o);if(0===s&&0===r&&0===p)return;const{x:n,y:a,z:l,m:c,spatialReference:h}=o,m=new U({x:n+s,y:a+r,z:null!=l?l+p:void 0,m:c,spatialReference:h});t.updateGeometry(i,m,o,s,r)}const{activeTooltipInfo:i,graphic:o,selectedVertex:s}=t;switch(i?.type){case"move-point":return e(i,o);case"selected-vertex":e(i,s)}}(t.context)}),m),k(t)])}function tt(t,e,i){e&&"point"===i?.type&&(t.setLocationFromPoint(i),t.elevation.actual=B(i),t.elevation.visible=!!e.geometry?.hasZ,t.elevation.readOnly=!1,t.elevation.showAsZ=!0)}function et(t,e,i){if(!i)return;const{x:o,y:s}=i.origin,r=e.toMap(i),p=e.toMap(T(o,s)),n=z(p,r);t.distance=null!=n?n:E}t([u()],K.prototype,"type",void 0),t([u()],K.prototype,"distance",void 0),t([u()],K.prototype,"elevation",void 0),t([u()],K.prototype,"area",void 0),t([u()],K.prototype,"totalLength",void 0),K=t([v("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],K);class it{constructor(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape-start"}}class ot{constructor(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape"}}class st{constructor(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape-stop"}}class rt{constructor(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move-start"}}class pt{constructor(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move"}}class nt{constructor(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move-stop"}}class at{constructor(t){this.added=t,this.type="vertex-select"}}class lt{constructor(t){this.removed=t,this.type="vertex-deselect"}}class ct{constructor(t,e,i,o){this.added=t,this.graphic=e,this.oldGraphic=i,this.vertices=o,this.type="vertex-add"}}class ht{constructor(t,e,i,o){this.removed=t,this.graphic=e,this.oldGraphic=i,this.vertices=o,this.type="vertex-remove"}}const mt=Z.reshapeGraphics,dt={vertices:{default:new b({style:"circle",size:mt.vertex.size,color:mt.vertex.color,outline:{color:mt.vertex.outlineColor,width:1}}),hover:new b({style:"circle",size:mt.vertex.hoverSize,color:mt.vertex.hoverColor,outline:{color:mt.vertex.hoverOutlineColor,width:1}}),selected:new b({style:"circle",size:mt.selected.size,color:mt.selected.color,outline:{color:mt.selected.outlineColor,width:1}})},midpoints:{default:new b({style:"circle",size:mt.midpoint.size,color:mt.midpoint.color,outline:{color:mt.midpoint.outlineColor,width:1}}),hover:new b({style:"circle",size:mt.midpoint.size,color:mt.midpoint.color,outline:{color:mt.midpoint.outlineColor,width:1}})}};let yt=class extends r.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingGraphicsLayer=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this.activeTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new o,this.midpointSymbol=new b({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=new o,this.snappingManager=null,this.symbols=dt,this.sketchOptions=new J,this.type="reshape",this.vertexGraphics=new o,this.view=null}initialize(){const t=this.view;this._highlightHelper=new V({view:t}),this._setup(),this.tooltip=new P({view:this.view}),this.tooltipInfos=function(t){const e={sketchOptions:t,viewType:"2d"};return{movePoint:new R(e),selectedVertex:new D(e),translateGraphic:new A(e),translateVertices:new K(e)}}(this.sketchOptions),this.addHandles([d((()=>t?.ready),(()=>{const{layer:t,view:e}=this;w(e,t),this.addHandles(e.on("key-down",(t=>this._keyDownHandler(t)),q.TOOL))}),{once:!0,initial:!0}),c((()=>this.graphic),(()=>this.refresh())),c((()=>this.layer),((t,e)=>{e&&(this._clearSelection(),this._resetGraphics(e)),this.refresh()})),c((()=>this.enableMidpoints),(()=>this.refresh())),$(this.tooltip,(()=>this._tooltipsContext)),c((()=>this.view.effectiveTheme.accentColor),(()=>this._updateSymbolsForTheme()),y)]),this._updateTooltip()}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this.tooltip=n(this.tooltip)}get _coordinateHelper(){return this._editGeometryOperations?.data.coordinateHelper??W(!!this.graphic.geometry?.hasZ,!!this.graphic.geometry?.hasM,this.view.spatialReference)}get _selectedVertex(){return 1===this.selectedVertices.length?this.selectedVertices.at(0):void 0}get _tooltipsContext(){return{sketchOptions:this.sketchOptions,activeTooltipInfo:this.activeTooltipInfo,graphic:this.graphic,selectedVertex:this._selectedVertex,updateGeometry:(t,e,i,o,s)=>{this._setUpGeometryHelper();const r=t===this.graphic;if(r?this._emitMoveStartEvent(0,0):this._emitReshapeStartEvent(t),this._syncGeometryAfterVertexMove(t,e,o,s,!0),r){const{view:t}=this,o=t.toScreen(i),s=t.toScreen(e),r=(s?.x??0)-(o?.x??0),p=(s?.y??0)-(o?.y??0);this._emitMoveEvent(r,p),this._emitMoveStopEvent(r,p)}else this._emitReshapeEvent(t),this._emitReshapeStopEvent(t);this._editGeometryOperations=n(this._editGeometryOperations)}}}set highlightsEnabled(t){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=this.view.ready,e=!(!this.graphic||!this.layer);return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){const{selectedVertices:t}=this;t.length&&this._removeVertices(t)}_setup(){const{graphic:t,layer:e}=this;if(!e||null==t?.geometry)return;const i=t.geometry;"mesh"!==i.type&&"extent"!==i.type?("polygon"===i.type&&g(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper?.add(this.graphic)}_setUpGeometryHelper(){const t=this.graphic.geometry;if(null==t||"mesh"===t.type||"extent"===t.type)return void this._logGeometryTypeError();const e="multipoint"===t.type?new Y({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=N.fromGeometry(e,x.Local)}_saveSnappingContextForHandle(t,e){this._snappingGraphicsLayer=new f({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer);const i=this._editGeometryOperations;a(i),this._snappingContext=new X({editGeometryOperations:i,elevationInfo:{mode:"on-the-ground",offset:0},pointer:e.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new S(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){this._clearSelection(),this._highlightHelper?.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){null!=this.snappingManager&&this.snappingManager.doneSnapping(),null!=this._snappingGraphicsLayer&&(this.view?.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=n(this._editGeometryOperations),this._snappingTask=l(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this.selectedVertices.removeAll(),this._updateTooltip()}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach((t=>t.destroy())),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach((t=>t.destroy())),this.vertexGraphics.removeAll()}_setupGraphics(){const t=this.graphic.geometry;if(null!=t&&("polyline"===t.type||"polygon"===t.type)){const e=ut(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:i,symbols:o}=this,s=[];return t?.forEach(((t,r)=>{t.forEach(((t,p)=>{s.push(new e({geometry:this._coordinateHelper.arrayToPoint(t),symbol:o?.vertices?.default,attributes:{...i,pathIndex:r,pointIndex:p}}))}))})),s}_createMidpointGraphics(t){const{_graphicAttributes:i,symbols:o}=this,s=[];for(let r=0;r<t.length;r++){const p=t[r];for(let t=0;t<p.length;t++){const n=(t+1)%p.length;if("polyline"===this.graphic.geometry?.type&&0===n)continue;const a=p[t],l=p[n],c=this._getMidpoint(a,l);s.push(new e({geometry:c,symbol:o.midpoints.default,attributes:{...i,pathIndex:r,pointIndexStart:t,pointIndexEnd:n}}))}}return s}_updateSymbolsForTheme(){const t=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",t),hover:this.symbols.vertices.hover?.clone().set("color",t)},midpoints:{...this.symbols.midpoints}};for(const t of this.vertexGraphics)this._isSelected(t)?t.symbol=this.symbols.vertices.selected:this._hoverGraphic===t?t.symbol=this.symbols.vertices.hover:t.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map((({geometry:t})=>({x:t.x,y:t.y})));for(let i=0;i<e.length;i++){const o=[];for(let t=0;t<e.length;t++){if(i===t)continue;const s=e[i],r=e[t];s.x===r.x&&s.y===r.y&&o.push(t)}t[i].attributes.relatedGraphicIndices=o}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:o,view:s}=this,r=o.concat(i).items;t&&r.push(e),this._mover=new M({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:s,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick?.(t);else if(this._isMidpoint(e)){if(2===t.viewEvent.button)return;const i=this.graphic.clone(),o=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],i,o)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),2===t.viewEvent.button?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:o}=t,s=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:s?"move":"reshape",totalDx:i,totalDy:o}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:o}=t;if(o===this.graphic){const{geometry:s}=o;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(null!=s&&"point"===s.type&&this._onHandleMove(o,e,i,t,(()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)})))}if(!this.selectedVertices.includes(o)){if(this._clearSelection(),this._isMidpoint(o)){const t=this.graphic.clone(),e=this._createVertexFromMidpoint(o);this._emitVertexAddEvent([o],t,e)}this._addToSelection(o)}this._setUpOperation(t),this._emitReshapeStartEvent(o),this._onHandleMove(o,e,i,t,(()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)}))}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:o,graphic:s}=t;e.totalDx+=i,e.totalDy+=o;const{operationType:r}=e,{geometry:p}=s;if(null!=p)if("move"!==r)this._onHandleMove(s,i,o,t,(()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)}));else if("point"===p.type)this._onHandleMove(s,i,o,t,(()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,o)}));else if("polyline"===p.type||"polygon"===p.type){const e=ut(p);this._updateVertexGraphicLocations(e),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,o)}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:o,graphic:s}=t,{operationType:r}=e;e.totalDx+=i,e.totalDy+=o,this._onHandleMove(s,i,o,t,(()=>"move"===r?this._emitMoveStopEvent():this._emitReshapeStopEvent(s))),this._isMidpoint(s)?this.refresh():(this._updateTooltip(this._isVertex(s)?s:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const{_coordinateHelper:e}=this;for(const i of this.vertexGraphics){const{pathIndex:o,pointIndex:s}=i.attributes;i.geometry=e.arrayToPoint(t[o][s])}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:o,pointIndexEnd:s}=e.attributes,r=t[i];e.geometry=this._getMidpoint(r[o],r[s])}}_getMidpoint(t,e){const{_coordinateHelper:i}=this,o=i.arrayToVector(t),s=i.arrayToVector(e),r=i.toXYZ(o),p=i.toXYZ(s),[n,a,l]=j(r,p),c=i.hasM()?0:void 0;return new U({x:n,y:a,z:l,m:c,spatialReference:i.spatialReference})}_getVertexFromEditGeometry(t){const[e,i]=vt(t);return a(this._editGeometryOperations),this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,o,s,r){l(this._snappingTask);const p=this._snappingContext;if(!p)return;const n=t.geometry,a="graphic-move-stop"===s.type;if(null!=this.snappingManager&&this.selectedVertices.length<2&&!a){const s=this.snappingManager;this._stagedVertex=s.update({point:n,context:p}),this._syncGeometryAfterVertexMove(t,new U(this._stagedVertex),e,o,a),r(),this._snappingTask=i((async i=>{const l=await s.snap({point:n,context:p,signal:i});l.valid&&(this._stagedVertex=l.apply(),this._syncGeometryAfterVertexMove(t,new U(this._stagedVertex),e,o,a),r())}))}else{const i=null!=this._stagedVertex?new U(this._stagedVertex):n;this._syncGeometryAfterVertexMove(t,i,e,o,a),r()}}_syncGeometryAfterVertexMove(t,e,i,o,s=!1){const r=this._editGeometryOperations?.data.geometry;if(r)if("point"===r.type)t.geometry=e;else if("mesh"===r.type)t.geometry=r.centerAt(e);else{const{_coordinateHelper:p}=this,[n,a]=vt(t);let l=_(r);const c=l[n].length-1,h=p.pointToArray(e);l[n][a]=h,"polygon"===r.type&&(0===a?l[n][c]=h:a===c&&(l[n][0]=h)),this._isVertex(t)&&(l=this._moveRelatedCoordinates(l,t,h),l=this._moveSelectedHandleCoordinates(l,t,i,o,"polygon"===r.type),this._updateMidpointGraphicLocations(l)),this.graphic.geometry=r.clone();const m=p.pointToVector(e),d=this._getVertexFromEditGeometry(t),y=p.getZ(m),u=m[0]-d.pos[0],v=m[1]-d.pos[1],g=null!=y?y-d.pos[2]:0;this._editGeometryOperations?.moveVertices([d],u,v,g),s&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i){const{relatedGraphicIndices:o}=e.attributes;for(const s of o){const o=this.vertexGraphics.at(s),{pathIndex:r,pointIndex:p}=o.attributes;t[r][p]=i,o.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,o,s){for(const r of this.selectedVertices)if(r!==e){const{pathIndex:e,pointIndex:p,relatedGraphicIndices:n}=r.attributes,a=G(r.geometry,i,o,this.view),l=_(a),c=t[e].length-1;t[e][p]=l,r.geometry=a,s&&(0===p?t[e][c]=l:p===c&&(t[e][0]=l));for(const e of n){const i=this.vertexGraphics.at(e),{pathIndex:o,pointIndex:s}=i.attributes;t[o][s]=l,i.geometry=a}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._hoverGraphic=e;const i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._hoverGraphic=null,this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,o=i.geometry;if(null==o||"polygon"!==o.type&&"polyline"!==o.type)return[];const s=o.clone(),r=[],{pathIndex:p,pointIndexStart:n,pointIndexEnd:a}=t.attributes,l=_(t.geometry),c=0===a?n+1:a,h=_(s);return h[p].splice(c,0,l),t.attributes={...e,pathIndex:p,pointIndex:c,relatedGraphicIndices:[]},r.push({coordinates:h[p][c],componentIndex:p,vertexIndex:c}),this.graphic.geometry=s,r}_addToSelection(t){t.symbol=this.symbols.vertices.selected,this.selectedVertices.add(t),this._emitSelectEvent([t]),this._updateTooltip(t)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,o=e?i.hover:i.default;this.selectedVertices.remove(t),t.symbol=o,this._emitDeselectEvent([t]),this._updateTooltip()}_clearSelection(){const t=this.selectedVertices.toArray();if(t.length>0){for(const e of t)e.set("symbol",this.symbols.vertices.default);this.selectedVertices.removeAll(),this._emitDeselectEvent(t),this._updateTooltip()}}_keyDownHandler(t){null==this._activeOperationInfo&&L(t,this.tooltip)||Q.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const i=this.graphic.geometry;if(null==i||"polygon"!==i.type&&"polyline"!==i.type)return;if("polygon"===i.type&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;const o=this.graphic.clone(),s=i.clone();let r=_(s);const p=[],n=function(t){return t instanceof e?[t]:[...t]}(t);for(const t of n){const{x:e,y:i}=t.geometry;for(let t=0;t<r.length;t++){const o=r[t];for(let s=0;s<o.length;s++){const[n,a]=o[s];e===n&&i===a&&(p.push({coordinates:r[t][s],componentIndex:t,vertexIndex:s}),r[t].splice(Number(s),1))}}}if("polygon"===s.type)r=r.filter((t=>{if(t.length<2)return!1;const[e,i]=t[0],[o,s]=t[t.length-1];return(2!==t.length||e!==o||i!==s)&&(e===o&&i===s||t.push(t[0]),!0)})),s.rings=r;else{for(const t of r)1===t.length&&r.splice(r.indexOf(t),1);s.paths=r}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(n,o,p)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){let i=null;const{graphic:o,view:s,tooltipInfos:r}=this,p=o?.geometry;"point"===p?.type?i=r.movePoint:this._selectedVertex?i=r.selectedVertex:t===this.graphic?(i=r.translateGraphic,function(t,e,i){t.clear(),et(t,e,i)}(i,s,e)):t&&this.selectedVertices.length>1&&(i=r.translateVertices,function(t,e,i,o){t.clear(),"polygon"===i?.type?t.area=C(i):"polyline"===i?.type&&(t.totalLength=F(i)),et(t,e,o)}(i,s,p,e)),this.activeTooltipInfo=i}_emitMoveStartEvent(t,e){const i=new rt(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart?.(i)}_emitMoveEvent(t,e){const i=new pt(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove?.(i)}_emitMoveStopEvent(t,e){if(null==t||null==e){const i=this._activeOperationInfo;if(!i)return;t=i.totalDx,e=i.totalDy}const i=new nt(this.graphic,t,e);this.emit("move-stop",i),this.callbacks.onMoveStop?.(i)}_emitReshapeStartEvent(t){const e=new it(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-start",e),this.callbacks.onReshapeStart?.(e)}_emitReshapeEvent(t){const e=new ot(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape",e),this.callbacks.onReshape?.(e)}_emitReshapeStopEvent(t){const e=new st(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-stop",e),this.callbacks.onReshapeStop?.(e)}_emitSelectEvent(t){const e=new at(t);this.emit("select",e),this.callbacks.onVertexSelect?.(e)}_emitDeselectEvent(t){const e=new lt(t);this.emit("deselect",e),this.callbacks.onVertexDeselect?.(e)}_emitVertexAddEvent(t,e,i){const o=new ct(t,this.graphic,e,i);this.emit("vertex-add",o),this.callbacks.onVertexAdd?.(o)}_emitVertexRemoveEvent(t,e,i){const o=new ht(t,this.graphic,e,i);this.emit("vertex-remove",o),this.callbacks.onVertexRemove?.(o)}_logGeometryTypeError(){p.getLogger(this).error(new s("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};function ut(t){const e=_(t.clone());if("polygon"===t.type)for(const t of e){const e=t[t.length-1];t[0][0]===e[0]&&t[0][1]===e[1]&&t.length>2&&t.pop()}return e}function vt({attributes:t}){return[t?.pathIndex||0,t?.pointIndex||0]}t([u()],yt.prototype,"_activeOperationInfo",void 0),t([u()],yt.prototype,"_coordinateHelper",null),t([u()],yt.prototype,"_editGeometryOperations",void 0),t([u()],yt.prototype,"tooltip",void 0),t([u()],yt.prototype,"tooltipInfos",void 0),t([u()],yt.prototype,"activeTooltipInfo",void 0),t([u()],yt.prototype,"_selectedVertex",null),t([u()],yt.prototype,"_tooltipsContext",null),t([u()],yt.prototype,"callbacks",void 0),t([u()],yt.prototype,"enableMidpoints",void 0),t([u()],yt.prototype,"enableMovement",void 0),t([u()],yt.prototype,"enableVertices",void 0),t([u()],yt.prototype,"graphic",void 0),t([u({value:!0})],yt.prototype,"highlightsEnabled",null),t([u()],yt.prototype,"layer",void 0),t([u({readOnly:!0})],yt.prototype,"midpointGraphics",void 0),t([u()],yt.prototype,"midpointSymbol",void 0),t([u({readOnly:!0})],yt.prototype,"selectedVertices",void 0),t([u()],yt.prototype,"snappingManager",void 0),t([u({readOnly:!0})],yt.prototype,"state",null),t([u()],yt.prototype,"symbols",void 0),t([u({type:J})],yt.prototype,"sketchOptions",void 0),t([u({readOnly:!0})],yt.prototype,"type",void 0),t([u({readOnly:!0})],yt.prototype,"vertexGraphics",void 0),t([u()],yt.prototype,"view",void 0),yt=t([v("esri.views.draw.support.Reshape")],yt);const gt=yt;export{gt as default};
