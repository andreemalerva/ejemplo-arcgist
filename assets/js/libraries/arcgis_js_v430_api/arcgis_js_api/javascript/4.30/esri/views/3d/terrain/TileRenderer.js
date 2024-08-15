// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/has ../../../core/maybe ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../layers/support/layerUtils ./BlendLayersTechnique ./interfaces ./LayerClass ./NeighborIndex ./TerrainData ./terrainUtils ./TextureFader ./TextureReference ./TileCompositor ./TileRenderInfo ./TileTexture ./TileUpdate ../webgl-engine/core/shaderLibrary/output/BlendOptions ../webgl-engine/core/shaderLibrary/terrain/BlendLayersOutput ../webgl-engine/lib/glUtil3D ../../webgl/enums ../../webgl/Texture ../../webgl/TextureDescriptor".split(" "),
function(K,ja,Q,R,S,z,aa,L,A,w,ba,q,T,M,ca,da,U,F,V,r,ea,D,N,fa){function O(a,b,c){g.layerIndex=b;g.vtlNeighborInfos.clear();const d=a.layerInfo[A.LayerClass.MAP][b];R.set(g.offset,0,0);g.tile=a;g.scale=1;g.sourceLod=a.lij;g.sourceLayerInfo=d;g.isVTLBackground=c;if(d.data)return c&&a.forEachLoadedNeighbor((n,t)=>{if(n.level===a.level){var u=n.layerInfo[A.LayerClass.MAP][b];if(q.isVectorTilePerLayerInfo(u)&&d.data!==u.data){var l=g.vtlNeighborInfos.pushNew();l.offset=v[t];l.sourceLod=n.lij;l.sourceLayerInfo=
u}}}),g;const e=d.upsampleInfo;return e?(c=e.tile.layerInfo[A.LayerClass.MAP][b],g.tile=e.tile,R.copy(g.offset,e.offset),g.scale=e.scale,g.sourceLod=e.tile.lij,g.sourceLayerInfo=c,g):c?g:null}function ha(a){a=a.sourceLayerInfo.data;return a.source?"nearest"===a.interpolation:!1}function W(a){let b="normal"!==a.blendMode;z.isGroupLayer(a.parent)&&(b=W(a.parent)||b);return b}function X(a,b){z.isGroupLayer(a.parent)&&X(a.parent,b);const c=a.uid;if(null!=c&&""!==c){const d=G.get(c);d?d.start=b:G.set(c,
new Y(b,b,a.blendMode,a.opacity,r.BlendLayersOutput.Composite,1))}}class Y{constructor(a,b,c,d,e,n){this.start=a;this.end=b;this.blendMode=c;this.opacity=d;this.output=e;this.baseOpacity=n}}class ia{constructor(a,b,c,d){this._rctx=a;this.tileSize=b;this._techniques=c;this._cache=d;this._passParameters=new aa.BlendLayersPassParameters;this._backgroundColor=this._backgroundTexture=null;this._backgroundDirty=!1;this._maxAnisotropy=this._rctx.parameters.maxMaxAnisotropy;this._compositor=new ca.TileCompositor(this._rctx,
this._techniques);this._ensureBackgroundTexture(this.tileSize)}dispose(){this._compositor=Q.disposeMaybe(this._compositor);this._backgroundTexture=Q.releaseMaybe(this._backgroundTexture)}get backgroundIsGrid(){return null==this._backgroundColor}get backgroundColor(){return this._backgroundColor}updateHeading(a){this._compositor?.updateHeading(a)}updateTileTexture(a,b){if(a.renderData){var c=a.surface,d=c.baseOpacity,e=0,n=0,t=this.tileSize,u=!1,l=!1,B=c.view.state.contentPixelRatio,p=!1;G.clear();
E.length=0;for(var x=a.layerInfo[A.LayerClass.MAP],k=0,C=null;k<x.length;k++){const f=c.layerViewByIndex(k,A.LayerClass.MAP);var h=f.layer.opacity;const H=f.fullOpacity;l=l||z.isBaseLayer(f.layer);if(q.isBlendableLayerView(f)){var m="normal"!==f.layer.blendMode;if(z.isGroupLayer(f.layer.parent)){var y=f.layer.parent.uid;null!=y&&""!==y&&(m=W(f.layer.parent)||m)}m&&(p=m,u=!1)}if(0!==h||p){if(++n,h=q.isVectorTileLayerView(f),m=O(a,k,h))x[k].pendingUpdates&=~(F.TileUpdate.TEXTURE_NOFADING&F.TileUpdate.TEXTURE_FADING),
z.isGroupLayer(f.layer.parent)&&(y=f.layer.parent.uid,null!=y&&""!==y&&X(f.layer.parent,k)),h?t=Math.max(t,this.tileSize*B):1===d&&1===H&&(f.isOpaque||this._dataToTexture(m)&&m.sourceLayerInfo.data.descriptor.isOpaque)&&(u=!0),++e,null===C&&(C=k)}else x[k].pendingUpdates&=~(F.TileUpdate.TEXTURE_NOFADING&F.TileUpdate.TEXTURE_FADING)}d=t/this.tileSize;c=this._ensureBackgroundTexture(this.tileSize);0===e||null===C?(e=a.renderData,b=b===L.TextureUpdate.FADING&&null!=e.textureReference&&(a.surface.view.layerViewManager.updating||
0<n)?T.ActivationTime.Delayed:T.ActivationTime.Immediate,e.setTextureReference(new M.TextureReference(c,L.TextureUpdate.FADING,Z,a.surface.baseOpacity,0,1),b)):1===e&&!p&&this._useLayerTexture(a,C)||this._composeLayers(a,b,k-1,l,t,d,!u||p,G,p)}}_ensureBackgroundTexture(a){null==this._backgroundTexture&&(this._backgroundTexture=this._buildTexture(a,!1),this._backgroundDirty=!0);this._backgroundDirty&&(this._compositor.bind(a),this._passParameters.offset=S.ZEROS,this._passParameters.scale=1,this._passParameters.opacity=
1,this.backgroundColor&&(this._passParameters.backgroundColor=this.backgroundColor),this._compositor.drawBackground(this._passParameters,null!=this.backgroundColor),this._compositor.copyFBOToTexture(this._backgroundTexture),this._compositor.unbind(),this._backgroundDirty=!1);return this._backgroundTexture}_useLayerTexture(a,b){var c=a.surface.layerViewByIndex(b,A.LayerClass.MAP),d=z.isBaseLayer(c.layer);const e=d?a.surface.baseOpacity:1;d=d?1:a.surface.baseOpacity;c=c.fullOpacity;b=O(a,b,!1);return this._dataToTexture(b)?
(a.renderData.setTextureReference(new M.TextureReference(b.sourceLayerInfo.data,L.TextureUpdate.FADING,b,e,d,c)),!0):!1}_composeLayers(a,b,c,d,e,n,t,u,l){this._compositor.ensureBuffer(e);const B=a.surface.baseOpacity;let p=!1,x=D.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,k=!1,C=0;for(let f=c;0<=f;f--){c=a.surface.layerViewByIndex(f,A.LayerClass.MAP);var h=q.isVectorTileLayerView(c);h=O(a,f,h);const H=c.layer.opacity;if(!h||0===H&&!l)continue;const I=!z.isBaseLayer(c.layer)&&!p;I&&(p=!0);let P=!1;u.forEach(J=>
{J.start===f&&(J.output=d?r.BlendLayersOutput.Composite:t&&I?this.backgroundIsGrid?r.BlendLayersOutput.GridComposite:r.BlendLayersOutput.ColorComposite:r.BlendLayersOutput.Composite,J.baseOpacity=I?B:1,E.push(J),this._compositor.openGroup(e),P=!0)});var m=0===C;m=P?r.BlendLayersOutput.GroupBackgroundComposite:t&&m?this.backgroundIsGrid?r.BlendLayersOutput.GridComposite:r.BlendLayersOutput.ColorComposite:r.BlendLayersOutput.Composite;c=V.blendModeFromString[q.isBlendableLayerView(c)?c.layer.blendMode:
"normal"];this._passParameters.baseOpacity=I&&!P&&1>B?B:1;this._passParameters.opacity=H;q.isVectorTileRenderInfo(h)?k=this._compositor.drawVectorData(this._passParameters,m,e,c,h,n,this.tileSize,k):q.isImageryTileRenderInfo(h)?(this._compositor.drawRasterData(this._passParameters,m,e,c,h),ha(h)&&(x=D.TextureSamplingMode.NEAREST)):this._dataToTexture(h)&&(this._passParameters.texture=h.sourceLayerInfo.data.texture,this._passParameters.offset=h.offset,this._passParameters.scale=h.scale,this._compositor.drawImageData(this._passParameters,
m,e,c));for(;0<E.length&&E[E.length-1].end===f;)c=E.pop(),this._passParameters.baseOpacity=c.baseOpacity,this._passParameters.opacity=c.opacity,this._passParameters.offset=S.ZEROS,this._passParameters.scale=1,this._compositor.drawGroup(this._passParameters,c.output,e,V.blendModeFromString[c.blendMode]);C++}a=a.renderData;const y=l||p&&1>B;l=a.ensureTexture(e,y,()=>this._buildTexture(e,y,x));this._compositor.copyFBOToTexture(l);this._compositor.unbind();a.setTextureReference(new M.TextureReference(l,
b,Z,p?1:B,0,1))}_dataToTexture(a){if(q.isImageSourceRenderInfo(a)){const b=a.sourceLayerInfo;b.data=this._buildTexture(b.data,!0);a.tile.setMemoryDirty()}return q.isTextureTileRenderInfo(a)}setBackground(a){this._backgroundColor!==a&&(this._backgroundColor=a,this._backgroundDirty=!0)}_buildTexture(a,b,c=D.TextureSamplingMode.LINEAR_MIPMAP_LINEAR){if(null==a)return null;const d=new fa.TextureDescriptor;d.wrapMode=D.TextureWrapMode.CLAMP_TO_EDGE;d.samplingMode=c;d.maxAnisotropy=this._maxAnisotropy;
d.preMultiplyAlpha=!0;d.flipped=!0;d.hasMipmap=!0;b||(d.pixelFormat=D.PixelFormat.RGB);b=this._rctx;let e;if("number"===typeof a)d.width=d.height=a,e=this._buildTileTexture(d,a);else if(ba.isImageWithType(a))d.isOpaque=a.isOpaque,d.isOpaque&&(d.pixelFormat=D.PixelFormat.RGB),e=this._buildTileTexture(d,a.element.width,a.element);else try{d.width=a.width,d.height=a.height,e=this._buildTileTexture(d,a.width,a)}catch(n){e=new U(ea.createEmptyTexture(b)),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}a=
b.bindTexture(e.texture,N.Texture.TEXTURE_UNIT_FOR_UPDATES);e.generateMipmap();b.bindTexture(a,N.Texture.TEXTURE_UNIT_FOR_UPDATES);return e}_buildTileTexture(a,b,c){b=this._cache.pop(`${b} ${a.pixelFormat}`);if(!b)return new U(new N.Texture(this._rctx,a,c),this._cache);b.retain();b.texture.setData(c);return b}get test(){}}const G=new Map,E=[],g=new da.TileRenderInfo,Z={offset:[0,0],scale:1},v=[];v[w.NeighborIndex.NORTH]=[0,-1];v[w.NeighborIndex.NORTH_EAST]=[-1,-1];v[w.NeighborIndex.EAST]=[-1,0];v[w.NeighborIndex.SOUTH_EAST]=
[-1,1];v[w.NeighborIndex.SOUTH]=[0,1];v[w.NeighborIndex.SOUTH_WEST]=[1,1];v[w.NeighborIndex.WEST]=[1,0];v[w.NeighborIndex.NORTH_WEST]=[1,-1];K.GroupInfo=Y;K.TileRenderer=ia;Object.defineProperty(K,Symbol.toStringTag,{value:"Module"})});