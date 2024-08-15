// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../Graphic ../../../../request ../../../../core/Accessor ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../../../geometry/support/spatialReferenceUtils ../../../../layers/support/rasterFunctions/rasterProjectionHelper ../../../../layers/support/rasterFunctions/vectorFieldUtils ../../engine/imagery/RasterVFContainer ./ImageryVFStrategy".split(" "),
function(e,p,q,c,r,t,l,h,C,D,u,v,w,x,m,y,z){c=class extends c{constructor(){super(...arguments);this.attached=!1;this.container=new y.RasterVFContainer;this.type="imageryVF";this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""};this._fetchpixels=async(a,b,f,d)=>{const k=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:g,width:A,height:B}=m.snapImageToSymbolTile(a,b,f,n,k);if(null!=k&&!k.intersects(a))return{extent:g,pixelBlock:null};a=
{bbox:`${g.xmin}, ${g.ymin}, ${g.xmax}, ${g.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(a)&&(b=this.getPixelData(),null!=b&&`${b.extent.xmin}, ${b.extent.ymin}, ${b.extent.xmax}, ${b.extent.ymax}`===a.bbox))return b;({pixelData:d}=await this.layer.fetchImage(g,A,B,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:d}));this._dataParameters=a;d=d?.pixelBlock;if(null==
d)return{extent:g,pixelBlock:null};d="vector-uv"===this.layer.rasterInfo.dataType?m.convertVectorFieldData(d,"vector-uv"):d;return{extent:g,pixelBlock:d}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference);this._strategy=new z({container:this.container,fetchPixels:this._fetchpixels});this.addHandles(l.watch(()=>this.layer.renderer,a=>this._updateSymbolizerParams(a),l.syncAndInitial),"attach")}detach(){this._strategy.destroy();
this.container.children.forEach(a=>a.destroy());this.container.removeAllChildren();this.removeHandles("attach");this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const a=this.container.children[0]?.rawPixelData;if(this.updating||!a)return null;const {extent:b,pixelBlock:f}=a;return{extent:b,pixelBlock:f}}hitTest(a){return new p({attributes:{},geometry:a.clone(),layer:this.layer})}update(a){this._strategy.update(a,this._symbolizerParams).catch(b=>{t.isAbortError(b)||
r.getLogger(this).error(b)})}redraw(){const {renderer:a}=this.layer;a&&(this._updateSymbolizerParams(a),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(a){const b=this._dataParameters.time===a.time,f=this._dataParameters.symbolTileSize===a.symbolTileSize,d=this._dataParameters.bbox===a.bbox;return this._dataParameters.exportParametersVersion===a.exportParametersVersion&&b&&f&&d}async _getProjectedFullExtent(a){try{return x.projectExtent(this.layer.fullExtent,a)}catch(b){try{const f=
(await q(this.layer.url,{query:{option:"footprints",outSR:w.srToRESTValue(a),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return f?v.fromJSON(f):null}catch{return null}}}_updateSymbolizerParams(a){"vector-field"===a.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};e.__decorate([h.property()],c.prototype,"attached",void 0);e.__decorate([h.property()],c.prototype,"container",void 0);e.__decorate([h.property()],c.prototype,"layer",
void 0);e.__decorate([h.property()],c.prototype,"timeExtent",void 0);e.__decorate([h.property()],c.prototype,"type",void 0);e.__decorate([h.property()],c.prototype,"view",void 0);e.__decorate([h.property()],c.prototype,"updating",null);return c=e.__decorate([u.subclass("esri.views.2d.layers.imagery.VectorFieldView2D")],c)});