// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./loadable ./t9n ./interactive ./locale ./dom".split(" "),function(g,a,f,c,d,h,m){function k(){"undefined"!==typeof customElements&&["calcite-table-cell"].forEach(b=>{switch(b){case "calcite-table-cell":customElements.get(b)||customElements.define(b,l)}})}const l=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent};this.onContainerBlur=
()=>{this.focused=!1};this.onContainerFocus=()=>{this.focused=!0};this.alignment="start";this.disabled=this.rowSpan=this.colSpan=void 0;this.interactionMode="interactive";this.parentRowIsSelected=this.numberCell=this.lastCell=void 0;this.parentRowAlignment="start";this.readCellContentsToAT=this.positionInRow=this.parentRowType=this.parentRowPositionLocalized=void 0;this.scale="m";this.messageOverrides=this.messages=this.selectionCell=void 0;this.contentsText="";this.defaultMessages=void 0;this.focused=
!1;this.effectiveLocale=this.selectionText=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){c.updateMessages(this,this.effectiveLocale)}async componentWillLoad(){f.setUpLoadableComponent(this);await c.setUpMessages(this);this.updateScreenReaderContentsText();this.updateScreenReaderSelectionText()}componentDidLoad(){f.setComponentLoaded(this)}connectedCallback(){h.connectLocalized(this);c.connectMessages(this);d.connectInteractive(this)}componentDidRender(){d.updateHostInteraction(this)}disconnectedCallback(){h.disconnectLocalized(this);
c.disconnectMessages(this);d.disconnectInteractive(this)}async setFocus(){await f.componentFocusable(this);this.containerEl.focus()}updateScreenReaderSelectionText(){const b=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.selected} ${this.messages?.keyboardDeselect}`,e=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.unselected} ${this.messages?.keyboardSelect}`;this.selectionText=this.parentRowIsSelected?b:e}render(){const b=m.getElementDir(this.el),
e=this.disabled||"static"===this.interactionMode&&(!this.selectionCell||this.selectionCell&&"foot"===this.parentRowType);return a.h(a.Host,{key:"2c8bd5fb8909c57b46499b5fe8a525cdc46bb3c6"},a.h(d.InteractiveContainer,{key:"1a7e4d12f5304274f9085e0f0db4b12ba41d51ed",disabled:this.disabled},a.h("td",{key:"9a5868a78f21da3c9c0d6be7ecefd28c5e40e5c5","aria-disabled":this.disabled,class:{["footer-cell"]:"foot"===this.parentRowType,["content-cell"]:!this.numberCell&&!this.selectionCell,["number-cell"]:this.numberCell,
["selection-cell"]:this.selectionCell,["selected-cell"]:this.parentRowIsSelected,["last-cell"]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[a.CSS_UTILITY.rtl]:"rtl"===b,["static-cell"]:e,[this.parentRowAlignment]:"start"===this.parentRowAlignment||"end"===this.parentRowAlignment},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"interactive"===this.interactionMode?"gridcell":"cell",rowSpan:this.rowSpan,tabIndex:e?-1:0,ref:n=>this.containerEl=n},
(this.selectionCell||this.readCellContentsToAT)&&a.h("span",{key:"09fb148bff0939488862db0f995643ecd96a0e73","aria-hidden":!0,"aria-live":this.focused?"polite":"off",class:"assistive-text"},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),a.h("slot",{key:"0d74a3e77c1655682e59b38054defa9ebfff8714",onSlotchange:this.updateScreenReaderContentsText}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],
messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-cell-background:var(--calcite-table-cell-background, transparent);display:contents}:host([alignment\x3dcenter]) td:not(.selection-cell):not(.number-cell){text-align:center}:host([alignment\x3dend]) td:not(.selection-cell):not(.number-cell){text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-color-text-1);background:var(--calcite-internal-table-cell-background);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-color-border-3);padding:var(--calcite-internal-table-cell-padding)}td:not(.static-cell){outline-color:transparent}td:not(.static-cell):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}td.start.content-cell{vertical-align:top}td.end.content-cell{vertical-align:bottom}td.last-cell{border-inline-end:0}.number-cell{background-color:var(--calcite-color-foreground-2)}.footer-cell{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-start:1px solid var(--calcite-color-border-3)}.number-cell,.selection-cell{text-align:center;border-inline-end:1px solid var(--calcite-color-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{color:var(--calcite-color-text-3);inset-inline-start:2rem}.selection-cell:not(.footer-cell){cursor:pointer}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-cell-background:var(--calcite-color-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-color-brand);color:var(--calcite-color-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-color-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-color-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}"}},
[1,"calcite-table-cell",{alignment:[513],colSpan:[514,"col-span"],rowSpan:[514,"row-span"],disabled:[4],interactionMode:[1,"interaction-mode"],lastCell:[4,"last-cell"],numberCell:[4,"number-cell"],parentRowIsSelected:[4,"parent-row-is-selected"],parentRowAlignment:[1,"parent-row-alignment"],parentRowPositionLocalized:[1,"parent-row-position-localized"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionCell:[4,
"selection-cell"],messages:[1040],messageOverrides:[1040],contentsText:[32],defaultMessages:[32],focused:[32],selectionText:[32],effectiveLocale:[32],setFocus:[64]},void 0,{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);k();g.TableCell=l;g.defineCustomElement=k});