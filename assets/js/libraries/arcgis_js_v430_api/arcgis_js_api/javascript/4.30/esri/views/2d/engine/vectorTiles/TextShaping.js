// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./ScriptUtils","../webgl/Rect"],function(u,t,v){class w{constructor(a,e,c,b,g,h,f){this._glyphItems=a;this._maxWidth=e;this._lineHeight=c;this._letterSpacing=b;this._hAnchor=g;this._vAnchor=h;this._justify=f}getShaping(a,e,c){var b=this._letterSpacing;const g=this._lineHeight;var h=this._justify,f=this._maxWidth;const d=[];var m=0,q=0;for(var l of a){var k=l.codePointAt(0);if(null!=k){var n=c&&t.hasVerticalOrientation(k),p=void 0;for(const r of this._glyphItems)if(p=r[k])break;
d.push({codePoint:k,x:m,y:q,vertical:n,glyphMosaicItem:p});p&&(m+=p.metrics.advance+b)}}c=m;0<f&&(c=m/Math.max(1,Math.ceil(m/f)));a=a.includes("\u200b");f=[];b=d.length;for(l=0;l<b-1;l++)if(n=d[l].codePoint,p=t.allowsIdeographicBreak(n),t.isLineBreak(n)||p){k=0;if(10===n)k-=1E4;else if(p&&a)k+=150;else{if(40===n||65288===n)k+=50;n=d[l+1].codePoint;if(41===n||65289===n)k+=50}f.push(this._buildBreak(l+1,d[l].x,c,f,k,!1))}c=this._optimalBreaks(this._buildBreak(b,m,c,f,0,!0));m=0;a=e?-g:g;l=0;for(f=0;f<
c.length;f++){for(b=c[f];l<b&&t.isWhiteSpace(d[l].codePoint);)d[l].glyphMosaicItem=null,++l;for(k=b-1;k>l&&t.isWhiteSpace(d[k].codePoint);)d[k].glyphMosaicItem=null,--k;if(l<=k){n=d[l].x;for(p=l;p<=k;p++)d[p].x-=n,d[p].y=q;n=d[k].x;d[k].glyphMosaicItem&&(n+=d[k].glyphMosaicItem.metrics.advance);m=Math.max(n,m);h&&this._applyJustification(d,l,k)}l=b;q+=a}if(0<d.length){q=c.length-1;h=(h-this._hAnchor)*m;m=(-this._vAnchor*(q+1)+.5)*g;e&&q&&(m+=q*g);for(const r of d)r.x+=h,r.y+=m}return d.filter(r=>
r.glyphMosaicItem)}static getTextBox(a,e){if(!a.length)return null;let c=Infinity,b=Infinity,g=0,h=0;for(const f of a){a=f.x;const d=f.y-17,m=a+f.glyphMosaicItem.metrics.advance,q=d+e;c=Math.min(c,a);g=Math.max(g,m);b=Math.min(b,d);h=Math.max(h,q)}return{x:c,y:b,width:g-c,height:h-b}}static getBox(a){if(!a.length)return null;let e=Infinity,c=Infinity,b=0,g=0;for(const h of a){const {height:f,left:d,top:m,width:q}=h.glyphMosaicItem.metrics;a=h.x;const l=h.y-(f-Math.abs(m)),k=a+q+d,n=l+f;e=Math.min(e,
a);b=Math.max(b,k);c=Math.min(c,l);g=Math.max(g,n)}return{x:e,y:c,width:b-e,height:g-c}}static addDecoration(a,e){var c=a.length;if(0!==c){var b=a[0].x+a[0].glyphMosaicItem.metrics.left,g=a[0].y;for(let h=1;h<c;h++){const f=a[h];if(f.y!==g){const d=a[h-1].x+a[h-1].glyphMosaicItem.metrics.left+a[h-1].glyphMosaicItem.metrics.width;a.push({codePoint:0,x:b,y:g+e-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new v(4,0,4,8),metrics:{width:d-b,height:8,left:0,top:0,advance:0},page:0,code:0}});g=f.y;b=f.x+f.glyphMosaicItem.metrics.left}}c=
a[c-1].x+a[c-1].glyphMosaicItem.metrics.left+a[c-1].glyphMosaicItem.metrics.width;a.push({codePoint:0,x:b,y:g+e-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new v(4,0,4,8),metrics:{width:c-b,height:8,left:0,top:0,advance:0},page:0,code:0}})}}_breakScore(a,e,c,b){const g=(a-e)*(a-e);return b?a<e?g/2:2*g:g+Math.abs(c)*c}_buildBreak(a,e,c,b,g,h){let f=null,d=this._breakScore(e,c,g,h);for(const m of b)b=this._breakScore(e-m.x,c,g,h)+m.score,b<=d&&(f=m,d=b);return{index:a,x:e,score:d,previousBreak:f}}_optimalBreaks(a){return a?
this._optimalBreaks(a.previousBreak).concat(a.index):[]}_applyJustification(a,e,c){var b=a[c];for(b=(b.x+(b.vertical?24:b.glyphMosaicItem?b.glyphMosaicItem.metrics.advance:0))*this._justify;e<=c;e++)a[e].x-=b}}u.TextShaping=w;u.sdfGlyphBaseline=17;u.sdfGlyphSize=24;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});