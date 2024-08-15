// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./guid ./interactive ./observers ./locale ./t9n ./component ./icon".split(" "),function(k,b,d,q,e,l,m,f,g,r){function n(){"undefined"!==typeof customElements&&["calcite-tab-title","calcite-icon"].forEach(a=>{switch(a){case "calcite-tab-title":customElements.get(a)||customElements.define(a,p);break;case "calcite-icon":customElements.get(a)||r.defineCustomElement()}})}const p=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();
this.calciteTabsActivate=b.createEvent(this,"calciteTabsActivate",6);this.calciteInternalTabsActivate=b.createEvent(this,"calciteInternalTabsActivate",6);this.calciteTabsClose=b.createEvent(this,"calciteTabsClose",6);this.calciteInternalTabsClose=b.createEvent(this,"calciteInternalTabsClose",6);this.calciteInternalTabsFocusNext=b.createEvent(this,"calciteInternalTabsFocusNext",6);this.calciteInternalTabsFocusPrevious=b.createEvent(this,"calciteInternalTabsFocusPrevious",6);this.calciteInternalTabsFocusFirst=
b.createEvent(this,"calciteInternalTabsFocusFirst",6);this.calciteInternalTabsFocusLast=b.createEvent(this,"calciteInternalTabsFocusLast",6);this.calciteInternalTabTitleRegister=b.createEvent(this,"calciteInternalTabTitleRegister",6);this.calciteInternalTabIconChanged=b.createEvent(this,"calciteInternalTabIconChanged",6);this.closeClickHandler=()=>{this.closeTabTitleAndNotify()};this.mutationObserver=l.createObserver("mutation",()=>this.updateHasText());this.resizeObserver=l.createObserver("resize",
()=>{this.calciteInternalTabIconChanged.emit()});this.guid=`calcite-tab-title-${q.guid()}`;this.disabled=this.closed=this.closable=this.selected=!1;this.layout=this.iconStart=this.iconFlipRtl=this.iconEnd=void 0;this.position="top";this.scale="m";this.bordered=!1;this.effectiveLocale=this.defaultMessages=this.controls=this.messageOverrides=this.messages=this.tab=void 0;this.hasText=!1}selectedHandler(){this.selected&&this.activateTab(!1)}onMessagesChange(){}connectedCallback(){e.connectInteractive(this);
m.connectLocalized(this);f.connectMessages(this);this.setupTextContentObserver();this.parentTabNavEl=this.el.closest("calcite-tab-nav");this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){this.mutationObserver?.disconnect();document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}));this.resizeObserver?.disconnect();e.disconnectInteractive(this);m.disconnectLocalized(this);f.disconnectMessages(this)}async componentWillLoad(){await f.setUpMessages(this);
this.updateHasText();this.tab&&this.selected&&this.activateTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.bordered=this.parentTabsEl.bordered)}render(){const {el:a,closed:c}=this,h=a.id||this.guid,t=b.h("calcite-icon",{key:"dc31a68fd20ffcf451d5b23e2aaae683249aa50a",class:{["calcite-tab-title--icon"]:!0,["icon-start"]:!0},flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:g.getIconScale(this.scale)}),u=b.h("calcite-icon",
{key:"b8b85c799e950e050bb6c953cec61ab871894c9c",class:{["calcite-tab-title--icon"]:!0,["icon-end"]:!0},flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:g.getIconScale(this.scale)});return b.h(b.Host,{key:"532a18e093cd481a1058e55f1ac936489cad3ddb","aria-controls":this.controls,"aria-selected":d.toAriaBoolean(this.selected),id:h,role:"tab",tabIndex:this.selected&&!this.disabled?0:-1},b.h(e.InteractiveContainer,{key:"dede575160963d2463e50f6e8baab92319acda9f",disabled:this.disabled},
b.h("div",{key:"79e9c6d5f15626cd84101e7b85365c9af2c1453b",class:{container:!0,["icon-present"]:!!this.iconStart||!!this.iconEnd,[`scale-${this.scale}`]:!0},hidden:c,ref:v=>this.resizeObserver?.observe(v)},b.h("div",{key:"8076d17c92940370363d9bc1dae416fdcdf4b716",class:{content:!0,["content--has-text"]:this.hasText}},this.iconStart?t:null,b.h("slot",{key:"b25df3722162e58cb196ca500a7b4c718d5f2ed7"}),this.iconEnd?u:null),this.renderCloseButton())))}renderCloseButton(){const {closable:a,messages:c}=this;
return a?b.h("button",{"aria-label":c.close,class:"close-button",disabled:!1,key:"close-button",onClick:this.closeClickHandler,title:c.close,type:"button",ref:h=>this.closeButtonEl=h},b.h("calcite-icon",{icon:"x",scale:g.getIconScale(this.scale)})):null}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){e.updateHostInteraction(this)}internalTabChangeHandler(a){a.composedPath().find(c=>"CALCITE-TABS"===c.tagName)===this.parentTabsEl&&
(this.tab?this.selected=this.tab===a.detail.tab:this.getTabIndex().then(c=>{this.selected=c===a.detail.tab}),a.stopPropagation())}onClick(){this.activateTab()}keyDownHandler(a){switch(a.key){case " ":case "Enter":a.composedPath().includes(this.closeButtonEl)||(this.activateTab(),a.preventDefault());break;case "ArrowRight":a.preventDefault();"ltr"===d.getElementDir(this.el)?this.calciteInternalTabsFocusNext.emit():this.calciteInternalTabsFocusPrevious.emit();break;case "ArrowLeft":a.preventDefault();
"ltr"===d.getElementDir(this.el)?this.calciteInternalTabsFocusPrevious.emit():this.calciteInternalTabsFocusNext.emit();break;case "Home":a.preventDefault();this.calciteInternalTabsFocusFirst.emit();break;case "End":a.preventDefault(),this.calciteInternalTabsFocusLast.emit()}}async getTabIndex(){return Array.prototype.indexOf.call(d.nodeListToArray(this.el.parentElement.children).filter(a=>a.matches("calcite-tab-title")),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(a=
[],c=[]){this.controls=a[c.indexOf(this.el.id)]||null}async activateTab(a=!0){this.disabled||this.closed||(this.calciteInternalTabsActivate.emit({tab:this.tab}),a&&requestAnimationFrame(()=>this.calciteTabsActivate.emit()))}effectiveLocaleChange(){f.updateMessages(this,this.effectiveLocale)}updateHasText(){this.hasText=0<this.el.textContent.trim().length}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}closeTabTitleAndNotify(){this.closed=!0;this.calciteInternalTabsClose.emit({tab:this.tab});
this.calciteTabsClose.emit()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout\x3dinline]){flex:0 1 auto}:host([layout\x3dcenter]){flex:1 1 auto}.content{display:flex;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([closable]) .content{box-sizing:border-box;block-size:100%;border-block-end-color:transparent}:host([layout\x3dinline]) .content,:host([layout\x3dcenter]) .content{padding-inline:0.25rem}:host([layout\x3dcenter]) .scale-s,:host([layout\x3dcenter]) .scale-m,:host([layout\x3dcenter]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout\x3dcenter]) .scale-s .content,:host([layout\x3dcenter]) .scale-m .content,:host([layout\x3dcenter]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}:host([position\x3dbottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}.close-button{display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding:0.25rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-button-transparent-1);margin-inline-start:auto}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );outline-offset:-1px}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-color-foreground-1)}:host([bordered][selected][position\x3dbottom]){box-shadow:inset 0 2px 0 var(--calcite-color-foreground-1)}:host([bordered]:hover) .container{background-color:var(--calcite-color-transparent-hover)}:host([closable]) .container,:host([bordered]) .container{border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([closable]) .container .close-button,:host([bordered]) .container .close-button{margin-inline:0}:host([closable][position\x3dbottom]) .container,:host([bordered][position\x3dbottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-color-border-1);border-inline-end-color:var(--calcite-color-border-1)}:host([layout\x3dinline][bordered]) .scale-m .content,:host([layout\x3dcenter][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout\x3dinline][bordered]) .scale-s .content,:host([layout\x3dcenter][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout\x3dinline][bordered]) .scale-l .content,:host([layout\x3dcenter][bordered]) .scale-l .content{padding-inline:1rem}:host([layout\x3dinline][closable]) .scale-s .content,:host([layout\x3dinline][closable]) .scale-m .content,:host([layout\x3dinline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position\x3dbottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position\x3dbottom][selected]) .container{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-tab-title",{selected:[1540],closable:[516],closed:[1540],disabled:[516],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],layout:[1537],position:[1],scale:[1],bordered:[1540],tab:[513],messages:[1040],messageOverrides:[1040],controls:[32],defaultMessages:[32],effectiveLocale:[32],hasText:[32],getTabIndex:[64],getTabIdentifier:[64],updateAriaInfo:[64],activateTab:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"],[0,"click","onClick"],
[0,"keydown","keyDownHandler"]],{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);n();k.TabTitle=p;k.defineCustomElement=n});