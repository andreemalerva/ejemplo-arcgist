// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../ArcadeDate ../executionError ../../chunks/languageUtils ./fieldStats ../../core/sql/SqlTimestampOffset ../../core/sql/WhereClause".split(" "),function(l,m,n,f,k,t,p){async function h(c,b,a,e){if(1===a.length){if(f.isArray(a[0]))return k.calculateStat(c,a[0],f.defaultUndefined(a[1],-1));if(f.isImmutableArray(a[0]))return k.calculateStat(c,a[0].toArray(),f.defaultUndefined(a[1],-1))}else if(2===a.length){if(f.isArray(a[0]))return k.calculateStat(c,a[0],f.defaultUndefined(a[1],-1));
if(f.isImmutableArray(a[0]))return k.calculateStat(c,a[0].toArray(),f.defaultUndefined(a[1],-1));if(f.isFeatureSet(a[0])){var g=await a[0].load();e=await q(p.WhereClause.create(a[1],g.getFieldsIndex(),g.dateFieldsTimeZoneDefaultUTC),e,b);return r(b,await a[0].calculateStatistic(c,e,f.defaultUndefined(a[2],1E3),b.abortSignal))}}else if(3===a.length&&f.isFeatureSet(a[0]))return g=await a[0].load(),e=await q(p.WhereClause.create(a[1],g.getFieldsIndex(),g.dateFieldsTimeZoneDefaultUTC),e,b),r(b,await a[0].calculateStatistic(c,
e,f.defaultUndefined(a[2],1E3),b.abortSignal));return k.calculateStat(c,a,-1)}function r(c,b){return b instanceof t.SqlTimeStampOffset?m.ArcadeDate.fromReaderAsTimeStampOffset(b.toStorageFormat()):b instanceof Date?m.ArcadeDate.dateJSAndZoneToArcadeDate(b,f.defaultTimeZone(c)):b}async function q(c,b,a){const e=c.getVariables();if(0<e.length){const g=[];for(let d=0;d<e.length;d++)g.push(await b.evaluateIdentifier(a,{name:e[d]}));b={};for(a=0;a<e.length;a++)b[e[a]]=g[a];c.parameters=b}return c}l.registerFunctions=
function(c){"async"===c.mode&&(c.functions.stdev=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("stdev",b,d,c))},c.functions.variance=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("variance",b,d,c))},c.functions.average=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("mean",b,d,c))},c.functions.mean=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("mean",b,d,c))},c.functions.sum=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("sum",b,d,
c))},c.functions.min=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("min",b,d,c))},c.functions.max=function(b,a){return c.standardFunctionAsync(b,a,(e,g,d)=>h("max",b,d,c))},c.functions.count=function(b,a){return c.standardFunctionAsync(b,a,async(e,g,d)=>{f.pcCheck(d,1,1,b,a);if(f.isFeatureSet(d[0]))return d[0].count(e.abortSignal);if(f.isArray(d[0])||f.isString(d[0]))return d[0].length;if(f.isImmutableArray(d[0]))return d[0].length();throw new n.ArcadeExecutionError(b,n.ExecutionErrorCodes.InvalidParameter,
a);})})};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});