// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function k(){return[0,0,0,1,0,0,0,0]}function l(a){return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]]}function m(a,b,g,h,d,e,f,q){return[a,b,g,h,d,e,f,q]}function n(a,b,g,h,d,e,f){d*=.5;e*=.5;f*=.5;return[a,b,g,h,d*h+e*g-f*b,e*h+f*a-d*g,f*h+d*b-e*a,-d*a-e*b-f*g]}function p(a,b){return new Float64Array(a,b,8)}const r=Object.freeze(Object.defineProperty({__proto__:null,clone:l,create:k,createView:p,fromRotationTranslationValues:n,fromValues:m},Symbol.toStringTag,{value:"Module"}));
c.clone=l;c.create=k;c.createView=p;c.fromRotationTranslationValues=n;c.fromValues=m;c.quat2f64=r;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});