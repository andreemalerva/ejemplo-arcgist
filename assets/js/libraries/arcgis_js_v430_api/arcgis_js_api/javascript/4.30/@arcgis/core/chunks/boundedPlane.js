/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../core/lang.js";import{L as s}from"./Logger.js";import{a as i}from"./mathUtils.js";import{O as n,d as t}from"./ray.js";import{i as a,t as o,f as r}from"./mat4.js";import{c as e}from"./mat4f64.js";import{p as c,d as u,l as g,h as b,b as f,i as l,s as p,j as m,y as d,c as h,g as I,n as j,k as P}from"./vec3.js";import{f as N,e as v,c as w}from"./vec3f64.js";import{A as M}from"./Axis.js";import{c as y,p as T,d as A}from"./lineSegment.js";import{c as S,d as _,g as x,e as O,w as V,h as E,s as Y,i as k,j as B,k as F,l as L,m as q,n as C,o as R}from"./plane.js";const U=()=>s.getLogger("esri.views.3d.support.geometryUtils.boundedPlane"),z=class{constructor(){this.plane=S(),this.origin=w(),this.basis1=w(),this.basis2=w()}};function G(s=ls){return{plane:S(s.plane),origin:v(s.origin),basis1:v(s.basis1),basis2:v(s.basis2)}}function W(s,i=G()){return X(s.origin,s.basis1,s.basis2,i)}function X(s,i,n,t=G()){return c(t.origin,s),c(t.basis1,i),c(t.basis2,n),Z(t),a=t,o="fromValues()",Math.abs(u(a.basis1,a.basis2)/(g(a.basis1)*g(a.basis2)))>1e-6&&U().warn(o,"Provided basis vectors are not perpendicular"),Math.abs(u(a.basis1,cs(a)))>1e-6&&U().warn(o,"Basis vectors and plane normal are not perpendicular"),Math.abs(-u(cs(a),a.origin)-a.plane[3])>1e-6&&U().warn(o,"Plane offset is not consistent with plane origin"),t;var a,o}function Z(s){_(s.basis2,s.basis1,s.origin,s.plane)}function D(s,i,n){s!==n&&W(s,n);const t=f(Y.get(),cs(s),i);return l(n.origin,n.origin,t),n.plane[3]-=i,n}function H(s,i=G()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return p(i.origin,s[0]+n,s[1]+t,0),p(i.basis1,n,0,0),p(i.basis2,0,t,0),k(0,0,1,0,i.plane),i}function J(s,i,n){return!!B(s.plane,i,n)&&us(s,n)}function K(s,n,t){const a=ps.get();fs(s,n,a,ps.get());let o=Number.POSITIVE_INFINITY;for(const r of Is){const e=bs(s,r,ms.get()),g=Y.get();if(F(a,e,g)){const s=d(Y.get(),n.origin,g),a=Math.abs(i(u(n.direction,s)));a<o&&(o=a,c(t,g))}}return o===Number.POSITIVE_INFINITY?Q(s,n,t):t}function Q(s,i,n){if(J(s,i,n))return n;const a=ps.get(),o=ps.get();fs(s,i,a,o);let r=Number.POSITIVE_INFINITY;for(const e of Is){const u=bs(s,e,ms.get()),g=Y.get();if(L(a,u,g)){const s=t(i,g);if(!q(o,g))continue;s<r&&(r=s,c(n,g))}}return is(s,i.origin)<r&&$(s,i.origin,n),n}function $(s,i,n){const t=C(s.plane,i,Y.get()),a=T(gs(s,s.basis1),t,-1,1,Y.get()),o=T(gs(s,s.basis2),t,-1,1,Y.get());return h(n,l(Y.get(),a,o),s.origin),n}function ss(s,i,n){const{origin:t,basis1:a,basis2:o}=s,r=h(Y.get(),i,t),e=R(a,r),c=R(o,r),u=R(cs(s),r);return p(n,e,c,u)}function is(s,i){const n=ss(s,i,Y.get()),{basis1:t,basis2:a}=s,o=g(t),r=g(a),e=Math.max(Math.abs(n[0])-o,0),c=Math.max(Math.abs(n[1])-r,0),u=n[2];return e*e+c*c+u*u}function ns(s,i){return Math.sqrt(is(s,i))}function ts(s,i){return q(s.plane,i)&&us(s,i)}function as(s,i){const n=-s.plane[3];return R(cs(s),i)-n}function os(s,i){return I(s.basis1,i.basis1)&&I(s.basis2,i.basis2)&&I(s.origin,i.origin)}function rs(s,i,n){return s!==n&&W(s,n),a(js,i),o(js,js),b(n.basis1,s.basis1,js),b(n.basis2,s.basis2,js),b(x(n.plane),x(s.plane),js),b(n.origin,s.origin,i),O(n.plane,n.plane,n.origin),n}function es(s,i,n,t){return s!==t&&W(s,t),r(Ps,i,n),b(t.basis1,s.basis1,Ps),b(t.basis2,s.basis2,Ps),Z(t),t}function cs(s){return x(s.plane)}function us(s,i){const n=h(Y.get(),i,s.origin),t=P(s.basis1),a=P(s.basis2),o=u(s.basis1,n),r=u(s.basis2,n);return-o-t<0&&o-t<0&&-r-a<0&&r-a<0}function gs(s,i){const n=ms.get();return c(n.origin,s.origin),c(n.vector,i),n}function bs(s,i,n){const{basis1:t,basis2:a,origin:o}=s,r=f(Y.get(),t,i.origin[0]),e=f(Y.get(),a,i.origin[1]);l(n.origin,r,e),l(n.origin,n.origin,o);const c=f(Y.get(),t,i.direction[0]),u=f(Y.get(),a,i.direction[1]);return f(n.vector,l(c,c,u),2),n}function fs(s,i,n,t){const a=cs(s);_(a,i.direction,i.origin,n),_(x(n),a,i.origin,t)}const ls={plane:S(),origin:N(0,0,0),basis1:N(1,0,0),basis2:N(0,1,0)},ps=new n(S),ms=new n(y),ds=w(),hs=new n((()=>G())),Is=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],js=e(),Ps=e(),Ns=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:z,altitudeAt:as,axisAt:function(s,i,n,t){return function(s,i,n){switch(i){case M.X:c(n,s.basis1),j(n,n);break;case M.Y:c(n,s.basis2),j(n,n);break;case M.Z:c(n,cs(s))}return n}(s,n,t)},closestPoint:Q,closestPointOnSilhouette:K,copy:W,copyWithoutVerify:function(s,i){c(i.origin,s.origin),c(i.basis1,s.basis1),c(i.basis2,s.basis2),E(i.plane,s.plane)},create:G,distance:ns,distance2:is,distanceToSilhouette:function(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of Is){const a=bs(s,t,ms.get()),o=A(a,i);o>n&&(n=o)}return Math.sqrt(n)},elevate:D,equals:os,extrusionContainsPoint:ts,fromAABoundingRect:H,fromValues:X,intersectRay:J,intersectRayClosestSilhouette:function(s,i,n){if(J(s,i,n))return n;const t=K(s,i,Y.get());return l(n,i.origin,f(Y.get(),i.direction,m(i.origin,t)/g(i.direction))),n},normal:cs,projectPoint:$,projectPointLocal:ss,rotate:es,setAltitudeAt:function(s,i,n,t){const a=as(s,i),o=f(ds,cs(s),n-a);return l(t,i,o),t},setExtent:function(s,i,n){return H(i,n),D(n,as(s,s.origin),n),n},transform:rs,up:ls,updateUnboundedPlane:Z,wrap:function(s,i,n){const t=hs.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=V(0,0,0,0),Z(t),t}},Symbol.toStringTag,{value:"Module"}));export{z as B,W as a,Ns as b,G as c,H as d,ts as e,X as f,ns as g,os as h,J as i,cs as n,es as r,rs as t,Z as u};
