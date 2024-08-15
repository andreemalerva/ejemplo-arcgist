/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/Logger.js";import"../../core/lang.js";import"../../core/Error.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import t from"../Features/FeaturesViewModel.js";import"../../config.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../core/accessorSupport/decorators/property.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/ReactiveSet.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/geometryUtils2.js";import"../../chunks/scaleUtils.js";import"../../layers/Layer.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/LayerConstants.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils11.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/webStyleSymbolUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/styleUtils.js";import"../../chunks/layerViewUtils.js";import"../Feature/FeatureViewModel.js";import"../../chunks/throttle.js";import"../Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../chunks/featureUtils.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils8.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils9.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/Version.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/OverrideHelper.js";import"../../chunks/quantizationUtils.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../chunks/layerContainerType.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DatePickerInput.js";import"../../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/elements/inputs/TimePickerInput.js";import"../../form/elements/RelationshipElement.js";import"../../form/elements/TextElement.js";import"../../chunks/formUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/editsZScale.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/mixins/BlendLayer.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../chunks/EditBusLayer.js";import"../../chunks/uuid.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../layers/mixins/FeatureLayerBase.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/commonProperties2.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/featureLayerUtils.js";import"../../chunks/featureQueryAll.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/serviceCapabilitiesUtils.js";import"../../layers/support/Subtype.js";import"../../layers/mixins/FeatureReductionLayer.js";import"../../layers/support/AggregateField.js";import"../../layers/support/ExpressionInfo.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../chunks/clusterUtils.js";import"../../chunks/MD5.js";import"../../layers/mixins/OperationalLayer.js";import"../../layers/mixins/OrderedLayer.js";import"../../chunks/OrderByInfo.js";import"../../layers/mixins/PortalLayer.js";import"../../chunks/portalItemUtils.js";import"../../layers/mixins/PublishableLayer.js";import"../../layers/support/PublishingInfo.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../chunks/labelingInfo.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils2.js";import"../../support/popupUtils.js";import"../../chunks/interfaces2.js";import"../../chunks/globalCss.js";import"../../chunks/FeatureRelationshipViewModel.js";import"../../chunks/featureFormUtils.js";import"../../chunks/actions.js";import"../../chunks/legacyIcon.js";import"../../chunks/AnchorElementViewModel.js";import"../support/GoTo.js";let o=class extends t{constructor(s){super(s)}};o=s([r("esri.widgets.Popup.PopupViewModel")],o);const e=o;export{e as default};
