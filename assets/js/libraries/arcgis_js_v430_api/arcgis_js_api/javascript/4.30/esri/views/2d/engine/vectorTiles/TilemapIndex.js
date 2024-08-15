// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../../../request","../../../../core/promiseUtils","../../tiling/TileKey"],function(f,g,h){class k{constructor(b){this.url=b}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){this._tileIndexPromise||(this._tileIndexPromise=f(this.url).then(b=>b.data.index));return this._tileIndexPromise}async dataKey(b,a){const c=await this.fetchTileIndex();g.throwIfAborted(a);return this._getIndexedDataKey(c,b)}_getIndexedDataKey(b,a){const c=[a];if(0>a.level||0>a.row||0>a.col||0<a.row>>a.level||
0<a.col>>a.level)return null;for(;0!==a.level;)a=new h(a.level-1,a.row>>1,a.col>>1,a.world),c.push(a);a=c.pop();let d,e;if(1===b)return a;for(;c.length;)if(d=c.pop(),e=(d.col&1)+((d.row&1)<<1),b){if(0===b[e]){a=null;break}if(1===b[e]){a=d;break}a=d;b=b[e]}return a}}return k});