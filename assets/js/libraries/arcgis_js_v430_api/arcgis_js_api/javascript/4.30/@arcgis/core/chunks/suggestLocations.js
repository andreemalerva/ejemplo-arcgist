/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import t from"../request.js";import{p as e,e as o,a as r}from"./utils8.js";import s from"../rest/support/AddressCandidate.js";import{_ as n}from"./tslib.es6.js";import"../geometry.js";import{JSONSupport as i}from"../core/JSONSupport.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{e as p}from"./ensureType.js";import"../core/lang.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{a as u}from"./commonProperties3.js";import c from"../geometry/Point.js";import y from"../geometry/SpatialReference.js";import d from"../geometry/Extent.js";import"./Logger.js";let m=class extends i{constructor(t){super(t),this.address=null,this.apiKey=null,this.categories=null,this.countryCode=null,this.forStorage=null,this.location=null,this.locationType=null,this.magicKey=null,this.maxLocations=null,this.outFields=null,this.outSpatialReference=null,this.searchExtent=null}};n([a({type:Object,json:{write:!0}})],m.prototype,"address",void 0),n([a(u)],m.prototype,"apiKey",void 0),n([a({type:[String],json:{read:{source:"category",reader:t=>t?t.split(","):null},write:{target:"category",writer:(t,e)=>{e.category=t?t.join(","):null}}}})],m.prototype,"categories",void 0),n([a({type:String,json:{write:!0}})],m.prototype,"countryCode",void 0),n([a({type:Boolean,json:{write:!0}})],m.prototype,"forStorage",void 0),n([a({type:c,json:{write:{writer:(t,e)=>{e.location=t?t.clone().normalize():null}}}})],m.prototype,"location",void 0),n([a({type:String,json:{write:!0}})],m.prototype,"locationType",void 0),n([a({type:String,json:{write:!0}})],m.prototype,"magicKey",void 0),n([a({type:Number,json:{write:!0}})],m.prototype,"maxLocations",void 0),n([a({type:[String],json:{write:{writer:(t,e)=>{e.outFields=t?t.join(","):null}}}})],m.prototype,"outFields",void 0),n([a({type:y,json:{read:{source:"outSR"},write:{target:"outSR"}}})],m.prototype,"outSpatialReference",void 0),n([a({type:d,json:{write:{writer:(t,e)=>{const o=t?t.shiftCentralMeridian():null;e.searchExtent=o}}}})],m.prototype,"searchExtent",void 0),m=n([l("esri.rest.support.AddressToLocationsParameters")],m),m.from=p(m);const f=m;async function g(s,n,i){n=f.from(n);const a=e(s),{address:p,...l}=n.toJSON(),u={...p,...l,f:"json"},c=o({...a.query,...u}),y=r(c,i),d=`${a.path}/findAddressCandidates`;return t(d,y).then(j)}function j({data:t}){if(!t)return[];const{candidates:e,spatialReference:o}=t;return e?e.map((t=>{if(!t)return;const{extent:e,location:r}=t,n=!e||function(t){return t&&"number"==typeof t.xmin&&"number"==typeof t.ymin&&"number"==typeof t.xmax&&"number"==typeof t.ymax}(e),i=function(t){return!!t&&"number"==typeof t.x&&"number"==typeof t.y}(r);return i&&n?(e&&(e.spatialReference=o),r&&(r.spatialReference=o),s.fromJSON(t)):void 0})):[]}let h=class extends i{constructor(t){super(t),this.apiKey=null,this.location=null,this.locationType=null,this.outSpatialReference=null}};n([a(u)],h.prototype,"apiKey",void 0),n([a({type:c,json:{write:{writer:(t,e)=>{const o=t?t.clone().normalize():null,r=void 0!==o;e.location=r?o:null}}}})],h.prototype,"location",void 0),n([a({type:String,json:{write:!0}})],h.prototype,"locationType",void 0),n([a({type:y,json:{read:{source:"outSR"},write:{target:"outSR"}}})],h.prototype,"outSpatialReference",void 0),h=n([l("esri.rest.support.LocationToAddressParameters")],h),h.from=p(h);const S=h;async function w(s,n,i){n=S.from(n);const a=e(s),p={...n.toJSON(),f:"json"},l=o({...a.query,...p}),u=r(l,i),c=`${a.path}/reverseGeocode`;return t(c,u).then(v)}function v({data:t}){if(!t)return;const{address:e,location:o}=t,r=e?.Match_addr||"";return s.fromJSON({address:r,attributes:e||{},location:o,score:100})}let x=class extends i{constructor(t){super(t),this.isCollection=null,this.magicKey=null,this.text=null}};n([a({type:Boolean,json:{write:!0}})],x.prototype,"isCollection",void 0),n([a({type:String,json:{write:!0}})],x.prototype,"magicKey",void 0),n([a({type:String,json:{write:!0}})],x.prototype,"text",void 0),x=n([l("esri.rest.support.SuggestionCandidate")],x);const R=x;let b=class extends i{constructor(t){super(t),this.apiKey=null,this.categories=null,this.countryCode=null,this.location=null,this.maxSuggestions=null,this.outSpatialReference=null,this.searchExtent=null,this.text=null}};n([a(u)],b.prototype,"apiKey",void 0),n([a({type:[String],json:{read:{source:"category",reader:t=>t?t.split(","):null},write:{target:"category",writer:(t,e)=>{e.category=t?t.join(","):null}}}})],b.prototype,"categories",void 0),n([a({type:String,json:{write:!0}})],b.prototype,"countryCode",void 0),n([a({type:c,json:{write:{writer:(t,e)=>{e.location=t?t.clone().normalize():null}}}})],b.prototype,"location",void 0),n([a({type:Number,json:{write:!0}})],b.prototype,"maxSuggestions",void 0),n([a({type:y,json:{read:{source:"outSR"},write:{target:"outSR"}}})],b.prototype,"outSpatialReference",void 0),n([a({type:d,json:{write:{writer:(t,e)=>{const o=t?t.shiftCentralMeridian():null;e.searchExtent=JSON.stringify(o)}}}})],b.prototype,"searchExtent",void 0),n([a({type:String,json:{write:!0}})],b.prototype,"text",void 0),b=n([l("esri.rest.support.SuggestLocationsParameters")],b),b.from=p(b);const C=b;async function K(s,n,i){const a=e(s),p={...(n=C.from(n)).toJSON(),f:"json"},l=o({...a.query,...p}),u=r(l,i),c=`${a.path}/suggest`;return t(c,u).then(N)}function N(t){const{data:e}=t;if(!e)return[];const{suggestions:o}=e;return o?o.map((t=>new R(t))):[]}export{f as A,S as L,C as S,g as a,w as l,K as s};
