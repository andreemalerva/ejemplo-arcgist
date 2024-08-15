/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as i}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import e from"../../core/Collection.js";import{watch as s,initial as r,on as o}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{C as a}from"../../chunks/ClipRect.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/JSONSupport.js";const p={left:0,right:0,top:0,bottom:0};let c=class extends t{constructor(i){super(i),this._leadingClips=new Map,this._trailingClips=new Map,this.direction="horizontal",this.leadingLayers=new e,this.max=100,this.min=0,this.precision=4,this.step=.5,this.stepMultiplier=10,this.trailingLayers=new e,this.view=null}initialize(){this.addHandles([s((()=>[this.view,this.view?.ready,this.position,this.direction]),(()=>this._clipLayers()),r),o((()=>this.leadingLayers),"change",(()=>this._clipLeadingLayers())),o((()=>this.trailingLayers),"change",(()=>this._clipTrailingLayers()))])}destroy(){this._removeExistingClips()}get position(){return 25}set position(i){const{precision:t,min:e,max:s}=this;this._set("position",function(i,t){const e=10**t;return Math.round(i*e)/e}(Math.max(Math.min(i,s),e),t))}get state(){return this.view?.ready?"ready":"disabled"}_clipLayers(){this._clipLeadingLayers(),this._clipTrailingLayers()}_clipLeadingLayers(){this._removeClips("leading");const{leadingLayers:i}=this;i.forEach((i=>this._clipLayer({layer:i,type:"leading"})))}_clipTrailingLayers(){this._removeClips("trailing");const{trailingLayers:i}=this;i.forEach((i=>this._clipLayer({layer:i,type:"trailing"})))}async _getLayerView(i){const{view:t}=this;if(!i||!t)return null;const e=await t.whenLayerView(i);return"clips"in e?e:null}_getVerticalClipRect(i){const{position:t}=this;return"leading"===i?new a({...p,bottom:100-t+"%"}):"trailing"===i?new a({...p,top:`${t}%`}):null}_getHorizontalClipRect(i){const{position:t}=this;return"leading"===i?new a({...p,right:100-t+"%"}):"trailing"===i?new a({...p,left:`${t}%`}):null}_getClipRect(i){const{direction:t}=this;return"vertical"===t?this._getVerticalClipRect(i):"horizontal"===t?this._getHorizontalClipRect(i):null}async _clipLayer(i){const{_leadingClips:t,_trailingClips:e}=this,{layer:s,type:r}=i,o="trailing"===r?e:"leading"===r?t:null,n=await this._getLayerView(s);if(!(n&&"clips"in n&&o&&n.hasOwnProperty("clips")))return;const l=o.get(n);l&&n.clips.remove(l);const a=this._getClipRect(r);a&&(o.set(n,a),n.clips.add(a))}_removeClips(i){const{_leadingClips:t,_trailingClips:e}=this,s="trailing"===i?e:"leading"===i?t:null;s&&(s.forEach(((i,t)=>{t&&t.hasOwnProperty("clips")&&t.clips.remove(i)})),s.clear())}_removeExistingClips(){this._removeClips("leading"),this._removeClips("trailing")}};i([n()],c.prototype,"direction",void 0),i([n({type:e,nonNullable:!0})],c.prototype,"leadingLayers",void 0),i([n({readOnly:!0})],c.prototype,"max",void 0),i([n({readOnly:!0})],c.prototype,"min",void 0),i([n()],c.prototype,"position",null),i([n()],c.prototype,"precision",void 0),i([n({readOnly:!0})],c.prototype,"state",null),i([n()],c.prototype,"step",void 0),i([n()],c.prototype,"stepMultiplier",void 0),i([n({type:e,nonNullable:!0})],c.prototype,"trailingLayers",void 0),i([n()],c.prototype,"view",void 0),c=i([l("esri.widgets.Swipe.SwipeViewModel")],c);const h=c;export{h as default};
