// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../time/timeZoneUtils".split(" "),function(b,a,c,g,h,k,d,e){a=class extends a{constructor(f){super(f);this.view=null}get state(){return this.view?.ready?"ready":"disabled"}get timeZoneComponents(){return this.view?e.getTimeZoneComponents(this.view.timeZone):null}};b.__decorate([c.property({readOnly:!0})],
a.prototype,"state",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"timeZoneComponents",null);b.__decorate([c.property()],a.prototype,"view",void 0);return a=b.__decorate([d.subclass("esri.widgets.TimeZoneLabel.TimeZoneLabelViewModel")],a)});