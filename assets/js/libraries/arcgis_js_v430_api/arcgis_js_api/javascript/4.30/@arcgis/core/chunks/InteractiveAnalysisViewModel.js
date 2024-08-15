/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{c as t}from"./asyncUtils.js";import"../core/lang.js";import{L as i}from"./Logger.js";import{a as e}from"./maybe.js";import{throwIfAborted as n,isAbortError as a,isAborted as r}from"../core/promiseUtils.js";import{watch as o,sync as l,syncAndInitial as h,whenOnce as c}from"../core/reactiveUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import{subclass as w}from"../core/accessorSupport/decorators/subclass.js";import{I as p}from"./InteractiveToolViewModel.js";var _;!function(s){s[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING"}(_||(_={}));let u=class extends p{constructor(s={}){super(s),this.analysisView=null,this._reconnectViewTask=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const t=s?.analysis;null!=t?this.analysis=t:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(s){const{analysis:t,...i}=s;return i}initialize(){this.addHandles([o((()=>this.analysis?.parent),(s=>{this._parentChangeFromReconnect||s===this.view||this._set("isAnalysisOwner",!1);const t=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,t&&this._scheduleViewReconnect()}),l),o((()=>({view:this.view,ready:null!=this.view&&this.view.ready,supported:this.supported})),(({view:s},t)=>{const i=t?.view;s!==i&&(this._startUserOperation=e(this._startUserOperation),this._disconnectFromView(i)),this._scheduleViewReconnect()}),h),o((()=>this.analysis.isEditable),((s,t)=>{null!=this.analysisView&&(s&&!t&&null==this.tool?this.createTool():s||!t||null==this.tool||this.tool.active||this.removeTool())}))])}destroy(){this._reconnectViewTask=e(this._reconnectViewTask),this._startUserOperation=e(this._startUserOperation),null!=this.analysisView&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),null!=this.analysis&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(s){s!==this._get("analysis")&&(this._startUserOperation=e(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(s),this._scheduleViewReconnect())}get ready(){return null!=this.analysisView&&!this.connectingToView}get connectingToView(){return null!=this._reconnectViewTask}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(s){this._set("visible",s),null!=this.analysisView&&(this.analysisView.visible=s)}async start(){if(!this.visible)return void i.getLogger(this).warn("Cannot start analysis when not visible");this.clear();const s={task:null,abort:null,state:_.PENDING},e=t((async t=>{s.state=_.WAIT_FOR_VIEW_READY,await c((()=>this.ready),t),s.state=_.RUNNING,this.createTool({interactive:!0})}));return s.task=e,s.abort=()=>e.abort(),this._startUserOperation=s,e.promise}clear(){this._startUserOperation=e(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(s){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=e(this._reconnectViewTask);const s=t((async t=>{try{await this._reconnectView(t)}catch(s){if(n(t),!a(s))return void i.getLogger(this).warn("Failed to use analysis in view model",s);throw s}finally{s===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=s}async _reconnectView(s){const{view:t}=this,i=null!=t&&t.ready&&this.supported,e=this.analysis;if(this._startUserOperation=V(this._startUserOperation),this._disconnectFromView(t),i&&null!=t&&null!=e){if(this.isAnalysisOwner){if(null!=e.parent)return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,t.analyses.add(e)}this.analysisView=await t.whenAnalysisView(e),r(s)?this._startUserOperation=V(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(s){this.removeTool(),null!=s&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,s.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(s){null==this.analysisView||this.isAnalysisOwner||(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",s),this._parentChangeFromReconnect=!1}get testInfo(){}};function V(s){return null!=s&&s.state>=_.RUNNING?(s.abort(),null):s}s([y({nonNullable:!0})],u.prototype,"analysis",null),s([y()],u.prototype,"analysisView",void 0),s([y()],u.prototype,"ready",null),s([y()],u.prototype,"connectingToView",null),s([y({readOnly:!0})],u.prototype,"isAnalysisOwner",null),s([y({type:Boolean,value:!0})],u.prototype,"visible",null),s([y()],u.prototype,"_reconnectViewTask",void 0),u=s([w("esri.widgets.support.InteractiveAnalysisViewModel")],u);export{u as I};
