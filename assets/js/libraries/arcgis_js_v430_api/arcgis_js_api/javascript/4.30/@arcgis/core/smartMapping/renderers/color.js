/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import e from"../../renderers/PointCloudRGBRenderer.js";import s from"../../renderers/PointCloudStretchRenderer.js";import"../../renderers/PointCloudUniqueValueRenderer.js";import o from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/Logger.js";import r from"../../core/Error.js";import{b as i}from"../../chunks/ensureType.js";import{f as t}from"../../chunks/messages.js";import{s as n}from"../../chunks/substitute.js";import l from"../../renderers/support/AuthoringInfo.js";import a from"../../renderers/support/AuthoringInfoVisualVariable.js";import{createColorStops as p,setLabelsForClassBreaks as m}from"../../renderers/support/utils.js";import u from"../../renderers/visualVariables/ColorVariable.js";import c from"../../renderers/visualVariables/support/ColorStop.js";import{V as d}from"../../renderers/visualVariables/VisualVariable.js";import{a as y}from"../../chunks/ageUnit.js";import{d as h,o as j,e as b,f,h as g,i as v,u as w,v as k,j as S,a as T,k as x,l as V,m as U,g as E,c as z,n as I,p as M,q as C,b as D}from"../../chunks/utils18.js";import R from"../heuristics/sizeRange.js";import{getAgeExpressions as P,verifyDates as F,supportedAgeUnits as O}from"../statistics/support/ageUtils.js";import{v as q}from"../../chunks/binningUtils.js";import{i as L,d as B,b as A}from"../../chunks/utils2.js";import{b as Q,f as G,c as H,g as W,L as J}from"../../chunks/layerUtils3.js";import{cloneScheme as N,getSchemes as Z,getSchemeById as $}from"../symbology/color.js";import"../../chunks/tslib.es6.js";import"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../chunks/LegendOptions.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/writer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/OverrideHelper.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/utils7.js";import"../../chunks/quantizationUtils.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/numberUtils.js";import"../../chunks/utils11.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/colorRampUtils2.js";import"../../chunks/utils14.js";import"../../chunks/timeUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../statistics/summaryStatisticsForAge.js";import"../statistics/summaryStatistics.js";import"../../chunks/utils12.js";import"../../chunks/utils10.js";import"../../chunks/generateRendererUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/executeQuery.js";import"../../chunks/infoFor3D.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils8.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils9.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/statsWorker.js";import"../../chunks/utils15.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils19.js";const _="high-to-low",K=2**53-1,X=5;function Y(e){const s={...e},o=!!s.symbolType?.includes("3d-volumetric");delete s.symbolType,delete s.defaultSymbolEnabled,delete s.colorMixMode,delete s.edgesType;const r=s;return r.worldScale=o,r}async function ee(e,s){let o=e.colorScheme,r=null,i=null;const{view:t}=e,n=await D(e.basemap,t);if(r=null!=n.basemapId?n.basemapId:null,i=null!=n.basemapTheme?n.basemapTheme:null,o)return{scheme:N(o),basemapId:r,basemapTheme:i};const l=e.theme||_,a=Z({theme:l,basemapTheme:i,geometryType:e.geometryType,worldScale:e.worldScale,view:t});if(a)if(r=a.basemapId,i=a.basemapTheme,e.schemeId){const s=l+"/"+r+"/"+e.schemeId;o=$({id:s,geometryType:e.geometryType})}else o=a.primaryScheme;return{scheme:o,basemapId:r,basemapTheme:i}}async function se(e,s,r,i,n,l,a){const p=await t("esri/smartMapping/t9n/smartMapping"),{field:m,defaultSymbolEnabled:u}=a,c=N(e.colorScheme),d=s?.opacity,y=[e.visualVariable.clone()];return s?.visualVariables?.length&&y.push(...s.visualVariables.map((e=>e.clone()))),r?.minSize&&y.push(r.minSize),{renderer:new o({classBreakInfos:[{minValue:-K,maxValue:K,symbol:I(l,{type:a.symbolType,color:c.noDataColor,size:M(c,l),outline:C(c,l,d),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}})}],defaultLabel:u?p.other:null,defaultSymbol:u?I(l,{type:a.symbolType,color:c.noDataColor,size:M(c,l),outline:C(c,l,d),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}):null,field:m,normalizationType:i,normalizationField:n,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,visualVariables:y,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:N(e.colorScheme),basemapId:e.basemapId,basemapTheme:e.basemapTheme}}async function oe(e){const s=await async function(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new r("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&q(e,"color-visual-variable");const s={...e},o=e.forBinning?Q:G,i=H(s.layer,o,e.forBinning);if(!i)throw new r("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+W(o).join(", "));s.layer=i;const t=null!=s.signal?{signal:s.signal}:null;if(await i.load(t),"mesh"!==i.geometryType&&s.worldScale&&(!s.view||"3d"!==s.view.type))throw new r("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");const n=await B({field:s.field,normalizationField:s.normalizationField,valueExpression:s.valueExpression}),l=k(i,n,"color-visual-variable:invalid-parameters");if(l)throw l;return s}(e),{view:o,field:t,valueExpression:n,minValue:p,maxValue:m,layer:y,normalizationField:j,signal:b,statistics:f}=s,g=j?"field":void 0,[v]=await Promise.all([f??h({layer:y,field:t,valueExpression:n,sqlExpression:s.sqlExpression,sqlWhere:s.sqlWhere,normalizationType:g,normalizationField:j,minValue:p,maxValue:m,view:o,signal:b})]),w=y,S=t&&"function"!=typeof t?w.getField(t):null;return async function(e,s,o,t){const{field:n,theme:p}=e,m=await ee({basemap:e.basemap,theme:e.theme,geometryType:o,colorScheme:e.colorScheme,worldScale:e.worldScale,view:e.view}),y=m.scheme;if(!y)throw new r("color-visual-variable:insufficient-info","Unable to find color scheme");const h=T(y.colors,X);if(h.length<X)throw new r("color-visual-variable:insufficient-info","Color scheme does not have enough colors");const j=y.id.includes("seq-"),b=E(s,p,t,!0),f=z(b,s,p,j),g=T(h,X),v=new u({field:n??void 0,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationField:e.normalizationField,stops:f.map(((e,s)=>new c({value:e,color:g[s]}))),legendOptions:i(d,e.legendOptions)}),w=new a({type:"color",minSliderValue:null!=e.minValue?e.minValue:s.min,maxSliderValue:null!=e.maxValue?e.maxValue:s.max,theme:y.theme}),k=new l({visualVariables:[w]});return{basemapId:m.basemapId,basemapTheme:m.basemapTheme,visualVariable:v,statistics:s,defaultValuesUsed:b.defaultValuesUsed,colorScheme:N(y),authoringInfo:k}}(s,v,w.geometryType,L(S))}async function re(e){const s=await async function(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new r("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new r("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&q(e,"color-continuous-renderer");const s={...e};s.symbolType=s.symbolType||"2d",s.defaultSymbolEnabled??=!0;const o=e.forBinning?Q:G,i=H(s.layer,o,e.forBinning);if(!i)throw new r("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+W(o).join(", "));s.layer=i;const t=null!=s.signal?{signal:s.signal}:null;await i.load(t);const n=i.geometryType;if(s.outlineOptimizationEnabled="polygon"===n&&s.outlineOptimizationEnabled,s.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&s.sizeOptimizationEnabled,"mesh"===n)s.symbolType="3d-volumetric",s.colorMixMode=s.colorMixMode||"replace",s.edgesType=s.edgesType||"none";else{if("3d-volumetric-uniform"===s.symbolType&&"point"!==n)throw new r("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(s.symbolType.includes("3d-volumetric")&&(!s.view||"3d"!==s.view.type))throw new r("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const l=await B({field:s.field,normalizationField:s.normalizationField,valueExpression:s.valueExpression}),a=k(i,l,"color-continuous-renderer:invalid-parameters");if(a)throw a;return s}(e),{layer:o,view:i,signal:t}=s,[n,l,a]=await Promise.all([oe(Y(s)),s.outlineOptimizationEnabled?j({layer:o,view:i,signal:t}).catch(b):null,s.sizeOptimizationEnabled?R({layer:o,view:i,signal:t}).catch(b):null]),p=s.normalizationField;return se(n,l,a,p?"field":void 0,p,o.geometryType,s)}async function ie(e){const s=await async function(e){if(!e||!e.layer||!e.field&&!e.valueExpression)throw new r("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new r("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&q(e,"color-class-breaks-renderer");const s={...e};s.symbolType=s.symbolType||"2d",s.defaultSymbolEnabled??=!0,s.classificationMethod??="equal-interval",s.normalizationType=A(s);const o=e.forBinning?Q:G,i=H(s.layer,o,e.forBinning);if(!i)throw new r("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+W(o).join(", "));if(s.layer=i,!(null!=s.minValue&&null!=s.maxValue||null==s.minValue&&null==s.maxValue))throw new r("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");const t=null!=s.signal?{signal:s.signal}:null;await i.load(t);const n=i.geometryType;if(s.outlineOptimizationEnabled="polygon"===n&&s.outlineOptimizationEnabled,"mesh"===n)s.symbolType="3d-volumetric",s.colorMixMode=s.colorMixMode||"replace",s.edgesType=s.edgesType||"none";else{if("3d-volumetric-uniform"===s.symbolType&&"point"!==n)throw new r("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(s.symbolType.includes("3d-volumetric")&&(!s.view||"3d"!==s.view.type))throw new r("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const l=await B({field:s.field,normalizationField:s.normalizationField}),a=k(i,l,"color-class-breaks-renderer:invalid-parameters");if(a)throw a;return s}(e),i=await f(function(e){const s={...e};delete s.basemap,delete s.colorScheme,delete s.legendOptions,delete s.symbolType,delete s.defaultSymbolEnabled,delete s.colorMixMode,delete s.edgesType;const o=s;return o.analyzeData=!(null!=s.minValue&&null!=s.maxValue),o}(s),s.outlineOptimizationEnabled);return async function(e,s){const i=await t("esri/smartMapping/t9n/smartMapping"),n=e.layer,a=e.defaultSymbolEnabled,p=n.geometryType,u=e.classificationMethod,c="standard-deviation"===u,d=await ee({basemap:e.basemap,geometryType:p,theme:c?"above-and-below":null,colorScheme:e.colorScheme,worldScale:!!e.symbolType?.includes("3d-volumetric"),view:e.view}),y=d.scheme,{result:h,outlineResult:j}=s,b=h.classBreakInfos,f=e.normalizationType;if(!y)throw new r("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");const g=function(e,s){const o=e.colorsForClassBreaks;let r;if(o&&o.length>0&&(o.some((e=>(e.numClasses===s&&(r=e.colors),!!r))),!r)){const e=o[o.length-1],i=s-e.numClasses;if(i>0){const s=e.colors[e.numClasses-1];r=e.colors.splice(0);for(let e=1;e<=i;e++)r.push(s)}}return r&&(r=T(r,r.length)),r}(y,b.length);if(!g||g.length!==b.length)throw new r("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");const v=j?.opacity,w=new o({classBreakInfos:b.map(((s,o)=>({minValue:s.minValue,maxValue:s.maxValue,symbol:I(p,{type:e.symbolType,color:g[o],size:M(y,p),outline:C(y,p,v),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:s.label}))),defaultLabel:a?i.other:null,defaultSymbol:a?I(p,{type:e.symbolType,color:y.noDataColor,size:M(y,p),outline:C(y,p,v),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:f,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===f?h.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new l({type:"class-breaks-color",classificationMethod:u,standardDeviationInterval:e.standardDeviationInterval})});return c||m({classBreakInfos:w.classBreakInfos,classificationMethod:u,normalizationType:f,round:!0}),j?.visualVariables?.length&&(w.visualVariables=j.visualVariables.map((e=>e.clone()))),{renderer:w,colorScheme:N(y),classBreaksResult:h,defaultValuesUsed:s.defaultValuesUsed,basemapId:d.basemapId,basemapTheme:d.basemapTheme}}(s,i)}function te(s){return async function(e){if(!e?.layer)throw new r("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required");const s={...e,layer:e.layer},o=[J.PointCloudLayer],i=H(s.layer,o);if(!i)throw new r("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+W(o).join(", "));if(s.layer=i,s.density=s.density||25,s.size=s.size||"100%",!S(s.size))throw new r("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");const t=null!=s.signal?{signal:s.signal}:null;return await i.load(t),s}(s).then((s=>({renderer:new e({field:"RGB",pointsPerInch:s.density??void 0,pointSizeAlgorithm:g(s.size)})})))}async function ne(e){const o=await async function(e){if(!e?.layer||!e.field)throw new r("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required");const s=e.field.toLowerCase();if("intensity"!==s&&"elevation"!==s)throw new r("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'");const o={...e,layer:e.layer,field:e.field},i=[J.PointCloudLayer],t=H(o.layer,i);if(!t)throw new r("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+W(i).join(", "));if(o.layer=t,o.density=o.density||25,o.size=o.size||"100%",!S(o.size))throw new r("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");const n=null!=o.signal?{signal:o.signal}:null;return await t.load(n),o}(e),i=o.statistics??await h({layer:o.layer,field:o.field,signal:o.signal}),t=await async function(e,s){const o=s.layer,i=await ee({basemap:s.basemap,colorScheme:s.colorScheme,geometryType:o.geometryType,schemeId:"elevation"===s.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"}),t=i.scheme;if(!t)throw new r("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");const n=T(t.colors,X);if(n.length<X)throw new r("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");const l=x(e,!1,!0),a=l?V(l[0],l[1],5):U(e);return{stops:p({values:a,isDate:!1,colors:n,labelIndexes:[0,2,4]}),basemapId:i.basemapId,basemapTheme:i.basemapTheme,statistics:e,defaultValuesUsed:!!l,colorScheme:N(t)}}(i,o);return{renderer:new s({field:o.field,pointsPerInch:o.density??void 0,pointSizeAlgorithm:g(o.size),stops:t.stops}),basemapId:t.basemapId,basemapTheme:t.basemapTheme,statistics:t.statistics,defaultValuesUsed:t.defaultValuesUsed,colorScheme:t.colorScheme}}async function le(e){const s=await t("esri/smartMapping/t9n/smartMapping"),o=await async function(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new r("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");const s={...e};s.symbolType=s.symbolType||"2d",s.defaultSymbolEnabled??=!0;const o=H(s.layer,G);if(!o)throw new r("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+W(G).join(", "));s.layer=o;const i=null!=s.signal?{signal:s.signal}:null;await o.load(i);const t=o.geometryType;if(s.outlineOptimizationEnabled="polygon"===t&&s.outlineOptimizationEnabled,s.sizeOptimizationEnabled=("point"===t||"multipoint"===t||"polyline"===t)&&s.sizeOptimizationEnabled,"mesh"===t)s.symbolType="3d-volumetric",s.colorMixMode=s.colorMixMode||"replace",s.edgesType=s.edgesType||"none";else if("3d-volumetric-uniform"===s.symbolType&&"point"!==t)throw new r("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(s.symbolType.includes("3d-volumetric")&&(!s.view||"3d"!==s.view.type))throw new r("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");const n=F(o,s.startTime,s.endTime,"color-age-renderer:invalid-parameters");if(n)throw n;if(s.unit&&!O.includes(s.unit))throw new r("color-age-renderer:invalid-unit",`Supported units are: ${O.join(", ")}`);return s}(e),{defaultSymbolEnabled:i,view:l,startTime:a,endTime:p,symbolType:m,colorMixMode:u,edgesType:c,minValue:d,maxValue:h,signal:f}=o,g=o.layer,[k,S,T]=await Promise.all([o.unit?{unit:o.unit,statistics:null}:y({view:l,layer:g,startTime:a,endTime:p,minValue:d,maxValue:h,signal:f}),o.outlineOptimizationEnabled?j({layer:g,view:l,signal:f}).catch(b):null,o.sizeOptimizationEnabled?R({layer:g,view:l,signal:f}).catch(b):null]),{unit:x,statistics:V}=k,U=P({layer:g,startTime:a,endTime:p,unit:x}).valueExpression,E=n(s[`ageInfo_${x}`],{unit:x,startTime:v(a,x,g,l),endTime:v(p,x,g,l)}),z=await oe(Y({layer:g,basemap:o.basemap,valueExpression:U,symbolType:m,statistics:V,legendOptions:{title:E},colorScheme:o.colorScheme,theme:o.theme,view:l,minValue:o.minValue,maxValue:o.maxValue,signal:f})),I={layer:g,valueExpression:U,defaultSymbolEnabled:i,symbolType:m,colorMixMode:u,edgesType:c},M=await se(z,S,T,null,null,g.geometryType,I),C=M.renderer.authoringInfo?.visualVariables;return C?.forEach((e=>w(e,a,p,x))),{...M,unit:x}}export{le as createAgeRenderer,ie as createClassBreaksRenderer,re as createContinuousRenderer,ne as createPCContinuousRenderer,te as createPCTrueColorRenderer,oe as createVisualVariable};
