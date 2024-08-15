// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./definitions","./Mesh","../shaderGraph/techniques/mesh/utils"],function(m,n,t,u){class p extends t.Mesh{static create(f,a){const e=[];let {stride:d,hash:k}=a.layout;if(null==d){d=0;for(const {count:g,type:l,offset:h}of a.layout.attributes){if(null!=h)throw Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");d+=g*n.dataSizeInBytes[l]}}var c=0,b=0;for(const {count:g,name:l,offset:h,type:q,normalized:r}of a.layout.attributes)null!=h&&(b=
h),e.push({name:l,location:c,vertex:0,count:g,type:q,offset:b,stride:d,divisor:0,normalized:null!=r?r:!1}),c++,b+=g*n.dataSizeInBytes[q];c={attributes:e,primitive:a.primitive};null!=a.index&&(c.index=0);({count:b}=a);if(null==b&&(b=a.index?a.index.length:a.vertex.byteLength/d,Math.floor(b)!==b))throw Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${d}.`);c={vertex:[a.vertex],parts:[{start:0,count:b,group:0,primitive:a.primitive}],groups:[c]};null!=a.index&&
(c.index=[a.index]);null==k&&(k=u.vertexLayoutHash(e));return new p(f,c,{hash:k,attributes:e,stride:d})}constructor(f,a,e){super(f,a);this.layout=e}bind(f,a=0){super.bind(f,a)}}m.SimpleMesh=p;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});