/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import i from"./Grid/Column.js";import{u as r}from"../../chunks/tableUtils.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../core/Evented.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/uriUtils.js";import"../../chunks/widgetUtils.js";let s=class extends i{constructor(o){super(o),this.autoWidth=!1,this.callback=()=>{},this.fieldName=r.action,this.flexGrow=0,this.frozenToEnd=!0,this.disabled=null,this.headerRenderFunction=()=>{},this.icon="pencil",this.renderFunction=({root:o,rowData:t})=>{if(!t)return;const{index:e,item:{feature:i}}=t,{callback:r,disabled:s,icon:n,effectiveLabel:c}=this,a=s instanceof Function?s({feature:i,index:e}):!!s,p=o=>{o.stopPropagation(),r({index:e,feature:i,native:o})};if(o.firstChild){const t=o.firstChild;return t.disabled=a,t.icon=n,t.text=c,void(t.onclick=p)}const l=this.createCalciteAction({className:"esri-column__action",disabled:a,icon:n,text:c,onclick:p});this.removeCellContent(o),o.appendChild(l)},this.resizable=!1,this.sortable=!1,this.width="50px"}};o([t({readOnly:!0})],s.prototype,"autoWidth",void 0),o([t()],s.prototype,"callback",void 0),o([t({readOnly:!0})],s.prototype,"fieldName",void 0),o([t({readOnly:!0})],s.prototype,"flexGrow",void 0),o([t()],s.prototype,"frozenToEnd",void 0),o([t()],s.prototype,"disabled",void 0),o([t()],s.prototype,"headerRenderFunction",void 0),o([t()],s.prototype,"icon",void 0),o([t()],s.prototype,"renderFunction",void 0),o([t({readOnly:!0})],s.prototype,"resizable",void 0),o([t({readOnly:!0})],s.prototype,"sortable",void 0),o([t({readOnly:!0})],s.prototype,"width",void 0),s=o([e("esri.widgets.FeatureTable.ActionColumn")],s);const n=s;export{n as default};
