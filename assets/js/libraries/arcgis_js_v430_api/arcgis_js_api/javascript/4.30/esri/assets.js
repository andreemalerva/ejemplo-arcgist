// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./config ./request ./core/Error ./core/Logger ./core/urlUtils".split(" "),function(a,c,e,f,g,h){function d(b){if(!c.assetsPath)throw g.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new f("assets:path-not-set","config.assetsPath is not set");return h.join(c.assetsPath,b)}a.fetchAsset=function(b,k){return e(d(b),k)};a.getAssetUrl=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});