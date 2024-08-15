// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(t){function y(a,c=5){const d=a.length;if(d<=c)return a;c=Math.min(d-2,c-2);const b=(d-1)/(c+1);return[a[0],...Array.from({length:c},(k,m)=>a[Math.round((m+1)*b)]),a[d-1]]}const u=(()=>{const a=Intl.supportedValuesOf("timeZone");return[...(new Set([...a,"Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14",
"Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9"]))]})(),z={startDate:(new Date).toISOString(),groupDateRange:365,debug:!1},v=new Set("Europe Asia America America/Argentina Africa Australia Pacific Atlantic Antarctica Arctic Indian".split(" ")),A=(a,c,d)=>{const b=[];a=d.create(a);for(let k=0;k<=c;k++)a=d.increase(a),b.push(d.formatToIsoDateString(a));return b},w=a=>{if(a.includes("Istanbul"))return"Europe";const c=a.lastIndexOf("/");return-1===c?a:a.slice(0,
c)},B=(a,c,d,b,k=!1)=>{const m=new Map;k&&console.log(`Initializing data starting ${c} with ${d} days in the future, comparing ${a.length} timezones`);const n=A(c,d,b);return a.map(f=>{const q=f.label,e=w(q),h=n.map(p=>{const g=`${p}-${q}`;let l=m.get(g);if(l)return l;l=b.isoToTimeZone(p,q);m.set(g,l);return l});return{...f,continent:e,isRegularContinent:v.has(e),dates:h}})},C=(a,c,d)=>a.length===c.length&&a.every((b,k)=>d.same(b,c[k])),D=(a,c=5)=>{var d=a.filter(({label:b})=>v.has(w(b)));if(0===
d.length)return[0];d=d.map(b=>a.indexOf(b));return y(d,c)};t.groupTimeZones=async function(a){const {debug:c,groupDateRange:d,hooks:b,startDate:k,dateEngine:m}={...z,...a};a=[];if(!m)throw Error("dateEngine is required");var n=u.map(e=>({label:e}));b?.onBeforeTimeZoneMetadataCreate?.(n);n=B(n,k,d,m,c);b?.onTimeZoneMetadataCreate?.(n);for(var f of n){const {label:e,continent:h,dates:p}=f;if(f.visited)continue;f.visited=!0;const g={labelTzIndices:void 0,tzs:[{label:e}]};b?.onGroupCreate?.(g,f);for(const l of n.filter(r=>
!r.visited)){const {label:r,continent:E,isRegularContinent:F,dates:G}=l;if((h===E||!F)&&C(p,G,m)){const x={label:r};g.tzs.push(x);b?.onGroupTimeZoneAdd?.(g,x,l);l.visited=!0}}a.push(g);b?.onGroupAdd?.(g)}const q=a.map(e=>{b?.onBeforeFinalGroupCreate?.(e);e.tzs=e.tzs.sort((p,g)=>p.label.localeCompare(g.label));const h={labelTzIndices:D(e.tzs,7),tzs:e.tzs.map(p=>p.label)};b?.onFinalGroupCreate?.(h,e);return h}).sort((e,h)=>h.tzs.length-e.tzs.length);if(c&&(f=u.map(e=>q.some(h=>h.tzs.includes(e))?null:
e).filter(Boolean),0<f.length))throw Error(`There are ${f.length} missing timezones: ${f.toString()}`);return b?.onFinalGroupingCreate?b.onFinalGroupingCreate(q):q};Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});