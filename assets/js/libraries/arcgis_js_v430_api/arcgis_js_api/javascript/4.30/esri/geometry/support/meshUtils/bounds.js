// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../Extent","../aaBoundingBox","./projection"],function(h,t,k,u){function p(b){if(0===b.length)return k.zero;const c=k.create([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);k.expandWithBuffer(c,b);return c}function q(b,c){const [d,e,f,g,l,m]=p(b);return new t({xmin:d,ymin:e,zmin:f,xmax:g,ymax:l,zmax:m,spatialReference:c})}let r=null;h.getBoundsFromPositions=p;h.getExtentFromBounds=
function([b,c,d,e,f,g],l,m,n){r??=new Float64Array(24);const a=r;a[0]=b;a[1]=c;a[2]=d;a[3]=b;a[4]=f;a[5]=d;a[6]=e;a[7]=f;a[8]=d;a[9]=e;a[10]=c;a[11]=d;a[12]=b;a[13]=c;a[14]=g;a[15]=b;a[16]=f;a[17]=g;a[18]=e;a[19]=f;a[20]=g;a[21]=e;a[22]=c;a[23]=g;u.project({positions:a,transform:l,vertexSpace:m,inSpatialReference:n,outSpatialReference:n,outPositions:a});return q(a,n)};h.getExtentFromPositions=q;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});