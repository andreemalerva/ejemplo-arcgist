// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../Color ../../../../core/Accessor ../../../../core/Handles ../../../../core/handleUtils ../../../../core/has ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/support/UpdatingHandles ./LineOfSightConfiguration ./LineOfSightVisualElement ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/PointVisualElement ../../webgl-engine/lib/Material".split(" "),
function(e,h,f,G,H,I,U,w,J,l,V,W,K,L,x,g,M,t,N,y,E,X){e.LineOfSightVisualization=class extends G{constructor(a){super(a);this._lineOfSightVisualElements=[];this._computationHandles=new H;this._updatingHandles=new M.UpdatingHandles}initialize(){this.addHandles(this._connectComputations());this._createObserverVisualization()}destroy(){this._updatingHandles=w.destroyMaybe(this._updatingHandles);this._computationHandles=w.destroyMaybe(this._computationHandles);this._observerVisualElement=w.destroyMaybe(this._observerVisualElement)}get visible(){return this.analysisViewData.visible}get updating(){return this._updatingHandles.updating}get interactiveAndEditable(){return this.analysisViewData.interactive&&
this.analysisViewData.editable}get test(){}_createLineOfSightVisualization(){var a=t.lineOfSightConfiguration,b=this.view;const c=this.isDecoration;var d={view:b,attached:!0,width:a.outerWidth,innerWidth:a.innerWidth,isDecoration:c},n=f.toUnitRGBA(a.visibleOuterColor);const z=f.toUnitRGBA(a.visibleInnerColor);var r=f.toUnitRGBA(a.occludedOuterColor);const A=f.toUnitRGBA(a.occludedInnerColor),B=f.toUnitRGBA(a.undefinedOuterColor);a=f.toUnitRGBA(a.undefinedInnerColor);n=new y.LineVisualElement({...d,
color:n,innerColor:z});r=new y.LineVisualElement({...d,color:r,innerColor:A});d=new y.LineVisualElement({...d,color:B,innerColor:a});b=new E.PointVisualElement({view:b,attached:!0,...F,size:8,isDecoration:c});b=new N.LineOfSightVisualElement(n,r,d,b);this._lineOfSightVisualElements.push(b);return b}_destroyLineOfSightVisualization(a){a.destroy();this._lineOfSightVisualElements.splice(this._lineOfSightVisualElements.indexOf(a),1)}_updateLineOfSightVisualization(a,b,c){const d=t.lineOfSightConfiguration,
{computationResult:n,inputPoints:z}=a,{start:r,end:A,intersection:B,isValid:O,isTargetVisible:P}=n;var {observer:k}=z;const p=Q;p[12]=k[0];p[13]=k[1];p[14]=k[2];const C=x.subtract(R,r,k),D=x.subtract(S,A,k);k=x.subtract(T,B,k);const {visibleLineVisualElement:m,occludedLineVisualElement:u,undefinedLineVisualElement:v,targetVisualElement:q}=b;b=null==this.analysisViewData.elevationAlignedObserver||null==a.elevationAlignedTargetLocation;b=this.visible&&!b;m.visible=b;u.visible=b;v.visible=b;q.visible=
b;q.attached=!c.interactiveAndEditable;b&&(m.geometry=null,u.geometry=null,v.geometry=null,q.geometry=a.elevationAlignedTargetLocation,O?P?(m.geometry=[[g.fromArray(C),g.fromArray(D)]],m.transform=p,m.color=f.toUnitRGBA(d.visibleOuterColor),q.color=f.toUnitRGBA(d.visibleInnerColor)):(m.geometry=[[g.fromArray(C),g.fromArray(k)]],m.transform=p,m.color=f.toUnitRGBA(d.occludedOuterColor),u.geometry=[[g.fromArray(k),g.fromArray(D)]],u.transform=p,q.color=f.toUnitRGBA(d.occludedInnerColor)):(v.geometry=
[[g.fromArray(C),g.fromArray(D)]],v.transform=p,q.color=f.toUnitRGBA(d.undefinedInnerColor)))}_getLineOfSightVisualizationDependencies(a){({computationResult:a}=a);const {occludedOuterColor:b,visibleOuterColor:c}=t.lineOfSightConfiguration;return{computationResult:a,occludedOuterColor:b,visibleOuterColor:c,visible:this.visible,interactiveAndEditable:this.interactiveAndEditable}}_connectComputation(a){const b=this._computationHandles;if(!b.has(a)){var c=this._createLineOfSightVisualization();b.add([this._updatingHandles.add(()=>
this._getLineOfSightVisualizationDependencies(a),d=>this._updateLineOfSightVisualization(a,c,d),{initial:!0,equals:()=>!1}),I.makeHandle(()=>this._destroyLineOfSightVisualization(c))],a)}}_disconnectComputation(a){this._computationHandles.remove(a)}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,a=>this._onComputationsCollectionChange(a),{initial:!0,final:!0})}_onComputationsCollectionChange({added:a,removed:b}){for(const c of b)this._disconnectComputation(c);
for(const c of a)this._connectComputation(c)}_createObserverVisualization(){const a=f.toUnitRGBA(t.lineOfSightConfiguration.visibleInnerColor),b=new E.PointVisualElement({view:this.view,color:a,...F,isDecoration:this.isDecoration});this._observerVisualElement=b;this.addHandles(this._updatingHandles.add(()=>({observer:this.analysisViewData.elevationAlignedObserver,interactiveAndEditable:this.interactiveAndEditable,visible:this.visible}),({observer:c,interactiveAndEditable:d,visible:n})=>{null==c||
d||!n?b.attached=!1:(b.geometry=c,this._observerVisualElement.attached=!0)},J.initial))}};h.__decorate([l.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"analysis",void 0);h.__decorate([l.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"analysisViewData",void 0);h.__decorate([l.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"view",void 0);h.__decorate([l.property({readOnly:!0})],e.LineOfSightVisualization.prototype,"visible",null);h.__decorate([l.property({constructOnly:!0})],
e.LineOfSightVisualization.prototype,"isDecoration",void 0);h.__decorate([l.property()],e.LineOfSightVisualization.prototype,"updating",null);h.__decorate([l.property()],e.LineOfSightVisualization.prototype,"interactiveAndEditable",null);h.__decorate([l.property()],e.LineOfSightVisualization.prototype,"test",null);e.LineOfSightVisualization=h.__decorate([K.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],e.LineOfSightVisualization);const F={size:6,pixelSnappingEnabled:!1,primitive:"circle",
elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0},R=g.create(),S=g.create(),T=g.create(),Q=L.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});