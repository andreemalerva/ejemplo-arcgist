// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./Uniform","../shaderTechnique/BindType"],function(a,c,d){class e extends c.Uniform{constructor(b,f){super(b,"int",d.BindType.Draw,(g,h,k)=>g.setUniform1i(b,f(h,k)))}}a.IntegerDrawUniform=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});