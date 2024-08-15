// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Graphic ../../PopupTemplate ../../symbols ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point ../route/utils ./networkEnums".split(" "),function(c,m,n,p,b,q,d,u,v,w,h,r,k,t,g,e){var l;b=l=class extends b.ClonableMixin(q.JSONSupport){constructor(a){super(a);
this.timeWindowStartOffset=this.timeWindowStart=this.timeWindowEndOffset=this.timeWindowEnd=this.symbol=this.status=this.sourceOid=this.sourceId=this.snapZ=this.snapY=this.snapX=this.sideOfEdge=this.sequence=this.serviceDuration=this.serviceDistance=this.serviceCosts=this.routeName=this.posAlong=this.popupTemplate=this.objectId=this.navLatency=this.name=this.locationType=this.lateDuration=this.geometry=this.distanceToNetworkInMeters=this.departTimeOffset=this.departTime=this.departCurbApproach=this.curbApproach=
this.cumulativeDuration=this.cumulativeDistance=this.cumulativeCosts=this.bearingTol=this.bearing=this.arriveTimeOffset=this.arriveTime=this.arriveCurbApproach=null;this.type="stop";this.wait=this.waitDuration=this.violations=null}readArriveTimeOffset(a,f){return g.getTimezoneOffset(f.attributes.ArriveTime,f.attributes.ArriveTimeUTC)}readCumulativeCosts(a,f){return g.getPrefixedProperties(f.attributes,"Cumul_")}readDepartTimeOffset(a,f){return g.getTimezoneOffset(f.attributes.DepartTime,f.attributes.DepartTimeUTC)}readServiceCosts(a,
f){return g.getPrefixedProperties(f.attributes,"Attr_")}writeServiceCosts(a,f){g.setPrefixedProperties(a,f,"Attr_")}writeTimeWindowEnd(a,f){null!=a&&(f.attributes||(f.attributes={}),f.attributes.TimeWindowEnd=a.getTime())}writeTimeWindowStart(a,f){null!=a&&(f.attributes||(f.attributes={}),f.attributes.TimeWindowStart=a.getTime())}readViolations(a,f){return g.getPrefixedProperties(f.attributes,"Violation_")}readWait(a,f){return g.getPrefixedProperties(f.attributes,"Wait_")}static fromGraphic(a){return new l({arriveCurbApproach:null!=
a.attributes.ArrivalCurbApproach?e.curbApproachJsonMap.fromJSON(a.attributes.ArrivalCurbApproach):null,arriveTime:null!=a.attributes.ArrivalTime?new Date(a.attributes.ArrivalTime):null,arriveTimeOffset:a.attributes.ArrivalUTCOffset,cumulativeCosts:null!=a.attributes.CumulativeCosts?g.toKebabImpedanceAttributes(JSON.parse(a.attributes.CumulativeCosts)):null,cumulativeDistance:a.attributes.CumulativeMeters??null,cumulativeDuration:a.attributes.CumulativeMinutes??null,curbApproach:null!=a.attributes.CurbApproach?
e.curbApproachJsonMap.fromJSON(a.attributes.CurbApproach):null,departCurbApproach:null!=a.attributes.DepartureCurbApproach?e.curbApproachJsonMap.fromJSON(a.attributes.DepartureCurbApproach):null,departTime:null!=a.attributes.DepartureTime?new Date(a.attributes.DepartureTime):null,departTimeOffset:a.attributes.DepartureUTCOffset??null,geometry:a.geometry,lateDuration:a.attributes.LateMinutes??null,locationType:null!=a.attributes.LocationType?e.locationTypeJsonMap.fromJSON(a.attributes.LocationType):
null,name:a.attributes.Name,objectId:a.attributes.ObjectID??a.attributes.__OBJECTID,popupTemplate:a.popupTemplate,routeName:a.attributes.RouteName,sequence:a.attributes.Sequence??null,serviceCosts:null!=a.attributes.ServiceCosts?g.toKebabImpedanceAttributes(JSON.parse(a.attributes.ServiceCosts)):null,serviceDistance:a.attributes.ServiceMeters??null,serviceDuration:a.attributes.ServiceMinutes??null,status:null!=a.attributes.Status?e.statusJsonMap.fromJSON(a.attributes.Status):null,symbol:a.symbol,
timeWindowEnd:null!=a.attributes.TimeWindowEnd?new Date(a.attributes.TimeWindowEnd):null,timeWindowEndOffset:a.attributes.TimeWindowEndUTCOffset??null,timeWindowStart:null!=a.attributes.TimeWindowStart?new Date(a.attributes.TimeWindowStart):null,timeWindowStartOffset:a.attributes.TimeWindowStartUTCOffset??null,waitDuration:a.attributes.WaitMinutes??null})}toGraphic(){const a={ObjectID:this.objectId,ArrivalCurbApproach:null!=this.arriveCurbApproach?e.curbApproachJsonMap.toJSON(this.arriveCurbApproach):
null,ArrivalTime:null!=this.arriveTime?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:null!=this.cumulativeCosts?JSON.stringify(g.fromKebabImpedanceAttributes(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:null!=this.curbApproach?e.curbApproachJsonMap.toJSON(this.curbApproach):null,DepartureCurbApproach:null!=this.departCurbApproach?e.curbApproachJsonMap.toJSON(this.departCurbApproach):
null,DepartureTime:null!=this.departTime?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:null!=this.locationType?e.locationTypeJsonMap.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:null!=this.serviceCosts?JSON.stringify(g.fromKebabImpedanceAttributes(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:null!=this.status?e.statusJsonMap.toJSON(this.status):
null,TimeWindowEnd:null!=this.timeWindowEnd?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:this.timeWindowEndOffset??this.arriveTimeOffset,TimeWindowStart:null!=this.timeWindowStart?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:this.timeWindowStartOffset??this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new m({geometry:this.geometry,attributes:a,symbol:this.symbol,popupTemplate:this.popupTemplate})}};b.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},
{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time",type:"esriFieldTypeInteger"},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString"},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble"},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble"},{name:"CurbApproach",alias:"Curb Approach",
type:"esriFieldTypeInteger"},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate"},{name:"DepartureUTCOffset",alias:"Departure Time",type:"esriFieldTypeInteger"},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble"},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",
type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString"},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble"},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate"},{name:"TimeWindowEndUTCOffset",alias:"Time Window End Offset",
type:"esriFieldTypeInteger"},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate"},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start Offset",type:"esriFieldTypeInteger"},{name:"WaitMinutes",alias:"Minutes Wait",type:"esriFieldTypeDouble"}];c.__decorate([d.property({type:e.curbApproachJsonMap.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:e.curbApproachJsonMap.read}}})],b.prototype,"arriveCurbApproach",void 0);c.__decorate([d.property({type:Date,
json:{read:{source:"attributes.ArriveTimeUTC"}}})],b.prototype,"arriveTime",void 0);c.__decorate([d.property()],b.prototype,"arriveTimeOffset",void 0);c.__decorate([h.reader("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],b.prototype,"readArriveTimeOffset",null);c.__decorate([d.property({json:{name:"attributes.Bearing",read:!1,write:!0}})],b.prototype,"bearing",void 0);c.__decorate([d.property({json:{name:"attributes.BearingTol",read:!1,write:!0}})],b.prototype,"bearingTol",
void 0);c.__decorate([d.property()],b.prototype,"cumulativeCosts",void 0);c.__decorate([h.reader("cumulativeCosts",["attributes"])],b.prototype,"readCumulativeCosts",null);c.__decorate([d.property()],b.prototype,"cumulativeDistance",void 0);c.__decorate([d.property()],b.prototype,"cumulativeDuration",void 0);c.__decorate([d.property({type:e.curbApproachJsonMap.apiValues,json:{name:"attributes.CurbApproach",read:{reader:e.curbApproachJsonMap.read},write:{writer:e.curbApproachJsonMap.write}}})],b.prototype,
"curbApproach",void 0);c.__decorate([d.property({type:e.curbApproachJsonMap.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:e.curbApproachJsonMap.read}}})],b.prototype,"departCurbApproach",void 0);c.__decorate([d.property({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],b.prototype,"departTime",void 0);c.__decorate([d.property()],b.prototype,"departTimeOffset",void 0);c.__decorate([h.reader("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],
b.prototype,"readDepartTimeOffset",null);c.__decorate([d.property({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],b.prototype,"distanceToNetworkInMeters",void 0);c.__decorate([d.property({type:t,json:{write:!0}})],b.prototype,"geometry",void 0);c.__decorate([d.property()],b.prototype,"lateDuration",void 0);c.__decorate([d.property({type:e.locationTypeJsonMap.apiValues,json:{name:"attributes.LocationType",read:{reader:e.locationTypeJsonMap.read},write:{writer:e.locationTypeJsonMap.write}}})],
b.prototype,"locationType",void 0);c.__decorate([d.property({json:{name:"attributes.Name"}})],b.prototype,"name",void 0);c.__decorate([d.property({json:{name:"attributes.NavLatency",read:!1,write:!0}})],b.prototype,"navLatency",void 0);c.__decorate([d.property({json:{name:"attributes.ObjectID"}})],b.prototype,"objectId",void 0);c.__decorate([d.property({type:n})],b.prototype,"popupTemplate",void 0);c.__decorate([d.property({json:{read:{source:"attributes.PosAlong"}}})],b.prototype,"posAlong",void 0);
c.__decorate([d.property({json:{name:"attributes.RouteName"}})],b.prototype,"routeName",void 0);c.__decorate([d.property()],b.prototype,"serviceCosts",void 0);c.__decorate([h.reader("serviceCosts",["attributes"])],b.prototype,"readServiceCosts",null);c.__decorate([k.writer("serviceCosts")],b.prototype,"writeServiceCosts",null);c.__decorate([d.property()],b.prototype,"serviceDistance",void 0);c.__decorate([d.property()],b.prototype,"serviceDuration",void 0);c.__decorate([d.property({json:{name:"attributes.Sequence"}})],
b.prototype,"sequence",void 0);c.__decorate([d.property({type:e.sideOfEdgeJsonMap.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:e.sideOfEdgeJsonMap.read}}})],b.prototype,"sideOfEdge",void 0);c.__decorate([d.property({json:{read:{source:"attributes.SnapX"}}})],b.prototype,"snapX",void 0);c.__decorate([d.property({json:{read:{source:"attributes.SnapY"}}})],b.prototype,"snapY",void 0);c.__decorate([d.property({json:{read:{source:"attributes.SnapZ"}}})],b.prototype,"snapZ",void 0);c.__decorate([d.property({json:{read:{source:"attributes.SourceID"}}})],
b.prototype,"sourceId",void 0);c.__decorate([d.property({json:{read:{source:"attributes.SourceOID"}}})],b.prototype,"sourceOid",void 0);c.__decorate([d.property({type:e.statusJsonMap.apiValues,json:{read:{source:"attributes.Status",reader:e.statusJsonMap.read}}})],b.prototype,"status",void 0);c.__decorate([d.property({types:p.symbolTypes})],b.prototype,"symbol",void 0);c.__decorate([d.property({type:Date,json:{name:"attributes.TimeWindowEnd"}})],b.prototype,"timeWindowEnd",void 0);c.__decorate([k.writer("timeWindowEnd")],
b.prototype,"writeTimeWindowEnd",null);c.__decorate([d.property()],b.prototype,"timeWindowEndOffset",void 0);c.__decorate([d.property({type:Date,json:{name:"attributes.TimeWindowStart"}})],b.prototype,"timeWindowStart",void 0);c.__decorate([k.writer("timeWindowStart")],b.prototype,"writeTimeWindowStart",null);c.__decorate([d.property()],b.prototype,"timeWindowStartOffset",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0);c.__decorate([d.property()],b.prototype,
"violations",void 0);c.__decorate([h.reader("violations",["attributes"])],b.prototype,"readViolations",null);c.__decorate([d.property()],b.prototype,"waitDuration",void 0);c.__decorate([d.property()],b.prototype,"wait",void 0);c.__decorate([h.reader("wait",["attributes"])],b.prototype,"readWait",null);return b=l=c.__decorate([r.subclass("esri.rest.support.Stop")],b)});