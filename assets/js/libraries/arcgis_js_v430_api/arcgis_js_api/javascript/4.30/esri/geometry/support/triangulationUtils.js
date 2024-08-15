// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/earcut ./Axis ./coordsUtils ./DoubleArray ./Indices ./polygonUtils ./meshUtils/deduplicate".split(" "),function(p,F,q,u,v,A,G,B){function H(a,c,d){if(1===a.length)return a[0];c=v.newDoubleArray(c);d=Array(d);let m=0,b=0,f=0;for(const k of a){for(a=0;a<k.position.length;a++)c[m++]=k.position[a];for(const g of k.faces)d[b++]=g+f;f=m/3}return{position:c,faces:A.compactIndices(d)}}function C(a,c,d,m){const b=a.length,f=Array(b),k=Array(b),g=Array(b);var h=0;for(var n=0;n<
b;++n)h+=a[n].length;let D=n=0,w=0;h=v.newDoubleArray(3*h);let l=0;for(let y=b-1;0<=y;y--){var e=a[y],r=d===p.CounterClockwiseMode.CCW_IS_HOLE?E(e,c,m):!1;if(r&&1!==b)f[n++]=e;else{var t=e.length;for(let z=0;z<n;++z)t+=f[z].length;t={index:l,pathLengths:Array(n+1),count:t,holeIndices:Array(n)};t.pathLengths[0]=e.length;0<e.length&&(g[w++]={index:l,count:e.length});l=r?x(e,e.length-1,-1,h,l,e.length,c):x(e,0,1,h,l,e.length,c);for(e=0;e<n;++e)r=f[e],t.holeIndices[e]=l,t.pathLengths[e+1]=r.length,0<
r.length&&(g[w++]={index:l,count:r.length}),l=x(r,0,1,h,l,r.length,c);n=0;0<t.count&&(k[D++]=t)}}for(a=0;a<n;++a)d=f[a],0<d.length&&(g[w++]={index:l,count:d.length}),l=x(d,0,1,h,l,d.length,c);k.length=D;g.length=w;return{position:h,polygons:k,outlines:g}}function x(a,c,d,m,b,f,k){b*=3;for(let g=0;g<f;++g){const h=a[c];m[b++]=h[0];m[b++]=h[1];m[b++]=k?h[2]:0;c+=d}return b/3}function E(a,c,d){if(!c)return!u.isClockwise(a);switch(G.leastSignificantAxis(a,a.length-1,d)){case q.Axis.X:return!u.isClockwise(a,
q.Axis.Y,q.Axis.Z);case q.Axis.Y:return!u.isClockwise(a,q.Axis.X,q.Axis.Z);case q.Axis.Z:return!u.isClockwise(a,q.Axis.X,q.Axis.Y)}}p.CounterClockwiseMode=void 0;(function(a){a[a.NONE=0]="NONE";a[a.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(p.CounterClockwiseMode||(p.CounterClockwiseMode={}));p.isCounterClockwise=E;p.ringsToTriangulationInfo=C;p.triangulate=function(a){a=C(a.rings,a.hasZ,p.CounterClockwiseMode.CCW_IS_HOLE,a.spatialReference);const c=[];let d=0,m=0;for(var b of a.polygons){const k=b.index,g=v.doubleSubArray(a.position,
3*k,3*b.count);var f=b.holeIndices.map(h=>h-k);f=A.compactIndices(F.earcut(g,f,3));c.push({position:g,faces:f});d+=g.length;m+=f.length}b=H(c,d,m);a=Array.isArray(b.position)?B.deduplicate(b.position,3,{originalIndices:b.faces}):B.deduplicate(b.position.buffer,6,{originalIndices:b.faces});b.position=v.doubleArrayFrom(new Float64Array(a.buffer));b.faces=a.indices;return b};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});