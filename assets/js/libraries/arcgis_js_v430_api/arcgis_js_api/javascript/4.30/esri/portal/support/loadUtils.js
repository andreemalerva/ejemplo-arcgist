// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../layers/support/associatedFeatureServiceUtils","../../layers/support/fetchService"],function(d,l,m){function e(a){const b={id:a.id,name:a.name};a=m.getLayerModuleType(a.type);"FeatureLayer"!==a&&(b.layerType=a);return b}function f(a){if(!a)return null;const {layers:b,tables:c}=a;return b?.length?b[0]:c?.length?c[0]:null}d.createSublayerData=e;d.getFirstLayerOrTable=f;d.getLayerOrTable=function(a,b){return null==b?null:[...(a.layers||[]),...(a.tables||[])].find(c=>c.id===b)};
d.getNumLayersAndTables=function(a){return(a?.layers?.length??0)+(a?.tables?.length??0)};d.getSublayersByLayerType=function(a,b){return[...(a.layers||[]),...(a.tables||[])].filter(({layerType:c})=>c?c===b:"ArcGISFeatureLayer"===b)};d.instanceTypeToLayerType=function(a){switch(a){case "catalog":return"CatalogLayer";case "feature":return"ArcGISFeatureLayer";case "oriented-imagery":return"OrientedImageryLayer";case "subtype-group":return"SubtypeGroupLayer"}return null};d.layerTypeToLayerModuleType=function(a){switch(a){case "CatalogLayer":return"CatalogLayer";
case "OrientedImageryLayer":return"OrientedImageryLayer";case "SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"};d.populateSceneServiceItemData=async function(a,b,c){if(!a?.url)return b??{};b??={};if(!b.layers){const g=await c.fetchServiceMetadata(a.url);b.layers=g.layers?.map(e)}const {serverUrl:h,portalItem:k}=await l.findAssociatedFeatureService(a.url,{sceneLayerItem:a,customParameters:f(b)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(null==h)return b.tables=
[],b;!b.tables&&k&&(a=await k.fetchData(),a?.tables?b.tables=a.tables.map(e):(c=await c.fetchServiceMetadata(h,{customParameters:f(a)?.customParameters}),b.tables=c?.tables?.map(e)));if(b.tables)for(const g of b.tables)g.url=`${h}/${g.id}`;return b};d.preprocessFSItemData=async function(a,b,c){if(null==a?.layers||null==a?.tables)b=await c.fetchServiceMetadata(b,{customParameters:f(a)?.customParameters}),a=a||{},a.layers=a.layers||b?.layers?.map(e),a.tables=a.tables||b?.tables?.map(e);return a};Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});