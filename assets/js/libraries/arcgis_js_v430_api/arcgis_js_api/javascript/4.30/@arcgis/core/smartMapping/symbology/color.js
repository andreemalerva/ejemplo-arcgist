/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../../Color.js";import{i as r}from"../../core/lang.js";import{c as i}from"../../chunks/colors2.js";import{c as l,g as t,a as s,f as g,b as o}from"../../chunks/symbologyUtils.js";import{h as a,t as n}from"../../chunks/utils19.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils2.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../layers/support/fieldUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";const d={light:{color:[153,153,153,.25],width:"0.5px"},lighter:{color:[194,194,194,.25],width:"0.5px"},lightest:{color:[153,153,153,.25],width:"0.5px"}},h={lightBasemaps:{outline:d.lighter,fillOpacity:.8,width:"2px",size:"8px"},darkBasemaps:{outline:d.light,fillOpacity:.6,width:"2px",size:"8px"},grayBasemaps:{outline:d.lightest,fillOpacity:.8,width:"2px",size:"8px"}},b="#aaaaaa",u="#ffffff",p="12px",m=["seq-cividis","seq-single-blues","seq-yellow-red-purple","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-teal-lightbrown-bright","seq-lightred-darkgray-bright","seq-orange-red-light","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-pink-red","seq-red-blue-green","seq-orange-red-dark","seq-magenta-light","seq-red-light","seq-orange-light","seq-mustard-light","seq-yellowgreen-light","seq-green-light","seq-aqua-light","seq-cyan-light","seq-blue-light","seq-purple-light","seq-brown-light","seq-steel-light","seq-brown-palegreen","seq-purple-pink-yellow","seq-blue-green-yellow","seq-green-avocado-lightpurple","seq-turquoise-lightgreen","seq-red-brown-white","seq-purple-pink-white","seq-blue-green-white","seq-green-avocado-white","seq-turquoise-lightgreen-white","seq-snowy-mountain","seq-snow-cactus","seq-subdued-red-yellow","seq-subdued-purple-blue","seq-subdued-blue-cyan","seq-subdued-green-yellow","seq-subdued-green","seq-lines-blue-orange","seq-lines-purple-brown","seq-esribrand-red","seq-esribrand-red-orange","seq-esribrand-orange","seq-esribrand-orangeyellow","seq-esribrand-yellow","seq-esribrand-yellowgreen","seq-esribrand-green","seq-esribrand-greenblue","seq-esribrand-blue","seq-esribrand-violet","seq-esribrand-violetred","seq-esribrand-brown","seq-esribrand-gray","seq-single-greens","seq-single-grays","seq-single-oranges","seq-single-purples","seq-single-reds","seq-multi-bugn","seq-multi-bupu","seq-multi-gnbu","seq-multi-orrd","seq-multi-pubu","seq-multi-pubugn","seq-multi-purd","seq-multi-rdpu","seq-multi-ylgn","seq-multi-ylgnbu","seq-multi-ylorbr","seq-multi-ylorrd","point-cloud-intensity-scheme"],y=["seq-magma","seq-inferno","seq-plasma","seq-viridis","seq-blue-gray-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-blues-bright","seq-gray-lightgreen-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright","seq-magenta","seq-red","seq-orange","seq-yellow","seq-yellowgreen","seq-green","seq-turquoise","seq-royal","seq-blueberry","seq-purple","seq-brown","seq-blue","seq-red-darkblue","seq-purple-darkgreen","seq-blue-darkgreen","seq-green-darkpurple","seq-blue-gray","seq-mentone-beach","seq-subdued-brown-tan","seq-subdued-gray-green","seq-subdued-green-tan","seq-subdued-blue-purple","seq-subdued-pink-brown","seq-subdued-green-pink","seq-lines-green-brown","seq-lines-yellow-blue","seq-blue-bright-1","seq-green-bright-1","seq-green-bright-2","seq-green-bright-3","seq-blue-bright-2","seq-blue-bright-3","seq-blue-bright-4","seq-blue-bright-5","seq-red-purple-bright","seq-red-magenta-bright","seq-red-bright-3","seq-red-bright-4","seq-yellow-bright-1","seq-yellow-bright-2","seq-yellow-bright-3","seq-yellow-bright-4","seq-yellow-gray-bright","seq-green-gray-bright","seq-red-gray-bright","seq-gray-redbright","seq-gray-green-bright","seq-gray-blue-bright","seq-gray-purple-bright","seq-plaingray-bright","seq-greengray-bright","seq-coolgray-bright","seq-warmgray-bright","seq-yellow-green-combo-bright","seq-cyan-blue-combo-bright","seq-magenta-purple-combo-bright","point-cloud-elevation-scheme"],c=["div-bluegreen-yellow-orange","div-orange-yellow-blue-light","div-green-yellow-redpurple","div-green-yellow-orange","div-green-gray-bright","div-red-blue-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-bluegreen-orange","div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-red-green-bright","div-orange-gray-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-lightblue-gray-bright","div-redpurple-blue","div-orange-blue","div-green-pink","div-bluegreen-redpurple","div-green-redpurple","div-green-orange","div-red-yellow-pink","div-blue-green","div-bluegreen-yellow-redpurple","div-bluegreen-pink","div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-dark","div-green-purple-light","div-blue-red-light","div-green-purple-light-2","div-cyan-blue-light","div-blue-yellow-light","div-purple-yellow-light","div-magenta-yellow-light","div-purple-green-light","div-blue-blue","div-green-green","div-blue-green-light","div-red-green-light","div-blue-yellow-brown-light","div-blue-white-brown","div-subdued-red-green","div-subdued-red-purple","div-subdued-brown-gray","div-subdued-sepia-gray","div-subdued-blue-gray","div-subdued-green-brown","div-lines-blue-brown","div-lines-green-purple","div-lines-red-gray","div-esribrand-red-bluegreen","div-esribrand-red-blue","div-esribrand-red-violet","div-esribrand-red-violetred","div-esribrand-red-gray","div-esribrand-redorange-greenblue","div-esribrand-redorange-blue","div-esribrand-redorange-violet","div-esribrand-redorange-violetred","div-esribrand-redorange-gray","div-esribrand-orange-greenblue","div-esribrand-orange-blue","div-esribrand-orange-violet","div-esribrand-orange-violetred","div-esribrand-orange-gray","div-esribrand-orangeyellow-greenblue","div-esribrand-orangeyellow-blue","div-esribrand-orangeyellow-violet","div-esribrand-orangeyellow-violetred","div-esribrand-orangeyellow-gray","div-esribrand-yellow-green-blue","div-esribrand-yellow-blue","div-esribrand-yellow-violet","div-esribrand-yellow-violetred","div-esribrand-yellow-brown","div-esribrand-yellow-gray","div-esribrand-yellowgreen-greenblue","div-esribrand-yellowgreen-blue","div-esribrand-yellowgreen-violet","div-esribrand-yellowgreen-violetred","div-esribrand-yellowgreen-brown","div-esribrand-yellowgreen-gray","div-esribrand-green-blue","div-esribrand-green-violet","div-esribrand-green-violetred","div-esribrand-green-gray","div-esribrand-greenblue-blue","div-esribrand-greenblue-violetred","div-esribrand-greenblue-brown","div-esribrand-greenblue-gray","div-esribrand-blue-brown","div-esribrand-blue-gray","div-esribrand-violet-brown","esribrand-violet-gray","div-esribrand-violetred-gray","div-esribrand-brown-gray","div-blue-yellow-brown","div-purple-yellow-brown","div-purple-beige-green","div-teal-yellow-brown","div-yellow-magenta-light","div-green-yellow-blue","div-brown-blue","div-red-green-cyan","div-yellow-slate-teal","div-brbg","div-piyg","div-prgn","div-puor","div-rdbu","div-rdgy","div-rdylbu","div-rdylgn","div-spectral"],v=["div-blue-green-bright-1","div-blue-red-bright-1","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-lightgreen-gray-bright","div-yellow-green-bright","div-green-darkgray-bright","div-lightmagenta-gray-bright","div-lightblue-yellow-bright","div-yellow-gray-purple","div-red-gray-blue","div-green-gray-purple","div-orange-gray-blue","div-green-purple","div-blue-red","div-green-magenta","div-blue-orange","div-blue-yellow","div-purple-yellow","div-magenta-yellow","div-purple-green-dark","div-green-brown","div-green-gray","div-blue-white","div-red-steel","div-aqua-darkgray-red","div-subdued-tan-blue","div-subdued-green-blue","div-subdued-green-pink","div-lines-green-orange","div-lines-yellow-blue","div-yellow-orange-purple-bright","div-yellow-blue-bright-1","div-yellow-blue-bright-2","div-yellow-blue-bright","div-yellow-blue-bright-3","div-yellow-purple-bright-1","div-yellow-purple-bright-2","div-yellow-red-bright-1","div-yellow-red-bright-2","div-yellow-gray-bright-1","div-yellow-gray-bright-2","div-yellow-gray-bright-3","div-purple-green-bright-1","div-purple-green-bright-2","div-pink-yellow-bright-1","div-pink-yellow-bright-2","div-red-blue-bright-1","div-red-blue-bright-2","div-orange-blue-bright-3","div-orange-blue-bright-4","div-red-purple-bright","div-red-gray-bright-1","div-red-gray-bright-2","div-red-gray-bright-3","div-teal-yellow-bright-1","div-teal-yellow-bright-2","div-teal-orange-bright","div-green-red-bright","div-green-magenta-bright","div-green-purple-bright-1","div-green-purple-bright-2","div-green-blue-bright-1","div-green-blue-bright-2","div-green-gray-bright-1","div-green-gray-bright-2","div-green-gray-bright-3","div-blue-yellow-bright-2","div-blue-lightorange-bright","div-blue-orange-bright-1","div-blue-orange-bright-2","div-blue-red-bright-2","div-blue-tan-bright","div-blue-gray-bright-1","div-blue-gray-bright-2","div-blue-gray-bright-3","div-blue-green-orange","div-purple-orange","div-purple-green","div-teal-orange","div-red-purple-blue","div-yellow-magenta","div-green-blue","div-blue-brown","div-red-cyan","div-yellow-teal"],w=["highlight-orange","highlight-blue","highlight-bluegreen","highlight-pink","highlight-purple","highlight-red","highlight-blue-dark","highlight-orange-dark","highlight-blue-gray","highlight-bluegreen-gray","highlight-orange-gray","highlight-pink-gray","highlight-purple-gray","highlight-red-gray","highlight-blue-gray-dark","highlight-orange-gray-dark","highlight-pink-gray-dark","highlight-purple-gray-dark","highlight-blue-bright-gray-dark","highlight-green-gray-dark","highlight-brown-gray-dark"],q=["highlight-orange-bright","highlight-blue-bright","highlight-blue-gray-bright","highlight-orange-gray-bright","highlight-red-gray-bright","highlight-purple-gray-bright","highlight-blue-bright-gray-bright","highlight-green-gray-bright","highlight-yellow-gray-bright"],k=["extremesdiv-orange-yellow-blue-dark","extremes-blue","extremes-blue-dark","extremes-bluegreen","extremes-orange","extremes-orange-dark","extremes-pink","extremes-purple","extremes-red","extremesdiv-blue-green","extremesdiv-bluegreen-pink","extremesdiv-bluegreen-purple","extremesdiv-bluegreen-redpurple","extremesdiv-bluegreen-yellow-orange","extremesdiv-green-pink","extremesdiv-green-yellow-orange","extremesdiv-green-yellow-redpurple","extremesdiv-orange-pink","extremesdiv-orange-purple","extremesdiv-orange-yellow-blue-light","extremesdiv-red-yellow-pink","extremesdiv-red-yellow-purple","extremesdiv-redpurple-blue","extremes-blue-gray","extremes-blue-gray-dark","extremes-bluegreen-gray","extremes-orange-gray","extremes-orange-gray-dark","extremes-pink-gray","extremes-purple-gray","extremes-red-gray","extremes-pink-gray-dark","extremes-purple-gray-dark","extremes-blue-bright-gray-dark","extremes-green-gray-dark","extremes-brown-gray-dark"],x=["extremes-orange-bright","extremes-blue-bright","extremes-blue-gray-bright","extremes-orange-gray-bright","extremesdiv-green-purple","extremesdiv-orange-blue","extremesdiv-red-blue","extremesdiv-yellow-purple","extremes-red-gray-bright","extremes-purple-gray-bright","extremes-blue-bright-gray-bright","extremes-green-gray-bright","extremes-yellow-gray-bright"],j=["highlight-orange-gray","highlight-bluegreen-gray","highlight-purple-gray","highlight-pink-gray","highlight-blue-gray","highlight-red-gray","highlight-orange-gray-dark","highlight-blue-gray-dark","highlight-orange-gray-bright","highlight-blue-gray-bright","extremes-orange-gray","extremes-bluegreen-gray","extremes-purple-gray","extremes-pink-gray","extremes-blue-gray","extremes-red-gray","extremes-orange-gray-dark","extremes-blue-gray-dark","extremes-orange-gray-bright","extremes-blue-gray-bright","highlight-red-gray-bright","highlight-purple-gray-bright","highlight-blue-bright-gray-bright","highlight-green-gray-bright","highlight-yellow-gray-bright","highlight-pink-gray-dark","highlight-purple-gray-dark","highlight-blue-bright-gray-dark","highlight-green-gray-dark","highlight-brown-gray-dark","extremes-red-gray-bright","extremes-purple-gray-bright","extremes-blue-bright-gray-bright","extremes-green-gray-bright","extremes-yellow-gray-bright","extremes-pink-gray-dark","extremes-purple-gray-dark","extremes-blue-bright-gray-dark","extremes-green-gray-dark","extremes-brown-gray-dark"],f={light:{common:h.grayBasemaps,primary:"seq-single-blues",secondary:[...m,...y].filter((e=>"seq-single-blues"!==e))},dark:{common:h.grayBasemaps,primary:"seq-blue-gray-bright",secondary:[...y,...m].filter((e=>"seq-blue-gray-bright"!==e))}},C=l({themeDictionary:{"high-to-low":{name:"high-to-low",label:"TODO",description:"TODO",schemes:{default:f}},"above-and-below":{name:"above-and-below",label:"TODO",description:"TODO",schemes:{default:{light:{common:h.grayBasemaps,primary:"div-rdbu",secondary:[...c,...v].filter((e=>"div-rdbu"!==e))},dark:{common:h.grayBasemaps,primary:"div-blue-red-bright-1",secondary:[...v,...c].filter((e=>"div-blue-red-bright-1"!==e))}}}},"centered-on":{name:"centered-on",label:"TODO",description:"TODO",schemes:{default:{light:{common:{outline:d.lighter,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:[...w,...q].filter((e=>"highlight-orange"!==e))},dark:{common:{outline:d.light,width:"2px",size:"8px"},primary:"highlight-orange-bright",primaryGray:"highlight-orange-gray-bright",secondary:[...q,...w].filter((e=>"highlight-orange-bright"!==e))}}}},extremes:{name:"extremes",label:"TODO",description:"TODO",schemes:{default:{light:{common:{outline:d.lighter,width:"2px",size:"8px"},primary:"extremesdiv-orange-purple",primaryGray:"extremes-orange-gray",secondary:[...k,...x].filter((e=>"extremesdiv-orange-purple"!==e))},dark:{common:{outline:d.light,width:"2px",size:"8px"},primary:"extremesdiv-orange-blue",primaryGray:"extremes-orange-gray-bright",secondary:[...x,...k].filter((e=>"extremesdiv-orange-blue"!==e))}}}},above:{name:"above",label:"TODO",description:"TODO",schemes:{default:f}},below:{name:"below",label:"TODO",description:"TODO",schemes:{default:f}}}});function O(e){return t(C,e)}function B(e){const i=e.theme,l=s({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:i?C.get(i):null});if(!l)return;let t=l.schemesInfo;const g=t.common,{basemapId:o,basemapTheme:a}=l;!e.worldScale||"centered-on"!==i&&"extremes"!==i||(t={...t},t.secondary=t.secondary.slice(0),t.secondary.push(t.primary),t.primary=t.primaryGray,delete t.primaryGray,t.secondary=t.secondary.filter((e=>{const r=e.includes("gray");return e!==t.primary&&r})));const n={...e,basemap:o};return{primaryScheme:G(n,t.primary,g),secondarySchemes:t.secondary.map((e=>G(n,e,g))).filter(r),basemapId:o,basemapTheme:a}}function D(e){return g(e.name,B(e))}function T(e){return o(e.includedTags,e.excludedTags,B(e))}function U(e){let r,i,l="";const t=e.id;if(t){const e=t.split("/");e&&(l=e[0],r=e[1],i=e[2])}const g=s({basemap:r,theme:C.get(l)});if(!g)return;const{schemesInfo:o}=g;return G({theme:l,basemap:r,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view},i,o.common)}function z(r){if(!r)return;const i={...r};return i.colors=i.colors.map((r=>new e(r))),i.tags=[...i.tags],i.colorsForClassBreaks=i.colorsForClassBreaks.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>new e(r)))}))),i.noDataColor&&(i.noDataColor=new e(i.noDataColor)),"outline"in i&&i.outline&&(i.outline={color:i.outline.color&&new e(i.outline.color),width:i.outline.width}),i}function F(e){const r=e;return r.colors.reverse(),r.colorsForClassBreaks.forEach((e=>{e.colors.reverse()})),r}function S(e){const r=e.theme,i=e.colors,l=C.get(r).supportedBasemaps,t=[],g={theme:r,basemap:null,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view};return l.forEach((e=>{const l=s({basemap:e,theme:C.get(r)}).schemesInfo;if(g.basemap=e,l){const e=P(G(g,l.primary,l.common),i);e&&t.push(e),l.secondary.forEach((e=>{const r=P(G(g,e,l.common),i);r&&t.push(r)}))}})),t}function P(e,r){let i,l;if(l=a(e.colors,r),l)i=l>0?e:F(e);else{let t;e.colorsForClassBreaks.some((e=>(e.numClasses===r.length&&(t=e.colors),!!t))),t&&(l=a(t,r),l&&(i=l>0?e:F(e)))}return i}function G(r,l,t){const s=i[l];if(!s)return;const g=r.theme??"",o="mesh"!==r.geometryType&&r.worldScale?r.view:null;let a=t.fillOpacity;null==a&&null!=l&&j.includes(l)&&(a=.8);const d="below"===r.theme,h=d?[...s.stops].reverse():s.stops,m=[];for(const e in s)if("stops"!==e&&"name"!==e&&"tags"!==e){const r=+e;m.push({numClasses:r,colors:d?[...s[r]].reverse():s[r]})}const y=null!=l&&j.includes(l)?u:b,c=g+"/"+r.basemap+"/"+l,v=a||1;switch(r.geometryType){case"point":case"multipoint":return function(r,i){return{id:r.id,name:r.name,tags:[...r.tags],theme:r.theme,colors:r.colors.map((r=>new e(r))),colorsForClassBreaks:I(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),outline:{color:new e(r.outline.color),width:r.outline.width},size:i&&"3d"===i.type?n(r.size,i):r.size,opacity:r.opacity}}({id:c,name:s.name,tags:s.tags,theme:g,opacity:v,colors:h,colorsForClassBreaks:m,noDataColor:y,outline:t.outline,size:t.size},o);case"polyline":return function(r,i){return{id:r.id,name:r.name,tags:[...r.tags],theme:r.theme,colors:r.colors.map((r=>new e(r))),colorsForClassBreaks:I(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),width:i&&"3d"===i.type?n(r.width,i):r.width,opacity:r.opacity}}({id:c,name:s.name,tags:s.tags,theme:g,opacity:v,colors:h,colorsForClassBreaks:m,noDataColor:y,width:t.width},o);case"polygon":return function(r,i){return{id:r.id,name:r.name,tags:[...r.tags],theme:r.theme,colors:r.colors.map((r=>new e(r))),colorsForClassBreaks:I(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),outline:{color:new e(r.outline.color),width:r.outline.width},opacity:r.opacity,size:i&&"3d"===i.type?n(r.size,i):r.size}}({id:c,name:s.name,tags:s.tags,theme:g,opacity:v,colors:h,colorsForClassBreaks:m,noDataColor:y,outline:t.outline,size:p},o);case"mesh":return{id:(w={id:c,name:s.name,tags:s.tags,theme:g,opacity:v,colors:h,colorsForClassBreaks:m,noDataColor:y}).id,name:w.name,tags:[...w.tags],theme:w.theme,colors:w.colors.map((r=>new e(r))),colorsForClassBreaks:I(w.colorsForClassBreaks),noDataColor:new e(w.noDataColor),opacity:w.opacity};default:return}var w}function I(r){return r.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>new e(r)))})))}export{q as centeredOnDarkSchemes,w as centeredOnLightSchemes,z as cloneScheme,v as divergingDarkSchemes,c as divergingLightSchemes,x as extremesDarkSchemes,k as extremesLightSchemes,j as fadeToGraySchemes,F as flipColors,S as getMatchingSchemes,U as getSchemeById,D as getSchemeByName,B as getSchemes,T as getSchemesByTag,O as getThemes,y as sequentialDarkSchemes,m as sequentialLightSchemes};
