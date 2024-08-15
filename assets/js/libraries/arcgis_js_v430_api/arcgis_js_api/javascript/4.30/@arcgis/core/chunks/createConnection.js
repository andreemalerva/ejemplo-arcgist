/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import t from"../request.js";import r from"../core/Error.js";import{L as o}from"./Logger.js";import{after as s,createResolver as i}from"../core/promiseUtils.js";import{addQueryParameters as n}from"../core/urlUtils.js";import"../core/lang.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import{g as u}from"./zscale.js";import l from"../layers/support/StreamConnection.js";import{e as p}from"./query.js";import m from"../rest/support/Query.js";import{fromJSON as h}from"../geometry/support/jsonUtils.js";import d from"../geometry/SpatialReference.js";import"./ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./reader.js";import"../config.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../kernel.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../core/Evented.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils8.js";import"./utils9.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedGeometry.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../TimeExtent.js";import"./timeUtils.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"../core/Clonable.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";var g;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(g||(g={}));let f=class extends l{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._config=e,this._featureZScaler=u(t,o,r),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,i=0){try{if(this.destroyed)return;const t=n(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(n){const a=t/1e3;return this._config.maxReconnectionAttempts&&i>=this._config.maxReconnectionAttempts?(o.getLogger(this).error(new r("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(o.getLogger(this).error(new r("websocket-connection",`Failed to connect. Attempting to reconnect in ${a}s`,n)),await s(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),i+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(e){return void o.getLogger(this).error(new r("websocket-connection","Failed to parse message, invalid JSON",{error:e}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const o=new WebSocket(e);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=e=>this._onClose(e),o.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(o),t(o)},o.onclose=e=>{o.onopen=o.onclose=null,r(e)}}))}async _handshake(e=1e4){const t=this._websocket;if(null==t)return;const s=i(),n=t.onmessage,{filter:a,outFields:c,spatialReference:u}=this._config;return s.timeout(e),t.onmessage=e=>{let i=null;try{i=JSON.parse(e.data)}catch(e){}i&&"object"==typeof i||(o.getLogger(this).error(new r("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),s.reject(),this.destroy()),i.spatialReference?.wkid!==u?.wkid&&(o.getLogger(this).error(new r("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,e.data)),s.reject(),this.destroy()),"json"!==i.format&&(o.getLogger(this).error(new r("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),s.reject(),this.destroy()),a&&i.filter!==a&&o.getLogger(this).error(new r("websocket-connection","Tried to set filter, but server doesn't support it")),c&&i.outFields!==c&&o.getLogger(this).error(new r("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=n;for(const e of this._outstandingMessages)t.send(JSON.stringify(e));this._outstandingMessages=[],s.resolve()},t.send(JSON.stringify({filter:a,outFields:c,format:"json",spatialReference:{wkid:u.wkid}})),s.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),o.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&o.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};e([c()],f.prototype,"connectionStatus",null),e([c()],f.prototype,"errorString",void 0),f=e([a("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const y={maxQueryDepth:5,maxRecordCountFactor:3};let _=class extends f{constructor(e){super({...y,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||o.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(t.geometry)}catch(e){return void o.getLogger(this).error(new r("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},o=t(e.path,{query:r,responseType:"json"}),s=(await o).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,i=this._inferWebSocketBaseUrl(o);return n(`${i}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return o.getLogger(this).error(new r("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(null==s||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=i();return s.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(o.getLogger(this).error(new r("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(s),a=!0,c.resolve())},s.send(n),setTimeout((()=>{a||(this.destroyed||this._websocket!==s||o.getLogger(this).error(new r("geoevent-connection","Server timed out when setting filter")),c.reject())}),1e4),c.promise}_serializeFilter(e,t){const s={};if(null==e&&null==t)return s;if(e?.geometry)try{const t=h(e.geometry);if("extent"!==t.type)throw new r(`Expected extent but found type ${t.type}`);s.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){o.getLogger(this).error(new r("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(s.where=e.where),null!=t&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,s=e.attributes[t],i=this._relatedFeatures.get(s);if(!i)return o.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=i;for(const t in n)e.attributes[t]=n[t];return a&&(e.geometry=a),e.geometry||e.centroid||o.getLogger(this).error(new r("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const e of s.features)this.onFeature(this._enrich(e))}catch(e){o.getLogger(this).error(new r("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await import("../layers/FeatureLayer.js")).default)({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,i=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,c=o?a*n:a,u=new m;if(u.outFields=this._config.outFields??["*"],u.where=this._config.filter?.where??"1=1",u.returnGeometry=!0,u.returnExceededLimitFeatures=!0,u.outSpatialReference=d.fromJSON(this._config.spatialReference),i&&(u.returnCentroid=!0),o&&(u.maxRecordCountFactor=n),s)return u.num=c,t.destroy(),this._queryPages(e,u);const l=await p(e,u,this._config.sourceSpatialReference);return t.destroy(),l.data}async _queryPages(e,t,r=[],o=0){t.start=null!=t.num?o*t.num:null;const{data:s}=await p(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<(this._config.maxQueryDepth??0)?(s.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,o+1)):(r.forEach((e=>s.features.push(e))),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const e of r){const r=e.attributes[o];t.set(r,e)}this._relatedFeatures=t}};_=e([a("esri.layers.graphics.sources.connections.GeoEventConnection")],_);const j=_;let w=class extends l{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._featureZScaler=u(t,o,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function S(e,t){if(null==e&&null==t)return null;const r={};return null!=t&&(r.geometry=t),null!=e&&(r.where=e),r}function b(e,t,r,o,s,i,n,a,c){const u={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:S(s,i),maxReconnectionAttempts:n,maxReconnectionInterval:a,customParameters:c};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(u):new j(u):new w(u)}e([c()],w.prototype,"connectionStatus",void 0),e([c()],w.prototype,"errorString",void 0),w=e([a("esri.layers.support.ClientSideConnection")],w);export{b as createConnection};
