// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../../../ViewAnimation ./CameraController".split(" "),function(b,f,g,d,k,l,m,n,h,e,a){b.AnimationController=class extends a.CameraController{constructor(){super(...arguments);this._asyncResult=null}get canStop(){return!0}set asyncResult(c){this._asyncResult&&
(this._asyncResult.reject(d.createAbortError()),this._asyncResult=null);this.state===a.State.Finished||this.state===a.State.Stopped?(g.assertIsSome(c),this.state===a.State.Finished?c.resolve():c.reject(d.createAbortError())):this._asyncResult=c}get asyncResult(){return this._asyncResult}onControllerStart(){this.state=a.State.Running;null!=this.viewAnimation&&this.viewAnimation.when(()=>this.updateStateFromViewAnimation(),()=>this.updateStateFromViewAnimation())}updateStateFromViewAnimation(){null==
this.viewAnimation||this.state!==a.State.Ready&&this.state!==a.State.Running||(this.viewAnimation.state===e.State.FINISHED?this.finish():this.viewAnimation.state===e.State.STOPPED&&(this.state=a.State.Stopped))}onControllerEnd(){null==this.viewAnimation||this.viewAnimation.done||(this.state===a.State.Finished?this.viewAnimation.finish():this.state===a.State.Stopped&&this.viewAnimation.stop());this._asyncResult&&(this.state===a.State.Finished?this._asyncResult.resolve():this._asyncResult.reject(d.createAbortError()))}finish(){this.finishController()}};
b.AnimationController=f.__decorate([h.subclass("esri.views.3d.state.controllers.AnimationController")],b.AnimationController);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});