// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./observers","./loadable"],function(g,f,r,h){function l(){"undefined"!==typeof customElements&&["calcite-flow"].forEach(a=>{switch(a){case "calcite-flow":customElements.get(a)||customElements.define(a,m)}})}const m=f.proxyCustomElement(class extends f.H{constructor(){super();this.__registerHost();this.__attachShadow();this.itemMutationObserver=r.createObserver("mutation",()=>this.updateFlowProps());this.getFlowDirection=(a,b)=>a&&1<b||1<a?b<a?"retreating":"advancing":
null;this.updateFlowProps=()=>{const {customItemSelectors:a,el:b,items:n}=this;var c=Array.from(b.querySelectorAll(`calcite-flow-item${a?`,${a}`:""}`)).filter(e=>e.closest("calcite-flow")===b);const p=n.length,d=c.length,k=c[d-1],q=c[d-2];d&&k&&c.forEach(e=>{e.showBackButton=e===k&&1<d;e.hidden=e!==k});q&&(q.menuOpen=!1);this.items=c;p!==d&&(c=this.getFlowDirection(p,d),this.itemCount=d,this.flowDirection=c)};this.customItemSelectors=void 0;this.flowDirection=null;this.itemCount=0;this.items=[]}async back(){var {items:a}=
this;if(a=a[a.length-1]){var b=a.beforeBack?a.beforeBack:()=>Promise.resolve();try{await b.call(a)}catch(n){return}a.remove();return a}}async setFocus(){await h.componentFocusable(this);const {items:a}=this;return a[a.length-1]?.setFocus()}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0});this.updateFlowProps()}async componentWillLoad(){h.setUpLoadableComponent(this)}componentDidLoad(){h.setComponentLoaded(this)}disconnectedCallback(){this.itemMutationObserver?.disconnect()}async handleItemBackClick(a){if(!a.defaultPrevented)return await this.back(),
this.setFocus()}render(){const {flowDirection:a}=this;return f.h("div",{key:"9d405841d7a1ee2d7a5da28c02ef8d5bf08dd9f5",class:{frame:!0,["frame--advancing"]:"advancing"===a,["frame--retreating"]:"retreating"===a}},f.h("slot",{key:"a02231a5002f8b19542e03529aad12771787b26f"}))}get el(){return this}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);l();g.CalciteFlow=m;g.defineCustomElement=l;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});