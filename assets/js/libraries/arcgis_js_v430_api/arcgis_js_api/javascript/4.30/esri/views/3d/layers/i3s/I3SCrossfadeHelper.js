// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../../../../core/scheduling","../support/I3SLayerView"],function(k,l,m,h){class n{constructor(){this.lodCrossfadeSignedDuration=0}}class p{constructor(a){this._view=a;this._currentFrameStartTime=this._preRenderFrameTaskHandle=null;this._numFadingNodes=0}destroy(){this._preRenderFrameTaskHandle?.remove();this._view=this._preRenderFrameTaskHandle=null}get updating(){return 0<this._numFadingNodes}stopNodeFading(a){null!=a.lodCrossfadeProgress&&(this._numFadingNodes--,
a.lodCrossfadeProgress=null,0===this._numFadingNodes&&(null!=this._preRenderFrameTaskHandle&&(this._preRenderFrameTaskHandle=l.removeMaybe(this._preRenderFrameTaskHandle)),this._view.notifyLODUpdate(),this._view.notifyUpdate()))}_startNodeFading(a,c,d){0===this._numFadingNodes&&(this._preRenderFrameTaskHandle=m.addFrameTask({preRender:e=>this._updateAllNodeFading(e)}),this._view.notifyLODUpdate());null==a.lodCrossfadeProgress&&(this._numFadingNodes++,this._view.notifyUpdate());a.lodCrossfadeSignedDuration=
d;a.lodCrossfadeProgress=c}_updateAllNodeFading(a){const c=this._view.nodeCrossfadingEnabled;this._view.foreachCrossfadeNode((d,e)=>{if(null!=d?.lodCrossfadeProgress){const b=d.lodCrossfadeSignedDuration,f=d.lodCrossfadeProgress+Math.abs(a.deltaTime/b),g=!c||1<=f||0===b,q=(0<b?this._view.fullOpacity:0)-(g?0:0<b?1:-1)*(1-f);g?(this.stopNodeFading(d),0>b&&this._view.markNodeToRemove(e)):d.lodCrossfadeProgress=f;this._view.setNodeOpacityByIndex(e,q)}});this._view.removeMarkedNodes()}stopAllNodeFading(){this._view.foreachCrossfadeNode((a,
c)=>{null!=a?.lodCrossfadeProgress&&(this.stopNodeFading(a),a=a.lodCrossfadeSignedDuration,0>a&&this._view.markNodeToRemove(c),this._view.setNodeOpacityByIndex(c,0<a?this._view.fullOpacity:0))});this._view.removeMarkedNodes()}fadeNode(a,c,d,e){null==this._currentFrameStartTime&&(this._currentFrameStartTime=Date.now());var b=this._view;const f=b.nodeCrossfadingEnabled,g=d===h.FadeDirection.FadeIn?b.fullOpacity:0;e=f?e?d===h.FadeDirection.FadeIn?b.lodCrossfadeinDuration:b.lodCrossfadeoutDuration:b.lodCrossfadeUncoveredDuration:
0;b=this._view.getNodeOpacityByIndex(a);f&&b!==g&&0<e?this._startNodeFading(c,1-Math.abs(g-b),(d===h.FadeDirection.FadeIn?1:-1)*e):(this.stopNodeFading(c),this._view.setNodeOpacityByIndex(a,g),d===h.FadeDirection.FadeOut&&this._view.removeNode(a))}isNodeFullyFadedIn(a){const c=this._view.getNodeCrossfadeMetaData(a);return null==c||null==c.lodCrossfadeProgress&&this._view.getNodeOpacityByIndex(a)===this._view.fullOpacity}}k.I3SCrossfadeHelper=p;k.NodeCrossfadeMetaData=n;Object.defineProperty(k,Symbol.toStringTag,
{value:"Module"})});