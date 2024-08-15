/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{h as t}from"../core/lang.js";import{p as s,i as e}from"./arcgisLayerUrl.js";function r(t,s,e){return!!o(t,s,e)}function p(t,s,e){return o(t,s,e)}function o(t,s,e){return t&&t.hasOwnProperty(s)?t[s]:e}const u={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function a(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function n(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function i(t,s){return{analytics:c(t),attachment:d(t),data:l(t),metadata:y(t),operations:m(t.capabilities,t,s),query:h(t,s),queryRelated:C(t),queryTopFeatures:g(t),editing:A(t)}}function c(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryAnalytics")}}function d(t){const s=t.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:n(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:r(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=u[t.name];s&&(e[s]=!!t.isEnabled)})),e}function l(t){return{isVersioned:r(t,"isDataVersioned",!1),supportsAttachment:r(t,"hasAttachments",!1),supportsM:r(t,"hasM",!1),supportsZ:r(t,"hasZ",!1)}}function y(t){return{supportsAdvancedFieldProperties:r(t,"supportsFieldDescriptionProperty",!1)}}function m(t,e,p){const o=t?t.toLowerCase().split(",").map((t=>t.trim())):[],u=p?s(p):null,a=o.includes(null!=u&&"MapServer"===u.serverType?"data":"query"),n=o.includes("editing")&&!e.datesInUnknownTimezone;let i=n&&o.includes("create"),c=n&&o.includes("delete"),d=n&&o.includes("update");const l=o.includes("changetracking"),y=e.advancedQueryCapabilities;return n&&!(i||c||d)&&(i=c=d=!0),{supportsCalculate:r(e,"supportsCalculate",!1),supportsTruncate:r(e,"supportsTruncate",!1),supportsValidateSql:r(e,"supportsValidateSql",!1),supportsAdd:i,supportsDelete:c,supportsEditing:n,supportsChangeTracking:l,supportsQuery:a,supportsQueryAnalytics:r(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:r(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:r(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:r(e,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:r(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:r(e,"supportsAsyncConvert3D",!1)}}function h(s,o){const u=s.advancedQueryCapabilities,i=s.ownershipBasedAccessControlForFeatures,c=s.archivingInfo,d=s.currentVersion,l=o?.includes("MapServer"),y=!l||d>=t("mapserver-pbf-version-support"),m=e(o),h=new Set((s.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{maxRecordCount:p(s,"maxRecordCount",void 0),maxRecordCountFactor:p(s,"maxRecordCountFactor",void 0),standardMaxRecordCount:p(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:a(u),supportsCacheHint:r(u,"supportsQueryWithCacheHint",!1)||n(u,"query"),supportsCentroid:r(u,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:m,supportsDefaultSpatialReference:r(u,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:r(u,"supportsDisjointSpatialRel",!1),supportsDistance:r(u,"supportsQueryWithDistance",!1),supportsDistinct:r(u,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:r(u,"supportsReturningQueryExtent",!1),supportsFormatPBF:y&&h.has("pbf"),supportsFullTextSearch:r(u,"supportsFullTextSearch",!1),supportsGeometryProperties:r(u,"supportsReturningGeometryProperties",!1),supportsHavingClause:r(u,"supportsHavingClause",!1),supportsHistoricMoment:r(c,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:r(u,"supportsMaxRecordCountFactor",!1),supportsOrderBy:r(u,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:r(u,"supportsPagination",!1),supportsPercentileStatistics:r(u,"supportsPercentileStatistics",!1),supportsQuantization:r(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:r(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:r(i,"allowAnonymousToQuery",!0),supportsQueryByOthers:r(i,"allowOthersToQuery",!0),supportsQueryGeometry:r(s,"supportsReturningQueryGeometry",!1),supportsResultType:r(u,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:r(u,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:r(u,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:r(s,"useStandardizedQueries",!1),supportsStatistics:r(u,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:r(u,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:p(s,"tileMaxRecordCount",void 0)}}function C(t){const s=t.advancedQueryCapabilities,e=r(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:r(s,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:n(s,"queryRelated")}}function g(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryTopFilter")}}function A(t){const s=t.ownershipBasedAccessControlForFeatures,e=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:r(t,"allowGeometryUpdates",!0),supportsGlobalId:r(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:r(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:r(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:r(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:r(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:r(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:r(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:r(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:r(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:r(e,"supportsAsyncApplyEdits",!1),zDefault:p(t,"zDefault",void 0)}}function S(t){return{operations:{supportsAppend:r(t,"supportsAppend",!1),supportsExportClip:r(t,"supportsExportClip",!1),supportsExportFrameset:r(t,"supportsExportFrameset",!1),supportsMensuration:r(t,"supportsMensuration",!1),supportsUpdate:r(t,"supportsUpdate",!1)},query:{supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1}}}export{p as a,S as b,i as g,r};
