// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/asyncUtils ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/unitUtils ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polyline ../../geometry/projection ../../geometry/support/aaBoundingRect ./ElevationSampler ./ElevationTile ./TileKey".split(" "),function(z,N,r,G,w,D,E,H,O,v,A,I,J,K){function F(a,b,c=0){const d=x(a,b);b=d.length-1;if(0<c){a=D.getMetersPerUnitForSR(a.spatialReference);const e=c/a;c=d.findIndex(f=>f.resolution<e);0===c?b=
0:0<c&&(b=c-1)}return b}async function P(a,b,c){const d=a.layer.tileInfo.spatialReference;b instanceof u?c=await b.project(d,c):(await v.initializeProjection([{source:b.spatialReference,dest:d}],{signal:c}),c=v.project(b,d));if(!c)throw new r("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${b.spatialReference.wkid}' on an elevation service in '${d.wkid}'`);a.geometry=u.fromGeometry(c)}function Q(a){if(null!=a.layer.fullExtent){var b=new J.ElevationTile(null);b.sample=()=>
a.options.noDataValue;a.outsideExtentTile=b;var c=a.layer.fullExtent;a.geometry.coordinates.forEach(d=>{const e=d.x,f=d.y;if(e<c.xmin||e>c.xmax||f<c.ymin||f>c.ymax)d.elevationTile=b})}}function R(a){const {tileInfo:b,tilemapCache:c}=a.layer,d=F(b,c,a.options.minDemResolution);a.selectTilesAtLOD(d,a.options.maximumAutoTileRequests)}function x(a,b){a=a.lods;if(null!=b?.tileInfo){const {effectiveMinLOD:c,effectiveMaxLOD:d}=b;return a.filter(e=>e.level>=c&&e.level<=d)}return a}async function B(a,b){var c=
a.getTilesToFetch();const d={},e=a.options.cache,f=a.options.noDataValue;c=c.map(async h=>{if(null!=h.id){var k=`${a.layer.uid}:${h.id}:${f}`,m=null!=e?e.get(k):null;m=null!=m?m:await a.layer.fetchTile(h.level,h.row,h.col,{noDataValue:f,signal:b});null!=e&&e.put(k,m);d[h.id]=new J.ElevationTile(h,m)}});await w.whenOrAbort(Promise.allSettled(c),b);a.populateElevationTiles(d)}function S(a){const b=a.layer.tileInfo;let c=0;const d={},e=k=>{null!=k.id&&(k.id in d?d[k.id]++:(d[k.id]=1,c++))},f=k=>{if(null!=
k.id){var m=d[k.id];1===m?(delete d[k.id],c--):d[k.id]=m-1}};a.forEachTileToFetch(e,f);let h=!0;for(;h&&(h=!1,a.forEachTileToFetch(k=>{c<=a.options.maximumAutoTileRequests||(f(k),b.upsampleTile(k)&&(h=!0),e(k))},f),h););}function T(a){a.geometry.coordinates.forEach(b=>{var c=b.elevationTile;let d=a.options.noDataValue;c&&(c=c.sample(b.x,b.y),null!=c?d=c:b.elevationTile=null);b.z=d})}function L(a,b){const c={},d=[];for(const f of a)(a=f.id)&&!c[a]?(c[a]=f,d.push(f)):b&&b(f);const e=d.sort((f,h)=>f.level-
h.level);return e.filter((f,h)=>{for(let k=0;k<h;k++){const m=e[k].extent;if(m&&f.extent&&A.contains(m,f.extent))return b&&b(f),!1}return!0})}async function U(a,b){b=await a.geometry.project(a.outSpatialReference,b);G.assertIsSome(b);b={geometry:b.export(),noDataValue:a.options.noDataValue};a.options.returnSampleInfo&&(b.sampleInfo=V(a));a.geometry.coordinates.forEach(c=>{c.tile=null;c.elevationTile=null});return b}function V(a){const b=a.layer.tileInfo,c=D.getMetersPerUnitForSR(b.spatialReference);
return a.geometry.coordinates.map(d=>{let e=-1;d.elevationTile&&d.elevationTile!==a.outsideExtentTile&&(e=b.lodAt(d.elevationTile.tile.level).resolution*c);return{demResolution:e}})}class W{async queryAll(a,b,c){a=c?.ignoreInvisibleLayers?a.filter(e=>e.visible):a.slice();if(!a.length)throw new r("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");var d=u.fromGeometry(b);b=!1;c?.returnSampleInfo||(b=!0);c={...C,...c,returnSampleInfo:!0};d=await this.query(a[a.length-
1],d,c);a=await this._queryAllContinue(a,d,c);a.geometry=a.geometry.export();b&&delete a.sampleInfo;return a}async query(a,b,c){if(!a)throw new r("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!b||!(b instanceof u)&&"point"!==b.type&&"multipoint"!==b.type&&"polyline"!==b.type)throw new r("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");var d={...C,...c};c=new X(a,b.spatialReference,
d);d=d.signal;await a.load({signal:d});await P(c,b,d);await this._selectTiles(c,d);await B(c,d);T(c);return U(c,d)}async createSampler(a,b,c){if(!a)throw new r("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!b||"extent"!==b.type)throw new r("elevation-query:invalid-extent","Invalid or undefined extent");return this._createSampler(a,b,{...C,...c})}async createSamplerAll(a,b,c){a=c?.ignoreInvisibleLayers?a.filter(e=>e.visible):a.slice();if(!a.length)throw new r("elevation-query:invalid-layer",
"Elevation queries require at least one elevation layer to fetch tiles from");if(!b||"extent"!==b.type)throw new r("elevation-query:invalid-extent","Invalid or undefined extent");c={...C,...c,returnSampleInfo:!0};const d=await this._createSampler(a[a.length-1],b,c);return this._createSamplerAllContinue(a,b,d,c)}async _createSampler(a,b,c,d){const e=c.signal;await a.load({signal:e});const f=b.spatialReference,h=a.tileInfo.spatialReference;f.equals(h)||(await v.initializeProjection([{source:f,dest:h}],
{signal:e}),b=v.project(b,h));a=new Y(a,b,c,d);await this._selectTiles(a,e);await B(a,e);return new I.MultiTileElevationSampler(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(a,b,c,d){a.pop();if(!a.length)return c;var e=c.samplers.filter(f=>!f.tile.hasNoDataValues).map(f=>A.fromExtent(f.extent));e=await this._createSampler(a[a.length-1],b,d,e);if(0===e.samplers.length)return c;c=c.samplers.concat(e.samplers);c=new I.MultiTileElevationSampler(c,d.noDataValue);
return this._createSamplerAllContinue(a,b,c,d)}async _queryAllContinue(a,b,c){var d=a.pop();const e=b.geometry.coordinates,f=b.sampleInfo;G.assertIsSome(f);const h=[],k=[];for(let p=0;p<e.length;p++){const g=f[p];0<=g.demResolution?g.source||(g.source=d):a.length&&(h.push(e[p]),k.push(p))}if(!a.length||0===h.length)return b;d=b.geometry.clone(h);const m=await this.query(a[a.length-1],d,c),y=m.sampleInfo;if(!y)throw Error("no sampleInfo");k.forEach((p,g)=>{e[p].z=m.geometry.coordinates[g].z;f[p].demResolution=
y[g].demResolution});return this._queryAllContinue(a,b,c)}async _selectTiles(a,b){"geometry"===a.type&&Q(a);var c=a.options.demResolution;if("number"===typeof c){const {tileInfo:d,tilemapCache:e}=a.layer;b=D.getMetersPerUnitForSR(d.spatialReference);c/=b;b=x(d,e);let f=b[0],h=0;for(let k=1;k<b.length;k++){const m=b[k];Math.abs(m.resolution-c)<Math.abs(f.resolution-c)&&(f=m,h=k)}a.selectTilesAtLOD(h)}else if("finest-contiguous"===c)await this._selectTilesFinestContiguous(a,b);else if("auto"===c)await this._selectTilesAuto(a,
b);else throw new r("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${c}', expected a number, "finest-contiguous" or "auto"`);}async _selectTilesFinestContiguous(a,b){const {tileInfo:c,tilemapCache:d}=a.layer,e=F(c,d,a.options.minDemResolution);await this._selectTilesFinestContiguousAt(a,e,b)}async _selectTilesFinestContiguousAt(a,b,c){var d=a.layer;a.selectTilesAtLOD(b);if(!(0>b)){var e=d.tilemapCache;d=a.getTilesToFetch();try{if(e&&null==e?.tileInfo)await w.whenOrAbort(Promise.all(d.map(f=>
e.fetchAvailability(f.level,f.row,f.col,{signal:c}))),c);else if(await B(a,c),!a.allElevationTilesFetched())throw a.clearElevationTiles(),new r("elevation-query:has-unavailable-tiles");}catch(f){w.throwIfAbortError(f),await this._selectTilesFinestContiguousAt(a,b-1,c)}}}async _selectTilesAuto(a,b){R(a);S(a);const c=a.layer.tilemapCache;if(!c||null!=c?.tileInfo)return this._selectTilesAutoPrefetchUpsample(a,b);const d={},e=a.getTilesToFetch().map(async f=>{const h=new K.TileKey(null,0,0,0,A.create()),
k=await N.result(c.fetchAvailabilityUpsample(f.level,f.row,f.col,h,{signal:b}));!1===k.ok?w.throwIfAbortError(k.error):null!=f.id&&(d[f.id]=h)});await w.whenOrAbort(Promise.all(e),b);a.remapTiles(d)}async _selectTilesAutoPrefetchUpsample(a,b){const c=a.layer.tileInfo;await B(a,b);let d=!1;a.forEachTileToFetch((e,f)=>{c.upsampleTile(e)?d=!0:f()});d&&await this._selectTilesAutoPrefetchUpsample(a,b)}}class u{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(a){const b=new u;
b.geometry=this.geometry;b.spatialReference=this.spatialReference;b.coordinates=a||this.coordinates.map(c=>c.clone());b._exporter=this._exporter;return b}async project(a,b){if(this.spatialReference.equals(a))return this.clone();await v.initializeProjection([{source:this.spatialReference,dest:a}],{signal:b});b=new E({spatialReference:this.spatialReference,points:this.coordinates.map(d=>[d.x,d.y])});const c=v.project(b,a);if(!c)return null;b=this.coordinates.map((d,e)=>{d=d.clone();e=c.points[e];d.x=
e[0];d.y=e[1];return d});b=this.clone(b);b.spatialReference=a;return b}static fromGeometry(a){const b=new u;b.geometry=a;b.spatialReference=a.spatialReference;if(a instanceof u)b.coordinates=a.coordinates.map(c=>c.clone()),b._exporter=(c,d)=>{c=a.clone(c);c.spatialReference=d;return c};else switch(a.type){case "point":const {hasZ:c,hasM:d}=a;b.coordinates=c&&d?[new n(a.x,a.y,a.z,a.m)]:c?[new n(a.x,a.y,a.z)]:d?[new n(a.x,a.y,null,a.m)]:[new n(a.x,a.y)];b._exporter=(g,l)=>a.hasM?new H(g[0].x,g[0].y,
g[0].z,g[0].m,l):new H(g[0].x,g[0].y,g[0].z,l);break;case "multipoint":const {hasZ:e,hasM:f}=a;b.coordinates=e&&f?a.points.map(g=>new n(g[0],g[1],g[2],g[3])):e?a.points.map(g=>new n(g[0],g[1],g[2])):f?a.points.map(g=>new n(g[0],g[1],null,g[2])):a.points.map(g=>new n(g[0],g[1]));b._exporter=(g,l)=>a.hasM?new E({points:g.map(t=>[t.x,t.y,t.z,t.m]),hasZ:!0,hasM:!0,spatialReference:l}):new E(g.map(t=>[t.x,t.y,t.z]),l);break;case "polyline":const h=[],k=[],{hasZ:m,hasM:y}=a;let p=0;for(const g of a.paths)if(k.push([p,
p+g.length]),p+=g.length,m&&y)for(const l of g)h.push(new n(l[0],l[1],l[2],l[3]));else if(m)for(const l of g)h.push(new n(l[0],l[1],l[2]));else if(y)for(const l of g)h.push(new n(l[0],l[1],null,l[2]));else for(const l of g)h.push(new n(l[0],l[1]));b.coordinates=h;b._exporter=(g,l)=>{const t=a.hasM?g.map(q=>[q.x,q.y,q.z,q.m]):g.map(q=>[q.x,q.y,q.z]);g=k.map(q=>t.slice(q[0],q[1]));return new O({paths:g,hasM:a.hasM,hasZ:!0,spatialReference:l})}}return b}}class n{constructor(a,b,c=null,d=null,e=null,
f=null){this.x=a;this.y=b;this.z=c;this.m=d;this.tile=e;this.elevationTile=f}clone(){return new n(this.x,this.y,this.z,this.m)}}class M{constructor(a,b){this.layer=a;this.options=b}}class X extends M{constructor(a,b,c){super(a,c);this.outSpatialReference=b;this.type="geometry"}selectTilesAtLOD(a){if(0>a)this.geometry.coordinates.forEach(b=>b.tile=null);else{const {tileInfo:b,tilemapCache:c}=this.layer,d=x(b,c)[a].level;this.geometry.coordinates.forEach(e=>e.tile=b.tileAt(d,e.x,e.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(a=>
!a.elevationTile)}clearElevationTiles(){for(const a of this.geometry.coordinates)a.elevationTile!==this.outsideExtentTile&&(a.elevationTile=null)}populateElevationTiles(a){for(const b of this.geometry.coordinates)!b.elevationTile&&b.tile?.id&&(b.elevationTile=a[b.tile.id])}remapTiles(a){for(const b of this.geometry.coordinates){const c=b.tile?.id;b.tile=c?a[c]:null}}getTilesToFetch(){const a={},b=[];for(const c of this.geometry.coordinates){const d=c.tile;if(!d)continue;const e=c.tile?.id;c.elevationTile||
!e||a[e]||(a[e]=d,b.push(d))}return b}forEachTileToFetch(a){for(const b of this.geometry.coordinates)b.tile&&!b.elevationTile&&a(b.tile,()=>{b.tile=null})}}class Y extends M{constructor(a,b,c,d){super(a,c);this.type="extent";this.elevationTiles=[];this._candidateTiles=[];this._fetchedCandidates=new Set;this.extent=b.clone().intersection(a.fullExtent);this.maskExtents=d}selectTilesAtLOD(a,b){b=this._maximumLodForRequests(b);a=Math.min(b,a);0>a?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(a)}_maximumLodForRequests(a){const {tileInfo:b,
tilemapCache:c}=this.layer,d=x(b,c);if(!a)return d.length-1;const e=this.extent;if(null==e)return-1;for(let f=d.length-1;0<=f;f--){const h=d[f];if(Math.ceil(e.width/(h.resolution*b.size[0]))*Math.ceil(e.height/(h.resolution*b.size[1]))<=a)return f}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0;this._fetchedCandidates.clear()}populateElevationTiles(a){for(const b of this._candidateTiles){const c=
b.id&&a[b.id];c&&(this._fetchedCandidates.add(b),this.elevationTiles.push(c))}}remapTiles(a){this._candidateTiles=L(this._candidateTiles.map(b=>a[b.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(a,b){const c=this._candidateTiles;this._candidateTiles=[];c.forEach(d=>{if(this._fetchedCandidates.has(d))b&&b(d);else{var e=!1;a(d,()=>e=!0);e?b&&b(d):this._candidateTiles.push(d)}});this._candidateTiles=L(this._candidateTiles,b)}_selectCandidateTilesCoveringExtentAt(a){this._candidateTiles.length=
0;var b=this.extent;if(null!=b){var {tileInfo:c,tilemapCache:d}=this.layer,e=x(c,d)[a];a=c.tileAt(e.level,b.xmin,b.ymin);var f=a.extent;if(null!=f){var h=Math.ceil((b.xmax-f[0])/(e.resolution*c.size[0]));b=Math.ceil((b.ymax-f[1])/(e.resolution*c.size[1]));for(e=0;e<b;e++)for(f=0;f<h;f++){const k=new K.TileKey(null,a.level,a.row-e,a.col+f);c.updateTileInfo(k);this._tileIsMasked(k)||this._candidateTiles.push(k)}}}}_tileIsMasked(a){return this.maskExtents?this.maskExtents.some(b=>a.extent&&A.contains(b,
a.extent)):!1}}const C={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};z.ElevationQuery=W;z.GeometryDescriptor=u;z.getFinestLodIndex=F;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});