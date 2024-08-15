/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{F as s}from"./FeatureLayerView2D.js";import{O as r}from"./OGCFeatureLayerView.js";import"../config.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../core/accessorSupport/decorators/property.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./compilerUtils.js";import"./EffectView.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"../layers/support/FeatureFilter.js";import"../TimeExtent.js";import"./timeUtils.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./layerUtils2.js";import"./timeSupport2.js";import"../support/timeUtils.js";import"./utils6.js";import"./tagSymbols.js";import"../rest/support/FeatureSet.js";import"./highlightReasons.js";import"./HighlightOptions.js";import"./LayerView2D.js";import"./Container.js";import"./mat3f32.js";import"./DisplayObject.js";import"./definitions.js";import"./enums.js";import"./Texture.js";import"./GLObjectType.js";import"./ClipRect.js";import"./layerViewUtils.js";import"./UpdatingHandles.js";import"./TechniqueInstance.js";import"./UpdateTracking2D.js";import"./BindType.js";import"./Util.js";import"./vec2f64.js";import"./vec4.js";import"./vec4f64.js";import"./Program.js";import"./BufferObject.js";import"./dataViewUtils.js";import"./enums2.js";import"./VertexElementDescriptor.js";import"./BoundingBox.js";import"./vec2f32.js";import"./ReactiveMap.js";import"./TileContainer.js";import"./WGLContainer.js";import"./VertexArrayObject.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./StyleDefinition.js";import"./config.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./TiledDisplayObject.js";import"./mat3.js";import"./TileKey2.js";import"./mat2df32.js";import"./mat2d.js";import"./vec3f32.js";import"./earcut.js";import"./vec2.js";import"./clippingUtils.js";import"./CircularArray.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"./Queue.js";import"../core/signal.js";import"./tileUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./arcgisLayerUrl.js";import"./featureReductionUtils.js";import"./lengthUtils.js";import"./sizeVariableUtils.js";import"./OrderByInfo.js";import"./labelingInfo.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../symbols/support/jsonUtils.js";import"./heatmapUtils.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./utils7.js";import"./shapingUtils.js";import"./Rect.js";import"./SDFHelper.js";import"./floatRGBA.js";import"./FeatureCommandQueue.js";import"./heatmapTextureUtils.js";import"./constants.js";import"./capabilities2.js";import"./contextUtils.js";import"./HighlightCounter.js";import"./FeatureLayerView.js";import"../layers/support/FeatureEffect.js";import"./jsonUtils.js";import"./floorFilterUtils.js";import"./popupUtils.js";import"../views/layers/LayerView.js";import"./RefreshableLayerView.js";let i=class extends(r(s)){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=t([o("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const p=i;export{p as default};
