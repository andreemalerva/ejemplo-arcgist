/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import t from"../TimeExtent.js";import{i as e,clone as n}from"../core/lang.js";import{k as i}from"../core/Accessor.js";import{L as s}from"../chunks/Logger.js";import{o as r}from"../chunks/timeUtils.js";import{i as o}from"../chunks/utils6.js";import{W as m}from"../chunks/tagSymbols.js";import"../chunks/tslib.es6.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";function l(t){return void 0!==t.timeInfo}async function u(n,i){if(0===n.length)return t.allTime;await Promise.all(n.map((t=>t.load({signal:i}))));const s=n.filter(l),r=n.filter((t=>!l(t)&&null!=t.visibilityTimeExtent));if(0===s.length&&0===r.length)return t.allTime;const o=[],m=[];for(const t of s)"feature"!==t?.type&&"map-image"!==t?.type||!t.timeInfo?.hasLiveData?m.push(t):o.push(t);const u=t=>null==t||t.isAllTime,a=[...m.map((t=>{const e=t.timeInfo?.fullTimeExtent,{visibilityTimeExtent:n}=t;return e?.intersection(n)??n})),...r.map((t=>t.visibilityTimeExtent))];if(a.some(u))return t.allTime;const c=o.map((async t=>{const e=(await t.fetchRecomputedExtents({signal:i}))?.timeExtent??t.timeInfo?.fullTimeExtent,{visibilityTimeExtent:n}=t;return e?.intersection(n)??n})),p=(await Promise.allSettled(c)).map((t=>"fulfilled"===t.status?t.value:null));if(p.some(u))return t.allTime;const f=[...p,...a].filter(e);return 0===f.length?t.allTime:f.reduce(((t,e)=>t.union(e)))}async function a(t,e){return i(s.getLogger("esri.support.timeUtils.getTimeSliderSettingsFromWebMap"),"`timeUtils.getTimeSliderSettingsFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'",{replacement:"timeUtils.getTimeSliderSettingsFromWebDocument",version:"4.30",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",warnOnce:!0}),null!=t&&o(t)?await c(t,e):null}async function c(e,i){if(!o(e)&&!function(t){return null!=t&&"object"==typeof t&&m in t}(e))return null;await e.load({signal:i});const s=e?.widgets?.timeSlider;if(!s)return null;const r=await async function(t,e){return t.widgets?.timeSlider?.fullTimeExtent??u(t.allLayers,e)}(e,i),l=s.loop,a=function(t){const e=t.numThumbs??2,n=t.currentTimeExtent;if(n){const{start:t,end:i}=n;return null!=t&&null!=i&&t.getTime()===i.getTime()?"instant":2===e?"time-window":null==t||0===t.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===e?"time-window":"cumulative-from-start"}(s),c=s.stopDelay??2e3,p=function(t){const{numStops:e,stopInterval:i,stops:s}=t;return s?{dates:n(s)}:i?{interval:i.clone()}:{count:e??5}}(s),f=function(e,n){const i=e.currentTimeExtent;if(!i)return null;const{start:s,end:r}=i,o=s??r??null;switch(n){case"time-window":return new t({start:s,end:r});case"cumulative-from-start":return new t({start:null,end:o});case"cumulative-from-end":return new t({start:o,end:null});case"instant":return new t({start:o,end:o})}}(s,a);return{fullTimeExtent:r,loop:l,mode:a,playRate:c,stops:p,timeExtent:f}}function p(e){if(!e)return e;const{start:n,end:i}=e;return new t({start:null!=n?r(n,-n.getTimezoneOffset(),"minutes"):n,end:null!=i?r(i,-i.getTimezoneOffset(),"minutes"):i})}function f(e){if(!e)return e;const{start:n,end:i}=e;return new t({start:null!=n?r(n,n.getTimezoneOffset(),"minutes"):n,end:null!=i?r(i,i.getTimezoneOffset(),"minutes"):i})}export{u as getTimeExtentFromLayers,c as getTimeSliderSettingsFromWebDocument,a as getTimeSliderSettingsFromWebMap,f as toLocalTimeExtent,p as toUTCTimeExtent};
