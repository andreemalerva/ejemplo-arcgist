// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){const h=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,n={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};e.isSecureProxyService=function(a){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(a)};e.normalizeArcGISOnlineOrgDomain=function(a){const d=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,
g=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,f=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;d.test(a)?a=a.replace(d,"https://www.arcgis.com"):g.test(a)?a=a.replace(g,"https://devext.arcgis.com"):f.test(a)&&(a=a.replace(f,"https://qaext.arcgis.com"));return a};e.parseKnownArcGISOnlineDomain=function(a){a=a?.match(h);if(!a)return null;const [,d,g,f]=a;if(!d)return null;let b=a=null,c=null;const {devext:k,qaext:l,www:m}=n;if(g)if(a=d,f)switch(f.toLowerCase()){case "devext":({customBaseUrl:b,
portalHostname:c}=k);break;case "qa":({customBaseUrl:b,portalHostname:c}=l);break;default:return null}else({customBaseUrl:b,portalHostname:c}=m);else switch(d.toLowerCase()){case "devext":({customBaseUrl:b,portalHostname:c}=k);break;case "qaext":({customBaseUrl:b,portalHostname:c}=l);break;case "www":({customBaseUrl:b,portalHostname:c}=m);break;default:return null}return{customBaseUrl:b,isPortal:!1,portalHostname:c,urlKey:a}};e.reArcGISOnlineDomain=h;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});