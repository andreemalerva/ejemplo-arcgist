// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./SmartMappingSliderBase ./HeatmapSlider/HeatmapSliderViewModel ../support/globalCss ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(c,f,b,t,u,m,n,p,g,v,q,d){var h;b=h=class extends n.SmartMappingSliderBase{constructor(a,e){super(a,e);this.messages=null;this.viewModel=
new p;this.slider.set({visibleElements:{labels:!1,rangeLabels:!0},labelInputsEnabled:!1,rangeLabelInputsEnabled:!1});this._rampFillId=`${this.id}-ramp-fill`}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}static fromHeatmapRendererResult(a){return new h({stops:a.renderer.colorStops})}render(){const {state:a,label:e,visibleElements:k}=this,l="disabled"===a,r=this.classes("esri-heatmap-slider",
g.globalCss.widget,g.globalCss.panel,{[g.globalCss.disabled]:l,["esri-heatmap-slider--interactive-track"]:!!k.interactiveTrack});return d.tsx("div",{"aria-label":e,class:r},l?null:this.renderContent(this._renderRamp(),"esri-heatmap-slider__slider-container"))}_renderRamp(){const {_rampFillId:a,viewModel:e}=this,k=e.getStopInfo();return d.tsx("div",{class:"esri-heatmap-slider__ramp"},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},d.tsx("defs",null,this.renderRampFillDefinition(a,k)),d.tsx("rect",
{fill:`url(#${a})`,height:"100%",width:"100%",x:"0",y:"0"})))}};c.__decorate([f.property()],b.prototype,"label",null);c.__decorate([f.property(),q.messageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider")],b.prototype,"messages",void 0);c.__decorate([f.property()],b.prototype,"stops",null);c.__decorate([f.property()],b.prototype,"viewModel",void 0);return b=h=c.__decorate([m.subclass("esri.widgets.smartMapping.HeatmapSlider")],b)});