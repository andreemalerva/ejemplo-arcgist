/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../TimeExtent.js";import r from"../../TimeInterval.js";import{ClonableMixin as i}from"../../core/Clonable.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{r as n}from"../../chunks/reader.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{w as a}from"../../chunks/writer.js";import{t as m}from"../../chunks/timeZoneUtils.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/datetime.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import"../../chunks/enumeration.js";function p(t,e){return r.fromJSON({value:t,unit:e})}let u=class extends(i(o)){constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(t,r){return r.timeExtent&&Array.isArray(r.timeExtent)&&2===r.timeExtent.length?e.fromArray(r.timeExtent):null}writeFullTimeExtent(t,e){null!=t?.start&&null!=t.end?e.timeExtent=t.toArray():e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?p(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?p(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(t,e){e.timeInterval=t?.toJSON().value??null,e.timeIntervalUnits=t?.toJSON().unit??null}};t([l({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],u.prototype,"cumulative",void 0),t([l({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"endField",void 0),t([l({type:e,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"fullTimeExtent",void 0),t([n("fullTimeExtent",["timeExtent"])],u.prototype,"readFullTimeExtent",null),t([a("fullTimeExtent")],u.prototype,"writeFullTimeExtent",null),t([l({type:Boolean,json:{write:!0}})],u.prototype,"hasLiveData",void 0),t([l({type:r,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"interval",void 0),t([n("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],u.prototype,"readInterval",null),t([a("interval")],u.prototype,"writeInterval",null),t([l({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"startField",void 0),t([l(m("timeReference",!0))],u.prototype,"timeZone",void 0),t([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"trackIdField",void 0),t([l({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],u.prototype,"useTime",void 0),t([l({type:[Date],json:{read:!1}})],u.prototype,"stops",void 0),u=t([s("esri.layers.support.TimeInfo")],u);const c=u;export{c as default};
