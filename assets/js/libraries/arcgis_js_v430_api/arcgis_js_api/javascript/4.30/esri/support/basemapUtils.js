// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../Basemap ../config ../core/Collection ../core/Logger ../core/maybe ../core/urlUtils ../core/accessorSupport/ensureType ../layers/effects/utils ./basemapDefinitions".split(" "),function(e,k,q,r,t,u,l,I,J,h){function v(a,b){let c;if("string"===typeof a){const d=a in h.esriBasemapDefinitions,f=!d&&a.includes("/");if(!d&&!f)return b=Object.entries(h.esriBasemapDefinitions).filter(([,g])=>q.apiKey&&!g.classic||!q.apiKey&&(g.classic||g.is3d)).map(([g])=>`"${g}"`).sort().join(", "),t.getLogger("esri.support.basemapUtils").warn(`Unable to find basemap definition for: ${a}. Try one of these: ${b}`),
null;b&&(c=b[a]);c||(c=d?k.fromId(a):new k({style:{id:a}}),b&&(b[a]=c))}else c=I.ensureType(k,a);c?.destroyed&&(t.getLogger("esri.support.basemapUtils").warn("The provided basemap is already destroyed",{basemap:c}),c=null);return c}function w(a){if(m)return m(a);let b=null;a=n(a);const c=!a?.baseLayers.length;for(const f in h.esriBasemapDefinitions){var d=x(h.esriBasemapDefinitions[f]);d=y(a,d,{mustMatchReferences:c});if("equal"===d){b=f;break}"base-layers-equal"===d&&(b=f)}return b}function z(a,
b){const c=new r;a.forEach(d=>{const f=b.find(g=>"scene"!==g.type&&A(p(d),p(g)))||d;c.includes(f)?c.push(d):c.push(f)});return c}function B(a){if(C(a.url))return!0;if("vector-tile"===a.type)for(const b in a.sourceNameToSource)if(C(a.sourceNameToSource[b]?.sourceUrl))return!0;return!1}function C(a){if(!a)return!1;a=new l.Url(l.makeAbsolute(a));return!!a.authority&&K.test(a.authority)}function n(a){return a?!a.loaded&&a.resourceInfo?x(a.resourceInfo.data):{baseLayers:D(a.baseLayers),referenceLayers:D(a.referenceLayers)}:
null}function D(a){return(r.isCollection(a)?a.toArray():a).map(p)}function p(a){return{type:a.type,effect:"effect"in a?a.effect:void 0,url:E("urlTemplate"in a&&a.urlTemplate||a.url||"styleUrl"in a&&a.styleUrl||""),minScale:"minScale"in a&&null!=a.minScale?a.minScale:0,maxScale:"maxScale"in a&&null!=a.maxScale?a.maxScale:0,opacity:null!=a.opacity?a.opacity:1,visible:null!=a.visible?!!a.visible:!0,sublayers:"map-image"!==a.type&&"wms"!==a.type||null==a.sublayers?void 0:a.sublayers?.map(b=>({id:b.id,
visible:b.visible})),activeLayerId:"wmts"===a.type?a.activeLayer?.id:void 0}}function F(a){return a.isReference||"ArcGISSceneServiceLayer"===a.layerType}function x(a){return a?{baseLayers:G((a.baseMapLayers??[]).filter(b=>!F(b))),referenceLayers:G((a.baseMapLayers??[]).filter(b=>F(b)))}:null}function G(a){return a.map(b=>{let c;switch(b.layerType){case "VectorTileLayer":c="vector-tile";break;case "ArcGISTiledMapServiceLayer":c="tile";break;case "ArcGISSceneServiceLayer":c="scene";break;default:c=
"unknown"}return{type:c,effect:b.effect,url:E(b.templateUrl||b.urlTemplate||b.styleUrl||b.url),minScale:b.minScale??0,maxScale:b.maxScale??0,opacity:b.opacity??1,visible:null!=b.visibility?!!b.visibility:!0,sublayers:void 0,activeLayerId:void 0}})}function y(a,b,c){return null!=a!==(null!=b)?"not-equal":a&&b?H(a.baseLayers,b.baseLayers)?H(a.referenceLayers,b.referenceLayers)?"equal":c.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function H(a,b){if(a.length!==b.length)return!1;
for(let c=0;c<a.length;c++)if(!A(a[c],b[c]))return!1;return!0}function A(a,b){if(a.type!==b.type||a.url!==b.url||a.minScale!==b.minScale||a.maxScale!==b.maxScale||a.visible!==b.visible||a.opacity!==b.opacity||!J.effectEquals(a.effect,b.effect))return!1;if(null!=a.activeLayerId||null!=b.activeLayerId)return a.activeLayerId===b.activeLayerId;if(null!=a.sublayers||null!=b.sublayers){if(null==a.sublayers||null==b.sublayers||a.sublayers.length!==b.sublayers.length)return!1;for(let c=0;c<a.sublayers.length;c++){const d=
a.sublayers.at(c),f=b.sublayers.at(c);if(d?.id!==f?.id||d?.visible!==f?.visible)return!1}}return!0}function E(a){return a?l.normalize(a).replace(/^\s*https?:/i,"").toLowerCase():""}function L(a){return"portalItem"in a?a.portalItem?.thumbnailUrl:void 0}let m;const K=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;e.clonePreservingTiledLayers=function(a,b=null){a=v(a);if(!a)return null;a=a.clone();b&&(a.baseLayers=z(a.baseLayers,b.baseLayers),a.referenceLayers=z(a.referenceLayers,b.referenceLayers));return a};
e.contentEquals=function(a,b){if(a===b||null!=a?.portalItem?.id&&a.portalItem.id===b?.portalItem?.id)return!0;a=n(a);b=n(b);return"equal"===y(a,b,{mustMatchReferences:!0})};e.createCache=function(){return{}};e.destroyCache=function(a){for(const b in a)u.destroyMaybe(a[b]),delete a[b]};e.ensureType=v;e.findSpatialReference=function(a,b){if(null==b||null==a)return{spatialReference:null,updating:!1};if("not-loaded"===b.loadStatus)return b.load(),{spatialReference:null,updating:!0};if(b.spatialReference)return{spatialReference:b.spatialReference,
updating:!1};if(0===b.baseLayers.length)return{spatialReference:null,updating:!1};b=b.baseLayers.at(0);switch(b.loadStatus){case "not-loaded":b.load();case "loading":return{spatialReference:null,updating:!0};case "failed":return{spatialReference:null,updating:!1}}b=(("supportedSpatialReferences"in b?b.supportedSpatialReferences:null)||["tileInfo"in b?b.tileInfo?.spatialReference:b.spatialReference]).filter(Boolean);const c=a.spatialReference;return c?{spatialReference:b.find(d=>c.equals(d))??b[0]??
null,updating:!1}:{spatialReference:b[0],updating:!1}};e.getBasemapThumbnailUrl=function(a){if(!a)return null;var {thumbnailUrl:b}=a;return b?b:(b=w(a))?h.esriBasemapDefinitions[b].thumbnailUrl:u.mappedFind(a.baseLayers,L)};e.getWellKnownBasemapId=w;e.hasDeveloperBasemapLayer=function(a){return!!a?.baseLayers.concat(a.referenceLayers).some(B)};e.isBasemap3D=function(a){return"Web Scene"===a.portalItem?.type||a.referenceLayers.some(b=>"scene"===b.type)};e.isBasemapInBeta=function(a){return!!a?.portalItem?.tags?.some(b=>
"beta"===b.toLowerCase())};e.isBasemapLayer=function(a,b){return a.basemap?.referenceLayers?.some(c=>c.uid===b)||a.basemap?.baseLayers?.some(c=>c.uid===b)};e.isDeveloperBasemapLayer=B;e.overrideGetWellKnownBasemapId=function(a){m=a};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});