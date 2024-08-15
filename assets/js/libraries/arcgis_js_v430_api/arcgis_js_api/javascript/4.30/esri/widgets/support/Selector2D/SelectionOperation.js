// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../core/asyncUtils ../../../core/Collection ../../../core/Evented ../../../core/handleUtils ../../../core/promiseUtils ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/coordsUtils ../../../views/draw/DrawScreenTool ../../../views/interactive/keybindings ./selectorUtils ../../../geometry/Point ../../../geometry/Polygon".split(" "),
function(k,f,u,v,w,x,p,y,l,F,G,H,z,A,B,m,C,D,E){f=class extends w.EventedAccessor{constructor(c){super(c);this.options=this._processTask=null;this.selection=new v;this.sources=null;this._process=p.debounce(async(b,g)=>{const {callback:h,selector:d,completed:a}=b,e=u.createTask(async q=>{const {sources:r,selection:t,view:n}=this;(r?.length||n?.selectionManager.sources.length)&&n?(d&&null!=r&&(q=await C.getSelectionFromGeometry({currentSelection:t,selector:d,signal:q,sources:r,view:n}),a&&n.selectionManager?.updateSelection({current:t.toArray(),
...q})),h&&h()):t.removeAll()});p.onAbort(g,()=>e.abort());this._processTask=e;return e.promise},100)}initialize(){this._setup()}cancel(){this.removeAllHandles();this._processTask?.abort()}async _setup(){const {view:c}=this;await c.whenReady();if(!this.destroyed){var b=this.options,g=b?.createTool??"rectangle",h=b?.mode??("polygon"===g?"click":"hybrid"),d=Symbol();this._tool=new B.DrawScreenTool({view:c,mode:h,geometryType:g});b?.selectOnComplete||this.addHandles(this._tool.on(["cursor-update","vertex-add",
"vertex-remove"],()=>p.ignoreAbortErrors(this._process({selector:this._selectionArea}))),d);this.addHandles([c.on("key-down",a=>{if(!a.repeat)switch(a.key){case m.sketchKeys.constraint:this._tool.uniformSizeToggled=!0;a.stopPropagation();break;case m.sketchKeys.center:this._tool.centeredToggled=!0,a.stopPropagation()}}),c.on("key-up",a=>{switch(a.key){case m.sketchKeys.constraint:this._tool.uniformSizeToggled=!1;a.stopPropagation();break;case m.sketchKeys.center:this._tool.centeredToggled=!1,a.stopPropagation()}}),
this._tool.on("complete",async a=>{this.removeHandles(d);const e=()=>{this.removeAllHandles();this.emit("complete",{aborted:a.aborted,selection:this.selection.toArray()})};a.aborted?(this.cancel(),this.selection.removeAll(),e()):await this._process({selector:this._selectionArea,callback:e,completed:!0})})],d);this.addHandles(x.makeHandle(()=>c.tools.remove(this._tool)));c.addAndActivateTool(this._tool)}}get _selectionArea(){const c=y.createScreenPoint();var b=this._tool.coordinates;const g=this.view.spatialReference,
h=d=>{c.x=d[0];c.y=d[1];const {x:a,y:e}=this.view.toMap(c);return[a,e]};if(1===b.length){const [d,a]=h(b[0]);return new D({x:d,y:a,spatialReference:g})}b=this._tool.coordinates.map(h);if(0!==b.length)return A.isClockwise(b)||b.reverse(),new E({spatialReference:g,rings:[b]})}};k.__decorate([l.property()],f.prototype,"options",void 0);k.__decorate([l.property({readOnly:!0})],f.prototype,"selection",void 0);k.__decorate([l.property()],f.prototype,"sources",void 0);k.__decorate([l.property({constructOnly:!0})],
f.prototype,"view",void 0);return f=k.__decorate([z.subclass("esri.widgets.support.Selector2D.SelectionOperation")],f)});