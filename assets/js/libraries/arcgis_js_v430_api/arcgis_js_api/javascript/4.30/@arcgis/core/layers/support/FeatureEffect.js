/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Error.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{s as r}from"../../config.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{r as l,w as c}from"../../chunks/jsonUtils.js";import n from"./FeatureFilter.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/ensureType.js";import"../../chunks/parser.js";import"../../chunks/colorUtils.js";import"../../chunks/utils3.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/_commonjsHelpers.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../rest/support/Query.js";import"../../chunks/enumeration.js";import"../../chunks/DataLayerSource.js";import"./Field.js";import"../../chunks/domains.js";import"./CodedValueDomain.js";import"./Domain.js";import"./InheritedDomain.js";import"./RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../core/Clonable.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";var p;const u={read:{reader:l},write:{writer:c,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},m={read:{reader:l},write:{writer:c,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},a={name:"showExcludedLabels",default:!0};let j=p=class extends s{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,s){const r=super.write(e,s);if(s?.origin){if(r.filter){const e=Object.keys(r.filter);if(e.length>1||"where"!==e[0])return s.messages?.push(new t("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:s.layer,effect:this})),null}if("showExcludedLabels"in r)return s.messages?.push(new t("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:s.layer,effect:this})),null}return r}clone(){return new p({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e([i({type:n,json:{write:{allowNull:!0,writer(e,t,s,i){const o=e?.write({},i);o&&0!==Object.keys(o).length?r(s,o,t):r(s,null,t)}}}})],j.prototype,"filter",void 0),e([i({json:{read:l,write:{writer:c,allowNull:!0},origins:{"web-map":u,"portal-item":u}}})],j.prototype,"includedEffect",void 0),e([i({json:{read:l,write:{writer:c,allowNull:!0},origins:{"web-map":m,"portal-item":m}}})],j.prototype,"excludedEffect",void 0),e([i({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":a,"portal-item":a}}})],j.prototype,"excludedLabelsVisible",void 0),j=p=e([o("esri.layers.support.FeatureEffect")],j);const d=j;export{d as default};
