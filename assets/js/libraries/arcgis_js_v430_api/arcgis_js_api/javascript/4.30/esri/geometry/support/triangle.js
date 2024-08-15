// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/ObjectStack ../../chunks/vec32 ../../core/libs/gl-matrix-2/factories/vec3f64 ./lineSegment ./vectorStacks".split(" "),function(l,E,d,p,q,m){function y(a){return a?{p0:p.clone(a.p0),p1:p.clone(a.p1),p2:p.clone(a.p2)}:{p0:p.create(),p1:p.create(),p2:p.create()}}function F(a,b,e,c=y()){d.copy(c.p0,a);d.copy(c.p1,b);d.copy(c.p2,e);return c}const z=new E.ObjectStack(q.create),I=new E.ObjectStack(()=>y()),A=p.create(),G=p.create();l.areaPoints2d=function(a,b,e){return.5*Math.abs((b[0]-
a[0])*(e[1]-a[1])-(b[1]-a[1])*(e[0]-a[0]))};l.areaPoints3d=function(a,b,e){d.subtract(A,b,a);d.subtract(G,e,a);return.5*d.length(d.cross(A,A,G))};l.copy=function(a,b=y()){return F(a.p0,a.p1,a.p2,b)};l.create=y;l.distance2=function(a,b){var e=a.p0,c=a.p1;a=a.p2;const n=d.subtract(m.sv3d.get(),c,e),g=d.subtract(m.sv3d.get(),a,c),r=d.subtract(m.sv3d.get(),e,a),u=d.subtract(m.sv3d.get(),b,e);var h=d.subtract(m.sv3d.get(),b,c),k=d.subtract(m.sv3d.get(),b,a);const f=d.cross(n,n,r),w=d.dot(d.cross(m.sv3d.get(),
n,f),u);h=d.dot(d.cross(m.sv3d.get(),g,f),h);k=d.dot(d.cross(m.sv3d.get(),r,f),k);if(0<w&&0<h&&0<k)return b=d.dot(f,u),b*b/d.dot(f,f);e=q.distance2(q.fromValues(e,n,z.get()),b);c=q.distance2(q.fromValues(c,g,z.get()),b);b=q.distance2(q.fromValues(a,r,z.get()),b);return Math.min(e,c,b)};l.fromValues=F;l.intersectRay=function(a,b,e){const {direction:c,origin:n}=b,{p0:g,p1:r,p2:u}=a;var h=r[0]-g[0],k=r[1]-g[1],f=r[2]-g[2];a=u[0]-g[0];b=u[1]-g[1];const w=u[2]-g[2];var v=c[1]*w-b*c[2],x=c[2]*a-w*c[0];
const H=c[0]*b-a*c[1];var t=h*v+k*x+f*H;if(-1E-5<t&&1E-5>t)return!1;t=1/t;const B=n[0]-g[0],C=n[1]-g[1],D=n[2]-g[2];v=t*(B*v+C*x+D*H);if(0>v||1<v)return!1;x=C*f-k*D;f=D*h-f*B;h=B*k-h*C;k=t*(c[0]*x+c[1]*f+c[2]*h);if(0>k||1<v+k)return!1;e&&(d.scale(e,c,t*(a*x+b*f+w*h)),d.add(e,n,e));return!0};l.wrap=function(a,b,e){const c=I.get();c.p0=a;c.p1=b;c.p2=e;return c};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});