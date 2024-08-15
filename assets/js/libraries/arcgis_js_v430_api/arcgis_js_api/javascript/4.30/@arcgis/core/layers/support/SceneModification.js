/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as t}from"../../core/lang.js";import{W as r,subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{w as p}from"../../chunks/writer.js";import{p as m}from"../../chunks/persistable.js";import{canProjectWithoutEngine as c,projectPolygon as n}from"../../geometry/projection.js";import a from"../../geometry/Polygon.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/promiseUtils.js";import"../../chunks/handleUtils.js";import"../../chunks/maybe.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/MD5.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/uuid.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/SimpleObservable.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";var u;let l=u=class extends s{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,s,t,o){if(o.layer?.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!c(e.spatialReference,o.layer.spatialReference))return void(o?.messages&&o.messages.push(new r("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const i=new a;n(e,i,o.layer.spatialReference),s[t]=i.toJSON(o)}else s[t]=e.toJSON(o);delete s[t].spatialReference}clone(){return new u({geometry:t(this.geometry),type:this.type})}};e([i({type:a}),m()],l.prototype,"geometry",void 0),e([p(["web-scene","portal-item"],"geometry")],l.prototype,"writeGeometry",null),e([i({type:["clip","mask","replace"],nonNullable:!0}),m()],l.prototype,"type",void 0),l=u=e([o("esri.layers.support.SceneModification")],l);const j=l;export{j as default};
