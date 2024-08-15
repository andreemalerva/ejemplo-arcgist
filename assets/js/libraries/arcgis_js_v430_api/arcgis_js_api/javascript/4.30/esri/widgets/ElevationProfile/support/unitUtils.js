// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/unitUtils"],function(l,f){function n(a,b,d){return null===a||void 0===a?null:f.convertUnit(a*b,"meters",d)}function g(a,b,d){return null===a||void 0===a?null:f.convertUnit(a*b,"meters",d)}l.convertSamples=function(a,b){if(null==a||null==b)return null;const {samples:d,spatialReference:e}=a,{distance:c,elevation:h}=b;a=f.getMetersPerUnitForSR(e);b=f.getMetersPerVerticalUnitForSR(e);const p=d.length,q=Array(p);for(let k=0;k<p;++k){const m=d[k],r=m.sampledZ,t=m.coordinate;
q[k]={x:t[0],y:t[1],z:r,distance:n(m.distance,a,c),elevation:g(r,b,h)}}return q};l.convertStatistics=function(a,b){if(null==a||null==b||null==a.statistics||null==a.spatialReference)return null;const {distance:d,elevation:e}=b,{statistics:c,spatialReference:h}=a;a=f.getMetersPerUnitForSR(h);b=f.getMetersPerVerticalUnitForSR(h);return{maxDistance:n(c.maxDistance,a,d),minElevation:g(c.minElevation,b,e),maxElevation:g(c.maxElevation,b,e),avgElevation:g(c.avgElevation,b,e),elevationGain:g(c.elevationGain,
b,e),elevationLoss:g(c.elevationLoss,b,e),maxPositiveSlope:c.maxPositiveSlope,maxNegativeSlope:c.maxNegativeSlope,avgPositiveSlope:c.avgPositiveSlope,avgNegativeSlope:c.avgNegativeSlope}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});