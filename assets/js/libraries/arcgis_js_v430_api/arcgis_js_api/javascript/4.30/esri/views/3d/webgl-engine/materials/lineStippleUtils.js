// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(b){null!=b?(b=e[b],b=null==b?b:{pattern:b.slice(),pixelRatio:8}):b=null;return b}const a={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},e={dash:a.dash,"dash-dot":[...a.dash,...a.dot],dot:a.dot,"long-dash":a["long-dash"],"long-dash-dot":[...a["long-dash"],...a.dot],"long-dash-dot-dot":[...a["long-dash"],...a.dot,...a.dot],none:null,"short-dash":a["short-dash"],"short-dash-dot":[...a["short-dash"],...a["short-dot"]],"short-dash-dot-dot":[...a["short-dash"],
...a["short-dot"],...a["short-dot"]],"short-dot":a["short-dot"],solid:null};c.createStipplePatternSimple=function(b){return{pattern:[b,b],pixelRatio:2}};c.getStipplePatternForLinePattern=function(b){return null!=b&&"style"===b.type?d(b.style):null};c.getStipplePatternForPatternStyle=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});