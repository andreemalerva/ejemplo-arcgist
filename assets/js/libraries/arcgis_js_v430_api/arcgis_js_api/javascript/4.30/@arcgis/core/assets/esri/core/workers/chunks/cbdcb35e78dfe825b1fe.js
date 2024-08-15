"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9629],{79629:(n,e,a)=>{a.r(e),a.d(e,{registerFunctions:()=>o});var t=a(22976);function r(n,e){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?t.D.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:t.ak[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},(0,t._)(e)):t.D.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:t.ak[n.field.type],min:n.domain.minValue,max:n.domain.maxValue},(0,t._)(e)):null}function o(n){"async"===n.mode&&(n.functions.domain=function(e,a){return n.standardFunctionAsync(e,a,(async(n,o,i)=>{if((0,t.p)(i,2,3,e,a),(0,t.w)(i[0]))return r((0,t.ab)(i[0],(0,t.C)(i[1]),void 0===i[2]?void 0:i[2]),e);if((0,t.x)(i[0]))return await i[0]._ensureLoaded(),r((0,t.ac)((0,t.C)(i[1]),i[0],null,void 0===i[2]?void 0:i[2]),e);throw new t.A(e,t.E.InvalidParameter,a)}))},n.functions.subtypes=function(e,a){return n.standardFunctionAsync(e,a,(async(n,r,o)=>{if((0,t.p)(o,1,1,e,a),(0,t.w)(o[0])){const n=(0,t.ad)(o[0]);return n?t.D.convertObjectToArcadeDictionary(n,(0,t._)(e)):null}if((0,t.x)(o[0])){await o[0]._ensureLoaded();const n=o[0].subtypeMetaData();return n?t.D.convertObjectToArcadeDictionary(n,(0,t._)(e)):null}throw new t.A(e,t.E.InvalidParameter,a)}))},n.functions.domainname=function(e,a){return n.standardFunctionAsync(e,a,(async(n,r,o)=>{if((0,t.p)(o,2,4,e,a),(0,t.w)(o[0]))return(0,t.ae)(o[0],(0,t.C)(o[1]),o[2],void 0===o[3]?void 0:o[3]);if((0,t.x)(o[0])){await o[0]._ensureLoaded();const n=(0,t.ac)((0,t.C)(o[1]),o[0],null,void 0===o[3]?void 0:o[3]);return(0,t.af)(n,o[2])}throw new t.A(e,t.E.InvalidParameter,a)}))},n.signatures.push({name:"domainname",min:2,max:4}),n.functions.domaincode=function(e,a){return n.standardFunctionAsync(e,a,(async(n,r,o)=>{if((0,t.p)(o,2,4,e,a),(0,t.w)(o[0]))return(0,t.ag)(o[0],(0,t.C)(o[1]),o[2],void 0===o[3]?void 0:o[3]);if((0,t.x)(o[0])){await o[0]._ensureLoaded();const n=(0,t.ac)((0,t.C)(o[1]),o[0],null,void 0===o[3]?void 0:o[3]);return(0,t.ah)(n,o[2])}throw new t.A(e,t.E.InvalidParameter,a)}))},n.signatures.push({name:"domaincode",min:2,max:4}),n.functions.text=function(e,a){return n.standardFunctionAsync(e,a,(async(n,r,o)=>{if((0,t.p)(o,1,2,e,a),(0,t.x)(o[0])){const r=(0,t.R)(o[1],"");if(""===r)return o[0].castToText();if("schema"===r.toLowerCase())return o[0].convertToText("schema",n.abortSignal);if("featureset"===r.toLowerCase())return o[0].convertToText("featureset",n.abortSignal);throw new t.A(e,t.E.InvalidParameter,a)}return(0,t.ai)(o[0],o[1])}))},n.functions.gdbversion=function(e,a){return n.standardFunctionAsync(e,a,(async(n,r,o)=>{if((0,t.p)(o,1,1,e,a),(0,t.w)(o[0]))return o[0].gdbVersion();if((0,t.x)(o[0]))return(await o[0].load()).gdbVersion;throw new t.A(e,t.E.InvalidParameter,a)}))},n.functions.schema=function(e,a){return n.standardFunctionAsync(e,a,(async(n,r,o)=>{if((0,t.p)(o,1,1,e,a),(0,t.x)(o[0]))return await o[0].load(),t.D.convertObjectToArcadeDictionary(o[0].schema(),(0,t._)(e));if((0,t.w)(o[0])){const n=(0,t.aj)(o[0]);return n?t.D.convertObjectToArcadeDictionary(n,(0,t._)(e)):null}throw new t.A(e,t.E.InvalidParameter,a)}))})}a(94345),a(36544),a(32773),a(20266),a(90740),a(44600),a(32816),a(29298),a(93181),a(13671),a(40499),a(6407),a(69421),a(91047),a(2160),a(99924),a(41390),a(58498),a(45371),a(80959),a(49877),a(7969),a(69763),a(93804),a(18683),a(64604),a(29512),a(99063),a(56273),a(64752),a(48844),a(29208),a(36533),a(84200),a(97827),a(91695),a(18169),a(48402),a(16699),a(26809),a(2589),a(18527),a(67504),a(92517),a(77037),a(26589),a(133),a(54483),a(59192),a(44864),a(88663),a(95637),a(59930),a(45862),a(72762),a(71613),a(17872),a(13317),a(83637),a(47239),a(79875),a(30011),a(55270),a(50214),a(78016),a(95779),a(13262),a(346),a(93049),a(82408),a(73509),a(28276),a(69277),a(70580),a(75191),a(24319),a(62092)}}]);