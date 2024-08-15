// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/accessorSupport/diffUtils ../../../engine/highlightReasons ../../../engine/webgl/definitions ../../../engine/webgl/DisplayId ../../../engine/webgl/Utils ../../../engine/webgl/shaderGraph/techniques/shaders/constants ../../../engine/webgl/util/debug ./DisplayIdGenerator ./FeatureFilter ../../../../webgl/enums".split(" "),function(q,x,m,y,z,r,n,k,A,B,v,C,D,p){function w(a,c){if(!a||!c)return a;
switch(c){case "radius":case "distance":return 2*a;case "area":return Math.sqrt(a)}return a}const t=()=>y.getLogger("esri.views.layers.2d.features.support.AttributeStore"),u=v.createDebugLogger(v.DEBUG_ATTR_UPDATES,t());var E=m("esri-shared-array-buffer");m("esri-atomics");class F{constructor(a,c,b){this.size=0;this.texelSize=4;this.dirtyEnd=this.dirtyStart=0;const {pixelType:d,layout:e,textureOnly:f}=c;this.textureOnly=f||!1;this.pixelType=d;this.layout=e;this._resetRange();this.size=a;this.isLocal=
b;f||(this.data=this._initData(d,a))}get buffer(){return this.data?.buffer}unsetComponentAllTexels(a,c){const b=this.data;for(let d=0;d<this.size*this.size;d++)b[d*this.texelSize+a]&=~c;this.dirtyStart=0;this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(a,c){const b=this.data;for(let d=0;d<this.size*this.size;d++)b[d*this.texelSize+a]|=255&c;this.dirtyStart=0;this.dirtyEnd=this.size*this.size-1}setComponent(a,c,b){const d=this.data;for(const e of b)d[e*this.texelSize+a]|=c,this.dirtyStart=
Math.min(this.dirtyStart,e),this.dirtyEnd=Math.max(this.dirtyEnd,e)}setComponentTexel(a,c,b){this.data[b*this.texelSize+a]|=c;this.dirtyStart=Math.min(this.dirtyStart,b);this.dirtyEnd=Math.max(this.dirtyEnd,b)}unsetComponentTexel(a,c,b){this.data[b*this.texelSize+a]&=~c;this.dirtyStart=Math.min(this.dirtyStart,b);this.dirtyEnd=Math.max(this.dirtyEnd,b)}getData(a,c){a=k.getDisplayIdTexel(a);return this.data[a*this.texelSize+c]}setData(a,c,b){a=k.getDisplayIdTexel(a);0===(this.layout&1<<c)?t().error("mapview-attributes-store",
"Tried to set a value for a texel's readonly component"):null!=this.data&&(this.data[a*this.texelSize+c]=b,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a))}expand(a){this.size=a;this.textureOnly||(a=this._initData(this.pixelType,a),a.set(this.data),this.data=a)}toMessage(){const a=this.dirtyStart,c=this.dirtyEnd;var b=this.texelSize;if(a>c)return null;this._resetRange();const d=this.pixelType,e=this.layout,f=this.data;b=!this.isLocal&&f.slice(a*b,(c+1)*b)||null;
return{start:a,end:c,data:b,pixelType:d,layout:e}}_initData(a,c){var b=ArrayBuffer;a=A.getPixelArrayCtor(a);c=new a(new b(c*c*4*a.BYTES_PER_ELEMENT));for(b=0;b<c.length;b+=4)c[b+1]=255;return c}_resetRange(){this.dirtyStart=2147483647;this.dirtyEnd=0}}class G{constructor(a){this._client=a;this._filters=[];this._blocks=[];this._attributeComputeInfo=null;this._abortController=new AbortController;this._size=n.attributeStoreInitialSize;this._idsToHighlight=new Map;this._initialized=this._referencesGeometry=
this._referencesScale=!1;this.version=0;this._idGenerator=new C.DisplayIdGenerator;this._epoch=1}destroy(){this._abortController.abort()}_initialize(){if(null==this._blockDescriptors){var a=p.PixelType.FLOAT;u(`Creating AttributeStore ${E?"with":"without"} shared memory`);this._blockDescriptors=[{pixelType:p.PixelType.UNSIGNED_BYTE,layout:1},{pixelType:p.PixelType.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:p.PixelType.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:a,layout:15},{pixelType:a,
layout:15},{pixelType:a,layout:15},{pixelType:a,layout:15}];this._blocks=this._blockDescriptors.map(()=>null)}}get referencesScale(){return this._referencesScale}get referencesGeometry(){return this._referencesGeometry}get hasHighlight(){return 0<this._idsToHighlight.size}createDisplayIdForObjectId(a){return this._idGenerator.createIdForObjectId(a)}releaseDisplayIdForObjectId(a){return this._idGenerator.releaseIdForObjectId(a)}incrementDisplayIdGeneration(){this._idGenerator.incrementGeneration()}releaseAllIds(){this._idGenerator.releaseAll()}async update(a,
c,b,d,e=0){const f=z.diff(this._schema,a);this.version=e;if(f&&(m("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStore.update`,{changed:f}),this._schema=a,this._attributeComputeInfo=null,this._initialize(),null!=a))if(b&&(this._filters=await Promise.all(a.filters.map(g=>g?D.create({geometryType:b.geometryType,hasM:!1,hasZ:!1,timeInfo:b.timeInfo,fieldsIndex:b.fieldsIndex,spatialReference:d??b.spatialReference,filterJSON:g}):null))),"subtype"===a.type){this._attributeComputeInfo={isSubtype:!0,
subtypeField:a.subtypeField,map:new Map};this._referencesGeometry=this._referencesScale=!1;for(const g in a.bindings)await Promise.all(a.bindings[g].map(async l=>{l=await this._bind(c,l,parseInt(g,10));this._referencesGeometry=this._referencesGeometry||(l?.referencesGeometry()??!1);this._referencesScale=this._referencesScale||(l?.referencesScale()??!1)}))}else this._attributeComputeInfo={isSubtype:!1,map:new Map},await Promise.all(a.bindings.map(async g=>{g=await this._bind(c,g);this._referencesGeometry=
this._referencesGeometry||(g?.referencesGeometry()??!1);this._referencesScale=this._referencesScale||(g?.referencesScale()??!1)}))}setHighlight(a,c){const b=this._getBlock(0);b.unsetComponentAllTexels(0,(1<<r.highlightReasons.length)-1);for(const {displayId:d,highlightFlags:e}of a){if(null==d)continue;const f=k.getDisplayIdTexel(d);b.setComponent(0,e,[f])}this._idsToHighlight.clear();for(const {objectId:d,highlightFlags:e}of a)this._idsToHighlight.set(d,e);for(const {objectId:d,highlightFlags:e}of c)this._idsToHighlight.set(d,
e)}setData(a,c,b,d){const e=k.getDisplayIdTexel(a);this._ensureSizeForTexel(e);this._getBlock(c).setData(a,b,d)}getData(a,c,b){return this._getBlock(c).getData(a,b)}getHighlightFlags(a){return this._idsToHighlight.get(a)||0}unsetAttributeData(a){a=k.getDisplayIdTexel(a);this._getBlock(0).setData(a,0,0)}setAttributeData(a,c,b){const d=k.getDisplayIdTexel(a);this._ensureSizeForTexel(d);this._getBlock(0).setData(d,0,this.getFilterFlags(c));a=this._attributeComputeInfo;let e=null;a&&(e=a.isSubtype?a.map.get(c.readAttribute(a.subtypeField)):
a.map,e?.size&&e.forEach((f,g)=>{const l=1*g%4;g=this._getBlock(Math.floor(1*g/4)+n.AttributeDataType.VV);let h=f.field?.read(c,b);f.valueRepresentation&&(h=w(h,f.valueRepresentation));if(null===h||isNaN(h)||Infinity===h||-Infinity===h)h=B.nanMagicNumber;g.setData(d,l,h)}))}get epoch(){return this._epoch}sendUpdates(){const a=this._blocks.map(b=>null!=b?b.toMessage():null),c=this._getInitArgs();m("esri-2d-log-updating")&&console.log("AttributeStore: _doSendUpdate.start");this._client.update({initArgs:c,
blockData:a,version:this.version,sendUpdateEpoch:this._epoch});this._epoch+=1;m("esri-2d-log-updating")&&console.log("AttributeStore: _doSendUpdate.end")}_ensureSizeForTexel(a){for(;a>=this._size*this._size&&!this._expand(););}async _bind(a,c,b){a=await a.createComputedField(c);const {valueRepresentation:d}=c,e=this._attributeComputeInfo;if(e.isSubtype){const f=e.map.get(b)??new Map;f.set(c.binding,{field:a,valueRepresentation:d});e.map.set(b,f)}else e.map.set(c.binding,{field:a,valueRepresentation:d});
return a}_getInitArgs(){if(this._initialized)return null;this._initialized=!0;this._getBlock(n.AttributeDataType.Animation);this._getBlock(n.AttributeDataType.GPGPU);return{blockSize:this._size,blockDescriptors:this._blocks.map(a=>null!=a?{textureOnly:a.textureOnly,buffer:a.buffer,pixelType:a.pixelType}:null)}}_getBlock(a){var c=this._blocks[a];if(null!=c)return c;u(`Initializing AttributeBlock at index ${a}`);c=new F(this._size,this._blockDescriptors[a],this._client.isLocal);this._blocks[a]=c;this._initialized=
!1;return c}_expand(){if(this._size<this._schema.capabilities.maxTextureSize){const a=this._size<<=1;u("Expanding block size to",a,this._blocks);for(const c of this._blocks)c?.expand(a);this._initialized=!1;this._size=a;return 0}t().error(new x("mapview-limitations","Maximum number of onscreen features exceeded."));return-1}isVisible(a){return!!(this._getBlock(0).getData(a,0)&1<<r.highlightReasons.length)}getFilterFlags(a){let c=0;for(var b=0;b<this._filters.length;b++){var d=this._filters[b];d=!(1<<
b)||null==d||d.check(a);c|=(d?1:0)<<b}b=0;this._idsToHighlight.size&&(a=a.getObjectId(),b=this.getHighlightFlags(a));return c<<r.highlightReasons.length|b}}q.AttributeStore=G;q.getVisualVariableSizeValueRepresentationRatio=w;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});