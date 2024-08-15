// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../../../core/arrayUtils","../../../../core/handleUtils","../II3SMeshView3D"],function(f,g,e){class h{constructor(){this.ids=new Set}}class k{constructor({collection:a,forAllFeatures:b,forAllFeaturesOfNode:c}){this._highlights=[];this._collection=a;this._forAllFeatures=b;this._forAllFeaturesOfNode=c}destroy(){this._highlights.forEach(a=>this._releaseSet(a));this._highlights=null}acquireSet(){const a=new h;this._highlights.push(a);const b=g.makeHandle(()=>{this._highlights&&(this._releaseSet(a),
f.removeUnordered(this._highlights,a))});return{set:a,handle:b}}setFeatureIds(a,b){b.forEach(c=>a.ids.add(c));this._initializeSet(a)}_initializeSet(a){this._forAllFeatures((b,c,d)=>{a.ids.has(b)&&this._collection.addComponentHighlight(d.objectHandle,c);return e.ForAllFeaturesReturnType.CONTINUE})}_releaseSet(a){this._forAllFeatures((b,c,d)=>{a.ids.has(b)&&this._collection.removeComponentHighlight(d.objectHandle,c);return e.ForAllFeaturesReturnType.CONTINUE})}objectCreated(a){this._highlights.forEach(b=>
{this._forAllFeaturesOfNode(a,(c,d)=>{b.ids.has(c)&&this._collection.addComponentHighlight(a.objectHandle,d);return e.ForAllFeaturesReturnType.CONTINUE})})}objectDeleted(a){this._collection.clearHighlights(a.objectHandle)}}return k});