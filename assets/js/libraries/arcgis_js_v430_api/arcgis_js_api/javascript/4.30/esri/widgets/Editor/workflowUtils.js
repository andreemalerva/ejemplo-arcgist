// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../Graphic ../../core/arrayUtils ../../core/asyncUtils ../../core/has ../../core/handleUtils ../../core/lang ../../core/promiseUtils ../../core/reactiveUtils ../../core/screenUtils ../../core/accessorSupport/diffUtils ../../layers/support/fieldUtils ../../renderers/support/clickToleranceUtils ../../renderers/support/lengthUtils ../../renderers/visualVariables/support/sizeVariableUtils ../../renderers/visualVariables/support/visualVariableUtils ../../symbols/support/symbolConversion ../../symbols/support/symbolUtils ../../views/3d/layers/graphics/GraphicState ../../views/support/drapedUtils ../../views/support/hitTestSelectUtils ../support/templateUtils".split(" "),
function(J,n,U,V,W,pa,w,X,u,v,D,Y,A,Z,aa,K,L,ba,E,M,ca,F,da){function N(a){const b=a.sourceLayer;var c;if(!(c=!b||"feature"!==b.type)){a:switch(b.renderer?.type){case "class-breaks":case "simple":case "unique-value":case "dot-density":case "dictionary":case "pie-chart":c=!0;break a;default:c=!1}c=!c}if(c)return{rotation:null,size:null};let d=c=null;var f=b.renderer.getVisualVariablesForType("rotation").filter(k=>(!k.axis||"heading"===k.axis)&&k.field&&!k.valueExpression&&null!=L.getRotationAngle(k,
a));1===f.length&&(c=ea(f[0],b));f=b.renderer.getVisualVariablesForType("size").filter(k=>k.field&&!k.useSymbolValue&&!k.valueExpression&&K.getTransformationType(k)===K.TransformationType.RealWorldSize&&null!=L.getSize(k,a));1===f.length&&(d=fa(f[0],b));return{rotation:c,size:d}}function ea(a,b){const c="heading"===(a.axis||"heading")&&"arithmetic"===a.rotationType?-1:1,d=a.field,f=(b=b.fields&&b.fields.filter(e=>e.name===d))&&1===b.length?b[0].type:"double";var k=0,h=0;return{field:d,fieldType:f,
getDefault:()=>Promise.resolve(0),getValue:e=>{h=k-c*e;return G((h+360)%360,f)},setInitialValue:e=>{k=e;h=0},isUpdatingInteractively:!1,rotationType:a.rotationType??"geographic"}}function ha(a,b){switch(b){case "width":return a[0];case "depth":return a[1];case "height":return a[2];default:return a[2]||a[1]||a[0]}}async function ia(a,b,c){if(null==b)return 0;({symbol:b}=ba.to3D(b));if(null==b||"web-style"===b.type||"cim"===b.type)return 0;b=b.symbolLayers.at(0);if(!b)return 0;switch(b.type){case "icon":return{computeIconLayerResourceSize:c}=
await new Promise((f,k)=>J(["../../symbols/support/symbolLayerUtils"],f,k)),b.size||Math.min(t.icon,(await c(b,t.icon))[0])||t.icon;case "text":return b.size||t.text;case "line":return b.size||t.line;case "object":const {computeObjectLayerResourceSize:d}=await new Promise((f,k)=>J(["../../symbols/support/symbolLayerUtils"],f,k));a=await d(b,a.scale/t.viewScaleSizeFactor);return ha(a,c);case "path":return(null!=b.width?b.width:b.height)||a.scale/t.viewScaleSizeFactor;case "extrude":return b.size||
a.scale/t.viewScaleSizeFactor;case "fill":case "water":return 0;default:return 0}}function fa(a,b){const c=a.field,d=a.axis,f=(b=b.fields&&b.fields.filter(g=>g.name===c))&&1===b.length?b[0].type:"double";var k=0,h=0;const e=aa.meterIn[a.valueUnit]??1;let l;l="area"===a.valueRepresentation?g=>(g*e/2)**2*Math.PI:"radius"===a.valueRepresentation||"distance"===a.valueRepresentation?g=>g*e/2:g=>g*e;return{field:c,fieldType:f,getDefault:async(g,m)=>G(l(await ia(m,g,d)),f),getValue:(g,m)=>{k||=m.pixelSizeAt(m.center);
h=k*g;return G(h,f)},setInitialValue:g=>{k=g;h=0},isUpdatingInteractively:!1,displayUnit:O(a.valueUnit),axis:a.axis}}function G(a,b){switch(b){case "small-integer":case "integer":case "long":return Math.round(a);case "double":case "single":return a;default:return 0}}async function x(a,b,c){b=await E.getDisplayedSymbol(a,{useSourceLayer:!0,ignoreGraphicSymbol:!0,webStyleCache:b,scale:c});null!=Y.diff(a.symbol,b)&&(a.symbol=b)}function ja(a){if(!a)throw Error("no geometry type");return"multipatch"===
a?"mesh":a}async function P(a,b,c,d,f){b=new U({sourceLayer:b,attributes:c});const {rotation:k,size:h}=N(b);let e=await E.getDisplayedSymbol(b,{useSourceLayer:!0,webStyleCache:d,scale:f}),l=!1;for(const g of[h,k])null!=g&&null==c[g.field]&&(c[g.field]=await g.getDefault(e,a.view),l=!0);l&&(e=await E.getDisplayedSymbol(b,{useSourceLayer:!0,webStyleCache:d,scale:f}));switch(e?.type){case "simple-fill":case "polygon-3d":a.polygonSymbol=e;break;case "simple-line":case "line-3d":a.polylineSymbol=e;break;
case "simple-marker":case "picture-marker":case "point-3d":case "cim":a.pointSymbol=e;break;case "mesh-3d":a.meshSymbol=e}Q(a.tooltipOptions,h,k)}function Q(a,b,c){a.visualVariables=null!=b||null!=c?{size:null!=b?{unit:b.displayUnit,axis:b.axis,valueType:b.fieldType}:null,rotation:null!=c?{valueType:c.fieldType,rotationType:c.rotationType??"geographic"}:null}:null}async function ka(a,b,c,d){if(0===a.length)return[];const {updatable:f,graphicsByLayer:k}=await c.async(async()=>{var {results:h}=await u.whenOrAbort(F.hitTestSelectSimilarDistance(b,
c),d);const e=new Map;F.filterGraphicHits(h).forEach(({graphic:l})=>{var g=l.layer;var m=e.get(g);m?g=m:(m=[],e.set(g,m),g=m);return g.push(l)});h=a.filter(({capabilities:l,layer:g})=>l.update.enabled&&e.has(g));0!==h.length&&c.stopPropagation();return{updatable:h,graphicsByLayer:e}});return u.whenOrAbort(Promise.allSettled(f.map(async({layer:h})=>{var e=k.get(h);const l=R(h);if(e.every(p=>A.featureHasFields(l,p)))return e;const g=[];for(var m of e)g.push(m.getObjectId()),e=Object.keys(m.attributes),
V.addMany(l,e);m=h.createQuery();m.returnGeometry=!1;m.objectIds=g;m.outFields=A.fixFields(h.fieldsIndex,l);return h.queryFeatures(m,{signal:d}).then(({features:p})=>p)})),d)}async function la(a,b,c,d){if(0===a.length)return[];const {mapPoint:f}=c;if(null==f)return[];let k=null;const h=await c.async(async()=>{var {results:e}=await u.whenOrAbort(b.hitTest(c),d);if(0===e.length)return[];const l=new Set;k=F.filterGraphicHits(e);k.forEach(({graphic:g})=>g&&l.add(g.layer));e=a.filter(g=>l.has(g.layer)&&
g.supportsUpdateWorkflow);0<e.length&&c.stopPropagation();return e});return u.whenOrAbort(Promise.allSettled(h.map(async({layer:e})=>{const l=e.createQuery();l.returnGeometry=!1;l.outFields=R(e);const g="renderer"in e?Z.calculateTolerance({renderer:e.renderer,pointerType:c.pointerType}):0;l.geometry=ca.createQueryGeometry(f,g,b);l.outSpatialReference=b.spatialReference;const {features:m}=await e.queryFeatures(l,{signal:d});k?.forEach(({graphic:p})=>{p.layer!==e||m.some(y=>y.getObjectId()===p.getObjectId())||
m.push(p)});return m})),d)}function R(a){return A.fixFields(a.fieldsIndex,[a.objectIdField,A.getDisplayFieldName({displayField:"displayField"in a?a.displayField:null,fields:a.fields})])}async function H(a){const {graphic:b,sketchViewModel:c,sourceLayer:d,visualVariables:f,webStyleCache:k}=a;let h=!1;const {rotation:e,size:l}=f;[e,l].forEach(async g=>{if(null!=g){var m=b.getAttribute(g.field);null!=m?g.setInitialValue(m):(m=await g.getDefault(b.symbol,c.view),g.setInitialValue(m),b.setAttribute(g.field,
m),h=!0)}});h&&await x(b,k,"2d"===c.view?.type?c.view.scale:null);a={multipleSelectionEnabled:!1};"point"===d.geometryType&&(a.enableRotation=null!=e,a.enableScaling=null!=l);Q(c.tooltipOptions,l,e);c.layer.elevationInfo=d.elevationInfo;return c.update(b,a)}async function S(a,b,c,d,f){if(null!=b.geometry&&"point"===b.geometry?.type){var k=d.rotation;var h=c.toolEventInfo;h=null==h||"rotate-start"!==h.type&&"rotate"!==h.type&&"rotate-stop"!==h.type?null:h;if(null!=k&&null!=h){const {field:e,getValue:l}=
k;"rotate-stop"===h.type?(k.isUpdatingInteractively=!1,k.setInitialValue(b.getAttribute(e))):(k.isUpdatingInteractively=!0,b.setAttribute(e,l(h.angle,a)))}d=d.size;c=c.toolEventInfo;c=null==c||"scale-start"!==c.type&&"scale"!==c.type&&"scale-stop"!==c.type?null:c;if(null!=d&&null!=c){const {field:e,getValue:l}=d;"scale-stop"===c.type?(d.isUpdatingInteractively=!1,d.setInitialValue(b.getAttribute(e))):(d.isUpdatingInteractively=!0,b.setAttribute(e,l(c.xScale,a)))}await x(b,f,"2d"===a.type?a.scale:
null)}}function ma(a,b,c){if("3d"===a.type){const d=new M.GraphicState({graphic:b});return w.handlesGroup([a.trackGraphicState(d),v.watch(()=>d.displaying,c)])}return v.watch(()=>b.visible,c)}async function T(a,b){if("3d"===a.type){const c=new M.GraphicState({graphic:b});a=a.trackGraphicState(c);await v.whenOnce(()=>c.displaying);a.remove()}else await v.whenOnce(()=>b.visible)}function O(a){switch(a){case "unknown":case "decimal-degrees":return null;default:return a}}function I(a){const b=a.geometry;
if("mesh"===b?.type){const c=a.cloneShallow();c.attributes=X.clone(a.attributes);c.geometry=b.cloneShallow();c.geometry.transform=b.transform?.clone()??null;return c}return a.clone()}const t={icon:D.px2pt(24),text:D.px2pt(12),line:D.px2pt(1),viewScaleSizeFactor:100},B=(a,b)=>a.whenLayerView("subtype-sublayer"===b.type?b.parent:b);n.avoidFeatureTemplateSelectionWithOnlyOneItem=function(a,b){a.viewModel.syncFeatureTemplates();a=a.creationInfo;if("awaiting-feature-creation-info"===b[0].id&&a){const c=
a.layer,d=da.getAllTemplatesForLayer(c);1===d.length&&"scene"!==c.type&&(a.template=d[0],b.shift())}return b};n.canCreateInteractiveEditSession=function(a){return"createInteractiveEditSession"in a};n.cloneGraphicExceptMesh=I;n.createWorkflowSteps=function(a,b,c){let d=!1;return a.filter(f=>d?!0:d=f===b).map(f=>c[f]())};n.fetchCandidates=async function(a,b,c,d){switch(b.type){case "3d":return ka(a,b,c,d);case "2d":return la(a,b,c,d)}};n.fetchFullFeature=async function(a,b,c){const {sourceLayer:d}=
a,f=d.createQuery();f.objectIds=[a.getAttribute(d.objectIdField)];f.outFields=["*"];f.returnM=d.capabilities.data.supportsM;f.returnZ=d.capabilities.data.supportsZ;if("scene"!==d.type||null==d.infoFor3D)f.outSpatialReference=b;a=await d.queryFeatures(f,{signal:c});u.throwIfAborted(c);return a.features[0]};n.findLayerInfo=function(a,b){return a?.find(c=>c.layer===b)};n.getVisualVariableAttributes=N;n.isTerminalUpdateEventType=a=>/-stop/.test(a)||/vertex-/.test(a);n.prepareAttachmentsForCreateFeaturesWorkflow=
function(a){a.filesEnabled=!0;a.mode="view";a.capabilities={editing:!0,operations:{add:!0,update:!0,delete:!0}}};n.setUpGeometryUpdate=async function({feature:a,featureClone:b,visualVariableAttributes:c,sketchViewModel:d,view:f,onUpdate:k,webStyleCache:h}){await x(b,h,"2d"===f.type?f.scale:null);let e=null;if("2d"===d?.view?.type){const q=u.debounce(r=>x(b,h,r));e=v.watch(()=>d?.view?.scale,r=>q(r))}const l=b.sourceLayer;var g=B(f,l);await H({graphic:b,sketchViewModel:d,sourceLayer:l,visualVariables:c,
webStyleCache:h});let m=null;g.then(q=>m=q).catch(()=>{});const p=c.size,y=c.rotation;g=v.watch(()=>a.attributes,async q=>{let r=!1;for(const z in q){const C=q[z];C!==b.getAttribute(z)&&(b.setAttribute(z,C),null==p||p.isUpdatingInteractively||p.field!==z||p.setInitialValue(C),null==y||y.isUpdatingInteractively||y.field!==z||y.setInitialValue(C),null==m||m.requiredFields.includes(z))&&(r=!0)}r&&await x(b,h,"2d"===f.type?f.scale:null)});const na=d.on("update",async q=>{const r=q.graphics[0];if("complete"===
q.state)return H({graphic:r,sketchViewModel:d,sourceLayer:l,visualVariables:c,webStyleCache:h});await S(f,r,q,c,h);k(I(r),q)}),oa=d.on(["undo","redo"],async q=>{k(I(q.graphics[0]),q)});return w.handlesGroup([oa,na,w.makeHandle(()=>d.cancel()),g,e])};n.showProgressCursor=function(a){const b=a.cursor;a.cursor="progress";return w.makeHandle(()=>a.cursor=b)};n.sizeDefaults=t;n.sizeVariableUnitToLengthUnit=O;n.startCreatingNewFeature=async function(a,b,c){const d=b.layer,f={...b.template?.prototype.attributes,
...b.attributeOverrides};let k=null;const {view:h}=a,e="2d"===h?.type;await P(a,d,f,c,e?h.scale:null);if(e){const m=u.debounce(p=>P(a,d,f,c,p));k=v.watch(()=>h.scale,p=>m(p))}const {data:l,editing:g}=d.capabilities;a.layer.elevationInfo=d.elevationInfo;null==b.geometryToPlace?await a.create(ja(d.geometryType),{graphicProperties:{attributes:f,sourceLayer:d},hasZ:l.supportsZ,defaultZ:(e?g.zDefault:null)??a.defaultCreateOptions.defaultZ}):await a.place(b.geometryToPlace,{graphicProperties:{attributes:f,
sourceLayer:d}});return k??w.makeHandle()};n.startUpdatingFeature=H;n.swapForEditingSession=async function(a,b,c){function d(l){e?.abort();e=W.createTask(async g=>{const m=await B(f,k);u.throwIfAborted(g);m.setVisibility?.(h,l)})}const f=a.view;a.layer.add(c);const k=b.sourceLayer,h=b.getAttribute(b.layer.objectIdField);let e=null;await T(f,c);d(!1);return w.handlesGroup([ma(f,c,l=>d(!l)),w.makeHandle(async()=>{d(!0);try{const l=await B(f,k);await v.whenOnce(()=>!l.updating)}finally{a.layer.remove(c)}})])};
n.updateGraphicSymbolWhenRequired=x;n.visualVariableInteractiveUpdate=S;n.whenEditorLayerView=B;n.whenGraphicDisplayed=T;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});