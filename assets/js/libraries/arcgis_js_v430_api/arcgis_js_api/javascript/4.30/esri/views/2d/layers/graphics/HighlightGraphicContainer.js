// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../../engine/webgl/enums ./AGraphicContainer ../support/util".split(" "),function(e,b,k,l,m,f,d,g,h){b=class extends g.AGraphicContainer{get hasHighlight(){return this.children.some(a=>a.hasData)}renderChildren(a){this.attributeView.update();a.drawPhase===d.WGLDrawPhase.HIGHLIGHT&&this.children.some(c=>c.hasData)&&
(super.renderChildren(a),a.context.setColorMask(!0,!0,!0,!0),h.renderHighlight(a,!0,c=>{this._renderChildren(c,d.FeatureSelection.All)}))}};return b=e.__decorate([f.subclass("esri.views.2d.layers.graphics.HighlightGraphicContainer")],b)});