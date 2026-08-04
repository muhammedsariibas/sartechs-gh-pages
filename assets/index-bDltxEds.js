(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ga(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const rt={},or=[],Tn=()=>{},Mu=()=>!1,io=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ro=n=>n.startsWith("onUpdate:"),Mt=Object.assign,Va=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bd=Object.prototype.hasOwnProperty,Ke=(n,e)=>bd.call(n,e),Ce=Array.isArray,ar=n=>Zr(n)==="[object Map]",so=n=>Zr(n)==="[object Set]",hl=n=>Zr(n)==="[object Date]",Be=n=>typeof n=="function",dt=n=>typeof n=="string",Rn=n=>typeof n=="symbol",Ze=n=>n!==null&&typeof n=="object",Eu=n=>(Ze(n)||Be(n))&&Be(n.then)&&Be(n.catch),yu=Object.prototype.toString,Zr=n=>yu.call(n),Td=n=>Zr(n).slice(8,-1),bu=n=>Zr(n)==="[object Object]",ka=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fr=Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ad=/-\w/g,pn=oo(n=>n.replace(Ad,e=>e.slice(1).toUpperCase())),wd=/\B([A-Z])/g,zi=oo(n=>n.replace(wd,"-$1").toLowerCase()),Tu=oo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Co=oo(n=>n?`on${Tu(n)}`:""),yn=(n,e)=>!Object.is(n,e),Is=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Au=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ao=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Rd=n=>{const e=dt(n)?Number(n):NaN;return isNaN(e)?n:e};let pl;const lo=()=>pl||(pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wa(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Dd(i):Wa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||Ze(n))return n}const Cd=/;(?![^(]*\))/g,Ld=/:([^]+)/,Pd=/\/\*[^]*?\*\//g;function Dd(n){const e={};return n.replace(Pd,"").split(Cd).forEach(t=>{if(t){const i=t.split(Ld);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function lr(n){let e="";if(dt(n))e=n;else if(Ce(n))for(let t=0;t<n.length;t++){const i=lr(n[t]);i&&(e+=i+" ")}else if(Ze(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Id=Ga(Ud);function wu(n){return!!n||n===""}function Nd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Jr(n[i],e[i]);return t}function Jr(n,e){if(n===e)return!0;let t=hl(n),i=hl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Rn(n),i=Rn(e),t||i)return n===e;if(t=Ce(n),i=Ce(e),t||i)return t&&i?Nd(n,e):!1;if(t=Ze(n),i=Ze(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Jr(n[a],e[a]))return!1}}return String(n)===String(e)}function Fd(n,e){return n.findIndex(t=>Jr(t,e))}const Ru=n=>!!(n&&n.__v_isRef===!0),Me=n=>dt(n)?n:n==null?"":Ce(n)||Ze(n)&&(n.toString===yu||!Be(n.toString))?Ru(n)?Me(n.value):JSON.stringify(n,Cu,2):String(n),Cu=(n,e)=>Ru(e)?Cu(n,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Lo(i,s)+" =>"]=r,t),{})}:so(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Lo(t))}:Rn(e)?Lo(e):Ze(e)&&!Ce(e)&&!bu(e)?String(e):e,Lo=(n,e="")=>{var t;return Rn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Od{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&yt&&(yt.active?(this.parent=yt,this.index=(yt.scopes||(yt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=yt;try{return yt=this,e()}finally{yt=t}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){if(this._on>0&&--this._on===0){if(yt===this)yt=this.prevScope;else{let e=yt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bd(){return yt}let lt;const Po=new WeakSet;class Lu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&(yt.active?yt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Po.has(this)&&(Po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Du(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ml(this),Uu(this);const e=lt,t=mn;lt=this,mn=!0;try{return this.fn()}finally{Iu(this),lt=e,mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$a(e);this.deps=this.depsTail=void 0,ml(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xa(this)&&this.run()}get dirty(){return xa(this)}}let Pu=0,Or,Br;function Du(n,e=!1){if(n.flags|=8,e){n.next=Br,Br=n;return}n.next=Or,Or=n}function Xa(){Pu++}function qa(){if(--Pu>0)return;if(Br){let e=Br;for(Br=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Or;){let e=Or;for(Or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Iu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),$a(i),zd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function xa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Nu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kr)||(n.globalVersion=kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xa(n))))return;n.flags|=2;const e=n.dep,t=lt,i=mn;lt=n,mn=!0;try{Uu(n);const r=n.fn(n._value);(e.version===0||yn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,mn=i,Iu(n),n.flags&=-3}}function $a(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)$a(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function zd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let mn=!0;const Fu=[];function Xn(){Fu.push(mn),mn=!1}function qn(){const n=Fu.pop();mn=n===void 0?!0:n}function ml(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let kr=0;class Hd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ya{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!lt||!mn||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new Hd(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,Ou(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,kr++,this.notify(e)}notify(e){Xa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{qa()}}}function Ou(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ou(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Sa=new WeakMap,Di=Symbol(""),Ma=Symbol(""),Wr=Symbol("");function Lt(n,e,t){if(mn&&lt){let i=Sa.get(n);i||Sa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ya),r.map=i,r.key=t),r.track()}}function Hn(n,e,t,i,r,s){const a=Sa.get(n);if(!a){kr++;return}const o=l=>{l&&l.trigger()};if(Xa(),e==="clear")a.forEach(o);else{const l=Ce(n),u=l&&ka(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===Wr||!Rn(d)&&d>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Wr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Di)),ar(n)&&o(a.get(Ma)));break;case"delete":l||(o(a.get(Di)),ar(n)&&o(a.get(Ma)));break;case"set":ar(n)&&o(a.get(Di));break}}qa()}function Hi(n){const e=je(n);return e===n?e:(Lt(e,"iterate",Wr),on(n)?e:e.map(gn))}function co(n){return Lt(n=je(n),"iterate",Wr),n}function Sn(n,e){return $n(n)?mr(Ui(n)?gn(e):e):gn(e)}const Gd={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,n=>Sn(this,n))},concat(...n){return Hi(this).concat(...n.map(e=>Ce(e)?Hi(e):e))},entries(){return Do(this,"entries",n=>(n[1]=Sn(this,n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(i=>Sn(this,i)),arguments)},find(n,e){return Ln(this,"find",n,e,t=>Sn(this,t),arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,t=>Sn(this,t),arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return Uo(this,"includes",n)},indexOf(...n){return Uo(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Uo(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...e){return gl(this,"reduce",n,e)},reduceRight(n,...e){return gl(this,"reduceRight",n,e)},shift(){return br(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return Do(this,"values",n=>Sn(this,n))}};function Do(n,e,t){const i=co(n),r=i[e]();return i!==n&&!on(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Vd=Array.prototype;function Ln(n,e,t,i,r,s){const a=co(n),o=a!==n&&!on(n),l=a[e];if(l!==Vd[e]){const f=l.apply(n,s);return o?gn(f):f}let u=t;a!==n&&(o?u=function(f,d){return t.call(this,Sn(n,f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function gl(n,e,t,i){const r=co(n),s=r!==n&&!on(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=Sn(n,u)),t.call(this,u,Sn(n,c),f,n)}):t.length>3&&(a=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](a,...i);return o?Sn(n,l):l}function Uo(n,e,t){const i=je(n);Lt(i,"iterate",Wr);const r=i[e](...t);return(r===-1||r===!1)&&Za(t[0])?(t[0]=je(t[0]),i[e](...t)):r}function br(n,e,t=[]){Xn(),Xa();const i=je(n)[e].apply(n,t);return qa(),qn(),i}const kd=Ga("__proto__,__v_isRef,__isVue"),Bu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Rn));function Wd(n){Rn(n)||(n=String(n));const e=je(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class zu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?eh:ku:s?Vu:Gu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ce(e);if(!r){let l;if(a&&(l=Gd[t]))return l;if(t==="hasOwnProperty")return Wd}const o=Reflect.get(e,t,Pt(e)?e:i);if((Rn(t)?Bu.has(t):kd(t))||(r||Lt(e,"get",t),s))return o;if(Pt(o)){const l=a&&ka(t)?o:o.value;return r&&Ze(l)?ya(l):l}return Ze(o)?r?ya(o):uo(o):o}}class Hu extends zu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ce(e)&&ka(t);if(!this._isShallow){const u=$n(s);if(!on(i)&&!$n(i)&&(s=je(s),i=je(i)),!a&&Pt(s)&&!Pt(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:Ke(e,t),l=Reflect.set(e,t,i,Pt(e)?e:r);return e===je(r)&&l&&(o?yn(i,s)&&Hn(e,"set",t,i):Hn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Hn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Rn(t)||!Bu.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Ce(e)?"length":Di),Reflect.ownKeys(e)}}class Xd extends zu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const qd=new Hu,$d=new Xd,Yd=new Hu(!0);const Ea=n=>n,ls=n=>Reflect.getPrototypeOf(n);function jd(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=ar(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?Ea:e?mr:gn;return!e&&Lt(s,"iterate",l?Ma:Di),Mt(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function cs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Kd(n,e){const t={get(r){const s=this.__v_raw,a=je(s),o=je(r);n||(yn(r,o)&&Lt(a,"get",r),Lt(a,"get",o));const{has:l}=ls(a),u=e?Ea:n?mr:gn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt(je(r),"iterate",Di),r.size},has(r){const s=this.__v_raw,a=je(s),o=je(r);return n||(yn(r,o)&&Lt(a,"has",r),Lt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=je(o),u=e?Ea:n?mr:gn;return!n&&Lt(l,"iterate",Di),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return Mt(t,n?{add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear")}:{add(r){const s=je(this),a=ls(s),o=je(r),l=!e&&!on(r)&&!$n(r)?o:r;return a.has.call(s,l)||yn(r,l)&&a.has.call(s,r)||yn(o,l)&&a.has.call(s,o)||(s.add(l),Hn(s,"add",l,l)),this},set(r,s){!e&&!on(s)&&!$n(s)&&(s=je(s));const a=je(this),{has:o,get:l}=ls(a);let u=o.call(a,r);u||(r=je(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?yn(s,c)&&Hn(a,"set",r,s):Hn(a,"add",r,s),this},delete(r){const s=je(this),{has:a,get:o}=ls(s);let l=a.call(s,r);l||(r=je(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&Hn(s,"delete",r,void 0),u},clear(){const r=je(this),s=r.size!==0,a=r.clear();return s&&Hn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=jd(r,n,e)}),t}function ja(n,e){const t=Kd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const Zd={get:ja(!1,!1)},Jd={get:ja(!1,!0)},Qd={get:ja(!0,!1)};const Gu=new WeakMap,Vu=new WeakMap,ku=new WeakMap,eh=new WeakMap;function th(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uo(n){return $n(n)?n:Ka(n,!1,qd,Zd,Gu)}function nh(n){return Ka(n,!1,Yd,Jd,Vu)}function ya(n){return Ka(n,!0,$d,Qd,ku)}function Ka(n,e,t,i,r){if(!Ze(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=th(Td(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ui(n){return $n(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function $n(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function Za(n){return n?!!n.__v_raw:!1}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function ih(n){return!Ke(n,"__v_skip")&&Object.isExtensible(n)&&Au(n,"__v_skip",!0),n}const gn=n=>Ze(n)?uo(n):n,mr=n=>Ze(n)?ya(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function Bs(n){return rh(n,!1)}function rh(n,e){return Pt(n)?n:new sh(n,e)}class sh{constructor(e,t){this.dep=new Ya,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:je(e),this._value=t?e:gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||$n(e);e=i?e:je(e),yn(e,t)&&(this._rawValue=e,this._value=i?e:gn(e),this.dep.trigger())}}function Pe(n){return Pt(n)?n.value:n}const oh={get:(n,e,t)=>e==="__v_raw"?n:Pe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Wu(n){return Ui(n)?n:new Proxy(n,oh)}class ah{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ya(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return Du(this,!0),!0}get value(){const e=this.dep.track();return Nu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lh(n,e,t=!1){let i,r;return Be(n)?i=n:(i=n.get,r=n.set),new ah(i,r,t)}const us={},zs=new WeakMap;let bi;function ch(n,e=!1,t=bi){if(t){let i=zs.get(t);i||zs.set(t,i=[]),i.push(n)}}function uh(n,e,t=rt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=y=>r?y:on(y)||r===!1||r===0?Gn(y,1):Gn(y);let c,f,d,m,S=!1,E=!1;if(Pt(n)?(f=()=>n.value,S=on(n)):Ui(n)?(f=()=>u(n),S=!0):Ce(n)?(E=!0,S=n.some(y=>Ui(y)||on(y)),f=()=>n.map(y=>{if(Pt(y))return y.value;if(Ui(y))return u(y);if(Be(y))return l?l(y,2):y()})):Be(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Xn();try{d()}finally{qn()}}const y=bi;bi=c;try{return l?l(n,3,[m]):n(m)}finally{bi=y}}:f=Tn,e&&r){const y=f,D=r===!0?1/0:r;f=()=>Gn(y(),D)}const p=Bd(),h=()=>{c.stop(),p&&p.active&&Va(p.effects,c)};if(s&&e){const y=e;e=(...D)=>{const L=y(...D);return h(),L}}let b=E?new Array(n.length).fill(us):us;const M=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const D=c.run();if(y||r||S||(E?D.some((L,C)=>yn(L,b[C])):yn(D,b))){d&&d();const L=bi;bi=c;try{const C=[D,b===us?void 0:E&&b[0]===us?[]:b,m];b=D,l?l(e,3,C):e(...C)}finally{bi=L}}}else c.run()};return o&&o(M),c=new Lu(f),c.scheduler=a?()=>a(M,!1):M,m=y=>ch(y,!1,c),d=c.onStop=()=>{const y=zs.get(c);if(y){if(l)l(y,4);else for(const D of y)D();zs.delete(c)}},e?i?M(!0):b=c.run():a?a(M.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Gn(n,e=1/0,t){if(e<=0||!Ze(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Pt(n))Gn(n.value,e,t);else if(Ce(n))for(let i=0;i<n.length;i++)Gn(n[i],e,t);else if(so(n)||ar(n))n.forEach(i=>{Gn(i,e,t)});else if(bu(n)){for(const i in n)Gn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(n,e,t,i){try{return i?n(...i):n()}catch(r){fo(r,e,t)}}function an(n,e,t,i){if(Be(n)){const r=Qr(n,e,t,i);return r&&Eu(r)&&r.catch(s=>{fo(s,e,t)}),r}if(Ce(n)){const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}}function fo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||rt;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){Xn(),Qr(s,null,10,[n,l,u]),qn();return}}fh(n,t,r,i,a)}function fh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ft=[];let xn=-1;const cr=[];let ii=null,ir=0;const Xu=Promise.resolve();let Hs=null;function qu(n){const e=Hs||Xu;return n?e.then(this?n.bind(this):n):e}function dh(n){let e=xn+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,r=Ft[i],s=Xr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ja(n){if(!(n.flags&1)){const e=Xr(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=Xr(t)?Ft.push(n):Ft.splice(dh(e),0,n),n.flags|=1,$u()}}function $u(){Hs||(Hs=Xu.then(ju))}function hh(n){Ce(n)?cr.push(...n):ii&&n.id===-1?ii.splice(ir+1,0,n):n.flags&1||(cr.push(n),n.flags|=1),$u()}function _l(n,e,t=xn+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yu(n){if(cr.length){const e=[...new Set(cr)].sort((t,i)=>Xr(t)-Xr(i));if(cr.length=0,ii){ii.push(...e);return}for(ii=e,ir=0;ir<ii.length;ir++){const t=ii[ir];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ii=null,ir=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ju(n){try{for(xn=0;xn<Ft.length;xn++){const e=Ft[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Ft.length;xn++){const e=Ft[xn];e&&(e.flags&=-2)}xn=-1,Ft.length=0,Yu(),Hs=null,(Ft.length||cr.length)&&ju()}}let sn=null,Ku=null;function Gs(n){const e=sn;return sn=n,Ku=n&&n.type.__scopeId||null,e}function Zu(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ws(-1);const s=Gs(e),a=Ii.length;let o;try{o=n(...r)}finally{for(let l=Ii.length;l>a;l--)Rf();Gs(s),i._d&&Ws(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function fs(n,e){if(sn===null)return n;const t=xo(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=rt]=e[r];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&Gn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function gi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Xn(),an(l,t,8,[n.el,o,n,e]),qn())}}function Ju(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function zr(n,e,t=!1){const i=Uf();if(i||ur){let r=ur?ur._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}const ph=Symbol.for("v-scx"),mh=()=>zr(ph);function Io(n,e,t){return Qu(n,e,t)}function Qu(n,e,t=rt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),l=e&&i||!e&&s!=="post";let u;if(Yr){if(s==="sync"){const m=mh();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Tn,m.resume=Tn,m.pause=Tn,m}}const c=Bt;o.call=(m,S,E)=>an(m,c,S,E);let f=!1;s==="post"?o.scheduler=m=>{Ht(m,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,S)=>{S?m():Ja(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=uh(n,e,o);return Yr&&(u?u.push(d):l&&d()),d}function gh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?ef(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=es(this),o=Qu(r,s.bind(i),t);return a(),o}function ef(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const _h=Symbol("_vte"),tf=n=>n.__isTeleport,tn=Symbol("_leaveCb"),Tr=Symbol("_enterCb");function vh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mo(()=>{n.isMounted=!0}),go(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],nf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},rf=n=>{const e=n.subTree;return e.component?rf(e.component):e},xh={name:"BaseTransition",props:nf,setup(n,{slots:e}){const t=Uf(),i=vh();return()=>{const r=e.default&&af(e.default(),!0),s=r&&r.length?sf(r):t.subTree?Df():void 0;if(!s)return;const a=je(n),{mode:o}=a;if(i.isLeaving)return No(s);const l=vl(s);if(!l)return No(s);let u=ba(l,a,i,t,f=>u=f);l.type!==Ot&&qr(l,u);let c=t.subTree&&vl(t.subTree);if(c&&c.type!==Ot&&!wi(c,l)&&rf(t).type!==Ot){let f=ba(c,a,i,t);if(qr(c,f),o==="out-in"&&l.type!==Ot)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},No(s);o==="in-out"&&l.type!==Ot?f.delayLeave=(d,m,S)=>{const E=of(i,c);E[String(c.key)]=c,d[tn]=()=>{m(),d[tn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function sf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ot){e=t;break}}return e}const Sh=xh;function of(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ba(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:S,onLeaveCancelled:E,onBeforeAppear:p,onAppear:h,onAfterAppear:b,onAppearCancelled:M}=e,y=String(n.key),D=of(t,n),L=(j,v)=>{j&&an(j,i,9,v)},C=(j,v)=>{const A=v[1];L(j,v),Ce(j)?j.every(N=>N.length<=1)&&A():j.length<=1&&A()},q={mode:a,persisted:o,beforeEnter(j){let v=l;if(!t.isMounted)if(s)v=p||l;else return;j[tn]&&j[tn](!0);const A=D[y];A&&wi(n,A)&&A.el[tn]&&A.el[tn](),L(v,[j])},enter(j){if(D[y]===n)return;let v=u,A=c,N=f;if(!t.isMounted)if(s)v=h||u,A=b||c,N=M||f;else return;let ne=!1;j[Tr]=K=>{ne||(ne=!0,K?L(N,[j]):L(A,[j]),q.delayedLeave&&q.delayedLeave(),j[Tr]=void 0)};const U=j[Tr].bind(null,!1);v?C(v,[j,U]):U()},leave(j,v){const A=String(n.key);if(j[Tr]&&j[Tr](!0),t.isUnmounting)return v();L(d,[j]);let N=!1;j[tn]=U=>{N||(N=!0,v(),U?L(E,[j]):L(S,[j]),j[tn]=void 0,D[A]===n&&delete D[A])};const ne=j[tn].bind(null,!1);D[A]=n,m?C(m,[j,ne]):ne()},clone(j){const v=ba(j,e,t,i,r);return r&&r(v),v}};return q}function No(n){if(ho(n))return n=ci(n),n.children=null,n}function vl(n){if(!ho(n))return tf(n.type)&&n.children?sf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Be(t.default))return t.default()}}function qr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,qr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function af(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===St?(a.patchFlag&128&&r++,i=i.concat(af(a.children,e,o))):(e||a.type!==Ot)&&i.push(o!=null?ci(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Vs=new WeakMap;function Hr(n,e,t,i,r=!1){if(Ce(n)){n.forEach((E,p)=>Hr(E,e&&(Ce(e)?e[p]:e),t,i,r));return}if(Gr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===rt?o.refs={}:o.refs,f=o.setupState,d=je(f),m=f===rt?Mu:E=>xl(c,E)?!1:Ke(d,E),S=(E,p)=>!(p&&xl(c,p));if(u!=null&&u!==l){if(Sl(e),dt(u))c[u]=null,m(u)&&(f[u]=null);else if(Pt(u)){const E=e;S(u,E.k)&&(u.value=null),E.k&&(c[E.k]=null)}}if(Be(l))Qr(l,o,12,[a,c]);else{const E=dt(l),p=Pt(l);if(E||p){const h=()=>{if(n.f){const b=E?m(l)?f[l]:c[l]:S()||!n.k?l.value:c[n.k];if(r)Ce(b)&&Va(b,s);else if(Ce(b))b.includes(s)||b.push(s);else if(E)c[l]=[s],m(l)&&(f[l]=c[l]);else{const M=[s];S(l,n.k)&&(l.value=M),n.k&&(c[n.k]=M)}}else E?(c[l]=a,m(l)&&(f[l]=a)):p&&(S(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const b=()=>{h(),Vs.delete(n)};b.id=-1,Vs.set(n,b),Ht(b,t)}else Sl(n),h()}}}function Sl(n){const e=Vs.get(n);e&&(e.flags|=8,Vs.delete(n))}lo().requestIdleCallback;lo().cancelIdleCallback;const Gr=n=>!!n.type.__asyncLoader,ho=n=>n.type.__isKeepAlive;function Mh(n,e){cf(n,"a",e)}function Eh(n,e){cf(n,"da",e)}function cf(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ho(r.parent.vnode)&&yh(i,e,t,r),r=r.parent}}function yh(n,e,t,i){const r=po(e,n,i,!0);uf(()=>{Va(i[e],r)},t)}function po(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Xn();const o=es(t),l=an(e,t,n,a);return o(),qn(),l});return i?r.unshift(s):r.push(s),s}}const jn=n=>(e,t=Bt)=>{(!Yr||n==="sp")&&po(n,(...i)=>e(...i),t)},bh=jn("bm"),mo=jn("m"),Th=jn("bu"),Ah=jn("u"),go=jn("bum"),uf=jn("um"),wh=jn("sp"),Rh=jn("rtg"),Ch=jn("rtc");function Lh(n,e=Bt){po("ec",n,e)}const Ph=Symbol.for("v-ndc");function li(n,e,t,i){let r;const s=t,a=Ce(n);if(a||dt(n)){const o=a&&Ui(n);let l=!1,u=!1;o&&(l=!on(n),u=$n(n),n=co(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?mr(gn(n[c])):gn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Ze(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Ta=n=>n?If(n)?xo(n):Ta(n.parent):null,Vr=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ta(n.parent),$root:n=>Ta(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>df(n),$forceUpdate:n=>n.f||(n.f=()=>{Ja(n.update)}),$nextTick:n=>n.n||(n.n=qu.bind(n.proxy)),$watch:n=>gh.bind(n)}),Fo=(n,e)=>n!==rt&&!n.__isScriptSetup&&Ke(n,e),Dh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Fo(i,e))return a[e]=1,i[e];if(r!==rt&&Ke(r,e))return a[e]=2,r[e];if(Ke(s,e))return a[e]=3,s[e];if(t!==rt&&Ke(t,e))return a[e]=4,t[e];Aa&&(a[e]=0)}}const u=Vr[e];let c,f;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==rt&&Ke(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Fo(r,e)?(r[e]=t,!0):i!==rt&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==rt&&o[0]!=="$"&&Ke(n,o)||Fo(e,o)||Ke(s,o)||Ke(i,o)||Ke(Vr,o)||Ke(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ml(n){return Ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Aa=!0;function Uh(n){const e=df(n),t=n.proxy,i=n.ctx;Aa=!1,e.beforeCreate&&El(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:m,updated:S,activated:E,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:M,unmounted:y,render:D,renderTracked:L,renderTriggered:C,errorCaptured:q,serverPrefetch:j,expose:v,inheritAttrs:A,components:N,directives:ne,filters:U}=e;if(u&&Ih(u,i,null),a)for(const ee in a){const $=a[ee];Be($)&&(i[ee]=$.bind(t))}if(r){const ee=r.call(t,t);Ze(ee)&&(n.data=uo(ee))}if(Aa=!0,s)for(const ee in s){const $=s[ee],re=Be($)?$.bind(t,t):Be($.get)?$.get.bind(t,t):Tn,ae=!Be($)&&Be($.set)?$.set.bind(t):Tn,ce=Sr({get:re,set:ae});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ce.value,set:fe=>ce.value=fe})}if(o)for(const ee in o)ff(o[ee],i,t,ee);if(l){const ee=Be(l)?l.call(t):l;Reflect.ownKeys(ee).forEach($=>{Ju($,ee[$])})}c&&El(c,n,"c");function z(ee,$){Ce($)?$.forEach(re=>ee(re.bind(t))):$&&ee($.bind(t))}if(z(bh,f),z(mo,d),z(Th,m),z(Ah,S),z(Mh,E),z(Eh,p),z(Lh,q),z(Ch,L),z(Rh,C),z(go,b),z(uf,y),z(wh,j),Ce(v))if(v.length){const ee=n.exposed||(n.exposed={});v.forEach($=>{Object.defineProperty(ee,$,{get:()=>t[$],set:re=>t[$]=re,enumerable:!0})})}else n.exposed||(n.exposed={});D&&n.render===Tn&&(n.render=D),A!=null&&(n.inheritAttrs=A),N&&(n.components=N),ne&&(n.directives=ne),j&&lf(n)}function Ih(n,e,t=Tn){Ce(n)&&(n=wa(n));for(const i in n){const r=n[i];let s;Ze(r)?"default"in r?s=zr(r.from||i,r.default,!0):s=zr(r.from||i):s=zr(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function El(n,e,t){an(Ce(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ff(n,e,t,i){let r=i.includes(".")?ef(t,i):()=>t[i];if(dt(n)){const s=e[n];Be(s)&&Io(r,s)}else if(Be(n))Io(r,n.bind(t));else if(Ze(n))if(Ce(n))n.forEach(s=>ff(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&Io(r,s,n)}}function df(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>ks(l,u,a,!0)),ks(l,e,a)),Ze(e)&&s.set(e,l),l}function ks(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ks(n,s,t,!0),r&&r.forEach(a=>ks(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Nh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Nh={data:yl,props:bl,emits:bl,methods:Ur,computed:Ur,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Ur,directives:Ur,watch:Oh,provide:yl,inject:Fh};function yl(n,e){return e?n?function(){return Mt(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function Fh(n,e){return Ur(wa(n),wa(e))}function wa(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Ur(n,e){return n?Mt(Object.create(null),n,e):e}function bl(n,e){return n?Ce(n)&&Ce(e)?[...new Set([...n,...e])]:Mt(Object.create(null),Ml(n),Ml(e??{})):e}function Oh(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function hf(){return{app:null,config:{isNativeTag:Mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bh=0;function zh(n,e){return function(i,r=null){Be(i)||(i=Mt({},i)),r!=null&&!Ze(r)&&(r=null);const s=hf(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:Bh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:_p,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Be(c.install)?(a.add(c),c.install(u,...f)):Be(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const m=u._ceVNode||ut(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,c,d),l=!0,u._container=c,c.__vue_app__=u,xo(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(an(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=ur;ur=u;try{return c()}finally{ur=f}}};return u}}let ur=null;const Hh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pn(e)}Modifiers`]||n[`${zi(e)}Modifiers`];function Gh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||rt;let r=t;const s=e.startsWith("update:"),a=s&&Hh(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>dt(c)?c.trim():c)),a.number&&(r=t.map(ao)));let o,l=i[o=Co(e)]||i[o=Co(pn(e))];!l&&s&&(l=i[o=Co(zi(e))]),l&&an(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,an(u,n,6,r)}}const Vh=new WeakMap;function pf(n,e,t=!1){const i=t?Vh:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=u=>{const c=pf(u,e,!0);c&&(o=!0,Mt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Ze(n)&&i.set(n,null),null):(Ce(s)?s.forEach(l=>a[l]=null):Mt(a,s),Ze(n)&&i.set(n,a),a)}function _o(n,e){return!n||!io(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,zi(e))||Ke(n,e))}function Tl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:m,ctx:S,inheritAttrs:E}=n,p=Gs(n);let h,b;try{if(t.shapeFlag&4){const y=r||i,D=y;h=Mn(u.call(D,y,c,f,m,d,S)),b=o}else{const y=e;h=Mn(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),b=e.props?o:kh(o)}}catch(y){Ii.length=0,fo(y,n,1),h=ut(Ot)}let M=h;if(b&&E!==!1){const y=Object.keys(b),{shapeFlag:D}=M;y.length&&D&7&&(s&&y.some(ro)&&(b=Wh(b,s)),M=ci(M,b,!1,!0))}return t.dirs&&(M=ci(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&qr(M,t.transition),h=M,Gs(p),h}const kh=n=>{let e;for(const t in n)(t==="class"||t==="style"||io(t))&&((e||(e={}))[t]=n[t]);return e},Wh=(n,e)=>{const t={};for(const i in n)(!ro(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Xh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Al(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(mf(a,i,d)&&!_o(u,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Al(i,a,u):!0:!!a;return!1}function Al(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(mf(e,n,s)&&!_o(t,s))return!0}return!1}function mf(n,e,t){const i=n[t],r=e[t];return t==="style"&&Ze(i)&&Ze(r)?!Jr(i,r):i!==r}function qh({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const gf={},_f=()=>Object.create(gf),vf=n=>Object.getPrototypeOf(n)===gf;function $h(n,e,t,i=!1){const r={},s=_f();n.propsDefaults=Object.create(null),xf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:nh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Yh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(_o(n.emitsOptions,d))continue;const m=e[d];if(l)if(Ke(s,d))m!==s[d]&&(s[d]=m,u=!0);else{const S=pn(d);r[S]=Ra(l,o,S,m,n,!1)}else m!==s[d]&&(s[d]=m,u=!0)}}}else{xf(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!Ke(e,f)&&((c=zi(f))===f||!Ke(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Ra(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],u=!0)}u&&Hn(n.attrs,"set","")}function xf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Fr(l))continue;const u=e[l];let c;r&&Ke(r,c=pn(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:_o(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=je(t),u=o||rt;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Ra(r,l,f,u[f],n,!Ke(u,f))}}return a}function Ra(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Be(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=es(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===zi(t))&&(i=!0))}return i}const jh=new WeakMap;function Sf(n,e,t=!1){const i=t?jh:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const c=f=>{l=!0;const[d,m]=Sf(f,e,!0);Mt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return Ze(n)&&i.set(n,or),or;if(Ce(s))for(let c=0;c<s.length;c++){const f=pn(s[c]);wl(f)&&(a[f]=rt)}else if(s)for(const c in s){const f=pn(c);if(wl(f)){const d=s[c],m=a[f]=Ce(d)||Be(d)?{type:d}:Mt({},d),S=m.type;let E=!1,p=!0;if(Ce(S))for(let h=0;h<S.length;++h){const b=S[h],M=Be(b)&&b.name;if(M==="Boolean"){E=!0;break}else M==="String"&&(p=!1)}else E=Be(S)&&S.name==="Boolean";m[0]=E,m[1]=p,(E||Ke(m,"default"))&&o.push(f)}}const u=[a,o];return Ze(n)&&i.set(n,u),u}function wl(n){return n[0]!=="$"&&!Fr(n)}const Qa=n=>n==="_"||n==="_ctx"||n==="$stable",el=n=>Ce(n)?n.map(Mn):[Mn(n)],Kh=(n,e,t)=>{if(e._n)return e;const i=Zu((...r)=>el(e(...r)),t);return i._c=!1,i},Mf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Qa(r))continue;const s=n[r];if(Be(s))e[r]=Kh(r,s,i);else if(s!=null){const a=el(s);e[r]=()=>a}}},Ef=(n,e)=>{const t=el(e);n.slots.default=()=>t},yf=(n,e,t)=>{for(const i in e)(t||!Qa(i))&&(n[i]=e[i])},Zh=(n,e,t)=>{const i=n.slots=_f();if(n.vnode.shapeFlag&32){const r=e._;r?(yf(i,e,t),t&&Au(i,"_",r,!0)):Mf(e,i)}else e&&Ef(n,e)},Jh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=rt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:yf(r,e,t):(s=!e.$stable,Mf(e,r)),a=e}else e&&(Ef(n,e),a={default:1});if(s)for(const o in r)!Qa(o)&&a[o]==null&&delete r[o]},Ht=ip;function Qh(n){return ep(n)}function ep(n,e){const t=lo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:m=Tn,insertStaticContent:S}=n,E=(_,P,I,W=null,B=null,Q=null,te=void 0,x=null,g=!!P.dynamicChildren)=>{if(_===P)return;_&&!wi(_,P)&&(W=be(_),fe(_,B,Q,!0),_=null),P.patchFlag===-2&&(g=!1,P.dynamicChildren=null);const{type:w,ref:k,shapeFlag:F}=P;switch(w){case vo:p(_,P,I,W);break;case Ot:h(_,P,I,W);break;case Ns:_==null&&b(P,I,W,te);break;case St:N(_,P,I,W,B,Q,te,x,g);break;default:F&1?D(_,P,I,W,B,Q,te,x,g):F&6?ne(_,P,I,W,B,Q,te,x,g):(F&64||F&128)&&w.process(_,P,I,W,B,Q,te,x,g,Xe)}k!=null&&B?Hr(k,_&&_.ref,Q,P||_,!P):k==null&&_&&_.ref!=null&&Hr(_.ref,null,Q,_,!0)},p=(_,P,I,W)=>{if(_==null)i(P.el=o(P.children),I,W);else{const B=P.el=_.el;P.children!==_.children&&u(B,P.children)}},h=(_,P,I,W)=>{_==null?i(P.el=l(P.children||""),I,W):P.el=_.el},b=(_,P,I,W)=>{[_.el,_.anchor]=S(_.children,P,I,W,_.el,_.anchor)},M=({el:_,anchor:P},I,W)=>{let B;for(;_&&_!==P;)B=d(_),i(_,I,W),_=B;i(P,I,W)},y=({el:_,anchor:P})=>{let I;for(;_&&_!==P;)I=d(_),r(_),_=I;r(P)},D=(_,P,I,W,B,Q,te,x,g)=>{if(P.type==="svg"?te="svg":P.type==="math"&&(te="mathml"),_==null)L(P,I,W,B,Q,te,x,g);else{const w=_.el&&_.el._isVueCE?_.el:null;try{w&&w._beginPatch(),j(_,P,B,Q,te,x,g)}finally{w&&w._endPatch()}}},L=(_,P,I,W,B,Q,te,x)=>{let g,w;const{props:k,shapeFlag:F,transition:G,dirs:oe}=_;if(g=_.el=a(_.type,Q,k&&k.is,k),F&8?c(g,_.children):F&16&&q(_.children,g,null,W,B,Oo(_,Q),te,x),oe&&gi(_,null,W,"created"),C(g,_,_.scopeId,te,W),k){for(const ue in k)ue!=="value"&&!Fr(ue)&&s(g,ue,null,k[ue],Q,W);"value"in k&&s(g,"value",null,k.value,Q),(w=k.onVnodeBeforeMount)&&vn(w,W,_)}oe&&gi(_,null,W,"beforeMount");const se=tp(B,G);se&&G.beforeEnter(g),i(g,P,I),((w=k&&k.onVnodeMounted)||se||oe)&&Ht(()=>{try{w&&vn(w,W,_),se&&G.enter(g),oe&&gi(_,null,W,"mounted")}finally{}},B)},C=(_,P,I,W,B)=>{if(I&&m(_,I),W)for(let Q=0;Q<W.length;Q++)m(_,W[Q]);if(B){let Q=B.subTree;if(P===Q||wf(Q.type)&&(Q.ssContent===P||Q.ssFallback===P)){const te=B.vnode;C(_,te,te.scopeId,te.slotScopeIds,B.parent)}}},q=(_,P,I,W,B,Q,te,x,g=0)=>{for(let w=g;w<_.length;w++){const k=_[w]=x?zn(_[w]):Mn(_[w]);E(null,k,P,I,W,B,Q,te,x)}},j=(_,P,I,W,B,Q,te)=>{const x=P.el=_.el;let{patchFlag:g,dynamicChildren:w,dirs:k}=P;g|=_.patchFlag&16;const F=_.props||rt,G=P.props||rt;let oe;if(I&&_i(I,!1),(oe=G.onVnodeBeforeUpdate)&&vn(oe,I,P,_),k&&gi(P,_,I,"beforeUpdate"),I&&_i(I,!0),w&&(!_.dynamicChildren||_.dynamicChildren.length!==w.length)&&(g=0,te=!1,w=null),(F.innerHTML&&G.innerHTML==null||F.textContent&&G.textContent==null)&&c(x,""),w?v(_.dynamicChildren,w,x,I,W,Oo(P,B),Q):te||$(_,P,x,null,I,W,Oo(P,B),Q,!1),g>0){if(g&16)A(x,F,G,I,B);else if(g&2&&F.class!==G.class&&s(x,"class",null,G.class,B),g&4&&s(x,"style",F.style,G.style,B),g&8){const se=P.dynamicProps;for(let ue=0;ue<se.length;ue++){const me=se[ue],Se=F[me],ie=G[me];(ie!==Se||me==="value")&&s(x,me,Se,ie,B,I)}}g&1&&_.children!==P.children&&c(x,P.children)}else!te&&w==null&&A(x,F,G,I,B);((oe=G.onVnodeUpdated)||k)&&Ht(()=>{oe&&vn(oe,I,P,_),k&&gi(P,_,I,"updated")},W)},v=(_,P,I,W,B,Q,te)=>{for(let x=0;x<P.length;x++){const g=_[x],w=P[x],k=g.el&&(g.type===St||!wi(g,w)||g.shapeFlag&198)?f(g.el):I;E(g,w,k,null,W,B,Q,te,!0)}},A=(_,P,I,W,B)=>{if(P!==I){if(P!==rt)for(const Q in P)!Fr(Q)&&!(Q in I)&&s(_,Q,P[Q],null,B,W);for(const Q in I){if(Fr(Q))continue;const te=I[Q],x=P[Q];te!==x&&Q!=="value"&&s(_,Q,x,te,B,W)}"value"in I&&s(_,"value",P.value,I.value,B)}},N=(_,P,I,W,B,Q,te,x,g)=>{const w=P.el=_?_.el:o(""),k=P.anchor=_?_.anchor:o("");let{patchFlag:F,dynamicChildren:G,slotScopeIds:oe}=P;oe&&(x=x?x.concat(oe):oe),_==null?(i(w,I,W),i(k,I,W),q(P.children||[],I,k,B,Q,te,x,g)):F>0&&F&64&&G&&_.dynamicChildren&&_.dynamicChildren.length===G.length?(v(_.dynamicChildren,G,I,B,Q,te,x),(P.key!=null||B&&P===B.subTree)&&bf(_,P,!0)):$(_,P,I,k,B,Q,te,x,g)},ne=(_,P,I,W,B,Q,te,x,g)=>{P.slotScopeIds=x,_==null?P.shapeFlag&512?B.ctx.activate(P,I,W,te,g):U(P,I,W,B,Q,te,g):K(_,P,g)},U=(_,P,I,W,B,Q,te)=>{const x=_.component=up(_,W,B);if(ho(_)&&(x.ctx.renderer=Xe),fp(x,!1,te),x.asyncDep){if(B&&B.registerDep(x,z,te),!_.el){const g=x.subTree=ut(Ot);h(null,g,P,I),_.placeholder=g.el}}else z(x,_,P,I,B,Q,te)},K=(_,P,I)=>{const W=P.component=_.component;if(Xh(_,P,I))if(W.asyncDep&&!W.asyncResolved){ee(W,P,I);return}else W.next=P,W.update();else P.el=_.el,W.vnode=P},z=(_,P,I,W,B,Q,te)=>{const x=()=>{if(_.isMounted){let{next:F,bu:G,u:oe,parent:se,vnode:ue}=_;{const De=Tf(_);if(De){F&&(F.el=ue.el,ee(_,F,te)),De.asyncDep.then(()=>{Ht(()=>{_.isUnmounted||w()},B)});return}}let me=F,Se;_i(_,!1),F?(F.el=ue.el,ee(_,F,te)):F=ue,G&&Is(G),(Se=F.props&&F.props.onVnodeBeforeUpdate)&&vn(Se,se,F,ue),_i(_,!0);const ie=Tl(_),Ge=_.subTree;_.subTree=ie,E(Ge,ie,f(Ge.el),be(Ge),_,B,Q),F.el=ie.el,me===null&&qh(_,ie.el),oe&&Ht(oe,B),(Se=F.props&&F.props.onVnodeUpdated)&&Ht(()=>vn(Se,se,F,ue),B)}else{let F;const{el:G,props:oe}=P,{bm:se,m:ue,parent:me,root:Se,type:ie}=_,Ge=Gr(P);_i(_,!1),se&&Is(se),!Ge&&(F=oe&&oe.onVnodeBeforeMount)&&vn(F,me,P),_i(_,!0);{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(ie,_.parent?_.parent.type:void 0);const De=_.subTree=Tl(_);E(null,De,I,W,_,B,Q),P.el=De.el}if(ue&&Ht(ue,B),!Ge&&(F=oe&&oe.onVnodeMounted)){const De=P;Ht(()=>vn(F,me,De),B)}(P.shapeFlag&256||me&&Gr(me.vnode)&&me.vnode.shapeFlag&256)&&_.a&&Ht(_.a,B),_.isMounted=!0,P=I=W=null}};_.scope.on();const g=_.effect=new Lu(x);_.scope.off();const w=_.update=g.run.bind(g),k=_.job=g.runIfDirty.bind(g);k.i=_,k.id=_.uid,g.scheduler=()=>Ja(k),_i(_,!0),w()},ee=(_,P,I)=>{P.component=_;const W=_.vnode.props;_.vnode=P,_.next=null,Yh(_,P.props,W,I),Jh(_,P.children,I),Xn(),_l(_),qn()},$=(_,P,I,W,B,Q,te,x,g=!1)=>{const w=_&&_.children,k=_?_.shapeFlag:0,F=P.children,{patchFlag:G,shapeFlag:oe}=P;if(G>0){if(G&128){ae(w,F,I,W,B,Q,te,x,g);return}else if(G&256){re(w,F,I,W,B,Q,te,x,g);return}}oe&8?(k&16&&_e(w,B,Q),F!==w&&c(I,F)):k&16?oe&16?ae(w,F,I,W,B,Q,te,x,g):_e(w,B,Q,!0):(k&8&&c(I,""),oe&16&&q(F,I,W,B,Q,te,x,g))},re=(_,P,I,W,B,Q,te,x,g)=>{_=_||or,P=P||or;const w=_.length,k=P.length,F=Math.min(w,k);let G;for(G=0;G<F;G++){const oe=P[G]=g?zn(P[G]):Mn(P[G]);E(_[G],oe,I,null,B,Q,te,x,g)}w>k?_e(_,B,Q,!0,!1,F):q(P,I,W,B,Q,te,x,g,F)},ae=(_,P,I,W,B,Q,te,x,g)=>{let w=0;const k=P.length;let F=_.length-1,G=k-1;for(;w<=F&&w<=G;){const oe=_[w],se=P[w]=g?zn(P[w]):Mn(P[w]);if(wi(oe,se))E(oe,se,I,null,B,Q,te,x,g);else break;w++}for(;w<=F&&w<=G;){const oe=_[F],se=P[G]=g?zn(P[G]):Mn(P[G]);if(wi(oe,se))E(oe,se,I,null,B,Q,te,x,g);else break;F--,G--}if(w>F){if(w<=G){const oe=G+1,se=oe<k?P[oe].el:W;for(;w<=G;)E(null,P[w]=g?zn(P[w]):Mn(P[w]),I,se,B,Q,te,x,g),w++}}else if(w>G)for(;w<=F;)fe(_[w],B,Q,!0),w++;else{const oe=w,se=w,ue=new Map;for(w=se;w<=G;w++){const ge=P[w]=g?zn(P[w]):Mn(P[w]);ge.key!=null&&ue.set(ge.key,w)}let me,Se=0;const ie=G-se+1;let Ge=!1,De=0;const Le=new Array(ie);for(w=0;w<ie;w++)Le[w]=0;for(w=oe;w<=F;w++){const ge=_[w];if(Se>=ie){fe(ge,B,Q,!0);continue}let we;if(ge.key!=null)we=ue.get(ge.key);else for(me=se;me<=G;me++)if(Le[me-se]===0&&wi(ge,P[me])){we=me;break}we===void 0?fe(ge,B,Q,!0):(Le[we-se]=w+1,we>=De?De=we:Ge=!0,E(ge,P[we],I,null,B,Q,te,x,g),Se++)}const Te=Ge?np(Le):or;for(me=Te.length-1,w=ie-1;w>=0;w--){const ge=se+w,we=P[ge],Ye=P[ge+1],Qe=ge+1<k?Ye.el||Af(Ye):W;Le[w]===0?E(null,we,I,Qe,B,Q,te,x,g):Ge&&(me<0||w!==Te[me]?ce(we,I,Qe,2):me--)}}},ce=(_,P,I,W,B=null)=>{const{el:Q,type:te,transition:x,children:g,shapeFlag:w}=_;if(w&6){ce(_.component.subTree,P,I,W);return}if(w&128){_.suspense.move(P,I,W);return}if(w&64){te.move(_,P,I,Xe);return}if(te===St){i(Q,P,I);for(let F=0;F<g.length;F++)ce(g[F],P,I,W);i(_.anchor,P,I);return}if(te===Ns){M(_,P,I);return}if(W!==2&&w&1&&x)if(W===0)x.persisted&&!Q[tn]?i(Q,P,I):(x.beforeEnter(Q),i(Q,P,I),Ht(()=>x.enter(Q),B));else{const{leave:F,delayLeave:G,afterLeave:oe}=x,se=()=>{_.ctx.isUnmounted?r(Q):i(Q,P,I)},ue=()=>{const me=Q._isLeaving||!!Q[tn];Q._isLeaving&&Q[tn](!0),x.persisted&&!me?se():F(Q,()=>{se(),oe&&oe()})};G?G(Q,se,ue):ue()}else i(Q,P,I)},fe=(_,P,I,W=!1,B=!1)=>{const{type:Q,props:te,ref:x,children:g,dynamicChildren:w,shapeFlag:k,patchFlag:F,dirs:G,cacheIndex:oe,memo:se}=_;if(F===-2&&(B=!1),x!=null&&(Xn(),Hr(x,null,I,_,!0),qn()),oe!=null&&(P.renderCache[oe]=void 0),k&256){P.ctx.deactivate(_);return}const ue=k&1&&G,me=!Gr(_);let Se;if(me&&(Se=te&&te.onVnodeBeforeUnmount)&&vn(Se,P,_),k&6)le(_.component,I,W);else{if(k&128){_.suspense.unmount(I,W);return}ue&&gi(_,null,P,"beforeUnmount"),k&64?_.type.remove(_,P,I,Xe,W):w&&!w.hasOnce&&(Q!==St||F>0&&F&64)?_e(w,P,I,!1,!0):(Q===St&&F&384||!B&&k&16)&&_e(g,P,I),W&&Ie(_)}const ie=se!=null&&oe==null;(me&&(Se=te&&te.onVnodeUnmounted)||ue||ie)&&Ht(()=>{Se&&vn(Se,P,_),ue&&gi(_,null,P,"unmounted"),ie&&(_.el=null)},I)},Ie=_=>{const{type:P,el:I,anchor:W,transition:B}=_;if(P===St){Z(I,W);return}if(P===Ns){y(_);return}const Q=()=>{r(I),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:te,delayLeave:x}=B,g=()=>te(I,Q);x?x(_.el,Q,g):g()}else Q()},Z=(_,P)=>{let I;for(;_!==P;)I=d(_),r(_),_=I;r(P)},le=(_,P,I)=>{const{bum:W,scope:B,job:Q,subTree:te,um:x,m:g,a:w}=_;Rl(g),Rl(w),W&&Is(W),B.stop(),Q&&(Q.flags|=8,fe(te,_,P,I)),x&&Ht(x,P),Ht(()=>{_.isUnmounted=!0},P)},_e=(_,P,I,W=!1,B=!1,Q=0)=>{for(let te=Q;te<_.length;te++)fe(_[te],P,I,W,B)},be=_=>{if(_.shapeFlag&6)return be(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const P=d(_.anchor||_.el),I=P&&P[_h];return I?d(I):P};let Ae=!1;const xe=(_,P,I)=>{let W;_==null?P._vnode&&(fe(P._vnode,null,null,!0),W=P._vnode.component):E(P._vnode||null,_,P,null,null,null,I),P._vnode=_,Ae||(Ae=!0,_l(W),Yu(),Ae=!1)},Xe={p:E,um:fe,m:ce,r:Ie,mt:U,mc:q,pc:$,pbc:v,n:be,o:n};return{render:xe,hydrate:void 0,createApp:zh(xe)}}function Oo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function tp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bf(n,e,t=!1){const i=n.children,r=e.children;if(Ce(i)&&Ce(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=zn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&bf(a,o)),o.type===vo&&(o.patchFlag===-1&&(o=r[s]=zn(o)),o.el=a.el),o.type===Ot&&!o.el&&(o.el=a.el)}}function np(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Tf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tf(e)}function Rl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Af(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Af(e.subTree):null}const wf=n=>n.__isSuspense;function ip(n,e){e&&e.pendingBranch?Ce(n)?e.effects.push(...n):e.effects.push(n):hh(n)}const St=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),Ii=[];let Yt=null;function tt(n=!1){Ii.push(Yt=n?null:[])}function Rf(){Ii.pop(),Yt=Ii[Ii.length-1]||null}let $r=1;function Ws(n,e=!1){$r+=n,n<0&&Yt&&e&&(Yt.hasOnce=!0)}function Cf(n){return n.dynamicChildren=$r>0?Yt||or:null,Rf(),$r>0&&Yt&&Yt.push(n),n}function st(n,e,t,i,r,s){return Cf(J(n,e,t,i,r,s,!0))}function rp(n,e,t,i,r){return Cf(ut(n,e,t,i,r,!0))}function Xs(n){return n?n.__v_isVNode===!0:!1}function wi(n,e){return n.type===e.type&&n.key===e.key}const Lf=({key:n})=>n??null,Fs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||Pt(n)||Be(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function J(n,e=null,t=null,i=0,r=null,s=n===St?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Lf(e),ref:e&&Fs(e),scopeId:Ku,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return o?(qs(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),$r>0&&!a&&Yt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Yt.push(l),l}const ut=sp;function sp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ph)&&(n=Ot),Xs(n)){const o=ci(n,e,!0);return t&&qs(o,t),$r>0&&!s&&Yt&&(o.shapeFlag&6?Yt[Yt.indexOf(n)]=o:Yt.push(o)),o.patchFlag=-2,o}if(mp(n)&&(n=n.__vccOpts),e){e=op(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=lr(o)),Ze(l)&&(Za(l)&&!Ce(l)&&(l=Mt({},l)),e.style=Wa(l))}const a=dt(n)?1:wf(n)?128:tf(n)?64:Ze(n)?4:Be(n)?2:0;return J(n,e,t,i,r,a,s,!0)}function op(n){return n?Za(n)||vf(n)?Mt({},n):n:null}function ci(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?ap(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Lf(u),ref:e&&e.ref?t&&s?Ce(s)?s.concat(Fs(e)):[s,Fs(e)]:Fs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==St?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ci(n.ssContent),ssFallback:n.ssFallback&&ci(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&qr(c,l.clone(c)),c}function jt(n=" ",e=0){return ut(vo,null,n,e)}function Pf(n,e){const t=ut(Ns,null,n);return t.staticCount=e,t}function Df(n="",e=!1){return e?(tt(),rp(Ot,null,n)):ut(Ot,null,n)}function Mn(n){return n==null||typeof n=="boolean"?ut(Ot):Ce(n)?ut(St,null,n.slice()):Xs(n)?zn(n):ut(vo,null,String(n))}function zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ci(n)}function qs(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ce(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qs(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!vf(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Be(e)){if(i&65){qs(n,{default:e});return}e={default:e,_ctx:sn},t=32}else e=String(e),i&64?(t=16,e=[jt(e)]):t=8;n.children=e,n.shapeFlag|=t}function ap(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=lr([e.class,i.class]));else if(r==="style")e.style=Wa([e.style,i.style]);else if(io(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ce(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!ro(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function vn(n,e,t,i=null){an(n,e,7,[t,i])}const lp=hf();let cp=0;function up(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||lp,s={uid:cp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sf(i,r),emitsOptions:pf(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gh.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const Uf=()=>Bt||sn;let $s,Ca;{const n=lo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};$s=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),Ca=e("__VUE_SSR_SETTERS__",t=>Yr=t)}const es=n=>{const e=Bt;return $s(n),n.scope.on(),()=>{n.scope.off(),$s(e)}},Cl=()=>{Bt&&Bt.scope.off(),$s(null)};function If(n){return n.vnode.shapeFlag&4}let Yr=!1;function fp(n,e=!1,t=!1){e&&Ca(e);const{props:i,children:r}=n.vnode,s=If(n);$h(n,i,s,e),Zh(n,r,t||e);const a=s?dp(n,e):void 0;return e&&Ca(!1),a}function dp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dh);const{setup:i}=t;if(i){Xn();const r=n.setupContext=i.length>1?pp(n):null,s=es(n),a=Qr(i,n,0,[n.props,r]),o=Eu(a);if(qn(),s(),(o||n.sp)&&!Gr(n)&&lf(n),o){if(a.then(Cl,Cl),e)return a.then(l=>{Ll(n,l)}).catch(l=>{fo(l,n,0)});n.asyncDep=a}else Ll(n,a)}else Nf(n)}function Ll(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ze(e)&&(n.setupState=Wu(e)),Nf(n)}function Nf(n,e,t){const i=n.type;n.render||(n.render=i.render||Tn);{const r=es(n);Xn();try{Uh(n)}finally{qn(),r()}}}const hp={get(n,e){return Lt(n,"get",""),n[e]}};function pp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,hp),slots:n.slots,emit:n.emit,expose:e}}function xo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Wu(ih(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vr)return Vr[t](n)},has(e,t){return t in e||t in Vr}})):n.proxy}function mp(n){return Be(n)&&"__vccOpts"in n}const Sr=(n,e)=>lh(n,e,Yr);function gp(n,e,t){try{Ws(-1);const i=arguments.length;return i===2?Ze(e)&&!Ce(e)?Xs(e)?ut(n,null,[e]):ut(n,e):ut(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xs(t)&&(t=[t]),ut(n,e,t))}finally{Ws(1)}}const _p="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let La;const Pl=typeof window<"u"&&window.trustedTypes;if(Pl)try{La=Pl.createPolicy("vue",{createHTML:n=>n})}catch{}const Ff=La?n=>La.createHTML(n):n=>n,vp="http://www.w3.org/2000/svg",xp="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Dl=Bn&&Bn.createElement("template"),Sp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Bn.createElementNS(vp,n):e==="mathml"?Bn.createElementNS(xp,n):t?Bn.createElement(n,{is:t}):Bn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Dl.innerHTML=Ff(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Dl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Kn="transition",Ar="animation",jr=Symbol("_vtc"),Of={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mp=Mt({},nf,Of),Ep=n=>(n.displayName="Transition",n.props=Mp,n),yp=Ep((n,{slots:e})=>gp(Sh,bp(n),e)),vi=(n,e=[])=>{Ce(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ul=n=>n?Ce(n)?n.some(e=>e.length>1):n.length>1:!1;function bp(n){const e={};for(const N in n)N in Of||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,S=Tp(r),E=S&&S[0],p=S&&S[1],{onBeforeEnter:h,onEnter:b,onEnterCancelled:M,onLeave:y,onLeaveCancelled:D,onBeforeAppear:L=h,onAppear:C=b,onAppearCancelled:q=M}=e,j=(N,ne,U,K)=>{N._enterCancelled=K,xi(N,ne?c:o),xi(N,ne?u:a),U&&U()},v=(N,ne)=>{N._isLeaving=!1,xi(N,f),xi(N,m),xi(N,d),ne&&ne()},A=N=>(ne,U)=>{const K=N?C:b,z=()=>j(ne,N,U);vi(K,[ne,z]),Il(()=>{xi(ne,N?l:s),Pn(ne,N?c:o),Ul(K)||Nl(ne,i,E,z)})};return Mt(e,{onBeforeEnter(N){vi(h,[N]),Pn(N,s),Pn(N,a)},onBeforeAppear(N){vi(L,[N]),Pn(N,l),Pn(N,u)},onEnter:A(!1),onAppear:A(!0),onLeave(N,ne){N._isLeaving=!0;const U=()=>v(N,ne);Pn(N,f),N._enterCancelled?(Pn(N,d),Bl(N)):(Bl(N),Pn(N,d)),Il(()=>{N._isLeaving&&(xi(N,f),Pn(N,m),Ul(y)||Nl(N,i,p,U))}),vi(y,[N,U])},onEnterCancelled(N){j(N,!1,void 0,!0),vi(M,[N])},onAppearCancelled(N){j(N,!0,void 0,!0),vi(q,[N])},onLeaveCancelled(N){v(N),vi(D,[N])}})}function Tp(n){if(n==null)return null;if(Ze(n))return[Bo(n.enter),Bo(n.leave)];{const e=Bo(n);return[e,e]}}function Bo(n){return Rd(n)}function Pn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[jr]||(n[jr]=new Set)).add(e)}function xi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[jr];t&&(t.delete(e),t.size||(n[jr]=void 0))}function Il(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ap=0;function Nl(n,e,t,i){const r=n._endId=++Ap,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=wp(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,d),s()},d=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,d)}function wp(n,e){const t=window.getComputedStyle(n),i=S=>(t[S]||"").split(", "),r=i(`${Kn}Delay`),s=i(`${Kn}Duration`),a=Fl(r,s),o=i(`${Ar}Delay`),l=i(`${Ar}Duration`),u=Fl(o,l);let c=null,f=0,d=0;e===Kn?a>0&&(c=Kn,f=a,d=s.length):e===Ar?u>0&&(c=Ar,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?Kn:Ar:null,d=c?c===Kn?s.length:l.length:0);const m=c===Kn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Kn}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:m}}function Fl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ol(t)+Ol(n[i])))}function Ol(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bl(n){return(n?n.ownerDocument:document).body.offsetHeight}function Rp(n,e,t){const i=n[jr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zl=Symbol("_vod"),Cp=Symbol("_vsh"),Lp=Symbol(""),Pp=/(?:^|;)\s*display\s*:/;function Dp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ir(i,o,"")}else for(const a in e)t[a]==null&&Ir(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Ip(n,a,!dt(e)&&e?e[a]:void 0,o)||Ir(i,a,o):Ir(i,a,"")}}else if(r){if(e!==t){const a=i[Lp];a&&(t+=";"+a),i.cssText=t,s=Pp.test(t)}}else e&&n.removeAttribute("style");zl in n&&(n[zl]=s?i.display:"",n[Cp]&&(i.display="none"))}const Hl=/\s*!important$/;function Ir(n,e,t){if(Ce(t))t.forEach(i=>Ir(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Up(n,e);Hl.test(t)?n.setProperty(zi(i),t.replace(Hl,""),"important"):n[i]=t}}const Gl=["Webkit","Moz","ms"],zo={};function Up(n,e){const t=zo[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return zo[e]=i;i=Tu(i);for(let r=0;r<Gl.length;r++){const s=Gl[r]+i;if(s in n)return zo[e]=s}return e}function Ip(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&dt(i)&&t===i}const Vl="http://www.w3.org/1999/xlink";function kl(n,e,t,i,r,s=Id(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Vl,e.slice(6,e.length)):n.setAttributeNS(Vl,e,t):t==null||s&&!wu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Rn(t)?String(t):t)}function Wl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ff(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=wu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Ri(n,e,t,i){n.addEventListener(e,t,i)}function Np(n,e,t,i){n.removeEventListener(e,t,i)}const Xl=Symbol("_vei");function Fp(n,e,t,i,r=null){const s=n[Xl]||(n[Xl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=zp(e);if(i){const u=s[e]=Vp(i,r);Ri(n,o,u,l)}else a&&(Np(n,o,a,l),s[e]=void 0)}}const Op=/(Once|Passive|Capture)$/,Bp=/^on:?(?:Once|Passive|Capture)$/;function zp(n){let e,t;for(;(t=n.match(Op))&&!Bp.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):zi(n.slice(2)),e]}let Ho=0;const Hp=Promise.resolve(),Gp=()=>Ho||(Hp.then(()=>Ho=0),Ho=Date.now());function Vp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Ce(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const u=a[l];u&&an(u,e,5,o)}}else an(r,e,5,[i])};return t.value=n,t.attached=Gp(),t}const ql=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Rp(n,i,a):e==="style"?Dp(n,t,i):io(e)?ro(e)||Fp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wp(n,e,i,a))?(Wl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kl(n,e,i,a,s,e!=="value")):n._isVueCE&&(Xp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!dt(i)))?Wl(n,pn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),kl(n,e,i,a))};function Wp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ql(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ql(e)&&dt(t)?!1:e in n}function Xp(n,e){const t=n._def.props;if(!t)return!1;const i=pn(e);return Array.isArray(t)?t.some(r=>pn(r)===i):Object.keys(t).some(r=>pn(r)===i)}const Ys=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ce(e)?t=>Is(e,t):e};function qp(n){n.target.composing=!0}function $l(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign");function Yl(n,e,t){return e&&(n=n.trim()),t&&(n=ao(n)),n}const Go={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[fr]=Ys(r);const s=i||r.props&&r.props.type==="number";Ri(n,e?"change":"input",a=>{a.target.composing||n[fr](Yl(n.value,t,s))}),(t||s)&&Ri(n,"change",()=>{n.value=Yl(n.value,t,s)}),e||(Ri(n,"compositionstart",qp),Ri(n,"compositionend",$l),Ri(n,"change",$l))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[fr]=Ys(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?ao(n.value):n.value,l=e??"";if(o===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},$p={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Ri(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?ao(js(s)):js(s));n[fr](n.multiple?so(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,qu(()=>{n._assigning=!1})}),n[fr]=Ys(i)},mounted(n,{value:e}){jl(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[fr]=Ys(t)},updated(n,{value:e}){n._assigning||jl(n,e)}};function jl(n,e){const t=n.multiple,i=Ce(e);if(!(t&&!i&&!so(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=js(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(u=>String(u)===String(o)):a.selected=Fd(e,o)>-1}else a.selected=e.has(o);else if(Jr(js(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function js(n){return"_value"in n?n._value:n.value}const Yp=["ctrl","shift","alt","meta"],jp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Yp.some(t=>n[`${t}Key`]&&!e.includes(t))},Nr=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=jp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Kp=Mt({patchProp:kp},Sp);let Kl;function Zp(){return Kl||(Kl=Qh(Kp))}const Jp=(...n)=>{const e=Zp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=em(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Qp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Qp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function em(n){return dt(n)?document.querySelector(n):n}const Bf=Symbol("locale"),Zl={tr:{nav:{services:"Hizmetler",process:"Süreç",projects:"Projeler",cta:"Teklif Al",ctac:"Teklif Al"},hero:{badge:"Bespoke Software & Custom AI Solutions",title1:"İşinizi Geleceğe Taşıyan",titleHighlight:"Özel Yazılım",title2:"ve Yapay Zeka Çözümleri",subtitle:"İhtiyacınıza özel ERP sistemlerinden yüksek performanslı web platformlarına kadar, dijital dönüşümünüzü uçtan uca yönetiyoruz.",ctaPrimary:"Projenizi Başlatın",ctaSecondary:"Çözümlerimizi İnceleyin",stat1Label:"Aktif Süreçler",stat2Label:"Yapay Zeka Verimliliği",stat2Value:"10x Hız",stat3Label:"Sistem Sağlığı"},services:{sectionTitle1:"Uçtan Uca Dijital",sectionTitleHighlight:"Mühendislik",sectionSubtitle:"Geleceğin teknolojilerini bugünün iş ihtiyaçlarıyla buluşturuyoruz.",details:"Detaylar",cards:[{title:"Özel Web & Mobil Platformlar",description:"Kullanıcı deneyimini odağa alan, yüksek performanslı ve ölçeklenebilir dijital çözümler."},{title:"Kurumsal ERP & CRM Sistemleri",description:"Operasyonel mükemmellik için firmanıza özel terzi usulü yönetim platformları."},{title:"Özel Yazılım Geliştirme",description:"Karmaşık iş süreçlerini kolaylaştıran, güvenli ve esnek yazılım mimarileri."},{title:"Yapay Zeka & Otomasyon",description:"İş akışlarını otopilota alan akıllı algoritmalar ve LLM entegrasyonları."}]},ai:{engineLabel:"Sartechs AI Engine Active",engineQuote:'"Süreç analizi tamamlandı. Verimlilik %85 oranında optimize edildi."',title1:"Yapay Zeka ile Süreçlerinizi",titleHighlight:"Otopilota",title2:"Alın",features:[{title:"Akıllı Karar Mekanizmaları",description:"Veri yığınlarını anlamlı içgörülere dönüştürerek stratejik kararlarınızı destekliyoruz."},{title:"Hızlandırılmış Operasyon",description:"Tekrar eden görevleri otonom sistemlere devrederek ekibinizin yaratıcılığa odaklanmasını sağlıyoruz."},{title:"Öngörülebilir Güvenlik",description:"Anomali tespiti ve proaktif savunma sistemleri ile verilerinizi en üst düzeyde koruyoruz."}]},stats:{reliability:"Güvenilirlik",speed:"Hız",bespoke:"Özel Çözüm"},process:{title1:"Mükemmelliğe Giden",titleHighlight:"Yol",subtitle:"Sistemli ve şeffaf çalışma modelimizle başarıyı garantiliyoruz.",steps:[{title:"Analiz & Strateji",description:"İhtiyaçlarınızı derinlemesine inceliyor, yol haritasını belirliyoruz."},{title:"Mimari & UI/UX",description:"Estetiği fonksiyonla birleştiren, kullanıcı dostu arayüzler tasarlıyoruz."},{title:"Çevik Geliştirme",description:"Modern teknolojilerle güvenli ve ölçeklenebilir kod yazıyoruz."},{title:"Canlıya Alım & Destek",description:"Projenizi yayınlıyor, süreklilik için teknik destek sağlıyoruz."}]},contact:{title1:"Bir Sonraki",titleHighlight:"Devriminizi",title2:"Başlatalım",subtitle:"Ekibimiz 24 saat içinde size özel bir strateji ile dönüş yapacaktır.",labelName:"Ad Soyad",placeholderName:"Ahmet Yılmaz",labelEmail:"Şirket E-postası",placeholderEmail:"ahmet@sirket.com",labelService:"Hizmet Türü",labelDetails:"Proje Detayları",placeholderDetails:"Projenizden kısaca bahseder misiniz?",submit:"TEKLİF TALEBİ GÖNDER",serviceOptions:["Özel Yazılım Geliştirme","Yapay Zeka Entegrasyonu","Mobil Uygulama","ERP & CRM Çözümleri"]},footer:{tagline:"Geleceğin teknolojilerini kullanarak işletmenizi dijital çağda zirveye taşıyoruz.",copyright:"© 2024 Sartechs. Tüm hakları saklıdır.",company:"Şirket",support:"Destek",companyLinks:["Hizmetler","Süreç","Projeler"],supportLinks:["İletişim","Kariyer","Blog"]}},en:{nav:{services:"Services",process:"Process",projects:"Projects",cta:"Get a Quote"},hero:{badge:"Bespoke Software & Custom AI Solutions",title1:"Custom Software",titleHighlight:"& AI Solutions",title2:"That Drive Your Business Forward",subtitle:"From tailor-made ERP systems to high-performance web platforms, we manage your digital transformation end-to-end.",ctaPrimary:"Start Your Project",ctaSecondary:"Explore Our Solutions",stat1Label:"Active Processes",stat2Label:"AI Efficiency",stat2Value:"10x Speed",stat3Label:"System Health"},services:{sectionTitle1:"End-to-End Digital",sectionTitleHighlight:"Engineering",sectionSubtitle:"Bridging tomorrow's technologies with today's business needs.",details:"Details",cards:[{title:"Custom Web & Mobile Platforms",description:"High-performance, scalable digital solutions focused on user experience."},{title:"Enterprise ERP & CRM Systems",description:"Tailor-made management platforms for operational excellence."},{title:"Custom Software Development",description:"Secure and flexible software architectures that streamline complex workflows."},{title:"AI & Automation",description:"Intelligent algorithms and LLM integrations that put workflows on autopilot."}]},ai:{engineLabel:"Sartechs AI Engine Active",engineQuote:'"Process analysis complete. Efficiency optimized by 85%."',title1:"Put Your Processes on",titleHighlight:"Autopilot",title2:"with AI",features:[{title:"Intelligent Decision Engines",description:"We turn data mountains into meaningful insights that support your strategic decisions."},{title:"Accelerated Operations",description:"By delegating repetitive tasks to autonomous systems, we free your team to focus on creativity."},{title:"Predictive Security",description:"Anomaly detection and proactive defense systems keep your data protected at the highest level."}]},stats:{reliability:"Reliability",speed:"Speed",bespoke:"Bespoke"},process:{title1:"The Road to",titleHighlight:"Excellence",subtitle:"We guarantee success with our systematic and transparent working model.",steps:[{title:"Analysis & Strategy",description:"We deeply examine your needs and define the roadmap."},{title:"Architecture & UI/UX",description:"We design user-friendly interfaces that unite aesthetics and function."},{title:"Agile Development",description:"We write secure, scalable code with modern technologies."},{title:"Launch & Support",description:"We deploy your project and provide ongoing technical support."}]},contact:{title1:"Let's Kick Off Your",titleHighlight:"Next Revolution",title2:"",subtitle:"Our team will get back to you within 24 hours with a tailored strategy.",labelName:"Full Name",placeholderName:"John Doe",labelEmail:"Company Email",placeholderEmail:"john@company.com",labelService:"Service Type",labelDetails:"Project Details",placeholderDetails:"Tell us a bit about your project.",submit:"SEND QUOTE REQUEST",serviceOptions:["Custom Software Development","AI Integration","Mobile Application","ERP & CRM Solutions"]},footer:{tagline:"Leveraging tomorrow's technologies to elevate your business in the digital age.",copyright:"© 2024 Sartechs. All rights reserved.",company:"Company",support:"Support",companyLinks:["Services","Process","Projects"],supportLinks:["Contact","Careers","Blog"]}}};function tm(){const n=Bs("tr");return Ju(Bf,n),n}function di(){const n=zr(Bf);return{locale:n,t:t=>{const i=t.split(".");let r=Zl[n.value];for(const s of i){if(r==null)return t;r=r[s]}return r??t},messages:Zl}}const nm=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},im={class:"fixed top-0 w-full z-50 bg-surface-obsidian/80 backdrop-blur-md border-b border-white/5"},rm={class:"flex justify-between items-center max-w-container-max mx-auto px-gutter py-3"},sm={class:"flex items-center gap-3"},om={class:"hidden md:flex gap-8 items-center"},am=["onClick"],lm={class:"md:hidden flex items-center gap-3"},cm={class:"material-symbols-outlined text-[28px]"},um={key:0,class:"md:hidden flex flex-col px-gutter pb-4 gap-4 border-t border-white/5 bg-surface-obsidian"},fm=["onClick"],dm={__name:"AppHeader",setup(n){const{locale:e,t}=di();function i(){e.value=e.value==="tr"?"en":"tr"}const r=Sr(()=>[{id:"hizmetler",label:t("nav.services")},{id:"surec",label:t("nav.process")},{id:"projeler",label:t("nav.projects")}]),s=Bs(null),a=Bs(!1);function o(u){const c=u?document.getElementById(u):document.documentElement;if(!c)return;const f=72,d=window.scrollY,S=(u?c.getBoundingClientRect().top+window.scrollY-f:0)-d,E=Math.min(Math.max(Math.abs(S)*.4,400),900);let p=null;function h(M){return M<.5?4*M*M*M:1-Math.pow(-2*M+2,3)/2}function b(M){p||(p=M);const y=M-p,D=Math.min(y/E,1);window.scrollTo(0,d+S*h(D)),D<1&&requestAnimationFrame(b)}requestAnimationFrame(b)}let l;return mo(()=>{const u=document.querySelectorAll("section[id]");l=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(s.value=f.target.id)})},{rootMargin:"-40% 0px -55% 0px"}),u.forEach(c=>l.observe(c))}),go(()=>l==null?void 0:l.disconnect()),(u,c)=>(tt(),st("header",im,[J("div",rm,[J("div",sm,[J("img",{src:"https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs",alt:"Sartechs",class:"h-9 w-auto logo-filter cursor-pointer",onClick:c[0]||(c[0]=f=>o(null))}),J("span",{class:"font-display-xl-mobile text-[20px] font-bold tracking-tight text-white hidden md:block cursor-pointer",onClick:c[1]||(c[1]=f=>o(null))}," SARTECHS ")]),J("nav",om,[(tt(!0),st(St,null,li(r.value,f=>(tt(),st("a",{key:f.id,href:"#",class:lr(["relative font-label-md transition-colors duration-200 py-1",s.value===f.id?"text-white":"text-on-surface-variant hover:text-white"]),onClick:Nr(d=>o(f.id),["prevent"])},[jt(Me(f.label)+" ",1),J("span",{class:lr(["absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded-full transition-all duration-300",s.value===f.id?"w-full opacity-100":"w-0 opacity-0"])},null,2)],10,am))),128)),J("a",{href:"#",class:"bg-primary text-white px-5 py-2 rounded-lg font-label-md glow-button",onClick:c[2]||(c[2]=Nr(f=>o("iletisim"),["prevent"]))},Me(Pe(t)("nav.cta")),1),J("button",{class:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-white transition-colors",onClick:i},[c[5]||(c[5]=J("span",{class:"material-symbols-outlined text-[14px]"},"language",-1)),jt(" "+Me(Pe(e)==="tr"?"EN":"TR"),1)])]),J("div",lm,[J("button",{class:"flex items-center gap-1 px-2.5 py-1 rounded-md glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant",onClick:i},[c[6]||(c[6]=J("span",{class:"material-symbols-outlined text-[13px]"},"language",-1)),jt(" "+Me(Pe(e)==="tr"?"EN":"TR"),1)]),J("button",{class:"text-on-surface",onClick:c[3]||(c[3]=f=>a.value=!a.value)},[J("span",cm,Me(a.value?"close":"menu"),1)])])]),ut(yp,{name:"slide-down"},{default:Zu(()=>[a.value?(tt(),st("nav",um,[(tt(!0),st(St,null,li(r.value,f=>(tt(),st("a",{key:f.id,href:"#",class:lr(["font-label-md py-2 transition-colors duration-200",s.value===f.id?"text-primary":"text-on-surface-variant"]),onClick:Nr(d=>{o(f.id),a.value=!1},["prevent"])},Me(f.label),11,fm))),128)),J("a",{href:"#",class:"bg-primary text-white px-5 py-2 rounded-lg font-label-md text-center glow-button",onClick:c[4]||(c[4]=Nr(f=>{o("iletisim"),a.value=!1},["prevent"]))},Me(Pe(t)("nav.cta")),1)])):Df("",!0)]),_:1})]))}},hm=nm(dm,[["__scopeId","data-v-63915250"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="161",pm=0,Jl=1,mm=2,zf=1,gm=2,On=3,ui=0,kt=1,Vn=2,si=0,dr=1,Ql=2,ec=3,tc=4,_m=5,Ci=100,vm=101,xm=102,nc=103,ic=104,Sm=200,Mm=201,Em=202,ym=203,Pa=204,Da=205,bm=206,Tm=207,Am=208,wm=209,Rm=210,Cm=211,Lm=212,Pm=213,Dm=214,Um=0,Im=1,Nm=2,Ks=3,Fm=4,Om=5,Bm=6,zm=7,Hf=0,Hm=1,Gm=2,oi=0,Vm=1,km=2,Wm=3,Xm=4,qm=5,$m=6,Gf=300,gr=301,_r=302,Ua=303,Ia=304,So=306,Na=1e3,fn=1001,Fa=1002,Nt=1003,rc=1004,wr=1005,Gt=1006,Vo=1007,Pi=1008,ai=1009,Ym=1010,jm=1011,nl=1012,Vf=1013,ri=1014,kn=1015,Kr=1016,kf=1017,Wf=1018,Ni=1020,Km=1021,dn=1023,Zm=1024,Jm=1025,Fi=1026,vr=1027,Qm=1028,Xf=1029,eg=1030,qf=1031,$f=1033,ko=33776,Wo=33777,Xo=33778,qo=33779,sc=35840,oc=35841,ac=35842,lc=35843,Yf=36196,cc=37492,uc=37496,fc=37808,dc=37809,hc=37810,pc=37811,mc=37812,gc=37813,_c=37814,vc=37815,xc=37816,Sc=37817,Mc=37818,Ec=37819,yc=37820,bc=37821,$o=36492,Tc=36494,Ac=36495,tg=36283,wc=36284,Rc=36285,Cc=36286,jf=3e3,Oi=3001,ng=3200,ig=3201,Kf=0,rg=1,rn="",bt="srgb",Yn="srgb-linear",il="display-p3",Mo="display-p3-linear",Zs="linear",ct="srgb",Js="rec709",Qs="p3",Gi=7680,Lc=519,sg=512,og=513,ag=514,Zf=515,lg=516,cg=517,ug=518,fg=519,Pc=35044,Dc="300 es",Oa=1035,Wn=2e3,eo=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,Ba=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function dg(n,e){return(n%e+e)%e}function jo(n,e,t){return(1-t)*n+t*e}function Uc(n){return(n&n-1)===0&&n!==0}function za(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],S=i[8],E=r[0],p=r[3],h=r[6],b=r[1],M=r[4],y=r[7],D=r[2],L=r[5],C=r[8];return s[0]=a*E+o*b+l*D,s[3]=a*p+o*M+l*L,s[6]=a*h+o*y+l*C,s[1]=u*E+c*b+f*D,s[4]=u*p+c*M+f*L,s[7]=u*h+c*y+f*C,s[2]=d*E+m*b+S*D,s[5]=d*p+m*M+S*L,s[8]=d*h+m*y+S*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,m=u*s-a*l,S=t*f+i*d+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=f*E,e[1]=(r*u-c*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(c*t-r*l)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(i*l-u*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new We;function Jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hg(){const n=to("canvas");return n.style.display="block",n}const Ic={};function hr(n){n in Ic||(Ic[n]=!0,console.warn(n))}const Nc=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[Yn]:{transfer:Zs,primaries:Js,toReference:n=>n,fromReference:n=>n},[bt]:{transfer:ct,primaries:Js,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Mo]:{transfer:Zs,primaries:Qs,toReference:n=>n.applyMatrix3(Fc),fromReference:n=>n.applyMatrix3(Nc)},[il]:{transfer:ct,primaries:Qs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fc),fromReference:n=>n.applyMatrix3(Nc).convertLinearToSRGB()}},pg=new Set([Yn,Mo]),et={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ds[e].toReference,r=ds[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ds[n].primaries},getTransfer:function(n){return n===rn?Zs:ds[n].transfer}};function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Qf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=to("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mg=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jo(r[a].image)):s.push(Jo(r[a]))}else s=Jo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gg=0;class Wt extends Mr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=fn,r=fn,s=Gt,a=Pi,o=dn,l=ai,u=Wt.DEFAULT_ANISOTROPY,c=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=ts(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Oi?bt:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Oi:jf}set encoding(e){hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Oi?bt:rn}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Gf;Wt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],S=l[9],E=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-E)<.01&&Math.abs(S-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+E)<.1&&Math.abs(S+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,y=(m+1)/2,D=(h+1)/2,L=(c+d)/4,C=(f+E)/4,q=(S+p)/4;return M>y&&M>D?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=L/i,s=C/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=L/r,s=q/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=C/s,r=q/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-S)*(p-S)+(f-E)*(f-E)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(p-S)/b,this.y=(f-E)/b,this.z=(d-c)/b,this.w=Math.acos((u+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _g extends Mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Oi?bt:rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends _g{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class td extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vg extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],S=s[a+2],E=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=S,e[t+3]=E;return}if(f!==E||l!==d||u!==m||c!==S){let p=1-o;const h=l*d+u*m+c*S+f*E,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const D=Math.sqrt(M),L=Math.atan2(D,h*b);p=Math.sin(p*L)/D,o=Math.sin(o*L)/D}const y=o*b;if(l=l*p+d*y,u=u*p+m*y,c=c*p+S*y,f=f*p+E*y,p===1-o){const D=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=D,u*=D,c*=D,f*=D}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],m=s[a+2],S=s[a+3];return e[t]=o*S+c*f+l*m-u*d,e[t+1]=l*S+c*d+u*f-o*m,e[t+2]=u*S+c*m+o*d-l*f,e[t+3]=c*S-o*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),S=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*m*S,this._y=u*m*f-d*c*S,this._z=u*c*S+d*m*f,this._w=u*c*f-d*m*S;break;case"YXZ":this._x=d*c*f+u*m*S,this._y=u*m*f-d*c*S,this._z=u*c*S-d*m*f,this._w=u*c*f+d*m*S;break;case"ZXY":this._x=d*c*f-u*m*S,this._y=u*m*f+d*c*S,this._z=u*c*S+d*m*f,this._w=u*c*f-d*m*S;break;case"ZYX":this._x=d*c*f-u*m*S,this._y=u*m*f+d*c*S,this._z=u*c*S-d*m*f,this._w=u*c*f+d*m*S;break;case"YZX":this._x=d*c*f+u*m*S,this._y=u*m*f+d*c*S,this._z=u*c*S-d*m*f,this._w=u*c*f-d*m*S;break;case"XZY":this._x=d*c*f-u*m*S,this._y=u*m*f-d*c*S,this._z=u*c*S+d*m*f,this._w=u*c*f+d*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new H,Oc=new ns;class is{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ps.subVectors(this.max,Cr),ki.subVectors(e.a,Cr),Wi.subVectors(e.b,Cr),Xi.subVectors(e.c,Cr),Zn.subVectors(Wi,ki),Jn.subVectors(Xi,Wi),Si.subVectors(ki,Xi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Si.z,Si.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Si.z,0,-Si.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Si.y,Si.x,0];return!ea(t,ki,Wi,Xi,ps)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,ki,Wi,Xi,ps))?!1:(ms.crossVectors(Zn,Jn),t=[ms.x,ms.y,ms.z],ea(t,ki,Wi,Xi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new H,new H,new H,new H,new H,new H,new H,new H],ln=new H,hs=new is,ki=new H,Wi=new H,Xi=new H,Zn=new H,Jn=new H,Si=new H,Cr=new H,ps=new H,ms=new H,Mi=new H;function ea(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mi.fromArray(n,s);const o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),u=t.dot(Mi),c=i.dot(Mi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const xg=new is,Lr=new H,ta=new H;class rl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(ta)),this.expandByPoint(Lr.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new H,na=new H,gs=new H,Qn=new H,ia=new H,_s=new H,ra=new H;class Sg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){na.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(na);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gs),o=Qn.dot(this.direction),l=-Qn.dot(gs),u=Qn.lengthSq(),c=Math.abs(1-a*a);let f,d,m,S;if(c>0)if(f=a*l-o,d=a*o-l,S=s*c,f>=0)if(d>=-S)if(d<=S){const E=1/c;f*=E,d*=E,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;else d<=-S?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=S?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(na).addScaledVector(gs,d),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){ia.subVectors(t,e),_s.subVectors(i,e),ra.crossVectors(ia,_s);let a=this.direction.dot(ra),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(_s.crossVectors(Qn,_s));if(l<0)return null;const u=o*this.direction.dot(ia.cross(Qn));if(u<0||l+u>a)return null;const c=-o*Qn.dot(ra);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,s,a,o,l,u,c,f,d,m,S,E,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,m,S,E,p)}set(e,t,i,r,s,a,o,l,u,c,f,d,m,S,E,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=m,h[7]=S,h[11]=E,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,m=a*f,S=o*c,E=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+S*u,t[5]=d-E*u,t[9]=-o*l,t[2]=E-d*u,t[6]=S+m*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,S=u*c,E=u*f;t[0]=d+E*o,t[4]=S*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=m*o-S,t[6]=E+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,S=u*c,E=u*f;t[0]=d-E*o,t[4]=-a*f,t[8]=S+m*o,t[1]=m+S*o,t[5]=a*c,t[9]=E-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,m=a*f,S=o*c,E=o*f;t[0]=l*c,t[4]=S*u-m,t[8]=d*u+E,t[1]=l*f,t[5]=E*u+d,t[9]=m*u-S,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,S=o*l,E=o*u;t[0]=l*c,t[4]=E-d*f,t[8]=S*f+m,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*f+S,t[10]=d-E*f}else if(e.order==="XZY"){const d=a*l,m=a*u,S=o*l,E=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+E,t[5]=a*c,t[9]=m*f-S,t[2]=S*f-m,t[6]=o*c,t[10]=E*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Eg)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ei.crossVectors(i,qt),ei.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ei.crossVectors(i,qt)),ei.normalize(),vs.crossVectors(qt,ei),r[0]=ei.x,r[4]=vs.x,r[8]=qt.x,r[1]=ei.y,r[5]=vs.y,r[9]=qt.y,r[2]=ei.z,r[6]=vs.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],S=i[2],E=i[6],p=i[10],h=i[14],b=i[3],M=i[7],y=i[11],D=i[15],L=r[0],C=r[4],q=r[8],j=r[12],v=r[1],A=r[5],N=r[9],ne=r[13],U=r[2],K=r[6],z=r[10],ee=r[14],$=r[3],re=r[7],ae=r[11],ce=r[15];return s[0]=a*L+o*v+l*U+u*$,s[4]=a*C+o*A+l*K+u*re,s[8]=a*q+o*N+l*z+u*ae,s[12]=a*j+o*ne+l*ee+u*ce,s[1]=c*L+f*v+d*U+m*$,s[5]=c*C+f*A+d*K+m*re,s[9]=c*q+f*N+d*z+m*ae,s[13]=c*j+f*ne+d*ee+m*ce,s[2]=S*L+E*v+p*U+h*$,s[6]=S*C+E*A+p*K+h*re,s[10]=S*q+E*N+p*z+h*ae,s[14]=S*j+E*ne+p*ee+h*ce,s[3]=b*L+M*v+y*U+D*$,s[7]=b*C+M*A+y*K+D*re,s[11]=b*q+M*N+y*z+D*ae,s[15]=b*j+M*ne+y*ee+D*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],S=e[3],E=e[7],p=e[11],h=e[15];return S*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*m-i*l*m)+E*(+t*l*m-t*u*d+s*a*d-r*a*m+r*u*c-s*l*c)+p*(+t*u*f-t*o*m-s*a*f+i*a*m+s*o*c-i*u*c)+h*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],S=e[12],E=e[13],p=e[14],h=e[15],b=f*p*u-E*d*u+E*l*m-o*p*m-f*l*h+o*d*h,M=S*d*u-c*p*u-S*l*m+a*p*m+c*l*h-a*d*h,y=c*E*u-S*f*u+S*o*m-a*E*m-c*o*h+a*f*h,D=S*f*l-c*E*l-S*o*d+a*E*d+c*o*p-a*f*p,L=t*b+i*M+r*y+s*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=b*C,e[1]=(E*d*s-f*p*s-E*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(o*p*s-E*l*s+E*r*u-i*p*u-o*r*h+i*l*h)*C,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*m-i*l*m)*C,e[4]=M*C,e[5]=(c*p*s-S*d*s+S*r*m-t*p*m-c*r*h+t*d*h)*C,e[6]=(S*l*s-a*p*s-S*r*u+t*p*u+a*r*h-t*l*h)*C,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*m+t*l*m)*C,e[8]=y*C,e[9]=(S*f*s-c*E*s-S*i*m+t*E*m+c*i*h-t*f*h)*C,e[10]=(a*E*s-S*o*s+S*i*u-t*E*u-a*i*h+t*o*h)*C,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*m-t*o*m)*C,e[12]=D*C,e[13]=(c*E*r-S*f*r+S*i*d-t*E*d-c*i*p+t*f*p)*C,e[14]=(S*o*r-a*E*r-S*i*l+t*E*l+a*i*p-t*o*p)*C,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,m=s*c,S=s*f,E=a*c,p=a*f,h=o*f,b=l*u,M=l*c,y=l*f,D=i.x,L=i.y,C=i.z;return r[0]=(1-(E+h))*D,r[1]=(m+y)*D,r[2]=(S-M)*D,r[3]=0,r[4]=(m-y)*L,r[5]=(1-(d+h))*L,r[6]=(p+b)*L,r[7]=0,r[8]=(S+M)*C,r[9]=(p-b)*C,r[10]=(1-(d+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),o=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const u=1/s,c=1/a,f=1/o;return cn.elements[0]*=u,cn.elements[1]*=u,cn.elements[2]*=u,cn.elements[4]*=c,cn.elements[5]*=c,cn.elements[6]*=c,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Wn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,S;if(o===Wn)m=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===eo)m=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Wn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),d=(t+e)*u,m=(i+r)*c;let S,E;if(o===Wn)S=(a+s)*f,E=-2*f;else if(o===eo)S=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=E,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new H,cn=new At,Mg=new H(0,0,0),Eg=new H(1,1,1),ei=new H,vs=new H,qt=new H,Bc=new At,zc=new ns;class Eo{constructor(e=0,t=0,i=0,r=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eo.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yg=0;const Hc=new H,$i=new ns,In=new At,xs=new H,Pr=new H,bg=new H,Tg=new ns,Gc=new H(1,0,0),Vc=new H(0,1,0),kc=new H(0,0,1),Ag={type:"added"},wg={type:"removed"};class Kt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new H,t=new Eo,i=new ns,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xs.copy(e):xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Pr,xs,this.up):In.lookAt(xs,Pr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(In),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ag)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),S=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new H(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new H,Nn=new H,sa=new H,Fn=new H,Yi=new H,ji=new H,Wc=new H,oa=new H,aa=new H,la=new H;class bn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),Nn.subVectors(i,t),sa.subVectors(e,t);const a=un.dot(un),o=un.dot(Nn),l=un.dot(sa),u=Nn.dot(Nn),c=Nn.dot(sa),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*l-o*c)*d,S=(a*c-o*l)*d;return s.set(1-m-S,S,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),Nn.subVectors(e,t),un.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Yi.subVectors(r,i),ji.subVectors(s,i),oa.subVectors(e,i);const l=Yi.dot(oa),u=ji.dot(oa);if(l<=0&&u<=0)return t.copy(i);aa.subVectors(e,r);const c=Yi.dot(aa),f=ji.dot(aa);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Yi,a);la.subVectors(e,s);const m=Yi.dot(la),S=ji.dot(la);if(S>=0&&m<=S)return t.copy(s);const E=m*u-l*S;if(E<=0&&u>=0&&S<=0)return o=u/(u-S),t.copy(i).addScaledVector(ji,o);const p=c*S-m*f;if(p<=0&&f-c>=0&&m-S>=0)return Wc.subVectors(s,r),o=(f-c)/(f-c+(m-S)),t.copy(r).addScaledVector(Wc,o);const h=1/(p+E+d);return a=E*h,o=d*h,t.copy(i).addScaledVector(Yi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=dg(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ca(a,s,e+1/3),this.g=ca(a,s,e),this.b=ca(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return et.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Vt(Ct.r*255,0,255))*65536+Math.round(Vt(Ct.g*255,0,255))*256+Math.round(Vt(Ct.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=bt){et.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ss);const i=jo(ti.h,Ss.h,t),r=jo(ti.s,Ss.s,t),s=jo(ti.l,Ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new nt;nt.NAMES=id;let Rg=0;class rs extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=dr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Da,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rd extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new H,Ms=new $e;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return hr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pc&&(e.usage=this.usage),e}}class sd extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class od extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cg=0;const en=new At,ua=new Kt,Ki=new H,$t=new is,Dr=new is,xt=new H;class hi extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?od:sd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors($t.min,Dr.min),$t.expandByPoint(xt),xt.addVectors($t.max,Dr.max),$t.expandByPoint(xt)):($t.expandByPoint(Dr.min),$t.expandByPoint(Dr.max))}$t.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)xt.fromBufferAttribute(o,u),l&&(Ki.fromBufferAttribute(e,u),xt.add(Ki)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let v=0;v<o;v++)u[v]=new H,c[v]=new H;const f=new H,d=new H,m=new H,S=new $e,E=new $e,p=new $e,h=new H,b=new H;function M(v,A,N){f.fromArray(r,v*3),d.fromArray(r,A*3),m.fromArray(r,N*3),S.fromArray(a,v*2),E.fromArray(a,A*2),p.fromArray(a,N*2),d.sub(f),m.sub(f),E.sub(S),p.sub(S);const ne=1/(E.x*p.y-p.x*E.y);isFinite(ne)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-E.y).multiplyScalar(ne),b.copy(m).multiplyScalar(E.x).addScaledVector(d,-p.x).multiplyScalar(ne),u[v].add(h),u[A].add(h),u[N].add(h),c[v].add(b),c[A].add(b),c[N].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let v=0,A=y.length;v<A;++v){const N=y[v],ne=N.start,U=N.count;for(let K=ne,z=ne+U;K<z;K+=3)M(i[K+0],i[K+1],i[K+2])}const D=new H,L=new H,C=new H,q=new H;function j(v){C.fromArray(s,v*3),q.copy(C);const A=u[v];D.copy(A),D.sub(C.multiplyScalar(C.dot(A))).normalize(),L.crossVectors(q,A);const ne=L.dot(c[v])<0?-1:1;l[v*4]=D.x,l[v*4+1]=D.y,l[v*4+2]=D.z,l[v*4+3]=ne}for(let v=0,A=y.length;v<A;++v){const N=y[v],ne=N.start,U=N.count;for(let K=ne,z=ne+U;K<z;K+=3)j(i[K+0]),j(i[K+1]),j(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,u=new H,c=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const S=e.getX(d+0),E=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,p),o.add(c),l.add(c),u.add(c),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let m=0,S=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*c;for(let h=0;h<c;h++)d[S++]=u[m++]}return new An(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new At,Ei=new Sg,Es=new rl,qc=new H,Zi=new H,Ji=new H,Qi=new H,fa=new H,ys=new H,bs=new $e,Ts=new $e,As=new $e,$c=new H,Yc=new H,jc=new H,ws=new H,Rs=new H;class hn extends Kt{constructor(e=new hi,t=new rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(fa.fromBufferAttribute(f,e),a?ys.addScaledVector(fa,c):ys.addScaledVector(fa.sub(t),c))}t.add(ys)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Es.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Es,qc)===null||Ei.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Xc.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(Xc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,E=d.length;S<E;S++){const p=d[S],h=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,D=M;y<D;y+=3){const L=o.getX(y),C=o.getX(y+1),q=o.getX(y+2);r=Cs(this,h,e,i,u,c,f,L,C,q),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=S,h=E;p<h;p+=3){const b=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);r=Cs(this,a,e,i,u,c,f,b,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,E=d.length;S<E;S++){const p=d[S],h=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,D=M;y<D;y+=3){const L=y,C=y+1,q=y+2;r=Cs(this,h,e,i,u,c,f,L,C,q),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=S,h=E;p<h;p+=3){const b=p,M=p+1,y=p+2;r=Cs(this,a,e,i,u,c,f,b,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Lg(n,e,t,i,r,s,a,o){let l;if(e.side===kt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ui,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Rs);return u<t.near||u>t.far?null:{distance:u,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Zi),n.getVertexPosition(l,Ji),n.getVertexPosition(u,Qi);const c=Lg(n,e,t,i,Zi,Ji,Qi,ws);if(c){r&&(bs.fromBufferAttribute(r,o),Ts.fromBufferAttribute(r,l),As.fromBufferAttribute(r,u),c.uv=bn.getInterpolation(ws,Zi,Ji,Qi,bs,Ts,As,new $e)),s&&(bs.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,l),As.fromBufferAttribute(s,u),c.uv1=bn.getInterpolation(ws,Zi,Ji,Qi,bs,Ts,As,new $e),c.uv2=c.uv1),a&&($c.fromBufferAttribute(a,o),Yc.fromBufferAttribute(a,l),jc.fromBufferAttribute(a,u),c.normal=bn.getInterpolation(ws,Zi,Ji,Qi,$c,Yc,jc,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new H,materialIndex:0};bn.getNormal(Zi,Ji,Qi,f.normal),c.face=f}return c}class ss extends hi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,m=0;S("z","y","x",-1,-1,i,t,e,a,s,0),S("z","y","x",1,-1,i,t,-e,a,s,1),S("x","z","y",1,1,e,i,t,r,a,2),S("x","z","y",1,-1,e,i,-t,r,a,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(u,3)),this.setAttribute("normal",new wn(c,3)),this.setAttribute("uv",new wn(f,2));function S(E,p,h,b,M,y,D,L,C,q,j){const v=y/C,A=D/q,N=y/2,ne=D/2,U=L/2,K=C+1,z=q+1;let ee=0,$=0;const re=new H;for(let ae=0;ae<z;ae++){const ce=ae*A-ne;for(let fe=0;fe<K;fe++){const Ie=fe*v-N;re[E]=Ie*b,re[p]=ce*M,re[h]=U,u.push(re.x,re.y,re.z),re[E]=0,re[p]=0,re[h]=L>0?1:-1,c.push(re.x,re.y,re.z),f.push(fe/C),f.push(1-ae/q),ee+=1}}for(let ae=0;ae<q;ae++)for(let ce=0;ce<C;ce++){const fe=d+ce+K*ae,Ie=d+ce+K*(ae+1),Z=d+(ce+1)+K*(ae+1),le=d+(ce+1)+K*ae;l.push(fe,Ie,le),l.push(Ie,Z,le),$+=6}o.addGroup(m,$,j),m+=$,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function Pg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ad(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const Dg={clone:xr,merge:It};var Ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ug,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ld extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new H,Kc=new $e,Zc=new $e;class nn extends ld{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,Zc),t.subVectors(Zc,Kc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class Ng extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(er,tr,e,t);r.layers=this.layers,this.add(r);const s=new nn(er,tr,e,t);s.layers=this.layers,this.add(s);const a=new nn(er,tr,e,t);a.layers=this.layers,this.add(a);const o=new nn(er,tr,e,t);o.layers=this.layers,this.add(o);const l=new nn(er,tr,e,t);l.layers=this.layers,this.add(l);const u=new nn(er,tr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,m),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class cd extends Wt{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fg extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Oi?bt:rn),this.texture=new cd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ss(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:si});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Gt),new Ng(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const da=new H,Og=new H,Bg=new We;class Ti{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=da.subVectors(i,t).cross(Og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bg.getNormalMatrix(e),r=this.coplanarPoint(da).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new rl,Ls=new H;class ud{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],S=r[9],E=r[10],p=r[11],h=r[12],b=r[13],M=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-m,y-h).normalize(),i[1].setComponents(l+s,d+u,p+m,y+h).normalize(),i[2].setComponents(l+a,d+c,p+S,y+b).normalize(),i[3].setComponents(l-a,d-c,p-S,y-b).normalize(),i[4].setComponents(l-o,d-f,p-E,y-M).normalize(),t===Wn)i[5].setComponents(l+o,d+f,p+E,y+M).normalize();else if(t===eo)i[5].setComponents(o,f,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,m=f.byteLength,S=n.createBuffer();n.bindBuffer(c,S),n.bufferData(c,f,d),u.onUploadCallback();let E;if(f instanceof Float32Array)E=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)E=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=n.SHORT;else if(f instanceof Uint32Array)E=n.UNSIGNED_INT;else if(f instanceof Int32Array)E=n.INT;else if(f instanceof Int8Array)E=n.BYTE;else if(f instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:S,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const d=c.array,m=c._updateRange,S=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&S.length===0&&n.bufferSubData(f,0,d),S.length!==0){for(let E=0,p=S.length;E<p;E++){const h=S[E];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class yo extends hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,m=[],S=[],E=[],p=[];for(let h=0;h<c;h++){const b=h*d-a;for(let M=0;M<u;M++){const y=M*f-s;S.push(y,-b,0),E.push(0,0,1),p.push(M/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const M=b+u*h,y=b+u*(h+1),D=b+1+u*(h+1),L=b+1+u*h;m.push(M,y,L),m.push(y,D,L)}this.setIndex(m),this.setAttribute("position",new wn(S,3)),this.setAttribute("normal",new wn(E,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,c_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Av=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ox=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_x=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Hg,alphahash_pars_fragment:Gg,alphamap_fragment:Vg,alphamap_pars_fragment:kg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:$g,batching_pars_vertex:Yg,batching_vertex:jg,begin_vertex:Kg,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:r_,color_fragment:s_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:l_,common:c_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:f_,displacementmap_pars_vertex:d_,displacementmap_vertex:h_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:__,envmap_fragment:v_,envmap_common_pars_fragment:x_,envmap_pars_fragment:S_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:U_,envmap_vertex:E_,fog_vertex:y_,fog_pars_vertex:b_,fog_fragment:T_,fog_pars_fragment:A_,gradientmap_pars_fragment:w_,lightmap_fragment:R_,lightmap_pars_fragment:C_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:P_,lights_pars_begin:D_,lights_toon_fragment:I_,lights_toon_pars_fragment:N_,lights_phong_fragment:F_,lights_phong_pars_fragment:O_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:H_,lights_fragment_maps:G_,lights_fragment_end:V_,logdepthbuf_fragment:k_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:q_,map_fragment:$_,map_pars_fragment:Y_,map_particle_fragment:j_,map_particle_pars_fragment:K_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:J_,morphcolor_vertex:Q_,morphnormal_vertex:ev,morphtarget_pars_vertex:tv,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:rv,normal_pars_fragment:sv,normal_pars_vertex:ov,normal_vertex:av,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:cv,clearcoat_normal_fragment_maps:uv,clearcoat_pars_fragment:fv,iridescence_pars_fragment:dv,opaque_fragment:hv,packing:pv,premultiplied_alpha_fragment:mv,project_vertex:gv,dithering_fragment:_v,dithering_pars_fragment:vv,roughnessmap_fragment:xv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Ev,shadowmap_vertex:yv,shadowmask_pars_fragment:bv,skinbase_vertex:Tv,skinning_pars_vertex:Av,skinning_vertex:wv,skinnormal_vertex:Rv,specularmap_fragment:Cv,specularmap_pars_fragment:Lv,tonemapping_fragment:Pv,tonemapping_pars_fragment:Dv,transmission_fragment:Uv,transmission_pars_fragment:Iv,uv_pars_fragment:Nv,uv_pars_vertex:Fv,uv_vertex:Ov,worldpos_vertex:Bv,background_vert:zv,background_frag:Hv,backgroundCube_vert:Gv,backgroundCube_frag:Vv,cube_vert:kv,cube_frag:Wv,depth_vert:Xv,depth_frag:qv,distanceRGBA_vert:$v,distanceRGBA_frag:Yv,equirect_vert:jv,equirect_frag:Kv,linedashed_vert:Zv,linedashed_frag:Jv,meshbasic_vert:Qv,meshbasic_frag:ex,meshlambert_vert:tx,meshlambert_frag:nx,meshmatcap_vert:ix,meshmatcap_frag:rx,meshnormal_vert:sx,meshnormal_frag:ox,meshphong_vert:ax,meshphong_frag:lx,meshphysical_vert:cx,meshphysical_frag:ux,meshtoon_vert:fx,meshtoon_frag:dx,points_vert:hx,points_frag:px,shadow_vert:mx,shadow_frag:gx,sprite_vert:_x,sprite_frag:vx},pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},En={basic:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:It([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:It([pe.lights,pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};En.physical={uniforms:It([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ps={r:0,b:0,g:0};function xx(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function S(p,h){let b=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M)),M===null?E(o,l):M&&M.isColor&&(E(M,1),b=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===So)?(c===void 0&&(c=new hn(new ss(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:xr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==ct,(f!==M||d!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new hn(new yo(2,2),new fi({name:"BackgroundMaterial",uniforms:xr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function E(p,h){p.getRGB(Ps,ad(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,E(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,E(o,l)},render:S}}function Sx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function f(U,K,z,ee,$){let re=!1;if(a){const ae=E(ee,z,K);u!==ae&&(u=ae,m(u.object)),re=h(U,ee,z,$),re&&b(U,ee,z,$)}else{const ae=K.wireframe===!0;(u.geometry!==ee.id||u.program!==z.id||u.wireframe!==ae)&&(u.geometry=ee.id,u.program=z.id,u.wireframe=ae,re=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,q(U,K,z,ee),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function S(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function E(U,K,z){const ee=z.wireframe===!0;let $=o[U.id];$===void 0&&($={},o[U.id]=$);let re=$[K.id];re===void 0&&(re={},$[K.id]=re);let ae=re[ee];return ae===void 0&&(ae=p(d()),re[ee]=ae),ae}function p(U){const K=[],z=[],ee=[];for(let $=0;$<r;$++)K[$]=0,z[$]=0,ee[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:z,attributeDivisors:ee,object:U,attributes:{},index:null}}function h(U,K,z,ee){const $=u.attributes,re=K.attributes;let ae=0;const ce=z.getAttributes();for(const fe in ce)if(ce[fe].location>=0){const Z=$[fe];let le=re[fe];if(le===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;ae++}return u.attributesNum!==ae||u.index!==ee}function b(U,K,z,ee){const $={},re=K.attributes;let ae=0;const ce=z.getAttributes();for(const fe in ce)if(ce[fe].location>=0){let Z=re[fe];Z===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),$[fe]=le,ae++}u.attributes=$,u.attributesNum=ae,u.index=ee}function M(){const U=u.newAttributes;for(let K=0,z=U.length;K<z;K++)U[K]=0}function y(U){D(U,0)}function D(U,K){const z=u.newAttributes,ee=u.enabledAttributes,$=u.attributeDivisors;z[U]=1,ee[U]===0&&(n.enableVertexAttribArray(U),ee[U]=1),$[U]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,K),$[U]=K)}function L(){const U=u.newAttributes,K=u.enabledAttributes;for(let z=0,ee=K.length;z<ee;z++)K[z]!==U[z]&&(n.disableVertexAttribArray(z),K[z]=0)}function C(U,K,z,ee,$,re,ae){ae===!0?n.vertexAttribIPointer(U,K,z,$,re):n.vertexAttribPointer(U,K,z,ee,$,re)}function q(U,K,z,ee){if(i.isWebGL2===!1&&(U.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const $=ee.attributes,re=z.getAttributes(),ae=K.defaultAttributeValues;for(const ce in re){const fe=re[ce];if(fe.location>=0){let Ie=$[ce];if(Ie===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(Ie=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(Ie=U.instanceColor)),Ie!==void 0){const Z=Ie.normalized,le=Ie.itemSize,_e=t.get(Ie);if(_e===void 0)continue;const be=_e.buffer,Ae=_e.type,xe=_e.bytesPerElement,Xe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||Ie.gpuType===Vf);if(Ie.isInterleavedBufferAttribute){const Fe=Ie.data,_=Fe.stride,P=Ie.offset;if(Fe.isInstancedInterleavedBuffer){for(let I=0;I<fe.locationSize;I++)D(fe.location+I,Fe.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let I=0;I<fe.locationSize;I++)y(fe.location+I);n.bindBuffer(n.ARRAY_BUFFER,be);for(let I=0;I<fe.locationSize;I++)C(fe.location+I,le/fe.locationSize,Ae,Z,_*xe,(P+le/fe.locationSize*I)*xe,Xe)}else{if(Ie.isInstancedBufferAttribute){for(let Fe=0;Fe<fe.locationSize;Fe++)D(fe.location+Fe,Ie.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Fe=0;Fe<fe.locationSize;Fe++)y(fe.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Fe=0;Fe<fe.locationSize;Fe++)C(fe.location+Fe,le/fe.locationSize,Ae,Z,le*xe,le/fe.locationSize*Fe*xe,Xe)}}else if(ae!==void 0){const Z=ae[ce];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(fe.location,Z);break;case 3:n.vertexAttrib3fv(fe.location,Z);break;case 4:n.vertexAttrib4fv(fe.location,Z);break;default:n.vertexAttrib1fv(fe.location,Z)}}}}L()}function j(){N();for(const U in o){const K=o[U];for(const z in K){const ee=K[z];for(const $ in ee)S(ee[$].object),delete ee[$];delete K[z]}delete o[U]}}function v(U){if(o[U.id]===void 0)return;const K=o[U.id];for(const z in K){const ee=K[z];for(const $ in ee)S(ee[$].object),delete ee[$];delete K[z]}delete o[U.id]}function A(U){for(const K in o){const z=o[K];if(z[U.id]===void 0)continue;const ee=z[U.id];for(const $ in ee)S(ee[$].object),delete ee[$];delete z[U.id]}}function N(){ne(),c=!0,u!==l&&(u=l,m(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:ne,dispose:j,releaseStatesOfGeometry:v,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:y,disableUnusedAttributes:L}}function Mx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let m,S;if(r)m=n,S="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[S](s,c,f,d),t.update(f,s,d)}function u(c,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<d;S++)this.render(c[S],f[S]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,d);let S=0;for(let E=0;E<d;E++)S+=f[E];t.update(S,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Ex(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,y=a||e.has("OES_texture_float"),D=M&&y,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:D,maxSamples:L}}function yx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,m){const S=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||S===null||S.length===0||s&&!p)s?c(null):u();else{const b=s?0:i,M=b*4;let y=h.clippingState||null;l.value=y,y=c(S,d,M,m);for(let D=0;D!==M;++D)y[D]=t[D];h.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,S){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=l.value,S!==!0||p===null){const h=m+E*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,y=m;M!==E;++M,y+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function bx(n){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=gr:o===Ia&&(a.mapping=_r),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ua||o===Ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Fg(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Tx extends ld{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,Jc=[.125,.215,.35,.446,.526,.582],Li=20,ha=new Tx,Qc=new nt;let pa=null,ma=0,ga=0;const Ai=(1+Math.sqrt(5))/2,nr=1/Ai,eu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ai,nr),new H(0,Ai,-nr),new H(nr,0,Ai),new H(-nr,0,Ai),new H(Ai,nr,0),new H(-Ai,nr,0)];class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Kr,format:dn,colorSpace:Yn,depthBuffer:!1},r=nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ax(s)),this._blurMaterial=wx(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,r){const o=new nn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Qc),c.toneMapping=oi,c.autoClear=!1;const m=new rd({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),S=new hn(new ss,m);let E=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,E=!0):(m.color.copy(Qc),E=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const M=this._cubeSize;Ds(r,b*M,h>2?M:0,M,M),c.setRenderTarget(r),E&&c.render(S,o),c.render(e,o)}S.geometry.dispose(),S.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(r-1)%eu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new hn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),E=s/S,p=isFinite(s)?1+Math.floor(c*E):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const h=[];let b=0;for(let C=0;C<Li;++C){const q=C/E,j=Math.exp(-q*q/2);h.push(j),C===0?b+=j:C<p&&(b+=2*j)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=S,d.mipInt.value=M-i;const y=this._sizeLods[r],D=3*y*(r>M-rr?r-M+rr:0),L=4*(this._cubeSize-y);Ds(t,D,L,3*y,2*y),l.setRenderTarget(t),l.render(f,ha)}}function Ax(n){const e=[],t=[],i=[];let r=n;const s=n-rr+1+Jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-rr?l=Jc[a-n+rr-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,S=6,E=3,p=2,h=1,b=new Float32Array(E*S*m),M=new Float32Array(p*S*m),y=new Float32Array(h*S*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,q=L>2?0:-1,j=[C,q,0,C+2/3,q,0,C+2/3,q+1,0,C,q,0,C+2/3,q+1,0,C,q+1,0];b.set(j,E*S*L),M.set(d,p*S*L);const v=[L,L,L,L,L,L];y.set(v,h*S*L)}const D=new hi;D.setAttribute("position",new An(b,E)),D.setAttribute("uv",new An(M,p)),D.setAttribute("faceIndex",new An(y,h)),e.push(D),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nu(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wx(n,e,t){const i=new Float32Array(Li),r=new H(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function iu(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ru(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ua||l===Ia,c=l===gr||l===_r;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new tu(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new tu(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Cx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lx(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const S in d.attributes)e.remove(d.attributes[S]);for(const S in d.morphAttributes){const E=d.morphAttributes[S];for(let p=0,h=E.length;p<h;p++)e.remove(E[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const S in d)e.update(d[S],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const S in m){const E=m[S];for(let p=0,h=E.length;p<h;p++)e.update(E[p],n.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,S=f.attributes.position;let E=0;if(m!==null){const b=m.array;E=m.version;for(let M=0,y=b.length;M<y;M+=3){const D=b[M+0],L=b[M+1],C=b[M+2];d.push(D,L,L,C,C,D)}}else if(S!==void 0){const b=S.array;E=S.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const D=M+0,L=M+1,C=M+2;d.push(D,L,L,C,C,D)}}else return;const p=new(Jf(d)?od:sd)(d,1);p.version=E;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Px(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function c(m,S){n.drawElements(s,S,o,m*l),t.update(S,s,1)}function f(m,S,E){if(E===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,S,o,m*l,E),t.update(S,s,E)}function d(m,S,E){if(E===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<E;h++)this.render(m[h]/l,S[h]);else{p.multiDrawElementsWEBGL(s,S,0,o,m,0,E);let h=0;for(let b=0;b<E;b++)h+=S[b];t.update(h,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Dx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ux(n,e){return n[0]-e[0]}function Ix(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Nx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const S=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,E=S!==void 0?S.length:0;let p=s.get(c);if(p===void 0||p.count!==E){let K=function(){ne.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var m=K;p!==void 0&&p.texture.dispose();const M=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,D=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],q=c.morphAttributes.color||[];let j=0;M===!0&&(j=1),y===!0&&(j=2),D===!0&&(j=3);let v=c.attributes.position.count*j,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const N=new Float32Array(v*A*4*E),ne=new td(N,v,A,E);ne.type=kn,ne.needsUpdate=!0;const U=j*4;for(let z=0;z<E;z++){const ee=L[z],$=C[z],re=q[z],ae=v*A*4*z;for(let ce=0;ce<ee.count;ce++){const fe=ce*U;M===!0&&(a.fromBufferAttribute(ee,ce),N[ae+fe+0]=a.x,N[ae+fe+1]=a.y,N[ae+fe+2]=a.z,N[ae+fe+3]=0),y===!0&&(a.fromBufferAttribute($,ce),N[ae+fe+4]=a.x,N[ae+fe+5]=a.y,N[ae+fe+6]=a.z,N[ae+fe+7]=0),D===!0&&(a.fromBufferAttribute(re,ce),N[ae+fe+8]=a.x,N[ae+fe+9]=a.y,N[ae+fe+10]=a.z,N[ae+fe+11]=re.itemSize===4?a.w:1)}}p={count:E,texture:ne,size:new $e(v,A)},s.set(c,p),c.addEventListener("dispose",K)}let h=0;for(let M=0;M<d.length;M++)h+=d[M];const b=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const S=d===void 0?0:d.length;let E=i[c.id];if(E===void 0||E.length!==S){E=[];for(let y=0;y<S;y++)E[y]=[y,0];i[c.id]=E}for(let y=0;y<S;y++){const D=E[y];D[0]=y,D[1]=d[y]}E.sort(Ix);for(let y=0;y<8;y++)y<S&&E[y][1]?(o[y][0]=E[y][0],o[y][1]=E[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Ux);const p=c.morphAttributes.position,h=c.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const D=o[y],L=D[0],C=D[1];L!==Number.MAX_SAFE_INTEGER&&C?(p&&c.getAttribute("morphTarget"+y)!==p[L]&&c.setAttribute("morphTarget"+y,p[L]),h&&c.getAttribute("morphNormal"+y)!==h[L]&&c.setAttribute("morphNormal"+y,h[L]),r[y]=C,b+=C):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const M=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Fx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class dd extends Wt{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:Fi,c!==Fi&&c!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fi&&(i=ri),i===void 0&&c===vr&&(i=Ni),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new Wt,pd=new dd(1,1);pd.compareFunction=Zf;const md=new td,gd=new vg,_d=new cd,su=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=su[r];if(s===void 0&&(s=new Float32Array(r),su[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bo(n,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),_t(t,i)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),_t(t,i)}}function kx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),_t(t,i)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Jx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?pd:hd;t.setTexture2D(e||s,r)}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gd,r)}function e0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_d,r)}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||md,r)}function n0(n){switch(n){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Gx;case 35675:return Vx;case 35676:return kx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return $x;case 5125:return Yx;case 36294:return jx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(n,e){n.uniform1fv(this.addr,e)}function r0(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function s0(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function o0(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function a0(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l0(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c0(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u0(n,e){n.uniform1iv(this.addr,e)}function f0(n,e){n.uniform2iv(this.addr,e)}function d0(n,e){n.uniform3iv(this.addr,e)}function h0(n,e){n.uniform4iv(this.addr,e)}function p0(n,e){n.uniform1uiv(this.addr,e)}function m0(n,e){n.uniform2uiv(this.addr,e)}function g0(n,e){n.uniform3uiv(this.addr,e)}function _0(n,e){n.uniform4uiv(this.addr,e)}function v0(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||hd,s[a])}function x0(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||gd,s[a])}function S0(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_d,s[a])}function M0(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||md,s[a])}function E0(n){switch(n){case 5126:return i0;case 35664:return r0;case 35665:return s0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return h0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return M0}}class y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n0(t.type)}}class b0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class T0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function uu(n,e){n.seq.push(e),n.map[e.id]=e}function A0(n,e,t){const i=n.name,r=i.length;for(_a.lastIndex=0;;){const s=_a.exec(i),a=_a.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){uu(t,u===void 0?new y0(o,n,e):new b0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new T0(o),uu(t,f)),t=f}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);A0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const w0=37297;let R0=0;function C0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function L0(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Qs&&t===Js?i="LinearDisplayP3ToLinearSRGB":e===Js&&t===Qs&&(i="LinearSRGBToLinearDisplayP3"),n){case Yn:case Mo:return[i,"LinearTransferOETF"];case bt:case il:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function du(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+C0(n.getShaderSource(e),a)}else return r}function P0(n,e){const t=L0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D0(n,e){let t;switch(e){case Vm:t="Linear";break;case km:t="Reinhard";break;case Wm:t="OptimizedCineon";break;case Xm:t="ACESFilmic";break;case $m:t="AgX";break;case qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function U0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function I0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function N0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sr(n){return n!==""}function hu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(O0,z0)}const B0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function z0(n,e){let t=He[e];if(t===void 0){const i=B0.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(n){return n.replace(H0,G0)}function G0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function k0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hf:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Gm:e="ENVMAP_BLENDING_ADD";break}return e}function q0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=V0(t),u=k0(t),c=W0(t),f=X0(t),d=q0(t),m=t.isWebGL2?"":U0(t),S=I0(t),E=N0(s),p=r.createProgram();let h,b,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(sr).join(`
`),h.length>0&&(h+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(sr).join(`
`),b.length>0&&(b+=`
`)):(h=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),b=[m,gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?He.tonemapping_pars_fragment:"",t.toneMapping!==oi?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Ha(a),a=hu(a,t),a=pu(a,t),o=Ha(o),o=hu(o,t),o=pu(o,t),a=mu(a),o=mu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const y=M+h+a,D=M+b+o,L=fu(r,r.VERTEX_SHADER,y),C=fu(r,r.FRAGMENT_SHADER,D);r.attachShader(p,L),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function q(N){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(L).trim(),K=r.getShaderInfoLog(C).trim();let z=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,L,C);else{const $=du(r,L,"vertex"),re=du(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ne+`
`+$+`
`+re)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(U===""||K==="")&&(ee=!1);ee&&(N.diagnostics={runnable:z,programLog:ne,vertexShader:{log:U,prefix:h},fragmentShader:{log:K,prefix:b}})}r.deleteShader(L),r.deleteShader(C),j=new Os(r,p),v=F0(r,p)}let j;this.getUniforms=function(){return j===void 0&&q(this),j};let v;this.getAttributes=function(){return v===void 0&&q(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,w0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=C,this}let Y0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K0(e),t.set(e,i)),i}}class K0{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}}function Z0(n,e,t,i,r,s,a){const o=new nd,l=new j0,u=new Set,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return u.add(v),v===0?"uv":`uv${v}`}function h(v,A,N,ne,U){const K=ne.fog,z=U.geometry,ee=v.isMeshStandardMaterial?ne.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),re=$&&$.mapping===So?$.image.height:null,ae=E[v.type];v.precision!==null&&(S=r.getMaxPrecision(v.precision),S!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",S,"instead."));const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=ce!==void 0?ce.length:0;let Ie=0;z.morphAttributes.position!==void 0&&(Ie=1),z.morphAttributes.normal!==void 0&&(Ie=2),z.morphAttributes.color!==void 0&&(Ie=3);let Z,le,_e,be;if(ae){const ot=En[ae];Z=ot.vertexShader,le=ot.fragmentShader}else Z=v.vertexShader,le=v.fragmentShader,l.update(v),_e=l.getVertexShaderID(v),be=l.getFragmentShaderID(v);const Ae=n.getRenderTarget(),xe=U.isInstancedMesh===!0,Xe=U.isBatchedMesh===!0,Fe=!!v.map,_=!!v.matcap,P=!!$,I=!!v.aoMap,W=!!v.lightMap,B=!!v.bumpMap,Q=!!v.normalMap,te=!!v.displacementMap,x=!!v.emissiveMap,g=!!v.metalnessMap,w=!!v.roughnessMap,k=v.anisotropy>0,F=v.clearcoat>0,G=v.iridescence>0,oe=v.sheen>0,se=v.transmission>0,ue=k&&!!v.anisotropyMap,me=F&&!!v.clearcoatMap,Se=F&&!!v.clearcoatNormalMap,ie=F&&!!v.clearcoatRoughnessMap,Ge=G&&!!v.iridescenceMap,De=G&&!!v.iridescenceThicknessMap,Le=oe&&!!v.sheenColorMap,Te=oe&&!!v.sheenRoughnessMap,ge=!!v.specularMap,we=!!v.specularColorMap,Ye=!!v.specularIntensityMap,Qe=se&&!!v.transmissionMap,qe=se&&!!v.thicknessMap,it=!!v.gradientMap,R=!!v.alphaMap,de=v.alphaTest>0,he=!!v.alphaHash,Ee=!!v.extensions;let Re=oi;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Re=n.toneMapping);const Je={isWebGL2:f,shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:le,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:S,batching:Xe,instancing:xe,instancingColor:xe&&U.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Yn,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:_,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:re,aoMap:I,lightMap:W,bumpMap:B,normalMap:Q,displacementMap:m&&te,emissiveMap:x,normalMapObjectSpace:Q&&v.normalMapType===rg,normalMapTangentSpace:Q&&v.normalMapType===Kf,metalnessMap:g,roughnessMap:w,anisotropy:k,anisotropyMap:ue,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:Se,clearcoatRoughnessMap:ie,iridescence:G,iridescenceMap:Ge,iridescenceThicknessMap:De,sheen:oe,sheenColorMap:Le,sheenRoughnessMap:Te,specularMap:ge,specularColorMap:we,specularIntensityMap:Ye,transmission:se,transmissionMap:Qe,thicknessMap:qe,gradientMap:it,opaque:v.transparent===!1&&v.blending===dr&&v.alphaToCoverage===!1,alphaMap:R,alphaTest:de,alphaHash:he,combine:v.combine,mapUv:Fe&&p(v.map.channel),aoMapUv:I&&p(v.aoMap.channel),lightMapUv:W&&p(v.lightMap.channel),bumpMapUv:B&&p(v.bumpMap.channel),normalMapUv:Q&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:x&&p(v.emissiveMap.channel),metalnessMapUv:g&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:ue&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(v.sheenRoughnessMap.channel),specularMapUv:ge&&p(v.specularMap.channel),specularColorMapUv:we&&p(v.specularColorMap.channel),specularIntensityMapUv:Ye&&p(v.specularIntensityMap.channel),transmissionMapUv:Qe&&p(v.transmissionMap.channel),thicknessMapUv:qe&&p(v.thicknessMap.channel),alphaMapUv:R&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(Fe||R),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vn,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Ee&&v.extensions.derivatives===!0,extensionFragDepth:Ee&&v.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Je.vertexUv1s=u.has(1),Je.vertexUv2s=u.has(2),Je.vertexUv3s=u.has(3),u.clear(),Je}function b(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)A.push(N),A.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(M(A,v),y(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function M(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function y(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const A=E[v.type];let N;if(A){const ne=En[A];N=Dg.clone(ne.uniforms)}else N=v.uniforms;return N}function L(v,A){let N;for(let ne=0,U=c.length;ne<U;ne++){const K=c[ne];if(K.cacheKey===A){N=K,++N.usedTimes;break}}return N===void 0&&(N=new $0(n,A,v,s),c.push(N)),N}function C(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function q(v){l.remove(v)}function j(){l.dispose()}return{getParameters:h,getProgramCacheKey:b,getUniforms:D,acquireProgram:L,releaseProgram:C,releaseShaderCache:q,programs:c,dispose:j}}function J0(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Q0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,S,E,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:S,renderOrder:f.renderOrder,z:E,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=S,h.renderOrder=f.renderOrder,h.z=E,h.group=p),e++,h}function o(f,d,m,S,E,p){const h=a(f,d,m,S,E,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,S,E,p){const h=a(f,d,m,S,E,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||Q0),i.length>1&&i.sort(d||_u),r.length>1&&r.sort(d||_u)}function c(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function eS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new vu,n.set(i,[a])):r>=s.length?(a=new vu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new nt};break;case"SpotLight":t={position:new H,direction:new H,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iS=0;function rS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sS(n,e){const t=new tS,i=nS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new H);const s=new H,a=new At,o=new At;function l(c,f){let d=0,m=0,S=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,p=0,h=0,b=0,M=0,y=0,D=0,L=0,C=0,q=0,j=0;c.sort(rS);const v=f===!0?Math.PI:1;for(let N=0,ne=c.length;N<ne;N++){const U=c[N],K=U.color,z=U.intensity,ee=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=K.r*z*v,m+=K.g*z*v,S+=K.b*z*v;else if(U.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(U.sh.coefficients[re],z);j++}else if(U.isDirectionalLight){const re=t.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const ae=U.shadow,ce=i.get(U);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,r.directionalShadow[E]=ce,r.directionalShadowMap[E]=$,r.directionalShadowMatrix[E]=U.shadow.matrix,y++}r.directional[E]=re,E++}else if(U.isSpotLight){const re=t.get(U);re.position.setFromMatrixPosition(U.matrixWorld),re.color.copy(K).multiplyScalar(z*v),re.distance=ee,re.coneCos=Math.cos(U.angle),re.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),re.decay=U.decay,r.spot[h]=re;const ae=U.shadow;if(U.map&&(r.spotLightMap[C]=U.map,C++,ae.updateMatrices(U),U.castShadow&&q++),r.spotLightMatrix[h]=ae.matrix,U.castShadow){const ce=i.get(U);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,r.spotShadow[h]=ce,r.spotShadowMap[h]=$,L++}h++}else if(U.isRectAreaLight){const re=t.get(U);re.color.copy(K).multiplyScalar(z),re.halfWidth.set(U.width*.5,0,0),re.halfHeight.set(0,U.height*.5,0),r.rectArea[b]=re,b++}else if(U.isPointLight){const re=t.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity*v),re.distance=U.distance,re.decay=U.decay,U.castShadow){const ae=U.shadow,ce=i.get(U);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,r.pointShadow[p]=ce,r.pointShadowMap[p]=$,r.pointShadowMatrix[p]=U.shadow.matrix,D++}r.point[p]=re,p++}else if(U.isHemisphereLight){const re=t.get(U);re.skyColor.copy(U.color).multiplyScalar(z*v),re.groundColor.copy(U.groundColor).multiplyScalar(z*v),r.hemi[M]=re,M++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=S;const A=r.hash;(A.directionalLength!==E||A.pointLength!==p||A.spotLength!==h||A.rectAreaLength!==b||A.hemiLength!==M||A.numDirectionalShadows!==y||A.numPointShadows!==D||A.numSpotShadows!==L||A.numSpotMaps!==C||A.numLightProbes!==j)&&(r.directional.length=E,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=L+C-q,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=j,A.directionalLength=E,A.pointLength=p,A.spotLength=h,A.rectAreaLength=b,A.hemiLength=M,A.numDirectionalShadows=y,A.numPointShadows=D,A.numSpotShadows=L,A.numSpotMaps=C,A.numLightProbes=j,r.version=iS++)}function u(c,f){let d=0,m=0,S=0,E=0,p=0;const h=f.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){const y=c[b];if(y.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),d++}else if(y.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(y.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),S++}else if(y.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(y.matrixWorld),D.position.applyMatrix4(h),o.identity(),a.copy(y.matrixWorld),a.premultiply(h),o.extractRotation(a),D.halfWidth.set(y.width*.5,0,0),D.halfHeight.set(0,y.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),E++}else if(y.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(y.matrixWorld),D.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(y.matrixWorld),D.direction.transformDirection(h),p++}}}return{setup:l,setupView:u,state:r}}function xu(n,e){const t=new sS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function oS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new xu(n,e),t.set(s,[l])):a>=o.length?(l=new xu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class aS extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fS(n,e,t){let i=new ud;const r=new $e,s=new $e,a=new Tt,o=new aS({depthPacking:ig}),l=new lS,u={},c=t.maxTextureSize,f={[ui]:kt,[kt]:ui,[Vn]:Vn},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:cS,fragmentShader:uS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const S=new hi;S.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new hn(S,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zf;let h=this.type;this.render=function(L,C,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const j=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const ne=h!==On&&this.type===On,U=h===On&&this.type!==On;for(let K=0,z=L.length;K<z;K++){const ee=L[K],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const re=$.getFrameExtents();if(r.multiply(re),s.copy($.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,$.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,$.mapSize.y=s.y)),$.map===null||ne===!0||U===!0){const ce=this.type!==On?{minFilter:Nt,magFilter:Nt}:{};$.map!==null&&$.map.dispose(),$.map=new Bi(r.x,r.y,ce),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ae=$.getViewportCount();for(let ce=0;ce<ae;ce++){const fe=$.getViewport(ce);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),N.viewport(a),$.updateMatrices(ee,ce),i=$.getFrustum(),y(C,q,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===On&&b($,q),$.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(j,v,A)};function b(L,C){const q=e.update(E);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Bi(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,q,d,E,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,q,m,E,null)}function M(L,C,q,j){let v=null;const A=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)v=A;else if(v=q.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const N=v.uuid,ne=C.uuid;let U=u[N];U===void 0&&(U={},u[N]=U);let K=U[ne];K===void 0&&(K=v.clone(),U[ne]=K,C.addEventListener("dispose",D)),v=K}if(v.visible=C.visible,v.wireframe=C.wireframe,j===On?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,q.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=n.properties.get(v);N.light=q}return v}function y(L,C,q,j,v){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===On)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const ne=e.update(L),U=L.material;if(Array.isArray(U)){const K=ne.groups;for(let z=0,ee=K.length;z<ee;z++){const $=K[z],re=U[$.materialIndex];if(re&&re.visible){const ae=M(L,re,j,v);L.onBeforeShadow(n,L,C,q,ne,ae,$),n.renderBufferDirect(q,null,ne,ae,L,$),L.onAfterShadow(n,L,C,q,ne,ae,$)}}}else if(U.visible){const K=M(L,U,j,v);L.onBeforeShadow(n,L,C,q,ne,K,null),n.renderBufferDirect(q,null,ne,K,L,null),L.onAfterShadow(n,L,C,q,ne,K,null)}}const N=L.children;for(let ne=0,U=N.length;ne<U;ne++)y(N[ne],C,q,j,v)}function D(L){L.target.removeEventListener("dispose",D);for(const q in u){const j=u[q],v=L.target.uuid;v in j&&(j[v].dispose(),delete j[v])}}}function dS(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const de=new Tt;let he=null;const Ee=new Tt(0,0,0,0);return{setMask:function(Re){he!==Re&&!R&&(n.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){R=Re},setClear:function(Re,Je,ot,Et,Zt){Zt===!0&&(Re*=Et,Je*=Et,ot*=Et),de.set(Re,Je,ot,Et),Ee.equals(de)===!1&&(n.clearColor(Re,Je,ot,Et),Ee.copy(de))},reset:function(){R=!1,he=null,Ee.set(-1,0,0,0)}}}function s(){let R=!1,de=null,he=null,Ee=null;return{setTest:function(Re){Re?xe(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(Re){de!==Re&&!R&&(n.depthMask(Re),de=Re)},setFunc:function(Re){if(he!==Re){switch(Re){case Um:n.depthFunc(n.NEVER);break;case Im:n.depthFunc(n.ALWAYS);break;case Nm:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Fm:n.depthFunc(n.EQUAL);break;case Om:n.depthFunc(n.GEQUAL);break;case Bm:n.depthFunc(n.GREATER);break;case zm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Re}},setLocked:function(Re){R=Re},setClear:function(Re){Ee!==Re&&(n.clearDepth(Re),Ee=Re)},reset:function(){R=!1,de=null,he=null,Ee=null}}}function a(){let R=!1,de=null,he=null,Ee=null,Re=null,Je=null,ot=null,Et=null,Zt=null;return{setTest:function(at){R||(at?xe(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(at){de!==at&&!R&&(n.stencilMask(at),de=at)},setFunc:function(at,Dt,_n){(he!==at||Ee!==Dt||Re!==_n)&&(n.stencilFunc(at,Dt,_n),he=at,Ee=Dt,Re=_n)},setOp:function(at,Dt,_n){(Je!==at||ot!==Dt||Et!==_n)&&(n.stencilOp(at,Dt,_n),Je=at,ot=Dt,Et=_n)},setLocked:function(at){R=at},setClear:function(at){Zt!==at&&(n.clearStencil(at),Zt=at)},reset:function(){R=!1,de=null,he=null,Ee=null,Re=null,Je=null,ot=null,Et=null,Zt=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let d={},m={},S=new WeakMap,E=[],p=null,h=!1,b=null,M=null,y=null,D=null,L=null,C=null,q=null,j=new nt(0,0,0),v=0,A=!1,N=null,ne=null,U=null,K=null,z=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ae)[1]),$=re>=1):ae.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),$=re>=2);let ce=null,fe={};const Ie=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),le=new Tt().fromArray(Ie),_e=new Tt().fromArray(Z);function be(R,de,he,Ee){const Re=new Uint8Array(4),Je=n.createTexture();n.bindTexture(R,Je),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<he;ot++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(de+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Je}const Ae={};Ae[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(n.DEPTH_TEST),l.setFunc(Ks),te(!1),x(Jl),xe(n.CULL_FACE),B(si);function xe(R){d[R]!==!0&&(n.enable(R),d[R]=!0)}function Xe(R){d[R]!==!1&&(n.disable(R),d[R]=!1)}function Fe(R,de){return m[R]!==de?(n.bindFramebuffer(R,de),m[R]=de,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=de),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function _(R,de){let he=E,Ee=!1;if(R)if(he=S.get(de),he===void 0&&(he=[],S.set(de,he)),R.isWebGLMultipleRenderTargets){const Re=R.texture;if(he.length!==Re.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,ot=Re.length;Je<ot;Je++)he[Je]=n.COLOR_ATTACHMENT0+Je;he.length=Re.length,Ee=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Ee=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function P(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const I={[Ci]:n.FUNC_ADD,[vm]:n.FUNC_SUBTRACT,[xm]:n.FUNC_REVERSE_SUBTRACT};if(i)I[nc]=n.MIN,I[ic]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(I[nc]=R.MIN_EXT,I[ic]=R.MAX_EXT)}const W={[Sm]:n.ZERO,[Mm]:n.ONE,[Em]:n.SRC_COLOR,[Pa]:n.SRC_ALPHA,[Rm]:n.SRC_ALPHA_SATURATE,[Am]:n.DST_COLOR,[bm]:n.DST_ALPHA,[ym]:n.ONE_MINUS_SRC_COLOR,[Da]:n.ONE_MINUS_SRC_ALPHA,[wm]:n.ONE_MINUS_DST_COLOR,[Tm]:n.ONE_MINUS_DST_ALPHA,[Cm]:n.CONSTANT_COLOR,[Lm]:n.ONE_MINUS_CONSTANT_COLOR,[Pm]:n.CONSTANT_ALPHA,[Dm]:n.ONE_MINUS_CONSTANT_ALPHA};function B(R,de,he,Ee,Re,Je,ot,Et,Zt,at){if(R===si){h===!0&&(Xe(n.BLEND),h=!1);return}if(h===!1&&(xe(n.BLEND),h=!0),R!==_m){if(R!==b||at!==A){if((M!==Ci||L!==Ci)&&(n.blendEquation(n.FUNC_ADD),M=Ci,L=Ci),at)switch(R){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFunc(n.ONE,n.ONE);break;case ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,D=null,C=null,q=null,j.set(0,0,0),v=0,b=R,A=at}return}Re=Re||de,Je=Je||he,ot=ot||Ee,(de!==M||Re!==L)&&(n.blendEquationSeparate(I[de],I[Re]),M=de,L=Re),(he!==y||Ee!==D||Je!==C||ot!==q)&&(n.blendFuncSeparate(W[he],W[Ee],W[Je],W[ot]),y=he,D=Ee,C=Je,q=ot),(Et.equals(j)===!1||Zt!==v)&&(n.blendColor(Et.r,Et.g,Et.b,Zt),j.copy(Et),v=Zt),b=R,A=!1}function Q(R,de){R.side===Vn?Xe(n.CULL_FACE):xe(n.CULL_FACE);let he=R.side===kt;de&&(he=!he),te(he),R.blending===dr&&R.transparent===!1?B(si):B(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ee=R.stencilWrite;u.setTest(Ee),Ee&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),w(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(R){N!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),N=R)}function x(R){R!==pm?(xe(n.CULL_FACE),R!==ne&&(R===Jl?n.cullFace(n.BACK):R===mm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),ne=R}function g(R){R!==U&&($&&n.lineWidth(R),U=R)}function w(R,de,he){R?(xe(n.POLYGON_OFFSET_FILL),(K!==de||z!==he)&&(n.polygonOffset(de,he),K=de,z=he)):Xe(n.POLYGON_OFFSET_FILL)}function k(R){R?xe(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function F(R){R===void 0&&(R=n.TEXTURE0+ee-1),ce!==R&&(n.activeTexture(R),ce=R)}function G(R,de,he){he===void 0&&(ce===null?he=n.TEXTURE0+ee-1:he=ce);let Ee=fe[he];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[he]=Ee),(Ee.type!==R||Ee.texture!==de)&&(ce!==he&&(n.activeTexture(he),ce=he),n.bindTexture(R,de||Ae[R]),Ee.type=R,Ee.texture=de)}function oe(){const R=fe[ce];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(R){le.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function Ye(R){_e.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function Qe(R,de){let he=f.get(de);he===void 0&&(he=new WeakMap,f.set(de,he));let Ee=he.get(R);Ee===void 0&&(Ee=n.getUniformBlockIndex(de,R.name),he.set(R,Ee))}function qe(R,de){const Ee=f.get(de).get(R);c.get(de)!==Ee&&(n.uniformBlockBinding(de,Ee,R.__bindingPointIndex),c.set(de,Ee))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ce=null,fe={},m={},S=new WeakMap,E=[],p=null,h=!1,b=null,M=null,y=null,D=null,L=null,C=null,q=null,j=new nt(0,0,0),v=0,A=!1,N=null,ne=null,U=null,K=null,z=null,le.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:xe,disable:Xe,bindFramebuffer:Fe,drawBuffers:_,useProgram:P,setBlending:B,setMaterial:Q,setFlipSided:te,setCullFace:x,setLineWidth:g,setPolygonOffset:w,setScissorTest:k,activeTexture:F,bindTexture:G,unbindTexture:oe,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:Te,texImage3D:ge,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:De,texStorage3D:Le,texSubImage2D:me,texSubImage3D:Se,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ge,scissor:we,viewport:Ye,reset:it}}function hS(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,g){return m?new OffscreenCanvas(x,g):to("canvas")}function E(x,g,w,k){let F=1;if((x.width>k||x.height>k)&&(F=k/Math.max(x.width,x.height)),F<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const G=g?za:Math.floor,oe=G(F*x.width),se=G(F*x.height);f===void 0&&(f=S(oe,se));const ue=w?S(oe,se):f;return ue.width=oe,ue.height=se,ue.getContext("2d").drawImage(x,0,0,oe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+oe+"x"+se+")."),ue}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return Uc(x.width)&&Uc(x.height)}function h(x){return o?!1:x.wrapS!==fn||x.wrapT!==fn||x.minFilter!==Nt&&x.minFilter!==Gt}function b(x,g){return x.generateMipmaps&&g&&x.minFilter!==Nt&&x.minFilter!==Gt}function M(x){n.generateMipmap(x)}function y(x,g,w,k,F=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=g;if(g===n.RED&&(w===n.FLOAT&&(G=n.R32F),w===n.HALF_FLOAT&&(G=n.R16F),w===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.R8UI),w===n.UNSIGNED_SHORT&&(G=n.R16UI),w===n.UNSIGNED_INT&&(G=n.R32UI),w===n.BYTE&&(G=n.R8I),w===n.SHORT&&(G=n.R16I),w===n.INT&&(G=n.R32I)),g===n.RG&&(w===n.FLOAT&&(G=n.RG32F),w===n.HALF_FLOAT&&(G=n.RG16F),w===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RGBA){const oe=F?Zs:et.getTransfer(k);w===n.FLOAT&&(G=n.RGBA32F),w===n.HALF_FLOAT&&(G=n.RGBA16F),w===n.UNSIGNED_BYTE&&(G=oe===ct?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function D(x,g,w){return b(x,w)===!0||x.isFramebufferTexture&&x.minFilter!==Nt&&x.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function L(x){return x===Nt||x===rc||x===wr?n.NEAREST:n.LINEAR}function C(x){const g=x.target;g.removeEventListener("dispose",C),j(g),g.isVideoTexture&&c.delete(g)}function q(x){const g=x.target;g.removeEventListener("dispose",q),A(g)}function j(x){const g=i.get(x);if(g.__webglInit===void 0)return;const w=x.source,k=d.get(w);if(k){const F=k[g.__cacheKey];F.usedTimes--,F.usedTimes===0&&v(x),Object.keys(k).length===0&&d.delete(w)}i.remove(x)}function v(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const w=x.source,k=d.get(w);delete k[g.__cacheKey],a.memory.textures--}function A(x){const g=x.texture,w=i.get(x),k=i.get(g);if(k.__webglTexture!==void 0&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(w.__webglFramebuffer[F]))for(let G=0;G<w.__webglFramebuffer[F].length;G++)n.deleteFramebuffer(w.__webglFramebuffer[F][G]);else n.deleteFramebuffer(w.__webglFramebuffer[F]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[F])}else{if(Array.isArray(w.__webglFramebuffer))for(let F=0;F<w.__webglFramebuffer.length;F++)n.deleteFramebuffer(w.__webglFramebuffer[F]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let F=0;F<w.__webglColorRenderbuffer.length;F++)w.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[F]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let F=0,G=g.length;F<G;F++){const oe=i.get(g[F]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(g[F])}i.remove(g),i.remove(x)}let N=0;function ne(){N=0}function U(){const x=N;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),N+=1,x}function K(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function z(x,g){const w=i.get(x);if(x.isVideoTexture&&Q(x),x.isRenderTargetTexture===!1&&x.version>0&&w.__version!==x.version){const k=x.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(w,x,g);return}}t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+g)}function ee(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){le(w,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+g)}function $(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){le(w,x,g);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+g)}function re(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){_e(w,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+g)}const ae={[Na]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},ce={[Nt]:n.NEAREST,[rc]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},fe={[sg]:n.NEVER,[fg]:n.ALWAYS,[og]:n.LESS,[Zf]:n.LEQUAL,[ag]:n.EQUAL,[ug]:n.GEQUAL,[lg]:n.GREATER,[cg]:n.NOTEQUAL};function Ie(x,g,w){if(g.type===kn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===Vo||g.magFilter===wr||g.magFilter===Pi||g.minFilter===Gt||g.minFilter===Vo||g.minFilter===wr||g.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),w?(n.texParameteri(x,n.TEXTURE_WRAP_S,ae[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ae[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ae[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ce[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ce[g.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==fn||g.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,L(g.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,L(g.minFilter)),g.minFilter!==Nt&&g.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Nt||g.minFilter!==wr&&g.minFilter!==Pi||g.type===kn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Kr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Z(x,g){let w=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",C));const k=g.source;let F=d.get(k);F===void 0&&(F={},d.set(k,F));const G=K(g);if(G!==x.__cacheKey){F[G]===void 0&&(F[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,w=!0),F[G].usedTimes++;const oe=F[x.__cacheKey];oe!==void 0&&(F[x.__cacheKey].usedTimes--,oe.usedTimes===0&&v(g)),x.__cacheKey=G,x.__webglTexture=F[G].texture}return w}function le(x,g,w){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const F=Z(x,g),G=g.source;t.bindTexture(k,x.__webglTexture,n.TEXTURE0+w);const oe=i.get(G);if(G.version!==oe.__version||F===!0){t.activeTexture(n.TEXTURE0+w);const se=et.getPrimaries(et.workingColorSpace),ue=g.colorSpace===rn?null:et.getPrimaries(g.colorSpace),me=g.colorSpace===rn||se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Se=h(g)&&p(g.image)===!1;let ie=E(g.image,Se,!1,r.maxTextureSize);ie=te(g,ie);const Ge=p(ie)||o,De=s.convert(g.format,g.colorSpace);let Le=s.convert(g.type),Te=y(g.internalFormat,De,Le,g.colorSpace,g.isVideoTexture);Ie(k,g,Ge);let ge;const we=g.mipmaps,Ye=o&&g.isVideoTexture!==!0&&Te!==Yf,Qe=oe.__version===void 0||F===!0,qe=G.dataReady,it=D(g,ie,Ge);if(g.isDepthTexture)Te=n.DEPTH_COMPONENT,o?g.type===kn?Te=n.DEPTH_COMPONENT32F:g.type===ri?Te=n.DEPTH_COMPONENT24:g.type===Ni?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:g.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Fi&&Te===n.DEPTH_COMPONENT&&g.type!==nl&&g.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ri,Le=s.convert(g.type)),g.format===vr&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,g.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ni,Le=s.convert(g.type))),Qe&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,De,Le,null));else if(g.isDataTexture)if(we.length>0&&Ge){Ye&&Qe&&t.texStorage2D(n.TEXTURE_2D,it,Te,we[0].width,we[0].height);for(let R=0,de=we.length;R<de;R++)ge=we[R],Ye?qe&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,ge.width,ge.height,De,Le,ge.data):t.texImage2D(n.TEXTURE_2D,R,Te,ge.width,ge.height,0,De,Le,ge.data);g.generateMipmaps=!1}else Ye?(Qe&&t.texStorage2D(n.TEXTURE_2D,it,Te,ie.width,ie.height),qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,De,Le,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,De,Le,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ye&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,Te,we[0].width,we[0].height,ie.depth);for(let R=0,de=we.length;R<de;R++)ge=we[R],g.format!==dn?De!==null?Ye?qe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,ge.width,ge.height,ie.depth,De,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,Te,ge.width,ge.height,ie.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,ge.width,ge.height,ie.depth,De,Le,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,Te,ge.width,ge.height,ie.depth,0,De,Le,ge.data)}else{Ye&&Qe&&t.texStorage2D(n.TEXTURE_2D,it,Te,we[0].width,we[0].height);for(let R=0,de=we.length;R<de;R++)ge=we[R],g.format!==dn?De!==null?Ye?qe&&t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,R,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?qe&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,ge.width,ge.height,De,Le,ge.data):t.texImage2D(n.TEXTURE_2D,R,Te,ge.width,ge.height,0,De,Le,ge.data)}else if(g.isDataArrayTexture)Ye?(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,it,Te,ie.width,ie.height,ie.depth),qe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,De,Le,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,De,Le,ie.data);else if(g.isData3DTexture)Ye?(Qe&&t.texStorage3D(n.TEXTURE_3D,it,Te,ie.width,ie.height,ie.depth),qe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,De,Le,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,De,Le,ie.data);else if(g.isFramebufferTexture){if(Qe)if(Ye)t.texStorage2D(n.TEXTURE_2D,it,Te,ie.width,ie.height);else{let R=ie.width,de=ie.height;for(let he=0;he<it;he++)t.texImage2D(n.TEXTURE_2D,he,Te,R,de,0,De,Le,null),R>>=1,de>>=1}}else if(we.length>0&&Ge){Ye&&Qe&&t.texStorage2D(n.TEXTURE_2D,it,Te,we[0].width,we[0].height);for(let R=0,de=we.length;R<de;R++)ge=we[R],Ye?qe&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,De,Le,ge):t.texImage2D(n.TEXTURE_2D,R,Te,De,Le,ge);g.generateMipmaps=!1}else Ye?(Qe&&t.texStorage2D(n.TEXTURE_2D,it,Te,ie.width,ie.height),qe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Le,ie)):t.texImage2D(n.TEXTURE_2D,0,Te,De,Le,ie);b(g,Ge)&&M(k),oe.__version=G.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function _e(x,g,w){if(g.image.length!==6)return;const k=Z(x,g),F=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+w);const G=i.get(F);if(F.version!==G.__version||k===!0){t.activeTexture(n.TEXTURE0+w);const oe=et.getPrimaries(et.workingColorSpace),se=g.colorSpace===rn?null:et.getPrimaries(g.colorSpace),ue=g.colorSpace===rn||oe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const me=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let R=0;R<6;R++)!me&&!Se?ie[R]=E(g.image[R],!1,!0,r.maxCubemapSize):ie[R]=Se?g.image[R].image:g.image[R],ie[R]=te(g,ie[R]);const Ge=ie[0],De=p(Ge)||o,Le=s.convert(g.format,g.colorSpace),Te=s.convert(g.type),ge=y(g.internalFormat,Le,Te,g.colorSpace),we=o&&g.isVideoTexture!==!0,Ye=G.__version===void 0||k===!0,Qe=F.dataReady;let qe=D(g,Ge,De);Ie(n.TEXTURE_CUBE_MAP,g,De);let it;if(me){we&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ge,Ge.width,Ge.height);for(let R=0;R<6;R++){it=ie[R].mipmaps;for(let de=0;de<it.length;de++){const he=it[de];g.format!==dn?Le!==null?we?Qe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de,0,0,he.width,he.height,Le,Te,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de,ge,he.width,he.height,0,Le,Te,he.data)}}}else{it=g.mipmaps,we&&Ye&&(it.length>0&&qe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ge,ie[0].width,ie[0].height));for(let R=0;R<6;R++)if(Se){we?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ie[R].width,ie[R].height,Le,Te,ie[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,ge,ie[R].width,ie[R].height,0,Le,Te,ie[R].data);for(let de=0;de<it.length;de++){const Ee=it[de].image[R].image;we?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de+1,0,0,Ee.width,Ee.height,Le,Te,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de+1,ge,Ee.width,Ee.height,0,Le,Te,Ee.data)}}else{we?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Le,Te,ie[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,ge,Le,Te,ie[R]);for(let de=0;de<it.length;de++){const he=it[de];we?Qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de+1,0,0,Le,Te,he.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,de+1,ge,Le,Te,he.image[R])}}}b(g,De)&&M(n.TEXTURE_CUBE_MAP),G.__version=F.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function be(x,g,w,k,F,G){const oe=s.convert(w.format,w.colorSpace),se=s.convert(w.type),ue=y(w.internalFormat,oe,se,w.colorSpace);if(!i.get(g).__hasExternalTextures){const Se=Math.max(1,g.width>>G),ie=Math.max(1,g.height>>G);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?t.texImage3D(F,G,ue,Se,ie,g.depth,0,oe,se,null):t.texImage2D(F,G,ue,Se,ie,0,oe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),B(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,F,i.get(w).__webglTexture,0,W(g)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,F,i.get(w).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(x,g,w){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let k=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(w||B(g)){const F=g.depthTexture;F&&F.isDepthTexture&&(F.type===kn?k=n.DEPTH_COMPONENT32F:F.type===ri&&(k=n.DEPTH_COMPONENT24));const G=W(g);B(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,k,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,G,k,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const k=W(g);w&&B(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,n.DEPTH24_STENCIL8,g.width,g.height):B(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const k=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let F=0;F<k.length;F++){const G=k[F],oe=s.convert(G.format,G.colorSpace),se=s.convert(G.type),ue=y(G.internalFormat,oe,se,G.colorSpace),me=W(g);w&&B(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ue,g.width,g.height):B(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,ue,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ue,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z(g.depthTexture,0);const k=i.get(g.depthTexture).__webglTexture,F=W(g);if(g.depthTexture.format===Fi)B(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(g.depthTexture.format===vr)B(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Xe(x){const g=i.get(x),w=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");xe(g.__webglFramebuffer,x)}else if(w){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]=n.createRenderbuffer(),Ae(g.__webglDepthbuffer[k],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Ae(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(x,g,w){const k=i.get(x);g!==void 0&&be(k.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Xe(x)}function _(x){const g=x.texture,w=i.get(x),k=i.get(g);x.addEventListener("dispose",q),x.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++);const F=x.isWebGLCubeRenderTarget===!0,G=x.isWebGLMultipleRenderTargets===!0,oe=p(x)||o;if(F){w.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer[se]=[];for(let ue=0;ue<g.mipmaps.length;ue++)w.__webglFramebuffer[se][ue]=n.createFramebuffer()}else w.__webglFramebuffer[se]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)w.__webglFramebuffer[se]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(G)if(r.drawBuffers){const se=x.texture;for(let ue=0,me=se.length;ue<me;ue++){const Se=i.get(se[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&B(x)===!1){const se=G?g:[g];w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const me=se[ue];w.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[ue]);const Se=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),Ge=y(me.internalFormat,Se,ie,me.colorSpace,x.isXRRenderTarget===!0),De=W(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ge,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,w.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(w.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,g,oe);for(let se=0;se<6;se++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)be(w.__webglFramebuffer[se][ue],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else be(w.__webglFramebuffer[se],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(g,oe)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){const se=x.texture;for(let ue=0,me=se.length;ue<me;ue++){const Se=se[ue],ie=i.get(Se);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Ie(n.TEXTURE_2D,Se,oe),be(w.__webglFramebuffer,x,Se,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),b(Se,oe)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?se=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,k.__webglTexture),Ie(se,g,oe),o&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)be(w.__webglFramebuffer[ue],x,g,n.COLOR_ATTACHMENT0,se,ue);else be(w.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,se,0);b(g,oe)&&M(se),t.unbindTexture()}x.depthBuffer&&Xe(x)}function P(x){const g=p(x)||o,w=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let k=0,F=w.length;k<F;k++){const G=w[k];if(b(G,g)){const oe=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(G).__webglTexture;t.bindTexture(oe,se),M(oe),t.unbindTexture()}}}function I(x){if(o&&x.samples>0&&B(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],w=x.width,k=x.height;let F=n.COLOR_BUFFER_BIT;const G=[],oe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(x),ue=x.isWebGLMultipleRenderTargets===!0;if(ue)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let me=0;me<g.length;me++){G.push(n.COLOR_ATTACHMENT0+me),x.depthBuffer&&G.push(oe);const Se=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Se===!1&&(x.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[me]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[oe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[oe])),ue){const ie=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,w,k,0,0,w,k,F,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,se.__webglColorRenderbuffer[me]);const Se=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function W(x){return Math.min(r.maxSamples,x.samples)}function B(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Q(x){const g=a.render.frame;c.get(x)!==g&&(c.set(x,g),x.update())}function te(x,g){const w=x.colorSpace,k=x.format,F=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Oa||w!==Yn&&w!==rn&&(et.getTransfer(w)===ct?o===!1?e.has("EXT_sRGB")===!0&&k===dn?(x.format=Oa,x.minFilter=Gt,x.generateMipmaps=!1):g=Qf.sRGBToLinear(g):(k!==dn||F!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),g}this.allocateTextureUnit=U,this.resetTextureUnits=ne,this.setTexture2D=z,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=re,this.rebindTextures=Fe,this.setupRenderTarget=_,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=B}function pS(n,e,t){const i=t.isWebGL2;function r(s,a=rn){let o;const l=et.getTransfer(a);if(s===ai)return n.UNSIGNED_BYTE;if(s===kf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Wf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Ym)return n.BYTE;if(s===jm)return n.SHORT;if(s===nl)return n.UNSIGNED_SHORT;if(s===Vf)return n.INT;if(s===ri)return n.UNSIGNED_INT;if(s===kn)return n.FLOAT;if(s===Kr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Km)return n.ALPHA;if(s===dn)return n.RGBA;if(s===Zm)return n.LUMINANCE;if(s===Jm)return n.LUMINANCE_ALPHA;if(s===Fi)return n.DEPTH_COMPONENT;if(s===vr)return n.DEPTH_STENCIL;if(s===Oa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qm)return n.RED;if(s===Xf)return n.RED_INTEGER;if(s===eg)return n.RG;if(s===qf)return n.RG_INTEGER;if(s===$f)return n.RGBA_INTEGER;if(s===ko||s===Wo||s===Xo||s===qo)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sc||s===oc||s===ac||s===lc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cc||s===uc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===cc)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fc||s===dc||s===hc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Sc||s===Mc||s===Ec||s===yc||s===bc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===fc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_c)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ec)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$o||s===Tc||s===Ac)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===$o)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tg||s===wc||s===Rc||s===Cc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(s===wc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ni?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class mS extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),h=this._getHandJoint(u,E);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,S=.005;u.inputState.pinching&&d>m+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new fi({extensions:{fragDepth:!0},vertexShader:_S,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hn(new yo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class SS extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,m=null,S=null;const E=new xS,p=t.getContextAttributes();let h=null,b=null;const M=[],y=[],D=new $e;let L=null;const C=new nn;C.layers.enable(1),C.viewport=new Tt;const q=new nn;q.layers.enable(2),q.viewport=new Tt;const j=[C,q],v=new mS;v.layers.enable(1),v.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=M[Z];return le===void 0&&(le=new va,M[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=M[Z];return le===void 0&&(le=new va,M[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=M[Z];return le===void 0&&(le=new va,M[Z]=le),le.getHandSpace()};function ne(Z){const le=y.indexOf(Z.inputSource);if(le===-1)return;const _e=M[le];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,u||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let Z=0;Z<M.length;Z++){const le=y[Z];le!==null&&(y[Z]=null,M[Z].disconnect(le))}A=null,N=null,E.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Bi(m.framebufferWidth,m.framebufferHeight,{format:dn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,_e=null,be=null;p.depth&&(be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?vr:Fi,_e=p.stencil?Ni:ri);const Ae={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Bi(d.textureWidth,d.textureHeight,{format:dn,type:ai,depthTexture:new dd(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const xe=e.properties.get(b);xe.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(Z){for(let le=0;le<Z.removed.length;le++){const _e=Z.removed[le],be=y.indexOf(_e);be>=0&&(y[be]=null,M[be].disconnect(_e))}for(let le=0;le<Z.added.length;le++){const _e=Z.added[le];let be=y.indexOf(_e);if(be===-1){for(let xe=0;xe<M.length;xe++)if(xe>=y.length){y.push(_e),be=xe;break}else if(y[xe]===null){y[xe]=_e,be=xe;break}if(be===-1)break}const Ae=M[be];Ae&&Ae.connect(_e)}}const z=new H,ee=new H;function $(Z,le,_e){z.setFromMatrixPosition(le.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const be=z.distanceTo(ee),Ae=le.projectionMatrix.elements,xe=_e.projectionMatrix.elements,Xe=Ae[14]/(Ae[10]-1),Fe=Ae[14]/(Ae[10]+1),_=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],I=(Ae[8]-1)/Ae[0],W=(xe[8]+1)/xe[0],B=Xe*I,Q=Xe*W,te=be/(-I+W),x=te*-I;le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(x),Z.translateZ(te),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const g=Xe+te,w=Fe+te,k=B-x,F=Q+(be-x),G=_*Fe/w*g,oe=P*Fe/w*g;Z.projectionMatrix.makePerspective(k,F,G,oe,g,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function re(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;E.texture!==null&&(Z.near=E.depthNear,Z.far=E.depthFar),v.near=q.near=C.near=Z.near,v.far=q.far=C.far=Z.far,(A!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,N=v.far,C.near=A,C.far=N,q.near=A,q.far=N,C.updateProjectionMatrix(),q.updateProjectionMatrix(),Z.updateProjectionMatrix());const le=Z.parent,_e=v.cameras;re(v,le);for(let be=0;be<_e.length;be++)re(_e[be],le);_e.length===2?$(v,C,q):v.projectionMatrix.copy(C.projectionMatrix),ae(Z,v,le)};function ae(Z,le,_e){_e===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ba*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null};let ce=null;function fe(Z,le){if(c=le.getViewerPose(u||a),S=le,c!==null){const _e=c.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let be=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,be=!0);for(let xe=0;xe<_e.length;xe++){const Xe=_e[xe];let Fe=null;if(m!==null)Fe=m.getViewport(Xe);else{const P=f.getViewSubImage(d,Xe);Fe=P.viewport,xe===0&&(e.setRenderTargetTextures(b,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(b))}let _=j[xe];_===void 0&&(_=new nn,_.layers.enable(xe),_.viewport=new Tt,j[xe]=_),_.matrix.fromArray(Xe.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.projectionMatrix.fromArray(Xe.projectionMatrix),_.projectionMatrixInverse.copy(_.projectionMatrix).invert(),_.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),xe===0&&(v.matrix.copy(_.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),be===!0&&v.cameras.push(_)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const xe=f.getDepthInformation(_e[0]);xe&&xe.isValid&&xe.texture&&E.init(e,xe,r.renderState)}}for(let _e=0;_e<M.length;_e++){const be=y[_e],Ae=M[_e];be!==null&&Ae!==void 0&&Ae.update(be,le,u||a)}E.render(e,v),ce&&ce(Z,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),S=null}const Ie=new fd;Ie.setAnimationLoop(fe),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}}function MS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,ad(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,M,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),S(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),E(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,M):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===kt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===kt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===kt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function S(p,h){h.matcap&&(p.matcap.value=h.matcap)}function E(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ES(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,M){const y=M.program;i.uniformBlockBinding(b,y)}function u(b,M){let y=r[b.id];y===void 0&&(S(b),y=c(b),r[b.id]=y,b.addEventListener("dispose",p));const D=M.program;i.updateUBOMapping(b,D);const L=e.render.frame;s[b.id]!==L&&(d(b),s[b.id]=L)}function c(b){const M=f();b.__bindingPointIndex=M;const y=n.createBuffer(),D=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],y=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let L=0,C=y.length;L<C;L++){const q=Array.isArray(y[L])?y[L]:[y[L]];for(let j=0,v=q.length;j<v;j++){const A=q[j];if(m(A,L,j,D)===!0){const N=A.__offset,ne=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let K=0;K<ne.length;K++){const z=ne[K],ee=E(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+U,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,U),U+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,y,D){const L=b.value,C=M+"_"+y;if(D[C]===void 0)return typeof L=="number"||typeof L=="boolean"?D[C]=L:D[C]=L.clone(),!0;{const q=D[C];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return D[C]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function S(b){const M=b.uniforms;let y=0;const D=16;for(let C=0,q=M.length;C<q;C++){const j=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,A=j.length;v<A;v++){const N=j[v],ne=Array.isArray(N.value)?N.value:[N.value];for(let U=0,K=ne.length;U<K;U++){const z=ne[U],ee=E(z),$=y%D;$!==0&&D-$<ee.boundary&&(y+=D-$),N.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=ee.storage}}}const L=y%D;return L>0&&(y+=D-L),b.__size=y,b.__cache={},this}function E(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class vd{constructor(e={}){const{canvas:t=hg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),S=new Int32Array(4);let E=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const M=this;let y=!1,D=0,L=0,C=null,q=-1,j=null;const v=new Tt,A=new Tt;let N=null;const ne=new nt(0);let U=0,K=t.width,z=t.height,ee=1,$=null,re=null;const ae=new Tt(0,0,K,z),ce=new Tt(0,0,K,z);let fe=!1;const Ie=new ud;let Z=!1,le=!1,_e=null;const be=new At,Ae=new $e,xe=new H,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return C===null?ee:1}let _=i;function P(T,O){for(let X=0;X<T.length;X++){const Y=T[X],V=t.getContext(Y,O);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",de,!1),_===null){const O=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&O.shift(),_=P(O,T),_===null)throw P(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let I,W,B,Q,te,x,g,w,k,F,G,oe,se,ue,me,Se,ie,Ge,De,Le,Te,ge,we,Ye;function Qe(){I=new Cx(_),W=new Ex(_,I,e),I.init(W),ge=new pS(_,I,W),B=new dS(_,I,W),Q=new Dx(_),te=new J0,x=new hS(_,I,B,te,W,ge,Q),g=new bx(M),w=new Rx(M),k=new zg(_,W),we=new Sx(_,I,k,W),F=new Lx(_,k,Q,we),G=new Fx(_,F,k,Q),De=new Nx(_,W,x),Se=new yx(te),oe=new Z0(M,g,w,I,W,we,Se),se=new MS(M,te),ue=new eS,me=new oS(I,W),Ge=new xx(M,g,w,B,G,d,l),ie=new fS(M,G,W),Ye=new ES(_,Q,W,B),Le=new Mx(_,I,Q,W),Te=new Px(_,I,Q,W),Q.programs=oe.programs,M.capabilities=W,M.extensions=I,M.properties=te,M.renderLists=ue,M.shadowMap=ie,M.state=B,M.info=Q}Qe();const qe=new SS(M,_);this.xr=qe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=I.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=I.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(K,z,!1))},this.getSize=function(T){return T.set(K,z)},this.setSize=function(T,O,X=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,z=O,t.width=Math.floor(T*ee),t.height=Math.floor(O*ee),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(K*ee,z*ee).floor()},this.setDrawingBufferSize=function(T,O,X){K=T,z=O,ee=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,O,X,Y){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,O,X,Y),B.viewport(v.copy(ae).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,O,X,Y){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,O,X,Y),B.scissor(A.copy(ce).multiplyScalar(ee).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){B.setScissorTest(fe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,O=!0,X=!0){let Y=0;if(T){let V=!1;if(C!==null){const ve=C.texture.format;V=ve===$f||ve===qf||ve===Xf}if(V){const ve=C.texture.type,ye=ve===ai||ve===ri||ve===nl||ve===Ni||ve===kf||ve===Wf,Ue=Ge.getClearColor(),Ne=Ge.getClearAlpha(),Ve=Ue.r,Oe=Ue.g,ze=Ue.b;ye?(m[0]=Ve,m[1]=Oe,m[2]=ze,m[3]=Ne,_.clearBufferuiv(_.COLOR,0,m)):(S[0]=Ve,S[1]=Oe,S[2]=ze,S[3]=Ne,_.clearBufferiv(_.COLOR,0,S))}else Y|=_.COLOR_BUFFER_BIT}O&&(Y|=_.DEPTH_BUFFER_BIT),X&&(Y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ue.dispose(),me.dispose(),te.dispose(),g.dispose(),w.dispose(),G.dispose(),we.dispose(),Ye.dispose(),oe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Zt),qe.removeEventListener("sessionend",at),_e&&(_e.dispose(),_e=null),Dt.stop()};function it(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Q.autoReset,O=ie.enabled,X=ie.autoUpdate,Y=ie.needsUpdate,V=ie.type;Qe(),Q.autoReset=T,ie.enabled=O,ie.autoUpdate=X,ie.needsUpdate=Y,ie.type=V}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const O=T.target;O.removeEventListener("dispose",he),Ee(O)}function Ee(T){Re(T),te.remove(T)}function Re(T){const O=te.get(T).programs;O!==void 0&&(O.forEach(function(X){oe.releaseProgram(X)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,Y,V,ve){O===null&&(O=Xe);const ye=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Sd(T,O,X,Y,V);B.setMaterial(Y,ye);let Ne=X.index,Ve=1;if(Y.wireframe===!0){if(Ne=F.getWireframeAttribute(X),Ne===void 0)return;Ve=2}const Oe=X.drawRange,ze=X.attributes.position;let pt=Oe.start*Ve,Xt=(Oe.start+Oe.count)*Ve;ve!==null&&(pt=Math.max(pt,ve.start*Ve),Xt=Math.min(Xt,(ve.start+ve.count)*Ve)),Ne!==null?(pt=Math.max(pt,0),Xt=Math.min(Xt,Ne.count)):ze!=null&&(pt=Math.max(pt,0),Xt=Math.min(Xt,ze.count));const vt=Xt-pt;if(vt<0||vt===1/0)return;we.setup(V,Y,Ue,X,Ne);let Cn,ft=Le;if(Ne!==null&&(Cn=k.get(Ne),ft=Te,ft.setIndex(Cn)),V.isMesh)Y.wireframe===!0?(B.setLineWidth(Y.wireframeLinewidth*Fe()),ft.setMode(_.LINES)):ft.setMode(_.TRIANGLES);else if(V.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),B.setLineWidth(ke*Fe()),V.isLineSegments?ft.setMode(_.LINES):V.isLineLoop?ft.setMode(_.LINE_LOOP):ft.setMode(_.LINE_STRIP)}else V.isPoints?ft.setMode(_.POINTS):V.isSprite&&ft.setMode(_.TRIANGLES);if(V.isBatchedMesh)ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ft.renderInstances(pt,vt,V.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,To=Math.min(X.instanceCount,ke);ft.renderInstances(pt,vt,To)}else ft.render(pt,vt)};function Je(T,O,X){T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,as(T,O,X),T.side=ui,T.needsUpdate=!0,as(T,O,X),T.side=Vn):as(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),p=me.get(X),p.init(),b.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(M._useLegacyLights);const Y=new Set;return T.traverse(function(V){const ve=V.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const Ue=ve[ye];Je(Ue,X,V),Y.add(Ue)}else Je(ve,X,V),Y.add(ve)}),b.pop(),p=null,Y},this.compileAsync=function(T,O,X=null){const Y=this.compile(T,O,X);return new Promise(V=>{function ve(){if(Y.forEach(function(ye){te.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){V(T);return}setTimeout(ve,10)}I.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ot=null;function Et(T){ot&&ot(T)}function Zt(){Dt.stop()}function at(){Dt.start()}const Dt=new fd;Dt.setAnimationLoop(Et),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(T){ot=T,qe.setAnimationLoop(T),T===null?Dt.stop():Dt.start()},qe.addEventListener("sessionstart",Zt),qe.addEventListener("sessionend",at),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(O),O=qe.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,O,C),p=me.get(T,b.length),p.init(),b.push(p),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(be),le=this.localClippingEnabled,Z=Se.init(this.clippingPlanes,le),E=ue.get(T,h.length),E.init(),h.push(E),_n(T,O,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort($,re),this.info.render.frame++,Z===!0&&Se.beginShadows();const X=p.state.shadowsArray;if(ie.render(X,T,O),Z===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1)&&Ge.render(E,T),p.setupLights(M._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let V=0,ve=Y.length;V<ve;V++){const ye=Y[V];al(E,T,ye,ye.viewport)}}else al(E,T,O);C!==null&&(x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(M,T,O),we.resetDefaultState(),q=-1,j=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?E=h[h.length-1]:E=null};function _n(T,O,X,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){Y&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);const ye=G.update(T),Ue=T.material;Ue.visible&&E.push(T,ye,Ue,X,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const ye=G.update(T),Ue=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),xe.copy(ye.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(Ue)){const Ne=ye.groups;for(let Ve=0,Oe=Ne.length;Ve<Oe;Ve++){const ze=Ne[Ve],pt=Ue[ze.materialIndex];pt&&pt.visible&&E.push(T,ye,pt,X,xe.z,ze)}}else Ue.visible&&E.push(T,ye,Ue,X,xe.z,null)}}const ve=T.children;for(let ye=0,Ue=ve.length;ye<Ue;ye++)_n(ve[ye],O,X,Y)}function al(T,O,X,Y){const V=T.opaque,ve=T.transmissive,ye=T.transparent;p.setupLightsView(X),Z===!0&&Se.setGlobalState(M.clippingPlanes,X),ve.length>0&&xd(V,ve,O,X),Y&&B.viewport(v.copy(Y)),V.length>0&&os(V,O,X),ve.length>0&&os(ve,O,X),ye.length>0&&os(ye,O,X),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function xd(T,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ve=W.isWebGL2;_e===null&&(_e=new Bi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?Kr:ai,minFilter:Pi,samples:ve?4:0})),M.getDrawingBufferSize(Ae),ve?_e.setSize(Ae.x,Ae.y):_e.setSize(za(Ae.x),za(Ae.y));const ye=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(ne),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear();const Ue=M.toneMapping;M.toneMapping=oi,os(T,X,Y),x.updateMultisampleRenderTarget(_e),x.updateRenderTargetMipmap(_e);let Ne=!1;for(let Ve=0,Oe=O.length;Ve<Oe;Ve++){const ze=O[Ve],pt=ze.object,Xt=ze.geometry,vt=ze.material,Cn=ze.group;if(vt.side===Vn&&pt.layers.test(Y.layers)){const ft=vt.side;vt.side=kt,vt.needsUpdate=!0,ll(pt,X,Y,Xt,vt,Cn),vt.side=ft,vt.needsUpdate=!0,Ne=!0}}Ne===!0&&(x.updateMultisampleRenderTarget(_e),x.updateRenderTargetMipmap(_e)),M.setRenderTarget(ye),M.setClearColor(ne,U),M.toneMapping=Ue}function os(T,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ve=T.length;V<ve;V++){const ye=T[V],Ue=ye.object,Ne=ye.geometry,Ve=Y===null?ye.material:Y,Oe=ye.group;Ue.layers.test(X.layers)&&ll(Ue,O,X,Ne,Ve,Oe)}}function ll(T,O,X,Y,V,ve){T.onBeforeRender(M,O,X,Y,V,ve),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(M,O,X,Y,T,ve),V.transparent===!0&&V.side===Vn&&V.forceSinglePass===!1?(V.side=kt,V.needsUpdate=!0,M.renderBufferDirect(X,O,Y,V,T,ve),V.side=ui,V.needsUpdate=!0,M.renderBufferDirect(X,O,Y,V,T,ve),V.side=Vn):M.renderBufferDirect(X,O,Y,V,T,ve),T.onAfterRender(M,O,X,Y,V,ve)}function as(T,O,X){O.isScene!==!0&&(O=Xe);const Y=te.get(T),V=p.state.lights,ve=p.state.shadowsArray,ye=V.state.version,Ue=oe.getParameters(T,V.state,ve,O,X),Ne=oe.getProgramCacheKey(Ue);let Ve=Y.programs;Y.environment=T.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(T.isMeshStandardMaterial?w:g).get(T.envMap||Y.environment),Ve===void 0&&(T.addEventListener("dispose",he),Ve=new Map,Y.programs=Ve);let Oe=Ve.get(Ne);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===ye)return ul(T,Ue),Oe}else Ue.uniforms=oe.getUniforms(T),T.onBuild(X,Ue,M),T.onBeforeCompile(Ue,M),Oe=oe.acquireProgram(Ue,Ne),Ve.set(Ne,Oe),Y.uniforms=Ue.uniforms;const ze=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=Se.uniform),ul(T,Ue),Y.needsLights=Ed(T),Y.lightsStateVersion=ye,Y.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function cl(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Os.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function ul(T,O){const X=te.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Sd(T,O,X,Y,V){O.isScene!==!0&&(O=Xe),x.resetTextureUnits();const ve=O.fog,ye=Y.isMeshStandardMaterial?O.environment:null,Ue=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yn,Ne=(Y.isMeshStandardMaterial?w:g).get(Y.envMap||ye),Ve=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,Xt=!!X.morphAttributes.color;let vt=oi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(vt=M.toneMapping);const Cn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=Cn!==void 0?Cn.length:0,ke=te.get(Y),To=p.state.lights;if(Z===!0&&(le===!0||T!==j)){const Jt=T===j&&Y.id===q;Se.setState(Y,T,Jt)}let ht=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==To.state.version||ke.outputColorSpace!==Ue||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||ke.envMap!==Ne||Y.fog===!0&&ke.fog!==ve||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Se.numPlanes||ke.numIntersection!==Se.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Oe||ke.morphTargets!==ze||ke.morphNormals!==pt||ke.morphColors!==Xt||ke.toneMapping!==vt||W.isWebGL2===!0&&ke.morphTargetsCount!==ft)&&(ht=!0):(ht=!0,ke.__version=Y.version);let pi=ke.currentProgram;ht===!0&&(pi=as(Y,O,V));let fl=!1,yr=!1,Ao=!1;const wt=pi.getUniforms(),mi=ke.uniforms;if(B.useProgram(pi.program)&&(fl=!0,yr=!0,Ao=!0),Y.id!==q&&(q=Y.id,yr=!0),fl||j!==T){wt.setValue(_,"projectionMatrix",T.projectionMatrix),wt.setValue(_,"viewMatrix",T.matrixWorldInverse);const Jt=wt.map.cameraPosition;Jt!==void 0&&Jt.setValue(_,xe.setFromMatrixPosition(T.matrixWorld)),W.logarithmicDepthBuffer&&wt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,yr=!0,Ao=!0)}if(V.isSkinnedMesh){wt.setOptional(_,V,"bindMatrix"),wt.setOptional(_,V,"bindMatrixInverse");const Jt=V.skeleton;Jt&&(W.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),wt.setValue(_,"boneTexture",Jt.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(wt.setOptional(_,V,"batchingTexture"),wt.setValue(_,"batchingTexture",V._matricesTexture,x));const wo=X.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&W.isWebGL2===!0)&&De.update(V,X,pi),(yr||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,wt.setValue(_,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mi.envMap.value=Ne,mi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),yr&&(wt.setValue(_,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&Md(mi,Ao),ve&&Y.fog===!0&&se.refreshFogUniforms(mi,ve),se.refreshMaterialUniforms(mi,Y,ee,z,_e),Os.upload(_,cl(ke),mi,x)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Os.upload(_,cl(ke),mi,x),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(_,"center",V.center),wt.setValue(_,"modelViewMatrix",V.modelViewMatrix),wt.setValue(_,"normalMatrix",V.normalMatrix),wt.setValue(_,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Jt=Y.uniformsGroups;for(let Ro=0,yd=Jt.length;Ro<yd;Ro++)if(W.isWebGL2){const dl=Jt[Ro];Ye.update(dl,pi),Ye.bind(dl,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Md(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ed(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,X){te.get(T.texture).__webglTexture=O,te.get(T.depthTexture).__webglTexture=X;const Y=te.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const X=te.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,X=0){C=T,D=O,L=X;let Y=!0,V=null,ve=!1,ye=!1;if(T){const Ne=te.get(T);Ne.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(_.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?x.setupRenderTarget(T):Ne.__hasExternalTextures&&x.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const Oe=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?V=Oe[O][X]:V=Oe[O],ve=!0):W.isWebGL2&&T.samples>0&&x.useMultisampledRTT(T)===!1?V=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[X]:V=Oe,v.copy(T.viewport),A.copy(T.scissor),N=T.scissorTest}else v.copy(ae).multiplyScalar(ee).floor(),A.copy(ce).multiplyScalar(ee).floor(),N=fe;if(B.bindFramebuffer(_.FRAMEBUFFER,V)&&W.drawBuffers&&Y&&B.drawBuffers(T,V),B.viewport(v),B.scissor(A),B.setScissorTest(N),ve){const Ne=te.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,X)}else if(ye){const Ne=te.get(T.texture),Ve=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,Ve)}q=-1},this.readRenderTargetPixels=function(T,O,X,Y,V,ve,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ue=Ue[ye]),Ue){B.bindFramebuffer(_.FRAMEBUFFER,Ue);try{const Ne=T.texture,Ve=Ne.format,Oe=Ne.type;if(Ve!==dn&&ge.convert(Ve)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===Kr&&(I.has("EXT_color_buffer_half_float")||W.isWebGL2&&I.has("EXT_color_buffer_float"));if(Oe!==ai&&ge.convert(Oe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===kn&&(W.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&X>=0&&X<=T.height-V&&_.readPixels(O,X,Y,V,ge.convert(Ve),ge.convert(Oe),ve)}finally{const Ne=C!==null?te.get(C).__webglFramebuffer:null;B.bindFramebuffer(_.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,O,X=0){const Y=Math.pow(2,-X),V=Math.floor(O.image.width*Y),ve=Math.floor(O.image.height*Y);x.setTexture2D(O,0),_.copyTexSubImage2D(_.TEXTURE_2D,X,0,0,T.x,T.y,V,ve),B.unbindTexture()},this.copyTextureToTexture=function(T,O,X,Y=0){const V=O.image.width,ve=O.image.height,ye=ge.convert(X.format),Ue=ge.convert(X.type);x.setTexture2D(X,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,X.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,V,ve,ye,Ue,O.image.data):O.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,ye,O.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,ye,Ue,O.image),Y===0&&X.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X,Y,V=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Ne=ge.convert(Y.format),Ve=ge.convert(Y.type);let Oe;if(Y.isData3DTexture)x.setTexture3D(Y,0),Oe=_.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)x.setTexture2DArray(Y,0),Oe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Y.unpackAlignment);const ze=_.getParameter(_.UNPACK_ROW_LENGTH),pt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Xt=_.getParameter(_.UNPACK_SKIP_PIXELS),vt=_.getParameter(_.UNPACK_SKIP_ROWS),Cn=_.getParameter(_.UNPACK_SKIP_IMAGES),ft=X.isCompressedTexture?X.mipmaps[V]:X.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,ft.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ft.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,T.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,T.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?_.texSubImage3D(Oe,V,O.x,O.y,O.z,ve,ye,Ue,Ne,Ve,ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Oe,V,O.x,O.y,O.z,ve,ye,Ue,Ne,ft.data)):_.texSubImage3D(Oe,V,O.x,O.y,O.z,ve,ye,Ue,Ne,Ve,ft),_.pixelStorei(_.UNPACK_ROW_LENGTH,ze),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,pt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(_.UNPACK_SKIP_ROWS,vt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Cn),V===0&&Y.generateMipmaps&&_.generateMipmap(Oe),B.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),B.unbindTexture()},this.resetState=function(){D=0,L=0,C=null,B.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===il?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Mo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Oi:jf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Oi?bt:Yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yS extends vd{}yS.prototype.isWebGL1Renderer=!0;class bS extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ol extends hi{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new wn(s,3)),this.setAttribute("normal",new wn(s.slice(),3)),this.setAttribute("uv",new wn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new H,y=new H,D=new H;for(let L=0;L<t.length;L+=3)m(t[L+0],M),m(t[L+1],y),m(t[L+2],D),l(M,y,D,b)}function l(b,M,y,D){const L=D+1,C=[];for(let q=0;q<=L;q++){C[q]=[];const j=b.clone().lerp(y,q/L),v=M.clone().lerp(y,q/L),A=L-q;for(let N=0;N<=A;N++)N===0&&q===L?C[q][N]=j:C[q][N]=j.clone().lerp(v,N/A)}for(let q=0;q<L;q++)for(let j=0;j<2*(L-q)-1;j++){const v=Math.floor(j/2);j%2===0?(d(C[q][v+1]),d(C[q+1][v]),d(C[q][v])):(d(C[q][v+1]),d(C[q+1][v+1]),d(C[q+1][v]))}}function u(b){const M=new H;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(b),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function c(){const b=new H;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];const y=p(b)/2/Math.PI+.5,D=h(b)/Math.PI+.5;a.push(y,1-D)}S(),f()}function f(){for(let b=0;b<a.length;b+=6){const M=a[b+0],y=a[b+2],D=a[b+4],L=Math.max(M,y,D),C=Math.min(M,y,D);L>.9&&C<.1&&(M<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function m(b,M){const y=b*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function S(){const b=new H,M=new H,y=new H,D=new H,L=new $e,C=new $e,q=new $e;for(let j=0,v=0;j<s.length;j+=9,v+=6){b.set(s[j+0],s[j+1],s[j+2]),M.set(s[j+3],s[j+4],s[j+5]),y.set(s[j+6],s[j+7],s[j+8]),L.set(a[v+0],a[v+1]),C.set(a[v+2],a[v+3]),q.set(a[v+4],a[v+5]),D.copy(b).add(M).add(y).divideScalar(3);const A=p(D);E(L,v+0,b,A),E(C,v+2,M,A),E(q,v+4,y,A)}}function E(b,M,y,D){D<0&&b.x===1&&(a[M]=b.x-1),y.x===0&&y.z===0&&(a[M]=D/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function h(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.details)}}class no extends ol{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new no(e.radius,e.detail)}}class Su extends rs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const TS={__name:"HeroBackground",setup(n){const e=Bs(null);let t,i;return mo(()=>{const r=e.value,s=r.clientWidth||window.innerWidth,a=r.clientHeight||window.innerHeight,o=new bS,l=new nn(75,s/a,.1,1e3);l.position.z=5,t=new vd({alpha:!0,antialias:!0}),t.setSize(s,a),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(t.domElement);const u=new hn(new no(2,1),new Su({wireframe:!0,transparent:!0,opacity:.3}));o.add(u);const c=new hn(new no(1,0),new Su({wireframe:!1,transparent:!0,opacity:.8}));o.add(c);let f=0,d=0,m=0,S=0;const E=b=>{m=(b.clientX/window.innerWidth-.5)*2,S=(b.clientY/window.innerHeight-.5)*2},p=()=>{const b=r.clientWidth||window.innerWidth,M=r.clientHeight||window.innerHeight;l.aspect=b/M,l.updateProjectionMatrix(),t.setSize(b,M)};window.addEventListener("mousemove",E),window.addEventListener("resize",p);const h=()=>{i=requestAnimationFrame(h),f+=(m-f)*.05,d+=(S-d)*.05,u.rotation.x+=.005,u.rotation.y+=.008,u.rotation.z+=.003,c.rotation.x-=.01,c.rotation.y-=.012,u.position.x=f*.5,u.position.y=-d*.5,c.position.x=f*.7,c.position.y=-d*.7,t.render(o,l)};h(),go(()=>{cancelAnimationFrame(i),t.dispose(),window.removeEventListener("mousemove",E),window.removeEventListener("resize",p)})}),(r,s)=>(tt(),st("div",{ref_key:"container",ref:e,class:"absolute inset-0 w-full h-full pointer-events-none"},null,512))}},AS={class:"min-h-screen flex flex-col items-center justify-center px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden mesh-gradient"},wS={class:"max-w-container-max mx-auto text-center z-10"},RS={class:"inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass-panel mb-8 border-primary/10"},CS={class:"text-label-sm text-primary uppercase tracking-widest font-bold"},LS={class:"font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight mb-6 max-w-4xl mx-auto tracking-tighter"},PS={class:"text-gradient"},DS={class:"font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-80"},US={class:"flex flex-col md:flex-row gap-4 justify-center items-center"},IS={href:"#iletisim",class:"w-full md:w-auto px-10 py-4 bg-primary text-white rounded-lg font-label-md glow-button"},NS={href:"#hizmetler",class:"w-full md:w-auto px-10 py-4 glass-panel text-white rounded-lg font-label-md hover:bg-white/5 transition-all border-white/10"},FS={class:"mt-20 relative w-full max-w-5xl mx-auto px-4 perspective-1000"},OS={class:"glass-panel p-6 md:p-8 rounded-xl border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform rotate-x-2 transition-transform duration-700 hover:rotate-x-0"},BS={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},zS={class:"h-32 rounded-lg bg-white/5 flex flex-col justify-center px-6 border border-white/5"},HS={class:"text-label-sm text-on-surface-variant mb-2"},GS={class:"h-32 rounded-lg bg-primary/10 flex flex-col justify-center px-6 border border-primary/20"},VS={class:"text-label-sm text-on-surface-variant mb-2"},kS={class:"text-headline-md font-bold text-primary"},WS={class:"h-32 rounded-lg bg-white/5 flex flex-col justify-center px-6 border border-white/5"},XS={class:"text-label-sm text-on-surface-variant mb-2"},qS={__name:"HeroSection",setup(n){const{t:e}=di();return(t,i)=>(tt(),st("section",AS,[ut(TS),J("div",wS,[J("div",RS,[J("span",CS,Me(Pe(e)("hero.badge")),1)]),J("h1",LS,[jt(Me(Pe(e)("hero.title1"))+" ",1),J("span",PS,Me(Pe(e)("hero.titleHighlight")),1),jt(" "+Me(Pe(e)("hero.title2")),1)]),J("p",DS,Me(Pe(e)("hero.subtitle")),1),J("div",US,[J("a",IS,Me(Pe(e)("hero.ctaPrimary")),1),J("a",NS,Me(Pe(e)("hero.ctaSecondary")),1)])]),J("div",FS,[J("div",OS,[i[2]||(i[2]=Pf('<div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4"><div class="flex gap-2"><div class="w-2.5 h-2.5 rounded-full bg-white/20"></div><div class="w-2.5 h-2.5 rounded-full bg-white/10"></div><div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div></div><div class="flex items-center gap-4"><span class="material-symbols-outlined text-on-surface-variant text-sm">search</span><span class="material-symbols-outlined text-on-surface-variant text-sm">notifications</span><div class="w-7 h-7 rounded-full bg-surface-container-high border border-white/10 overflow-hidden"><img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv0F79NkO9VKa1cmN5FfkqX-Hzbayd_b5KgZwFWXV3a5nxzCxuiz5VLnAzE667CQLlx0uO_RXd-P_lda2mjdC-vMpgTXW741bD3mvN4Yqms58St7jhWcYRdVPnlLK11NDSaMheBTlowFuV0-SyE0aPwnM2DhW-JCk8nghIkMjryISzckuO5P2y-hr5YQlZFBHmMCnemVNoS_HQ6sAibs0Lci-qgT5yww4VBoYwucwgI9z2--bvS7XV" alt="avatar"></div></div></div>',1)),J("div",BS,[J("div",zS,[J("span",HS,Me(Pe(e)("hero.stat1Label")),1),i[0]||(i[0]=J("span",{class:"text-headline-md font-bold text-white"},"124%",-1))]),J("div",GS,[J("span",VS,Me(Pe(e)("hero.stat2Label")),1),J("span",kS,Me(Pe(e)("hero.stat2Value")),1)]),J("div",WS,[J("span",XS,Me(Pe(e)("hero.stat3Label")),1),i[1]||(i[1]=J("span",{class:"text-headline-md font-bold text-on-surface"},"99.9%",-1))])]),i[3]||(i[3]=J("div",{class:"mt-8 h-48 rounded-lg bg-white/5 w-full flex items-center justify-center overflow-hidden border border-white/5"},[J("div",{class:"w-full h-full bg-cover bg-center opacity-20 grayscale",style:{"background-image":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEZIgpl6lDz5no4_Zmyrl52mVp-AOgxq2QCsVvjubjzHzH8JXkxLSsAJ_DZxayrKl121YQg9zHHVrv7uQBAcnxtED87L-7L7zi6tLpO-Taz9C0ajNpjZzp707ga-b7e9FRcpFe3ouzHRirUtSOKFqipZh_Oc1PEOlO3UzXKhVPQOsjvSEfldiM2J5ajk12at__c3Epin9cZB_7zvp88lKv9SlMXaO8eNSMf8RupXBM6xMPK9lKK0XG')"}})],-1))])])]))}},$S={id:"hizmetler",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},YS={class:"max-w-container-max mx-auto"},jS={class:"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"},KS={class:"max-w-2xl"},ZS={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},JS={class:"text-primary"},QS={class:"text-body-lg text-on-surface-variant"},eM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},tM={class:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"},nM={class:"material-symbols-outlined text-primary text-2xl"},iM={class:"text-headline-md text-[20px] mb-4 text-white"},rM={class:"text-on-surface-variant text-body-md mb-6 leading-relaxed"},sM={href:"#",class:"inline-flex items-center text-primary font-label-md gap-2 group-hover:translate-x-1 transition-transform"},oM={__name:"ServicesSection",setup(n){const{t:e,messages:t,locale:i}=di(),r=["devices","hub","code_blocks","auto_awesome"],s=Sr(()=>t[i.value].services.cards.map((a,o)=>({icon:r[o],...a})));return(a,o)=>(tt(),st("section",$S,[J("div",YS,[J("div",jS,[J("div",KS,[J("h2",ZS,[jt(Me(Pe(e)("services.sectionTitle1"))+" ",1),J("span",JS,Me(Pe(e)("services.sectionTitleHighlight")),1)]),J("p",QS,Me(Pe(e)("services.sectionSubtitle")),1)]),o[0]||(o[0]=J("div",{class:"hidden md:block"},[J("span",{class:"material-symbols-outlined text-[64px] text-primary/10"},"terminal")],-1))]),J("div",eM,[(tt(!0),st(St,null,li(s.value,(l,u)=>(tt(),st("div",{key:u,class:"glass-panel p-8 rounded-xl hover:border-primary/30 transition-all duration-300 group"},[J("div",tM,[J("span",nM,Me(l.icon),1)]),J("h3",iM,Me(l.title),1),J("p",rM,Me(l.description),1),J("a",sM,[jt(Me(Pe(e)("services.details"))+" ",1),o[1]||(o[1]=J("span",{class:"material-symbols-outlined text-sm"},"arrow_forward_ios",-1))])]))),128))])])]))}},aM={class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden"},lM={class:"max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"},cM={class:"relative"},uM={class:"glass-panel p-2 rounded-xl relative z-10 overflow-hidden border-white/10"},fM={class:"absolute bottom-10 left-10 right-10 glass-panel p-6 rounded-lg border-white/10 bg-surface-obsidian/40"},dM={class:"flex items-center gap-4 mb-3"},hM={class:"text-label-sm font-bold tracking-widest text-white uppercase"},pM={class:"text-label-md text-on-surface-variant italic font-medium"},mM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-white tracking-tight"},gM={class:"text-gradient"},_M={class:"space-y-8"},vM={class:"flex-shrink-0 w-10 h-10 rounded-md glass-panel flex items-center justify-center border-white/10"},xM={class:"material-symbols-outlined text-primary text-xl"},SM={class:"font-headline-md text-[18px] mb-2 text-white"},MM={class:"text-on-surface-variant text-sm leading-relaxed"},EM={__name:"AiSection",setup(n){const{t:e,messages:t,locale:i}=di(),r=["psychology","bolt","security"],s=Sr(()=>t[i.value].ai.features.map((a,o)=>({icon:r[o],...a})));return(a,o)=>(tt(),st("section",aM,[J("div",lM,[J("div",cM,[o[2]||(o[2]=J("div",{class:"absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"},null,-1)),J("div",uM,[o[1]||(o[1]=J("div",{class:"bg-surface-obsidian rounded-lg p-1 overflow-hidden h-[500px]"},[J("img",{class:"w-full h-full object-cover rounded-md opacity-60 grayscale hover:grayscale-0 transition-all duration-1000",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCfpCUN3OlvCZ5mhdfKYSRH7hUB6OFv5FoonzdxU_q5wSwVW9YtlweLnhEESIEAql596fl4Hyezdy2u7LGOx6-HX8Ux74572JLO5fkdSffV-HRWTSQsEpwJghvzob1KPAnVOH31PtseoOX4ENZA4qSY4BsPdKxAOgUuoLCLlIkC8stgpCIWtTo5TzBgC2_yWLoeF-99NBvFerlLfsGRbiz-lEvWOarpdwwIEcaoDnJ8jVJSn2cxx4LI",alt:"AI Engine"})],-1)),J("div",fM,[J("div",dM,[o[0]||(o[0]=J("div",{class:"w-1.5 h-1.5 rounded-full bg-primary animate-pulse"},null,-1)),J("span",hM,Me(Pe(e)("ai.engineLabel")),1)]),J("p",pM,Me(Pe(e)("ai.engineQuote")),1)])])]),J("div",null,[J("h2",mM,[jt(Me(Pe(e)("ai.title1"))+" ",1),J("span",gM,Me(Pe(e)("ai.titleHighlight")),1),jt(" "+Me(Pe(e)("ai.title2")),1)]),J("div",_M,[(tt(!0),st(St,null,li(s.value,(l,u)=>(tt(),st("div",{key:u,class:"flex gap-6"},[J("div",vM,[J("span",xM,Me(l.icon),1)]),J("div",null,[J("h4",SM,Me(l.title),1),J("p",MM,Me(l.description),1)])]))),128))])])])]))}},yM={class:"px-gutter py-24 bg-primary/5 border-y border-primary/10"},bM={class:"max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"},TM={class:"text-label-md uppercase tracking-widest text-primary font-bold"},AM={class:"text-label-md uppercase tracking-widest text-primary font-bold"},wM={class:"text-label-md uppercase tracking-widest text-primary font-bold"},RM={__name:"StatsSection",setup(n){const{t:e}=di();return(t,i)=>(tt(),st("section",yM,[J("div",bM,[J("div",null,[i[0]||(i[0]=J("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"99.9%",-1)),J("div",TM,Me(Pe(e)("stats.reliability")),1)]),J("div",null,[i[1]||(i[1]=J("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"10x",-1)),J("div",AM,Me(Pe(e)("stats.speed")),1)]),J("div",null,[i[2]||(i[2]=J("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"100%",-1)),J("div",wM,Me(Pe(e)("stats.bespoke")),1)])])]))}},CM={id:"surec",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v"},LM={class:"max-w-container-max mx-auto"},PM={class:"text-center mb-20"},DM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},UM={class:"text-primary"},IM={class:"text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70"},NM={class:"grid grid-cols-1 md:grid-cols-4 gap-4 relative"},FM={class:"w-10 h-10 bg-surface-obsidian text-primary border border-primary/20 rounded-md flex items-center justify-center mx-auto mb-6 font-bold text-sm group-hover:border-primary transition-colors"},OM={class:"font-headline-md text-[18px] mb-3 text-white"},BM={class:"text-on-surface-variant text-xs leading-relaxed opacity-80"},zM={__name:"ProcessSection",setup(n){const{t:e,messages:t,locale:i}=di(),r=["01","02","03","04"],s=Sr(()=>t[i.value].process.steps.map((a,o)=>({number:r[o],...a})));return(a,o)=>(tt(),st("section",CM,[J("div",LM,[J("div",PM,[J("h2",DM,[jt(Me(Pe(e)("process.title1"))+" ",1),J("span",UM,Me(Pe(e)("process.titleHighlight")),1)]),J("p",IM,Me(Pe(e)("process.subtitle")),1)]),J("div",NM,[o[0]||(o[0]=J("div",{class:"hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"},null,-1)),(tt(!0),st(St,null,li(s.value,(l,u)=>(tt(),st("div",{key:u,class:"relative z-10 glass-panel p-8 rounded-xl text-center group hover:bg-white/[0.03] transition-colors border-white/5"},[J("div",FM,Me(l.number),1),J("h4",OM,Me(l.title),1),J("p",BM,Me(l.description),1)]))),128))])])]))}},HM={id:"iletisim",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative mesh-gradient"},GM={class:"max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-xl border-white/10 shadow-2xl"},VM={class:"text-center mb-12"},kM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight"},WM={class:"text-primary"},XM={class:"text-on-surface-variant"},qM={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},$M={class:"space-y-2"},YM={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},jM=["placeholder"],KM={class:"space-y-2"},ZM={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},JM=["placeholder"],QM={class:"space-y-2"},eE={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},tE=["value"],nE={class:"space-y-2"},iE={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},rE=["placeholder"],sE={type:"submit",class:"w-full py-4 bg-primary text-white rounded-lg font-bold text-base glow-button tracking-widest transition-all uppercase"},oE={__name:"ContactSection",setup(n){const{t:e,messages:t,locale:i}=di(),r=Sr(()=>t[i.value].contact.serviceOptions),s=uo({name:"",email:"",service:"",details:""});return(a,o)=>(tt(),st("section",HM,[J("div",GM,[J("div",VM,[J("h2",kM,[jt(Me(Pe(e)("contact.title1"))+" ",1),J("span",WM,Me(Pe(e)("contact.titleHighlight")),1),jt(" "+Me(Pe(e)("contact.title2")),1)]),J("p",XM,Me(Pe(e)("contact.subtitle")),1)]),J("form",{class:"space-y-6",onSubmit:o[4]||(o[4]=Nr(()=>{},["prevent"]))},[J("div",qM,[J("div",$M,[J("label",YM,Me(Pe(e)("contact.labelName")),1),fs(J("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>s.name=l),type:"text",placeholder:Pe(e)("contact.placeholderName"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,jM),[[Go,s.name]])]),J("div",KM,[J("label",ZM,Me(Pe(e)("contact.labelEmail")),1),fs(J("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>s.email=l),type:"email",placeholder:Pe(e)("contact.placeholderEmail"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,JM),[[Go,s.email]])])]),J("div",QM,[J("label",eE,Me(Pe(e)("contact.labelService")),1),fs(J("select",{"onUpdate:modelValue":o[2]||(o[2]=l=>s.service=l),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-white appearance-none"},[(tt(!0),st(St,null,li(r.value,l=>(tt(),st("option",{key:l,value:l,class:"bg-surface-obsidian"},Me(l),9,tE))),128))],512),[[$p,s.service]])]),J("div",nE,[J("label",iE,Me(Pe(e)("contact.labelDetails")),1),fs(J("textarea",{"onUpdate:modelValue":o[3]||(o[3]=l=>s.details=l),rows:"4",placeholder:Pe(e)("contact.placeholderDetails"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,rE),[[Go,s.details]])]),J("button",sE,Me(Pe(e)("contact.submit")),1)],32)])]))}},aE={class:"w-full border-t border-white/5 bg-surface-obsidian"},lE={class:"flex flex-col md:flex-row justify-between items-center px-gutter py-section-padding-v-mobile max-w-container-max mx-auto gap-8"},cE={class:"flex flex-col items-center md:items-start gap-4"},uE={class:"text-on-surface-variant text-xs max-w-xs text-center md:text-left opacity-60"},fE={class:"flex gap-12"},dE={class:"flex flex-col gap-3 text-center md:text-left"},hE={class:"font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]"},pE={class:"flex flex-col gap-3 text-center md:text-left"},mE={class:"font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]"},gE={class:"flex flex-col items-center md:items-end gap-6"},_E={class:"font-body-md text-[11px] text-on-surface-variant opacity-40"},vE={__name:"AppFooter",setup(n){const{t:e}=di();return(t,i)=>(tt(),st("footer",aE,[J("div",lE,[J("div",cE,[i[0]||(i[0]=J("img",{src:"https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs",alt:"Sartechs",class:"h-10 w-auto logo-filter"},null,-1)),J("p",uE,Me(Pe(e)("footer.tagline")),1)]),J("div",fE,[J("div",dE,[J("span",hE,Me(Pe(e)("footer.company")),1),(tt(!0),st(St,null,li(Pe(e)("footer.companyLinks"),r=>(tt(),st("a",{key:r,href:"#",class:"text-on-surface-variant hover:text-white transition-colors text-xs"},Me(r),1))),128))]),J("div",pE,[J("span",mE,Me(Pe(e)("footer.support")),1),(tt(!0),st(St,null,li(Pe(e)("footer.supportLinks"),r=>(tt(),st("a",{key:r,href:"#",class:"text-on-surface-variant hover:text-white transition-colors text-xs"},Me(r),1))),128))])]),J("div",gE,[i[1]||(i[1]=Pf('<div class="flex gap-4"><a href="#" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5"><span class="material-symbols-outlined text-[18px]">share</span></a><a href="#" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5"><span class="material-symbols-outlined text-[18px]">alternate_email</span></a></div>',1)),J("p",_E,Me(Pe(e)("footer.copyright")),1)])])]))}},xE={class:"font-body-md text-on-surface selection:bg-primary/30 selection:text-white"},SE={class:"relative pt-24 overflow-hidden"},ME={__name:"App",setup(n){return tm(),(e,t)=>(tt(),st("div",xE,[ut(hm),J("main",SE,[ut(qS),ut(oM),ut(EM),ut(RM),ut(zM),ut(oE)]),ut(vE)]))}};Jp(ME).mount("#app");
