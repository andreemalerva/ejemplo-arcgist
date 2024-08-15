// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../geometry ../../../../analysis/Viewshed ../../../../core/mathUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/plane ./ViewshedSubTool ../../../interactive/AnalysisToolBase ../../../interactive/keybindings ../../../interactive/ToolIntersector ../../../support/screenUtils ../../../../geometry/Point".split(" "),
function(e,d,x,r,y,k,f,P,Q,R,z,A,h,m,p,B,C,t,D,E,F){var q;d=q=class extends C.AnalysisToolBase{constructor(a){super(a);this.automaticManipulatorSelection=this.removeIncompleteOnCancel=!1;this._stagedViewshedComputedData=this._stagedViewshed=null;this._creating=!1;this._selectedManipulatorSubTool=this._selectedManipulator=null}initialize(){this._intersector=D.newToolIntersector(this.view.state.viewingMode);const a=this.analysisViewData.viewshedComputedDataHandles;this.addHandles([k.watch(()=>a.some(b=>
b.viewshedComputedData.isValid()),b=>{b&&this.finishToolCreation()},k.syncAndInitial),k.watch(()=>this._stagedViewshed,b=>{this._stagedViewshedComputedData=null==b?null:this.analysisViewData.viewshedComputedDataHandles.find(c=>c.viewshedComputedData.viewshed===b)?.viewshedComputedData},k.syncAndInitial),k.watch(()=>this.firstGrabbedManipulator,b=>{null!=b&&this._selectManipulator(b)},k.sync),k.watch(()=>this.analysisViewData.visible,b=>{b||this._selectManipulator(null)}),k.watch(()=>this.view.activeTool,
b=>{b!==this&&null!=b&&this._selectManipulator(null)})]);this.subToolHandles=k.mapCollection(()=>a,({viewshedComputedData:b})=>{const c=new B.ViewshedSubTool({analysis:this.analysis,analysisViewData:this.analysisViewData,parentTool:this,view:this.view,viewshedComputedData:b});return{subTool:c,remove:()=>{this._selectedManipulatorSubTool===c&&this._selectManipulator(null);c.destroy()}}})}destroy(){this.subToolHandles=y.destroyMaybe(this.subToolHandles)}onDeactivate(){this.removeStaged()}get cursor(){return this.creating?
"crosshair":null}_selectManipulator(a){const b=this._selectedManipulator;null!=b&&(b.selected=!1,this._selectedManipulator=null,this._selectedManipulatorSubTool?.onManipulatorSelectionChanged(),this._selectedManipulatorSubTool=null);null!=a&&(a.selected=!0,this._selectedManipulator=a,this._selectedManipulatorSubTool=this.subToolHandles.find(c=>c.subTool.hasManipulator(a))?.subTool,this._selectedManipulatorSubTool?.onManipulatorSelectionChanged())}get selectedViewshed(){return this._selectedManipulatorSubTool?.viewshed}set selectedViewshed(a){this.selectViewshed(a)}get selectedViewshedComputedData(){return this._selectedManipulatorSubTool?.viewshedComputedData}get stagedViewshed(){return this._stagedViewshed}get grabbing(){return this.subToolHandles.some(({subTool:a})=>
a.grabbing)}get creating(){return this._creating&&this.active}get placingTarget(){return null!=this._stagedViewshed}createViewsheds(){this._creating=!0}onManipulatorSelectionChanged(){this.subToolHandles.forEach(a=>a.subTool.onManipulatorSelectionChanged())}onInputEvent(a){switch(a.type){case "immediate-click":this._clickDeselectHandler();break;case "immediate-double-click":this._doubleClickHandler(a);break;case "pointer-move":this._pointerMoveHandler(a);break;case "key-down":t.sketchKeys.cancel===
a.key?this._cancelKeyHandler(a):t.sketchKeys.delete.includes(a.key)&&this._deleteKeyHandler()}}onInputEventAfter(a){switch(a.type){case "immediate-click":this._clickPlacementHandler(a)}}_clickDeselectHandler(){this.hasFocusedManipulators||this._selectManipulator(null)}_clickPlacementHandler(a){if(this.creating&&!this.hasFocusedManipulators){var b=this._stagedViewshed,c=this._intersectScreen(a,u);null!=c&&(null==b?(c.mapPoint.z=(c.mapPoint.z??0)+2,b=new x({observer:c.mapPoint.clone()}),this.analysis.viewsheds.add(b),
this._stagedViewshed=b,this._updateStagedViewshed(c.scenePoint)):(this._updateStagedViewshed(c.scenePoint),c=this._stagedViewshed,this._stagedViewshed=null,this.selectViewshed(c)),a.stopPropagation())}}_doubleClickHandler(a){this.creating&&(this.removeStaged(),this._selectManipulator(null),this._creating=!1,this.view.activeTool=null,a.stopPropagation())}_pointerMoveHandler(a){this.creating&&null!=this._stagedViewshed&&(a=this._intersectScreen(a,u),null!=a&&this._updateStagedViewshed(a.scenePoint))}_cancelKeyHandler(a){this.creating?
this.removeStaged()?(this._selectManipulator(null),a.stopPropagation()):this._creating=!1:this.grabbing||(this.selectViewshed(null),a.stopPropagation())}_deleteKeyHandler(){this.creating&&this.removeStaged();null!=this.selectedViewshed&&this.analysis.viewsheds.remove(this.selectedViewshed)}_updateStagedViewshed(a){const b=this._stagedViewshed;var c=this._stagedViewshedComputedData;if(null!=b&&null!=c){var g=this.view,l=c.observerRenderSpace,n=h.sub(G,a,l);c=h.len(n)*c.metersPerUnit;g=g.renderCoordsHelper.basisMatrixAtPosition(l,
H);var v=h.set(I,g[8],g[9],g[10]),K=p.fromPositionAndNormal(l,v,J);a=p.projectPoint(K,a,L);l=h.sub(a,a,l);n=r.rad2deg(h.angle(n,l))*(0>h.dot(v,n)?-1:1)+90;a=h.set(w,g[4],g[5],g[6]);a=r.rad2deg(h.angle(a,l));g=h.set(w,g[0],g[1],g[2]);c={heading:0>h.dot(l,g)?360-a:a,tilt:n,farDistance:c};var {heading:M,tilt:N,farDistance:O}=c;b.farDistance=O;b.tilt=N;b.heading=M}}removeStaged(){return null!=this._stagedViewshed?(this.analysis.viewsheds.remove(this._stagedViewshed),this._stagedViewshed=null,!0):!1}selectViewshed(a){if(null!=
a)for(var b of this.view.tools.items)b!==this&&b instanceof q&&b.selectViewshed(null);b=this.subToolHandles.find(c=>c.subTool.viewshed===a)?.subTool;this._selectManipulator(b?.discManipulator)}_intersectScreen(a,b){a=E.createScreenPointArrayFromEvent(a);this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector);a=b.scenePoint;if(!this._intersector.results.min.getIntersectionPoint(a))return null;const c=b.mapPoint;c.spatialReference=this.view.spatialReference;this.view.renderCoordsHelper.fromRenderCoords(a,
c);return null==c?null:b}get test(){return{subTools:this.subToolHandles.map(a=>a.subTool.test),selectedSubTool:this._selectedManipulatorSubTool?.test,stagedViewshed:this._stagedViewshed}}};e.__decorate([f.property({constructOnly:!0})],d.prototype,"view",void 0);e.__decorate([f.property()],d.prototype,"analysisViewData",void 0);e.__decorate([f.property()],d.prototype,"removeIncompleteOnCancel",void 0);e.__decorate([f.property()],d.prototype,"automaticManipulatorSelection",void 0);e.__decorate([f.property({constructOnly:!0})],
d.prototype,"analysis",void 0);e.__decorate([f.property()],d.prototype,"subToolHandles",void 0);e.__decorate([f.property()],d.prototype,"_stagedViewshed",void 0);e.__decorate([f.property()],d.prototype,"_stagedViewshedComputedData",void 0);e.__decorate([f.property()],d.prototype,"_creating",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"cursor",null);e.__decorate([f.property()],d.prototype,"_selectedManipulator",void 0);e.__decorate([f.property()],d.prototype,"_selectedManipulatorSubTool",
void 0);e.__decorate([f.property()],d.prototype,"selectedViewshed",null);e.__decorate([f.property()],d.prototype,"selectedViewshedComputedData",null);e.__decorate([f.property()],d.prototype,"grabbing",null);e.__decorate([f.property()],d.prototype,"creating",null);e.__decorate([f.property()],d.prototype,"placingTarget",null);d=q=e.__decorate([z.subclass("esri.views.3d.analysis.Viewshed.ViewshedTool")],d);const G=m.create(),I=m.create(),L=m.create(),w=m.create(),H=A.create(),J=p.create(),u={mapPoint:new F,
scenePoint:m.create()};return d});