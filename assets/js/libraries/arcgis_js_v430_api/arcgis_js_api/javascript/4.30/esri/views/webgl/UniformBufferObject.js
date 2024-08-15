// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","./BufferObject","./enums","./UniformBufferLayout"],function(c,d,e,f,g){class h{constructor(a,b,k=f.Usage.DYNAMIC_DRAW){this._context=a;this._usage=k;this._dirtyRange={from:Infinity,to:-1};this._initialized=!1;this._data=new g.UniformBufferLayout(b)}get byteLength(){return this._data.byteLength}initialize(){this._initialized||(this.buffer=e.BufferObject.createUniform(this._context,this._usage,this._data.array),this._resetDirtyRange(),this._initialized=!0)}dispose(){this._context.unbindUBO(this);
this.buffer=d.disposeMaybe(this.buffer)}set(a){this._data.setValues(a,this._dirtyRange)}setUniform(a,b){this._data.setValue(a,b,this._dirtyRange)}upload(){this.initialize();const {from:a,to:b}=this._dirtyRange;-1<b&&a<b&&(this.buffer.setSubData(this._data.arrayView32,a,a,b),this._resetDirtyRange())}_resetDirtyRange(){this._dirtyRange.from=Infinity;this._dirtyRange.to=-1}}c.UniformBufferObject=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});