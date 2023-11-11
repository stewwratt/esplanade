var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function c(){return function(t){return document.createTextNode(t)}(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let u;function f(t){u=t}const d=[],p=[];let g=[];const m=[],y=Promise.resolve();let v=!1;function w(t){g.push(t)}const E=new Set;let b=0;function T(){if(0!==b)return;const t=u;do{try{for(;b<d.length;){const t=d[b];b++,f(t),_(t.$$)}}catch(t){throw d.length=0,b=0,t}for(f(null),d.length=0,b=0;p.length;)p.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];E.has(e)||(E.add(e),e())}g.length=0}while(d.length);for(;m.length;)m.pop()();v=!1,E.clear(),f(t)}function _(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const I=new Set;function S(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];g.forEach((i=>-1===t.indexOf(i)?e.push(i):n.push(i))),n.forEach((t=>t())),g=e}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(d.push(t),v||(v=!0,y.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(s,o,l,c,h,d,p,g=[-1]){const m=u;f(s);const y=s.$$={fragment:null,ctx:[],props:d,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(m?m.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:o.target||m.$$.root};p&&p(y.root);let v=!1;if(y.ctx=l?l(s,o.props||{},((t,e,...n)=>{const i=n.length?n[0]:e;return y.ctx&&h(y.ctx[t],y.ctx[t]=i)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](i),v&&A(s,t)),e})):[],y.update(),v=!0,i(y.before_update),y.fragment=!!c&&c(y.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();o.intro&&((E=s.$$.fragment)&&E.i&&(I.delete(E),E.i(b))),function(t,n,s,o){const{fragment:a,after_update:l}=t.$$;a&&a.m(n,s),o||w((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):i(n),t.$$.on_mount=[]})),l.forEach(w)}(s,o.target,o.anchor,o.customElement),T()}var E,b;f(m)}class D{$destroy(){S(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const t=i.indexOf(n);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=(t,e,n)=>Math.min(Math.max(n,t),e),k={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},x=t=>"number"==typeof t,R=t=>Array.isArray(t)&&!x(t[0]),O=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};const M=(t,e,n)=>-n*t+n*e+t,L=()=>{},P=t=>t,F=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function V(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=F(0,e,i);t.push(M(n,1,r))}}function U(t,e=function(t){const e=[0];return V(e,t-1),e}(t.length),n=P){const i=t.length,r=i-e.length;return r>0&&V(e,r),r=>{let s=0;for(;s<i-2&&!(r<e[s+1]);s++);let o=N(0,1,F(e[s],e[s+1],r));const a=function(t,e){return R(t)?t[O(0,t.length,e)]:t}(n,s);return o=a(o),M(t[s],t[s+1],o)}}const B=t=>Array.isArray(t)&&x(t[0]),$=t=>"object"==typeof t&&Boolean(t.createAnimation),j=t=>"function"==typeof t,q=t=>"string"==typeof t,z={ms:t=>1e3*t,s:t=>t/1e3},H=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,G=1e-7,K=12;function Q(t,e,n,i){if(t===e&&n===i)return P;const r=e=>function(t,e,n,i,r){let s,o,a=0;do{o=e+(n-e)/2,s=H(o,i,r)-t,s>0?n=o:e=o}while(Math.abs(s)>G&&++a<K);return o}(e,0,1,t,n);return t=>0===t||1===t?t:H(r(t),e,i)}const W=(t,e="end")=>n=>{const i=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,r="end"===e?Math.floor(i):Math.ceil(i);return N(0,1,r/t)},X={ease:Q(.25,.1,.25,1),"ease-in":Q(.42,0,1,1),"ease-in-out":Q(.42,0,.58,1),"ease-out":Q(0,0,.58,1)},Y=/\((.*?)\)/;function J(t){if(j(t))return t;if(B(t))return Q(...t);if(X[t])return X[t];if(t.startsWith("steps")){const e=Y.exec(t);if(e){const t=e[1].split(",");return W(parseFloat(t[0]),t[1].trim())}}return P}class Z{constructor(t,e=[0,1],{easing:n,duration:i=k.duration,delay:r=k.delay,endDelay:s=k.endDelay,repeat:o=k.repeat,offset:a,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=P,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||k.easing,$(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,i=t.duration||i}this.repeat=o,this.easing=R(n)?P:J(n),this.updateDuration(i);const c=U(e,a,R(n)?n.map(J):P);this.tick=e=>{var n;let i=0;i=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=i,i/=1e3,i=Math.max(i-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(i=this.totalDuration);const o=i/this.duration;let a=Math.floor(o),h=o%1;!h&&o>=1&&(h=1),1===h&&a--;const u=a%2;("reverse"===l||"alternate"===l&&u||"alternate-reverse"===l&&!u)&&(h=1-h);const f=i>=this.totalDuration?1:Math.min(h,1),d=c(this.easing(f));t(d);void 0===this.pauseTime&&("finished"===this.playState||i>=this.totalDuration+s)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,d)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class tt{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const et=new WeakMap;function nt(t){return et.has(t)||et.set(t,{transforms:[],values:new Map}),et.get(t)}const it=["","X","Y","Z"],rt={x:"translateX",y:"translateY",z:"translateZ"},st={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},ot={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:st,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:P},skew:st},at=new Map,lt=t=>`--motion-${t}`,ct=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{it.forEach((e=>{ct.push(t+e),at.set(lt(t+e),ot[t])}))}));const ht=(t,e)=>ct.indexOf(t)-ct.indexOf(e),ut=new Set(ct),ft=t=>ut.has(t),dt=(t,e)=>{rt[e]&&(e=rt[e]);const{transforms:n}=nt(t);var i,r;r=e,-1===(i=n).indexOf(r)&&i.push(r),t.style.transform=pt(n)},pt=t=>t.sort(ht).reduce(gt,"").trim(),gt=(t,e)=>`${t} ${e}(var(${lt(e)}))`,mt=t=>t.startsWith("--"),yt=new Set;const vt=(t,e)=>document.createElement("div").animate(t,e),wt={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{vt({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(vt({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{vt({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},Et={},bt={};for(const t in wt)bt[t]=()=>(void 0===Et[t]&&(Et[t]=wt[t]()),Et[t]);const Tt=(t,e)=>j(t)?bt.linearEasing()?`linear(${((t,e)=>{let n="";const i=Math.round(e/.015);for(let e=0;e<i;e++)n+=t(F(0,i-1,e))+", ";return n.substring(0,n.length-2)})(t,e)})`:k.easing:B(t)?_t(t):t,_t=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;const It=t=>Array.isArray(t)?t:[t];function St(t){return rt[t]&&(t=rt[t]),ft(t)?lt(t):t}const At={get:(t,e)=>{e=St(e);let n=mt(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=at.get(e);t&&(n=t.initialValue)}return n},set:(t,e,n)=>{e=St(e),mt(e)?t.style.setProperty(e,n):t.style[e]=n}};function Ct(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}function Dt(t,e,n,i={},r){const s=window.__MOTION_DEV_TOOLS_RECORD,o=!1!==i.record&&s;let a,{duration:l=k.duration,delay:c=k.delay,endDelay:h=k.endDelay,repeat:u=k.repeat,easing:f=k.easing,persist:d=!1,direction:p,offset:g,allowWebkitAcceleration:m=!1}=i;const y=nt(t),v=ft(e);let w=bt.waapi();v&&dt(t,e);const E=St(e),b=function(t,e){return t.has(e)||t.set(e,new tt),t.get(e)}(y.values,E),T=at.get(E);return Ct(b.animation,!($(f)&&b.generator)&&!1!==i.record),()=>{const y=()=>{var e,n;return null!==(n=null!==(e=At.get(t,E))&&void 0!==e?e:null==T?void 0:T.initialValue)&&void 0!==n?n:0};let _=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}(It(n),y);const I=function(t,e){var n;let i=(null==e?void 0:e.toDefaultUnit)||P;const r=t[t.length-1];if(q(r)){const t=(null===(n=r.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(i=e=>e+t)}return i}(_,T);if($(f)){const t=f.createAnimation(_,"opacity"!==e,y,E,b);f=t.easing,_=t.keyframes||_,l=t.duration||l}if(mt(E)&&(bt.cssRegisterProperty()?function(t){if(!yt.has(t)){yt.add(t);try{const{syntax:e,initialValue:n}=at.has(t)?at.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(E):w=!1),v&&!bt.linearEasing()&&(j(f)||R(f)&&f.some(j))&&(w=!1),w){T&&(_=_.map((t=>x(t)?T.toDefaultUnit(t):t))),1!==_.length||bt.partialKeyframes()&&!o||_.unshift(y());const e={delay:z.ms(c),duration:z.ms(l),endDelay:z.ms(h),easing:R(f)?void 0:Tt(f,l),direction:p,iterations:u+1,fill:"both"};a=t.animate({[E]:_,offset:g,easing:R(f)?f.map((t=>Tt(t,l))):void 0},e),a.finished||(a.finished=new Promise(((t,e)=>{a.onfinish=t,a.oncancel=e})));const n=_[_.length-1];a.finished.then((()=>{d||(At.set(t,E,n),a.cancel())})).catch(L),m||(a.playbackRate=1.000001)}else if(r&&v)_=_.map((t=>"string"==typeof t?parseFloat(t):t)),1===_.length&&_.unshift(parseFloat(y())),a=new r((e=>{At.set(t,E,I?I(e):e)}),_,Object.assign(Object.assign({},i),{duration:l,easing:f}));else{const e=_[_.length-1];At.set(t,E,T&&x(e)?T.toDefaultUnit(e):e)}return o&&s(t,e,_,{duration:l,delay:c,easing:f,repeat:u,offset:g},"motion-one"),b.setAnimation(a),a}}const Nt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);const kt=t=>t(),xt=(t,e,n=k.duration)=>new Proxy({animations:t.map(kt).filter(Boolean),duration:n,options:e},Rt),Rt={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return z.s((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Ot)).catch(L)),t.finished;case"stop":return()=>{t.animations.forEach((t=>Ct(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=z.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},Ot=t=>t.finished;function Mt(t=.1,{start:e=0,from:n=0,easing:i}={}){return(r,s)=>{const o=x(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,s),a=Math.abs(o-r);let l=t*a;if(i){const e=s*t;l=J(i)(l/e)*e}return e+l}}function Lt(t,e,n){return j(t)?t(e,n):t}const Pt=(Ft=Z,function(t,e,n={}){const i=(t=function(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(t)).length,r=[];for(let s=0;s<i;s++){const o=t[s];for(const t in e){const a=Nt(n,t);a.delay=Lt(a.delay,s,i);const l=Dt(o,t,e[t],a,Ft);r.push(l)}}return xt(r,n,n.duration)});var Ft;function Vt(t,e={}){return xt([()=>{const n=new Z(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function Ut(t,e,n){return(j(t)?Vt:Pt)(t,e,n)}
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
     */const Bt=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},$t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(u=64)),i.push(n[c],n[h],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new jt;const l=r<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qt=function(t){return function(t){const e=Bt(t);return $t.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const zt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ht=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return $t.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},Gt=()=>{try{return zt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||Ht()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Kt=t=>{const e=(t=>{var e,n;return null===(n=null===(e=Gt())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Qt=()=>{var t;return null===(t=Gt())||void 0===t?void 0:t.config};
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
class Wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */class Xt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(Jt,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Xt(i,o,n)}}const Jt=/\{\$([^}]+)}/g;function Zt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(te(n)&&te(s)){if(!Zt(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function te(t){return null!==t&&"object"==typeof t}
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
     */function ee(t){return t&&t._delegate?t._delegate:t}class ne{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const ie="[DEFAULT]";
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
     */class re{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Wt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:ie})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=ie){return this.instances.has(t)}getOptions(t=ie){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===ie?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=ie){return this.component?this.component.multipleInstances?t:ie:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class se{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new re(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var oe;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(oe||(oe={}));const ae={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},le=oe.INFO,ce={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},he=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=ce[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class ue{constructor(t){this.name=t,this._logLevel=le,this._logHandler=he,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ae[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const fe=(t,e)=>e.some((e=>t instanceof e));let de,pe;const ge=new WeakMap,me=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap;let Ee={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return me.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ye.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _e(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function be(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pe||(pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Ie(this),e),_e(ge.get(this))}:function(...e){return _e(t.apply(Ie(this),e))}:function(e,...n){const i=t.call(Ie(this),e,...n);return ye.set(i,e.sort?e.sort():[e]),_e(i)}}function Te(t){return"function"==typeof t?be(t):(t instanceof IDBTransaction&&function(t){if(me.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));me.set(t,e)}(t),fe(t,de||(de=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,Ee):t)}function _e(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(_e(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&ge.set(e,t)})).catch((()=>{})),we.set(e,t),e}(t);if(ve.has(t))return ve.get(t);const e=Te(t);return e!==t&&(ve.set(t,e),we.set(e,t)),e}const Ie=t=>we.get(t);const Se=["get","getKey","getAll","getAllKeys","count"],Ae=["put","add","delete","clear"],Ce=new Map;function De(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Ce.get(e))return Ce.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ae.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Se.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Ce.set(e,s),s}Ee=(t=>({...t,get:(e,n,i)=>De(e,n)||t.get(e,n,i),has:(e,n)=>!!De(e,n)||t.has(e,n)}))(Ee);
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
class Ne{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ke="@firebase/app",xe="0.9.20",Re=new ue("@firebase/app"),Oe="[DEFAULT]",Me={[ke]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Le=new Map,Pe=new Map;function Fe(t,e){try{t.container.addComponent(e)}catch(n){Re.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ve(t){const e=t.name;if(Pe.has(e))return Re.debug(`There were multiple attempts to register component ${e}.`),!1;Pe.set(e,t);for(const e of Le.values())Fe(e,t);return!0}
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
const Ue=new Yt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Be{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ne("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}
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
     */function $e(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:Oe,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Ue.create("bad-app-name",{appName:String(r)});if(n||(n=Qt()),!n)throw Ue.create("no-options");const s=Le.get(r);if(s){if(Zt(n,s.options)&&Zt(i,s.config))return s;throw Ue.create("duplicate-app",{appName:r})}const o=new se(r);for(const t of Pe.values())o.addComponent(t);const a=new Be(n,i,o);return Le.set(r,a),a}function je(t,e,n){var i;let r=null!==(i=Me[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Re.warn(t.join(" "))}Ve(new ne(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
     */const qe="firebase-heartbeat-database",ze=1,He="firebase-heartbeat-store";let Ge=null;function Ke(){return Ge||(Ge=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=_e(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(_e(o.result),t.oldVersion,t.newVersion,_e(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(qe,ze,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(He)}}).catch((t=>{throw Ue.create("idb-open",{originalErrorMessage:t.message})}))),Ge}async function Qe(t,e){try{const n=(await Ke()).transaction(He,"readwrite"),i=n.objectStore(He);await i.put(e,We(t)),await n.done}catch(t){if(t instanceof Xt)Re.warn(t.message);else{const e=Ue.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Re.warn(e.message)}}}function We(t){return`${t.name}!${t.options.appId}`}
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
     */class Xe{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Je(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Ye();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ye(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ze(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ze(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=qt(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ye(){return(new Date).toISOString().substring(0,10)}class Je{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await Ke();return await e.transaction(He).objectStore(He).get(We(t))}catch(t){if(t instanceof Xt)Re.warn(t.message);else{const e=Ue.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Re.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ze(t){return qt(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var tn;tn="",Ve(new ne("platform-logger",(t=>new Ne(t)),"PRIVATE")),Ve(new ne("heartbeat",(t=>new Xe(t)),"PRIVATE")),je(ke,xe,tn),je(ke,xe,"esm2017"),je("fire-js","");
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
je("firebase","10.5.0","app");var en,nn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},rn=rn||{},sn=nn||self;function on(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function an(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ln="closure_uid_"+(1e9*Math.random()>>>0),cn=0;function hn(t,e,n){return t.call.apply(t.bind,arguments)}function un(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function fn(t,e,n){return(fn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?hn:un).apply(null,arguments)}function dn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function pn(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function gn(){this.s=this.s,this.o=this.o}gn.prototype.s=!1,gn.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ln)&&t[ln]||(t[ln]=++cn))},gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function vn(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(on(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function wn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wn.prototype.h=function(){this.defaultPrevented=!0};var En=function(){if(!sn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{sn.addEventListener("test",(()=>{}),e),sn.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function bn(t){return/^[\s\xa0]*$/.test(t)}function Tn(){var t=sn.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return-1!=Tn().indexOf(t)}function In(t){return In[" "](t),t}In[" "]=function(){};var Sn,An,Cn,Dn=_n("Opera"),Nn=_n("Trident")||_n("MSIE"),kn=_n("Edge"),xn=kn||Nn,Rn=_n("Gecko")&&!(-1!=Tn().toLowerCase().indexOf("webkit")&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),On=-1!=Tn().toLowerCase().indexOf("webkit")&&!_n("Edge");function Mn(){var t=sn.document;return t?t.documentMode:void 0}t:{var Ln="",Pn=(An=Tn(),Rn?/rv:([^\);]+)(\)|;)/.exec(An):kn?/Edge\/([\d\.]+)/.exec(An):Nn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(An):On?/WebKit\/(\S+)/.exec(An):Dn?/(?:Version)[ \/]?(\S+)/.exec(An):void 0);if(Pn&&(Ln=Pn?Pn[1]:""),Nn){var Fn=Mn();if(null!=Fn&&Fn>parseFloat(Ln)){Sn=String(Fn);break t}}Sn=Ln}if(sn.document&&Nn){var Vn=Mn();Cn=Vn||(parseInt(Sn,10)||void 0)}else Cn=void 0;var Un=Cn;function Bn(t,e){if(wn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rn){t:{try{In(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$n[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bn.$.h.call(this)}}pn(Bn,wn);var $n={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),qn=0;function zn(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++qn,this.fa=this.ia=!1}function Hn(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Kn(t){const e={};for(const n in t)e[n]=t[n];return e}const Qn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wn(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Qn.length;e++)n=Qn[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Xn(t){this.src=t,this.g={},this.h=0}function Yn(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=mn(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Hn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Jn(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}Xn.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Jn(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new zn(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var Zn="closure_lm_"+(1e6*Math.random()|0),ti={};function ei(t,e,n,i,r){if(i&&i.once)return ii(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ei(t,e[s],n,i,r);return null}return n=hi(n),t&&t[jn]?t.O(e,n,an(i)?!!i.capture:!!i,r):ni(t,e,n,!1,i,r)}function ni(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=an(r)?!!r.capture:!!r,a=li(t);if(a||(t[Zn]=a=new Xn(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ai;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)En||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(oi(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ii(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ii(t,e[s],n,i,r);return null}return n=hi(n),t&&t[jn]?t.P(e,n,an(i)?!!i.capture:!!i,r):ni(t,e,n,!0,i,r)}function ri(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ri(t,e[s],n,i,r);else i=an(i)?!!i.capture:!!i,n=hi(n),t&&t[jn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Jn(s=t.g[e],n,i,r))&&(Hn(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=li(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jn(e,n,i,r)),(n=-1<t?e[t]:null)&&si(n))}function si(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[jn])Yn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(oi(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=li(e))?(Yn(n,t),0==n.h&&(n.src=null,e[Zn]=null)):Hn(t)}}}function oi(t){return t in ti?ti[t]:ti[t]="on"+t}function ai(t,e){if(t.fa)t=!0;else{e=new Bn(e,this);var n=t.listener,i=t.la||t.src;t.ia&&si(t),t=n.call(i,e)}return t}function li(t){return(t=t[Zn])instanceof Xn?t:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(t){return"function"==typeof t?t:(t[ci]||(t[ci]=function(e){return t.handleEvent(e)}),t[ci])}function ui(){gn.call(this),this.i=new Xn(this),this.S=this,this.J=null}function fi(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new wn(e,t);else if(e instanceof wn)e.target=e.target||t;else{var r=e;Wn(e=new wn(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=di(o,i,!0,e)&&r}if(r=di(o=e.g=t,i,!0,e)&&r,r=di(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=di(o=e.g=n[s],i,!1,e)&&r}function di(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Yn(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}pn(ui,gn),ui.prototype[jn]=!0,ui.prototype.removeEventListener=function(t,e,n,i){ri(this,t,e,n,i)},ui.prototype.N=function(){if(ui.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Hn(n[i]);delete e.g[t],e.h--}}this.J=null},ui.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ui.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var pi=sn.JSON.stringify;function gi(){var t=Ti;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var mi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new yi),(t=>t.reset()));class yi{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function vi(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function wi(t){sn.setTimeout((()=>{throw t}),0)}let Ei,bi=!1,Ti=new class{constructor(){this.h=this.g=null}add(t,e){const n=mi.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},_i=()=>{const t=sn.Promise.resolve(void 0);Ei=()=>{t.then(Ii)}};var Ii=()=>{for(var t;t=gi();){try{t.h.call(t.g)}catch(t){wi(t)}var e=mi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bi=!1};function Si(t,e){ui.call(this),this.h=t||1,this.g=e||sn,this.j=fn(this.qb,this),this.l=Date.now()}function Ai(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ci(t,e,n){if("function"==typeof t)n&&(t=fn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=fn(t.handleEvent,t)}return 2147483647<Number(e)?-1:sn.setTimeout(t,e||0)}function Di(t){t.g=Ci((()=>{t.g=null,t.i&&(t.i=!1,Di(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}pn(Si,ui),(en=Si.prototype).ga=!1,en.T=null,en.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fi(this,"tick"),this.ga&&(Ai(this),this.start()))}},en.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},en.N=function(){Si.$.N.call(this),Ai(this),delete this.g};class Ni extends gn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(sn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(t){gn.call(this),this.h=t,this.g={}}pn(ki,gn);var xi=[];function Ri(t,e,n,i){Array.isArray(n)||(n&&(xi[0]=n.toString()),n=xi);for(var r=0;r<n.length;r++){var s=ei(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Oi(t){Gn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&si(t)}),t),t.g={}}function Mi(){this.g=!0}function Li(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return pi(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}ki.prototype.N=function(){ki.$.N.call(this),Oi(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Mi.prototype.Ea=function(){this.g=!1},Mi.prototype.info=function(){};var Pi={},Fi=null;function Vi(){return Fi=Fi||new ui}function Ui(t){wn.call(this,Pi.Ta,t)}function Bi(t){const e=Vi();fi(e,new Ui(e))}function $i(t,e){wn.call(this,Pi.STAT_EVENT,t),this.stat=e}function ji(t){const e=Vi();fi(e,new $i(e,t))}function qi(t,e){wn.call(this,Pi.Ua,t),this.size=e}function zi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return sn.setTimeout((function(){t()}),e)}Pi.Ta="serverreachability",pn(Ui,wn),Pi.STAT_EVENT="statevent",pn($i,wn),Pi.Ua="timingevent",pn(qi,wn);var Hi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ki(){}function Qi(t){return t.h||(t.h=t.i())}function Wi(){}Ki.prototype.h=null;var Xi,Yi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ji(){wn.call(this,"d")}function Zi(){wn.call(this,"c")}function tr(){}function er(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new ki(this),this.P=ir,t=xn?125:void 0,this.V=new Si(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nr}function nr(){this.i=null,this.g="",this.h=!1}pn(Ji,wn),pn(Zi,wn),pn(tr,Ki),tr.prototype.g=function(){return new XMLHttpRequest},tr.prototype.i=function(){return{}},Xi=new tr;var ir=45e3,rr={},sr={};function or(t,e,n){t.L=1,t.v=Sr(Er(e)),t.s=n,t.S=!0,ar(t,null)}function ar(t,e){t.G=Date.now(),ur(t),t.A=Er(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Vr(n.i,"t",i),t.C=0,n=t.l.J,t.h=new nr,t.g=Vs(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ni(fn(t.Pa,t,t.g),t.O)),Ri(t.U,t.g,"readystatechange",t.nb),e=t.I?Kn(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Bi(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function lr(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function cr(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=hr(t,n),i==sr){4==e&&(t.o=4,ji(14),r=!1),Li(t.j,t.m,null,"[Incomplete Response]");break}if(i==rr){t.o=4,ji(15),Li(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Li(t.j,t.m,i,null),mr(t,i)}lr(t)&&i!=sr&&i!=rr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ji(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ks(e),e.M=!0,ji(11))):(Li(t.j,t.m,n,"[Invalid Chunked Response]"),gr(t),pr(t))}function hr(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?sr:(n=Number(e.substring(n,i)),isNaN(n)?rr:(i+=1)+n>e.length?sr:(e=e.slice(i,i+n),t.C=i+n,e))}function ur(t){t.Y=Date.now()+t.P,fr(t,t.P)}function fr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=zi(fn(t.lb,t),e)}function dr(t){t.B&&(sn.clearTimeout(t.B),t.B=null)}function pr(t){0==t.l.H||t.J||Os(t.l,t)}function gr(t){dr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ai(t.V),Oi(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mr(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Hr(n.i,t)))if(!t.K&&Hr(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Rs(n),Ts(n)}Ns(n),ji(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=zi(fn(n.ib,n),6e3));if(1>=zr(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Ls(n,11)}else if((t.K||n.g==t)&&Rs(n),!bn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Gr(s,s.h),s.h=null))}if(i.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Ir(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Fs(i,i.J?i.pa:null,i.Y),o.K){Kr(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(dr(a),ur(a)),i.g=o}else Ds(i);0<n.j.length&&Is(n)}else"stop"!=c[0]&&"close"!=c[0]||Ls(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ls(n,7):bs(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Bi()}catch(t){}}function yr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(on(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(on(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(on(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(en=er.prototype).setTimeout=function(t){this.P=t},en.nb=function(t){t=t.target;const e=this.M;e&&3==gs(t)?e.l():this.Pa(t)},en.Pa=function(t){try{if(t==this.g)t:{const h=gs(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||xn||this.g&&(this.h.h||this.g.ja()||ms(this.g)))){this.J||4!=h||7==e||Bi(),dr(this);var n=this.g.da();this.ca=n;e:if(lr(this)){var i=ms(this.g);t="";var r=i.length,s=4==gs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){gr(this),pr(this);var o="";break e}this.h.i=new sn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ji(12),gr(this),pr(this);break t}Li(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,n)}this.S?(cr(this,h,o),xn&&this.i&&3==h&&(Ri(this.U,this.V,"tick",this.mb),this.V.start())):(Li(this.j,this.m,o,null),mr(this,o)),4==h&&gr(this),this.i&&!this.J&&(4==h?Os(this.l,this):(this.i=!1,ur(this)))}else(function(t){const e={};t=(t.g&&2<=gs(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(bn(t[i]))continue;var n=vi(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ji(12)):(this.o=0,ji(13)),gr(this),pr(this)}}}catch(t){}},en.mb=function(){if(this.g){var t=gs(this.g),e=this.g.ja();this.C<e.length&&(dr(this),cr(this,t,e),this.i&&4!=t&&ur(this))}},en.cancel=function(){this.J=!0,gr(this)},en.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Bi(),ji(17)),gr(this),this.o=2,pr(this)):fr(this,this.Y-t)};var vr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wr){this.h=t.h,br(this,t.j),this.s=t.s,this.g=t.g,Tr(this,t.m),this.l=t.l;var e=t.i,n=new Mr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_r(this,n),this.o=t.o}else t&&(e=String(t).match(vr))?(this.h=!1,br(this,e[1]||"",!0),this.s=Ar(e[2]||""),this.g=Ar(e[3]||"",!0),Tr(this,e[4]),this.l=Ar(e[5]||"",!0),_r(this,e[6]||"",!0),this.o=Ar(e[7]||"")):(this.h=!1,this.i=new Mr(null,this.h))}function Er(t){return new wr(t)}function br(t,e,n){t.j=n?Ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _r(t,e,n){e instanceof Mr?(t.i=e,function(t,e){e&&!t.j&&(Lr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Pr(this,e),Vr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Cr(e,Rr)),t.i=new Mr(e,t.h))}function Ir(t,e,n){t.i.set(e,n)}function Sr(t){return Ir(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Dr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Dr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cr(e,Nr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Cr(e,Nr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Cr(n,"/"==n.charAt(0)?xr:kr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cr(n,Or)),t.join("")};var Nr=/[#\/\?@]/g,kr=/[#\?:]/g,xr=/[#\?]/g,Rr=/[#\?@]/g,Or=/#/g;function Mr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Pr(t,e){Lr(t),e=Ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fr(t,e){return Lr(t),e=Ur(t,e),t.g.has(e)}function Vr(t,e,n){Pr(t,e),0<n.length&&(t.i=null,t.g.set(Ur(t,e),yn(n)),t.h+=n.length)}function Ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(en=Mr.prototype).add=function(t,e){Lr(this),this.i=null,t=Ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},en.forEach=function(t,e){Lr(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},en.ta=function(){Lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},en.Z=function(t){Lr(this);let e=[];if("string"==typeof t)Fr(this,t)&&(e=e.concat(this.g.get(Ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},en.set=function(t,e){return Lr(this),this.i=null,Fr(this,t=Ur(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},en.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},en.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var Br=class{constructor(t,e){this.g=t,this.map=e}};function $r(t){this.l=t||jr,sn.PerformanceNavigationTiming?t=0<(t=sn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(sn.g&&sn.g.Ka&&sn.g.Ka()&&sn.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jr=10;function qr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function zr(t){return t.h?1:t.g?t.g.size:0}function Hr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Gr(t,e){t.g?t.g.add(e):t.h=e}function Kr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Qr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yn(t.i)}$r.prototype.cancel=function(){if(this.i=Qr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Wr=class{stringify(t){return sn.JSON.stringify(t,void 0)}parse(t){return sn.JSON.parse(t,void 0)}};function Xr(){this.g=new Wr}function Yr(t,e,n){const i=n||"";try{yr(t,(function(t,n){let r=t;an(t)&&(r=pi(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Jr(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Zr(t){this.l=t.ec||null,this.j=t.ob||!1}function ts(t,e){ui.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=es,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pn(Zr,Ki),Zr.prototype.g=function(){return new ts(this.l,this.j)},Zr.prototype.i=function(t){return function(){return t}}({}),pn(ts,ui);var es=0;function ns(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function is(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rs(t)}function rs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(en=ts.prototype).open=function(t,e){if(this.readyState!=es)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rs(this)},en.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||sn).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},en.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,is(this)),this.readyState=es},en.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==sn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ns(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},en.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?is(this):rs(this),3==this.readyState&&ns(this)}},en.Za=function(t){this.g&&(this.response=this.responseText=t,is(this))},en.Ya=function(t){this.g&&(this.response=t,is(this))},en.ka=function(){this.g&&is(this)},en.setRequestHeader=function(t,e){this.v.append(t,e)},en.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},en.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ss=sn.JSON.parse;function os(t){ui.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=as,this.L=this.M=!1}pn(os,ui);var as="",ls=/^https?$/i,cs=["POST","PUT"];function hs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,us(t),ds(t)}function us(t){t.F||(t.F=!0,fi(t,"complete"),fi(t,"error"))}function fs(t){if(t.h&&void 0!==rn&&(!t.C[1]||4!=gs(t)||2!=t.da()))if(t.v&&4==gs(t))Ci(t.La,0,t);else if(fi(t,"readystatechange"),4==gs(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(vr)[1]||null;!r&&sn.self&&sn.self.location&&(r=sn.self.location.protocol.slice(0,-1)),i=!ls.test(r?r.toLowerCase():"")}n=i}if(n)fi(t,"complete"),fi(t,"success");else{t.m=6;try{var s=2<gs(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",us(t)}}finally{ds(t)}}}function ds(t,e){if(t.g){ps(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||fi(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ps(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(sn.clearTimeout(t.A),t.A=null)}function gs(t){return t.g?t.g.readyState:0}function ms(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case as:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ys(t){let e="";return Gn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function vs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ys(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ir(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Es(t){this.Ga=0,this.j=[],this.l=new Mi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ws("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ws("baseRetryDelayMs",5e3,t),this.hb=ws("retryDelaySeedMs",1e4,t),this.eb=ws("forwardChannelMaxRetries",2,t),this.xa=ws("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $r(t&&t.concurrentRequestLimit),this.Ja=new Xr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function bs(t){if(_s(t),3==t.H){var e=t.W++,n=Er(t.I);if(Ir(n,"SID",t.K),Ir(n,"RID",e),Ir(n,"TYPE","terminate"),As(t,n),(e=new er(t,t.l,e)).L=2,e.v=Sr(Er(n)),n=!1,sn.navigator&&sn.navigator.sendBeacon)try{n=sn.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&sn.Image&&((new Image).src=e.v,n=!0),n||(e.g=Vs(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ur(e)}Ps(t)}function Ts(t){t.g&&(ks(t),t.g.cancel(),t.g=null)}function _s(t){Ts(t),t.u&&(sn.clearTimeout(t.u),t.u=null),Rs(t),t.i.cancel(),t.m&&("number"==typeof t.m&&sn.clearTimeout(t.m),t.m=null)}function Is(t){if(!qr(t.i)&&!t.m){t.m=!0;var e=t.Na;Ei||_i(),bi||(Ei(),bi=!0),Ti.add(e,t),t.C=0}}function Ss(t,e){var n;n=e?e.m:t.W++;const i=Er(t.I);Ir(i,"SID",t.K),Ir(i,"RID",n),Ir(i,"AID",t.V),As(t,i),t.o&&t.s&&vs(i,t.o,t.s),n=new er(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Cs(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gr(t.i,n),or(n,i,e)}function As(t,e){t.na&&Gn(t.na,(function(t,n){Ir(e,n,t)})),t.h&&yr({},(function(t,n){Ir(e,n,t)}))}function Cs(t,e,n){n=Math.min(t.j.length,n);var i=t.h?fn(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{Yr(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Ds(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ei||_i(),bi||(Ei(),bi=!0),Ti.add(e,t),t.A=0}}function Ns(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=zi(fn(t.Ma,t),Ms(t,t.A)),t.A++,!0)}function ks(t){null!=t.B&&(sn.clearTimeout(t.B),t.B=null)}function xs(t){t.g=new er(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Er(t.wa);Ir(e,"RID","rpc"),Ir(e,"SID",t.K),Ir(e,"AID",t.V),Ir(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ir(e,"TO",t.qa),Ir(e,"TYPE","xmlhttp"),As(t,e),t.o&&t.s&&vs(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Sr(Er(e)),n.s=null,n.S=!0,ar(n,t)}function Rs(t){null!=t.v&&(sn.clearTimeout(t.v),t.v=null)}function Os(t,e){var n=null;if(t.g==e){Rs(t),ks(t),t.g=null;var i=2}else{if(!Hr(t.i,e))return;n=e.F,Kr(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;fi(i=Vi(),new qi(i,n)),Is(t)}else Ds(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(zr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=zi(fn(t.Na,t,e),Ms(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ns(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ls(t,5);break;case 4:Ls(t,10);break;case 3:Ls(t,6);break;default:Ls(t,2)}}function Ms(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ls(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=fn(t.pb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),sn.location&&"http"==sn.location.protocol||br(n,"https"),Sr(n)),function(t,e){const n=new Mi;if(sn.Image){const i=new Image;i.onload=dn(Jr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=dn(Jr,n,i,"TestLoadImage: error",!1,e),i.onabort=dn(Jr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=dn(Jr,n,i,"TestLoadImage: timeout",!1,e),sn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else ji(2);t.H=0,t.h&&t.h.za(e),Ps(t),_s(t)}function Ps(t){if(t.H=0,t.ma=[],t.h){const e=Qr(t.i);0==e.length&&0==t.j.length||(vn(t.ma,e),vn(t.ma,t.j),t.i.i.length=0,yn(t.j),t.j.length=0),t.h.ya()}}function Fs(t,e,n){var i=n instanceof wr?Er(n):new wr(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Tr(i,i.m);else{var r=sn.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new wr(null);i&&br(s,i),e&&(s.g=e),r&&Tr(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Ir(i,n,e),Ir(i,"VER",t.ra),As(t,i),i}function Vs(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new os(new Zr({ob:!0})):new os(t.va)).Oa(t.J),e}function Us(){}function Bs(){if(Nn&&!(10<=Number(Un)))throw Error("Environmental error: no available transport.")}function $s(t,e){ui.call(this),this.g=new Es(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bn(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new zs(this)}function js(t){Ji.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function qs(){Zi.call(this),this.status=1}function zs(t){this.g=t}function Hs(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Gs(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function Ks(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(en=os.prototype).Oa=function(t){this.M=t},en.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?Qi(this.u):Qi(Xi),this.g.onreadystatechange=fn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void hs(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=sn.FormData&&t instanceof sn.FormData,!(0<=mn(cs,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ps(this),0<this.B&&((this.L=function(t){return Nn&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fn(this.ua,this)):this.A=Ci(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){hs(this,t)}},en.ua=function(){void 0!==rn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fi(this,"timeout"),this.abort(8))},en.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fi(this,"complete"),fi(this,"abort"),ds(this))},en.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ds(this,!0)),os.$.N.call(this)},en.La=function(){this.s||(this.G||this.v||this.l?fs(this):this.kb())},en.kb=function(){fs(this)},en.isActive=function(){return!!this.g},en.da=function(){try{return 2<gs(this)?this.g.status:-1}catch(t){return-1}},en.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},en.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ss(e)}},en.Ia=function(){return this.m},en.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(en=Es.prototype).ra=8,en.H=1,en.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new er(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Kn(s),Wn(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Cs(this,r,e),Ir(n=Er(this.I),"RID",t),Ir(n,"CVER",22),this.F&&Ir(n,"X-HTTP-Session-Id",this.F),As(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ys(s)))+"&"+e:this.o&&vs(n,this.o,s)),Gr(this.i,r),this.bb&&Ir(n,"TYPE","init"),this.P?(Ir(n,"$req",e),Ir(n,"SID","null"),r.aa=!0,or(r,n,null)):or(r,n,e),this.H=2}}else 3==this.H&&(t?Ss(this,t):0==this.j.length||qr(this.i)||Ss(this))},en.Ma=function(){if(this.u=null,xs(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zi(fn(this.jb,this),t)}},en.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ji(10),Ts(this),xs(this))},en.ib=function(){null!=this.v&&(this.v=null,Ts(this),Ns(this),ji(19))},en.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ji(2)):(this.l.info("Failed to ping google.com"),ji(1))},en.isActive=function(){return!!this.h&&this.h.isActive(this)},(en=Us.prototype).Ba=function(){},en.Aa=function(){},en.za=function(){},en.ya=function(){},en.isActive=function(){return!0},en.Va=function(){},Bs.prototype.g=function(t,e){return new $s(t,e)},pn($s,ui),$s.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ji(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Fs(t,null,t.Y),Is(t)},$s.prototype.close=function(){bs(this.g)},$s.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=pi(t),t=n);e.j.push(new Br(e.fb++,t)),3==e.H&&Is(e)},$s.prototype.N=function(){this.g.h=null,delete this.j,bs(this.g),delete this.g,$s.$.N.call(this)},pn(js,Ji),pn(qs,Zi),pn(zs,Us),zs.prototype.Ba=function(){fi(this.g,"a")},zs.prototype.Aa=function(t){fi(this.g,new js(t))},zs.prototype.za=function(t){fi(this.g,new qs)},zs.prototype.ya=function(){fi(this.g,"b")},pn(Hs,(function(){this.blockSize=-1})),Hs.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Hs.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)Gs(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Gs(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Gs(this,i),r=0;break}}this.h=r,this.i+=e},Hs.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var Qs={};function Ws(t){return-128<=t&&128>t?function(t,e){var n=Qs;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Ks([0|t],0>t?-1:0)})):new Ks([0|t],0>t?-1:0)}function Xs(t){if(isNaN(t)||!isFinite(t))return Js;if(0>t)return io(Xs(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ys;return new Ks(e,0)}var Ys=4294967296,Js=Ws(0),Zs=Ws(1),to=Ws(16777216);function eo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function no(t){return-1==t.h}function io(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Ks(n,~t.h).add(Zs)}function ro(t,e){return t.add(io(e))}function so(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function oo(t,e){this.g=t,this.h=e}function ao(t,e){if(eo(e))throw Error("division by zero");if(eo(t))return new oo(Js,Js);if(no(t))return e=ao(io(t),e),new oo(io(e.g),io(e.h));if(no(e))return e=ao(t,io(e)),new oo(io(e.g),e.h);if(30<t.g.length){if(no(t)||no(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Zs,i=e;0>=i.X(t);)n=lo(n),i=lo(i);var r=co(n,1),s=co(i,1);for(i=co(i,2),n=co(n,2);!eo(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=co(i,1),n=co(n,1)}return e=ro(t,r.R(e)),new oo(r,e)}for(r=Js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=Xs(n)).R(e);no(o)||0<o.X(t);)o=(s=Xs(n-=i)).R(e);eo(s)&&(s=Zs),r=r.add(s),t=ro(t,o)}return new oo(r,t)}function lo(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Ks(n,t.h)}function co(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ks(r,t.h)}(en=Ks.prototype).ea=function(){if(no(this))return-io(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ys+i)*e,e*=Ys}return t},en.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(eo(this))return"0";if(no(this))return"-"+io(this).toString(t);for(var e=Xs(Math.pow(t,6)),n=this,i="";;){var r=ao(n,e).g,s=((0<(n=ro(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(eo(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},en.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},en.X=function(t){return no(t=ro(this,t))?-1:eo(t)?0:1},en.abs=function(){return no(this)?io(this):this},en.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Ks(n,-2147483648&n[n.length-1]?-1:0)},en.R=function(t){if(eo(this)||eo(t))return Js;if(no(this))return no(t)?io(this).R(io(t)):io(io(this).R(t));if(no(t))return io(this.R(io(t)));if(0>this.X(to)&&0>t.X(to))return Xs(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=o*l,so(n,2*i+2*r),n[2*i+2*r+1]+=s*l,so(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,so(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,so(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Ks(n,0)},en.gb=function(t){return ao(this,t).h},en.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Ks(n,this.h&t.h)},en.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Ks(n,this.h|t.h)},en.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Ks(n,this.h^t.h)},Bs.prototype.createWebChannel=Bs.prototype.g,$s.prototype.send=$s.prototype.u,$s.prototype.open=$s.prototype.m,$s.prototype.close=$s.prototype.close,Hi.NO_ERROR=0,Hi.TIMEOUT=8,Hi.HTTP_ERROR=6,Gi.COMPLETE="complete",Wi.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",ui.prototype.listen=ui.prototype.O,os.prototype.listenOnce=os.prototype.P,os.prototype.getLastError=os.prototype.Sa,os.prototype.getLastErrorCode=os.prototype.Ia,os.prototype.getStatus=os.prototype.da,os.prototype.getResponseJson=os.prototype.Wa,os.prototype.getResponseText=os.prototype.ja,os.prototype.send=os.prototype.ha,os.prototype.setWithCredentials=os.prototype.Oa,Hs.prototype.digest=Hs.prototype.l,Hs.prototype.reset=Hs.prototype.reset,Hs.prototype.update=Hs.prototype.j,Ks.prototype.add=Ks.prototype.add,Ks.prototype.multiply=Ks.prototype.R,Ks.prototype.modulo=Ks.prototype.gb,Ks.prototype.compare=Ks.prototype.X,Ks.prototype.toNumber=Ks.prototype.ea,Ks.prototype.toString=Ks.prototype.toString,Ks.prototype.getBits=Ks.prototype.D,Ks.fromNumber=Xs,Ks.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return io(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Xs(Math.pow(n,8)),r=Js,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Xs(Math.pow(n,o)),r=r.R(o).add(Xs(a))):r=(r=r.R(i)).add(Xs(a))}return r};var ho=Hi,uo=Gi,fo=Pi,po=10,go=11,mo=Wi,yo=os,vo=Ks;const wo="@firebase/firestore";
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
     */class Eo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Eo.UNAUTHENTICATED=new Eo(null),Eo.GOOGLE_CREDENTIALS=new Eo("google-credentials-uid"),Eo.FIRST_PARTY=new Eo("first-party-uid"),Eo.MOCK_USER=new Eo("mock-user");
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
let bo="10.5.0";
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
     */const To=new ue("@firebase/firestore");function _o(){return To.logLevel}function Io(t,...e){if(To.logLevel<=oe.DEBUG){const n=e.map(Co);To.debug(`Firestore (${bo}): ${t}`,...n)}}function So(t,...e){if(To.logLevel<=oe.ERROR){const n=e.map(Co);To.error(`Firestore (${bo}): ${t}`,...n)}}function Ao(t,...e){if(To.logLevel<=oe.WARN){const n=e.map(Co);To.warn(`Firestore (${bo}): ${t}`,...n)}}function Co(t){if("string"==typeof t)return t;try{
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
     */function Do(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw So(e),new Error(e)}function No(t,e){t||Do()}function ko(t,e){return t}
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
     */const xo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ro extends Xt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Oo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Mo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Eo.UNAUTHENTICATED)))}shutdown(){}}class Po{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Fo{constructor(t){this.t=t,this.currentUser=Eo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Oo;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Oo,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Io("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Io("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Oo)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Io("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(No("string"==typeof e.accessToken),new Mo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return No(null===t||"string"==typeof t),new Eo(t)}}class Vo{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Eo.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uo{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Vo(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Eo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $o{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Io("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Io("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Io("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Io("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(No("string"==typeof t.token),this.R=t.token,new Bo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function jo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class qo{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=jo(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function zo(t,e){return t<e?-1:t>e?1:0}function Ho(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
     */class Go{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ro(xo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ro(xo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ro(xo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ro(xo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Go.fromMillis(Date.now())}static fromDate(t){return Go.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Go(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?zo(this.nanoseconds,t.nanoseconds):zo(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class Ko{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ko(t)}static min(){return new Ko(new Go(0,0))}static max(){return new Ko(new Go(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class Qo{constructor(t,e,n){void 0===e?e=0:e>t.length&&Do(),void 0===n?n=t.length-e:n>t.length-e&&Do(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Qo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Wo extends Qo{construct(t,e,n){return new Wo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ro(xo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Wo(e)}static emptyPath(){return new Wo([])}}const Xo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yo extends Qo{construct(t,e,n){return new Yo(t,e,n)}static isValidIdentifier(t){return Xo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Yo(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Ro(xo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ro(xo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ro(xo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Ro(xo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Yo(e)}static emptyPath(){return new Yo([])}}
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
     */class Jo{constructor(t){this.path=t}static fromPath(t){return new Jo(Wo.fromString(t))}static fromName(t){return new Jo(Wo.fromString(t).popFirst(5))}static empty(){return new Jo(Wo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Wo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Wo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Jo(new Wo(t.slice()))}}function Zo(t){return new ta(t.readTime,t.key,-1)}class ta{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ta(Ko.min(),Jo.empty(),-1)}static max(){return new ta(Ko.max(),Jo.empty(),-1)}}function ea(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Jo.comparator(t.documentKey,e.documentKey),0!==n?n:zo(t.largestBatchId,e.largestBatchId))}
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
     */const na="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ia{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
     */async function ra(t){if(t.code!==xo.FAILED_PRECONDITION||t.message!==na)throw t;Io("LocalStore","Unexpectedly lost primary lease")}
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
     */class sa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Do(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new sa(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof sa?e:sa.resolve(e)}catch(t){return sa.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):sa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):sa.reject(e)}static resolve(t){return new sa(((e,n)=>{e(t)}))}static reject(t){return new sa(((e,n)=>{n(t)}))}static waitFor(t){return new sa(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=sa.resolve(!1);for(const n of t)e=e.next((t=>t?sa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new sa(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new sa(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}function oa(t){return"IndexedDbTransactionError"===t.name}
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
     */class aa{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function la(t){return null==t}function ca(t){return 0===t&&1/t==-1/0}
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
function ha(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ua(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */aa.ae=-1;class da{constructor(t,e){this.comparator=t,this.root=e||ga.EMPTY}insert(t,e){return new da(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ga.BLACK,null,null))}remove(t){return new da(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ga.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pa(this.root,t,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pa(this.root,t,this.comparator,!0)}}class pa{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ga{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ga.RED,this.left=null!=i?i:ga.EMPTY,this.right=null!=r?r:ga.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new ga(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ga.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ga.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ga.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ga.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Do();if(this.right.isRed())throw Do();const t=this.left.check();if(t!==this.right.check())throw Do();return t+(this.isRed()?0:1)}}ga.EMPTY=null,ga.RED=!0,ga.BLACK=!1,ga.EMPTY=new class{constructor(){this.size=0}get key(){throw Do()}get value(){throw Do()}get color(){throw Do()}get left(){throw Do()}get right(){throw Do()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ga(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ma{constructor(t){this.comparator=t,this.data=new da(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ya(this.data.getIterator())}getIteratorFrom(t){return new ya(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ma))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ma(this.comparator);return e.data=t,e}}class ya{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class va{constructor(t){this.fields=t,t.sort(Yo.comparator)}static empty(){return new va([])}unionWith(t){let e=new ma(Yo.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new va(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ho(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class Ea{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new wa("Invalid base64 string: "+t):t}}(t);return new Ea(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ea(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return zo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ea.EMPTY_BYTE_STRING=new Ea("");const ba=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ta(t){if(No(!!t),"string"==typeof t){let e=0;const n=ba.exec(t);if(No(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_a(t.seconds),nanos:_a(t.nanos)}}function _a(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ia(t){return"string"==typeof t?Ea.fromBase64String(t):Ea.fromUint8Array(t)}
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
     */function Sa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Aa(t){const e=t.mapValue.fields.__previous_value__;return Sa(e)?Aa(e):e}function Ca(t){const e=Ta(t.mapValue.fields.__local_write_time__.timestampValue);return new Go(e.seconds,e.nanos)}
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
     */class Da{constructor(t,e,n,i,r,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Na{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Na("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Na&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const ka={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xa(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sa(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:Do()}function Ra(t,e){if(t===e)return!0;const n=xa(t);if(n!==xa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ta(t.timestampValue),i=Ta(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ia(t.bytesValue).isEqual(Ia(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _a(t.geoPointValue.latitude)===_a(e.geoPointValue.latitude)&&_a(t.geoPointValue.longitude)===_a(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _a(t.integerValue)===_a(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_a(t.doubleValue),i=_a(e.doubleValue);return n===i?ca(n)===ca(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Ho(t.arrayValue.values||[],e.arrayValue.values||[],Ra);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ha(n)!==ha(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Ra(n[t],i[t])))return!1;return!0}(t,e);default:return Do()}}function Oa(t,e){return void 0!==(t.values||[]).find((t=>Ra(t,e)))}function Ma(t,e){if(t===e)return 0;const n=xa(t),i=xa(e);if(n!==i)return zo(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return zo(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_a(t.integerValue||t.doubleValue),i=_a(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return La(t.timestampValue,e.timestampValue);case 4:return La(Ca(t),Ca(e));case 5:return zo(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ia(t),i=Ia(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=zo(n[t],i[t]);if(0!==e)return e}return zo(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=zo(_a(t.latitude),_a(e.latitude));return 0!==n?n:zo(_a(t.longitude),_a(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Ma(n[t],i[t]);if(e)return e}return zo(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ka.mapValue&&e===ka.mapValue)return 0;if(t===ka.mapValue)return 1;if(e===ka.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=zo(i[t],s[t]);if(0!==e)return e;const o=Ma(n[i[t]],r[s[t]]);if(0!==o)return o}return zo(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Do()}}function La(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return zo(t,e);const n=Ta(t),i=Ta(e),r=zo(n.seconds,i.seconds);return 0!==r?r:zo(n.nanos,i.nanos)}function Pa(t){return Fa(t)}function Fa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ta(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ia(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Jo.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Fa(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Fa(t.fields[r])}`;return n+"}"}(t.mapValue):Do()}function Va(t){return!!t&&"integerValue"in t}function Ua(t){return!!t&&"arrayValue"in t}function Ba(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ua(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=$a(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ja{constructor(t){this.value=t}static empty(){return new ja({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ba(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$a(e)}setAll(t){let e=Yo.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=$a(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Ba(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ra(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ua(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new ja($a(this.value))}}function qa(t){const e=[];return ua(t.fields,((t,n)=>{const i=new Yo([t]);if(Ba(n)){const t=qa(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new va(e)
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
     */}class za{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new za(t,0,Ko.min(),Ko.min(),Ko.min(),ja.empty(),0)}static newFoundDocument(t,e,n,i){return new za(t,1,e,Ko.min(),n,i,0)}static newNoDocument(t,e){return new za(t,2,e,Ko.min(),Ko.min(),ja.empty(),0)}static newUnknownDocument(t,e){return new za(t,3,e,Ko.min(),Ko.min(),ja.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ko.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ja.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ja.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ko.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof za&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new za(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Ha{constructor(t,e){this.position=t,this.inclusive=e}}function Ga(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?Jo.comparator(Jo.fromName(o.referenceValue),n.key):Ma(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ka(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ra(t.position[n],e.position[n]))return!1;return!0}
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
     */class Qa{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wa(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
     */class Xa{}class Ya extends Xa{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new rl(t,e,n):"array-contains"===e?new ll(t,n):"in"===e?new cl(t,n):"not-in"===e?new hl(t,n):"array-contains-any"===e?new ul(t,n):new Ya(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new sl(t,n):new ol(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ma(e,this.value)):null!==e&&xa(this.value)===xa(e)&&this.matchesComparison(Ma(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Do()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ja extends Xa{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ja(t,e)}matches(t){return Za(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Za(t){return"and"===t.op}function tl(t){return function(t){for(const e of t.filters)if(e instanceof Ja)return!1;return!0}(t)&&Za(t)}function el(t){if(t instanceof Ya)return t.field.canonicalString()+t.op.toString()+Pa(t.value);if(tl(t))return t.filters.map((t=>el(t))).join(",");{const e=t.filters.map((t=>el(t))).join(",");return`${t.op}(${e})`}}function nl(t,e){return t instanceof Ya?function(t,e){return e instanceof Ya&&t.op===e.op&&t.field.isEqual(e.field)&&Ra(t.value,e.value)}(t,e):t instanceof Ja?function(t,e){return e instanceof Ja&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&nl(n,e.filters[i])),!0)}(t,e):void Do()}function il(t){return t instanceof Ya?function(t){return`${t.field.canonicalString()} ${t.op} ${Pa(t.value)}`}(t):t instanceof Ja?function(t){return t.op.toString()+" {"+t.getFilters().map(il).join(" ,")+"}"}(t):"Filter"}class rl extends Ya{constructor(t,e,n){super(t,e,n),this.key=Jo.fromName(n.referenceValue)}matches(t){const e=Jo.comparator(t.key,this.key);return this.matchesComparison(e)}}class sl extends Ya{constructor(t,e){super(t,"in",e),this.keys=al("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ol extends Ya{constructor(t,e){super(t,"not-in",e),this.keys=al("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function al(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Jo.fromName(t.referenceValue)))}class ll extends Ya{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ua(e)&&Oa(e.arrayValue,this.value)}}class cl extends Ya{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Oa(this.value.arrayValue,e)}}class hl extends Ya{constructor(t,e){super(t,"not-in",e)}matches(t){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Oa(this.value.arrayValue,e)}}class ul extends Ya{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ua(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Oa(this.value.arrayValue,t)))}}
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
     */class fl{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.le=null}}function dl(t,e=null,n=[],i=[],r=null,s=null,o=null){return new fl(t,e,n,i,r,s,o)}function pl(t){const e=ko(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>el(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),la(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Pa(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Pa(t))).join(",")),e.le=t}return e.le}function gl(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wa(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ka(t.startAt,e.startAt)&&Ka(t.endAt,e.endAt)}
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
     */class ml{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function yl(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function vl(t){const e=ko(t);if(null===e.he){e.he=[];const t=new Set;for(const n of e.explicitOrderBy)e.he.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new ma(Yo.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Qa(i,n))})),t.has(Yo.keyField().canonicalString())||e.he.push(new Qa(Yo.keyField(),n))}return e.he}function wl(t){const e=ko(t);return e.Pe||(e.Pe=function(t,e){if("F"===t.limitType)return dl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Qa(t.field,e)}));const n=t.endAt?new Ha(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ha(t.startAt.position,t.startAt.inclusive):null;return dl(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,vl(t))),e.Pe}function El(t,e,n){return new ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bl(t,e){return gl(wl(t),wl(e))&&t.limitType===e.limitType}function Tl(t){return`${pl(wl(t))}|lt:${t.limitType}`}function _l(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>il(t))).join(", ")}]`),la(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Pa(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Pa(t))).join(",")),`Target(${e})`}(wl(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Jo.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of vl(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ga(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,vl(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ga(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,vl(t),e))}(t,e)}function Sl(t,e,n){const i=t.field.isKeyField()?Jo.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Ma(i,r):Do()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Do()}}
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
     */class Al{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ua(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return fa(this.inner)}size(){return this.innerSize}}
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
     */const Cl=new da(Jo.comparator);function Dl(){return Cl}const Nl=new da(Jo.comparator);function kl(...t){let e=Nl;for(const n of t)e=e.insert(n.key,n);return e}function xl(t){let e=Nl;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Rl(){return Ml()}function Ol(){return Ml()}function Ml(){return new Al((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ll=new da(Jo.comparator),Pl=new ma(Jo.comparator);function Fl(...t){let e=Pl;for(const n of t)e=e.add(n);return e}const Vl=new ma(zo);
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
function Ul(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function Bl(t){return{integerValue:""+t}}function $l(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Bl(e):Ul(t,e)}
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
     */class jl{constructor(){this._=void 0}}function ql(t,e,n){return t instanceof Gl?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Sa(e)&&(e=Aa(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Kl?Ql(t,e):t instanceof Wl?Xl(t,e):function(t,e){const n=Hl(t,e),i=Jl(n)+Jl(t.Te);return Va(n)&&Va(t.Te)?Bl(i):Ul(t.serializer,i)}(t,e)}function zl(t,e,n){return t instanceof Kl?Ql(t,e):t instanceof Wl?Xl(t,e):n}function Hl(t,e){return t instanceof Yl?function(t){return Va(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Gl extends jl{}class Kl extends jl{constructor(t){super(),this.elements=t}}function Ql(t,e){const n=Zl(e);for(const e of t.elements)n.some((t=>Ra(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Wl extends jl{constructor(t){super(),this.elements=t}}function Xl(t,e){let n=Zl(e);for(const e of t.elements)n=n.filter((t=>!Ra(t,e)));return{arrayValue:{values:n}}}class Yl extends jl{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Jl(t){return _a(t.integerValue||t.doubleValue)}function Zl(t){return Ua(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class tc{constructor(t,e){this.version=t,this.transformResults=e}}class ec{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ec}static exists(t){return new ec(void 0,t)}static updateTime(t){return new ec(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ic{}function rc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new pc(t.key,ec.none()):new cc(t.key,t.data,ec.none());{const n=t.data,i=ja.empty();let r=new ma(Yo.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new hc(t.key,i,new va(r.toArray()),ec.none())}}function sc(t,e,n){t instanceof cc?function(t,e,n){const i=t.value.clone(),r=fc(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof hc?function(t,e,n){if(!nc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=fc(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(uc(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function oc(t,e,n,i){return t instanceof cc?function(t,e,n,i){if(!nc(t.precondition,e))return n;const r=t.value.clone(),s=dc(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof hc?function(t,e,n,i){if(!nc(t.precondition,e))return n;const r=dc(t.fieldTransforms,i,e),s=e.data;return s.setAll(uc(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return nc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ac(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=Hl(i.transform,t||null);null!=r&&(null===n&&(n=ja.empty()),n.set(i.field,r))}return n||null}function lc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ho(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Kl&&e instanceof Kl||t instanceof Wl&&e instanceof Wl?Ho(t.elements,e.elements,Ra):t instanceof Yl&&e instanceof Yl?Ra(t.Te,e.Te):t instanceof Gl&&e instanceof Gl}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cc extends ic{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hc extends ic{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function uc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function fc(t,e,n){const i=new Map;No(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,zl(o,a,n[r]))}return i}function dc(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,ql(t,s,e))}return i}class pc extends ic{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gc extends ic{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class mc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&sc(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=oc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=oc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ol();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=rc(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Ko.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Fl())}isEqual(t){return this.batchId===t.batchId&&Ho(this.mutations,t.mutations,((t,e)=>lc(t,e)))&&Ho(this.baseMutations,t.baseMutations,((t,e)=>lc(t,e)))}}class yc{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){No(t.mutations.length===n.length);let i=Ll;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new yc(t,e,n,i)}}
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
     */class vc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */var wc,Ec;(Ec=wc||(wc={}))[Ec.OK=0]="OK",Ec[Ec.CANCELLED=1]="CANCELLED",Ec[Ec.UNKNOWN=2]="UNKNOWN",Ec[Ec.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ec[Ec.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ec[Ec.NOT_FOUND=5]="NOT_FOUND",Ec[Ec.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ec[Ec.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ec[Ec.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ec[Ec.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ec[Ec.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ec[Ec.ABORTED=10]="ABORTED",Ec[Ec.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ec[Ec.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ec[Ec.INTERNAL=13]="INTERNAL",Ec[Ec.UNAVAILABLE=14]="UNAVAILABLE",Ec[Ec.DATA_LOSS=15]="DATA_LOSS",
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
new vo([4294967295,4294967295],0);class bc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _c(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ic(t,e){return Tc(t,e.toTimestamp())}function Sc(t){return No(!!t),Ko.fromTimestamp(function(t){const e=Ta(t);return new Go(e.seconds,e.nanos)}(t))}function Ac(t,e){return function(t){return new Wo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Cc(t,e){return Ac(t.databaseId,e.path)}function Dc(t){const e=function(t){const e=Wo.fromString(t);return No(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */(e)),e}(t);return 4===e.length?Wo.emptyPath():function(t){return No(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function Nc(t,e,n){return{name:Cc(t,e),fields:n.value.mapValue.fields}}function kc(t){let e=Dc(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){No(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=xc(t);return e instanceof Ja&&tl(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Qa(Rc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,la(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Ha(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Ha(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new ml(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",l,c)}function xc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rc(t.unaryFilter.field);return Ya.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rc(t.unaryFilter.field);return Ya.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rc(t.unaryFilter.field);return Ya.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rc(t.unaryFilter.field);return Ya.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Do()}}(t):void 0!==t.fieldFilter?function(t){return Ya.create(Rc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Do()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ja.create(t.compositeFilter.filters.map((t=>xc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Do()}}(t.compositeFilter.op))}(t):Do()}function Rc(t){return Yo.fromServerFormat(t.fieldPath)}function Oc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class Mc{constructor(t){this.ct=t}}function Lc(t){const e=kc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?El(e,e.limit,"L"):e}
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
     */class Pc{constructor(){this._n=new Fc}addToCollectionParentIndex(t,e){return this._n.add(e),sa.resolve()}getCollectionParents(t,e){return sa.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return sa.resolve()}deleteFieldIndex(t,e){return sa.resolve()}deleteAllFieldIndexes(t){return sa.resolve()}createTargetIndexes(t,e){return sa.resolve()}getDocumentsMatchingTarget(t,e){return sa.resolve(null)}getIndexType(t,e){return sa.resolve(0)}getFieldIndexes(t,e){return sa.resolve([])}getNextCollectionGroupToUpdate(t){return sa.resolve(null)}getMinOffset(t,e){return sa.resolve(ta.min())}getMinOffsetFromCollectionGroup(t,e){return sa.resolve(ta.min())}updateCollectionGroup(t,e,n){return sa.resolve()}updateIndexEntries(t,e){return sa.resolve()}}class Fc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ma(Wo.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ma(Wo.comparator)).toArray()}}
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
     */class Vc{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Vc(0)}static Bn(){return new Vc(-1)}}
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
     */class Uc{constructor(){this.changes=new Al((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,za.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?sa.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
     */class Bc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class $c{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&oc(n.mutation,t,va.empty(),Go.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Fl()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Fl()){const i=Rl();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=kl();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Rl();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Fl())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Dl();const s=Ml(),o=Ml();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof hc)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),oc(o.mutation,e,o.mutation.getFieldMask(),Go.now())):s.set(e.key,va.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Bc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ml();let i=new da(((t,e)=>t-e)),r=Fl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||va.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Fl()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Ol();l.forEach((t=>{if(!r.has(t)){const i=rc(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return sa.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return Jo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):sa.resolve(Rl());let o=-1,a=r;return s.next((e=>sa.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?sa.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Fl()))).next((t=>({batchId:o,changes:xl(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Jo(e)).next((t=>{let e=kl();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=kl();return this.indexManager.getCollectionParents(t,r).next((o=>sa.forEach(o,(o=>{const a=function(t,e){return new ml(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,za.newInvalidDocument(i)))}));let n=kl();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&oc(s.mutation,i,va.empty(),Go.now()),Il(e,i)&&(n=n.insert(t,i))})),n}))}}
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
     */class jc{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return sa.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Sc(t.createTime)}}(e)),sa.resolve()}getNamedQuery(t,e){return sa.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:Lc(t.bundledQuery),readTime:Sc(t.readTime)}}(e)),sa.resolve()}}
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
     */class qc{constructor(){this.overlays=new da(Jo.comparator),this.hr=new Map}getOverlay(t,e){return sa.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Rl();return sa.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),sa.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),sa.resolve()}getOverlaysForCollection(t,e,n){const i=Rl(),r=e.length+1,s=new Jo(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return sa.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new da(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Rl(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Rl(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return sa.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new vc(e,n));let r=this.hr.get(e);void 0===r&&(r=Fl(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}}
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
     */class zc{constructor(){this.Pr=new ma(Hc.Ir),this.Tr=new ma(Hc.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Hc(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new Hc(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new Jo(new Wo([])),n=new Hc(e,t),i=new Hc(e,t+1),r=[];return this.Tr.forEachInRange([n,i],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new Jo(new Wo([])),n=new Hc(e,t),i=new Hc(e,t+1);let r=Fl();return this.Tr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Hc(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Hc{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return Jo.comparator(t.key,e.key)||zo(t.pr,e.pr)}static Er(t,e){return zo(t.pr,e.pr)||Jo.comparator(t.key,e.key)}}
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
     */class Gc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ma(Hc.Ir)}checkEmpty(t){return sa.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new mc(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.wr=this.wr.add(new Hc(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return sa.resolve(s)}lookupMutationBatch(t,e){return sa.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),r=i<0?0:i;return sa.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return sa.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return sa.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Hc(e,0),i=new Hc(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],(t=>{const e=this.Sr(t.pr);r.push(e)})),sa.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ma(zo);return e.forEach((t=>{const e=new Hc(t,0),i=new Hc(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,i],(t=>{n=n.add(t.pr)}))})),sa.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;Jo.isDocumentKey(r)||(r=r.child(""));const s=new Hc(new Jo(r),0);let o=new ma(zo);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.pr)),!0)}),s),sa.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){No(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return sa.forEach(e.mutations,(i=>{const r=new Hc(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new Hc(e,0),i=this.wr.firstAfterOrEqual(n);return sa.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,sa.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class Kc{constructor(t){this.vr=t,this.docs=new da(Jo.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return sa.resolve(n?n.document.mutableCopy():za.newInvalidDocument(e))}getEntries(t,e){let n=Dl();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():za.newInvalidDocument(t))})),sa.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Dl();const s=e.path,o=new Jo(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||ea(Zo(o),n)<=0||(i.has(o.key)||Il(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return sa.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Do()}Fr(t,e){return sa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qc(this)}getSize(t){return sa.resolve(this.size)}}class Qc extends Uc{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)})),sa.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
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
     */class Wc{constructor(t){this.persistence=t,this.Mr=new Al((t=>pl(t)),gl),this.lastRemoteSnapshotVersion=Ko.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zc,this.targetCount=0,this.Br=Vc.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),sa.resolve()}getLastRemoteSnapshotVersion(t){return sa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return sa.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),sa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),sa.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Vc(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,sa.resolve()}updateTargetData(t,e){return this.qn(e),sa.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,sa.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),sa.waitFor(r).next((()=>i))}getTargetCount(t){return sa.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return sa.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),sa.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),sa.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),sa.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return sa.resolve(n)}containsKey(t,e){return sa.resolve(this.Nr.containsKey(e))}}
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
     */class Xc{constructor(t,e){this.Lr={},this.overlays={},this.kr=new aa(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Wc(this),this.indexManager=new Pc,this.remoteDocumentCache=function(t){return new Kc(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new Mc(e),this.$r=new jc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new Gc(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Io("MemoryPersistence","Starting transaction:",t);const i=new Yc(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((t=>this.referenceDelegate.Wr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gr(t,e){return sa.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class Yc extends ia{constructor(t){super(),this.currentSequenceNumber=t}}class Jc{constructor(t){this.persistence=t,this.zr=new zc,this.jr=null}static Hr(t){return new Jc(t)}get Jr(){if(this.jr)return this.jr;throw Do()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),sa.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),sa.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),sa.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return sa.forEach(this.Jr,(n=>{const i=Jo.fromPath(n);return this.Yr(t,i).next((t=>{t||e.removeEntry(i,Ko.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return sa.or([()=>sa.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
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
     */class Zc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}static Ki(t,e){let n=Fl(),i=Fl();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Zc(t,e.fromCache,n,i)}}
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
     */class th{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
     */class eh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new th;return this.Ji(t,e,n).next((i=>{if(r.result=i,this.Ui)return this.Yi(t,e,n,i.size)}))})).next((()=>r.result))}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(_o()<=oe.DEBUG&&Io("QueryEngine","SDK will not create cache indexes for query:",_l(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),sa.resolve()):(_o()<=oe.DEBUG&&Io("QueryEngine","Query:",_l(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(_o()<=oe.DEBUG&&Io("QueryEngine","The SDK decides to create cache indexes for query:",_l(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wl(e))):sa.resolve())}ji(t,e){if(yl(e))return sa.resolve(null);let n=wl(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=El(e,null,"F"),n=wl(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Fl(...i);return this.zi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,i);return this.Xi(e,s,r,n.readTime)?this.ji(t,El(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,i){return yl(e)||i.isEqual(Ko.min())?sa.resolve(null):this.zi.getDocuments(t,n).next((r=>{const s=this.Zi(e,r);return this.Xi(e,s,n,i)?sa.resolve(null):(_o()<=oe.DEBUG&&Io("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_l(e)),this.es(t,s,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Ko.fromTimestamp(1e9===i?new Go(n+1,0):new Go(n,i));return new ta(r,Jo.empty(),e)}(i,-1)).next((t=>t)))}))}Zi(t,e){let n=new ma(function(t){return(e,n)=>{let i=!1;for(const r of vl(t)){const t=Sl(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,i)=>{Il(t,i)&&(n=n.add(i))})),n}Xi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(t,e,n){return _o()<=oe.DEBUG&&Io("QueryEngine","Using full collection scan to execute query:",_l(e)),this.zi.getDocumentsMatchingQuery(t,e,ta.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class nh{constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new da(zo),this.rs=new Al((t=>pl(t)),gl),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $c(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function ih(t,e){const n=ko(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Fl();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function rh(t,e){const n=ko(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class sh{constructor(){this.activeTargetIds=Vl}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class oh{constructor(){this.no=new sh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new sh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class ah{io(t){}shutdown(){}}
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
     */class lh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Io("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Io("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let ch=null;function hh(){return null===ch?ch=268435456+Math.round(2147483648*Math.random()):ch++,"0x"+ch.toString(16)
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
     */}const uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class fh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
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
     */const dh="WebChannelConnection";class ph extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(t,e,n,i,r){const s=hh(),o=this.bo(t,e);Io("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,i,r),this.Co(t,o,a,n).then((e=>(Io("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Ao("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,i,r,s){return this.So(t,e,n,i,r)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+bo,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=uh[t];return`${this.fo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,i){const r=hh();return new Promise(((s,o)=>{const a=new yo;a.setWithCredentials(!0),a.listenOnce(uo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ho.NO_ERROR:const e=a.getResponseJson();Io(dh,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case ho.TIMEOUT:Io(dh,`RPC '${t}' ${r} timed out`),o(new Ro(xo.DEADLINE_EXCEEDED,"Request time out"));break;case ho.HTTP_ERROR:const n=a.getStatus();if(Io(dh,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(xo).indexOf(e)>=0?e:xo.UNKNOWN}(e.status);o(new Ro(t,e.message))}else o(new Ro(xo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ro(xo.UNAVAILABLE,"Connection failed."));break;default:Do()}}finally{Io(dh,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);Io(dh,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}Fo(t,e,n){const i=hh(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Bs,o=Vi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Io(dh,`Creating RPC '${t}' stream ${i}: ${c}`,a);const h=s.createWebChannel(c,a);let u=!1,f=!1;const d=new fh({lo:e=>{f?Io(dh,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Io(dh,`Opening RPC '${t}' stream ${i} transport.`),h.open(),u=!0),Io(dh,`RPC '${t}' stream ${i} sending:`,e),h.send(e))},ho:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,mo.EventType.OPEN,(()=>{f||Io(dh,`RPC '${t}' stream ${i} transport opened.`)})),p(h,mo.EventType.CLOSE,(()=>{f||(f=!0,Io(dh,`RPC '${t}' stream ${i} transport closed`),d.Vo())})),p(h,mo.EventType.ERROR,(e=>{f||(f=!0,Ao(dh,`RPC '${t}' stream ${i} transport errored:`,e),d.Vo(new Ro(xo.UNAVAILABLE,"The operation could not be completed")))})),p(h,mo.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];No(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Io(dh,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=wc[t];if(void 0!==e)return function(t){if(void 0===t)return So("GRPC error has no .code"),xo.UNKNOWN;switch(t){case wc.OK:return xo.OK;case wc.CANCELLED:return xo.CANCELLED;case wc.UNKNOWN:return xo.UNKNOWN;case wc.DEADLINE_EXCEEDED:return xo.DEADLINE_EXCEEDED;case wc.RESOURCE_EXHAUSTED:return xo.RESOURCE_EXHAUSTED;case wc.INTERNAL:return xo.INTERNAL;case wc.UNAVAILABLE:return xo.UNAVAILABLE;case wc.UNAUTHENTICATED:return xo.UNAUTHENTICATED;case wc.INVALID_ARGUMENT:return xo.INVALID_ARGUMENT;case wc.NOT_FOUND:return xo.NOT_FOUND;case wc.ALREADY_EXISTS:return xo.ALREADY_EXISTS;case wc.PERMISSION_DENIED:return xo.PERMISSION_DENIED;case wc.FAILED_PRECONDITION:return xo.FAILED_PRECONDITION;case wc.ABORTED:return xo.ABORTED;case wc.OUT_OF_RANGE:return xo.OUT_OF_RANGE;case wc.UNIMPLEMENTED:return xo.UNIMPLEMENTED;case wc.DATA_LOSS:return xo.DATA_LOSS;default:return Do()}}(e)}(e),r=o.message;void 0===n&&(n=xo.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Vo(new Ro(n,r)),h.close()}else Io(dh,`RPC '${t}' stream ${i} received:`,r),d.mo(r)}})),p(o,fo.STAT_EVENT,(e=>{e.stat===po?Io(dh,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===go&&Io(dh,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.Ro()}),0),d}}function gh(){return"undefined"!=typeof document?document:null}
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
     */function mh(t){return new bc(t,!0)}
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
     */class yh{constructor(t,e,n=1e3,i=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-n);i>0&&Io("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
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
     */class vh{constructor(t,e,n,i,r,s,o,a){this.oi=t,this.$o=n,this.Uo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new yh(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===xo.RESOURCE_EXHAUSTED?(So(e.toString()),So("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===xo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new Ro(xo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return Io("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(Io("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wh extends vh{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(No(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?(No(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Sc(t.updateTime):Sc(e);return n.isEqual(Ko.min())&&(n=Sc(e)),new tc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Sc(t.commitTime);return this.listener.T_(n,e)}return No(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=function(t){return new Wo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof cc)n={update:Nc(t,e.key,e.value)};else if(e instanceof pc)n={delete:Cc(t,e.key)};else if(e instanceof hc)n={update:Nc(t,e.key,e.data),updateMask:Oc(e.fieldMask)};else{if(!(e instanceof gc))return Do();n={verify:Cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Gl)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Kl)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wl)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Yl)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Do()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ic(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Do()}(t,e.precondition)),n}(this.serializer,t)))};this.t_(e)}}
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
     */class Eh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new Ro(xo.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.So(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===xo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ro(xo.UNKNOWN,t.toString())}))}vo(t,e,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.vo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===xo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ro(xo.UNKNOWN,t.toString())}))}terminate(){this.A_=!0}}class bh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(So(e),this.g_=!1):Io("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
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
     */class Th{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io((t=>{n.enqueueAndForget((async()=>{Sh(this)&&(Io("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ko(t);e.v_.add(4),await Ih(e),e.x_.set("Unknown"),e.v_.delete(4),await _h(e)}(this))}))})),this.x_=new bh(n,i)}}async function _h(t){if(Sh(t))for(const e of t.F_)await e(!0)}async function Ih(t){for(const e of t.F_)await e(!1)}function Sh(t){return 0===ko(t).v_.size}async function Ah(t,e,n){if(!oa(e))throw e;t.v_.add(1),await Ih(t),t.x_.set("Offline"),n||(n=()=>function(t){const e=ko(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Io("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await _h(t)}))}function Ch(t,e){return e().catch((n=>Ah(t,n,e)))}async function Dh(t){const e=ko(t),n=Vh(e);let i=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Nh(e);)try{const t=await rh(e.localStore,i);if(null===t){0===e.D_.length&&n.Xo();break}i=t.batchId,kh(e,t)}catch(t){await Ah(e,t)}xh(e)&&Rh(e)}function Nh(t){return Sh(t)&&t.D_.length<10}function kh(t,e){t.D_.push(e);const n=Vh(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function xh(t){return Sh(t)&&!Vh(t).Ho()&&t.D_.length>0}function Rh(t){Vh(t).start()}async function Oh(t){Vh(t).d_()}async function Mh(t){const e=Vh(t);for(const n of t.D_)e.I_(n.mutations)}async function Lh(t,e,n){const i=t.D_.shift(),r=yc.from(i,e,n);await Ch(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Dh(t)}async function Ph(t,e){e&&Vh(t).P_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return Do();case xo.CANCELLED:case xo.UNKNOWN:case xo.DEADLINE_EXCEEDED:case xo.RESOURCE_EXHAUSTED:case xo.INTERNAL:case xo.UNAVAILABLE:case xo.UNAUTHENTICATED:return!1;case xo.INVALID_ARGUMENT:case xo.NOT_FOUND:case xo.ALREADY_EXISTS:case xo.PERMISSION_DENIED:case xo.FAILED_PRECONDITION:case xo.ABORTED:case xo.OUT_OF_RANGE:case xo.UNIMPLEMENTED:case xo.DATA_LOSS:return!0}}(t)&&t!==xo.ABORTED}(e.code)){const n=t.D_.shift();Vh(t).Zo(),await Ch(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Dh(t)}}(t,e),xh(t)&&Rh(t)}async function Fh(t,e){const n=ko(t);n.asyncQueue.verifyOperationInProgress(),Io("RemoteStore","RemoteStore received new credentials");const i=Sh(n);n.v_.add(3),await Ih(n),i&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await _h(n)}function Vh(t){return t.B_||(t.B_=function(t,e,n){const i=ko(t);return i.R_(),new wh(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Po:Oh.bind(null,t),To:Ph.bind(null,t),E_:Mh.bind(null,t),T_:Lh.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await Dh(t)):(await t.B_.stop(),t.D_.length>0&&(Io("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
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
     */}class Uh{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Oo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Uh(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ro(xo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bh(t,e){if(So("AsyncQueue",`${e}: ${t}`),oa(t))return new Ro(xo.UNAVAILABLE,`${e}: ${t}`);throw t}class $h{constructor(){this.queries=new Al((t=>Tl(t)),bl),this.onlineState="Unknown",this.Q_=new Set}}class jh{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.ma={},this.fa=new Al((t=>Tl(t)),bl),this.ga=new Map,this.pa=new Set,this.ya=new da(Jo.comparator),this.wa=new Map,this.Sa=new zc,this.ba={},this.Da=new Map,this.Ca=Vc.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return!0===this.va}}async function qh(t,e,n){const i=function(t){const e=ko(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gh.bind(null,e),e}(t);try{const t=await function(t,e){const n=ko(t),i=Go.now(),r=e.reduce(((t,e)=>t.add(e.key)),Fl());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Dl(),l=Fl();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=ac(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new hc(t.key,e,qa(e.value.mapValue),ec.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:xl(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ba[t.currentUser.toKey()];i||(i=new da(zo)),i=i.insert(e,n),t.ba[t.currentUser.toKey()]=i}(i,t.batchId,n),await Wh(i,t.changes),await Dh(i.remoteStore)}catch(t){const e=Bh(t,"Failed to persist write");n.reject(e)}}function zh(t,e,n){const i=ko(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.fa.forEach(((n,i)=>{const r=i.view.K_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=ko(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.K_(e)&&(i=!0)})),i&&function(t){t.Q_.forEach((t=>{t.next()}))}(n)}(i.eventManager,e),t.length&&i.ma.u_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Hh(t,e){const n=ko(t),i=e.batch.batchId;try{const t=await function(t,e){const n=ko(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=sa.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);No(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Fl();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Qh(n,i,null),Kh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Wh(n,t)}catch(t){await ra(t)}}async function Gh(t,e,n){const i=ko(t);try{const t=await function(t,e){const n=ko(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(No(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Qh(i,e,n),Kh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Wh(i,t)}catch(n){await ra(n)}}function Kh(t,e){(t.Da.get(e)||[]).forEach((t=>{t.resolve()})),t.Da.delete(e)}function Qh(t,e,n){const i=ko(t);let r=i.ba[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ba[i.currentUser.toKey()]=r}}async function Wh(t,e,n){const i=ko(t),r=[],s=[],o=[];i.fa.isEmpty()||(i.fa.forEach(((t,a)=>{o.push(i.Fa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Zc.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.ma.u_(r),await async function(t,e){const n=ko(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>sa.forEach(e,(e=>sa.forEach(e.qi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>sa.forEach(e.Qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!oa(t))throw t;Io("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,r)}}}(i.localStore,s))}async function Xh(t,e){const n=ko(t);if(!n.currentUser.isEqual(e)){Io("SyncEngine","User change. New user:",e.toKey());const t=await ih(n.localStore,e);n.currentUser=e,function(t,e){t.Da.forEach((t=>{t.forEach((t=>{t.reject(new Ro(xo.CANCELLED,e))}))})),t.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Wh(n,t.us)}}class Yh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=mh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,i){return new nh(t,e,n,i)}(this.persistence,new eh,t.initialUser,this.serializer)}createPersistence(t){return new Xc(Jc.Hr,this.serializer)}createSharedClientState(t){return new oh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>zh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xh.bind(null,this.syncEngine),await async function(t,e){const n=ko(t);e?(n.v_.delete(2),await _h(n)):e||(n.v_.add(2),await Ih(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $h}createDatastore(t){const e=mh(t.databaseInfo.databaseId),n=function(t){return new ph(t)}(t.databaseInfo);return function(t,e,n,i){return new Eh(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Th(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>zh(this.syncEngine,t,0)),lh.C()?new lh:new ah)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new jh(t,e,n,i,r,s);return o&&(a.va=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ko(t);Io("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Ih(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore)}}
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
     */class Zh{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Eo.UNAUTHENTICATED,this.clientId=qo.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Io("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Io("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ro(xo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Oo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Bh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function tu(t,e){t.asyncQueue.verifyOperationInProgress(),Io("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await ih(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function eu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Io("FirestoreClient","Using user provided OfflineComponentProvider");try{await tu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===xo.FAILED_PRECONDITION||t.code===xo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Ao("Error using user provided cache. Falling back to memory cache: "+n),await tu(t,new Yh)}}else Io("FirestoreClient","Using default OfflineComponentProvider"),await tu(t,new Yh);return t._offlineComponents}(t);Io("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Fh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Fh(e.remoteStore,n))),t._onlineComponents=e}function nu(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Io("FirestoreClient","Using user provided OnlineComponentProvider"),await eu(t,t._uninitializedComponentsProvider._online)):(Io("FirestoreClient","Using default OnlineComponentProvider"),await eu(t,new Jh))),t._onlineComponents}(t).then((t=>t.syncEngine))}
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
     */function iu(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
     */}const ru=new Map;
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
     */function su(t,e,n){if(!n)throw new Ro(xo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ou(t){if(!Jo.isDocumentKey(t))throw new Ro(xo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function au(t){if(Jo.isDocumentKey(t))throw new Ro(xo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Do()}function cu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ro(xo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(t);throw new Ro(xo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class hu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Ro(xo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ro(xo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Ro(xo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iu(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Ro(xo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Ro(xo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Ro(xo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class uu{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ro(xo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ro(xo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Lo;switch(t.type){case"firstParty":return new Uo(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ro(xo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ru.get(t);e&&(Io("ComponentProvider","Removing Datastore"),ru.delete(t),e.terminate())}(this),Promise.resolve()}}function fu(t,e,n,i={}){var r;const s=(t=cu(t,uu))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Eo.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qt(JSON.stringify({alg:"none",type:"JWT"})),qt(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Ro(xo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Eo(s)}t._authCredentials=new Po(new Mo(e,n))}}
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
     */class du{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new du(this.firestore,t,this._query)}}class pu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pu(this.firestore,t,this._key)}}class gu extends du{constructor(t,e,n){super(t,e,function(t){return new ml(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pu(this.firestore,null,new Jo(t))}withConverter(t){return new gu(this.firestore,t,this._path)}}
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
class mu{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new yh(this,"async_queue_retry"),this.su=()=>{const t=gh();t&&Io("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=gh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const e=gh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise((()=>{}));const e=new Oo;return this._u((()=>this.Xa&&this.ru?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Za.push(t),this.au())))}async au(){if(0!==this.Za.length){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!oa(t))throw t;Io("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo((()=>this.au()))}}_u(t){const e=this.Ya.then((()=>(this.nu=!0,t().catch((t=>{this.tu=t,this.nu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw So("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.nu=!1,t))))));return this.Ya=e,e}enqueueAfterDelay(t,e,n){this.ou(),this.iu.indexOf(t)>-1&&(e=0);const i=Uh.createAndSchedule(this,t,e,n,(t=>this.uu(t)));return this.eu.push(i),i}ou(){this.tu&&Do()}verifyOperationInProgress(){}async cu(){let t;do{t=this.Ya,await t}while(t!==this.Ya)}lu(t){for(const e of this.eu)if(e.timerId===t)return!0;return!1}hu(t){return this.cu().then((()=>{this.eu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.eu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.cu()}))}Pu(t){this.iu.push(t)}uu(t){const e=this.eu.indexOf(t);this.eu.splice(e,1)}}class yu extends uu{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new mu,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vu(this),this._firestoreClient.terminate()}}function vu(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Da(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,iu(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Zh(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
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
     */class wu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wu(Ea.fromBase64String(t))}catch(t){throw new Ro(xo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new wu(Ea.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Eu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ro(xo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yo(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class bu{constructor(t){this._methodName=t}}
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
     */class Tu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ro(xo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ro(xo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return zo(this._lat,t._lat)||zo(this._long,t._long)}}
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
     */const _u=/^__.*__$/;class Iu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new hc(t,this.data,this.fieldMask,e,this.fieldTransforms):new cc(t,this.data,e,this.fieldTransforms)}}function Su(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Do()}}class Au{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Iu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Au(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Au:!1});return i.Ru(t),i}Vu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Au:!1});return i.Iu(),i}mu(t){return this.Eu({path:void 0,Au:!0})}fu(t){return Pu(t,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Iu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ru(this.path.get(t))}Ru(t){if(0===t.length)throw this.fu("Document fields must not be empty");if(Su(this.Tu)&&_u.test(t))throw this.fu('Document fields cannot begin and end with "__"')}}class Cu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||mh(t)}yu(t,e,n,i=!1){return new Au({Tu:t,methodName:e,pu:n,path:Yo.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Du(t){const e=t._freezeSettings(),n=mh(t._databaseId);return new Cu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nu(t,e,n,i,r,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,r);Ou("Data must be an object, but it was:",o,i);const a=xu(i,o);let l,c;if(s.merge)l=new va(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Mu(e,i,n);if(!o.contains(r))throw new Ro(xo.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Fu(t,r)||t.push(r)}l=new va(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Iu(new ja(a),l,c)}function ku(t,e){if(Ru(t=ee(t)))return Ou("Unsupported field value:",e,t),xu(t,e);if(t instanceof bu)return function(t,e){if(!Su(e.Tu))throw e.fu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&4!==e.Tu)throw e.fu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=ku(r,e.mu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ee(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return $l(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Go.fromDate(t);return{timestampValue:Tc(e.serializer,n)}}if(t instanceof Go){const n=new Go(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Tc(e.serializer,n)}}if(t instanceof Tu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wu)return{bytesValue:_c(e.serializer,t._byteString)};if(t instanceof pu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.fu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ac(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fu(`Unsupported field value: ${lu(t)}`)}(t,e)}function xu(t,e){const n={};return fa(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ua(t,((t,i)=>{const r=ku(i,e.du(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Ru(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Go||t instanceof Tu||t instanceof wu||t instanceof pu||t instanceof bu)}function Ou(t,e,n){if(!Ru(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=lu(n);throw"an object"===i?e.fu(t+" a custom object"):e.fu(t+" "+i)}}function Mu(t,e,n){if((e=ee(e))instanceof Eu)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Lu)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Eu(...e.split("."))._internalPath}catch(i){throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Lu=new RegExp("[~\\*/\\[\\]]");function Pu(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Ro(xo.INVALID_ARGUMENT,a+t+l)}function Fu(t,e){return t.some((t=>t.isEqual(e)))}
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
     */function Vu(t,e){const n=cu(t.firestore,yu),i=function(t,e,...n){if(t=ee(t),1===arguments.length&&(e=qo.V()),su("doc","path",e),t instanceof uu){const i=Wo.fromString(e,...n);return ou(i),new pu(t,null,new Jo(i))}{if(!(t instanceof pu||t instanceof gu))throw new Ro(xo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Wo.fromString(e,...n));return ou(i),new pu(t.firestore,t instanceof gu?t.converter:null,new Jo(i))}}(t),r=function(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}(t.converter,e);return function(t,e){return function(t,e){const n=new Oo;return t.asyncQueue.enqueueAndForget((async()=>qh(await nu(t),e,n))),n.promise}(function(t){return t._firestoreClient||vu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[Nu(Du(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,ec.exists(!1))]).then((()=>i))}!function(t,e=!0){!function(t){bo=t}("10.5.0"),Ve(new ne("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new yu(new Fo(t.getProvider("auth-internal")),new $o(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ro(xo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),je(wo,"4.3.0",t),je(wo,"4.3.0","esm2017")}();const Uu=function(t,e){const n="object"==typeof t?t:function(t=Oe){const e=Le.get(t);if(!e&&t===Oe&&Qt())return $e();if(!e)throw Ue.create("no-app",{appName:t});return e}(),i="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=Kt("firestore");t&&fu(r,...t)}return r}($e({apiKey:"AIzaSyB7oEQf-NoeZqsAdTLQAgWo84m3I1KnAZI",authDomain:"esplanade-46a07.firebaseapp.com",projectId:"esplanade-46a07",storageBucket:"esplanade-46a07.appspot.com",messagingSenderId:"803109975262",appId:"1:803109975262:web:f39f8e10520a6b6eb23e4f",measurementId:"1:803109975262:web:f39f8e10520a6b6eb23e4f"}));function Bu(e){let n,s,u,f,d,p,g,m,y,v,w,E,b,T,_,I,S,A;return{c(){n=l("header"),n.innerHTML='<a href="index" class="svelte-nx1oav"><img src="/espWhite.png" alt="Your Logo" class="logo svelte-nx1oav"/></a>',s=c(),u=l("div"),u.textContent="Step into the future\n  with Esplanade AI. Revolutionise\n  your business operations and\n  experience unparalleled efficiency.",f=c(),d=l("div"),p=l("form"),p.innerHTML='<input type="text" name="fullname" placeholder="Full Name" required="" class="svelte-nx1oav"/> \n    <input type="tel" name="number" placeholder="Phone Number" required="" class="svelte-nx1oav"/> \n    <input type="email" name="email" placeholder="Email Address" required="" class="svelte-nx1oav"/> \n    <button type="submit" class="svelte-nx1oav">Submit</button>',g=c(),m=l("div"),m.innerHTML='<video id="bgVideo" autoplay="" muted="" loop="" playsinline="" poster="tealPurple169-2.png" class="svelte-nx1oav"><source src="/siteBGcont2.mp4" type="video/mp4" class="svelte-nx1oav"/>\n    Your browser does not support the video tag.</video>',y=c(),v=l("div"),v.innerHTML='<a href="https://www.instagram.com/esplanade.ai/" class="svelte-nx1oav"><img src="/Instagram.png" alt="Instagram" class="svelte-nx1oav"/></a> \n  <a href="https://www.linkedin.com/company/esplanade-ai" class="svelte-nx1oav"><img src="/linkedin.png" alt="Linkedin" class="svelte-nx1oav"/></a>',w=c(),E=l("div"),b=c(),T=l("div"),_=c(),I=l("footer"),I.innerHTML='<div class="footer-row svelte-nx1oav"><div class="footer-logo svelte-nx1oav"><img src="justLogoWhite.png" alt="Esplanade Logo" class="svelte-nx1oav"/></div> \n    <div class="address-contact svelte-nx1oav"><div class="svelte-nx1oav"><strong class="svelte-nx1oav">Address</strong> \n        <p class="svelte-nx1oav">Sydney, AUS</p></div> \n      <div class="svelte-nx1oav"><strong class="svelte-nx1oav">Contact</strong> \n        <p class="svelte-nx1oav">digital@esplanade.ai</p></div></div></div> \n\n  <div class="footer-divider svelte-nx1oav"></div> \n\n  <div class="footer-row svelte-nx1oav"><div class="svelte-nx1oav">© 2023 Esplanade.ai. All rights reserved.</div> \n    <div class="svelte-nx1oav"><a href="#" class="svelte-nx1oav">T&amp;Cs</a> \n      <a href="#" class="svelte-nx1oav">Privacy Policy</a></div></div>',h(n,"class","svelte-nx1oav"),h(u,"class","translucent-section centered-content large-text svelte-nx1oav"),h(p,"class","svelte-nx1oav"),h(d,"class","contact-form svelte-nx1oav"),h(m,"class","svelte-nx1oav"),h(v,"class","social-icons svelte-nx1oav"),h(E,"class","svelte-nx1oav"),h(T,"id","bpw-layout"),h(T,"class","svelte-nx1oav"),h(I,"class","svelte-nx1oav")},m(i,a){var l,c,h,C,D;o(i,n,a),o(i,s,a),o(i,u,a),o(i,f,a),o(i,d,a),function(t,e){t.appendChild(e)}(d,p),o(i,g,a),o(i,m,a),o(i,y,a),o(i,v,a),o(i,w,a),o(i,E,a),o(i,b,a),o(i,T,a),o(i,_,a),o(i,I,a),S||(A=[(D=e[1].call(null,u),D&&r(D.destroy)?D.destroy:t),(l=p,c="submit",h=e[0],l.addEventListener(c,h,C),()=>l.removeEventListener(c,h,C))],S=!0)},p:t,i:t,o:t,d(t){t&&a(n),t&&a(s),t&&a(u),t&&a(f),t&&a(d),t&&a(g),t&&a(m),t&&a(y),t&&a(v),t&&a(w),t&&a(E),t&&a(b),t&&a(T),t&&a(_),t&&a(I),S=!1,i(A)}}}function $u(t){var e=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(r,s){function o(t){try{l(i.next(t))}catch(t){s(t)}}function a(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((i=i.apply(t,e||[])).next())}))};return[function(t){return e(this,void 0,void 0,(function*(){console.log("submit"),t.preventDefault();const e={fullname:t.target.fullname.value,number:t.target.number.value,email:t.target.email.value};console.log("data",e);try{console.log("try");const t=yield Vu(function(t,e,...n){if(t=ee(t),su("collection","path",e),t instanceof uu){const i=Wo.fromString(e,...n);return au(i),new gu(t,null,i)}{if(!(t instanceof pu||t instanceof gu))throw new Ro(xo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Wo.fromString(e,...n));return au(i),new gu(t.firestore,null,i)}}(Uu,"contacts"),e);console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}try{const t=document.getElementById("userName").value;yield createAssistant(t)}catch(t){console.error("Error creating assistant")}}))},function(t){const e=t.innerText.trim().split(" "),n=Math.ceil(e.length/4),i=[];e.forEach(((t,r)=>{i.push(`<span style="opacity: 0">${t}</span>`),(r+1)%n==0&&r!==e.length-1&&i.push("<br>")})),t.innerHTML=i.join(" ");const r=[...t.children];Ut(r,{opacity:[0,1]},{duration:3,delay:Mt(.3)}),setTimeout((()=>{r.forEach((t=>{const e=t.textContent.trim();("unparalleled"===e||e.includes("efficiency"))&&Ut(t,{color:"#d28cd1"},{duration:1})}))}),650*(.3*e.length+3))}]}const ju=new class extends D{constructor(t){super(),C(this,t,$u,Bu,s,{})}}({target:document.body,props:{name:"world"}});return require("./openai"),ju}();
//# sourceMappingURL=bundle.js.map
