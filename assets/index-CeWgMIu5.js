(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const gt={},vr=[],li=()=>{},Bx=()=>!1,Ml=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sh=t=>t.startsWith("onUpdate:"),zt=Object.assign,Th=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zx=Object.prototype.hasOwnProperty,ut=(t,e)=>zx.call(t,e),ke=Array.isArray,_r=t=>wl(t)==="[object Map]",nm=t=>wl(t)==="[object Set]",Xe=t=>typeof t=="function",Ct=t=>typeof t=="string",ps=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",im=t=>(yt(t)||Xe(t))&&Xe(t.then)&&Xe(t.catch),sm=Object.prototype.toString,wl=t=>sm.call(t),Hx=t=>wl(t).slice(8,-1),rm=t=>wl(t)==="[object Object]",Ah=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=bh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vx=/-(\w)/g,On=bl(t=>t.replace(Vx,(e,n)=>n?n.toUpperCase():"")),Gx=/\B([A-Z])/g,ms=bl(t=>t.replace(Gx,"-$1").toLowerCase()),Sl=bl(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=bl(t=>t?`on${Sl(t)}`:""),is=(t,e)=>!Object.is(t,e),Ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},om=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Wx=t=>{const e=Ct(t)?Number(t):NaN;return isNaN(e)?t:e};let Ad;const Tl=()=>Ad||(Ad=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tr(t){if(ke(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ct(i)?qx(i):Tr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ct(t)||yt(t))return t}const Xx=/;(?![^(]*\))/g,$x=/:([^]+)/,jx=/\/\*[^]*?\*\//g;function qx(t){const e={};return t.replace(jx,"").split(Xx).forEach(n=>{if(n){const i=n.split($x);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ci(t){let e="";if(Ct(t))e=t;else if(ke(t))for(let n=0;n<t.length;n++){const i=ci(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kx=bh(Yx);function am(t){return!!t||t===""}const lm=t=>!!(t&&t.__v_isRef===!0),Dt=t=>Ct(t)?t:t==null?"":ke(t)||yt(t)&&(t.toString===sm||!Xe(t.toString))?lm(t)?Dt(t.value):JSON.stringify(t,cm,2):String(t),cm=(t,e)=>lm(e)?cm(t,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[oc(i,r)+" =>"]=s,n),{})}:nm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oc(n))}:ps(e)?oc(e):yt(e)&&!ke(e)&&!rm(e)?String(e):e,oc=(t,e="")=>{var n;return ps(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class um{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){++this._on===1&&(this.prevScope=Jt,Jt=this)}off(){this._on>0&&--this._on===0&&(Jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zx(t){return new um(t)}function hm(){return Jt}function Jx(t,e=!1){Jt&&Jt.cleanups.push(t)}let xt;const ac=new WeakSet;class dm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&Jt.active&&Jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ac.has(this)&&(ac.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cd(this),mm(this);const e=xt,n=jn;xt=this,jn=!0;try{return this.fn()}finally{gm(this),xt=e,jn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ph(e);this.deps=this.depsTail=void 0,Cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ac.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eu(this)&&this.run()}get dirty(){return eu(this)}}let fm=0,io,so;function pm(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=io,io=t}function Ch(){fm++}function Rh(){if(--fm>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function mm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Ph(i),Qx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===So)||(t.globalVersion=So,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!eu(t))))return;t.flags|=2;const e=t.dep,n=xt,i=jn;xt=t,jn=!0;try{mm(t);const s=t.fn(t._value);(e.version===0||is(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xt=n,jn=i,gm(t),t.flags&=-3}}function Ph(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ph(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qx(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jn=!0;const _m=[];function Ui(){_m.push(jn),jn=!1}function Oi(){const t=_m.pop();jn=t===void 0?!0:t}function Cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xt;xt=void 0;try{e()}finally{xt=n}}}let So=0;class ey{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xt||!jn||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new ey(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=i)}return n}trigger(e){this.version++,So++,this.notify(e)}notify(e){Ch();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rh()}}}function xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)xm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tu=new WeakMap,Bs=Symbol(""),nu=Symbol(""),To=Symbol("");function en(t,e,n){if(jn&&xt){let i=tu.get(t);i||tu.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Lh),s.map=i,s.key=n),s.track()}}function Ti(t,e,n,i,s,r){const o=tu.get(t);if(!o){So++;return}const a=l=>{l&&l.trigger()};if(Ch(),e==="clear")o.forEach(a);else{const l=ke(t),u=l&&Ah(n);if(l&&n==="length"){const c=Number(i);o.forEach((h,d)=>{(d==="length"||d===To||!ps(d)&&d>=c)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(To)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Bs)),_r(t)&&a(o.get(nu)));break;case"delete":l||(a(o.get(Bs)),_r(t)&&a(o.get(nu)));break;case"set":_r(t)&&a(o.get(Bs));break}}Rh()}function qs(t){const e=rt(t);return e===t?e:(en(e,"iterate",To),Un(t)?e:e.map(Gt))}function Al(t){return en(t=rt(t),"iterate",To),t}const ty={__proto__:null,[Symbol.iterator](){return lc(this,Symbol.iterator,Gt)},concat(...t){return qs(this).concat(...t.map(e=>ke(e)?qs(e):e))},entries(){return lc(this,"entries",t=>(t[1]=Gt(t[1]),t))},every(t,e){return gi(this,"every",t,e,void 0,arguments)},filter(t,e){return gi(this,"filter",t,e,n=>n.map(Gt),arguments)},find(t,e){return gi(this,"find",t,e,Gt,arguments)},findIndex(t,e){return gi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gi(this,"findLast",t,e,Gt,arguments)},findLastIndex(t,e){return gi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gi(this,"forEach",t,e,void 0,arguments)},includes(...t){return cc(this,"includes",t)},indexOf(...t){return cc(this,"indexOf",t)},join(t){return qs(this).join(t)},lastIndexOf(...t){return cc(this,"lastIndexOf",t)},map(t,e){return gi(this,"map",t,e,void 0,arguments)},pop(){return Vr(this,"pop")},push(...t){return Vr(this,"push",t)},reduce(t,...e){return Rd(this,"reduce",t,e)},reduceRight(t,...e){return Rd(this,"reduceRight",t,e)},shift(){return Vr(this,"shift")},some(t,e){return gi(this,"some",t,e,void 0,arguments)},splice(...t){return Vr(this,"splice",t)},toReversed(){return qs(this).toReversed()},toSorted(t){return qs(this).toSorted(t)},toSpliced(...t){return qs(this).toSpliced(...t)},unshift(...t){return Vr(this,"unshift",t)},values(){return lc(this,"values",Gt)}};function lc(t,e,n){const i=Al(t),s=i[e]();return i!==t&&!Un(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const ny=Array.prototype;function gi(t,e,n,i,s,r){const o=Al(t),a=o!==t&&!Un(t),l=o[e];if(l!==ny[e]){const h=l.apply(t,r);return a?Gt(h):h}let u=n;o!==t&&(a?u=function(h,d){return n.call(this,Gt(h),d,t)}:n.length>2&&(u=function(h,d){return n.call(this,h,d,t)}));const c=l.call(o,u,i);return a&&s?s(c):c}function Rd(t,e,n,i){const s=Al(t);let r=n;return s!==t&&(Un(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Gt(a),l,t)}),s[e](r,...i)}function cc(t,e,n){const i=rt(t);en(i,"iterate",To);const s=i[e](...n);return(s===-1||s===!1)&&Ih(n[0])?(n[0]=rt(n[0]),i[e](...n)):s}function Vr(t,e,n=[]){Ui(),Ch();const i=rt(t)[e].apply(t,n);return Rh(),Oi(),i}const iy=bh("__proto__,__v_isRef,__isVue"),ym=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ps));function sy(t){ps(t)||(t=String(t));const e=rt(this);return en(e,"has",t),e.hasOwnProperty(t)}class Em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Am:Tm:r?Sm:bm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=ty[n]))return l;if(n==="hasOwnProperty")return sy}const a=Reflect.get(e,n,jt(e)?e:i);return(ps(n)?ym.has(n):iy(n))||(s||en(e,"get",n),r)?a:jt(a)?o&&Ah(n)?a:a.value:yt(a)?s?Rm(a):Rl(a):a}}class Mm extends Em{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=cs(r);if(!Un(i)&&!cs(i)&&(r=rt(r),i=rt(i)),!ke(e)&&jt(r)&&!jt(i))return l?!1:(r.value=i,!0)}const o=ke(e)&&Ah(n)?Number(n)<e.length:ut(e,n),a=Reflect.set(e,n,i,jt(e)?e:s);return e===rt(s)&&(o?is(i,r)&&Ti(e,"set",n,i):Ti(e,"add",n,i)),a}deleteProperty(e,n){const i=ut(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ti(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ps(n)||!ym.has(n))&&en(e,"has",n),i}ownKeys(e){return en(e,"iterate",ke(e)?"length":Bs),Reflect.ownKeys(e)}}class wm extends Em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ry=new Mm,oy=new wm,ay=new Mm(!0),ly=new wm(!0),iu=t=>t,oa=t=>Reflect.getPrototypeOf(t);function cy(t,e,n){return function(...i){const s=this.__v_raw,r=rt(s),o=_r(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...i),c=n?iu:e?Qa:Gt;return!e&&en(r,"iterate",l?nu:Bs),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function aa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uy(t,e){const n={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);t||(is(s,a)&&en(o,"get",s),en(o,"get",a));const{has:l}=oa(o),u=e?iu:t?Qa:Gt;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&en(rt(s),"iterate",Bs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return t||(is(s,a)&&en(o,"has",s),en(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),u=e?iu:t?Qa:Gt;return!t&&en(l,"iterate",Bs),a.forEach((c,h)=>s.call(r,u(c),u(h),o))}};return zt(n,t?{add:aa("add"),set:aa("set"),delete:aa("delete"),clear:aa("clear")}:{add(s){!e&&!Un(s)&&!cs(s)&&(s=rt(s));const r=rt(this);return oa(r).has.call(r,s)||(r.add(s),Ti(r,"add",s,s)),this},set(s,r){!e&&!Un(r)&&!cs(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=oa(o);let u=a.call(o,s);u||(s=rt(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?is(r,c)&&Ti(o,"set",s,r):Ti(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=oa(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&Ti(r,"delete",s,void 0),u},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&Ti(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cy(s,t,e)}),n}function Cl(t,e){const n=uy(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ut(n,s)&&s in i?n:i,s,r)}const hy={get:Cl(!1,!1)},dy={get:Cl(!1,!0)},fy={get:Cl(!0,!1)},py={get:Cl(!0,!0)},bm=new WeakMap,Sm=new WeakMap,Tm=new WeakMap,Am=new WeakMap;function my(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gy(t){return t.__v_skip||!Object.isExtensible(t)?0:my(Hx(t))}function Rl(t){return cs(t)?t:Pl(t,!1,ry,hy,bm)}function Cm(t){return Pl(t,!1,ay,dy,Sm)}function Rm(t){return Pl(t,!0,oy,fy,Tm)}function vy(t){return Pl(t,!0,ly,py,Am)}function Pl(t,e,n,i,s){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=gy(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function xr(t){return cs(t)?xr(t.__v_raw):!!(t&&t.__v_isReactive)}function cs(t){return!!(t&&t.__v_isReadonly)}function Un(t){return!!(t&&t.__v_isShallow)}function Ih(t){return t?!!t.__v_raw:!1}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function Pm(t){return!ut(t,"__v_skip")&&Object.isExtensible(t)&&om(t,"__v_skip",!0),t}const Gt=t=>yt(t)?Rl(t):t,Qa=t=>yt(t)?Rm(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function vt(t){return Lm(t,!1)}function Qt(t){return Lm(t,!0)}function Lm(t,e){return jt(t)?t:new _y(t,e)}class _y{constructor(e,n){this.dep=new Lh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:rt(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Un(e)||cs(e);e=i?e:rt(e),is(e,n)&&(this._rawValue=e,this._value=i?e:Gt(e),this.dep.trigger())}}function Li(t){return jt(t)?t.value:t}function yr(t){return Xe(t)?t():Li(t)}const xy={get:(t,e,n)=>e==="__v_raw"?t:Li(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Im(t){return xr(t)?t:new Proxy(t,xy)}class yy{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=So-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return pm(this,!0),!0}get value(){const e=this.dep.track();return vm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ey(t,e,n=!1){let i,s;return Xe(t)?i=t:(i=t.get,s=t.set),new yy(i,s,n)}const la={},el=new WeakMap;let Rs;function My(t,e=!1,n=Rs){if(n){let i=el.get(n);i||el.set(n,i=[]),i.push(t)}}function wy(t,e,n=gt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,u=y=>s?y:Un(y)||s===!1||s===0?Ai(y,1):Ai(y);let c,h,d,p,v=!1,g=!1;if(jt(t)?(h=()=>t.value,v=Un(t)):xr(t)?(h=()=>u(t),v=!0):ke(t)?(g=!0,v=t.some(y=>xr(y)||Un(y)),h=()=>t.map(y=>{if(jt(y))return y.value;if(xr(y))return u(y);if(Xe(y))return l?l(y,2):y()})):Xe(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Ui();try{d()}finally{Oi()}}const y=Rs;Rs=c;try{return l?l(t,3,[p]):t(p)}finally{Rs=y}}:h=li,e&&s){const y=h,L=s===!0?1/0:s;h=()=>Ai(y(),L)}const f=hm(),m=()=>{c.stop(),f&&f.active&&Th(f.effects,c)};if(r&&e){const y=e;e=(...L)=>{y(...L),m()}}let M=g?new Array(t.length).fill(la):la;const b=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const L=c.run();if(s||v||(g?L.some((P,A)=>is(P,M[A])):is(L,M))){d&&d();const P=Rs;Rs=c;try{const A=[L,M===la?void 0:g&&M[0]===la?[]:M,p];l?l(e,3,A):e(...A),M=L}finally{Rs=P}}}else c.run()};return a&&a(b),c=new dm(h),c.scheduler=o?()=>o(b,!1):b,p=y=>My(y,!1,c),d=c.onStop=()=>{const y=el.get(c);if(y){if(l)l(y,4);else for(const L of y)L();el.delete(c)}},e?i?b(!0):M=c.run():o?o(b.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function Ai(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,jt(t))Ai(t.value,e,n);else if(ke(t))for(let i=0;i<t.length;i++)Ai(t[i],e,n);else if(nm(t)||_r(t))t.forEach(i=>{Ai(i,e,n)});else if(rm(t)){for(const i in t)Ai(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ai(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Go(t,e,n,i){try{return i?t(...i):t()}catch(s){Ll(s,e,n)}}function Kn(t,e,n,i){if(Xe(t)){const s=Go(t,e,n,i);return s&&im(s)&&s.catch(r=>{Ll(r,e,n)}),s}if(ke(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Kn(t[r],e,n,i));return s}}function Ll(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,l,u)===!1)return}a=a.parent}if(r){Ui(),Go(r,null,10,[t,l,u]),Oi();return}}by(t,n,s,i,o)}function by(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const an=[];let ii=-1;const Er=[];let Ki=null,cr=0;const Dm=Promise.resolve();let tl=null;function Dh(t){const e=tl||Dm;return t?e.then(this?t.bind(this):t):e}function Sy(t){let e=ii+1,n=an.length;for(;e<n;){const i=e+n>>>1,s=an[i],r=Ao(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Uh(t){if(!(t.flags&1)){const e=Ao(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=Ao(n)?an.push(t):an.splice(Sy(e),0,t),t.flags|=1,Um()}}function Um(){tl||(tl=Dm.then(Nm))}function Ty(t){ke(t)?Er.push(...t):Ki&&t.id===-1?Ki.splice(cr+1,0,t):t.flags&1||(Er.push(t),t.flags|=1),Um()}function Pd(t,e,n=ii+1){for(;n<an.length;n++){const i=an[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Om(t){if(Er.length){const e=[...new Set(Er)].sort((n,i)=>Ao(n)-Ao(i));if(Er.length=0,Ki){Ki.push(...e);return}for(Ki=e,cr=0;cr<Ki.length;cr++){const n=Ki[cr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ki=null,cr=0}}const Ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Nm(t){try{for(ii=0;ii<an.length;ii++){const e=an[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Go(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<an.length;ii++){const e=an[ii];e&&(e.flags&=-2)}ii=-1,an.length=0,Om(),tl=null,(an.length||Er.length)&&Nm()}}let fn=null,Fm=null;function nl(t){const e=fn;return fn=t,Fm=t&&t.type.__scopeId||null,e}function Wo(t,e=fn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Hd(-1);const r=nl(e);let o;try{o=t(...s)}finally{nl(r),i._d&&Hd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ay(t,e){if(fn===null)return t;const n=Nl(fn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=gt]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&Ai(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function xs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ui(),Kn(l,n,8,[t.el,a,t,e]),Oi())}}const Cy=Symbol("_vte"),km=t=>t.__isTeleport,Zi=Symbol("_leaveCb"),ca=Symbol("_enterCb");function Ry(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pi(()=>{t.isMounted=!0}),$m(()=>{t.isUnmounting=!0}),t}const Rn=[Function,Array],Bm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn},zm=t=>{const e=t.subTree;return e.component?zm(e.component):e},Py={name:"BaseTransition",props:Bm,setup(t,{slots:e}){const n=kh(),i=Ry();return()=>{const s=e.default&&Gm(e.default(),!0);if(!s||!s.length)return;const r=Hm(s),o=rt(t),{mode:a}=o;if(i.isLeaving)return uc(r);const l=Ld(r);if(!l)return uc(r);let u=su(l,o,i,n,h=>u=h);l.type!==ln&&Co(l,u);let c=n.subTree&&Ld(n.subTree);if(c&&c.type!==ln&&!Is(l,c)&&zm(n).type!==ln){let h=su(c,o,i,n);if(Co(c,h),a==="out-in"&&l.type!==ln)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,c=void 0},uc(r);a==="in-out"&&l.type!==ln?h.delayLeave=(d,p,v)=>{const g=Vm(i,c);g[String(c.key)]=c,d[Zi]=()=>{p(),d[Zi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Hm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ln){e=n;break}}return e}const Ly=Py;function Vm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function su(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:f,onAppear:m,onAfterAppear:M,onAppearCancelled:b}=e,y=String(t.key),L=Vm(n,t),P=(T,w)=>{T&&Kn(T,i,9,w)},A=(T,w)=>{const I=w[1];P(T,w),ke(T)?T.every(F=>F.length<=1)&&I():T.length<=1&&I()},U={mode:o,persisted:a,beforeEnter(T){let w=l;if(!n.isMounted)if(r)w=f||l;else return;T[Zi]&&T[Zi](!0);const I=L[y];I&&Is(t,I)&&I.el[Zi]&&I.el[Zi](),P(w,[T])},enter(T){let w=u,I=c,F=h;if(!n.isMounted)if(r)w=m||u,I=M||c,F=b||h;else return;let z=!1;const Q=T[ca]=oe=>{z||(z=!0,oe?P(F,[T]):P(I,[T]),U.delayedLeave&&U.delayedLeave(),T[ca]=void 0)};w?A(w,[T,Q]):Q()},leave(T,w){const I=String(t.key);if(T[ca]&&T[ca](!0),n.isUnmounting)return w();P(d,[T]);let F=!1;const z=T[Zi]=Q=>{F||(F=!0,w(),Q?P(g,[T]):P(v,[T]),T[Zi]=void 0,L[I]===t&&delete L[I])};L[I]=t,p?A(p,[T,z]):z()},clone(T){const w=su(T,e,n,i,s);return s&&s(w),w}};return U}function uc(t){if(Il(t))return t=us(t),t.children=null,t}function Ld(t){if(!Il(t))return km(t.type)&&t.children?Hm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Xe(n.default))return n.default()}}function Co(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Co(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gm(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Tt?(o.patchFlag&128&&s++,i=i.concat(Gm(o.children,e,a))):(e||o.type!==ln)&&i.push(a!=null?us(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ht(t,e){return Xe(t)?zt({name:t.name},e,{setup:t}):t}function Wm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function il(t,e,n,i,s=!1){if(ke(t)){t.forEach((v,g)=>il(v,e&&(ke(e)?e[g]:e),n,i,s));return}if(ro(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&il(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Nl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,u=e&&e.r,c=a.refs===gt?a.refs={}:a.refs,h=a.setupState,d=rt(h),p=h===gt?()=>!1:v=>ut(d,v);if(u!=null&&u!==l&&(Ct(u)?(c[u]=null,p(u)&&(h[u]=null)):jt(u)&&(u.value=null)),Xe(l))Go(l,a,12,[o,c]);else{const v=Ct(l),g=jt(l);if(v||g){const f=()=>{if(t.f){const m=v?p(l)?h[l]:c[l]:l.value;s?ke(m)&&Th(m,r):ke(m)?m.includes(r)||m.push(r):v?(c[l]=[r],p(l)&&(h[l]=c[l])):(l.value=[r],t.k&&(c[t.k]=l.value))}else v?(c[l]=o,p(l)&&(h[l]=o)):g&&(l.value=o,t.k&&(c[t.k]=o))};o?(f.id=-1,wn(f,n)):f()}}}Tl().requestIdleCallback;Tl().cancelIdleCallback;const ro=t=>!!t.type.__asyncLoader,Il=t=>t.type.__isKeepAlive;function Iy(t,e){Xm(t,"a",e)}function Dy(t,e){Xm(t,"da",e)}function Xm(t,e,n=Xt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Il(s.parent.vnode)&&Uy(i,e,n,s),s=s.parent}}function Uy(t,e,n,i){const s=Dl(e,t,i,!0);jm(()=>{Th(i[e],s)},n)}function Dl(t,e,n=Xt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ui();const a=Xo(n),l=Kn(e,n,t,o);return a(),Oi(),l});return i?s.unshift(r):s.push(r),r}}const zi=t=>(e,n=Xt)=>{(!Po||t==="sp")&&Dl(t,(...i)=>e(...i),n)},Oy=zi("bm"),pi=zi("m"),Ny=zi("bu"),Fy=zi("u"),$m=zi("bum"),jm=zi("um"),ky=zi("sp"),By=zi("rtg"),zy=zi("rtc");function Hy(t,e=Xt){Dl("ec",t,e)}const Vy="components";function qm(t,e){return Wy(Vy,t,!0,e)||t}const Gy=Symbol.for("v-ndc");function Wy(t,e,n=!0,i=!1){const s=fn||Xt;if(s){const r=s.type;{const a=PE(r,!1);if(a&&(a===e||a===On(e)||a===Sl(On(e))))return r}const o=Id(s[t]||r[t],e)||Id(s.appContext[t],e);return!o&&i?r:o}}function Id(t,e){return t&&(t[e]||t[On(e)]||t[Sl(On(e))])}function Ni(t,e,n,i){let s;const r=n,o=ke(t);if(o||Ct(t)){const a=o&&xr(t);let l=!1,u=!1;a&&(l=!Un(t),u=cs(t),t=Al(t)),s=new Array(t.length);for(let c=0,h=t.length;c<h;c++)s[c]=e(l?u?Qa(Gt(t[c])):Gt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=e(t[c],c,l,r)}}else s=[];return s}const ru=t=>t?mg(t)?Nl(t):ru(t.parent):null,oo=zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ru(t.parent),$root:t=>ru(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Km(t),$forceUpdate:t=>t.f||(t.f=()=>{Uh(t.update)}),$nextTick:t=>t.n||(t.n=Dh.bind(t.proxy)),$watch:t=>hE.bind(t)}),hc=(t,e)=>t!==gt&&!t.__isScriptSetup&&ut(t,e),Xy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(hc(i,e))return o[e]=1,i[e];if(s!==gt&&ut(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ut(u,e))return o[e]=3,r[e];if(n!==gt&&ut(n,e))return o[e]=4,n[e];ou&&(o[e]=0)}}const c=oo[e];let h,d;if(c)return e==="$attrs"&&en(t.attrs,"get",""),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==gt&&ut(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ut(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return hc(s,e)?(s[e]=n,!0):i!==gt&&ut(i,e)?(i[e]=n,!0):ut(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==gt&&ut(t,o)||hc(e,o)||(a=r[0])&&ut(a,o)||ut(i,o)||ut(oo,o)||ut(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ut(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dd(t){return ke(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ou=!0;function $y(t){const e=Km(t),n=t.proxy,i=t.ctx;ou=!1,e.beforeCreate&&Ud(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:g,deactivated:f,beforeDestroy:m,beforeUnmount:M,destroyed:b,unmounted:y,render:L,renderTracked:P,renderTriggered:A,errorCaptured:U,serverPrefetch:T,expose:w,inheritAttrs:I,components:F,directives:z,filters:Q}=e;if(u&&jy(u,i,null),o)for(const ne in o){const G=o[ne];Xe(G)&&(i[ne]=G.bind(n))}if(s){const ne=s.call(n,n);yt(ne)&&(t.data=Rl(ne))}if(ou=!0,r)for(const ne in r){const G=r[ne],ve=Xe(G)?G.bind(n,n):Xe(G.get)?G.get.bind(n,n):li,Me=!Xe(G)&&Xe(G.set)?G.set.bind(n):li,Re=Bt({get:ve,set:Me});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Re.value,set:De=>Re.value=De})}if(a)for(const ne in a)Ym(a[ne],i,n,ne);if(l){const ne=Xe(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(G=>{Oa(G,ne[G])})}c&&Ud(c,t,"c");function J(ne,G){ke(G)?G.forEach(ve=>ne(ve.bind(n))):G&&ne(G.bind(n))}if(J(Oy,h),J(pi,d),J(Ny,p),J(Fy,v),J(Iy,g),J(Dy,f),J(Hy,U),J(zy,P),J(By,A),J($m,M),J(jm,y),J(ky,T),ke(w))if(w.length){const ne=t.exposed||(t.exposed={});w.forEach(G=>{Object.defineProperty(ne,G,{get:()=>n[G],set:ve=>n[G]=ve})})}else t.exposed||(t.exposed={});L&&t.render===li&&(t.render=L),I!=null&&(t.inheritAttrs=I),F&&(t.components=F),z&&(t.directives=z),T&&Wm(t)}function jy(t,e,n=li){ke(t)&&(t=au(t));for(const i in t){const s=t[i];let r;yt(s)?"default"in s?r=qn(s.from||i,s.default,!0):r=qn(s.from||i):r=qn(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ud(t,e,n){Kn(ke(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ym(t,e,n,i){let s=i.includes(".")?cg(n,i):()=>n[i];if(Ct(t)){const r=e[t];Xe(r)&&un(s,r)}else if(Xe(t))un(s,t.bind(n));else if(yt(t))if(ke(t))t.forEach(r=>Ym(r,e,n,i));else{const r=Xe(t.handler)?t.handler.bind(n):e[t.handler];Xe(r)&&un(s,r,t)}}function Km(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(u=>sl(l,u,o,!0)),sl(l,e,o)),yt(e)&&r.set(e,l),l}function sl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&sl(t,r,n,!0),s&&s.forEach(o=>sl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=qy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qy={data:Od,props:Nd,emits:Nd,methods:Jr,computed:Jr,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Jr,directives:Jr,watch:Ky,provide:Od,inject:Yy};function Od(t,e){return e?t?function(){return zt(Xe(t)?t.call(this,this):t,Xe(e)?e.call(this,this):e)}:e:t}function Yy(t,e){return Jr(au(t),au(e))}function au(t){if(ke(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Jr(t,e){return t?zt(Object.create(null),t,e):e}function Nd(t,e){return t?ke(t)&&ke(e)?[...new Set([...t,...e])]:zt(Object.create(null),Dd(t),Dd(e??{})):e}function Ky(t,e){if(!t)return e;if(!e)return t;const n=zt(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function Zm(){return{app:null,config:{isNativeTag:Bx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zy=0;function Jy(t,e){return function(i,s=null){Xe(i)||(i=zt({},i)),s!=null&&!yt(s)&&(s=null);const r=Zm(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Zy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:IE,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(u,...h)):Xe(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,d){if(!l){const p=u._ceVNode||Qe(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,c,d),l=!0,u._container=c,c.__vue_app__=u,Nl(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Kn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=Mr;Mr=u;try{return c()}finally{Mr=h}}};return u}}let Mr=null;function Oa(t,e){if(Xt){let n=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===n&&(n=Xt.provides=Object.create(i)),n[t]=e}}function qn(t,e,n=!1){const i=Xt||fn;if(i||Mr){const s=Mr?Mr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Xe(e)?e.call(i&&i.proxy):e}}const Jm={},Qm=()=>Object.create(Jm),eg=t=>Object.getPrototypeOf(t)===Jm;function Qy(t,e,n,i=!1){const s={},r=Qm();t.propsDefaults=Object.create(null),tg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Cm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function eE(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=rt(s),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(Ul(t.emitsOptions,d))continue;const p=e[d];if(l)if(ut(r,d))p!==r[d]&&(r[d]=p,u=!0);else{const v=On(d);s[v]=lu(l,a,v,p,t,!1)}else p!==r[d]&&(r[d]=p,u=!0)}}}else{tg(t,e,s,r)&&(u=!0);let c;for(const h in a)(!e||!ut(e,h)&&((c=ms(h))===h||!ut(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(s[h]=lu(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ut(e,h))&&(delete r[h],u=!0)}u&&Ti(t.attrs,"set","")}function tg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const u=e[l];let c;s&&ut(s,c=On(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:Ul(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=rt(n),u=a||gt;for(let c=0;c<r.length;c++){const h=r[c];n[h]=lu(s,l,h,u[h],t,!ut(u,h))}}return o}function lu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const c=Xo(s);i=u[n]=l.call(null,e),c()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ms(n))&&(i=!0))}return i}const tE=new WeakMap;function ng(t,e,n=!1){const i=n?tE:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Xe(t)){const c=h=>{l=!0;const[d,p]=ng(h,e,!0);zt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!r&&!l)return yt(t)&&i.set(t,vr),vr;if(ke(r))for(let c=0;c<r.length;c++){const h=On(r[c]);Fd(h)&&(o[h]=gt)}else if(r)for(const c in r){const h=On(c);if(Fd(h)){const d=r[c],p=o[h]=ke(d)||Xe(d)?{type:d}:zt({},d),v=p.type;let g=!1,f=!0;if(ke(v))for(let m=0;m<v.length;++m){const M=v[m],b=Xe(M)&&M.name;if(b==="Boolean"){g=!0;break}else b==="String"&&(f=!1)}else g=Xe(v)&&v.name==="Boolean";p[0]=g,p[1]=f,(g||ut(p,"default"))&&a.push(h)}}const u=[o,a];return yt(t)&&i.set(t,u),u}function Fd(t){return t[0]!=="$"&&!no(t)}const Oh=t=>t[0]==="_"||t==="$stable",Nh=t=>ke(t)?t.map(ri):[ri(t)],nE=(t,e,n)=>{if(e._n)return e;const i=Wo((...s)=>Nh(e(...s)),n);return i._c=!1,i},ig=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Oh(s))continue;const r=t[s];if(Xe(r))e[s]=nE(s,r,i);else if(r!=null){const o=Nh(r);e[s]=()=>o}}},sg=(t,e)=>{const n=Nh(e);t.slots.default=()=>n},rg=(t,e,n)=>{for(const i in e)(n||!Oh(i))&&(t[i]=e[i])},iE=(t,e,n)=>{const i=t.slots=Qm();if(t.vnode.shapeFlag&32){const s=e._;s?(rg(i,e,n),n&&om(i,"_",s,!0)):ig(e,i)}else e&&sg(t,e)},sE=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:rg(s,e,n):(r=!e.$stable,ig(e,s)),o=e}else e&&(sg(t,e),o={default:1});if(r)for(const a in s)!Oh(a)&&o[a]==null&&delete s[a]},wn=_E;function rE(t){return oE(t)}function oE(t,e){const n=Tl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:p=li,insertStaticContent:v}=t,g=(C,R,x,ie=null,Y=null,X=null,ee=void 0,he=null,Z=!!R.dynamicChildren)=>{if(C===R)return;C&&!Is(C,R)&&(ie=O(C),De(C,Y,X,!0),C=null),R.patchFlag===-2&&(Z=!1,R.dynamicChildren=null);const{type:E,ref:_,shapeFlag:D}=R;switch(E){case Ol:f(C,R,x,ie);break;case ln:m(C,R,x,ie);break;case Na:C==null&&M(R,x,ie,ee);break;case Tt:F(C,R,x,ie,Y,X,ee,he,Z);break;default:D&1?L(C,R,x,ie,Y,X,ee,he,Z):D&6?z(C,R,x,ie,Y,X,ee,he,Z):(D&64||D&128)&&E.process(C,R,x,ie,Y,X,ee,he,Z,ue)}_!=null&&Y&&il(_,C&&C.ref,X,R||C,!R)},f=(C,R,x,ie)=>{if(C==null)i(R.el=a(R.children),x,ie);else{const Y=R.el=C.el;R.children!==C.children&&u(Y,R.children)}},m=(C,R,x,ie)=>{C==null?i(R.el=l(R.children||""),x,ie):R.el=C.el},M=(C,R,x,ie)=>{[C.el,C.anchor]=v(C.children,R,x,ie,C.el,C.anchor)},b=({el:C,anchor:R},x,ie)=>{let Y;for(;C&&C!==R;)Y=d(C),i(C,x,ie),C=Y;i(R,x,ie)},y=({el:C,anchor:R})=>{let x;for(;C&&C!==R;)x=d(C),s(C),C=x;s(R)},L=(C,R,x,ie,Y,X,ee,he,Z)=>{R.type==="svg"?ee="svg":R.type==="math"&&(ee="mathml"),C==null?P(R,x,ie,Y,X,ee,he,Z):T(C,R,Y,X,ee,he,Z)},P=(C,R,x,ie,Y,X,ee,he)=>{let Z,E;const{props:_,shapeFlag:D,transition:H,dirs:$}=C;if(Z=C.el=o(C.type,X,_&&_.is,_),D&8?c(Z,C.children):D&16&&U(C.children,Z,null,ie,Y,dc(C,X),ee,he),$&&xs(C,null,ie,"created"),A(Z,C,C.scopeId,ee,ie),_){for(const ge in _)ge!=="value"&&!no(ge)&&r(Z,ge,null,_[ge],X,ie);"value"in _&&r(Z,"value",null,_.value,X),(E=_.onVnodeBeforeMount)&&ei(E,ie,C)}$&&xs(C,null,ie,"beforeMount");const W=aE(Y,H);W&&H.beforeEnter(Z),i(Z,R,x),((E=_&&_.onVnodeMounted)||W||$)&&wn(()=>{E&&ei(E,ie,C),W&&H.enter(Z),$&&xs(C,null,ie,"mounted")},Y)},A=(C,R,x,ie,Y)=>{if(x&&p(C,x),ie)for(let X=0;X<ie.length;X++)p(C,ie[X]);if(Y){let X=Y.subTree;if(R===X||hg(X.type)&&(X.ssContent===R||X.ssFallback===R)){const ee=Y.vnode;A(C,ee,ee.scopeId,ee.slotScopeIds,Y.parent)}}},U=(C,R,x,ie,Y,X,ee,he,Z=0)=>{for(let E=Z;E<C.length;E++){const _=C[E]=he?Ji(C[E]):ri(C[E]);g(null,_,R,x,ie,Y,X,ee,he)}},T=(C,R,x,ie,Y,X,ee)=>{const he=R.el=C.el;let{patchFlag:Z,dynamicChildren:E,dirs:_}=R;Z|=C.patchFlag&16;const D=C.props||gt,H=R.props||gt;let $;if(x&&ys(x,!1),($=H.onVnodeBeforeUpdate)&&ei($,x,R,C),_&&xs(R,C,x,"beforeUpdate"),x&&ys(x,!0),(D.innerHTML&&H.innerHTML==null||D.textContent&&H.textContent==null)&&c(he,""),E?w(C.dynamicChildren,E,he,x,ie,dc(R,Y),X):ee||G(C,R,he,null,x,ie,dc(R,Y),X,!1),Z>0){if(Z&16)I(he,D,H,x,Y);else if(Z&2&&D.class!==H.class&&r(he,"class",null,H.class,Y),Z&4&&r(he,"style",D.style,H.style,Y),Z&8){const W=R.dynamicProps;for(let ge=0;ge<W.length;ge++){const de=W[ge],_e=D[de],Be=H[de];(Be!==_e||de==="value")&&r(he,de,_e,Be,Y,x)}}Z&1&&C.children!==R.children&&c(he,R.children)}else!ee&&E==null&&I(he,D,H,x,Y);(($=H.onVnodeUpdated)||_)&&wn(()=>{$&&ei($,x,R,C),_&&xs(R,C,x,"updated")},ie)},w=(C,R,x,ie,Y,X,ee)=>{for(let he=0;he<R.length;he++){const Z=C[he],E=R[he],_=Z.el&&(Z.type===Tt||!Is(Z,E)||Z.shapeFlag&70)?h(Z.el):x;g(Z,E,_,null,ie,Y,X,ee,!0)}},I=(C,R,x,ie,Y)=>{if(R!==x){if(R!==gt)for(const X in R)!no(X)&&!(X in x)&&r(C,X,R[X],null,Y,ie);for(const X in x){if(no(X))continue;const ee=x[X],he=R[X];ee!==he&&X!=="value"&&r(C,X,he,ee,Y,ie)}"value"in x&&r(C,"value",R.value,x.value,Y)}},F=(C,R,x,ie,Y,X,ee,he,Z)=>{const E=R.el=C?C.el:a(""),_=R.anchor=C?C.anchor:a("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:$}=R;$&&(he=he?he.concat($):$),C==null?(i(E,x,ie),i(_,x,ie),U(R.children||[],x,_,Y,X,ee,he,Z)):D>0&&D&64&&H&&C.dynamicChildren?(w(C.dynamicChildren,H,x,Y,X,ee,he),(R.key!=null||Y&&R===Y.subTree)&&og(C,R,!0)):G(C,R,x,_,Y,X,ee,he,Z)},z=(C,R,x,ie,Y,X,ee,he,Z)=>{R.slotScopeIds=he,C==null?R.shapeFlag&512?Y.ctx.activate(R,x,ie,ee,Z):Q(R,x,ie,Y,X,ee,Z):oe(C,R,Z)},Q=(C,R,x,ie,Y,X,ee)=>{const he=C.component=SE(C,ie,Y);if(Il(C)&&(he.ctx.renderer=ue),TE(he,!1,ee),he.asyncDep){if(Y&&Y.registerDep(he,J,ee),!C.el){const Z=he.subTree=Qe(ln);m(null,Z,R,x)}}else J(he,C,R,x,Y,X,ee)},oe=(C,R,x)=>{const ie=R.component=C.component;if(gE(C,R,x))if(ie.asyncDep&&!ie.asyncResolved){ne(ie,R,x);return}else ie.next=R,ie.update();else R.el=C.el,ie.vnode=R},J=(C,R,x,ie,Y,X,ee)=>{const he=()=>{if(C.isMounted){let{next:D,bu:H,u:$,parent:W,vnode:ge}=C;{const Ee=ag(C);if(Ee){D&&(D.el=ge.el,ne(C,D,ee)),Ee.asyncDep.then(()=>{C.isUnmounted||he()});return}}let de=D,_e;ys(C,!1),D?(D.el=ge.el,ne(C,D,ee)):D=ge,H&&Ua(H),(_e=D.props&&D.props.onVnodeBeforeUpdate)&&ei(_e,W,D,ge),ys(C,!0);const Be=Bd(C),fe=C.subTree;C.subTree=Be,g(fe,Be,h(fe.el),O(fe),C,Y,X),D.el=Be.el,de===null&&vE(C,Be.el),$&&wn($,Y),(_e=D.props&&D.props.onVnodeUpdated)&&wn(()=>ei(_e,W,D,ge),Y)}else{let D;const{el:H,props:$}=R,{bm:W,m:ge,parent:de,root:_e,type:Be}=C,fe=ro(R);ys(C,!1),W&&Ua(W),!fe&&(D=$&&$.onVnodeBeforeMount)&&ei(D,de,R),ys(C,!0);{_e.ce&&_e.ce._injectChildStyle(Be);const Ee=C.subTree=Bd(C);g(null,Ee,x,ie,C,Y,X),R.el=Ee.el}if(ge&&wn(ge,Y),!fe&&(D=$&&$.onVnodeMounted)){const Ee=R;wn(()=>ei(D,de,Ee),Y)}(R.shapeFlag&256||de&&ro(de.vnode)&&de.vnode.shapeFlag&256)&&C.a&&wn(C.a,Y),C.isMounted=!0,R=x=ie=null}};C.scope.on();const Z=C.effect=new dm(he);C.scope.off();const E=C.update=Z.run.bind(Z),_=C.job=Z.runIfDirty.bind(Z);_.i=C,_.id=C.uid,Z.scheduler=()=>Uh(_),ys(C,!0),E()},ne=(C,R,x)=>{R.component=C;const ie=C.vnode.props;C.vnode=R,C.next=null,eE(C,R.props,ie,x),sE(C,R.children,x),Ui(),Pd(C),Oi()},G=(C,R,x,ie,Y,X,ee,he,Z=!1)=>{const E=C&&C.children,_=C?C.shapeFlag:0,D=R.children,{patchFlag:H,shapeFlag:$}=R;if(H>0){if(H&128){Me(E,D,x,ie,Y,X,ee,he,Z);return}else if(H&256){ve(E,D,x,ie,Y,X,ee,he,Z);return}}$&8?(_&16&&we(E,Y,X),D!==E&&c(x,D)):_&16?$&16?Me(E,D,x,ie,Y,X,ee,he,Z):we(E,Y,X,!0):(_&8&&c(x,""),$&16&&U(D,x,ie,Y,X,ee,he,Z))},ve=(C,R,x,ie,Y,X,ee,he,Z)=>{C=C||vr,R=R||vr;const E=C.length,_=R.length,D=Math.min(E,_);let H;for(H=0;H<D;H++){const $=R[H]=Z?Ji(R[H]):ri(R[H]);g(C[H],$,x,null,Y,X,ee,he,Z)}E>_?we(C,Y,X,!0,!1,D):U(R,x,ie,Y,X,ee,he,Z,D)},Me=(C,R,x,ie,Y,X,ee,he,Z)=>{let E=0;const _=R.length;let D=C.length-1,H=_-1;for(;E<=D&&E<=H;){const $=C[E],W=R[E]=Z?Ji(R[E]):ri(R[E]);if(Is($,W))g($,W,x,null,Y,X,ee,he,Z);else break;E++}for(;E<=D&&E<=H;){const $=C[D],W=R[H]=Z?Ji(R[H]):ri(R[H]);if(Is($,W))g($,W,x,null,Y,X,ee,he,Z);else break;D--,H--}if(E>D){if(E<=H){const $=H+1,W=$<_?R[$].el:ie;for(;E<=H;)g(null,R[E]=Z?Ji(R[E]):ri(R[E]),x,W,Y,X,ee,he,Z),E++}}else if(E>H)for(;E<=D;)De(C[E],Y,X,!0),E++;else{const $=E,W=E,ge=new Map;for(E=W;E<=H;E++){const xe=R[E]=Z?Ji(R[E]):ri(R[E]);xe.key!=null&&ge.set(xe.key,E)}let de,_e=0;const Be=H-W+1;let fe=!1,Ee=0;const Ie=new Array(Be);for(E=0;E<Be;E++)Ie[E]=0;for(E=$;E<=D;E++){const xe=C[E];if(_e>=Be){De(xe,Y,X,!0);continue}let Ge;if(xe.key!=null)Ge=ge.get(xe.key);else for(de=W;de<=H;de++)if(Ie[de-W]===0&&Is(xe,R[de])){Ge=de;break}Ge===void 0?De(xe,Y,X,!0):(Ie[Ge-W]=E+1,Ge>=Ee?Ee=Ge:fe=!0,g(xe,R[Ge],x,null,Y,X,ee,he,Z),_e++)}const ze=fe?lE(Ie):vr;for(de=ze.length-1,E=Be-1;E>=0;E--){const xe=W+E,Ge=R[xe],$e=xe+1<_?R[xe+1].el:ie;Ie[E]===0?g(null,Ge,x,$e,Y,X,ee,he,Z):fe&&(de<0||E!==ze[de]?Re(Ge,x,$e,2):de--)}}},Re=(C,R,x,ie,Y=null)=>{const{el:X,type:ee,transition:he,children:Z,shapeFlag:E}=C;if(E&6){Re(C.component.subTree,R,x,ie);return}if(E&128){C.suspense.move(R,x,ie);return}if(E&64){ee.move(C,R,x,ue);return}if(ee===Tt){i(X,R,x);for(let D=0;D<Z.length;D++)Re(Z[D],R,x,ie);i(C.anchor,R,x);return}if(ee===Na){b(C,R,x);return}if(ie!==2&&E&1&&he)if(ie===0)he.beforeEnter(X),i(X,R,x),wn(()=>he.enter(X),Y);else{const{leave:D,delayLeave:H,afterLeave:$}=he,W=()=>{C.ctx.isUnmounted?s(X):i(X,R,x)},ge=()=>{D(X,()=>{W(),$&&$()})};H?H(X,W,ge):ge()}else i(X,R,x)},De=(C,R,x,ie=!1,Y=!1)=>{const{type:X,props:ee,ref:he,children:Z,dynamicChildren:E,shapeFlag:_,patchFlag:D,dirs:H,cacheIndex:$}=C;if(D===-2&&(Y=!1),he!=null&&(Ui(),il(he,null,x,C,!0),Oi()),$!=null&&(R.renderCache[$]=void 0),_&256){R.ctx.deactivate(C);return}const W=_&1&&H,ge=!ro(C);let de;if(ge&&(de=ee&&ee.onVnodeBeforeUnmount)&&ei(de,R,C),_&6)me(C.component,x,ie);else{if(_&128){C.suspense.unmount(x,ie);return}W&&xs(C,null,R,"beforeUnmount"),_&64?C.type.remove(C,R,x,ue,ie):E&&!E.hasOnce&&(X!==Tt||D>0&&D&64)?we(E,R,x,!1,!0):(X===Tt&&D&384||!Y&&_&16)&&we(Z,R,x),ie&&tt(C)}(ge&&(de=ee&&ee.onVnodeUnmounted)||W)&&wn(()=>{de&&ei(de,R,C),W&&xs(C,null,R,"unmounted")},x)},tt=C=>{const{type:R,el:x,anchor:ie,transition:Y}=C;if(R===Tt){se(x,ie);return}if(R===Na){y(C);return}const X=()=>{s(x),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(C.shapeFlag&1&&Y&&!Y.persisted){const{leave:ee,delayLeave:he}=Y,Z=()=>ee(x,X);he?he(C.el,X,Z):Z()}else X()},se=(C,R)=>{let x;for(;C!==R;)x=d(C),s(C),C=x;s(R)},me=(C,R,x)=>{const{bum:ie,scope:Y,job:X,subTree:ee,um:he,m:Z,a:E,parent:_,slots:{__:D}}=C;kd(Z),kd(E),ie&&Ua(ie),_&&ke(D)&&D.forEach(H=>{_.renderCache[H]=void 0}),Y.stop(),X&&(X.flags|=8,De(ee,C,R,x)),he&&wn(he,R),wn(()=>{C.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},we=(C,R,x,ie=!1,Y=!1,X=0)=>{for(let ee=X;ee<C.length;ee++)De(C[ee],R,x,ie,Y)},O=C=>{if(C.shapeFlag&6)return O(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const R=d(C.anchor||C.el),x=R&&R[Cy];return x?d(x):R};let re=!1;const ce=(C,R,x)=>{C==null?R._vnode&&De(R._vnode,null,null,!0):g(R._vnode||null,C,R,null,null,null,x),R._vnode=C,re||(re=!0,Pd(),Om(),re=!1)},ue={p:g,um:De,m:Re,r:tt,mt:Q,mc:U,pc:G,pbc:w,n:O,o:t};return{render:ce,hydrate:void 0,createApp:Jy(ce)}}function dc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ys({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function aE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function og(t,e,n=!1){const i=t.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ji(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&og(o,a)),a.type===Ol&&(a.el=o.el),a.type===ln&&!a.el&&(a.el=o.el)}}function lE(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ag(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ag(e)}function kd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cE=Symbol.for("v-scx"),uE=()=>qn(cE);function un(t,e,n){return lg(t,e,n)}function lg(t,e,n=gt){const{immediate:i,deep:s,flush:r,once:o}=n,a=zt({},n),l=e&&i||!e&&r!=="post";let u;if(Po){if(r==="sync"){const p=uE();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=li,p.resume=li,p.pause=li,p}}const c=Xt;a.call=(p,v,g)=>Kn(p,c,v,g);let h=!1;r==="post"?a.scheduler=p=>{wn(p,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,v)=>{v?p():Uh(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=wy(t,e,a);return Po&&(u?u.push(d):l&&d()),d}function hE(t,e,n){const i=this.proxy,s=Ct(t)?t.includes(".")?cg(i,t):()=>i[t]:t.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,n=e);const o=Xo(this),a=lg(s,r.bind(i),n);return o(),a}function cg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const dE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${On(e)}Modifiers`]||t[`${ms(e)}Modifiers`];function fE(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||gt;let s=n;const r=e.startsWith("update:"),o=r&&dE(i,e.slice(7));o&&(o.trim&&(s=n.map(c=>Ct(c)?c.trim():c)),o.number&&(s=n.map(Qc)));let a,l=i[a=rc(e)]||i[a=rc(On(e))];!l&&r&&(l=i[a=rc(ms(e))]),l&&Kn(l,t,6,s);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Kn(u,t,6,s)}}function ug(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Xe(t)){const l=u=>{const c=ug(u,e,!0);c&&(a=!0,zt(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(yt(t)&&i.set(t,null),null):(ke(r)?r.forEach(l=>o[l]=null):zt(o,r),yt(t)&&i.set(t,o),o)}function Ul(t,e){return!t||!Ml(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(t,e[0].toLowerCase()+e.slice(1))||ut(t,ms(e))||ut(t,e))}function Bd(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:d,setupState:p,ctx:v,inheritAttrs:g}=t,f=nl(t);let m,M;try{if(n.shapeFlag&4){const y=s||i,L=y;m=ri(u.call(L,y,c,h,p,d,v)),M=a}else{const y=e;m=ri(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),M=e.props?a:pE(a)}}catch(y){ao.length=0,Ll(y,t,1),m=Qe(ln)}let b=m;if(M&&g!==!1){const y=Object.keys(M),{shapeFlag:L}=b;y.length&&L&7&&(r&&y.some(Sh)&&(M=mE(M,r)),b=us(b,M,!1,!0))}return n.dirs&&(b=us(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Co(b,n.transition),m=b,nl(f),m}const pE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ml(n))&&((e||(e={}))[n]=t[n]);return e},mE=(t,e)=>{const n={};for(const i in t)(!Sh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function gE(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?zd(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==i[d]&&!Ul(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zd(i,o,u):!0:!!o;return!1}function zd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ul(n,r))return!0}return!1}function vE({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const hg=t=>t.__isSuspense;function _E(t,e){e&&e.pendingBranch?ke(t)?e.effects.push(...t):e.effects.push(t):Ty(t)}const Tt=Symbol.for("v-fgt"),Ol=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),ao=[];let bn=null;function Le(t=!1){ao.push(bn=t?null:[])}function xE(){ao.pop(),bn=ao[ao.length-1]||null}let Ro=1;function Hd(t,e=!1){Ro+=t,t<0&&bn&&e&&(bn.hasOnce=!0)}function dg(t){return t.dynamicChildren=Ro>0?bn||vr:null,xE(),Ro>0&&bn&&bn.push(t),t}function He(t,e,n,i,s,r){return dg(ae(t,e,n,i,s,r,!0))}function Os(t,e,n,i,s){return dg(Qe(t,e,n,i,s,!0))}function rl(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const fg=({key:t})=>t??null,Fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||jt(t)||Xe(t)?{i:fn,r:t,k:e,f:!!n}:t:null);function ae(t,e=null,n=null,i=0,s=null,r=t===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fg(e),ref:e&&Fa(e),scopeId:Fm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Fh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),Ro>0&&!o&&bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&bn.push(l),l}const Qe=yE;function yE(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Gy)&&(t=ln),rl(t)){const a=us(t,e,!0);return n&&Fh(a,n),Ro>0&&!r&&bn&&(a.shapeFlag&6?bn[bn.indexOf(t)]=a:bn.push(a)),a.patchFlag=-2,a}if(LE(t)&&(t=t.__vccOpts),e){e=EE(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=ci(a)),yt(l)&&(Ih(l)&&!ke(l)&&(l=zt({},l)),e.style=Tr(l))}const o=Ct(t)?1:hg(t)?128:km(t)?64:yt(t)?4:Xe(t)?2:0;return ae(t,e,n,i,s,o,r,!0)}function EE(t){return t?Ih(t)||eg(t)?zt({},t):t:null}function us(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,u=e?ME(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&fg(u),ref:e&&e.ref?n&&r?ke(r)?r.concat(Fa(e)):[r,Fa(e)]:Fa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Co(c,l.clone(c)),c}function Xn(t=" ",e=0){return Qe(Ol,null,t,e)}function pg(t,e){const n=Qe(Na,null,t);return n.staticCount=e,n}function ui(t="",e=!1){return e?(Le(),Os(ln,null,t)):Qe(ln,null,t)}function ri(t){return t==null||typeof t=="boolean"?Qe(ln):ke(t)?Qe(Tt,null,t.slice()):rl(t)?Ji(t):Qe(Ol,null,String(t))}function Ji(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Fh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ke(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!eg(e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:fn},n=32):(e=String(e),i&64?(n=16,e=[Xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ME(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ci([e.class,i.class]));else if(s==="style")e.style=Tr([e.style,i.style]);else if(Ml(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ei(t,e,n,i=null){Kn(t,e,7,[n,i])}const wE=Zm();let bE=0;function SE(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wE,r={uid:bE++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ng(i,s),emitsOptions:ug(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fE.bind(null,r),t.ce&&t.ce(r),r}let Xt=null;const kh=()=>Xt||fn;let ol,cu;{const t=Tl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ol=e("__VUE_INSTANCE_SETTERS__",n=>Xt=n),cu=e("__VUE_SSR_SETTERS__",n=>Po=n)}const Xo=t=>{const e=Xt;return ol(t),t.scope.on(),()=>{t.scope.off(),ol(e)}},Vd=()=>{Xt&&Xt.scope.off(),ol(null)};function mg(t){return t.vnode.shapeFlag&4}let Po=!1;function TE(t,e=!1,n=!1){e&&cu(e);const{props:i,children:s}=t.vnode,r=mg(t);Qy(t,i,r,e),iE(t,s,n||e);const o=r?AE(t,e):void 0;return e&&cu(!1),o}function AE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xy);const{setup:i}=n;if(i){Ui();const s=t.setupContext=i.length>1?RE(t):null,r=Xo(t),o=Go(i,t,0,[t.props,s]),a=im(o);if(Oi(),r(),(a||t.sp)&&!ro(t)&&Wm(t),a){if(o.then(Vd,Vd),e)return o.then(l=>{Gd(t,l)}).catch(l=>{Ll(l,t,0)});t.asyncDep=o}else Gd(t,o)}else gg(t)}function Gd(t,e,n){Xe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=Im(e)),gg(t)}function gg(t,e,n){const i=t.type;t.render||(t.render=i.render||li);{const s=Xo(t);Ui();try{$y(t)}finally{Oi(),s()}}}const CE={get(t,e){return en(t,"get",""),t[e]}};function RE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,CE),slots:t.slots,emit:t.emit,expose:e}}function Nl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Im(Pm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)},has(e,n){return n in e||n in oo}})):t.proxy}function PE(t,e=!0){return Xe(t)?t.displayName||t.name:t.name||e&&t.__name}function LE(t){return Xe(t)&&"__vccOpts"in t}const Bt=(t,e)=>Ey(t,e,Po);function Bh(t,e,n){const i=arguments.length;return i===2?yt(e)&&!ke(e)?rl(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&rl(n)&&(n=[n]),Qe(t,e,n))}const IE="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uu;const Wd=typeof window<"u"&&window.trustedTypes;if(Wd)try{uu=Wd.createPolicy("vue",{createHTML:t=>t})}catch{}const vg=uu?t=>uu.createHTML(t):t=>t,DE="http://www.w3.org/2000/svg",UE="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,Xd=Si&&Si.createElement("template"),OE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Si.createElementNS(DE,t):e==="mathml"?Si.createElementNS(UE,t):n?Si.createElement(t,{is:n}):Si.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Xd.innerHTML=vg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Xd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hi="transition",Gr="animation",Lo=Symbol("_vtc"),_g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},NE=zt({},Bm,_g),FE=t=>(t.displayName="Transition",t.props=NE,t),zh=FE((t,{slots:e})=>Bh(Ly,kE(t),e)),Es=(t,e=[])=>{ke(t)?t.forEach(n=>n(...e)):t&&t(...e)},$d=t=>t?ke(t)?t.some(e=>e.length>1):t.length>1:!1;function kE(t){const e={};for(const F in t)F in _g||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,v=BE(s),g=v&&v[0],f=v&&v[1],{onBeforeEnter:m,onEnter:M,onEnterCancelled:b,onLeave:y,onLeaveCancelled:L,onBeforeAppear:P=m,onAppear:A=M,onAppearCancelled:U=b}=e,T=(F,z,Q,oe)=>{F._enterCancelled=oe,Ms(F,z?c:a),Ms(F,z?u:o),Q&&Q()},w=(F,z)=>{F._isLeaving=!1,Ms(F,h),Ms(F,p),Ms(F,d),z&&z()},I=F=>(z,Q)=>{const oe=F?A:M,J=()=>T(z,F,Q);Es(oe,[z,J]),jd(()=>{Ms(z,F?l:r),vi(z,F?c:a),$d(oe)||qd(z,i,g,J)})};return zt(e,{onBeforeEnter(F){Es(m,[F]),vi(F,r),vi(F,o)},onBeforeAppear(F){Es(P,[F]),vi(F,l),vi(F,u)},onEnter:I(!1),onAppear:I(!0),onLeave(F,z){F._isLeaving=!0;const Q=()=>w(F,z);vi(F,h),F._enterCancelled?(vi(F,d),Zd()):(Zd(),vi(F,d)),jd(()=>{F._isLeaving&&(Ms(F,h),vi(F,p),$d(y)||qd(F,i,f,Q))}),Es(y,[F,Q])},onEnterCancelled(F){T(F,!1,void 0,!0),Es(b,[F])},onAppearCancelled(F){T(F,!0,void 0,!0),Es(U,[F])},onLeaveCancelled(F){w(F),Es(L,[F])}})}function BE(t){if(t==null)return null;if(yt(t))return[fc(t.enter),fc(t.leave)];{const e=fc(t);return[e,e]}}function fc(t){return Wx(t)}function vi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Lo]||(t[Lo]=new Set)).add(e)}function Ms(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Lo];n&&(n.delete(e),n.size||(t[Lo]=void 0))}function jd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zE=0;function qd(t,e,n,i){const s=t._endId=++zE,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=HE(t,e);if(!o)return i();const u=o+"end";let c=0;const h=()=>{t.removeEventListener(u,d),r()},d=p=>{p.target===t&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),t.addEventListener(u,d)}function HE(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),s=i(`${Hi}Delay`),r=i(`${Hi}Duration`),o=Yd(s,r),a=i(`${Gr}Delay`),l=i(`${Gr}Duration`),u=Yd(a,l);let c=null,h=0,d=0;e===Hi?o>0&&(c=Hi,h=o,d=r.length):e===Gr?u>0&&(c=Gr,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?Hi:Gr:null,d=c?c===Hi?r.length:l.length:0);const p=c===Hi&&/\b(transform|all)(,|$)/.test(i(`${Hi}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:p}}function Yd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Kd(n)+Kd(t[i])))}function Kd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Zd(){return document.body.offsetHeight}function VE(t,e,n){const i=t[Lo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jd=Symbol("_vod"),GE=Symbol("_vsh"),WE=Symbol(""),XE=/(^|;)\s*display\s*:/;function $E(t,e,n){const i=t.style,s=Ct(n);let r=!1;if(n&&!s){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ka(i,a,"")}else for(const o in e)n[o]==null&&ka(i,o,"");for(const o in n)o==="display"&&(r=!0),ka(i,o,n[o])}else if(s){if(e!==n){const o=i[WE];o&&(n+=";"+o),i.cssText=n,r=XE.test(n)}}else e&&t.removeAttribute("style");Jd in t&&(t[Jd]=r?i.display:"",t[GE]&&(i.display="none"))}const Qd=/\s*!important$/;function ka(t,e,n){if(ke(n))n.forEach(i=>ka(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=jE(t,e);Qd.test(n)?t.setProperty(ms(i),n.replace(Qd,""),"important"):t[i]=n}}const ef=["Webkit","Moz","ms"],pc={};function jE(t,e){const n=pc[e];if(n)return n;let i=On(e);if(i!=="filter"&&i in t)return pc[e]=i;i=Sl(i);for(let s=0;s<ef.length;s++){const r=ef[s]+i;if(r in t)return pc[e]=r}return e}const tf="http://www.w3.org/1999/xlink";function nf(t,e,n,i,s,r=Kx(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(tf,e.slice(6,e.length)):t.setAttributeNS(tf,e,n):n==null||r&&!am(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ps(n)?String(n):n)}function sf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=am(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ur(t,e,n,i){t.addEventListener(e,n,i)}function qE(t,e,n,i){t.removeEventListener(e,n,i)}const rf=Symbol("_vei");function YE(t,e,n,i,s=null){const r=t[rf]||(t[rf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=KE(e);if(i){const u=r[e]=QE(i,s);ur(t,a,u,l)}else o&&(qE(t,a,o,l),r[e]=void 0)}}const of=/(?:Once|Passive|Capture)$/;function KE(t){let e;if(of.test(t)){e={};let i;for(;i=t.match(of);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ms(t.slice(2)),e]}let mc=0;const ZE=Promise.resolve(),JE=()=>mc||(ZE.then(()=>mc=0),mc=Date.now());function QE(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Kn(eM(i,n.value),e,5,[i])};return n.value=t,n.attached=JE(),n}function eM(t,e){if(ke(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const af=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tM=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?VE(t,i,o):e==="style"?$E(t,n,i):Ml(e)?Sh(e)||YE(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nM(t,e,i,o))?(sf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?sf(t,On(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),nf(t,e,i,o))};function nM(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&af(e)&&Xe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return af(e)&&Ct(n)?!1:e in t}const lf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ke(e)?n=>Ua(e,n):e};function iM(t){t.target.composing=!0}function cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gc=Symbol("_assign"),sM={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[gc]=lf(s);const r=i||s.props&&s.props.type==="number";ur(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Qc(a)),t[gc](a)}),n&&ur(t,"change",()=>{t.value=t.value.trim()}),e||(ur(t,"compositionstart",iM),ur(t,"compositionend",cf),ur(t,"change",cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[gc]=lf(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Qc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},rM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oM=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=ms(s.key);if(e.some(o=>o===r||rM[o]===r))return t(s)})},aM=zt({patchProp:tM},OE);let uf;function lM(){return uf||(uf=rE(aM))}const cM=(...t)=>{const e=lM().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=hM(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,uM(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function uM(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hM(t){return Ct(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const dM=Symbol();var hf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hf||(hf={}));function fM(){const t=Zx(!0),e=t.run(()=>vt({}));let n=[],i=[];const s=Pm({install(r){s._a=r,r.provide(dM,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hr=typeof document<"u";function xg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xg(t.default)}const ct=Object.assign;function vc(t,e){const n={};for(const i in e){const s=e[i];n[i]=Zn(s)?s.map(t):t(s)}return n}const lo=()=>{},Zn=Array.isArray,yg=/#/g,mM=/&/g,gM=/\//g,vM=/=/g,_M=/\?/g,Eg=/\+/g,xM=/%5B/g,yM=/%5D/g,Mg=/%5E/g,EM=/%60/g,wg=/%7B/g,MM=/%7C/g,bg=/%7D/g,wM=/%20/g;function Hh(t){return encodeURI(""+t).replace(MM,"|").replace(xM,"[").replace(yM,"]")}function bM(t){return Hh(t).replace(wg,"{").replace(bg,"}").replace(Mg,"^")}function hu(t){return Hh(t).replace(Eg,"%2B").replace(wM,"+").replace(yg,"%23").replace(mM,"%26").replace(EM,"`").replace(wg,"{").replace(bg,"}").replace(Mg,"^")}function SM(t){return hu(t).replace(vM,"%3D")}function TM(t){return Hh(t).replace(yg,"%23").replace(_M,"%3F")}function AM(t){return t==null?"":TM(t).replace(gM,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const CM=/\/$/,RM=t=>t.replace(CM,"");function _c(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=DM(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Io(o)}}function PM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LM(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ar(e.matched[i],n.matched[s])&&Sg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IM(t[n],e[n]))return!1;return!0}function IM(t,e){return Zn(t)?ff(t,e):Zn(e)?ff(e,t):t===e}function ff(t,e){return Zn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function DM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Do;(function(t){t.pop="pop",t.push="push"})(Do||(Do={}));var co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(co||(co={}));function UM(t){if(!t)if(hr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RM(t)}const OM=/^[^#]+#/;function NM(t,e){return t.replace(OM,"#")+e}function FM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Fl=()=>({left:window.scrollX,top:window.scrollY});function kM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=FM(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pf(t,e){return(history.state?history.state.position-e:-1)+t}const du=new Map;function BM(t,e){du.set(t,e)}function zM(t){const e=du.get(t);return du.delete(t),e}let HM=()=>location.protocol+"//"+location.host;function Tg(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),df(l,"")}return df(n,t)+i+s}function VM(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=Tg(t,location),v=n.value,g=e.value;let f=0;if(d){if(n.value=p,e.value=d,o&&o===v){o=null;return}f=g?d.position-g.position:0}else i(p);s.forEach(m=>{m(n.value,v,{delta:f,type:Do.pop,direction:f?f>0?co.forward:co.back:co.unknown})})};function l(){o=n.value}function u(d){s.push(d);const p=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return r.push(p),p}function c(){const{history:d}=window;d.state&&d.replaceState(ct({},d.state,{scroll:Fl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function mf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Fl():null}}function GM(t){const{history:e,location:n}=window,i={value:Tg(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:HM()+t+l;try{e[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[c?"replace":"assign"](d)}}function o(l,u){const c=ct({},e.state,mf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});r(l,c,!0),i.value=l}function a(l,u){const c=ct({},s.value,e.state,{forward:l,scroll:Fl()});r(c.current,c,!0);const h=ct({},mf(i.value,l,null),{position:c.position+1},u);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function WM(t){t=UM(t);const e=GM(t),n=VM(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ct({location:"",base:t,go:i,createHref:NM.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),WM(t)}function $M(t){return typeof t=="string"||t&&typeof t=="object"}function Ag(t){return typeof t=="string"||typeof t=="symbol"}const Cg=Symbol("");var gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gf||(gf={}));function Cr(t,e){return ct(new Error,{type:t,[Cg]:!0},e)}function _i(t,e){return t instanceof Error&&Cg in t&&(e==null||!!(t.type&e))}const vf="[^/]+?",jM={sensitive:!1,strict:!1,start:!0,end:!0},qM=/[.+*?^${}()[\]/\\]/g;function YM(t,e){const n=ct({},jM,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(qM,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:g,optional:f,regexp:m}=d;r.push({name:v,repeatable:g,optional:f});const M=m||vf;if(M!==vf){p+=10;try{new RegExp(`(${M})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+y.message)}}let b=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(b=f&&u.length<2?`(?:/${b})`:"/"+b),f&&(b+="?"),s+=b,p+=20,f&&(p+=-8),g&&(p+=-20),M===".*"&&(p+=-50)}c.push(p)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let d=1;d<c.length;d++){const p=c[d]||"",v=r[d-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function l(u){let c="",h=!1;for(const d of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const p of d)if(p.type===0)c+=p.value;else if(p.type===1){const{value:v,repeatable:g,optional:f}=p,m=v in u?u[v]:"";if(Zn(m)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Zn(m)?m.join("/"):m;if(!M)if(f)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);c+=M}}return c||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function KM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Rg(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=KM(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(_f(i))return 1;if(_f(s))return-1}return s.length-i.length}function _f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZM={type:0,value:""},JM=/[a-zA-Z0-9_]/;function QM(t){if(!t)return[[]];if(t==="/")return[[ZM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,u="",c="";function h(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:JM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function ew(t,e,n){const i=YM(QM(t.path),n),s=ct(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tw(t,e){const n=[],i=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,d,p){const v=!p,g=yf(h);g.aliasOf=p&&p.record;const f=Mf(e,h),m=[g];if("alias"in h){const y=typeof h.alias=="string"?[h.alias]:h.alias;for(const L of y)m.push(yf(ct({},g,{components:p?p.record.components:g.components,path:L,aliasOf:p?p.record:g})))}let M,b;for(const y of m){const{path:L}=y;if(d&&L[0]!=="/"){const P=d.record.path,A=P[P.length-1]==="/"?"":"/";y.path=d.record.path+(L&&A+L)}if(M=ew(y,d,f),p?p.alias.push(M):(b=b||M,b!==M&&b.alias.push(M),v&&h.name&&!Ef(M)&&o(h.name)),Pg(M)&&l(M),g.children){const P=g.children;for(let A=0;A<P.length;A++)r(P[A],M,p&&p.children[A])}p=p||M}return b?()=>{o(b)}:lo}function o(h){if(Ag(h)){const d=i.get(h);d&&(i.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=sw(h,n);n.splice(d,0,h),h.record.name&&!Ef(h)&&i.set(h.record.name,h)}function u(h,d){let p,v={},g,f;if("name"in h&&h.name){if(p=i.get(h.name),!p)throw Cr(1,{location:h});f=p.record.name,v=ct(xf(d.params,p.keys.filter(b=>!b.optional).concat(p.parent?p.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),h.params&&xf(h.params,p.keys.map(b=>b.name))),g=p.stringify(v)}else if(h.path!=null)g=h.path,p=n.find(b=>b.re.test(g)),p&&(v=p.parse(g),f=p.record.name);else{if(p=d.name?i.get(d.name):n.find(b=>b.re.test(d.path)),!p)throw Cr(1,{location:h,currentLocation:d});f=p.record.name,v=ct({},d.params,h.params),g=p.stringify(v)}const m=[];let M=p;for(;M;)m.unshift(M.record),M=M.parent;return{name:f,path:g,params:v,matched:m,meta:iw(m)}}t.forEach(h=>r(h));function c(){n.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function xf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function yf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:nw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function nw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iw(t){return t.reduce((e,n)=>ct(e,n.meta),{})}function Mf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function sw(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Rg(t,e[r])<0?i=r:n=r+1}const s=rw(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function rw(t){let e=t;for(;e=e.parent;)if(Pg(e)&&Rg(t,e)===0)return e}function Pg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ow(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Eg," "),o=r.indexOf("="),a=Io(o<0?r:r.slice(0,o)),l=o<0?null:Io(r.slice(o+1));if(a in e){let u=e[a];Zn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function wf(t){let e="";for(let n in t){const i=t[n];if(n=SM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zn(i)?i.map(r=>r&&hu(r)):[i&&hu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function aw(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Zn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const lw=Symbol(""),bf=Symbol(""),kl=Symbol(""),Vh=Symbol(""),fu=Symbol("");function Wr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=d=>{d===!1?l(Cr(4,{from:n,to:e})):d instanceof Error?l(d):$M(d)?l(Cr(2,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},c=r(()=>t.call(i&&i.instances[s],e,n,u));let h=Promise.resolve(c);t.length<3&&(h=h.then(u)),h.catch(d=>l(d))})}function xc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xg(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Qi(c,n,i,o,a,s))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=pM(c)?c.default:c;o.mods[a]=c,o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&Qi(p,n,i,o,a,s)()}))}}return r}function Sf(t){const e=qn(kl),n=qn(Vh),i=Bt(()=>{const l=Li(t.to);return e.resolve(l)}),s=Bt(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const d=h.findIndex(Ar.bind(null,c));if(d>-1)return d;const p=Tf(l[u-2]);return u>1&&Tf(c)===p&&h[h.length-1].path!==p?h.findIndex(Ar.bind(null,l[u-2])):d}),r=Bt(()=>s.value>-1&&fw(n.params,i.value.params)),o=Bt(()=>s.value>-1&&s.value===n.matched.length-1&&Sg(n.params,i.value.params));function a(l={}){if(dw(l)){const u=e[Li(t.replace)?"replace":"push"](Li(t.to)).catch(lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Bt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function cw(t){return t.length===1?t[0]:t}const uw=Ht({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sf,setup(t,{slots:e}){const n=Rl(Sf(t)),{options:i}=qn(kl),s=Bt(()=>({[Af(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Af(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&cw(e.default(n));return t.custom?r:Bh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),hw=uw;function dw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fw(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Zn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Af=(t,e,n)=>t??e??n,pw=Ht({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=qn(fu),s=Bt(()=>t.route||i.value),r=qn(bf,0),o=Bt(()=>{let u=Li(r);const{matched:c}=s.value;let h;for(;(h=c[u])&&!h.components;)u++;return u}),a=Bt(()=>s.value.matched[o.value]);Oa(bf,Bt(()=>o.value+1)),Oa(lw,a),Oa(fu,s);const l=vt();return un(()=>[l.value,a.value,t.name],([u,c,h],[d,p,v])=>{c&&(c.instances[h]=u,p&&p!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Ar(c,p)||!d)&&(c.enterCallbacks[h]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=s.value,c=t.name,h=a.value,d=h&&h.components[c];if(!d)return Cf(n.default,{Component:d,route:u});const p=h.props[c],v=p?p===!0?u.params:typeof p=="function"?p(u):p:null,f=Bh(d,ct({},v,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[c]=null)},ref:l}));return Cf(n.default,{Component:f,route:u})||f}}});function Cf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mw=pw;function gw(t){const e=tw(t.routes,t),n=t.parseQuery||ow,i=t.stringifyQuery||wf,s=t.history,r=Wr(),o=Wr(),a=Wr(),l=Qt(Vi);let u=Vi;hr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=vc.bind(null,O=>""+O),h=vc.bind(null,AM),d=vc.bind(null,Io);function p(O,re){let ce,ue;return Ag(O)?(ce=e.getRecordMatcher(O),ue=re):ue=O,e.addRoute(ue,ce)}function v(O){const re=e.getRecordMatcher(O);re&&e.removeRoute(re)}function g(){return e.getRoutes().map(O=>O.record)}function f(O){return!!e.getRecordMatcher(O)}function m(O,re){if(re=ct({},re||l.value),typeof O=="string"){const x=_c(n,O,re.path),ie=e.resolve({path:x.path},re),Y=s.createHref(x.fullPath);return ct(x,ie,{params:d(ie.params),hash:Io(x.hash),redirectedFrom:void 0,href:Y})}let ce;if(O.path!=null)ce=ct({},O,{path:_c(n,O.path,re.path).path});else{const x=ct({},O.params);for(const ie in x)x[ie]==null&&delete x[ie];ce=ct({},O,{params:h(x)}),re.params=h(re.params)}const ue=e.resolve(ce,re),Ne=O.hash||"";ue.params=c(d(ue.params));const C=PM(i,ct({},O,{hash:bM(Ne),path:ue.path})),R=s.createHref(C);return ct({fullPath:C,hash:Ne,query:i===wf?aw(O.query):O.query||{}},ue,{redirectedFrom:void 0,href:R})}function M(O){return typeof O=="string"?_c(n,O,l.value.path):ct({},O)}function b(O,re){if(u!==O)return Cr(8,{from:re,to:O})}function y(O){return A(O)}function L(O){return y(ct(M(O),{replace:!0}))}function P(O){const re=O.matched[O.matched.length-1];if(re&&re.redirect){const{redirect:ce}=re;let ue=typeof ce=="function"?ce(O):ce;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=M(ue):{path:ue},ue.params={}),ct({query:O.query,hash:O.hash,params:ue.path!=null?{}:O.params},ue)}}function A(O,re){const ce=u=m(O),ue=l.value,Ne=O.state,C=O.force,R=O.replace===!0,x=P(ce);if(x)return A(ct(M(x),{state:typeof x=="object"?ct({},Ne,x.state):Ne,force:C,replace:R}),re||ce);const ie=ce;ie.redirectedFrom=re;let Y;return!C&&LM(i,ue,ce)&&(Y=Cr(16,{to:ie,from:ue}),Re(ue,ue,!0,!1)),(Y?Promise.resolve(Y):w(ie,ue)).catch(X=>_i(X)?_i(X,2)?X:Me(X):G(X,ie,ue)).then(X=>{if(X){if(_i(X,2))return A(ct({replace:R},M(X.to),{state:typeof X.to=="object"?ct({},Ne,X.to.state):Ne,force:C}),re||ie)}else X=F(ie,ue,!0,R,Ne);return I(ie,ue,X),X})}function U(O,re){const ce=b(O,re);return ce?Promise.reject(ce):Promise.resolve()}function T(O){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(O):O()}function w(O,re){let ce;const[ue,Ne,C]=vw(O,re);ce=xc(ue.reverse(),"beforeRouteLeave",O,re);for(const x of ue)x.leaveGuards.forEach(ie=>{ce.push(Qi(ie,O,re))});const R=U.bind(null,O,re);return ce.push(R),we(ce).then(()=>{ce=[];for(const x of r.list())ce.push(Qi(x,O,re));return ce.push(R),we(ce)}).then(()=>{ce=xc(Ne,"beforeRouteUpdate",O,re);for(const x of Ne)x.updateGuards.forEach(ie=>{ce.push(Qi(ie,O,re))});return ce.push(R),we(ce)}).then(()=>{ce=[];for(const x of C)if(x.beforeEnter)if(Zn(x.beforeEnter))for(const ie of x.beforeEnter)ce.push(Qi(ie,O,re));else ce.push(Qi(x.beforeEnter,O,re));return ce.push(R),we(ce)}).then(()=>(O.matched.forEach(x=>x.enterCallbacks={}),ce=xc(C,"beforeRouteEnter",O,re,T),ce.push(R),we(ce))).then(()=>{ce=[];for(const x of o.list())ce.push(Qi(x,O,re));return ce.push(R),we(ce)}).catch(x=>_i(x,8)?x:Promise.reject(x))}function I(O,re,ce){a.list().forEach(ue=>T(()=>ue(O,re,ce)))}function F(O,re,ce,ue,Ne){const C=b(O,re);if(C)return C;const R=re===Vi,x=hr?history.state:{};ce&&(ue||R?s.replace(O.fullPath,ct({scroll:R&&x&&x.scroll},Ne)):s.push(O.fullPath,Ne)),l.value=O,Re(O,re,ce,R),Me()}let z;function Q(){z||(z=s.listen((O,re,ce)=>{if(!me.listening)return;const ue=m(O),Ne=P(ue);if(Ne){A(ct(Ne,{replace:!0,force:!0}),ue).catch(lo);return}u=ue;const C=l.value;hr&&BM(pf(C.fullPath,ce.delta),Fl()),w(ue,C).catch(R=>_i(R,12)?R:_i(R,2)?(A(ct(M(R.to),{force:!0}),ue).then(x=>{_i(x,20)&&!ce.delta&&ce.type===Do.pop&&s.go(-1,!1)}).catch(lo),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),G(R,ue,C))).then(R=>{R=R||F(ue,C,!1),R&&(ce.delta&&!_i(R,8)?s.go(-ce.delta,!1):ce.type===Do.pop&&_i(R,20)&&s.go(-1,!1)),I(ue,C,R)}).catch(lo)}))}let oe=Wr(),J=Wr(),ne;function G(O,re,ce){Me(O);const ue=J.list();return ue.length?ue.forEach(Ne=>Ne(O,re,ce)):console.error(O),Promise.reject(O)}function ve(){return ne&&l.value!==Vi?Promise.resolve():new Promise((O,re)=>{oe.add([O,re])})}function Me(O){return ne||(ne=!O,Q(),oe.list().forEach(([re,ce])=>O?ce(O):re()),oe.reset()),O}function Re(O,re,ce,ue){const{scrollBehavior:Ne}=t;if(!hr||!Ne)return Promise.resolve();const C=!ce&&zM(pf(O.fullPath,0))||(ue||!ce)&&history.state&&history.state.scroll||null;return Dh().then(()=>Ne(O,re,C)).then(R=>R&&kM(R)).catch(R=>G(R,O,re))}const De=O=>s.go(O);let tt;const se=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:f,getRoutes:g,resolve:m,options:t,push:y,replace:L,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ve,install(O){const re=this;O.component("RouterLink",hw),O.component("RouterView",mw),O.config.globalProperties.$router=re,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Li(l)}),hr&&!tt&&l.value===Vi&&(tt=!0,y(s.location).catch(Ne=>{}));const ce={};for(const Ne in Vi)Object.defineProperty(ce,Ne,{get:()=>l.value[Ne],enumerable:!0});O.provide(kl,re),O.provide(Vh,Cm(ce)),O.provide(fu,l);const ue=O.unmount;se.add(O),O.unmount=function(){se.delete(O),se.size<1&&(u=Vi,z&&z(),z=null,l.value=Vi,tt=!1,ne=!1),ue()}}};function we(O){return O.reduce((re,ce)=>re.then(()=>T(ce)),Promise.resolve())}return me}function vw(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ar(u,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Ar(u,l))||s.push(l))}return[n,i,s]}function Lg(){return qn(kl)}function Ig(t){return qn(Vh)}const _w={name:"ArrowLeft"},Nn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},xw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-chevron-left"};function yw(t,e,n,i,s,r){return Le(),He("svg",xw,e[0]||(e[0]=[ae("path",{d:"m15 18-6-6 6-6"},null,-1)]))}const Dg=Nn(_w,[["render",yw]]),Ew={name:"ArrowRight"},Mw={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-chevron-right"};function ww(t,e,n,i,s,r){return Le(),He("svg",Mw,e[0]||(e[0]=[ae("path",{d:"m9 18 6-6-6-6"},null,-1)]))}const Ug=Nn(Ew,[["render",ww]]);function al(t){return hm()?(Jx(t),!0):!1}const pu=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const bw=Object.prototype.toString,Sw=t=>bw.call(t)==="[object Object]";function Ba(t){return Array.isArray(t)?t:[t]}function Tw(t){return kh()}function Aw(t,e=!0,n){Tw()?pi(t,n):e?t():Dh(t)}function Cw(t,e=1e3,n={}){const{immediate:i=!0,immediateCallback:s=!1}=n;let r=null;const o=Qt(!1);function a(){r&&(clearInterval(r),r=null)}function l(){o.value=!1,a()}function u(){const c=yr(e);c<=0||(o.value=!0,s&&t(),a(),o.value&&(r=setInterval(t,c)))}if(i&&pu&&u(),jt(e)||typeof e=="function"){const c=un(e,()=>{o.value&&pu&&u()});al(c)}return al(l),{isActive:vy(o),pause:l,resume:u}}function Rw(t,e,n){return un(t,e,{...n,immediate:!0})}const $o=pu?window:void 0;function ts(t){var e;const n=yr(t);return(e=n==null?void 0:n.$el)!=null?e:n}function Qr(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,u,c)=>(a.addEventListener(l,u,c),()=>a.removeEventListener(l,u,c)),s=Bt(()=>{const a=Ba(yr(t[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),r=Rw(()=>{var a,l;return[(l=(a=s.value)==null?void 0:a.map(u=>ts(u)))!=null?l:[$o].filter(u=>u!=null),Ba(yr(s.value?t[1]:t[0])),Ba(Li(s.value?t[2]:t[1])),yr(s.value?t[3]:t[2])]},([a,l,u,c])=>{if(n(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(u!=null&&u.length))return;const h=Sw(c)?{...c}:c;e.push(...a.flatMap(d=>l.flatMap(p=>u.map(v=>i(d,p,v,h)))))},{flush:"post"}),o=()=>{r(),n()};return al(n),o}function Pw(){const t=Qt(!1),e=kh();return e&&pi(()=>{t.value=!0},e),t}function Lw(t){const e=Pw();return Bt(()=>(e.value,!!t()))}function Iw(t,e,n={}){const{window:i=$o,...s}=n;let r;const o=Lw(()=>i&&"ResizeObserver"in i),a=()=>{r&&(r.disconnect(),r=void 0)},l=Bt(()=>{const h=yr(t);return Array.isArray(h)?h.map(d=>ts(d)):[ts(h)]}),u=un(l,h=>{if(a(),o.value&&i){r=new ResizeObserver(e);for(const d of h)d&&r.observe(d,s)}},{immediate:!0,flush:"post"}),c=()=>{a(),u()};return al(c),{isSupported:o,stop:c}}function Dw(t,e={width:0,height:0},n={}){const{window:i=$o,box:s="content-box"}=n,r=Bt(()=>{var h,d;return(d=(h=ts(t))==null?void 0:h.namespaceURI)==null?void 0:d.includes("svg")}),o=Qt(e.width),a=Qt(e.height),{stop:l}=Iw(t,([h])=>{const d=s==="border-box"?h.borderBoxSize:s==="content-box"?h.contentBoxSize:h.devicePixelContentBoxSize;if(i&&r.value){const p=ts(t);if(p){const v=p.getBoundingClientRect();o.value=v.width,a.value=v.height}}else if(d){const p=Ba(d);o.value=p.reduce((v,{inlineSize:g})=>v+g,0),a.value=p.reduce((v,{blockSize:g})=>v+g,0)}else o.value=h.contentRect.width,a.value=h.contentRect.height},n);Aw(()=>{const h=ts(t);h&&(o.value="offsetWidth"in h?h.offsetWidth:e.width,a.value="offsetHeight"in h?h.offsetHeight:e.height)});const u=un(()=>ts(t),h=>{o.value=h?e.width:0,a.value=h?e.height:0});function c(){l(),u()}return{width:o,height:a,stop:c}}const Uw={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof MouseEvent?[t.movementX,t.movementY]:null};function Og(t={}){const{type:e="page",touch:n=!0,resetOnTouchEnds:i=!1,initialValue:s={x:0,y:0},window:r=$o,target:o=r,scroll:a=!0,eventFilter:l}=t;let u=null,c=0,h=0;const d=Qt(s.x),p=Qt(s.y),v=Qt(null),g=typeof e=="function"?e:Uw[e],f=A=>{const U=g(A);u=A,U&&([d.value,p.value]=U,v.value="mouse"),r&&(c=r.scrollX,h=r.scrollY)},m=A=>{if(A.touches.length>0){const U=g(A.touches[0]);U&&([d.value,p.value]=U,v.value="touch")}},M=()=>{if(!u||!r)return;const A=g(u);u instanceof MouseEvent&&A&&(d.value=A[0]+r.scrollX-c,p.value=A[1]+r.scrollY-h)},b=()=>{d.value=s.x,p.value=s.y},y=l?A=>l(()=>f(A),{}):A=>f(A),L=l?A=>l(()=>m(A),{}):A=>m(A),P=l?()=>l(()=>M(),{}):()=>M();if(o){const A={passive:!0};Qr(o,["mousemove","dragover"],y,A),n&&e!=="movement"&&(Qr(o,["touchstart","touchmove"],L,A),i&&Qr(o,"touchend",b,A)),a&&e==="page"&&Qr(r,"scroll",P,A)}return{x:d,y:p,sourceType:v}}function Ow(t,e={}){const{handleOutside:n=!0,window:i=$o}=e,s=e.type||"page",{x:r,y:o,sourceType:a}=Og(e),l=Qt(t??(i==null?void 0:i.document.body)),u=Qt(0),c=Qt(0),h=Qt(0),d=Qt(0),p=Qt(0),v=Qt(0),g=Qt(!0);let f=()=>{};return i&&(f=un([l,r,o],()=>{const m=ts(l);if(!m||!(m instanceof Element))return;const{left:M,top:b,width:y,height:L}=m.getBoundingClientRect();h.value=M+(s==="page"?i.pageXOffset:0),d.value=b+(s==="page"?i.pageYOffset:0),p.value=L,v.value=y;const P=r.value-h.value,A=o.value-d.value;g.value=y===0||L===0||P<0||A<0||P>y||A>L,(n||!g.value)&&(u.value=P,c.value=A)},{immediate:!0}),Qr(document,"mouseleave",()=>g.value=!0,{passive:!0})),{x:r,y:o,sourceType:a,elementX:u,elementY:c,elementPositionX:h,elementPositionY:d,elementHeight:p,elementWidth:v,isOutside:g,stop:f}}const Nw=["src","alt"],Fw={class:"carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"},kw=["onClick","aria-label"],Bw=Ht({__name:"CarouselComponent",props:{images:{type:Array,required:!0,default:()=>[]},autoplayInterval:{type:Number,default:3e3},autoplay:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:50}},setup(t){const e=t,n=vt(null),{width:i}=Dw(n),s=vt(0),r=vt(!1),o=vt(0),a=vt(0),l=vt(0),u=Bt(()=>l.value-a.value),{isOutside:c}=Ow(n),h=Bt(()=>!c.value),{x:d}=Og(),p=I=>{I.button===0&&(r.value=!0,a.value=d.value,l.value=d.value,L(),I.preventDefault())},v=()=>{r.value&&(l.value=d.value)},g=()=>{if(!r.value)return;const I=u.value;Math.abs(I)>e.swipeThreshold&&(I>0&&s.value>0?s.value--:I<0&&s.value<e.images.length-1&&s.value++),r.value=!1,o.value=-s.value*i.value,e.autoplay&&P()},f=I=>{r.value=!0,a.value=I.touches[0].clientX,l.value=I.touches[0].clientX,L()},m=I=>{r.value&&(l.value=I.touches[0].clientX,I.preventDefault())},M=()=>{g()},b=Bt(()=>{if(r.value){const I=u.value;return s.value===0&&I>0||s.value===e.images.length-1&&I<0?-s.value*i.value+I*.3:-s.value*i.value+I}return-s.value*i.value});un(b,I=>{o.value=I});const y=()=>{o.value=-s.value*i.value},{pause:L,resume:P,isActive:A}=Cw(()=>{U()},e.autoplayInterval,{immediate:!1,immediateCallback:!1}),U=()=>{s.value<e.images.length-1?s.value++:s.value=0,o.value=-s.value*i.value},T=()=>{s.value>0?s.value--:s.value=e.images.length-1,o.value=-s.value*i.value},w=I=>{s.value=I,o.value=-s.value*i.value};return pi(()=>{n.value&&(n.value.addEventListener("mousedown",p),document.addEventListener("mousemove",v),document.addEventListener("mouseup",g),n.value.addEventListener("touchstart",f),n.value.addEventListener("touchmove",m,{passive:!1}),n.value.addEventListener("touchend",M)),e.autoplay&&P()}),un(()=>e.autoplay,I=>{I&&!A.value?P():!I&&A.value&&L()}),un(()=>s.value,()=>{r.value||(o.value=-s.value*i.value)}),un(()=>i.value,()=>{o.value=-s.value*i.value}),(I,F)=>(Le(),He("div",{ref_key:"carouselRef",ref:n,class:"carousel relative overflow-hidden"},[ae("div",{class:"carousel-inner flex h-full transition-transform duration-300",style:Tr({transform:`translateX(${o.value}px)`,transition:r.value?"none":"transform 300ms ease"}),onTransitionend:y},[(Le(!0),He(Tt,null,Ni(t.images,(z,Q)=>(Le(),He("div",{key:Q,class:"carousel-item min-w-full h-full",style:Tr({width:`${Li(i)}px`})},[ae("img",{src:z.src,alt:z.alt||`Slide ${Q+1}`,class:"w-full h-full object-cover object-bottom",draggable:"false"},null,8,Nw)],4))),128))],36),ae("button",{onClick:T,class:ci(["carousel-control left absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-opacity duration-300",{"opacity-0":!h.value,"opacity-100":h.value}]),"aria-label":"上一张"},[Qe(Dg,{class:"w-[24px]"})],2),ae("button",{onClick:U,class:ci(["carousel-control right absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-opacity duration-300",{"opacity-0":!h.value,"opacity-100":h.value}]),"aria-label":"下一张"},[Qe(Ug,{class:"w-[24px]"})],2),ae("div",Fw,[(Le(!0),He(Tt,null,Ni(t.images,(z,Q)=>(Le(),He("button",{key:Q,onClick:oe=>w(Q),class:ci(["w-3 h-3 rounded-full transition-all duration-300",Q===s.value?"bg-primary scale-110":"bg-white/50 hover:bg-white/70"]),"aria-label":`转到第 ${Q+1} 张图片`},null,10,kw))),128))])],512))}}),zw=Nn(Bw,[["__scopeId","data-v-05b23b90"]]),Hw={class:"flex flex-col items-center hero-background"},Vw={class:"grid grid-cols-7 gap-5 max-w-[1280px] mx-10"},Gw=["src","alt"],Ww={class:"bg-primary-200 text-white flex justify-center items-center text-sm md:text-md lg:text-lg font-bold py-1 px-2 md:px-3 lg:px-5 mx-auto"},Xw=Ht({__name:"HeroComponent",setup(t){const e=vt([{src:"/cpdc-platform/showItems/1.png",alt:"胚体准备"},{src:"/cpdc-platform/showItems/2.png",alt:"纹样设计"},{src:"/cpdc-platform/showItems/3.png",alt:"釉彩填色"},{src:"/cpdc-platform/showItems/4.png",alt:"本金勾勒"},{src:"/cpdc-platform/showItems/5.png",alt:"开窗构图"},{src:"/cpdc-platform/showItems/6.png",alt:"窑火淬炼"},{src:"/cpdc-platform/showItems/7.png",alt:"款识落印"}]);return(n,i)=>(Le(),He("div",Hw,[i[0]||(i[0]=ae("div",{class:"my-12 flex flex-col items-center"},[ae("h1",{class:"text-2xl font-bold text-primary-400 mb-4"},"七十二道笔触，三百年釉上春秋"),ae("span",{class:"text-primary-400"},"“从景德白胎到织金彩瓷，每一道金线都是时光的引脚，每一次窑变都是岭南的呼吸”")],-1)),ae("div",Vw,[(Le(!0),He(Tt,null,Ni(e.value,s=>(Le(),He("div",{class:"flex flex-col",key:s.alt},[ae("img",{class:"mb-4",src:s.src,alt:s.alt},null,8,Gw),ae("div",Ww,Dt(s.alt),1)]))),128))]),i[1]||(i[1]=ae("div",{class:"mt-18 mb-5 flex flex-col items-center"},[ae("div",{class:"text-xl font-bold text-white bg-primary mb-5 py-2.5 px-4"},"广彩历史长廊"),ae("div",{class:"flex flex-col items-center text-primary-400 gap-1"},[ae("span",null,"当清代匠人的毛笔点染出第一朵岭南牡丹"),ae("span",null,"时光便为瓷器镀上包浆"),ae("span",null,"此刻，我们以数字针脚修补历史的经纬，邀您共织广彩记忆")])],-1))]))}}),$w=Nn(Xw,[["__scopeId","data-v-cc99f97b"]]),jw="/cpdc-platform/introbg.png",qw={},Yw={class:"flex flex-col items-center py-10 intro-background relative"};function Kw(t,e){return Le(),He("div",Yw,e[0]||(e[0]=[ae("img",{src:jw,class:"max-w-[1280px] px-10 md:px-30 lg:px-40 w-full"},null,-1),ae("div",{class:"text-xl font-bold px-2 text-white bg-primary-200 rounded-sm absolute bottom-1/3 cursor-pointer hover:bg-primary-300"}," 点击开启回忆之旅 ",-1)]))}const Zw=Nn(qw,[["render",Kw],["__scopeId","data-v-802d0186"]]),Jw=Ht({__name:"HomeView",setup(t){const e=[{src:"/cpdc-platform/1.png",alt:"广彩瓷1"},{src:"/cpdc-platform/2.png",alt:"广彩诞生"},{src:"/cpdc-platform/3.png",alt:"数字焕新"}];return(n,i)=>(Le(),He(Tt,null,[Qe(zw,{images:e,autoplay:!0,autoplayInterval:4e3,swipeThreshold:50}),Qe($w),Qe(Zw)],64))}}),Qw={key:0,class:"text-lg text-gray-800 mt-8"},Ng=Ht({__name:"HeroComponent",props:{title:{},subTitle:{},backgroundUrl:{},titleColor:{}},setup(t){const e=t;return(n,i)=>(Le(),He("div",{class:"h-80 bg-center bg-cover flex flex-col justify-center items-center w-full bg-gray-200",style:Tr(e.backgroundUrl?`background-image: url(${n.backgroundUrl})`:"")},[ae("h1",{class:ci(["text-4xl font-extrabold",e.titleColor?`text-${e.titleColor}`:"text-gray-800"])},Dt(e.title),3),e.subTitle?(Le(),He("span",Qw,Dt(e.subTitle),1)):ui("",!0)],4))}}),eb={class:"flex flex-col items-center"},tb={class:"max-w-[1600px] pb-8 px-8 md:px-16 w-full"},nb={class:"flex flex-wrap gap-4"},ib={class:"w-80 h-80 overflow-hidden flex justify-center items-center"},sb=["src","alt"],rb={class:"p-4 ml-3 w-4/5"},ob={class:"flex mb-2"},ab={class:"text-2xl font-bold"},lb={class:"bg-primary text-white flex justify-center items-center px-2 ml-4"},cb={class:"text-primary text-xl mb-4"},ub={class:"text-gray-600 text-lg"},hb=Ht({__name:"AboutView",setup(t){const e=[{name:"广彩纹章花卉纹大盘",attribute:"高5.4厘米 口径37.8厘米 足径22厘米",description:`敞口，浅壁圆弧腹，圈足，器型硕大工整。外层边饰绘折枝花卉纹，中部围绕定购者的个人纹章图案绘四
组折枝花卉，彩绘线条干练流畅，融合五彩技法，体现出较为鲜明的康熙时期特点。早期广彩使用的颜料，是
明代三彩、五彩的传统颜料与外国珐琅彩料融合创造而来。五彩瓷产品的外销时间不长，大约从1730年开始逐
步消失，逐渐被粉彩、广彩取代。
此盘为英国沃恩（Vaughan）家族约1710年定制，属英国东印度公司高层人士在中国定制的早期广彩产品
代表。值得注意的是，盘中部绘制的纹章盾牌上方的盔饰图案（指纹章中头盔上方的装饰物，此处为半身狮
像）方向绘成了反向。由此推断，此器极有可能是根据定购者提供的私人纹章印模绘制，印模中展现的纹章图
案均为反向，中国瓷匠并不知情，按样板绘制成反向纹章图案。`,during:"清康熙",img:{src:"/cpdc-platform/collections/0.png",alt:"广彩纹章花卉纹大盘"}},{name:"广彩纹章花卉纹大盘",attribute:"高6.4厘米 口径38.5厘米 足径23.6厘米",description:`敞口，浅壁圆弧腹，圈足。内弧壁绘四组折枝花卉纹，里层边饰为铁红彩描金卷草纹锦地四开窗纹，开窗
内绘杂宝纹，盘心绘定购者纹章。盘背面边沿绘铁红如意垂云头纹一周，弧壁处绘四组铁红折枝花卉。此盘约
在1720年定制，定购者是伦敦富商、英国东印度公司董事丹尼斯•迪特里（Dennis Dutry）爵士。18世纪30年代
的纹章瓷产品中有不少都是为伦敦富商定制的，17世纪90年代法国胡格诺派工匠和商人为寻求宗教庇护来到英
国，为伦敦地区积累了大量的社会财富，他们中有许多人曾在广州定制纹章瓷。此盘的定购者迪特里的妻子是
波尔多一位胡格诺派酒商的女儿。
此盘盘心的纹章图案中，在小盾牌的上方还绘有一只红色的手擎，在英国纹章学中红色手掌是准男爵的
标识，此盘的定购者1716年获封准男爵，1728年逝世，此盘仍以康熙晚期采用的具有透明质感的彩料即五彩绘
制，而不是后来出现的不透明料，结合定购者的信息及彩料的时代特点，可判断其烧制年代约在1720年。`,during:"清康熙",img:{src:"https://goldseed.oss-cn-guangzhou.aliyuncs.com/goldSeed/firstStage/image1.png",alt:"广彩纹章花卉纹大盘"}},{name:"广彩描金纹章花卉纹盘",attribute:"高2.5厘米 口径22厘米 足径12厘米",description:`板沿，浅腹，卧足。盘沿绘制四组折枝牡丹、菊花纹，间设四个小开窗，开窗内绘定购者纹章的冠冕和盔
饰图案，盘中心绘完整的纹章图案，纹章绘制醒目工整，占据较大区域，体现了18世纪初期个性化定制纹章瓷
的时代特点。
此盘为英国的托马斯•比特（Thomas Pitt）男爵定制。托马斯1717年结婚，盘中绘制的正是婚后男女双方
联姻的纹章。纹章盾牌之上绘制的是英国男爵冠冤，托马斯1719年受封为伦敦德里男爵，由此推断该器的烧制
年份应该不早于1720年。托马斯所在的比特家族历史悠久，名人辈出，曾有族人获封伯爵、出任英国首相，一
度成为英国最具政治影响力的家族。
此处纹章中冠冕的绘制色调值得注意，应是中国瓷匠利用矾红加上黑色调成，并非定购者所期望的体现冠
冕中天鹅绒质感的粉红或紫红色调。在如此重要的订单中无法按客户要求绘制色彩的原因，极有可能是当时的
技术尚无法实现，当时的中国釉上彩瓷绘制技法仍以呈现透明质感的“硬彩”即五彩为主，较难呈现具有过波
效果的色调。`,during:"清康熙",img:{src:"https://goldseed.oss-cn-guangzhou.aliyuncs.com/goldSeed/firstStage/image2.png",alt:"广彩描金纹章花卉纹盘"}},{name:"广彩描金纹章纹大盘",attribute:"高5.8厘米 口径39.3厘米 足径21.7厘米",description:`折沿，弧腹略深，卧足。盘边沿外层绘折枝花卉杂宝纹，折沿处绘八方锦地四开窗纹，盘心绘定购者纹
章。这件深腹大盘是英国约榆•兰伯特（John Lambert）爵士约1722年定制的纹章瓷餐具中的一件。此盘的内外
多层边饰仍主要采用铁红彩加描金的技法绘制，但盘中心的纹章图案却出现了新型的胭脂红彩，尤其是纹章后
牌外围厚重的披幔已经绘成不透明的紫红色，更接近于天鹅绒披幔的质感和色调。这说明胭脂红彩在1722年前
后已经在外销瓷产品中应用。
此类18世纪早期出现的体量较大盘盆，尤其是折沿深盘的功用尚未确定。一般认为用作玫瑰水盘，在进餐
期间承接玫瑰花瓣水，供进餐者洗手。`,during:"清康熙",img:{src:"https://goldseed.oss-cn-guangzhou.aliyuncs.com/goldSeed/firstStage/image3.png",alt:"广彩纹章花卉纹大盘"}},{name:"青花广彩纹章龙纹盘",attribute:"高2.5厘米 口径22.5厘米 足径11.4厘米",description:`板沿，浅弧腹，圈足，整器采用釉下青花、釉上彩绘加描金的形式，盘的口沿外层和折沿处以铁红描金绘制卷草纹、
锦地四开窗等多层边饰，板沿处以釉下青花绘制龙风纹。盘中心绘制的是英国乔蒙德利（Cholmondeley）家族与另一家族
联姻的纹章。
该盘采用釉下青花绘制的龙凤纹结合铁红描金卷草纹作为边饰，体现了18世纪30年代外销瓷的典型边饰特征，尤其是
青花龙风纹边饰，目前仅发现不超过10套纹章瓷采用，且均为1720年前后定制的产品。这些个性化定制的瓷器所展现的时
代风格为同时期外销瓷的断代提供了难得的依据。`,during:"清康熙",img:{src:"https://goldseed.oss-cn-guangzhou.aliyuncs.com/goldSeed/firstStage/image4.png",alt:"青花广彩纹章龙纹盘"}},{name:"广彩描金纹章纹盘",attribute:"高2.4厘米 口径22厘米 足径12厘米",description:`板沿，浅腹，卧足。盘的折沿处仅以内外两道描金边条作装饰，盘心设一正圆形开窗图案，开窗内以蓝彩为地，上绘
描金花体字母“S.W."，器沿正上方绘英国温德尔（Winder）家族纹章，其用彩及整体品质与1720年前后的伊万里风格的
外销瓷有相似之处。此类仅绘制定购者纹草或姓名缩写字母而无其他装饰纹样的产品，应是根据定购者的特要求专门烧制的。`,during:"清康熙",img:{src:"https://goldseed.oss-cn-guangzhou.aliyuncs.com/goldSeed/firstStage/image5.png",alt:"广彩描金纹章纹盘"}}];return(n,i)=>(Le(),He("div",eb,[Qe(Ng,{title:"关于我们","background-url":"/cpdc-platform/exhibition/5.png","title-color":"white"}),ae("main",tb,[i[0]||(i[0]=ae("div",{class:"flex justify-between py-8"},[ae("div",{class:"flex gap-6"},[ae("div",{class:"bg-primary text-white w-[8rem] px-1 text-lg flex py-1 justify-center items-center"},[ae("span",{class:"w-4/5 text-center"},"社区讨论")])])],-1)),ae("div",nb,[(Le(),He(Tt,null,Ni(e,(s,r)=>ae("div",{class:"w-full mb-4 border-1 border-white hover:border-primary duration-200 flex",key:r},[ae("div",ib,[ae("img",{class:"object-cover w-full h-full",src:s.img.src,alt:s.img.alt},null,8,sb)]),ae("div",rb,[ae("div",ob,[ae("h2",ab,Dt(s.name),1),ae("span",lb,Dt(s.during),1)]),ae("div",cb,Dt(s.attribute),1),ae("div",ub,Dt(s.description),1)])])),64))])])]))}}),db={class:"flex justify-center items-center w-1/5 h-full flex-col"},fb={class:"bg-primary-300 text-white text-lg font-semibold py-1 px-4 flex justify-center items-center mb-2 w-45"},pb=["src","alt"],Rf=Ht({__name:"SmallExhibitionComponent",props:{data:{}},setup(t){const e=t;return(n,i)=>(Le(),He("div",db,[ae("div",fb,Dt(e.data.name),1),ae("img",{class:"rounded-full bg-gray-300 aspect-square w-xs",src:e.data.img.src,alt:e.data.img.alt},null,8,pb)]))}}),mb={class:"flex justify-center items-center w-3/5 h-full flex-col"},gb={class:"bg-primary-300 text-white text-2xl font-semibold py-2 px-4 flex justify-center items-center mb-3 w-60"},vb={class:"flex flex-row justify-between items-center w-full"},_b=["src","alt"],xb=Ht({__name:"LargeExhibitionComponent",props:{data:{}},setup(t){const e=t;return(n,i)=>(Le(),He("div",mb,[ae("div",gb,Dt(e.data.name),1),ae("div",vb,[Qe(Dg,{class:"w-[15%] text-gray-200 hover:text-gray-300"}),ae("img",{class:"rounded-full bg-gray-300 aspect-square w-[70%]",src:e.data.img.src,alt:e.data.img.alt},null,8,_b),Qe(Ug,{class:"w-[15%] text-gray-200 hover:text-gray-300"})])]))}}),yb={class:"w-full px-12 py-12 flex justify-between items-center"},Eb=Ht({__name:"ExhibitionView",setup(t){const e=Lg(),n=[{name:"发展脉络展厅",img:{src:"/cpdc-platform/exhibition/2.png",alt:"发展脉络展厅"},link:"1"},{name:"工坊主题展厅",img:{src:"/cpdc-platform/exhibition/1.png",alt:"工坊主题展厅"},link:"2"},{name:"华彩新章展厅",img:{src:"/cpdc-platform/exhibition/3.png",alt:"华彩新章展厅"},link:"3"}],i=vt(n[0]),s=vt(n[1]),r=vt(n[2]),o=a=>{e.push(`/exhibition_hall/${a}`)};return(a,l)=>(Le(),He("main",yb,[Qe(Rf,{data:i.value,onClick:l[0]||(l[0]=u=>o(i.value.link))},null,8,["data"]),Qe(xb,{data:s.value,onClick:l[1]||(l[1]=u=>o(s.value.link))},null,8,["data"]),Qe(Rf,{data:r.value,onClick:l[2]||(l[2]=u=>o(r.value.link))},null,8,["data"])]))}}),Mb={name:"ArrowDown"},wb={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function bb(t,e,n,i,s,r){return Le(),He("svg",wb,e[0]||(e[0]=[ae("path",{fill:"currentColor",d:"M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"},null,-1)]))}const ll=Nn(Mb,[["render",bb]]),Sb={class:"flex flex-col"},Tb={class:"w-4/5 text-center"},Ab={key:0},Cb={class:"relative"},Rb={key:0,class:"absolute visible z-50 top-2 w-[calc(100vw-2rem)] md:w-100"},Pb={class:"my-backdrop-blur-lg"},Lb=["title","onClick"],Pf=Ht({__name:"FilterButton",props:{name:{},items:{}},setup(t,{expose:e}){const n=vt(!1),i=vt(""),s=vt(""),r=a=>{i.value=a.name,s.value=a.value,n.value=!1},o=t;return e({activeItemName:i,activeItemValue:s}),pi(()=>{o.items&&o.items.length>0&&(i.value=o.items[0].name,s.value=o.items[0].value)}),(a,l)=>(Le(),He("div",Sb,[ae("div",{class:"bg-primary text-white w-[5rem] md:w-[8rem] text-md md:text-lg flex p-0.5 md:p-1 justify-center items-center hover:bg-primary-600 select-none cursor-pointer",onClick:l[0]||(l[0]=u=>n.value=!n.value)},[ae("span",Tb,Dt(o.name),1),a.items&&a.items.length>0?(Le(),He("div",Ab,[n.value?(Le(),Os(ll,{key:0,class:"rotate-180"})):(Le(),Os(ll,{key:1}))])):ui("",!0)]),ae("div",Cb,[Qe(zh,{name:"slide-down"},{default:Wo(()=>[n.value?(Le(),He("div",Rb,[ae("div",Pb,[(Le(!0),He(Tt,null,Ni(a.items,u=>(Le(),He("div",{class:ci(["text-md text-primary-100 px-3 md:px-5 py-2 flex items-center justify-between hover:text-white hover:bg-primary-300/30",i.value===u.name?"text-white bg-primary-300/50":""]),key:u.name,title:u.name,onClick:c=>r(u)},Dt(u.name),11,Lb))),128))])])):ui("",!0)]),_:1})])]))}}),Ib={name:"SearchIcon"},Db={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function Ub(t,e,n,i,s,r){return Le(),He("svg",Db,e[0]||(e[0]=[ae("path",{fill:"currentColor",d:"M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"},null,-1)]))}const Ob=Nn(Ib,[["render",Ub]]);function Nb(t,e=300){let n=null;return function(...i){n&&clearTimeout(n),n=setTimeout(()=>t.apply(this,i),e)}}function Fg(t,e){return function(){return t.apply(e,arguments)}}const{toString:Fb}=Object.prototype,{getPrototypeOf:Gh}=Object,{iterator:Bl,toStringTag:kg}=Symbol,zl=(t=>e=>{const n=Fb.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qn=t=>(t=t.toLowerCase(),e=>zl(e)===t),Hl=t=>e=>typeof e===t,{isArray:Ur}=Array,Uo=Hl("undefined");function kb(t){return t!==null&&!Uo(t)&&t.constructor!==null&&!Uo(t.constructor)&&pn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Bg=Qn("ArrayBuffer");function Bb(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Bg(t.buffer),e}const zb=Hl("string"),pn=Hl("function"),zg=Hl("number"),Vl=t=>t!==null&&typeof t=="object",Hb=t=>t===!0||t===!1,za=t=>{if(zl(t)!=="object")return!1;const e=Gh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(kg in t)&&!(Bl in t)},Vb=Qn("Date"),Gb=Qn("File"),Wb=Qn("Blob"),Xb=Qn("FileList"),$b=t=>Vl(t)&&pn(t.pipe),jb=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||pn(t.append)&&((e=zl(t))==="formdata"||e==="object"&&pn(t.toString)&&t.toString()==="[object FormData]"))},qb=Qn("URLSearchParams"),[Yb,Kb,Zb,Jb]=["ReadableStream","Request","Response","Headers"].map(Qn),Qb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function jo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Ur(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Hg(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vg=t=>!Uo(t)&&t!==Ns;function mu(){const{caseless:t}=Vg(this)&&this||{},e={},n=(i,s)=>{const r=t&&Hg(e,s)||s;za(e[r])&&za(i)?e[r]=mu(e[r],i):za(i)?e[r]=mu({},i):Ur(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&jo(arguments[i],n);return e}const eS=(t,e,n,{allOwnKeys:i}={})=>(jo(e,(s,r)=>{n&&pn(s)?t[r]=Fg(s,n):t[r]=s},{allOwnKeys:i}),t),tS=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),nS=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},iS=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Gh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},sS=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},rS=t=>{if(!t)return null;if(Ur(t))return t;let e=t.length;if(!zg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},oS=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Gh(Uint8Array)),aS=(t,e)=>{const i=(t&&t[Bl]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},lS=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},cS=Qn("HTMLFormElement"),uS=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),Lf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),hS=Qn("RegExp"),Gg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};jo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},dS=t=>{Gg(t,(e,n)=>{if(pn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(pn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},fS=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Ur(t)?i(t):i(String(t).split(e)),n},pS=()=>{},mS=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function gS(t){return!!(t&&pn(t.append)&&t[kg]==="FormData"&&t[Bl])}const vS=t=>{const e=new Array(10),n=(i,s)=>{if(Vl(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=Ur(i)?[]:{};return jo(i,(o,a)=>{const l=n(o,s+1);!Uo(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return n(t,0)},_S=Qn("AsyncFunction"),xS=t=>t&&(Vl(t)||pn(t))&&pn(t.then)&&pn(t.catch),Wg=((t,e)=>t?setImmediate:e?((n,i)=>(Ns.addEventListener("message",({source:s,data:r})=>{s===Ns&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Ns.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",pn(Ns.postMessage)),yS=typeof queueMicrotask<"u"?queueMicrotask.bind(Ns):typeof process<"u"&&process.nextTick||Wg,ES=t=>t!=null&&pn(t[Bl]),K={isArray:Ur,isArrayBuffer:Bg,isBuffer:kb,isFormData:jb,isArrayBufferView:Bb,isString:zb,isNumber:zg,isBoolean:Hb,isObject:Vl,isPlainObject:za,isReadableStream:Yb,isRequest:Kb,isResponse:Zb,isHeaders:Jb,isUndefined:Uo,isDate:Vb,isFile:Gb,isBlob:Wb,isRegExp:hS,isFunction:pn,isStream:$b,isURLSearchParams:qb,isTypedArray:oS,isFileList:Xb,forEach:jo,merge:mu,extend:eS,trim:Qb,stripBOM:tS,inherits:nS,toFlatObject:iS,kindOf:zl,kindOfTest:Qn,endsWith:sS,toArray:rS,forEachEntry:aS,matchAll:lS,isHTMLForm:cS,hasOwnProperty:Lf,hasOwnProp:Lf,reduceDescriptors:Gg,freezeMethods:dS,toObjectSet:fS,toCamelCase:uS,noop:pS,toFiniteNumber:mS,findKey:Hg,global:Ns,isContextDefined:Vg,isSpecCompliantForm:gS,toJSONObject:vS,isAsyncFn:_S,isThenable:xS,setImmediate:Wg,asap:yS,isIterable:ES};function je(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}K.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}});const Xg=je.prototype,$g={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{$g[t]={value:t}});Object.defineProperties(je,$g);Object.defineProperty(Xg,"isAxiosError",{value:!0});je.from=(t,e,n,i,s,r)=>{const o=Object.create(Xg);return K.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),je.call(o,t.message,e,n,i,s),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};const MS=null;function gu(t){return K.isPlainObject(t)||K.isArray(t)}function jg(t){return K.endsWith(t,"[]")?t.slice(0,-2):t}function If(t,e,n){return t?t.concat(e).map(function(s,r){return s=jg(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function wS(t){return K.isArray(t)&&!t.some(gu)}const bS=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function Gl(t,e,n){if(!K.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,f){return!K.isUndefined(f[g])});const i=n.metaTokens,s=n.visitor||c,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(s))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(K.isDate(v))return v.toISOString();if(K.isBoolean(v))return v.toString();if(!l&&K.isBlob(v))throw new je("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(v)||K.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,g,f){let m=v;if(v&&!f&&typeof v=="object"){if(K.endsWith(g,"{}"))g=i?g:g.slice(0,-2),v=JSON.stringify(v);else if(K.isArray(v)&&wS(v)||(K.isFileList(v)||K.endsWith(g,"[]"))&&(m=K.toArray(v)))return g=jg(g),m.forEach(function(b,y){!(K.isUndefined(b)||b===null)&&e.append(o===!0?If([g],y,r):o===null?g:g+"[]",u(b))}),!1}return gu(v)?!0:(e.append(If(f,g,r),u(v)),!1)}const h=[],d=Object.assign(bS,{defaultVisitor:c,convertValue:u,isVisitable:gu});function p(v,g){if(!K.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(v),K.forEach(v,function(m,M){(!(K.isUndefined(m)||m===null)&&s.call(e,m,K.isString(M)?M.trim():M,g,d))===!0&&p(m,g?g.concat(M):[M])}),h.pop()}}if(!K.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Df(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Wh(t,e){this._pairs=[],t&&Gl(t,this,e)}const qg=Wh.prototype;qg.append=function(e,n){this._pairs.push([e,n])};qg.toString=function(e){const n=e?function(i){return e.call(this,i,Df)}:Df;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function SS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yg(t,e,n){if(!e)return t;const i=n&&n.encode||SS;K.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let r;if(s?r=s(e,n):r=K.isURLSearchParams(e)?e.toString():new Wh(e,n).toString(i),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class Uf{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Kg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},TS=typeof URLSearchParams<"u"?URLSearchParams:Wh,AS=typeof FormData<"u"?FormData:null,CS=typeof Blob<"u"?Blob:null,RS={isBrowser:!0,classes:{URLSearchParams:TS,FormData:AS,Blob:CS},protocols:["http","https","file","blob","url","data"]},Xh=typeof window<"u"&&typeof document<"u",vu=typeof navigator=="object"&&navigator||void 0,PS=Xh&&(!vu||["ReactNative","NativeScript","NS"].indexOf(vu.product)<0),LS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",IS=Xh&&window.location.href||"http://localhost",DS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xh,hasStandardBrowserEnv:PS,hasStandardBrowserWebWorkerEnv:LS,navigator:vu,origin:IS},Symbol.toStringTag,{value:"Module"})),tn={...DS,...RS};function US(t,e){return Gl(t,new tn.classes.URLSearchParams,Object.assign({visitor:function(n,i,s,r){return tn.isNode&&K.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function OS(t){return K.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function NS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Zg(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&K.isArray(s)?s.length:o,l?(K.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!K.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&K.isArray(s[o])&&(s[o]=NS(s[o])),!a)}if(K.isFormData(t)&&K.isFunction(t.entries)){const n={};return K.forEachEntry(t,(i,s)=>{e(OS(i),s,n,0)}),n}return null}function FS(t,e,n){if(K.isString(t))try{return(e||JSON.parse)(t),K.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const qo={transitional:Kg,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=K.isObject(e);if(r&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return s?JSON.stringify(Zg(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return US(e,this.formSerializer).toString();if((a=K.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Gl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),FS(e)):e}],transformResponse:[function(e){const n=this.transitional||qo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?je.from(a,je.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],t=>{qo.headers[t]={}});const kS=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),BS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&kS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Of=Symbol("internals");function Xr(t){return t&&String(t).trim().toLowerCase()}function Ha(t){return t===!1||t==null?t:K.isArray(t)?t.map(Ha):String(t)}function zS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const HS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yc(t,e,n,i,s){if(K.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!K.isString(e)){if(K.isString(i))return e.indexOf(i)!==-1;if(K.isRegExp(i))return i.test(e)}}function VS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function GS(t,e){const n=K.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let mn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,u){const c=Xr(l);if(!c)throw new Error("header name must be a non-empty string");const h=K.findKey(s,c);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||l]=Ha(a))}const o=(a,l)=>K.forEach(a,(u,c)=>r(u,c,l));if(K.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(K.isString(e)&&(e=e.trim())&&!HS(e))o(BS(e),n);else if(K.isObject(e)&&K.isIterable(e)){let a={},l,u;for(const c of e){if(!K.isArray(c))throw TypeError("Object iterator must return a key-value pair");a[u=c[0]]=(l=a[u])?K.isArray(l)?[...l,c[1]]:[l,c[1]]:c[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Xr(e),e){const i=K.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return zS(s);if(K.isFunction(n))return n.call(this,s,i);if(K.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Xr(e),e){const i=K.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||yc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Xr(o),o){const a=K.findKey(i,o);a&&(!n||yc(i,i[a],a,n))&&(delete i[a],s=!0)}}return K.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||yc(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return K.forEach(this,(s,r)=>{const o=K.findKey(i,r);if(o){n[o]=Ha(s),delete n[r];return}const a=e?VS(r):String(r).trim();a!==r&&delete n[r],n[a]=Ha(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return K.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&K.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Of]=this[Of]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Xr(o);i[a]||(GS(s,o),i[a]=!0)}return K.isArray(e)?e.forEach(r):r(e),this}};mn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(mn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});K.freezeMethods(mn);function Ec(t,e){const n=this||qo,i=e||n,s=mn.from(i.headers);let r=i.data;return K.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Jg(t){return!!(t&&t.__CANCEL__)}function Or(t,e,n){je.call(this,t??"canceled",je.ERR_CANCELED,e,n),this.name="CanceledError"}K.inherits(Or,je,{__CANCEL__:!0});function Qg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new je("Request failed with status code "+n.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function WS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function XS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[r];o||(o=u),n[s]=l,i[s]=u;let h=r,d=0;for(;h!==s;)d+=n[h++],h=h%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),u-o<e)return;const p=c&&u-c;return p?Math.round(d*1e3/p):void 0}}function $S(t,e){let n=0,i=1e3/e,s,r;const o=(u,c=Date.now())=>{n=c,s=null,r&&(clearTimeout(r),r=null),t.apply(null,u)};return[(...u)=>{const c=Date.now(),h=c-n;h>=i?o(u,c):(s=u,r||(r=setTimeout(()=>{r=null,o(s)},i-h)))},()=>s&&o(s)]}const cl=(t,e,n=3)=>{let i=0;const s=XS(50,250);return $S(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-i,u=s(l),c=o<=a;i=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-o)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},Nf=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Ff=t=>(...e)=>K.asap(()=>t(...e)),jS=tn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,tn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(tn.origin),tn.navigator&&/(msie|trident)/i.test(tn.navigator.userAgent)):()=>!0,qS=tn.hasStandardBrowserEnv?{write(t,e,n,i,s,r){const o=[t+"="+encodeURIComponent(e)];K.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),K.isString(i)&&o.push("path="+i),K.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function YS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function KS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ev(t,e,n){let i=!YS(e);return t&&(i||n==!1)?KS(t,e):e}const kf=t=>t instanceof mn?{...t}:t;function Hs(t,e){e=e||{};const n={};function i(u,c,h,d){return K.isPlainObject(u)&&K.isPlainObject(c)?K.merge.call({caseless:d},u,c):K.isPlainObject(c)?K.merge({},c):K.isArray(c)?c.slice():c}function s(u,c,h,d){if(K.isUndefined(c)){if(!K.isUndefined(u))return i(void 0,u,h,d)}else return i(u,c,h,d)}function r(u,c){if(!K.isUndefined(c))return i(void 0,c)}function o(u,c){if(K.isUndefined(c)){if(!K.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function a(u,c,h){if(h in e)return i(u,c);if(h in t)return i(void 0,u)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c,h)=>s(kf(u),kf(c),h,!0)};return K.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||s,d=h(t[c],e[c],c);K.isUndefined(d)&&h!==a||(n[c]=d)}),n}const tv=t=>{const e=Hs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=mn.from(o),e.url=Yg(ev(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(K.isFormData(n)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...c]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...c].join("; "))}}if(tn.hasStandardBrowserEnv&&(i&&K.isFunction(i)&&(i=i(e)),i||i!==!1&&jS(e.url))){const u=s&&r&&qS.read(r);u&&o.set(s,u)}return e},ZS=typeof XMLHttpRequest<"u",JS=ZS&&function(t){return new Promise(function(n,i){const s=tv(t);let r=s.data;const o=mn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=s,c,h,d,p,v;function g(){p&&p(),v&&v(),s.cancelToken&&s.cancelToken.unsubscribe(c),s.signal&&s.signal.removeEventListener("abort",c)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function m(){if(!f)return;const b=mn.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:t,request:f};Qg(function(A){n(A),g()},function(A){i(A),g()},L),f=null}"onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(i(new je("Request aborted",je.ECONNABORTED,t,f)),f=null)},f.onerror=function(){i(new je("Network Error",je.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||Kg;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new je(y,L.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,t,f)),f=null},r===void 0&&o.setContentType(null),"setRequestHeader"in f&&K.forEach(o.toJSON(),function(y,L){f.setRequestHeader(L,y)}),K.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),a&&a!=="json"&&(f.responseType=s.responseType),u&&([d,v]=cl(u,!0),f.addEventListener("progress",d)),l&&f.upload&&([h,p]=cl(l),f.upload.addEventListener("progress",h),f.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(c=b=>{f&&(i(!b||b.type?new Or(null,t,f):b),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(c),s.signal&&(s.signal.aborted?c():s.signal.addEventListener("abort",c)));const M=WS(s.url);if(M&&tn.protocols.indexOf(M)===-1){i(new je("Unsupported protocol "+M+":",je.ERR_BAD_REQUEST,t));return}f.send(r||null)})},QS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(u){if(!s){s=!0,a();const c=u instanceof Error?u:this.reason;i.abort(c instanceof je?c:new Or(c instanceof Error?c.message:c))}};let o=e&&setTimeout(()=>{o=null,r(new je(`timeout ${e} of ms exceeded`,je.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(r):u.removeEventListener("abort",r)}),t=null)};t.forEach(u=>u.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>K.asap(a),l}},eT=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},tT=async function*(t,e){for await(const n of nT(t))yield*eT(n,e)},nT=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Bf=(t,e,n,i)=>{const s=tT(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await s.next();if(u){a(),l.close();return}let h=c.byteLength;if(n){let d=r+=h;n(d)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Wl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",nv=Wl&&typeof ReadableStream=="function",iT=Wl&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),iv=(t,...e)=>{try{return!!t(...e)}catch{return!1}},sT=nv&&iv(()=>{let t=!1;const e=new Request(tn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),zf=64*1024,_u=nv&&iv(()=>K.isReadableStream(new Response("").body)),ul={stream:_u&&(t=>t.body)};Wl&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ul[e]&&(ul[e]=K.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new je(`Response type '${e}' is not supported`,je.ERR_NOT_SUPPORT,i)})})})(new Response);const rT=async t=>{if(t==null)return 0;if(K.isBlob(t))return t.size;if(K.isSpecCompliantForm(t))return(await new Request(tn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(K.isArrayBufferView(t)||K.isArrayBuffer(t))return t.byteLength;if(K.isURLSearchParams(t)&&(t=t+""),K.isString(t))return(await iT(t)).byteLength},oT=async(t,e)=>{const n=K.toFiniteNumber(t.getContentLength());return n??rT(e)},aT=Wl&&(async t=>{let{url:e,method:n,data:i,signal:s,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:h="same-origin",fetchOptions:d}=tv(t);u=u?(u+"").toLowerCase():"text";let p=QS([s,r&&r.toAbortSignal()],o),v;const g=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let f;try{if(l&&sT&&n!=="get"&&n!=="head"&&(f=await oT(c,i))!==0){let L=new Request(e,{method:"POST",body:i,duplex:"half"}),P;if(K.isFormData(i)&&(P=L.headers.get("content-type"))&&c.setContentType(P),L.body){const[A,U]=Nf(f,cl(Ff(l)));i=Bf(L.body,zf,A,U)}}K.isString(h)||(h=h?"include":"omit");const m="credentials"in Request.prototype;v=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:i,duplex:"half",credentials:m?h:void 0});let M=await fetch(v,d);const b=_u&&(u==="stream"||u==="response");if(_u&&(a||b&&g)){const L={};["status","statusText","headers"].forEach(T=>{L[T]=M[T]});const P=K.toFiniteNumber(M.headers.get("content-length")),[A,U]=a&&Nf(P,cl(Ff(a),!0))||[];M=new Response(Bf(M.body,zf,A,()=>{U&&U(),g&&g()}),L)}u=u||"text";let y=await ul[K.findKey(ul,u)||"text"](M,t);return!b&&g&&g(),await new Promise((L,P)=>{Qg(L,P,{data:y,headers:mn.from(M.headers),status:M.status,statusText:M.statusText,config:t,request:v})})}catch(m){throw g&&g(),m&&m.name==="TypeError"&&/Load failed|fetch/i.test(m.message)?Object.assign(new je("Network Error",je.ERR_NETWORK,t,v),{cause:m.cause||m}):je.from(m,m&&m.code,t,v)}}),xu={http:MS,xhr:JS,fetch:aT};K.forEach(xu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Hf=t=>`- ${t}`,lT=t=>K.isFunction(t)||t===null||t===!1,sv={getAdapter:t=>{t=K.isArray(t)?t:[t];const{length:e}=t;let n,i;const s={};for(let r=0;r<e;r++){n=t[r];let o;if(i=n,!lT(n)&&(i=xu[(o=String(n)).toLowerCase()],i===void 0))throw new je(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(Hf).join(`
`):" "+Hf(r[0]):"as no adapter specified";throw new je("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:xu};function Mc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Or(null,t)}function Vf(t){return Mc(t),t.headers=mn.from(t.headers),t.data=Ec.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),sv.getAdapter(t.adapter||qo.adapter)(t).then(function(i){return Mc(t),i.data=Ec.call(t,t.transformResponse,i),i.headers=mn.from(i.headers),i},function(i){return Jg(i)||(Mc(t),i&&i.response&&(i.response.data=Ec.call(t,t.transformResponse,i.response),i.response.headers=mn.from(i.response.headers))),Promise.reject(i)})}const rv="1.10.0",Xl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Xl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Gf={};Xl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+rv+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new je(s(o," has been removed"+(n?" in "+n:"")),je.ERR_DEPRECATED);return n&&!Gf[o]&&(Gf[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Xl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function cT(t,e,n){if(typeof t!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new je("option "+r+" must be "+l,je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new je("Unknown option "+r,je.ERR_BAD_OPTION)}}const Va={assertOptions:cT,validators:Xl},ti=Va.validators;let zs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Uf,response:new Uf}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Hs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Va.assertOptions(i,{silentJSONParsing:ti.transitional(ti.boolean),forcedJSONParsing:ti.transitional(ti.boolean),clarifyTimeoutError:ti.transitional(ti.boolean)},!1),s!=null&&(K.isFunction(s)?n.paramsSerializer={serialize:s}:Va.assertOptions(s,{encode:ti.function,serialize:ti.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Va.assertOptions(n,{baseUrl:ti.spelling("baseURL"),withXsrfToken:ti.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&K.merge(r.common,r[n.method]);r&&K.forEach(["delete","get","head","post","put","patch","common"],v=>{delete r[v]}),n.headers=mn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let c,h=0,d;if(!l){const v=[Vf.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,u),d=v.length,c=Promise.resolve(n);h<d;)c=c.then(v[h++],v[h++]);return c}d=a.length;let p=n;for(h=0;h<d;){const v=a[h++],g=a[h++];try{p=v(p)}catch(f){g.call(this,f);break}}try{c=Vf.call(this,p)}catch(v){return Promise.reject(v)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=Hs(this.defaults,e);const n=ev(e.baseURL,e.url,e.allowAbsoluteUrls);return Yg(n,e.params,e.paramsSerializer)}};K.forEach(["delete","get","head","options"],function(e){zs.prototype[e]=function(n,i){return this.request(Hs(i||{},{method:e,url:n,data:(i||{}).data}))}});K.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Hs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}zs.prototype[e]=n(),zs.prototype[e+"Form"]=n(!0)});let uT=class ov{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Or(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new ov(function(s){e=s}),cancel:e}}};function hT(t){return function(n){return t.apply(null,n)}}function dT(t){return K.isObject(t)&&t.isAxiosError===!0}const yu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yu).forEach(([t,e])=>{yu[e]=t});function av(t){const e=new zs(t),n=Fg(zs.prototype.request,e);return K.extend(n,zs.prototype,e,{allOwnKeys:!0}),K.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return av(Hs(t,s))},n}const Rt=av(qo);Rt.Axios=zs;Rt.CanceledError=Or;Rt.CancelToken=uT;Rt.isCancel=Jg;Rt.VERSION=rv;Rt.toFormData=Gl;Rt.AxiosError=je;Rt.Cancel=Rt.CanceledError;Rt.all=function(e){return Promise.all(e)};Rt.spread=hT;Rt.isAxiosError=dT;Rt.mergeConfig=Hs;Rt.AxiosHeaders=mn;Rt.formToJSON=t=>Zg(K.isHTMLForm(t)?new FormData(t):t);Rt.getAdapter=sv.getAdapter;Rt.HttpStatusCode=yu;Rt.default=Rt;const{Axios:hI,AxiosError:dI,CanceledError:fI,isCancel:pI,CancelToken:mI,VERSION:gI,all:vI,Cancel:_I,isAxiosError:xI,spread:yI,toFormData:EI,AxiosHeaders:MI,HttpStatusCode:wI,formToJSON:bI,getAdapter:SI,mergeConfig:TI}=Rt,Nr=Rt.create({baseURL:"/api",timeout:5e3,headers:{"ngrok-skip-browser-warning":"true"}});Nr.interceptors.request.use();Nr.interceptors.response.use(t=>t.data,t=>{if(t.response)switch(t.response.status){case 400:t.response.data.msg;break;case 401:break;case 403:break;case 404:break;default:t.response.data.msg||`${t.response.status}`}else t.request&&t.message.includes("timeout");return Promise.reject(t)});const fT=t=>Nr.get(`/vrhall/details/${t}`),pT=(t,e,n,i,s)=>{const r=new URLSearchParams;return t&&r.append("keyword",t),e&&r.append("page",e.toString()),r.append("size",n.toString()),i&&r.append("type",i.toString()),s&&r.append("during",s.toString()),Nr.get(`/items/search?${r.toString()}`)},lv=t=>Nr.get(`/items/${t}`),mT=t=>Nr.get(`/items/suggestions?keyword=${t}`),gT={class:"flex flex-col"},vT={class:"border-2 border-primary bg-primary/70 text-white w-[8rem] text-lg flex justify-center items-center focus-within:w-[16rem] ease-in-out duration-200"},_T={class:"relative"},xT={key:0,class:"absolute visible z-50 top-2 w-[16rem]"},yT={class:"my-backdrop-blur-lg"},ET=["onClick"],MT=["innerHTML"],wT=Ht({__name:"SearchBar",emits:["search-clicked"],setup(t,{expose:e,emit:n}){const i=vt(""),s=vt([]),r=n,o=Nb(async c=>{if(c.trim()===""){s.value=[];return}try{const h=await mT(c);s.value=h.data}catch(h){console.error("获取搜索建议失败:",h),s.value=[]}},1e3),a=()=>{o(i.value)},l=async()=>{s.value=[],r("search-clicked")},u=c=>{const h=c.replace(/<.?em>/g,"");i.value=h,s.value=[],r("search-clicked")};return e({serachContent:i}),(c,h)=>(Le(),He("div",gT,[ae("div",vT,[Ay(ae("input",{type:"text",placeholder:"搜索",class:"flex-1 w-[calc(100%-2rem)] outline-0 px-2","onUpdate:modelValue":h[0]||(h[0]=d=>i.value=d),onInput:a,onKeyup:oM(l,["enter"])},null,544),[[sM,i.value]]),ae("div",{class:"w-[2rem] bg-primary h-[2rem] flex justify-center items-center hover:bg-primary-600 cursor-pointer",onClick:l},[Qe(Ob)])]),ae("div",_T,[Qe(zh,{name:"slide-down"},{default:Wo(()=>[s.value.length>0&&i.value?(Le(),He("div",xT,[ae("div",yT,[(Le(!0),He(Tt,null,Ni(s.value,(d,p)=>(Le(),He("div",{key:p,class:"text-md text-primary-100 px-3 md:px-5 py-2 flex items-center justify-between hover:text-white hover:bg-primary-300/30",onClick:v=>u(d)},[ae("span",{innerHTML:d},null,8,MT)],8,ET))),128))])])):ui("",!0)]),_:1})])]))}}),bT=Nn(wT,[["__scopeId","data-v-5c91f583"]]),ST={class:"flex flex-col items-center background"},TT={class:"max-w-[1600px] min-h-[80vh] pb-8 px-4 md:px-8 lg:px-16 w-full back"},AT={class:"flex justify-between py-4 md:py-8"},CT={class:"flex gap-3 md:gap-6"},RT={class:"flex flex-wrap gap-4"},PT=["onClick"],LT={class:"w-full h-70 overflow-hidden flex justify-center items-center bg-secondary rounded-md"},IT=["src","alt"],DT={class:"py-3"},UT={class:"text-primary text-xl font-bold mb-1"},OT={class:"text-secondary-600 text-md"},NT=Ht({__name:"CollectionsView",setup(t){const e=Lg(),n=[{name:"全部",value:void 0},{name:"清代康熙末年（1662 — 1722年）——萌芽时期",value:1},{name:"清代雍正年间（1723 — 1735）——初具风貌",value:2},{name:"清代乾隆年间（1736 — 1796）——发展成熟",value:3},{name:"嘉庆道光年间（1796 — 1850年）——转型时期",value:4},{name:"清末民国（1851 — 1949年）——日渐式微",value:5},{name:"当代（1950至今）——恢复发展",value:6}],i=[{name:"全部",value:void 0},{name:"大盘",value:1},{name:"纹盘",value:2},{name:"托盘",value:3},{name:"纹瓶",value:4}],s=vt([]),r=vt(),o=vt(),a=vt(),l=vt(1),u=async()=>{var g,f;const h=r.value?r.value.serachContent:void 0,d=(g=a.value)==null?void 0:g.activeItemValue,p=(f=o.value)==null?void 0:f.activeItemValue,v=await pT(h,l.value,24,d,p);s.value=v.data.records},c=h=>{e.push(`/collections/${h}`)};return pi(()=>u()),un([()=>{var h;return(h=o.value)==null?void 0:h.activeItemValue},()=>{var h;return(h=a.value)==null?void 0:h.activeItemValue}],()=>{u()}),(h,d)=>(Le(),He("div",ST,[Qe(Ng,{"background-url":"/cpdc-platform/collections/banner.png","title-color":"primary"}),ae("main",TT,[ae("div",AT,[ae("div",CT,[Qe(Pf,{ref_key:"duringFilterRef",ref:o,name:"时代",items:n},null,512),Qe(Pf,{ref_key:"typeFilterRef",ref:a,name:"分类",items:i},null,512)]),Qe(bT,{ref_key:"searchBarRef",ref:r,onSearchClicked:u},null,512)]),ae("div",RT,[(Le(!0),He(Tt,null,Ni(s.value,(p,v)=>(Le(),He("div",{class:"w-full md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] cursor-pointer",key:v,onClick:g=>c(p.id)},[ae("div",LT,[ae("img",{class:"object-cover h-full",src:p.image,alt:p.imageAlt},null,8,IT)]),ae("div",DT,[ae("h2",UT,Dt(p.name),1),ae("div",OT,Dt(p.title),1)])],8,PT))),128))])])]))}}),FT=Nn(NT,[["__scopeId","data-v-34c0bb8a"]]),kT={class:"collection-detail-view background"},BT={key:0,class:"max-w-[1200px] mx-auto py-8 px-4 md:px-8"},zT={class:"text-3xl md:text-4xl font-bold mb-4 text-primary"},HT={class:"flex flex-col md:flex-row md:gap-8"},VT={class:"md:w-1/2 mb-4 md:mb-0"},GT=["src","alt"],WT={class:"md:w-1/2 bg-white p-6 rounded-md shadow-md"},XT={class:"text-lg md:text-xl mb-2 text-secondary-700"},$T={class:"text-lg md:text-xl mb-2 text-secondary-700"},jT={class:"text-lg md:text-xl mb-4 leading-relaxed text-secondary-800 whitespace-pre-wrap"},qT={key:1,class:"text-center py-8 text-xl text-gray-500"},YT=Ht({__name:"CollectionDetailView",setup(t){const e=Ig(),n=vt(null),i=async s=>{try{const r=await lv(parseInt(s));r.code===200&&r.data?(n.value=r.data,n.value&&n.value.content&&(n.value.content=n.value.content.replace(/\\n/g,`
`))):(console.error("获取瓷器详细信息失败:",r.message),n.value=null)}catch(r){console.error("请求瓷器详细信息出错:",r),n.value=null}};return pi(()=>{e.params.id&&i(e.params.id)}),un(()=>e.params.id,s=>{s&&i(s)}),(s,r)=>{const o=qm("router-link");return Le(),He("div",kT,[n.value?(Le(),He("div",BT,[ae("h1",zT,Dt(n.value.name),1),ae("div",HT,[ae("div",VT,[ae("img",{src:n.value.image,alt:n.value.imageAlt,class:"w-full h-auto object-cover rounded-md shadow-lg"},null,8,GT)]),ae("div",WT,[ae("p",XT,[r[0]||(r[0]=ae("strong",null,"属性:",-1)),Xn(" "+Dt(n.value.attribute),1)]),ae("p",$T,[r[1]||(r[1]=ae("strong",null,"时期:",-1)),Xn(" "+Dt(n.value.during),1)]),ae("p",jT,[r[2]||(r[2]=ae("strong",null,"描述:",-1)),Xn(" "+Dt(n.value.content),1)]),Qe(o,{to:"/collections",class:"text-primary hover:underline font-medium"},{default:Wo(()=>r[3]||(r[3]=[Xn("← 返回藏品列表")])),_:1,__:[3]})])])])):(Le(),He("div",qT,"加载中... 或未找到瓷器信息。"))])}}}),KT=Nn(YT,[["__scopeId","data-v-ff7f2702"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="175",ZT=0,Wf=1,JT=2,cv=1,QT=2,bi=3,hs=0,gn=1,Ci=2,ss=0,wr=1,Xf=2,$f=3,jf=4,e1=5,Ds=100,t1=101,n1=102,i1=103,s1=104,r1=200,o1=201,a1=202,l1=203,Eu=204,Mu=205,c1=206,u1=207,h1=208,d1=209,f1=210,p1=211,m1=212,g1=213,v1=214,wu=0,bu=1,Su=2,Rr=3,Tu=4,Au=5,Cu=6,Ru=7,uv=0,_1=1,x1=2,rs=0,hv=1,y1=2,E1=3,M1=4,w1=5,b1=6,S1=7,dv=300,Pr=301,Lr=302,Pu=303,Lu=304,$l=306,Iu=1e3,Fs=1001,Du=1002,Yn=1003,T1=1004,ua=1005,Sn=1006,wc=1007,ns=1008,Fi=1009,fv=1010,pv=1011,Oo=1012,jh=1013,Vs=1014,Ri=1015,Yo=1016,qh=1017,Yh=1018,No=1020,mv=35902,gv=1021,vv=1022,$n=1023,_v=1024,xv=1025,Fo=1026,ko=1027,yv=1028,Kh=1029,Ev=1030,Zh=1031,Jh=1033,Ga=33776,Wa=33777,Xa=33778,$a=33779,Uu=35840,Ou=35841,Nu=35842,Fu=35843,ku=36196,Bu=37492,zu=37496,Hu=37808,Vu=37809,Gu=37810,Wu=37811,Xu=37812,$u=37813,ju=37814,qu=37815,Yu=37816,Ku=37817,Zu=37818,Ju=37819,Qu=37820,eh=37821,ja=36492,th=36494,nh=36495,Mv=36283,ih=36284,sh=36285,rh=36286,A1=3200,C1=3201,R1=0,P1=1,es="",In="srgb",Gs="srgb-linear",hl="linear",mt="srgb",Ys=7680,qf=519,L1=512,I1=513,D1=514,wv=515,U1=516,O1=517,N1=518,F1=519,Yf=35044,Kf="300 es",Pi=2e3,dl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zf=1234567;const uo=Math.PI/180,Bo=180/Math.PI;function kr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Qh(t,e){return(t%e+e)%e}function k1(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function B1(t,e,n){return t!==e?(n-t)/(e-t):0}function ho(t,e,n){return(1-n)*t+n*e}function z1(t,e,n,i){return ho(t,e,1-Math.exp(-n*i))}function H1(t,e=1){return e-Math.abs(Qh(t,e*2)-e)}function V1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function G1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function W1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function X1(t,e){return t+Math.random()*(e-t)}function $1(t){return t*(.5-Math.random())}function j1(t){t!==void 0&&(Zf=t);let e=Zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q1(t){return t*uo}function Y1(t){return t*Bo}function K1(t){return(t&t-1)===0&&t!==0}function Z1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function J1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Q1(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),u=r((e+i)/2),c=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":t.set(a*c,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*v,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*v,a*u);break;case"ZYZ":t.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:uo,RAD2DEG:Bo,generateUUID:kr,clamp:et,euclideanModulo:Qh,mapLinear:k1,inverseLerp:B1,lerp:ho,damp:z1,pingpong:H1,smoothstep:V1,smootherstep:G1,randInt:W1,randFloat:X1,randFloatSpread:$1,seededRandom:j1,degToRad:q1,radToDeg:Y1,isPowerOfTwo:K1,ceilPowerOfTwo:Z1,floorPowerOfTwo:J1,setQuaternionFromProperEuler:Q1,normalize:rn,denormalize:dr};class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,s,r,o,a,l,u){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,u)}set(e,n,i,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=n,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],v=i[8],g=s[0],f=s[3],m=s[6],M=s[1],b=s[4],y=s[7],L=s[2],P=s[5],A=s[8];return r[0]=o*g+a*M+l*L,r[3]=o*f+a*b+l*P,r[6]=o*m+a*y+l*A,r[1]=u*g+c*M+h*L,r[4]=u*f+c*b+h*P,r[7]=u*m+c*y+h*A,r[2]=d*g+p*M+v*L,r[5]=d*f+p*b+v*P,r[8]=d*m+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*r,p=u*r-o*l,v=n*h+i*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(s*u-c*i)*g,e[2]=(a*i-s*o)*g,e[3]=d*g,e[4]=(c*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=p*g,e[7]=(i*l-u*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new Ke;function bv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eA(){const t=fl("canvas");return t.style.display="block",t}const Jf={};function qa(t){t in Jf||(Jf[t]=!0,console.warn(t))}function tA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function nA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sA(){const t={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?hl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gs]:{primaries:e,whitePoint:i,transfer:hl,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const it=sA();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function br(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ks;class rA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=fl("canvas")),Ks.width=e.width,Ks.height=e.height;const s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oA=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sc(s[o].image)):r.push(Sc(s[o]))}else r=Sc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Sc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aA=0;class qt extends Fr{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Fs,s=Fs,r=Sn,o=ns,a=$n,l=Fi,u=qt.DEFAULT_ANISOTROPY,c=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=kr(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Iu:e.x=e.x-Math.floor(e.x);break;case Fs:e.x=e.x<0?0:1;break;case Du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Iu:e.y=e.y-Math.floor(e.y);break;case Fs:e.y=e.y<0?0:1;break;case Du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=dv;qt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],v=l[9],g=l[2],f=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+f)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(u+1)/2,y=(p+1)/2,L=(m+1)/2,P=(c+d)/4,A=(h+g)/4,U=(v+f)/4;return b>y&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=A/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=P/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=U/r),this.set(i,s,r,n),this}let M=Math.sqrt((f-v)*(f-v)+(h-g)*(h-g)+(d-c)*(d-c));return Math.abs(M)<.001&&(M=1),this.x=(f-v)/M,this.y=(h-g)/M,this.z=(d-c)/M,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lA extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new ed(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends lA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sv extends qt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cA extends qt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(h!==g||l!==d||u!==p||c!==v){let f=1-a;const m=l*d+u*p+c*v+h*g,M=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const L=Math.sqrt(b),P=Math.atan2(L,m*M);f=Math.sin(f*P)/L,a=Math.sin(a*P)/L}const y=a*M;if(l=l*f+d*y,u=u*f+p*y,c=c*f+v*y,h=h*f+g*y,f===1-a){const L=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=L,u*=L,c*=L,h*=L}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[n]=a*v+c*h+l*p-u*d,e[n+1]=l*v+c*d+u*h-a*p,e[n+2]=u*v+c*p+a*d-l*h,e[n+3]=c*v-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"YXZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"ZXY":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"ZYX":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"YZX":this._x=d*c*h+u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h-d*p*v;break;case"XZY":this._x=d*c*h-u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),c=2*(a*n-r*s),h=2*(r*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new V,tp=new Xs;class Br{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),da.subVectors(this.max,$r),Zs.subVectors(e.a,$r),Js.subVectors(e.b,$r),Qs.subVectors(e.c,$r),Gi.subVectors(Js,Zs),Wi.subVectors(Qs,Js),ws.subVectors(Zs,Qs);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ws.z,ws.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ws.z,0,-ws.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ws.y,ws.x,0];return!Ac(n,Zs,Js,Qs,da)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,Zs,Js,Qs,da))?!1:(fa.crossVectors(Gi,Wi),n=[fa.x,fa.y,fa.z],Ac(n,Zs,Js,Qs,da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new V,new V,new V,new V,new V,new V,new V,new V],zn=new V,ha=new Br,Zs=new V,Js=new V,Qs=new V,Gi=new V,Wi=new V,ws=new V,$r=new V,da=new V,fa=new V,bs=new V;function Ac(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){bs.fromArray(t,r);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),u=n.dot(bs),c=i.dot(bs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const uA=new Br,jr=new V,Cc=new V;class td{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const n=jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Cc)),this.expandByPoint(jr.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new V,Rc=new V,pa=new V,Xi=new V,Pc=new V,ma=new V,Lc=new V;class Tv{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Rc.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(Rc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=Xi.dot(this.direction),l=-Xi.dot(pa),u=Xi.lengthSq(),c=Math.abs(1-o*o);let h,d,p,v;if(c>0)if(h=o*l-a,d=o*a-l,v=r*c,h>=0)if(d>=-v)if(d<=v){const g=1/c;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Rc).addScaledVector(pa,d),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,s,r){Pc.subVectors(n,e),ma.subVectors(i,e),Lc.crossVectors(Pc,ma);let o=this.direction.dot(Lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(Xi,ma));if(l<0)return null;const u=a*this.direction.dot(Pc.cross(Xi));if(u<0||l+u>o)return null;const c=-a*Xi.dot(Lc);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,s,r,o,a,l,u,c,h,d,p,v,g,f){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,u,c,h,d,p,v,g,f)}set(e,n,i,s,r,o,a,l,u,c,h,d,p,v,g,f){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=h,m[14]=d,m[3]=p,m[7]=v,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*c,p=o*h,v=a*c,g=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=d-g*u,n[9]=-a*l,n[2]=g-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,v=u*c,g=u*h;n[0]=d+g*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,v=u*c,g=u*h;n[0]=d-g*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=g-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,v=a*c,g=a*h;n[0]=l*c,n[4]=v*u-p,n[8]=d*u+g,n[1]=l*h,n[5]=g*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,g=a*u;n[0]=l*c,n[4]=g-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+v,n[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,g=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+g,n[5]=o*c,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*c,n[10]=g*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hA,e,dA)}lookAt(e,n,i){const s=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),$i.crossVectors(i,yn),$i.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),$i.crossVectors(i,yn)),$i.normalize(),ga.crossVectors(yn,$i),s[0]=$i.x,s[4]=ga.x,s[8]=yn.x,s[1]=$i.y,s[5]=ga.y,s[9]=yn.y,s[2]=$i.z,s[6]=ga.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],v=i[2],g=i[6],f=i[10],m=i[14],M=i[3],b=i[7],y=i[11],L=i[15],P=s[0],A=s[4],U=s[8],T=s[12],w=s[1],I=s[5],F=s[9],z=s[13],Q=s[2],oe=s[6],J=s[10],ne=s[14],G=s[3],ve=s[7],Me=s[11],Re=s[15];return r[0]=o*P+a*w+l*Q+u*G,r[4]=o*A+a*I+l*oe+u*ve,r[8]=o*U+a*F+l*J+u*Me,r[12]=o*T+a*z+l*ne+u*Re,r[1]=c*P+h*w+d*Q+p*G,r[5]=c*A+h*I+d*oe+p*ve,r[9]=c*U+h*F+d*J+p*Me,r[13]=c*T+h*z+d*ne+p*Re,r[2]=v*P+g*w+f*Q+m*G,r[6]=v*A+g*I+f*oe+m*ve,r[10]=v*U+g*F+f*J+m*Me,r[14]=v*T+g*z+f*ne+m*Re,r[3]=M*P+b*w+y*Q+L*G,r[7]=M*A+b*I+y*oe+L*ve,r[11]=M*U+b*F+y*J+L*Me,r[15]=M*T+b*z+y*ne+L*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],v=e[3],g=e[7],f=e[11],m=e[15];return v*(+r*l*h-s*u*h-r*a*d+i*u*d+s*a*p-i*l*p)+g*(+n*l*p-n*u*d+r*o*d-s*o*p+s*u*c-r*l*c)+f*(+n*u*h-n*a*p-r*o*h+i*o*p+r*a*c-i*u*c)+m*(-s*a*c-n*l*h+n*a*d+s*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],v=e[12],g=e[13],f=e[14],m=e[15],M=h*f*u-g*d*u+g*l*p-a*f*p-h*l*m+a*d*m,b=v*d*u-c*f*u-v*l*p+o*f*p+c*l*m-o*d*m,y=c*g*u-v*h*u+v*a*p-o*g*p-c*a*m+o*h*m,L=v*h*l-c*g*l-v*a*d+o*g*d+c*a*f-o*h*f,P=n*M+i*b+s*y+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=M*A,e[1]=(g*d*r-h*f*r-g*s*p+i*f*p+h*s*m-i*d*m)*A,e[2]=(a*f*r-g*l*r+g*s*u-i*f*u-a*s*m+i*l*m)*A,e[3]=(h*l*r-a*d*r-h*s*u+i*d*u+a*s*p-i*l*p)*A,e[4]=b*A,e[5]=(c*f*r-v*d*r+v*s*p-n*f*p-c*s*m+n*d*m)*A,e[6]=(v*l*r-o*f*r-v*s*u+n*f*u+o*s*m-n*l*m)*A,e[7]=(o*d*r-c*l*r+c*s*u-n*d*u-o*s*p+n*l*p)*A,e[8]=y*A,e[9]=(v*h*r-c*g*r-v*i*p+n*g*p+c*i*m-n*h*m)*A,e[10]=(o*g*r-v*a*r+v*i*u-n*g*u-o*i*m+n*a*m)*A,e[11]=(c*a*r-o*h*r-c*i*u+n*h*u+o*i*p-n*a*p)*A,e[12]=L*A,e[13]=(c*g*s-v*h*s+v*i*d-n*g*d-c*i*f+n*h*f)*A,e[14]=(v*a*s-o*g*s-v*i*l+n*g*l+o*i*f-n*a*f)*A,e[15]=(o*h*s-c*a*s+c*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,u=r+r,c=o+o,h=a+a,d=r*u,p=r*c,v=r*h,g=o*c,f=o*h,m=a*h,M=l*u,b=l*c,y=l*h,L=i.x,P=i.y,A=i.z;return s[0]=(1-(g+m))*L,s[1]=(p+y)*L,s[2]=(v-b)*L,s[3]=0,s[4]=(p-y)*P,s[5]=(1-(d+m))*P,s[6]=(f+M)*P,s[7]=0,s[8]=(v+b)*A,s[9]=(f-M)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=er.set(s[0],s[1],s[2]).length();const o=er.set(s[4],s[5],s[6]).length(),a=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const u=1/r,c=1/o,h=1/a;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=c,Hn.elements[5]*=c,Hn.elements[6]*=c,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,n.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Pi){const l=this.elements,u=2*r/(n-e),c=2*r/(i-s),h=(n+e)/(n-e),d=(i+s)/(i-s);let p,v;if(a===Pi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===dl)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Pi){const l=this.elements,u=1/(n-e),c=1/(i-s),h=1/(o-r),d=(n+e)*u,p=(i+s)*c;let v,g;if(a===Pi)v=(o+r)*h,g=-2*h;else if(a===dl)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const er=new V,Hn=new wt,hA=new V(0,0,0),dA=new V(1,1,1),$i=new V,ga=new V,yn=new V,np=new wt,ip=new Xs;class fi{constructor(e=0,n=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fA=0;const sp=new V,tr=new Xs,Ei=new wt,va=new V,qr=new V,pA=new V,mA=new Xs,rp=new V(1,0,0),op=new V(0,1,0),ap=new V(0,0,1),lp={type:"added"},gA={type:"removed"},nr={type:"childadded",child:null},Ic={type:"childremoved",child:null};class vn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new V,n=new fi,i=new Xs,s=new V(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ke}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return tr.setFromAxisAngle(e,n),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,n){return tr.setFromAxisAngle(e,n),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,n){return sp.copy(e).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?va.copy(e):va.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(qr,va,this.up):Ei.lookAt(va,qr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ei),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lp),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gA),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lp),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,pA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,mA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new V(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new V,Mi=new V,Dc=new V,wi=new V,ir=new V,sr=new V,cp=new V,Uc=new V,Oc=new V,Nc=new V,Fc=new At,kc=new At,Bc=new At;class Wn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Vn.subVectors(e,n),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Vn.subVectors(s,n),Mi.subVectors(i,n),Dc.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(Mi),l=Vn.dot(Dc),u=Mi.dot(Mi),c=Mi.dot(Dc),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Fc.setScalar(0),kc.setScalar(0),Bc.setScalar(0),Fc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,i),Bc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(kc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(e,n,i,s){return Vn.subVectors(i,n),Mi.subVectors(e,n),Vn.cross(Mi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Vn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;ir.subVectors(s,i),sr.subVectors(r,i),Uc.subVectors(e,i);const l=ir.dot(Uc),u=sr.dot(Uc);if(l<=0&&u<=0)return n.copy(i);Oc.subVectors(e,s);const c=ir.dot(Oc),h=sr.dot(Oc);if(c>=0&&h<=c)return n.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ir,o);Nc.subVectors(e,r);const p=ir.dot(Nc),v=sr.dot(Nc);if(v>=0&&p<=v)return n.copy(r);const g=p*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(sr,a);const f=c*v-p*h;if(f<=0&&h-c>=0&&p-v>=0)return cp.subVectors(r,s),a=(h-c)/(h-c+(p-v)),n.copy(s).addScaledVector(cp,a);const m=1/(f+g+d);return o=g*m,a=d*m,n.copy(i).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},_a={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=it.workingColorSpace){if(e=Qh(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,n=In){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=Av[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return it.fromWorkingColorSpace(Zt.copy(this),e),Math.round(et(Zt.r*255,0,255))*65536+Math.round(et(Zt.g*255,0,255))*256+Math.round(et(Zt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=In){it.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,s=Zt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(_a);const i=ho(ji.h,_a.h,n),s=ho(ji.s,_a.s,n),r=ho(ji.l,_a.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new pt;pt.NAMES=Av;let vA=0;class jl extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=wr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Mu,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(i.blending=this.blending),this.side!==hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eu&&(i.blendSrc=this.blendSrc),this.blendDst!==Mu&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ko extends jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new V,xa=new ht;let _A=0;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_A++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yf,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xa.fromBufferAttribute(this,n),xa.applyMatrix3(e),this.setXY(n,xa.x,xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=dr(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=dr(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=dr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=dr(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}}class Cv extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rv extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xA=0;const Pn=new wt,Hc=new vn,rr=new V,En=new Br,Yr=new Br,Nt=new V;class gs extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bv(e)?Rv:Cv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new td);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(En.min,Yr.min),En.expandByPoint(Nt),Nt.addVectors(En.max,Yr.max),En.expandByPoint(Nt)):(En.expandByPoint(Yr.min),En.expandByPoint(Yr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(rr.fromBufferAttribute(e,u),Nt.add(rr)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new V,l[U]=new V;const u=new V,c=new V,h=new V,d=new ht,p=new ht,v=new ht,g=new V,f=new V;function m(U,T,w){u.fromBufferAttribute(i,U),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,w),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,w),c.sub(u),h.sub(u),p.sub(d),v.sub(d);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(I),f.copy(h).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(I),a[U].add(g),a[T].add(g),a[w].add(g),l[U].add(f),l[T].add(f),l[w].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,T=M.length;U<T;++U){const w=M[U],I=w.start,F=w.count;for(let z=I,Q=I+F;z<Q;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new V,y=new V,L=new V,P=new V;function A(U){L.fromBufferAttribute(s,U),P.copy(L);const T=a[U];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),y.crossVectors(P,T);const I=y.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,I)}for(let U=0,T=M.length;U<T;++U){const w=M[U],I=w.start,F=w.count;for(let z=I,Q=I+F;z<Q;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,u=new V,c=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,f),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,f),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let m=0;m<c;m++)d[v++]=u[p++]}return new hi(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gs,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);n.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(n))}const r=e.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new wt,Ss=new Tv,ya=new td,hp=new V,Ea=new V,Ma=new V,wa=new V,Vc=new V,ba=new V,dp=new V,Sa=new V;class Tn extends vn{constructor(e=new gs,n=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(Vc.fromBufferAttribute(h,e),o?ba.addScaledVector(Vc,c):ba.addScaledVector(Vc.sub(n),c))}n.add(ba)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(ya.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(ya,hp)===null||Ss.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(up.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(up),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const f=d[v],m=o[f.materialIndex],M=Math.max(f.start,p.start),b=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let y=M,L=b;y<L;y+=3){const P=a.getX(y),A=a.getX(y+1),U=a.getX(y+2);s=Ta(this,m,e,i,u,c,h,P,A,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,n.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let f=v,m=g;f<m;f+=3){const M=a.getX(f),b=a.getX(f+1),y=a.getX(f+2);s=Ta(this,o,e,i,u,c,h,M,b,y),s&&(s.faceIndex=Math.floor(f/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const f=d[v],m=o[f.materialIndex],M=Math.max(f.start,p.start),b=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let y=M,L=b;y<L;y+=3){const P=y,A=y+1,U=y+2;s=Ta(this,m,e,i,u,c,h,P,A,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,n.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=v,m=g;f<m;f+=3){const M=f,b=f+1,y=f+2;s=Ta(this,o,e,i,u,c,h,M,b,y),s&&(s.faceIndex=Math.floor(f/3),n.push(s))}}}}function yA(t,e,n,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===hs,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Sa);return u<n.near||u>n.far?null:{distance:u,point:Sa.clone(),object:t}}function Ta(t,e,n,i,s,r,o,a,l,u){t.getVertexPosition(a,Ea),t.getVertexPosition(l,Ma),t.getVertexPosition(u,wa);const c=yA(t,e,n,i,Ea,Ma,wa,dp);if(c){const h=new V;Wn.getBarycoord(dp,Ea,Ma,wa,h),s&&(c.uv=Wn.getInterpolatedAttribute(s,a,l,u,h,new ht)),r&&(c.uv1=Wn.getInterpolatedAttribute(r,a,l,u,h,new ht)),o&&(c.normal=Wn.getInterpolatedAttribute(o,a,l,u,h,new V),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};Wn.getNormal(Ea,Ma,wa,d.normal),c.face=d,c.barycoord=h}return c}class Zo extends gs{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new di(u,3)),this.setAttribute("normal",new di(c,3)),this.setAttribute("uv",new di(h,2));function v(g,f,m,M,b,y,L,P,A,U,T){const w=y/A,I=L/U,F=y/2,z=L/2,Q=P/2,oe=A+1,J=U+1;let ne=0,G=0;const ve=new V;for(let Me=0;Me<J;Me++){const Re=Me*I-z;for(let De=0;De<oe;De++){const tt=De*w-F;ve[g]=tt*M,ve[f]=Re*b,ve[m]=Q,u.push(ve.x,ve.y,ve.z),ve[g]=0,ve[f]=0,ve[m]=P>0?1:-1,c.push(ve.x,ve.y,ve.z),h.push(De/A),h.push(1-Me/U),ne+=1}}for(let Me=0;Me<U;Me++)for(let Re=0;Re<A;Re++){const De=d+Re+oe*Me,tt=d+Re+oe*(Me+1),se=d+(Re+1)+oe*(Me+1),me=d+(Re+1)+oe*Me;l.push(De,tt,me),l.push(tt,se,me),G+=6}a.addGroup(p,G,T),p+=G,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Ir(t[n]);for(const s in i)e[s]=i[s]}return e}function EA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Pv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const MA={clone:Ir,merge:on};var wA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wA,this.fragmentShader=bA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=EA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lv extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new V,fp=new ht,pp=new ht;class Dn extends Lv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,fp,pp),n.subVectors(pp,fp)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const or=-90,ar=1;class SA extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(or,ar,e,n);s.layers=this.layers,this.add(s);const r=new Dn(or,ar,e,n);r.layers=this.layers,this.add(r);const o=new Dn(or,ar,e,n);o.layers=this.layers,this.add(o);const a=new Dn(or,ar,e,n);a.layers=this.layers,this.add(a);const l=new Dn(or,ar,e,n);l.layers=this.layers,this.add(l);const u=new Dn(or,ar,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const u of n)this.remove(u);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Iv extends qt{constructor(e=[],n=Pr,i,s,r,o,a,l,u,c){super(e,n,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TA extends ds{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Iv(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zo(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ss});r.uniforms.tEquirect.value=n;const o=new Tn(s,r),a=n.minFilter;return n.minFilter===ns&&(n.minFilter=Sn),new SA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class ks extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const f=n.getJointPose(g,i),m=this._getHandJoint(u,g);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class oh extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wc=new V,CA=new V,RA=new Ke;class Ps{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Wc.subVectors(i,n).cross(CA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RA.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new td,Aa=new V;class id{constructor(e=new Ps,n=new Ps,i=new Ps,s=new Ps,r=new Ps,o=new Ps){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],d=s[7],p=s[8],v=s[9],g=s[10],f=s[11],m=s[12],M=s[13],b=s[14],y=s[15];if(i[0].setComponents(l-r,d-u,f-p,y-m).normalize(),i[1].setComponents(l+r,d+u,f+p,y+m).normalize(),i[2].setComponents(l+o,d+c,f+v,y+M).normalize(),i[3].setComponents(l-o,d-c,f-v,y-M).normalize(),i[4].setComponents(l-a,d-h,f-g,y-b).normalize(),n===Pi)i[5].setComponents(l+a,d+h,f+g,y+b).normalize();else if(n===dl)i[5].setComponents(a,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class PA extends qt{constructor(e,n,i,s,r=Sn,o=Sn,a,l,u){super(e,n,i,s,r,o,a,l,u),this.isVideoTexture=!0,this.generateMipmaps=!1;const c=this;function h(){c.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Dv extends qt{constructor(e,n,i=Vs,s,r,o,a=Yn,l=Yn,u,c=Fo){if(c!==Fo&&c!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Jo extends gs{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=e/a,d=n/l,p=[],v=[],g=[],f=[];for(let m=0;m<c;m++){const M=m*d-o;for(let b=0;b<u;b++){const y=b*h-r;v.push(y,-M,0),g.push(0,0,1),f.push(b/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const b=M+u*m,y=M+u*(m+1),L=M+1+u*(m+1),P=M+1+u*m;p.push(b,y,P),p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new di(v,3)),this.setAttribute("normal",new di(g,3)),this.setAttribute("uv",new di(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qo extends gs{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new V,d=new V,p=[],v=[],g=[],f=[];for(let m=0;m<=i;m++){const M=[],b=m/i;let y=0;m===0&&o===0?y=.5/n:m===i&&l===Math.PI&&(y=-.5/n);for(let L=0;L<=n;L++){const P=L/n;h.x=-e*Math.cos(s+P*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+b*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),f.push(P+y,1-b),M.push(u++)}c.push(M)}for(let m=0;m<i;m++)for(let M=0;M<n;M++){const b=c[m][M+1],y=c[m][M],L=c[m+1][M],P=c[m+1][M+1];(m!==0||o>0)&&p.push(b,y,P),(m!==i-1||l<Math.PI)&&p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new di(v,3)),this.setAttribute("normal",new di(g,3)),this.setAttribute("uv",new di(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class LA extends jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IA extends jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ah={enabled:!1};class DA{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const UA=new DA;let sd=class{constructor(e){this.manager=e!==void 0?e:UA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sd.DEFAULT_MATERIAL_NAME="__DEFAULT";class OA extends Lv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class NA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const mp=new wt;class FA{constructor(e,n,i=0,s=1/0){this.ray=new Tv(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,n=!0,i=[]){return lh(e,this,i,n),i.sort(gp),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)lh(e[s],this,i,n);return i.sort(gp),i}}function gp(t,e){return t.distance-e.distance}function lh(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)lh(r[o],e,n,!0)}}function vp(t,e,n,i){const s=kA(i);switch(n){case gv:return t*e;case _v:return t*e;case xv:return t*e*2;case yv:return t*e/s.components*s.byteLength;case Kh:return t*e/s.components*s.byteLength;case Ev:return t*e*2/s.components*s.byteLength;case Zh:return t*e*2/s.components*s.byteLength;case vv:return t*e*3/s.components*s.byteLength;case $n:return t*e*4/s.components*s.byteLength;case Jh:return t*e*4/s.components*s.byteLength;case Ga:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xa:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ou:case Fu:return Math.max(t,16)*Math.max(e,8)/4;case Uu:case Nu:return Math.max(t,8)*Math.max(e,8)/2;case ku:case Bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ju:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ja:case th:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mv:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sh:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kA(t){switch(t){case Fi:case fv:return{byteLength:1,components:1};case Oo:case pv:case Yo:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Vs:case jh:case Ri:return{byteLength:4,components:1};case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function BA(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],g=h[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const g=h[p];t.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var zA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HA=`#ifdef USE_ALPHAHASH
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
#endif`,VA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$A=`#ifdef USE_AOMAP
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
#endif`,jA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QA=`#ifdef USE_IRIDESCENCE
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
#endif`,eC=`#ifdef USE_BUMPMAP
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
#endif`,tC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cC=`#define PI 3.141592653589793
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
} // validated`,uC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hC=`vec3 transformedNormal = objectNormal;
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
#endif`,dC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gC="gl_FragColor = linearToOutputTexel( gl_FragColor );",vC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_C=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,xC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yC=`#ifdef USE_ENVMAP
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
#endif`,EC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AC=`#ifdef USE_GRADIENTMAP
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
}`,CC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LC=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,IC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,DC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FC=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,kC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,BC=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,zC=`#if defined( RE_IndirectDiffuse )
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
#endif`,HC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$C=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YC=`#if defined( USE_POINTS_UV )
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
#endif`,KC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lR=`#ifdef USE_NORMALMAP
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
#endif`,cR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,mR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_R=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,MR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TR=`#ifdef USE_SKINNING
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
#endif`,AR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,RR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IR=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DR=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UR=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zR=`uniform sampler2D t2D;
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
}`,HR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,$R=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jR=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,qR=`#define DISTANCE
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZR=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
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
}`,QR=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,eP=`uniform vec3 diffuse;
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
}`,tP=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,nP=`#define LAMBERT
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
}`,iP=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,sP=`#define MATCAP
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
}`,rP=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,oP=`#define NORMAL
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
}`,aP=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,lP=`#define PHONG
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
}`,cP=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,uP=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,hP=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,dP=`#define TOON
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
}`,fP=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,pP=`uniform vec3 diffuse;
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
}`,mP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gP=`uniform vec3 color;
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
}`,vP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_P=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:zA,alphahash_pars_fragment:HA,alphamap_fragment:VA,alphamap_pars_fragment:GA,alphatest_fragment:WA,alphatest_pars_fragment:XA,aomap_fragment:$A,aomap_pars_fragment:jA,batching_pars_vertex:qA,batching_vertex:YA,begin_vertex:KA,beginnormal_vertex:ZA,bsdfs:JA,iridescence_fragment:QA,bumpmap_pars_fragment:eC,clipping_planes_fragment:tC,clipping_planes_pars_fragment:nC,clipping_planes_pars_vertex:iC,clipping_planes_vertex:sC,color_fragment:rC,color_pars_fragment:oC,color_pars_vertex:aC,color_vertex:lC,common:cC,cube_uv_reflection_fragment:uC,defaultnormal_vertex:hC,displacementmap_pars_vertex:dC,displacementmap_vertex:fC,emissivemap_fragment:pC,emissivemap_pars_fragment:mC,colorspace_fragment:gC,colorspace_pars_fragment:vC,envmap_fragment:_C,envmap_common_pars_fragment:xC,envmap_pars_fragment:yC,envmap_pars_vertex:EC,envmap_physical_pars_fragment:IC,envmap_vertex:MC,fog_vertex:wC,fog_pars_vertex:bC,fog_fragment:SC,fog_pars_fragment:TC,gradientmap_pars_fragment:AC,lightmap_pars_fragment:CC,lights_lambert_fragment:RC,lights_lambert_pars_fragment:PC,lights_pars_begin:LC,lights_toon_fragment:DC,lights_toon_pars_fragment:UC,lights_phong_fragment:OC,lights_phong_pars_fragment:NC,lights_physical_fragment:FC,lights_physical_pars_fragment:kC,lights_fragment_begin:BC,lights_fragment_maps:zC,lights_fragment_end:HC,logdepthbuf_fragment:VC,logdepthbuf_pars_fragment:GC,logdepthbuf_pars_vertex:WC,logdepthbuf_vertex:XC,map_fragment:$C,map_pars_fragment:jC,map_particle_fragment:qC,map_particle_pars_fragment:YC,metalnessmap_fragment:KC,metalnessmap_pars_fragment:ZC,morphinstance_vertex:JC,morphcolor_vertex:QC,morphnormal_vertex:eR,morphtarget_pars_vertex:tR,morphtarget_vertex:nR,normal_fragment_begin:iR,normal_fragment_maps:sR,normal_pars_fragment:rR,normal_pars_vertex:oR,normal_vertex:aR,normalmap_pars_fragment:lR,clearcoat_normal_fragment_begin:cR,clearcoat_normal_fragment_maps:uR,clearcoat_pars_fragment:hR,iridescence_pars_fragment:dR,opaque_fragment:fR,packing:pR,premultiplied_alpha_fragment:mR,project_vertex:gR,dithering_fragment:vR,dithering_pars_fragment:_R,roughnessmap_fragment:xR,roughnessmap_pars_fragment:yR,shadowmap_pars_fragment:ER,shadowmap_pars_vertex:MR,shadowmap_vertex:wR,shadowmask_pars_fragment:bR,skinbase_vertex:SR,skinning_pars_vertex:TR,skinning_vertex:AR,skinnormal_vertex:CR,specularmap_fragment:RR,specularmap_pars_fragment:PR,tonemapping_fragment:LR,tonemapping_pars_fragment:IR,transmission_fragment:DR,transmission_pars_fragment:UR,uv_pars_fragment:OR,uv_pars_vertex:NR,uv_vertex:FR,worldpos_vertex:kR,background_vert:BR,background_frag:zR,backgroundCube_vert:HR,backgroundCube_frag:VR,cube_vert:GR,cube_frag:WR,depth_vert:XR,depth_frag:$R,distanceRGBA_vert:jR,distanceRGBA_frag:qR,equirect_vert:YR,equirect_frag:KR,linedashed_vert:ZR,linedashed_frag:JR,meshbasic_vert:QR,meshbasic_frag:eP,meshlambert_vert:tP,meshlambert_frag:nP,meshmatcap_vert:iP,meshmatcap_frag:sP,meshnormal_vert:rP,meshnormal_frag:oP,meshphong_vert:aP,meshphong_frag:lP,meshphysical_vert:cP,meshphysical_frag:uP,meshtoon_vert:hP,meshtoon_frag:dP,points_vert:fP,points_frag:pP,shadow_vert:mP,shadow_frag:gP,sprite_vert:vP,sprite_frag:_P},ye={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},oi={basic:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:on([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:on([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:on([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:on([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:on([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:on([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:on([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:on([ye.lights,ye.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};oi.physical={uniforms:on([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ca={r:0,b:0,g:0},As=new fi,xP=new wt;function yP(t,e,n,i,s,r,o){const a=new pt(0);let l=r===!0?0:1,u,c,h=null,d=0,p=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?n:e).get(y)),y}function g(b){let y=!1;const L=v(b);L===null?m(a,l):L&&L.isColor&&(m(L,1),y=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(b,y){const L=v(y);L&&(L.isCubeTexture||L.mapping===$l)?(c===void 0&&(c=new Tn(new Zo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ir(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),As.copy(y.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),c.material.uniforms.envMap.value=L,c.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xP.makeRotationFromEuler(As)),c.material.toneMapped=it.getTransfer(L.colorSpace)!==mt,(h!==L||d!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=L,d=L.version,p=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):L&&L.isTexture&&(u===void 0&&(u=new Tn(new Jo(2,2),new ki({name:"BackgroundMaterial",uniforms:Ir(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=L,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=it.getTransfer(L.colorSpace)!==mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),u.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=L,d=L.version,p=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function m(b,y){b.getRGB(Ca,Pv(t)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,y,o)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:g,addToRenderList:f,dispose:M}}function EP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(w,I,F,z,Q){let oe=!1;const J=h(z,F,I);r!==J&&(r=J,u(r.object)),oe=p(w,z,F,Q),oe&&v(w,z,F,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,y(w,I,F,z),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function u(w){return t.bindVertexArray(w)}function c(w){return t.deleteVertexArray(w)}function h(w,I,F){const z=F.wireframe===!0;let Q=i[w.id];Q===void 0&&(Q={},i[w.id]=Q);let oe=Q[I.id];oe===void 0&&(oe={},Q[I.id]=oe);let J=oe[z];return J===void 0&&(J=d(l()),oe[z]=J),J}function d(w){const I=[],F=[],z=[];for(let Q=0;Q<n;Q++)I[Q]=0,F[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:z,object:w,attributes:{},index:null}}function p(w,I,F,z){const Q=r.attributes,oe=I.attributes;let J=0;const ne=F.getAttributes();for(const G in ne)if(ne[G].location>=0){const Me=Q[G];let Re=oe[G];if(Re===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Re=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Re=w.instanceColor)),Me===void 0||Me.attribute!==Re||Re&&Me.data!==Re.data)return!0;J++}return r.attributesNum!==J||r.index!==z}function v(w,I,F,z){const Q={},oe=I.attributes;let J=0;const ne=F.getAttributes();for(const G in ne)if(ne[G].location>=0){let Me=oe[G];Me===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor));const Re={};Re.attribute=Me,Me&&Me.data&&(Re.data=Me.data),Q[G]=Re,J++}r.attributes=Q,r.attributesNum=J,r.index=z}function g(){const w=r.newAttributes;for(let I=0,F=w.length;I<F;I++)w[I]=0}function f(w){m(w,0)}function m(w,I){const F=r.newAttributes,z=r.enabledAttributes,Q=r.attributeDivisors;F[w]=1,z[w]===0&&(t.enableVertexAttribArray(w),z[w]=1),Q[w]!==I&&(t.vertexAttribDivisor(w,I),Q[w]=I)}function M(){const w=r.newAttributes,I=r.enabledAttributes;for(let F=0,z=I.length;F<z;F++)I[F]!==w[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function b(w,I,F,z,Q,oe,J){J===!0?t.vertexAttribIPointer(w,I,F,Q,oe):t.vertexAttribPointer(w,I,F,z,Q,oe)}function y(w,I,F,z){g();const Q=z.attributes,oe=F.getAttributes(),J=I.defaultAttributeValues;for(const ne in oe){const G=oe[ne];if(G.location>=0){let ve=Q[ne];if(ve===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor)),ve!==void 0){const Me=ve.normalized,Re=ve.itemSize,De=e.get(ve);if(De===void 0)continue;const tt=De.buffer,se=De.type,me=De.bytesPerElement,we=se===t.INT||se===t.UNSIGNED_INT||ve.gpuType===jh;if(ve.isInterleavedBufferAttribute){const O=ve.data,re=O.stride,ce=ve.offset;if(O.isInstancedInterleavedBuffer){for(let ue=0;ue<G.locationSize;ue++)m(G.location+ue,O.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ue=0;ue<G.locationSize;ue++)f(G.location+ue);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ue=0;ue<G.locationSize;ue++)b(G.location+ue,Re/G.locationSize,se,Me,re*me,(ce+Re/G.locationSize*ue)*me,we)}else{if(ve.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)m(G.location+O,ve.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let O=0;O<G.locationSize;O++)f(G.location+O);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let O=0;O<G.locationSize;O++)b(G.location+O,Re/G.locationSize,se,Me,Re*me,Re/G.locationSize*O*me,we)}}else if(J!==void 0){const Me=J[ne];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(G.location,Me);break;case 3:t.vertexAttrib3fv(G.location,Me);break;case 4:t.vertexAttrib4fv(G.location,Me);break;default:t.vertexAttrib1fv(G.location,Me)}}}}M()}function L(){U();for(const w in i){const I=i[w];for(const F in I){const z=I[F];for(const Q in z)c(z[Q].object),delete z[Q];delete I[F]}delete i[w]}}function P(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const F in I){const z=I[F];for(const Q in z)c(z[Q].object),delete z[Q];delete I[F]}delete i[w.id]}function A(w){for(const I in i){const F=i[I];if(F[w.id]===void 0)continue;const z=F[w.id];for(const Q in z)c(z[Q].object),delete z[Q];delete F[w.id]}}function U(){T(),o=!0,r!==s&&(r=s,u(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:f,disableUnusedAttributes:M}}function MP(t,e,n){let i;function s(u){i=u}function r(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let v=0;v<h;v++)p+=c[v];n.update(p,i,1)}function l(u,c,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=c[g]*d[g];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wP(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==$n&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Fi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ri&&!U)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function bP(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ps,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,m=t.get(h);if(!s||v===null||v.length===0||r&&!f)r?c(null):u();else{const M=r?0:i,b=M*4;let y=m.clippingState||null;l.value=y,y=c(v,d,b,p);for(let L=0;L!==b;++L)y[L]=n[L];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,v){const g=h!==null?h.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const m=p+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let b=0,y=p;b!==g;++b,y+=4)o.copy(h[b]).applyMatrix4(M,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function SP(t){let e=new WeakMap;function n(o,a){return a===Pu?o.mapping=Pr:a===Lu&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pu||a===Lu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new TA(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",s),n(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const mr=4,_p=[.125,.215,.35,.446,.526,.582],Us=20,Xc=new OA,xp=new pt;let $c=null,jc=0,qc=0,Yc=!1;const Ls=(1+Math.sqrt(5))/2,lr=1/Ls,yp=[new V(-Ls,lr,0),new V(Ls,lr,0),new V(-lr,0,Ls),new V(lr,0,Ls),new V(0,Ls,-lr),new V(0,Ls,lr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],TP=new V;class Ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=TP}=r;$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,jc,qc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Yo,format:$n,colorSpace:Gs,depthBuffer:!1},s=Mp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AP(r)),this._blurMaterial=CP(r,e,n)}return s}_compileMaterial(e){const n=new Tn(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,s,r){const l=new Dn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(xp),h.toneMapping=rs,h.autoClear=!1;const v=new Ko({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Tn(new Zo,v);let f=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,f=!0):(v.color.copy(xp),f=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,u[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[M],r.y,r.z)):b===1?(l.up.set(0,0,u[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[M],r.z)):(l.up.set(0,u[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[M]));const y=this._cubeSize;Ra(s,b*y,M>2?y:0,y,y),h.setRenderTarget(s),f&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Pr||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ra(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yp[(s-r-1)%yp.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Tn(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Us-1),g=r/v,f=isFinite(r)?1+Math.floor(c*g):Us;f>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Us}`);const m=[];let M=0;for(let A=0;A<Us;++A){const U=A/g,T=Math.exp(-U*U/2);m.push(T),A===0?M+=T:A<f&&(M+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const y=this._sizeLods[s],L=3*y*(s>b-mr?s-b+mr:0),P=4*(this._cubeSize-y);Ra(n,L,P,3*y,2*y),l.setRenderTarget(n),l.render(h,Xc)}}function AP(t){const e=[],n=[],i=[];let s=t;const r=t-mr+1+_p.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-mr?l=_p[o-t+mr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,v=6,g=3,f=2,m=1,M=new Float32Array(g*v*p),b=new Float32Array(f*v*p),y=new Float32Array(m*v*p);for(let P=0;P<p;P++){const A=P%3*2/3-1,U=P>2?0:-1,T=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];M.set(T,g*v*P),b.set(d,f*v*P);const w=[P,P,P,P,P,P];y.set(w,m*v*P)}const L=new gs;L.setAttribute("position",new hi(M,g)),L.setAttribute("uv",new hi(b,f)),L.setAttribute("faceIndex",new hi(y,m)),e.push(L),s>mr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mp(t,e,n){const i=new ds(t,e,n);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function CP(t,e,n){const i=new Float32Array(Us),s=new V(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rd(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function wp(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function bp(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function RP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Pu||l===Lu,c=l===Pr||l===Lr;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ep(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&s(p)?(n===null&&(n=new Ep(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&qa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function LP(t,e,n,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function u(h){const d=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let b=0,y=M.length;b<y;b+=3){const L=M[b+0],P=M[b+1],A=M[b+2];d.push(L,P,P,A,A,L)}}else if(v!==void 0){const M=v.array;g=v.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const L=b+0,P=b+1,A=b+2;d.push(L,P,P,A,A,L)}}else return;const f=new(bv(d)?Rv:Cv)(d,1);f.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,f)}function c(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function IP(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function u(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,r,d*o,v),n.update(p,i,v))}function c(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,v);let f=0;for(let m=0;m<v;m++)f+=p[m];n.update(f,i,1)}function h(d,p,v,g){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)u(d[m]/o,p[m],g[m]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,g,0,v);let m=0;for(let M=0;M<v;M++)m+=p[M]*g[M];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function DP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function UP(t,e,n){const i=new WeakMap,s=new At;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let w=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var p=w;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),f===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*P*4*h),U=new Sv(A,L,P,h);U.type=Ri,U.needsUpdate=!0;const T=y*4;for(let I=0;I<h;I++){const F=m[I],z=M[I],Q=b[I],oe=L*P*4*I;for(let J=0;J<F.count;J++){const ne=J*T;v===!0&&(s.fromBufferAttribute(F,J),A[oe+ne+0]=s.x,A[oe+ne+1]=s.y,A[oe+ne+2]=s.z,A[oe+ne+3]=0),g===!0&&(s.fromBufferAttribute(z,J),A[oe+ne+4]=s.x,A[oe+ne+5]=s.y,A[oe+ne+6]=s.z,A[oe+ne+7]=0),f===!0&&(s.fromBufferAttribute(Q,J),A[oe+ne+8]=s.x,A[oe+ne+9]=s.y,A[oe+ne+10]=s.z,A[oe+ne+11]=Q.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new ht(L,P)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let f=0;f<u.length;f++)v+=u[f];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function OP(t,e,n,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:o}}const Ov=new qt,Sp=new Dv(1,1),Nv=new Sv,Fv=new cA,kv=new Iv,Tp=[],Ap=[],Cp=new Float32Array(16),Rp=new Float32Array(9),Pp=new Float32Array(4);function zr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Tp[s];if(r===void 0&&(r=new Float32Array(s),Tp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ql(t,e){let n=Ap[e];n===void 0&&(n=new Int32Array(e),Ap[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function kP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function BP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function zP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;Pp.set(i),t.uniformMatrix2fv(this.addr,!1,Pp),Ot(n,i)}}function HP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;Rp.set(i),t.uniformMatrix3fv(this.addr,!1,Rp),Ot(n,i)}}function VP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;Cp.set(i),t.uniformMatrix4fv(this.addr,!1,Cp),Ot(n,i)}}function GP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function XP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function $P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function jP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function YP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function KP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function ZP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Sp.compareFunction=wv,r=Sp):r=Ov,n.setTexture2D(e||r,s)}function JP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Fv,s)}function QP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||kv,s)}function eL(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Nv,s)}function tL(t){switch(t){case 5126:return NP;case 35664:return FP;case 35665:return kP;case 35666:return BP;case 35674:return zP;case 35675:return HP;case 35676:return VP;case 5124:case 35670:return GP;case 35667:case 35671:return WP;case 35668:case 35672:return XP;case 35669:case 35673:return $P;case 5125:return jP;case 36294:return qP;case 36295:return YP;case 36296:return KP;case 35678:case 36198:case 36298:case 36306:case 35682:return ZP;case 35679:case 36299:case 36307:return JP;case 35680:case 36300:case 36308:case 36293:return QP;case 36289:case 36303:case 36311:case 36292:return eL}}function nL(t,e){t.uniform1fv(this.addr,e)}function iL(t,e){const n=zr(e,this.size,2);t.uniform2fv(this.addr,n)}function sL(t,e){const n=zr(e,this.size,3);t.uniform3fv(this.addr,n)}function rL(t,e){const n=zr(e,this.size,4);t.uniform4fv(this.addr,n)}function oL(t,e){const n=zr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aL(t,e){const n=zr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lL(t,e){const n=zr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cL(t,e){t.uniform1iv(this.addr,e)}function uL(t,e){t.uniform2iv(this.addr,e)}function hL(t,e){t.uniform3iv(this.addr,e)}function dL(t,e){t.uniform4iv(this.addr,e)}function fL(t,e){t.uniform1uiv(this.addr,e)}function pL(t,e){t.uniform2uiv(this.addr,e)}function mL(t,e){t.uniform3uiv(this.addr,e)}function gL(t,e){t.uniform4uiv(this.addr,e)}function vL(t,e,n){const i=this.cache,s=e.length,r=ql(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Ov,r[o])}function _L(t,e,n){const i=this.cache,s=e.length,r=ql(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Fv,r[o])}function xL(t,e,n){const i=this.cache,s=e.length,r=ql(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||kv,r[o])}function yL(t,e,n){const i=this.cache,s=e.length,r=ql(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Nv,r[o])}function EL(t){switch(t){case 5126:return nL;case 35664:return iL;case 35665:return sL;case 35666:return rL;case 35674:return oL;case 35675:return aL;case 35676:return lL;case 5124:case 35670:return cL;case 35667:case 35671:return uL;case 35668:case 35672:return hL;case 35669:case 35673:return dL;case 5125:return fL;case 36294:return pL;case 36295:return mL;case 36296:return gL;case 35678:case 36198:case 36298:case 36306:case 35682:return vL;case 35679:case 36299:case 36307:return _L;case 35680:case 36300:case 36308:case 36293:return xL;case 36289:case 36303:case 36311:case 36292:return yL}}class ML{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tL(n.type)}}class wL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EL(n.type)}}class bL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Lp(t,e){t.seq.push(e),t.map[e.id]=e}function SL(t,e,n){const i=t.name,s=i.length;for(Kc.lastIndex=0;;){const r=Kc.exec(i),o=Kc.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Lp(n,u===void 0?new ML(a,t,e):new wL(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new bL(a),Lp(n,h)),n=h}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);SL(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Ip(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const TL=37297;let AL=0;function CL(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Dp=new Ke;function RL(t){it._getMatrix(Dp,it.workingColorSpace,t);const e=`mat3( ${Dp.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case hl:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Up(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+CL(t.getShaderSource(e),o)}else return s}function PL(t,e){const n=RL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function LL(t,e){let n;switch(e){case hv:n="Linear";break;case y1:n="Reinhard";break;case E1:n="Cineon";break;case M1:n="ACESFilmic";break;case b1:n="AgX";break;case S1:n="Neutral";break;case w1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pa=new V;function IL(){it.getLuminanceCoefficients(Pa);const t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function UL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function eo(t){return t!==""}function Op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NL=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(t){return t.replace(NL,kL)}const FL=new Map;function kL(t,e){let n=Ze[e];if(n===void 0){const i=FL.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ch(n)}const BL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(t){return t.replace(BL,zL)}function zL(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===QT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function VL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function WL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case uv:e="ENVMAP_BLENDING_MULTIPLY";break;case _1:e="ENVMAP_BLENDING_MIX";break;case x1:e="ENVMAP_BLENDING_ADD";break}return e}function XL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $L(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=HL(n),u=VL(n),c=GL(n),h=WL(n),d=XL(n),p=DL(n),v=UL(r),g=s.createProgram();let f,m,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(eo).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(eo).join(`
`),m.length>0&&(m+=`
`)):(f=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),m=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rs?"#define TONE_MAPPING":"",n.toneMapping!==rs?Ze.tonemapping_pars_fragment:"",n.toneMapping!==rs?LL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,PL("linearToOutputTexel",n.outputColorSpace),IL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),o=ch(o),o=Op(o,n),o=Np(o,n),a=ch(a),a=Op(a,n),a=Np(a,n),o=Fp(o),a=Fp(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",n.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=M+f+o,y=M+m+a,L=Ip(s,s.VERTEX_SHADER,b),P=Ip(s,s.FRAGMENT_SHADER,y);s.attachShader(g,L),s.attachShader(g,P),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(t.debug.checkShaderErrors){const F=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(L).trim(),Q=s.getShaderInfoLog(P).trim();let oe=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,L,P);else{const ne=Up(s,L,"vertex"),G=Up(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+ne+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||Q==="")&&(J=!1);J&&(I.diagnostics={runnable:oe,programLog:F,vertexShader:{log:z,prefix:f},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(L),s.deleteShader(P),U=new Ya(s,g),T=OL(s,g)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,TL)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AL++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=P,this}let jL=0;class qL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YL(e),n.set(e,i)),i}}class YL{constructor(e){this.id=jL++,this.code=e,this.usedTimes=0}}function KL(t,e,n,i,s,r,o){const a=new nd,l=new qL,u=new Set,c=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return u.add(T),T===0?"uv":`uv${T}`}function f(T,w,I,F,z){const Q=F.fog,oe=z.geometry,J=T.isMeshStandardMaterial?F.environment:null,ne=(T.isMeshStandardMaterial?n:e).get(T.envMap||J),G=ne&&ne.mapping===$l?ne.image.height:null,ve=v[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Me=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Re=Me!==void 0?Me.length:0;let De=0;oe.morphAttributes.position!==void 0&&(De=1),oe.morphAttributes.normal!==void 0&&(De=2),oe.morphAttributes.color!==void 0&&(De=3);let tt,se,me,we;if(ve){const ft=oi[ve];tt=ft.vertexShader,se=ft.fragmentShader}else tt=T.vertexShader,se=T.fragmentShader,l.update(T),me=l.getVertexShaderID(T),we=l.getFragmentShaderID(T);const O=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),ce=z.isInstancedMesh===!0,ue=z.isBatchedMesh===!0,Ne=!!T.map,C=!!T.matcap,R=!!ne,x=!!T.aoMap,ie=!!T.lightMap,Y=!!T.bumpMap,X=!!T.normalMap,ee=!!T.displacementMap,he=!!T.emissiveMap,Z=!!T.metalnessMap,E=!!T.roughnessMap,_=T.anisotropy>0,D=T.clearcoat>0,H=T.dispersion>0,$=T.iridescence>0,W=T.sheen>0,ge=T.transmission>0,de=_&&!!T.anisotropyMap,_e=D&&!!T.clearcoatMap,Be=D&&!!T.clearcoatNormalMap,fe=D&&!!T.clearcoatRoughnessMap,Ee=$&&!!T.iridescenceMap,Ie=$&&!!T.iridescenceThicknessMap,ze=W&&!!T.sheenColorMap,xe=W&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,$e=!!T.specularColorMap,_t=!!T.specularIntensityMap,N=ge&&!!T.transmissionMap,Se=ge&&!!T.thicknessMap,te=!!T.gradientMap,le=!!T.alphaMap,Ae=T.alphaTest>0,Te=!!T.alphaHash,qe=!!T.extensions;let bt=rs;T.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(bt=t.toneMapping);const Yt={shaderID:ve,shaderType:T.type,shaderName:T.name,vertexShader:tt,fragmentShader:se,defines:T.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ue,batchingColor:ue&&z._colorsTexture!==null,instancing:ce,instancingColor:ce&&z.instanceColor!==null,instancingMorph:ce&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Gs,alphaToCoverage:!!T.alphaToCoverage,map:Ne,matcap:C,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:G,aoMap:x,lightMap:ie,bumpMap:Y,normalMap:X,displacementMap:d&&ee,emissiveMap:he,normalMapObjectSpace:X&&T.normalMapType===P1,normalMapTangentSpace:X&&T.normalMapType===R1,metalnessMap:Z,roughnessMap:E,anisotropy:_,anisotropyMap:de,clearcoat:D,clearcoatMap:_e,clearcoatNormalMap:Be,clearcoatRoughnessMap:fe,dispersion:H,iridescence:$,iridescenceMap:Ee,iridescenceThicknessMap:Ie,sheen:W,sheenColorMap:ze,sheenRoughnessMap:xe,specularMap:Ge,specularColorMap:$e,specularIntensityMap:_t,transmission:ge,transmissionMap:N,thicknessMap:Se,gradientMap:te,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:Te,combine:T.combine,mapUv:Ne&&g(T.map.channel),aoMapUv:x&&g(T.aoMap.channel),lightMapUv:ie&&g(T.lightMap.channel),bumpMapUv:Y&&g(T.bumpMap.channel),normalMapUv:X&&g(T.normalMap.channel),displacementMapUv:ee&&g(T.displacementMap.channel),emissiveMapUv:he&&g(T.emissiveMap.channel),metalnessMapUv:Z&&g(T.metalnessMap.channel),roughnessMapUv:E&&g(T.roughnessMap.channel),anisotropyMapUv:de&&g(T.anisotropyMap.channel),clearcoatMapUv:_e&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(T.sheenRoughnessMap.channel),specularMapUv:Ge&&g(T.specularMap.channel),specularColorMapUv:$e&&g(T.specularColorMap.channel),specularIntensityMapUv:_t&&g(T.specularIntensityMap.channel),transmissionMapUv:N&&g(T.transmissionMap.channel),thicknessMapUv:Se&&g(T.thicknessMap.channel),alphaMapUv:le&&g(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(X||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!oe.attributes.uv&&(Ne||le),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:re,skinning:z.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:De,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:bt,decodeVideoTexture:Ne&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===mt,decodeVideoTextureEmissive:he&&T.emissiveMap.isVideoTexture===!0&&it.getTransfer(T.emissiveMap.colorSpace)===mt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ci,flipSided:T.side===gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=u.has(1),Yt.vertexUv2s=u.has(2),Yt.vertexUv3s=u.has(3),u.clear(),Yt}function m(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)w.push(I),w.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(M(w,T),b(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function M(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function b(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const w=v[T.type];let I;if(w){const F=oi[w];I=MA.clone(F.uniforms)}else I=T.uniforms;return I}function L(T,w){let I;for(let F=0,z=c.length;F<z;F++){const Q=c[F];if(Q.cacheKey===w){I=Q,++I.usedTimes;break}}return I===void 0&&(I=new $L(t,w,T,r),c.push(I)),I}function P(T){if(--T.usedTimes===0){const w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function A(T){l.remove(T)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:A,programs:c,dispose:U}}function ZL(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function JL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h,d,p,v,g,f){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:f},t[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=g,m.group=f),e++,m}function a(h,d,p,v,g,f){const m=o(h,d,p,v,g,f);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):n.push(m)}function l(h,d,p,v,g,f){const m=o(h,d,p,v,g,f);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):n.unshift(m)}function u(h,d){n.length>1&&n.sort(h||JL),i.length>1&&i.sort(d||Bp),s.length>1&&s.sort(d||Bp)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function QL(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new zp,t.set(i,[o])):s>=r.length?(o=new zp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function e2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new pt};break;case"SpotLight":n={position:new V,direction:new V,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function t2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let n2=0;function i2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function s2(t){const e=new e2,n=t2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const s=new V,r=new wt,o=new wt;function a(u){let c=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,g=0,f=0,m=0,M=0,b=0,y=0,L=0,P=0,A=0;u.sort(i2);for(let T=0,w=u.length;T<w;T++){const I=u[T],F=I.color,z=I.intensity,Q=I.distance,oe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=F.r*z,h+=F.g*z,d+=F.b*z;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],z);A++}else if(I.isDirectionalLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,G=n.get(I);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=J,p++}else if(I.isSpotLight){const J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(F).multiplyScalar(z),J.distance=Q,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[g]=J;const ne=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,ne.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[g]=ne.matrix,I.castShadow){const G=n.get(I);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=oe,y++}g++}else if(I.isRectAreaLight){const J=e.get(I);J.color.copy(F).multiplyScalar(z),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[f]=J,f++}else if(I.isPointLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const ne=I.shadow,G=n.get(I);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=oe,i.pointShadowMatrix[v]=I.shadow.matrix,b++}i.point[v]=J,v++}else if(I.isHemisphereLight){const J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(z),J.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[m]=J,m++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==v||U.spotLength!==g||U.rectAreaLength!==f||U.hemiLength!==m||U.numDirectionalShadows!==M||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=f,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,U.directionalLength=p,U.pointLength=v,U.spotLength=g,U.rectAreaLength=f,U.hemiLength=m,U.numDirectionalShadows=M,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=A,i.version=n2++)}function l(u,c){let h=0,d=0,p=0,v=0,g=0;const f=c.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const b=u[m];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),h++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),p++}else if(b.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),o.identity(),r.copy(b.matrixWorld),r.premultiply(f),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),d++}else if(b.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:i}}function Hp(t){const e=new s2(t),n=[],i=[];function s(c){u.camera=c,n.length=0,i.length=0}function r(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function r2(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hp(t),e.set(s,[a])):r>=o.length?(a=new Hp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const o2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
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
}`;function l2(t,e,n){let i=new id;const s=new ht,r=new ht,o=new At,a=new LA({depthPacking:C1}),l=new IA,u={},c=n.maxTextureSize,h={[hs]:gn,[gn]:hs,[Ci]:Ci},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:o2,fragmentShader:a2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new gs;v.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tn(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let m=this.type;this.render=function(P,A,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ss),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=m!==bi&&this.type===bi,Q=m===bi&&this.type!==bi;for(let oe=0,J=P.length;oe<J;oe++){const ne=P[oe],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ve=G.getFrameExtents();if(s.multiply(ve),r.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ve.x),s.x=r.x*ve.x,G.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ve.y),s.y=r.y*ve.y,G.mapSize.y=r.y)),G.map===null||z===!0||Q===!0){const Re=this.type!==bi?{minFilter:Yn,magFilter:Yn}:{};G.map!==null&&G.map.dispose(),G.map=new ds(s.x,s.y,Re),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const Me=G.getViewportCount();for(let Re=0;Re<Me;Re++){const De=G.getViewport(Re);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),F.viewport(o),G.updateMatrices(ne,Re),i=G.getFrustum(),y(A,U,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===bi&&M(G,U),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,t.setRenderTarget(T,w,I)};function M(P,A){const U=e.update(g);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ds(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(A,null,U,d,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(A,null,U,p,g,null)}function b(P,A,U,T){let w=null;const I=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)w=I;else if(w=U.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=w.uuid,z=A.uuid;let Q=u[F];Q===void 0&&(Q={},u[F]=Q);let oe=Q[z];oe===void 0&&(oe=w.clone(),Q[z]=oe,A.addEventListener("dispose",L)),w=oe}if(w.visible=A.visible,w.wireframe=A.wireframe,T===bi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=t.properties.get(w);F.light=U}return w}function y(P,A,U,T,w){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===bi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const z=e.update(P),Q=P.material;if(Array.isArray(Q)){const oe=z.groups;for(let J=0,ne=oe.length;J<ne;J++){const G=oe[J],ve=Q[G.materialIndex];if(ve&&ve.visible){const Me=b(P,ve,T,w);P.onBeforeShadow(t,P,A,U,z,Me,G),t.renderBufferDirect(U,null,z,Me,P,G),P.onAfterShadow(t,P,A,U,z,Me,G)}}}else if(Q.visible){const oe=b(P,Q,T,w);P.onBeforeShadow(t,P,A,U,z,oe,null),t.renderBufferDirect(U,null,z,oe,P,null),P.onAfterShadow(t,P,A,U,z,oe,null)}}const F=P.children;for(let z=0,Q=F.length;z<Q;z++)y(F[z],A,U,T,w)}function L(P){P.target.removeEventListener("dispose",L);for(const U in u){const T=u[U],w=P.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const c2={[wu]:bu,[Su]:Cu,[Tu]:Ru,[Rr]:Au,[bu]:wu,[Cu]:Su,[Ru]:Tu,[Au]:Rr};function u2(t,e){function n(){let N=!1;const Se=new At;let te=null;const le=new At(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!N&&(t.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){N=Ae},setClear:function(Ae,Te,qe,bt,Yt){Yt===!0&&(Ae*=bt,Te*=bt,qe*=bt),Se.set(Ae,Te,qe,bt),le.equals(Se)===!1&&(t.clearColor(Ae,Te,qe,bt),le.copy(Se))},reset:function(){N=!1,te=null,le.set(-1,0,0,0)}}}function i(){let N=!1,Se=!1,te=null,le=null,Ae=null;return{setReversed:function(Te){if(Se!==Te){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=Te;const bt=Ae;Ae=null,this.setClear(bt)}},getReversed:function(){return Se},setTest:function(Te){Te?O(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(Te){te!==Te&&!N&&(t.depthMask(Te),te=Te)},setFunc:function(Te){if(Se&&(Te=c2[Te]),le!==Te){switch(Te){case wu:t.depthFunc(t.NEVER);break;case bu:t.depthFunc(t.ALWAYS);break;case Su:t.depthFunc(t.LESS);break;case Rr:t.depthFunc(t.LEQUAL);break;case Tu:t.depthFunc(t.EQUAL);break;case Au:t.depthFunc(t.GEQUAL);break;case Cu:t.depthFunc(t.GREATER);break;case Ru:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Te}},setLocked:function(Te){N=Te},setClear:function(Te){Ae!==Te&&(Se&&(Te=1-Te),t.clearDepth(Te),Ae=Te)},reset:function(){N=!1,te=null,le=null,Ae=null,Se=!1}}}function s(){let N=!1,Se=null,te=null,le=null,Ae=null,Te=null,qe=null,bt=null,Yt=null;return{setTest:function(ft){N||(ft?O(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ft){Se!==ft&&!N&&(t.stencilMask(ft),Se=ft)},setFunc:function(ft,kn,mi){(te!==ft||le!==kn||Ae!==mi)&&(t.stencilFunc(ft,kn,mi),te=ft,le=kn,Ae=mi)},setOp:function(ft,kn,mi){(Te!==ft||qe!==kn||bt!==mi)&&(t.stencilOp(ft,kn,mi),Te=ft,qe=kn,bt=mi)},setLocked:function(ft){N=ft},setClear:function(ft){Yt!==ft&&(t.clearStencil(ft),Yt=ft)},reset:function(){N=!1,Se=null,te=null,le=null,Ae=null,Te=null,qe=null,bt=null,Yt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,p=[],v=null,g=!1,f=null,m=null,M=null,b=null,y=null,L=null,P=null,A=new pt(0,0,0),U=0,T=!1,w=null,I=null,F=null,z=null,Q=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=ne>=2);let ve=null,Me={};const Re=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),tt=new At().fromArray(Re),se=new At().fromArray(De);function me(N,Se,te,le){const Ae=new Uint8Array(4),Te=t.createTexture();t.bindTexture(N,Te),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<te;qe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(Se+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return Te}const we={};we[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(t.DEPTH_TEST),o.setFunc(Rr),Y(!1),X(Wf),O(t.CULL_FACE),x(ss);function O(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function re(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function ce(N,Se){return h[N]!==Se?(t.bindFramebuffer(N,Se),h[N]=Se,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Se),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function ue(N,Se){let te=p,le=!1;if(N){te=d.get(Se),te===void 0&&(te=[],d.set(Se,te));const Ae=N.textures;if(te.length!==Ae.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,qe=Ae.length;Te<qe;Te++)te[Te]=t.COLOR_ATTACHMENT0+Te;te.length=Ae.length,le=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,le=!0);le&&t.drawBuffers(te)}function Ne(N){return v!==N?(t.useProgram(N),v=N,!0):!1}const C={[Ds]:t.FUNC_ADD,[t1]:t.FUNC_SUBTRACT,[n1]:t.FUNC_REVERSE_SUBTRACT};C[i1]=t.MIN,C[s1]=t.MAX;const R={[r1]:t.ZERO,[o1]:t.ONE,[a1]:t.SRC_COLOR,[Eu]:t.SRC_ALPHA,[f1]:t.SRC_ALPHA_SATURATE,[h1]:t.DST_COLOR,[c1]:t.DST_ALPHA,[l1]:t.ONE_MINUS_SRC_COLOR,[Mu]:t.ONE_MINUS_SRC_ALPHA,[d1]:t.ONE_MINUS_DST_COLOR,[u1]:t.ONE_MINUS_DST_ALPHA,[p1]:t.CONSTANT_COLOR,[m1]:t.ONE_MINUS_CONSTANT_COLOR,[g1]:t.CONSTANT_ALPHA,[v1]:t.ONE_MINUS_CONSTANT_ALPHA};function x(N,Se,te,le,Ae,Te,qe,bt,Yt,ft){if(N===ss){g===!0&&(re(t.BLEND),g=!1);return}if(g===!1&&(O(t.BLEND),g=!0),N!==e1){if(N!==f||ft!==T){if((m!==Ds||y!==Ds)&&(t.blendEquation(t.FUNC_ADD),m=Ds,y=Ds),ft)switch(N){case wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.ONE,t.ONE);break;case $f:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $f:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,L=null,P=null,A.set(0,0,0),U=0,f=N,T=ft}return}Ae=Ae||Se,Te=Te||te,qe=qe||le,(Se!==m||Ae!==y)&&(t.blendEquationSeparate(C[Se],C[Ae]),m=Se,y=Ae),(te!==M||le!==b||Te!==L||qe!==P)&&(t.blendFuncSeparate(R[te],R[le],R[Te],R[qe]),M=te,b=le,L=Te,P=qe),(bt.equals(A)===!1||Yt!==U)&&(t.blendColor(bt.r,bt.g,bt.b,Yt),A.copy(bt),U=Yt),f=N,T=!1}function ie(N,Se){N.side===Ci?re(t.CULL_FACE):O(t.CULL_FACE);let te=N.side===gn;Se&&(te=!te),Y(te),N.blending===wr&&N.transparent===!1?x(ss):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const le=N.stencilWrite;a.setTest(le),le&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),he(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){w!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),w=N)}function X(N){N!==ZT?(O(t.CULL_FACE),N!==I&&(N===Wf?t.cullFace(t.BACK):N===JT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),I=N}function ee(N){N!==F&&(J&&t.lineWidth(N),F=N)}function he(N,Se,te){N?(O(t.POLYGON_OFFSET_FILL),(z!==Se||Q!==te)&&(t.polygonOffset(Se,te),z=Se,Q=te)):re(t.POLYGON_OFFSET_FILL)}function Z(N){N?O(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function E(N){N===void 0&&(N=t.TEXTURE0+oe-1),ve!==N&&(t.activeTexture(N),ve=N)}function _(N,Se,te){te===void 0&&(ve===null?te=t.TEXTURE0+oe-1:te=ve);let le=Me[te];le===void 0&&(le={type:void 0,texture:void 0},Me[te]=le),(le.type!==N||le.texture!==Se)&&(ve!==te&&(t.activeTexture(te),ve=te),t.bindTexture(N,Se||we[N]),le.type=N,le.texture=Se)}function D(){const N=Me[ve];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function H(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(N){tt.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function xe(N){se.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function Ge(N,Se){let te=u.get(Se);te===void 0&&(te=new WeakMap,u.set(Se,te));let le=te.get(N);le===void 0&&(le=t.getUniformBlockIndex(Se,N.name),te.set(N,le))}function $e(N,Se){const le=u.get(Se).get(N);l.get(Se)!==le&&(t.uniformBlockBinding(Se,le,N.__bindingPointIndex),l.set(Se,le))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},ve=null,Me={},h={},d=new WeakMap,p=[],v=null,g=!1,f=null,m=null,M=null,b=null,y=null,L=null,P=null,A=new pt(0,0,0),U=0,T=!1,w=null,I=null,F=null,z=null,Q=null,tt.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:re,bindFramebuffer:ce,drawBuffers:ue,useProgram:Ne,setBlending:x,setMaterial:ie,setFlipSided:Y,setCullFace:X,setLineWidth:ee,setPolygonOffset:he,setScissorTest:Z,activeTexture:E,bindTexture:_,unbindTexture:D,compressedTexImage2D:H,compressedTexImage3D:$,texImage2D:Ee,texImage3D:Ie,updateUBOMapping:Ge,uniformBlockBinding:$e,texStorage2D:Be,texStorage3D:fe,texSubImage2D:W,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:ze,viewport:xe,reset:_t}}function h2(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return p?new OffscreenCanvas(E,_):fl("canvas")}function g(E,_,D){let H=1;const $=Z(E);if(($.width>D||$.height>D)&&(H=D/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(H*$.width),ge=Math.floor(H*$.height);h===void 0&&(h=v(W,ge));const de=_?v(W,ge):h;return de.width=W,de.height=ge,de.getContext("2d").drawImage(E,0,0,W,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+ge+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function f(E){return E.generateMipmaps}function m(E){t.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(E,_,D,H,$=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=_;if(_===t.RED&&(D===t.FLOAT&&(W=t.R32F),D===t.HALF_FLOAT&&(W=t.R16F),D===t.UNSIGNED_BYTE&&(W=t.R8)),_===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.R8UI),D===t.UNSIGNED_SHORT&&(W=t.R16UI),D===t.UNSIGNED_INT&&(W=t.R32UI),D===t.BYTE&&(W=t.R8I),D===t.SHORT&&(W=t.R16I),D===t.INT&&(W=t.R32I)),_===t.RG&&(D===t.FLOAT&&(W=t.RG32F),D===t.HALF_FLOAT&&(W=t.RG16F),D===t.UNSIGNED_BYTE&&(W=t.RG8)),_===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.RG8UI),D===t.UNSIGNED_SHORT&&(W=t.RG16UI),D===t.UNSIGNED_INT&&(W=t.RG32UI),D===t.BYTE&&(W=t.RG8I),D===t.SHORT&&(W=t.RG16I),D===t.INT&&(W=t.RG32I)),_===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.RGB8UI),D===t.UNSIGNED_SHORT&&(W=t.RGB16UI),D===t.UNSIGNED_INT&&(W=t.RGB32UI),D===t.BYTE&&(W=t.RGB8I),D===t.SHORT&&(W=t.RGB16I),D===t.INT&&(W=t.RGB32I)),_===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),D===t.UNSIGNED_INT&&(W=t.RGBA32UI),D===t.BYTE&&(W=t.RGBA8I),D===t.SHORT&&(W=t.RGBA16I),D===t.INT&&(W=t.RGBA32I)),_===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),_===t.RGBA){const ge=$?hl:it.getTransfer(H);D===t.FLOAT&&(W=t.RGBA32F),D===t.HALF_FLOAT&&(W=t.RGBA16F),D===t.UNSIGNED_BYTE&&(W=ge===mt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(E,_){let D;return E?_===null||_===Vs||_===No?D=t.DEPTH24_STENCIL8:_===Ri?D=t.DEPTH32F_STENCIL8:_===Oo&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vs||_===No?D=t.DEPTH_COMPONENT24:_===Ri?D=t.DEPTH_COMPONENT32F:_===Oo&&(D=t.DEPTH_COMPONENT16),D}function L(E,_){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Yn&&E.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){const _=E.target;_.removeEventListener("dispose",P),U(_),_.isVideoTexture&&c.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),w(_)}function U(E){const _=i.get(E);if(_.__webglInit===void 0)return;const D=E.source,H=d.get(D);if(H){const $=H[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(E),Object.keys(H).length===0&&d.delete(D)}i.remove(E)}function T(E){const _=i.get(E);t.deleteTexture(_.__webglTexture);const D=E.source,H=d.get(D);delete H[_.__cacheKey],o.memory.textures--}function w(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let $=0;$<_.__webglFramebuffer[H].length;$++)t.deleteFramebuffer(_.__webglFramebuffer[H][$]);else t.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)t.deleteFramebuffer(_.__webglFramebuffer[H]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=E.textures;for(let H=0,$=D.length;H<$;H++){const W=i.get(D[H]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(D[H])}i.remove(E)}let I=0;function F(){I=0}function z(){const E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function Q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function oe(E,_){const D=i.get(E);if(E.isVideoTexture&&ee(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(D,E,_);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function J(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){se(D,E,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function ne(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){se(D,E,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function G(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){me(D,E,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}const ve={[Iu]:t.REPEAT,[Fs]:t.CLAMP_TO_EDGE,[Du]:t.MIRRORED_REPEAT},Me={[Yn]:t.NEAREST,[T1]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},Re={[L1]:t.NEVER,[F1]:t.ALWAYS,[I1]:t.LESS,[wv]:t.LEQUAL,[D1]:t.EQUAL,[N1]:t.GEQUAL,[U1]:t.GREATER,[O1]:t.NOTEQUAL};function De(E,_){if(_.type===Ri&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===wc||_.magFilter===ua||_.magFilter===ns||_.minFilter===Sn||_.minFilter===wc||_.minFilter===ua||_.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,ve[_.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,ve[_.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,ve[_.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,Me[_.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,Me[_.minFilter]),_.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yn||_.minFilter!==ua&&_.minFilter!==ns||_.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function tt(E,_){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));const H=_.source;let $=d.get(H);$===void 0&&($={},d.set(H,$));const W=Q(_);if(W!==E.__cacheKey){$[W]===void 0&&($[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[W].usedTimes++;const ge=$[E.__cacheKey];ge!==void 0&&($[E.__cacheKey].usedTimes--,ge.usedTimes===0&&T(_)),E.__cacheKey=W,E.__webglTexture=$[W].texture}return D}function se(E,_,D){let H=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=t.TEXTURE_3D);const $=tt(E,_),W=_.source;n.bindTexture(H,E.__webglTexture,t.TEXTURE0+D);const ge=i.get(W);if(W.version!==ge.__version||$===!0){n.activeTexture(t.TEXTURE0+D);const de=it.getPrimaries(it.workingColorSpace),_e=_.colorSpace===es?null:it.getPrimaries(_.colorSpace),Be=_.colorSpace===es||de===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let fe=g(_.image,!1,s.maxTextureSize);fe=he(_,fe);const Ee=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let ze=b(_.internalFormat,Ee,Ie,_.colorSpace,_.isVideoTexture);De(H,_);let xe;const Ge=_.mipmaps,$e=_.isVideoTexture!==!0,_t=ge.__version===void 0||$===!0,N=W.dataReady,Se=L(_,fe);if(_.isDepthTexture)ze=y(_.format===ko,_.type),_t&&($e?n.texStorage2D(t.TEXTURE_2D,1,ze,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,ze,fe.width,fe.height,0,Ee,Ie,null));else if(_.isDataTexture)if(Ge.length>0){$e&&_t&&n.texStorage2D(t.TEXTURE_2D,Se,ze,Ge[0].width,Ge[0].height);for(let te=0,le=Ge.length;te<le;te++)xe=Ge[te],$e?N&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,xe.width,xe.height,Ee,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,te,ze,xe.width,xe.height,0,Ee,Ie,xe.data);_.generateMipmaps=!1}else $e?(_t&&n.texStorage2D(t.TEXTURE_2D,Se,ze,fe.width,fe.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Ee,Ie,fe.data)):n.texImage2D(t.TEXTURE_2D,0,ze,fe.width,fe.height,0,Ee,Ie,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,ze,Ge[0].width,Ge[0].height,fe.depth);for(let te=0,le=Ge.length;te<le;te++)if(xe=Ge[te],_.format!==$n)if(Ee!==null)if($e){if(N)if(_.layerUpdates.size>0){const Ae=vp(xe.width,xe.height,_.format,_.type);for(const Te of _.layerUpdates){const qe=xe.data.subarray(Te*Ae/xe.data.BYTES_PER_ELEMENT,(Te+1)*Ae/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Te,xe.width,xe.height,1,Ee,qe)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,fe.depth,Ee,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,ze,xe.width,xe.height,fe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,fe.depth,Ee,Ie,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,ze,xe.width,xe.height,fe.depth,0,Ee,Ie,xe.data)}else{$e&&_t&&n.texStorage2D(t.TEXTURE_2D,Se,ze,Ge[0].width,Ge[0].height);for(let te=0,le=Ge.length;te<le;te++)xe=Ge[te],_.format!==$n?Ee!==null?$e?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,xe.width,xe.height,Ee,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,te,ze,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,xe.width,xe.height,Ee,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,te,ze,xe.width,xe.height,0,Ee,Ie,xe.data)}else if(_.isDataArrayTexture)if($e){if(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,ze,fe.width,fe.height,fe.depth),N)if(_.layerUpdates.size>0){const te=vp(fe.width,fe.height,_.format,_.type);for(const le of _.layerUpdates){const Ae=fe.data.subarray(le*te/fe.data.BYTES_PER_ELEMENT,(le+1)*te/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,Ee,Ie,Ae)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Ie,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,Ee,Ie,fe.data);else if(_.isData3DTexture)$e?(_t&&n.texStorage3D(t.TEXTURE_3D,Se,ze,fe.width,fe.height,fe.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Ie,fe.data)):n.texImage3D(t.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,Ee,Ie,fe.data);else if(_.isFramebufferTexture){if(_t)if($e)n.texStorage2D(t.TEXTURE_2D,Se,ze,fe.width,fe.height);else{let te=fe.width,le=fe.height;for(let Ae=0;Ae<Se;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,ze,te,le,0,Ee,Ie,null),te>>=1,le>>=1}}else if(Ge.length>0){if($e&&_t){const te=Z(Ge[0]);n.texStorage2D(t.TEXTURE_2D,Se,ze,te.width,te.height)}for(let te=0,le=Ge.length;te<le;te++)xe=Ge[te],$e?N&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,Ee,Ie,xe):n.texImage2D(t.TEXTURE_2D,te,ze,Ee,Ie,xe);_.generateMipmaps=!1}else if($e){if(_t){const te=Z(fe);n.texStorage2D(t.TEXTURE_2D,Se,ze,te.width,te.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ie,fe)}else n.texImage2D(t.TEXTURE_2D,0,ze,Ee,Ie,fe);f(_)&&m(H),ge.__version=W.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function me(E,_,D){if(_.image.length!==6)return;const H=tt(E,_),$=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+D);const W=i.get($);if($.version!==W.__version||H===!0){n.activeTexture(t.TEXTURE0+D);const ge=it.getPrimaries(it.workingColorSpace),de=_.colorSpace===es?null:it.getPrimaries(_.colorSpace),_e=_.colorSpace===es||ge===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Be=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let le=0;le<6;le++)!Be&&!fe?Ee[le]=g(_.image[le],!0,s.maxCubemapSize):Ee[le]=fe?_.image[le].image:_.image[le],Ee[le]=he(_,Ee[le]);const Ie=Ee[0],ze=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),Ge=b(_.internalFormat,ze,xe,_.colorSpace),$e=_.isVideoTexture!==!0,_t=W.__version===void 0||H===!0,N=$.dataReady;let Se=L(_,Ie);De(t.TEXTURE_CUBE_MAP,_);let te;if(Be){$e&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ge,Ie.width,Ie.height);for(let le=0;le<6;le++){te=Ee[le].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const Te=te[Ae];_.format!==$n?ze!==null?$e?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Te.width,Te.height,ze,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,Ge,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Te.width,Te.height,ze,xe,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,Ge,Te.width,Te.height,0,ze,xe,Te.data)}}}else{if(te=_.mipmaps,$e&&_t){te.length>0&&Se++;const le=Z(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ge,le.width,le.height)}for(let le=0;le<6;le++)if(fe){$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ee[le].width,Ee[le].height,ze,xe,Ee[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ge,Ee[le].width,Ee[le].height,0,ze,xe,Ee[le].data);for(let Ae=0;Ae<te.length;Ae++){const qe=te[Ae].image[le].image;$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,qe.width,qe.height,ze,xe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,Ge,qe.width,qe.height,0,ze,xe,qe.data)}}else{$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,xe,Ee[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ge,ze,xe,Ee[le]);for(let Ae=0;Ae<te.length;Ae++){const Te=te[Ae];$e?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,ze,xe,Te.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,Ge,ze,xe,Te.image[le])}}}f(_)&&m(t.TEXTURE_CUBE_MAP),W.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function we(E,_,D,H,$,W){const ge=r.convert(D.format,D.colorSpace),de=r.convert(D.type),_e=b(D.internalFormat,ge,de,D.colorSpace),Be=i.get(_),fe=i.get(D);if(fe.__renderTarget=_,!Be.__hasExternalTextures){const Ee=Math.max(1,_.width>>W),Ie=Math.max(1,_.height>>W);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,W,_e,Ee,Ie,_.depth,0,ge,de,null):n.texImage2D($,W,_e,Ee,Ie,0,ge,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),X(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,$,fe.__webglTexture,0,Y(_)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,$,fe.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(E,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,E),_.depthBuffer){const H=_.depthTexture,$=H&&H.isDepthTexture?H.type:null,W=y(_.stencilBuffer,$),ge=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Y(_);X(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,W,_.width,_.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,W,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,W,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,E)}else{const H=_.textures;for(let $=0;$<H.length;$++){const W=H[$],ge=r.convert(W.format,W.colorSpace),de=r.convert(W.type),_e=b(W.internalFormat,ge,de,W.colorSpace),Be=Y(_);D&&X(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,_e,_.width,_.height):X(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,_e,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,_e,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),oe(_.depthTexture,0);const $=H.__webglTexture,W=Y(_);if(_.depthTexture.format===Fo)X(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(_.depthTexture.format===ko)X(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ce(E){const _=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=H}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");re(_.__webglFramebuffer,E)}else if(D){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=t.createRenderbuffer(),O(_.__webglDepthbuffer[H],E,!1);else{const $=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,W)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),O(_.__webglDepthbuffer,E,!1);else{const H=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,$)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(E,_,D){const H=i.get(E);_!==void 0&&we(H.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&ce(E)}function Ne(E){const _=E.texture,D=i.get(E),H=i.get(_);E.addEventListener("dispose",A);const $=E.textures,W=E.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=_.version,o.memory.textures++),W){D.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[de]=[];for(let _e=0;_e<_.mipmaps.length;_e++)D.__webglFramebuffer[de][_e]=t.createFramebuffer()}else D.__webglFramebuffer[de]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)D.__webglFramebuffer[de]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ge)for(let de=0,_e=$.length;de<_e;de++){const Be=i.get($[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&X(E)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<$.length;de++){const _e=$[de];D.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const Be=r.convert(_e.format,_e.colorSpace),fe=r.convert(_e.type),Ee=b(_e.internalFormat,Be,fe,_e.colorSpace,E.isXRRenderTarget===!0),Ie=Y(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,D.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),O(D.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),De(t.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)we(D.__webglFramebuffer[de][_e],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else we(D.__webglFramebuffer[de],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);f(_)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let de=0,_e=$.length;de<_e;de++){const Be=$[de],fe=i.get(Be);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),De(t.TEXTURE_2D,Be),we(D.__webglFramebuffer,E,Be,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),f(Be)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,H.__webglTexture),De(de,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)we(D.__webglFramebuffer[_e],E,_,t.COLOR_ATTACHMENT0,de,_e);else we(D.__webglFramebuffer,E,_,t.COLOR_ATTACHMENT0,de,0);f(_)&&m(de),n.unbindTexture()}E.depthBuffer&&ce(E)}function C(E){const _=E.textures;for(let D=0,H=_.length;D<H;D++){const $=_[D];if(f($)){const W=M(E),ge=i.get($).__webglTexture;n.bindTexture(W,ge),m(W),n.unbindTexture()}}}const R=[],x=[];function ie(E){if(E.samples>0){if(X(E)===!1){const _=E.textures,D=E.width,H=E.height;let $=t.COLOR_BUFFER_BIT;const W=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(E),de=_.length>1;if(de)for(let _e=0;_e<_.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Be=i.get(_[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,D,H,0,0,D,H,$,t.NEAREST),l===!0&&(R.length=0,x.length=0,R.push(t.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.resolveDepthBuffer===!1&&(R.push(W),x.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,x)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<_.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Be=i.get(_[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Y(E){return Math.min(s.maxSamples,E.samples)}function X(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(E){const _=o.render.frame;c.get(E)!==_&&(c.set(E,_),E.update())}function he(E,_){const D=E.colorSpace,H=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Gs&&D!==es&&(it.getTransfer(D)===mt?(H!==$n||$!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function Z(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=oe,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=ue,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=we,this.useMultisampledRTT=X}function d2(t,e){function n(i,s=es){let r;const o=it.getTransfer(s);if(i===Fi)return t.UNSIGNED_BYTE;if(i===qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fv)return t.BYTE;if(i===pv)return t.SHORT;if(i===Oo)return t.UNSIGNED_SHORT;if(i===jh)return t.INT;if(i===Vs)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===Yo)return t.HALF_FLOAT;if(i===gv)return t.ALPHA;if(i===vv)return t.RGB;if(i===$n)return t.RGBA;if(i===_v)return t.LUMINANCE;if(i===xv)return t.LUMINANCE_ALPHA;if(i===Fo)return t.DEPTH_COMPONENT;if(i===ko)return t.DEPTH_STENCIL;if(i===yv)return t.RED;if(i===Kh)return t.RED_INTEGER;if(i===Ev)return t.RG;if(i===Zh)return t.RG_INTEGER;if(i===Jh)return t.RGBA_INTEGER;if(i===Ga||i===Wa||i===Xa||i===$a)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uu||i===Ou||i===Nu||i===Fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ku||i===Bu||i===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ku||i===Bu)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hu||i===Vu||i===Gu||i===Wu||i===Xu||i===$u||i===ju||i===qu||i===Yu||i===Ku||i===Zu||i===Ju||i===Qu||i===eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$u)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ju)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ku)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===th||i===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ja)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mv||i===ih||i===sh||i===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===No?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const f2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new qt,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ki({vertexShader:f2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends Fr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,v=null;const g=new m2,f=n.getContextAttributes();let m=null,M=null;const b=[],y=[],L=new ht;let P=null;const A=new Dn;A.viewport=new At;const U=new Dn;U.viewport=new At;const T=[A,U],w=new NA;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let me=b[se];return me===void 0&&(me=new Gc,b[se]=me),me.getTargetRaySpace()},this.getControllerGrip=function(se){let me=b[se];return me===void 0&&(me=new Gc,b[se]=me),me.getGripSpace()},this.getHand=function(se){let me=b[se];return me===void 0&&(me=new Gc,b[se]=me),me.getHandSpace()};function z(se){const me=y.indexOf(se.inputSource);if(me===-1)return;const we=b[me];we!==void 0&&(we.update(se.inputSource,se.frame,u||o),we.dispatchEvent({type:se.type,data:se.inputSource}))}function Q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",oe);for(let se=0;se<b.length;se++){const me=y[se];me!==null&&(y[se]=null,b[se].disconnect(me))}I=null,F=null,g.reset(),e.setRenderTarget(m),p=null,d=null,h=null,s=null,M=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(se){u=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",oe),f.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,O=null,re=null;f.depth&&(re=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=f.stencil?ko:Fo,O=f.stencil?No:Vs);const ce={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(s,n),d=h.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ds(d.textureWidth,d.textureHeight,{format:$n,type:Fi,depthTexture:new Dv(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const we={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,we),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ds(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(se){for(let me=0;me<se.removed.length;me++){const we=se.removed[me],O=y.indexOf(we);O>=0&&(y[O]=null,b[O].disconnect(we))}for(let me=0;me<se.added.length;me++){const we=se.added[me];let O=y.indexOf(we);if(O===-1){for(let ce=0;ce<b.length;ce++)if(ce>=y.length){y.push(we),O=ce;break}else if(y[ce]===null){y[ce]=we,O=ce;break}if(O===-1)break}const re=b[O];re&&re.connect(we)}}const J=new V,ne=new V;function G(se,me,we){J.setFromMatrixPosition(me.matrixWorld),ne.setFromMatrixPosition(we.matrixWorld);const O=J.distanceTo(ne),re=me.projectionMatrix.elements,ce=we.projectionMatrix.elements,ue=re[14]/(re[10]-1),Ne=re[14]/(re[10]+1),C=(re[9]+1)/re[5],R=(re[9]-1)/re[5],x=(re[8]-1)/re[0],ie=(ce[8]+1)/ce[0],Y=ue*x,X=ue*ie,ee=O/(-x+ie),he=ee*-x;if(me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(he),se.translateZ(ee),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(me.projectionMatrix),se.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Z=ue+ee,E=Ne+ee,_=Y-he,D=X+(O-he),H=C*Ne/E*Z,$=R*Ne/E*Z;se.projectionMatrix.makePerspective(_,D,H,$,Z,E),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ve(se,me){me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let me=se.near,we=se.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(we=g.depthFar)),w.near=U.near=A.near=me,w.far=U.far=A.far=we,(I!==w.near||F!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,F=w.far),A.layers.mask=se.layers.mask|2,U.layers.mask=se.layers.mask|4,w.layers.mask=A.layers.mask|U.layers.mask;const O=se.parent,re=w.cameras;ve(w,O);for(let ce=0;ce<re.length;ce++)ve(re[ce],O);re.length===2?G(w,A,U):w.projectionMatrix.copy(A.projectionMatrix),Me(se,w,O)};function Me(se,me,we){we===null?se.matrix.copy(me.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(me.projectionMatrix),se.projectionMatrixInverse.copy(me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Bo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let Re=null;function De(se,me){if(c=me.getViewerPose(u||o),v=me,c!==null){const we=c.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let O=!1;we.length!==w.cameras.length&&(w.cameras.length=0,O=!0);for(let ue=0;ue<we.length;ue++){const Ne=we[ue];let C=null;if(p!==null)C=p.getViewport(Ne);else{const x=h.getViewSubImage(d,Ne);C=x.viewport,ue===0&&(e.setRenderTargetTextures(M,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(M))}let R=T[ue];R===void 0&&(R=new Dn,R.layers.enable(ue),R.viewport=new At,T[ue]=R),R.matrix.fromArray(Ne.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ne.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(C.x,C.y,C.width,C.height),ue===0&&(w.matrix.copy(R.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),O===!0&&w.cameras.push(R)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const ue=h.getDepthInformation(we[0]);ue&&ue.isValid&&ue.texture&&g.init(e,ue,s.renderState)}}for(let we=0;we<b.length;we++){const O=y[we],re=b[we];O!==null&&re!==void 0&&re.update(O,me,u||o)}Re&&Re(se,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const tt=new Uv;tt.setAnimationLoop(De),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const Cs=new fi,v2=new wt;function _2(t,e){function n(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,Pv(t)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,M,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),c(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,y)):m.isMeshMatcapMaterial?(r(f,m),v(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),g(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,M,b):m.isSpriteMaterial?u(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,n(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,n(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===gn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,n(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===gn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,n(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,n(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const M=e.get(m),b=M.envMap,y=M.envMapRotation;b&&(f.envMap.value=b,Cs.copy(y),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),f.envMapRotation.value.setFromMatrix4(v2.makeRotationFromEuler(Cs)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,n(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=b*.5,m.map&&(f.map.value=m.map,n(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,n(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){const M=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function x2(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const y=b.program;i.uniformBlockBinding(M,y)}function u(M,b){let y=s[M.id];y===void 0&&(v(M),y=c(M),s[M.id]=y,M.addEventListener("dispose",f));const L=b.program;i.updateUBOMapping(M,L);const P=e.render.frame;r[M.id]!==P&&(d(M),r[M.id]=P)}function c(M){const b=h();M.__bindingPointIndex=b;const y=t.createBuffer(),L=M.__size,P=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],y=M.uniforms,L=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let P=0,A=y.length;P<A;P++){const U=Array.isArray(y[P])?y[P]:[y[P]];for(let T=0,w=U.length;T<w;T++){const I=U[T];if(p(I,P,T,L)===!0){const F=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let Q=0;for(let oe=0;oe<z.length;oe++){const J=z[oe],ne=g(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,F+Q,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,Q),Q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,b,y,L){const P=M.value,A=b+"_"+y;if(L[A]===void 0)return typeof P=="number"||typeof P=="boolean"?L[A]=P:L[A]=P.clone(),!0;{const U=L[A];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return L[A]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function v(M){const b=M.uniforms;let y=0;const L=16;for(let A=0,U=b.length;A<U;A++){const T=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,I=T.length;w<I;w++){const F=T[w],z=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,oe=z.length;Q<oe;Q++){const J=z[Q],ne=g(J),G=y%L,ve=G%ne.boundary,Me=G+ve;y+=ve,Me!==0&&L-Me<ne.storage&&(y+=L-Me),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=ne.storage}}}const P=y%L;return P>0&&(y+=L-P),M.__size=y,M.__cache={},this}function g(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function f(M){const b=M.target;b.removeEventListener("dispose",f);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const M in s)t.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:m}}class y2{constructor(e={}){const{canvas:n=eA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let f=null,m=null;const M=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=In;let P=0,A=0,U=null,T=-1,w=null;const I=new At,F=new At;let z=null;const Q=new pt(0);let oe=0,J=n.width,ne=n.height,G=1,ve=null,Me=null;const Re=new At(0,0,J,ne),De=new At(0,0,J,ne);let tt=!1;const se=new id;let me=!1,we=!1;const O=new wt,re=new wt,ce=new V,ue=new At,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function R(){return U===null?G:1}let x=i;function ie(S,k){return n.getContext(S,k)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$h}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",Te,!1),x===null){const k="webgl2";if(x=ie(k,S),x===null)throw ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,X,ee,he,Z,E,_,D,H,$,W,ge,de,_e,Be,fe,Ee,Ie,ze,xe,Ge,$e,_t,N;function Se(){Y=new PP(x),Y.init(),$e=new d2(x,Y),X=new wP(x,Y,e,$e),ee=new u2(x,Y),X.reverseDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),he=new DP(x),Z=new ZL,E=new h2(x,Y,ee,Z,X,$e,he),_=new SP(y),D=new RP(y),H=new BA(x),_t=new EP(x,H),$=new LP(x,H,he,_t),W=new OP(x,$,H,he),ze=new UP(x,X,E),fe=new bP(Z),ge=new KL(y,_,D,Y,X,_t,fe),de=new _2(y,Z),_e=new QL,Be=new r2(Y),Ie=new yP(y,_,D,ee,W,p,l),Ee=new l2(y,W,X),N=new x2(x,he,X,ee),xe=new MP(x,Y,he),Ge=new IP(x,Y,he),he.programs=ge.programs,y.capabilities=X,y.extensions=Y,y.properties=Z,y.renderLists=_e,y.shadowMap=Ee,y.state=ee,y.info=he}Se();const te=new g2(y,x);this.xr=te,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(J,ne,!1))},this.getSize=function(S){return S.set(J,ne)},this.setSize=function(S,k,j=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,ne=k,n.width=Math.floor(S*G),n.height=Math.floor(k*G),j===!0&&(n.style.width=S+"px",n.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(J*G,ne*G).floor()},this.setDrawingBufferSize=function(S,k,j){J=S,ne=k,G=j,n.width=Math.floor(S*j),n.height=Math.floor(k*j),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,k,j,q){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,k,j,q),ee.viewport(I.copy(Re).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,k,j,q){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,k,j,q),ee.scissor(F.copy(De).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){ee.setScissorTest(tt=S)},this.setOpaqueSort=function(S){ve=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,j=!0){let q=0;if(S){let B=!1;if(U!==null){const pe=U.texture.format;B=pe===Jh||pe===Zh||pe===Kh}if(B){const pe=U.texture.type,be=pe===Fi||pe===Vs||pe===Oo||pe===No||pe===qh||pe===Yh,Ce=Ie.getClearColor(),Pe=Ie.getClearAlpha(),We=Ce.r,Ve=Ce.g,Ue=Ce.b;be?(v[0]=We,v[1]=Ve,v[2]=Ue,v[3]=Pe,x.clearBufferuiv(x.COLOR,0,v)):(g[0]=We,g[1]=Ve,g[2]=Ue,g[3]=Pe,x.clearBufferiv(x.COLOR,0,g))}else q|=x.COLOR_BUFFER_BIT}k&&(q|=x.DEPTH_BUFFER_BIT),j&&(q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Ie.dispose(),_e.dispose(),Be.dispose(),Z.dispose(),_.dispose(),D.dispose(),W.dispose(),_t.dispose(),N.dispose(),ge.dispose(),te.dispose(),te.removeEventListener("sessionstart",yd),te.removeEventListener("sessionend",Ed),vs.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=he.autoReset,k=Ee.enabled,j=Ee.autoUpdate,q=Ee.needsUpdate,B=Ee.type;Se(),he.autoReset=S,Ee.enabled=k,Ee.autoUpdate=j,Ee.needsUpdate=q,Ee.type=B}function Te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qe(S){const k=S.target;k.removeEventListener("dispose",qe),bt(k)}function bt(S){Yt(S),Z.remove(S)}function Yt(S){const k=Z.get(S).programs;k!==void 0&&(k.forEach(function(j){ge.releaseProgram(j)}),S.isShaderMaterial&&ge.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,j,q,B,pe){k===null&&(k=Ne);const be=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Dx(S,k,j,q,B);ee.setMaterial(q,be);let Pe=j.index,We=1;if(q.wireframe===!0){if(Pe=$.getWireframeAttribute(j),Pe===void 0)return;We=2}const Ve=j.drawRange,Ue=j.attributes.position;let nt=Ve.start*We,at=(Ve.start+Ve.count)*We;pe!==null&&(nt=Math.max(nt,pe.start*We),at=Math.min(at,(pe.start+pe.count)*We)),Pe!==null?(nt=Math.max(nt,0),at=Math.min(at,Pe.count)):Ue!=null&&(nt=Math.max(nt,0),at=Math.min(at,Ue.count));const Pt=at-nt;if(Pt<0||Pt===1/0)return;_t.setup(B,q,Ce,j,Pe);let St,st=xe;if(Pe!==null&&(St=H.get(Pe),st=Ge,st.setIndex(St)),B.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*R()),st.setMode(x.LINES)):st.setMode(x.TRIANGLES);else if(B.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),ee.setLineWidth(Oe*R()),B.isLineSegments?st.setMode(x.LINES):B.isLineLoop?st.setMode(x.LINE_LOOP):st.setMode(x.LINE_STRIP)}else B.isPoints?st.setMode(x.POINTS):B.isSprite&&st.setMode(x.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)qa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Oe=B._multiDrawStarts,Vt=B._multiDrawCounts,lt=B._multiDrawCount,Bn=Pe?H.get(Pe).bytesPerElement:1,js=Z.get(q).currentProgram.getUniforms();for(let xn=0;xn<lt;xn++)js.setValue(x,"_gl_DrawID",xn),st.render(Oe[xn]/Bn,Vt[xn])}else if(B.isInstancedMesh)st.renderInstances(nt,Pt,B.count);else if(j.isInstancedBufferGeometry){const Oe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Vt=Math.min(j.instanceCount,Oe);st.renderInstances(nt,Pt,Vt)}else st.render(nt,Pt)};function ft(S,k,j){S.transparent===!0&&S.side===Ci&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,ra(S,k,j),S.side=hs,S.needsUpdate=!0,ra(S,k,j),S.side=Ci):ra(S,k,j)}this.compile=function(S,k,j=null){j===null&&(j=S),m=Be.get(j),m.init(k),b.push(m),j.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),S!==j&&S.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const q=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const Ce=pe[be];ft(Ce,j,B),q.add(Ce)}else ft(pe,j,B),q.add(pe)}),m=b.pop(),q},this.compileAsync=function(S,k,j=null){const q=this.compile(S,k,j);return new Promise(B=>{function pe(){if(q.forEach(function(be){Z.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){B(S);return}setTimeout(pe,10)}Y.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let kn=null;function mi(S){kn&&kn(S)}function yd(){vs.stop()}function Ed(){vs.start()}const vs=new Uv;vs.setAnimationLoop(mi),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(S){kn=S,te.setAnimationLoop(S),S===null?vs.stop():vs.start()},te.addEventListener("sessionstart",yd),te.addEventListener("sessionend",Ed),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,U),m=Be.get(S,b.length),m.init(k),b.push(m),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),se.setFromProjectionMatrix(re),we=this.localClippingEnabled,me=fe.init(this.clippingPlanes,we),f=_e.get(S,M.length),f.init(),M.push(f),te.enabled===!0&&te.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&ic(pe,k,-1/0,y.sortObjects)}ic(S,k,0,y.sortObjects),f.finish(),y.sortObjects===!0&&f.sort(ve,Me),C=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,C&&Ie.addToRenderList(f,S),this.info.render.frame++,me===!0&&fe.beginShadows();const j=m.state.shadowsArray;Ee.render(j,S,k),me===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=f.opaque,B=f.transmissive;if(m.setupLights(),k.isArrayCamera){const pe=k.cameras;if(B.length>0)for(let be=0,Ce=pe.length;be<Ce;be++){const Pe=pe[be];wd(q,B,S,Pe)}C&&Ie.render(S);for(let be=0,Ce=pe.length;be<Ce;be++){const Pe=pe[be];Md(f,S,Pe,Pe.viewport)}}else B.length>0&&wd(q,B,S,k),C&&Ie.render(S),Md(f,S,k);U!==null&&A===0&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(y,S,k),_t.resetDefaultState(),T=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],me===!0&&fe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?f=M[M.length-1]:f=null};function ic(S,k,j,q){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||se.intersectsSprite(S)){q&&ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(re);const be=W.update(S),Ce=S.material;Ce.visible&&f.push(S,be,Ce,j,ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||se.intersectsObject(S))){const be=W.update(S),Ce=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ue.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ue.copy(be.boundingSphere.center)),ue.applyMatrix4(S.matrixWorld).applyMatrix4(re)),Array.isArray(Ce)){const Pe=be.groups;for(let We=0,Ve=Pe.length;We<Ve;We++){const Ue=Pe[We],nt=Ce[Ue.materialIndex];nt&&nt.visible&&f.push(S,be,nt,j,ue.z,Ue)}}else Ce.visible&&f.push(S,be,Ce,j,ue.z,null)}}const pe=S.children;for(let be=0,Ce=pe.length;be<Ce;be++)ic(pe[be],k,j,q)}function Md(S,k,j,q){const B=S.opaque,pe=S.transmissive,be=S.transparent;m.setupLightsView(j),me===!0&&fe.setGlobalState(y.clippingPlanes,j),q&&ee.viewport(I.copy(q)),B.length>0&&sa(B,k,j),pe.length>0&&sa(pe,k,j),be.length>0&&sa(be,k,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function wd(S,k,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ds(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Yo:Fi,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const pe=m.state.transmissionRenderTarget[q.id],be=q.viewport||I;pe.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);const Ce=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(Q),oe=y.getClearAlpha(),oe<1&&y.setClearColor(16777215,.5),y.clear(),C&&Ie.render(j);const Pe=y.toneMapping;y.toneMapping=rs;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),me===!0&&fe.setGlobalState(y.clippingPlanes,q),sa(S,j,q),E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ue=0,nt=k.length;Ue<nt;Ue++){const at=k[Ue],Pt=at.object,St=at.geometry,st=at.material,Oe=at.group;if(st.side===Ci&&Pt.layers.test(q.layers)){const Vt=st.side;st.side=gn,st.needsUpdate=!0,bd(Pt,j,q,St,st,Oe),st.side=Vt,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ce),y.setClearColor(Q,oe),We!==void 0&&(q.viewport=We),y.toneMapping=Pe}function sa(S,k,j){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,pe=S.length;B<pe;B++){const be=S[B],Ce=be.object,Pe=be.geometry,We=be.group;let Ve=be.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),Ce.layers.test(j.layers)&&bd(Ce,k,j,Pe,Ve,We)}}function bd(S,k,j,q,B,pe){S.onBeforeRender(y,k,j,q,B,pe),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(y,k,j,q,S,pe),B.transparent===!0&&B.side===Ci&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,y.renderBufferDirect(j,k,q,B,S,pe),B.side=hs,B.needsUpdate=!0,y.renderBufferDirect(j,k,q,B,S,pe),B.side=Ci):y.renderBufferDirect(j,k,q,B,S,pe),S.onAfterRender(y,k,j,q,B,pe)}function ra(S,k,j){k.isScene!==!0&&(k=Ne);const q=Z.get(S),B=m.state.lights,pe=m.state.shadowsArray,be=B.state.version,Ce=ge.getParameters(S,B.state,pe,k,j),Pe=ge.getProgramCacheKey(Ce);let We=q.programs;q.environment=S.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(S.isMeshStandardMaterial?D:_).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",qe),We=new Map,q.programs=We);let Ve=We.get(Pe);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===be)return Td(S,Ce),Ve}else Ce.uniforms=ge.getUniforms(S),S.onBeforeCompile(Ce,y),Ve=ge.acquireProgram(Ce,Pe),We.set(Pe,Ve),q.uniforms=Ce.uniforms;const Ue=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Td(S,Ce),q.needsLights=Ox(S),q.lightsStateVersion=be,q.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function Sd(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Ya.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Td(S,k){const j=Z.get(S);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Dx(S,k,j,q,B){k.isScene!==!0&&(k=Ne),E.resetTextureUnits();const pe=k.fog,be=q.isMeshStandardMaterial?k.environment:null,Ce=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gs,Pe=(q.isMeshStandardMaterial?D:_).get(q.envMap||be),We=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,at=!!j.morphAttributes.color;let Pt=rs;q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=St!==void 0?St.length:0,Oe=Z.get(q),Vt=m.state.lights;if(me===!0&&(we===!0||S!==w)){const nn=S===w&&q.id===T;fe.setState(q,S,nn)}let lt=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Vt.state.version||Oe.outputColorSpace!==Ce||B.isBatchedMesh&&Oe.batching===!1||!B.isBatchedMesh&&Oe.batching===!0||B.isBatchedMesh&&Oe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Oe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Oe.instancing===!1||!B.isInstancedMesh&&Oe.instancing===!0||B.isSkinnedMesh&&Oe.skinning===!1||!B.isSkinnedMesh&&Oe.skinning===!0||B.isInstancedMesh&&Oe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Oe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Oe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Oe.instancingMorph===!1&&B.morphTexture!==null||Oe.envMap!==Pe||q.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==We||Oe.vertexTangents!==Ve||Oe.morphTargets!==Ue||Oe.morphNormals!==nt||Oe.morphColors!==at||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==st)&&(lt=!0):(lt=!0,Oe.__version=q.version);let Bn=Oe.currentProgram;lt===!0&&(Bn=ra(q,k,B));let js=!1,xn=!1,Hr=!1;const Et=Bn.getUniforms(),An=Oe.uniforms;if(ee.useProgram(Bn.program)&&(js=!0,xn=!0,Hr=!0),q.id!==T&&(T=q.id,xn=!0),js||w!==S){ee.buffers.depth.getReversed()?(O.copy(S.projectionMatrix),nA(O),iA(O),Et.setValue(x,"projectionMatrix",O)):Et.setValue(x,"projectionMatrix",S.projectionMatrix),Et.setValue(x,"viewMatrix",S.matrixWorldInverse);const dn=Et.map.cameraPosition;dn!==void 0&&dn.setValue(x,ce.setFromMatrixPosition(S.matrixWorld)),X.logarithmicDepthBuffer&&Et.setValue(x,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Et.setValue(x,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,xn=!0,Hr=!0)}if(B.isSkinnedMesh){Et.setOptional(x,B,"bindMatrix"),Et.setOptional(x,B,"bindMatrixInverse");const nn=B.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Et.setValue(x,"boneTexture",nn.boneTexture,E))}B.isBatchedMesh&&(Et.setOptional(x,B,"batchingTexture"),Et.setValue(x,"batchingTexture",B._matricesTexture,E),Et.setOptional(x,B,"batchingIdTexture"),Et.setValue(x,"batchingIdTexture",B._indirectTexture,E),Et.setOptional(x,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(x,"batchingColorTexture",B._colorsTexture,E));const Cn=j.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ze.update(B,j,Bn),(xn||Oe.receiveShadow!==B.receiveShadow)&&(Oe.receiveShadow=B.receiveShadow,Et.setValue(x,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(An.envMap.value=Pe,An.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(An.envMapIntensity.value=k.environmentIntensity),xn&&(Et.setValue(x,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&Ux(An,Hr),pe&&q.fog===!0&&de.refreshFogUniforms(An,pe),de.refreshMaterialUniforms(An,q,G,ne,m.state.transmissionRenderTarget[S.id]),Ya.upload(x,Sd(Oe),An,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ya.upload(x,Sd(Oe),An,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Et.setValue(x,"center",B.center),Et.setValue(x,"modelViewMatrix",B.modelViewMatrix),Et.setValue(x,"normalMatrix",B.normalMatrix),Et.setValue(x,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let dn=0,sc=nn.length;dn<sc;dn++){const _s=nn[dn];N.update(_s,Bn),N.bind(_s,Bn)}}return Bn}function Ux(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Ox(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,k,j){const q=Z.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(S.texture).__webglTexture=k,Z.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const j=Z.get(S);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Nx=x.createFramebuffer();this.setRenderTarget=function(S,k=0,j=0){U=S,P=k,A=j;let q=!0,B=null,pe=!1,be=!1;if(S){const Pe=Z.get(S);if(Pe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(x.FRAMEBUFFER,null),q=!1;else if(Pe.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Pe.__hasExternalTextures)E.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(Pe.__boundDepthTexture!==Ue){if(Ue!==null&&Z.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);const Ve=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?B=Ve[k][j]:B=Ve[k],pe=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?B=Z.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[j]:B=Ve,I.copy(S.viewport),F.copy(S.scissor),z=S.scissorTest}else I.copy(Re).multiplyScalar(G).floor(),F.copy(De).multiplyScalar(G).floor(),z=tt;if(j!==0&&(B=Nx),ee.bindFramebuffer(x.FRAMEBUFFER,B)&&q&&ee.drawBuffers(S,B),ee.viewport(I),ee.scissor(F),ee.setScissorTest(z),pe){const Pe=Z.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,j)}else if(be){const Pe=Z.get(S.texture),We=k;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Pe.__webglTexture,j,We)}else if(S!==null&&j!==0){const Pe=Z.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Pe.__webglTexture,j)}T=-1},this.readRenderTargetPixels=function(S,k,j,q,B,pe,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){ee.bindFramebuffer(x.FRAMEBUFFER,Ce);try{const Pe=S.texture,We=Pe.format,Ve=Pe.type;if(!X.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-q&&j>=0&&j<=S.height-B&&x.readPixels(k,j,q,B,$e.convert(We),$e.convert(Ve),pe)}finally{const Pe=U!==null?Z.get(U).__webglFramebuffer:null;ee.bindFramebuffer(x.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(S,k,j,q,B,pe,be){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(k>=0&&k<=S.width-q&&j>=0&&j<=S.height-B){ee.bindFramebuffer(x.FRAMEBUFFER,Ce);const Pe=S.texture,We=Pe.format,Ve=Pe.type;if(!X.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ue),x.bufferData(x.PIXEL_PACK_BUFFER,pe.byteLength,x.STREAM_READ),x.readPixels(k,j,q,B,$e.convert(We),$e.convert(Ve),0);const nt=U!==null?Z.get(U).__webglFramebuffer:null;ee.bindFramebuffer(x.FRAMEBUFFER,nt);const at=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await tA(x,at,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ue),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,pe),x.deleteBuffer(Ue),x.deleteSync(at),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,j=0){const q=Math.pow(2,-j),B=Math.floor(S.image.width*q),pe=Math.floor(S.image.height*q),be=k!==null?k.x:0,Ce=k!==null?k.y:0;E.setTexture2D(S,0),x.copyTexSubImage2D(x.TEXTURE_2D,j,0,0,be,Ce,B,pe),ee.unbindTexture()};const Fx=x.createFramebuffer(),kx=x.createFramebuffer();this.copyTextureToTexture=function(S,k,j=null,q=null,B=0,pe=null){pe===null&&(B!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=B,B=0):pe=0);let be,Ce,Pe,We,Ve,Ue,nt,at,Pt;const St=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(j!==null)be=j.max.x-j.min.x,Ce=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,We=j.min.x,Ve=j.min.y,Ue=j.isBox3?j.min.z:0;else{const Cn=Math.pow(2,-B);be=Math.floor(St.width*Cn),Ce=Math.floor(St.height*Cn),S.isDataArrayTexture?Pe=St.depth:S.isData3DTexture?Pe=Math.floor(St.depth*Cn):Pe=1,We=0,Ve=0,Ue=0}q!==null?(nt=q.x,at=q.y,Pt=q.z):(nt=0,at=0,Pt=0);const st=$e.convert(k.format),Oe=$e.convert(k.type);let Vt;k.isData3DTexture?(E.setTexture3D(k,0),Vt=x.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),Vt=x.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),Vt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=x.getParameter(x.UNPACK_ROW_LENGTH),Bn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),js=x.getParameter(x.UNPACK_SKIP_PIXELS),xn=x.getParameter(x.UNPACK_SKIP_ROWS),Hr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,We),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ue);const Et=S.isDataArrayTexture||S.isData3DTexture,An=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Cn=Z.get(S),nn=Z.get(k),dn=Z.get(Cn.__renderTarget),sc=Z.get(nn.__renderTarget);ee.bindFramebuffer(x.READ_FRAMEBUFFER,dn.__webglFramebuffer),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,sc.__webglFramebuffer);for(let _s=0;_s<Pe;_s++)Et&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,B,Ue+_s),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,pe,Pt+_s)),x.blitFramebuffer(We,Ve,be,Ce,nt,at,be,Ce,x.DEPTH_BUFFER_BIT,x.NEAREST);ee.bindFramebuffer(x.READ_FRAMEBUFFER,null),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||Z.has(S)){const Cn=Z.get(S),nn=Z.get(k);ee.bindFramebuffer(x.READ_FRAMEBUFFER,Fx),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,kx);for(let dn=0;dn<Pe;dn++)Et?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Cn.__webglTexture,B,Ue+dn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Cn.__webglTexture,B),An?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,nn.__webglTexture,pe,Pt+dn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,nn.__webglTexture,pe),B!==0?x.blitFramebuffer(We,Ve,be,Ce,nt,at,be,Ce,x.COLOR_BUFFER_BIT,x.NEAREST):An?x.copyTexSubImage3D(Vt,pe,nt,at,Pt+dn,We,Ve,be,Ce):x.copyTexSubImage2D(Vt,pe,nt,at,We,Ve,be,Ce);ee.bindFramebuffer(x.READ_FRAMEBUFFER,null),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else An?S.isDataTexture||S.isData3DTexture?x.texSubImage3D(Vt,pe,nt,at,Pt,be,Ce,Pe,st,Oe,St.data):k.isCompressedArrayTexture?x.compressedTexSubImage3D(Vt,pe,nt,at,Pt,be,Ce,Pe,st,St.data):x.texSubImage3D(Vt,pe,nt,at,Pt,be,Ce,Pe,st,Oe,St):S.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,pe,nt,at,be,Ce,st,Oe,St.data):S.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,pe,nt,at,St.width,St.height,st,St.data):x.texSubImage2D(x.TEXTURE_2D,pe,nt,at,be,Ce,st,Oe,St);x.pixelStorei(x.UNPACK_ROW_LENGTH,lt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Bn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,js),x.pixelStorei(x.UNPACK_SKIP_ROWS,xn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Hr),pe===0&&k.generateMipmaps&&x.generateMipmap(Vt),ee.unbindTexture()},this.copyTextureToTexture3D=function(S,k,j=null,q=null,B=0){return qa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,j,q,B)},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ee.unbindTexture()},this.resetState=function(){P=0,A=0,U=null,ee.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.13.3
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var E2=Object.defineProperty,od=(t,e)=>{for(var n in e)E2(t,n,{get:e[n],enumerable:!0})},zo={};od(zo,{ACTIONS:()=>Wv,ANIMATION_MIN_DURATION:()=>uh,CAPTURE_EVENTS_CLASS:()=>ea,CTRLZOOM_TIMEOUT:()=>Gv,DBLCLICK_DELAY:()=>zv,EASINGS:()=>Ka,ICONS:()=>Jn,IDS:()=>Wt,KEY_CODES:()=>Ft,LONGTOUCH_DELAY:()=>Hv,MOVE_THRESHOLD:()=>Bv,SPHERE_RADIUS:()=>Ws,TWOFINGERSOVERLAY_DELAY:()=>Vv,VIEWER_DATA:()=>fs});var M2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,w2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',b2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,S2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,T2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,A2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,C2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,R2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,P2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,uh=500,Bv=4,zv=300,Hv=500,Vv=100,Gv=2e3,Ws=10,fs="photoSphereViewer",ea="psv--capture-event",Wv=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(Wv||{}),Wt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Ft={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},Jn={arrow:M2,close:w2,download:b2,fullscreenIn:S2,fullscreenOut:T2,info:A2,menu:C2,zoomIn:R2,zoomOut:P2},Ka={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},Je={};od(Je,{Animation:()=>_l,Dynamic:()=>to,MultiDynamic:()=>f_,PressHandler:()=>Ql,Slider:()=>m_,SliderDirection:()=>p_,addClasses:()=>ad,angle:()=>$v,applyEulerInverse:()=>mh,checkClosedShadowDom:()=>h_,checkStylesheet:()=>u_,checkVersion:()=>dd,cleanCssPosition:()=>l_,clone:()=>Kl,createTexture:()=>ph,cssPositionIsOrdered:()=>hd,dasherize:()=>O2,deepEqual:()=>r_,deepmerge:()=>i_,distance:()=>Xv,exitFullscreen:()=>t_,firstNonNull:()=>Yi,getAbortError:()=>dh,getAngle:()=>qv,getClosest:()=>Kv,getConfigParser:()=>Jl,getElement:()=>Yv,getEventTarget:()=>pl,getMatchingTarget:()=>Zv,getPosition:()=>Jv,getShortestArc:()=>jv,getStyleProperty:()=>ai,getTouchData:()=>hh,getXMPValue:()=>Mn,greatArcDistance:()=>I2,hasParent:()=>U2,invertResolvableBoolean:()=>Zl,isAbortError:()=>a_,isEmpty:()=>s_,isExtendedPosition:()=>ud,isFullscreenEnabled:()=>Qv,isNil:()=>kt,isPlainObject:()=>ld,logWarn:()=>$t,mergePanoData:()=>d_,parseAngle:()=>si,parsePoint:()=>N2,parseSpeed:()=>c_,removeClasses:()=>D2,requestFullscreen:()=>e_,resolveBoolean:()=>cd,speedToDuration:()=>fh,sum:()=>L2,throttle:()=>n_,toggleClass:()=>Yl,wrap:()=>fo});function fo(t,e){let n=t%e;return n<0&&(n+=e),n}function L2(t){return t.reduce((e,n)=>e+n,0)}function Xv(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function $v(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function jv(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function qv(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function I2([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function Yv(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Yl(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function ad(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function D2(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function U2(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function Kv(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function pl(t){return(t==null?void 0:t.composedPath()[0])||null}function Zv(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function Jv(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function ai(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function hh(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:Xv(e,n),angle:$v(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var ml;function Qv(t,e=!1){return e?t===ml:document.fullscreenElement===t}function e_(t,e=!1){e?(ml=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function t_(t=!1){t?(ml.classList.remove("psv-fullscreen-emulation"),ml=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function O2(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function n_(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function ld(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function i_(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!ld(r[o])?s[o]=r[o]:r[o]!==n&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o])))})):s=r,s}(t,e)}function Kl(t){return i_(null,t)}function s_(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function kt(t){return t==null}function Yi(...t){for(const e of t)if(!kt(e))return e;return null}function r_(t,e){if(t===e)return!0;if(Vp(t)&&Vp(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!r_(t[n],e[n]))return!1;return!0}else return!1}function Vp(t){return typeof t=="object"&&t!==null}var Fe=class o_ extends Error{constructor(e,n){var i;super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",(i=Error.captureStackTrace)==null||i.call(Error,this,o_)}};function cd(t,e){ld(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function Zl(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function dh(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function a_(t){return(t==null?void 0:t.name)==="AbortError"}function $t(t){console.warn(`PhotoSphereViewer: ${t}`)}function ud(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function Mn(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var Gp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gl=["left","center","right"],vl=["top","center","bottom"],Wp=[...gl,...vl],Ln="center";function N2(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Gp[e[0]]?e=[e[0],Ln]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Gp[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function l_(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===Ln?t=[Ln,Ln]:gl.indexOf(t[0])!==-1?t=[Ln,t[0]]:vl.indexOf(t[0])!==-1&&(t=[t[0],Ln])),t.length!==2||Wp.indexOf(t[0])===-1||Wp.indexOf(t[1])===-1?($t(`Unparsable position ${t}`),null):!e&&t[0]===Ln&&t[1]===Ln?($t("Invalid position center center"),null):(n&&!hd(t)&&(t=[t[1],t[0]]),t[1]===Ln&&gl.indexOf(t[0])!==-1&&(t=[Ln,t[0]]),t[0]===Ln&&vl.indexOf(t[1])!==-1&&(t=[t[1],Ln]),t)):null}function hd(t){return vl.indexOf(t[0])!==-1&&gl.indexOf(t[1])!==-1}function c_(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=ot.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Fe(`Unknown speed unit "${s}"`)}}else e=t;return e}function fh(t,e){if(typeof t!="number"){const n=c_(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function si(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Fe(`Unknown angle "${t}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=ot.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new Fe(`Unknown angle unit "${o}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new Fe(`Unknown angle "${t}"`);return i=fo(e?i+Math.PI:i,Math.PI*2),e?ot.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function ph(t,e=!1){const n=new qt(t);return n.needsUpdate=!0,n.minFilter=e?ns:Sn,n.generateMipmaps=e,n.anisotropy=e?2:1,n}var Xp=new Xs;function mh(t,e){Xp.setFromEuler(e).invert(),t.applyQuaternion(Xp)}function Jl(t,e){const n=function(i){const s=Kl({...t,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:t[o]});else if(!(o in t)){$t(`Unknown option ${o}`);continue}r[o]=a}return r};return n.defaults=t,n.parsers=e||{},n}function u_(t,e){ai(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function dd(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function h_(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function d_(t,e,n,i){const s={isEquirectangular:!0,fullWidth:Yi(n==null?void 0:n.fullWidth,i==null?void 0:i.fullWidth),fullHeight:Yi(n==null?void 0:n.fullHeight,i==null?void 0:i.fullHeight),croppedWidth:t,croppedHeight:e,croppedX:Yi(n==null?void 0:n.croppedX,i==null?void 0:i.croppedX),croppedY:Yi(n==null?void 0:n.croppedY,i==null?void 0:i.croppedY),poseHeading:Yi(n==null?void 0:n.poseHeading,i==null?void 0:i.poseHeading,0),posePitch:Yi(n==null?void 0:n.posePitch,i==null?void 0:i.posePitch,0),poseRoll:Yi(n==null?void 0:n.poseRoll,i==null?void 0:i.poseRoll,0),initialHeading:i==null?void 0:i.initialHeading,initialPitch:i==null?void 0:i.initialPitch,initialFov:i==null?void 0:i.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(t,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-t)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&($t("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&($t("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&($t("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&($t("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&($t("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var _l=class{constructor(t){this.easing=Ka.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:Ka[t.easing]||Ka.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},to=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Fe("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?fo(t,this.max):ot.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?fo(t,this.max):ot.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?fo(n,this.max):ot.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},f_=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},Ql=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},p_=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(p_||{}),m_=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=ot.clamp((i.bottom-e)/i.height,0,1):s=ot.clamp((t-i.left)/i.width,0,1),this.listener({value:s,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},Ye={};od(Ye,{BeforeAnimateEvent:()=>fd,BeforeRenderEvent:()=>po,BeforeRotateEvent:()=>b_,ClickEvent:()=>A_,ConfigChangedEvent:()=>_n,DoubleClickEvent:()=>I_,FullscreenEvent:()=>mo,HideNotificationEvent:()=>go,HideOverlayEvent:()=>B_,HidePanelEvent:()=>os,HideTooltipEvent:()=>W_,KeypressEvent:()=>as,LoadProgressEvent:()=>Y_,ObjectEnterEvent:()=>U0,ObjectEvent:()=>ec,ObjectHoverEvent:()=>B0,ObjectLeaveEvent:()=>gh,PanoramaErrorEvent:()=>i0,PanoramaLoadEvent:()=>J_,PanoramaLoadedEvent:()=>Sr,PositionUpdatedEvent:()=>vo,ReadyEvent:()=>xo,RenderEvent:()=>m0,RollUpdatedEvent:()=>_o,ShowNotificationEvent:()=>yo,ShowOverlayEvent:()=>y0,ShowPanelEvent:()=>ls,ShowTooltipEvent:()=>S0,SizeUpdatedEvent:()=>Eo,StopAllEvent:()=>Mo,TransitionDoneEvent:()=>o0,ViewerEvent:()=>dt,ZoomUpdatedEvent:()=>Di});var g_=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},v_=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},dt=class extends g_{},__=class x_ extends dt{constructor(e,n){super(x_.type,!0),this.position=e,this.zoomLevel=n}};__.type="before-animate";var fd=__,y_=class E_ extends dt{constructor(e,n){super(E_.type),this.timestamp=e,this.elapsed=n}};y_.type="before-render";var po=y_,M_=class w_ extends dt{constructor(e){super(w_.type,!0),this.position=e}};M_.type="before-rotate";var b_=M_,S_=class T_ extends dt{constructor(e){super(T_.type),this.data=e}};S_.type="click";var A_=S_,C_=class R_ extends dt{constructor(e){super(R_.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};C_.type="config-changed";var _n=C_,P_=class L_ extends dt{constructor(e){super(L_.type),this.data=e}};P_.type="dblclick";var I_=P_,D_=class U_ extends dt{constructor(e){super(U_.type),this.fullscreenEnabled=e}};D_.type="fullscreen";var mo=D_,O_=class N_ extends dt{constructor(e){super(N_.type),this.notificationId=e}};O_.type="hide-notification";var go=O_,F_=class k_ extends dt{constructor(e){super(k_.type),this.overlayId=e}};F_.type="hide-overlay";var B_=F_,z_=class H_ extends dt{constructor(e){super(H_.type),this.panelId=e}};z_.type="hide-panel";var os=z_,V_=class G_ extends dt{constructor(e){super(G_.type),this.tooltipData=e}};V_.type="hide-tooltip";var W_=V_,X_=class $_ extends dt{constructor(e,n){super($_.type,!0),this.key=e,this.originalEvent=n}};X_.type="key-press";var as=X_,j_=class q_ extends dt{constructor(e){super(q_.type),this.progress=e}};j_.type="load-progress";var Y_=j_,K_=class Z_ extends dt{constructor(e){super(Z_.type),this.panorama=e}};K_.type="panorama-load";var J_=K_,Q_=class e0 extends dt{constructor(e){super(e0.type),this.data=e}};Q_.type="panorama-loaded";var Sr=Q_,t0=class n0 extends dt{constructor(e,n){super(n0.type),this.panorama=e,this.error=n}};t0.type="panorama-error";var i0=t0,s0=class r0 extends dt{constructor(e){super(r0.type),this.completed=e}};s0.type="transition-done";var o0=s0,a0=class l0 extends dt{constructor(e){super(l0.type),this.position=e}};a0.type="position-updated";var vo=a0,c0=class u0 extends dt{constructor(e){super(u0.type),this.roll=e}};c0.type="roll-updated";var _o=c0,h0=class d0 extends dt{constructor(){super(d0.type)}};h0.type="ready";var xo=h0,f0=class p0 extends dt{constructor(){super(p0.type)}};f0.type="render";var m0=f0,g0=class v0 extends dt{constructor(e){super(v0.type),this.notificationId=e}};g0.type="show-notification";var yo=g0,_0=class x0 extends dt{constructor(e){super(x0.type),this.overlayId=e}};_0.type="show-overlay";var y0=_0,E0=class M0 extends dt{constructor(e){super(M0.type),this.panelId=e}};E0.type="show-panel";var ls=E0,w0=class b0 extends dt{constructor(e,n){super(b0.type),this.tooltip=e,this.tooltipData=n}};w0.type="show-tooltip";var S0=w0,T0=class A0 extends dt{constructor(e){super(A0.type),this.size=e}};T0.type="size-updated";var Eo=T0,C0=class R0 extends dt{constructor(){super(R0.type)}};C0.type="stop-all";var Mo=C0,P0=class L0 extends dt{constructor(e){super(L0.type),this.zoomLevel=e}};P0.type="zoom-updated";var Di=P0,ec=class extends dt{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},I0=class D0 extends ec{constructor(e,n,i,s){super(D0.type,e,n,i,s)}};I0.type="enter-object";var U0=I0,O0=class N0 extends ec{constructor(e,n,i,s){super(N0.type,e,n,i,s)}};O0.type="leave-object";var gh=O0,F0=class k0 extends ec{constructor(e,n,i,s){super(k0.type,e,n,i,s)}};F0.type="hover-object";var B0=F0,pd=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new Fe("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new Fe("Current adapter does not support texture coordinates.")}};pd.supportsDownload=!1;function $p(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof pd)return dd(e.id,e.VERSION,"5.13.3"),e}return null}var Kr=`${fs}_touchSupport`,cn={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=B2(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=F2();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=k2(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!cn.isWebGLSupported)throw new Fe("WebGL 2 is not supported.");if(cn.maxTextureWidth===0)throw new Fe("Unable to detect system capabilities")}};function F2(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function k2(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Kr in localStorage&&(t=localStorage[Kr]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Kr]=!1,n(!1)},r=()=>{i(),localStorage[Kr]=!0,n(!0)},o=()=>{i(),localStorage[Kr]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function B2(t){let e=t,n=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}r.width=0,r.height=0,n||(e/=2)}if(n)return e;throw new Fe("Unable to detect system capabilities")}var z2=Jl({resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!ot.isPowerOfTwo(t))throw new Fe("EquirectangularAdapter resolution must be power of two.");return t}}),ta=class extends pd{constructor(t,e){super(t),this.config=z2(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(kt(t.textureX)||kt(t.textureY))throw new Fe("Texture position is missing 'textureX' or 'textureY'");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,i=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-i}}sphericalCoordsToTextureCoords(t,e){const n=t.yaw/Math.PI/2*e.fullWidth,i=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-i)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,n,i=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new Fe("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:n}:s={data:n,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?c=>this.viewer.textureLoader.dispatchProgress(c):null,s.path),o=i?await this.loadXMP(r):null,a=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(a,o));const l=d_(a.width,a.height,s.data,o),u=this.createEquirectangularTexture(a);return{panorama:t,texture:u,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta");if(n===-1)return null;const i=e.indexOf("</x:xmpmeta>",n);if(i===-1)return null;const s=e.substring(n,i);return s.includes("GPano:")?{fullWidth:Mn(s,"FullPanoWidthPixels"),fullHeight:Mn(s,"FullPanoHeightPixels"),croppedWidth:Mn(s,"CroppedAreaImageWidthPixels"),croppedHeight:Mn(s,"CroppedAreaImageHeightPixels"),croppedX:Mn(s,"CroppedAreaLeftPixels"),croppedY:Mn(s,"CroppedAreaTopPixels"),poseHeading:Mn(s,"PoseHeadingDegrees",!1),posePitch:Mn(s,"PosePitchDegrees",!1),poseRoll:Mn(s,"PoseRollDegrees",!1),initialHeading:Mn(s,"InitialViewHeadingDegrees",!1),initialPitch:Mn(s,"InitialViewPitchDegrees",!1),initialFov:Mn(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=n,i.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>cn.maxTextureWidth){const e=Math.min(1,cn.maxCanvasWidth/t.width),n=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),i=n.getContext("2d");return this.config.blur&&(i.filter=`blur(${n.width/2048}px)`),i.drawImage(t,0,0,n.width,n.height),ph(n)}return ph(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,n=t.croppedWidth/t.fullWidth*2*Math.PI,i=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new Qo(Ws,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,n,i,s).scale(-1,1,1),o=new Ko({depthTest:!1,depthWrite:!1});return new Tn(r,o)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};ta.id="equirectangular";ta.VERSION="5.13.3";ta.supportsDownload=!0;var z0=class extends ta{constructor(t,e){super(t,{resolution:(e==null?void 0:e.resolution)??64,useXmpData:!1})}async loadTexture(t,e){const n=await super.loadTexture(t,e,null,!1);return n.panoData=null,n}createMesh(){const t=new Qo(Ws,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),n=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const o=s*3+r,a=n.getX(o),l=n.getY(o),u=n.getZ(o),c=.947;if(s<e.count/6){const h=a===0&&u===0?1:Math.acos(l)/Math.sqrt(a*a+u*u)*(2/Math.PI);e.setXY(o,a*(c/4)*h+1/4,u*(c/2)*h+1/2)}else{const h=a===0&&u===0?1:Math.acos(-l)/Math.sqrt(a*a+u*u)*(2/Math.PI);e.setXY(o,-a*(c/4)*h+3/4,u*(c/2)*h+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const i=new Ko({depthTest:!1,depthWrite:!1});return new Tn(t,i)}};z0.id="dual-fisheye";z0.VERSION="5.13.3";var $s=class H0{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof H0?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},H2=Jl({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),hn=class extends $s{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=H2(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===Ft.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){cd(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Yl(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,ad(this.container.querySelector("svg"),"psv-button-svg")}},V2=class extends hn{constructor(t,e){var n,i;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},Ho=class extends hn{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Jn.info}),this.mode=0,this.viewer.addEventListener(go.type,this),this.viewer.addEventListener(yo.type,this),this.viewer.addEventListener(os.type,this),this.viewer.addEventListener(ls.type,this),this.viewer.addEventListener(_n.type,this)}destroy(){this.viewer.removeEventListener(go.type,this),this.viewer.removeEventListener(yo.type,this),this.viewer.removeEventListener(os.type,this),this.viewer.removeEventListener(ls.type,this),this.viewer.removeEventListener(_n.type,this),super.destroy()}handleEvent(t){if(t instanceof _n){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof go?e=this.mode===1:t instanceof yo?e=this.mode===1&&t.notificationId!==Wt.DESCRIPTION:t instanceof os?e=this.mode===2:t instanceof ls&&(e=this.mode===2&&t.panelId!==Wt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Wt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Wt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Wt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Wt.DESCRIPTION,content:this.viewer.config.caption}))}};Ho.id="description";var V0=class extends hn{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Jn.download}),this.viewer.addEventListener(_n.type,this),this.viewer.addEventListener(Sr.type,this)}destroy(){this.viewer.removeEventListener(_n.type,this),this.viewer.removeEventListener(Sr.type,this),super.destroy()}handleEvent(t){t instanceof _n?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof Sr&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};V0.id="download";var G0=class extends hn{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Jn.fullscreenIn,iconActive:Jn.fullscreenOut}),this.viewer.addEventListener(mo.type,this)}destroy(){this.viewer.removeEventListener(mo.type,this),super.destroy()}handleEvent(t){t instanceof mo&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};G0.id="fullscreen";var G2="psvButton",W2=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${Jn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Za=class extends hn{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Jn.menu}),this.viewer.addEventListener(ls.type,this),this.viewer.addEventListener(os.type,this),super.hide()}destroy(){this.viewer.removeEventListener(ls.type,this),this.viewer.removeEventListener(os.type,this),super.destroy()}handleEvent(t){t instanceof ls?this.toggleActive(t.panelId===Wt.MENU):t instanceof os&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Wt.MENU,content:W2(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?Kv(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[G2]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Wt.MENU)}};Za.id="menu";function X2(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return Jn.arrow.replace("rotate(0",`rotate(${e}`)}var na=class extends hn{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:X2(e)}),this.direction=e,this.handler=new Ql,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===Ft.Enter&&this.__onMouseDown();break;case"keyup":t.key===Ft.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Zl(cn.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};na.groupId="move";var W0=class extends na{constructor(t){super(t,1)}};W0.id="moveDown";var X0=class extends na{constructor(t){super(t,2)}};X0.id="moveLeft";var $0=class extends na{constructor(t){super(t,3)}};$0.id="moveRight";var j0=class extends na{constructor(t){super(t,0)}};j0.id="moveUp";var md=class extends hn{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new Ql,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===Ft.Enter&&this.__onMouseDown();break;case"keyup":t.key===Ft.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Zl(cn.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};md.groupId="zoom";var q0=class extends md{constructor(t){super(t,Jn.zoomIn,0)}};q0.id="zoomIn";var Y0=class extends md{constructor(t){super(t,Jn.zoomOut,1)}};Y0.id="zoomOut";var gd=class extends hn{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new m_(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(ai(this.container,"max-width"),10),this.viewer.addEventListener(Di.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(xo.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Di.type,this),this.viewer.removeEventListener(xo.type,this),super.destroy()}handleEvent(t){t instanceof Di?this.__moveZoomValue(t.zoomLevel):t instanceof xo&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Zl(cn.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};gd.id="zoomRange";gd.groupId="zoom";var K0=class extends v_{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Z0=class extends K0{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){$t(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){$t(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};Z0.readonlyOptions=[];function vh(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof K0)return dd(e.id,e.VERSION,"5.13.3"),e}return null}var Bi={panorama:null,container:null,adapter:[ta,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Ft.ArrowUp]:"ROTATE_UP",[Ft.ArrowDown]:"ROTATE_DOWN",[Ft.ArrowRight]:"ROTATE_RIGHT",[Ft.ArrowLeft]:"ROTATE_LEFT",[Ft.PageUp]:"ZOOM_IN",[Ft.PageDown]:"ZOOM_OUT",[Ft.Plus]:"ZOOM_IN",[Ft.Minus]:"ZOOM_OUT"}},jp={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},_h={container:t=>{if(!t)throw new Fe("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[$p(t[0]),t[1]]:t=[$p(t),null]:t=e,!t[0])throw new Fe("An undefined value was given for adapter.");if(!t[0].id)throw new Fe("Adapter has no id.");return t},defaultYaw:t=>si(t),defaultPitch:t=>si(t,!0),defaultZoomLvl:t=>ot.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&($t("maxFov cannot be lower than minFov"),t=e.maxFov),ot.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),ot.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...Bi.lang,...t}),keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[vh(e[0]),e[1]]:e=[vh(e),null],!e[0])throw new Fe(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new Fe(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?Kl(Bi.navbar):typeof t=="string"?t.split(/[ ,]/):t},$2=Jl(Bi,_h),gr=class extends hn{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(Ho.id,!1))==null||t.autoSize(!0)}};gr.id="caption";var xh={},xl={};function vd(t,e){if(!t.id)throw new Fe("Button id is required");if(xh[t.id]=t,t.groupId&&(xl[t.groupId]=xl[t.groupId]||[]).push(t),e){const n=Bi.navbar;switch(e){case"start":n.unshift(t.id);break;case"end":n.push(t.id);break;default:{const[i,s]=e.split(":"),r=n.indexOf(i);if(!i||!s||r===-1)throw new Fe(`Invalid defaultPosition ${e}`);n.splice(r+(s==="right"?1:0),0,t.id)}}}}[Y0,gd,q0,Ho,gr,V0,G0,X0,$0,j0,W0].forEach(t=>vd(t));var j2=class extends $s{constructor(t){super(t,{className:`psv-navbar ${ea}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(gr.id)!==-1&&t.indexOf(Ho.id)===-1&&t.splice(t.indexOf(gr.id),0,Ho.id),t.forEach(e=>{typeof e=="object"?new V2(this,e):xh[e]?new xh[e](this):xl[e]?xl[e].forEach(n=>{new n(this)}):$t(`Unknown button ${e}`)}),new Za(this),this.children.forEach(e=>{e instanceof hn&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof gr?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof hn&&i.id===t);return!n&&e&&$t(`button "${t}" not found in the navbar`),n}focusButton(t){var e,n;this.isVisible()&&((n=((e=this.getButton(t,!1))==null?void 0:e.container)||this.container.firstElementChild)==null||n.focus())}autoSize(){var i;this.children.forEach(s=>{s instanceof hn&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(s=>{s.isVisible()&&s instanceof hn&&(e+=s.width,s.collapsable&&n.push(s))}),e!==0&&(t<e&&n.length>0?(n.forEach(s=>s.collapse()),this.collapsed=n,this.getButton(Za.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(Za.id).hide(!1)),(i=this.getButton(gr.id,!1))==null||i.autoSize())}};ah.enabled=!1;var fr={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){ah.enabled&&($t("ThreeJS cache should be disabled"),ah.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},q2=class extends $s{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=ai(this.loader,"color"),this.color=ai(this.canvas,"color"),this.border=parseInt(ai(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(ai(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(_n.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(_n.type,this),super.destroy()}handleEvent(t){t instanceof _n&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=ot.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+n,a=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},Y2=class extends $s{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Fe("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new yo(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new go(e))}}},K2=class extends $s{constructor(t){super(t,{className:`psv-overlay ${ea}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(as.type,this),super.hide()}destroy(){this.viewer.removeEventListener(as.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof as&&this.isVisible()&&this.state.dismissible&&t.key===Ft.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Fe("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new y0(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new B_(e))}}},Z2=200,Zc="psv-panel-content--no-interaction",J2=class extends $s{constructor(t){super(t,{className:`psv-panel ${ea}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=Jn.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(as.type,this)}destroy(){this.viewer.removeEventListener(as.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case as.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Fe("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Yl(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(pl(n))},this.state.keyHandler=n=>{n.key===Ft.Enter&&t.clickHandler(pl(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new ls(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new os(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Zc))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Zc)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===Ft.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Zc)}__resize(t,e){const n=t,i=e,s=Math.max(Z2,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},Q2=class extends $s{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Fe("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new Fe("Initialized tooltip cannot be re-initialized");t.className&&ad(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new S0(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(ai(this.arrow,"border-top-width"),10),this.state.border=parseInt(ai(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var a;if(this.state.state!==1&&this.state.state!==3)throw new Fe("Uninitialized tooltip cannot be moved");t.box=t.box??((a=this.state.config)==null?void 0:a.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:l_(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const l=hd(i.posClass);s&&(i.posClass[l?0:1]=s),r&&(i.posClass[l?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new W_(this.state.data));const t=parseFloat(ai(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,o=t.width,a=n+this.state.border,l=e.box.width/2+n*2,u=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-u-s,t.left=r+a-o,t.arrowTop=s,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-u-s,t.left=r-o/2,t.arrowTop=s,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-u-s,t.left=r-a,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+u,t.left=r+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+u,t.left=r-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+u,t.left=r-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-s,t.left=r-l-o,t.arrowTop=s-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-s/2,t.left=r-l-o,t.arrowTop=s/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=r-l-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-s,t.left=r+l,t.arrowTop=s-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},e3=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,ia=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},Gn=new V,La=new fi(0,0,0,"ZXY"),t3=class extends ia{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return ot.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return ot.radToDeg(2*Math.atan(Math.tan(ot.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return ot.radToDeg(2*Math.atan(Math.tan(ot.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!kt(e),s=!kt(n),r={};let o=null;if(i){const a=this.viewer.getPosition(),l=jv(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=fh(t,qv(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(n-a);r.zoom={start:a,end:n},o===null&&(o=fh(t,Math.PI/4*l/100))}return o===null?typeof t=="number"?o=t:o=uh:o=Math.max(uh,o),{duration:o,properties:r}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??Bi.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new Fe("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!La.equals(this.viewer.renderer.panoramaPose)||!La.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Gn),Gn.applyEuler(this.viewer.renderer.panoramaPose),Gn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Gn)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Fe("Current adapter does not support texture coordinates or no texture has been loaded");return(!La.equals(this.viewer.renderer.panoramaPose)||!La.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,Gn),mh(Gn,this.viewer.renderer.sphereCorrection),mh(Gn,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(Gn)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=Ws){return e||(e=new V),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[fs]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,Gn),this.vector3ToViewerCoords(Gn)}isPointVisible(t){let e,n;if(t instanceof V)e=t,n=this.vector3ToViewerCoords(t);else if(ud(t))e=this.sphericalCoordsToVector3(t,Gn),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new Fe("Position is missing 'yaw' or 'pitch'");return{yaw:si(t.yaw),pitch:si(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:si((t==null?void 0:t.pan)||0),tilt:si((t==null?void 0:t.tilt)||0,!0),roll:si((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:ot.degToRad((t==null?void 0:t.poseHeading)||0),tilt:ot.degToRad((t==null?void 0:t.posePitch)||0),roll:ot.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(kt(t.zoom)&&!kt(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),kt(t.position)&&!kt(e.initialHeading)&&!kt(e.initialPitch)&&(t={...t,position:{yaw:si(e.initialHeading),pitch:si(e.initialPitch,!0)}})),t}},n3=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,i3=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,tc=class J0{constructor(){this.$=J0.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};tc.IDLE=0;tc.CLICK=1;tc.MOVING=2;var It=tc,s3=class extends ia{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new It,this.keyHandler=new Ql,this.resizeObserver=new ResizeObserver(n_(()=>this.viewer.autoSize(),50)),this.moveThreshold=Bv*cn.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(po.type,this),this.viewer.addEventListener(Mo.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(po.type,this),this.viewer.removeEventListener(Mo.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case po.type:this.__applyMoveDelta();break;case Mo.type:this.__clearMoveDelta();break}if(!Zv(t,"."+ea))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){var n;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===Ft.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Wt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new as(t.key,t))||!this.state.keyboardEnabled)return;const e=(n=this.config.keyboardActions)==null?void 0:n[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(It.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(It.CLICK,It.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(It.CLICK,It.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(It.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},Hv))):t.touches.length===2&&(this.step.set(It.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(It.CLICK,It.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(It.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Wt.TWO_FINGERS,image:n3,title:this.config.lang.twoFingers})},Vv));else if(this.step.is(It.CLICK,It.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Wt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Wt.CTRL_ZOOM,image:i3,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Wt.CTRL_ZOOM),Gv);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new mo(t))}__resetMove(){this.step.set(It.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=hh(t);this.step.set(It.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(It.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(u=>u.object.userData[fs]);if(l){const u=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),c={rightclick:i,originalEvent:n,target:pl(n),clientX:t,clientY:e,viewerX:r,viewerY:o,yaw:u.yaw,pitch:u.pitch,objects:a.map(h=>h.object).filter(h=>!h.userData[fs])};try{const h=this.viewer.dataHelper.sphericalCoordsToTextureCoords(c);Object.assign(c,h)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-c.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-c.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new I_(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new A_(c)),this.data.dblclickData=Kl(c),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},zv))}}__handleObjectsEvents(t){if(!s_(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=Jv(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(t,r,n,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,gh),this.state.objectsObservers[r]=null),o?s(a.object,r,B0):(this.state.objectsObservers[r]=a.object,s(a.object,r,U0))):o&&(s(o,r,gh),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(It.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(It.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(It.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(n/this.state.size.width)*ot.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*ot.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(It.MOVING)){t.preventDefault();const e=hh(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/cn.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};it.enabled=!1;var Ia=new ht,qp=new wt,Yp=new Br,r3=class extends ia{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new y2(this.config.rendererParameters),this.renderer.setPixelRatio(cn.pixelRatio),this.renderer.outputColorSpace=Gs,this.renderer.toneMapping=hv,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new oh,this.camera=new Dn(50,16/9,.1,2*Ws),this.camera.matrixAutoUpdate=!1;const e=new Tn(new Qo(Ws).scale(-1,1,1),new Ko({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[fs]:!0},this.scene.add(e),this.raycaster=new FA,this.frustum=new id,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(Eo.type,this),this.viewer.addEventListener(Di.type,this),this.viewer.addEventListener(vo.type,this),this.viewer.addEventListener(_o.type,this),this.viewer.addEventListener(_n.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Eo.type,this),this.viewer.removeEventListener(Di.type,this),this.viewer.removeEventListener(vo.type,this),this.viewer.removeEventListener(_o.type,this),this.viewer.removeEventListener(_n.type,this),super.destroy()}handleEvent(t){switch(t.type){case Eo.type:this.__onSizeUpdated();break;case Di.type:this.__onZoomUpdated();break;case vo.type:this.__onPositionUpdated();break;case _o.type:this.__onPositionUpdated();break;case _n.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new po(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new m0))}setTexture(t){this.meshContainer||(this.meshContainer=new ks,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,s=!kt(e.position),r=!kt(e.zoom),o=new fd(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new ks,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!n.rotation){const d=this.viewer.getPosition(),p=new V(0,1,0);a.rotateOnWorldAxis(p,o.position.yaw-d.yaw);const v=new V(0,1,0).cross(this.camera.getWorldDirection(new V)).normalize();a.rotateOnWorldAxis(v,o.position.pitch-d.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new ds),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:u,properties:c}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?o.position:null,i?o.zoomLevel:null),h=new _l({properties:{...c,opacity:{start:0,end:1}},duration:u,easing:"inOutCubic",onTick:d=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,d.opacity);break;case"black":case"white":d.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?ot.mapLinear(d.opacity,0,.5,1,0):ot.mapLinear(d.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=n.effect==="black"?ot.mapLinear(d.opacity,.5,1,0,1):ot.mapLinear(d.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:d.yaw,pitch:d.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(d.zoom),this.viewer.needsUpdate()}});return h.then(d=>{a.remove(l),this.scene.remove(a),d?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),h}getIntersections(t){var n;Ia.x=2*t.x/this.state.size.width-1,Ia.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Ia,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,Ia)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(qp.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(qp),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Yp.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Yp)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(s=>{var r,o;(o=(r=s.value)==null?void 0:r.dispose)==null||o.call(r)}),n.dispose()};t.traverse(n=>{var i,s;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>{e(r)}):e(n.material)),n instanceof oh||(s=n.dispose)==null||s.call(n),n!==t&&this.cleanScene(n)})}},o3=class extends sd{load(t,e,n,i,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(o=>{if(o.status===200||o.status===0){const a=o.body.getReader(),l=o.headers.get("Content-Length")||o.headers.get("X-File-Size"),u=l?parseInt(l):0,c=u!==0;let h=0;const d=new ReadableStream({start(p){v();function v(){a.read().then(({done:g,value:f})=>{if(g)p.close();else{h+=f.byteLength;const m=new ProgressEvent("progress",{lengthComputable:c,loaded:h,total:u});n(m),p.enqueue(f),v()}}).catch(g=>{i(g)})}}});return new Response(d)}else throw new Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>o.blob()).then(o=>{e(o)}).catch(o=>{i(o)})}},a3=class extends sd{load(t,e,n,i){const s=document.createElement("img");function r(){l(),e(this)}function o(u){if(l(),i!=null&&i.aborted){const c=new Error;c.name="AbortError",c.message="The operation was aborted.",n(c)}else n(u)}function a(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",o,!1),i==null||i.removeEventListener("abort",a,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",o,!1),i==null||i.addEventListener("abort",a,!1),t.startsWith("data:")||(s.crossOrigin=this.withCredentials?"use-credentials":"anonymous"),s.src=t,s}},l3=class extends ia{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new o3,this.imageLoader=new a3}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,n){const i=fr.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);fr.remove(t,n)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{let o=0;e==null||e(o),this.fileLoader.load(t,a=>{o=100,e==null||e(o),fr.add(t,n,a),s(a)},a=>{if(a.lengthComputable){const l=a.loaded/a.total*100;l>o&&(o=l,e==null||e(o))}},a=>{r(a)},this.__getAbortSignal(n))})}loadImage(t,e,n){const i=fr.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{this.imageLoader.load(t,o=>{fr.add(t,n,o),s(o)},o=>{r(o)},this.__getAbortSignal(n))})):this.loadFile(t,e,n).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new Fe("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new Y_(Math.round(t)))}__getAbortSignal(t){var e;return t?((e=this.abortCtrl[t])!=null&&e.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},c3=class extends ia{constructor(t){super(t),this.zoom=new to(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Di(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new f_(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new vo(e))},{yaw:new to(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new to(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new to(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new _o(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(ot.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(ot.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},u3=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new V(0,0,Ws),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},h3=class extends v_{constructor(t){var e,n,i;if(super(),this.plugins={},this.children=[],this.parent=Yv(t.container),!this.parent)throw new Fe('"container" element not found.');this.parent[fs]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),h_(this.parent),u_(this.container,"core"),this.state=new u3,this.config=$2(t),this.__setSize(this.config.size),this.overlay=new K2(this);try{cn.load()}catch(s){console.error(s),this.showError(this.config.lang.webglError);return}fr.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new r3(this),this.textureLoader=new l3(this),this.eventsHandler=new s3(this),this.dataHelper=new t3(this),this.dynamics=new c3(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new q2(this),this.navbar=new j2(this),this.panel=new J2(this),this.notification=new Y2(this),this.autoSize(),this.setCursor(null),cd(cn.isTouchEnabled,s=>{Yl(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(i=s.init)==null||i.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var t,e,n,i,s,r;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[o,a]of Object.entries(this.plugins))a.destroy(),delete this.plugins[o];this.children.slice().forEach(o=>o.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(n=this.textureLoader)==null||n.destroy(),(i=this.dataHelper)==null||i.destroy(),(s=this.adapter)==null||s.destroy(),(r=this.dynamics)==null||r.destroy(),this.parent.removeChild(this.container),delete this.parent[fs]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new xo)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=vh(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Qv(this.parent,cn.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Eo(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){var r;this.textureLoader.abortLoading(),(r=this.state.transitionAnimation)==null||r.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const i=o=>{if(a_(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new i0(t,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new J_(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),dh();const a=this.dataHelper.cleanPanoramaOptions(e,o.panoData);return(!kt(a.zoom)||!kt(a.position))&&this.stopAll(),{textureData:o,cleanOptions:a}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:o,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Sr(o)),kt(a.zoom)||this.zoom(a.zoom),kt(a.position)||this.rotate(a.position)}).then(()=>i(),o=>i(o)):this.state.loadingPromise=s.then(({textureData:o,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Sr(o)),this.state.transitionAnimation=this.renderer.transition(o,a,n),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new o0(o)),!o)throw dh()}).then(()=>i(),o=>i(o)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Bi)){$t(`Unknown option ${n}`);continue}if(n in jp){$t(jp[n]);continue}switch(n in _h&&(i=_h[n](i,{rawConfig:e,defValue:Bi[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Di(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new _n(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:Wt.ERROR,image:e3,title:t,dismissible:!1})}hideError(){this.overlay.hide(Wt.ERROR)}rotate(t){const e=new b_(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=ud(t),n=!kt(t.zoom),i=new fd(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return s?(this.state.animation=new _l({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),n&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new _l(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t!=null&&t[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||e_(this.parent,cn.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&t_(cn.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new Q2(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new Mo),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Markers Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var d3=Object.defineProperty,f3=(t,e)=>{for(var n in e)d3(t,n,{get:e[n],enumerable:!0})},p3={};f3(p3,{EnterMarkerEvent:()=>cx,GotoMarkerDoneEvent:()=>yh,HideMarkersEvent:()=>wo,LeaveMarkerEvent:()=>ox,MarkerVisibilityEvent:()=>tx,MarkersPluginEvent:()=>Fn,RenderMarkersListEvent:()=>Cx,SelectMarkerEvent:()=>dx,SelectMarkerListEvent:()=>mx,SetMarkersEvent:()=>wx,ShowMarkersEvent:()=>bo,UnselectMarkerEvent:()=>_x});var Fn=class extends g_{},Q0=class ex extends Fn{constructor(e,n){super(ex.type),this.marker=e,this.visible=n}};Q0.type="marker-visibility";var tx=Q0,nx=class ix extends Fn{constructor(e){super(ix.type),this.marker=e}};nx.type="goto-marker-done";var yh=nx,sx=class rx extends Fn{constructor(e){super(rx.type),this.marker=e}};sx.type="leave-marker";var ox=sx,ax=class lx extends Fn{constructor(e){super(lx.type),this.marker=e}};ax.type="enter-marker";var cx=ax,ux=class hx extends Fn{constructor(e,n,i){super(hx.type),this.marker=e,this.doubleClick=n,this.rightClick=i}};ux.type="select-marker";var dx=ux,fx=class px extends Fn{constructor(e){super(px.type),this.marker=e}};fx.type="select-marker-list";var mx=fx,gx=class vx extends Fn{constructor(e){super(vx.type),this.marker=e}};gx.type="unselect-marker";var _x=gx,xx=class yx extends Fn{constructor(){super(yx.type)}};xx.type="hide-markers";var wo=xx,Ex=class Mx extends Fn{constructor(e){super(Mx.type),this.markers=e}};Ex.type="set-markers";var wx=Ex,bx=class Sx extends Fn{constructor(){super(Sx.type)}};bx.type="show-markers";var bo=bx,Tx=class Ax extends Fn{constructor(e){super(Ax.type),this.markers=e}};Tx.type="render-markers-list";var Cx=Tx,m3=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Vo=class extends hn{constructor(t){super(t,{className:"psv-markers-button",icon:m3,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(bo.type,this),this.plugin.addEventListener(wo.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(bo.type,this),this.plugin.removeEventListener(wo.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof bo?this.toggleActive(!0):t instanceof wo&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Vo.id="markers";var Rx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,yl="http://www.w3.org/2000/svg",Mt="psvMarker",g3=Je.dasherize(Mt),Zr="marker",pr="markersList",Eh={amount:2,duration:100,easing:"linear"},v3=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Rx} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${t.map(n=>`
        <li data-${g3}="${n.id}" class="psv-panel-menu-item" tabindex="0">
          ${n.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${n.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${n.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,nc=class extends hn{constructor(t){super(t,{className:" psv-markers-list-button",icon:Rx,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(Ye.ShowPanelEvent.type,this),this.viewer.addEventListener(Ye.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(Ye.ShowPanelEvent.type,this),this.viewer.removeEventListener(Ye.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof Ye.ShowPanelEvent?this.toggleActive(t.panelId===pr):t instanceof Ye.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};nc.id="markersList";var Kp=new V,_3=new Xs,Zp=new V,x3=class extends vn{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},ni=new wt,y3=new wt,E3=class{constructor(t={}){const e=this;let n,i,s,r;const o={camera:{style:""},objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",a.appendChild(l);const u=document.createElement("div");u.style.transformStyle="preserve-3d",l.appendChild(u),this.getSize=function(){return{width:n,height:i}},this.render=function(g,f){const m=f.projectionMatrix.elements[5]*r;f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(n/f.view.width)}px, ${-f.view.offsetY*(i/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let M,b;f.isOrthographicCamera&&(M=-(f.right+f.left)/2,b=(f.top+f.bottom)/2);const y=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,L=f.isOrthographicCamera?`scale( ${y} )scale(`+m+")translate("+c(M)+"px,"+c(b)+"px)"+h(f.matrixWorldInverse):`scale( ${y} )translateZ(`+m+"px)"+h(f.matrixWorldInverse),A=(f.isPerspectiveCamera?"perspective("+m+"px) ":"")+L+"translate("+s+"px,"+r+"px)";o.camera.style!==A&&(u.style.transform=A,o.camera.style=A),v(g,g,f)},this.setSize=function(g,f){n=g,i=f,s=n/2,r=i/2,a.style.width=g+"px",a.style.height=f+"px",l.style.width=g+"px",l.style.height=f+"px",u.style.width=g+"px",u.style.height=f+"px"};function c(g){return Math.abs(g)<1e-10?0:g}function h(g){const f=g.elements;return"matrix3d("+c(f[0])+","+c(-f[1])+","+c(f[2])+","+c(f[3])+","+c(f[4])+","+c(-f[5])+","+c(f[6])+","+c(f[7])+","+c(f[8])+","+c(-f[9])+","+c(f[10])+","+c(f[11])+","+c(f[12])+","+c(-f[13])+","+c(f[14])+","+c(f[15])+")"}function d(g){const f=g.elements;return"translate(-50%,-50%)"+("matrix3d("+c(f[0])+","+c(f[1])+","+c(f[2])+","+c(f[3])+","+c(-f[4])+","+c(-f[5])+","+c(-f[6])+","+c(-f[7])+","+c(f[8])+","+c(f[9])+","+c(f[10])+","+c(f[11])+","+c(f[12])+","+c(f[13])+","+c(f[14])+","+c(f[15])+")")}function p(g){g.isCSS3DObject&&(g.element.style.display="none");for(let f=0,m=g.children.length;f<m;f++)p(g.children[f])}function v(g,f,m,M){if(g.visible===!1){p(g);return}if(g.isCSS3DObject){const b=g.layers.test(m.layers)===!0,y=g.element;if(y.style.display=b===!0?"":"none",b===!0){g.onBeforeRender(e,f,m);let L;g.isCSS3DSprite?(ni.copy(m.matrixWorldInverse),ni.transpose(),g.rotation2D!==0&&ni.multiply(y3.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(Kp,_3,Zp),ni.setPosition(Kp),ni.scale(Zp),ni.elements[3]=0,ni.elements[7]=0,ni.elements[11]=0,ni.elements[15]=1,L=d(ni)):L=d(g.matrixWorld);const P=o.objects.get(g);if(P===void 0||P.style!==L){y.style.transform=L;const A={style:L};o.objects.set(g,A)}y.parentNode!==u&&u.appendChild(y),g.onAfterRender(e,f,m)}}for(let b=0,y=g.children.length;b<y;b++)v(g.children[b],f,m)}}},M3=class{constructor(t){this.viewer=t,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new E3({element:this.element}),this.scene=new oh,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(n=>{const i=n.target[Mt];i.config.visible&&(i.viewportIntersection=n.isIntersecting)})},{root:this.element}),t.addEventListener(Ye.ReadyEvent.type,this,{once:!0}),t.addEventListener(Ye.SizeUpdatedEvent.type,this),t.addEventListener(Ye.RenderEvent.type,this)}handleEvent(t){switch(t.type){case Ye.ReadyEvent.type:case Ye.SizeUpdatedEvent.type:this.updateSize();break;case Ye.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(Ye.ReadyEvent.type,this),this.viewer.removeEventListener(Ye.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Ye.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const t=this.viewer.getSize();this.renderer.setSize(t.width,t.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(t){this.scene.add(t.threeElement),this.intersectionObserver.observe(t.domElement)}removeObject(t){this.scene.remove(t.threeElement),this.intersectionObserver.unobserve(t.domElement)}},Ja=(t=>(t.image="image",t.html="html",t.element="element",t.imageLayer="imageLayer",t.videoLayer="videoLayer",t.elementLayer="elementLayer",t.polygon="polygon",t.polygonPixels="polygonPixels",t.polyline="polyline",t.polylinePixels="polylinePixels",t.square="square",t.rect="rect",t.circle="circle",t.ellipse="ellipse",t.path="path",t))(Ja||{});function Mh(t,e=!1){const n=[];if(Object.keys(Ja).forEach(i=>{t[i]&&n.push(i)}),n.length===0&&!e)throw new Fe(`missing marker content, either ${Object.keys(Ja).join(", ")}`);if(n.length>1)throw new Fe(`multiple marker content, either ${Object.keys(Ja).join(", ")}`);return n[0]}var Px=class{constructor(t,e,n){if(this.viewer=t,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!n.id)throw new Fe("missing marker id");this.type=Mh(n),this.createElement(),this.update(n)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(t){const e=Mh(t,!0);if(e!==void 0&&e!==this.type)throw new Fe(`cannot change marker ${t.id} type`);if(this.config=Je.deepmerge(this.config,t),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),Je.isNil(this.config.visible)&&(this.config.visible=!0),Je.isNil(this.config.zIndex)&&(this.config.zIndex=1),Je.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const n=this.config.rotation;typeof n=="object"?this.config.rotation={yaw:n.yaw?Je.parseAngle(n.yaw,!0,!1):0,pitch:n.pitch?Je.parseAngle(n.pitch,!0,!1):0,roll:n.roll?Je.parseAngle(n.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:Je.parseAngle(n,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=Je.parsePoint(this.config.anchor)}getListContent(){var t;return this.config.listContent?this.config.listContent:(t=this.config.tooltip)!=null&&t.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(t,e,n=!1){var i;if(this.state.visible&&((i=this.config.tooltip)!=null&&i.content)&&this.state.position2D){const s={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(t||e){const r=Je.getPosition(this.viewer.container);s.top=e-r.y+10,s.left=t-r.x,s.box={width:20,height:20}}else s.top=this.state.position2D.y,s.left=this.state.position2D.x;else{const r=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let o=this.state.size.width,a=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(o*=this.config.hoverScale.amount,a*=this.config.hoverScale.amount),s.top=r.y-a*this.state.anchor.y+a/2,s.left=r.x-o*this.state.anchor.x+o/2,s.box={width:o,height:a}}this.tooltip?n?this.tooltip.update(this.config.tooltip.content,s):this.tooltip.move(s):this.tooltip=this.viewer.createTooltip(s)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},_d=class extends Px{get domElement(){return this.element}constructor(t,e,n){super(t,e,n)}afterCreateElement(){this.element[Mt]=this}destroy(){delete this.element[Mt],super.destroy()}update(t){super.update(t);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&Je.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},El=class extends _d{constructor(t,e,n){super(t,e,n)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:t,zoomLevel:e,hoveringMarker:n}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:t,mouseover:this===n}),i):null}update(t){if(super.update(t),!Je.isExtendedPosition(this.config.position))throw new Fe(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new Fe(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Eh:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?ot.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const t=this.domElement,e=!this.state.visible||!this.state.size;if(e&&t.classList.add("psv-marker--transparent"),this.isSvg()){const n=t.firstElementChild.getBoundingClientRect();this.state.size={width:n.width,height:n.height}}else this.state.size={width:t.offsetWidth,height:t.offsetHeight};e&&t.classList.remove("psv-marker--transparent"),this.isSvg()&&(t.style.width=this.state.size.width+"px",t.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:t,viewerPosition:e,mouseover:n}){n!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(t,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*zo.EASINGS.inQuad(t/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,o=ot.degToRad(this.viewer.state.hFov)/2,a=Math.abs(Je.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*zo.EASINGS.outQuad(Math.max(0,(o-a)/o))}}n&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},w3=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,b3=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,S3=class extends ki{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}set alpha(t){this.uniforms.alpha.value=t}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(t){this.uniforms.keying.value=(t==null?void 0:t.enabled)===!0,t!=null&&t.enabled&&(typeof t.color=="object"&&"r"in t.color?this.uniforms.color.value.set(t.color.r/255,t.color.g/255,t.color.b/255):this.uniforms.color.value.set(t.color??65280),this.uniforms.similarity.value=t.similarity??.2,this.uniforms.smoothness.value=t.smoothness??.2)}constructor(t){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:t==null?void 0:t.map},repeat:{value:new ht(1,1)},offset:{value:new ht(0,0)},alpha:{value:(t==null?void 0:t.alpha)??1},keying:{value:!1},color:{value:new pt(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:b3,fragmentShader:w3}),this.chromaKey=t==null?void 0:t.chromaKey}};function T3({src:t,withCredentials:e,muted:n,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=n,s.preload="metadata",t instanceof MediaStream?s.srcObject=t:s.src=t,s}function A3(t,e,n){const[i,s]=t,[r,o]=e,a=Je.greatArcDistance(t,e),l=Math.sin((1-n)*a)/Math.sin(a),u=Math.sin(n*a)/Math.sin(a),c=l*Math.cos(s)*Math.cos(i)+u*Math.cos(o)*Math.cos(r),h=l*Math.cos(s)*Math.sin(i)+u*Math.cos(o)*Math.sin(r),d=l*Math.sin(s)+u*Math.sin(o);return[Math.atan2(h,c),Math.atan2(d,Math.sqrt(c*c+h*h))]}function Lx(t){const e=[t[0]];let n=0;for(let i=1;i<t.length;i++){const s=t[i-1][0]-t[i][0];s>Math.PI?n+=1:s<-Math.PI&&(n-=1),e.push([t[i][0]+n*2*Math.PI,t[i][1]])}return e}function Ix(t){const n=Lx(t).reduce((i,s)=>[i[0]+s[0],i[1]+s[1]]);return[Je.parseAngle(n[0]/t.length),n[1]/t.length]}function C3(t){const e=Lx(t);let n=0;const i=[];for(let r=0;r<e.length-1;r++){const o=Je.greatArcDistance(e[r],e[r+1])*zo.SPHERE_RADIUS;i.push(o),n+=o}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>n/2){const o=(n/2-s)/i[r];return A3(e[r],e[r+1],o)}s+=i[r]}return e[Math.round(e.length/2)]}var Da=new V,Jp=new V,Jc=new V,Qp=new V,em=new V,tm=new V;function R3(t,e,n){Da.copy(n).normalize(),Jp.crossVectors(t,e).normalize(),Jc.crossVectors(Jp,t).normalize(),Qp.copy(t).multiplyScalar(-Da.dot(Jc)),em.copy(Jc).multiplyScalar(Da.dot(t));const i=new V().addVectors(Qp,em).normalize();return tm.crossVectors(i,Da),i.applyAxisAngle(tm,.01).multiplyScalar(zo.SPHERE_RADIUS)}var P3=class extends Px{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(t,e,n){super(t,e,n)}is3d(){return!0}createElement(){const t=new S3({alpha:0}),e=new Jo(1,1),n=new Tn(e,t);n.userData={[Mt]:this},Object.defineProperty(n,"visible",{enumerable:!0,get:function(){return this.userData[Mt].config.visible},set:function(i){this.userData[Mt].config.visible=i}}),this.element=new ks().add(n),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[Mt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(t){var s,r,o;super.update(t);const e=this.threeMesh,n=e.parent,i=e.material;if(Je.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(l){throw new Fe(`invalid marker ${this.id} position`,l)}if(!this.config.size)throw new Fe(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,n.position),n.lookAt(0,n.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const a=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(l=>{const u=new V;return u.fromBufferAttribute(a,l),e.localToWorld(u)})}else{if(((s=this.config.position)==null?void 0:s.length)!==4)throw new Fe(`missing marker ${this.id} position`);let a;try{a=this.config.position.map(h=>this.viewer.dataHelper.cleanPosition(h))}catch(h){throw new Fe(`invalid marker ${this.id} position`,h)}const l=a.map(h=>this.viewer.dataHelper.sphericalCoordsToVector3(h)),u=Ix(a.map(({yaw:h,pitch:d})=>[h,d]));this.state.position={yaw:u[0],pitch:u[1]},this.state.positions3D=l;const c=e.geometry.getAttribute("position");[l[0],l[1],l[3],l[2]].forEach((h,d)=>{c.setX(d,h.x),c.setY(d,h.y),c.setZ(d,h.z)}),c.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){(r=i.map)==null||r.dispose();const a=T3({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),l=new PA(a);i.map=l,i.alpha=0,a.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,Je.isExtendedPosition(this.config.position)||(e.material.userData[Mt]={width:a.videoWidth,height:a.videoHeight},this.__setTextureWrap(i)))},{once:!0}),a.autoplay&&a.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){(o=i.map)==null||o.dispose();const a=new qt;i.map=a,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(l=>{this.viewer&&(Je.isExtendedPosition(this.config.position)||(e.material.userData[Mt]={width:l.width,height:l.height},this.__setTextureWrap(i)),a.image=l,a.anisotropy=4,a.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(t){const e=t.userData[Mt];if(!e||!e.height||!e.width){t.repeat.set(1,1),t.offset.set(0,0);return}const n=this.config.position.map(h=>this.viewer.dataHelper.cleanPosition(h)),i=Je.greatArcDistance([n[0].yaw,n[0].pitch],[n[1].yaw,n[1].pitch]),s=Je.greatArcDistance([n[3].yaw,n[3].pitch],[n[2].yaw,n[2].pitch]),r=Je.greatArcDistance([n[1].yaw,n[1].pitch],[n[2].yaw,n[2].pitch]),o=Je.greatArcDistance([n[0].yaw,n[0].pitch],[n[3].yaw,n[3].pitch]),a=(i+s)/(r+o),l=e.width/e.height;let u=0,c=0;a<l?u=l-a:c=1/l-1/a,t.repeat.set(1-u,1-c),t.offset.set(u/2,c/2)}},L3=class extends _d{constructor(t,e,n){super(t,e,n),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new x3(this.element),this.object.userData={[Mt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[Mt].config.visible},set:function(t){this.userData[Mt].config.visible=t}}),this.afterCreateElement()}destroy(){delete this.object.userData[Mt],delete this.object,super.destroy()}render({viewerPosition:t,zoomLevel:e}){var s,r;const n=this.domElement;if(this.state.size={width:n.offsetWidth,height:n.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const o=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return(r=(s=this.config.elementLayer).updateMarker)==null||r.call(s,{marker:this,position:o,viewerPosition:t,zoomLevel:e,viewerSize:this.viewer.state.size}),o}else return null}update(t){if(super.update(t),!Je.isExtendedPosition(this.config.position))throw new Fe(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new Fe(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,n=this.domElement;n.classList.add("psv-marker--css3d"),n.childNodes.forEach(i=>i.remove()),n.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},I3=class extends El{constructor(t,e,n){super(t,e,n)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(t){var n,i;const e=super.render(t);return e&&this.type==="element"&&((i=(n=this.config.element).updateMarker)==null||i.call(n,{marker:this,position:e,viewerPosition:t.viewerPosition,zoomLevel:t.zoomLevel,viewerSize:this.viewer.state.size})),e}update(t){super.update(t);const e=this.domElement;if(this.config.image&&!this.config.size)throw new Fe(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(n=>n.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},D3=class extends _d{constructor(t,e,n){super(t,e,n)}createElement(){this.element=document.createElementNS(yl,"path"),this.element[Mt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const t=this.__getAllPolyPositions();if(t[0].length>(this.isPolygon?2:1)){const n=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=t.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(o=>`${o.x-n.x},${o.y-n.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${n.x} ${n.y})`),n}else return null}update(t){super.update(t);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([i,s])=>{e.setAttributeNS(null,Je.dasherize(i),s)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let i=this.config[this.type];if(!Array.isArray(i[0])&&typeof i[0]!="object")for(let s=0;s<i.length;s++)i.splice(s,2,[i[s],i[s+1]]);if(!Array.isArray(i[0][0])&&typeof i[0][0]!="object"&&(i=[i]),this.isPolyline&&i.length>1)throw new Fe("polylines cannot have holes");this.isPixels?this.definition=i.map(s=>s.map(r=>{let o;return Je.isExtendedPosition(r)?o=this.viewer.dataHelper.cleanPosition(r):o=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]}),[o.yaw,o.pitch]})):this.definition=i.map(s=>s.map(r=>{let o;return Je.isExtendedPosition(r)?o=this.viewer.dataHelper.cleanPosition(r):o=this.viewer.dataHelper.cleanPosition({yaw:r[0],pitch:r[1]}),[o.yaw,o.pitch]}))}catch(i){throw new Fe(`invalid marker ${this.id} position`,i)}const n=this.isPolygon?Ix(this.coords[0]):C3(this.coords[0]);this.state.position={yaw:n[0],pitch:n[1]},this.positions3D=this.coords.map(i=>i.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(t=>this.__getPolyPositions(t))}__getPolyPositions(t){const e=t.length,n=t.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return n.forEach((s,r)=>{s.visible||[r===0?n[e-1]:n[r-1],r===e-1?n[0]:n[r+1]].forEach(a=>{a.visible&&i.push({visible:a.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{n.splice(s.index,0,{vector:R3(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),n.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},U3=class extends El{get svgElement(){return this.domElement.firstElementChild}constructor(t,e,n){super(t,e,n)}isSvg(){return!0}createElement(){const t=this.type==="square"?"rect":this.type,e=document.createElementNS(yl,t);this.element=document.createElementNS(yl,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(t){super.update(t);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([n,i])=>{e.setAttributeNS(null,n,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([n,i])=>{e.setAttributeNS(null,Je.dasherize(n),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},O3=Je.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(t){return t?(t===!0&&(t=Eh),typeof t=="number"&&(t={amount:t}),{...Eh,...t}):null}});function N3(t){switch(Mh(t,!1)){case"image":case"html":case"element":return I3;case"imageLayer":case"videoLayer":return P3;case"elementLayer":return L3;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return D3;case"square":case"rect":case"circle":case"ellipse":case"path":return U3;default:throw new Fe("invalid marker type")}}var Dr=class extends Z0{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(yl,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new M3(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}init(){super.init(),Je.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(Ye.ClickEvent.type,this),this.viewer.addEventListener(Ye.DoubleClickEvent.type,this),this.viewer.addEventListener(Ye.RenderEvent.type,this),this.viewer.addEventListener(Ye.ConfigChangedEvent.type,this),this.viewer.addEventListener(Ye.ObjectEnterEvent.type,this),this.viewer.addEventListener(Ye.ObjectHoverEvent.type,this),this.viewer.addEventListener(Ye.ObjectLeaveEvent.type,this),this.viewer.addEventListener(Ye.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(Mt),this.viewer.removeEventListener(Ye.ClickEvent.type,this),this.viewer.removeEventListener(Ye.DoubleClickEvent.type,this),this.viewer.removeEventListener(Ye.RenderEvent.type,this),this.viewer.removeEventListener(Ye.ObjectEnterEvent.type,this),this.viewer.removeEventListener(Ye.ObjectHoverEvent.type,this),this.viewer.removeEventListener(Ye.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(Ye.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){var e;switch(t.type){case Ye.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case Ye.RenderEvent.type:this.renderMarkers();break;case Ye.ClickEvent.type:this.__onClick(t,!1);break;case Ye.DoubleClickEvent.type:this.__onClick(t,!0);break;case Ye.ObjectEnterEvent.type:case Ye.ObjectLeaveEvent.type:case Ye.ObjectHoverEvent.type:if(t.userDataKey===Mt){const n=t.originalEvent,i=t.object.userData[Mt];switch(t.type){case Ye.ObjectEnterEvent.type:(e=i.config.style)!=null&&e.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(n,i);break;case Ye.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case Ye.ObjectHoverEvent.type:this.__onHoverMarker(n,i);break}}break;case"mouseenter":{const n=this.__getTargetMarker(Je.getEventTarget(t));this.__onEnterMarker(t,n);break}case"mouseleave":{const n=this.__getTargetMarker(Je.getEventTarget(t));this.__onLeaveMarker(n);break}case"mousemove":{const n=this.__getTargetMarker(Je.getEventTarget(t),!0);this.__onHoverMarker(t,n);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new bo)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new wo)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new Fe(`marker "${t.id}" already exists`);const n=new(N3(t))(this.viewer,this,t);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new Fe(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){var i;const n=this.getMarker(t.id);n.update(t),e&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&((i=n.config.tooltip)==null?void 0:i.trigger)==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const n=this.getMarker(t);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(n=>this.removeMarker(n,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t==null||t.forEach(n=>{this.addMarker(n,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const n=this.getMarker(t);return e?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new yh(n))}):(this.viewer.rotate(n.state.position),Je.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new yh(n)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const n=this.getMarker(t);n.config.visible=Je.isNil(e)?!n.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:Zr,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Zr)}toggleMarkersList(){this.viewer.panel.isVisible(pr)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&t.push(n)});const e=new Cx(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:pr,content:v3(t,this.viewer.config.lang[Vo.id]),noMargin:!0,clickHandler:n=>{const i=Je.getClosest(n,".psv-panel-menu-item"),s=i?i.dataset[Mt]:void 0;if(s){const r=this.getMarker(s);this.dispatchEvent(new mx(r)),this.gotoMarker(r.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(pr)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(i=>{let s=i.config.visible,r=!1,o=null;s&&(o=i.render({viewerPosition:e,zoomLevel:t,hoveringMarker:n}),s=!!o),r=i.state.visible!==s,i.state.visible=s,i.state.position2D=o,i.domElement&&Je.toggleClass(i.domElement,"psv-marker--visible",s),s?i.state.staticTooltip?i.showTooltip():i!==this.state.hoveringMarker&&i.hideTooltip():i.hideTooltip(),r&&(this.dispatchEvent(new tx(i,s)),(i.is3d()||i.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const n=e?Je.getClosest(t,".psv-marker"):t;return n?n[Mt]:void 0}else return Array.isArray(t)?t.map(n=>n.userData[Mt]).filter(n=>!!n).sort((n,i)=>i.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(t,e){var n;e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new cx(e)),e instanceof El&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&((n=e.config.tooltip)==null?void 0:n.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){var e;t&&(this.dispatchEvent(new ox(t)),t instanceof El&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&((e=t.config.tooltip)==null?void 0:e.trigger)==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){var n;e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&((n=e.config.tooltip)==null?void 0:n.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){var r,o;const n=this.__getTargetMarker(t.data.objects),s=this.__getTargetMarker(t.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==s&&(this.dispatchEvent(new _x(this.state.currentMarker)),this.viewer.panel.hide(Zr),!this.state.showAllTooltips&&((r=this.state.currentMarker.config.tooltip)==null?void 0:r.trigger)==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),s&&(this.state.currentMarker=s,this.dispatchEvent(new dx(s,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=s:t.stopImmediatePropagation(),this.markers[s.id]&&!t.data.rightclick&&(((o=s.config.tooltip)==null?void 0:o.trigger)==="click"?s.tooltip?this.hideMarkerTooltip(s.id):this.showMarkerTooltip(s.id):this.showMarkerPanel(s.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new wx(this.getMarkers()))}__refreshUi(){var e,n;const t=Object.values(this.markers).filter(i=>!i.config.hideList).length;t===0?(this.viewer.panel.hide(Zr),this.viewer.panel.hide(pr)):this.viewer.panel.isVisible(pr)?this.showMarkersList():this.viewer.panel.isVisible(Zr)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),(e=this.viewer.navbar.getButton(Vo.id,!1))==null||e.toggle(t>0),(n=this.viewer.navbar.getButton(nc.id,!1))==null||n.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(Mt):this.viewer.unobserveObjects(Mt)}};Dr.id="markers";Dr.VERSION="5.13.3";Dr.configParser=O3;Dr.readonlyOptions=["markers"];Bi.lang[Vo.id]="Markers";Bi.lang[nc.id]="Markers list";vd(Vo,"caption:left");vd(nc,"caption:left");const F3={class:"w-full h-full relative"},k3={class:"w-full h-full",id:"viewer"},B3={id:"infoPanel",class:"absolute top-5 left-5 bg-black/50 text-white p-4 rounded-md text-[12px] z-[999] max-w-[300px]"},z3={key:0},H3={key:0,id:"debugPanel",class:"absolute top-5 right-5 bg-black/80 text-white p-4 rounded-md z-[1000] max-w-[300px] text-[14px]"},V3={key:0,id:"coordinateInfo",class:"mt-2.5"},G3=Ht({__name:"ViewerComponent",props:{id:{type:Number},panoramaUrl:{type:String,default:""},caption:{type:String,default:"展厅"},debugMode:{type:Boolean,default:!1}},setup(t){let e=null,n=null;const i=vt([]),s=t;function r(g){const f=document.getElementById("statusIndicator");f&&(f.textContent=g),console.log("状态:",g)}function o(g=!1){const f=document.createElement("div");return f.className=`
                w-8
                h-8
                rounded-full
                border-2
                border-white
                shadow-md
                cursor-pointer
                animate-pulse
            `,f.style.background=g?"radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(0,150,255,0.6) 50%, rgba(0,100,255,0.4) 100%)":"radial-gradient(circle, rgba(255,255,0,0.8) 0%, rgba(255,165,0,0.6) 50%, rgba(255,0,0,0.4) 100%)",f}const a=vt([]),l=()=>{r("正在初始化Photo Sphere Viewer...");try{e=new h3({container:document.getElementById("viewer"),panorama:s.panoramaUrl,caption:s.caption,navbar:["zoom","move","fullscreen"],plugins:[[Dr,{}]],defaultZoomLvl:50,minFov:30,maxFov:90,mousewheel:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!0}),n=e.getPlugin(Dr),r("Photo Sphere Viewer 创建成功，等待加载..."),c()}catch(g){console.error("初始化Photo Sphere Viewer失败:",g),g instanceof Error&&r("初始化失败: "+g.message)}},u=()=>{r("正在添加标记..."),console.log("开始添加标记，数量:",a.value.length);try{a.value.forEach((g,f)=>{console.log(`添加标记 ${f+1}:`,g),n==null||n.addMarker(g)}),r(`成功添加 ${a.value.length} 个标记`)}catch(g){console.error("添加标记失败:",g),g instanceof Error&&r("添加标记失败: "+g.message)}},c=()=>{console.log("开始绑定事件..."),e==null||e.addEventListener("ready",()=>{console.log("Photo Sphere Viewer 准备就绪"),r("全景图加载完成"),u();const g=document.createElement("style");g.textContent=`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `,document.head.appendChild(g)}),n==null||n.addEventListener("select-marker",g=>{var P,A;const f=g.marker,m=f.data,M=document.createElement("div");M.className=`
      fixed top-0 left-0 w-full h-full
      flex items-center justify-center
      bg-black/90 z-[9999]
      p-4
    `;const b=document.createElement("div");b.className=`
      relative
      max-w-[95vw]
      max-h-[95vh]
      overflow-hidden
    `;const y=document.createElement("button");y.className=`
      absolute top-2 right-2
      text-white/60 hover:text-white
      bg-black/50 hover:bg-black/70
      border-none
      cursor-pointer
      text-2xl
      w-10 h-10
      flex items-center justify-center
      rounded-full
      z-10
    `,y.innerHTML="×",y.onclick=()=>M.remove(),b.appendChild(y);const L=a.value.find(U=>U.id===f.id);if((P=L==null?void 0:L.data)!=null&&P.imageUrl){const U=document.createElement("img");U.src=L.data.imageUrl,U.alt=m.title||"展品图片",U.className="max-w-full max-h-[95vh] object-contain",b.appendChild(U)}M.appendChild(b),(A=document.getElementById("viewer"))==null||A.appendChild(M),M.addEventListener("click",U=>{U.target===M&&M.remove()})}),s.debugMode&&(e==null||e.addEventListener("click",g=>{if(g.rightClick)return;const f=e==null?void 0:e.getPosition();f&&h(f.yaw,f.pitch)})),e==null||e.addEventListener("panorama-error",g=>{console.error("全景图加载错误:",g),g.error instanceof Error?r("全景图加载失败: "+g.error.message):r("全景图加载失败")})};function h(g,f){console.log("添加坐标:",g,f);const m={yaw:g,pitch:f,timestamp:new Date().toLocaleTimeString()};i.value.unshift(m),i.value.length>10&&(i.value=i.value.slice(0,10)),d()}function d(){const g=document.getElementById("coordinateList");g&&(g.innerHTML="",i.value.forEach((f,m)=>{const M=document.createElement("div");M.className="coordinate-item bg-white/10 p-2 my-1.5 rounded-md font-mono text-[12px]";const b=(f.yaw*180/Math.PI).toFixed(1),y=(f.pitch*180/Math.PI).toFixed(1);M.innerHTML=`
                    <div><strong class="font-bold">点击 ${m+1}</strong> (${f.timestamp})</div>
                    <div class="text-[11px] text-[#aaa] my-0.5">
                        yaw: ${b}°, pitch: ${y}°
                    </div>
                    <div class="font-mono text-[10px] bg-white/10 p-1 rounded-sm my-0.5">
                        position: { yaw: ${f.yaw.toFixed(6)}, pitch: ${f.pitch.toFixed(6)} }
                    </div>
                    <button class="copy-btn bg-[#27ae60] text-white border-none py-1 px-2 rounded-[3px] cursor-pointer text-[11px] ml-1.5 hover:bg-[#219a52]" onclick="copyCoordinate(${f.yaw}, ${f.pitch})">复制位置代码</button>
                `,g.appendChild(M)}),console.log("坐标历史已更新，当前数量:",i.value.length))}function p(g,f){const m=`position: { yaw: ${g}, pitch: ${f} }`;navigator.clipboard.writeText(m).then(()=>{alert(`Photo Sphere Viewer位置代码已复制到剪贴板！
可直接用于热点配置。`)}).catch(()=>{const M=document.createElement("textarea");M.value=m,document.body.appendChild(M),M.select(),document.execCommand("copy"),document.body.removeChild(M),alert(`Photo Sphere Viewer位置代码已复制到剪贴板！
可直接用于热点配置。`)})}function v(){const g=JSON.stringify(a.value,null,2);navigator.clipboard.writeText(g).then(()=>{alert("热点数据已复制到剪贴板！")}).catch(f=>{console.error("复制热点数据失败:",f),alert("复制热点数据失败，请检查浏览器权限。")})}return pi(async()=>{var m;console.log("页面加载完成，开始初始化...");try{r("正在加载展厅热点数据...");const M=await fT(s.id||1);if(!((m=M.data)!=null&&m.records)||!Array.isArray(M.data.records))throw new Error("热点数据格式不正确");const b=M.data.records;console.log("获取到热点数量:",b.length);const y=b.map(async P=>{let A=null;if(P.exhibitionId)try{const U=await lv(P.exhibitionId);U.data&&(A=U.data)}catch(U){console.error(`获取展品详情失败 ID ${P.exhibitionId}:`,U)}return{id:`marker-${P.id}`,position:{yaw:P.yaw||0,pitch:P.pitch||0},html:o(!1).outerHTML,tooltip:(A==null?void 0:A.name)||"展品热点",data:{title:(A==null?void 0:A.title)||"未知展品",body:(A==null?void 0:A.content)||"暂无详细介绍",type:A!=null&&A.image?"image":"text",imageUrl:(A==null?void 0:A.image)||P.image}}}),L=await Promise.all(y);a.value=L,r(`成功加载 ${L.length} 个热点数据`),console.log("全景图URL:",s.panoramaUrl),l()}catch(M){console.error("加载热点数据失败:",M),r("加载热点数据失败: "+(M instanceof Error?M.message:"未知错误")),a.value=[],l()}window.copyCoordinate=p;const g=document.getElementById("clearCoordinates");g&&g.addEventListener("click",()=>{i.value=[],d(),console.log("坐标历史已清空")});const f=document.getElementById("copyMarkersData");f&&f.addEventListener("click",()=>{v(),console.log("热点数据已复制")}),window.addEventListener("error",M=>{console.error("JavaScript错误:",M),r("发生错误: "+M.message)})}),(g,f)=>(Le(),He("div",F3,[ae("div",k3,[ae("div",B3,[f[1]||(f[1]=ae("h3",{class:"mb-2.5 text-primary text-xl"},"📍 操作指南",-1)),f[2]||(f[2]=ae("p",{class:"my-1.5 text-[13px] leading-snug"},"• 拖拽旋转视角",-1)),f[3]||(f[3]=ae("p",{class:"my-1.5 text-[13px] leading-snug"},"• 滚轮缩放",-1)),f[4]||(f[4]=ae("p",{class:"my-1.5 text-[13px] leading-snug"},"• 点击热点查看详情",-1)),s.debugMode?(Le(),He("div",z3,f[0]||(f[0]=[ae("p",{class:"my-1.5 text-[13px] leading-snug"},[ae("strong",null,"调试模式：")],-1),ae("p",{class:"my-1.5 text-[13px] leading-snug"},"• 点击任意位置获取坐标",-1),ae("p",{class:"my-1.5 text-[13px] leading-snug"},"• 复制的代码可直接用于热点配置",-1),ae("p",{class:"text-[11px] text-[#aaa] mt-2.5"},[Xn(" 💡 "),ae("strong",null,"坐标说明："),ae("br"),Xn(" • yaw: 水平角度 (-180° 到 180°)"),ae("br"),Xn(" • pitch: 垂直角度 (-90° 到 90°)"),ae("br"),Xn(" • 0,0 为全景图正前方中心点 ")],-1)]))):ui("",!0)]),s.debugMode?(Le(),He("div",H3,[t.debugMode?(Le(),He("div",V3,f[5]||(f[5]=[ae("div",{class:"font-bold mb-2"},"点击位置坐标：",-1),ae("div",{id:"coordinateList"},null,-1),ae("button",{id:"clearCoordinates",class:"bg-[#e67e22] text-white border-none py-2 px-3.5 rounded-md cursor-pointer mt-2.5 w-full hover:bg-[#d35400]"}," 清空坐标 ",-1),ae("button",{id:"copyMarkersData",class:"bg-[#3498db] text-white border-none py-2 px-3.5 rounded-md cursor-pointer mt-2.5 w-full hover:bg-[#2980b9]"}," 复制热点数据 ",-1)]))):ui("",!0)])):ui("",!0),f[6]||(f[6]=ae("div",{class:"absolute bottom-5 left-5 bg-black/80 text-white p-2.5 rounded-md text-[12px] z-[999]",id:"statusIndicator"}," 正在加载... ",-1))])]))}}),W3={class:"w-full h-[calc(100vh-5rem)] relative"},X3=Ht({__name:"ViewerView",setup(t){return(e,n)=>(Le(),He("div",W3,[Qe(G3,{id:1,caption:"第一展厅","panorama-url":"/cpdc-platform/exhibition/panorama/4.png"})]))}}),wh=gw({history:XM(),routes:[{path:"/",name:"home",component:Jw},{path:"/about",name:"about",component:hb},{path:"/collections",name:"collections",component:FT},{path:"/collections/:id",name:"collection-detail",component:KT},{path:"/exhibition_hall",name:"exhibition_hall",component:Eb},{path:"/exhibition_hall/:id",component:X3}]}),$3={name:"NavMenu"},j3={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function q3(t,e,n,i,s,r){return Le(),He("svg",j3,e[0]||(e[0]=[pg('<g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1)]))}const Y3=Nn($3,[["render",q3]]),K3={name:"NavMenuClose"},Z3={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"};function J3(t,e,n,i,s,r){return Le(),He("svg",Z3,e[0]||(e[0]=[pg('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate><set fill="freeze" attributeName="opacity" begin="0.4s" to="0"></set></path><path d="M5 5L19 5M5 19L19 19" opacity="0"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"></animate><set fill="freeze" attributeName="opacity" begin="0.2s" to="1"></set></path></g>',1)]))}const Q3=Nn(K3,[["render",J3]]),eI={class:"h-18 bg-primary flex px-3 md:px-5 md:h-20 lg:px-15 justify-between relative items-center"},tI={class:"items-center hidden lg:flex"},nI=["title","onClick"],iI={class:"text-xl text-primary-100 p-1 flex items-center justify-center",title:"打开主菜单"},sI={key:0,class:"w-full absolute top-16 md:top-23.5 visible lg:invisible z-50"},rI={class:"my-backdrop-blur-lg"},oI=["title","onClick"],aI=Ht({__name:"NavbarComponent",setup(t){const e=Ig(),n=vt("/"),i=[{name:"关于我们",link:"/about",subitems:[]},{name:"展厅",link:"/exhibition_hall",subitems:[]},{name:"藏品库",link:"/collections",subitems:[]},{name:"首页",link:"/"}],s=o=>{n.value=o.link,wh.push(o.link),r.value=!1},r=vt(!1);return pi(()=>{wh.isReady().then(()=>{const o=e.path;console.log(o),n.value=o})}),(o,a)=>(Le(),He(Tt,null,[ae("header",eI,[a[2]||(a[2]=ae("div",null,[ae("h1",{class:"text-xl md:text-2xl font-semibold text-white sm:mb-0.5 md:mb-1"}," 广彩数字文化传播平台 "),ae("span",{class:"text-sm md:text-md font-semibold text-white"},"Canton Porcelation Digital Cultural Platform")],-1)),ae("div",tI,[(Le(),He(Tt,null,Ni(i,l=>ae("div",{class:ci(["text-lg text-primary-100 px-4 py-2 flex items-center justify-center rounded-sm mr-2 last:mr-0 hover:text-white hover:bg-primary-200 ease-in-out duration-200",n.value===l.link?"text-white bg-primary-500":""]),key:l.name,title:`前往${l.name}页面`,onClick:u=>s(l)},[Xn(Dt(l.name)+" ",1),l.subitems?(Le(),Os(ll,{key:0,class:"text-2xl ml-1"})):ui("",!0)],10,nI)),64))]),ae("div",{class:"flex items-center lg:hidden",onClick:a[0]||(a[0]=l=>r.value=!r.value)},[ae("button",iI,[a[1]||(a[1]=ae("span",{class:"sr-only"},"打开主菜单",-1)),r.value?(Le(),Os(Q3,{key:1})):(Le(),Os(Y3,{key:0}))])])]),Qe(zh,{name:"slide-down"},{default:Wo(()=>[r.value?(Le(),He("div",sI,[ae("div",rI,[(Le(),He(Tt,null,Ni(i,l=>ae("div",{class:ci(["text-md text-primary-100 px-3 md:px-5 py-2 flex items-center justify-between",n.value===l.link?"text-white bg-primary-300/50":""]),key:l.name,title:`前往${l.name}页面`,onClick:u=>s(l)},[Xn(Dt(l.name)+" ",1),l.subitems?(Le(),Os(ll,{key:0,class:"text-2xl ml-1"})):ui("",!0)],10,oI)),64))])])):ui("",!0)]),_:1})],64))}}),lI=Ht({__name:"App",setup(t){return(e,n)=>{const i=qm("RouterView");return Le(),He(Tt,null,[Qe(aI),Qe(i)],64)}}}),xd=cM(lI);xd.use(fM());xd.use(wh);xd.mount("#app");
