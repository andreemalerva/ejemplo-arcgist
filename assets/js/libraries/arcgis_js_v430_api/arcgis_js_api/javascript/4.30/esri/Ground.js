// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ./chunks/tslib.es6 ./Color ./core/Collection ./core/collectionUtils ./core/compilerUtils ./core/Error ./core/JSONSupport ./core/lang ./core/Loadable ./core/loadAll ./core/Logger ./core/maybe ./core/promiseUtils ./core/accessorSupport/decorators/property ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./ground/NavigationConstraint ./webdoc/support/opacityUtils".split(" "),function(n,h,w,x,y,z,A,f,q,B,C,r,D,l,k,t,
E,F,G,u){function v(a){return"elevation"===a.type||a&&"createElevationSampler"in a}var p;f=p=class extends f.JSONSupportMixin(B){constructor(a){super(a);this.opacity=1;this.navigationConstraint=this.surfaceColor=null;this.layers=new x;const b=c=>{c.parent&&c.parent!==this&&"remove"in c.parent&&c.parent.remove(c);c.parent=this;"elevation"!==c.type&&"base-elevation"!==c.type&&r.getLogger(this).error(`Layer '${c.title}, id:${c.id}' of type '${c.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)};
this.addHandles([this.layers.on("after-add",c=>b(c.item)),this.layers.on("after-remove",c=>{c.item.parent=null})])}initialize(){this.when().catch(a=>{l.isAbortError(a)||r.getLogger(this).error("#load()","Failed to load ground",a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const a=this.layers.removeAll();for(const b of a)D.destroyMaybe(b);this.layers.destroy()}normalizeCtorArgs(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a={...a},
delete a.resourceInfo);return a}set layers(a){this._set("layers",y.referenceSetter(a,this._get("layers")))}writeLayers(a,b,c,e){const g=[];a&&(e={...e,layerContainerType:"ground"},a.forEach(d=>{if("write"in d){const m={};z.typeCast(d)().write(m,e)&&g.push(m)}else e?.messages&&e.messages.push(new A("layer:unsupported",`Layers (${d.title}, ${d.id}) of type '${d.declaredClass}' cannot be persisted in the ground`,{layer:d}))}));b.layers=g}load(a){this.addResolvingPromise(this._loadFromSource(a));return Promise.resolve(this)}loadAll(){return C.loadAll(this,
a=>{a(this.layers)})}async queryElevation(a,b){await this.load({signal:b?.signal});var {ElevationQuery:c}=await new Promise((g,d)=>n(["./layers/support/ElevationQuery"],g,d));l.throwIfAborted(b);c=new c;const e=this.layers.filter(v).toArray();return c.queryAll(e,a,b)}async createElevationSampler(a,b){await this.load({signal:b?.signal});var {ElevationQuery:c}=await new Promise((g,d)=>n(["./layers/support/ElevationQuery"],g,d));l.throwIfAborted(b);c=new c;const e=this.layers.filter(v).toArray();return c.createSamplerAll(e,
a,b)}clone(){const a={opacity:this.opacity,surfaceColor:q.clone(this.surfaceColor),navigationConstraint:q.clone(this.navigationConstraint),layers:this.layers.slice()};this.loaded&&(a.loadStatus="loaded");return(new p({resourceInfo:this.resourceInfo})).set(a)}read(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});super.read(a,b)}_loadFromSource(a){const b=this.resourceInfo;return b?this._loadLayersFromJSON(b.data,b.context,a):Promise.resolve()}async _loadLayersFromJSON(a,b,c){const e=
b?.origin||"web-scene",g=b?.portal||null;b=b?.url||null;const {populateOperationalLayers:d}=await new Promise((m,H)=>n(["./layers/support/layersCreator"],m,H));l.throwIfAborted(c);c=[];a.layers&&Array.isArray(a.layers)&&c.push(d(this.layers,a.layers,{context:{origin:e,url:b,portal:g,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}));await Promise.allSettled(c)}};h.__decorate([k.property({json:{read:!1}})],f.prototype,"layers",null);h.__decorate([F.writer("layers")],
f.prototype,"writeLayers",null);h.__decorate([k.property({readOnly:!0})],f.prototype,"resourceInfo",void 0);h.__decorate([k.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:t.Integer,read:{reader:u.transparencyToOpacity,source:"transparency"},write:{writer:(a,b)=>{b.transparency=u.opacityToTransparency(a)},target:"transparency"}}})],f.prototype,"opacity",void 0);h.__decorate([k.property({type:w,json:{type:[t.Integer],write:(a,b)=>{b.surfaceColor=a.toJSON().slice(0,3)}}})],f.prototype,
"surfaceColor",void 0);h.__decorate([k.property({type:G.NavigationConstraint,json:{write:!0}})],f.prototype,"navigationConstraint",void 0);return f=p=h.__decorate([E.subclass("esri.Ground")],f)});