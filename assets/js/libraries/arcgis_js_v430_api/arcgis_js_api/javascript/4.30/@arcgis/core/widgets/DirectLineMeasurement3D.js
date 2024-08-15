/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./Widget.js";import r from"./DirectLineMeasurement3D/DirectLineMeasurement3DViewModel.js";import{g as n}from"../chunks/globalCss.js";import{M as p}from"../chunks/MeasurementWidgetContent.js";import"../chunks/widgetUtils.js";import{m}from"../chunks/messageBundle.js";import{t as l}from"../chunks/jsxFactory.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../analysis/DirectLineMeasurementAnalysis.js";import"../chunks/Analysis.js";import"../core/Clonable.js";import"../core/Identifiable.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/defaultUnit.js";import"../chunks/getDefaultUnitForView.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../geometry/Extent.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/memoize.js";import"../chunks/UpdatingHandles.js";import"../chunks/hydratedFeatures.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/dehydratedPoint.js";import"../chunks/measurementUtils.js";import"../chunks/sphere.js";import"../chunks/mat4.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/ray.js";import"../chunks/plane.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/geodesicAreaMeasurementUtils.js";import"../chunks/quantityUtils.js";import"../geometry/geometryEngine.js";import"../chunks/geometryEngineBase.js";import"../chunks/_commonjsHelpers.js";import"../chunks/hydrated.js";import"../geometry/support/geodesicUtils.js";import"../chunks/geodesicConstants.js";import"../chunks/viewUtils.js";import"../chunks/vec2.js";import"../chunks/elevationInfoUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/SnappingVisualizer3D.js";import"../chunks/colorUtils2.js";import"../chunks/projectVectorToVector.js";import"../chunks/projectBuffer.js";import"../chunks/projectPointToVector.js";import"../geometry/projection.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/ExtendedLineVisualElement.js";import"../chunks/vec4f32.js";import"../chunks/frustum.js";import"../chunks/lineSegment.js";import"../chunks/EngineVisualElement.js";import"../chunks/RenderGeometry.js";import"../chunks/ViewingMode.js";import"../chunks/debugFlags2.js";import"../chunks/IntegerPassUniform.js";import"../chunks/compilerUtils.js";import"../chunks/NormalAttribute.glsl.js";import"../chunks/Matrix4PassUniform.js";import"../chunks/interfaces3.js";import"../chunks/BindType.js";import"../chunks/VertexAttribute.js";import"../chunks/VertexPosition.glsl.js";import"../chunks/Matrix3DrawUniform.js";import"../chunks/StencilUtils.js";import"../chunks/Indices.js";import"../chunks/basicInterfaces.js";import"../chunks/Util.js";import"../chunks/Material.js";import"../chunks/triangle.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/mat3.js";import"../chunks/ShaderTechniqueConfiguration.js";import"../chunks/requestImageUtils.js";import"../chunks/enums.js";import"../chunks/Texture.js";import"../chunks/GLObjectType.js";import"../chunks/renderState.js";import"../views/3d/webgl/RenderCamera.js";import"../chunks/axisAngleDegrees.js";import"../chunks/quat.js";import"../chunks/weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"../chunks/Scheduler.js";import"../core/signal.js";import"../chunks/debugFlags.js";import"../chunks/ScreenSpacePass.glsl.js";import"../chunks/Float4DrawUniform.js";import"../chunks/NestedMap.js";import"../chunks/VertexArrayObject2.js";import"../chunks/VertexArrayObject.js";import"../chunks/Attribute.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/Octree.js";import"../chunks/InterleavedLayout.js";import"../chunks/BufferView.js";import"../chunks/types.js";import"../chunks/floatRGBA.js";import"../chunks/Intersector.js";import"../chunks/Intersector2.js";import"../chunks/boundedPlane.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/orientedBoundingBox.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/glUtil.js";import"../chunks/VertexElementDescriptor.js";import"../chunks/MemCache.js";import"../chunks/BufferObject.js";import"../chunks/VisualElement.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/DoubleArray.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/GeometryUtil.js";import"../chunks/vec3f32.js";import"../chunks/PointVisualElement.js";import"../chunks/Object3DVisualElement.js";import"../chunks/ElevationContext.js";import"../chunks/ElevationProvider.js";import"../chunks/HUDMaterial.js";import"../chunks/VerticalOffset.glsl.js";import"../chunks/GLTextureMaterial.js";import"../chunks/RayIntersections.js";import"../chunks/OutputHighlight.glsl.js";import"../chunks/RightAngleQuadVisualElement.js";import"../chunks/ColorMaterial.js";import"../chunks/TriangleMaterial.js";import"../chunks/normalizedPoint.js";import"../chunks/Settings2.js";import"../chunks/RightAngleSnappingHint.js";import"../chunks/snappingUtils.js";import"../chunks/geometry2dUtils.js";import"../chunks/timeUtils.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/keybindings.js";import"../chunks/utils6.js";import"../chunks/SnappingVisualizer.js";import"../chunks/PointSnappingHint.js";import"../chunks/dragEventPipeline3D.js";import"../chunks/ray2.js";import"../chunks/InteractiveToolBase.js";import"../chunks/meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../chunks/EditGeometryOperations.js";import"../chunks/interfaces.js";import"../chunks/interfaces4.js";import"../chunks/interfaces5.js";import"../chunks/RenderObject.js";import"../chunks/graphicUtils.js";import"../chunks/AnalysisToolBase.js";import"../chunks/SnappingContext.js";import"../chunks/SnappingDragPipelineStep.js";import"../chunks/dehydratedFeatureComparison.js";import"../chunks/SnappingManagerPool.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../views/interactive/snapping/SnappingOptions.js";import"../chunks/SnappingManager.js";import"../layers/support/FeatureFilter.js";import"../chunks/floorFilterUtils.js";import"../chunks/layerUtils2.js";import"../chunks/layerViewUtils.js";import"../chunks/Cyclical.js";import"../chunks/angularMeasurementUtils.js";import"../chunks/screenUtils2.js";import"../chunks/InteractiveAnalysisViewModel.js";import"../chunks/InteractiveToolViewModel.js";import"../chunks/UnitSelect.js";const u="esri-direct-line-measurement-3d",c={base:u,newMeasurementButton:`${u}__clear-button`};let a=class extends i{constructor(s,t){super(s,t),this.messages=null,this.messagesCommon=null,this.viewModel=new r}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}get visible(){return this.viewModel.visible}set visible(s){this.viewModel.visible=s}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(s){this.viewModel.analysis=s}get icon(){return"measure-line"}set icon(s){this._overrideIfSome("icon",s)}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(s){this.viewModel.unitOptions=s}get unit(){return this.viewModel.unit}set unit(s){this.viewModel.unit=s}render(){const{messages:s,messagesCommon:o,unit:e,unitOptions:i,viewModel:r}=this,{active:m,measurement:u,state:a,supported:h}=r;return l("div",{"aria-label":this.messages.widgetLabel,class:this.classes(c.base,n.widget,n.panel),key:this,role:"presentation"},this.visible?l(p,{active:m,measurementItems:[{key:"direct",title:s.direct,value:j(u?.directDistance)},{key:"horizontal",title:s.horizontal,value:j(u?.horizontalDistance)},{key:"vertical",title:s.vertical,value:j(u?.verticalDistance)}],messages:{...s,notApplicable:o?.notApplicable},newMeasurementButtonClass:c.newMeasurementButton,state:a,supported:h,unit:e,unitOptions:i,onNewMeasurementClick:()=>{t(this.viewModel.start())},onUnitChange:s=>{this.unit=s}}):null)}};function j(s){return"available"===s?.state?s.text:null}s([o()],a.prototype,"view",null),s([o()],a.prototype,"visible",null),s([o()],a.prototype,"active",null),s([o({constructOnly:!0,nonNullable:!0})],a.prototype,"analysis",null),s([o()],a.prototype,"icon",null),s([o()],a.prototype,"label",null),s([o(),m("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],a.prototype,"messages",void 0),s([o(),m("esri/t9n/common")],a.prototype,"messagesCommon",void 0),s([o()],a.prototype,"uiStrings",void 0),s([o({type:r})],a.prototype,"viewModel",void 0),s([o()],a.prototype,"unitOptions",null),s([o()],a.prototype,"unit",null),a=s([e("esri.widgets.DirectLineMeasurement3D")],a);const h=a;export{h as default};
