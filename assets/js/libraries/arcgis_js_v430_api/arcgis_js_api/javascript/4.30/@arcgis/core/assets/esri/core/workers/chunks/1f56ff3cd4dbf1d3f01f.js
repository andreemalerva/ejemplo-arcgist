"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1604,9223],{91604:(e,a,t)=>{t.d(a,{save:()=>S,saveAs:()=>I});var r=t(32773),n=(t(6407),t(30794)),i=t(1985),s=t(89157),o=t(72604),l=t(57492),u=t(82454);t(20266),t(90740),t(82408),t(32816),t(29512),t(99063),t(99924),t(41390),t(69421),t(40499),t(93181),t(13671),t(91047),t(36544),t(29298),t(58498),t(45371),t(80959),t(64604),t(73509),t(28276),t(49877),t(44600),t(2160),t(7969),t(69763),t(93804),t(18683),t(56273),t(64752),t(48844),t(29208),t(59192),t(69277),t(70580),t(75191),t(24319),t(62092),t(43059),t(89935),t(49813),t(1178),t(79697),t(36915),t(8410),t(30861),t(78281),t(44945),t(2589),t(36533),t(84200),t(97827),t(91695),t(18169),t(48402),t(16699),t(26809),t(18527),t(67504),t(47387),t(46728),t(64102);const c="Feature Service",d="feature-layer-utils",y=`${d}-save`,f=`${d}-save-as`;function p(e){return{isValid:(0,o.k)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const a=[],t=[];for(const{layer:r,layerJSON:n}of e)r.isTable?t.push(n):a.push(n);return{layers:a,tables:t}}function w(e){return m([e])}function h(e,a){if(e.length<2)return;const t=[];for(const{id:a}of e)t.push(a);(0,r.e)(t.sort(b),a.slice().sort(b))&&e.sort(((e,t)=>{const r=a.indexOf(e.id),n=a.indexOf(t.id);return r<n?-1:r>n?1:0}))}function b(e,a){return e<a?-1:e>a?1:0}function L(e,a,t){const n=(0,r.o)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const i=n.added;return i.forEach((({id:a})=>{e.push({id:a})})),{itemResources:e,added:i.filter((({id:e})=>!t.includes(e)))}}function P(e,a,t){e.isTable?v(t.tables,a):v(t.layers,a)}function v(e,a){const t=e.findIndex((({id:e})=>e===a.id));-1===t?e.push(a):e[t]=a}async function g(e,a){const{url:t,layerId:r,title:n,fullExtent:s,isTable:o}=e,l=(0,i.p)(t);a.url=("FeatureServer"===l?.serverType?t:`${t}/${r}`)??null,a.title||=n,a.extent=null,o||null==s||(a.extent=await(0,u.a)(s)),(0,u.r)(a,u.t.METADATA),(0,u.r)(a,u.t.MULTI_LAYER),(0,u.b)(a,u.t.SINGLE_LAYER),o&&(0,u.b)(a,u.t.TABLE)}async function S(e,a){return(0,n.s)({layer:e,itemType:c,validateLayer:p,createItemData:(e,a)=>async function(e,a){return/\/\d+\/?$/.test(e.url)?w(a[0]):async function(e,a){if(e.reverse(),!a)return m(e);const t=await async function(e,a){let t=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(t))return t;t||={},function(e){e.layers||=[],e.tables||=[]}(t);const{layer:{url:r,customParameters:n,apiKey:i}}=a[0];return await async function(e,a,t){const{url:r,customParameters:n,apiKey:i}=a,{serviceJSON:o,layersJSON:u}=await(0,s.f)(r,{customParameters:n,apiKey:i}),c=L(e.layers,o.layers,t),d=L(e.tables,o.tables,t);e.layers=c.itemResources,e.tables=d.itemResources;const y=[...c.added,...d.added],f=u?[...u.layers,...u.tables]:[];await async function(e,a,t,r){const n=await async function(e){const a=[];e.forEach((({type:e})=>{const t=(0,s.g)(e),r=l.l[t];a.push(r())}));const t=await Promise.all(a),r=new Map;return e.forEach((({type:e},a)=>{r.set(e,t[a])})),r}(a),i=a.map((({id:e,type:a})=>new(n.get(a))({url:t,layerId:e,sourceJSON:r.find((({id:a})=>a===e))})));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;if(!r||null==n)return;const i={id:t,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(i.layerType=a.operationalLayerType),P(a,i,e)}))}(e,y,r,f)}(t,{url:r??"",customParameters:n,apiKey:i},a.map((e=>e.layer.layerId))),t}(a,e);for(const a of e)P(a.layer,a.layerJSON,t);return function(e,a){const t=[],r=[];for(const{layer:e}of a){const{isTable:a,layerId:n}=e;a?r.push(n):t.push(n)}h(e.layers,t),h(e.tables,r)}(t,e),t}(a,e)}(a,[e]),errorNamePrefix:y},a)}async function I(e,a,t){return(0,n.a)({layer:e,itemType:c,validateLayer:p,createItemData:(e,a)=>Promise.resolve(w(e)),errorNamePrefix:f,newItem:a,setItemProperties:g},t)}},89157:(e,a,t)=>{t.d(a,{f:()=>i,g:()=>y});var r=t(30861);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:t,...n}=a||{},i=t?await t.fetchServiceMetadata(e,n):await(0,r.f)(e,n);d(i),l(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const o=`${e}/layers`,u=t?await t.fetchServiceMetadata(o,n):await(0,r.f)(o,n);return d(u),l(u),s.layersJSON={layers:u.layers,tables:u.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function o(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(o)}function u(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function d(e){e.layers?.forEach(u),e.tables?.forEach(c)}function y(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},79697:(e,a,t)=>{t.d(a,{a:()=>i,c:()=>s});var r=t(99063),n=t(82408);function i(e,a){return{...o(e,a),readResourcePaths:[]}}function s(e,a,t){const n=(0,r.An)(e.itemUrl);return{...o(e,a),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:t?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function o(e,a){return{origin:a,url:(0,r.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},57492:(e,a,t)=>{t.d(a,{l:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(7820),t.e(6391)]).then(t.bind(t,56391))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(2283),t.e(7125),t.e(2606),t.e(3101),t.e(7076),t.e(7427),t.e(5414)]).then(t.bind(t,75414))).default,CSVLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(2283),t.e(7125),t.e(3279)]).then(t.bind(t,55963))).default,CatalogLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9292),t.e(2283),t.e(8140),t.e(3609),t.e(8380),t.e(3378)]).then(t.bind(t,38030))).default,DimensionLayer:async()=>(await t.e(3972).then(t.bind(t,3972))).default,ElevationLayer:async()=>(await Promise.all([t.e(1354),t.e(5026)]).then(t.bind(t,95026))).default,FeatureLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(2283),t.e(7125),t.e(9081)]).then(t.bind(t,77125))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(7634)]).then(t.bind(t,93390))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(7820),t.e(4048),t.e(1029),t.e(8340)]).then(t.bind(t,18340))).default,GroupLayer:async()=>(await Promise.all([t.e(7820),t.e(4132)]).then(t.bind(t,64132))).default,ImageryLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(8140),t.e(2138),t.e(38),t.e(3409)]).then(t.bind(t,71489))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(2138),t.e(38),t.e(6082),t.e(5383)]).then(t.bind(t,25383)).then((e=>e.I))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(9583).then(t.bind(t,29583))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(3101),t.e(327),t.e(403)]).then(t.bind(t,70403))).default,KMLLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(2397),t.e(633)]).then(t.bind(t,80633))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(8896),t.e(7837),t.e(3551),t.e(6702),t.e(4305)]).then(t.bind(t,54305))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(327),t.e(4395)]).then(t.bind(t,49991))).default,LinkChartLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(8896),t.e(7837),t.e(3551),t.e(6702),t.e(5075)]).then(t.bind(t,35075))).default,MapImageLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(9292),t.e(8140),t.e(3609),t.e(5820),t.e(739)]).then(t.bind(t,90739))).default,MapNotesLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(2283),t.e(7125),t.e(4450)]).then(t.bind(t,45318))).default,MediaLayer:async()=>(await Promise.all([t.e(7820),t.e(605)]).then(t.bind(t,50605))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(3649),t.e(9932)]).then(t.bind(t,59932))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(7820),t.e(4133),t.e(7390)]).then(t.bind(t,17390))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(9292),t.e(2283),t.e(7125),t.e(2227)]).then(t.bind(t,31647)).then((e=>e.O))).default,PointCloudLayer:async()=>(await Promise.all([t.e(5702),t.e(3101),t.e(7775)]).then(t.bind(t,17775))).default,RouteLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(2397),t.e(7927)]).then(t.bind(t,17927))).default,SceneLayer:async()=>(await Promise.all([t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(2606),t.e(9811),t.e(3101),t.e(327),t.e(7076),t.e(993),t.e(7427),t.e(287)]).then(t.bind(t,70287))).default,StreamLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(1849)]).then(t.bind(t,72669))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(9292),t.e(2283),t.e(2461)]).then(t.bind(t,2461))).default,TileLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(9292),t.e(8140),t.e(3609),t.e(1354),t.e(5820),t.e(2161)]).then(t.bind(t,62161))).default,UnknownLayer:async()=>(await t.e(2817).then(t.bind(t,82817))).default,UnsupportedLayer:async()=>(await t.e(6114).then(t.bind(t,56114))).default,VectorTileLayer:async()=>(await Promise.all([t.e(7820),t.e(1354),t.e(1514),t.e(1302),t.e(1656)]).then(t.bind(t,1656))).default,VideoLayer:async()=>(await Promise.all([t.e(7820),t.e(2405)]).then(t.bind(t,92405))).default,VoxelLayer:async()=>(await Promise.all([t.e(5702),t.e(3101),t.e(327),t.e(3471)]).then(t.bind(t,43471))).default,WFSLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(4225),t.e(5059)]).then(t.bind(t,12353))).default,WMSLayer:async()=>(await Promise.all([t.e(7820),t.e(5702),t.e(4048),t.e(1029),t.e(9323)]).then(t.bind(t,9323))).default,WMTSLayer:async()=>(await Promise.all([t.e(7820),t.e(4133),t.e(6825)]).then(t.bind(t,36825))).default,WebTileLayer:async()=>(await Promise.all([t.e(7820),t.e(4133)]).then(t.bind(t,64133)).then((e=>e.a))).default}},73341:(e,a,t)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(a,{i:()=>r})},54203:(e,a,t)=>{t.d(a,{u:()=>n});var r=t(73341);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:a,newOrigin:t})=>{(0,r.i)(e)&&t&&e.originOf(a)!==t&&e.updateOrigin(a,t)}))}},30861:(e,a,t)=>{t.d(a,{f:()=>n});var r=t(64604);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}},36915:(e,a,t)=>{t.d(a,{v:()=>s});var r=t(90740),n=t(6407),i=t(64604);function s(e){if(r.A.apiKey&&(0,i.s)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},8410:(e,a,t)=>{t.d(a,{b:()=>n,e:()=>s});var r=t(6407);async function n(e){const a=[];for(const t of e.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const e=t.beforeSave();e&&a.push(e)}await Promise.allSettled(a)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(e,a,t){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:a,details:t})=>new r.A(e,a,t)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new r.A("url:unsupported",`Relative url '${e}' is not supported`))))),t){const{ignoreUnsupported:e,supplementalUnsupportedErrors:a=[],requiredPropertyChecksDisabled:r}=t;e&&(n=n.filter((({name:e})=>!(i.has(e)||a.includes(e))))),r&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new r.A(a.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}},30794:(e,a,t)=>{t.d(a,{a:()=>b,s:()=>h});var r=t(6407),n=t(54203),i=t(82408),s=t(43059),o=t(79697),l=t(82454),u=t(36915),c=t(8410);async function d(e){const{layer:a,errorNamePrefix:t,validateLayer:n}=e;await a.load(),function(e,a,t){const n=t(e);if(!n.isValid)throw new r.A(`${a}:invalid-parameters`,n.errorMessage,{layer:e})}(a,t,n)}function y(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function f(e){const{item:a,errorNamePrefix:t,layer:n,validateItem:i}=e;if((0,u.v)(a),function(e){const{item:a,itemType:t,additionalItemType:n,errorNamePrefix:i,layer:s}=e,o=[t];if(n&&o.push(n),!o.includes(a.type)){const e=o.map((e=>`'${e}'`)).join(", ");throw new r.A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:a,layer:s})}}(e),i){const e=i(a);if(!e.isValid)throw new r.A(`${t}:invalid-parameters`,e.errorMessage,{layer:n})}}function p(e){return(0,o.c)(e,"portal-item")}async function m(e,a,t){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},a);return await Promise.all(a.resources?.pendingOperations??[]),(0,c.e)(a,{errorName:"layer-write:unsupported"},t),r}function w(e){(0,l.b)(e,l.t.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function h(e,a){const{layer:t,createItemData:i,createJSONContext:s,setItemProperties:o,saveResources:l,supplementalUnsupportedErrors:u}=e;await d(e),function(e){const{layer:a,errorNamePrefix:t}=e,{portalItem:n}=a;if(!n)throw new r.A(`${t}:portal-item-not-set`,y(a,"requires the portalItem property to be set"));if(!n.loaded)throw new r.A(`${t}:portal-item-not-loaded`,y(a,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}(e);const c=t.portalItem,h=s?s(c):p(c),b=await m(t,h,{...a,supplementalUnsupportedErrors:u}),L=await i({layer:t,layerJSON:b},c);return await(o?.(t,c)),w(c),await c.update({data:L}),(0,n.u)(h),await(l?.(c,h)),c}async function b(e,a){const{layer:t,createItemData:r,createJSONContext:o,setItemProperties:l,saveResources:u,supplementalUnsupportedErrors:c}=e;await d(e);const y=function(e){const{newItem:a,itemType:t}=e;let r=s.default.from(a);return r.id&&(r=r.clone(),r.id=null),r.type??=t,r.portal??=i.A.getDefault(),f({...e,item:r}),r}(e),h=o?o(y):p(y),b=await m(t,h,{...a,supplementalUnsupportedErrors:c}),L=await r({layer:t,layerJSON:b},y);return await l(t,y),w(y),await async function(e,a,t){const r=e.portal;await r.signIn(),await(r.user?.addItem({item:e,data:a,folder:t?.folder}))}(y,L,a),t.portalItem=y,(0,n.u)(h),await(u?.(y,h)),y}}}]);