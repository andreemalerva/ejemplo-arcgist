// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ./AlgorithmicColorRamp ./ColorRamp".split(" "),function(b,e,d,a,l,f,g,h){var c;a=c=class extends h{constructor(k){super(k);this.colorRamps=null;this.type="multipart"}clone(){return new c({colorRamps:e.clone(this.colorRamps)})}};b.__decorate([d.property({type:[g],json:{write:!0}})],a.prototype,"colorRamps",void 0);b.__decorate([d.property({type:["multipart"]})],
a.prototype,"type",void 0);return a=c=b.__decorate([f.subclass("esri.rest.support.MultipartColorRamp")],a)});