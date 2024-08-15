// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../PixelBlock","../rasterFormats/pixelRangeUtils","../../../renderers/support/stretchRendererUtils"],function(z,C,E,K,L){function F(b,d=256){d=Math.min(d,256);const {size:n,counts:g}=b;b=new Uint8Array(n);var l=g.reduce((c,f)=>c+f/d,0);let q=0;var a=0;let m=0,h=l;for(let c=0;c<n;c++)if(m+=g[c],!(c<n-1&&m+g[c+1]<h)){for(;q<d-1&&h<m;)q++,h+=l;for(;a<=c;a++)b[a]=q;a=c+1}for(l=a;l<n;l++)b[l]=d-1;return b}function G(b,d){b=Math.min(Math.max(b,-100),100);d=Math.min(Math.max(d??
0,-100),100);let n=0,g=0;const l=new Uint8Array(256);for(n=0;256>n;n++)0<b&&100>b?g=(200*n-25500+510*d)/(2*(100-b))+128:0>=b&&-100<b?g=(200*n-25500+510*d)*(100+b)/2E4+128:100===b?(g=200*n-25500+256*(100-b)+510*d,g=0<g?255:0):-100===b&&(g=128),l[n]=255<g?255:0>g?0:g;return l}function M(b,d,n,g){g=Infinity;let l=-Infinity;var q=0,a=0,m=0,h=0;const c=b.length;var f=new Map,p=[];for(let e=0;e<c;e++){const k=b[e];if(!d||d[e]){p.push(k);const t=(f.get(k)??0)+1;f.set(k,t);t>h&&(h=t,m=k);g=k<g?k:g;l=k>l?
k:l;q+=k;a++}}if(0===a)return{statistics:{min:0,max:0,avg:0,stddev:0,mode:0,median:0},histogram:null};q/=a;h=0;for(f=0;f<c;f++)if(!d||d[f])h+=(b[f]-q)**2;f=d?d.filter(e=>e).length:c;h=1>=f?0:Math.sqrt(h/(f-1));p.sort((e,k)=>e-k);f=a>>>1;m={min:g,max:l,avg:q,stddev:h,mode:m,median:a%2?p[Math.floor(f)]:(p[f-1]+p[f])/2};if(["u8","s8","u4","u2","u1"].includes(n)){a=l-g+1;n=new Uint32Array(a);for(p=0;p<c;p++)d&&!d[p]||n[b[p]-g]++;return{statistics:m,histogram:{min:g-.5,max:l+.5,size:a,counts:n}}}n=new Uint32Array(256);
p=(l-g)/256;if(0===p)return{statistics:m,histogram:{min:g,max:l,size:1,counts:(new Uint32Array(1)).fill(a)}};a=new Uint32Array(257);for(q=0;q<c;q++)d&&!d[q]||a[Math.floor((b[q]-g)/p)]++;for(b=0;255>b;b++)n[b]=a[b];n[255]=a[255]+a[256];return{statistics:m,histogram:{min:g,max:l,size:256,counts:n}}}function H(b){if(!b?.pixels?.length)return null;const {pixels:d,mask:n,bandMasks:g,pixelType:l}=b,q=b.width*b.height,a=d.length,m=[],h=[];let c,f;for(let w=0;w<a;w++){var p=new Uint32Array(256);var e=d[w],
k=g?.[w]??n;if("u8"===l){c=255;f=0;if(k)for(var t=0;t<q;t++){if(k[t]){var u=e[t];c=u<c?u:c;f=u>f?u:f;p[u]++}}else for(k=0;k<q;k++)t=e[k],c=t<c?t:c,f=t>f?t:f,p[t]++;p=p.slice(c,f+1)}else{u=!1;b.statistics||(b.updateStatistics(),u=!0);var x=b.statistics;c=x[w].minValue;f=x[w].maxValue;t=(f-c)/256;if(0===t)for(!x||b.validPixelCount||u||b.updateStatistics(),e=(b.validPixelCount||b.width*b.height)/256,k=0;256>k;k++)p[k]=Math.round(e*(k+1))-Math.round(e*k);else{u=new Uint32Array(257);for(x=0;x<q;x++)k&&
!k[x]||u[Math.floor((e[x]-c)/t)]++;for(e=0;255>e;e++)p[e]=u[e];p[255]=u[255]+u[256]}}t="u8"===l?c-.5:c;u="u8"===l?f+.5:f;m.push({min:t,max:u,size:p.length,counts:p});k=x=e=0;for(var v=0;v<p.length;v++)e+=p[v],x+=v*p[v];x/=e;for(v=0;v<p.length;v++)k+=p[v]*(v-x)**2;p=(u-t)/p.length;h.push({min:c,max:f,avg:(x+("u8"===l?0:.5))*p+c,stddev:Math.sqrt(k/(e-1))*p})}return{statistics:h,histograms:m}}function N(b,d){if(null==d||0===d.length)return b;const n=Math.max.apply(null,d),{minCutOff:g,maxCutOff:l,outMin:q,
outMax:a,histogramLut:m}=b;return g.length===d.length||g.length<=n?b:{minCutOff:d.map(h=>g[h]),maxCutOff:d.map(h=>l[h]),histogramLut:m?d.map(h=>m[h]):null,outMin:q,outMax:a}}function D(b,d){const n=new Float32Array(b);for(let g=0;g<b;g++)n[g]=1<d[g]?2<d[g]?6.5+(d[g]-2)**2.5:6.5+100*(2-d[g])**4:1;return n}const O=[.299,.587,.114];z.computeGammaCorrection=D;z.computeGammaValues=function(b,d,n){const g=[];for(let h=0;h<d.length;h++){var l=0,q=0,a=0;"min"in d[h]?{min:l,max:q,avg:a}=d[h]:[l,q,a]=d[h];
a=a??0;"u8"!==b&&(a=255*(a-l)/(q-l));n&&(a*=O[h]);l=g;q=l.push;if(0>=a||255<=a)a=1;else{var m=0;150!==a&&(m=150>=a?45*Math.cos(.01047*a):17*Math.sin(.021*a));m=Math.log((a+m)/255);0===m?a=1:(a=Math.log(a/255)/m,a=isNaN(a)?1:Math.min(9.9,Math.max(.01,a)))}q.call(l,a)}return g};z.computeStatisticsHistograms=function(b){const {pixels:d,mask:n,pixelType:g,bandMasks:l}=b;var q=d.map((a,m)=>M(a,l?.[m]??n,g));b=q.map(({statistics:a})=>a);q=q.map(({histogram:a})=>a);return{statistics:b,histograms:q}};z.createContrastBrightnessLUT=
G;z.createHistogramEqualizationLUT=F;z.createStretchLUT=function(b){const {minCutOff:d,maxCutOff:n,gamma:g,pixelType:l,rounding:q}=b,a=b.outMin||0,m=b.outMax||255;if(!["u8","u16","s8","s16"].includes(l))return null;const h=d.length;let c,f,p=0;"s8"===l?p=-127:"s16"===l&&(p=-32767);let e=256;["u16","s16"].includes(l)&&(e=65536);var k=[],t=[];const u=m-a;for(c=0;c<h;c++)t[c]=n[c]-d[c],k[c]=0===t[c]?0:u/t[c];let x;const v=[];let w,r;if(g&&g.length>=h)for(k=D(h,g),c=0;c<h;c++){r=[];for(f=0;f<e;f++)if(0===
t[c])r[f]=a;else{var y=f+p;x=(y-d[c])/t[c];w=1;1<g[c]&&(w-=(1/u)**(x*k[c]));y<n[c]&&y>d[c]?(y=w*u*x**(1/g[c])+a,r[f]="floor"===q?Math.floor(y):"round"===q?Math.round(y):y):r[f]=y>=n[c]?m:a}v[c]=r}else for(c=0;c<h;c++){r=[];for(f=0;f<e;f++)y=f+p,y<=d[c]?r[f]=a:y>=n[c]?r[f]=m:(t=(y-d[c])*k[c]+a,r[f]="floor"===q?Math.floor(t):"round"===q?Math.round(t):t);v[c]=r}if(null!=b.contrastOffset)for(b=G(b.contrastOffset,b.brightnessOffset),c=0;c<h;c++)for(r=v[c],f=0;f<e;f++)r[f]=b[r[f]];return{lut:v,offset:p}};
z.estimateStatisticsFromHistograms=function(b){const d=[];for(let q=0;q<b.length;q++){const {min:a,max:m,size:h,counts:c}=b[q];let f=0;var n=0;for(var g=0;g<h;g++)f+=c[g],n+=g*c[g];n/=f;g=0;for(var l=0;l<h;l++)g+=c[l]*(l-n)**2;l=(m-a)/h;d.push({min:a,max:m,avg:(n+.5)*l+a,stddev:Math.sqrt(g/(f-1))*l})}return d};z.estimateStatisticsHistograms=H;z.getStretchCutoff=function(b,d){const {pixelBlock:n,bandIds:g,returnHistogramLut:l,rasterInfo:q}=d;var a=null;d=null;var m=b.stretchType;"number"===typeof m&&
(m=L.stretchTypeFunctionEnum[m]);b.dra?"minMax"===m&&n?.statistics?a=n.statistics.map(y=>[y.minValue,y.maxValue,0,0]):(d=H(n),a=null!=d?d.statistics:null,d=null!=d?d.histograms:null):(a=b.statistics?.length?b.statistics:q.statistics,d="histograms"in b?b.histograms:void 0,d||(d=q.histograms));"percentClip"!==m&&"histogramEqualization"!==m||d?.length||(m="minMax");var h=a?.length||d?.length||q.bandCount;const c=[],f=[];let p,e,k;a&&!Array.isArray(a[0])&&(a=a.map(y=>[y.min,y.max,y.avg,y.stddev]));const [t,
u]=K.getPixelValueRange(q.pixelType);if(!a?.length){a=[];for(e=0;e<h;e++)a.push([t,u,1,1]);"standardDeviation"===m&&(m="minMax")}switch(m){case "none":for(e=0;e<h;e++)c[e]=t,f[e]=u;break;case "minMax":for(e=0;e<h;e++){var x=a[e];c[e]=x[0];f[e]=x[1]}break;case "standardDeviation":({numberOfStandardDeviations:x=2}=b);for(e=0;e<h;e++){var v=a[e];c[e]=v[2]-x*v[3];f[e]=v[2]+x*v[3];c[e]<v[0]&&(c[e]=v[0]);f[e]>v[1]&&(f[e]=v[1])}break;case "histogramEqualization":C.assertIsSome(d);for(e=0;e<h;e++)c[e]=d[e].min,
f[e]=d[e].max;break;case "percentClip":C.assertIsSome(d);for(e=0;e<d.length;e++){a=d[e];v=new Uint32Array(a.size);var w=[...a.counts];20<=w.length&&(w[0]=w[1]=w[2]=w[w.length-1]=w[w.length-2]=0);x=0;h=(a.max-a.min)/a.size;p=-.5===a.min&&1===h?.5:0;for(k=0;k<a.size;k++)x+=w[k],v[k]=x;w=(b.minPercent||0)*x/100;c[e]=a.min+p;for(k=0;k<a.size;k++)if(v[k]>w){c[e]=a.min+h*(k+p);break}w=(1-(b.maxPercent||0)/100)*x;f[e]=a.max+p;for(k=a.size-2;0<=k;k--)if(v[k]<w){f[e]=a.min+h*(k+2-p);break}f[e]<c[e]&&(a=c[e],
c[e]=f[e],f[e]=a)}break;default:for(e=0;e<h;e++)x=a[e],c[e]=x[0],f[e]=x[1]}let r;"histogramEqualization"===m?(C.assertIsSome(d),m=d[0].size||256,b=0,l&&(r=d.map(y=>F(y)))):(m=b.max||255,b=b.min||0);return N({minCutOff:c,maxCutOff:f,outMax:m,outMin:b,histogramLut:r},g)};z.stretch=function(b,d){if(!b?.pixels?.length)return b;const {mask:n,bandMasks:g,width:l,height:q,pixels:a}=b,{minCutOff:m,maxCutOff:h,gamma:c}=d;var f=d.outMin||0;const p=d.outMax||255,e=l*q,k=d.outputPixelType||"u8";b=b.pixels.map(()=>
E.createEmptyBand(k,e));const t=b.length;var u=p-f,x=[],v=[];for(var w=0;w<t;w++)v[w]=h[w]-m[w],x[w]=0===v[w]?0:u/v[w];w=k.startsWith("u")||k.startsWith("s");d=!!d.isRenderer;if(c&&c.length>=t){x=D(t,c);for(var r=0;r<t;r++){var y=g?.[r]??n;for(let B=0;B<e;B++)if(null==y||y[B]){if(0===v[r]){b[r][B]=f;continue}var A=a[r][B];const I=(A-m[r])/v[r];let J=1;1<c[r]&&(J-=(1/u)**(I*x[r]));A<h[r]&&A>m[r]?(A=J*u*I**(1/c[r])+f,b[r][B]=d?Math.floor(A):w?Math.round(A):A):b[r][B]=A>=h[r]?p:f}}}else for(u=0;u<t;u++)for(v=
g?.[u]??n,r=0;r<e;r++)if(null==v||v[r])y=a[u][r],y<h[u]&&y>m[u]?(y=(y-m[u])*x[u]+f,b[u][r]=d?Math.floor(y):w?Math.round(y):y):b[u][r]=y>=h[u]?p:f;f=new E({width:l,height:q,mask:n,bandMasks:g,pixels:b,pixelType:k});f.updateStatistics();return f};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});