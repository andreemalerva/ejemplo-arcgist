// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./CloudsTechniqueConfiguration"],function(c,a){class b{constructor(e,f,g,h,k,l,m,n,p=.5){this.coverage=e;this.density=f;this.absorption=g;this.cloudSize=h;this.detailSize=k;this.smoothness=l;this.cloudHeight=m;this.raymarchingSteps=n;this.median=p}}const d=new b([0,.6],[.03,.03],[0,0],[.9,.9],[.8,.8],[.7,.7],[.05,.05],a.RayMarchingSteps.SIXTEEN);a={sunny:d,cloudy:new b([.3,.65],[.2,.4],[0,0],[.85,.85],[.75,.75],[.3,.4],[1,1],a.RayMarchingSteps.TWOHUNDRED,.6),rainy:new b([.6,.8],
[.5,.8],[.1,.5],[.9,.9],[.75,.75],[.5,.5],[1,1],a.RayMarchingSteps.TWOHUNDRED,.4),snowy:new b([.25,.75],[.3,.3],[0,0],[.95,.95],[.7,.7],[.69,.75],[.3,1],a.RayMarchingSteps.HUNDRED,.65),foggy:new b([.8,.8],[.5,.5],[0,0],[.95,.95],[.9,.9],[.55,.55],[.3,.3],a.RayMarchingSteps.SIXTEEN),default:d};c.CloudPresets=b;c.cloudPresets=a;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});