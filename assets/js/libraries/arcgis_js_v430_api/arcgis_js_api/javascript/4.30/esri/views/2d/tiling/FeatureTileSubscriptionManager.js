// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./TileKey"],function(k,h){function g(a,d){const b=new Set;for(const c of a instanceof Set?a.values():a.keys())d.has(c)||b.add(c);return b}class l{constructor(a,d,b){b=b?a.getTileCoverage(b,0,!0,"closest"):null;a=a.getTileCoverage(d,0,!0,"closest");this._tileKeys=new Map;if(b)for(const c of b.keys())this._tileKeys.set(c.id,c);if(a)for(const c of a.keys())this._tileKeys.set(c.id,c)}get coverageSet(){return new Set(this._tileKeys.keys())}keys(){return this._tileKeys.values()}}class m{constructor(a){this.version=
a}}class n{constructor(a){this._subscriptions=new Map;this._visible=new Set;this._paused=new Set;this._version=0;this._config=a}destroy(){}get _coverageSet(){return this._coverage?.coverageSet??new Set}suspend(){this._suspendedOverage=this._coverage;this._coverage=null;this._updateSubscriptions()}resume(){null==this._coverage&&(this._coverage=this._suspendedOverage,this._suspendedOverage=null,this._updateSubscriptions())}update(a,d){this._version=(this._version+1)%Number.MAX_SAFE_INTEGER;this._updateCoverage(a,
d);this._updateSubscriptions();return new Set(this._visible)}_updateCoverage(a,d){this._coverage=new l(this._config.tileInfoView,a,d)}_updateSubscriptions(){var a=this._coverageSet;const d=this._updateVisibility();var b=g(d,a);const c=g(this._subscriptions,d),e=g(a,this._subscriptions);a=g(c,a);b=g(b,a);b=g(b,this._paused);this._visible=d;for(const f of e.values())this._subscriptions.set(f,new m(this._version));for(const f of b.values())this._paused.add(f);for(const f of a.values())this._subscriptions.delete(f),
this._paused.delete(f);(e.size||a.size||b.size)&&this._sendUpdateSubscriptions(e,a,b)}_sendUpdateSubscriptions(a,d,b){a=Array.from(a.values()).map(c=>({tileId:c,version:this._subscriptions.get(c).version}));this._config.updateSubscriptions({subscribe:a,unsubscribe:Array.from(d.values()),pause:Array.from(b.values())})}_updateVisibility(){const a=new Set,d=new Set;if(!this._coverage)return a;for(var b of this._coverage.keys())this._config.isDone(b)?a.add(b.id):this._addVisibleParent(a,d,b)||this._addVisibleChildren(a,
b)||a.add(b.id);b=new h(0,0,0,0);const c=new h(0,0,0,0);for(const e of d){b.id=e;for(const f of a)c.id=f,b.containsChild(c)&&a.delete(f)}return a}_addVisibleParent(a,d,b){let c=!1;for(const e of this._visible.values())(new h(e)).containsChild(b)&&(a.add(e),d.add(e),c=!0);return c}_addVisibleChildren(a,d){let b=!1;for(const c of this._visible.values()){const e=new h(c);d.containsChild(e)&&(a.add(c),b=!0)}return b}}k.FeatureTileSubscriptionManager=n;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});