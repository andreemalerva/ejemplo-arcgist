// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../TimeExtent ../../core/Error ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/layerContainerType ../../core/accessorSupport/read ../../core/accessorSupport/write ./operationalLayers ../support/commonProperties".split(" "),
function(l,f,n,k,t,g,p,y,z,q,u,h,m,v,w,x,r){l.OperationalLayer=c=>{c=class extends c{constructor(){super(...arguments);this.persistenceEnabled=!0;this.title=null}readId(a,b,d){return"Group Layer"===d?.portalItem?.type?void 0:a}writeListMode(a,b,d,e){e&&"ground"===e.layerContainerType?b[d]=a:a&&w.willPropertyWrite(this,d,{},e)&&(b[d]=a)}writeOperationalLayerType(a,b,d,e){a&&"tables"!==e?.layerContainerType&&(b.layerType=a)}writeTitle(a,b){b.title=a??"Layer"}readTimeExtent(a){return a?n.fromArray(a):
null}writeTimeExtent(a,b,d,e){a&&"tables"!==e.layerContainerType&&(a.isEmpty?e?.messages&&e.messages.push(new k("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):b[d]=a.toArray())}read(a,b){b&&(b.layer=this);v.readLoadable(this,a,d=>super.read(a,d),b)}write(a,b){if(!this.persistenceEnabled&&!b?.ignorePersistenceEnabled)return null;if(b?.origin){var d=`${b.origin}/${b.layerContainerType||"operational-layers"}`;let e=!!x.supportedTypes[d]?.[this.operationalLayerType];"ArcGISTiledElevationServiceLayer"===
this.operationalLayerType&&"web-scene/operational-layers"===d&&(e=!1);"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===d&&(e=!1);if(!e)return b.messages?.push(new k("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${d}'`,{layer:this})),null}a=super.write(a,{...b,layer:this});d=!!b&&!!b.messages&&!!b.messages.filter(e=>e instanceof k&&"web-document-write:property-required"===e.name).length;
return t.isBlobProtocol(a?.url)?(b?.messages?.push(new k("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&d?null:a}beforeSave(){}};f.__decorate([g.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],c.prototype,"id",void 0);f.__decorate([q.reader("id",["id"])],c.prototype,"readId",
null);f.__decorate([g.property(r.listMode)],c.prototype,"listMode",void 0);f.__decorate([h.writer("listMode")],c.prototype,"writeListMode",null);f.__decorate([g.property({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:m.excludeTables}}}}})],c.prototype,"operationalLayerType",void 0);f.__decorate([h.writer("operationalLayerType")],c.prototype,
"writeOperationalLayerType",null);f.__decorate([g.property(r.opacity)],c.prototype,"opacity",void 0);f.__decorate([g.property({type:Boolean,readOnly:!1})],c.prototype,"persistenceEnabled",void 0);f.__decorate([g.property({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],c.prototype,"title",void 0);f.__decorate([h.writer("title"),h.writer(["web-scene"],"title")],
c.prototype,"writeTitle",null);f.__decorate([g.property({type:n,json:{origins:{"web-scene":{write:{layerContainerTypes:m.excludeTables}}}}})],c.prototype,"visibilityTimeExtent",void 0);f.__decorate([q.reader("visibilityTimeExtent")],c.prototype,"readTimeExtent",null);f.__decorate([h.writer(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[p.Integer,p.Null]]}})],c.prototype,"writeTimeExtent",null);f.__decorate([g.property({type:Boolean,json:{origins:{"web-scene":{name:"visibility",
write:{enabled:!0,layerContainerTypes:m.excludeTables}}},name:"visibility",write:!0}})],c.prototype,"visible",void 0);return c=f.__decorate([u.subclass("esri.layers.mixins.OperationalLayer")],c)};l.isOperationalLayer=function(c){return"operationalLayerType"in c};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});