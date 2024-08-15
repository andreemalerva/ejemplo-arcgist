// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/libs/gl-matrix-2/math/quat ../../core/libs/gl-matrix-2/factories/quatf64 ../../chunks/vec32 ./vector ./vectorStacks".split(" "),function(d,f,n,l,u,p){function g(a=q){return[a[0],a[1],a[2],a[3]]}function h(a,b,c,m,e=g()){e[0]=a;e[1]=b;e[2]=c;e[3]=m;return e}function r(a,b){a[3]=b;return a}const q=[0,0,1,0],k=n.create(),t=n.create();d.angle=function(a){return a[3]};d.axis=function(a){return a};d.compose=function(a,b,c){f.setAxisAngle(k,a,a[3]);f.setAxisAngle(t,b,b[3]);f.multiply(k,
t,k);return r(c,f.getAxisAngle(c,k))};d.copy=function(a,b=g()){return h(a[0],a[1],a[2],a[3],b)};d.create=g;d.fromAxisAndAngle=function(a,b){const c=g();l.copy(c,a);c[3]=b;return c};d.fromPoints=function(a,b,c){l.cross(c,a,b);l.normalize(c,c);c[3]=u.angle(a,b);return c};d.fromValues=h;d.setAngle=r;d.up=q;d.wrap=function(a,b,c,m){return h(a,b,c,m,p.sv4d.get())};d.wrapAxisAngle=function(a,b){return h(a[0],a[1],a[2],b,p.sv4d.get())};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});