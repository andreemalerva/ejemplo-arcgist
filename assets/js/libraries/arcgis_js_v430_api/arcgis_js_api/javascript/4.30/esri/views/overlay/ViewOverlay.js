// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../libs/maquette/projection ../../libs/maquette/projector".split(" "),function(g,e,n,h,r,t,u,p,q,v,m){e=class extends e{constructor(){super(...arguments);this.items=new n;this._watchUpdatingTracking=new q.UpdatingHandles;this._callbacks=new Map;
this._projector=m.createProjector();this._hiddenProjector=m.createProjector()}get needsRender(){return 0<this.items.length}get updating(){return this._watchUpdatingTracking?.updating??!1}initialize(){const a=document.createElement("div");a.className="esri-overlay-surface";this._set("surface",a);this._hiddenSurface=document.createElement("div");this._hiddenSurface.setAttribute("style","visibility: hidden;");a.appendChild(this._hiddenSurface);this._watchUpdatingTracking.addOnCollectionChange(()=>this.items,
b=>{for(const d of b.added){const c=()=>d.render();this._callbacks.set(d,c);this._projector.append(this.surface,c)}for(const d of b.removed)b=this._projector.detach(this._callbacks.get(d)),this.surface.removeChild(b.domNode),this._callbacks.delete(d)})}addItem(a){this.items.add(a)}removeItem(a){this.items.remove(a)}destroy(){this.items.removeAll();this._callbacks.forEach(a=>this._projector.detach(a));this._projector=this._callbacks=null;this._watchUpdatingTracking.destroy()}render(){this._projector.renderNow()}computeBoundingRect(a){const b=
this._hiddenSurface,d=this._hiddenProjector;let c;const f=()=>c=a.render();d.append(b,f);d.renderNow();const k={left:0,top:0,right:0,bottom:0};if(c?.domNode){const l=c.domNode.getBoundingClientRect();k.left=l.left;k.top=l.top;k.right=l.right;k.bottom=l.bottom}for(d.detach(f);b.firstChild;)b.removeChild(b.firstChild);return k}overlaps(a,b){a=this.computeBoundingRect(a);b=this.computeBoundingRect(b);return Math.max(a.left,b.left)<=Math.min(a.right,b.right)&&Math.max(a.top,b.top)<=Math.min(a.bottom,
b.bottom)}get hasVisibleItems(){return this.items.some(a=>a.visible)}async prepare(){await document.fonts.load(this._fontString()).catch(()=>{})}renderCanvas(a,b){const d=!!b?.disableDecorations;if(this.items.some(f=>f.visible&&!(d&&f.isDecoration))){var c=a.getContext("2d");c.save();c.font=this._fontString();this.items.forEach(f=>{d&&f.isDecoration||(c.save(),f.renderCanvas(c),c.restore())});c.restore()}}_fontString(){return`10px ${getComputedStyle(this.surface).fontFamily}`}};g.__decorate([h.property({readOnly:!0})],
e.prototype,"surface",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"items",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"needsRender",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"_watchUpdatingTracking",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"updating",null);return e=g.__decorate([p.subclass("esri.views.overlay.ViewOverlay")],e)});