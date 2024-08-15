// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/screenUtils","../engine/webgl/definitions","../engine/webgl/mesh/templates/shapingUtils"],function(d,b,g,k){async function h(a,c,e){c=await c.textureManager.rasterizeItem({type:"cim-rasterization-info",resource:{type:"text",textString:a.text,font:a.font}},e);return k.shapeGlyphs(c,{angle:a.angle??0,xOffset:b.pt2px(a.xoffset??0),yOffset:b.pt2px(a.yoffset??0),lineHeight:g.magicLabelLineHeight*Math.max(.25,a.lineHeight),maxLineWidth:Math.max(32,Math.min(b.pt2px(a.lineWidth),
512)),decoration:a.font.decoration,scale:Math.min(Math.round(b.pt2px(a.font.size)),127)/g.glyphSize,horizontalAlignment:"center",verticalAlignment:"middle",useCIMAngleBehavior:!1,hasBackground:!!a.backgroundColor,borderLineSizePx:b.pt2px(a.borderLineSize)}).boundsT}let f=h;d.getTextBounds=async function(a,c,e){return f(a,c.stage,e)};d.test={stubGetTextBounds:a=>f=a,restoreGetTextBounds:()=>f=h};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});