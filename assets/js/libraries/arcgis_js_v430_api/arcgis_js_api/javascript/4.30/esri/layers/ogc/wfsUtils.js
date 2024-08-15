// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../request ../../core/Error ../../core/iteratorUtils ../../core/urlUtils ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../../geometry/support/typeUtils ../graphics/sources/geojson/geojson ./xmlUtils ../support/arcgisLayerUrl ../support/Field ../support/fieldUtils ../../geometry/Extent ../../geometry/SpatialReference".split(" "),function(k,ca,r,l,t,u,y,z,O,P,p,Q,q,w,R,A){function B(a){a=C(a);S(a);D(a);a=a.firstElementChild;const b=t.cache(T(a));
return{operations:U(a),get featureTypes(){return Array.from(b())},readFeatureTypes:b}}function E(a){for(const b of V){const c=a.findIndex(e=>e.toLowerCase()===b);if(0<=c)return a[c]}return null}function U(a){let b=!1;const c={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},e=[],d=[];p.visitXML(a,{OperationsMetadata:{Parameter:f=>{if("outputFormat"===f.getAttribute("name"))return{AllowedValues:{Value:({textContent:g})=>{g&&e.push(g)}}}},
Operation:f=>{switch(f.getAttribute("name")){case "GetCapabilities":return{DCP:{HTTP:{Get:g=>{c.GetCapabilities.url=g.getAttribute("xlink:href")}}}};case "DescribeFeatureType":return{DCP:{HTTP:{Get:g=>{c.DescribeFeatureType.url=g.getAttribute("xlink:href")}}}};case "GetFeature":return{DCP:{HTTP:{Get:g=>{c.GetFeature.url=g.getAttribute("xlink:href")}}},Parameter:g=>{if("outputFormat"===g.getAttribute("name"))return{AllowedValues:{Value:({textContent:m})=>{m&&d.push(m)}}}}}}},Constraint:f=>{switch(f.getAttribute("name")){case "KVPEncoding":return{DefaultValue:g=>
{b="true"===g.textContent.toLowerCase()}};case "ImplementsResultPaging":return{DefaultValue:g=>{c.GetFeature.supportsPagination="true"===g.textContent.toLowerCase()}}}}}});c.GetFeature.outputFormat=E(d)??E(e);if(!b)throw new l("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(null==c.GetFeature.outputFormat)throw new l("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return c}function F(a){a=parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??
"",10);if(!Number.isNaN(a))return a}function T(a){return p.iterateXML(a,{FeatureTypeList:{FeatureType:b=>{const c={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},e=new Set;p.visitXML(b,{Name:d=>{const {name:f,prefix:g}=v(d.textContent);c.typeName=`${g}:${f}`;c.name=f;c.namespacePrefix=g;c.namespaceUri=d.lookupNamespaceURI(g)},Abstract:d=>{c.description=d.textContent},Title:d=>
{c.title=d.textContent},WGS84BoundingBox:d=>{c.extent=R.fromJSON(W(d))},DefaultCRS:d=>{if(d=F(d))c.defaultSpatialReference=d,e.add(d)},OtherCRS:d=>{(d=F(d))&&e.add(d)}});c.title||(c.title=c.name);e.add(4326);c.supportedSpatialReferences.push(...e);return c}}})}function W(a){let b,c,e,d;for(const f of a.children)switch(f.localName){case "LowerCorner":[b,c]=f.textContent.split(" ").map(g=>Number.parseFloat(g));break;case "UpperCorner":[e,d]=f.textContent.split(" ").map(g=>Number.parseFloat(g))}return{xmin:b,
ymin:c,xmax:e,ymax:d,spatialReference:z.wgs84}}function G(a,b,c){return t.find(a,e=>c?e.name===b&&e.namespaceUri===c:e.typeName===b||e.name===b)}async function H(a,b,c,e={}){a=a.readFeatureTypes();c=b?G(a,b,c):a.next().value;({spatialReference:a=new A({wkid:c?.defaultSpatialReference})}=e);if(null==c){if(b)throw new l("wfs-layer:feature-type-not-found",`The type '${b}' could not be found in the service`);throw new l("wfs-layer:empty-service","The service is empty");}if((b=c.extent)&&!z.equals(b.spatialReference,
a))try{await y.initializeProjection(b.spatialReference,a,void 0,e),b=y.project(b,a)}catch{throw new l("wfs-layer:unsupported-spatial-reference","Projection not supported");}return{extent:b,spatialReference:a,featureType:c}}async function X(a,b,c,e={}){const {typeName:d}=b,[f,g]=await Promise.allSettled([I(a.operations.DescribeFeatureType.url,d,e),Y(a,d,c,e)]);a=n=>new l("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${d}'`,{error:n});if("rejected"===
f.status)throw a(f.reason);if("rejected"===g.status)throw a(g.reason);const {fields:m,errors:h}=f.value??{};a=f.value?.geometryType||g.value?.geometryType;b=g.value?.swapXY??!1;if(null==a)throw new l("wfs-layer:unknown-geometry-type",`The geometry type could not be determined for type '${d}`,{typeName:d,geometryType:a,fields:m,errors:h});return{...J(m??[]),geometryType:a,swapXY:b}}function J(a){const b=a.find(e=>"geometry"===e.type);let c=a.find(e=>"oid"===e.type);a=a.filter(e=>"geometry"!==e.type);
c||(c=new q({name:"__esri_wfs_id__",type:"oid",alias:"__esri_wfs_id__"}),a.unshift(c));return{geometryField:b?.name??null,objectIdField:c.name,fields:a}}async function Y(a,b,c,e={}){let d,f=!1;const [g,m]=await Promise.all([K(a.operations.GetFeature.url,b,c,a.operations.GetFeature.outputFormat,{...e,count:1}),r(a.operations.GetFeature.url,{responseType:"text",query:L(b,c,void 0,{...e,count:1}),signal:e?.signal})]);if(a="FeatureCollection"===g.type&&g.features[0]?.geometry){d=O.featureGeometryTypeKebabDictionary.fromJSON(P.getGeometryType(a.type));
switch(a.type){case "Point":var h=a.coordinates;break;case "LineString":case "MultiPoint":h=a.coordinates[0];break;case "MultiLineString":case "Polygon":h=a.coordinates[0][0];break;case "MultiPolygon":h=a.coordinates[0][0][0]}if(b=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(m.data))a=h[0].toFixed(3),h=h[1].toFixed(3),c=parseFloat(b[1]).toFixed(3),b=parseFloat(b[2]).toFixed(3),a===b&&h===c&&(f=!0)}return{geometryType:d,swapXY:f}}async function I(a,b,c){a=await r(a,{responseType:"text",
query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:"2.0.0",TYPENAME:b,TYPENAMES:b,...c?.customParameters},signal:c?.signal});return M(b,a.data)}function M(a,b){const {name:c}=v(a);b=C(b);D(b);var e=t.find(p.iterateXML(b.firstElementChild,{element:d=>d}),d=>d.getAttribute("name")===c);if(null!=e){const d=e.getAttribute("type");if(e=d?t.find(p.iterateXML(b.firstElementChild,{complexType:f=>f}),f=>f.getAttribute("name")===v(d).name):t.find(p.iterateXML(e,{complexType:f=>f}),()=>!0))return Z(e)}throw new l("wfs-layer:feature-type-not-found",
`Type '${a}' not found in document`,{document:(new XMLSerializer).serializeToString(b)});}function Z(a){const b=[],c=[];let e=void 0;var d=p.iterateXML(a,{complexContent:{extension:{sequence:{element:f=>f}}}});for(const f of d){d=f.getAttribute("name");if(!d)continue;let g,m;f.hasAttribute("type")?g=v(f.getAttribute("type")).name:p.visitXML(f,{simpleType:{restriction:x=>{g=v(x.getAttribute("base")).name;return{maxLength:aa=>{m=+aa.getAttribute("value")}}}}});if(!g)continue;const h="true"===f.getAttribute("nillable");
let n=!1;switch(g.toLowerCase()){case "integer":case "nonpositiveinteger":case "negativeinteger":case "long":case "int":case "short":case "byte":case "nonnegativeinteger":case "unsignedlong":case "unsignedint":case "unsignedshort":case "unsignedbyte":case "positiveinteger":c.push(new q({name:d,alias:d,type:"integer",nullable:h,length:w.getFieldDefaultLength("integer")}));break;case "float":case "double":case "decimal":c.push(new q({name:d,alias:d,type:"double",nullable:h,length:w.getFieldDefaultLength("double")}));
break;case "boolean":case "string":case "gyearmonth":case "gyear":case "gmonthday":case "gday":case "gmonth":case "anyuri":case "qname":case "notation":case "normalizedstring":case "token":case "language":case "idrefs":case "entities":case "nmtoken":case "nmtokens":case "name":case "ncname":case "id":case "idref":case "entity":case "duration":case "time":c.push(new q({name:d,alias:d,type:"string",nullable:h,length:m??w.getFieldDefaultLength("string")}));break;case "datetime":case "date":c.push(new q({name:d,
alias:d,type:"date",nullable:h,length:m??w.getFieldDefaultLength("date")}));break;case "pointpropertytype":e="point";n=!0;break;case "multipointpropertytype":e="multipoint";n=!0;break;case "curvepropertytype":case "multicurvepropertytype":case "multilinestringpropertytype":e="polyline";n=!0;break;case "surfacepropertytype":case "multisurfacepropertytype":case "multipolygonpropertytype":e="polygon";n=!0;break;case "geometrypropertytype":case "multigeometrypropertytype":n=!0;b.push(new l("wfs-layer:unknown-geometry-type",
`geometry type '${g}' is not supported`,{type:(new XMLSerializer).serializeToString(a)}));break;default:b.push(new l("wfs-layer:unknown-field-type",`Unknown field type '${g}'`,{type:(new XMLSerializer).serializeToString(a)}))}n&&c.push(new q({name:d,alias:d,type:"geometry",nullable:h}))}for(const f of c)if("integer"===f.type&&!f.nullable&&ba.has(f.name.toLowerCase())){f.type="oid";break}return{geometryType:e,fields:c,errors:b}}async function K(a,b,c,e,d){({data:a}=await r(a,{responseType:"text",query:L(b,
c,e,d),signal:d?.signal}));a=a.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(a)}catch(f){throw new l("wfs-layer:malformed-json","Error while parsing the\u00a0response",{response:a,error:f});}}function L(a,b,c,e){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:a,OUTPUTFORMAT:c,SRSNAME:"EPSG:"+("number"===typeof b?b:b.wkid),STARTINDEX:e?.startIndex,COUNT:e?.count,...e?.customParameters}}function C(a){return(new DOMParser).parseFromString(a.trim(),"text/xml")}
function v(a){const [b,c]=a.split(":");return{prefix:c?b:"",name:c??b}}function S(a){if((a=a.firstElementChild?.getAttribute("version"))&&"2.0.0"!==a)throw new l("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${a}. Supported version: ${"2.0.0"}`);}function D(a){let b="",c="";p.visitXML(a.firstElementChild,{Exception:e=>{b=e.getAttribute("exceptionCode");return{ExceptionText:d=>{c=d.textContent}}}});if(b)throw new l(`wfs-layer:${b}`,c);}function N(a,b,c){const e={wkid:b.defaultSpatialReference};
c=null!=c?.wkid?{wkid:c.wkid}:e;a=Q.isArcGISUrl(a)||c.wkid&&b.supportedSpatialReferences.includes(c.wkid)?{wkid:c.wkid}:{wkid:b.defaultSpatialReference};return{spatialReference:c,getFeatureSpatialReference:a}}const V=["json","application/json","geojson","application/json; subtype\x3dgeojson","application/geo+json"],ba=new Set(["objectid","fid"]);k.describeFeatureType=I;k.findFeatureType=G;k.getCapabilities=async function(a,b){b=await r(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",
VERSION:"2.0.0",...b?.customParameters},signal:b?.signal});b=B(b.data);u.isHTTPSProtocol(a)&&(u.hasSameOrigin(a,b.operations.DescribeFeatureType.url,!0)&&(b.operations.DescribeFeatureType.url=u.toHTTPS(b.operations.DescribeFeatureType.url)),u.hasSameOrigin(a,b.operations.GetFeature.url,!0)&&(b.operations.GetFeature.url=u.toHTTPS(b.operations.GetFeature.url)));return b};k.getFeature=K;k.getFeatureCount=async function(a,b,c){a=await r(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",
VERSION:"2.0.0",TYPENAMES:b,RESULTTYPE:"hits",...c?.customParameters},signal:c?.signal});a=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(a?.groups)return+a.groups.numberMatched};k.getFeatureTypeInfo=H;k.getGetFeatureSpatialReference=N;k.getWFSLayerInfo=async function(a,b,c,e={}){const {featureType:d,extent:f}=await H(a,b,c,e);({spatialReference:b}=N(a.operations.GetFeature.url,d,e.spatialReference));const {fields:g,geometryType:m,swapXY:h,objectIdField:n,geometryField:x}=await X(a,
d,b,e);return{url:a.operations.GetCapabilities.url,name:d.name,namespaceUri:d.namespaceUri,fields:g,geometryField:x,geometryType:m,objectIdField:n,spatialReference:e.spatialReference??new A({wkid:d.defaultSpatialReference}),extent:f,swapXY:h,wfsCapabilities:a,customParameters:e.customParameters}};k.parseDescribeFeatureTypeResponse=M;k.parseGetCapabilitiesResponse=B;k.prepareWFSLayerFields=J;k.wfsOidFieldName="__esri_wfs_id__";Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});