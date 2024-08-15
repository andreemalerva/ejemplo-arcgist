/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{isSerializable as t}from"../../core/JSONSupport.js";import{L as s}from"../../chunks/Logger.js";import{g as i}from"../../chunks/ensureType.js";import{U as r}from"../../chunks/UnknownTimeZone.js";import{isDateField as o,isNumericField as n,isObjectIDField as l,isGlobalIDField as m,getFieldDefaultValue as a,isTimeOnlyField as d,normalizeFieldName as u}from"./fieldUtils.js";import{u as p,a as c,f as h}from"../../chunks/timeZoneUtils.js";import{F as f,I as j}from"../../chunks/datetime.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/tslib.es6.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";const F=new Map;class y{static fromJSON(e){return new y(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new y(e.fields??[],T(e))}static fromLayerJSON(e){return new y(e.fields??[],T(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const s=[];for(const e of this.fields){const t=e?.name,i=k(t);if(t&&i){const r=g(t);this._fieldsMap.set(t,e),this._fieldsMap.set(r,e),this._normalizedFieldsMap.set(i,e),s.push(`${r}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),o(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):n(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),l(e)||m(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}s.sort(),this.uid=s.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)l(e)||m(e)||e.nullable||void 0!==a(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(g(e))??this._normalizedFieldsMap.get(k(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(t){const i=this.get(t&&"string"!=typeof t?t.name:t);return i?this._timeZoneByFieldName?this._timeZoneByFieldName.get(i.name):"date"===i.type||"esriFieldTypeDate"===i.type?(s.getLogger("esri.layers.support.FieldsIndex").error(new e("getTimeZone:no-timezone-information",`no time zone information for field '${i.name}'`)),p):_.has(i.type)?c:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===c?r.instance:t===p?f.utcInstance:i(F,t,(()=>j.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return d(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>t(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function g(e){return e.trim().toLowerCase()}function k(e){return u(e)?.toLowerCase()??""}const _=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function T(e){const t=new Map;if(!e.fields)return t;const s=!0===e.datesInUnknownTimezone,{timeInfo:i,editFieldsInfo:r}=e,o=(i?"startField"in i?i.startField:i.startTimeField:"")??"",n=(i?"endField"in i?i.endField:i.endTimeField:"")??"",l="dateFieldsTimeZone"in e?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?h(e.dateFieldsTimeReference):null,m=r?"timeZone"in r?r.timeZone??l:r.dateFieldsTimeReference?h(r.dateFieldsTimeReference):l??p:null,a=i?"timeZone"in i?i.timeZone??l:i.timeReference?h(i.timeReference):l:null,d=new Map([[g(r?.creationDateField??""),m],[g(r?.editDateField??""),m],[g(o),a],[g(n),a]]);for(const{name:i,type:r}of e.fields)if(_.has(r))t.set(i,c);else if("date"!==r&&"esriFieldTypeDate"!==r)t.set(i,null);else if(s)t.set(i,c);else{const e=d.get(g(i??""))??l;t.set(i,e)}return t}export{y as default};
