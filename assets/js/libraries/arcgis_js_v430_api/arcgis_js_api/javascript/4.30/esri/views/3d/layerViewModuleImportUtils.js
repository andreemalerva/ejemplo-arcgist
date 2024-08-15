// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error"],function(d,h,m){const e=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),f=()=>new Promise((a,b)=>d(["./layers/TileLayerView3D"],c=>a(e(c)),b)),k=()=>new Promise((a,b)=>d(["./layers/ElevationLayerView3D"],c=>a(e(c)),b)),l={"base-dynamic":()=>new Promise((a,b)=>d(["./layers/BaseDynamicLayerView3D"],c=>a(e(c)),b)),"base-elevation":k,"base-tile":f,"bing-maps":f,"building-scene":()=>new Promise((a,b)=>
d(["./layers/BuildingSceneLayerView3D"],c=>a(e(c)),b)),catalog:()=>new Promise((a,b)=>d(["./layers/CatalogLayerView3D"],c=>a(e(c)),b)),"catalog-dynamic-group":()=>new Promise((a,b)=>d(["./layers/CatalogDynamicGroupLayerView3D"],c=>a(e(c)),b)),"catalog-footprint":()=>new Promise((a,b)=>d(["./layers/CatalogFootprintLayerView3D"],c=>a(e(c)),b)),csv:()=>new Promise((a,b)=>d(["./layers/CSVLayerView3D"],c=>a(e(c)),b)),dimension:()=>new Promise((a,b)=>d(["./layers/DimensionLayerView3D"],c=>a(e(c)),b)),elevation:k,
feature:()=>new Promise((a,b)=>d(["./layers/FeatureLayerView3D"],c=>a(e(c)),b)),geojson:()=>new Promise((a,b)=>d(["./layers/GeoJSONLayerView3D"],c=>a(e(c)),b)),graphics:()=>new Promise((a,b)=>d(["./layers/GraphicsLayerView3D"],c=>a(e(c)),b)),group:()=>new Promise((a,b)=>d(["../layers/GroupLayerView"],c=>a(e(c)),b)),imagery:()=>new Promise((a,b)=>d(["./layers/ImageryLayerView3D"],c=>a(e(c)),b)),"integrated-mesh":()=>new Promise((a,b)=>d(["./layers/IntegratedMeshLayerView3D"],c=>a(e(c)),b)),"integrated-mesh-3dtiles":()=>
new Promise((a,b)=>d(["./layers/IntegratedMesh3DTilesLayerView3D"],c=>a(e(c)),b)),"line-of-sight":()=>new Promise((a,b)=>d(["./layers/LineOfSightLayerView3D"],c=>a(e(c)),b)),"map-image":()=>new Promise((a,b)=>d(["./layers/MapImageLayerView3D"],c=>a(e(c)),b)),media:()=>new Promise((a,b)=>d(["./layers/MediaLayerView3D"],c=>a(e(c)),b)),"ogc-feature":()=>new Promise((a,b)=>d(["./layers/OGCFeatureLayerView3D"],c=>a(e(c)),b)),"open-street-map":f,"oriented-imagery":()=>new Promise((a,b)=>d(["./layers/FeatureLayerView3D"],
c=>a(e(c)),b)),"point-cloud":()=>new Promise((a,b)=>d(["./layers/PointCloudLayerView3D"],c=>a(e(c)),b)),voxel:()=>new Promise((a,b)=>d(["./layers/VoxelLayerView3D"],c=>a(e(c)),b)),route:()=>new Promise((a,b)=>d(["./layers/RouteLayerView3D"],c=>a(e(c)),b)),scene:a=>null==a.profile||"mesh-pyramids"===a.profile?new Promise((b,c)=>d(["./layers/SceneLayerView3D"],g=>b(e(g)),c)):new Promise((b,c)=>d(["./layers/SceneLayerGraphicsView3D"],g=>b(e(g)),c)),stream:()=>new Promise((a,b)=>d(["./layers/StreamLayerView3D"],
c=>a(e(c)),b)),tile:f,"imagery-tile":()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView3D"],c=>a(e(c)),b)),"vector-tile":()=>new Promise((a,b)=>d(["./layers/VectorTileLayerView3D"],c=>a(e(c)),b)),wcs:()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView3D"],c=>a(e(c)),b)),"web-tile":f,wfs:()=>new Promise((a,b)=>d(["./layers/WFSLayerView3D"],c=>a(e(c)),b)),wms:()=>new Promise((a,b)=>d(["./layers/WMSLayerView3D"],c=>a(e(c)),b)),wmts:()=>new Promise((a,b)=>d(["./layers/WMTSLayerView3D"],c=>
a(e(c)),b)),"geo-rss":null,kml:null,"knowledge-graph":null,"link-chart":null,"knowledge-graph-sublayer":null,"map-notes":null,"subtype-group":null,unknown:null,unsupported:null,video:null};h.layerView3DImporter={hasLayerViewModule:a=>null!=l[a.type],importLayerView:a=>{var b=l[a.type];if(null==b)throw a=a.declaredClass?a.declaredClass.slice(a.declaredClass.lastIndexOf(".")+1):"Unknown",b=a.replaceAll(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),new m(`${b}:view-not-supported`,`${a} is not supported in 3D`);
return b(a)}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});