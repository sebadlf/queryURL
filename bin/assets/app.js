/**
 * emc-service-providers - v2.0.0 - 2015-10-30
 * http://emc.com/
 *
 * Copyright (c) 2015 EMC
 */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.0.6/LICENSE
 */
(function(t,e){"use strict";if(typeof define==="function"&&define.amd){define(e)}else if(typeof exports==="object"){module.exports=e()}else{t.returnExports=e()}})(this,function(){var t=Array.prototype;var e=Object.prototype;var r=Function.prototype;var n=String.prototype;var i=Number.prototype;var a=t.slice;var o=t.splice;var u=t.push;var l=t.unshift;var s=r.call;var f=e.toString;var c=function(t){return f.call(t)==="[object Function]"};var p=function(t){return f.call(t)==="[object RegExp]"};var h=function ue(t){return f.call(t)==="[object Array]"};var v=function le(t){return f.call(t)==="[object String]"};var g=function se(t){var e=f.call(t);var r=e==="[object Arguments]";if(!r){r=!h(t)&&t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&c(t.callee)}return r};var y=function(t){var e=Object.defineProperty&&function(){try{Object.defineProperty({},"x",{});return true}catch(t){return false}}();var r;if(e){r=function(t,e,r,n){if(!n&&e in t){return}Object.defineProperty(t,e,{configurable:true,enumerable:false,writable:true,value:r})}}else{r=function(t,e,r,n){if(!n&&e in t){return}t[e]=r}}return function n(e,i,a){for(var o in i){if(t.call(i,o)){r(e,o,i[o],a)}}}}(e.hasOwnProperty);function d(t){var e=+t;if(e!==e){e=0}else if(e!==0&&e!==1/0&&e!==-(1/0)){e=(e>0||-1)*Math.floor(Math.abs(e))}return e}function m(t){var e=typeof t;return t===null||e==="undefined"||e==="boolean"||e==="number"||e==="string"}function b(t){var e,r,n;if(m(t)){return t}r=t.valueOf;if(c(r)){e=r.call(t);if(m(e)){return e}}n=t.toString;if(c(n)){e=n.call(t);if(m(e)){return e}}throw new TypeError}var w={ToObject:function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return Object(t)},ToUint32:function fe(t){return t>>>0}};var x=function ce(){};y(r,{bind:function pe(t){var e=this;if(!c(e)){throw new TypeError("Function.prototype.bind called on incompatible "+e)}var r=a.call(arguments,1);var n;var i=function(){if(this instanceof n){var i=e.apply(this,r.concat(a.call(arguments)));if(Object(i)===i){return i}return this}else{return e.apply(t,r.concat(a.call(arguments)))}};var o=Math.max(0,e.length-r.length);var u=[];for(var l=0;l<o;l++){u.push("$"+l)}n=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this, arguments); }")(i);if(e.prototype){x.prototype=e.prototype;n.prototype=new x;x.prototype=null}return n}});var O=s.bind(e.hasOwnProperty);var T=function(){var t=[1,2];var e=t.splice();return t.length===2&&h(e)&&e.length===0}();y(t,{splice:function he(t,e){if(arguments.length===0){return[]}else{return o.apply(this,arguments)}}},!T);var j=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();y(t,{splice:function ve(t,e){if(arguments.length===0){return[]}var r=arguments;this.length=Math.max(d(this.length),0);if(arguments.length>0&&typeof e!=="number"){r=a.call(arguments);if(r.length<2){r.push(this.length-t)}else{r[1]=d(e)}}return o.apply(this,r)}},!j);var S=[].unshift(0)!==1;y(t,{unshift:function(){l.apply(this,arguments);return this.length}},S);y(Array,{isArray:h});var E=Object("a");var N=E[0]!=="a"||!(0 in E);var I=function ge(t){var e=true;var r=true;if(t){t.call("foo",function(t,r,n){if(typeof n!=="object"){e=false}});t.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!t&&e&&r};y(t,{forEach:function ye(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=arguments[1],i=-1,a=r.length>>>0;if(!c(t)){throw new TypeError}while(++i<a){if(i in r){t.call(n,r[i],i,e)}}}},!I(t.forEach));y(t,{map:function de(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=Array(n),a=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var o=0;o<n;o++){if(o in r){i[o]=t.call(a,r[o],o,e)}}return i}},!I(t.map));y(t,{filter:function me(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=[],a,o=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var u=0;u<n;u++){if(u in r){a=r[u];if(t.call(o,a,u,e)){i.push(a)}}}return i}},!I(t.filter));y(t,{every:function be(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&!t.call(i,r[a],a,e)){return false}}return true}},!I(t.every));y(t,{some:function we(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&t.call(i,r[a],a,e)){return true}}return false}},!I(t.some));var D=false;if(t.reduce){D=typeof t.reduce.call("es5",function(t,e,r,n){return n})==="object"}y(t,{reduce:function xe(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0;if(!c(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=t.call(void 0,a,r[i],i,e)}}return a}},!D);var M=false;if(t.reduceRight){M=typeof t.reduceRight.call("es5",function(t,e,r,n){return n})==="object"}y(t,{reduceRight:function Oe(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0;if(!c(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i,a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=t.call(void 0,i,r[a],a,e)}}while(a--);return i}},!M);var F=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;y(t,{indexOf:function Te(t){var e=N&&v(this)?this.split(""):w.ToObject(this),r=e.length>>>0;if(!r){return-1}var n=0;if(arguments.length>1){n=d(arguments[1])}n=n>=0?n:Math.max(0,r+n);for(;n<r;n++){if(n in e&&e[n]===t){return n}}return-1}},F);var R=Array.prototype.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;y(t,{lastIndexOf:function je(t){var e=N&&v(this)?this.split(""):w.ToObject(this),r=e.length>>>0;if(!r){return-1}var n=r-1;if(arguments.length>1){n=Math.min(n,d(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in e&&t===e[n]){return n}}return-1}},R);var U=!{toString:null}.propertyIsEnumerable("toString"),k=function(){}.propertyIsEnumerable("prototype"),C=!O("x","0"),A=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],P=A.length;y(Object,{keys:function Se(t){var e=c(t),r=g(t),n=t!==null&&typeof t==="object",i=n&&v(t);if(!n&&!e&&!r){throw new TypeError("Object.keys called on a non-object")}var a=[];var o=k&&e;if(i&&C||r){for(var u=0;u<t.length;++u){a.push(String(u))}}if(!r){for(var l in t){if(!(o&&l==="prototype")&&O(t,l)){a.push(String(l))}}}if(U){var s=t.constructor,f=s&&s.prototype===t;for(var p=0;p<P;p++){var h=A[p];if(!(f&&h==="constructor")&&O(t,h)){a.push(h)}}}return a}});var Z=Object.keys&&function(){return Object.keys(arguments).length===2}(1,2);var J=Object.keys;y(Object,{keys:function Ee(e){if(g(e)){return J(t.slice.call(e))}else{return J(e)}}},!Z);var z=-621987552e5;var $="-000001";var B=Date.prototype.toISOString&&new Date(z).toISOString().indexOf($)===-1;y(Date.prototype,{toISOString:function Ne(){var t,e,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(0<=n&&n<=9999?-4:-6);e=t.length;while(e--){r=t[e];if(r<10){t[e]="0"+r}}return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},B);var H=false;try{H=Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(z).toJSON().indexOf($)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(L){}if(!H){Date.prototype.toJSON=function Ie(t){var e=Object(this),r=b(e),n;if(typeof r==="number"&&!isFinite(r)){return null}n=e.toISOString;if(typeof n!=="function"){throw new TypeError("toISOString property is not callable")}return n.call(e)}}var X=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var Y=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"));var q=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(!Date.parse||q||Y||!X){Date=function(t){function e(r,n,i,a,o,u,l){var s=arguments.length;if(this instanceof t){var f=s===1&&String(r)===r?new t(e.parse(r)):s>=7?new t(r,n,i,a,o,u,l):s>=6?new t(r,n,i,a,o,u):s>=5?new t(r,n,i,a,o):s>=4?new t(r,n,i,a):s>=3?new t(r,n,i):s>=2?new t(r,n):s>=1?new t(r):new t;f.constructor=e;return f}return t.apply(this,arguments)}var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];function i(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function a(e){return Number(new t(1970,0,1,0,0,0,e))}for(var o in t){e[o]=t[o]}e.now=t.now;e.UTC=t.UTC;e.prototype=t.prototype;e.prototype.constructor=e;e.parse=function u(e){var n=r.exec(e);if(n){var o=Number(n[1]),u=Number(n[2]||1)-1,l=Number(n[3]||1)-1,s=Number(n[4]||0),f=Number(n[5]||0),c=Number(n[6]||0),p=Math.floor(Number(n[7]||0)*1e3),h=Boolean(n[4]&&!n[8]),v=n[9]==="-"?1:-1,g=Number(n[10]||0),y=Number(n[11]||0),d;if(s<(f>0||c>0||p>0?24:25)&&f<60&&c<60&&p<1e3&&u>-1&&u<12&&g<24&&y<60&&l>-1&&l<i(o,u+1)-i(o,u)){d=((i(o,u)+l)*24+s+g*v)*60;d=((d+f+y*v)*60+c)*1e3+p;if(h){d=a(d)}if(-864e13<=d&&d<=864e13){return d}}return NaN}return t.parse.apply(this,arguments)};return e}(Date)}if(!Date.now){Date.now=function De(){return(new Date).getTime()}}var G=i.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var K={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function Me(t,e){var r=-1;while(++r<K.size){e+=t*K.data[r];K.data[r]=e%K.base;e=Math.floor(e/K.base)}},divide:function Fe(t){var e=K.size,r=0;while(--e>=0){r+=K.data[e];K.data[e]=Math.floor(r/t);r=r%t*K.base}},numToString:function Re(){var t=K.size;var e="";while(--t>=0){if(e!==""||t===0||K.data[t]!==0){var r=String(K.data[t]);if(e===""){e=r}else{e+="0000000".slice(0,7-r.length)+r}}}return e},pow:function Ue(t,e,r){return e===0?r:e%2===1?Ue(t,e-1,r*t):Ue(t*t,e/2,r)},log:function ke(t){var e=0;while(t>=4096){e+=12;t/=4096}while(t>=2){e+=1;t/=2}return e}};y(i,{toFixed:function Ce(t){var e,r,n,i,a,o,u,l;e=Number(t);e=e!==e?0:Math.floor(e);if(e<0||e>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=Number(this);if(r!==r){return"NaN"}if(r<=-1e21||r>=1e21){return String(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){a=K.log(r*K.pow(2,69,1))-69;o=a<0?r*K.pow(2,-a,1):r/K.pow(2,a,1);o*=4503599627370496;a=52-a;if(a>0){K.multiply(0,o);u=e;while(u>=7){K.multiply(1e7,0);u-=7}K.multiply(K.pow(10,u,1),0);u=a-1;while(u>=23){K.divide(1<<23);u-=23}K.divide(1<<u);K.multiply(1,1);K.divide(2);i=K.numToString()}else{K.multiply(0,o);K.multiply(1<<-a,0);i=K.numToString()+"0.00000000000000000000".slice(2,2+e)}}if(e>0){l=i.length;if(l<=e){i=n+"0.0000000000000000000".slice(0,e-l+2)+i}else{i=n+i.slice(0,l-e)+"."+i.slice(l-e)}}else{i=n+i}return i}},G);var Q=n.split;if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var t=typeof/()??/.exec("")[1]==="undefined";n.split=function(e,r){var n=this;if(typeof e==="undefined"&&r===0){return[]}if(f.call(e)!=="[object RegExp]"){return Q.call(this,e,r)}var i=[],a=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),o=0,l,s,c,p;e=new RegExp(e.source,a+"g");n+="";if(!t){l=new RegExp("^"+e.source+"$(?!\\s)",a)}r=typeof r==="undefined"?-1>>>0:w.ToUint32(r);s=e.exec(n);while(s){c=s.index+s[0].length;if(c>o){i.push(n.slice(o,s.index));if(!t&&s.length>1){s[0].replace(l,function(){for(var t=1;t<arguments.length-2;t++){if(typeof arguments[t]==="undefined"){s[t]=void 0}}})}if(s.length>1&&s.index<n.length){u.apply(i,s.slice(1))}p=s[0].length;o=c;if(i.length>=r){break}}if(e.lastIndex===s.index){e.lastIndex++}s=e.exec(n)}if(o===n.length){if(p||!e.test("")){i.push("")}}else{i.push(n.slice(o))}return i.length>r?i.slice(0,r):i}})()}else if("0".split(void 0,0).length){n.split=function Ae(t,e){if(typeof t==="undefined"&&e===0){return[]}return Q.call(this,t,e)}}var V=n.replace;var W=function(){var t=[];"x".replace(/x(.)?/g,function(e,r){t.push(r)});return t.length===1&&typeof t[0]==="undefined"}();if(!W){n.replace=function Pe(t,e){var r=c(e);var n=p(t)&&/\)[*?]/.test(t.source);if(!r||!n){return V.call(this,t,e)}else{var i=function(r){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(r)||[];t.lastIndex=i;a.push(arguments[n-2],arguments[n-1]);return e.apply(this,a)};return V.call(this,t,i)}}}var _=n.substr;var te="".substr&&"0b".substr(-1)!=="b";y(n,{substr:function Ze(t,e){return _.call(this,t<0?(t=this.length+t)<0?0:t:t,e)}},te);var ee="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var re="\u200b";var ne="["+ee+"]";var ie=new RegExp("^"+ne+ne+"*");var ae=new RegExp(ne+ne+"*$");var oe=n.trim&&(ee.trim()||!re.trim());y(n,{trim:function Je(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(ie,"").replace(ae,"")}},oe);if(parseInt(ee+"08")!==8||parseInt(ee+"0x16")!==22){parseInt=function(t){var e=/^0[xX]/;return function r(n,i){n=String(n).trim();if(!Number(i)){i=e.test(n)?16:10}return t(n,i)}}(parseInt)}});
//# sourceMappingURL=es5-shim.map
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.0.6/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Function.prototype.call;var t=Object.prototype;var r=e.bind(t.hasOwnProperty);var n;var o;var c;var i;var f=r(t,"__defineGetter__");if(f){n=e.bind(t.__defineGetter__);o=e.bind(t.__defineSetter__);c=e.bind(t.__lookupGetter__);i=e.bind(t.__lookupSetter__)}if(!Object.getPrototypeOf){Object.getPrototypeOf=function E(e){var r=e.__proto__;if(r||r===null){return r}else if(e.constructor){return e.constructor.prototype}else{return t}}}function l(e){try{e.sentinel=0;return Object.getOwnPropertyDescriptor(e,"sentinel").value===0}catch(t){}}if(Object.defineProperty){var u=l({});var a=typeof document==="undefined"||l(document.createElement("div"));if(!a||!u){var p=Object.getOwnPropertyDescriptor}}if(!Object.getOwnPropertyDescriptor||p){var b="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function g(e,n){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(b+e)}if(p){try{return p.call(Object,e,n)}catch(o){}}var l;if(!r(e,n)){return l}l={enumerable:true,configurable:true};if(f){var u=e.__proto__;var a=e!==t;if(a){e.__proto__=t}var s=c(e,n);var O=i(e,n);if(a){e.__proto__=u}if(s||O){if(s){l.get=s}if(O){l.set=O}return l}}l.value=e[n];l.writable=true;return l}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function T(e){return Object.keys(e)}}if(!Object.create){var s;var O=!({__proto__:null}instanceof Object);if(O||typeof document==="undefined"){s=function(){return{__proto__:null}}}else{s=function(){var e=document.createElement("iframe");var t=document.body||document.documentElement;e.style.display="none";t.appendChild(e);e.src="javascript:";var r=e.contentWindow.Object.prototype;t.removeChild(e);e=null;delete r.constructor;delete r.hasOwnProperty;delete r.propertyIsEnumerable;delete r.isPrototypeOf;delete r.toLocaleString;delete r.toString;delete r.valueOf;r.__proto__=null;function n(){}n.prototype=r;s=function(){return new n};return new n}}Object.create=function x(e,t){var r;function n(){}if(e===null){r=s()}else{if(typeof e!=="object"&&typeof e!=="function"){throw new TypeError("Object prototype may only be an Object or null")}n.prototype=e;r=new n;r.__proto__=e}if(t!==void 0){Object.defineProperties(r,t)}return r}}function j(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){}}if(Object.defineProperty){var d=j({});var y=typeof document==="undefined"||j(document.createElement("div"));if(!d||!y){var _=Object.defineProperty,v=Object.defineProperties}}if(!Object.defineProperty||_){var w="Property description must be an object: ";var P="Object.defineProperty called on non-object: ";var h="getters & setters can not be defined on this javascript engine";Object.defineProperty=function z(e,r,l){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(P+e)}if(typeof l!=="object"&&typeof l!=="function"||l===null){throw new TypeError(w+l)}if(_){try{return _.call(Object,e,r,l)}catch(u){}}if("value"in l){if(f&&(c(e,r)||i(e,r))){var a=e.__proto__;e.__proto__=t;delete e[r];e[r]=l.value;e.__proto__=a}else{e[r]=l.value}}else{if(!f){throw new TypeError(h)}if("get"in l){n(e,r,l.get)}if("set"in l){o(e,r,l.set)}}return e}}if(!Object.defineProperties||v){Object.defineProperties=function S(e,t){if(v){try{return v.call(Object,e,t)}catch(n){}}for(var o in t){if(r(t,o)&&o!=="__proto__"){Object.defineProperty(e,o,t[o])}}return e}}if(!Object.seal){Object.seal=function D(e){if(Object(e)!==e){throw new TypeError("Object.seal can only be called on Objects.")}return e}}if(!Object.freeze){Object.freeze=function F(e){if(Object(e)!==e){throw new TypeError("Object.freeze can only be called on Objects.")}return e}}try{Object.freeze(function(){})}catch(m){Object.freeze=function k(e){return function t(r){if(typeof r==="function"){return r}else{return e(r)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function G(e){if(Object(e)!==e){throw new TypeError("Object.preventExtensions can only be called on Objects.")}return e}}if(!Object.isSealed){Object.isSealed=function C(e){if(Object(e)!==e){throw new TypeError("Object.isSealed can only be called on Objects.")}return false}}if(!Object.isFrozen){Object.isFrozen=function N(e){if(Object(e)!==e){throw new TypeError("Object.isFrozen can only be called on Objects.")}return false}}if(!Object.isExtensible){Object.isExtensible=function I(e){if(Object(e)!==e){throw new TypeError("Object.isExtensible can only be called on Objects.")}var t="";while(r(e,t)){t+="?"}e[t]=true;var n=r(e,t);delete e[t];return n}}});
//# sourceMappingURL=es5-sham.map
/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,u){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.28/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Sa(b){if(null==b||Ja(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:G(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||Sa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Xb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Xb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Yb(b){return function(a,c){b(c,a)}}function ib(){for(var b=na.length,a;b;){b--;a=na[b].charCodeAt(0);if(57==a)return na[b]="A",na.join("");if(90==a)na[b]="0";else return na[b]=String.fromCharCode(a+1),na.join("")}na.unshift("0");return na.join("")}function Zb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Zb(b,a);return b}function U(b){return parseInt(b,
10)}function $b(b,a){return E(new (E(function(){},{prototype:b})),a)}function v(){}function ga(b){return b}function aa(b){return function(){return b}}function F(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function G(b){return"string"===typeof b}function jb(b){return"number"===typeof b}function va(b){return"[object Date]"===Ba.call(b)}function N(b){return"function"===typeof b}function kb(b){return"[object RegExp]"===Ba.call(b)}
function Ja(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ta(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=Ta(b,a);0<=c&&b.splice(c,1);return a}function Ka(b,a,c,d){if(Ja(b)||b&&b.$evalAsync&&b.$watch)throw Va("cpws");if(a){if(b===a)throw Va("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ta(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Zb(a,g)}}else if(a=b)L(b)?a=Ka(b,[],c,d):va(b)?a=new Date(b.getTime()):kb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ka(b,{},c,d));
return a}function ha(b,a){if(L(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!lb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Ca(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ca(b[d],a[d]))return!1;return!0}}else{if(va(b))return va(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(kb(b)&&kb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ja(b)||Ja(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!Ca(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!N(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?wa.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(wa.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=u:Ja(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return G(b)?JSON.parse(b):b}function Wa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=bc(c[0]),D(d)&&(b=D(c[1])?bc(c[1]):!0,lb.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function mb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function dc(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Va("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function nb(b,a){a=
a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Va("areq",a||"?",c||"required");return b}function Ya(b,a,c){c&&L(b)&&(b=b[b.length-1]);Db(N(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ea(b,a){if("hasOwnProperty"===b)throw Va("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Yc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function Zc(b){E(b,{bootstrap:dc,copy:Ka,extend:E,equals:Ca,element:A,forEach:r,injector:ec,noop:v,bind:Bb,toJson:oa,fromJson:ac,identity:ga,isUndefined:F,isDefined:D,isString:G,isFunction:N,isObject:T,isNumber:jb,isElement:Tc,isArray:L,version:$c,isDate:va,lowercase:x,uppercase:La,callbacks:{counter:0},$$minErr:z,$$csp:Za});$a=Yc(W);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",ad)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",
gc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Fb).directive(jc);
a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function ab(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],k=a,m,l,n,q,p,s;if(!d||null!=b)for(;e.length;)for(m=e.shift(),l=0,n=m.length;l<n;l++)for(q=A(m[l]),k?q.triggerHandler("$destroy"):k=!k,p=0,q=(s=q.children()).length;p<q;p++)e.push(Fa(s[p]));return f.apply(this,arguments)}var f=Fa.fn[b],f=f.$original||f;e.$original=f;Fa.fn[b]=e}function S(b){if(b instanceof S)return b;G(b)&&(b=$(b));if(!(this instanceof S)){if(G(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(G(b)){var a=b;b=X;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);A(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ma(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ma(b[a])}function lc(b,a,c,d){if(D(d))throw Hb("offargs");var e=pa(b,"events");pa(b,"handle")&&(F(a)?r(e,function(a,c){bb(b,c,a);delete e[c]}):r(a.split(" "),function(a){F(c)?(bb(b,a,e[a]),delete e[a]):Ua(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=cb[c];d&&(a?delete cb[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),lc(b)),delete cb[c],b.ng339=u))}function pa(b,a,c){var d=
b.ng339,d=cb[d||-1];if(D(c))d||(b.ng339=d=++me,d=cb[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=pa(b,"data"),e=D(c),f=!e&&D(a),g=f&&!T(a);d||g||pa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function ob(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+$(a)+" "," ")))})}function pb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function Jb(b,a){if(a){a=a.nodeName||!D(a.length)||Ja(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function mc(b,a){return qb(b,"$"+(a||"ngController")+"Controller")}function qb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function nc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ma(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function oc(b,a){var c=rb[a.toLowerCase()];return c&&pc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(F(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=R?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Na(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===u&&(d=b.$$hashKey=(a||ib)()):d=b;return c+":"+d}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function qc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),r(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Ya(b[c],"fn"),a=b.slice(0,c)):Ya(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(T(b))r(b,
Yb(a));else return a(b,c)}}function c(a,b){Ea(a,"service");if(N(b)||L(b))b=n.instantiate(b);if(!b.$get)throw eb("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!m.get(a)){m.put(a,!0);try{if(G(a))for(c=$a(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],k=n.get(g[0]);k[g[1]].apply(k,g[2])}else N(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Ya(a,"module")}catch(p){throw L(a)&&(a=
a[a.length-1]),p.message&&(p.stack&&-1==p.stack.indexOf(p.message))&&(p=p.message+"\n"+p.stack),eb("modulerr",a,p.stack||p.message||p);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw eb("cdep",d+" <- "+k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{k.shift()}}function d(a,b,e){var f=[],h=qc(a),g,k,p;k=0;for(g=h.length;k<g;k++){p=h[k];if("string"!==typeof p)throw eb("itkn",p);f.push(e&&e.hasOwnProperty(p)?
e[p]:c(p))}L(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||N(e)?e:c},get:c,annotate:qc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",k=[],m=new db([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,
b){Ea(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw eb("unpr",k.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||v)});return p}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,
wa.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});t=b(ea,a)})()}function g(){y!=h.url()&&(y=h.url(),r(ba,function(a){a(h.url())}))}var h=this,k=a[0],m=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var s=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===s?a():J.push(a)};
var w=[],t;h.addPollFn=function(a){F(t)&&f(100,n);w.push(a);return a};var y=m.href,K=a.find("base"),B=null;h.url=function(a,c){m!==b.location&&(m=b.location);l!==b.history&&(l=b.history);if(a){if(y!=a){var e=y&&Ga(y)===Ga(a);y=a;!e&&d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(e||(B=a),c?m.replace(a):m.href=a);return h}}else return B||m.href.replace(/%27/g,"'")};var ba=[],O=!1;h.onUrlChange=function(a){if(!O){if(d.history)A(b).on("popstate",g);if(d.hashchange)A(b).on("hashchange",
g);else h.addPollFn(g);O=!0}ba.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var M={},ca="",P=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===u?k.cookie=escape(a)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":G(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+P).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==
ca)for(ca=k.cookie,d=ca.split("; "),M={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),M[a]===u&&(M[a]=unescape(e.substring(h+1))));return M}};h.defer=function(a,b){var c;s++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(v),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),k={},m=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;return a[b]={put:function(a,b){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!F(b))return a in k||g++,k[a]=b,g>m&&this.remove(q.key),b},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete k[a];g--},removeAll:function(){k={};g=0;l={};n=q=null},destroy:function(){l=h=k=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Ea(a,"directive");G(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);N(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(k){d(k)}});return e}])),c[a].push(e)):r(a,Yb(k));
return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,q,p,s,J,w,t,y,K){function B(a,b,c,d,e){a instanceof
A||(a=A(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);ba(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?Oa.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var k=g.length;d<k;d++){var p=g[d].nodeType;1!==p&&9!==p||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ba(a,b){try{a.addClass(b)}catch(c){}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,p,l,m,q,
n,w;f=c.length;var s=Array(f);for(m=0;m<f;m++)s[m]=c[m];n=m=0;for(q=k.length;m<q;n++)p=s[n],c=k[m++],f=k[m++],c?(c.scope?(l=a.$new(),A.data(p,"$scope",l)):l=a,w=c.transcludeOnThisElement?M(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,p,d,w)):f&&f(a,p.childNodes,u,e)}for(var k=[],p,l,m,q,n=0;n<a.length;n++)p=new Ob,l=ca(a[n],[],p,0===n?d:u,e),(f=l.length?I(l,a[n],p,b,c,null,[],[],f):null)&&f.scope&&ba(p.$$element,"ng-scope"),p=f&&f.terminal||!(m=a[n].childNodes)||!m.length?
null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),k.push(f,p),q=q||f||p,f=null;return q?g:null}function M(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,g){var k=c.$attr,p;switch(a.nodeType){case 1:ea(b,qa(Pa(a).toLowerCase()),"E",d,g);for(var l,m,q,n=a.attributes,w=0,s=n&&n.length;w<s;w++){var t=!1,J=!1;l=n[w];if(!R||8<=R||l.specified){p=l.name;m=
$(l.value);l=qa(p);if(q=U.test(l))p=nb(l.substr(6),"-");var y=l.replace(/(Start|End)$/,"");l===y+"Start"&&(t=p,J=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));l=qa(p.toLowerCase());k[l]=p;if(q||!c.hasOwnProperty(l))c[l]=m,oc(a,l)&&(c[l]=!0);S(a,b,m,l);ea(b,l,"A",d,g,t,J)}}a=a.className;if(G(a)&&""!==a)for(;p=f.exec(a);)l=qa(p[2]),ea(b,l,"C",d,g)&&(c[l]=$(p[3])),a=a.substr(p.index+p[0].length);break;case 3:x(b,a.nodeValue);break;case 8:try{if(p=e.exec(a.nodeValue))l=qa(p[1]),ea(b,l,"M",d,
g)&&(c[l]=$(p[2]))}catch(B){}}b.sort(F);return b}function P(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function C(a,b,c){return function(d,e,f,g,k){e=P(e[0],b,c);return a(d,e,f,g,k)}}function I(a,c,d,e,f,g,k,q,n){function w(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=z;if(K===H||H.$$isolateScope)a=rc(a,
{isolateScope:!0});k.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=z;if(K===H||H.$$isolateScope)b=rc(b,{isolateScope:!0});q.push(b)}}function t(a,b,c,d){var e,f="data",g=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(t(a,b,c,d))}));return e}function J(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&
(b=a,a=u);Ia&&(c=ca);return n(a,b,c)}var y,Q,B,M,C,P,ca={},ra;y=c===f?d:ha(d,new Ob(A(f),d.$attr));Q=y.$$element;if(K){var ue=/^\s*([@=&])(\??)\s*(\w*)\s*$/;P=e.$new(!0);!I||I!==K&&I!==K.$$originalDirective?Q.data("$isolateScopeNoTemplate",P):Q.data("$isolateScope",P);ba(Q,"ng-isolate-scope");r(K.scope,function(a,c){var d=a.match(ue)||[],f=d[3]||c,g="?"==d[2],d=d[1],k,l,n,q;P.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){P[c]=a});y.$$observers[f].$$scope=e;y[f]&&(P[c]=b(y[f])(e));
break;case "=":if(g&&!y[f])break;l=p(y[f]);q=l.literal?Ca:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){k=P[c]=l(e);throw ja("nonassign",y[f],K.name);};k=P[c]=l(e);P.$watch(function(){var a=l(e);q(a,P[c])||(q(a,k)?n(e,a=P[c]):P[c]=a);return k=a},null,l.literal);break;case "&":l=p(y[f]);P[c]=function(a){return l(e,a)};break;default:throw ja("iscp",K.name,c,a);}})}ra=n&&w;O&&r(O,function(a){var b={$scope:a===K||a.$$isolateScope?P:e,$element:Q,$attrs:y,$transclude:ra},c;C=a.controller;
"@"==C&&(C=y[a.name]);c=s(C,b);ca[a.name]=c;Ia||Q.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(B=k.length;g<B;g++)try{M=k[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(H){l(H,ia(Q))}g=e;K&&(K.template||null===K.templateUrl)&&(g=P);a&&a(g,f.childNodes,u,n);for(g=q.length-1;0<=g;g--)try{M=q[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(D){l(D,ia(Q))}}n=n||{};for(var y=-Number.MAX_VALUE,
M,O=n.controllerDirectives,K=n.newIsolateScopeDirective,I=n.templateDirective,ea=n.nonTlbTranscludeDirective,F=!1,E=!1,Ia=n.hasElementTranscludeDirective,x=d.$$element=A(c),H,z,V,S=e,R,Ha=0,sa=a.length;Ha<sa;Ha++){H=a[Ha];var U=H.$$start,Y=H.$$end;U&&(x=P(c,U,Y));V=u;if(y>H.priority)break;if(V=H.scope)M=M||H,H.templateUrl||(fb("new/isolated scope",K,H,x),T(V)&&(K=H));z=H.name;!H.templateUrl&&H.controller&&(V=H.controller,O=O||{},fb("'"+z+"' controller",O[z],H,x),O[z]=H);if(V=H.transclude)F=!0,H.$$tlb||
(fb("transclusion",ea,H,x),ea=H),"element"==V?(Ia=!0,y=H.priority,V=x,x=d.$$element=A(X.createComment(" "+z+": "+d[z]+" ")),c=x[0],ra(f,wa.call(V,0),c),S=B(V,e,y,g&&g.name,{nonTlbTranscludeDirective:ea})):(V=A(Kb(c)).contents(),x.empty(),S=B(V,e));if(H.template)if(E=!0,fb("template",I,H,x),I=H,V=N(H.template)?H.template(x,d):H.template,V=W(V),H.replace){g=H;V=Ib.test(V)?A($(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",z,"");ra(f,x,c);sa={$attr:{}};V=ca(c,[],sa);var Z=a.splice(Ha+
1,a.length-(Ha+1));K&&D(V);a=a.concat(V).concat(Z);v(d,sa);sa=a.length}else x.html(V);if(H.templateUrl)E=!0,fb("template",I,H,x),I=H,H.replace&&(g=H),J=te(a.splice(Ha,a.length-Ha),x,d,f,F&&S,k,q,{controllerDirectives:O,newIsolateScopeDirective:K,templateDirective:I,nonTlbTranscludeDirective:ea}),sa=a.length;else if(H.compile)try{R=H.compile(x,d,S),N(R)?w(null,R,U,Y):R&&w(R.pre,R.post,U,Y)}catch(ve){l(ve,ia(x))}H.terminal&&(J.terminal=!0,y=Math.max(y,H.priority))}J.scope=M&&!0===M.scope;J.transcludeOnThisElement=
F;J.templateOnThisElement=E;J.transclude=S;n.hasElementTranscludeDirective=Ia;return J}function D(a){for(var b=0,c=a.length;b<c;b++)a[b]=$b(a[b],{$$isolateScope:!0})}function ea(b,e,f,g,p,m,n){if(e===p)return null;p=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var w=0,s=e.length;w<s;w++)try{q=e[w],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(m&&(q=$b(q,{$$start:m,$$end:n})),b.push(q),p=q)}catch(y){l(y)}}return p}function v(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ba(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function te(a,b,c,d,e,f,g,k){var p=[],l,m,w=b[0],s=a.shift(),y=E({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=N(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;
b.empty();n.get(t.getTrustedResourceUrl(J),{cache:q}).success(function(q){var n,t;q=W(q);if(s.replace){q=Ib.test(q)?A($(q)):[];n=q[0];if(1!=q.length||1!==n.nodeType)throw ja("tplrt",s.name,J);q={$attr:{}};ra(d,b,n);var B=ca(n,[],q);T(s.scope)&&D(B);a=B.concat(a);v(c,q)}else n=w,b.html(q);a.unshift(y);l=I(a,n,c,e,b,s,f,g,k);r(d,function(a,c){a==n&&(d[c]=b[0])});for(m=O(b[0].childNodes,e);p.length;){q=p.shift();t=p.shift();var K=p.shift(),C=p.shift(),B=b[0];if(t!==w){var P=t.className;k.hasElementTranscludeDirective&&
s.replace||(B=Kb(n));ra(K,A(t),B);ba(A(B),P)}t=l.transcludeOnThisElement?M(q,l.transclude,C):C;l(m,q,B,d,t)}p=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;p?(p.push(b),p.push(c),p.push(d),p.push(a)):(l.transcludeOnThisElement&&(a=M(b,l.transclude,e)),l(m,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function fb(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function x(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ba(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ba(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function z(a,b){if("srcdoc"==b)return t.HTML;var c=Pa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Pa(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,z(a,e)))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function ra(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,k;if(a)for(g=0,k=a.length;g<k;g++)if(a[g]==d){a[g++]=c;k=g+e-1;for(var p=a.length;g<
p;g++,k++)k<p?a[g]=a[k]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function rc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:qa,$addClass:function(a){a&&0<a.length&&y.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&y.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sc(a,b),d=sc(b,a);0===c.length?y.removeClass(this.$$element,d):0===d.length?y.addClass(this.$$element,c):y.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=oc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=nb(a,"-"));e=Pa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===u?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var sa=b.startSymbol(),Ia=b.endSymbol(),W="{{"==sa||"}}"==Ia?ga:function(a){return a.replace(/\{\{/g,sa).replace(/}}/g,Ia)},U=/^ngAttr[A-Z]/;return B}]}function qa(b){return ab(b.replace(we,""))}function sc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Ea(a,"controller");T(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,k;G(e)&&(g=e.match(a),h=g[1],k=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Ya(e,h,!0));g=c.instantiate(e,f);if(k){if(!f||"object"!==typeof f.$scope)throw z("$controller")("noscp",
h||e.name,k);f.$scope[k]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return A(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function tc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=x($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function uc(b){var a=T(b)?b:u;return function(c){a||(a=tc(b));return c?a[x(c)]||null:a}}function vc(b,a,c){if(N(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Ba.call(a)&&"[object Blob]"!==Ba.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function b(a){var d=E({},a,{data:vc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[x(a.method)]);
a:for(d in b){a=x(d);for(f in c)if(x(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){N(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=La(c.method);var f=[function(a){d=a.headers;var c=vc(a.data,uc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===x(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=n.when(c);for(r(t,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function m(a,b,c,e){C&&(200<=a&&300>a?C.put(A,[a,b,tc(c),e]):C.remove(A));q(b,a,c,e);d.$$phase||d.$apply()}function q(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?t.resolve:t.reject)({data:a,status:b,headers:uc(d),config:c,statusText:e})}function s(){var a=Ta(p.pendingRequests,c);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),r=t.promise,C,I,A=J(c.url,c.params);p.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(C=T(c.cache)?c.cache:T(e.cache)?e.cache:w);if(C)if(I=C.get(A),D(I)){if(I&&N(I.then))return I.then(s,s),I;L(I)?q(I[1],I[0],ha(I[2]),I[3]):q(I,200,{},"OK")}else C.put(A,r);F(I)&&
((I=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=I),a(c.method,A,f,m,g,c.timeout,c.withCredentials,c.responseType));return r}function J(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){T(a)&&(a=va(a)?a.toISOString():oa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),t=[];r(f,function(a){t.unshift(G(a)?q.get(a):q.invoke(a))});r(g,
function(a,b){var c=G(a)?q.get(a):q.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=e;return p}]}function xe(b){if(8>=R&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){bb(f,"load",g);bb(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};sb(f,"load",g);sb(f,"error",g);8>=R&&(f.onreadystatechange=function(){G(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,k,m,l,n,q,p,s){function J(){t=g;K&&K();B&&B.abort()}function w(a,d,e,f,g){O&&c.cancel(O);K=B=null;0===d&&(d=e?200:"file"==xa(k).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(v)}
var t;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==x(e)){var y="_"+(d.counter++).toString(36);d[y]=function(a){d[y].data=a;d[y].called=!0};var K=f(k.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(a,b){w(l,a,d[y].data,"",b);d[y]=v})}else{var B=a(e);B.open(e,k,!0);r(n,function(a,b){D(a)&&B.setRequestHeader(b,a)});B.onreadystatechange=function(){if(B&&4==B.readyState){var a=null,b=null,c="";t!==g&&(a=B.getAllResponseHeaders(),b="response"in B?B.response:B.responseText);t===g&&
10>R||(c=B.statusText);w(l,t||B.status,b,a,c)}};p&&(B.withCredentials=!0);if(s)try{B.responseType=s}catch(ba){if("json"!==s)throw ba;}B.send(m||null)}if(0<q)var O=c(J,q);else q&&N(q.then)&&q.then(J)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,m,l){for(var n,q,p=0,s=[],J=f.length,w=!1,t=[];p<J;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,
n+g))?(p!=n&&s.push(f.substring(p,n)),s.push(p=c(w=f.substring(n+g,q))),p.exp=w,p=q+h,w=!0):(p!=J&&s.push(f.substring(p)),p=J);(J=s.length)||(s.push(""),J=1);if(l&&1<s.length)throw wc("noconcat",f);if(!m||w)return t.length=J,p=function(a){try{for(var b=0,c=J,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=oa(g)}t[b]=g}return t.join("")}catch(h){a=wc("interr",f,h.toString()),
d(a)}},p.exp=f,p.parts=s,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,k){var m=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,s=D(k)&&!k;h=D(h)?h:0;q.then(null,null,d);q.$$intervalId=m(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);s||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
mb(b[a]);return b.join("/")}function xc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ta(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);xc(b,this,b);this.$$parse=function(a){var e=ta(c,a);if(!G(e))throw Sb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,
e){var f,g;(f=ta(b,d))!==u?(g=f,g=(f=ta(a,f))!==u?c+(ta("/",f)||f):b+g):(f=ta(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Tb(b,a){var c=Rb(b);xc(b,this,b);this.$$parse=function(d){var e=ta(b,d)||ta(c,d),e="#"==e.charAt(0)?ta(a,e):this.$$html5?e:"";if(!G(e))throw Sb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),
e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function Ac(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){var f,g;b==Ga(d)?f=d:(g=ta(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+
(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),m=d.url();
a?(k=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(k||"/"),e=e.history?zc:Ac):(k=Ga(m),e=Tb);h=new e(k,"#"+b);h.$$parseLinkUrl(m,m);var l=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");T(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);l.test(e)||(!e||(b.attr("target")||a.isDefaultPrevented())||
!h.$$parseLinkUrl(e,g))||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?
function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&
b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){ma(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),d);var h=ma(b[f],d);h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ya(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===u&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);ma(b[f],d);return b[f]=c}function Qa(b){return"constructor"==
b}function Cc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);var h=function(a){return ma(a,f)},k=g.expensiveChecks,m=k||Qa(b)?h:ga,l=k||Qa(a)?h:ga,n=k||Qa(c)?h:ga,q=k||Qa(d)?h:ga,p=k||Qa(e)?h:ga;return g.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,t;if(null==k)return k;(k=m(k[b]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=m(a)})),k=m(k.$$v));if(!a)return k;if(null==k)return u;(k=l(k[a]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=
l(a)})),k=l(k.$$v));if(!c)return k;if(null==k)return u;(k=n(k[c]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=n(a)})),k=n(k.$$v));if(!d)return k;if(null==k)return u;(k=q(k[d]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=q(a)})),k=q(k.$$v));if(!e)return k;if(null==k)return u;(k=p(k[e]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=p(a)})),k=p(k.$$v));return k}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=m(h[b]);
if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=q(h[d]);return e?null==h?u:h=p(h[e]):h}}function Ae(b,a){return function(c,d){return b(c,d,ya,ma,a)}}function Dc(b,a,c){var d=a.expensiveChecks,e=d?Be:Ce;if(e.hasOwnProperty(b))return e[b];var f=b.split("."),g=f.length,h;if(a.csp)h=6>g?Cc(f[0],f[1],f[2],f[3],f[4],c,a):function(b,d){var e=0,h;do h=Cc(f[e++],f[e++],f[e++],f[e++],f[e++],c,a)(b,d),d=u,b=h;while(e<g);return h};
else{var k="var p;\n";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var m=d;r(f,function(b,e){ka(b,c);var f=(e?"s":'((l&&l.hasOwnProperty("'+b+'"))?l:s)')+'["'+b+'"]',g=d||Qa(b);g&&(f="eso("+f+", fe)",m=!0);k+="if(s == null) return undefined;\ns="+f+";\n";a.unwrapPromises&&(k+='if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v='+(g?"eso(v)":"v")+";});\n}\n s="+(g?"eso(s.$$v)":"s.$$v")+"\n}\n")});k+="return s;";
h=new Function("s","l","pw","eso","fe",k);h.toString=aa(k);if(m||a.unwrapPromises)h=Ae(h,c)}"hasOwnProperty"!==b&&(e[b]=h);return h}function Xd(){var b={},a={},c={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0,expensiveChecks:!1};this.unwrapPromises=function(a){return D(a)?(c.unwrapPromises=!!a,this):c.unwrapPromises};this.logPromiseWarnings=function(a){return D(a)?(c.logPromiseWarnings=a,this):c.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(d,e,f){c.csp=e.csp;var g={csp:c.csp,
unwrapPromises:c.unwrapPromises,logPromiseWarnings:c.logPromiseWarnings,expensiveChecks:!0};ya=function(a){c.logPromiseWarnings&&!Ec.hasOwnProperty(a)&&(Ec[a]=!0,f.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(e,f){var m;switch(typeof e){case "string":var l=f?a:b;if(l.hasOwnProperty(e))return l[e];m=f?g:c;var n=new Ub(m);m=(new gb(n,d,m)).parse(e);"hasOwnProperty"!==e&&(l[e]=m);return m;case "function":return e;
default:return v}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return De(function(a){b.$evalAsync(a)},a)}]}function De(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],m,l;return l={resolve:function(a){if(g){var c=g;g=u;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=
c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((N(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},w=function(b){try{l.resolve((N(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,w,t]):m.then(J,w,t);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,
!1)}return g&&N(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((N(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,
when:function(h,m,l,n){var q=e(),p,s=function(b){try{return(N(m)?m:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(N(l)?l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(N(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(s,J,w)))},function(a){p||(p=!0,q.resolve(J(a)))},function(a){p||q.notify(w(a))})});return q.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,
--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=
e;return f}]}function Yd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ib();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=
{}}function k(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function m(a,b){var c=f(a);Ya(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=ib();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=m(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var h=m(b||v,"listener");g.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var k=g.fn;g.fn=function(a,b,c){k.call(this,a,b,c);Ua(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ua(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],n={},q=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Sa(d))for(e!==m&&(e=m,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,
k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b])):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(T(d))if(Sa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)lb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,h,l,m=this.$$asyncQueue,r=this.$$postDigestQueue,
K,B,u=b,O,M=[],A,P,C;k("$digest");g.$$checkUrlChange();c=null;do{B=!1;for(O=this;m.length;){try{C=m.shift(),C.scope.$eval(C.expression)}catch(I){q.$$phase=null,e(I)}c=null}a:do{if(l=O.$$watchers)for(K=l.length;K--;)try{if(d=l[K])if((f=d.get(O))!==(h=d.last)&&!(d.eq?Ca(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))B=!0,c=d,d.last=d.eq?Ka(f,null):f,d.fn(f,h===n?f:h,O),5>u&&(A=4-u,M[A]||(M[A]=[]),P=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,P+="; newVal: "+oa(f)+"; oldVal: "+
oa(h),M[A].push(P));else if(d===c){B=!1;break a}}catch(D){q.$$phase=null,e(D)}if(!(l=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(l=O.$$nextSibling);)O=O.$parent}while(O=l);if((B||m.length)&&!u--)throw q.$$phase=null,a("infdig",b,oa(M));}while(B||m.length);for(q.$$phase=null;r.length;)try{r.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=v,this.$on=this.$watch=function(){return v})}},
$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=Ta(c,b);-1!==d&&(c[d]=null,l(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(wa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;
f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(wa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;
return q}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!R||8<=R)if(f=xa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ee(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(kb(b))return RegExp("^"+b.source+"$");throw za("imatcher");}function Fc(b){var a=[];D(b)&&r(b,function(b){a.push(Ee(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Fc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Fc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw za("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw za("icontext",
a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===u||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=xa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw za("insecurl",
d.toString());}if(c===fa.HTML)return e(d);throw za("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw za("iequirks");var e=ha(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(fa,function(a,b){var c=x(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,b)};e[ab("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,l=!1,n=!1;if(m){for(var q in m)if(l=k.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in m&&"webkit");l=!!("transition"in m||h+"Transition"in m);n=!!("animation"in m||h+"Animation"in m);!d||l&&n||(l=G(f.body.style.webkitTransition),n=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==R)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:R,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,k){var m=c.defer(),l=m.promise,n=D(k)&&!k;h=a.defer(function(){try{m.resolve(e())}catch(a){m.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=m;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;R&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=G(b)?xa(b):b;return b.protocol===Gc.protocol&&b.host===Gc.host}function ee(){this.$get=aa(W)}function kc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Hc);a("date",Ic);a("filter",Fe);a("json",Ge);a("limitTo",He);a("lowercase",Ie);a("number",Jc);a("orderBy",Kc);a("uppercase",Je)}function Fe(){return function(b,
a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Xa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&lb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Hc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return Lc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Lc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Lc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],m=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(h=g,m=!0)}if(m)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Mc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Mc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,m=0;m<l;m++)0===(l-m)%q&&0!==m&&(h+=c),h+=g.charAt(m);for(m=l;m<g.length;m++)0===(g.length-m)%n&&0!==m&&(h+=c),h+=g.charAt(m);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,
e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Vb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=La(a?"SHORT"+b:b);return d[f][e]}}function Ic(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?
a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=Ke.test(c)?U(c):a(c));jb(c)&&(c=new Date(c));
if(!va(c))return c;for(;e;)(k=Le.exec(e))?(g=g.concat(wa.call(k,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Me[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ge(){return function(b){return oa(b,!0)}}function He(){return function(b,a){if(!L(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Kc(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(va(a)&&va(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=Uc(c,function(a){var c=!1,d=a||ga;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var m=d();return e(function(a,b){return f(a[m],b[m])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return wa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Aa(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Nc(b,a,c,d){function e(a,c){c=c?"-"+nb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||
yb,h=0,k=f.$error={},m=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$addControl=function(a){Ea(a.$name,"input");m.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(k,function(b,c){f.$setValidity(c,!0,a)});Ua(m,a)};f.$setValidity=function(a,b,c){var d=k[a];if(b)d&&(Ua(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),k[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||
e(b);if(d){if(-1!=Ta(d,c))return}else k[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Ra);f.$dirty=!1;f.$pristine=!0;r(m,function(a){a.$setPristine()})}}function ua(b,a,c,d){b.$setValidity(a,c);return c?d:u}function Oc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ne(b,
a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Oc(e,d)||!Oc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Oe),h=a[0].placeholder,k={},m=x(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(R&&"input"===(e||k).type&&a[0].placeholder!==h)h=a[0].placeholder;else if("password"!==m&&Wa(c.ngTrim||"T")&&
(f=$(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var q,p=function(){q||(q=f.defer(function(){n();q=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?
(s=RegExp(e[1],e[2]),e=function(a){return ua(d,"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw z("ngPattern")("noregexp",s,e,ia(a));return ua(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return ua(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var w=U(c.ngMaxlength);e=function(a){return ua(d,"maxlength",d.$isEmpty(a)||
a.length<=w,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(G(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<
b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(b){if(!0===a||f.$index%2===a){var m=e(b||[]);if(!l){var p=k(m,1);h.$addClass(p)}else if(!Ca(b,l)){var s=e(l),p=d(m,s),m=d(s,m),m=k(m,-1),p=k(p,1);0===p.length?c.removeClass(g,m):0===m.length?c.addClass(g,p):c.setClass(g,p,m)}}l=ha(b)}var l;f.$watch(h[b],m,!0);h.$observe("class",function(a){m(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));
g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Oe="validity",x=function(b){return G(b)?b.toLowerCase():b},lb=Object.prototype.hasOwnProperty,La=function(b){return G(b)?b.toUpperCase():b},R,A,Fa,wa=[].slice,Pe=[].push,Ba=Object.prototype.toString,Va=z("ng"),Xa=W.angular||(W.angular={}),$a,Pa,na=["0","0","0"];R=U((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(R)&&(R=U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));v.$inject=[];ga.$inject=[];var L=
function(){return N(Array.isArray)?Array.isArray:function(b){return"[object Array]"===Ba.call(b)}}(),$=function(){return String.prototype.trim?function(b){return G(b)?b.trim():b}:function(b){return G(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Pa=9>R?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?La(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Za=function(){if(D(Za.isActive_))return Za.isActive_;var b=!(!X.querySelector("[ng-csp]")&&
!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},Xc=/[A-Z]/g,$c={full:"1.2.28",major:1,minor:2,dot:28,codeName:"finnish-disembarkation"};S.expando="ng339";var cb=S.cache={},me=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},bb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||
{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Hb=z("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=
da.caption=da.thead;da.th=da.td;var Oa=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Pe,sort:[].sort,splice:[].splice},rb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){rb[x(b)]=b});
var pc={};r("input select option textarea button form details".split(" "),function(b){pc[La(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:qb,scope:function(b){return A.data(b,"$scope")||qb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:mc,injector:function(b){return qb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,
a,c){a=ab(a);if(D(c))b.style[a]=c;else{var d;8>=R&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=R&&(d=""===d?u:d);return d}},attr:function(b,a,c){var d=x(a);if(rb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:u;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,
d){var e=a[b.nodeType];if(F(d))return e?b[e]:"";b[e]=d}var a=[];9>R?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(F(a)){if("SELECT"===Pa(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ma(d[c]);b.innerHTML=a},empty:nc},function(b,a){S.prototype[a]=function(a,d){var e,
f,g=this.length;if(b!==nc&&(2==b.length&&b!==Nb&&b!==mc?a:d)===u){if(T(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ma,on:function a(c,d,e,f){if(D(f))throw Hb("onargs");var g=pa(c,"events"),h=pa(c,"handle");g||pa(c,"events",g={});h||pa(c,"handle",h=ne(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==
d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},
off:lc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ma(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,
c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ma(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:pb,removeClass:ob,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?pb:ob)(a,c)})},parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(pa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:v,type:e,target:a},
c.type&&(e=E(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)F(g)?(g=a(this[h],c,e,f),D(g)&&(g=A(g))):Jb(g,a(this[h],c,e,f));return D(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var pe=
/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,eb=z("$injector"),Qe=z("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qe("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",
function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){pb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){pb(a,c);ob(a,g)});h&&d(h)},enabled:v}}]}],ja=z("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];
var we=/^(x[\:\-_]|data[\:\-_])/i,wc=z("$interpolate"),Re=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ze={http:80,https:443,ftp:21},Sb=z("$location");Ac.prototype=Tb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=Re.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Bc("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||jb(a))a=a.toString(),this.$$search=cc(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=z("$parse"),Ec=
{},ya,Se=Function.prototype.call,Te=Function.prototype.apply,Pc=Function.prototype.bind,hb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^
e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ue={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=u;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=hb[this.ch],e=hb[a],f=hb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+
1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},
throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-
1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;
else break}d={index:d,text:c};if(hb.hasOwnProperty(c))d.fn=hb[c],d.literal=!0,d.constant=!0;else{var k=Dc(c,this.options,this.text);d.fn=E(function(a,c){return k(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ue[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var gb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};gb.ZERO=E(function(){return 0},{constant:!0});gb.prototype={constructor:gb,
parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=
!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===
a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var k=0;k<d.length;k++)h.push(d[k](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),k;ka(h,c.text);if(!g)return u;(g=ma(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&
(k=g,"$$v"in g||(k.$$v=u,k.then(function(a){k.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=ka(d(e,g),c.text);(g=ma(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],k=c?c(f,g):f,m=0;m<d.length;m++)h.push(ma(d[m](f,g),e.text));m=a(f,g,k)||v;ma(k,e.text);var l=e.text;if(m){if(m.constructor===m)throw la("isecfn",
l);if(m===Se||m===Te||Pc&&m===Pc)throw la("isecff",l);}h=m.apply?m.apply(k,h):m(h[0],h[1],h[2],h[3],h[4]);return ma(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},k=0;k<a.length;k++){var m=a[k];e[m.key]=m.value(c,d)}return e},{literal:!0,constant:c})}};var Ce={},Be={},za=z("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Gc=xa(W.location.href,!0);kc.$inject=["$provide"];Hc.$inject=["$locale"];Jc.$inject=["$locale"];
var Mc=".",Me={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Vb(Math[0<
a?"floor":"ceil"](a/60),2)+Vb(Math.abs(a%60),2))}},Le=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ke=/^\-?\d+$/;Ic.$inject=["$locale"];var Ie=aa(x),Je=aa(La);Kc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=R&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(rb,function(a,c){if("multiple"!=a){var d=qa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=qa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),R&&g&&e.prop(g,f[h])):"href"===
a&&f.$set(h,null)})}}}});var yb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Nc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Nc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){bb(e[0],"submit",h)},0,!1)})}var k=e.parent().controller("form"),
m=f.name||f.ngForm;m&&ub(a,m,g,m);if(k)e.on("$destroy",function(){k.$removeControl(g);m&&ub(a,m,u,m);E(g,yb)})}}}}}]},dd=Qc(),qd=Qc(!0),Ve=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,We=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Xe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Xe.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return u});Ne(e,"number",Ye,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ua(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ua(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ua(e,"number",e.$isEmpty(a)||
jb(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"url",e.$isEmpty(a)||Ve.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"email",e.$isEmpty(a)||We.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){F(d.name)&&c.attr("name",ib());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;G(f)||(f=!0);G(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:v,button:v,submit:v,reset:v,file:v},Ye=["badInput"],hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Rc[x(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Ra="ng-pristine",zb="ng-dirty",Ze=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+nb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var k=f(d.ngModel),m=k.assign;if(!m)throw z("ngModel")("nonassign",d.ngModel,ia(e));this.$render=v;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,q=this.$error={};e.addClass(Ra);h(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Ra)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=k(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=
c,p.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Ze,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):u});e.$isEmpty=function(a){return!a||!a.length}}}},$e=/^(true|false|\d+)$/,Id=function(){return{priority:100,
compile:function(a,c){return $e.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=Aa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==u?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var h=c(g.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){f.html(a.getTrustedHtml(h(d))||"")})}}}}],ld=Wb("",!0),nd=Wb("Odd",0),md=Wb("Even",1),od=Aa({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={},af={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=qa("ng-"+a);jc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var h=d(g[c],!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};af[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,m;c.$watch(e.ngIf,function(f){Wa(f)?k||(k=c.$new(),g(k,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.remove(),m=null),k&&(k.$destroy(),k=null),h&&(m=Eb(h.clone),a.leave(m,function(){m=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Xa.noop,compile:function(g,h){var k=h.ngInclude||h.src,m=h.onload||"",l=h.autoscroll;return function(g,h,p,r,J){var w=0,t,y,u,B=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);
u&&(e.leave(u,function(){y=null}),y=u,u=null)};g.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!D(l)||l&&!g.$eval(l)||d()},p=++w;f?(a.get(f,{cache:c}).success(function(a){if(p===w){var c=g.$new();r.template=a;a=J(c,function(a){B();e.enter(a,null,h,k)});t=c;u=a;t.$emit("$includeContentLoaded");g.$eval(m)}}).error(function(){p===w&&B()}),g.$emit("$includeContentRequested")):(B(),r.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=Aa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=Aa({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),m=g.offset||0,l=e.$eval(k)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+m+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-m));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,k){var m=g.ngRepeat,l=m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,u,w,t={$id:Na};if(!l)throw d("iexp",
m);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){w&&(t[w]=a);t[u]=c;t.$index=d;return n(e,t)}):(p=function(a,c){return Na(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);u=l[3]||l[1];w=l[2];var y={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},D,C,I,x,G,v,z,F=[];if(Sa(a))v=a,G=q||p;else{G=q||s;v=[];for(I in a)a.hasOwnProperty(I)&&"$"!=I.charAt(0)&&v.push(I);v.sort()}D=v.length;h=F.length=v.length;for(g=0;g<h;g++)if(I=a===
v?g:v[g],x=a[I],n=G(I,x,g),Ea(n,"`track by` id"),y.hasOwnProperty(n))z=y[n],delete y[n],t[n]=z,F[g]=z;else{if(t.hasOwnProperty(n))throw r(F,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",m,n,oa(x));F[g]={id:n};t[n]=!1}for(I in y)y.hasOwnProperty(I)&&(z=y[I],g=Eb(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(h=v.length;g<h;g++){I=a===v?g:v[g];x=a[I];z=F[g];F[g-1]&&(l=F[g-1].clone[F[g-1].clone.length-1]);if(z.scope){C=z.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
z.clone[0]!=n&&c.move(Eb(z.clone),null,A(l));l=z.clone[z.clone.length-1]}else C=e.$new();C[u]=x;w&&(C[w]=I);C.$index=g;C.$first=0===g;C.$last=g===D-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));z.scope||k(C,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+m+" ");c.enter(a,null,A(l));l=a;z.scope=C;z.clone=a;t[z.id]=z})}y=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Wa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Wa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=Aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],m=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q;n=0;for(q=k.length;n<q;++n)k[n].remove();n=k.length=0;for(q=
m.length;n<q;++n){var p=h[n];m[n].$destroy();k[n]=p;a.leave(p,function(){k.splice(n,1)})}h.length=0;m.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=
Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ed=Aa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],bf=z("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,m={},l=e,n;k.databound=d.ngModel;k.init=function(a,c,d){l=a;n=d};k.addOption=function(c){Ea(c,'"option value"');m[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
k.removeOption=function(a){this.hasOption(a)&&(delete m[a],l.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return m.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=v})}],link:function(e,g,h,k){function m(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);r(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){Ca(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
s,u,v;s=g.$modelValue;u=A(e)||[];var F=n?Xb(u):u,G,Q,C;Q={};C=!1;if(p)if(k=g.$modelValue,w&&L(k))for(C=new db([]),d={},v=0;v<k.length;v++)d[m]=k[v],C.put(w(e,d),k[v]);else C=new db(k);v=C;var E,K;for(C=0;G=F.length,C<G;C++){k=C;if(n){k=F[C];if("$"===k.charAt(0))continue;Q[n]=k}Q[m]=u[k];d=r(e,Q)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=D(v.remove(w?w(e,Q):x(e,Q))):(w?(d={},d[m]=s,d=w(e,d)===w(e,Q)):d=s===x(e,Q),v=v||d);E=l(e,Q);E=D(E)?E:"";k.push({id:w?w(e,Q):n?F[C]:C,label:E,selected:d})}p||(z||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));Q=0;for(F=c.length;Q<F;Q++){d=c[Q];k=a[d];B.length<=Q?(s={element:y.clone().attr("label",d),label:k.label},u=[s],B.push(u),f.append(s.element)):(u=B[Q],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;C=0;for(G=k.length;C<G;C++)d=k[C],(v=u[C+1])?(E=v.element,v.label!==d.label&&(E.text(v.label=d.label),E.prop("label",v.label)),v.id!==d.id&&E.val(v.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",
v.selected=d.selected),R&&E.prop("selected",v.selected))):(""===d.id&&z?K=z:(K=t.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),u.push({element:K,label:d.label,id:d.id,selected:d.selected}),q.addOption(d.label,K),E?E.after(K):s.element.append(K),E=K);for(C++;u.length>C;)d=u.pop(),q.removeOption(d.label),d.element.remove()}for(;B.length>Q;)B.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw bf("iexp",s,ia(f));var l=c(k[2]||k[1]),
m=k[4]||k[6],n=k[5],r=c(k[3]||""),x=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},k,l,q,r,s,t,v;if(p)for(l=[],r=0,t=B.length;r<t;r++)for(a=B[r],q=1,s=a.length;q<s;q++){if((k=a[q].element)[0].selected){k=k.val();n&&(d[n]=k);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=k);v++);else d[m]=c[k];l.push(x(e,d))}}else if(k=f.val(),"?"==k)l=u;else if(""===
k)l=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==k){l=x(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=x(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(A,h);e.$watchCollection(function(){var a={},c=A(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},h);p&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];var p=h.multiple,s=h.ngOptions,z=!1,w,t=A(X.createElement("option")),y=A(X.createElement("optgroup")),
x=t.clone();h=0;for(var B=g.children(),v=B.length;h<v;h++)if(""===B[h].value){w=z=B.eq(h);break}q.init(k,z,x);p&&(k.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,k):p?l(e,g,k):m(e,g,k,q)}}}}],hd=["$interpolate",function(a){var c={addOption:v,removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var m=d.parent(),l=m.data("$selectController")||m.parent().data("$selectController");l&&l.databound?
d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Fa=W.jQuery)&&Fa.fn.on?(A=Fa,E(Fa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",
!1,!1,!1),Gb("html",!1,!1,!0)):A=S,Xa.element=A,Zc(Xa),A(X).ready(function(){Wc(X,dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=b;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var h={};this.when=function(a,c){h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=
function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function l(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";k=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),k=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),k=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),k=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),k=!1):(h+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,k,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(k,function(c,f){var m=
g.lowercase(f),k="img"===a&&"src"===m||"background"===m;!0!==Q[m]||!0===E[m]&&!d(c,k)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=l("area,br,col,hr,img,wbr");q=l("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=l("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,l("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,l("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=l("script,style"),D=g.extend({},x,u,v,w),E=l("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,l("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function k(a){a&&m.push(F(a))}function f(a,c){m.push("<a ");g.isDefined(b)&&(m.push('target="'),m.push(b),m.push('" '));m.push('href="',a.replace('"',"&quot;"),'">');k(c);m.push("</a>")}
if(!e)return e;for(var n,h=e,m=[],l,p;n=h.match(d);)l=n[0],n[2]==n[3]&&(l="mailto:"+l),p=n.index,k(h.substr(0,p)),f(l,n[0].replace(c,"")),h=h.substring(p+n[0].length);k(h);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/**
 * @license
 * Lo-Dash 3.0.0-pre (Custom Build) lodash.com/license | Underscore.js 1.6.0 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=Array(e);++r<e;)u[r]=n[t[r]];return u}function t(n,t){if(n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return 0}function r(n,t,r){r=(r||0)-1;for(var e=n?n.length:0;++r<e;)if(n[r]===t)return r;return-1}function e(n,t){return n.has(t)?0:-1}function u(n){return n.charCodeAt(0)}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r
}function f(n,r){return t(n.a,r.a)||n.b-r.b}function a(n,r){for(var e=-1,u=n.a,o=r.a,i=u.length;++e<i;){var f=t(u[e],o[e]);if(f)return f}return n.b-r.b}function c(n){return function(t){for(var r=-1,e=(t=null!=t&&(t+"").replace(V,l).match(H))?t.length:0,u="";++r<e;)u=n(u,t[r],r,t);return u}}function l(n){return Ot[n]}function p(n){return xt[n]}function s(n){return"\\"+Rt[n]}function h(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n)
}function g(n){for(var t=-1,r=n.length;++t<r&&h(n.charCodeAt(t)););return t}function v(n){for(var t=n.length;t--&&h(n.charCodeAt(t)););return t}function y(n){return Et[n]}function d(l){function h(n){if(n&&typeof n=="object"){if(n instanceof V)return n;!Cu(n)&&tu.call(n,"__wrapped__")&&(n=n.__wrapped__)}return new V(n)}function V(n,t){this.__chain__=!!t,this.__wrapped__=n}function H(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n}function xt(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;
return true}function Et(n,t){for(var r=-1,e=n.length,u=Ce(e);++r<e;)u[r]=t(n[r],r,n);return u}function Ot(n,t){for(var r=-1,e=n.length,u=[];++r<e;){var o=n[r];t(o,r,n)&&u.push(o)}return u}function It(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Rt(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function St(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function Ct(n,t){return typeof n=="undefined"?t:n}function Tt(n,t,r,e){return typeof n!="undefined"&&tu.call(e,r)?n:t
}function Ut(n,t,r){for(var e=-1,u=Uu(t),o=u.length;++e<o;){var i=u[e];n[i]=r?r(n[i],t[i],i,n,t):t[i]}return n}function Wt(n,t,r){var e=typeof n;if("function"==e){if(typeof t=="undefined")return n;if(e=n[I],typeof e=="undefined"&&(ju.funcNames&&(e=!n.name),e=e||!ju.funcDecomp,!e)){var u=Ze.call(n);ju.funcNames||(e=!P.test(u)),e||(e=X.test(u)||Ar(n),xu(n,e))}if(false===e||true!==e&&e[1]&b)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)
};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}return null==n?Oe:"object"==e?Ie(n):Se(n)}function Nt(n,t,r,e,u){var o=r?r(n):m;if(typeof o!="undefined")return o;var i=Cu(n),f=!t;if(i){if(o=f?Wr(n):n.constructor(n.length),"string"==typeof n[0]&&tu.call(n,"index")&&(o.index=n.index,o.input=n.input),f)return o}else{if(!ve(n))return n;var a=Ve.call(n);if(!wt[a])return n;var c=a==tt,l=!c&&a==ft;
if(f&&(c||l)&&(o=Ut({},n),l))return o;var p=n.constructor;if(a!=ft||ge(p)&&p instanceof p||(p=Le),t&&(c||l))o=new p;else switch(a){case lt:return Er(n);case et:case ut:return new p(+n);case pt:case st:case ht:case gt:case vt:case yt:case dt:case mt:case _t:return i=n.buffer,new p(t?Er(i):i,n.byteOffset,n.length);case it:case ct:return new p(n);case at:return o=p(n.source,q.exec(n)),o.lastIndex=n.lastIndex,o}}if(c&&(o.length=n.length),f)return o;for(e||(e=[]),u||(u=[]),p=e.length;p--;)if(e[p]==n)return u[p];
return e.push(n),u.push(o),(i?H:Xt)(n,function(n,i){var f=r?r(n,i):m;o[i]=typeof f=="undefined"?Nt(n,t,null,e,u):f}),o}function Lt(n){return ve(n)?pu(n):{}}function $t(n){function t(){for(var n=arguments.length,d=n,m=Ce(n);d--;)m[d]=arguments[d];if(f&&(m=pr(f,e,m)),a&&(m=sr(a,c,m)),s||h){var d=t.placeholder,_=Or(m,d),n=n-_.length;if(n<o)return r|=s?E:O,r&=~(s?O:E),g||(r&=~(b|w)),n=[u,r,vu(o-n,0),i,null,null],n[s?4:6]=m,n[s?5:7]=_,m=$t(n),m.placeholder=d,m}return d=l?i:this,p&&(u=d[y]),(this instanceof t?v||yr(u):u).apply(d,m)
}var r=n[1];if(r==b)return xu(vr(n),n);var e=n[5];if((r==E||r==(b|E))&&!e.length)return xu(mr(n),n);var u=n[0],o=n[2],i=n[3],f=n[4],a=n[6],c=n[7],l=r&b,p=r&w,s=r&j,h=r&A,g=r&x,v=!p&&yr(u),y=u;return xu(t,n)}function Bt(n,t,r){return typeof r!="number"&&(r=+r||(n?n.length:0)),_r([n,t,r])}function Dt(n,t){var u=n?n.length:0;if(!u)return[];var o=-1,i=wr(),f=i==r,a=f&&Au&&t&&200<=t.length,f=f&&!a,c=[],l=t?t.length:0;a&&(i=e,t=Au(t));n:for(;++o<u;)if(a=n[o],f){for(var p=l;p--;)if(t[p]===a)continue n;c.push(a)
}else 0>i(t,a)&&c.push(a);return c}function Mt(n,t){var r=n?n.length:0;if(typeof r!="number"||-1>=r||r>S)return Xt(n,t);for(var e=-1,u=kr(n);++e<r&&false!==t(u[e],e,u););return n}function zt(n,t){var r=n?n.length:0;if(typeof r!="number"||-1>=r||r>S)return Gt(n,t);for(var e=kr(n);r--&&false!==t(e[r],r,e););return n}function qt(n,t){var r=true;return Mt(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Pt(n,t){var r=[];return Mt(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function Zt(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0
}),u}function Kt(n,t,r,e){e=(e||0)-1;for(var u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(f&&typeof f=="object"&&typeof f.length=="number"&&(Cu(f)||pe(f))){t&&(f=Kt(f,t,r));var a=-1,c=f.length;for(i.length+=c;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}function Vt(n,t,r){var e=-1;r=r(n);for(var u=r.length;++e<u;){var o=r[e];if(false===t(n[o],o,n))break}return n}function Yt(n,t,r){r=r(n);for(var e=r.length;e--;){var u=r[e];if(false===t(n[u],u,n))break}return n}function Jt(n,t){Vt(n,t,_e)}function Xt(n,t){return Vt(n,t,Uu)
}function Gt(n,t){return Yt(n,t,Uu)}function Ht(n,t){for(var r=-1,e=t(n),u=e.length,o=[];++r<u;){var i=e[r];ge(n[i])&&o.push(i)}return o}function Qt(n,t,r,e,u,o){var i=r&&!u?r(n,t):m;if(typeof i!="undefined")return!!i;if(n===t)return 0!==n||1/n==1/t;var f=typeof n,a=typeof t;if(n===n&&(null==n||null==t||"function"!=f&&"object"!=f&&"function"!=a&&"object"!=a))return false;var c=Ve.call(n),l=c==tt,f=Ve.call(t),i=f==tt;if(l&&(c=ft),i&&(f=ft),c!=f)return false;if(a=bt[c],f=c==ot,a){var l=n.length,p=t.length;
if(l!=p&&(!e||p<=l))return false}else{if(!f&&c!=ft){switch(c){case et:case ut:return+n==+t;case it:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case at:case ct:return n==Be(t)}return false}var s=tu.call(n,"__wrapped__"),c=tu.call(t,"__wrapped__");if(s||c)return Qt(s?n.__wrapped__:n,c?t.__wrapped__:t,r,e,u,o);if(s=l?Le:n.constructor,c=i?Le:t.constructor,f){if(s.prototype.name!=c.prototype.name)return false}else{var p=!l&&tu.call(n,"constructor"),h=!i&&tu.call(t,"constructor");if(p!=h||!(p||s==c||ge(s)&&s instanceof s&&ge(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return false
}if(s=f?["message","name"]:Uu(n),c=f?s:Uu(t),l&&s.push("length"),i&&c.push("length"),l=s.length,p=c.length,l!=p&&!e)return false}for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n)return o[c]==t;if(u.push(n),o.push(t),i=true,a)for(;i&&++c<l;)if(a=n[c],e)for(f=p;f--&&!(i=Qt(a,t[f],r,e,u,o)););else h=t[c],i=r?r(a,h,c):m,typeof i=="undefined"&&(i=Qt(a,h,r,e,u,o));else for(;i&&++c<l;)p=s[c],(i=f||tu.call(t,p))&&(a=n[p],h=t[p],i=r?r(a,h,p):m,typeof i=="undefined"&&(i=Qt(a,h,r,e,u,o)));return u.pop(),o.pop(),!!i
}function nr(n,t,r){var e=-1,u=typeof t=="function",o=n?n.length:0,i=[];return typeof o=="number"&&-1<o&&o<=S&&(i.length=o),Mt(n,function(n){var o=u?t:null!=n&&n[t];i[++e]=o?o.apply(n,r):m}),i}function tr(n,t){var r=[];return Mt(n,function(n,e,u){r.push(t(n,e,u))}),r}function rr(n,t,r,e,u){var o=jr(t);return(o?H:Xt)(t,function(t,i,f){var a=t&&jr(t),c=t&&Tu(t),l=n[i];if(a||c){for(e||(e=[]),u||(u=[]),c=e.length;c--;)if(e[c]==t)return void(n[i]=u[c]);f=r?r(l,t,i,n,f):m,(c=typeof f=="undefined")&&(f=a?Cu(l)?l:[]:Tu(l)?l:{}),e.push(t),u.push(f),c&&rr(f,t,r,e,u),n[i]=f
}else f=r?r(l,t,i,n,f):m,typeof f=="undefined"&&(f=t),(o||typeof f!="undefined")&&(n[i]=f)}),n}function er(n,t,r,e,u){if(n)var o=n[I],i=o?o[2]:n.length,i=i-r.length;return o=t&E,n=[n,t,i,u,null,null],n[o?4:6]=r,n[o?5:7]=e,_r(n)}function ur(n,t){var r={};if(typeof t=="function")return Jt(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r;for(var e=-1,u=t.length;++e<u;){var o=t[e];o in n&&(r[o]=n[o])}return r}function or(n,t){return n+Qe(bu()*(t-n+1))}function ir(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)
}),r}function fr(n,t){var r;return Mt(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function ar(n,t,r,e){var u=0,o=n?n.length:u;t=r(t);for(var i=typeof t=="number"||null!=t&&ge(t.valueOf)&&"number"==typeof t.valueOf();u<o;){var f=u+o>>>1,a=r(n[f]),c=e?a<=t:a<t;i&&typeof a!="undefined"&&(a=+a,c=a!=a||c),c?u=f+1:o=f}return o}function cr(n,t){var u=-1,o=wr(),i=n.length,f=o==r,a=f&&Au&&200<=i,f=f&&!a,c=[];if(a)var l=Au(),o=e;else l=t?[]:c;n:for(;++u<i;){var p=n[u],s=t?t(p,u,n):p;if(f){for(var h=l.length;h--;)if(l[h]===s)continue n;
t&&l.push(s),c.push(p)}else 0>o(l,s)&&((t||a)&&l.push(s),c.push(p))}return c}function lr(n,t){for(var r=-1,e=t(n),u=e.length,o=Ce(u);++r<u;)o[r]=n[e[r]];return o}function pr(n,t,r){for(var e=t.length,u=-1,o=vu(r.length-e,0),i=-1,f=n.length,a=Ce(o+f);++i<f;)a[i]=n[i];for(;++u<e;)a[t[u]]=r[u];for(;o--;)a[i++]=r[u++];return a}function sr(n,t,r){for(var e=-1,u=t.length,o=-1,i=vu(r.length-u,0),f=-1,a=n.length,c=Ce(i+a);++o<i;)c[o]=r[o];for(i=o;++f<a;)c[i+f]=n[f];for(;++e<u;)c[i+t[e]]=r[o++];return c}function hr(n,t){return function(r,e,u){var o=t?t():{};
if(e=br(e,u,3),Cu(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Mt(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function gr(n){return function(t){var r=arguments,e=r.length;if(null==t||2>e)return t;var u=typeof r[2];if("number"!=u&&"string"!=u||!r[3]||r[3][r[2]]!==r[1]||(e=2),3<e&&"function"==typeof r[e-2])var o=Wt(r[--e-1],r[e--],5);else 2<e&&"function"==typeof r[e-1]&&(o=r[--e]);for(u=0;++u<e;)n(t,r[u],o);return t}}function vr(n){function t(){return(this instanceof t?u:r).apply(e,arguments)
}var r=n[0],e=n[3],u=yr(r);return t}function yr(n){return function(){var t=Lt(n.prototype),r=n.apply(t,arguments);return ve(r)?r:t}}function dr(n,t,r){return n=n.length,t=+t,n<t&&hu(t)?(t-=n,r=null==r?" ":Be(r),je(r,Ge(t/r.length)).slice(0,t)):""}function mr(n){function t(){for(var n=0,f=arguments.length,a=-1,c=u.length,l=Ce(f+c);++a<c;)l[a]=u[a];for(;f--;)l[a++]=arguments[n++];return(this instanceof t?i:r).apply(o?e:this,l)}var r=n[0],e=n[3],u=n[4],o=n[1]&b,i=yr(r);return t}function _r(n){var t=n[0],r=n[1],e=r&b,u=r&w,o=r&E,i=r&O;
if(!u&&!ge(t))throw new De(R);var f=n[2],a=n[4],c=n[6];o&&!a.length&&(o=false,n[1]=r&=~E,n[4]=n[5]=a=null),i&&!c.length&&(i=false,n[1]=r&=~O,n[6]=n[7]=c=null);var l=!u&&t[I];return l&&true!==l?(l=Wr(l),l[4]&&(l[4]=Wr(l[4]),l[5]=Wr(l[5])),l[6]&&(l[6]=Wr(l[6]),l[7]=Wr(l[7])),typeof f=="number"&&(l[2]=f),t=l[1]&b,e&&!t&&(l[3]=n[3]),!e&&t&&(r|=x),o&&((e=l[4])&&(e=pr(e,l[5],a)),l[4]=e||a,l[5]=e?Or(e,C):n[5]),i&&((i=l[6])&&(i=sr(i,l[7],c)),l[6]=i||c,l[7]=i?Or(i,C):n[7]),l[1]|=r,_r(l)):(null==f&&(f=u?0:t.length),n[2]=vu(f,0),$t(n))
}function br(n,t,r){var e=h.callback||Ee,e=e===Ee?Wt:e;return arguments.length?e(n,t,r):e}function wr(n,t,e){var u=h.indexOf||Tr,u=u===Tr?r:u;return n?u(n,t,e):u}function jr(n){return n&&typeof n=="object"&&typeof n.length=="number"&&bt[Ve.call(n)]||false}function Ar(n){var t=typeof n;return"function"==t?Ye.test(Ze.call(n)):n&&"object"==t&&K.test(Ve.call(n))||false}function xr(n){return n===n&&(0===n?0<1/n:!ve(n))}function Er(n){return Xe.call(n,0)}function Or(n,t){for(var r=-1,e=n.length,u=[];++r<e;)n[r]===t&&(n[r]=C,u.push(r));
return u}function Ir(n){var t,r;return n&&Ve.call(n)==ft&&(tu.call(n,"constructor")||(t=n.constructor,!ge(t)||t instanceof t))?(Jt(n,function(n,t){r=t}),typeof r=="undefined"||tu.call(n,r)):false}function Rr(n){for(var t,r=-1,e=_e(n),u=e.length,o=u&&n.length,i=o-1,f=[],o=typeof o=="number"&&0<o&&(Cu(n)||ju.nonEnumArgs&&pe(n));++r<u;){var a=e[r];(o&&(t=+a,-1<t&&t<=i&&0==t%1)||tu.call(n,a))&&f.push(a)}return f}function kr(n){if(null==n)return[];var t=n.length;return typeof t=="number"&&-1<t&&t<=S?n=Sr(n):be(n)
}function Sr(n){return ve(n)?n:Le(n)}function Cr(n,t,r){var e=-1,u=n?n.length:0;for(t=br(t,r,3);++e<u;)if(t(n[e],e,n))return e;return-1}function Fr(n){return n?n[0]:m}function Tr(n,t,e){var u=n?n.length:0;if(typeof e=="number")e=0>e?vu(u+e,0):e||0;else if(e)return e=Nr(n,t),u&&n[e]===t?e:-1;return r(n,t,e)}function Ur(n){return Wr(n,1)}function Wr(n,t,r){var e=-1,u=n?n.length:0;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=typeof r=="undefined"||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t,r=Ce(u);++e<u;)r[e]=n[e+t];
return r}function Nr(n,t,r,e){return r=null==r?Oe:br(r,e,1),ar(n,t,r)}function Lr(n,t,r,e){return r=null==r?Oe:br(r,e,1),ar(n,t,r,true)}function $r(n,t,e,u){if(!n||!n.length)return[];var o=typeof t;if("boolean"!=o&&null!=t&&(u=e,e=t,t=false,"number"!=o&&"string"!=o||!u||u[e]!==n||(e=null)),null!=e&&(e=br(e,u,3)),t&&wr()==r){t=e;var i;for(e=-1,u=n.length,o=[];++e<u;){var f=n[e],a=t?t(f,e,n):f;e&&i===a||(i=a,o.push(f))}n=o}else n=cr(n,e);return n}function Br(n){for(var t=-1,r=ve(r=Jr(n,"length"))&&r.length||0,e=Ce(r);++t<r;)e[t]=Xr(n,t);
return e}function Dr(n,t){var r=-1,e=n?n.length:0,u={};for(t||!e||Cu(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Mr(){return this.__wrapped__}function zr(n,t,r){var e=n?n.length:0;return typeof e=="number"&&-1<e&&e<=S||(n=be(n),e=n.length),r=typeof r=="number"?0>r?vu(e+r,0):r||0:0,typeof n=="string"||!Cu(n)&&me(n)?r<e?lu?lu.call(n,t,r):-1<n.indexOf(t,r):false:-1<wr(n,t,r)}function qr(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=br(t,r,3)),(Cu(n)?xt:qt)(n,t)
}function Pr(n,t,r){return t=br(t,r,3),(Cu(n)?Ot:Pt)(n,t)}function Zr(n,t,r){return Cu(n)?(t=Cr(n,t,r),-1<t?n[t]:m):(t=br(t,r,3),Zt(n,t,Mt))}function Kr(n,t,r){return typeof t=="function"&&typeof r=="undefined"&&Cu(n)?H(n,t):Mt(n,Wt(t,r,3))}function Vr(n,t,r){if(typeof t=="function"&&typeof r=="undefined"&&Cu(n))for(r=n.length;r--&&false!==t(n[r],r,n););else n=zt(n,Wt(t,r,3));return n}function Yr(n,t,r){return t=br(t,r,3),(Cu(n)?Et:tr)(n,t)}function Jr(n,t,r){var e=-1/0,o=e,i=typeof t;"number"!=i&&"string"!=i||!r||r[t]!==n||(t=null);
var i=null==t,f=!(i&&Cu(n))&&me(n);if(i&&!f)for(r=-1,n=kr(n),i=n.length;++r<i;)f=n[r],f>o&&(o=f);else t=i&&f?u:br(t,r,3),Mt(n,function(n,r,u){r=t(n,r,u),(r>e||-1/0===r&&r===o)&&(e=r,o=n)});return o}function Xr(n,t){return Yr(n,Se(t))}function Gr(n,t,r,e){return(Cu(n)?It:ir)(n,br(t,e,4),r,3>arguments.length,Mt)}function Hr(n,t,r,e){return(Cu(n)?Rt:ir)(n,br(t,e,4),r,3>arguments.length,zt)}function Qr(n){n=kr(n);for(var t=-1,r=n.length,e=Ce(r);++t<r;){var u=or(0,t);t!=u&&(e[t]=e[u]),e[u]=n[t]}return e
}function ne(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=br(t,r,3)),(Cu(n)?St:fr)(n,t)}function te(n,t){var r;if(!ge(t))throw new De(R);return function(){return 0<--n?r=t.apply(this,arguments):t=null,r}}function re(n,t){if(3>arguments.length)return _r([n,b,null,t]);var r=Wr(arguments,2),e=Or(r,re.placeholder);return er(n,b|E,r,e,t)}function ee(n,t){var r=[t,b|w,null,n];if(2<arguments.length){var e=Wr(arguments,2);r.push(e,Or(e,ee.placeholder))}return _r(r)}function ue(n,t){var r=Bt(n,j,t);
return r.placeholder=ue.placeholder,r}function oe(n,t){var r=Bt(n,A,t);return r.placeholder=oe.placeholder,r}function ie(n,t,r){function e(){var r=t-(Bu()-c);0>=r||r>t?(f&&He(f),r=s,f=p=s=m,r&&(h=Bu(),a=n.apply(l,i),p||f||(i=l=null))):p=ou(e,r)}function u(){p&&He(p),f=p=s=m,(v||g!==t)&&(h=Bu(),a=n.apply(l,i),p||f||(i=l=null))}function o(){if(i=arguments,c=Bu(),l=this,s=v&&(p||!y),false===g)var r=y&&!p;else{f||y||(h=c);var o=g-(c-h),d=0>=o||o>g;d?(f&&(f=He(f)),h=c,a=n.apply(l,i)):f||(f=ou(u,o))}return d&&p?p=He(p):p||t===g||(p=ou(e,t)),r&&(d=true,a=n.apply(l,i)),!d||p||f||(i=l=null),a
}var i,f,a,c,l,p,s,h=0,g=false,v=true;if(!ge(n))throw new De(R);if(t=0>t?0:t,true===r)var y=true,v=false;else ve(r)&&(y=r.leading,g="maxWait"in r&&vu(+r.maxWait||0,t),v="trailing"in r?r.trailing:v);return o.cancel=function(){p&&He(p),f&&He(f),f=p=s=m},o}function fe(n){if(!ge(n))throw new De(R);return function(){return!n.apply(this,arguments)}}function ae(n){var t=Wr(arguments,1),r=Or(t,ae.placeholder);return er(n,E,t,r)}function ce(n){var t=Wr(arguments,1),r=Or(t,ce.placeholder);return er(n,O,t,r)}function le(n){return Ht(n,_e)
}function pe(n){return n&&typeof n=="object"&&typeof n.length=="number"&&Ve.call(n)==tt||false}function se(n){return n&&typeof n=="object"&&1===n.nodeType&&-1<Ve.call(n).indexOf("Element")||false}function he(n){return n&&typeof n=="object"&&Ve.call(n)==ot||false}function ge(n){return typeof n=="function"||false}function ve(n){var t=typeof n;return"function"==t||n&&"object"==t||false}function ye(n){var t=typeof n;return"number"==t||n&&"object"==t&&Ve.call(n)==it||false}function de(n){return n&&typeof n=="object"&&Ve.call(n)==at||false
}function me(n){return typeof n=="string"||n&&typeof n=="object"&&Ve.call(n)==ct||false}function _e(n){if(null==n)return[];n=Sr(n);for(var t,r=n.length,r=(typeof r=="number"&&0<r&&(Cu(n)||ju.nonEnumArgs&&pe(n))&&r)>>>0,e=n.constructor,u=-1,e=e&&n===e.prototype,o=r-1,i=Ce(r),f=0<r;++u<r;)i[u]=Be(u);for(var a in n)e&&"constructor"==a||f&&(t=+a,-1<t&&t<=o&&0==t%1)||i.push(a);return i}function be(n){return lr(n,Uu)}function we(n){return n=null==n?"":Be(n),J.lastIndex=0,J.test(n)?n.replace(J,"\\$&"):n}function je(n,t){var r="";
if(t=+t,1>t||null==n||!hu(t))return r;n=Be(n);do t%2&&(r+=n),t=Qe(t/2),n+=n;while(t);return r}function Ae(n,t){return(n=null==n?"":Be(n))?null==t?n.slice(g(n),v(n)+1):(t=Be(t),n.slice(o(n,t),i(n,t)+1)):n}function xe(n){try{return n()}catch(t){return he(t)?t:Te(t)}}function Ee(n,t){return Wt(n,t)}function Oe(n){return n}function Ie(n){var t=Uu(n),r=t.length;if(1==r){var e=t[0],u=n[e];if(xr(u))return function(n){return null!=n&&u===n[e]&&tu.call(n,e)}}for(var o=r,i=Ce(r),f=Ce(r);o--;){var u=n[t[o]],a=xr(u);
i[o]=a,f[o]=a?u:Nt(u,false)}return function(n){if(o=r,null==n)return!o;for(;o--;)if(i[o]?f[o]!==n[t[o]]:!tu.call(n,t[o]))return false;for(o=r;o--;)if(i[o]?!tu.call(n,t[o]):!Qt(f[o],n[t[o]],null,true))return false;return true}}function Re(n,t,r){var e=true,u=t&&Ht(t,Uu);t&&(r||u.length)||(null==r&&(r=t),t=n,n=this,u=Ht(t,Uu)),false===r?e=false:ve(r)&&"chain"in r&&(e=r.chain),r=-1;for(var o=ge(n),i=u?u.length:0;++r<i;){var f=u[r],a=n[f]=t[f];o&&(n.prototype[f]=function(t){return function(){var r=this.__chain__,u=this.__wrapped__,o=[u];
if(ru.apply(o,arguments),o=t.apply(n,o),e||r){if(u===o&&ve(o))return this;o=new n(o),o.__chain__=r}return o}}(a))}return n}function ke(n,t,r){return _u(n,r?0:t)}function Se(n){return function(t){return null==t?m:t[n]}}l=l?Ft.defaults(kt.Object(),l,Ft.pick(kt,nt)):kt;var Ce=l.Array,Fe=l.Date,Te=l.Error,Ue=l.Function,We=l.Math,Ne=l.Number,Le=l.Object,$e=l.RegExp,Be=l.String,De=l.TypeError,Me=Ce.prototype,ze=Le.prototype,qe=Be.prototype,Pe=(Pe=l.window)&&Pe.document,Ze=Ue.prototype.toString,Ke=l._,Ve=ze.toString,Ye=$e("^"+we(Ve).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Je=Ar(Je=l.ArrayBuffer)&&Je,Xe=Ar(Xe=Je&&new Je(0).slice)&&Xe,Ge=We.ceil,He=l.clearTimeout,Qe=We.floor,nu=Ar(nu=Le.getPrototypeOf)&&nu,tu=ze.hasOwnProperty,ru=Me.push,eu=ze.propertyIsEnumerable,uu=Ar(uu=l.Set)&&uu,ou=l.setTimeout,iu=Me.splice,fu=Ar(fu=l.Uint8Array)&&fu,au=function(){try{var n=Ar(n=l.Float64Array)&&n,t=new n(new Je(10),0,1)&&n
}catch(r){}return t}(),cu=function(){try{var n={},t=Ar(t=Le.defineProperty)&&t,r=t(n,n,n)&&t}catch(e){}return r}(),lu=Ar(lu=qe.contains)&&lu,pu=Ar(pu=Le.create)&&pu,su=Ar(su=Ce.isArray)&&su,hu=l.isFinite,gu=Ar(gu=Le.keys)&&gu,vu=We.max,yu=We.min,du=Ar(du=Fe.now)&&du,mu=Ar(mu=Ne.isFinite)&&mu,_u=l.parseInt,bu=We.random,wu=au?au.BYTES_PER_ELEMENT:0,ju=h.support={};!function(x_){for(var n in arguments);ju.funcDecomp=!Ar(l.WinRTError)&&X.test(d),ju.funcNames=typeof Ue.name=="string";try{ju.dom=11===Pe.createDocumentFragment().nodeType
}catch(t){ju.dom=false}try{ju.nonEnumArgs=!(tu.call(arguments,1)&&eu.call(arguments,1))}catch(r){ju.nonEnumArgs=true}}(0,0),h.templateSettings={escape:B,evaluate:D,interpolate:M,variable:"",imports:{_:h}},pu||(Lt=function(){function n(){}return function(t){if(ve(t)){n.prototype=t;var r=new n;n.prototype=null}return r||l.Object()}}());var Au=uu&&function(n){var t=new uu,r=n?n.length:0;for(t.push=t.add;r--;)t.push(n[r]);return t};Xe||(Er=Je&&fu?function(n){var t=n.byteLength,r=au?Qe(t/wu):0,e=r*wu,u=new Je(t);
if(r){var o=new au(u,0,r);o.set(new au(n,0,r))}return t!=e&&(o=new fu(u,e),o.set(new fu(n,e))),u}:Oe);var xu=cu?function(n,t){return At.value=t,cu(n,I,At),At.value=null,n}:Oe,Eu=hr(function(n,t,r){tu.call(n,r)?++n[r]:n[r]=1}),Ou=hr(function(n,t,r){tu.call(n,r)?n[r].push(t):n[r]=[t]}),Iu=hr(function(n,t,r){n[r]=t}),Ru=hr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),ku=ae(te,2),Su=gr(Ut),Cu=su||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&Ve.call(n)==rt||false};
ju.dom||(se=function(n){return n&&typeof n=="object"&&1===n.nodeType&&!Tu(n)||false});var Fu=mu||function(n){return typeof n=="number"&&hu(n)},Tu=nu?function(n){if(!n||Ve.call(n)!=ft)return false;var t=n.valueOf,r=Ar(t)&&(r=nu(t))&&nu(r);return r?n==r||nu(n)==r:Ir(n)}:Ir,Uu=gu?function(n){n=Sr(n);var t=n.constructor,r=n.length;return t&&n===t.prototype||typeof r=="number"&&0<r?Rr(n):gu(n)}:Rr,Wu=gr(rr),Nu=c(function(n,t,r){return!r&&T.test(t)?n+t.toLowerCase():n+(t.charAt(0)[r?"toUpperCase":"toLowerCase"]()+t.slice(1))
}),Lu=c(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),$u=c(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Bu=du||function(){return(new Fe).getTime()};return 8!=_u(Q+"08")&&(ke=function(n,t,r){return n=Ae(n),_u(n,(r?0:+t)||(Z.test(n)?16:10))}),V.prototype=h.prototype,re.placeholder=ee.placeholder=ue.placeholder=oe.placeholder=ae.placeholder=ce.placeholder=h,h.after=function(n,t){if(!ge(t))throw new De(R);return n=hu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},h.assign=Su,h.at=function(t){var r=t?t.length:0;
return typeof r=="number"&&-1<r&&r<=S&&(t=kr(t)),n(t,Kt(arguments,false,false,1))},h.before=te,h.bind=re,h.bindAll=function(n){for(var t=n,r=1<arguments.length?Kt(arguments,false,false,1):le(n),e=-1,u=r.length;++e<u;){var o=r[e];t[o]=_r([t[o],b,null,t])}return t},h.bindKey=ee,h.callback=Ee,h.chain=function(n){return n=h(n),n.__chain__=true,n},h.chunk=function(n,t){var r=0,e=n?n.length:0,u=[];for(t=vu(+t||1,1);r<e;)u.push(Wr(n,r,r+=t));return u},h.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];
o&&(u[++e]=o)}return u},h.compose=function(){var n=arguments,t=n.length,r=t-1;if(!t)return function(){};for(;t--;)if(!ge(n[t]))throw new De(R);return function(){t=r;for(var e=n[t].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},h.constant=function(n){return function(){return n}},h.countBy=Eu,h.create=function(n,t){var r=Lt(n);return t?Ut(r,t):r},h.curry=ue,h.curryRight=oe,h.debounce=ie,h.defaults=function(n){if(null==n)return n;var t=Wr(arguments);return t.push(Ct),Su.apply(m,t)},h.defer=function(n){if(!ge(n))throw new De(R);
var t=Wr(arguments,1);return ou(function(){n.apply(m,t)},1)},h.delay=function(n,t){if(!ge(n))throw new De(R);var r=Wr(arguments,2);return ou(function(){n.apply(m,r)},t)},h.difference=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Cu(r)||pe(r))break}return Dt(arguments[n],Kt(arguments,false,true,++n))},h.drop=function(n,t,r){return t=null==t||r?1:t,Wr(n,0>t?0:t)},h.dropRight=function(n,t,r){var e=n?n.length:0;return t=e-((null==t||r?1:t)||0),Wr(n,0,0>t?0:t)},h.dropRightWhile=function(n,t,r){var e=n?n.length:0;
for(t=br(t,r,3);e--&&t(n[e],e,n););return Wr(n,0,e+1)},h.dropWhile=function(n,t,r){var e=-1,u=n?n.length:0;for(t=br(t,r,3);++e<u&&t(n[e],e,n););return Wr(n,e)},h.filter=Pr,h.flatten=function(n,t,r){if(!n||!n.length)return[];var e=typeof t;return"number"!=e&&"string"!=e||!r||r[t]!==n||(t=false),Kt(n,t)},h.flattenDeep=function(n){return n&&n.length?Kt(n,true):[]},h.forEach=Kr,h.forEachRight=Vr,h.forIn=function(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=Wt(t,r,3)),Vt(n,t,_e)},h.forInRight=function(n,t,r){return t=Wt(t,r,3),Yt(n,t,_e)
},h.forOwn=function(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=Wt(t,r,3)),Xt(n,t)},h.forOwnRight=function(n,t,r){return t=Wt(t,r,3),Yt(n,t,Uu)},h.functions=le,h.groupBy=Ou,h.indexBy=Iu,h.initial=function(n){var t=n?n.length:0;return Wr(n,0,t?t-1:0)},h.intersection=function(){for(var n=[],t=-1,u=arguments.length,o=[],i=wr(),f=Au&&i==r;++t<u;){var a=arguments[t];(Cu(a)||pe(a))&&(n.push(a),o.push(f&&120<=a.length&&Au(t&&a)))}var u=n.length,f=n[0],c=-1,l=f?f.length:0,p=[],s=o[0];n:for(;++c<l;)if(a=f[c],0>(s?e(s,a):i(p,a))){for(t=u;--t;){var h=o[t];
if(0>(h?e(h,a):i(n[t],a)))continue n}s&&s.push(a),p.push(a)}return p},h.invert=function(n,t){for(var r=-1,e=Uu(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?tu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},h.invoke=function(n,t){return nr(n,t,Wr(arguments,2))},h.keys=Uu,h.keysIn=_e,h.map=Yr,h.mapValues=function(n,t,r){var e={};return t=br(t,r,3),Xt(n,function(n,r,u){e[r]=t(n,r,u)}),e},h.matches=Ie,h.memoize=function(n,t){function r(){var e=t?t.apply(this,arguments):arguments[0];if("__proto__"==e)return n.apply(this,arguments);
var u=r.cache;return tu.call(u,e)?u[e]:u[e]=n.apply(this,arguments)}if(!ge(n)||t&&!ge(t))throw new De(R);return r.cache={},r},h.merge=Wu,h.mixin=Re,h.negate=fe,h.omit=function(n,t,r){if(null==n)return{};if(typeof t=="function")return ur(n,fe(br(t,r,3)));var e=Kt(arguments,false,false,1);return ur(Sr(n),Dt(_e(n),Et(e,Be)))},h.once=ku,h.pairs=function(n){for(var t=-1,r=Uu(n),e=r.length,u=Ce(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},h.partial=ae,h.partialRight=ce,h.partition=Ru,h.pick=function(n,t,r){return null==n?{}:ur(Sr(n),typeof t=="function"?br(t,r,3):Kt(arguments,false,false,1))
},h.pluck=Xr,h.property=Se,h.pull=function(n){for(var t=0,r=arguments.length,e=n?n.length:0;++t<r;)for(var u=-1,o=arguments[t];++u<e;)n[u]===o&&(iu.call(n,u--,1),e--);return n},h.pullAt=function(r){var e=r,u=Kt(arguments,false,false,1),o=u.length,i=n(e,u);for(u.sort(t);o--;){var f=parseFloat(u[o]);if(f!=a&&-1<f&&0==f%1){var a=f;iu.call(e,f,1)}}return i},h.range=function(n,t,r){n=+n||0;var e=typeof t;"number"!=e&&"string"!=e||!r||r[t]!==n||(t=r=null),r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0,e=-1,t=vu(Ge((t-n)/(r||1)),0);
for(var u=Ce(t);++e<t;)u[e]=n,n+=r;return u},h.reject=function(n,t,r){return t=br(t,r,3),Pr(n,fe(t))},h.remove=function(n,t,r){var e=-1,u=n?n.length:0,o=[];for(t=br(t,r,3);++e<u;)r=n[e],t(r,e,n)&&(o.push(r),iu.call(n,e--,1),u--);return o},h.rest=Ur,h.shuffle=Qr,h.slice=Wr,h.sortBy=function(n,t,r){var e=-1,u=n?n.length:0,o=t&&Cu(t),i=[];for(typeof u=="number"&&-1<u&&u<=S&&(i.length=u),o||(t=br(t,r,3)),Mt(n,function(n,r,u){if(o)for(r=t.length,u=Ce(r);r--;)u[r]=n[t[r]];else u=t(n,r,u);i[++e]={a:u,b:e,c:n}
}),u=i.length,i.sort(o?a:f);u--;)i[u]=i[u].c;return i},h.take=function(n,t,r){return t=null==t||r?1:t,Wr(n,0,0>t?0:t)},h.takeRight=function(n,t,r){var e=n?n.length:0;return t=e-((null==t||r?1:t)||0),Wr(n,0>t?0:t)},h.takeRightWhile=function(n,t,r){var e=n?n.length:0;for(t=br(t,r,3);e--&&t(n[e],e,n););return Wr(n,e+1)},h.takeWhile=function(n,t,r){var e=-1,u=n?n.length:0;for(t=br(t,r,3);++e<u&&t(n[e],e,n););return Wr(n,0,e)},h.tap=function(n,t,r){return t.call(r,n),n},h.throttle=function(n,t,r){var e=true,u=true;
if(!ge(n))throw new De(R);return false===r?e=false:ve(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),jt.leading=e,jt.maxWait=+t,jt.trailing=u,ie(n,t,jt)},h.times=function(n,t,r){n=hu(n=+n)&&-1<n?n:0,t=Wt(t,r,1),r=-1;for(var e=Ce(yu(n,k));++r<n;)r<k?e[r]=t(r):t(r);return e},h.toArray=function(n){var t=n?n.length:0;return typeof t=="number"&&-1<t&&t<=S?Wr(n):be(n)},h.transform=function(n,t,r,e){var u=jr(n);if(null==r)if(u)r=[];else{if(ve(n))var o=n.constructor,o=o&&o.prototype;r=Lt(o)}return t&&(t=br(t,e,4),(u?H:Xt)(n,function(n,e,u){return t(r,n,e,u)
})),r},h.union=function(){return cr(Kt(arguments,false,true))},h.uniq=$r,h.unzip=Br,h.values=be,h.valuesIn=function(n){return lr(n,_e)},h.where=function(n,t){return Pr(n,Ie(t))},h.without=function(){return Dt(arguments[0],Wr(arguments,1))},h.wrap=function(n,t){return er(t,E,[n],[])},h.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Cu(r)||pe(r))var e=e?Dt(e,r).concat(Dt(r,e)):r}return e?cr(e):[]},h.zip=function(){return Br(arguments)},h.zipObject=Dr,h.collect=Yr,h.each=Kr,h.eachRight=Vr,h.extend=Su,h.methods=le,h.object=Dr,h.select=Pr,h.tail=Ur,h.unique=$r,Re(h,Ut({},h)),h.attempt=xe,h.camelCase=Nu,h.capitalize=function(n){return null==n?"":(n=Be(n),n.charAt(0).toUpperCase()+n.slice(1))
},h.clone=function(n,t,r,e){var u=typeof t;return"boolean"!=u&&null!=t&&(e=r,r=t,t=false,"number"!=u&&"string"!=u||!e||e[r]!==n||(r=null)),r=typeof r=="function"&&Wt(r,e,1),Nt(n,t,r)},h.cloneDeep=function(n,t,r){return t=typeof t=="function"&&Wt(t,r,1),Nt(n,true,t)},h.contains=zr,h.endsWith=function(n,t,r){n=null==n?"":Be(n),t=Be(t);var e=n.length;return r=(typeof r=="undefined"?e:yu(0>r?0:+r||0,e))-t.length,0<=r&&n.indexOf(t,r)==r},h.escape=function(n){return n=null==n?"":Be(n),$.lastIndex=0,$.test(n)?n.replace($,p):n
},h.escapeRegExp=we,h.every=qr,h.find=Zr,h.findIndex=Cr,h.findKey=function(n,t,r){return t=br(t,r,3),Zt(n,t,Xt,true)},h.findLast=function(n,t,r){return t=br(t,r,3),Zt(n,t,zt)},h.findLastIndex=function(n,t,r){var e=n?n.length:0;for(t=br(t,r,3);e--;)if(t(n[e],e,n))return e;return-1},h.findLastKey=function(n,t,r){return t=br(t,r,3),Zt(n,t,Gt,true)},h.findWhere=function(n,t){return Zr(n,Ie(t))},h.first=Fr,h.has=function(n,t){return n?tu.call(n,t):false},h.identity=Oe,h.indexOf=Tr,h.isArguments=pe,h.isArray=Cu,h.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&Ve.call(n)==et||false
},h.isDate=function(n){return n&&typeof n=="object"&&Ve.call(n)==ut||false},h.isElement=se,h.isEmpty=function(n){if(null==n)return true;var t=n.length;return typeof t=="number"&&-1<t&&t<=S&&(Cu(n)||me(n)||pe(n)||typeof n=="object"&&ge(n.splice))?!t:!Uu(n).length},h.isEqual=function(n,t,r,e){return r=typeof r=="function"&&Wt(r,e,3),!r&&xr(n)&&xr(t)?n===t:Qt(n,t,r)},h.isError=he,h.isFinite=Fu,h.isFunction=ge,h.isNaN=function(n){return ye(n)&&n!=+n},h.isNull=function(n){return null===n},h.isNumber=ye,h.isObject=ve,h.isPlainObject=Tu,h.isRegExp=de,h.isString=me,h.isUndefined=function(n){return typeof n=="undefined"
},h.kebabCase=Lu,h.last=function(n){var t=n?n.length:0;return t?n[t-1]:m},h.lastIndexOf=function(n,t,r){var e=n?n.length:0,u=e;if(typeof r=="number")u=(0>r?vu(u+r,0):yu(r||0,u-1))+1;else if(r)return u=Lr(n,t)-1,e&&n[u]===t?u:-1;for(;u--;)if(n[u]===t)return u;return-1},h.max=Jr,h.min=function(n,t,r){var e=1/0,o=e,i=typeof t;"number"!=i&&"string"!=i||!r||r[t]!==n||(t=null);var i=null==t,f=!(i&&Cu(n))&&me(n);if(i&&!f)for(r=-1,n=kr(n),i=n.length;++r<i;)f=n[r],f<o&&(o=f);else t=i&&f?u:br(t,r,3),Mt(n,function(n,r,u){r=t(n,r,u),(r<e||1/0===r&&r===o)&&(e=r,o=n)
});return o},h.noConflict=function(){return l._=Ke,this},h.noop=function(){},h.now=Bu,h.pad=function(n,t,r){n=null==n?"":Be(n),t=+t;var e=n.length;return e<t&&hu(t)?(e=(t-e)/2,t=Qe(e),e=Ge(e),r=dr("",e,r),r.slice(0,t)+n+r):n},h.padLeft=function(n,t,r){return n=null==n?"":Be(n),dr(n,t,r)+n},h.padRight=function(n,t,r){return n=null==n?"":Be(n),n+dr(n,t,r)},h.parseInt=ke,h.random=function(n,t,r){var e=typeof t;"number"!=e&&"string"!=e||!r||r[t]!==n||(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=bu(),yu(n+r*(t-n+parseFloat("1e-"+(Be(r).length-1))),t)):or(n,t)
},h.reduce=Gr,h.reduceRight=Hr,h.repeat=je,h.result=function(n,t,r){var e=null==n?m:n[t];return typeof e=="undefined"?r:ge(e)?n[t]():e},h.runInContext=d,h.size=function(n){var t=n?n.length:0;return typeof t=="number"&&-1<t&&t<=S?t:Uu(n).length},h.snakeCase=$u,h.some=ne,h.sortedIndex=Nr,h.sortedLastIndex=Lr,h.startsWith=function(n,t,r){return n=null==n?"":Be(n),r=typeof r=="undefined"?0:yu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},h.template=function(n,t,r){var e=h.templateSettings;t=Su({},r||t,e,Tt),n=Be(null==n?"":n),r=Su({},t.imports,e.imports,Tt);
var u,o,i=Uu(r),f=be(r),a=0;r=t.interpolate||Y;var c="__p+='";if(r=$e((t.escape||Y).source+"|"+r.source+"|"+(r===M?z:Y).source+"|"+(t.evaluate||Y).source+"|$","g"),n.replace(r,function(t,r,e,i,f,l){return e||(e=i),c+=n.slice(a,l).replace(G,s),r&&(u=true,c+="'+__e("+r+")+'"),f&&(o=true,c+="';"+f+";\n__p+='"),e&&(c+="'+((__t=("+e+"))==null?'':__t)+'"),a=l+t.length,t}),c+="';",(t=t.variable)||(c="with(obj){"+c+"}"),c=(o?c.replace(U,""):c).replace(W,"$1").replace(N,"$1;"),c="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+c+"return __p}",t=xe(function(){return Ue(i,"return "+c).apply(m,f)
}),t.source=c,he(t))throw t;return t},h.trim=Ae,h.trimLeft=function(n,t){return(n=null==n?"":Be(n))?null==t?n.slice(g(n)):(t=Be(t),n.slice(o(n,t))):n},h.trimRight=function(n,t){return(n=null==n?"":Be(n))?null==t?n.slice(0,v(n)+1):(t=Be(t),n.slice(0,i(n,t)+1)):n},h.trunc=function(n,t){var r=30,e="...";if(ve(t))var u="separator"in t?t.separator:u,r="length"in t?+t.length||0:r,e="omission"in t?Be(t.omission):e;else null!=t&&(r=+t||0);if(n=null==n?"":Be(n),r>=n.length)return n;var o=r-e.length;if(1>o)return e;
if(r=n.slice(0,o),null==u)return r+e;if(de(u)){if(n.slice(o).search(u)){var i,f,a=n.slice(0,o);for(u.global||(u=$e(u.source,(q.exec(u)||"")+"g")),u.lastIndex=0;i=u.exec(a);)f=i.index;r=r.slice(0,null==f?o:f)}}else n.indexOf(u,o)!=o&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},h.unescape=function(n){return n=null==n?"":Be(n),L.lastIndex=0,L.test(n)?n.replace(L,y):n},h.uniqueId=function(n){var t=++F;return Be(null==n?"":n)+t},h.all=qr,h.any=ne,h.detect=Zr,h.foldl=Gr,h.foldr=Hr,h.head=Fr,h.include=zr,h.inject=Gr,Re(h,function(){var n={};
return Xt(h,function(t,r){h.prototype[r]||(n[r]=t)}),n}(),false),h.sample=function(n,t,r){return null==t||r?(n=kr(n),t=n.length,0<t?n[or(0,t-1)]:m):(n=Qr(n),n.length=yu(0>t?0:+t||0,n.length),n)},Xt(h,function(n,t){var r="sample"!=t;h.prototype[t]||(h.prototype[t]=function(t,e){var u=this.__chain__,o=n(this.__wrapped__,t,e);return u||null!=t&&(!e||r&&typeof t=="function")?new V(o,u):o})}),h.VERSION=_,h.prototype.chain=function(){return this.__chain__=true,this},h.prototype.toJSON=Mr,h.prototype.toString=function(){return Be(this.__wrapped__)
},h.prototype.value=Mr,h.prototype.valueOf=Mr,H(["join","pop","shift"],function(n){var t=Me[n];h.prototype[n]=function(){var n=this.__chain__,r=t.apply(this.__wrapped__,arguments);return n?new V(r,n):r}}),H(["push","reverse","sort","unshift"],function(n){var t=Me[n];h.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),H(["concat","splice"],function(n){var t=Me[n];h.prototype[n]=function(){return new V(t.apply(this.__wrapped__,arguments),this.__chain__)}}),h}var m,_="3.0.0-pre",b=1,w=2,j=4,A=8,x=16,E=32,O=64,I="__lodash_"+_.replace(/[-.]/g,"_")+"__",R="Expected a function",k=Math.pow(2,32)-1,S=Math.pow(2,53)-1,C="__lodash_placeholder__",F=0,T=/^[A-Z]+$/,U=/\b__p\+='';/g,W=/\b(__p\+=)''\+/g,N=/(__e\(.*?\)|\b__t\))\+'';/g,L=/&(?:amp|lt|gt|quot|#39|#96);/g,$=/[&<>"'`]/g,B=/<%-([\s\S]+?)%>/g,D=/<%([\s\S]+?)%>/g,M=/<%=([\s\S]+?)%>/g,z=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,q=/\w*$/,P=/^\s*function[ \n\r\t]+\w/,Z=/^0[xX]/,K=/^\[object .+?Constructor\]$/,V=/[\xC0-\xFF]/g,Y=/($^)/,J=/[.*+?^${}()|[\]\/\\]/g,X=/\bthis\b/,G=/['\n\r\u2028\u2029\\]/g,H=/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,Q=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",nt="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array window WinRTError".split(" "),tt="[object Arguments]",rt="[object Array]",et="[object Boolean]",ut="[object Date]",ot="[object Error]",it="[object Number]",ft="[object Object]",at="[object RegExp]",ct="[object String]",lt="[object ArrayBuffer]",pt="[object Float32Array]",st="[object Float64Array]",ht="[object Int8Array]",gt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",dt="[object Uint8ClampedArray]",mt="[object Uint16Array]",_t="[object Uint32Array]",bt={};
bt[tt]=bt[rt]=bt[pt]=bt[st]=bt[ht]=bt[gt]=bt[vt]=bt[yt]=bt[dt]=bt[mt]=bt[_t]=true,bt[lt]=bt[et]=bt[ut]=bt[ot]=bt["[object Function]"]=bt["[object Map]"]=bt[it]=bt[ft]=bt[at]=bt["[object Set]"]=bt[ct]=bt["[object WeakMap]"]=false;var wt={};wt[tt]=wt[rt]=wt[lt]=wt[et]=wt[ut]=wt[pt]=wt[st]=wt[ht]=wt[gt]=wt[vt]=wt[it]=wt[ft]=wt[at]=wt[ct]=wt[yt]=wt[dt]=wt[mt]=wt[_t]=true,wt[ot]=wt["[object Function]"]=wt["[object Map]"]=wt["[object Set]"]=wt["[object WeakMap]"]=false;var jt={leading:false,maxWait:0,trailing:false},At={configurable:false,enumerable:false,value:null,writable:false},xt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Et={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Ot={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"AE","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\xd7":" ","\xf7":" "},It={"function":true,object:true},Rt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},kt=It[typeof window]&&window||this,St=It[typeof exports]&&exports&&!exports.nodeType&&exports,It=It[typeof module]&&module&&!module.nodeType&&module,Ct=St&&It&&typeof global=="object"&&global;
!Ct||Ct.global!==Ct&&Ct.window!==Ct&&Ct.self!==Ct||(kt=Ct);var Ct=It&&It.exports===St&&St,Ft=d();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(kt._=Ft, define(function(){return Ft})):St&&It?Ct?(It.exports=Ft)._=Ft:St._=Ft:kt._=Ft}).call(this);
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
(function (window, angular, undefined) {
	'use strict';

angular.module('appFilters', ['ngSanitize']).filter('toggleOptions', [function () {
    return function ($scope, action, filter_id) {
      var filters = $scope.data.filters;
      var selected = $scope.data.selected;
      var providers = $scope.data.filtered.main;
      var this_filter = {};
      var selected_siblings = {};
      var siblings = [];
      if (_.isUndefined(action)) {
        return filters;
      }
      var doToggleOptions = function (filter, filter_option, cascade_index) {
        var prvdr_fltr;
        var option_disabled = true;
        _(providers).forEach(function (provider, provider_index) {
          if (provider.hide && !provider.use_filters) {
            return;
          }
          if (_.isNull(filter.parent)) {
            if (filter.has_children) {
              prvdr_fltr = _.keys(provider.filters[filter.id]);
            } else {
              prvdr_fltr = provider.filters[filter.id];
            }
            if (_.contains([
                'select',
                'checkbox'
              ], filter.form_type)) {
              if (prvdr_fltr && _.contains(prvdr_fltr, filter_option[filter.id][0])) {
                option_disabled = false;
                return false;
              } else {
                option_disabled = true;
              }
            } else if (_.contains(['select_cascade'], filter.form_type)) {
              if (prvdr_fltr && _.contains(prvdr_fltr[cascade_index], filter_option[filter.id][cascade_index][0])) {
                option_disabled = false;
                return false;
              } else {
                option_disabled = true;
              }
            }
          } else {
            if (_.isUndefined(selected.filters[filter.parent])) {
              option_disabled = false;
              return false;
            }
            prvdr_fltr = provider.filters[filter.parent][selected.filters[filter.parent][0]];
            if (_.isEmpty(_.where(prvdr_fltr, filter_option))) {
              option_disabled = true;
            } else {
              option_disabled = false;
              return false;
            }
          }
        });
        return option_disabled;
      };
      var cascadeFilterOption = function (option_index, cascade) {
        var set_filter_option = _.zipObject([this_filter.id], []);
        set_filter_option[this_filter.id] = [];
        for (var i = 0; i < this_filter.options.length; i++) {
          set_filter_option[this_filter.id].push(option_index === i ? [cascade.id] : []);
        }
        if (!_.isNull(this_filter.parent) && !_.isEmpty(selected_siblings)) {
          set_filter_option = _.assign(set_filter_option, selected_siblings);
        }
        return set_filter_option;
      };
      this_filter = _.find(filters, { 'id': filter_id });
      if (!_.isNull(this_filter.parent)) {
        siblings = _.without(_.pluck(_.where(filters, { parent: this_filter.parent }), 'id'), this_filter.id);
        if (!_.isEmpty(siblings)) {
          _(selected.filters).forOwn(function (value, key) {
            var this_sibling = _.find(filters, { 'id': key });
            if (_.contains(siblings, key)) {
              if (this_sibling.form_type === 'select_cascade') {
                selected_siblings[key] = [];
                _(value).forOwn(function (value, index) {
                  selected_siblings[key][index] = [value];
                });
              } else {
                selected_siblings[key] = value;
              }
            }
          });
        }
      }
      _(this_filter.options).forEach(function (option, option_index) {
        if (_.isEmpty(option)) {
          return;
        }
        var filter_option = {};
        if (_.contains([
            'select',
            'checkbox'
          ], this_filter.form_type)) {
          filter_option = _.zipObject([this_filter.id], [[option.id]]);
          if (!_.isNull(this_filter.parent) && !_.isEmpty(selected_siblings)) {
            filter_option = _.assign(filter_option, selected_siblings);
          }
          option.disabled = doToggleOptions(this_filter, filter_option);
        } else if (_.contains(['select_cascade'], this_filter.form_type)) {
          if (option_index === 0) {
            _(option).forEach(function (cascade) {
              cascade.disabled = doToggleOptions(this_filter, cascadeFilterOption(option_index, cascade), option_index);
            });
          } else {
            _.flatten(_.values(option)).forEach(function (cascade) {
              if (!_.isPlainObject(cascade)) {
                return;
              }
              cascade.disabled = doToggleOptions(this_filter, cascadeFilterOption(option_index, cascade), option_index);
            });
          }
        } else {
          return;
        }
      });
      return filters;
    };
  }]).filter('applyFilters', [
  '$q',
  function ($q) {
    return function ($scope, action, filter_id) {
      var providers = $scope.data.providers;
      var selected = $scope.data.selected;
      var counts = $scope.data.filtered.counts;
      var filtered_count = {
          'main': 0,
          'groups': _.map($scope.data.labels.main.groups.headers, function () {
            return 0;
          })
        };
      if (_.isUndefined(action)) {
        $scope.toggleOptions();
        counts.groups[0] = filtered_count.groups;
        _(providers).forEach(function (provider) {
          counts.groups[0][provider[$scope.data.labels.main.groups.group_key]]++;
        });
        if (_.isEmpty(counts.groups[1])) {
          counts.groups[1] = _.clone(counts.groups[0]);
        }
        return providers;
      }
      if (action === 'update' && !_.isEmpty(selected.filters)) {
        $scope.data.filtered.search = null;
      }
      $q.when().then(function () {
        _(providers).forEach(function (provider) {
          if (action === 'reset') {
            provider.hide = false;
            provider.use_filters = false;
            return;
          } else if (action === 'single') {
            if (provider.id === selected.search.id) {
              provider.hide = false;
              provider.use_filters = false;
              $scope.toggleDetail(provider.id);
            } else {
              provider.hide = true;
            }
            return;
          }
          provider.use_filters = false;
          _(selected.filters).forOwn(function (item, group) {
            var this_item = _.find($scope.data.filters, { 'id': group });
            var selected_children = {};
            var item_children, prvdr_fltr;
            if (_.isNull(this_item.parent) && this_item.has_children) {
              prvdr_fltr = _.keys(provider.filters[group]);
              item_children = _.pluck(_.where($scope.data.filters, { parent: group }), 'id');
            } else if (_.isNull(this_item.parent)) {
              prvdr_fltr = provider.filters[group];
            } else {
              return;
            }
            if (_.isNull(this_item.parent)) {
              if (this_item.form_type === 'checkbox') {
                provider.hide = !_.isEqual(_.sortBy(item), _.intersection(prvdr_fltr, item));
              } else {
                _(item).forOwn(function (value, index) {
                  if (this_item.form_type === 'select') {
                    provider.hide = !_.contains(prvdr_fltr, value);
                  } else if (this_item.form_type === 'select_cascade') {
                    provider.hide = !prvdr_fltr || !_.contains(prvdr_fltr[index], value);
                  } else {
                    return false;
                  }
                });
              }
            }
            if (!_.isEmpty(item_children) && provider.hide !== true) {
              _(selected.filters).forOwn(function (value, key) {
                var this_child = _.find($scope.data.filters, { 'id': key });
                if (_.contains(item_children, key)) {
                  if (this_child.form_type === 'select_cascade') {
                    selected_children[key] = [];
                    _(value).forOwn(function (value, index) {
                      selected_children[key][index] = [value];
                    });
                  } else {
                    selected_children[key] = value;
                  }
                }
              });
              if (!_.isEmpty(selected_children)) {
                provider.hide = _.isEmpty(_.where(_.values(provider.filters[group][item]), selected_children));
              }
            }
            if (!_.isUndefined(provider.hide) && provider.hide) {
              filtered_count.main++;
              filtered_count.groups[provider[$scope.data.labels.main.groups.group_key]]++;
              if (filter_id === this_item.id || _.has(selected_children, filter_id)) {
                provider.use_filters = true;
              }
              return false;
            }
          });
        });
      }).then(function () {
        counts.main = $scope.data.providers.length - filtered_count.main;
        _(counts.groups[0]).forEach(function (item, index) {
          counts.groups[0][index] = counts.groups[1][index] - filtered_count.groups[index];
        });
        if ((action === 'update' || action === 'reset') && !_.isNull(selected.filter_active)) {
          $scope.toggleOptions('update', $scope.data.filters[selected.filter_active.index].id);
        } else if (action === 'single') {
          $scope.resetFilters('single');
        }
      });
      return providers;
    };
  }
]).filter('trustHTML', [
  '$sce',
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }
]);
angular.module('appFilters').service('MockSrvApi', [
  '$http',
  '$q',
  function ($http, $q) {
    var service = {};
    service.getBlueLevelBE = function () {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'src/blue-level-response.json'
      }).success(function (response) {
        response.providers = setEMCProduct(response.providers);
        console.log(response);
        deferred.resolve(response);
      }).error(function (response) {
        console.log(response);
        deferred.reject(response);
      });
      return deferred.promise;
    };
    var secondaryFilters = [
        'emc_product',
        'service_type',
        'geographical',
        'public_sector',
        'credit_card_swipe',
        'datacenter_location'
      ];
    function setEMCProduct(providers) {
      _(secondaryFilters).forEach(function (filter, filter_index) {
        _(providers).forEach(function (provider, provider_index) {
          var emc_attributes = null;
          var service_offering = provider.filters.service_offering;
          for (var propertyName in service_offering) {
            var obj = service_offering[propertyName];
            var attributes = obj[0];
            for (var propertyName2 in attributes) {
              if (propertyName2 === filter) {
                console.log(attributes[propertyName2]);
                if (provider.filters[filter] === undefined) {
                  provider.filters[filter] = attributes[propertyName2];
                } else {
                  var obj2 = attributes[propertyName2];
                  if (!_.contains(provider.filters[filter], obj2[0])) {
                    provider.filters[filter].push(obj2[0]);
                  }
                }
                break;
              }
            }
          }
        });
      });
      return providers;
    }
    return service;
  }
]);
angular.module('getResource', ['ngResource']).factory('getResource', [
  '$resource',
  '$q',
  '$timeout',
  function ($resource, $q, $timeout) {
    return $resource('https://cspdb.emc.com/Services/ServiceProviders.asmx/:resource/', { callback: 'JSON_CALLBACK' }, {
      get: { method: 'JSONP' },
      params: { serviceProviderId: '@serviceProviderId' }
    });
  }
]);
angular.module('emc_service_providers', [
  'ngRoute',
  'getResource',
  'appFilters',
  'angular-ui.dropdown',
  'angular-ui.tabs',
  'angular-ui.buttons',
  'angular-ui.typeahead',
  'angular-ui.popover',
  'angular-ui.tooltip',
  'angular-ui.modal',
  'angular-ui.scrollfix',
  'templates-app',
  'templates-common',
  'hmTouchEvents'
]).config([
  '$locationProvider',
  '$routeProvider',
  '$tooltipProvider',
  function ($locationProvider, $routeProvider, $tooltipProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when().otherwise({
      templateUrl: 'home.tpl.html',
      controller: 'AppCtrl',
      reloadOnSearch: false
    });
    $tooltipProvider.setTriggers({
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur',
      'never': 'mouseleave',
      'show': 'hide'
    });
  }
]).run(function () {
}).controller('AppCtrl', [
  '$scope',
  '$filter',
  '$q',
  '$timeout',
  '$modal',
  'getResource',
  '$location',
  'CacheSrv',
  '$rootScope',
  'MockSrvApi',
  function ($scope, $filter, $q, $timeout, $modal, getResource, $location, CacheSrv, $rootScope, MockSrvApi) {
    $scope.toggleOptions = function (action, filter_id) {
      $scope.data.filtered.filters = $filter('toggleOptions')($scope, action, filter_id);
      var transferObject = { data: $scope.data };
      $rootScope.$broadcast('updateCacheData', JSON.stringify(transferObject));
    };
    $scope.applyFilters = function (action, filter_id) {
      var useDefaultOrder;
      if (action === 'single' && !_.isNull($scope.data.filtered.search)) {
        if ($scope.data.selected.search.id === $scope.data.filtered.search.id) {
          return;
        }
      } else if (action === 'defaultFilters') {
        action = undefined;
        useDefaultOrder = true;
      }
      $scope.data.filtered.main = $filter('applyFilters')($scope, action, filter_id);
      if (useDefaultOrder) {
        $scope.applySortDefault();
      } else {
        $scope.applySort();
      }
    };
    $scope.resetFilters = function (action, option_clicked) {
      var selected = $scope.data.selected;
      selected.filters = {};
      selected.filters_display = [];
      selected.option_desc = {};
      selected.filter_primary = null;
      if (action === 'single') {
        $scope.data.filtered.search = selected.search;
        selected.search = null;
      } else {
        $scope.data.filtered.search = null;
        _($scope.data.filters).forEach(function (item) {
          item.has_selected = '';
        });
        $scope.applyFilters('reset');
      }
      _(selected.filters_options).forEach(function (item, index, filter) {
        if (_.isPlainObject(item)) {
          if (_.isUndefined(option_clicked) || !option_clicked) {
            _(item).forEach(function (value, key, option) {
              option[key] = false;
            });
          }
        } else if (_.isUndefined(item)) {
          delete filter[index];
        } else {
          filter[index] = [];
        }
      });
      if (!_.isNull(selected.filter_active) && (!_.isNull($scope.data.filters[selected.filter_active.index].parent_display) || action === 'single')) {
        $scope.data.filters[selected.filter_active.index].active = false;
        selected.filter_active = null;
      }
      angular.element(document.querySelectorAll('.filters > div > div:first-child')).css({ 'margin-left': '0px' });
    };
    $scope.resetUrl = function () {
      $location.search('');
    };
    $scope.toggleReset = function () {
      if ((_.isUndefined($scope.data.selected) || _.isEmpty($scope.data.selected.filters)) && (_.isUndefined($scope.data.filtered) || _.isNull($scope.data.filtered.search))) {
        return true;
      } else {
        return false;
      }
    };
    function parse(val) {
      var result = null, tmp = [];
      location.search.substr(1).split('&').forEach(function (item) {
        tmp = item.split('=');
        if (tmp[0] === val) {
          result = decodeURIComponent(tmp[1]);
        }
      });
      return result;
    }
    function updateLocationURL(cascade_values, item, option) {
      if (cascade_values) {
        $location.search(item.id, cascade_values.toString());
      } else {
        if (!refreshPage) {
          if (item.form_type === 'checkbox') {
            if (window.location.search.indexOf(item.id) > 0) {
              var str = parse(item.id);
              if (str.indexOf(option.id) < 0) {
                str += ',' + option.id;
                $location.search(item.id, str);
              } else {
                str = str.replace(option.id + ',', '');
                str = str.replace(',' + option.id, '');
                str = str.replace(option.id, '');
              }
              if (str === '') {
                $location.search(item.id, null);
              } else {
                $location.search(item.id, str);
              }
            } else {
              $location.search(item.id, option.id);
            }
          } else {
            $location.search(item.id, option.id);
          }
        }
      }
    }
    function removeCheckboxFilterURL(item, option) {
      var values = window.location.search.replace('?', ''), result = '';
      values = parse(item.id);
      values = values.split(',');
      for (var z = 0, len = values.length; z < len; z++) {
        if (values[z] !== option.id) {
          result += result === '' ? values[z] : ',' + values[z];
        }
      }
      if (result !== '') {
        $location.search(item.id, result);
      } else {
        $location.search(item.id, null);
      }
    }
    $scope.addFilter = function (filter, option) {
      if (!_.isUndefined(filter)) {
        this.item = filter;
        this.option = option;
      }
      if (this.option.disabled) {
        return;
      }
      var selected = $scope.data.selected;
      var element_id = 'filter-' + this.item.id;
      var cascade_values;
      if (this.item.form_type === 'checkbox' && _.contains(selected.filters[this.item.id], this.option.id)) {
        $scope.removeFilter(this.item.id, this.option.id);
        removeCheckboxFilterURL(this.item, this.option);
        flagAddFilter = true;
        $scope.resetActiveCheckbox(this.item.id, this.option.id);
        return true;
      }
      if (_.isNull(this.item.parent_display) && this.item.has_children) {
        selected.filter_primary = this.item.id;
      }
      if (this.item.form_type === 'select' || !_.has(selected.filters, this.item.id)) {
        selected.filters[this.item.id] = [this.option.id];
      } else {
        if (this.item.form_type === 'select_cascade') {
          cascade_values = selected.filters[this.item.id].slice(0, this.parent_idx);
          cascade_values.push(this.option.id);
          selected.filters[this.item.id] = cascade_values;
        } else if (this.item.form_type === 'checkbox') {
          selected.filters[this.item.id].push(this.option.id);
        }
      }
      this.item.has_selected = 'has_selected';
      if (_.isUndefined(this.option.desc)) {
        _.assign(selected.option_desc, _.zipObject([this.item.id], ['']));
      } else {
        _.assign(selected.option_desc, _.zipObject([this.item.id], [this.option.desc]));
      }
      $scope.updateOptionsDisplay(this.item, 'add', false);
      if (!_.isNull(this.item.parent_display)) {
        $timeout(function () {
          angular.element(document.getElementById(element_id)).triggerHandler('click');
        }, 0);
      }
      $scope.toggleDetail();
      $scope.applyFilters('update', this.item.id);
      updateLocationURL(cascade_values, this.item, this.option);
    };
    $scope.removeFilter = function (filter_id, option_id) {
      var this_filter;
      var filters = $scope.data.filters;
      var selected = $scope.data.selected;
      var selected_count = _.size(selected.filters);
      var items_remove = [];
      var element_id = 'filter-' + filter_id;
      $scope.toggleDetail();
      if (selected_count === 1 && _.isUndefined(option_id)) {
        $scope.resetFilters('all');
        $location.search('');
        return;
      }
      this_filter = _.find(filters, { 'id': filter_id });
      if (!_.isUndefined(option_id) && selected.filters[filter_id].length > 1) {
        selected.filters[filter_id] = _.without(selected.filters[filter_id], option_id);
        return $q.when().then(function () {
          $scope.updateOptionsDisplay(this_filter, 'remove', false);
        }).then(function () {
          if (_.size(selected.filters) === 0) {
            $scope.resetFilters('all');
          } else {
            if (this_filter.form_type === 'select_cascade') {
              this_filter.has_selected = '';
            }
            $scope.applyFilters('update', filter_id);
          }
        });
      }
      items_remove.push(this_filter);
      if (items_remove[0].has_children) {
        items_remove = _.union(items_remove, _.where(filters, { 'parent_display': filter_id }));
        if (selected.filter_primary === filter_id) {
          selected.filter_primary = false;
        }
      }
      return $q.when().then(function () {
        _(items_remove).forEach(function (item) {
          if (_.has(selected.option_desc, item.id)) {
            selected.option_desc[item.id] = null;
            $location.search(item.id, null);
          }
          if (!_.has(selected.filters, item.id)) {
            return;
          }
          if (_.isUndefined(option_id)) {
            selected.filters_options[item.id] = item.form_type === 'checkbox' ? _.zipObject(_.pluck(item.options, 'id'), [false]) : {};
          }
          if (item.id !== filter_id) {
            item.active = false;
            _.find(filters, { 'id': item.id }).active = false;
          }
          _.find(filters, { 'id': item.id }).has_selected = '';
          delete selected.filters[item.id];
          $scope.updateOptionsDisplay(item, 'remove', true);
        });
      }).then(function () {
        if (_.size(selected.filters) === 0) {
          $scope.resetFilters('all', !_.isUndefined(option_id));
        } else {
          $scope.applyFilters('update', filter_id);
          if (filters[selected.filter_active.index].id === filter_id && !_.isNull(this_filter.parent_display) || filters[selected.filter_active.index].id !== filter_id && !_.has(selected.filters, filters[selected.filter_active.index].id) && this_filter.has_children) {
            $timeout(function () {
              angular.element(document.getElementById(element_id)).triggerHandler('click');
            }, 0);
          }
        }
      });
    };
    $scope.updateOptionsDisplay = function (this_filter, action, display_update) {
      var display_index, join_str;
      var selected = $scope.data.selected;
      var titles_obj = {};
      var getTitles = function () {
        var titles = [];
        _(selected.filters[this_filter.id]).forOwn(function (option, index, group) {
          if (_.contains([
              'select',
              'checkbox'
            ], this_filter.form_type)) {
            titles.push(_.pluck(_.where(this_filter.options, { 'id': option }), 'title'));
            join_str = ', ';
          } else if (_.contains(['select_cascade'], this_filter.form_type)) {
            join_str = ' > ';
            if (index > 0) {
              titles.push(_.pluck(_.where(this_filter.options[index][group[index - 1]], { 'id': option }), 'title'));
            } else {
              titles.push(_.pluck(_.where(this_filter.options[index], { 'id': option }), 'title'));
            }
          }
          if (action === 'add') {
            if (_.contains([
                'select',
                'select_cascade'
              ], this_filter.form_type)) {
              _.assign(selected.filters_options, _.zipObject([this_filter.id], [_.flatten(titles)]));
            }
          }
        });
        return titles;
      };
      if (display_update) {
        display_index = _.findIndex(selected.filters_display, this_filter.id);
        if (display_index >= 0) {
          selected.filters_display.splice(display_index, 1);
        }
      } else {
        titles_obj[this_filter.id] = [
          this_filter.title,
          _(getTitles()).flatten().join(join_str)
        ];
        display_index = _.findIndex(selected.filters_display, this_filter.id);
        if (display_index >= 0) {
          selected.filters_display[display_index] = titles_obj;
        } else {
          selected.filters_display.push(titles_obj);
        }
      }
    };
    function forceRefreshOnSafari(element) {
      if (navigator.vendor && navigator.vendor.indexOf('Apple') > -1) {
        element.hideOnSafari = true;
        $timeout(function () {
          element.hideOnSafari = false;
          $rootScope.$digest();
        }, 10, false);
      }
    }
    $scope.changeSort = function (index) {
      var selected = $scope.data.labels.main.columns[index];
      if (!selected.sort_by && _.isNull($scope.data.filtered.search)) {
        _($scope.data.labels.main.columns).forEach(function (column) {
          column.sort_by = _.isEqual(column.sort_keys, selected.sort_keys) ? true : false;
        });
        $scope.toggleDetail();
        $scope.applySort();
        var column = $scope.data.labels.main.columns[index];
        forceRefreshOnSafari(column);
      }
    };
    $scope.applySort = function () {
      var column = _.find($scope.data.labels.main.columns, { 'sort_by': true });
      var sort_keys = [];
      if (column.title === 'Cloud Service Provider Name') {
        sort_keys = ['+name'];
      } else if (column.title === 'Tier') {
        sort_keys = [
          '+tier_id',
          '-focus_partner',
          '+name'
        ];
      } else if (column.title === 'Cloud Partner Connect') {
        sort_keys = [
          '-cloud_partner_connect',
          '+tier_id',
          '-focus_partner',
          '+name'
        ];
      }
      $scope.data.filtered.main = $filter('orderBy')($scope.data.filtered.main, sort_keys);
    };
    $scope.applySortDefault = function () {
      var sort_keys = [
          '+tier_id',
          '-focus_partner',
          '+name'
        ];
      $scope.data.filtered.main.map(function (provider) {
        var providerHasFocusPartner = !!_.find(_.keys(provider.filters.service_offering), function (service_offering_key) {
            var service_offering_array = provider.filters.service_offering[service_offering_key];
            var serviceHasFocusPartner = !!_.find(service_offering_array, function (service_offering) {
                var focusPartnerYes = !!_.find(service_offering.focus_partner, function (focus_partner_value) {
                    return focus_partner_value.toLowerCase() === 'yes' ? 1 : 0;
                  });
                return focusPartnerYes;
              });
            return serviceHasFocusPartner;
          });
        provider.focus_partner = providerHasFocusPartner ? 1 : 0;
      });
      $scope.data.filtered.main = $filter('orderBy')($scope.data.filtered.main, sort_keys);
    };
    $scope.toggleDetail = function (provider_id) {
      var doToggleDetail = function () {
        _(document.querySelectorAll('[popover]')).forEach(function (item) {
          var scope = angular.element(item).scope();
          var offset = 0;
          if (scope.$last && !scope.tt_isOpen) {
            if (_.isUndefined(scope.provider.is_open) || !scope.provider.is_open) {
              return;
            }
          }
          var popover = angular.element(item).next();
          if (angular.element(popover).hasClass('popover')) {
            if (!_.isUndefined(provider_id) && scope.provider.id === selected.id) {
              if (scope.tt_isOpen) {
                scope.provider.is_open = true;
                if (!_.isNull($scope.data.filtered.search)) {
                  $scope.scrollTo();
                } else {
                  if (_.isEmpty(document.querySelectorAll('main > .app-content.ui-scrollfix'))) {
                    if ($scope.isXSmall()) {
                      if (_.isUndefined($scope.data.selected.xs_nav_open) || _.isNull($scope.data.selected.xs_nav_open)) {
                        offset = -jQuery('#headerWrap').height() - jQuery('.app-nav').height();
                      } else {
                        offset = -jQuery('#headerWrap').height() - jQuery('.app-nav').height();
                      }
                    } else {
                      offset = -jQuery('#headerWrap').height() - jQuery('.app-nav').height() - jQuery('.filters-selected').height();
                    }
                  } else {
                    if ($scope.isXSmall()) {
                      if (_.isUndefined($scope.data.selected.xs_nav_open) || _.isNull($scope.data.selected.xs_nav_open)) {
                        offset = -jQuery('#headerWrap').height() - jQuery('.app-nav').height();
                      } else {
                        offset = -jQuery('#headerWrap').height() - jQuery('.app-nav').height();
                      }
                    } else {
                      offset = -jQuery('header').height() - (jQuery('.app-nav').height() - 6) - jQuery('.filters-selected').height();
                    }
                  }
                  $scope.scrollTo('#provider-' + selected.id, offset);
                }
              } else {
                selected.is_open = false;
              }
            } else {
              scope.tt_isOpen = false;
              scope.provider.is_open = false;
              angular.element(popover).remove();
            }
          }
        });
      };
      if (_.isUndefined(provider_id)) {
        doToggleDetail();
        return;
      }
      var selected = _.find($scope.data.providers, { 'id': provider_id });
      var element = angular.element(document.getElementById('provider-' + selected.id));
      var labels = $scope.data.labels.detail;
      var doShowHide = function () {
        if (element.scope().tt_isOpen) {
          element.triggerHandler('hide');
        } else {
          element.triggerHandler('show');
        }
      };
      if (_.isUndefined(selected.detail)) {
        selected.detail = getResource.get({
          'resource': 'ServiceProviderSearchSpecDetail',
          'serviceProviderId': selected.id
        });
        selected.detail.$promise.then(function () {
          var services = _.find($scope.data.filters, { 'id': labels.keys.services });
          var products = _.find($scope.data.filters, { 'id': labels.keys.products });
          var html = '';
          if (!_.isEmpty(selected.detail.resources)) {
            html += '<h5 class="resources">' + labels.titles.resources + '</h5>' + '<ul class="list-inline">';
            _(selected.detail.resources).forEach(function (resource) {
              html += '<li><a href="' + resource.url + '" target="_blank">';
              html += resource.title + '</a></li>';
            });
            html += '</ul>';
          }
          if (!_.isEmpty(selected.detail.contacts)) {
            html += '<h5 class="contacts">' + labels.titles.contacts + '</h5>';
            html += '<div>';
            _(selected.detail.contacts).forEach(function (contact) {
              html += '<p>' + '<span class="contact-title">' + contact.title + '</span><br />' + contact.name + '<br />' + contact.phone + '<br />' + '<a href="mailto:' + contact.email + '">' + contact.email + '</a></span></p>';
            });
            html += '</div>';
          }
          if (!_.isEmpty(selected.filters[labels.keys.services])) {
            html += '<table class="services-resellers table table-responsive"><thead><tr>' + '<th><h5>' + labels.titles.offerings + '</h5></th>' + '<th><h5>' + labels.titles.products + '</h5></th>' + '</tr></thead><tbody>';
            _(selected.filters[labels.keys.services]).forEach(function (val, key) {
              var service = _.find(services.options, { 'id': key });
              var product_ids = _.uniq(_.flatten(_.pluck(val, labels.keys.products)));
              var product_names = [];
              var get_product;
              if (_.isUndefined(service) || _.isEmpty(service)) {
                return;
              }
              _(product_ids).forEach(function (product_id) {
                if (!_.isEmpty(product_id)) {
                  get_product = _.find(products.options, { 'id': product_id });
                  if (!_.isEmpty(get_product)) {
                    product_names.push(get_product.title);
                  }
                }
              });
              html += '<tr><td>' + service.title + '</td><td>' + product_names.join(', ') + '</td></tr>';
            });
            html += '</tbody></table>';
          }
          if (!_.isEmpty(selected.detail.resellers)) {
            html += '<table class="services-resellers table table-responsive"><thead><tr>' + '<th><h5>' + labels.titles.reseller_coverage + '</h5></th>';
            if (!_.isEmpty(_.flatten(_.pluck(selected.detail.resellers, 'providers')))) {
              html += '<th><h5>' + labels.titles.reseller_providers + '</h5></th>';
            }
            html += '</tr></thead><tbody>';
            _(selected.detail.resellers).forEach(function (resellers) {
              html += '<tr><td>' + resellers.theater + '</td>';
              if (!_.isEmpty(resellers.providers)) {
                html += '<td>';
                _(resellers.providers).forEach(function (provider) {
                  html += '<a href="' + provider.url + '" target="_blank">';
                  html += provider.name + '</a><br />';
                });
                html += '</td>';
              }
              html += '</tr>';
            });
            html += '</tbody></table>';
          }
          selected.detail.html = html;
        }).then(function () {
          $timeout(function () {
            doShowHide();
          }, 0).then(function () {
            return $timeout(function () {
              doToggleDetail();
            }, 0);
          });
        });
      } else {
        $timeout(function () {
          doShowHide();
        }, 0).then(function () {
          return $timeout(function () {
            doToggleDetail();
          }, 0);
        });
      }
    };
    $scope.toggleFilterLevel = function () {
      var is_secondary = !_.isNull(this.item.parent_display);
      var filters = $scope.data.filters;
      var active = $scope.data.selected.filter_active;
      if (!_.isNull(active) && active.index !== this.$index && filters[active.index].parent_display !== is_secondary) {
        filters[active.index].active = false;
      }
      $scope.data.selected.filter_active = {
        'index': this.$index,
        'is_secondary': is_secondary
      };
    };
    $scope.confirmAction = function (action) {
      var modal, filter, filter_id, option, has_children;
      var selected = $scope.data.selected;
      var labels = $scope.data.labels.remove;
      var items_remove = [];
      if (action === 'add') {
        filter = this.item;
        filter_id = filter.id;
        has_children = filter.has_children;
        option = this.option;
        if (option.disabled) {
          return;
        } else if (!has_children || has_children && !_.has(selected.filters, filter_id) || has_children && _.size(selected.filters) < 1) {
          $scope.addFilter(filter, option);
          $location.search(this.item.id, this.option.id);
          return;
        }
        items_remove = _.pluck(_.where($scope.data.filters, { 'parent': filter_id }), 'id');
      } else if (action === 'remove') {
        filter_id = this.id;
        has_children = _.find($scope.data.filters, { 'id': filter_id }).has_children;
        if (!has_children || has_children && _.size(selected.filters) === 1) {
          disableCheckMarks(filter_id);
          $scope.removeFilter(filter_id);
          $location.search(filter_id, null);
          $scope.data.selected.filter_primary = true;
          return;
        }
      } else if (action === 'single') {
        if (!_.isNull($scope.data.filtered.search) || _.isEmpty(selected.filters)) {
          $scope.toggleXSmall('search');
          $scope.applyFilters('single');
          return;
        }
      }
      modal = $modal.open({
        controller: $scope.confirmActionCtrl,
        template: '<div class="modal-body"><h6>' + labels.header + '</h6><p>' + (action === 'single' ? labels.body.single : labels.body[filter_id]) + '</p></div><div class="modal-footer">' + '<button class="btn" ng-click="cancel()">' + labels.confirm.no + '</button>' + '<button class="btn" ng-click="ok()">' + labels.confirm.yes + '</button></div>'
      });
      if (action === 'add') {
        modal.result.then(function () {
          $q.when().then(function () {
            _(items_remove).forEach(function (id) {
              if (_.has(selected.filters, id)) {
                $scope.removeFilter(id);
              }
            });
          }).then(function () {
            $scope.addFilter(filter, option);
          });
        }, function () {
        });
      } else if (action === 'remove') {
        modal.result.then(function () {
          $scope.removeFilter(filter_id);
          $location.search(filter_id, null);
        }, function () {
        });
      } else if (action === 'single') {
        modal.result.then(function () {
          $scope.toggleXSmall('search');
          $scope.applyFilters('single');
        }, function () {
          $scope.data.selected.search = null;
        });
      }
    };
    $scope.confirmActionCtrl = [
      '$scope',
      '$modalInstance',
      function ($scope, $modalInstance) {
        $scope.ok = function () {
          $modalInstance.close('result');
        };
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      }
    ];
    $scope.isXSmall = function () {
      var width = window.innerWidth || document.documentElement.clientWidth;
      return width < 768;
    };
    $scope.toggleXSmall = function (str) {
      if (!$scope.isXSmall() || !_.isString(str)) {
        return;
      }
      var selected = $scope.data.selected;
      _([
        'nav',
        'search',
        'filters'
      ]).forEach(function (type) {
        var type_str = 'xs_' + type + '_open';
        if (type === str) {
          if (_.isUndefined(selected[type_str]) || _.isNull(selected[type_str])) {
            selected[type_str] = 'Done';
          } else {
            selected[type_str] = null;
          }
        } else {
          selected[type_str] = null;
        }
      });
      if (str !== 'nav') {
        $scope.scrollTo();
      }
    };
    $scope.isXSmallDevice = function () {
      return window.matchMedia && window.matchMedia('(max-device-width: 400px)').matches;
    };
    $scope.scrollTo = function (element, offset) {
      var top = 0;
      if (!_.isUndefined(element)) {
        top = document.querySelectorAll(element)[0].offsetTop + (_.isUndefined(offset) ? 0 : offset);
      }
      if (_.isFunction(window.jQuery)) {
        jQuery('html, body').animate({ scrollTop: top }, 'slow');
      } else {
        window.scrollTo(0, top);
      }
    };
    $scope.slideFilters = function (event) {
      if (!$scope.isXSmall()) {
        return;
      }
      if (_.contains([
          'panmove',
          'panend'
        ], event.type) && (!_.contains([
          'LI',
          'UL'
        ], event.target.parentNode.nodeName) || _.isNull($scope.data.selected.filter_primary))) {
        return;
      }
      var margin_left = 0;
      var get_margin_left = 0;
      var filter_ref = [];
      var distance;
      if (_.isUndefined($scope.data.slide_stops)) {
        $scope.data.slide_stops = [{
            'id': $scope.data.filters[0].id,
            'html_id': 'filter-' + $scope.data.filters[0].id,
            'position': 0
          }];
        _.filter($scope.data.filters, 'parent_display').forEach(function (item, index) {
          $scope.data.slide_stops.push({
            'id': item.id,
            'html_id': 'filter-' + item.id,
            'position': 0 - (index + 1) * 128
          });
        });
      }
      if (event.type === 'click') {
        margin_left = _.find($scope.data.slide_stops, { 'id': this.item.id }).position;
      } else {
        distance = _.parseInt(event.distance * 0.25);
      }
      _(document.querySelectorAll('.filters > div > div:first-child')).forEach(function (item) {
        var item_dom = angular.element(item);
        if (!_.isEmpty(item_dom.css('margin-left'))) {
          get_margin_left = _.parseInt(item_dom.css('margin-left').split('px')[0]);
        }
        if (event.type === 'click' && margin_left === get_margin_left) {
          return false;
        }
        $q.when().then(function () {
          if (event.direction === 2) {
            if (event.type === 'panmove') {
              margin_left = get_margin_left - distance;
            } else if (event.type === 'panend') {
              margin_left = get_margin_left - get_margin_left % 128 - 128;
            }
          } else if (event.direction === 4) {
            if (event.type === 'panmove') {
              margin_left = get_margin_left + distance;
            } else if (event.type === 'panend') {
              margin_left = get_margin_left - get_margin_left % 128;
            }
            if (margin_left > -128) {
              margin_left = 0;
            }
          }
        }).then(function () {
          if (event.type !== 'click' && margin_left < _.findLast($scope.data.slide_stops).position) {
            margin_left = _.findLast($scope.data.slide_stops);
          }
          $timeout(function () {
            item_dom.css({ 'margin-left': margin_left + 'px' });
            if (event.type === 'panend') {
              filter_ref[0] = _.find($scope.data.slide_stops, { 'position': margin_left });
              filter_ref[1] = angular.element(document.getElementById(filter_ref[0].html_id)), angular.element(filter_ref[1]).triggerHandler('click');
              filter_ref[1].children().triggerHandler('click');
            }
          }, 0);
        });
      });
    };
    $scope.setFilterCSS = function () {
      _($scope.data.filters).forEach(function (item) {
        if (_.isString(item.icon) && item.icon.length > 0) {
          item.css = { 'background-image': 'url(\'' + $scope.data.base_url + item.icon + '\')' };
        }
      });
    };
    var refreshPage = false;
    var flagAddFilter = false;
    $scope.init = function () {
      var deferred = $q.defer();
      if ($scope.data.filters) {
        var keyFilters = CacheSrv.getKeysFilters();
        for (var i = 0, len = keyFilters.length; i < len; i++) {
          var option = parse(keyFilters[i]);
          if (option) {
            var filterObject = CacheSrv.getFilter(keyFilters[i], option, $scope.data.filters);
            if (filterObject.filter) {
              refreshPage = true;
              for (var j = 0, lenj = filterObject.option.length; j < lenj; j++) {
                $scope.addFilter(filterObject.filter, filterObject.option[j]);
                if (filterObject.filter.form_type === 'checkbox') {
                  flagAddFilter = true;
                  $scope.checkbox.push(filterObject);
                  flagAddFilter = false;
                }
              }
            }
          }
        }
      }
      refreshPage = false;
      deferred.resolve();
      return deferred.promise;
    };
    $scope.checkbox = [];
    function updateCheckboxSstatus() {
      for (var i = 0, leni = $scope.checkbox.length; i < leni; i++) {
        var filterObject = $scope.checkbox[i];
        for (var j = 0, lenj = filterObject.option.length; j < lenj; j++) {
          if (!jQuery('#' + filterObject.filter.id + '-' + filterObject.option[j].id).hasClass('active')) {
            jQuery('#' + filterObject.filter.id + '-' + filterObject.option[j].id).addClass('active');
            if (filterObject.filter.id === 'public_sector' || filterObject.filter.id === 'credit_card_swipe') {
              $location.search(filterObject.filter.id, filterObject.option[j].id);
            }
          }
        }
      }
    }
    var unregister = $scope.$watch('checkbox', function () {
        if (!flagAddFilter) {
          updateCheckboxSstatus();
        }
      }, true);
    function disableCheckMarks(filter_id) {
      var selected = $scope.data.selected.filters[filter_id];
      for (var i = 0; i < selected.length; i++) {
        if (jQuery('#' + filter_id + '-' + selected[i]).hasClass('active')) {
          jQuery('#' + filter_id + '-' + selected[i]).removeClass('active');
          flagAddFilter = true;
        }
      }
    }
    $scope.resetActiveCheckbox = function (filter_id, option_id) {
      var element_id = jQuery('#' + filter_id + '-' + option_id);
      if (!element_id.hasClass('active')) {
        element_id.removeClass('active');
        flagAddFilter = true;
      }
    };
    function refresh() {
      MockSrvApi.getBlueLevelBE().then(function (response) {
        $scope.data = response;
        $scope.data.is_cpc = false;
        var search = window.location.search;
        var params = {};
        if (search.indexOf('?cpc=') > -1 || search.indexOf('&cpc=') > -1) {
          _(search.split('?')[1].split('&')).forEach(function (param) {
            params[param.split('=')[0]] = param.split('=')[1];
          });
          if (params.cpc && params.cpc === 'yes') {
            $scope.data.is_cpc = true;
            $scope.data.providers = _.filter($scope.data.providers, { 'cloud_partner_connect': 'Yes' });
          }
        }
        $scope.data.filtered = {
          'main': {},
          'search': null,
          'filters': {},
          'counts': {
            'main': $scope.data.providers.length,
            'groups': [
              [],
              []
            ]
          }
        };
        $scope.data.selected = {
          'filters': {},
          'filters_display': [],
          'filters_options': {},
          'filter_primary': true,
          'filter_active': null,
          'option_desc': {},
          'search': null
        };
        $scope.init().then(function () {
          $scope.applyFilters('defaultFilters');
          $scope.setFilterCSS();
        });
      });
    }
    refresh();
  }
]);
/*
describe( 'AppCtrl', function() {
	describe( 'isCurrentUrl', function() {
		var AppCtrl, $location, $scope;

		beforeEach( module( 'emc_service_providers' ) );

		beforeEach( inject( function( $controller, _$location_, $rootScope ) {
			$location = _$location_;
			$scope = $rootScope.$new();
			AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
		}));

		it( 'should pass a dummy test', inject( function() {
			expect( AppCtrl ).toBeTruthy();
		}));
	});
});
*/
angular.module('appFilters').service('CacheSrv', [
  '$rootScope',
  function ($rootScope) {
    var service = {}, selectFilterKeysOptions = [
        'service_offering',
        'tier',
        'market',
        'cloud_hq_location',
        'emc_product',
        'service_type',
        'geographical',
        'datacenter_location',
        'theater',
        'credit_card_swipe',
        'public_sector',
        'contract_type',
        'emc_certified_cloud'
      ];
    service.getKeysFilters = function () {
      return selectFilterKeysOptions;
    };
    function getGeographicalOptionsFilter(filterObject, value, parentId, optionsFilter) {
      var output = [];
      if (optionsFilter[1].hasOwnProperty(value)) {
        output = optionsFilter[0];
      } else if (optionsFilter[1].hasOwnProperty(parentId)) {
        output = optionsFilter[1][parentId];
      } else if (optionsFilter[2].hasOwnProperty(parentId)) {
        output = optionsFilter[2][parentId];
      }
      return output;
    }
    function getCloudHqLocationOptionsFilter(filterObject, value, parentId, optionsFilter) {
      if (value === 'ams' || value === 'apj' || value === 'emea') {
        return filterObject.filter.options[0];
      } else {
        if (parentId === 'apj') {
          return optionsFilter[1].apj;
        }
        if (parentId === 'ams') {
          return optionsFilter[1].ams;
        }
        if (parentId === 'emea') {
          return optionsFilter[1].emea;
        }
        if (parentId === 'aus') {
          return optionsFilter[2].aus;
        }
        if (parentId === 'bra') {
          return optionsFilter[2].bra;
        }
        if (parentId === 'can') {
          return optionsFilter[2].can;
        }
        if (parentId === 'mex') {
          return optionsFilter[2].mex;
        }
        if (parentId === 'usa') {
          return optionsFilter[2].usa;
        }
      }
    }
    function getDataCenterLocationOptionsFilter(filterObject, value, parentId, optionsFilter) {
      if (value === 'ams' || value === 'apj' || value === 'emea') {
        return filterObject.filter.options[0];
      } else {
        if (parentId === 'apj') {
          return optionsFilter[1].apj;
        }
        if (parentId === 'ams') {
          return optionsFilter[1].ams;
        }
        if (parentId === 'emea') {
          return optionsFilter[1].emea;
        }
        if (parentId === 'aus') {
          return optionsFilter[2].aus;
        }
        if (parentId === 'bra') {
          return optionsFilter[2].bra;
        }
        if (parentId === 'can') {
          return optionsFilter[2].can;
        }
        if (parentId === 'mex') {
          return optionsFilter[2].mex;
        }
        if (parentId === 'usa') {
          return optionsFilter[2].usa;
        }
      }
    }
    service.getFilter = function (key, value, filters) {
      var filterObject = {
          filter: '',
          option: []
        }, values = [];
      if (value.indexOf(',') < 0) {
        values.push(value);
      } else {
        values = value.split(',');
      }
      for (var i = 0, len = filters.length; i < len; i++) {
        if (filters[i].id === key) {
          filterObject.filter = filters[i];
          var parentId = null;
          for (var j = 0, len2 = values.length; j < len2; j++) {
            var optionsFilter = filterObject.filter.options;
            if (filterObject.filter.id === 'geographical') {
              optionsFilter = getGeographicalOptionsFilter(filterObject, values[j], parentId, optionsFilter);
              parentId = values[j];
            }
            console.log(parentId);
            if (filterObject.filter.id === 'cloud_hq_location') {
              optionsFilter = getCloudHqLocationOptionsFilter(filterObject, values[j], parentId, optionsFilter);
              parentId = values[j];
            }
            if (filterObject.filter.id === 'datacenter_location') {
              optionsFilter = getDataCenterLocationOptionsFilter(filterObject, values[j], parentId, optionsFilter);
              parentId = values[j];
            }
            var result = _.where(optionsFilter, { id: values[j] });
            if (result) {
              filterObject.option.push(result[0]);
            }
          }
        }
      }
      return filterObject;
    };
    return service;
  }
]);
var isIE10 = false;
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  return false;
}
isIE10 = detectIE();
if (isIE10) {
  (function ($) {
    function measureWidth(deflt) {
      var dummy = $('<span></span>').text(deflt).css('visibility', 'hidden').appendTo(document.body);
      var result = dummy.width();
      dummy.remove();
      return result;
    }
    function toggleLabel(e) {
      var input = $(e.target);
      var deflt = input.attr('title');
      var span = input.prev('div');
      setTimeout(function () {
        if (!input.val() || input.val() == deflt) {
          span.css('visibility', '');
          if (deflt) {
            span.css('margin-left', measureWidth(deflt) + 2 + 'px');
          }
        } else {
          span.css('visibility', 'hidden');
        }
      }, 0);
    }
    $(document).on('cut', 'input, textarea', toggleLabel);
    $(document).on('keydown', 'input, textarea', toggleLabel);
    $(document).on('paste', 'input, textarea', toggleLabel);
    $(document).on('change', 'select', toggleLabel);
    $(document).on('focusin', 'input, textarea', function () {
      $(this).prev('span').css('color', '#ccc');
    });
    $(document).on('focusout', 'input, textarea', function (e) {
      toggleLabel(e);
      $(this).prev('span').css('color', '#999');
    });
    function init() {
      $('input, textarea, select').each(toggleLabel);
    }
    $(init);
    $(window).load(function () {
      setTimeout(init, 0);
    });
    function removePlaceholder() {
      if ($('.placeholder-ie input').attr('placeholder')) {
        $('.placeholder-ie input').removeAttr('placeholder');
        console.log('placeholder removed');
      } else {
        setTimeout(removePlaceholder, 100);
        console.log('placeholder not loaded');
      }
    }
    $(document).ready(function () {
      $('body').addClass('ie10');
      removePlaceholder();
    });
  }(jQuery));
}
(function (window, angular, Hammer) {
  'use strict';
  var gestureTypes = [
      'hmPan:pan',
      'hmPanstart:panstart',
      'hmPanmove:panmove',
      'hmPanend:panend',
      'hmPancancel:pancancel',
      'hmPanleft:panleft',
      'hmPanright:panright',
      'hmPanup:panup',
      'hmPandown:pandown',
      'hmPinch:pinch',
      'hmPinchstart:pinchstart',
      'hmPinchmove:pinchmove',
      'hmPinchend:pinchend',
      'hmPinchcancel:pinchcancel',
      'hmPinchin:pinchin',
      'hmPinchout:pinchout',
      'hmPress:press',
      'hmRotate:rotate',
      'hmRotatestart:rotatestart',
      'hmRotatemove:rotatemove',
      'hmRotateend:rotateend',
      'hmRotatecancel:rotatecancel',
      'hmSwipe:swipe',
      'hmSwipeleft:swipeleft',
      'hmSwiperight:swiperight',
      'hmSwipeup:swipeup',
      'hmSwipedown:swipedown',
      'hmTap:tap',
      'hmDoubletap:doubletap'
    ];
  angular.module('hmTouchEvents', []).directive('hmCustom', hammerCustomDirective);
  angular.forEach(gestureTypes, function (type) {
    var directive = type.split(':'), directiveName = directive[0], eventName = directive[1];
    angular.module('hmTouchEvents').directive(directiveName, [
      '$parse',
      '$window',
      function ($parse, $window) {
        return {
          'restrict': 'A',
          'link': function (scope, element, attrs) {
            var handlerName = attrs[directiveName], handlerExpr = $parse(handlerName), handler = function (event) {
                var phase = scope.$root.$$phase, fn = function () {
                    handlerExpr(scope, { $event: event });
                  };
                if (scope[handlerName]) {
                  scope[handlerName](event);
                } else {
                  if (phase === '$apply' || phase === '$digest') {
                    fn();
                  } else {
                    scope.$apply(fn);
                  }
                }
              }, opts = angular.fromJson(attrs.hmOptions), hammer = element.data('hammer');
            if (!Hammer || !$window.addEventListener) {
              if (directiveName === 'hmTap') {
                element.bind('click', handler);
              }
              if (directiveName === 'hmDoubleTap') {
                element.bind('dblclick', handler);
              }
              return;
            }
            if (!hammer) {
              hammer = new Hammer(element[0], opts);
              element.data('hammer', hammer);
            }
            hammer.on(eventName, handler);
            scope.$on('$destroy', function () {
              hammer.off(eventName, handler);
            });
          }
        };
      }
    ]);
  });
  function hammerCustomDirective($parse) {
    return {
      'restrict': 'A',
      'link': function (scope, element, attrs) {
        var apply = scope.safeApply || scope.$apply, hammer = element.data('hammer'), opts = angular.fromJson(attrs.hmOptions), recognizerList = angular.fromJson(attrs.hmCustom);
        if (!hammer) {
          hammer = new Hammer.Manager(element[0], opts);
          element.data('hammer', hammer);
        }
        angular.forEach(recognizerList, function (options) {
          var expression, handler, recognizer;
          if (options.directions) {
            options.directions = parseDirections(options.directions);
          }
          recognizer = hammer.get(options.event);
          if (recognizer) {
            recognizer.set(options);
          } else {
            addRecognizer(hammer, options);
          }
          if (options.recognizeWith) {
            recognizer.recognizeWith(options.recognizeWith);
          }
          if (options.requireFailure) {
            recognizer.requireFailure(options.requireFailure);
          }
          expression = $parse(options.val);
          handler = function (event) {
            var phase = scope.$root.$$phase, fn = function () {
                expression(scope, { $event: event });
              };
            if (scope[options.val]) {
              scope[options.val](event);
            } else {
              if (phase === '$apply' || phase === '$digest') {
                fn();
              } else {
                scope.$apply(fn);
              }
            }
          };
          hammer.on(options.event, handler);
          scope.$on('$destroy', function () {
            hammer.off(options.event, handler);
          });
        });
      }
    };
  }
  function addRecognizer(manager, options) {
    var recognizer;
    if (options && options.type && options.event) {
      if (options.type === 'pan') {
        recognizer = new Hammer.Pan(options);
      }
      if (options.type === 'pinch') {
        recognizer = new Hammer.Pinch(options);
      }
      if (options.type === 'press') {
        recognizer = new Hammer.Press(options);
      }
      if (options.type === 'rotate') {
        recognizer = new Hammer.Rotate(options);
      }
      if (options.type === 'swipe') {
        recognizer = new Hammer.Swipe(options);
      }
      if (options.type === 'tap') {
        recognizer = new Hammer.Tap(options);
      }
    }
    if (manager && recognizer) {
      manager.add(recognizer);
    }
  }
  function parseDirections(dirs) {
    var directions = 0;
    angular.forEach(dirs.split('|'), function (direction) {
      if (Hammer.hasOwnProperty(direction)) {
        directions = directions | Hammer[direction];
      }
    });
    return directions;
  }
}(window, window.angular, window.Hammer));
angular.module('angular-ui.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', [
  'buttonConfig',
  function (buttonConfig) {
    this.activeClass = buttonConfig.activeClass || 'active';
    this.toggleEvent = buttonConfig.toggleEvent || 'click';
  }
]).directive('btnRadio', function () {
  return {
    require: [
      'btnRadio',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };
      element.bind(buttonsCtrl.toggleEvent, function () {
        var isActive = element.hasClass(buttonsCtrl.activeClass);
        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}).directive('btnCheckbox', function () {
  return {
    require: [
      'btnCheckbox',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }
      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }
      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});
angular.module('angular-ui.dropdown', []).constant('dropdownConfig', { openClass: 'open' }).service('dropdownService', [
  '$window',
  '$document',
  function ($window, $document) {
    var openScope = null;
    var dropdownMenu = null;
    var $html = angular.element($document[0].querySelector('html'));
    this.open = function (dropdownScope) {
      if (!openScope) {
        $document.bind('click', closeDropdown);
        $document.bind('keydown', escapeKeyBind);
      }
      if (openScope && openScope !== dropdownScope) {
        openScope.isOpen = false;
      }
      openScope = dropdownScope;
      dropdownMenu = openScope.getToggleElement().next();
      if ((isFirefox() || isChrome()) && !isXSmall()) {
        dropdownMenu.bind('wheel', limitScroll);
      } else if (!isXSmall()) {
        dropdownMenu.bind('mouseenter', enterDropdown);
        dropdownMenu.bind('mouseleave', leaveDropdown);
      }
    };
    this.close = function (dropdownScope) {
      if (openScope === dropdownScope) {
        openScope = null;
        $document.unbind('click', closeDropdown);
        $document.unbind('keydown', escapeKeyBind);
        if (isFirefox() || isChrome()) {
          dropdownMenu.unbind('wheel', limitScroll);
        } else {
          leaveDropdown();
          dropdownMenu.unbind('mouseenter', enterDropdown);
          dropdownMenu.unbind('mouseleave', leaveDropdown);
        }
      }
    };
    var closeDropdown = function (evt) {
      var toggleElement = openScope.getToggleElement();
      if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
        return;
      }
      openScope.$apply(function () {
        openScope.isOpen = false;
      });
    };
    var escapeKeyBind = function (evt) {
      if (evt.which === 27) {
        openScope.focusToggleElement();
        closeDropdown();
      }
    };
    var enterDropdown = function () {
      $html.addClass('no-scroll');
    };
    var leaveDropdown = function () {
      $html.removeClass('no-scroll');
    };
    var limitScroll = function (evt) {
      var offsetTop = this.scrollTop + parseInt(evt.deltaY, 10);
      var offsetBottom = this.scrollHeight - this.getBoundingClientRect().height - offsetTop;
      if (offsetTop < 0 || offsetBottom < 0) {
        evt.preventDefault();
      } else {
        evt.stopImmediatePropagation();
      }
    };
    var isFirefox = function () {
      return navigator.userAgent.indexOf('Firefox') > -1;
    };
    var isChrome = function () {
      return navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Safari') === -1;
    };
    var isXSmall = function () {
      var width = $window.innerWidth || $document.documentElement.clientWidth;
      return width < 768;
    };
  }
]).controller('DropdownController', [
  '$scope',
  '$attrs',
  '$parse',
  'dropdownConfig',
  'dropdownService',
  '$animate',
  function ($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
    var self = this, scope = $scope.$new(), openClass = dropdownConfig.openClass, getIsOpen, setIsOpen = angular.noop, toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
    this.init = function (element) {
      self.$element = element;
      if ($attrs.isOpen) {
        getIsOpen = $parse($attrs.isOpen);
        setIsOpen = getIsOpen.assign;
        $scope.$watch(getIsOpen, function (value) {
          scope.isOpen = !!value;
        });
      }
    };
    this.toggle = function (open) {
      return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    };
    this.isOpen = function () {
      return scope.isOpen;
    };
    scope.getToggleElement = function () {
      return self.toggleElement;
    };
    scope.focusToggleElement = function () {
      if (self.toggleElement) {
        self.toggleElement[0].focus();
      }
    };
    scope.$watch('isOpen', function (isOpen, wasOpen) {
      $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
      if (isOpen) {
        scope.focusToggleElement();
        dropdownService.open(scope);
      } else {
        dropdownService.close(scope);
      }
      setIsOpen($scope, isOpen);
      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
        toggleInvoker($scope, { open: !!isOpen });
      }
    });
    $scope.$on('$locationChangeSuccess', function () {
      scope.isOpen = false;
    });
    $scope.$on('$destroy', function () {
      scope.$destroy();
    });
  }
]).directive('dropdown', function () {
  return {
    controller: 'DropdownController',
    link: function (scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init(element);
    }
  };
}).directive('dropdownToggle', function () {
  return {
    require: '?^dropdown',
    link: function (scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }
      dropdownCtrl.toggleElement = element;
      var toggleDropdown = function (event) {
        event.preventDefault();
        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function () {
            dropdownCtrl.toggle();
          });
        }
      };
      element.bind('click', toggleDropdown);
      element.attr({
        'aria-haspopup': true,
        'aria-expanded': false
      });
      scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });
      scope.$on('$destroy', function () {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});
angular.module('angular-ui.modal', [
  'angular-ui.transition',
  'template/modal/backdrop.html',
  'template/modal/window.html'
]).factory('$$stackedMap', function () {
  return {
    createNew: function () {
      var stack = [];
      return {
        add: function (key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function (key) {
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function () {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function () {
          return stack[stack.length - 1];
        },
        remove: function (key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function () {
          return stack.splice(stack.length - 1, 1)[0];
        },
        length: function () {
          return stack.length;
        }
      };
    }
  };
}).directive('modalBackdrop', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      link: function (scope) {
        scope.animate = false;
        $timeout(function () {
          scope.animate = true;
        });
      }
    };
  }
]).directive('modalWindow', [
  '$modalStack',
  '$timeout',
  function ($modalStack, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: 'template/modal/window.html',
      link: function (scope, element, attrs) {
        scope.windowClass = attrs.windowClass || '';
        $timeout(function () {
          scope.animate = true;
          element[0].focus();
        });
        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };
      }
    };
  }
]).factory('$modalStack', [
  '$transition',
  '$timeout',
  '$document',
  '$compile',
  '$rootScope',
  '$$stackedMap',
  function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
    var OPENED_MODAL_CLASS = 'modal-open';
    var backdropDomEl, backdropScope;
    var openedWindows = $$stackedMap.createNew();
    var $modalStack = {};
    function backdropIndex() {
      var topBackdropIndex = -1;
      var opened = openedWindows.keys();
      for (var i = 0; i < opened.length; i++) {
        if (openedWindows.get(opened[i]).value.backdrop) {
          topBackdropIndex = i;
        }
      }
      return topBackdropIndex;
    }
    $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
      if (backdropScope) {
        backdropScope.index = newBackdropIndex;
      }
    });
    function removeModalWindow(modalInstance) {
      var body = $document.find('body').eq(0);
      var modalWindow = openedWindows.get(modalInstance).value;
      openedWindows.remove(modalInstance);
      removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, checkRemoveBackdrop);
      body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
    }
    function checkRemoveBackdrop() {
      if (backdropDomEl && backdropIndex() == -1) {
        var backdropScopeRef = backdropScope;
        removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
          backdropScopeRef.$destroy();
          backdropScopeRef = null;
        });
        backdropDomEl = undefined;
        backdropScope = undefined;
      }
    }
    function removeAfterAnimate(domEl, scope, emulateTime, done) {
      scope.animate = false;
      var transitionEndEventName = $transition.transitionEndEventName;
      if (transitionEndEventName) {
        var timeout = $timeout(afterAnimating, emulateTime);
        domEl.bind(transitionEndEventName, function () {
          $timeout.cancel(timeout);
          afterAnimating();
          scope.$apply();
        });
      } else {
        $timeout(afterAnimating, 0);
      }
      function afterAnimating() {
        if (afterAnimating.done) {
          return;
        }
        afterAnimating.done = true;
        domEl.remove();
        if (done) {
          done();
        }
      }
    }
    $document.bind('keydown', function (evt) {
      var modal;
      if (evt.which === 27) {
        modal = openedWindows.top();
        if (modal && modal.value.keyboard) {
          $rootScope.$apply(function () {
            $modalStack.dismiss(modal.key);
          });
        }
      }
    });
    $modalStack.open = function (modalInstance, modal) {
      openedWindows.add(modalInstance, {
        deferred: modal.deferred,
        modalScope: modal.scope,
        backdrop: modal.backdrop,
        keyboard: modal.keyboard
      });
      var body = $document.find('body').eq(0), currBackdropIndex = backdropIndex();
      if (currBackdropIndex >= 0 && !backdropDomEl) {
        backdropScope = $rootScope.$new(true);
        backdropScope.index = currBackdropIndex;
        backdropDomEl = $compile('<div modal-backdrop></div>')(backdropScope);
        body.append(backdropDomEl);
      }
      var angularDomEl = angular.element('<div modal-window></div>');
      angularDomEl.attr('window-class', modal.windowClass);
      angularDomEl.attr('index', openedWindows.length() - 1);
      angularDomEl.attr('animate', 'animate');
      angularDomEl.html(modal.content);
      var modalDomEl = $compile(angularDomEl)(modal.scope);
      openedWindows.top().value.modalDomEl = modalDomEl;
      body.append(modalDomEl);
      body.addClass(OPENED_MODAL_CLASS);
    };
    $modalStack.close = function (modalInstance, result) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.resolve(result);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismiss = function (modalInstance, reason) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.reject(reason);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismissAll = function (reason) {
      var topModal = this.getTop();
      while (topModal) {
        this.dismiss(topModal.key, reason);
        topModal = this.getTop();
      }
    };
    $modalStack.getTop = function () {
      return openedWindows.top();
    };
    return $modalStack;
  }
]).provider('$modal', function () {
  var $modalProvider = {
      options: {
        backdrop: true,
        keyboard: true
      },
      $get: [
        '$injector',
        '$rootScope',
        '$q',
        '$http',
        '$templateCache',
        '$controller',
        '$modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
          var $modal = {};
          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
              return result.data;
            });
          }
          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }
          $modal.open = function (modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalInstance = {
                result: modalResultDeferred.promise,
                opened: modalOpenedDeferred.promise,
                close: function (result) {
                  $modalStack.close(modalInstance, result);
                },
                dismiss: function (reason) {
                  $modalStack.dismiss(modalInstance, reason);
                }
              };
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }
            var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;
              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });
                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }
              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass
              });
            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });
            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });
            return modalInstance;
          };
          return $modal;
        }
      ]
    };
  return $modalProvider;
});
angular.module('template/modal/backdrop.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/backdrop.html', '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>');
  }
]);
angular.module('template/modal/window.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/window.html', '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n' + '    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n' + '</div>');
  }
]);
angular.module('angular-ui.popover', [
  'angular-ui.tooltip',
  'template/popover/popover.html'
]).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('popover', 'popover', 'click');
  }
]);
angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/popover/popover.html', '<tr class="popover animated {{placement}}" ng-class="{ fadeInDown: isOpen(), fadeOutUp: !isOpen() }">\n' + '  <td class="popover-inner">\n' + '      <div class="popover-content" bind-html-unsafe="content"></div>\n' + '  </td>\n' + '</tr>\n' + '');
  }
]);
angular.module('angular-ui.position', []).factory('$position', [
  '$document',
  '$window',
  function ($document, $window) {
    function getStyle(el, cssprop) {
      if (el.currentStyle) {
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      return el.style[cssprop];
    }
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static') === 'static';
    }
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };
    return {
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = {
            top: 0,
            left: 0
          };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';
        var hostElPos, targetElWidth, targetElHeight, targetElPos;
        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');
        var shiftWidth = {
            center: function () {
              return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
              return hostElPos.left;
            },
            right: function () {
              return hostElPos.left + hostElPos.width;
            }
          };
        var shiftHeight = {
            center: function () {
              return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
              return hostElPos.top;
            },
            bottom: function () {
              return hostElPos.top + hostElPos.height;
            }
          };
        switch (pos0) {
        case 'right':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: shiftWidth[pos0]()
          };
          break;
        case 'left':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: hostElPos.left - targetElWidth
          };
          break;
        case 'bottom':
          targetElPos = {
            top: shiftHeight[pos0](),
            left: shiftWidth[pos1]()
          };
          break;
        default:
          targetElPos = {
            top: hostElPos.top - targetElHeight,
            left: shiftWidth[pos1]()
          };
          break;
        }
        return targetElPos;
      }
    };
  }
]);
angular.module('angular-ui.scrollfix', []).directive('uiScrollfix', [
  '$window',
  function ($window) {
    return {
      require: '^?uiScrollfixTarget',
      link: function (scope, elm, attrs, uiScrollfixTarget) {
        var top = elm[0].offsetTop, $target = uiScrollfixTarget && uiScrollfixTarget.$element || angular.element($window);
        if (!attrs.uiScrollfix) {
          attrs.uiScrollfix = top;
        } else if (typeof attrs.uiScrollfix === 'string') {
          if (attrs.uiScrollfix.charAt(0) === '-') {
            attrs.uiScrollfix = top - parseFloat(attrs.uiScrollfix.substr(1));
          } else if (attrs.uiScrollfix.charAt(0) === '+') {
            attrs.uiScrollfix = top + parseFloat(attrs.uiScrollfix.substr(1));
          }
        }
        function onScroll() {
          var offset;
          if ($target[0] === $window) {
            if (angular.isDefined($window.pageYOffset)) {
              offset = $window.pageYOffset;
            } else {
              var iebody = document.compatMode && document.compatMode !== 'BackCompat' ? document.documentElement : document.body;
              offset = iebody.scrollTop;
            }
          } else {
            offset = $target[0].scrollTop;
          }
          if (!elm.hasClass('ui-scrollfix') && offset > attrs.uiScrollfix) {
            elm.addClass('ui-scrollfix');
          } else if (elm.hasClass('ui-scrollfix')) {
            if (offset < attrs.uiScrollfix || $target[0] === $window && offset === 0) {
              elm.removeClass('ui-scrollfix');
            }
          }
        }
        $target.on('scroll', onScroll);
        scope.$on('$destroy', function () {
          $target.off('scroll', onScroll);
        });
      }
    };
  }
]).directive('uiScrollfixTarget', [function () {
    return {
      controller: [
        '$element',
        function ($element) {
          this.$element = $element;
        }
      ]
    };
  }]);
angular.module('angular-ui.tabs', []).controller('TabsetController', [
  '$scope',
  function TabsetCtrl($scope) {
    var ctrl = this, tabs = ctrl.tabs = $scope.tabs = [];
    ctrl.select = function (selectedTab) {
      angular.forEach(tabs, function (tab) {
        if (tab.active && tab !== selectedTab) {
          tab.active = false;
          tab.onDeselect();
        }
      });
      selectedTab.active = true;
      selectedTab.onSelect();
    };
    ctrl.addTab = function addTab(tab) {
      tabs.push(tab);
      if (tabs.length === 1 && angular.isDefined(tab.active)) {
        tab.active = true;
      } else if (tab.active) {
        ctrl.select(tab);
      }
    };
    ctrl.removeTab = function removeTab(tab) {
      var index = tabs.indexOf(tab);
      if (tab.active && tabs.length > 1) {
        var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
        ctrl.select(tabs[newActiveIndex]);
      }
      tabs.splice(index, 1);
    };
  }
]).directive('tabset', function () {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: { type: '@' },
    controller: 'TabsetController',
    template: '<div><div><ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></div></ul><div class="tab-content"><div class="tab-pane animated" ng-repeat="tab in tabs" ng-class="{active: tab.active, fadeInDown: tab.active}" tab-content-transclude="tab"></div></div></div>',
    link: function (scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
}).directive('tab', [
  '$parse',
  function ($parse) {
    return {
      require: '^tabset',
      restrict: 'EA',
      replace: true,
      template: '<li ng-class="{active: active, disabled: disabled}"><a ng-click="select()" tab-heading-transclude>{{heading}}</a></li>',
      transclude: true,
      scope: {
        active: '=?',
        heading: '@',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function () {
      },
      compile: function (elm, attrs, transclude) {
        return function postLink(scope, elm, attrs, tabsetCtrl) {
          scope.$watch('active', function (active) {
            if (active) {
              tabsetCtrl.select(scope);
            }
          });
          scope.disabled = false;
          if (attrs.disabled) {
            scope.$parent.$watch($parse(attrs.disabled), function (value) {
              scope.disabled = !!value;
            });
          }
          scope.select = function () {
            if (!scope.disabled) {
              scope.active = true;
            }
          };
          tabsetCtrl.addTab(scope);
          scope.$on('$destroy', function () {
            tabsetCtrl.removeTab(scope);
          });
          scope.$transcludeFn = transclude;
        };
      }
    };
  }
]).directive('tabHeadingTransclude', [function () {
    return {
      restrict: 'A',
      require: '^tab',
      link: function (scope, elm, attrs, tabCtrl) {
        scope.$watch('headingElement', function updateHeadingElement(heading) {
          if (heading) {
            elm.html('');
            elm.append(heading);
          }
        });
      }
    };
  }]).directive('tabContentTransclude', function () {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function (scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);
      tab.$transcludeFn(tab.$parent, function (contents) {
        angular.forEach(contents, function (node) {
          if (isTabHeading(node)) {
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName && (node.hasAttribute('tab-heading') || node.hasAttribute('data-tab-heading') || node.tagName.toLowerCase() === 'tab-heading' || node.tagName.toLowerCase() === 'data-tab-heading');
  }
});
angular.module('angular-ui.tooltip', [
  'angular-ui.position',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html'
]).provider('$tooltip', function () {
  var defaultOptions = {
      placement: 'top',
      animation: true,
      popupDelay: 0
    };
  var triggerMap = {
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur'
    };
  var globalOptions = {};
  this.options = function (value) {
    angular.extend(globalOptions, value);
  };
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    '$interpolate',
    function ($window, $compile, $timeout, $parse, $document, $position, $interpolate) {
      return function $tooltip(type, prefix, defaultTriggerShow) {
        var options = angular.extend({}, defaultOptions, globalOptions);
        function getTriggers(trigger) {
          var show = trigger || options.trigger || defaultTriggerShow;
          var hide = triggerMap[show] || show;
          return {
            show: show,
            hide: hide
          };
        }
        var directiveName = snake_case(type);
        var startSym = $interpolate.startSymbol();
        var endSym = $interpolate.endSymbol();
        var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'tt_title' + endSym + '" ' + 'content="' + startSym + 'tt_content' + endSym + '" ' + 'placement="' + startSym + 'tt_placement' + endSym + '" ' + 'animation="tt_animation" ' + 'is-open="tt_isOpen"' + '>' + '</div>';
        return {
          restrict: 'EA',
          scope: true,
          compile: function (tElem, tAttrs) {
            var tooltipLinker = $compile(template);
            return function link(scope, element, attrs) {
              var tooltip;
              var transitionTimeout;
              var popupTimeout;
              var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
              var triggers = getTriggers(undefined);
              var hasRegisteredTriggers = false;
              var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
              var positionTooltip = function () {
                var position, ttWidth, ttHeight, ttPosition;
                position = appendToBody ? $position.offset(element) : $position.position(element);
                ttWidth = tooltip.prop('offsetWidth');
                ttHeight = tooltip.prop('offsetHeight');
                switch (scope.tt_placement) {
                case 'right':
                  ttPosition = {
                    top: position.top + position.height / 2 - ttHeight / 2,
                    left: position.left + position.width
                  };
                  break;
                case 'bottom':
                  ttPosition = {
                    top: position.top + position.height,
                    left: position.left + position.width / 2 - ttWidth / 2
                  };
                  break;
                case 'left':
                  ttPosition = {
                    top: position.top + position.height / 2 - ttHeight / 2,
                    left: position.left - ttWidth
                  };
                  break;
                default:
                  ttPosition = {
                    top: position.top - ttHeight,
                    left: position.left + position.width / 2 - ttWidth / 2
                  };
                  break;
                }
                ttPosition.top += 'px';
                ttPosition.left += 'px';
                tooltip.css(ttPosition);
              };
              scope.tt_isOpen = false;
              function toggleTooltipBind() {
                if (!scope.tt_isOpen) {
                  showTooltipBind();
                } else {
                  hideTooltipBind();
                }
              }
              function showTooltipBind() {
                if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                  return;
                }
                if (scope.tt_popupDelay) {
                  popupTimeout = $timeout(show, scope.tt_popupDelay, false);
                  popupTimeout.then(function (reposition) {
                    reposition();
                  });
                } else {
                  show()();
                }
              }
              function hideTooltipBind() {
                scope.$apply(function () {
                  hide();
                });
              }
              function show() {
                if (!scope.tt_content) {
                  return angular.noop;
                }
                createTooltip();
                if (transitionTimeout) {
                  $timeout.cancel(transitionTimeout);
                }
                tooltip.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                });
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
                positionTooltip();
                scope.tt_isOpen = true;
                scope.$digest();
                return positionTooltip;
              }
              function hide() {
                scope.tt_isOpen = false;
                $timeout.cancel(popupTimeout);
                if (scope.tt_animation) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                } else {
                  removeTooltip();
                }
              }
              function createTooltip() {
                if (tooltip) {
                  removeTooltip();
                }
                tooltip = tooltipLinker(scope, function () {
                });
                scope.$digest();
              }
              function removeTooltip() {
                if (tooltip) {
                  tooltip.remove();
                  tooltip = null;
                }
              }
              attrs.$observe(type, function (val) {
                scope.tt_content = val;
                if (!val && scope.tt_isOpen) {
                  hide();
                }
              });
              attrs.$observe(prefix + 'Title', function (val) {
                scope.tt_title = val;
              });
              attrs.$observe(prefix + 'Placement', function (val) {
                scope.tt_placement = angular.isDefined(val) ? val : options.placement;
              });
              attrs.$observe(prefix + 'PopupDelay', function (val) {
                var delay = parseInt(val, 10);
                scope.tt_popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              });
              var unregisterTriggers = function () {
                if (hasRegisteredTriggers) {
                  element.unbind(triggers.show, showTooltipBind);
                  element.unbind(triggers.hide, hideTooltipBind);
                }
              };
              attrs.$observe(prefix + 'Trigger', function (val) {
                unregisterTriggers();
                triggers = getTriggers(val);
                if (triggers.show === triggers.hide) {
                  element.bind(triggers.show, toggleTooltipBind);
                } else {
                  element.bind(triggers.show, showTooltipBind);
                  element.bind(triggers.hide, hideTooltipBind);
                }
                hasRegisteredTriggers = true;
              });
              var animation = scope.$eval(attrs[prefix + 'Animation']);
              scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation;
              attrs.$observe(prefix + 'AppendToBody', function (val) {
                appendToBody = angular.isDefined(val) ? $parse(val)(scope) : appendToBody;
              });
              if (appendToBody) {
                scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                  if (scope.tt_isOpen) {
                    hide();
                  }
                });
              }
              scope.$on('$destroy', function onDestroyTooltip() {
                $timeout.cancel(transitionTimeout);
                $timeout.cancel(popupTimeout);
                unregisterTriggers();
                removeTooltip();
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]).directive('bindHtmlUnsafe', function () {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" ng-bind="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('angular-ui.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function ($q, $timeout, $rootScope) {
    var $transition = function (element, trigger, options) {
      options = options || {};
      var deferred = $q.defer();
      var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
      var transitionEndHandler = function (event) {
        $rootScope.$apply(function () {
          element.unbind(endEventName, transitionEndHandler);
          deferred.resolve(element);
        });
      };
      if (endEventName) {
        element.bind(endEventName, transitionEndHandler);
      }
      $timeout(function () {
        if (angular.isString(trigger)) {
          element.addClass(trigger);
        } else if (angular.isFunction(trigger)) {
          trigger(element);
        } else if (angular.isObject(trigger)) {
          element.css(trigger);
        }
        if (!endEventName) {
          deferred.resolve(element);
        }
      });
      deferred.promise.cancel = function () {
        if (endEventName) {
          element.unbind(endEventName, transitionEndHandler);
        }
        deferred.reject('Transition cancelled');
      };
      return deferred.promise;
    };
    var transElement = document.createElement('trans');
    var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
    var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };
    function findEndEventName(endEventNames) {
      for (var name in endEventNames) {
        if (transElement.style[name] !== undefined) {
          return endEventNames[name];
        }
      }
    }
    $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
    $transition.animationEndEventName = findEndEventName(animationEndEventNames);
    return $transition;
  }
]);
angular.module('angular-ui.typeahead', [
  'angular-ui.position',
  'template/typeahead/typeahead-match.html',
  'template/typeahead/typeahead-popup.html'
]).factory('typeaheadParser', [
  '$parse',
  function ($parse) {
    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function (input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' + ' but got "' + input + '".');
        }
        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$timeout',
  '$window',
  '$document',
  '$position',
  'typeaheadParser',
  function ($compile, $parse, $q, $timeout, $window, $document, $position, typeaheadParser) {
    var HOT_KEYS = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (originalScope, element, attrs, modelCtrl) {
        var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
        var onSelectCallback = $parse(attrs.typeaheadOnSelect);
        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
        var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
        var $setModelValue = $parse(attrs.ngModel).assign;
        var parserResult = typeaheadParser.parse(attrs.typeahead);
        var hasFocus;
        var $html = angular.element($document[0].querySelector('html'));
        var enterDropdown = function () {
          $html.addClass('no-scroll');
        };
        var leaveDropdown = function () {
          $html.removeClass('no-scroll');
        };
        var isFirefox = function () {
          return navigator.userAgent.indexOf('Firefox') > -1;
        };
        var isChrome = function () {
          return navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Safari') === -1;
        };
        var isXSmall = function () {
          var width = $window.innerWidth || $document.documentElement.clientWidth;
          return width < 768;
        };
        var scope = originalScope.$new();
        originalScope.$on('$destroy', function () {
          scope.$destroy();
        });
        var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
        element.attr({
          'aria-autocomplete': 'list',
          'aria-expanded': false,
          'aria-owns': popupId
        });
        var popUpEl = angular.element('<div typeahead-popup></div>');
        popUpEl.attr({
          id: popupId,
          matches: 'matches',
          active: 'activeIdx',
          select: 'select(activeIdx)',
          query: 'query',
          position: 'position'
        });
        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
        }
        var resetMatches = function () {
          scope.matches = [];
          scope.activeIdx = -1;
          element.attr('aria-expanded', false);
        };
        var getMatchId = function (index) {
          return popupId + '-option-' + index;
        };
        scope.$watch('activeIdx', function (index) {
          if (index < 0) {
            element.removeAttr('aria-activedescendant');
          } else {
            element.attr('aria-activedescendant', getMatchId(index));
          }
        });
        var getMatchesAsync = function (inputValue) {
          var locals = { $viewValue: inputValue };
          isLoadingSetter(originalScope, true);
          $q.when(parserResult.source(originalScope, locals)).then(function (matches) {
            var onCurrentRequest = inputValue === modelCtrl.$viewValue;
            if (onCurrentRequest && hasFocus) {
              if (matches.length > 0) {
                scope.activeIdx = 0;
                scope.matches.length = 0;
                for (var i = 0; i < matches.length; i++) {
                  locals[parserResult.itemName] = matches[i];
                  scope.matches.push({
                    id: getMatchId(i),
                    label: parserResult.viewMapper(scope, locals),
                    model: matches[i]
                  });
                }
                scope.query = inputValue;
                scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                scope.position.top = scope.position.top + element.prop('offsetHeight');
                element.attr('aria-expanded', true);
              } else {
                resetMatches();
              }
            }
            if (onCurrentRequest) {
              isLoadingSetter(originalScope, false);
            }
          }, function () {
            resetMatches();
            isLoadingSetter(originalScope, false);
          });
        };
        resetMatches();
        scope.query = undefined;
        var timeoutPromise;
        var scheduleSearchWithTimeout = function (inputValue) {
          timeoutPromise = $timeout(function () {
            getMatchesAsync(inputValue);
          }, waitTime);
        };
        var cancelPreviousTimeout = function () {
          if (timeoutPromise) {
            $timeout.cancel(timeoutPromise);
          }
        };
        modelCtrl.$parsers.unshift(function (inputValue) {
          hasFocus = true;
          if (inputValue && inputValue.length >= minSearch) {
            if (waitTime > 0) {
              cancelPreviousTimeout();
              scheduleSearchWithTimeout(inputValue);
            } else {
              getMatchesAsync(inputValue);
            }
          } else {
            isLoadingSetter(originalScope, false);
            cancelPreviousTimeout();
            resetMatches();
          }
          if (isEditable) {
            return inputValue;
          } else {
            if (!inputValue) {
              modelCtrl.$setValidity('editable', true);
              return inputValue;
            } else {
              modelCtrl.$setValidity('editable', false);
              return undefined;
            }
          }
        });
        modelCtrl.$formatters.push(function (modelValue) {
          var candidateViewValue, emptyViewValue;
          var locals = {};
          if (inputFormatter) {
            locals['$model'] = modelValue;
            return inputFormatter(originalScope, locals);
          } else {
            locals[parserResult.itemName] = modelValue;
            candidateViewValue = parserResult.viewMapper(originalScope, locals);
            locals[parserResult.itemName] = undefined;
            emptyViewValue = parserResult.viewMapper(originalScope, locals);
            return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
          }
        });
        scope.select = function (activeIdx) {
          var locals = {};
          var model, item;
          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
          model = parserResult.modelMapper(originalScope, locals);
          $setModelValue(originalScope, model);
          modelCtrl.$setValidity('editable', true);
          onSelectCallback(originalScope, {
            $item: item,
            $model: model,
            $label: parserResult.viewMapper(originalScope, locals)
          });
          resetMatches();
          $timeout(function () {
            element[0].focus();
          }, 0, false);
        };
        element.bind('keydown', function (evt) {
          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
            return;
          }
          evt.preventDefault();
          if (evt.which === 40) {
            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
            scope.$digest();
          } else if (evt.which === 38) {
            scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
            scope.$digest();
          } else if (evt.which === 13 || evt.which === 9) {
            scope.$apply(function () {
              scope.select(scope.activeIdx);
            });
          } else if (evt.which === 27) {
            evt.stopPropagation();
            if (!isFirefox() && !isChrome()) {
              leaveDropdown();
            }
            resetMatches();
            scope.$digest();
          }
        });
        element.bind('blur', function (evt) {
          hasFocus = false;
        });
        var dismissClickHandler = function (evt) {
          if (element[0] !== evt.target) {
            resetMatches();
            scope.$digest();
          }
        };
        $document.bind('click', dismissClickHandler);
        originalScope.$on('$destroy', function () {
          $document.unbind('click', dismissClickHandler);
        });
        var $popup = $compile(popUpEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
        $popup.ready(function () {
          if ((isFirefox() || isChrome()) && !isXSmall()) {
            angular.element($popup[0]).bind('wheel', function (evt) {
              var offsetTop = $popup[0].scrollTop + parseInt(evt.deltaY, 10);
              var offsetBottom = $popup[0].scrollHeight - $popup[0].getBoundingClientRect().height - offsetTop;
              if (offsetTop < 0 || offsetBottom < 0) {
                evt.preventDefault();
              } else {
                evt.stopImmediatePropagation();
              }
            });
          } else if (!isXSmall()) {
            popUpEl.bind('mouseenter', enterDropdown);
            popUpEl.bind('mouseleave', leaveDropdown);
          }
        });
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: true,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function (scope, element, attrs) {
      scope.templateUrl = attrs.templateUrl;
      scope.isOpen = function () {
        return scope.matches.length > 0;
      };
      scope.isActive = function (matchIdx) {
        return scope.active == matchIdx;
      };
      scope.selectActive = function (matchIdx) {
        scope.active = matchIdx;
      };
      scope.selectMatch = function (activeIdx) {
        scope.select({ activeIdx: activeIdx });
      };
    }
  };
}).directive('typeaheadMatch', [
  '$http',
  '$templateCache',
  '$compile',
  '$parse',
  function ($http, $templateCache, $compile, $parse) {
    return {
      restrict: 'EA',
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $http.get(tplUrl, { cache: $templateCache }).success(function (tplContent) {
          element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    };
  }
]).filter('typeaheadHighlight', function () {
  function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (matchItem, query) {
    return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
  };
}).directive('bindHtmlUnsafe', function () {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('template/typeahead/typeahead-match.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-match.html', '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]);
angular.module('template/typeahead/typeahead-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-popup.html', '<ul class="dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n' + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n' + '        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n' + '    </li>\n' + '</ul>');
  }
]);
angular.module('templates-app', ['home.tpl.html']);

angular.module("home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home.tpl.html",
    "<header class=\"page-nav\">\n" +
    "	<div class=\"navbar\">\n" +
    "		<a href=\"/\" class=\"navbar-brand\">EMC Corporation</a>\n" +
    "		<a class=\"navbar-top dropup\" ng-click=\"scrollTo()\">Back to top <span class=\"caret\"></span></a>\n" +
    "	</div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"app-nav\" ng-class=\"{'is-secondary-open': data.selected.filter_primary,\n" +
    "	'xs-nav-open': data.selected.xs_nav_open, 'xs-search-open': data.selected.xs_search_open,\n" +
    "	'xs-filters-open': data.selected.xs_filters_open}\" ui-scrollfix=\"-40\">\n" +
    "	<section class=\"app-header\" data-ng-init=\"init()\">\n" +
    "		<div>\n" +
    "			<div class=\"app-title\">\n" +
    "				<h1 ng-click=\"toggleXSmall('nav')\">{{data.labels.header_app}}</h1>\n" +
    "				<h2 ng-click=\"toggleXSmall('filters')\">\n" +
    "					<span class=\"sm-min\">{{data.labels.header_filters.lg}}:</span>\n" +
    "					<span class=\"xs-max\">\n" +
    "						{{data.selected.xs_filters_open || data.labels.header_filters.sm}}\n" +
    "					</span>\n" +
    "				</h2>\n" +
    "				<span ng-show=\"data.selected.xs_filters_open\">{{data.labels.header_filters.sm}}</span>\n" +
    "			</div>\n" +
    "\n" +
    "			<form class=\"app-search\">\n" +
    "\n" +
    "				<div class=\"form-group has-feedback app-typeahead\">\n" +
    "					<label for=\"name\" ng-click=\"toggleXSmall('search')\">\n" +
    "						{{data.selected.xs_search_open || data.labels.search.sm}}\n" +
    "					</label>\n" +
    "					<span ng-show=\"data.selected.xs_search_open\">{{data.labels.search.sm}}</span>\n" +
    "\n" +
    "					<label class=\"placeholder-ie\">\n" +
    "						<div class=\"xs-max\">\n" +
    "							<span>{{data.labels.search.lg | uppercase}}</span>\n" +
    "						</div>\n" +
    "						<input name=\"name\" class=\"form-control\" type=\"text\" ng-model=\"data.selected.search\"\n" +
    "								typeahead=\"p as p.name for p in data.providers | filter:{name:$viewValue}\"\n" +
    "								typeahead-on-select=\"confirmAction('single')\"\n" +
    "								placeholder=\"{{data.labels.search.lg}}\"\n" +
    "								ng-class=\"{'is-empty': !data.selected.search}\" />\n" +
    "					</label>\n" +
    "\n" +
    "					<span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"form-group app-reset\">\n" +
    "					<button type=\"button\" class=\"btn\" ng-class=\"{'disabled': toggleReset()}\"\n" +
    "						ng-disabled=\"toggleReset()\" ng-click=\"resetFilters('all'); toggleDetail(); resetUrl(); resetActiveCheckbox();\">\n" +
    "						<span class=\"sm-min\">{{data.labels.reset.lg}}</span>\n" +
    "						<span class=\"xs-max\">\n" +
    "							<span>{{data.labels.reset.lg}}</span>\n" +
    "							<span>{{data.labels.reset.sm}}</span>\n" +
    "						</span>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "\n" +
    "	<section id=\"filters\" class=\"filters\" ui-scrollfix=\"-90\">\n" +
    "		<tabset justified=\"true\" class=\"filters-primary\">\n" +
    "			<tab ng-repeat=\"item in data.filtered.filters\" ng-if=\"!item.parent_display\"\n" +
    "				heading=\"{{item.title}}\" active=\"item.active\" id=\"filter-{{item.id}}\"\n" +
    "				class=\"parent-{{item.has_children}} {{item.has_selected}}\" ng-style=\"item.css\"\n" +
    "				hm-panmove=\"slideFilters($event)\" hm-panend=\"slideFilters($event)\"\n" +
    "				ng-click=\"toggleFilterLevel(); toggleDetail(); applyFilters('update', item.id); slideFilters($event)\">\n" +
    "\n" +
    "				<button type=\"button\" class=\"close\"\n" +
    "					ng-click=\"toggleDetail(); item.active = false; data.selected.filter_recent = null;\n" +
    "						data.selected.filter_active = null\">\n" +
    "					<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    "				</button>\n" +
    "\n" +
    "				<div class=\"question\">\n" +
    "					<p>{{item.question | trustHTML}}</p>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"options form-type-{{item.form_type}}\">\n" +
    "					<h3 class=\"filter-title\">{{item.title}}</h3>\n" +
    "\n" +
    "					<!-- Single-select -->\n" +
    "					<div class=\"btn-group\" ng-if=\"item.form_type == 'select'\" dropdown>\n" +
    "						<button type=\"button\" class=\"btn dropdown-toggle\" dropdown-toggle>\n" +
    "							<span class=\"dropdown-title\">\n" +
    "								{{data.selected.filters_options[item.id][0] || 'Select One'}}\n" +
    "							</span>\n" +
    "							<span class=\"caret\"></span>\n" +
    "						</button>\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li ng-repeat=\"option in item.options track by option.id\"\n" +
    "								ng-class=\"{'disabled': option.disabled, 'active': data.selected.filters_options[item.id][0] == option.title}\"\n" +
    "								ng-click=\"confirmAction('add')\">\n" +
    "								<a>{{option.title}}</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<!-- Cascading single-selects -->\n" +
    "					<div class=\"btn-group\" ng-if=\"item.form_type == 'select_cascade'\"\n" +
    "						ng-repeat=\"option_group in item.options\" dropdown>\n" +
    "						<button type=\"button\" class=\"btn dropdown-toggle\" dropdown-toggle\n" +
    "							ng-hide=\"$index > 0 && !item.options[$index][data.selected.filters[item.id][$index - 1]]\">\n" +
    "							<span class=\"dropdown-title\">\n" +
    "								{{data.selected.filters_options[item.id][$index] || item.form_select_title[$index]}}\n" +
    "							</span>\n" +
    "							<span class=\"caret\"></span>\n" +
    "						</button>\n" +
    "						<ul class=\"dropdown-menu\" ng-if=\"$index == 0\" ng-init=\"parent_idx = $index\">\n" +
    "							<li ng-repeat=\"option in option_group track by option.id\"\n" +
    "								ng-class=\"{'disabled': option.disabled, 'active': data.selected.filters_options[item.id][parent_idx] == option.title}\"\n" +
    "								ng-click=\"addFilter()\">\n" +
    "								<a>{{option.title}}</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "						<ul class=\"dropdown-menu\" ng-if=\"$index > 0\" ng-init=\"parent_idx = $index\">\n" +
    "							<li ng-repeat=\"option in item.options[$index][data.selected.filters[item.id][$index - 1]] track by option.id\"\n" +
    "								ng-class=\"{'disabled': option.disabled, 'active': data.selected.filters_options[item.id][parent_idx] == option.title}\"\n" +
    "								ng-click=\"addFilter()\">\n" +
    "								<a>{{option.title}}</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<!-- Checkboxes -->\n" +
    "					<div class=\"btn-group checkboxes\" ng-if=\"item.form_type == 'checkbox'\">\n" +
    "						<button type=\"button\" class=\"checkbox\"\n" +
    "							ng-repeat=\"option in item.options track by option.id\" btn-checkbox\n" +
    "							ng-model=\"data.selected.filters_options[item.id][option.id]\"\n" +
    "							ng-class=\"{'disabled': option.disabled}\" ng-disabled=\"option.disabled\"\n" +
    "							ng-click=\"addFilter()\"\n" +
    "							id=\"{{item.id}}-{{option.id}}\">\n" +
    "							<!-- this is the checkbox we chage the function called-->\n" +
    "							<span class=\"glyphicon glyphicon-ok\"></span> {{option.title}}\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"desc\">\n" +
    "					<p ng-show=\"data.selected.option_desc[item.id]\" ng-bind-html=\"data.selected.option_desc[item.id]\"></p>\n" +
    "				</div>\n" +
    "			</tab>\n" +
    "		</tabset>\n" +
    "\n" +
    "		<tabset justified=\"true\" class=\"filters-secondary\" ng-show=\"data.selected.filter_primary\">\n" +
    "			<tab ng-repeat=\"item in data.filtered.filters\" ng-if=\"item.parent_display\"\n" +
    "				heading=\"{{item.title}}\" active=\"item.active\" id=\"filter-{{item.id}}\"\n" +
    "				class=\"{{item.has_selected}}\" ng-style=\"item.css\"\n" +
    "				hm-panmove=\"slideFilters($event)\" hm-panend=\"slideFilters($event)\"\n" +
    "				ng-click=\"toggleFilterLevel(); toggleDetail(); applyFilters('update', item.id); slideFilters($event)\">\n" +
    "\n" +
    "				<button type=\"button\" class=\"close\"\n" +
    "					ng-click=\"toggleDetail(); item.active = false; data.selected.filter_recent = null;\n" +
    "						data.selected.filter_active = null\">\n" +
    "					<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    "				</button>\n" +
    "\n" +
    "				<div class=\"question\">\n" +
    "					<p>{{item.question | trustHTML}}</p>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"options form-type-{{item.form_type}}\">\n" +
    "					<h3 class=\"filter-title\">{{item.title}}</h3>\n" +
    "\n" +
    "					<!-- Single-select -->\n" +
    "					<div class=\"btn-group\" ng-if=\"item.form_type == 'select'\" dropdown>\n" +
    "						<button type=\"button\" class=\"btn dropdown-toggle\" dropdown-toggle>\n" +
    "							<span class=\"dropdown-title\">\n" +
    "								{{data.selected.filters_options[item.id][0] || 'Select One'}}\n" +
    "							</span>\n" +
    "							<span class=\"caret\"></span>\n" +
    "						</button>\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li ng-repeat=\"option in item.options track by option.id\"\n" +
    "								ng-class=\"{'disabled': option.disabled, 'active': data.selected.filters_options[item.id][0] == option.title}\"\n" +
    "								ng-click=\"addFilter()\">\n" +
    "								<a>{{option.title}}</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<!-- Cascading single-selects -->\n" +
    "					<div class=\"btn-group\" ng-if=\"item.form_type == 'select_cascade'\"\n" +
    "						ng-repeat=\"option_group in item.options\" dropdown>\n" +
    "						<button type=\"button\" class=\"btn dropdown-toggle\" dropdown-toggle\n" +
    "							ng-hide=\"$index > 0 && !item.options[$index][data.selected.filters[item.id][$index - 1]]\">\n" +
    "							<span class=\"dropdown-title\">\n" +
    "								{{data.selected.filters_options[item.id][$index] || item.form_select_title[$index]}}\n" +
    "							</span>\n" +
    "							<span class=\"caret\"></span>\n" +
    "						</button>\n" +
    "						<ul class=\"dropdown-menu\" ng-if=\"$index == 0\" ng-init=\"parent_idx = $index\">\n" +
    "							<li ng-repeat=\"option in option_group track by option.id\"\n" +
    "								ng-class=\"{'disabled': option.disabled, 'active': data.selected.filters_options[item.id][parent_idx] == option.title}\"\n" +
    "								ng-click=\"addFilter()\">\n" +
    "								<a>{{option.title}}</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "						<ul class=\"dropdown-menu\" ng-if=\"$index > 0\" ng-init=\"parent_idx = $index\">\n" +
    "							<li ng-repeat=\"option in item.options[$index][data.selected.filters[item.id][$index - 1]] track by option.id\"\n" +
    "								ng-class=\"{'disabled': option.disabled, 'active': data.selected.filters_options[item.id][parent_idx] == option.title}\"\n" +
    "								ng-click=\"addFilter()\">\n" +
    "								<a>{{option.title}}</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "					<!-- Checkboxes -->\n" +
    "					<div class=\"btn-group checkboxes\" ng-if=\"item.form_type == 'checkbox'\">\n" +
    "						<button type=\"button\" class=\"checkbox\"\n" +
    "							ng-repeat=\"option in item.options track by option.id\" btn-checkbox\n" +
    "							ng-model=\"data.selected.filters_options[item.id][option.id]\"\n" +
    "							ng-class=\"{'disabled': option.disabled}\" ng-disabled=\"option.disabled\"\n" +
    "							ng-click=\"addFilter()\"\n" +
    "							id=\"{{item.id}}-{{option.id}}\"\n" +
    "							>\n" +
    "							<span class=\"glyphicon glyphicon-ok\"></span> {{option.title}}\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"desc\">\n" +
    "					<p ng-show=\"data.selected.option_desc[item.id]\">\n" +
    "						{{data.selected.option_desc[item.id]}}\n" +
    "					</p>\n" +
    "				</div>\n" +
    "			</tab>\n" +
    "		</tabset>\n" +
    "	</section>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"app-content\" ng-class=\"{'single': data.filtered.search}\" ui-scrollfix=\"-160\">\n" +
    "	<section class=\"filters-selected\" ng-class=\"{'has_selected': data.selected.filters_display.length > 0}\">\n" +
    "		<div>\n" +
    "			<h4>\n" +
    "				<span ng-hide=\"data.selected.filters_display.length == 0\">\n" +
    "					{{data.labels.header_selected[0]}}\n" +
    "				</span>\n" +
    "				<span>\n" +
    "					{{data.labels.header_selected[1]}}\n" +
    "					<span class=\"count\">{{data.filtered.counts.main}}</span>\n" +
    "					{{data.labels.header_selected[2]}}\n" +
    "				</span>\n" +
    "				<span ng-hide=\"data.selected.filters_display.length == 0\">\n" +
    "					{{data.labels.header_selected[3]}}\n" +
    "				</span>\n" +
    "			</h4>\n" +
    "			<span ng-repeat=\"filter in data.selected.filters_display\">\n" +
    "				<span class=\"label\" ng-repeat=\"(id, title) in filter\">\n" +
    "					<span>{{title[0]}}: </span>{{title[1]}}\n" +
    "					<button type=\"button\" class=\"close\" ng-click=\"confirmAction('remove')\">\n" +
    "						<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    "					</button>\n" +
    "				</span>\n" +
    "			</span>\n" +
    "			<div class=\"providers-header-fixed\">\n" +
    "				<div ng-repeat=\"column in data.labels.main.columns\" class=\"providers-col-{{$index + 1}}\"\n" +
    "					ng-class=\"{'sort-by': column.sort_by}\">\n" +
    "					<a ng-click=\"changeSort($index)\">{{column.title}} <span class=\"caret\"></span></a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"providers\">\n" +
    "		<table class=\"table table-responsive\">\n" +
    "			<thead class=\"providers-header\">\n" +
    "				<tr>\n" +
    "					<th ng-repeat=\"column in data.labels.main.columns\" class=\"providers-col-{{$index + 1}}\"\n" +
    "						ng-class=\"{'sort-by': column.sort_by}\"\n" +
    "						ng-hide=\"column.hideOnSafari\">\n" +
    "						<a ng-click=\"changeSort($index)\">{{column.title}} <span class=\"caret\"></span></a>\n" +
    "					</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody ng-repeat=\"(group_index, group_name) in data.labels.main.groups.headers\"\n" +
    "				ng-if=\"isXSmallDevice()\" class=\"providers-content is-grouped\">\n" +
    "				<tr class=\"providers-group\"\n" +
    "					ng-hide=\"data.filtered.counts.groups[0][group_index] < 1 || data.filtered.search\">\n" +
    "					<td>{{group_name}}</td>\n" +
    "				</tr>\n" +
    "				<tr ng-repeat=\"provider in data.filtered.main track by provider.id\" ng-show=\"!provider.hide\"\n" +
    "					ng-if=\"group_index == provider[data.labels.main.groups.group_key]\"\n" +
    "					id=\"provider-{{provider.id}}\" ng-class=\"{'is-open': provider.is_open}\"\n" +
    "					popover=\"<div class='arrow'></div><div class='detail'>{{provider.detail.html}}</div>\"\n" +
    "					popover-placement=\"bottom\" popover-trigger=\"show\" ng-click=\"toggleDetail(provider.id)\">\n" +
    "					<td class=\"providers-col-1\">\n" +
    "						<span>\n" +
    "							<span class=\"provider-logo\">\n" +
    "								<img ng-src=\"{{data.base_url}}{{provider.logo}}\" alt=\"\" />\n" +
    "							</span>\n" +
    "							<span class=\"provider-name\">\n" +
    "								<h5>{{provider.name}}</h5>\n" +
    "							</span>\n" +
    "						</span>\n" +
    "						<button type=\"button\" class=\"close\">\n" +
    "							<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    "						</button>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "			<tbody class=\"providers-content\" ng-if=\"!isXSmallDevice()\">\n" +
    "				<tr ng-repeat=\"provider in data.filtered.main track by provider.id\" ng-show=\"!provider.hide\"\n" +
    "					id=\"provider-{{provider.id}}\" ng-class=\"{'is-open': provider.is_open}\"\n" +
    "					popover=\"<div class='arrow'></div><div class='detail'>{{provider.detail.html}}</div>\"\n" +
    "					popover-placement=\"bottom\" popover-trigger=\"show\" ng-click=\"toggleDetail(provider.id)\">\n" +
    "					<td class=\"providers-col-1\">\n" +
    "						<span>\n" +
    "							<span class=\"provider-logo\">\n" +
    "								<img ng-src=\"{{data.base_url}}{{provider.logo}}\" alt=\"\" />\n" +
    "							</span>\n" +
    "							<span class=\"provider-name\">\n" +
    "								<h5>{{provider.name}}</h5>\n" +
    "							</span>\n" +
    "						</span>\n" +
    "						<button type=\"button\" class=\"close\">\n" +
    "							<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n" +
    "						</button>\n" +
    "					</td>\n" +
    "					<td class=\"providers-col-2\"><span>{{provider.tier_name}}</span></td>\n" +
    "					<td class=\"providers-col-3\">\n" +
    "						<span>{{provider.cloud_partner_connect}}</span>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	</section>\n" +
    "</div>\n" +
    "\n" +
    "<footer class=\"app-footer\">\n" +
    "	<div><p>{{data.labels.disclaimer}}</p></div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module('templates-common', []);


})(window, window.angular);
