var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,n,i){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let y;function v(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const E=[],b=[];let T=[];const _=[],S=Promise.resolve();let I=!1;function A(t){T.push(t)}const C=new Set;let D=0;function N(){if(0!==D)return;const t=y;do{try{for(;D<E.length;){const t=E[D];D++,v(t),k(t.$$)}}catch(t){throw E.length=0,D=0,t}for(v(null),E.length=0,D=0;b.length;)b.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];C.has(e)||(C.add(e),e())}T.length=0}while(E.length);for(;_.length;)_.pop()();I=!1,C.clear(),v(t)}function k(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const x=new Set;let R;function O(t,e){t&&t.i&&(x.delete(t),t.i(e))}function M(t,e){t.d(1),e.delete(t.key)}function L(t,n,s,o){const{fragment:a,after_update:l}=t.$$;a&&a.m(n,s),o||A((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):i(n),t.$$.on_mount=[]})),l.forEach(A)}function P(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];T.forEach((i=>-1===t.indexOf(i)?e.push(i):n.push(i))),n.forEach((t=>t())),T=e}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(E.push(t),I||(I=!0,S.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,r,s,o,a,l,h,u=[-1]){const f=y;v(e);const d=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:r.target||f.$$.root};h&&h(d.root);let p=!1;if(d.ctx=s?s(e,r.props||{},((t,n,...i)=>{const r=i.length?i[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&F(e,t)),n})):[],d.update(),p=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();r.intro&&O(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),N()}v(f)}class U{$destroy(){P(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const t=i.indexOf(n);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const $=(t,e,n)=>Math.min(Math.max(n,t),e),B={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},j=t=>"number"==typeof t,q=t=>Array.isArray(t)&&!j(t[0]),z=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};const H=(t,e,n)=>-n*t+n*e+t,G=()=>{},K=t=>t,Q=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function W(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Q(0,e,i);t.push(H(n,1,r))}}function X(t,e=function(t){const e=[0];return W(e,t-1),e}(t.length),n=K){const i=t.length,r=i-e.length;return r>0&&W(e,r),r=>{let s=0;for(;s<i-2&&!(r<e[s+1]);s++);let o=$(0,1,Q(e[s],e[s+1],r));const a=function(t,e){return q(t)?t[z(0,t.length,e)]:t}(n,s);return o=a(o),H(t[s],t[s+1],o)}}const Y=t=>Array.isArray(t)&&j(t[0]),J=t=>"object"==typeof t&&Boolean(t.createAnimation),Z=t=>"function"==typeof t,tt=t=>"string"==typeof t,et={ms:t=>1e3*t,s:t=>t/1e3},nt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,it=1e-7,rt=12;function st(t,e,n,i){if(t===e&&n===i)return K;const r=e=>function(t,e,n,i,r){let s,o,a=0;do{o=e+(n-e)/2,s=nt(o,i,r)-t,s>0?n=o:e=o}while(Math.abs(s)>it&&++a<rt);return o}(e,0,1,t,n);return t=>0===t||1===t?t:nt(r(t),e,i)}const ot=(t,e="end")=>n=>{const i=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,r="end"===e?Math.floor(i):Math.ceil(i);return $(0,1,r/t)},at={ease:st(.25,.1,.25,1),"ease-in":st(.42,0,1,1),"ease-in-out":st(.42,0,.58,1),"ease-out":st(0,0,.58,1)},lt=/\((.*?)\)/;function ct(t){if(Z(t))return t;if(Y(t))return st(...t);if(at[t])return at[t];if(t.startsWith("steps")){const e=lt.exec(t);if(e){const t=e[1].split(",");return ot(parseFloat(t[0]),t[1].trim())}}return K}class ht{constructor(t,e=[0,1],{easing:n,duration:i=B.duration,delay:r=B.delay,endDelay:s=B.endDelay,repeat:o=B.repeat,offset:a,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=K,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||B.easing,J(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,i=t.duration||i}this.repeat=o,this.easing=q(n)?K:ct(n),this.updateDuration(i);const c=X(e,a,q(n)?n.map(ct):K);this.tick=e=>{var n;let i=0;i=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=i,i/=1e3,i=Math.max(i-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(i=this.totalDuration);const o=i/this.duration;let a=Math.floor(o),h=o%1;!h&&o>=1&&(h=1),1===h&&a--;const u=a%2;("reverse"===l||"alternate"===l&&u||"alternate-reverse"===l&&!u)&&(h=1-h);const f=i>=this.totalDuration?1:Math.min(h,1),d=c(this.easing(f));t(d);void 0===this.pauseTime&&("finished"===this.playState||i>=this.totalDuration+s)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,d)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class ut{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const ft=new WeakMap;function dt(t){return ft.has(t)||ft.set(t,{transforms:[],values:new Map}),ft.get(t)}const pt=["","X","Y","Z"],gt={x:"translateX",y:"translateY",z:"translateZ"},mt={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},yt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:mt,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:K},skew:mt},vt=new Map,wt=t=>`--motion-${t}`,Et=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{pt.forEach((e=>{Et.push(t+e),vt.set(wt(t+e),yt[t])}))}));const bt=(t,e)=>Et.indexOf(t)-Et.indexOf(e),Tt=new Set(Et),_t=t=>Tt.has(t),St=(t,e)=>{gt[e]&&(e=gt[e]);const{transforms:n}=dt(t);var i,r;r=e,-1===(i=n).indexOf(r)&&i.push(r),t.style.transform=It(n)},It=t=>t.sort(bt).reduce(At,"").trim(),At=(t,e)=>`${t} ${e}(var(${wt(e)}))`,Ct=t=>t.startsWith("--"),Dt=new Set;const Nt=(t,e)=>document.createElement("div").animate(t,e),kt={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Nt({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(Nt({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{Nt({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},xt={},Rt={};for(const t in kt)Rt[t]=()=>(void 0===xt[t]&&(xt[t]=kt[t]()),xt[t]);const Ot=(t,e)=>Z(t)?Rt.linearEasing()?`linear(${((t,e)=>{let n="";const i=Math.round(e/.015);for(let e=0;e<i;e++)n+=t(Q(0,i-1,e))+", ";return n.substring(0,n.length-2)})(t,e)})`:B.easing:Y(t)?Mt(t):t,Mt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;const Lt=t=>Array.isArray(t)?t:[t];function Pt(t){return gt[t]&&(t=gt[t]),_t(t)?wt(t):t}const Ft={get:(t,e)=>{e=Pt(e);let n=Ct(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=vt.get(e);t&&(n=t.initialValue)}return n},set:(t,e,n)=>{e=Pt(e),Ct(e)?t.style.setProperty(e,n):t.style[e]=n}};function Vt(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}function Ut(t,e,n,i={},r){const s=window.__MOTION_DEV_TOOLS_RECORD,o=!1!==i.record&&s;let a,{duration:l=B.duration,delay:c=B.delay,endDelay:h=B.endDelay,repeat:u=B.repeat,easing:f=B.easing,persist:d=!1,direction:p,offset:g,allowWebkitAcceleration:m=!1}=i;const y=dt(t),v=_t(e);let w=Rt.waapi();v&&St(t,e);const E=Pt(e),b=function(t,e){return t.has(e)||t.set(e,new ut),t.get(e)}(y.values,E),T=vt.get(E);return Vt(b.animation,!(J(f)&&b.generator)&&!1!==i.record),()=>{const y=()=>{var e,n;return null!==(n=null!==(e=Ft.get(t,E))&&void 0!==e?e:null==T?void 0:T.initialValue)&&void 0!==n?n:0};let _=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}(Lt(n),y);const S=function(t,e){var n;let i=(null==e?void 0:e.toDefaultUnit)||K;const r=t[t.length-1];if(tt(r)){const t=(null===(n=r.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(i=e=>e+t)}return i}(_,T);if(J(f)){const t=f.createAnimation(_,"opacity"!==e,y,E,b);f=t.easing,_=t.keyframes||_,l=t.duration||l}if(Ct(E)&&(Rt.cssRegisterProperty()?function(t){if(!Dt.has(t)){Dt.add(t);try{const{syntax:e,initialValue:n}=vt.has(t)?vt.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(E):w=!1),v&&!Rt.linearEasing()&&(Z(f)||q(f)&&f.some(Z))&&(w=!1),w){T&&(_=_.map((t=>j(t)?T.toDefaultUnit(t):t))),1!==_.length||Rt.partialKeyframes()&&!o||_.unshift(y());const e={delay:et.ms(c),duration:et.ms(l),endDelay:et.ms(h),easing:q(f)?void 0:Ot(f,l),direction:p,iterations:u+1,fill:"both"};a=t.animate({[E]:_,offset:g,easing:q(f)?f.map((t=>Ot(t,l))):void 0},e),a.finished||(a.finished=new Promise(((t,e)=>{a.onfinish=t,a.oncancel=e})));const n=_[_.length-1];a.finished.then((()=>{d||(Ft.set(t,E,n),a.cancel())})).catch(G),m||(a.playbackRate=1.000001)}else if(r&&v)_=_.map((t=>"string"==typeof t?parseFloat(t):t)),1===_.length&&_.unshift(parseFloat(y())),a=new r((e=>{Ft.set(t,E,S?S(e):e)}),_,Object.assign(Object.assign({},i),{duration:l,easing:f}));else{const e=_[_.length-1];Ft.set(t,E,T&&j(e)?T.toDefaultUnit(e):e)}return o&&s(t,e,_,{duration:l,delay:c,easing:f,repeat:u,offset:g},"motion-one"),b.setAnimation(a),a}}const $t=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);const Bt=t=>t(),jt=(t,e,n=B.duration)=>new Proxy({animations:t.map(Bt).filter(Boolean),duration:n,options:e},qt),qt={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return et.s((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(zt)).catch(G)),t.finished;case"stop":return()=>{t.animations.forEach((t=>Vt(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=et.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},zt=t=>t.finished;function Ht(t=.1,{start:e=0,from:n=0,easing:i}={}){return(r,s)=>{const o=j(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,s),a=Math.abs(o-r);let l=t*a;if(i){const e=s*t;l=ct(i)(l/e)*e}return e+l}}function Gt(t,e,n){return Z(t)?t(e,n):t}const Kt=(Qt=ht,function(t,e,n={}){const i=(t=function(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(t)).length,r=[];for(let s=0;s<i;s++){const o=t[s];for(const t in e){const a=$t(n,t);a.delay=Gt(a.delay,s,i);const l=Ut(o,t,e[t],a,Qt);r.push(l)}}return jt(r,n,n.duration)});var Qt;function Wt(t,e={}){return jt([()=>{const n=new ht(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function Xt(t,e,n){return(Z(t)?Wt:Kt)(t,e,n)}
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
     */const Yt=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},Jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(u=64)),i.push(n[c],n[h],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new Zt;const l=r<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const te=function(t){return function(t){const e=Yt(t);return Jt.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const ee=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ne=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return Jt.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},ie=()=>{try{return ee()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||ne()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},re=t=>{const e=(t=>{var e,n;return null===(n=null===(e=ie())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},se=()=>{var t;return null===(t=ie())||void 0===t?void 0:t.config};
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
class oe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */class ae extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,le.prototype.create)}}class le{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(ce,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ae(i,o,n)}}const ce=/\{\$([^}]+)}/g;function he(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(ue(n)&&ue(s)){if(!he(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function ue(t){return null!==t&&"object"==typeof t}
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
     */function fe(t){return t&&t._delegate?t._delegate:t}class de{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const pe="[DEFAULT]";
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
     */class ge{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new oe;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:pe})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=pe){return this.instances.has(t)}getOptions(t=pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===pe?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=pe){return this.component?this.component.multipleInstances?t:pe:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class me{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ge(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var ye;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(ye||(ye={}));const ve={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},we=ye.INFO,Ee={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},be=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Ee[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Te{constructor(t){this.name=t,this._logLevel=we,this._logHandler=be,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ye))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ve[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...t),this._logHandler(this,ye.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...t),this._logHandler(this,ye.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...t),this._logHandler(this,ye.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...t),this._logHandler(this,ye.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...t),this._logHandler(this,ye.ERROR,...t)}}const _e=(t,e)=>e.some((e=>t instanceof e));let Se,Ie;const Ae=new WeakMap,Ce=new WeakMap,De=new WeakMap,Ne=new WeakMap,ke=new WeakMap;let xe={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Ce.get(t);if("objectStoreNames"===e)return t.objectStoreNames||De.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Re(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ie||(Ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Le(this),e),Me(Ae.get(this))}:function(...e){return Me(t.apply(Le(this),e))}:function(e,...n){const i=t.call(Le(this),e,...n);return De.set(i,e.sort?e.sort():[e]),Me(i)}}function Oe(t){return"function"==typeof t?Re(t):(t instanceof IDBTransaction&&function(t){if(Ce.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));Ce.set(t,e)}(t),_e(t,Se||(Se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,xe):t)}function Me(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Me(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Ae.set(e,t)})).catch((()=>{})),ke.set(e,t),e}(t);if(Ne.has(t))return Ne.get(t);const e=Oe(t);return e!==t&&(Ne.set(t,e),ke.set(e,t)),e}const Le=t=>ke.get(t);const Pe=["get","getKey","getAll","getAllKeys","count"],Fe=["put","add","delete","clear"],Ve=new Map;function Ue(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Ve.get(e))return Ve.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Fe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Pe.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Ve.set(e,s),s}xe=(t=>({...t,get:(e,n,i)=>Ue(e,n)||t.get(e,n,i),has:(e,n)=>!!Ue(e,n)||t.has(e,n)}))(xe);
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
class $e{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Be="@firebase/app",je="0.9.20",qe=new Te("@firebase/app"),ze="[DEFAULT]",He={[Be]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ge=new Map,Ke=new Map;function Qe(t,e){try{t.container.addComponent(e)}catch(n){qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function We(t){const e=t.name;if(Ke.has(e))return qe.debug(`There were multiple attempts to register component ${e}.`),!1;Ke.set(e,t);for(const e of Ge.values())Qe(e,t);return!0}
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
const Xe=new le("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ye{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new de("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xe.create("app-deleted",{appName:this._name})}}
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
     */function Je(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:ze,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Xe.create("bad-app-name",{appName:String(r)});if(n||(n=se()),!n)throw Xe.create("no-options");const s=Ge.get(r);if(s){if(he(n,s.options)&&he(i,s.config))return s;throw Xe.create("duplicate-app",{appName:r})}const o=new me(r);for(const t of Ke.values())o.addComponent(t);const a=new Ye(n,i,o);return Ge.set(r,a),a}function Ze(t,e,n){var i;let r=null!==(i=He[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void qe.warn(t.join(" "))}We(new de(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
     */const tn="firebase-heartbeat-database",en=1,nn="firebase-heartbeat-store";let rn=null;function sn(){return rn||(rn=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Me(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Me(o.result),t.oldVersion,t.newVersion,Me(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(tn,en,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(nn)}}).catch((t=>{throw Xe.create("idb-open",{originalErrorMessage:t.message})}))),rn}async function on(t,e){try{const n=(await sn()).transaction(nn,"readwrite"),i=n.objectStore(nn);await i.put(e,an(t)),await n.done}catch(t){if(t instanceof ae)qe.warn(t.message);else{const e=Xe.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});qe.warn(e.message)}}}function an(t){return`${t.name}!${t.options.appId}`}
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
     */class ln{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new hn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=cn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=cn(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),un(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),un(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=te(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cn(){return(new Date).toISOString().substring(0,10)}class hn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await sn();return await e.transaction(nn).objectStore(nn).get(an(t))}catch(t){if(t instanceof ae)qe.warn(t.message);else{const e=Xe.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});qe.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return on(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return on(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function un(t){return te(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var fn;fn="",We(new de("platform-logger",(t=>new $e(t)),"PRIVATE")),We(new de("heartbeat",(t=>new ln(t)),"PRIVATE")),Ze(Be,je,fn),Ze(Be,je,"esm2017"),Ze("fire-js","");
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
Ze("firebase","10.5.0","app");var dn,pn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gn=gn||{},mn=pn||self;function yn(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function vn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var wn="closure_uid_"+(1e9*Math.random()>>>0),En=0;function bn(t,e,n){return t.call.apply(t.bind,arguments)}function Tn(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _n(t,e,n){return(_n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?bn:Tn).apply(null,arguments)}function Sn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function In(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function An(){this.s=this.s,this.o=this.o}An.prototype.s=!1,An.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,wn)&&t[wn]||(t[wn]=++En))},An.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Nn(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(yn(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function kn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kn.prototype.h=function(){this.defaultPrevented=!0};var xn=function(){if(!mn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{mn.addEventListener("test",(()=>{}),e),mn.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function Rn(t){return/^[\s\xa0]*$/.test(t)}function On(){var t=mn.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return-1!=On().indexOf(t)}function Ln(t){return Ln[" "](t),t}Ln[" "]=function(){};var Pn,Fn,Vn,Un=Mn("Opera"),$n=Mn("Trident")||Mn("MSIE"),Bn=Mn("Edge"),jn=Bn||$n,qn=Mn("Gecko")&&!(-1!=On().toLowerCase().indexOf("webkit")&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),zn=-1!=On().toLowerCase().indexOf("webkit")&&!Mn("Edge");function Hn(){var t=mn.document;return t?t.documentMode:void 0}t:{var Gn="",Kn=(Fn=On(),qn?/rv:([^\);]+)(\)|;)/.exec(Fn):Bn?/Edge\/([\d\.]+)/.exec(Fn):$n?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Fn):zn?/WebKit\/(\S+)/.exec(Fn):Un?/(?:Version)[ \/]?(\S+)/.exec(Fn):void 0);if(Kn&&(Gn=Kn?Kn[1]:""),$n){var Qn=Hn();if(null!=Qn&&Qn>parseFloat(Gn)){Pn=String(Qn);break t}}Pn=Gn}if(mn.document&&$n){var Wn=Hn();Vn=Wn||(parseInt(Pn,10)||void 0)}else Vn=void 0;var Xn=Vn;function Yn(t,e){if(kn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qn){t:{try{Ln(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Jn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yn.$.h.call(this)}}In(Yn,kn);var Jn={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),ti=0;function ei(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++ti,this.fa=this.ia=!1}function ni(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ii(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ri(t){const e={};for(const n in t)e[n]=t[n];return e}const si="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oi(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<si.length;e++)n=si[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ai(t){this.src=t,this.g={},this.h=0}function li(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Cn(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ni(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ci(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}ai.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ci(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new ei(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var hi="closure_lm_"+(1e6*Math.random()|0),ui={};function fi(t,e,n,i,r){if(i&&i.once)return pi(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fi(t,e[s],n,i,r);return null}return n=bi(n),t&&t[Zn]?t.O(e,n,vn(i)?!!i.capture:!!i,r):di(t,e,n,!1,i,r)}function di(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=vn(r)?!!r.capture:!!r,a=wi(t);if(a||(t[hi]=a=new ai(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=vi;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)xn||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(yi(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function pi(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pi(t,e[s],n,i,r);return null}return n=bi(n),t&&t[Zn]?t.P(e,n,vn(i)?!!i.capture:!!i,r):di(t,e,n,!0,i,r)}function gi(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)gi(t,e[s],n,i,r);else i=vn(i)?!!i.capture:!!i,n=bi(n),t&&t[Zn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ci(s=t.g[e],n,i,r))&&(ni(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=wi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ci(e,n,i,r)),(n=-1<t?e[t]:null)&&mi(n))}function mi(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Zn])li(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(yi(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=wi(e))?(li(n,t),0==n.h&&(n.src=null,e[hi]=null)):ni(t)}}}function yi(t){return t in ui?ui[t]:ui[t]="on"+t}function vi(t,e){if(t.fa)t=!0;else{e=new Yn(e,this);var n=t.listener,i=t.la||t.src;t.ia&&mi(t),t=n.call(i,e)}return t}function wi(t){return(t=t[hi])instanceof ai?t:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function bi(t){return"function"==typeof t?t:(t[Ei]||(t[Ei]=function(e){return t.handleEvent(e)}),t[Ei])}function Ti(){An.call(this),this.i=new ai(this),this.S=this,this.J=null}function _i(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new kn(e,t);else if(e instanceof kn)e.target=e.target||t;else{var r=e;oi(e=new kn(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Si(o,i,!0,e)&&r}if(r=Si(o=e.g=t,i,!0,e)&&r,r=Si(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Si(o=e.g=n[s],i,!1,e)&&r}function Si(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&li(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}In(Ti,An),Ti.prototype[Zn]=!0,Ti.prototype.removeEventListener=function(t,e,n,i){gi(this,t,e,n,i)},Ti.prototype.N=function(){if(Ti.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ni(n[i]);delete e.g[t],e.h--}}this.J=null},Ti.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ti.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Ii=mn.JSON.stringify;function Ai(){var t=Oi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ci=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Di),(t=>t.reset()));class Di{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ni(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ki(t){mn.setTimeout((()=>{throw t}),0)}let xi,Ri=!1,Oi=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ci.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Mi=()=>{const t=mn.Promise.resolve(void 0);xi=()=>{t.then(Li)}};var Li=()=>{for(var t;t=Ai();){try{t.h.call(t.g)}catch(t){ki(t)}var e=Ci;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ri=!1};function Pi(t,e){Ti.call(this),this.h=t||1,this.g=e||mn,this.j=_n(this.qb,this),this.l=Date.now()}function Fi(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Vi(t,e,n){if("function"==typeof t)n&&(t=_n(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_n(t.handleEvent,t)}return 2147483647<Number(e)?-1:mn.setTimeout(t,e||0)}function Ui(t){t.g=Vi((()=>{t.g=null,t.i&&(t.i=!1,Ui(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}In(Pi,Ti),(dn=Pi.prototype).ga=!1,dn.T=null,dn.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_i(this,"tick"),this.ga&&(Fi(this),this.start()))}},dn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},dn.N=function(){Pi.$.N.call(this),Fi(this),delete this.g};class $i extends An{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ui(this)}N(){super.N(),this.g&&(mn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(t){An.call(this),this.h=t,this.g={}}In(Bi,An);var ji=[];function qi(t,e,n,i){Array.isArray(n)||(n&&(ji[0]=n.toString()),n=ji);for(var r=0;r<n.length;r++){var s=fi(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function zi(t){ii(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mi(t)}),t),t.g={}}function Hi(){this.g=!0}function Gi(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ii(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Bi.prototype.N=function(){Bi.$.N.call(this),zi(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Hi.prototype.Ea=function(){this.g=!1},Hi.prototype.info=function(){};var Ki={},Qi=null;function Wi(){return Qi=Qi||new Ti}function Xi(t){kn.call(this,Ki.Ta,t)}function Yi(t){const e=Wi();_i(e,new Xi(e))}function Ji(t,e){kn.call(this,Ki.STAT_EVENT,t),this.stat=e}function Zi(t){const e=Wi();_i(e,new Ji(e,t))}function tr(t,e){kn.call(this,Ki.Ua,t),this.size=e}function er(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return mn.setTimeout((function(){t()}),e)}Ki.Ta="serverreachability",In(Xi,kn),Ki.STAT_EVENT="statevent",In(Ji,kn),Ki.Ua="timingevent",In(tr,kn);var nr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ir={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rr(){}function sr(t){return t.h||(t.h=t.i())}function or(){}rr.prototype.h=null;var ar,lr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cr(){kn.call(this,"d")}function hr(){kn.call(this,"c")}function ur(){}function fr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Bi(this),this.P=pr,t=jn?125:void 0,this.V=new Pi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dr}function dr(){this.i=null,this.g="",this.h=!1}In(cr,kn),In(hr,kn),In(ur,rr),ur.prototype.g=function(){return new XMLHttpRequest},ur.prototype.i=function(){return{}},ar=new ur;var pr=45e3,gr={},mr={};function yr(t,e,n){t.L=1,t.v=Pr(xr(e)),t.s=n,t.S=!0,vr(t,null)}function vr(t,e){t.G=Date.now(),Tr(t),t.A=xr(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Wr(n.i,"t",i),t.C=0,n=t.l.J,t.h=new dr,t.g=Ws(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $i(_n(t.Pa,t,t.g),t.O)),qi(t.U,t.g,"readystatechange",t.nb),e=t.I?ri(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yi(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function wr(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Er(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=br(t,n),i==mr){4==e&&(t.o=4,Zi(14),r=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}if(i==gr){t.o=4,Zi(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Gi(t.j,t.m,i,null),Cr(t,i)}wr(t)&&i!=mr&&i!=gr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zi(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bs(e),e.M=!0,Zi(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),Ar(t),Ir(t))}function br(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?mr:(n=Number(e.substring(n,i)),isNaN(n)?gr:(i+=1)+n>e.length?mr:(e=e.slice(i,i+n),t.C=i+n,e))}function Tr(t){t.Y=Date.now()+t.P,_r(t,t.P)}function _r(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=er(_n(t.lb,t),e)}function Sr(t){t.B&&(mn.clearTimeout(t.B),t.B=null)}function Ir(t){0==t.l.H||t.J||zs(t.l,t)}function Ar(t){Sr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Fi(t.V),zi(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cr(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||ns(n.i,t)))if(!t.K&&ns(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;qs(n),Os(n)}$s(n),Zi(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=er(_n(n.ib,n),6e3));if(1>=es(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Gs(n,11)}else if((t.K||n.g==t)&&qs(n),!Rn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(is(s,s.h),s.h=null))}if(i.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Lr(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Qs(i,i.J?i.pa:null,i.Y),o.K){rs(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Sr(a),Tr(a)),i.g=o}else Us(i);0<n.j.length&&Ls(n)}else"stop"!=c[0]&&"close"!=c[0]||Gs(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Gs(n,7):Rs(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Yi()}catch(t){}}function Dr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(yn(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(yn(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(yn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(dn=fr.prototype).setTimeout=function(t){this.P=t},dn.nb=function(t){t=t.target;const e=this.M;e&&3==As(t)?e.l():this.Pa(t)},dn.Pa=function(t){try{if(t==this.g)t:{const h=As(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||jn||this.g&&(this.h.h||this.g.ja()||Cs(this.g)))){this.J||4!=h||7==e||Yi(),Sr(this);var n=this.g.da();this.ca=n;e:if(wr(this)){var i=Cs(this.g);t="";var r=i.length,s=4==As(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ar(this),Ir(this);var o="";break e}this.h.i=new mn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Zi(12),Ar(this),Ir(this);break t}Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cr(this,n)}this.S?(Er(this,h,o),jn&&this.i&&3==h&&(qi(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,o,null),Cr(this,o)),4==h&&Ar(this),this.i&&!this.J&&(4==h?zs(this.l,this):(this.i=!1,Tr(this)))}else(function(t){const e={};t=(t.g&&2<=As(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(Rn(t[i]))continue;var n=Ni(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zi(12)):(this.o=0,Zi(13)),Ar(this),Ir(this)}}}catch(t){}},dn.mb=function(){if(this.g){var t=As(this.g),e=this.g.ja();this.C<e.length&&(Sr(this),Er(this,t,e),this.i&&4!=t&&Tr(this))}},dn.cancel=function(){this.J=!0,Ar(this)},dn.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Yi(),Zi(17)),Ar(this),this.o=2,Ir(this)):_r(this,this.Y-t)};var Nr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=t.h,Rr(this,t.j),this.s=t.s,this.g=t.g,Or(this,t.m),this.l=t.l;var e=t.i,n=new Hr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mr(this,n),this.o=t.o}else t&&(e=String(t).match(Nr))?(this.h=!1,Rr(this,e[1]||"",!0),this.s=Fr(e[2]||""),this.g=Fr(e[3]||"",!0),Or(this,e[4]),this.l=Fr(e[5]||"",!0),Mr(this,e[6]||"",!0),this.o=Fr(e[7]||"")):(this.h=!1,this.i=new Hr(null,this.h))}function xr(t){return new kr(t)}function Rr(t,e,n){t.j=n?Fr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Or(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mr(t,e,n){e instanceof Hr?(t.i=e,function(t,e){e&&!t.j&&(Gr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Kr(this,e),Wr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Vr(e,qr)),t.i=new Hr(e,t.h))}function Lr(t,e,n){t.i.set(e,n)}function Pr(t){return Lr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ur),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ur(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vr(e,$r,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Vr(e,$r,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Vr(n,"/"==n.charAt(0)?jr:Br,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vr(n,zr)),t.join("")};var $r=/[#\/\?@]/g,Br=/[#\?:]/g,jr=/[#\?]/g,qr=/[#\?@]/g,zr=/#/g;function Hr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Kr(t,e){Gr(t),e=Xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qr(t,e){return Gr(t),e=Xr(t,e),t.g.has(e)}function Wr(t,e,n){Kr(t,e),0<n.length&&(t.i=null,t.g.set(Xr(t,e),Dn(n)),t.h+=n.length)}function Xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(dn=Hr.prototype).add=function(t,e){Gr(this),this.i=null,t=Xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},dn.forEach=function(t,e){Gr(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},dn.ta=function(){Gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},dn.Z=function(t){Gr(this);let e=[];if("string"==typeof t)Qr(this,t)&&(e=e.concat(this.g.get(Xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},dn.set=function(t,e){return Gr(this),this.i=null,Qr(this,t=Xr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},dn.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},dn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var Yr=class{constructor(t,e){this.g=t,this.map=e}};function Jr(t){this.l=t||Zr,mn.PerformanceNavigationTiming?t=0<(t=mn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(mn.g&&mn.g.Ka&&mn.g.Ka()&&mn.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zr=10;function ts(t){return!!t.h||!!t.g&&t.g.size>=t.j}function es(t){return t.h?1:t.g?t.g.size:0}function ns(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function is(t,e){t.g?t.g.add(e):t.h=e}function rs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ss(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dn(t.i)}Jr.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var os=class{stringify(t){return mn.JSON.stringify(t,void 0)}parse(t){return mn.JSON.parse(t,void 0)}};function as(){this.g=new os}function ls(t,e,n){const i=n||"";try{Dr(t,(function(t,n){let r=t;vn(t)&&(r=Ii(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function cs(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function hs(t){this.l=t.ec||null,this.j=t.ob||!1}function us(t,e){Ti.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=fs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In(hs,rr),hs.prototype.g=function(){return new us(this.l,this.j)},hs.prototype.i=function(t){return function(){return t}}({}),In(us,Ti);var fs=0;function ds(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gs(t)}function gs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(dn=us.prototype).open=function(t,e){if(this.readyState!=fs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gs(this)},dn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||mn).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},dn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ps(this)),this.readyState=fs},dn.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==mn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ds(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},dn.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ps(this):gs(this),3==this.readyState&&ds(this)}},dn.Za=function(t){this.g&&(this.response=this.responseText=t,ps(this))},dn.Ya=function(t){this.g&&(this.response=t,ps(this))},dn.ka=function(){this.g&&ps(this)},dn.setRequestHeader=function(t,e){this.v.append(t,e)},dn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},dn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(us.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ms=mn.JSON.parse;function ys(t){Ti.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vs,this.L=this.M=!1}In(ys,Ti);var vs="",ws=/^https?$/i,Es=["POST","PUT"];function bs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ts(t),Ss(t)}function Ts(t){t.F||(t.F=!0,_i(t,"complete"),_i(t,"error"))}function _s(t){if(t.h&&void 0!==gn&&(!t.C[1]||4!=As(t)||2!=t.da()))if(t.v&&4==As(t))Vi(t.La,0,t);else if(_i(t,"readystatechange"),4==As(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(Nr)[1]||null;!r&&mn.self&&mn.self.location&&(r=mn.self.location.protocol.slice(0,-1)),i=!ws.test(r?r.toLowerCase():"")}n=i}if(n)_i(t,"complete"),_i(t,"success");else{t.m=6;try{var s=2<As(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",Ts(t)}}finally{Ss(t)}}}function Ss(t,e){if(t.g){Is(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_i(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Is(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(mn.clearTimeout(t.A),t.A=null)}function As(t){return t.g?t.g.readyState:0}function Cs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ds(t){let e="";return ii(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ns(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ds(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Lr(t,e,n))}function ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xs(t){this.Ga=0,this.j=[],this.l=new Hi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ks("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ks("baseRetryDelayMs",5e3,t),this.hb=ks("retryDelaySeedMs",1e4,t),this.eb=ks("forwardChannelMaxRetries",2,t),this.xa=ks("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Jr(t&&t.concurrentRequestLimit),this.Ja=new as,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Rs(t){if(Ms(t),3==t.H){var e=t.W++,n=xr(t.I);if(Lr(n,"SID",t.K),Lr(n,"RID",e),Lr(n,"TYPE","terminate"),Fs(t,n),(e=new fr(t,t.l,e)).L=2,e.v=Pr(xr(n)),n=!1,mn.navigator&&mn.navigator.sendBeacon)try{n=mn.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&mn.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ws(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Tr(e)}Ks(t)}function Os(t){t.g&&(Bs(t),t.g.cancel(),t.g=null)}function Ms(t){Os(t),t.u&&(mn.clearTimeout(t.u),t.u=null),qs(t),t.i.cancel(),t.m&&("number"==typeof t.m&&mn.clearTimeout(t.m),t.m=null)}function Ls(t){if(!ts(t.i)&&!t.m){t.m=!0;var e=t.Na;xi||Mi(),Ri||(xi(),Ri=!0),Oi.add(e,t),t.C=0}}function Ps(t,e){var n;n=e?e.m:t.W++;const i=xr(t.I);Lr(i,"SID",t.K),Lr(i,"RID",n),Lr(i,"AID",t.V),Fs(t,i),t.o&&t.s&&Ns(i,t.o,t.s),n=new fr(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Vs(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),is(t.i,n),yr(n,i,e)}function Fs(t,e){t.na&&ii(t.na,(function(t,n){Lr(e,n,t)})),t.h&&Dr({},(function(t,n){Lr(e,n,t)}))}function Vs(t,e,n){n=Math.min(t.j.length,n);var i=t.h?_n(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{ls(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Us(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xi||Mi(),Ri||(xi(),Ri=!0),Oi.add(e,t),t.A=0}}function $s(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=er(_n(t.Ma,t),Hs(t,t.A)),t.A++,!0)}function Bs(t){null!=t.B&&(mn.clearTimeout(t.B),t.B=null)}function js(t){t.g=new fr(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=xr(t.wa);Lr(e,"RID","rpc"),Lr(e,"SID",t.K),Lr(e,"AID",t.V),Lr(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Lr(e,"TO",t.qa),Lr(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&Ns(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Pr(xr(e)),n.s=null,n.S=!0,vr(n,t)}function qs(t){null!=t.v&&(mn.clearTimeout(t.v),t.v=null)}function zs(t,e){var n=null;if(t.g==e){qs(t),Bs(t),t.g=null;var i=2}else{if(!ns(t.i,e))return;n=e.F,rs(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;_i(i=Wi(),new tr(i,n)),Ls(t)}else Us(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(es(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=er(_n(t.Na,t,e),Hs(t,t.C)),t.C++,0)))}(t,e)||2==i&&$s(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Gs(t,5);break;case 4:Gs(t,10);break;case 3:Gs(t,6);break;default:Gs(t,2)}}function Hs(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Gs(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=_n(t.pb,t);n||(n=new kr("//www.google.com/images/cleardot.gif"),mn.location&&"http"==mn.location.protocol||Rr(n,"https"),Pr(n)),function(t,e){const n=new Hi;if(mn.Image){const i=new Image;i.onload=Sn(cs,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Sn(cs,n,i,"TestLoadImage: error",!1,e),i.onabort=Sn(cs,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Sn(cs,n,i,"TestLoadImage: timeout",!1,e),mn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Zi(2);t.H=0,t.h&&t.h.za(e),Ks(t),Ms(t)}function Ks(t){if(t.H=0,t.ma=[],t.h){const e=ss(t.i);0==e.length&&0==t.j.length||(Nn(t.ma,e),Nn(t.ma,t.j),t.i.i.length=0,Dn(t.j),t.j.length=0),t.h.ya()}}function Qs(t,e,n){var i=n instanceof kr?xr(n):new kr(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Or(i,i.m);else{var r=mn.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new kr(null);i&&Rr(s,i),e&&(s.g=e),r&&Or(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Lr(i,n,e),Lr(i,"VER",t.ra),Fs(t,i),i}function Ws(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new ys(new hs({ob:!0})):new ys(t.va)).Oa(t.J),e}function Xs(){}function Ys(){if($n&&!(10<=Number(Xn)))throw Error("Environmental error: no available transport.")}function Js(t,e){Ti.call(this),this.g=new xs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rn(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new eo(this)}function Zs(t){cr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function to(){hr.call(this),this.status=1}function eo(t){this.g=t}function no(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function io(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function ro(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(dn=ys.prototype).Oa=function(t){this.M=t},dn.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ar.g(),this.C=this.u?sr(this.u):sr(ar),this.g.onreadystatechange=_n(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void bs(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=mn.FormData&&t instanceof mn.FormData,!(0<=Cn(Es,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Is(this),0<this.B&&((this.L=function(t){return $n&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_n(this.ua,this)):this.A=Vi(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){bs(this,t)}},dn.ua=function(){void 0!==gn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_i(this,"timeout"),this.abort(8))},dn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_i(this,"complete"),_i(this,"abort"),Ss(this))},dn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ss(this,!0)),ys.$.N.call(this)},dn.La=function(){this.s||(this.G||this.v||this.l?_s(this):this.kb())},dn.kb=function(){_s(this)},dn.isActive=function(){return!!this.g},dn.da=function(){try{return 2<As(this)?this.g.status:-1}catch(t){return-1}},dn.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},dn.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ms(e)}},dn.Ia=function(){return this.m},dn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(dn=xs.prototype).ra=8,dn.H=1,dn.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new fr(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ri(s),oi(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Vs(this,r,e),Lr(n=xr(this.I),"RID",t),Lr(n,"CVER",22),this.F&&Lr(n,"X-HTTP-Session-Id",this.F),Fs(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ds(s)))+"&"+e:this.o&&Ns(n,this.o,s)),is(this.i,r),this.bb&&Lr(n,"TYPE","init"),this.P?(Lr(n,"$req",e),Lr(n,"SID","null"),r.aa=!0,yr(r,n,null)):yr(r,n,e),this.H=2}}else 3==this.H&&(t?Ps(this,t):0==this.j.length||ts(this.i)||Ps(this))},dn.Ma=function(){if(this.u=null,js(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=er(_n(this.jb,this),t)}},dn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Zi(10),Os(this),js(this))},dn.ib=function(){null!=this.v&&(this.v=null,Os(this),$s(this),Zi(19))},dn.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Zi(2)):(this.l.info("Failed to ping google.com"),Zi(1))},dn.isActive=function(){return!!this.h&&this.h.isActive(this)},(dn=Xs.prototype).Ba=function(){},dn.Aa=function(){},dn.za=function(){},dn.ya=function(){},dn.isActive=function(){return!0},dn.Va=function(){},Ys.prototype.g=function(t,e){return new Js(t,e)},In(Js,Ti),Js.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Zi(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Qs(t,null,t.Y),Ls(t)},Js.prototype.close=function(){Rs(this.g)},Js.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ii(t),t=n);e.j.push(new Yr(e.fb++,t)),3==e.H&&Ls(e)},Js.prototype.N=function(){this.g.h=null,delete this.j,Rs(this.g),delete this.g,Js.$.N.call(this)},In(Zs,cr),In(to,hr),In(eo,Xs),eo.prototype.Ba=function(){_i(this.g,"a")},eo.prototype.Aa=function(t){_i(this.g,new Zs(t))},eo.prototype.za=function(t){_i(this.g,new to)},eo.prototype.ya=function(){_i(this.g,"b")},In(no,(function(){this.blockSize=-1})),no.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},no.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)io(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){io(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){io(this,i),r=0;break}}this.h=r,this.i+=e},no.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var so={};function oo(t){return-128<=t&&128>t?function(t,e){var n=so;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new ro([0|t],0>t?-1:0)})):new ro([0|t],0>t?-1:0)}function ao(t){if(isNaN(t)||!isFinite(t))return co;if(0>t)return go(ao(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=lo;return new ro(e,0)}var lo=4294967296,co=oo(0),ho=oo(1),uo=oo(16777216);function fo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function po(t){return-1==t.h}function go(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ro(n,~t.h).add(ho)}function mo(t,e){return t.add(go(e))}function yo(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function vo(t,e){this.g=t,this.h=e}function wo(t,e){if(fo(e))throw Error("division by zero");if(fo(t))return new vo(co,co);if(po(t))return e=wo(go(t),e),new vo(go(e.g),go(e.h));if(po(e))return e=wo(t,go(e)),new vo(go(e.g),e.h);if(30<t.g.length){if(po(t)||po(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ho,i=e;0>=i.X(t);)n=Eo(n),i=Eo(i);var r=bo(n,1),s=bo(i,1);for(i=bo(i,2),n=bo(n,2);!fo(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=bo(i,1),n=bo(n,1)}return e=mo(t,r.R(e)),new vo(r,e)}for(r=co;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=ao(n)).R(e);po(o)||0<o.X(t);)o=(s=ao(n-=i)).R(e);fo(s)&&(s=ho),r=r.add(s),t=mo(t,o)}return new vo(r,t)}function Eo(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ro(n,t.h)}function bo(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ro(r,t.h)}(dn=ro.prototype).ea=function(){if(po(this))return-go(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:lo+i)*e,e*=lo}return t},dn.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(fo(this))return"0";if(po(this))return"-"+go(this).toString(t);for(var e=ao(Math.pow(t,6)),n=this,i="";;){var r=wo(n,e).g,s=((0<(n=mo(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(fo(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},dn.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},dn.X=function(t){return po(t=mo(this,t))?-1:fo(t)?0:1},dn.abs=function(){return po(this)?go(this):this},dn.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new ro(n,-2147483648&n[n.length-1]?-1:0)},dn.R=function(t){if(fo(this)||fo(t))return co;if(po(this))return po(t)?go(this).R(go(t)):go(go(this).R(t));if(po(t))return go(this.R(go(t)));if(0>this.X(uo)&&0>t.X(uo))return ao(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=o*l,yo(n,2*i+2*r),n[2*i+2*r+1]+=s*l,yo(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,yo(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,yo(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ro(n,0)},dn.gb=function(t){return wo(this,t).h},dn.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ro(n,this.h&t.h)},dn.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ro(n,this.h|t.h)},dn.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ro(n,this.h^t.h)},Ys.prototype.createWebChannel=Ys.prototype.g,Js.prototype.send=Js.prototype.u,Js.prototype.open=Js.prototype.m,Js.prototype.close=Js.prototype.close,nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,ir.COMPLETE="complete",or.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",Ti.prototype.listen=Ti.prototype.O,ys.prototype.listenOnce=ys.prototype.P,ys.prototype.getLastError=ys.prototype.Sa,ys.prototype.getLastErrorCode=ys.prototype.Ia,ys.prototype.getStatus=ys.prototype.da,ys.prototype.getResponseJson=ys.prototype.Wa,ys.prototype.getResponseText=ys.prototype.ja,ys.prototype.send=ys.prototype.ha,ys.prototype.setWithCredentials=ys.prototype.Oa,no.prototype.digest=no.prototype.l,no.prototype.reset=no.prototype.reset,no.prototype.update=no.prototype.j,ro.prototype.add=ro.prototype.add,ro.prototype.multiply=ro.prototype.R,ro.prototype.modulo=ro.prototype.gb,ro.prototype.compare=ro.prototype.X,ro.prototype.toNumber=ro.prototype.ea,ro.prototype.toString=ro.prototype.toString,ro.prototype.getBits=ro.prototype.D,ro.fromNumber=ao,ro.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return go(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=ao(Math.pow(n,8)),r=co,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=ao(Math.pow(n,o)),r=r.R(o).add(ao(a))):r=(r=r.R(i)).add(ao(a))}return r};var To=nr,_o=ir,So=Ki,Io=10,Ao=11,Co=or,Do=ys,No=ro;const ko="@firebase/firestore";
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
     */class xo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xo.UNAUTHENTICATED=new xo(null),xo.GOOGLE_CREDENTIALS=new xo("google-credentials-uid"),xo.FIRST_PARTY=new xo("first-party-uid"),xo.MOCK_USER=new xo("mock-user");
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
let Ro="10.5.0";
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
     */const Oo=new Te("@firebase/firestore");function Mo(){return Oo.logLevel}function Lo(t,...e){if(Oo.logLevel<=ye.DEBUG){const n=e.map(Vo);Oo.debug(`Firestore (${Ro}): ${t}`,...n)}}function Po(t,...e){if(Oo.logLevel<=ye.ERROR){const n=e.map(Vo);Oo.error(`Firestore (${Ro}): ${t}`,...n)}}function Fo(t,...e){if(Oo.logLevel<=ye.WARN){const n=e.map(Vo);Oo.warn(`Firestore (${Ro}): ${t}`,...n)}}function Vo(t){if("string"==typeof t)return t;try{
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
     */function Uo(t="Unexpected state"){const e=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: `+t;throw Po(e),new Error(e)}function $o(t,e){t||Uo()}function Bo(t,e){return t}
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
     */const jo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qo extends ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class zo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Ho{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Go{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(xo.UNAUTHENTICATED)))}shutdown(){}}class Ko{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Qo{constructor(t){this.t=t,this.currentUser=xo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new zo;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zo,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Lo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Lo("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zo)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Lo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?($o("string"==typeof e.accessToken),new Ho(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $o(null===t||"string"==typeof t),new xo(t)}}class Wo{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=xo.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xo{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Wo(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(xo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jo{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Lo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Lo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Lo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Lo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?($o("string"==typeof t.token),this.R=t.token,new Yo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function Zo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class ta{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Zo(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function ea(t,e){return t<e?-1:t>e?1:0}function na(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
     */class ia{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new qo(jo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new qo(jo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new qo(jo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new qo(jo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ia.fromMillis(Date.now())}static fromDate(t){return ia.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ia(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ea(this.nanoseconds,t.nanoseconds):ea(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class ra{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ra(t)}static min(){return new ra(new ia(0,0))}static max(){return new ra(new ia(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class sa{constructor(t,e,n){void 0===e?e=0:e>t.length&&Uo(),void 0===n?n=t.length-e:n>t.length-e&&Uo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===sa.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sa?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class oa extends sa{construct(t,e,n){return new oa(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new qo(jo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new oa(e)}static emptyPath(){return new oa([])}}const aa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class la extends sa{construct(t,e,n){return new la(t,e,n)}static isValidIdentifier(t){return aa.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),la.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new la(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new qo(jo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new qo(jo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new qo(jo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new qo(jo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new la(e)}static emptyPath(){return new la([])}}
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
     */class ca{constructor(t){this.path=t}static fromPath(t){return new ca(oa.fromString(t))}static fromName(t){return new ca(oa.fromString(t).popFirst(5))}static empty(){return new ca(oa.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===oa.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return oa.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ca(new oa(t.slice()))}}function ha(t){return new ua(t.readTime,t.key,-1)}class ua{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ua(ra.min(),ca.empty(),-1)}static max(){return new ua(ra.max(),ca.empty(),-1)}}function fa(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ca.comparator(t.documentKey,e.documentKey),0!==n?n:ea(t.largestBatchId,e.largestBatchId))}
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
     */const da="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
     */async function ga(t){if(t.code!==jo.FAILED_PRECONDITION||t.message!==da)throw t;Lo("LocalStore","Unexpectedly lost primary lease")}
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
     */class ma{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Uo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ma(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ma?e:ma.resolve(e)}catch(t){return ma.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ma.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ma.reject(e)}static resolve(t){return new ma(((e,n)=>{e(t)}))}static reject(t){return new ma(((e,n)=>{n(t)}))}static waitFor(t){return new ma(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=ma.resolve(!1);for(const n of t)e=e.next((t=>t?ma.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ma(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new ma(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}function ya(t){return"IndexedDbTransactionError"===t.name}
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
     */class va{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function wa(t){return null==t}function Ea(t){return 0===t&&1/t==-1/0}
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
function ba(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ta(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _a(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */va.ae=-1;class Sa{constructor(t,e){this.comparator=t,this.root=e||Aa.EMPTY}insert(t,e){return new Sa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Aa.BLACK,null,null))}remove(t){return new Sa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Aa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ia(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ia(this.root,t,this.comparator,!0)}}class Ia{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Aa{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Aa.RED,this.left=null!=i?i:Aa.EMPTY,this.right=null!=r?r:Aa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Aa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Aa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Aa.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Aa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Aa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Uo();if(this.right.isRed())throw Uo();const t=this.left.check();if(t!==this.right.check())throw Uo();return t+(this.isRed()?0:1)}}Aa.EMPTY=null,Aa.RED=!0,Aa.BLACK=!1,Aa.EMPTY=new class{constructor(){this.size=0}get key(){throw Uo()}get value(){throw Uo()}get color(){throw Uo()}get left(){throw Uo()}get right(){throw Uo()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Aa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ca{constructor(t){this.comparator=t,this.data=new Sa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Da(this.data.getIterator())}getIteratorFrom(t){return new Da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ca))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ca(this.comparator);return e.data=t,e}}class Da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class Na{constructor(t){this.fields=t,t.sort(la.comparator)}static empty(){return new Na([])}unionWith(t){let e=new Ca(la.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Na(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return na(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class ka extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class xa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ka("Invalid base64 string: "+t):t}}(t);return new xa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ea(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xa.EMPTY_BYTE_STRING=new xa("");const Ra=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oa(t){if($o(!!t),"string"==typeof t){let e=0;const n=Ra.exec(t);if($o(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ma(t.seconds),nanos:Ma(t.nanos)}}function Ma(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function La(t){return"string"==typeof t?xa.fromBase64String(t):xa.fromUint8Array(t)}
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
     */function Pa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fa(t){const e=t.mapValue.fields.__previous_value__;return Pa(e)?Fa(e):e}function Va(t){const e=Oa(t.mapValue.fields.__local_write_time__.timestampValue);return new ia(e.seconds,e.nanos)}
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
     */class Ua{constructor(t,e,n,i,r,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class $a{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $a("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $a&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ja(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pa(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:Uo()}function qa(t,e){if(t===e)return!0;const n=ja(t);if(n!==ja(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Va(t).isEqual(Va(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Oa(t.timestampValue),i=Oa(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return La(t.bytesValue).isEqual(La(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ma(t.geoPointValue.latitude)===Ma(e.geoPointValue.latitude)&&Ma(t.geoPointValue.longitude)===Ma(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ma(t.integerValue)===Ma(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ma(t.doubleValue),i=Ma(e.doubleValue);return n===i?Ea(n)===Ea(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return na(t.arrayValue.values||[],e.arrayValue.values||[],qa);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ba(n)!==ba(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!qa(n[t],i[t])))return!1;return!0}(t,e);default:return Uo()}}function za(t,e){return void 0!==(t.values||[]).find((t=>qa(t,e)))}function Ha(t,e){if(t===e)return 0;const n=ja(t),i=ja(e);if(n!==i)return ea(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ea(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ma(t.integerValue||t.doubleValue),i=Ma(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Ga(t.timestampValue,e.timestampValue);case 4:return Ga(Va(t),Va(e));case 5:return ea(t.stringValue,e.stringValue);case 6:return function(t,e){const n=La(t),i=La(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=ea(n[t],i[t]);if(0!==e)return e}return ea(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ea(Ma(t.latitude),Ma(e.latitude));return 0!==n?n:ea(Ma(t.longitude),Ma(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Ha(n[t],i[t]);if(e)return e}return ea(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ba.mapValue&&e===Ba.mapValue)return 0;if(t===Ba.mapValue)return 1;if(e===Ba.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=ea(i[t],s[t]);if(0!==e)return e;const o=Ha(n[i[t]],r[s[t]]);if(0!==o)return o}return ea(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Uo()}}function Ga(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ea(t,e);const n=Oa(t),i=Oa(e),r=ea(n.seconds,i.seconds);return 0!==r?r:ea(n.nanos,i.nanos)}function Ka(t){return Qa(t)}function Qa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Oa(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return La(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ca.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Qa(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Qa(t.fields[r])}`;return n+"}"}(t.mapValue):Uo()}function Wa(t){return!!t&&"integerValue"in t}function Xa(t){return!!t&&"arrayValue"in t}function Ya(t){return!!t&&"mapValue"in t}function Ja(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ta(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ja(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ja(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Za{constructor(t){this.value=t}static empty(){return new Za({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ya(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ja(e)}setAll(t){let e=la.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Ja(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Ya(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qa(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ta(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Za(Ja(this.value))}}function tl(t){const e=[];return Ta(t.fields,((t,n)=>{const i=new la([t]);if(Ya(n)){const t=tl(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Na(e)
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
     */}class el{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new el(t,0,ra.min(),ra.min(),ra.min(),Za.empty(),0)}static newFoundDocument(t,e,n,i){return new el(t,1,e,ra.min(),n,i,0)}static newNoDocument(t,e){return new el(t,2,e,ra.min(),ra.min(),Za.empty(),0)}static newUnknownDocument(t,e){return new el(t,3,e,ra.min(),ra.min(),Za.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ra.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Za.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Za.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ra.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof el&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new el(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class nl{constructor(t,e){this.position=t,this.inclusive=e}}function il(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?ca.comparator(ca.fromName(o.referenceValue),n.key):Ha(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function rl(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qa(t.position[n],e.position[n]))return!1;return!0}
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
     */class sl{constructor(t,e="asc"){this.field=t,this.dir=e}}function ol(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
     */class al{}class ll extends al{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new gl(t,e,n):"array-contains"===e?new wl(t,n):"in"===e?new El(t,n):"not-in"===e?new bl(t,n):"array-contains-any"===e?new Tl(t,n):new ll(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ml(t,n):new yl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ha(e,this.value)):null!==e&&ja(this.value)===ja(e)&&this.matchesComparison(Ha(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Uo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cl extends al{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new cl(t,e)}matches(t){return hl(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hl(t){return"and"===t.op}function ul(t){return function(t){for(const e of t.filters)if(e instanceof cl)return!1;return!0}(t)&&hl(t)}function fl(t){if(t instanceof ll)return t.field.canonicalString()+t.op.toString()+Ka(t.value);if(ul(t))return t.filters.map((t=>fl(t))).join(",");{const e=t.filters.map((t=>fl(t))).join(",");return`${t.op}(${e})`}}function dl(t,e){return t instanceof ll?function(t,e){return e instanceof ll&&t.op===e.op&&t.field.isEqual(e.field)&&qa(t.value,e.value)}(t,e):t instanceof cl?function(t,e){return e instanceof cl&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&dl(n,e.filters[i])),!0)}(t,e):void Uo()}function pl(t){return t instanceof ll?function(t){return`${t.field.canonicalString()} ${t.op} ${Ka(t.value)}`}(t):t instanceof cl?function(t){return t.op.toString()+" {"+t.getFilters().map(pl).join(" ,")+"}"}(t):"Filter"}class gl extends ll{constructor(t,e,n){super(t,e,n),this.key=ca.fromName(n.referenceValue)}matches(t){const e=ca.comparator(t.key,this.key);return this.matchesComparison(e)}}class ml extends ll{constructor(t,e){super(t,"in",e),this.keys=vl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class yl extends ll{constructor(t,e){super(t,"not-in",e),this.keys=vl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function vl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ca.fromName(t.referenceValue)))}class wl extends ll{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xa(e)&&za(e.arrayValue,this.value)}}class El extends ll{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&za(this.value.arrayValue,e)}}class bl extends ll{constructor(t,e){super(t,"not-in",e)}matches(t){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!za(this.value.arrayValue,e)}}class Tl extends ll{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xa(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>za(this.value.arrayValue,t)))}}
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
     */class _l{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.le=null}}function Sl(t,e=null,n=[],i=[],r=null,s=null,o=null){return new _l(t,e,n,i,r,s,o)}function Il(t){const e=Bo(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>fl(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ka(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ka(t))).join(",")),e.le=t}return e.le}function Al(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ol(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rl(t.startAt,e.startAt)&&rl(t.endAt,e.endAt)}
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
     */class Cl{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Dl(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Nl(t){const e=Bo(t);if(null===e.he){e.he=[];const t=new Set;for(const n of e.explicitOrderBy)e.he.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Ca(la.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new sl(i,n))})),t.has(la.keyField().canonicalString())||e.he.push(new sl(la.keyField(),n))}return e.he}function kl(t){const e=Bo(t);return e.Pe||(e.Pe=function(t,e){if("F"===t.limitType)return Sl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new sl(t.field,e)}));const n=t.endAt?new nl(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new nl(t.startAt.position,t.startAt.inclusive):null;return Sl(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,Nl(t))),e.Pe}function xl(t,e,n){return new Cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return Al(kl(t),kl(e))&&t.limitType===e.limitType}function Ol(t){return`${Il(kl(t))}|lt:${t.limitType}`}function Ml(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>pl(t))).join(", ")}]`),wa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ka(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ka(t))).join(",")),`Target(${e})`}(kl(t))}; limitType=${t.limitType})`}function Ll(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ca.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Nl(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=il(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Nl(t),e))&&!(t.endAt&&!function(t,e,n){const i=il(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Nl(t),e))}(t,e)}function Pl(t,e,n){const i=t.field.isKeyField()?ca.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Ha(i,r):Uo()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Uo()}}
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
     */class Fl{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ta(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return _a(this.inner)}size(){return this.innerSize}}
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
     */const Vl=new Sa(ca.comparator);function Ul(){return Vl}const $l=new Sa(ca.comparator);function Bl(...t){let e=$l;for(const n of t)e=e.insert(n.key,n);return e}function jl(t){let e=$l;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ql(){return Hl()}function zl(){return Hl()}function Hl(){return new Fl((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Gl=new Sa(ca.comparator),Kl=new Ca(ca.comparator);function Ql(...t){let e=Kl;for(const n of t)e=e.add(n);return e}const Wl=new Ca(ea);
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
function Xl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function Yl(t){return{integerValue:""+t}}function Jl(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Yl(e):Xl(t,e)}
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
     */class Zl{constructor(){this._=void 0}}function tc(t,e,n){return t instanceof ic?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Pa(e)&&(e=Fa(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof rc?sc(t,e):t instanceof oc?ac(t,e):function(t,e){const n=nc(t,e),i=cc(n)+cc(t.Te);return Wa(n)&&Wa(t.Te)?Yl(i):Xl(t.serializer,i)}(t,e)}function ec(t,e,n){return t instanceof rc?sc(t,e):t instanceof oc?ac(t,e):n}function nc(t,e){return t instanceof lc?function(t){return Wa(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class ic extends Zl{}class rc extends Zl{constructor(t){super(),this.elements=t}}function sc(t,e){const n=hc(e);for(const e of t.elements)n.some((t=>qa(t,e)))||n.push(e);return{arrayValue:{values:n}}}class oc extends Zl{constructor(t){super(),this.elements=t}}function ac(t,e){let n=hc(e);for(const e of t.elements)n=n.filter((t=>!qa(t,e)));return{arrayValue:{values:n}}}class lc extends Zl{constructor(t,e){super(),this.serializer=t,this.Te=e}}function cc(t){return Ma(t.integerValue||t.doubleValue)}function hc(t){return Xa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class uc{constructor(t,e){this.version=t,this.transformResults=e}}class fc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new fc}static exists(t){return new fc(void 0,t)}static updateTime(t){return new fc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class pc{}function gc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ic(t.key,fc.none()):new Ec(t.key,t.data,fc.none());{const n=t.data,i=Za.empty();let r=new Ca(la.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new bc(t.key,i,new Na(r.toArray()),fc.none())}}function mc(t,e,n){t instanceof Ec?function(t,e,n){const i=t.value.clone(),r=_c(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof bc?function(t,e,n){if(!dc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=_c(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Tc(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function yc(t,e,n,i){return t instanceof Ec?function(t,e,n,i){if(!dc(t.precondition,e))return n;const r=t.value.clone(),s=Sc(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof bc?function(t,e,n,i){if(!dc(t.precondition,e))return n;const r=Sc(t.fieldTransforms,i,e),s=e.data;return s.setAll(Tc(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return dc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function vc(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=nc(i.transform,t||null);null!=r&&(null===n&&(n=Za.empty()),n.set(i.field,r))}return n||null}function wc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&na(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof rc&&e instanceof rc||t instanceof oc&&e instanceof oc?na(t.elements,e.elements,qa):t instanceof lc&&e instanceof lc?qa(t.Te,e.Te):t instanceof ic&&e instanceof ic}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ec extends pc{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bc extends pc{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Tc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function _c(t,e,n){const i=new Map;$o(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ec(o,a,n[r]))}return i}function Sc(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,tc(t,s,e))}return i}class Ic extends pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ac extends pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class Cc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&mc(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=yc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=yc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=zl();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=gc(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(ra.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ql())}isEqual(t){return this.batchId===t.batchId&&na(this.mutations,t.mutations,((t,e)=>wc(t,e)))&&na(this.baseMutations,t.baseMutations,((t,e)=>wc(t,e)))}}class Dc{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){$o(t.mutations.length===n.length);let i=Gl;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new Dc(t,e,n,i)}}
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
     */class Nc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */var kc,xc;(xc=kc||(kc={}))[xc.OK=0]="OK",xc[xc.CANCELLED=1]="CANCELLED",xc[xc.UNKNOWN=2]="UNKNOWN",xc[xc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xc[xc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xc[xc.NOT_FOUND=5]="NOT_FOUND",xc[xc.ALREADY_EXISTS=6]="ALREADY_EXISTS",xc[xc.PERMISSION_DENIED=7]="PERMISSION_DENIED",xc[xc.UNAUTHENTICATED=16]="UNAUTHENTICATED",xc[xc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xc[xc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xc[xc.ABORTED=10]="ABORTED",xc[xc.OUT_OF_RANGE=11]="OUT_OF_RANGE",xc[xc.UNIMPLEMENTED=12]="UNIMPLEMENTED",xc[xc.INTERNAL=13]="INTERNAL",xc[xc.UNAVAILABLE=14]="UNAVAILABLE",xc[xc.DATA_LOSS=15]="DATA_LOSS",
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
new No([4294967295,4294967295],0);class Rc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Lc(t,e){return Oc(t,e.toTimestamp())}function Pc(t){return $o(!!t),ra.fromTimestamp(function(t){const e=Oa(t);return new ia(e.seconds,e.nanos)}(t))}function Fc(t,e){return function(t){return new oa(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Vc(t,e){return Fc(t.databaseId,e.path)}function Uc(t){const e=function(t){const e=oa.fromString(t);return $o(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */(e)),e}(t);return 4===e.length?oa.emptyPath():function(t){return $o(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function $c(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function Bc(t){let e=Uc(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){$o(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=jc(t);return e instanceof cl&&ul(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new sl(qc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,wa(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new nl(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new nl(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new Cl(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",l,c)}function jc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qc(t.unaryFilter.field);return ll.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qc(t.unaryFilter.field);return ll.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qc(t.unaryFilter.field);return ll.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=qc(t.unaryFilter.field);return ll.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Uo()}}(t):void 0!==t.fieldFilter?function(t){return ll.create(qc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Uo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return cl.create(t.compositeFilter.filters.map((t=>jc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Uo()}}(t.compositeFilter.op))}(t):Uo()}function qc(t){return la.fromServerFormat(t.fieldPath)}function zc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class Hc{constructor(t){this.ct=t}}function Gc(t){const e=Bc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?xl(e,e.limit,"L"):e}
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
     */class Kc{constructor(){this._n=new Qc}addToCollectionParentIndex(t,e){return this._n.add(e),ma.resolve()}getCollectionParents(t,e){return ma.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return ma.resolve()}deleteFieldIndex(t,e){return ma.resolve()}deleteAllFieldIndexes(t){return ma.resolve()}createTargetIndexes(t,e){return ma.resolve()}getDocumentsMatchingTarget(t,e){return ma.resolve(null)}getIndexType(t,e){return ma.resolve(0)}getFieldIndexes(t,e){return ma.resolve([])}getNextCollectionGroupToUpdate(t){return ma.resolve(null)}getMinOffset(t,e){return ma.resolve(ua.min())}getMinOffsetFromCollectionGroup(t,e){return ma.resolve(ua.min())}updateCollectionGroup(t,e,n){return ma.resolve()}updateIndexEntries(t,e){return ma.resolve()}}class Qc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ca(oa.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ca(oa.comparator)).toArray()}}
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
     */class Wc{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Wc(0)}static Bn(){return new Wc(-1)}}
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
     */class Xc{constructor(){this.changes=new Fl((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,el.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ma.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
     */class Yc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class Jc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&yc(n.mutation,t,Na.empty(),ia.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ql()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ql()){const i=ql();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Bl();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ql();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ql())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Ul();const s=Hl(),o=Hl();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof bc)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),yc(o.mutation,e,o.mutation.getFieldMask(),ia.now())):s.set(e.key,Na.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Yc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Hl();let i=new Sa(((t,e)=>t-e)),r=Ql();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Na.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Ql()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=zl();l.forEach((t=>{if(!r.has(t)){const i=gc(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ma.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return ca.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):ma.resolve(ql());let o=-1,a=r;return s.next((e=>ma.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?ma.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Ql()))).next((t=>({batchId:o,changes:jl(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ca(e)).next((t=>{let e=Bl();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Bl();return this.indexManager.getCollectionParents(t,r).next((o=>ma.forEach(o,(o=>{const a=function(t,e){return new Cl(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,el.newInvalidDocument(i)))}));let n=Bl();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&yc(s.mutation,i,Na.empty(),ia.now()),Ll(e,i)&&(n=n.insert(t,i))})),n}))}}
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
     */class Zc{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return ma.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Pc(t.createTime)}}(e)),ma.resolve()}getNamedQuery(t,e){return ma.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:Gc(t.bundledQuery),readTime:Pc(t.readTime)}}(e)),ma.resolve()}}
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
     */class th{constructor(){this.overlays=new Sa(ca.comparator),this.hr=new Map}getOverlay(t,e){return ma.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ql();return ma.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),ma.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),ma.resolve()}getOverlaysForCollection(t,e,n){const i=ql(),r=e.length+1,s=new ca(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ma.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Sa(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=ql(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ql(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ma.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Nc(e,n));let r=this.hr.get(e);void 0===r&&(r=Ql(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}}
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
     */class eh{constructor(){this.Pr=new Ca(nh.Ir),this.Tr=new Ca(nh.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new nh(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new nh(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new ca(new oa([])),n=new nh(e,t),i=new nh(e,t+1),r=[];return this.Tr.forEachInRange([n,i],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new ca(new oa([])),n=new nh(e,t),i=new nh(e,t+1);let r=Ql();return this.Tr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new nh(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class nh{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return ca.comparator(t.key,e.key)||ea(t.pr,e.pr)}static Er(t,e){return ea(t.pr,e.pr)||ca.comparator(t.key,e.key)}}
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
     */class ih{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ca(nh.Ir)}checkEmpty(t){return ma.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Cc(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.wr=this.wr.add(new nh(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ma.resolve(s)}lookupMutationBatch(t,e){return ma.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),r=i<0?0:i;return ma.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ma.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return ma.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new nh(e,0),i=new nh(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],(t=>{const e=this.Sr(t.pr);r.push(e)})),ma.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ca(ea);return e.forEach((t=>{const e=new nh(t,0),i=new nh(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,i],(t=>{n=n.add(t.pr)}))})),ma.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;ca.isDocumentKey(r)||(r=r.child(""));const s=new nh(new ca(r),0);let o=new Ca(ea);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.pr)),!0)}),s),ma.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){$o(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return ma.forEach(e.mutations,(i=>{const r=new nh(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new nh(e,0),i=this.wr.firstAfterOrEqual(n);return ma.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ma.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class rh{constructor(t){this.vr=t,this.docs=new Sa(ca.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ma.resolve(n?n.document.mutableCopy():el.newInvalidDocument(e))}getEntries(t,e){let n=Ul();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():el.newInvalidDocument(t))})),ma.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Ul();const s=e.path,o=new ca(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||fa(ha(o),n)<=0||(i.has(o.key)||Ll(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ma.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Uo()}Fr(t,e){return ma.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new sh(this)}getSize(t){return ma.resolve(this.size)}}class sh extends Xc{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)})),ma.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
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
     */class oh{constructor(t){this.persistence=t,this.Mr=new Fl((t=>Il(t)),Al),this.lastRemoteSnapshotVersion=ra.min(),this.highestTargetId=0,this.Or=0,this.Nr=new eh,this.targetCount=0,this.Br=Wc.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),ma.resolve()}getLastRemoteSnapshotVersion(t){return ma.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ma.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ma.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),ma.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Wc(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,ma.resolve()}updateTargetData(t,e){return this.qn(e),ma.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,ma.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ma.waitFor(r).next((()=>i))}getTargetCount(t){return ma.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return ma.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),ma.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),ma.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),ma.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return ma.resolve(n)}containsKey(t,e){return ma.resolve(this.Nr.containsKey(e))}}
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
     */class ah{constructor(t,e){this.Lr={},this.overlays={},this.kr=new va(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new oh(this),this.indexManager=new Kc,this.remoteDocumentCache=function(t){return new rh(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new Hc(e),this.$r=new Zc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new th,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new ih(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Lo("MemoryPersistence","Starting transaction:",t);const i=new lh(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((t=>this.referenceDelegate.Wr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gr(t,e){return ma.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class lh extends pa{constructor(t){super(),this.currentSequenceNumber=t}}class ch{constructor(t){this.persistence=t,this.zr=new eh,this.jr=null}static Hr(t){return new ch(t)}get Jr(){if(this.jr)return this.jr;throw Uo()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),ma.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),ma.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),ma.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ma.forEach(this.Jr,(n=>{const i=ca.fromPath(n);return this.Yr(t,i).next((t=>{t||e.removeEntry(i,ra.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return ma.or([()=>ma.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
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
     */class hh{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}static Ki(t,e){let n=Ql(),i=Ql();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new hh(t,e.fromCache,n,i)}}
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
     */class uh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
     */class fh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new uh;return this.Ji(t,e,n).next((i=>{if(r.result=i,this.Ui)return this.Yi(t,e,n,i.size)}))})).next((()=>r.result))}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(Mo()<=ye.DEBUG&&Lo("QueryEngine","SDK will not create cache indexes for query:",Ml(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),ma.resolve()):(Mo()<=ye.DEBUG&&Lo("QueryEngine","Query:",Ml(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(Mo()<=ye.DEBUG&&Lo("QueryEngine","The SDK decides to create cache indexes for query:",Ml(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kl(e))):ma.resolve())}ji(t,e){if(Dl(e))return ma.resolve(null);let n=kl(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=xl(e,null,"F"),n=kl(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Ql(...i);return this.zi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,i);return this.Xi(e,s,r,n.readTime)?this.ji(t,xl(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,i){return Dl(e)||i.isEqual(ra.min())?ma.resolve(null):this.zi.getDocuments(t,n).next((r=>{const s=this.Zi(e,r);return this.Xi(e,s,n,i)?ma.resolve(null):(Mo()<=ye.DEBUG&&Lo("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ml(e)),this.es(t,s,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=ra.fromTimestamp(1e9===i?new ia(n+1,0):new ia(n,i));return new ua(r,ca.empty(),e)}(i,-1)).next((t=>t)))}))}Zi(t,e){let n=new Ca(function(t){return(e,n)=>{let i=!1;for(const r of Nl(t)){const t=Pl(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,i)=>{Ll(t,i)&&(n=n.add(i))})),n}Xi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(t,e,n){return Mo()<=ye.DEBUG&&Lo("QueryEngine","Using full collection scan to execute query:",Ml(e)),this.zi.getDocumentsMatchingQuery(t,e,ua.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class dh{constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new Sa(ea),this.rs=new Fl((t=>Il(t)),Al),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jc(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function ph(t,e){const n=Bo(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Ql();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function gh(t,e){const n=Bo(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class mh{constructor(){this.activeTargetIds=Wl}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yh{constructor(){this.no=new mh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new mh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class vh{io(t){}shutdown(){}}
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
     */class wh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Lo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Lo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let Eh=null;function bh(){return null===Eh?Eh=268435456+Math.round(2147483648*Math.random()):Eh++,"0x"+Eh.toString(16)
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
     */}const Th={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class _h{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
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
     */const Sh="WebChannelConnection";class Ih extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(t,e,n,i,r){const s=bh(),o=this.bo(t,e);Lo("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,i,r),this.Co(t,o,a,n).then((e=>(Lo("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Fo("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,i,r,s){return this.So(t,e,n,i,r)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ro,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Th[t];return`${this.fo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,i){const r=bh();return new Promise(((s,o)=>{const a=new Do;a.setWithCredentials(!0),a.listenOnce(_o.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case To.NO_ERROR:const e=a.getResponseJson();Lo(Sh,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case To.TIMEOUT:Lo(Sh,`RPC '${t}' ${r} timed out`),o(new qo(jo.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const n=a.getStatus();if(Lo(Sh,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(jo).indexOf(e)>=0?e:jo.UNKNOWN}(e.status);o(new qo(t,e.message))}else o(new qo(jo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new qo(jo.UNAVAILABLE,"Connection failed."));break;default:Uo()}}finally{Lo(Sh,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);Lo(Sh,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}Fo(t,e,n){const i=bh(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Ys,o=Wi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Lo(Sh,`Creating RPC '${t}' stream ${i}: ${c}`,a);const h=s.createWebChannel(c,a);let u=!1,f=!1;const d=new _h({lo:e=>{f?Lo(Sh,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Lo(Sh,`Opening RPC '${t}' stream ${i} transport.`),h.open(),u=!0),Lo(Sh,`RPC '${t}' stream ${i} sending:`,e),h.send(e))},ho:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,Co.EventType.OPEN,(()=>{f||Lo(Sh,`RPC '${t}' stream ${i} transport opened.`)})),p(h,Co.EventType.CLOSE,(()=>{f||(f=!0,Lo(Sh,`RPC '${t}' stream ${i} transport closed`),d.Vo())})),p(h,Co.EventType.ERROR,(e=>{f||(f=!0,Fo(Sh,`RPC '${t}' stream ${i} transport errored:`,e),d.Vo(new qo(jo.UNAVAILABLE,"The operation could not be completed")))})),p(h,Co.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];$o(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Lo(Sh,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=kc[t];if(void 0!==e)return function(t){if(void 0===t)return Po("GRPC error has no .code"),jo.UNKNOWN;switch(t){case kc.OK:return jo.OK;case kc.CANCELLED:return jo.CANCELLED;case kc.UNKNOWN:return jo.UNKNOWN;case kc.DEADLINE_EXCEEDED:return jo.DEADLINE_EXCEEDED;case kc.RESOURCE_EXHAUSTED:return jo.RESOURCE_EXHAUSTED;case kc.INTERNAL:return jo.INTERNAL;case kc.UNAVAILABLE:return jo.UNAVAILABLE;case kc.UNAUTHENTICATED:return jo.UNAUTHENTICATED;case kc.INVALID_ARGUMENT:return jo.INVALID_ARGUMENT;case kc.NOT_FOUND:return jo.NOT_FOUND;case kc.ALREADY_EXISTS:return jo.ALREADY_EXISTS;case kc.PERMISSION_DENIED:return jo.PERMISSION_DENIED;case kc.FAILED_PRECONDITION:return jo.FAILED_PRECONDITION;case kc.ABORTED:return jo.ABORTED;case kc.OUT_OF_RANGE:return jo.OUT_OF_RANGE;case kc.UNIMPLEMENTED:return jo.UNIMPLEMENTED;case kc.DATA_LOSS:return jo.DATA_LOSS;default:return Uo()}}(e)}(e),r=o.message;void 0===n&&(n=jo.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Vo(new qo(n,r)),h.close()}else Lo(Sh,`RPC '${t}' stream ${i} received:`,r),d.mo(r)}})),p(o,So.STAT_EVENT,(e=>{e.stat===Io?Lo(Sh,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Ao&&Lo(Sh,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.Ro()}),0),d}}function Ah(){return"undefined"!=typeof document?document:null}
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
     */function Ch(t){return new Rc(t,!0)}
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
     */class Dh{constructor(t,e,n=1e3,i=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-n);i>0&&Lo("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
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
     */class Nh{constructor(t,e,n,i,r,s,o,a){this.oi=t,this.$o=n,this.Uo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Dh(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===jo.RESOURCE_EXHAUSTED?(Po(e.toString()),Po("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===jo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new qo(jo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return Lo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(Lo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kh extends Nh{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if($o(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?($o(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Pc(t.updateTime):Pc(e);return n.isEqual(ra.min())&&(n=Pc(e)),new uc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Pc(t.commitTime);return this.listener.T_(n,e)}return $o(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=function(t){return new oa(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Ec)n={update:$c(t,e.key,e.value)};else if(e instanceof Ic)n={delete:Vc(t,e.key)};else if(e instanceof bc)n={update:$c(t,e.key,e.data),updateMask:zc(e.fieldMask)};else{if(!(e instanceof Ac))return Uo();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ic)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof oc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof lc)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Uo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Lc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Uo()}(t,e.precondition)),n}(this.serializer,t)))};this.t_(e)}}
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
     */class xh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new qo(jo.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.So(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new qo(jo.UNKNOWN,t.toString())}))}vo(t,e,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.vo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new qo(jo.UNKNOWN,t.toString())}))}terminate(){this.A_=!0}}class Rh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Po(e),this.g_=!1):Lo("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
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
     */class Oh{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io((t=>{n.enqueueAndForget((async()=>{Ph(this)&&(Lo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Bo(t);e.v_.add(4),await Lh(e),e.x_.set("Unknown"),e.v_.delete(4),await Mh(e)}(this))}))})),this.x_=new Rh(n,i)}}async function Mh(t){if(Ph(t))for(const e of t.F_)await e(!0)}async function Lh(t){for(const e of t.F_)await e(!1)}function Ph(t){return 0===Bo(t).v_.size}async function Fh(t,e,n){if(!ya(e))throw e;t.v_.add(1),await Lh(t),t.x_.set("Offline"),n||(n=()=>function(t){const e=Bo(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Lo("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Mh(t)}))}function Vh(t,e){return e().catch((n=>Fh(t,n,e)))}async function Uh(t){const e=Bo(t),n=Wh(e);let i=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;$h(e);)try{const t=await gh(e.localStore,i);if(null===t){0===e.D_.length&&n.Xo();break}i=t.batchId,Bh(e,t)}catch(t){await Fh(e,t)}jh(e)&&qh(e)}function $h(t){return Ph(t)&&t.D_.length<10}function Bh(t,e){t.D_.push(e);const n=Wh(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function jh(t){return Ph(t)&&!Wh(t).Ho()&&t.D_.length>0}function qh(t){Wh(t).start()}async function zh(t){Wh(t).d_()}async function Hh(t){const e=Wh(t);for(const n of t.D_)e.I_(n.mutations)}async function Gh(t,e,n){const i=t.D_.shift(),r=Dc.from(i,e,n);await Vh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Uh(t)}async function Kh(t,e){e&&Wh(t).P_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return Uo();case jo.CANCELLED:case jo.UNKNOWN:case jo.DEADLINE_EXCEEDED:case jo.RESOURCE_EXHAUSTED:case jo.INTERNAL:case jo.UNAVAILABLE:case jo.UNAUTHENTICATED:return!1;case jo.INVALID_ARGUMENT:case jo.NOT_FOUND:case jo.ALREADY_EXISTS:case jo.PERMISSION_DENIED:case jo.FAILED_PRECONDITION:case jo.ABORTED:case jo.OUT_OF_RANGE:case jo.UNIMPLEMENTED:case jo.DATA_LOSS:return!0}}(t)&&t!==jo.ABORTED}(e.code)){const n=t.D_.shift();Wh(t).Zo(),await Vh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Uh(t)}}(t,e),jh(t)&&qh(t)}async function Qh(t,e){const n=Bo(t);n.asyncQueue.verifyOperationInProgress(),Lo("RemoteStore","RemoteStore received new credentials");const i=Ph(n);n.v_.add(3),await Lh(n),i&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Mh(n)}function Wh(t){return t.B_||(t.B_=function(t,e,n){const i=Bo(t);return i.R_(),new kh(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Po:zh.bind(null,t),To:Kh.bind(null,t),E_:Hh.bind(null,t),T_:Gh.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await Uh(t)):(await t.B_.stop(),t.D_.length>0&&(Lo("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
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
     */}class Xh{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new zo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Xh(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new qo(jo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yh(t,e){if(Po("AsyncQueue",`${e}: ${t}`),ya(t))return new qo(jo.UNAVAILABLE,`${e}: ${t}`);throw t}class Jh{constructor(){this.queries=new Fl((t=>Ol(t)),Rl),this.onlineState="Unknown",this.Q_=new Set}}class Zh{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.ma={},this.fa=new Fl((t=>Ol(t)),Rl),this.ga=new Map,this.pa=new Set,this.ya=new Sa(ca.comparator),this.wa=new Map,this.Sa=new eh,this.ba={},this.Da=new Map,this.Ca=Wc.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return!0===this.va}}async function tu(t,e,n){const i=function(t){const e=Bo(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iu.bind(null,e),e}(t);try{const t=await function(t,e){const n=Bo(t),i=ia.now(),r=e.reduce(((t,e)=>t.add(e.key)),Ql());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Ul(),l=Ql();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=vc(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new bc(t.key,e,tl(e.value.mapValue),fc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:jl(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ba[t.currentUser.toKey()];i||(i=new Sa(ea)),i=i.insert(e,n),t.ba[t.currentUser.toKey()]=i}(i,t.batchId,n),await ou(i,t.changes),await Uh(i.remoteStore)}catch(t){const e=Yh(t,"Failed to persist write");n.reject(e)}}function eu(t,e,n){const i=Bo(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.fa.forEach(((n,i)=>{const r=i.view.K_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Bo(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.K_(e)&&(i=!0)})),i&&function(t){t.Q_.forEach((t=>{t.next()}))}(n)}(i.eventManager,e),t.length&&i.ma.u_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nu(t,e){const n=Bo(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Bo(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ma.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);$o(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ql();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);su(n,i,null),ru(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ou(n,t)}catch(t){await ga(t)}}async function iu(t,e,n){const i=Bo(t);try{const t=await function(t,e){const n=Bo(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>($o(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);su(i,e,n),ru(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ou(i,t)}catch(n){await ga(n)}}function ru(t,e){(t.Da.get(e)||[]).forEach((t=>{t.resolve()})),t.Da.delete(e)}function su(t,e,n){const i=Bo(t);let r=i.ba[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ba[i.currentUser.toKey()]=r}}async function ou(t,e,n){const i=Bo(t),r=[],s=[],o=[];i.fa.isEmpty()||(i.fa.forEach(((t,a)=>{o.push(i.Fa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=hh.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.ma.u_(r),await async function(t,e){const n=Bo(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ma.forEach(e,(e=>ma.forEach(e.qi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ma.forEach(e.Qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ya(t))throw t;Lo("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,r)}}}(i.localStore,s))}async function au(t,e){const n=Bo(t);if(!n.currentUser.isEqual(e)){Lo("SyncEngine","User change. New user:",e.toKey());const t=await ph(n.localStore,e);n.currentUser=e,function(t,e){t.Da.forEach((t=>{t.forEach((t=>{t.reject(new qo(jo.CANCELLED,e))}))})),t.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ou(n,t.us)}}class lu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ch(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,i){return new dh(t,e,n,i)}(this.persistence,new fh,t.initialUser,this.serializer)}createPersistence(t){return new ah(ch.Hr,this.serializer)}createSharedClientState(t){return new yh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>eu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=au.bind(null,this.syncEngine),await async function(t,e){const n=Bo(t);e?(n.v_.delete(2),await Mh(n)):e||(n.v_.add(2),await Lh(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Jh}createDatastore(t){const e=Ch(t.databaseInfo.databaseId),n=function(t){return new Ih(t)}(t.databaseInfo);return function(t,e,n,i){return new xh(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Oh(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>eu(this.syncEngine,t,0)),wh.C()?new wh:new vh)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Zh(t,e,n,i,r,s);return o&&(a.va=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Bo(t);Lo("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Lh(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore)}}
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
     */class hu{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=xo.UNAUTHENTICATED,this.clientId=ta.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Lo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Lo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qo(jo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Yh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function uu(t,e){t.asyncQueue.verifyOperationInProgress(),Lo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await ph(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function fu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Lo("FirestoreClient","Using user provided OfflineComponentProvider");try{await uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===jo.FAILED_PRECONDITION||t.code===jo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Fo("Error using user provided cache. Falling back to memory cache: "+n),await uu(t,new lu)}}else Lo("FirestoreClient","Using default OfflineComponentProvider"),await uu(t,new lu);return t._offlineComponents}(t);Lo("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Qh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Qh(e.remoteStore,n))),t._onlineComponents=e}function du(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Lo("FirestoreClient","Using user provided OnlineComponentProvider"),await fu(t,t._uninitializedComponentsProvider._online)):(Lo("FirestoreClient","Using default OnlineComponentProvider"),await fu(t,new cu))),t._onlineComponents}(t).then((t=>t.syncEngine))}
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
     */function pu(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
     */}const gu=new Map;
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
     */function mu(t,e,n){if(!n)throw new qo(jo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yu(t){if(!ca.isDocumentKey(t))throw new qo(jo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vu(t){if(ca.isDocumentKey(t))throw new qo(jo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Uo()}function Eu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new qo(jo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wu(t);throw new qo(jo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class bu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new qo(jo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new qo(jo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new qo(jo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new qo(jo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new qo(jo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new qo(jo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tu{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qo(jo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new qo(jo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Go;switch(t.type){case"firstParty":return new Xo(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new qo(jo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=gu.get(t);e&&(Lo("ComponentProvider","Removing Datastore"),gu.delete(t),e.terminate())}(this),Promise.resolve()}}function _u(t,e,n,i={}){var r;const s=(t=Eu(t,Tu))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=xo.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[te(JSON.stringify({alg:"none",type:"JWT"})),te(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new qo(jo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xo(s)}t._authCredentials=new Ko(new Ho(e,n))}}
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
     */class Su{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Su(this.firestore,t,this._query)}}class Iu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Au(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Iu(this.firestore,t,this._key)}}class Au extends Su{constructor(t,e,n){super(t,e,function(t){return new Cl(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Iu(this.firestore,null,new ca(t))}withConverter(t){return new Au(this.firestore,t,this._path)}}
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
class Cu{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new Dh(this,"async_queue_retry"),this.su=()=>{const t=Ah();t&&Lo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=Ah();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const e=Ah();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise((()=>{}));const e=new zo;return this._u((()=>this.Xa&&this.ru?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Za.push(t),this.au())))}async au(){if(0!==this.Za.length){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!ya(t))throw t;Lo("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo((()=>this.au()))}}_u(t){const e=this.Ya.then((()=>(this.nu=!0,t().catch((t=>{this.tu=t,this.nu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Po("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.nu=!1,t))))));return this.Ya=e,e}enqueueAfterDelay(t,e,n){this.ou(),this.iu.indexOf(t)>-1&&(e=0);const i=Xh.createAndSchedule(this,t,e,n,(t=>this.uu(t)));return this.eu.push(i),i}ou(){this.tu&&Uo()}verifyOperationInProgress(){}async cu(){let t;do{t=this.Ya,await t}while(t!==this.Ya)}lu(t){for(const e of this.eu)if(e.timerId===t)return!0;return!1}hu(t){return this.cu().then((()=>{this.eu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.eu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.cu()}))}Pu(t){this.iu.push(t)}uu(t){const e=this.eu.indexOf(t);this.eu.splice(e,1)}}class Du extends Tu{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Cu,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nu(this),this._firestoreClient.terminate()}}function Nu(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Ua(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,pu(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new hu(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
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
     */class ku{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ku(xa.fromBase64String(t))}catch(t){throw new qo(jo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ku(xa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class xu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new qo(jo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new la(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Ru{constructor(t){this._methodName=t}}
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
     */class Ou{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new qo(jo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new qo(jo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ea(this._lat,t._lat)||ea(this._long,t._long)}}
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
     */const Mu=/^__.*__$/;class Lu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new bc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ec(t,this.data,e,this.fieldTransforms)}}function Pu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Uo()}}class Fu{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Iu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Fu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Au:!1});return i.Ru(t),i}Vu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Au:!1});return i.Iu(),i}mu(t){return this.Eu({path:void 0,Au:!0})}fu(t){return Ku(t,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Iu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ru(this.path.get(t))}Ru(t){if(0===t.length)throw this.fu("Document fields must not be empty");if(Pu(this.Tu)&&Mu.test(t))throw this.fu('Document fields cannot begin and end with "__"')}}class Vu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ch(t)}yu(t,e,n,i=!1){return new Fu({Tu:t,methodName:e,pu:n,path:la.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uu(t){const e=t._freezeSettings(),n=Ch(t._databaseId);return new Vu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $u(t,e,n,i,r,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,r);zu("Data must be an object, but it was:",o,i);const a=ju(i,o);let l,c;if(s.merge)l=new Na(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Hu(e,i,n);if(!o.contains(r))throw new qo(jo.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Qu(t,r)||t.push(r)}l=new Na(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Lu(new Za(a),l,c)}function Bu(t,e){if(qu(t=fe(t)))return zu("Unsupported field value:",e,t),ju(t,e);if(t instanceof Ru)return function(t,e){if(!Pu(e.Tu))throw e.fu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&4!==e.Tu)throw e.fu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Bu(r,e.mu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=fe(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Jl(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ia.fromDate(t);return{timestampValue:Oc(e.serializer,n)}}if(t instanceof ia){const n=new ia(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Oc(e.serializer,n)}}if(t instanceof Ou)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ku)return{bytesValue:Mc(e.serializer,t._byteString)};if(t instanceof Iu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.fu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Fc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fu(`Unsupported field value: ${wu(t)}`)}(t,e)}function ju(t,e){const n={};return _a(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ta(t,((t,i)=>{const r=Bu(i,e.du(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function qu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ia||t instanceof Ou||t instanceof ku||t instanceof Iu||t instanceof Ru)}function zu(t,e,n){if(!qu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=wu(n);throw"an object"===i?e.fu(t+" a custom object"):e.fu(t+" "+i)}}function Hu(t,e,n){if((e=fe(e))instanceof xu)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Gu)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xu(...e.split("."))._internalPath}catch(i){throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw Ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gu=new RegExp("[~\\*/\\[\\]]");function Ku(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new qo(jo.INVALID_ARGUMENT,a+t+l)}function Qu(t,e){return t.some((t=>t.isEqual(e)))}
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
     */function Wu(t,e){const n=Eu(t.firestore,Du),i=function(t,e,...n){if(t=fe(t),1===arguments.length&&(e=ta.V()),mu("doc","path",e),t instanceof Tu){const i=oa.fromString(e,...n);return yu(i),new Iu(t,null,new ca(i))}{if(!(t instanceof Iu||t instanceof Au))throw new qo(jo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(oa.fromString(e,...n));return yu(i),new Iu(t.firestore,t instanceof Au?t.converter:null,new ca(i))}}(t),r=function(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}(t.converter,e);return function(t,e){return function(t,e){const n=new zo;return t.asyncQueue.enqueueAndForget((async()=>tu(await du(t),e,n))),n.promise}(function(t){return t._firestoreClient||Nu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[$u(Uu(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,fc.exists(!1))]).then((()=>i))}!function(t,e=!0){!function(t){Ro=t}("10.5.0"),We(new de("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Du(new Qo(t.getProvider("auth-internal")),new Jo(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new qo(jo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Ze(ko,"4.3.0",t),Ze(ko,"4.3.0","esm2017")}();const Xu=function(t,e){const n="object"==typeof t?t:function(t=ze){const e=Ge.get(t);if(!e&&t===ze&&se())return Je();if(!e)throw Xe.create("no-app",{appName:t});return e}(),i="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=re("firestore");t&&_u(r,...t)}return r}(Je({apiKey:"AIzaSyB7oEQf-NoeZqsAdTLQAgWo84m3I1KnAZI",authDomain:"esplanade-46a07.firebaseapp.com",projectId:"esplanade-46a07",storageBucket:"esplanade-46a07.appspot.com",messagingSenderId:"803109975262",appId:"1:803109975262:web:f39f8e10520a6b6eb23e4f",measurementId:"1:803109975262:web:f39f8e10520a6b6eb23e4f"})),Yu=[];function Ju(t,e,n){const i=t.slice();return i[6]=e[n],i}function Zu(t,e){let n,i,r,s,o,d,m,y,v=e[6].sender+"",w=e[6].content+"";return{key:t,first:null,c(){n=h("div"),i=h("strong"),r=u(v),s=u(":"),o=f(),d=u(w),m=f(),p(n,"class",y="message "+("You"===e[6].sender?"user":"assistant")+" svelte-16128qq"),this.first=n},m(t,e){l(t,n,e),a(n,i),a(i,r),a(i,s),a(n,o),a(n,d),a(n,m)},p(t,i){e=t,2&i&&v!==(v=e[6].sender+"")&&g(r,v),2&i&&w!==(w=e[6].content+"")&&g(d,w),2&i&&y!==(y="message "+("You"===e[6].sender?"user":"assistant")+" svelte-16128qq")&&p(n,"class",y)},d(t){t&&c(n)}}}function tf(e){let n,r,s,o,u,g,y,v,w,E,b=[],T=new Map,_=e[1];const S=t=>t[6].content;for(let t=0;t<_.length;t+=1){let n=Ju(e,_,t),i=S(n);T.set(i,b[t]=Zu(i,n))}return{c(){n=h("div"),r=h("div");for(let t=0;t<b.length;t+=1)b[t].c();s=f(),o=h("textarea"),u=f(),g=h("button"),g.textContent="Send",y=f(),v=h("div"),p(r,"class","messages svelte-16128qq"),p(o,"class","svelte-16128qq"),p(g,"class","svelte-16128qq"),p(v,"class","clear svelte-16128qq"),p(n,"class","chat-container svelte-16128qq")},m(t,i){l(t,n,i),a(n,r);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(r,null);a(n,s),a(n,o),m(o,e[0]),a(n,u),a(n,g),a(n,y),a(n,v),w||(E=[d(o,"input",e[4]),d(o,"keydown",e[5]),d(g,"click",e[3])],w=!0)},p(t,[e]){2&e&&(_=t[1],b=function(t,e,n,r,s,o,a,l,c,h,u,f){let d=t.length,p=o.length,g=d;const m={};for(;g--;)m[t[g].key]=g;const y=[],v=new Map,w=new Map,E=[];for(g=p;g--;){const t=f(s,o,g),i=n(t);let l=a.get(i);l?r&&E.push((()=>l.p(t,e))):(l=h(i,t),l.c()),v.set(i,y[g]=l),i in m&&w.set(i,Math.abs(g-m[i]))}const b=new Set,T=new Set;function _(t){O(t,1),t.m(l,u),a.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=y[p-1],n=t[d-1],i=e.key,r=n.key;e===n?(u=e.first,d--,p--):v.has(r)?!a.has(i)||b.has(i)?_(e):T.has(r)?d--:w.get(i)>w.get(r)?(T.add(i),_(e)):(b.add(r),d--):(c(n,a),d--)}for(;d--;){const e=t[d];v.has(e.key)||c(e,a)}for(;p;)_(y[p-1]);return i(E),y}(b,e,S,1,t,_,T,r,M,Zu,null,Ju)),1&e&&m(o,t[0])},i:t,o:t,d(t){t&&c(n);for(let t=0;t<b.length;t+=1)b[t].d();w=!1,i(E)}}}function ef(e,n,i){let r;const a=function(e,n=t){let i;const r=new Set;function o(t){if(s(e,t)&&(e=t,i)){const t=!Yu.length;for(const t of r)t[1](),Yu.push(t,e);if(t){for(let t=0;t<Yu.length;t+=2)Yu[t][0](Yu[t+1]);Yu.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(s,a=t){const l=[s,a];return r.add(l),1===r.size&&(i=n(o)||t),s(e),()=>{r.delete(l),0===r.size&&i&&(i(),i=null)}}}}([]);o(e,a,(t=>i(1,r=t)));let l="";async function c(){if(""===l.trim())return;const t=l;i(0,l=""),a.update((e=>[...e,{sender:"You",content:t}]));try{const e=await fetch("/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:t})}),n=await e.json();a.update((t=>[...t,{sender:"Assistant",content:n}]))}catch(t){console.error("Error:",t),a.update((t=>[...t,{sender:"Assistant",content:"Sorry, there was an error."}]))}}w((()=>{}));return[l,r,a,c,function(){l=this.value,i(0,l)},t=>"Enter"===t.key&&c()]}class nf extends U{constructor(t){super(),V(this,t,ef,tf,s,{})}}function rf(e){let n,s,o,u,g,m,y,v,w,E,b,T,_,S,I,A,C,D,N,k;return _=new nf({}),{c(){var t;n=h("header"),n.innerHTML='<a href="index" class="svelte-nx1oav"><img src="/espWhite.png" alt="Your Logo" class="logo svelte-nx1oav"/></a>',s=f(),o=h("div"),o.textContent="Step into the future\n  with Esplanade AI. Revolutionise\n  your business operations and\n  experience unparalleled efficiency.",u=f(),g=h("div"),m=h("form"),m.innerHTML='<input type="text" name="fullname" placeholder="Full Name" required="" class="svelte-nx1oav"/> \n    <input type="tel" name="number" placeholder="Phone Number" required="" class="svelte-nx1oav"/> \n    <input type="email" name="email" placeholder="Email Address" required="" class="svelte-nx1oav"/> \n    <button type="submit" class="svelte-nx1oav">Submit</button>',y=f(),v=h("div"),v.innerHTML='<video id="bgVideo" autoplay="" muted="" loop="" playsinline="" poster="tealPurple169-2.png" class="svelte-nx1oav"><source src="/siteBGcont2.mp4" type="video/mp4" class="svelte-nx1oav"/>\n    Your browser does not support the video tag.</video>',w=f(),E=h("div"),E.innerHTML='<a href="https://www.instagram.com/esplanade.ai/" class="svelte-nx1oav"><img src="/Instagram.png" alt="Instagram" class="svelte-nx1oav"/></a> \n  <a href="https://www.linkedin.com/company/esplanade-ai" class="svelte-nx1oav"><img src="/linkedin.png" alt="Linkedin" class="svelte-nx1oav"/></a>',b=f(),T=h("div"),(t=_.$$.fragment)&&t.c(),S=f(),I=h("div"),A=f(),C=h("footer"),C.innerHTML='<div class="footer-row svelte-nx1oav"><div class="footer-logo svelte-nx1oav"><img src="justLogoWhite.png" alt="Esplanade Logo" class="svelte-nx1oav"/></div> \n    <div class="address-contact svelte-nx1oav"><div class="svelte-nx1oav"><strong class="svelte-nx1oav">Address</strong> \n        <p class="svelte-nx1oav">Sydney, AUS</p></div> \n      <div class="svelte-nx1oav"><strong class="svelte-nx1oav">Contact</strong> \n        <p class="svelte-nx1oav">digital@esplanade.ai</p></div></div></div> \n\n  <div class="footer-divider svelte-nx1oav"></div> \n\n  <div class="footer-row svelte-nx1oav"><div class="svelte-nx1oav">© 2023 Esplanade.ai. All rights reserved.</div> \n    <div class="svelte-nx1oav"><a href="#" class="svelte-nx1oav">T&amp;Cs</a> \n      <a href="#" class="svelte-nx1oav">Privacy Policy</a></div></div>',p(n,"class","svelte-nx1oav"),p(o,"class","translucent-section centered-content large-text svelte-nx1oav"),p(m,"class","svelte-nx1oav"),p(g,"class","contact-form svelte-nx1oav"),p(v,"class","svelte-nx1oav"),p(E,"class","social-icons svelte-nx1oav"),p(T,"class","svelte-nx1oav"),p(I,"id","bpw-layout"),p(I,"class","svelte-nx1oav"),p(C,"class","svelte-nx1oav")},m(i,c){var h;l(i,n,c),l(i,s,c),l(i,o,c),l(i,u,c),l(i,g,c),a(g,m),l(i,y,c),l(i,v,c),l(i,w,c),l(i,E,c),l(i,b,c),l(i,T,c),L(_,T,null),l(i,S,c),l(i,I,c),l(i,A,c),l(i,C,c),D=!0,N||(k=[(h=e[1].call(null,o),h&&r(h.destroy)?h.destroy:t),d(m,"submit",e[0])],N=!0)},p:t,i(t){D||(O(_.$$.fragment,t),D=!0)},o(t){!function(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),R.c.push((()=>{x.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}(_.$$.fragment,t),D=!1},d(t){t&&c(n),t&&c(s),t&&c(o),t&&c(u),t&&c(g),t&&c(y),t&&c(v),t&&c(w),t&&c(E),t&&c(b),t&&c(T),P(_),t&&c(S),t&&c(I),t&&c(A),t&&c(C),N=!1,i(k)}}}function sf(t){var e=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(r,s){function o(t){try{l(i.next(t))}catch(t){s(t)}}function a(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((i=i.apply(t,e||[])).next())}))};return[function(t){return e(this,void 0,void 0,(function*(){console.log("submit"),t.preventDefault();const e={fullname:t.target.fullname.value,number:t.target.number.value,email:t.target.email.value};console.log("data",e);try{console.log("try");const t=yield Wu(function(t,e,...n){if(t=fe(t),mu("collection","path",e),t instanceof Tu){const i=oa.fromString(e,...n);return vu(i),new Au(t,null,i)}{if(!(t instanceof Iu||t instanceof Au))throw new qo(jo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(oa.fromString(e,...n));return vu(i),new Au(t.firestore,null,i)}}(Xu,"contacts"),e);console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}}))},function(t){const e=t.innerText.trim().split(" "),n=Math.ceil(e.length/4),i=[];e.forEach(((t,r)=>{i.push(`<span style="opacity: 0">${t}</span>`),(r+1)%n==0&&r!==e.length-1&&i.push("<br>")})),t.innerHTML=i.join(" ");const r=[...t.children];Xt(r,{opacity:[0,1]},{duration:3,delay:Ht(.3)}),setTimeout((()=>{r.forEach((t=>{const e=t.textContent.trim();("unparalleled"===e||e.includes("efficiency"))&&Xt(t,{color:"#d28cd1"},{duration:1})}))}),650*(.3*e.length+3))}]}return new class extends U{constructor(t){super(),V(this,t,sf,rf,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
