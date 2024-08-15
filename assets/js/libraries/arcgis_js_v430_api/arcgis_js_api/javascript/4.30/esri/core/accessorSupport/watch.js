// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../ArrayPool ../handleUtils ../lang ../ReentrantObjectPool ../scheduling ../SetUtils ../uid ./get ./interfaces ./trackingUtils ./utils".split(" "),function(k,E,q,w,F,G,H,x,B,y,r,C){function t(a){h.delete(a);h.add(a);z||=G.schedule(D)}function I(a){if(!a.removed){var c=a.oldValue,d=a.getValue();a.equals(c,d)||(a.oldValue=d,a.notify(d,c))}}function D(){let a=10;for(;z&&a--;){z=null;const c=J(),d=u.acquire();for(const b of c){const e=b.uid;I(b);e===b.uid&&b.removed&&d.push(b)}for(const b of h)b.removed&&
(d.push(b),h.delete(b));for(const b of d)n.pool.release(b);u.release(d);u.release(c);A.forEach(b=>b())}}function J(){const a=u.acquire();a.length=h.size;let c=0;for(const d of h)a[c]=d,++c;h.clear();return a}function K(a,c,d){let b=C.parse(a,c,d,(e,g,l)=>{let f,m,p=r.reactionDeferred(()=>B.valueOf(e,g),(L,M)=>{e.__accessor__?.lifecycle===y.Lifecycle.DESTROYED||f&&f.uid!==m?b.remove():(f||(f=n.acquireUntracked(L,l,M,e,g),m=f.uid),t(f))});return q.makeHandle(()=>{p.remove();f&&(f.uid!==m||f.removed||
(f.removed=!0,t(f)),f=null);b=p=null})});return b}function N(a,c,d){const b=C.parse(a,c,d,(e,g,l)=>{let f=!1;return r.reaction(()=>B.valueOf(e,g),(m,p)=>{e.__accessor__.lifecycle===y.Lifecycle.DESTROYED?b.remove():f||(f=!0,w.equals(p,m)||l.call(e,m,p,g,e),f=!1)})});return b}function O(a,c,d){let b,e,g=r.reactionDeferred(a,(l,f)=>{b&&b.uid!==e?g.remove():(b||(b=n.acquireTracked(l,c,f,d),e=b.uid),t(b))});return q.makeHandle(()=>{g.remove();b&&(b.uid!==e||b.removed||(b.removed=!0,t(b)),b=null);g=null})}
function P(a,c,d){let b=!1;return r.reaction(a,(e,g)=>{b||(b=!0,d(g,e)||c(e,g),b=!1)})}var v;(function(a){a[a.Untracked=0]="Untracked";a[a.Tracked=1]="Tracked"})(v||={});class n{constructor(){this.uid=x.generateUID();this.removed=!1;this.equals=this.path=this.target=this.getValue=this.callback=this.oldValue=this.type=null}static acquireUntracked(a,c,d,b,e){return this.pool.acquire(v.Untracked,a,c,d,b,e,w.equals)}static acquireTracked(a,c,d,b){return this.pool.acquire(v.Tracked,a,c,d,null,null,b)}notify(a,
c){this.type===v.Untracked?this.callback.call(this.target,a,c,this.path,this.target):this.callback.call(null,a,c,void 0,void 0)}acquire(a,c,d,b,e,g,l){this.uid=x.generateUID();this.removed=!1;this.type=a;this.oldValue=c;this.callback=d;this.getValue=b;this.target=e;this.path=g;this.equals=l}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null;this.uid=x.generateUID();this.removed=!0}}n.pool=new F.ReentrantObjectPool(n);const u=new E,h=new Set;let z;const A=new Set;k.afterDispatch=
function(a){A.add(a);return q.makeHandle(()=>A.delete(a))};k.dispatch=D;k.isValueInUse=function(a){return H.someSet(h,c=>c.oldValue===a)};k.removeTarget=function(a){for(const c of h.values())c.target===a&&(c.removed=!0)};k.watch=function(a,c,d,b=!1){return a.__accessor__&&a.__accessor__.lifecycle!==y.Lifecycle.DESTROYED?b?N(a,c,d):K(a,c,d):q.makeHandle()};k.watchTracked=function(a,c,d=!1,b=w.equalsShallow){return d?P(a,c,b):O(a,c,b)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});