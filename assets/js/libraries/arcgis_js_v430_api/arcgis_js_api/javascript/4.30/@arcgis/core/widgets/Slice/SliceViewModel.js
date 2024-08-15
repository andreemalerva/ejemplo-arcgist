/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import e from"../../analysis/SliceAnalysis.js";import t from"../../core/Collection.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{A as i}from"../../chunks/AnalysisViewModel.js";import"../../chunks/Analysis.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Clonable.js";import"../../chunks/ensureType.js";import"../../core/Identifiable.js";import"../../core/JSONSupport.js";import"../../analysis/SlicePlane.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/Cyclical.js";import"../../chunks/persistable.js";import"../../chunks/MD5.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/uuid.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/collectionUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/reactiveUtils.js";const l=new Set;let n=class extends i{constructor(s){super(s),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="SliceViewModel is only supported in 3D views.",l.add(this)}destroy(){l.delete(this)}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get shape(){return this.analysis.shape}set shape(s){this.analysis.shape=s}get tiltEnabled(){return this.analysis.tiltEnabled}set tiltEnabled(s){this.analysis.tiltEnabled=s}get layersMode(){return this.tool?.layersMode??"none"}get excludedLayers(){return this.analysis.excludedLayers}set excludedLayers(s){this.analysis.excludedLayers=t.isCollection(s)?s:new t(s)}get excludeGroundSurface(){return this.analysis.excludeGroundSurface}set excludeGroundSurface(s){this.analysis.excludeGroundSurface=s}async start(){await super.start(),l.forEach((s=>{s.view===this.view&&s!==this&&s.clear()})),null!=this.analysisView&&(this.analysisView.active=!0)}enterExcludeLayerMode(){null!=this.tool&&this.tool.enterExcludeLayerMode()}exitExcludeLayerMode(){null!=this.tool&&this.tool.exitExcludeLayerMode()}onConnectToAnalysisView(s){s.active=!0}constructAnalysis(){return new e}};s([r({type:e})],n.prototype,"analysis",void 0),s([r({readOnly:!0})],n.prototype,"state",null),s([r()],n.prototype,"shape",null),s([r()],n.prototype,"tiltEnabled",null),s([r()],n.prototype,"layersMode",null),s([r()],n.prototype,"excludedLayers",null),s([r({nonNullable:!0})],n.prototype,"excludeGroundSurface",null),n=s([o("esri.widgets.Slice.SliceViewModel")],n);const p=n;export{p as default};
