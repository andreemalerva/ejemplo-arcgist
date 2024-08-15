/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../request.js";import r from"../core/Error.js";import{L as s}from"../chunks/Logger.js";import{r as o}from"../chunks/mathUtils.js";import{M as i}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as n}from"../core/promiseUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{c as m,i as l,h as c,p as u,v as h,w as j,x as y}from"../chunks/vec3.js";import{f,c as d}from"../chunks/vec3f64.js";import{W as g}from"../chunks/unitUtils.js";import k from"../geometry/Extent.js";import x from"../geometry/SpatialReference.js";import{p as v}from"../chunks/projectBuffer.js";import b from"./Layer.js";import{APIKeyMixin as U}from"./mixins/APIKeyMixin.js";import{A}from"../chunks/ArcGISService.js";import{CustomParametersMixin as S}from"./mixins/CustomParametersMixin.js";import{OperationalLayer as L}from"./mixins/OperationalLayer.js";import{PortalLayer as w}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as I}from"./mixins/ScaleRangeLayer.js";import{e as P,u as E}from"../chunks/commonProperties2.js";import{l as M,e as _,f as R}from"../chunks/elevationInfoUtils.js";import"../config.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/ensureType.js";import"../chunks/common.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/geodesicConstants.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../core/Evented.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/persistableUrlUtils.js";import"../chunks/layerContainerType.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils2.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/SimpleObservable.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";let T=class extends(A(L(w(I(i(S(U(b)))))))){constructor(t){super(t),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new x({wkid:4326,vcsWkid:115700}),this.fullExtent=new k(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(t){this._set("elevationInfo",t),this._validateElevationInfo()}_verifyArray(t,e){if(!Array.isArray(t)||t.length<e)return!1;for(const e of t)if("number"!=typeof e)return!1;return!0}_initFullExtent(t){const e=t.root?.boundingVolume;if(!e)return;if(e.box){const t=e?.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const r=t.root?.transform,s=d();if(e.region&&this._verifyArray(e.region,6)){const t=e.region,r=o(t[0]),s=o(t[1]),i=t[4],n=o(t[2]),a=o(t[3]),p=t[5];this.fullExtent=new k({xmin:r,ymin:s,zmin:i,xmax:n,ymax:a,zmax:p,spatialReference:this.spatialReference})}else if(e.sphere&&this._verifyArray(e.sphere,4)){const t=e.sphere,o=f(t[0],t[1],t[2]),i=t[3]/Math.sqrt(3),n=d();m(n,o,f(i,i,i));const a=d();if(l(a,o,f(i,i,i)),r&&this._verifyArray(r,16)){const t=r;c(s,n,t),u(n,s),c(s,a,t),u(a,s)}v(n,g,0,n,x.WGS84,0,1),v(a,g,0,a,x.WGS84,0,1);const p=d(),y=d();h(p,n,a),j(y,n,a),this.fullExtent=new k({xmin:p[0],ymin:p[1],zmin:p[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(e.box&&this._verifyArray(e.box,12)){const t=e.box,s=f(t[0],t[1],t[2]),o=f(t[3],t[4],t[5]),i=f(t[6],t[7],t[8]),n=f(t[9],t[10],t[11]),a=[];for(let t=0;t<8;++t)a.push(d());if(l(a[0],s,o),l(a[0],a[0],i),l(a[0],a[0],n),y(a[1],s,o),l(a[1],a[1],i),l(a[1],a[1],n),l(a[2],s,o),y(a[2],a[2],i),l(a[2],a[2],n),y(a[3],s,o),y(a[3],a[3],i),l(a[3],a[3],n),l(a[4],s,o),l(a[4],a[4],i),y(a[4],a[4],n),y(a[5],s,o),l(a[5],a[5],i),y(a[5],a[5],n),l(a[6],s,o),y(a[6],a[6],i),y(a[6],a[6],n),y(a[7],s,o),y(a[7],a[7],i),y(a[7],a[7],n),r&&this._verifyArray(r,16)){const t=r;for(let e=0;e<8;++e)c(a[e],a[e],t)}const p=f(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),m=f(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let t=0;t<8;++t)v(a[t],g,0,a[t],x.WGS84,0,1),h(m,m,a[t]),j(p,p,a[t]);this.fullExtent=new k({xmin:m[0],ymin:m[1],zmin:m[2],xmax:p[0],ymax:p[1],zmax:p[2],spatialReference:this.spatialReference})}}async load(t){return this.addResolvingPromise(this._doLoad(t)),this}async _doLoad(t){const s=null!=t?t.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:t=>{if(t.typeKeywords?.includes("IntegratedMesh"))return!0;throw new r("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},t)}catch(t){n(t)}if(this.url){const t=e(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((t=>{this._initFullExtent(t.data)}),(t=>{n(t)}));await t}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const t=this.elevationInfo,e="Integrated mesh 3d tiles layers";M(s.getLogger(this),_(e,"absolute-height",t)),M(s.getLogger(this),R(e,t))}};t([a({type:["IntegratedMesh3DTilesLayer"]})],T.prototype,"operationalLayerType",void 0),t([a({type:x})],T.prototype,"spatialReference",void 0),t([a({type:k})],T.prototype,"fullExtent",void 0),t([a(P)],T.prototype,"elevationInfo",null),t([a({type:["show","hide"]})],T.prototype,"listMode",void 0),t([a(E)],T.prototype,"url",void 0),t([a({readOnly:!0})],T.prototype,"type",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),t([a({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],T.prototype,"minScale",void 0),t([a({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],T.prototype,"maxScale",void 0),T=t([p("esri.layers.IntegratedMesh3DTilesLayer")],T);const N=T;export{N as default};
