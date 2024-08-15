// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Handles","../../../../core/reactiveUtils","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(d,f,c,e,g){class h extends g.InputHandler{constructor(b){super(!0);this._view=b;this._watchHandles=new f;this._handle=this.registerIncoming("gamepad",a=>this._handleEventGamepad(a));this._handle.pause()}onInstall(b){super.onInstall(b);this._watchHandles.add([c.watch(()=>this._view.navigation.gamepad.enabled,a=>{a?this._handle.resume():
(this._handle.pause(),this._cameraControllerGamepad&&(this._cameraControllerGamepad.finishController(),this._cameraControllerGamepad=null))},c.initial),c.watch(()=>this._view.navigation.gamepad.device,a=>{this._cameraControllerGamepad&&a&&this._cameraControllerGamepad.gamepadDevice!==a&&(this._cameraControllerGamepad.finishController(),this._cameraControllerGamepad=null)})])}onUninstall(){this._watchHandles.removeAll();super.onUninstall()}_handleEventGamepad(b){var a=this._view.navigation.gamepad.device;
if(!a||b.data.device===a)if((a=this._cameraControllerGamepad?.active)||e.GamepadKeyboardController.activatesFor(this._view,b.data))a||(a=new e.GamepadKeyboardController({view:this._view,gamepadDevice:b.data.device}),this._view.state.switchCameraController(a)&&(this._cameraControllerGamepad=a)),this._cameraControllerGamepad&&this._cameraControllerGamepad.active&&this._cameraControllerGamepad.gamepadDevice===b.data.device&&this._cameraControllerGamepad.handleEventGamepad(b.data)}}d.GamepadNavigation=
h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});