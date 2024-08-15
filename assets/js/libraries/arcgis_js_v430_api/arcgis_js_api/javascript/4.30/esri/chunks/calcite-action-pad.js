// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./conditionalSlot ./dom ./loadable ./locale ./t9n ./ExpandToggle ./observers ./action ./action-group ./action-menu ./icon ./loader ./popover".split(" "),function(f,c,k,l,g,m,e,h,t,u,v,w,x,y,z){function n(){"undefined"!==typeof customElements&&"calcite-action-pad calcite-action calcite-action-group calcite-action-menu calcite-icon calcite-loader calcite-popover".split(" ").forEach(a=>{switch(a){case "calcite-action-pad":customElements.get(a)||customElements.define(a,
p);break;case "calcite-action":customElements.get(a)||u.defineCustomElement();break;case "calcite-action-group":customElements.get(a)||v.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||w.defineCustomElement();break;case "calcite-icon":customElements.get(a)||x.defineCustomElement();break;case "calcite-loader":customElements.get(a)||y.defineCustomElement();break;case "calcite-popover":customElements.get(a)||z.defineCustomElement()}})}const p=c.proxyCustomElement(class extends c.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteActionPadToggle=c.createEvent(this,"calciteActionPadToggle",6);this.mutationObserver=t.createObserver("mutation",()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))));this.actionMenuOpenHandler=a=>{if(a.target.menuOpen){const b=a.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(d=>{b.includes(d)||(d.menuOpen=!1)})}};this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionPadToggle.emit()};
this.setExpandToggleRef=a=>{this.expandToggleEl=a};this.handleDefaultSlotChange=a=>{a=l.slotChangeGetAssignedElements(a).filter(b=>b?.matches("calcite-action-group"));this.setGroupLayout(a)};this.handleTooltipSlotChange=a=>{this.expandTooltip=l.slotChangeGetAssignedElements(a).filter(b=>b?.matches("calcite-tooltip"))[0]};this.actionsEndGroupLabel=void 0;this.expanded=this.expandDisabled=!1;this.layout="vertical";this.messageOverrides=this.messages=this.scale=this.position=void 0;this.overlayPositioning=
"absolute";this.expandTooltip=void 0;this.effectiveLocale="";this.defaultMessages=void 0}expandedHandler(a){h.toggleChildActionText({el:this.el,expanded:a})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){e.updateMessages(this,this.effectiveLocale)}connectedCallback(){k.connectConditionalSlotComponent(this);m.connectLocalized(this);e.connectMessages(this)}disconnectedCallback(){m.disconnectLocalized(this);e.disconnectMessages(this);k.disconnectConditionalSlotComponent(this)}async componentWillLoad(){g.setUpLoadableComponent(this);
const {el:a,expanded:b}=this;h.toggleChildActionText({el:a,expanded:b});await e.setUpMessages(this)}componentDidLoad(){g.setComponentLoaded(this)}async setFocus(){await g.componentFocusable(this);this.el?.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(a){a.forEach(b=>b.layout=this.layout)}renderBottomActionGroup(){const {expanded:a,expandDisabled:b,messages:d,el:A,position:B,toggleExpand:C,scale:q,layout:D,actionsEndGroupLabel:E,
overlayPositioning:F}=this,r=b?null:c.h(h.ExpandToggle,{collapseText:d.collapse,el:A,expandText:d.expand,expanded:a,position:B,scale:q,toggle:C,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return r?c.h("calcite-action-group",{class:"action-group--end",label:E,layout:D,overlayPositioning:F,scale:q},c.h("slot",{name:"expand-tooltip",onSlotchange:this.handleTooltipSlotChange}),r):null}render(){return c.h(c.Host,{key:"e8df8bdd77a410f00dd26fe16cf17cb1cd94c2b8",onCalciteActionMenuOpen:this.actionMenuOpenHandler},
c.h("div",{key:"eebbf1f3012dc62ec12e66ffe310716ec98816d4",class:"container"},c.h("slot",{key:"30f1f28d2dbf9e244e6b14571263973c3d369955",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout\x3dvertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-color-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout\x3dhorizontal]) .container{flex-direction:row}:host([layout\x3dhorizontal]) .container .action-group--bottom{padding:0px}:host([layout\x3dhorizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}:host([hidden]){display:none}[hidden]{display:none}"}},
[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);n();f.CalciteActionPad=
p;f.defineCustomElement=n;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});