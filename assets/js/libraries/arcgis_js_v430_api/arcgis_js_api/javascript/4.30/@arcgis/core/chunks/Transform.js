/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{l as e,s as t,h as r}from"./vec3.js";import{c as s,s as n,d as i,P as o,i as a}from"./projectBuffer.js";import{f as l,h as c}from"./unitUtils.js";import{_ as p}from"./tslib.es6.js";import u from"../core/Accessor.js";import m from"../core/Evented.js";import{L as f}from"./Logger.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{k as v}from"./mat4.js";import{c as E}from"./mat4f64.js";import{c as _}from"./vec3f64.js";import{p as R}from"./RenderTexture.js";import{e as g,a as x}from"./aaBoundingRect.js";import{f as j}from"./sphere.js";import{E as y}from"./ElevationRange.js";import{E as S}from"./ElevationUpdateEvent.js";import{n as C,S as b}from"./Intersector2.js";function M(t,r,p,u){if(null==r||null==u)return!1;const m=s(r,n),f=s(u,i);if(m===f&&m!==o.UNKNOWN||l(r,u))return p[0]=1,p[1]=1,p[2]=1,!0;if(m===o.SPHERICAL_ECEF){const r=e(t),s=r/Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=r/c.radius;if(f===o.WEB_MERCATOR)return p[0]=s*n,p[1]=s*n,p[2]=1,!0;if(f===o.WGS84||f===o.CGCS2000){const e=a;return p[0]=e*s*n,p[1]=e*n,p[2]=1,!0}}else if(m===o.PLATE_CARREE){if(f===o.WGS84||f===o.CGCS2000)return p[0]=a,p[1]=a,p[2]=1,!0;if(f===o.WEB_MERCATOR){const e=t[1]/c.radius;return p[0]=1,p[1]=1/Math.cos(e),p[2]=1,!0}}return!1}let N=class extends(m.EventedMixin(u)){constructor(e){super(e),this._tmpEvent=new S,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=C(this.view.state.viewingMode),this._intersector.options.store=b.MIN,this._intersector.options.normalRequired=!1,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){return this.view?.elevationProvider?.spatialReference}getElevation(e,r,s,n){const i=this._renderCoordsHelper,o=t(A,e,r,s);if(!i.toRenderCoords(o,n,o))return f.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:a,_intersector:l,intersectionHandler:c}=this,p=a.fullExtent,u=null!=p&&Number.isFinite(p.xmin)&&Number.isFinite(p.xmax)&&Number.isFinite(p.ymin)&&Number.isFinite(p.ymax)&&Number.isFinite(p.zmin)&&Number.isFinite(p.zmax)?new y(p.zmin,p.zmax):a.elevationRange;if(null==u)return null;const m=a.elevationOffset,h=u.elevationRangeMin+m,d=u.elevationRangeMax+m,v=i.setAltitude(H,d,o),E=i.setAltitude(L,h,o);return l.reset(v,E,null),c.intersect(l,null,v,E,null,!0),l.results.min.getIntersectionPoint(o)?i.getAltitude(o):null}getSphereElevationBounds(e,t){return R(e,t,w,this._renderSR),this._layerElevationSource.getElevationRange(w)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return e?.hasZ?new y(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,t){g(t),this._expandExtent(e,t)}_computeLayerExtent(e,t){g(t);for(const r of e)this._expandExtent(r,t)}_expandExtent(e,t){const s=this.spatialReference;if(null==s)return;if(null==e)return;v(O,e.quaternion),O[12]=e.center[0],O[13]=e.center[1],O[14]=e.center[2];const n=e.halfSize;for(let e=0;e<8;++e)A[0]=1&e?n[0]:-n[0],A[1]=2&e?n[1]:-n[1],A[2]=4&e?n[2]:-n[2],r(A,A,O),this._renderCoordsHelper.fromRenderCoords(A,A,s),x(t,A,t)}};p([h({constructOnly:!0})],N.prototype,"layerElevationSource",void 0),p([h({constructOnly:!0})],N.prototype,"intersectionHandler",void 0),p([h({constructOnly:!0})],N.prototype,"view",void 0),p([h()],N.prototype,"spatialReference",null),N=p([d("esri.views.3d.layers.i3s.LayerElevationProvider")],N);const O=E(),w=j(0,0,0,0),A=_(),H=_(),L=_();class z{constructor(e,t,r,s){this.toMapSpace=e,this.transform=t,this.obb=r,this.geometry=s}}class F{constructor(e,t){this.position=e,this.rotationScale=t,this.origin=void 0}}export{N as L,z as O,F as T,M as l};
