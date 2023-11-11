var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function c(){return function(t){return document.createTextNode(t)}(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let u;function f(t){u=t}const d=[],p=[];let g=[];const m=[],y=Promise.resolve();let v=!1;function w(t){g.push(t)}const E=new Set;let b=0;function T(){if(0!==b)return;const t=u;do{try{for(;b<d.length;){const t=d[b];b++,f(t),_(t.$$)}}catch(t){throw d.length=0,b=0,t}for(f(null),d.length=0,b=0;p.length;)p.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];E.has(e)||(E.add(e),e())}g.length=0}while(d.length);for(;m.length;)m.pop()();v=!1,E.clear(),f(t)}function _(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const I=new Set;function S(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];g.forEach((i=>-1===t.indexOf(i)?e.push(i):n.push(i))),n.forEach((t=>t())),g=e}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(d.push(t),v||(v=!0,y.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(s,o,l,c,h,d,p,g=[-1]){const m=u;f(s);const y=s.$$={fragment:null,ctx:[],props:d,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(m?m.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:o.target||m.$$.root};p&&p(y.root);let v=!1;if(y.ctx=l?l(s,o.props||{},((t,e,...n)=>{const i=n.length?n[0]:e;return y.ctx&&h(y.ctx[t],y.ctx[t]=i)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](i),v&&A(s,t)),e})):[],y.update(),v=!0,i(y.before_update),y.fragment=!!c&&c(y.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();o.intro&&((E=s.$$.fragment)&&E.i&&(I.delete(E),E.i(b))),function(t,n,s,o){const{fragment:a,after_update:l}=t.$$;a&&a.m(n,s),o||w((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):i(n),t.$$.on_mount=[]})),l.forEach(w)}(s,o.target,o.anchor,o.customElement),T()}var E,b;f(m)}class D{$destroy(){S(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const t=i.indexOf(n);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=(t,e,n)=>Math.min(Math.max(n,t),e),k={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},x=t=>"number"==typeof t,R=t=>Array.isArray(t)&&!x(t[0]),O=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};const M=(t,e,n)=>-n*t+n*e+t,L=()=>{},P=t=>t,F=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function V(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=F(0,e,i);t.push(M(n,1,r))}}function U(t,e=function(t){const e=[0];return V(e,t-1),e}(t.length),n=P){const i=t.length,r=i-e.length;return r>0&&V(e,r),r=>{let s=0;for(;s<i-2&&!(r<e[s+1]);s++);let o=N(0,1,F(e[s],e[s+1],r));const a=function(t,e){return R(t)?t[O(0,t.length,e)]:t}(n,s);return o=a(o),M(t[s],t[s+1],o)}}const B=t=>Array.isArray(t)&&x(t[0]),$=t=>"object"==typeof t&&Boolean(t.createAnimation),j=t=>"function"==typeof t,z=t=>"string"==typeof t,q={ms:t=>1e3*t,s:t=>t/1e3},H=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,G=1e-7,K=12;function Q(t,e,n,i){if(t===e&&n===i)return P;const r=e=>function(t,e,n,i,r){let s,o,a=0;do{o=e+(n-e)/2,s=H(o,i,r)-t,s>0?n=o:e=o}while(Math.abs(s)>G&&++a<K);return o}(e,0,1,t,n);return t=>0===t||1===t?t:H(r(t),e,i)}const W=(t,e="end")=>n=>{const i=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,r="end"===e?Math.floor(i):Math.ceil(i);return N(0,1,r/t)},X={ease:Q(.25,.1,.25,1),"ease-in":Q(.42,0,1,1),"ease-in-out":Q(.42,0,.58,1),"ease-out":Q(0,0,.58,1)},Y=/\((.*?)\)/;function J(t){if(j(t))return t;if(B(t))return Q(...t);if(X[t])return X[t];if(t.startsWith("steps")){const e=Y.exec(t);if(e){const t=e[1].split(",");return W(parseFloat(t[0]),t[1].trim())}}return P}class Z{constructor(t,e=[0,1],{easing:n,duration:i=k.duration,delay:r=k.delay,endDelay:s=k.endDelay,repeat:o=k.repeat,offset:a,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=P,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||k.easing,$(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,i=t.duration||i}this.repeat=o,this.easing=R(n)?P:J(n),this.updateDuration(i);const c=U(e,a,R(n)?n.map(J):P);this.tick=e=>{var n;let i=0;i=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=i,i/=1e3,i=Math.max(i-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(i=this.totalDuration);const o=i/this.duration;let a=Math.floor(o),h=o%1;!h&&o>=1&&(h=1),1===h&&a--;const u=a%2;("reverse"===l||"alternate"===l&&u||"alternate-reverse"===l&&!u)&&(h=1-h);const f=i>=this.totalDuration?1:Math.min(h,1),d=c(this.easing(f));t(d);void 0===this.pauseTime&&("finished"===this.playState||i>=this.totalDuration+s)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,d)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class tt{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const et=new WeakMap;function nt(t){return et.has(t)||et.set(t,{transforms:[],values:new Map}),et.get(t)}const it=["","X","Y","Z"],rt={x:"translateX",y:"translateY",z:"translateZ"},st={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},ot={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:st,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:P},skew:st},at=new Map,lt=t=>`--motion-${t}`,ct=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{it.forEach((e=>{ct.push(t+e),at.set(lt(t+e),ot[t])}))}));const ht=(t,e)=>ct.indexOf(t)-ct.indexOf(e),ut=new Set(ct),ft=t=>ut.has(t),dt=(t,e)=>{rt[e]&&(e=rt[e]);const{transforms:n}=nt(t);var i,r;r=e,-1===(i=n).indexOf(r)&&i.push(r),t.style.transform=pt(n)},pt=t=>t.sort(ht).reduce(gt,"").trim(),gt=(t,e)=>`${t} ${e}(var(${lt(e)}))`,mt=t=>t.startsWith("--"),yt=new Set;const vt=(t,e)=>document.createElement("div").animate(t,e),wt={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{vt({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(vt({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{vt({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},Et={},bt={};for(const t in wt)bt[t]=()=>(void 0===Et[t]&&(Et[t]=wt[t]()),Et[t]);const Tt=(t,e)=>j(t)?bt.linearEasing()?`linear(${((t,e)=>{let n="";const i=Math.round(e/.015);for(let e=0;e<i;e++)n+=t(F(0,i-1,e))+", ";return n.substring(0,n.length-2)})(t,e)})`:k.easing:B(t)?_t(t):t,_t=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;const It=t=>Array.isArray(t)?t:[t];function St(t){return rt[t]&&(t=rt[t]),ft(t)?lt(t):t}const At={get:(t,e)=>{e=St(e);let n=mt(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=at.get(e);t&&(n=t.initialValue)}return n},set:(t,e,n)=>{e=St(e),mt(e)?t.style.setProperty(e,n):t.style[e]=n}};function Ct(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}function Dt(t,e,n,i={},r){const s=window.__MOTION_DEV_TOOLS_RECORD,o=!1!==i.record&&s;let a,{duration:l=k.duration,delay:c=k.delay,endDelay:h=k.endDelay,repeat:u=k.repeat,easing:f=k.easing,persist:d=!1,direction:p,offset:g,allowWebkitAcceleration:m=!1}=i;const y=nt(t),v=ft(e);let w=bt.waapi();v&&dt(t,e);const E=St(e),b=function(t,e){return t.has(e)||t.set(e,new tt),t.get(e)}(y.values,E),T=at.get(E);return Ct(b.animation,!($(f)&&b.generator)&&!1!==i.record),()=>{const y=()=>{var e,n;return null!==(n=null!==(e=At.get(t,E))&&void 0!==e?e:null==T?void 0:T.initialValue)&&void 0!==n?n:0};let _=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}(It(n),y);const I=function(t,e){var n;let i=(null==e?void 0:e.toDefaultUnit)||P;const r=t[t.length-1];if(z(r)){const t=(null===(n=r.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(i=e=>e+t)}return i}(_,T);if($(f)){const t=f.createAnimation(_,"opacity"!==e,y,E,b);f=t.easing,_=t.keyframes||_,l=t.duration||l}if(mt(E)&&(bt.cssRegisterProperty()?function(t){if(!yt.has(t)){yt.add(t);try{const{syntax:e,initialValue:n}=at.has(t)?at.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(E):w=!1),v&&!bt.linearEasing()&&(j(f)||R(f)&&f.some(j))&&(w=!1),w){T&&(_=_.map((t=>x(t)?T.toDefaultUnit(t):t))),1!==_.length||bt.partialKeyframes()&&!o||_.unshift(y());const e={delay:q.ms(c),duration:q.ms(l),endDelay:q.ms(h),easing:R(f)?void 0:Tt(f,l),direction:p,iterations:u+1,fill:"both"};a=t.animate({[E]:_,offset:g,easing:R(f)?f.map((t=>Tt(t,l))):void 0},e),a.finished||(a.finished=new Promise(((t,e)=>{a.onfinish=t,a.oncancel=e})));const n=_[_.length-1];a.finished.then((()=>{d||(At.set(t,E,n),a.cancel())})).catch(L),m||(a.playbackRate=1.000001)}else if(r&&v)_=_.map((t=>"string"==typeof t?parseFloat(t):t)),1===_.length&&_.unshift(parseFloat(y())),a=new r((e=>{At.set(t,E,I?I(e):e)}),_,Object.assign(Object.assign({},i),{duration:l,easing:f}));else{const e=_[_.length-1];At.set(t,E,T&&x(e)?T.toDefaultUnit(e):e)}return o&&s(t,e,_,{duration:l,delay:c,easing:f,repeat:u,offset:g},"motion-one"),b.setAnimation(a),a}}const Nt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);const kt=t=>t(),xt=(t,e,n=k.duration)=>new Proxy({animations:t.map(kt).filter(Boolean),duration:n,options:e},Rt),Rt={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return q.s((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Ot)).catch(L)),t.finished;case"stop":return()=>{t.animations.forEach((t=>Ct(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=q.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},Ot=t=>t.finished;function Mt(t=.1,{start:e=0,from:n=0,easing:i}={}){return(r,s)=>{const o=x(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,s),a=Math.abs(o-r);let l=t*a;if(i){const e=s*t;l=J(i)(l/e)*e}return e+l}}function Lt(t,e,n){return j(t)?t(e,n):t}const Pt=(Ft=Z,function(t,e,n={}){const i=(t=function(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(t)).length,r=[];for(let s=0;s<i;s++){const o=t[s];for(const t in e){const a=Nt(n,t);a.delay=Lt(a.delay,s,i);const l=Dt(o,t,e[t],a,Ft);r.push(l)}}return xt(r,n,n.duration)});var Ft;function Vt(t,e={}){return xt([()=>{const n=new Z(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function Ut(t,e,n){return(j(t)?Vt:Pt)(t,e,n)}var Bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function $t(){throw new Error("setTimeout has not been defined")}function jt(){throw new Error("clearTimeout has not been defined")}var zt=$t,qt=jt;function Ht(t){if(zt===setTimeout)return setTimeout(t,0);if((zt===$t||!zt)&&setTimeout)return zt=setTimeout,setTimeout(t,0);try{return zt(t,0)}catch(e){try{return zt.call(null,t,0)}catch(e){return zt.call(this,t,0)}}}"function"==typeof Bt.setTimeout&&(zt=setTimeout),"function"==typeof Bt.clearTimeout&&(qt=clearTimeout);var Gt,Kt=[],Qt=!1,Wt=-1;function Xt(){Qt&&Gt&&(Qt=!1,Gt.length?Kt=Gt.concat(Kt):Wt=-1,Kt.length&&Yt())}function Yt(){if(!Qt){var t=Ht(Xt);Qt=!0;for(var e=Kt.length;e;){for(Gt=Kt,Kt=[];++Wt<e;)Gt&&Gt[Wt].run();Wt=-1,e=Kt.length}Gt=null,Qt=!1,function(t){if(qt===clearTimeout)return clearTimeout(t);if((qt===jt||!qt)&&clearTimeout)return qt=clearTimeout,clearTimeout(t);try{return qt(t)}catch(e){try{return qt.call(null,t)}catch(e){return qt.call(this,t)}}}(t)}}function Jt(t,e){this.fun=t,this.array=e}Jt.prototype.run=function(){this.fun.apply(null,this.array)};function Zt(){}var te=Zt,ee=Zt,ne=Zt,ie=Zt,re=Zt,se=Zt,oe=Zt;var ae=Bt.performance||{},le=ae.now||ae.mozNow||ae.msNow||ae.oNow||ae.webkitNow||function(){return(new Date).getTime()};var ce=new Date;var he={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Kt.push(new Jt(t,e)),1!==Kt.length||Qt||Ht(Yt)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:te,addListener:ee,once:ne,off:ie,removeListener:re,removeAllListeners:se,emit:oe,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*le.call(ae),n=Math.floor(e),i=Math.floor(e%1*1e9);return t&&(n-=t[0],(i-=t[1])<0&&(n--,i+=1e9)),[n,i]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-ce)/1e3}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ue=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},fe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(u=64)),i.push(n[c],n[h],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ue(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new de;const l=r<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class de extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pe=function(t){return function(t){const e=ue(t);return fe.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ge=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==Bt)return Bt;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,me=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return fe.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},ye=()=>{try{return ge()||(()=>{if(void 0===he||void 0===he.env)return;const t=he.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||me()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},ve=t=>{const e=(t=>{var e,n;return null===(n=null===(e=ye())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},we=()=>{var t;return null===(t=ye())||void 0===t?void 0:t.config};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ee{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class be extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Te.prototype.create)}}class Te{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(_e,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new be(i,o,n)}}const _e=/\{\$([^}]+)}/g;function Ie(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(Se(n)&&Se(s)){if(!Ie(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function Se(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ae(t){return t&&t._delegate?t._delegate:t}class Ce{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const De="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ne{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Ee;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=De){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=De){return this.instances.has(t)}getOptions(t=De){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===De?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=De){return this.component?this.component.multipleInstances?t:De:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ke{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ne(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var xe;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(xe||(xe={}));const Re={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Oe=xe.INFO,Me={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Le=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Me[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Pe{constructor(t){this.name=t,this._logLevel=Oe,this._logHandler=Le,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Re[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...t),this._logHandler(this,xe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...t),this._logHandler(this,xe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...t),this._logHandler(this,xe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...t),this._logHandler(this,xe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...t),this._logHandler(this,xe.ERROR,...t)}}const Fe=(t,e)=>e.some((e=>t instanceof e));let Ve,Ue;const Be=new WeakMap,$e=new WeakMap,je=new WeakMap,ze=new WeakMap,qe=new WeakMap;let He={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return $e.get(t);if("objectStoreNames"===e)return t.objectStoreNames||je.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qe(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ge(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ue||(Ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(We(this),e),Qe(Be.get(this))}:function(...e){return Qe(t.apply(We(this),e))}:function(e,...n){const i=t.call(We(this),e,...n);return je.set(i,e.sort?e.sort():[e]),Qe(i)}}function Ke(t){return"function"==typeof t?Ge(t):(t instanceof IDBTransaction&&function(t){if($e.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));$e.set(t,e)}(t),Fe(t,Ve||(Ve=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,He):t)}function Qe(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Qe(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Be.set(e,t)})).catch((()=>{})),qe.set(e,t),e}(t);if(ze.has(t))return ze.get(t);const e=Ke(t);return e!==t&&(ze.set(t,e),qe.set(e,t)),e}const We=t=>qe.get(t);const Xe=["get","getKey","getAll","getAllKeys","count"],Ye=["put","add","delete","clear"],Je=new Map;function Ze(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Je.get(e))return Je.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ye.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Xe.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Je.set(e,s),s}He=(t=>({...t,get:(e,n,i)=>Ze(e,n)||t.get(e,n,i),has:(e,n)=>!!Ze(e,n)||t.has(e,n)}))(He);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const en="@firebase/app",nn="0.9.20",rn=new Pe("@firebase/app"),sn="[DEFAULT]",on={[en]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},an=new Map,ln=new Map;function cn(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(ln.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,t);for(const e of an.values())cn(e,t);return!0}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const un=new Te("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class fn{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ce("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function dn(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:sn,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw un.create("bad-app-name",{appName:String(r)});if(n||(n=we()),!n)throw un.create("no-options");const s=an.get(r);if(s){if(Ie(n,s.options)&&Ie(i,s.config))return s;throw un.create("duplicate-app",{appName:r})}const o=new ke(r);for(const t of ln.values())o.addComponent(t);const a=new fn(n,i,o);return an.set(r,a),a}function pn(t,e,n){var i;let r=null!==(i=on[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void rn.warn(t.join(" "))}hn(new Ce(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const gn="firebase-heartbeat-database",mn=1,yn="firebase-heartbeat-store";let vn=null;function wn(){return vn||(vn=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Qe(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Qe(o.result),t.oldVersion,t.newVersion,Qe(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(gn,mn,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(yn)}}).catch((t=>{throw un.create("idb-open",{originalErrorMessage:t.message})}))),vn}async function En(t,e){try{const n=(await wn()).transaction(yn,"readwrite"),i=n.objectStore(yn);await i.put(e,bn(t)),await n.done}catch(t){if(t instanceof be)rn.warn(t.message);else{const e=un.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});rn.warn(e.message)}}}function bn(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tn{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new In(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=_n();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=_n(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Sn(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=pe(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _n(){return(new Date).toISOString().substring(0,10)}class In{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await wn();return await e.transaction(yn).objectStore(yn).get(bn(t))}catch(t){if(t instanceof be)rn.warn(t.message);else{const e=un.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});rn.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return En(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return En(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Sn(t){return pe(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var An;An="",hn(new Ce("platform-logger",(t=>new tn(t)),"PRIVATE")),hn(new Ce("heartbeat",(t=>new Tn(t)),"PRIVATE")),pn(en,nn,An),pn(en,nn,"esm2017"),pn("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
pn("firebase","10.5.0","app");var Cn,Dn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Bt?Bt:"undefined"!=typeof self?self:{},Nn=Nn||{},kn=Dn||self;function xn(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Rn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var On="closure_uid_"+(1e9*Math.random()>>>0),Mn=0;function Ln(t,e,n){return t.call.apply(t.bind,arguments)}function Pn(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Fn(t,e,n){return(Fn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ln:Pn).apply(null,arguments)}function Vn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Un(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Bn(){this.s=this.s,this.o=this.o}Bn.prototype.s=!1,Bn.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,On)&&t[On]||(t[On]=++Mn))},Bn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $n=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function zn(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(xn(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function qn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qn.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!kn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{kn.addEventListener("test",(()=>{}),e),kn.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function Gn(t){return/^[\s\xa0]*$/.test(t)}function Kn(){var t=kn.navigator;return t&&(t=t.userAgent)?t:""}function Qn(t){return-1!=Kn().indexOf(t)}function Wn(t){return Wn[" "](t),t}Wn[" "]=function(){};var Xn,Yn,Jn,Zn=Qn("Opera"),ti=Qn("Trident")||Qn("MSIE"),ei=Qn("Edge"),ni=ei||ti,ii=Qn("Gecko")&&!(-1!=Kn().toLowerCase().indexOf("webkit")&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),ri=-1!=Kn().toLowerCase().indexOf("webkit")&&!Qn("Edge");function si(){var t=kn.document;return t?t.documentMode:void 0}t:{var oi="",ai=(Yn=Kn(),ii?/rv:([^\);]+)(\)|;)/.exec(Yn):ei?/Edge\/([\d\.]+)/.exec(Yn):ti?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yn):ri?/WebKit\/(\S+)/.exec(Yn):Zn?/(?:Version)[ \/]?(\S+)/.exec(Yn):void 0);if(ai&&(oi=ai?ai[1]:""),ti){var li=si();if(null!=li&&li>parseFloat(oi)){Xn=String(li);break t}}Xn=oi}if(kn.document&&ti){var ci=si();Jn=ci||(parseInt(Xn,10)||void 0)}else Jn=void 0;var hi=Jn;function ui(t,e){if(qn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ii){t:{try{Wn(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:fi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ui.$.h.call(this)}}Un(ui,qn);var fi={2:"touch",3:"pen",4:"mouse"};ui.prototype.h=function(){ui.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var di="closure_listenable_"+(1e6*Math.random()|0),pi=0;function gi(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++pi,this.fa=this.ia=!1}function mi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function yi(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function vi(t){const e={};for(const n in t)e[n]=t[n];return e}const wi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ei(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<wi.length;e++)n=wi[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function bi(t){this.src=t,this.g={},this.h=0}function Ti(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=$n(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(mi(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function _i(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}bi.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=_i(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new gi(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var Ii="closure_lm_"+(1e6*Math.random()|0),Si={};function Ai(t,e,n,i,r){if(i&&i.once)return Di(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ai(t,e[s],n,i,r);return null}return n=Li(n),t&&t[di]?t.O(e,n,Rn(i)?!!i.capture:!!i,r):Ci(t,e,n,!1,i,r)}function Ci(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Rn(r)?!!r.capture:!!r,a=Oi(t);if(a||(t[Ii]=a=new bi(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ri;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Hn||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(xi(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Di(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Di(t,e[s],n,i,r);return null}return n=Li(n),t&&t[di]?t.P(e,n,Rn(i)?!!i.capture:!!i,r):Ci(t,e,n,!0,i,r)}function Ni(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ni(t,e[s],n,i,r);else i=Rn(i)?!!i.capture:!!i,n=Li(n),t&&t[di]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=_i(s=t.g[e],n,i,r))&&(mi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Oi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_i(e,n,i,r)),(n=-1<t?e[t]:null)&&ki(n))}function ki(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[di])Ti(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(xi(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Oi(e))?(Ti(n,t),0==n.h&&(n.src=null,e[Ii]=null)):mi(t)}}}function xi(t){return t in Si?Si[t]:Si[t]="on"+t}function Ri(t,e){if(t.fa)t=!0;else{e=new ui(e,this);var n=t.listener,i=t.la||t.src;t.ia&&ki(t),t=n.call(i,e)}return t}function Oi(t){return(t=t[Ii])instanceof bi?t:null}var Mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Li(t){return"function"==typeof t?t:(t[Mi]||(t[Mi]=function(e){return t.handleEvent(e)}),t[Mi])}function Pi(){Bn.call(this),this.i=new bi(this),this.S=this,this.J=null}function Fi(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new qn(e,t);else if(e instanceof qn)e.target=e.target||t;else{var r=e;Ei(e=new qn(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Vi(o,i,!0,e)&&r}if(r=Vi(o=e.g=t,i,!0,e)&&r,r=Vi(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Vi(o=e.g=n[s],i,!1,e)&&r}function Vi(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ti(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}Un(Pi,Bn),Pi.prototype[di]=!0,Pi.prototype.removeEventListener=function(t,e,n,i){Ni(this,t,e,n,i)},Pi.prototype.N=function(){if(Pi.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)mi(n[i]);delete e.g[t],e.h--}}this.J=null},Pi.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Pi.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Ui=kn.JSON.stringify;function Bi(){var t=Ki;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var $i=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ji),(t=>t.reset()));class ji{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function zi(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qi(t){kn.setTimeout((()=>{throw t}),0)}let Hi,Gi=!1,Ki=new class{constructor(){this.h=this.g=null}add(t,e){const n=$i.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Qi=()=>{const t=kn.Promise.resolve(void 0);Hi=()=>{t.then(Wi)}};var Wi=()=>{for(var t;t=Bi();){try{t.h.call(t.g)}catch(t){qi(t)}var e=$i;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gi=!1};function Xi(t,e){Pi.call(this),this.h=t||1,this.g=e||kn,this.j=Fn(this.qb,this),this.l=Date.now()}function Yi(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ji(t,e,n){if("function"==typeof t)n&&(t=Fn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Fn(t.handleEvent,t)}return 2147483647<Number(e)?-1:kn.setTimeout(t,e||0)}function Zi(t){t.g=Ji((()=>{t.g=null,t.i&&(t.i=!1,Zi(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Un(Xi,Pi),(Cn=Xi.prototype).ga=!1,Cn.T=null,Cn.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fi(this,"tick"),this.ga&&(Yi(this),this.start()))}},Cn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Cn.N=function(){Xi.$.N.call(this),Yi(this),delete this.g};class tr extends Bn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Zi(this)}N(){super.N(),this.g&&(kn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(t){Bn.call(this),this.h=t,this.g={}}Un(er,Bn);var nr=[];function ir(t,e,n,i){Array.isArray(n)||(n&&(nr[0]=n.toString()),n=nr);for(var r=0;r<n.length;r++){var s=Ai(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function rr(t){yi(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ki(t)}),t),t.g={}}function sr(){this.g=!0}function or(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ui(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}er.prototype.N=function(){er.$.N.call(this),rr(this)},er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},sr.prototype.Ea=function(){this.g=!1},sr.prototype.info=function(){};var ar={},lr=null;function cr(){return lr=lr||new Pi}function hr(t){qn.call(this,ar.Ta,t)}function ur(t){const e=cr();Fi(e,new hr(e))}function fr(t,e){qn.call(this,ar.STAT_EVENT,t),this.stat=e}function dr(t){const e=cr();Fi(e,new fr(e,t))}function pr(t,e){qn.call(this,ar.Ua,t),this.size=e}function gr(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return kn.setTimeout((function(){t()}),e)}ar.Ta="serverreachability",Un(hr,qn),ar.STAT_EVENT="statevent",Un(fr,qn),ar.Ua="timingevent",Un(pr,qn);var mr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vr(){}function wr(t){return t.h||(t.h=t.i())}function Er(){}vr.prototype.h=null;var br,Tr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _r(){qn.call(this,"d")}function Ir(){qn.call(this,"c")}function Sr(){}function Ar(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new er(this),this.P=Dr,t=ni?125:void 0,this.V=new Xi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Cr}function Cr(){this.i=null,this.g="",this.h=!1}Un(_r,qn),Un(Ir,qn),Un(Sr,vr),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},br=new Sr;var Dr=45e3,Nr={},kr={};function xr(t,e,n){t.L=1,t.v=Xr(Hr(e)),t.s=n,t.S=!0,Rr(t,null)}function Rr(t,e){t.G=Date.now(),Pr(t),t.A=Hr(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),cs(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Cr,t.g=co(t.l,n?e:null,!t.s),0<t.O&&(t.M=new tr(Fn(t.Pa,t,t.g),t.O)),ir(t.U,t.g,"readystatechange",t.nb),e=t.I?vi(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ur(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function Or(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Mr(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=Lr(t,n),i==kr){4==e&&(t.o=4,dr(14),r=!1),or(t.j,t.m,null,"[Incomplete Response]");break}if(i==Nr){t.o=4,dr(15),or(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}or(t.j,t.m,i,null),$r(t,i)}Or(t)&&i!=kr&&i!=Nr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,dr(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),eo(e),e.M=!0,dr(11))):(or(t.j,t.m,n,"[Invalid Chunked Response]"),Br(t),Ur(t))}function Lr(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?kr:(n=Number(e.substring(n,i)),isNaN(n)?Nr:(i+=1)+n>e.length?kr:(e=e.slice(i,i+n),t.C=i+n,e))}function Pr(t){t.Y=Date.now()+t.P,Fr(t,t.P)}function Fr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=gr(Fn(t.lb,t),e)}function Vr(t){t.B&&(kn.clearTimeout(t.B),t.B=null)}function Ur(t){0==t.l.H||t.J||ro(t.l,t)}function Br(t){Vr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Yi(t.V),rr(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function $r(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||ms(n.i,t)))if(!t.K&&ms(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;io(n),Ks(n)}to(n),dr(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=gr(Fn(n.ib,n),6e3));if(1>=gs(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else oo(n,11)}else if((t.K||n.g==t)&&io(n),!Gn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ys(s,s.h),s.h=null))}if(i.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Wr(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=lo(i,i.J?i.pa:null,i.Y),o.K){vs(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Vr(a),Pr(a)),i.g=o}else Zs(i);0<n.j.length&&Ws(n)}else"stop"!=c[0]&&"close"!=c[0]||oo(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?oo(n,7):Gs(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ur()}catch(t){}}function jr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(xn(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(xn(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(xn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Cn=Ar.prototype).setTimeout=function(t){this.P=t},Cn.nb=function(t){t=t.target;const e=this.M;e&&3==Bs(t)?e.l():this.Pa(t)},Cn.Pa=function(t){try{if(t==this.g)t:{const h=Bs(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||ni||this.g&&(this.h.h||this.g.ja()||$s(this.g)))){this.J||4!=h||7==e||ur(),Vr(this);var n=this.g.da();this.ca=n;e:if(Or(this)){var i=$s(this.g);t="";var r=i.length,s=4==Bs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Br(this),Ur(this);var o="";break e}this.h.i=new kn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,dr(12),Br(this),Ur(this);break t}or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$r(this,n)}this.S?(Mr(this,h,o),ni&&this.i&&3==h&&(ir(this.U,this.V,"tick",this.mb),this.V.start())):(or(this.j,this.m,o,null),$r(this,o)),4==h&&Br(this),this.i&&!this.J&&(4==h?ro(this.l,this):(this.i=!1,Pr(this)))}else(function(t){const e={};t=(t.g&&2<=Bs(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(Gn(t[i]))continue;var n=zi(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dr(12)):(this.o=0,dr(13)),Br(this),Ur(this)}}}catch(t){}},Cn.mb=function(){if(this.g){var t=Bs(this.g),e=this.g.ja();this.C<e.length&&(Vr(this),Mr(this,t,e),this.i&&4!=t&&Pr(this))}},Cn.cancel=function(){this.J=!0,Br(this)},Cn.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(ur(),dr(17)),Br(this),this.o=2,Ur(this)):Fr(this,this.Y-t)};var zr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qr){this.h=t.h,Gr(this,t.j),this.s=t.s,this.g=t.g,Kr(this,t.m),this.l=t.l;var e=t.i,n=new ss;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qr(this,n),this.o=t.o}else t&&(e=String(t).match(zr))?(this.h=!1,Gr(this,e[1]||"",!0),this.s=Yr(e[2]||""),this.g=Yr(e[3]||"",!0),Kr(this,e[4]),this.l=Yr(e[5]||"",!0),Qr(this,e[6]||"",!0),this.o=Yr(e[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}function Hr(t){return new qr(t)}function Gr(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qr(t,e,n){e instanceof ss?(t.i=e,function(t,e){e&&!t.j&&(os(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(as(this,e),cs(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Jr(e,is)),t.i=new ss(e,t.h))}function Wr(t,e,n){t.i.set(e,n)}function Xr(t){return Wr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Zr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jr(e,ts,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Jr(e,ts,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Jr(n,"/"==n.charAt(0)?ns:es,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jr(n,rs)),t.join("")};var ts=/[#\/\?@]/g,es=/[#\?:]/g,ns=/[#\?]/g,is=/[#\?@]/g,rs=/#/g;function ss(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function os(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function as(t,e){os(t),e=hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ls(t,e){return os(t),e=hs(t,e),t.g.has(e)}function cs(t,e,n){as(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),jn(n)),t.h+=n.length)}function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Cn=ss.prototype).add=function(t,e){os(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Cn.forEach=function(t,e){os(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Cn.ta=function(){os(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Cn.Z=function(t){os(this);let e=[];if("string"==typeof t)ls(this,t)&&(e=e.concat(this.g.get(hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Cn.set=function(t,e){return os(this),this.i=null,ls(this,t=hs(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Cn.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Cn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var us=class{constructor(t,e){this.g=t,this.map=e}};function fs(t){this.l=t||ds,kn.PerformanceNavigationTiming?t=0<(t=kn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(kn.g&&kn.g.Ka&&kn.g.Ka()&&kn.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ds=10;function ps(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gs(t){return t.h?1:t.g?t.g.size:0}function ms(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ys(t,e){t.g?t.g.add(e):t.h=e}function vs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ws(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jn(t.i)}fs.prototype.cancel=function(){if(this.i=ws(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Es=class{stringify(t){return kn.JSON.stringify(t,void 0)}parse(t){return kn.JSON.parse(t,void 0)}};function bs(){this.g=new Es}function Ts(t,e,n){const i=n||"";try{jr(t,(function(t,n){let r=t;Rn(t)&&(r=Ui(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function _s(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Is(t){this.l=t.ec||null,this.j=t.ob||!1}function Ss(t,e){Pi.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=As,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Un(Is,vr),Is.prototype.g=function(){return new Ss(this.l,this.j)},Is.prototype.i=function(t){return function(){return t}}({}),Un(Ss,Pi);var As=0;function Cs(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Ds(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ns(t)}function Ns(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Cn=Ss.prototype).open=function(t,e){if(this.readyState!=As)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ns(this)},Cn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||kn).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Cn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ds(this)),this.readyState=As},Cn.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==kn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cs(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Cn.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ds(this):Ns(this),3==this.readyState&&Cs(this)}},Cn.Za=function(t){this.g&&(this.response=this.responseText=t,Ds(this))},Cn.Ya=function(t){this.g&&(this.response=t,Ds(this))},Cn.ka=function(){this.g&&Ds(this)},Cn.setRequestHeader=function(t,e){this.v.append(t,e)},Cn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Cn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ks=kn.JSON.parse;function xs(t){Pi.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rs,this.L=this.M=!1}Un(xs,Pi);var Rs="",Os=/^https?$/i,Ms=["POST","PUT"];function Ls(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ps(t),Vs(t)}function Ps(t){t.F||(t.F=!0,Fi(t,"complete"),Fi(t,"error"))}function Fs(t){if(t.h&&void 0!==Nn&&(!t.C[1]||4!=Bs(t)||2!=t.da()))if(t.v&&4==Bs(t))Ji(t.La,0,t);else if(Fi(t,"readystatechange"),4==Bs(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(zr)[1]||null;!r&&kn.self&&kn.self.location&&(r=kn.self.location.protocol.slice(0,-1)),i=!Os.test(r?r.toLowerCase():"")}n=i}if(n)Fi(t,"complete"),Fi(t,"success");else{t.m=6;try{var s=2<Bs(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",Ps(t)}}finally{Vs(t)}}}function Vs(t,e){if(t.g){Us(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Fi(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Us(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(kn.clearTimeout(t.A),t.A=null)}function Bs(t){return t.g?t.g.readyState:0}function $s(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function js(t){let e="";return yi(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=js(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Wr(t,e,n))}function qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hs(t){this.Ga=0,this.j=[],this.l=new sr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qs("baseRetryDelayMs",5e3,t),this.hb=qs("retryDelaySeedMs",1e4,t),this.eb=qs("forwardChannelMaxRetries",2,t),this.xa=qs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new fs(t&&t.concurrentRequestLimit),this.Ja=new bs,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gs(t){if(Qs(t),3==t.H){var e=t.W++,n=Hr(t.I);if(Wr(n,"SID",t.K),Wr(n,"RID",e),Wr(n,"TYPE","terminate"),Ys(t,n),(e=new Ar(t,t.l,e)).L=2,e.v=Xr(Hr(n)),n=!1,kn.navigator&&kn.navigator.sendBeacon)try{n=kn.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&kn.Image&&((new Image).src=e.v,n=!0),n||(e.g=co(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Pr(e)}ao(t)}function Ks(t){t.g&&(eo(t),t.g.cancel(),t.g=null)}function Qs(t){Ks(t),t.u&&(kn.clearTimeout(t.u),t.u=null),io(t),t.i.cancel(),t.m&&("number"==typeof t.m&&kn.clearTimeout(t.m),t.m=null)}function Ws(t){if(!ps(t.i)&&!t.m){t.m=!0;var e=t.Na;Hi||Qi(),Gi||(Hi(),Gi=!0),Ki.add(e,t),t.C=0}}function Xs(t,e){var n;n=e?e.m:t.W++;const i=Hr(t.I);Wr(i,"SID",t.K),Wr(i,"RID",n),Wr(i,"AID",t.V),Ys(t,i),t.o&&t.s&&zs(i,t.o,t.s),n=new Ar(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Js(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ys(t.i,n),xr(n,i,e)}function Ys(t,e){t.na&&yi(t.na,(function(t,n){Wr(e,n,t)})),t.h&&jr({},(function(t,n){Wr(e,n,t)}))}function Js(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Fn(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{Ts(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Zs(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Hi||Qi(),Gi||(Hi(),Gi=!0),Ki.add(e,t),t.A=0}}function to(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=gr(Fn(t.Ma,t),so(t,t.A)),t.A++,!0)}function eo(t){null!=t.B&&(kn.clearTimeout(t.B),t.B=null)}function no(t){t.g=new Ar(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Hr(t.wa);Wr(e,"RID","rpc"),Wr(e,"SID",t.K),Wr(e,"AID",t.V),Wr(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Wr(e,"TO",t.qa),Wr(e,"TYPE","xmlhttp"),Ys(t,e),t.o&&t.s&&zs(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Xr(Hr(e)),n.s=null,n.S=!0,Rr(n,t)}function io(t){null!=t.v&&(kn.clearTimeout(t.v),t.v=null)}function ro(t,e){var n=null;if(t.g==e){io(t),eo(t),t.g=null;var i=2}else{if(!ms(t.i,e))return;n=e.F,vs(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;Fi(i=cr(),new pr(i,n)),Ws(t)}else Zs(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(gs(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=gr(Fn(t.Na,t,e),so(t,t.C)),t.C++,0)))}(t,e)||2==i&&to(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:oo(t,5);break;case 4:oo(t,10);break;case 3:oo(t,6);break;default:oo(t,2)}}function so(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function oo(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=Fn(t.pb,t);n||(n=new qr("//www.google.com/images/cleardot.gif"),kn.location&&"http"==kn.location.protocol||Gr(n,"https"),Xr(n)),function(t,e){const n=new sr;if(kn.Image){const i=new Image;i.onload=Vn(_s,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Vn(_s,n,i,"TestLoadImage: error",!1,e),i.onabort=Vn(_s,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Vn(_s,n,i,"TestLoadImage: timeout",!1,e),kn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else dr(2);t.H=0,t.h&&t.h.za(e),ao(t),Qs(t)}function ao(t){if(t.H=0,t.ma=[],t.h){const e=ws(t.i);0==e.length&&0==t.j.length||(zn(t.ma,e),zn(t.ma,t.j),t.i.i.length=0,jn(t.j),t.j.length=0),t.h.ya()}}function lo(t,e,n){var i=n instanceof qr?Hr(n):new qr(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Kr(i,i.m);else{var r=kn.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new qr(null);i&&Gr(s,i),e&&(s.g=e),r&&Kr(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Wr(i,n,e),Wr(i,"VER",t.ra),Ys(t,i),i}function co(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new xs(new Is({ob:!0})):new xs(t.va)).Oa(t.J),e}function ho(){}function uo(){if(ti&&!(10<=Number(hi)))throw Error("Environmental error: no available transport.")}function fo(t,e){Pi.call(this),this.g=new Hs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gn(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new mo(this)}function po(t){_r.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function go(){Ir.call(this),this.status=1}function mo(t){this.g=t}function yo(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vo(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function wo(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(Cn=xs.prototype).Oa=function(t){this.M=t},Cn.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():br.g(),this.C=this.u?wr(this.u):wr(br),this.g.onreadystatechange=Fn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Ls(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=kn.FormData&&t instanceof kn.FormData,!(0<=$n(Ms,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Us(this),0<this.B&&((this.L=function(t){return ti&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fn(this.ua,this)):this.A=Ji(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ls(this,t)}},Cn.ua=function(){void 0!==Nn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fi(this,"timeout"),this.abort(8))},Cn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fi(this,"complete"),Fi(this,"abort"),Vs(this))},Cn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vs(this,!0)),xs.$.N.call(this)},Cn.La=function(){this.s||(this.G||this.v||this.l?Fs(this):this.kb())},Cn.kb=function(){Fs(this)},Cn.isActive=function(){return!!this.g},Cn.da=function(){try{return 2<Bs(this)?this.g.status:-1}catch(t){return-1}},Cn.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Cn.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ks(e)}},Cn.Ia=function(){return this.m},Cn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Cn=Hs.prototype).ra=8,Cn.H=1,Cn.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ar(this,this.l,t);let s=this.s;if(this.U&&(s?(s=vi(s),Ei(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Js(this,r,e),Wr(n=Hr(this.I),"RID",t),Wr(n,"CVER",22),this.F&&Wr(n,"X-HTTP-Session-Id",this.F),Ys(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(js(s)))+"&"+e:this.o&&zs(n,this.o,s)),ys(this.i,r),this.bb&&Wr(n,"TYPE","init"),this.P?(Wr(n,"$req",e),Wr(n,"SID","null"),r.aa=!0,xr(r,n,null)):xr(r,n,e),this.H=2}}else 3==this.H&&(t?Xs(this,t):0==this.j.length||ps(this.i)||Xs(this))},Cn.Ma=function(){if(this.u=null,no(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gr(Fn(this.jb,this),t)}},Cn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dr(10),Ks(this),no(this))},Cn.ib=function(){null!=this.v&&(this.v=null,Ks(this),to(this),dr(19))},Cn.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dr(2)):(this.l.info("Failed to ping google.com"),dr(1))},Cn.isActive=function(){return!!this.h&&this.h.isActive(this)},(Cn=ho.prototype).Ba=function(){},Cn.Aa=function(){},Cn.za=function(){},Cn.ya=function(){},Cn.isActive=function(){return!0},Cn.Va=function(){},uo.prototype.g=function(t,e){return new fo(t,e)},Un(fo,Pi),fo.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dr(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=lo(t,null,t.Y),Ws(t)},fo.prototype.close=function(){Gs(this.g)},fo.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ui(t),t=n);e.j.push(new us(e.fb++,t)),3==e.H&&Ws(e)},fo.prototype.N=function(){this.g.h=null,delete this.j,Gs(this.g),delete this.g,fo.$.N.call(this)},Un(po,_r),Un(go,Ir),Un(mo,ho),mo.prototype.Ba=function(){Fi(this.g,"a")},mo.prototype.Aa=function(t){Fi(this.g,new po(t))},mo.prototype.za=function(t){Fi(this.g,new go)},mo.prototype.ya=function(){Fi(this.g,"b")},Un(yo,(function(){this.blockSize=-1})),yo.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yo.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)vo(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){vo(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){vo(this,i),r=0;break}}this.h=r,this.i+=e},yo.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var Eo={};function bo(t){return-128<=t&&128>t?function(t,e){var n=Eo;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new wo([0|t],0>t?-1:0)})):new wo([0|t],0>t?-1:0)}function To(t){if(isNaN(t)||!isFinite(t))return Io;if(0>t)return No(To(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=_o;return new wo(e,0)}var _o=4294967296,Io=bo(0),So=bo(1),Ao=bo(16777216);function Co(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Do(t){return-1==t.h}function No(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new wo(n,~t.h).add(So)}function ko(t,e){return t.add(No(e))}function xo(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ro(t,e){this.g=t,this.h=e}function Oo(t,e){if(Co(e))throw Error("division by zero");if(Co(t))return new Ro(Io,Io);if(Do(t))return e=Oo(No(t),e),new Ro(No(e.g),No(e.h));if(Do(e))return e=Oo(t,No(e)),new Ro(No(e.g),e.h);if(30<t.g.length){if(Do(t)||Do(e))throw Error("slowDivide_ only works with positive integers.");for(var n=So,i=e;0>=i.X(t);)n=Mo(n),i=Mo(i);var r=Lo(n,1),s=Lo(i,1);for(i=Lo(i,2),n=Lo(n,2);!Co(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=Lo(i,1),n=Lo(n,1)}return e=ko(t,r.R(e)),new Ro(r,e)}for(r=Io;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=To(n)).R(e);Do(o)||0<o.X(t);)o=(s=To(n-=i)).R(e);Co(s)&&(s=So),r=r.add(s),t=ko(t,o)}return new Ro(r,t)}function Mo(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new wo(n,t.h)}function Lo(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new wo(r,t.h)}(Cn=wo.prototype).ea=function(){if(Do(this))return-No(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:_o+i)*e,e*=_o}return t},Cn.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Co(this))return"0";if(Do(this))return"-"+No(this).toString(t);for(var e=To(Math.pow(t,6)),n=this,i="";;){var r=Oo(n,e).g,s=((0<(n=ko(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Co(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},Cn.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Cn.X=function(t){return Do(t=ko(this,t))?-1:Co(t)?0:1},Cn.abs=function(){return Do(this)?No(this):this},Cn.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new wo(n,-2147483648&n[n.length-1]?-1:0)},Cn.R=function(t){if(Co(this)||Co(t))return Io;if(Do(this))return Do(t)?No(this).R(No(t)):No(No(this).R(t));if(Do(t))return No(this.R(No(t)));if(0>this.X(Ao)&&0>t.X(Ao))return To(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=o*l,xo(n,2*i+2*r),n[2*i+2*r+1]+=s*l,xo(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,xo(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,xo(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new wo(n,0)},Cn.gb=function(t){return Oo(this,t).h},Cn.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new wo(n,this.h&t.h)},Cn.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new wo(n,this.h|t.h)},Cn.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new wo(n,this.h^t.h)},uo.prototype.createWebChannel=uo.prototype.g,fo.prototype.send=fo.prototype.u,fo.prototype.open=fo.prototype.m,fo.prototype.close=fo.prototype.close,mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,yr.COMPLETE="complete",Er.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",Pi.prototype.listen=Pi.prototype.O,xs.prototype.listenOnce=xs.prototype.P,xs.prototype.getLastError=xs.prototype.Sa,xs.prototype.getLastErrorCode=xs.prototype.Ia,xs.prototype.getStatus=xs.prototype.da,xs.prototype.getResponseJson=xs.prototype.Wa,xs.prototype.getResponseText=xs.prototype.ja,xs.prototype.send=xs.prototype.ha,xs.prototype.setWithCredentials=xs.prototype.Oa,yo.prototype.digest=yo.prototype.l,yo.prototype.reset=yo.prototype.reset,yo.prototype.update=yo.prototype.j,wo.prototype.add=wo.prototype.add,wo.prototype.multiply=wo.prototype.R,wo.prototype.modulo=wo.prototype.gb,wo.prototype.compare=wo.prototype.X,wo.prototype.toNumber=wo.prototype.ea,wo.prototype.toString=wo.prototype.toString,wo.prototype.getBits=wo.prototype.D,wo.fromNumber=To,wo.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return No(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=To(Math.pow(n,8)),r=Io,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=To(Math.pow(n,o)),r=r.R(o).add(To(a))):r=(r=r.R(i)).add(To(a))}return r};var Po=mr,Fo=yr,Vo=ar,Uo=10,Bo=11,$o=Er,jo=xs,zo=wo;const qo="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ho{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ho.UNAUTHENTICATED=new Ho(null),Ho.GOOGLE_CREDENTIALS=new Ho("google-credentials-uid"),Ho.FIRST_PARTY=new Ho("first-party-uid"),Ho.MOCK_USER=new Ho("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Go="10.5.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ko=new Pe("@firebase/firestore");function Qo(){return Ko.logLevel}function Wo(t,...e){if(Ko.logLevel<=xe.DEBUG){const n=e.map(Jo);Ko.debug(`Firestore (${Go}): ${t}`,...n)}}function Xo(t,...e){if(Ko.logLevel<=xe.ERROR){const n=e.map(Jo);Ko.error(`Firestore (${Go}): ${t}`,...n)}}function Yo(t,...e){if(Ko.logLevel<=xe.WARN){const n=e.map(Jo);Ko.warn(`Firestore (${Go}): ${t}`,...n)}}function Jo(t){if("string"==typeof t)return t;try{
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zo(t="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+t;throw Xo(e),new Error(e)}function ta(t,e){t||Zo()}function ea(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const na={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ia extends be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ra{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class oa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ho.UNAUTHENTICATED)))}shutdown(){}}class aa{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class la{constructor(t){this.t=t,this.currentUser=Ho.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ra;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ra,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Wo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Wo("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ra)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Wo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ta("string"==typeof e.accessToken),new sa(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ta(null===t||"string"==typeof t),new Ho(t)}}class ca{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Ho.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ha{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ca(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Ho.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ua{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fa{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Wo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Wo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Wo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Wo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ta("string"==typeof t.token),this.R=t.token,new ua(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function da(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pa{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=da(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function ga(t,e){return t<e?-1:t>e?1:0}function ma(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ya{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ia(na.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ia(na.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ia(na.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ia(na.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ya.fromMillis(Date.now())}static fromDate(t){return ya.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ya(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ga(this.nanoseconds,t.nanoseconds):ga(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class va{constructor(t){this.timestamp=t}static fromTimestamp(t){return new va(t)}static min(){return new va(new ya(0,0))}static max(){return new va(new ya(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wa{constructor(t,e,n){void 0===e?e=0:e>t.length&&Zo(),void 0===n?n=t.length-e:n>t.length-e&&Zo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===wa.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wa?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ea extends wa{construct(t,e,n){return new Ea(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ia(na.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ea(e)}static emptyPath(){return new Ea([])}}const ba=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ta extends wa{construct(t,e,n){return new Ta(t,e,n)}static isValidIdentifier(t){return ba.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ta.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ta(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new ia(na.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ia(na.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ia(na.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new ia(na.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ta(e)}static emptyPath(){return new Ta([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _a{constructor(t){this.path=t}static fromPath(t){return new _a(Ea.fromString(t))}static fromName(t){return new _a(Ea.fromString(t).popFirst(5))}static empty(){return new _a(Ea.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ea.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ea.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _a(new Ea(t.slice()))}}function Ia(t){return new Sa(t.readTime,t.key,-1)}class Sa{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Sa(va.min(),_a.empty(),-1)}static max(){return new Sa(va.max(),_a.empty(),-1)}}function Aa(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=_a.comparator(t.documentKey,e.documentKey),0!==n?n:ga(t.largestBatchId,e.largestBatchId))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ca="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Da{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Na(t){if(t.code!==na.FAILED_PRECONDITION||t.message!==Ca)throw t;Wo("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ka{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Zo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ka(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ka?e:ka.resolve(e)}catch(t){return ka.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ka.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ka.reject(e)}static resolve(t){return new ka(((e,n)=>{e(t)}))}static reject(t){return new ka(((e,n)=>{n(t)}))}static waitFor(t){return new ka(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=ka.resolve(!1);for(const n of t)e=e.next((t=>t?ka.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ka(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new ka(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}function xa(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ra{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Oa(t){return null==t}function Ma(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function La(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ra.ae=-1;class Va{constructor(t,e){this.comparator=t,this.root=e||Ba.EMPTY}insert(t,e){return new Va(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ba.BLACK,null,null))}remove(t){return new Va(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ba.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ua(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ua(this.root,t,this.comparator,!0)}}class Ua{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ba{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Ba.RED,this.left=null!=i?i:Ba.EMPTY,this.right=null!=r?r:Ba.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Ba(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ba.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ba.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ba.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ba.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zo();if(this.right.isRed())throw Zo();const t=this.left.check();if(t!==this.right.check())throw Zo();return t+(this.isRed()?0:1)}}Ba.EMPTY=null,Ba.RED=!0,Ba.BLACK=!1,Ba.EMPTY=new class{constructor(){this.size=0}get key(){throw Zo()}get value(){throw Zo()}get color(){throw Zo()}get left(){throw Zo()}get right(){throw Zo()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ba(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $a{constructor(t){this.comparator=t,this.data=new Va(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(t){return new ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof $a))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new $a(this.comparator);return e.data=t,e}}class ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class za{constructor(t){this.fields=t,t.sort(Ta.comparator)}static empty(){return new za([])}unionWith(t){let e=new $a(Ta.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new za(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ma(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ha{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new qa("Invalid base64 string: "+t):t}}(t);return new Ha(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ha(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ga(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ha.EMPTY_BYTE_STRING=new Ha("");const Ga=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ka(t){if(ta(!!t),"string"==typeof t){let e=0;const n=Ga.exec(t);if(ta(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Qa(t.seconds),nanos:Qa(t.nanos)}}function Qa(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Wa(t){return"string"==typeof t?Ha.fromBase64String(t):Ha.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ya(t){const e=t.mapValue.fields.__previous_value__;return Xa(e)?Ya(e):e}function Ja(t){const e=Ka(t.mapValue.fields.__local_write_time__.timestampValue);return new ya(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Za{constructor(t,e,n,i,r,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class tl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tl&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xa(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:10:Zo()}function il(t,e){if(t===e)return!0;const n=nl(t);if(n!==nl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ja(t).isEqual(Ja(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ka(t.timestampValue),i=Ka(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Wa(t.bytesValue).isEqual(Wa(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Qa(t.geoPointValue.latitude)===Qa(e.geoPointValue.latitude)&&Qa(t.geoPointValue.longitude)===Qa(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Qa(t.integerValue)===Qa(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Qa(t.doubleValue),i=Qa(e.doubleValue);return n===i?Ma(n)===Ma(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ma(t.arrayValue.values||[],e.arrayValue.values||[],il);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(La(n)!==La(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!il(n[t],i[t])))return!1;return!0}(t,e);default:return Zo()}}function rl(t,e){return void 0!==(t.values||[]).find((t=>il(t,e)))}function sl(t,e){if(t===e)return 0;const n=nl(t),i=nl(e);if(n!==i)return ga(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ga(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Qa(t.integerValue||t.doubleValue),i=Qa(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return ol(t.timestampValue,e.timestampValue);case 4:return ol(Ja(t),Ja(e));case 5:return ga(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Wa(t),i=Wa(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=ga(n[t],i[t]);if(0!==e)return e}return ga(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ga(Qa(t.latitude),Qa(e.latitude));return 0!==n?n:ga(Qa(t.longitude),Qa(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=sl(n[t],i[t]);if(e)return e}return ga(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===el.mapValue&&e===el.mapValue)return 0;if(t===el.mapValue)return 1;if(e===el.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=ga(i[t],s[t]);if(0!==e)return e;const o=sl(n[i[t]],r[s[t]]);if(0!==o)return o}return ga(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Zo()}}function ol(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ga(t,e);const n=Ka(t),i=Ka(e),r=ga(n.seconds,i.seconds);return 0!==r?r:ga(n.nanos,i.nanos)}function al(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ka(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Wa(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return _a.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=ll(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${ll(t.fields[r])}`;return n+"}"}(t.mapValue):Zo()}function cl(t){return!!t&&"integerValue"in t}function hl(t){return!!t&&"arrayValue"in t}function ul(t){return!!t&&"mapValue"in t}function fl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pa(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fl(t.arrayValue.values[n]);return e}return Object.assign({},t)}class dl{constructor(t){this.value=t}static empty(){return new dl({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ul(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fl(e)}setAll(t){let e=Ta.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=fl(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());ul(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return il(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Pa(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new dl(fl(this.value))}}function pl(t){const e=[];return Pa(t.fields,((t,n)=>{const i=new Ta([t]);if(ul(n)){const t=pl(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new za(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class gl{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new gl(t,0,va.min(),va.min(),va.min(),dl.empty(),0)}static newFoundDocument(t,e,n,i){return new gl(t,1,e,va.min(),n,i,0)}static newNoDocument(t,e){return new gl(t,2,e,va.min(),va.min(),dl.empty(),0)}static newUnknownDocument(t,e){return new gl(t,3,e,va.min(),va.min(),dl.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(va.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dl.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=va.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gl&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gl(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ml{constructor(t,e){this.position=t,this.inclusive=e}}function yl(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?_a.comparator(_a.fromName(o.referenceValue),n.key):sl(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function vl(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!il(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wl{constructor(t,e="asc"){this.field=t,this.dir=e}}function El(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bl{}class Tl extends bl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Nl(t,e,n):"array-contains"===e?new Ol(t,n):"in"===e?new Ml(t,n):"not-in"===e?new Ll(t,n):"array-contains-any"===e?new Pl(t,n):new Tl(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new kl(t,n):new xl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(sl(e,this.value)):null!==e&&nl(this.value)===nl(e)&&this.matchesComparison(sl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Zo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _l extends bl{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new _l(t,e)}matches(t){return Il(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Il(t){return"and"===t.op}function Sl(t){return function(t){for(const e of t.filters)if(e instanceof _l)return!1;return!0}(t)&&Il(t)}function Al(t){if(t instanceof Tl)return t.field.canonicalString()+t.op.toString()+al(t.value);if(Sl(t))return t.filters.map((t=>Al(t))).join(",");{const e=t.filters.map((t=>Al(t))).join(",");return`${t.op}(${e})`}}function Cl(t,e){return t instanceof Tl?function(t,e){return e instanceof Tl&&t.op===e.op&&t.field.isEqual(e.field)&&il(t.value,e.value)}(t,e):t instanceof _l?function(t,e){return e instanceof _l&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Cl(n,e.filters[i])),!0)}(t,e):void Zo()}function Dl(t){return t instanceof Tl?function(t){return`${t.field.canonicalString()} ${t.op} ${al(t.value)}`}(t):t instanceof _l?function(t){return t.op.toString()+" {"+t.getFilters().map(Dl).join(" ,")+"}"}(t):"Filter"}class Nl extends Tl{constructor(t,e,n){super(t,e,n),this.key=_a.fromName(n.referenceValue)}matches(t){const e=_a.comparator(t.key,this.key);return this.matchesComparison(e)}}class kl extends Tl{constructor(t,e){super(t,"in",e),this.keys=Rl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class xl extends Tl{constructor(t,e){super(t,"not-in",e),this.keys=Rl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Rl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>_a.fromName(t.referenceValue)))}class Ol extends Tl{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hl(e)&&rl(e.arrayValue,this.value)}}class Ml extends Tl{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rl(this.value.arrayValue,e)}}class Ll extends Tl{constructor(t,e){super(t,"not-in",e)}matches(t){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rl(this.value.arrayValue,e)}}class Pl extends Tl{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>rl(this.value.arrayValue,t)))}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fl{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.le=null}}function Vl(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Fl(t,e,n,i,r,s,o)}function Ul(t){const e=ea(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Al(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Oa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>al(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>al(t))).join(",")),e.le=t}return e.le}function Bl(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!El(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vl(t.startAt,e.startAt)&&vl(t.endAt,e.endAt)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $l{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function jl(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function zl(t){const e=ea(t);if(null===e.he){e.he=[];const t=new Set;for(const n of e.explicitOrderBy)e.he.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new $a(Ta.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new wl(i,n))})),t.has(Ta.keyField().canonicalString())||e.he.push(new wl(Ta.keyField(),n))}return e.he}function ql(t){const e=ea(t);return e.Pe||(e.Pe=function(t,e){if("F"===t.limitType)return Vl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new wl(t.field,e)}));const n=t.endAt?new ml(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ml(t.startAt.position,t.startAt.inclusive):null;return Vl(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,zl(t))),e.Pe}function Hl(t,e,n){return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return Bl(ql(t),ql(e))&&t.limitType===e.limitType}function Kl(t){return`${Ul(ql(t))}|lt:${t.limitType}`}function Ql(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Dl(t))).join(", ")}]`),Oa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>al(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>al(t))).join(",")),`Target(${e})`}(ql(t))}; limitType=${t.limitType})`}function Wl(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):_a.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of zl(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=yl(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,zl(t),e))&&!(t.endAt&&!function(t,e,n){const i=yl(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,zl(t),e))}(t,e)}function Xl(t,e,n){const i=t.field.isKeyField()?_a.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?sl(i,r):Zo()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Zo()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yl{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Pa(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Fa(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jl=new Va(_a.comparator);function Zl(){return Jl}const tc=new Va(_a.comparator);function ec(...t){let e=tc;for(const n of t)e=e.insert(n.key,n);return e}function nc(t){let e=tc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ic(){return sc()}function rc(){return sc()}function sc(){return new Yl((t=>t.toString()),((t,e)=>t.isEqual(e)))}const oc=new Va(_a.comparator),ac=new $a(_a.comparator);function lc(...t){let e=ac;for(const n of t)e=e.add(n);return e}const cc=new $a(ga);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function hc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(e)?"-0":e}}function uc(t){return{integerValue:""+t}}function fc(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?uc(e):hc(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dc{constructor(){this._=void 0}}function pc(t,e,n){return t instanceof yc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Xa(e)&&(e=Ya(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof vc?wc(t,e):t instanceof Ec?bc(t,e):function(t,e){const n=mc(t,e),i=_c(n)+_c(t.Te);return cl(n)&&cl(t.Te)?uc(i):hc(t.serializer,i)}(t,e)}function gc(t,e,n){return t instanceof vc?wc(t,e):t instanceof Ec?bc(t,e):n}function mc(t,e){return t instanceof Tc?function(t){return cl(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class yc extends dc{}class vc extends dc{constructor(t){super(),this.elements=t}}function wc(t,e){const n=Ic(e);for(const e of t.elements)n.some((t=>il(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ec extends dc{constructor(t){super(),this.elements=t}}function bc(t,e){let n=Ic(e);for(const e of t.elements)n=n.filter((t=>!il(t,e)));return{arrayValue:{values:n}}}class Tc extends dc{constructor(t,e){super(),this.serializer=t,this.Te=e}}function _c(t){return Qa(t.integerValue||t.doubleValue)}function Ic(t){return hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Sc{constructor(t,e){this.version=t,this.transformResults=e}}class Ac{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ac}static exists(t){return new Ac(void 0,t)}static updateTime(t){return new Ac(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Dc{}function Nc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Uc(t.key,Ac.none()):new Mc(t.key,t.data,Ac.none());{const n=t.data,i=dl.empty();let r=new $a(Ta.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Lc(t.key,i,new za(r.toArray()),Ac.none())}}function kc(t,e,n){t instanceof Mc?function(t,e,n){const i=t.value.clone(),r=Fc(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Lc?function(t,e,n){if(!Cc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Fc(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Pc(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function xc(t,e,n,i){return t instanceof Mc?function(t,e,n,i){if(!Cc(t.precondition,e))return n;const r=t.value.clone(),s=Vc(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Lc?function(t,e,n,i){if(!Cc(t.precondition,e))return n;const r=Vc(t.fieldTransforms,i,e),s=e.data;return s.setAll(Pc(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Cc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Rc(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=mc(i.transform,t||null);null!=r&&(null===n&&(n=dl.empty()),n.set(i.field,r))}return n||null}function Oc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ma(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof vc&&e instanceof vc||t instanceof Ec&&e instanceof Ec?ma(t.elements,e.elements,il):t instanceof Tc&&e instanceof Tc?il(t.Te,e.Te):t instanceof yc&&e instanceof yc}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mc extends Dc{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lc extends Dc{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Pc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Fc(t,e,n){const i=new Map;ta(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,gc(o,a,n[r]))}return i}function Vc(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,pc(t,s,e))}return i}class Uc extends Dc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bc extends Dc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $c{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&kc(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=xc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=xc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rc();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Nc(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(va.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),lc())}isEqual(t){return this.batchId===t.batchId&&ma(this.mutations,t.mutations,((t,e)=>Oc(t,e)))&&ma(this.baseMutations,t.baseMutations,((t,e)=>Oc(t,e)))}}class jc{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){ta(t.mutations.length===n.length);let i=oc;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new jc(t,e,n,i)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qc,Hc;(Hc=qc||(qc={}))[Hc.OK=0]="OK",Hc[Hc.CANCELLED=1]="CANCELLED",Hc[Hc.UNKNOWN=2]="UNKNOWN",Hc[Hc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Hc[Hc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Hc[Hc.NOT_FOUND=5]="NOT_FOUND",Hc[Hc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Hc[Hc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Hc[Hc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Hc[Hc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Hc[Hc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Hc[Hc.ABORTED=10]="ABORTED",Hc[Hc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Hc[Hc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Hc[Hc.INTERNAL=13]="INTERNAL",Hc[Hc.UNAVAILABLE=14]="UNAVAILABLE",Hc[Hc.DATA_LOSS=15]="DATA_LOSS",
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new zo([4294967295,4294967295],0);class Gc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Kc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wc(t,e){return Kc(t,e.toTimestamp())}function Xc(t){return ta(!!t),va.fromTimestamp(function(t){const e=Ka(t);return new ya(e.seconds,e.nanos)}(t))}function Yc(t,e){return function(t){return new Ea(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Jc(t,e){return Yc(t.databaseId,e.path)}function Zc(t){const e=function(t){const e=Ea.fromString(t);return ta(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),e}(t);return 4===e.length?Ea.emptyPath():function(t){return ta(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function th(t,e,n){return{name:Jc(t,e),fields:n.value.mapValue.fields}}function eh(t){let e=Zc(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){ta(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=nh(t);return e instanceof _l&&Sl(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new wl(ih(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Oa(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new ml(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new ml(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new $l(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",l,c)}function nh(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ih(t.unaryFilter.field);return Tl.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ih(t.unaryFilter.field);return Tl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ih(t.unaryFilter.field);return Tl.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ih(t.unaryFilter.field);return Tl.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Zo()}}(t):void 0!==t.fieldFilter?function(t){return Tl.create(ih(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Zo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return _l.create(t.compositeFilter.filters.map((t=>nh(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Zo()}}(t.compositeFilter.op))}(t):Zo()}function ih(t){return Ta.fromServerFormat(t.fieldPath)}function rh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class sh{constructor(t){this.ct=t}}function oh(t){const e=eh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Hl(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ah{constructor(){this._n=new lh}addToCollectionParentIndex(t,e){return this._n.add(e),ka.resolve()}getCollectionParents(t,e){return ka.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return ka.resolve()}deleteFieldIndex(t,e){return ka.resolve()}deleteAllFieldIndexes(t){return ka.resolve()}createTargetIndexes(t,e){return ka.resolve()}getDocumentsMatchingTarget(t,e){return ka.resolve(null)}getIndexType(t,e){return ka.resolve(0)}getFieldIndexes(t,e){return ka.resolve([])}getNextCollectionGroupToUpdate(t){return ka.resolve(null)}getMinOffset(t,e){return ka.resolve(Sa.min())}getMinOffsetFromCollectionGroup(t,e){return ka.resolve(Sa.min())}updateCollectionGroup(t,e,n){return ka.resolve()}updateIndexEntries(t,e){return ka.resolve()}}class lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new $a(Ea.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new $a(Ea.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ch{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ch(0)}static Bn(){return new ch(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hh{constructor(){this.changes=new Yl((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gl.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ka.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&xc(n.mutation,t,za.empty(),ya.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,lc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=lc()){const i=ic();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=ec();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ic();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,lc())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Zl();const s=sc(),o=sc();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Lc)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),xc(o.mutation,e,o.mutation.getFieldMask(),ya.now())):s.set(e.key,za.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new uh(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=sc();let i=new Va(((t,e)=>t-e)),r=lc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||za.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||lc()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=rc();l.forEach((t=>{if(!r.has(t)){const i=Nc(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ka.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return _a.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):ka.resolve(ic());let o=-1,a=r;return s.next((e=>ka.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?ka.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,lc()))).next((t=>({batchId:o,changes:nc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new _a(e)).next((t=>{let e=ec();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=ec();return this.indexManager.getCollectionParents(t,r).next((o=>ka.forEach(o,(o=>{const a=function(t,e){return new $l(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,gl.newInvalidDocument(i)))}));let n=ec();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&xc(s.mutation,i,za.empty(),ya.now()),Wl(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return ka.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Xc(t.createTime)}}(e)),ka.resolve()}getNamedQuery(t,e){return ka.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:oh(t.bundledQuery),readTime:Xc(t.readTime)}}(e)),ka.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ph{constructor(){this.overlays=new Va(_a.comparator),this.hr=new Map}getOverlay(t,e){return ka.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ic();return ka.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),ka.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),ka.resolve()}getOverlaysForCollection(t,e,n){const i=ic(),r=e.length+1,s=new _a(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ka.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Va(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=ic(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ic(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ka.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new zc(e,n));let r=this.hr.get(e);void 0===r&&(r=lc(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gh{constructor(){this.Pr=new $a(mh.Ir),this.Tr=new $a(mh.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new mh(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new mh(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new _a(new Ea([])),n=new mh(e,t),i=new mh(e,t+1),r=[];return this.Tr.forEachInRange([n,i],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new _a(new Ea([])),n=new mh(e,t),i=new mh(e,t+1);let r=lc();return this.Tr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new mh(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class mh{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return _a.comparator(t.key,e.key)||ga(t.pr,e.pr)}static Er(t,e){return ga(t.pr,e.pr)||_a.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new $a(mh.Ir)}checkEmpty(t){return ka.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $c(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.wr=this.wr.add(new mh(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ka.resolve(s)}lookupMutationBatch(t,e){return ka.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),r=i<0?0:i;return ka.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ka.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return ka.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new mh(e,0),i=new mh(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],(t=>{const e=this.Sr(t.pr);r.push(e)})),ka.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $a(ga);return e.forEach((t=>{const e=new mh(t,0),i=new mh(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,i],(t=>{n=n.add(t.pr)}))})),ka.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;_a.isDocumentKey(r)||(r=r.child(""));const s=new mh(new _a(r),0);let o=new $a(ga);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.pr)),!0)}),s),ka.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ta(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return ka.forEach(e.mutations,(i=>{const r=new mh(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new mh(e,0),i=this.wr.firstAfterOrEqual(n);return ka.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ka.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vh{constructor(t){this.vr=t,this.docs=new Va(_a.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ka.resolve(n?n.document.mutableCopy():gl.newInvalidDocument(e))}getEntries(t,e){let n=Zl();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():gl.newInvalidDocument(t))})),ka.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Zl();const s=e.path,o=new _a(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Aa(Ia(o),n)<=0||(i.has(o.key)||Wl(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ka.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Zo()}Fr(t,e){return ka.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new wh(this)}getSize(t){return ka.resolve(this.size)}}class wh extends hh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)})),ka.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eh{constructor(t){this.persistence=t,this.Mr=new Yl((t=>Ul(t)),Bl),this.lastRemoteSnapshotVersion=va.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gh,this.targetCount=0,this.Br=ch.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),ka.resolve()}getLastRemoteSnapshotVersion(t){return ka.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ka.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ka.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),ka.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ch(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,ka.resolve()}updateTargetData(t,e){return this.qn(e),ka.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,ka.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ka.waitFor(r).next((()=>i))}getTargetCount(t){return ka.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return ka.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),ka.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),ka.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),ka.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return ka.resolve(n)}containsKey(t,e){return ka.resolve(this.Nr.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bh{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Ra(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Eh(this),this.indexManager=new ah,this.remoteDocumentCache=function(t){return new vh(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new sh(e),this.$r=new dh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ph,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new yh(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Wo("MemoryPersistence","Starting transaction:",t);const i=new Th(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((t=>this.referenceDelegate.Wr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gr(t,e){return ka.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class Th extends Da{constructor(t){super(),this.currentSequenceNumber=t}}class _h{constructor(t){this.persistence=t,this.zr=new gh,this.jr=null}static Hr(t){return new _h(t)}get Jr(){if(this.jr)return this.jr;throw Zo()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),ka.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),ka.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),ka.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ka.forEach(this.Jr,(n=>{const i=_a.fromPath(n);return this.Yr(t,i).next((t=>{t||e.removeEntry(i,va.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return ka.or([()=>ka.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ih{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}static Ki(t,e){let n=lc(),i=lc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Ih(t,e.fromCache,n,i)}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new Sh;return this.Ji(t,e,n).next((i=>{if(r.result=i,this.Ui)return this.Yi(t,e,n,i.size)}))})).next((()=>r.result))}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(Qo()<=xe.DEBUG&&Wo("QueryEngine","SDK will not create cache indexes for query:",Ql(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),ka.resolve()):(Qo()<=xe.DEBUG&&Wo("QueryEngine","Query:",Ql(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(Qo()<=xe.DEBUG&&Wo("QueryEngine","The SDK decides to create cache indexes for query:",Ql(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ql(e))):ka.resolve())}ji(t,e){if(jl(e))return ka.resolve(null);let n=ql(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Hl(e,null,"F"),n=ql(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=lc(...i);return this.zi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,i);return this.Xi(e,s,r,n.readTime)?this.ji(t,Hl(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,i){return jl(e)||i.isEqual(va.min())?ka.resolve(null):this.zi.getDocuments(t,n).next((r=>{const s=this.Zi(e,r);return this.Xi(e,s,n,i)?ka.resolve(null):(Qo()<=xe.DEBUG&&Wo("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ql(e)),this.es(t,s,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=va.fromTimestamp(1e9===i?new ya(n+1,0):new ya(n,i));return new Sa(r,_a.empty(),e)}(i,-1)).next((t=>t)))}))}Zi(t,e){let n=new $a(function(t){return(e,n)=>{let i=!1;for(const r of zl(t)){const t=Xl(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,i)=>{Wl(t,i)&&(n=n.add(i))})),n}Xi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(t,e,n){return Qo()<=xe.DEBUG&&Wo("QueryEngine","Using full collection scan to execute query:",Ql(e)),this.zi.getDocumentsMatchingQuery(t,e,Sa.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ch{constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new Va(ga),this.rs=new Yl((t=>Ul(t)),Bl),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function Dh(t,e){const n=ea(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=lc();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Nh(t,e){const n=ea(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class kh{constructor(){this.activeTargetIds=cc}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xh{constructor(){this.no=new kh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new kh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rh{io(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Wo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Wo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Mh=null;function Lh(){return null===Mh?Mh=268435456+Math.round(2147483648*Math.random()):Mh++,"0x"+Mh.toString(16)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const Ph={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Vh="WebChannelConnection";class Uh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(t,e,n,i,r){const s=Lh(),o=this.bo(t,e);Wo("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,i,r),this.Co(t,o,a,n).then((e=>(Wo("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Yo("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,i,r,s){return this.So(t,e,n,i,r)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Go,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Ph[t];return`${this.fo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,i){const r=Lh();return new Promise(((s,o)=>{const a=new jo;a.setWithCredentials(!0),a.listenOnce(Fo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Po.NO_ERROR:const e=a.getResponseJson();Wo(Vh,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case Po.TIMEOUT:Wo(Vh,`RPC '${t}' ${r} timed out`),o(new ia(na.DEADLINE_EXCEEDED,"Request time out"));break;case Po.HTTP_ERROR:const n=a.getStatus();if(Wo(Vh,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(na).indexOf(e)>=0?e:na.UNKNOWN}(e.status);o(new ia(t,e.message))}else o(new ia(na.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ia(na.UNAVAILABLE,"Connection failed."));break;default:Zo()}}finally{Wo(Vh,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);Wo(Vh,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}Fo(t,e,n){const i=Lh(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new uo,o=cr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Wo(Vh,`Creating RPC '${t}' stream ${i}: ${c}`,a);const h=s.createWebChannel(c,a);let u=!1,f=!1;const d=new Fh({lo:e=>{f?Wo(Vh,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Wo(Vh,`Opening RPC '${t}' stream ${i} transport.`),h.open(),u=!0),Wo(Vh,`RPC '${t}' stream ${i} sending:`,e),h.send(e))},ho:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,$o.EventType.OPEN,(()=>{f||Wo(Vh,`RPC '${t}' stream ${i} transport opened.`)})),p(h,$o.EventType.CLOSE,(()=>{f||(f=!0,Wo(Vh,`RPC '${t}' stream ${i} transport closed`),d.Vo())})),p(h,$o.EventType.ERROR,(e=>{f||(f=!0,Yo(Vh,`RPC '${t}' stream ${i} transport errored:`,e),d.Vo(new ia(na.UNAVAILABLE,"The operation could not be completed")))})),p(h,$o.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];ta(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Wo(Vh,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=qc[t];if(void 0!==e)return function(t){if(void 0===t)return Xo("GRPC error has no .code"),na.UNKNOWN;switch(t){case qc.OK:return na.OK;case qc.CANCELLED:return na.CANCELLED;case qc.UNKNOWN:return na.UNKNOWN;case qc.DEADLINE_EXCEEDED:return na.DEADLINE_EXCEEDED;case qc.RESOURCE_EXHAUSTED:return na.RESOURCE_EXHAUSTED;case qc.INTERNAL:return na.INTERNAL;case qc.UNAVAILABLE:return na.UNAVAILABLE;case qc.UNAUTHENTICATED:return na.UNAUTHENTICATED;case qc.INVALID_ARGUMENT:return na.INVALID_ARGUMENT;case qc.NOT_FOUND:return na.NOT_FOUND;case qc.ALREADY_EXISTS:return na.ALREADY_EXISTS;case qc.PERMISSION_DENIED:return na.PERMISSION_DENIED;case qc.FAILED_PRECONDITION:return na.FAILED_PRECONDITION;case qc.ABORTED:return na.ABORTED;case qc.OUT_OF_RANGE:return na.OUT_OF_RANGE;case qc.UNIMPLEMENTED:return na.UNIMPLEMENTED;case qc.DATA_LOSS:return na.DATA_LOSS;default:return Zo()}}(e)}(e),r=o.message;void 0===n&&(n=na.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Vo(new ia(n,r)),h.close()}else Wo(Vh,`RPC '${t}' stream ${i} received:`,r),d.mo(r)}})),p(o,Vo.STAT_EVENT,(e=>{e.stat===Uo?Wo(Vh,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Bo&&Wo(Vh,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.Ro()}),0),d}}function Bh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $h(t){return new Gc(t,!0)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jh{constructor(t,e,n=1e3,i=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-n);i>0&&Wo("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zh{constructor(t,e,n,i,r,s,o,a){this.oi=t,this.$o=n,this.Uo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new jh(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===na.RESOURCE_EXHAUSTED?(Xo(e.toString()),Xo("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===na.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new ia(na.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return Wo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(Wo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qh extends zh{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(ta(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?(ta(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Xc(t.updateTime):Xc(e);return n.isEqual(va.min())&&(n=Xc(e)),new Sc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Xc(t.commitTime);return this.listener.T_(n,e)}return ta(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=function(t){return new Ea(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Mc)n={update:th(t,e.key,e.value)};else if(e instanceof Uc)n={delete:Jc(t,e.key)};else if(e instanceof Lc)n={update:th(t,e.key,e.data),updateMask:rh(e.fieldMask)};else{if(!(e instanceof Bc))return Zo();n={verify:Jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof yc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ec)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Tc)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Zo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Wc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Zo()}(t,e.precondition)),n}(this.serializer,t)))};this.t_(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new ia(na.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.So(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===na.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ia(na.UNKNOWN,t.toString())}))}vo(t,e,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.vo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===na.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ia(na.UNKNOWN,t.toString())}))}terminate(){this.A_=!0}}class Gh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Xo(e),this.g_=!1):Wo("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kh{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io((t=>{n.enqueueAndForget((async()=>{Xh(this)&&(Wo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ea(t);e.v_.add(4),await Wh(e),e.x_.set("Unknown"),e.v_.delete(4),await Qh(e)}(this))}))})),this.x_=new Gh(n,i)}}async function Qh(t){if(Xh(t))for(const e of t.F_)await e(!0)}async function Wh(t){for(const e of t.F_)await e(!1)}function Xh(t){return 0===ea(t).v_.size}async function Yh(t,e,n){if(!xa(e))throw e;t.v_.add(1),await Wh(t),t.x_.set("Offline"),n||(n=()=>function(t){const e=ea(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Wo("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Qh(t)}))}function Jh(t,e){return e().catch((n=>Yh(t,n,e)))}async function Zh(t){const e=ea(t),n=cu(e);let i=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;tu(e);)try{const t=await Nh(e.localStore,i);if(null===t){0===e.D_.length&&n.Xo();break}i=t.batchId,eu(e,t)}catch(t){await Yh(e,t)}nu(e)&&iu(e)}function tu(t){return Xh(t)&&t.D_.length<10}function eu(t,e){t.D_.push(e);const n=cu(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function nu(t){return Xh(t)&&!cu(t).Ho()&&t.D_.length>0}function iu(t){cu(t).start()}async function ru(t){cu(t).d_()}async function su(t){const e=cu(t);for(const n of t.D_)e.I_(n.mutations)}async function ou(t,e,n){const i=t.D_.shift(),r=jc.from(i,e,n);await Jh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Zh(t)}async function au(t,e){e&&cu(t).P_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return Zo();case na.CANCELLED:case na.UNKNOWN:case na.DEADLINE_EXCEEDED:case na.RESOURCE_EXHAUSTED:case na.INTERNAL:case na.UNAVAILABLE:case na.UNAUTHENTICATED:return!1;case na.INVALID_ARGUMENT:case na.NOT_FOUND:case na.ALREADY_EXISTS:case na.PERMISSION_DENIED:case na.FAILED_PRECONDITION:case na.ABORTED:case na.OUT_OF_RANGE:case na.UNIMPLEMENTED:case na.DATA_LOSS:return!0}}(t)&&t!==na.ABORTED}(e.code)){const n=t.D_.shift();cu(t).Zo(),await Jh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zh(t)}}(t,e),nu(t)&&iu(t)}async function lu(t,e){const n=ea(t);n.asyncQueue.verifyOperationInProgress(),Wo("RemoteStore","RemoteStore received new credentials");const i=Xh(n);n.v_.add(3),await Wh(n),i&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Qh(n)}function cu(t){return t.B_||(t.B_=function(t,e,n){const i=ea(t);return i.R_(),new qh(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Po:ru.bind(null,t),To:au.bind(null,t),E_:su.bind(null,t),T_:ou.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await Zh(t)):(await t.B_.stop(),t.D_.length>0&&(Wo("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class hu{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ra,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new hu(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ia(na.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(t,e){if(Xo("AsyncQueue",`${e}: ${t}`),xa(t))return new ia(na.UNAVAILABLE,`${e}: ${t}`);throw t}class fu{constructor(){this.queries=new Yl((t=>Kl(t)),Gl),this.onlineState="Unknown",this.Q_=new Set}}class du{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.ma={},this.fa=new Yl((t=>Kl(t)),Gl),this.ga=new Map,this.pa=new Set,this.ya=new Va(_a.comparator),this.wa=new Map,this.Sa=new gh,this.ba={},this.Da=new Map,this.Ca=ch.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return!0===this.va}}async function pu(t,e,n){const i=function(t){const e=ea(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yu.bind(null,e),e}(t);try{const t=await function(t,e){const n=ea(t),i=ya.now(),r=e.reduce(((t,e)=>t.add(e.key)),lc());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Zl(),l=lc();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Rc(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Lc(t.key,e,pl(e.value.mapValue),Ac.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:nc(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ba[t.currentUser.toKey()];i||(i=new Va(ga)),i=i.insert(e,n),t.ba[t.currentUser.toKey()]=i}(i,t.batchId,n),await Eu(i,t.changes),await Zh(i.remoteStore)}catch(t){const e=uu(t,"Failed to persist write");n.reject(e)}}function gu(t,e,n){const i=ea(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.fa.forEach(((n,i)=>{const r=i.view.K_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=ea(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.K_(e)&&(i=!0)})),i&&function(t){t.Q_.forEach((t=>{t.next()}))}(n)}(i.eventManager,e),t.length&&i.ma.u_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mu(t,e){const n=ea(t),i=e.batch.batchId;try{const t=await function(t,e){const n=ea(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ka.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ta(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=lc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);wu(n,i,null),vu(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Eu(n,t)}catch(t){await Na(t)}}async function yu(t,e,n){const i=ea(t);try{const t=await function(t,e){const n=ea(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ta(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);wu(i,e,n),vu(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Eu(i,t)}catch(n){await Na(n)}}function vu(t,e){(t.Da.get(e)||[]).forEach((t=>{t.resolve()})),t.Da.delete(e)}function wu(t,e,n){const i=ea(t);let r=i.ba[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ba[i.currentUser.toKey()]=r}}async function Eu(t,e,n){const i=ea(t),r=[],s=[],o=[];i.fa.isEmpty()||(i.fa.forEach(((t,a)=>{o.push(i.Fa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Ih.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.ma.u_(r),await async function(t,e){const n=ea(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ka.forEach(e,(e=>ka.forEach(e.qi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ka.forEach(e.Qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!xa(t))throw t;Wo("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,r)}}}(i.localStore,s))}async function bu(t,e){const n=ea(t);if(!n.currentUser.isEqual(e)){Wo("SyncEngine","User change. New user:",e.toKey());const t=await Dh(n.localStore,e);n.currentUser=e,function(t,e){t.Da.forEach((t=>{t.forEach((t=>{t.reject(new ia(na.CANCELLED,e))}))})),t.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Eu(n,t.us)}}class Tu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$h(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,i){return new Ch(t,e,n,i)}(this.persistence,new Ah,t.initialUser,this.serializer)}createPersistence(t){return new bh(_h.Hr,this.serializer)}createSharedClientState(t){return new xh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _u{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>gu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bu.bind(null,this.syncEngine),await async function(t,e){const n=ea(t);e?(n.v_.delete(2),await Qh(n)):e||(n.v_.add(2),await Wh(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fu}createDatastore(t){const e=$h(t.databaseInfo.databaseId),n=function(t){return new Uh(t)}(t.databaseInfo);return function(t,e,n,i){return new Hh(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Kh(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>gu(this.syncEngine,t,0)),Oh.C()?new Oh:new Rh)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new du(t,e,n,i,r,s);return o&&(a.va=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ea(t);Wo("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Wh(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Iu{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ho.UNAUTHENTICATED,this.clientId=pa.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Wo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Wo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ia(na.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ra;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=uu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Su(t,e){t.asyncQueue.verifyOperationInProgress(),Wo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Dh(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Au(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Wo("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===na.FAILED_PRECONDITION||t.code===na.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Yo("Error using user provided cache. Falling back to memory cache: "+n),await Su(t,new Tu)}}else Wo("FirestoreClient","Using default OfflineComponentProvider"),await Su(t,new Tu);return t._offlineComponents}(t);Wo("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>lu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>lu(e.remoteStore,n))),t._onlineComponents=e}function Cu(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Wo("FirestoreClient","Using user provided OnlineComponentProvider"),await Au(t,t._uninitializedComponentsProvider._online)):(Wo("FirestoreClient","Using default OnlineComponentProvider"),await Au(t,new _u))),t._onlineComponents}(t).then((t=>t.syncEngine))}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Du(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const Nu=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ku(t,e,n){if(!n)throw new ia(na.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xu(t){if(!_a.isDocumentKey(t))throw new ia(na.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ru(t){if(_a.isDocumentKey(t))throw new ia(na.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Zo()}function Mu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ia(na.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ou(t);throw new ia(na.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ia(na.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ia(na.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new ia(na.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ia(na.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ia(na.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ia(na.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pu{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ia(na.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ia(na.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new oa;switch(t.type){case"firstParty":return new ha(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ia(na.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Nu.get(t);e&&(Wo("ComponentProvider","Removing Datastore"),Nu.delete(t),e.terminate())}(this),Promise.resolve()}}function Fu(t,e,n,i={}){var r;const s=(t=Mu(t,Pu))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ho.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pe(JSON.stringify({alg:"none",type:"JWT"})),pe(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ia(na.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ho(s)}t._authCredentials=new aa(new sa(e,n))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vu(this.firestore,t,this._query)}}class Uu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Uu(this.firestore,t,this._key)}}class Bu extends Vu{constructor(t,e,n){super(t,e,function(t){return new $l(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Uu(this.firestore,null,new _a(t))}withConverter(t){return new Bu(this.firestore,t,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $u{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new jh(this,"async_queue_retry"),this.su=()=>{const t=Bh();t&&Wo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=Bh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const e=Bh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise((()=>{}));const e=new ra;return this._u((()=>this.Xa&&this.ru?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Za.push(t),this.au())))}async au(){if(0!==this.Za.length){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!xa(t))throw t;Wo("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo((()=>this.au()))}}_u(t){const e=this.Ya.then((()=>(this.nu=!0,t().catch((t=>{this.tu=t,this.nu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw Xo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.nu=!1,t))))));return this.Ya=e,e}enqueueAfterDelay(t,e,n){this.ou(),this.iu.indexOf(t)>-1&&(e=0);const i=hu.createAndSchedule(this,t,e,n,(t=>this.uu(t)));return this.eu.push(i),i}ou(){this.tu&&Zo()}verifyOperationInProgress(){}async cu(){let t;do{t=this.Ya,await t}while(t!==this.Ya)}lu(t){for(const e of this.eu)if(e.timerId===t)return!0;return!1}hu(t){return this.cu().then((()=>{this.eu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.eu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.cu()}))}Pu(t){this.iu.push(t)}uu(t){const e=this.eu.indexOf(t);this.eu.splice(e,1)}}class ju extends Pu{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new $u,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zu(this),this._firestoreClient.terminate()}}function zu(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Za(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Du(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Iu(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qu(Ha.fromBase64String(t))}catch(t){throw new ia(na.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new qu(Ha.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ia(na.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ta(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gu{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ku{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ia(na.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ia(na.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ga(this._lat,t._lat)||ga(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Qu=/^__.*__$/;class Wu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Lc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mc(t,this.data,e,this.fieldTransforms)}}function Xu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Zo()}}class Yu{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Iu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Yu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Au:!1});return i.Ru(t),i}Vu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Au:!1});return i.Iu(),i}mu(t){return this.Eu({path:void 0,Au:!0})}fu(t){return lf(t,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Iu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ru(this.path.get(t))}Ru(t){if(0===t.length)throw this.fu("Document fields must not be empty");if(Xu(this.Tu)&&Qu.test(t))throw this.fu('Document fields cannot begin and end with "__"')}}class Ju{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||$h(t)}yu(t,e,n,i=!1){return new Yu({Tu:t,methodName:e,pu:n,path:Ta.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zu(t){const e=t._freezeSettings(),n=$h(t._databaseId);return new Ju(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tf(t,e,n,i,r,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,r);sf("Data must be an object, but it was:",o,i);const a=nf(i,o);let l,c;if(s.merge)l=new za(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=of(e,i,n);if(!o.contains(r))throw new ia(na.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);cf(t,r)||t.push(r)}l=new za(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Wu(new dl(a),l,c)}function ef(t,e){if(rf(t=Ae(t)))return sf("Unsupported field value:",e,t),nf(t,e);if(t instanceof Gu)return function(t,e){if(!Xu(e.Tu))throw e.fu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&4!==e.Tu)throw e.fu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=ef(r,e.mu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ae(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fc(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ya.fromDate(t);return{timestampValue:Kc(e.serializer,n)}}if(t instanceof ya){const n=new ya(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Kc(e.serializer,n)}}if(t instanceof Ku)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof qu)return{bytesValue:Qc(e.serializer,t._byteString)};if(t instanceof Uu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.fu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fu(`Unsupported field value: ${Ou(t)}`)}(t,e)}function nf(t,e){const n={};return Fa(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pa(t,((t,i)=>{const r=ef(i,e.du(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function rf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ya||t instanceof Ku||t instanceof qu||t instanceof Uu||t instanceof Gu)}function sf(t,e,n){if(!rf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ou(n);throw"an object"===i?e.fu(t+" a custom object"):e.fu(t+" "+i)}}function of(t,e,n){if((e=Ae(e))instanceof Hu)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(af)>=0)throw lf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hu(...e.split("."))._internalPath}catch(i){throw lf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw lf("Field path arguments must be of type string or ",t,!1,void 0,n)}const af=new RegExp("[~\\*/\\[\\]]");function lf(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new ia(na.INVALID_ARGUMENT,a+t+l)}function cf(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hf(t,e){const n=Mu(t.firestore,ju),i=function(t,e,...n){if(t=Ae(t),1===arguments.length&&(e=pa.V()),ku("doc","path",e),t instanceof Pu){const i=Ea.fromString(e,...n);return xu(i),new Uu(t,null,new _a(i))}{if(!(t instanceof Uu||t instanceof Bu))throw new ia(na.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ea.fromString(e,...n));return xu(i),new Uu(t.firestore,t instanceof Bu?t.converter:null,new _a(i))}}(t),r=function(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}(t.converter,e);return function(t,e){return function(t,e){const n=new ra;return t.asyncQueue.enqueueAndForget((async()=>pu(await Cu(t),e,n))),n.promise}(function(t){return t._firestoreClient||zu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[tf(Zu(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Ac.exists(!1))]).then((()=>i))}!function(t,e=!0){!function(t){Go=t}("10.5.0"),hn(new Ce("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new ju(new la(t.getProvider("auth-internal")),new fa(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ia(na.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),pn(qo,"4.3.0",t),pn(qo,"4.3.0","esm2017")}();const uf=function(t,e){const n="object"==typeof t?t:function(t=sn){const e=an.get(t);if(!e&&t===sn&&we())return dn();if(!e)throw un.create("no-app",{appName:t});return e}(),i="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=ve("firestore");t&&Fu(r,...t)}return r}(dn({apiKey:"AIzaSyB7oEQf-NoeZqsAdTLQAgWo84m3I1KnAZI",authDomain:"esplanade-46a07.firebaseapp.com",projectId:"esplanade-46a07",storageBucket:"esplanade-46a07.appspot.com",messagingSenderId:"803109975262",appId:"1:803109975262:web:f39f8e10520a6b6eb23e4f",measurementId:"1:803109975262:web:f39f8e10520a6b6eb23e4f"}));function ff(e){let n,s,u,f,d,p,g,m,y,v,w,E,b,T,_,I,S,A;return{c(){n=l("header"),n.innerHTML='<a href="index" class="svelte-nx1oav"><img src="/espWhite.png" alt="Your Logo" class="logo svelte-nx1oav"/></a>',s=c(),u=l("div"),u.textContent="Step into the future\n  with Esplanade AI. Revolutionise\n  your business operations and\n  experience unparalleled efficiency.",f=c(),d=l("div"),p=l("form"),p.innerHTML='<input type="text" name="fullname" placeholder="Full Name" required="" class="svelte-nx1oav"/> \n    <input type="tel" name="number" placeholder="Phone Number" required="" class="svelte-nx1oav"/> \n    <input type="email" name="email" placeholder="Email Address" required="" class="svelte-nx1oav"/> \n    <button type="submit" class="svelte-nx1oav">Submit</button>',g=c(),m=l("div"),m.innerHTML='<video id="bgVideo" autoplay="" muted="" loop="" playsinline="" poster="tealPurple169-2.png" class="svelte-nx1oav"><source src="/siteBGcont2.mp4" type="video/mp4" class="svelte-nx1oav"/>\n    Your browser does not support the video tag.</video>',y=c(),v=l("div"),v.innerHTML='<a href="https://www.instagram.com/esplanade.ai/" class="svelte-nx1oav"><img src="/Instagram.png" alt="Instagram" class="svelte-nx1oav"/></a> \n  <a href="https://www.linkedin.com/company/esplanade-ai" class="svelte-nx1oav"><img src="/linkedin.png" alt="Linkedin" class="svelte-nx1oav"/></a>',w=c(),E=l("div"),b=c(),T=l("div"),_=c(),I=l("footer"),I.innerHTML='<div class="footer-row svelte-nx1oav"><div class="footer-logo svelte-nx1oav"><img src="justLogoWhite.png" alt="Esplanade Logo" class="svelte-nx1oav"/></div> \n    <div class="address-contact svelte-nx1oav"><div class="svelte-nx1oav"><strong class="svelte-nx1oav">Address</strong> \n        <p class="svelte-nx1oav">Sydney, AUS</p></div> \n      <div class="svelte-nx1oav"><strong class="svelte-nx1oav">Contact</strong> \n        <p class="svelte-nx1oav">digital@esplanade.ai</p></div></div></div> \n\n  <div class="footer-divider svelte-nx1oav"></div> \n\n  <div class="footer-row svelte-nx1oav"><div class="svelte-nx1oav">© 2023 Esplanade.ai. All rights reserved.</div> \n    <div class="svelte-nx1oav"><a href="/terms-and-conditions" class="svelte-nx1oav">T&amp;Cs</a> \n      <a href="/privacy-policy" class="svelte-nx1oav">Privacy Policy</a></div></div>',h(n,"class","svelte-nx1oav"),h(u,"class","translucent-section centered-content large-text svelte-nx1oav"),h(p,"class","svelte-nx1oav"),h(d,"class","contact-form svelte-nx1oav"),h(m,"class","svelte-nx1oav"),h(v,"class","social-icons svelte-nx1oav"),h(E,"class","svelte-nx1oav"),h(T,"id","bpw-layout"),h(T,"class","svelte-nx1oav"),h(I,"class","svelte-nx1oav")},m(i,a){var l,c,h,C,D;o(i,n,a),o(i,s,a),o(i,u,a),o(i,f,a),o(i,d,a),function(t,e){t.appendChild(e)}(d,p),o(i,g,a),o(i,m,a),o(i,y,a),o(i,v,a),o(i,w,a),o(i,E,a),o(i,b,a),o(i,T,a),o(i,_,a),o(i,I,a),S||(A=[(D=e[1].call(null,u),D&&r(D.destroy)?D.destroy:t),(l=p,c="submit",h=e[0],l.addEventListener(c,h,C),()=>l.removeEventListener(c,h,C))],S=!0)},p:t,i:t,o:t,d(t){t&&a(n),t&&a(s),t&&a(u),t&&a(f),t&&a(d),t&&a(g),t&&a(m),t&&a(y),t&&a(v),t&&a(w),t&&a(E),t&&a(b),t&&a(T),t&&a(_),t&&a(I),S=!1,i(A)}}}function df(t){var e=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(r,s){function o(t){try{l(i.next(t))}catch(t){s(t)}}function a(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((i=i.apply(t,e||[])).next())}))};return[function(t){return e(this,void 0,void 0,(function*(){console.log("submit"),t.preventDefault();const e={fullname:t.target.fullname.value,number:t.target.number.value,email:t.target.email.value};console.log("data",e);try{console.log("try");const t=yield hf(function(t,e,...n){if(t=Ae(t),ku("collection","path",e),t instanceof Pu){const i=Ea.fromString(e,...n);return Ru(i),new Bu(t,null,i)}{if(!(t instanceof Uu||t instanceof Bu))throw new ia(na.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ea.fromString(e,...n));return Ru(i),new Bu(t.firestore,null,i)}}(uf,"contacts"),e);console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}try{const t=document.getElementById("userName").value;yield createAssistant(t)}catch(t){console.error("Error creating assistant")}}))},function(t){const e=t.innerText.trim().split(" "),n=Math.ceil(e.length/4),i=[];e.forEach(((t,r)=>{i.push(`<span style="opacity: 0">${t}</span>`),(r+1)%n==0&&r!==e.length-1&&i.push("<br>")})),t.innerHTML=i.join(" ");const r=[...t.children];Ut(r,{opacity:[0,1]},{duration:3,delay:Mt(.3)}),setTimeout((()=>{r.forEach((t=>{const e=t.textContent.trim();("unparalleled"===e||e.includes("efficiency"))&&Ut(t,{color:"#d28cd1"},{duration:1})}))}),650*(.3*e.length+3))}]}return new class extends D{constructor(t){super(),C(this,t,df,ff,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
