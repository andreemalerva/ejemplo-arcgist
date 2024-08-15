// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../symbols ../core/jsonMap ../core/lang ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/ensureType ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ./support/ClassBreakInfo ./support/commonProperties ./support/LegendOptions ../support/arcadeOnDemand".split(" "),
function(f,y,l,n,q,g,z,A,B,C,D,t,u,e,E,r,w,F,x){var v;l=new l.JSONMap({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});const G=t.ensureType(r);e=v=class extends E.VisualVariablesMixin(e){constructor(a){super(a);this._compiledValueExpression={valueExpression:null,compiledFunction:null};this.field=this.defaultSymbol=this.defaultLabel=this.classBreakInfos=this.backgroundFillSymbol=null;this.isMaxInclusive=!0;this.normalizationTotal=this.normalizationField=
this.legendOptions=null;this.type="class-breaks";this.valueExpressionTitle=this.valueExpression=null;this._set("classBreakInfos",[])}readClassBreakInfos(a,b,c){if(Array.isArray(a)){var d=b.minValue;return a.map(h=>{const k=new r;k.read(h,c);null==k.minValue&&(k.minValue=d);null==k.maxValue&&(k.maxValue=k.minValue);d=k.maxValue;return k})}}writeClassBreakInfos(a,b,c,d){a=a.map(h=>h.write({},d));this._areClassBreaksConsecutive()&&a.forEach(h=>delete h.classMinValue);b[c]=a}castField(a){return null==
a?a:"function"===typeof a?(q.getLogger(this).error(".field: field must be a string value"),null):t.ensureString(a)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let a=this._get("normalizationType");const b=!!this.normalizationField,c=null!=this.normalizationTotal;if(b||c)a=b&&"field"||c&&"percent-of-total"||null,b&&c&&q.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!");else if("field"===
a||"percent-of-total"===a)a=null;return a}set normalizationType(a){this._set("normalizationType",a)}addClassBreakInfo(a,b,c){let d=null;d="number"===typeof a?new r({minValue:a,maxValue:b,symbol:y.ensureType(c)}):G(n.clone(a));this.classBreakInfos.push(d);1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(a,b){const c=this.classBreakInfos.length;for(let d=0;d<c;d++){const h=[this.classBreakInfos[d].minValue,this.classBreakInfos[d].maxValue];if(h[0]===a&&h[1]===b){this.classBreakInfos.splice(d,
1);break}}}getBreakIndex(a,b){this.valueExpression&&null==b?.arcade&&q.getLogger(this).warn("");return this.valueExpression?this._getBreakIndexForExpression(a,b):this._getBreakIndexForField(a)}async getClassBreakInfo(a,b){let c=b;this.valueExpression&&null==b?.arcade&&(c={...c,arcade:await x.loadArcade()});a=this.getBreakIndex(a,c);return-1!==a?this.classBreakInfos[a]:null}getSymbol(a,b){if(this.valueExpression&&null==b?.arcade)q.getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");
else return a=this.getBreakIndex(a,b),-1<a?this.classBreakInfos[a].symbol:this.defaultSymbol}async getSymbolAsync(a,b){let c=b;if(this.valueExpression&&null==b?.arcade){b=await x.loadArcade();const {arcadeUtils:d}=b;d.hasGeometryOperations(this.valueExpression)&&await d.enableGeometryOperations();c={...c,arcade:b}}a=this.getBreakIndex(a,c);return-1<a?this.classBreakInfos[a].symbol:this.defaultSymbol}getSymbols(){const a=[];this.classBreakInfos.forEach(b=>{b.symbol&&a.push(b.symbol)});this.defaultSymbol&&
a.push(this.defaultSymbol);return a}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")}getMeshHash(){const a=JSON.stringify(this.backgroundFillSymbol),b=JSON.stringify(this.defaultSymbol),c=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`,d=this.classBreakInfos.reduce((h,k)=>h+k.getMeshHash(),"");return`${a}.${b}.${d}.${c}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||
!!this.valueExpression}clone(){return new v({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:n.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:n.clone(this.visualVariables),
legendOptions:n.clone(this.legendOptions),authoringInfo:n.clone(this.authoringInfo)})}async collectRequiredFields(a,b){a=[this.collectVVRequiredFields(a,b),this.collectSymbolFields(a,b)];await Promise.all(a)}async collectSymbolFields(a,b){const c=[...this.getSymbols().map(d=>d.collectRequiredFields(a,b)),u.collectArcadeFieldNames(a,b,this.valueExpression)];u.collectField(a,b,this.field);u.collectField(a,b,this.normalizationField);await Promise.all(c)}_getBreakIndexForExpression(a,b){const {viewingMode:c,
scale:d,spatialReference:h,arcade:k,timeZone:H}=b??{};({valueExpression:b}=this);var m=this._compiledValueExpression.valueExpression===b?this._compiledValueExpression.compiledFunction:null;const p=k.arcadeUtils;m||(m=p.createSyntaxTree(b),m=p.createFunction(m),this._compiledValueExpression.compiledFunction=m);this._compiledValueExpression.valueExpression=b;a=p.executeFunction(m,p.createExecContext(a,p.getViewInfo({viewingMode:c,scale:d,spatialReference:h}),H));return this._getBreakIndexfromInfos(a)}_getBreakIndexForField(a){var b=
a.attributes;a=this.normalizationType;let c=parseFloat(b[this.field]);if(a){const d=this.normalizationTotal;b=parseFloat(this.normalizationField?b[this.normalizationField]:void 0);if("log"===a)c=Math.log(c)*Math.LOG10E;else if("percent-of-total"===a&&null!=d&&!isNaN(d))c=c/d*100;else if("field"===a&&!isNaN(b)){if(isNaN(c)||isNaN(b))return-1;c/=b}}return this._getBreakIndexfromInfos(c)}_getBreakIndexfromInfos(a){const b=this.isMaxInclusive;if(null!=a&&"number"===typeof a&&!isNaN(a))for(let c=0;c<this.classBreakInfos.length;c++){const d=
[this.classBreakInfos[c].minValue,this.classBreakInfos[c].maxValue];if(d[0]<=a&&(b?a<=d[1]:a<d[1]))return c}return-1}_areClassBreaksConsecutive(){const a=this.classBreakInfos,b=a.length;for(let c=1;c<b;c++)if(a[c-1].maxValue!==a[c].minValue)return!1;return!0}};f.__decorate([g.property(w.rendererBackgroundFillSymbolProperty)],e.prototype,"backgroundFillSymbol",void 0);f.__decorate([g.property({type:[r]})],e.prototype,"classBreakInfos",void 0);f.__decorate([B.reader("classBreakInfos")],e.prototype,
"readClassBreakInfos",null);f.__decorate([D.writer("classBreakInfos")],e.prototype,"writeClassBreakInfos",null);f.__decorate([g.property({type:String,json:{write:!0}})],e.prototype,"defaultLabel",void 0);f.__decorate([g.property(w.rendererSymbolProperty)],e.prototype,"defaultSymbol",void 0);f.__decorate([g.property({type:String,json:{write:!0}})],e.prototype,"field",void 0);f.__decorate([z.cast("field")],e.prototype,"castField",null);f.__decorate([g.property({type:Boolean})],e.prototype,"isMaxInclusive",
void 0);f.__decorate([g.property({type:F.LegendOptions,json:{write:!0}})],e.prototype,"legendOptions",void 0);f.__decorate([g.property({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],e.prototype,"minValue",null);f.__decorate([g.property({type:String,json:{write:!0}})],e.prototype,"normalizationField",void 0);f.__decorate([g.property({type:Number,cast:a=>t.ensureNumber(a),
json:{write:!0}})],e.prototype,"normalizationTotal",void 0);f.__decorate([g.property({type:l.apiValues,value:null,json:{type:l.jsonValues,read:l.read,write:l.write}})],e.prototype,"normalizationType",null);f.__decorate([A.enumeration({classBreaks:"class-breaks"})],e.prototype,"type",void 0);f.__decorate([g.property({type:String,json:{write:!0}})],e.prototype,"valueExpression",void 0);f.__decorate([g.property({type:String,json:{write:!0}})],e.prototype,"valueExpressionTitle",void 0);return e=v=f.__decorate([C.subclass("esri.renderers.ClassBreaksRenderer")],
e)});