/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{getFilename as r,urlToObject as t}from"../core/urlUtils.js";import{p as a,b as s}from"./arcgisLayerUrl.js";import{f as o}from"./associatedFeatureServiceUtils.js";import{g as l,f as n}from"./fetchService.js";import{s as i}from"./layerUtils2.js";import{l as c}from"./lazyLayerLoader.js";import{f as u}from"./requestPresets.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./persistableUrlUtils.js";import"../kernel.js";import"../request.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";const p={FeatureLayer:!0,SceneLayer:!0};async function m(c){const{properties:m,url:S}=c,w={...m,url:S},v=await async function(c,m){let y=a(c);if(null==y&&(y=await async function(e,a){const o=await u(e,{customParameters:a});let l=null,n=null;const i=o.type;if("Feature Layer"===i||"Table"===i?(l="FeatureServer",n=o.id??null):"indexedVector"===i?l="VectorTileServer":o.hasOwnProperty("mapName")?l="MapServer":o.hasOwnProperty("bandCount")&&o.hasOwnProperty("pixelSizeX")?l="ImageServer":o.hasOwnProperty("maxRecordCount")&&o.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":o.hasOwnProperty("streamUrls")?l="StreamServer":d(o)?(l="SceneServer",n=o.id):o.hasOwnProperty("layers")&&d(o.layers?.[0])&&(l="SceneServer"),!l)return null;const c=null!=n?s(e):null;return{title:null!=c&&o.name||r(e),serverType:l,sublayer:n,url:{path:null!=c?c.serviceUrl:t(e).path}}}(c,m)),null==y)throw new e("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:c});const{serverType:f,sublayer:S}=y;let w;const v={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},b="FeatureServer"===f,h="SceneServer"===f,g={parsedUrl:y,Constructor:null,layerId:b||h?S??void 0:void 0,layers:[],tables:[]};switch(f){case"MapServer":if(null!=S){const{type:r}=await u(c,{customParameters:m});switch(w="FeatureLayer",r){case"Catalog Layer":w="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new e("arcgis-layers:unsupported",`fromUrl() not supported for "${r}" layers`)}}else{const e=await async function(e,r){return(await u(e,{customParameters:r})).tileInfo}(c,m);w=e?"TileLayer":"MapImageLayer"}break;case"ImageServer":{const e=await u(c,{customParameters:m}),{tileInfo:r,cacheType:t}=e;w=r?"LERC"!==r?.format?.toUpperCase()||t&&"elevation"!==t.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await u(y.url.path,{customParameters:m});if(w="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)w="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=i[e]&&(w=i[e])}}break}case"3DTilesServer":throw new e("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(w="FeatureLayer",null!=S){const e=await u(c,{customParameters:m});g.sourceJSON=e,w=l(e.type)}break;default:w=v[f]}if(p[w]&&null==S){const e=await async function(e,r,t){let a,s,l=!1;switch(r){case"FeatureServer":{const r=await n(e,{customParameters:t});l=!!r.layersJSON,a=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await async function(e,r){const t=await u(e,{customParameters:r}),a=t.layers?.[0];if(!a)return{serviceInfo:t};try{const{serverUrl:a}=await o(e),s=await u(a,{customParameters:r}).catch((()=>null));return s&&(t.tables=s.tables),{serviceInfo:t,tableServerUrl:a}}catch{return{serviceInfo:t}}}(e,t);a=r.serviceInfo,s=r.tableServerUrl;break}default:a=await u(e,{customParameters:t})}const i=a?.layers,c=a?.tables;return{layers:i?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:s,id:e.id}))).reverse()||[],layerInfos:l?i:[],tableInfos:l?c:[]}}(c,f,m);if(b&&(g.sublayerInfos=e.layerInfos,g.tableInfos=e.tableInfos),1!==e.layers.length+e.tables.length)g.layers=e.layers,g.tables=e.tables,b&&e.layerInfos?.length&&(g.sublayerConstructorProvider=await async function(e){if(!e.length)return;const r=new Set,t=[];for(const{type:a}of e)r.has(a)||(r.add(a),t.push(j(l(a))));const a=await Promise.all(t),s=new Map;return Array.from(r).forEach(((e,r)=>{s.set(e,a[r])})),e=>s.get(e.type)}(e.layerInfos));else if(b||h){const r=e.layerInfos?.[0]??e.tableInfos?.[0];if(g.layerId=e.layers[0]?.id??e.tables[0]?.id,g.sourceJSON=r,b){const e=r?.type;w=l(e)}}}return g.Constructor=await j(w),g}(S,m?.customParameters),{Constructor:b,layerId:h,sourceJSON:g,parsedUrl:P,layers:I,tables:L}=v;if(I.length+L.length===0)return null!=h&&(w.layerId=h),null!=g&&(w.sourceJSON=g),new b(w);const U=new(0,(await import("../layers/GroupLayer.js")).default)({title:P.title});return await async function(e,r,t){const a=r.sublayerConstructorProvider;for(const{id:s,serverUrl:o}of r.layers){const l=y(r.sublayerInfos,s),n=f(o,s,l,(l&&a?.(l))??r.Constructor,t);e.add(n)}if(r.tables.length){const a=await j("FeatureLayer");r.tables.forEach((({id:s,serverUrl:o})=>{const l=f(o,s,y(r.tableInfos,s),a,t);e.tables.add(l)}))}}(U,v,w),U}function y(e,r){return e?e.find((({id:e})=>e===r)):null}function f(e,r,t,a,s){const o={...s,layerId:r};return null!=e&&(o.url=e),null!=t&&(o.sourceJSON=t),"sublayerTitleMode"in a.prototype&&(o.sublayerTitleMode="service-name"),new a(o)}function d(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function j(e){return(0,c[e])()}export{m as fromUrl};
