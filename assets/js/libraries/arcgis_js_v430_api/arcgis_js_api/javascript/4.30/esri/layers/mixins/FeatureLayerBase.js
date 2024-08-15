// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Collection ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/layerContainerType ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../support/arcgisLayerUrl ../support/commonProperties ../support/EditFieldsInfo ../support/FeatureIndex ../support/featureLayerUtils ../support/GeometryFieldsInfo ../support/LayerFloorInfo ../support/Relationship ../support/serviceCapabilitiesUtils ../support/Subtype ../../time/timeZoneUtils".split(" "),
function(n,b,p,q,w,e,I,g,x,y,z,A,B,r,t,k,C,u,h,D,E,F,G,H,v){n.FeatureLayerBase=a=>{a=class extends a{constructor(){super(...arguments);this.dateFieldsTimeZone=this.capabilities=this.copyright=null;this.datesInUnknownTimezone=!1;this.globalIdField=this.geometryType=this.geometryFieldsInfo=this.gdbVersion=this.fullExtent=this.floorInfo=this.elevationInfo=this.editingInfo=this.editFieldsInfo=this.displayField=this.definitionExpression=null;this.hasZ=this.hasM=void 0;this.historicMoment=this.heightModelInfo=
null;this.indexes=new (p.ofType(u.FeatureIndex));this.isTable=!1;this.layerId=void 0;this.minScale=this.maxScale=0;this.relationships=this.preferredTimeZone=this.objectIdField=null;this.returnZ=this.returnM=void 0;this.sourceJSON=this.serviceItemId=this.serviceDefinitionExpression=null;this.spatialReference=r.WGS84;this.trackIdField=this.subtypes=this.subtypeField=null;this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const {capabilities:d}=this;if(d){const {query:f,operations:m,
editing:l}=d;if(!f.supportsQueryByOthers||!f.supportsQueryByAnonymous||m.supportsEditing&&!(l.supportsUpdateByOthers&&l.supportsUpdateByAnonymous&&l.supportsDeleteByOthers&&l.supportsDeleteByAnonymous))return"load"}if(this.userHasUpdateItemPrivileges){if(h.isLayerCacheStale(this))return"load";if(this.hasUpdateItemRestrictions)return d.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const c=this.editFieldsInfo;return(c?.creatorField||
c?.editorField)&&d?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(d,c){return G.getFeatureLayerCapabilities(c,this.url)}readEditingInfo(d,c){({editingInfo:d}=c);return d?{lastEditDate:null!=d.lastEditDate?new Date(d.lastEditDate):null}:null}get effectiveCapabilities(){var d=this.capabilities;if(!d)return null;d=q.clone(d);const {operations:c,editing:f}=d;if(h.supportsQueryOnly(this))return this.userHasUpdateItemPrivileges&&(c.supportsQuery=!0),d;if(this.userHasUpdateItemPrivileges)return c.supportsAdd=
c.supportsDelete=c.supportsEditing=c.supportsQuery=c.supportsUpdate=f.supportsDeleteByOthers=f.supportsGeometryUpdate=f.supportsUpdateByOthers=!0,d;this.userHasFullEditingPrivileges&&c.supportsEditing&&(c.supportsAdd=c.supportsDelete=c.supportsUpdate=f.supportsGeometryUpdate=!0);return d}readGlobalIdFieldFromService(d,c){return h.readGlobalIdField(c)}get hasFullEditingRestrictions(){const d=this.capabilities;if(!d||h.supportsQueryOnly(this))return!1;const {operations:c,editing:f}=d;return c.supportsEditing&&
!(c.supportsAdd&&c.supportsDelete&&c.supportsUpdate&&f.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const d=this.capabilities;if(!d)return!1;const {operations:c,editing:f}=d;return h.supportsQueryOnly(this)?!c.supportsQuery:!(c.supportsAdd&&c.supportsDelete&&c.supportsEditing&&c.supportsQuery&&c.supportsUpdate&&f.supportsDeleteByOthers&&f.supportsGeometryUpdate&&f.supportsUpdateByOthers)}readIsTableFromService(d,c){return"Table"===c.type}readMaxScale(d,c){return c.effectiveMaxScale||d||
0}readMinScale(d,c){return c.effectiveMinScale||d||0}readObjectIdFieldFromService(d,c){return h.readObjectIdField(c)}readServiceDefinitionExpression(d,c){return c.definitionQuery||c.definitionExpression}set url(d){null==d?this._set("url",d):(d=t.sanitizeUrlWithLayerId({layer:this,url:d,nonStandardUrlAllowed:!0,logger:w.getLogger(this)}),this._set("url",d.url),null!=d.layerId&&this._set("layerId",d.layerId))}writeUrl(d,c,f,m){t.writeUrlWithLayerId(this,d,null,c,m)}readVersion(d,c){return h.readVersion(c)}};
b.__decorate([e.property({readOnly:!0})],a.prototype,"authenticationTriggerEvent",null);b.__decorate([e.property({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],a.prototype,"copyright",void 0);b.__decorate([e.property({readOnly:!0,json:{read:!1,origins:{service:{read:{source:"advancedQueryCapabilities allowGeometryUpdates allowUpdateWithoutMValues archivingInfo capabilities datesInUnknownTimezone hasAttachments hasM hasZ maxRecordCount maxRecordCountFactor ownershipBasedAccessControlForFeatures standardMaxRecordCount supportedQueryFormats supportsAdvancedQueries supportsApplyEditsWithGlobalIds supportsAttachmentsByUploadId supportsAttachmentsResizing supportsCalculate supportsCoordinatesQuantization supportsExceedsLimitStatistics supportsFieldDescriptionProperty supportsQuantizationEditMode supportsRollbackOnFailureParameter supportsStatistics supportsTruncate supportsValidateSql tileMaxRecordCount useStandardizedQueries".split(" ")}}}}})],
a.prototype,"capabilities",void 0);b.__decorate([g.reader("service","capabilities")],a.prototype,"readCapabilitiesFromService",null);b.__decorate([e.property(v.timeZoneProperty("dateFieldsTimeReference"))],a.prototype,"dateFieldsTimeZone",void 0);b.__decorate([e.property({type:Boolean})],a.prototype,"datesInUnknownTimezone",void 0);b.__decorate([e.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,
"definitionExpression",void 0);b.__decorate([e.property({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],a.prototype,"displayField",void 0);b.__decorate([e.property({readOnly:!0,type:C})],a.prototype,"editFieldsInfo",void 0);b.__decorate([e.property({readOnly:!0})],a.prototype,"editingInfo",void 0);b.__decorate([g.reader("editingInfo")],a.prototype,"readEditingInfo",null);b.__decorate([e.property({readOnly:!0})],a.prototype,"effectiveCapabilities",null);b.__decorate([e.property((()=>
{const d=q.clone(k.elevationInfo),c=d.json.origins;c["web-map"]={read:!1,write:!1};c["portal-item"]={read:!1,write:!1};return d})())],a.prototype,"elevationInfo",void 0);b.__decorate([e.property({type:E,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:z.excludeTables}}}}})],a.prototype,"floorInfo",void 0);b.__decorate([e.property({type:A,json:{origins:{service:{read:{source:"extent"}}}}})],a.prototype,"fullExtent",
void 0);b.__decorate([e.property()],a.prototype,"gdbVersion",void 0);b.__decorate([e.property({readOnly:!0,type:D,json:{read:{source:"geometryProperties"}}})],a.prototype,"geometryFieldsInfo",void 0);b.__decorate([e.property({type:"point polygon polyline multipoint multipatch mesh".split(" "),json:{origins:{service:{read:h.geometryTypeKebabDict.read}}}})],a.prototype,"geometryType",void 0);b.__decorate([e.property({type:String})],a.prototype,"globalIdField",void 0);b.__decorate([g.reader("service",
"globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdFieldFromService",null);b.__decorate([e.property({readOnly:!0})],a.prototype,"hasFullEditingRestrictions",null);b.__decorate([e.property({type:Boolean,json:{origins:{service:{read:!0}}}})],a.prototype,"hasM",void 0);b.__decorate([e.property({readOnly:!0})],a.prototype,"hasUpdateItemRestrictions",null);b.__decorate([e.property({type:Boolean,json:{origins:{service:{read:!0}}}})],a.prototype,"hasZ",void 0);b.__decorate([e.property({readOnly:!0,
type:B})],a.prototype,"heightModelInfo",void 0);b.__decorate([e.property({type:Date})],a.prototype,"historicMoment",void 0);b.__decorate([e.property({type:p.ofType(u.FeatureIndex),readOnly:!0})],a.prototype,"indexes",void 0);b.__decorate([e.property({readOnly:!0})],a.prototype,"isTable",void 0);b.__decorate([g.reader("service","isTable",["type"])],a.prototype,"readIsTableFromService",null);b.__decorate([e.property({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},
read:!1}})],a.prototype,"layerId",void 0);b.__decorate([e.property(k.maxScale)],a.prototype,"maxScale",void 0);b.__decorate([g.reader("service","maxScale",["maxScale","effectiveMaxScale"])],a.prototype,"readMaxScale",null);b.__decorate([e.property(k.minScale)],a.prototype,"minScale",void 0);b.__decorate([g.reader("service","minScale",["minScale","effectiveMinScale"])],a.prototype,"readMinScale",null);b.__decorate([e.property({type:String})],a.prototype,"objectIdField",void 0);b.__decorate([g.reader("service",
"objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdFieldFromService",null);b.__decorate([e.property(v.timeZoneProperty("preferredTimeReference"))],a.prototype,"preferredTimeZone",void 0);b.__decorate([e.property({type:[F],readOnly:!0})],a.prototype,"relationships",void 0);b.__decorate([e.property({type:Boolean})],a.prototype,"returnM",void 0);b.__decorate([e.property({type:Boolean})],a.prototype,"returnZ",void 0);b.__decorate([e.property({readOnly:!0,json:{write:!1}})],a.prototype,
"serverGens",void 0);b.__decorate([e.property({readOnly:!0})],a.prototype,"serviceDefinitionExpression",void 0);b.__decorate([g.reader("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],a.prototype,"readServiceDefinitionExpression",null);b.__decorate([e.property({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0);b.__decorate([e.property()],a.prototype,"sourceJSON",void 0);b.__decorate([e.property({type:r,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],
a.prototype,"spatialReference",void 0);b.__decorate([e.property({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],a.prototype,"subtypeField",void 0);b.__decorate([e.property({type:[H],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"subtypes",void 0);b.__decorate([e.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],a.prototype,"trackIdField",void 0);b.__decorate([e.property(k.url)],a.prototype,"url",null);b.__decorate([y.writer("url")],a.prototype,
"writeUrl",null);b.__decorate([e.property({json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"version",void 0);b.__decorate([g.reader("service","version","currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" "))],a.prototype,"readVersion",null);return a=b.__decorate([x.subclass("esri.layers.mixins.FeatureLayerBase")],a)};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});