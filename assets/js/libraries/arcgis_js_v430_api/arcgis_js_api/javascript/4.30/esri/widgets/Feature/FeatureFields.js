// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../Widget ./FeatureFields/FeatureFieldsViewModel ./support/FeatureElementInfo ../support/globalCss ../support/uriUtils ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(d,k,f,b,v,w,n,p,l,q,r,t,x,m,g){b=class extends p{constructor(a,e){super(a,e);
this._featureElementInfo=null;this.viewModel=new l;this.messagesURIUtils=this.messages=null}initialize(){this._featureElementInfo=new q;this.addHandles(k.watch(()=>[this.viewModel?.description,this.viewModel?.title],()=>this._setupFeatureElementInfo(),k.initial))}destroy(){this._featureElementInfo?.destroy()}get attributes(){return this.viewModel.attributes}set attributes(a){this.viewModel.attributes=a}get description(){return this.viewModel.description}set description(a){this.viewModel.description=
a}get expressionInfos(){return this.viewModel.expressionInfos}set expressionInfos(a){this.viewModel.expressionInfos=a}get fieldInfos(){return this.viewModel.fieldInfos}set fieldInfos(a){this.viewModel.fieldInfos=a}get title(){return this.viewModel.title}set title(a){this.viewModel.title=a}render(){return g.tsx("div",{class:"esri-feature-fields"},this._featureElementInfo?.render(),this._renderFields())}_renderFieldInfo(a,e){var {attributes:c}=this.viewModel;const h=a.fieldName||"",u=a.label||h;c=c?
null==c[h]?"":c[h]:"";a=!!a.format?.dateFormat;c="number"!==typeof c||a?t.autoLink(this.messagesURIUtils,c):this._forceLTR(c);a={["esri-feature-fields__field-data--date"]:a};return g.tsx("tr",{key:`fields-element-info-row-${h}-${e}`},g.tsx("th",{class:"esri-feature-fields__field-header",innerHTML:u,key:`fields-element-info-row-header-${h}-${e}`}),g.tsx("td",{class:this.classes("esri-feature-fields__field-data",a),innerHTML:c,key:`fields-element-info-row-data-${h}-${e}`}))}_renderFields(){const {formattedFieldInfos:a}=
this.viewModel;return a?.length?g.tsx("table",{class:r.globalCss.table,summary:this.messages.fieldsSummary},g.tsx("tbody",null,a.map((e,c)=>this._renderFieldInfo(e,c)))):null}_setupFeatureElementInfo(){const {description:a,title:e}=this;this._featureElementInfo?.set({description:a,title:e})}_forceLTR(a){return`&lrm;${a}`}};d.__decorate([f.property()],b.prototype,"attributes",null);d.__decorate([f.property()],b.prototype,"description",null);d.__decorate([f.property()],b.prototype,"expressionInfos",
null);d.__decorate([f.property()],b.prototype,"fieldInfos",null);d.__decorate([f.property()],b.prototype,"title",null);d.__decorate([f.property({type:l,nonNullable:!0})],b.prototype,"viewModel",void 0);d.__decorate([f.property(),m.messageBundle("esri/widgets/Feature/t9n/Feature")],b.prototype,"messages",void 0);d.__decorate([f.property(),m.messageBundle("esri/widgets/support/t9n/uriUtils")],b.prototype,"messagesURIUtils",void 0);return b=d.__decorate([n.subclass("esri.widgets.Feature.FeatureFields")],
b)});