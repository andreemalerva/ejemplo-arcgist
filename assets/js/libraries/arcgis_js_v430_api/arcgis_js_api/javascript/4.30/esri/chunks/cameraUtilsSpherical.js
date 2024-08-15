// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../core/Cyclical ../core/mathUtils ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../geometry/ellipsoidUtils ../geometry/Extent ../geometry/SpatialReference ../geometry/support/webMercatorUtils ../views/3d/support/cameraUtilsInternal ../views/3d/support/earthUtils".split(" "),function(t,F,m,G,B,h,v,Q,R,S,T,H,U){function C(c,b,d,g=H.createDirectionUp()){h.cross(r,c,I);0===h.dot(r,r)&&h.cross(r,c,J);G.fromRotation(y,
-m.deg2rad(b),c);G.rotate(y,y,-m.deg2rad(d),r);const {up:a,direction:f}=g;h.cross(a,r,c);h.normalize(a,a);h.transformMat4(a,a,y);h.normalize(f,c);h.negate(f,f);h.transformMat4(f,f,y);return g}function K(c,b,d,g){const a=r,f=w;h.normalize(a,c);h.cross(w,a,I);0===h.dot(w,w)&&h.cross(w,a,J);h.cross(f,w,a);return H.directionToHeadingTilt(b,d,g,a,f)}function L(c,b,d,g){const a={eye:v.create(),up:null,tilt:g,heading:d},f=r;f[0]=c[0];f[1]=c[2];f[2]=-c[1];d=m.deg2rad(d);var e=m.deg2rad(g);g=Math.sin(d);d=
Math.cos(d);var k=Math.sin(e),p=Math.cos(e);const l=h.length(f);if(1E-8>Math.abs(e))e=b+l;else{var n=l/k,x=m.asinClamped(b/n);e=n*Math.sin(Math.PI-e-x)}p*=b;n=b*b*k*k;x=d*d*n;const z=e-p,D=z*z;var q=x*(x+D-f[1]*f[1]);if(0>q)return h.scale(a.eye,f,e/l),a.tilt=0,A(a,c);var u=Math.sqrt(q);const M=f[1]*z;q=x+D;u=0<d?-u+M:u+M;if(1E-8>Math.abs(q))return 1E-8>l?(a.eye[0]=0,a.eye[1]=0,a.eye[2]=b):h.scale(a.eye,f,e/l),a.tilt=0,E(a.eye),A(a,c);a.eye[1]=u/q;b*=k;u=a.eye[1]*a.eye[1];k=1-u;q=Math.sqrt(k);n=x*
u+g*g*n-2*d*b*a.eye[1]*q*z+k*D;if(1E-8>Math.abs(n))return h.scale(a.eye,f,e/l),a.tilt=0,E(a.eye),A(a,c);a.eye[0]=(k*(e*f[0]-p*f[0])-b*q*(f[0]*a.eye[1]*d+f[2]*g))/n;a.eye[2]=(k*(e*f[2]-p*f[2])-b*q*(f[2]*a.eye[1]*d-f[0]*g))/n;h.scale(a.eye,a.eye,e);E(a.eye);return A(a,c)}function E(c){const b=c[1];c[1]=-c[2];c[2]=b}function A(c,b){b=C(b,c.heading,c.tilt);c.up=b.up;return c}function N(c,b,d){b=h.length(b);d=m.asinClamped(d/(Math.sqrt(d*d+b*b-2*d*b*Math.cos(Math.PI-c))/Math.sin(c)));return m.rad2deg(c-
d)}function O(c,b,d){c=m.deg2rad(c);b=h.length(b);return m.asinClamped(d/(b/Math.sin(c)))+c}function P(c,b,d,g,a){function f(l){const n=Math.PI/2;l=F.cyclical2PI.normalize(l,-n);l>n&&(l=Math.PI-l);return l}var e=b.latitude;var k=Q.getReferenceEllipsoid(c.spatialReference).radius;b=b.longitude;var p=U.getLonDeltaForDistance(e,d,k)/2;d=b-p;b+=p;e=m.deg2rad(e);e=(1+Math.sin(e))/(1-Math.sin(e));p=(e+1)*Math.tan(g/k/2);e=1.5*Math.PI-2*Math.atan(.5*(p+Math.sqrt(4*e+p*p)));g=e+g/k;e=f(e);g=f(g);g<e&&(k=
g,g=e,e=k);e=Math.max(m.rad2deg(e),-90);g=Math.min(m.rad2deg(g),90);b=V.monotonic(d,b);180<b-d&&(k=(b-d-180)/2,d+=k,b-=k);k=c.spatialReference&&c.spatialReference.isGeographic?c.spatialReference:S.WGS84;a?(a.xmin=d,a.ymin=e,a.xmax=b,a.ymax=g,a.spatialReference=k):a=new R(d,e,b,g,k);c.spatialReference&&c.spatialReference.isWebMercator&&T.geographicToWebMercator(a,!1,a);return a}const I=v.fromValues(0,0,1),J=h.normalize(v.create(),v.fromValues(1,1,1)),V=new F.Cyclical(-180,180),y=B.create(),r=v.create(),
w=v.create();B=Object.freeze(Object.defineProperty({__proto__:null,directionToHeadingTilt:K,eyeForCenterWithHeadingTilt:L,eyeTiltToLookAtTilt:O,headingTiltToDirectionUp:C,lookAtTiltToEyeTilt:N,toExtent:P},Symbol.toStringTag,{value:"Module"}));t.cameraUtilsSpherical=B;t.directionToHeadingTilt=K;t.eyeForCenterWithHeadingTilt=L;t.eyeTiltToLookAtTilt=O;t.headingTiltToDirectionUp=C;t.lookAtTiltToEyeTilt=N;t.toExtent=P});