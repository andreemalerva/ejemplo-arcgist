// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry","../../core/unitUtils","../../renderers/support/clickToleranceUtils","../../geometry/Extent"],function(h,q,k,n,l){function m(a,d,b,c=new l){let e=0;if("2d"===b.type)e=d*(b.resolution??0);else if("3d"===b.type){var g=b.overlayPixelSizeInMapUnits(a),f=b.basemapSpatialReference;e=null==f||f.equals(b.spatialReference)?d*g:k.getMetersPerUnitForSR(f)/k.getMetersPerUnitForSR(b.spatialReference)}d=a.x-e;g=a.y-e;f=a.x+e;a=a.y+e;({spatialReference:b}=b);c.xmin=Math.min(d,
f);c.ymin=Math.min(g,a);c.xmax=Math.max(d,f);c.ymax=Math.max(g,a);c.spatialReference=b;return c}const p=new l;h.createQueryGeometry=m;h.intersectsDrapedGeometry=function(a,d,b){a=b.toMap(a);if(null==a)return!1;const c=n.calculateTolerance();return m(a,c,b,p).intersects(d)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});