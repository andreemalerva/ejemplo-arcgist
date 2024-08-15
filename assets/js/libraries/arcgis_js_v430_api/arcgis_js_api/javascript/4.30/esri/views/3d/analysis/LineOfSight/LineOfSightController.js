// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../analysis/featureReferenceUtils ../../../../core/Accessor ../../../../core/asyncUtils ../../../../core/Evented ../../../../core/Handles ../../../../core/handleUtils ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/support/UpdatingHandles ../../../../geometry/projection ../../../../geometry/projection/projectBoundingRect ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/ray ../../../../support/elevationInfoUtils ../LineOfSightAnalysisResult ./LineOfSightComputation ./LineOfSightRayIntersector ../support/projectionUtils ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/intersectorUtilsConversions ../../../support/Scheduler ../../../../geometry/Point".split(" "),
function(n,p,fa,G,S,T,U,V,y,I,J,W,B,r,ha,ia,X,g,w,Y,C,Z,D,H,K,aa,ba,ca,L,M,z,x,da){function N(a,b,c){return z.hasLod(a)&&(a=z.getIntersectedFeatureBSRadius(a,b),null!=a)?Math.min(.05*a,c):1E-5*c}function O(a,b){return a.hasZ?b??{mode:"absolute-height",offset:0}:{mode:"on-the-ground",offset:0}}function ea({computation:a,interpolationInfo:b}){const {computationResult:c,inputPoints:d}=a,{start:k,end:e,intersection:f}=c,{originalIntersection:m,originalObserver:l,originalTarget:h}=b;g.copy(f,m);d.isValid?
(a=E,b=g.dist(l,m)/g.dist(l,h),g.sub(a,k,l),g.scale(a,a,1-b),g.add(f,f,a),g.sub(a,e,h),g.scale(a,a,b),g.add(f,f,a),c.isValid=!0):(a.result=null,c.isValid=!1,c.isTargetVisible=!1)}n.LineOfSightController=class extends U.EventedMixin(S){constructor(a){super(a);this.updateOnCameraChange=!0;this._observerGroundOffsetRenderSpace=0;this._effectiveObserverElevationMode="absolute-height";this._observerFeatureId=null;this._updatingHandles=new Y.UpdatingHandles;this._frameTask=x.ImmediateTask;this._computationHandles=
new V;this._externalObserverUpdate=!0}initialize(){const a=this.view.resourceController?.scheduler;this._frameTask=a?a.registerTask(x.TaskPriority.LINE_OF_SIGHT_TOOL):x.ImmediateTask;this._intersector=new ca.LineOfSightRayIntersector({view:this.view});this.addHandles([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._computationHandles.destroy();this._computations.removeAll();this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||
this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(a){this._frameTask.priority=a}get _computations(){return this.analysisViewData.computations}get _elevationAlignedObserverPositionRenderSpace(){return this.analysisViewData.observerEngineLocation}set _elevationAlignedObserverPositionRenderSpace(a){this.analysisViewData.observerEngineLocation=a}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace)}_computeResult(a){const b=
a.computation,{inputPoints:c,computationResult:d}=b,{observerAdjusted:k,targetAdjusted:e}=c,{start:f,end:m}=d;g.copy(f,k);g.copy(m,e);this._canCompute(b)?this._computeIntersection(a):ea(a);b.notifyResultChanged();this.emit("result-changed",{target:a.computation.target,result:b.result})}_updateAdjustedPointsFromFeatures(a){const b=this.view;var {sceneIntersectionHelper:c}=b;({inputPoints:a}=a);const {observerAdjusted:d,observerFeatureId:k,targetFeatureId:e,targetAdjusted:f}=a;if(null!=k||null!=e){var m=
g.distance(d,f),l=this._intersector.intersector,h=H.fromPoints(a.observer,a.target,P);l.options.store=M.StoreResults.ALL;c.intersectToolIntersectorRay(h,l);var u=h=c=null,t=null;for(const q of l.results.all)l=z.toGraphic(q,this.view),null!=l&&null!=q.distanceInRenderSpace&&(l=G.getFeatureId(l),null!=l&&(null!=k&&l===k&&(null==c&&(c=N(q,b,m)),q.distanceInRenderSpace<c&&(u=q)),null!=e&&l===e&&(null==h&&(h=N(q,b,m)),null==t&&q.distanceInRenderSpace<m&&m-q.distanceInRenderSpace<h&&(t=q))));null!=u&&u.getIntersectionPoint(d)&&
(a.observerSurfaceNormal=u.getTransformedNormal(w.create()));null!=t&&t.getIntersectionPoint(f)&&(a.targetSurfaceNormal=t.getTransformedNormal(w.create()))}}_adjustStartEndPositions(a){const b=this._screenPixelSize,c=this.view;var {inputPoints:d}=a;const {observer:k,observerSurfaceNormal:e,target:f,targetSurfaceNormal:m,observerAdjusted:l,targetAdjusted:h}=d;d=E;g.copy(l,k);g.copy(h,f);this._updateAdjustedPointsFromFeatures(a);null!=e?g.copy(d,e):g.subtract(d,h,l);g.normalize(d,d);g.scale(d,d,Math.min(b,
1));g.add(l,l,d);null!=m?g.copy(d,m):g.subtract(d,l,h);a=c.state.camera.computeScreenPixelSizeAt(h);g.normalize(d,d);g.scale(d,d,Math.min(a,1));g.add(h,h,d)}_computeIntersection({computation:a,interpolationInfo:b}){const {view:c}=this,{sceneIntersectionHelper:d,renderCoordsHelper:k}=c;if(null!=d){var e=this._intersector.intersector,{computationResult:f,inputPoints:m}=a,{observer:l,target:h}=m,{start:u,end:t}=f,q=H.fromPoints(u,t,P);e.options.store=M.StoreResults.MIN;d.intersectToolIntersectorRay(q,
e);e=e.results.min;q=f.intersection;var Q=E,v=!0;null!=e&&e.getIntersectionPoint(q)&&(g.copy(b.originalIntersection,q),g.copy(b.originalObserver,u),g.copy(b.originalTarget,t),k.fromRenderCoords(q,Q,c.spatialReference),b=1-g.dist(t,h)/g.dist(u,h),v=g.dist(l,q)>=b*g.dist(l,h));b=new da(Q,c.spatialReference);var {result:A,target:R}=a;null!=A?(A.target=R,A.intersectedGraphic=v?null:z.toGraphic(e,c),A.intersectedLocation=v?null:b,A.visible=v):a.result=new aa.LineOfSightAnalysisResult({target:R,elevationAlignedTargetLocation:a.elevationAlignedTargetLocation,
intersectedGraphic:v?null:z.toGraphic(e,c),intersectedLocation:v?null:b,visible:v});f.isValid=m.isValid=!0;f.isTargetVisible=v}}_canCompute(a){var b=this.view.frustum;if(null==this.analysisViewData.elevationAlignedObserver||null==a.elevationAlignedTargetLocation||null==b)return!1;const {observerAdjusted:c,targetAdjusted:d}=a.inputPoints;a=b.intersectsPoint(c);b=b.intersectsPoint(d);return a&&b}_onObserverPositionChange(a,b,c,d,k){this._externalObserverUpdate=k;if(null==a)this._observerFeatureId=this.analysisViewData.elevationAlignedObserver=
null;else if(null==b)L.logFailedGeometryProjectionError(this.analysis,a.spatialReference,I.getLogger(this)),this.analysisViewData.elevationAlignedObserver=null;else{a=O(b,c);var {absoluteZ:e,elevation:f}=K.zValueInAbsoluteHeightMode(b.x,b.y,b.z,this.view.spatialReference,this.view,a);b=b.clone();b.z=e;this._effectiveObserverElevationMode=a.mode;this.analysisViewData.elevationAlignedObserver=b;a=w.create();this.view.renderCoordsHelper.toRenderCoords(b,a);this._elevationAlignedObserverPositionRenderSpace=
a;this._observerGroundOffsetRenderSpace=e-f;this._observerFeatureId=G.getFeatureId(d);this.priority=x.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE}}_onObserverRenderSpacePositionChangeForComputation(a,b,c,d,k){const {inputPoints:e}=a;g.copy(e.observer,b);e.observerFeatureId=k;e.observerSurfaceNormal=null;switch(d){case "on-the-ground":case "relative-to-ground":b=this._intersector.updateFromGroundIntersection(e.observer,c,e.observer),null==e.observerFeatureId&&(e.observerSurfaceNormal=b)}this._adjustStartEndPositions(a);
a.notifyInputPointsChanged();this.priority=x.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(a,b,c,d,k,e=!0){const f=a.inputPoints;e&&(f.isValid=!1);if(null==c)null!=b&&L.logFailedGeometryProjectionError(this.analysis,b.spatialReference,I.getLogger(this)),a.elevationAlignedTargetLocation=null,a.notifyInputPointsChanged();else{b=O(c,d);var {absoluteZ:m,elevation:l}=K.zValueInAbsoluteHeightMode(c.x,c.y,c.z,this.view.spatialReference,this.view,b);c=c.clone();c.z=m;a.elevationAlignedTargetLocation=
c;this.view.renderCoordsHelper.toRenderCoords(a.elevationAlignedTargetLocation,f.target);f.targetFeatureId=G.getFeatureId(k);f.targetSurfaceNormal=null;switch(b.mode){case "on-the-ground":case "relative-to-ground":k=this._intersector.updateFromGroundIntersection(f.target,m-l,f.target),null==f.targetFeatureId&&(f.targetSurfaceNormal=k)}this._adjustStartEndPositions(a);a.notifyInputPointsChanged();this.priority=x.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE}}_connectComputationToTarget(a){return y.handlesGroup([this._updatingHandles.add(()=>
({computation:a,targetPosition:a.target.position,targetElevationInfo:a.target.elevationInfo,targetFeatureInfo:a.target.feature,projectedTargetPosition:C.projectOrLoad(a.target.position,this.view.spatialReference)}),({computation:b,targetPosition:c,targetElevationInfo:d,targetFeatureInfo:k,projectedTargetPosition:e})=>{null!=e.pending?this._updatingHandles.addPromise(e.pending):this._onTargetPositionChange(b,c,e.geometry,d,k)},B.initial)])}_connectComputationToObserver(a){return this._updatingHandles.add(()=>
({computation:a,observer:this.analysisViewData.elevationAlignedObserver}),({computation:b})=>{this._externalObserverUpdate&&(b.inputPoints.isValid=!1,b.notifyInputPointsChanged())},B.initial)}_connectComputationToRenderSpaceObserver(a){return this._updatingHandles.add(()=>({computation:a,observer:this._elevationAlignedObserverPositionRenderSpace,observerGroundOffset:this._observerGroundOffsetRenderSpace,observerElevationMode:this._effectiveObserverElevationMode,observerFeatureId:this._observerFeatureId}),
({computation:b,observer:c,observerGroundOffset:d,observerElevationMode:k,observerFeatureId:e})=>{this._onObserverRenderSpacePositionChangeForComputation(b,c,d,k,e)},B.initial)}_connectComputationToCamera(a){return this._updatingHandles.add(()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty}),({isDirty:b})=>{!this.updateOnCameraChange||a.inputPoints.isValid&&!b||a.notifyInputPointsChanged()})}_connectComputationToSlicePlane(a){return this._updatingHandles.add(()=>this.view.slicePlane,
()=>{a.inputPoints.isValid=!1;a.notifyInputPointsChanged()})}_connectComputationToElevation(a){const b=(c,d)=>{const k=this.analysis.observer,e=a.target;var f=null;let m=null,l=null;var h=null;let u=null,t=null;if(null!=k?.position){f=C.projectOrLoad(k.position,this.view.spatialReference);if(null!=f.pending){this._updatingHandles.addPromise(f.pending);f.pending.finally(()=>b(c,d));return}f=f.geometry;m=k.elevationInfo;l=k.feature}if(null!=e.position){h=C.projectOrLoad(e.position,this.view.spatialReference);
if(null!=h.pending){this._updatingHandles.addPromise(h.pending);h.pending.finally(()=>b(c,d));return}h=h.geometry;u=e.elevationInfo;t=e.feature}if(null!=f||null!=h)Z.projectBoundingRect(c,d,F,this.view.spatialReference),null!=f&&D.containsPointObject(F,f)&&this._onObserverPositionChange(null!=k?k.position:null,f,m,l,!1),null!=h&&D.containsPointObject(F,h)&&this._onTargetPositionChange(a,e.position,h,u,t,!1),null!=f&&null!=h&&D.intersectsSegment(F,f,h)&&a.notifyInputPointsChanged()};return this.view.elevationProvider.on("elevation-change",
({extent:c,spatialReference:d})=>b(c,d))}_connectComputationToTask(a){let b=null;const c={computation:a,interpolationInfo:{originalIntersection:w.create(),originalObserver:w.create(),originalTarget:w.create()}};return y.handlesGroup([this._updatingHandles.add(()=>a.inputPoints,()=>{b=J.abortMaybe(b);b=T.createTask(async d=>{await W.ignoreAbortErrors(this._frameTask.schedule(()=>this._computeResult(c),d))})},{initial:!0,equals:()=>!1}),y.makeHandle(()=>b=J.abortMaybe(b))])}_connectComputation(a){const b=
this._computationHandles;b.has(a)||b.add([this._connectComputationToTarget(a),this._connectComputationToObserver(a),this._connectComputationToRenderSpaceObserver(a),this._connectComputationToCamera(a),this._connectComputationToSlicePlane(a),this._connectComputationToElevation(a),this._connectComputationToTask(a)],a)}_disconnectComputation(a){this._computationHandles.remove(a)}_onComputationCollectionChange({added:a,removed:b}){for(const c of b)this._disconnectComputation(c);for(const c of a)this._connectComputation(c)}_onTargetCollectionChange({added:a,
removed:b}){for(const c of b)this._removeTarget(c);for(const c of a)this._addTarget(c)}_onCursorTargetChange(a,b){null!=b&&this._removeTarget(b);null!=a&&this._addTarget(a)}_addTarget(a){this._computations.some(b=>b.target===a)||this._computations.add(new ba.LineOfSightComputation({target:a}))}_removeTarget(a){const b=this._computations.findIndex(c=>c.target===a);this._computations.removeAt(b)}_connectObserver(){return y.handlesGroup([this._updatingHandles.add(()=>({observerPosition:null!=this.analysis.observer?
this.analysis.observer.position:null,projectedObserverPosition:C.projectOrLoad(null!=this.analysis.observer?this.analysis.observer.position:null,this.view.spatialReference),observerElevationInfo:null!=this.analysis.observer?this.analysis.observer.elevationInfo:null,observerFeatureInfo:null!=this.analysis.observer?this.analysis.observer.feature:null}),({observerPosition:a,projectedObserverPosition:b,observerElevationInfo:c,observerFeatureInfo:d})=>{null!=b.pending?this._updatingHandles.addPromise(b.pending):
this._onObserverPositionChange(a,b.geometry,c,d,!0)},B.initial)])}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this._computations,a=>this._onComputationCollectionChange(a),{initial:!0,final:!0})}_connectTargets(){return y.handlesGroup([this._updatingHandles.addOnCollectionChange(()=>this.analysis.targets,a=>this._onTargetCollectionChange(a),{initial:!0,final:!0}),this._updatingHandles.add(()=>this.analysisViewData.cursorTarget,(a,b)=>{this._onCursorTargetChange(a,
b)})])}get _isCameraDirty(){var a=this.analysisViewData.elevationAlignedObserver;const {view:b}=this,{renderCoordsHelper:c}=b;if(null==a||null==c)return!1;const d=E;c.toRenderCoords(a,d);a=b.state.camera.computeScreenPixelSizeAt(d);return.1<Math.abs((a-this._screenPixelSize)/this._screenPixelSize)}};p.__decorate([r.property({constructOnly:!0})],n.LineOfSightController.prototype,"analysis",void 0);p.__decorate([r.property({constructOnly:!0})],n.LineOfSightController.prototype,"analysisViewData",void 0);
p.__decorate([r.property({constructOnly:!0})],n.LineOfSightController.prototype,"view",void 0);p.__decorate([r.property()],n.LineOfSightController.prototype,"updating",null);p.__decorate([r.property()],n.LineOfSightController.prototype,"priority",null);p.__decorate([r.property()],n.LineOfSightController.prototype,"updateOnCameraChange",void 0);p.__decorate([r.property()],n.LineOfSightController.prototype,"_computations",null);p.__decorate([r.property()],n.LineOfSightController.prototype,"_elevationAlignedObserverPositionRenderSpace",
null);p.__decorate([r.property()],n.LineOfSightController.prototype,"_observerGroundOffsetRenderSpace",void 0);p.__decorate([r.property()],n.LineOfSightController.prototype,"_effectiveObserverElevationMode",void 0);p.__decorate([r.property()],n.LineOfSightController.prototype,"_observerFeatureId",void 0);p.__decorate([r.property()],n.LineOfSightController.prototype,"_screenPixelSize",null);p.__decorate([r.property({readOnly:!0})],n.LineOfSightController.prototype,"_updatingHandles",void 0);p.__decorate([r.property()],
n.LineOfSightController.prototype,"_frameTask",void 0);p.__decorate([r.property()],n.LineOfSightController.prototype,"_isCameraDirty",null);n.LineOfSightController=p.__decorate([X.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightController")],n.LineOfSightController);const E=w.create(),P=H.create(),F=D.empty();Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});