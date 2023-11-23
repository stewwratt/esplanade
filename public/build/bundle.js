var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function a(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){t.value=null==e?"":e}function y(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function v(t,e,n){t.classList[n?"add":"remove"](e)}class w{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e.nodeName):this.e=u(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)c(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let b;function E(t){b=t}function k(){if(!b)throw new Error("Function called outside component initialization");return b}function _(){const t=k();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}(e,n,{cancelable:s});return r.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}const T=[],x=[];let S=[];const I=[],A=Promise.resolve();let C=!1;function D(t){S.push(t)}const N=new Set;let R=0;function O(){if(0!==R)return;const t=b;do{try{for(;R<T.length;){const t=T[R];R++,E(t),L(t.$$)}}catch(t){throw T.length=0,R=0,t}for(E(null),T.length=0,R=0;x.length;)x.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];N.has(e)||(N.add(e),e())}S.length=0}while(T.length);for(;I.length;)I.pop()();C=!1,N.clear(),E(t)}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const M=new Set;let P;function $(t,e){t&&t.i&&(M.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(M.has(t))return;M.add(t),P.c.push((()=>{M.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function V(t,n,i,o){const{fragment:a,after_update:l}=t.$$;a&&a.m(n,i),o||D((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(D)}function U(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];S.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),S=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(T.push(t),C||(C=!0,A.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,i,o,a,l,c,u=[-1]){const f=b;E(e);const d=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:r.target||f.$$.root};c&&c(d.root);let p=!1;if(d.ctx=i?i(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&B(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();r.intro&&$(e.$$.fragment),V(e,r.target,r.anchor,r.customElement),O()}E(f)}class z{$destroy(){U(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=(t,e,n)=>Math.min(Math.max(n,t),e),H={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},G=t=>"number"==typeof t,K=t=>Array.isArray(t)&&!G(t[0]),Q=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t};const W=(t,e,n)=>-n*t+n*e+t,X=()=>{},Y=t=>t,J=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function Z(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const r=J(0,e,s);t.push(W(n,1,r))}}function tt(t,e=function(t){const e=[0];return Z(e,t-1),e}(t.length),n=Y){const s=t.length,r=s-e.length;return r>0&&Z(e,r),r=>{let i=0;for(;i<s-2&&!(r<e[i+1]);i++);let o=q(0,1,J(e[i],e[i+1],r));const a=function(t,e){return K(t)?t[Q(0,t.length,e)]:t}(n,i);return o=a(o),W(t[i],t[i+1],o)}}const et=t=>Array.isArray(t)&&G(t[0]),nt=t=>"object"==typeof t&&Boolean(t.createAnimation),st=t=>"function"==typeof t,rt=t=>"string"==typeof t,it={ms:t=>1e3*t,s:t=>t/1e3},ot=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,at=1e-7,lt=12;function ct(t,e,n,s){if(t===e&&n===s)return Y;const r=e=>function(t,e,n,s,r){let i,o,a=0;do{o=e+(n-e)/2,i=ot(o,s,r)-t,i>0?n=o:e=o}while(Math.abs(i)>at&&++a<lt);return o}(e,0,1,t,n);return t=>0===t||1===t?t:ot(r(t),e,s)}const ht=(t,e="end")=>n=>{const s=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,r="end"===e?Math.floor(s):Math.ceil(s);return q(0,1,r/t)},ut={ease:ct(.25,.1,.25,1),"ease-in":ct(.42,0,1,1),"ease-in-out":ct(.42,0,.58,1),"ease-out":ct(0,0,.58,1)},ft=/\((.*?)\)/;function dt(t){if(st(t))return t;if(et(t))return ct(...t);if(ut[t])return ut[t];if(t.startsWith("steps")){const e=ft.exec(t);if(e){const t=e[1].split(",");return ht(parseFloat(t[0]),t[1].trim())}}return Y}class pt{constructor(t,e=[0,1],{easing:n,duration:s=H.duration,delay:r=H.delay,endDelay:i=H.endDelay,repeat:o=H.repeat,offset:a,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=Y,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||H.easing,nt(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,s=t.duration||s}this.repeat=o,this.easing=K(n)?Y:dt(n),this.updateDuration(s);const c=tt(e,a,K(n)?n.map(dt):Y);this.tick=e=>{var n;let s=0;s=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=s,s/=1e3,s=Math.max(s-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(s=this.totalDuration);const o=s/this.duration;let a=Math.floor(o),h=o%1;!h&&o>=1&&(h=1),1===h&&a--;const u=a%2;("reverse"===l||"alternate"===l&&u||"alternate-reverse"===l&&!u)&&(h=1-h);const f=s>=this.totalDuration?1:Math.min(h,1),d=c(this.easing(f));t(d);void 0===this.pauseTime&&("finished"===this.playState||s>=this.totalDuration+i)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,d)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class gt{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const mt=new WeakMap;function yt(t){return mt.has(t)||mt.set(t,{transforms:[],values:new Map}),mt.get(t)}const vt=["","X","Y","Z"],wt={x:"translateX",y:"translateY",z:"translateZ"},bt={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Et={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:bt,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:Y},skew:bt},kt=new Map,_t=t=>`--motion-${t}`,Tt=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{vt.forEach((e=>{Tt.push(t+e),kt.set(_t(t+e),Et[t])}))}));const xt=(t,e)=>Tt.indexOf(t)-Tt.indexOf(e),St=new Set(Tt),It=t=>St.has(t),At=(t,e)=>{wt[e]&&(e=wt[e]);const{transforms:n}=yt(t);var s,r;r=e,-1===(s=n).indexOf(r)&&s.push(r),t.style.transform=Ct(n)},Ct=t=>t.sort(xt).reduce(Dt,"").trim(),Dt=(t,e)=>`${t} ${e}(var(${_t(e)}))`,Nt=t=>t.startsWith("--"),Rt=new Set;const Ot=(t,e)=>document.createElement("div").animate(t,e),Lt={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Ot({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(Ot({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{Ot({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},Mt={},Pt={};for(const t in Lt)Pt[t]=()=>(void 0===Mt[t]&&(Mt[t]=Lt[t]()),Mt[t]);const $t=(t,e)=>st(t)?Pt.linearEasing()?`linear(${((t,e)=>{let n="";const s=Math.round(e/.015);for(let e=0;e<s;e++)n+=t(J(0,s-1,e))+", ";return n.substring(0,n.length-2)})(t,e)})`:H.easing:et(t)?Ft(t):t,Ft=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`;const Vt=t=>Array.isArray(t)?t:[t];function Ut(t){return wt[t]&&(t=wt[t]),It(t)?_t(t):t}const Bt={get:(t,e)=>{e=Ut(e);let n=Nt(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=kt.get(e);t&&(n=t.initialValue)}return n},set:(t,e,n)=>{e=Ut(e),Nt(e)?t.style.setProperty(e,n):t.style[e]=n}};function jt(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}function zt(t,e,n,s={},r){const i=window.__MOTION_DEV_TOOLS_RECORD,o=!1!==s.record&&i;let a,{duration:l=H.duration,delay:c=H.delay,endDelay:h=H.endDelay,repeat:u=H.repeat,easing:f=H.easing,persist:d=!1,direction:p,offset:g,allowWebkitAcceleration:m=!1}=s;const y=yt(t),v=It(e);let w=Pt.waapi();v&&At(t,e);const b=Ut(e),E=function(t,e){return t.has(e)||t.set(e,new gt),t.get(e)}(y.values,b),k=kt.get(b);return jt(E.animation,!(nt(f)&&E.generator)&&!1!==s.record),()=>{const y=()=>{var e,n;return null!==(n=null!==(e=Bt.get(t,b))&&void 0!==e?e:null==k?void 0:k.initialValue)&&void 0!==n?n:0};let _=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}(Vt(n),y);const T=function(t,e){var n;let s=(null==e?void 0:e.toDefaultUnit)||Y;const r=t[t.length-1];if(rt(r)){const t=(null===(n=r.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(s=e=>e+t)}return s}(_,k);if(nt(f)){const t=f.createAnimation(_,"opacity"!==e,y,b,E);f=t.easing,_=t.keyframes||_,l=t.duration||l}if(Nt(b)&&(Pt.cssRegisterProperty()?function(t){if(!Rt.has(t)){Rt.add(t);try{const{syntax:e,initialValue:n}=kt.has(t)?kt.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(b):w=!1),v&&!Pt.linearEasing()&&(st(f)||K(f)&&f.some(st))&&(w=!1),w){k&&(_=_.map((t=>G(t)?k.toDefaultUnit(t):t))),1!==_.length||Pt.partialKeyframes()&&!o||_.unshift(y());const e={delay:it.ms(c),duration:it.ms(l),endDelay:it.ms(h),easing:K(f)?void 0:$t(f,l),direction:p,iterations:u+1,fill:"both"};a=t.animate({[b]:_,offset:g,easing:K(f)?f.map((t=>$t(t,l))):void 0},e),a.finished||(a.finished=new Promise(((t,e)=>{a.onfinish=t,a.oncancel=e})));const n=_[_.length-1];a.finished.then((()=>{d||(Bt.set(t,b,n),a.cancel())})).catch(X),m||(a.playbackRate=1.000001)}else if(r&&v)_=_.map((t=>"string"==typeof t?parseFloat(t):t)),1===_.length&&_.unshift(parseFloat(y())),a=new r((e=>{Bt.set(t,b,T?T(e):e)}),_,Object.assign(Object.assign({},s),{duration:l,easing:f}));else{const e=_[_.length-1];Bt.set(t,b,k&&G(e)?k.toDefaultUnit(e):e)}return o&&i(t,e,_,{duration:l,delay:c,easing:f,repeat:u,offset:g},"motion-one"),E.setAnimation(a),a}}const qt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);const Ht=t=>t(),Gt=(t,e,n=H.duration)=>new Proxy({animations:t.map(Ht).filter(Boolean),duration:n,options:e},Kt),Kt={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return it.s((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Qt)).catch(X)),t.finished;case"stop":return()=>{t.animations.forEach((t=>jt(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=it.ms(n);case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][e]=n;return!0}return!1}},Qt=t=>t.finished;function Wt(t=.1,{start:e=0,from:n=0,easing:s}={}){return(r,i)=>{const o=G(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,i),a=Math.abs(o-r);let l=t*a;if(s){const e=i*t;l=dt(s)(l/e)*e}return e+l}}function Xt(t,e,n){return st(t)?t(e,n):t}const Yt=(Jt=pt,function(t,e,n={}){const s=(t=function(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(t)).length,r=[];for(let i=0;i<s;i++){const o=t[i];for(const t in e){const a=qt(n,t);a.delay=Xt(a.delay,i,s);const l=zt(o,t,e[t],a,Jt);r.push(l)}}return Gt(r,n,n.duration)});var Jt;function Zt(t,e={}){return Gt([()=>{const n=new pt(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function te(t,e,n){return(st(t)?Zt:Yt)(t,e,n)}var ee="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ne(){throw new Error("setTimeout has not been defined")}function se(){throw new Error("clearTimeout has not been defined")}var re=ne,ie=se;function oe(t){if(re===setTimeout)return setTimeout(t,0);if((re===ne||!re)&&setTimeout)return re=setTimeout,setTimeout(t,0);try{return re(t,0)}catch(e){try{return re.call(null,t,0)}catch(e){return re.call(this,t,0)}}}"function"==typeof ee.setTimeout&&(re=setTimeout),"function"==typeof ee.clearTimeout&&(ie=clearTimeout);var ae,le=[],ce=!1,he=-1;function ue(){ce&&ae&&(ce=!1,ae.length?le=ae.concat(le):he=-1,le.length&&fe())}function fe(){if(!ce){var t=oe(ue);ce=!0;for(var e=le.length;e;){for(ae=le,le=[];++he<e;)ae&&ae[he].run();he=-1,e=le.length}ae=null,ce=!1,function(t){if(ie===clearTimeout)return clearTimeout(t);if((ie===se||!ie)&&clearTimeout)return ie=clearTimeout,clearTimeout(t);try{return ie(t)}catch(e){try{return ie.call(null,t)}catch(e){return ie.call(this,t)}}}(t)}}function de(t,e){this.fun=t,this.array=e}de.prototype.run=function(){this.fun.apply(null,this.array)};function pe(){}var ge=pe,me=pe,ye=pe,ve=pe,we=pe,be=pe,Ee=pe;var ke=ee.performance||{},_e=ke.now||ke.mozNow||ke.msNow||ke.oNow||ke.webkitNow||function(){return(new Date).getTime()};var Te=new Date;var xe={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];le.push(new de(t,e)),1!==le.length||ce||oe(fe)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:ge,addListener:me,once:ye,off:ve,removeListener:we,removeAllListeners:be,emit:Ee,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*_e.call(ke),n=Math.floor(e),s=Math.floor(e%1*1e9);return t&&(n-=t[0],(s-=t[1])<0&&(n--,s+=1e9)),[n,s]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-Te)/1e3}};
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
     */const Se=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},Ie={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const r=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,f=63&l;a||(f=64,i||(u=64)),s.push(n[c],n[h],n[u],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Se(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==i||null==o||null==a)throw new Ae;const l=r<<2|i>>4;if(s.push(l),64!==o){const t=i<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ae extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ce=function(t){return function(t){const e=Se(t);return Ie.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const De=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==ee)return ee;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ne=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return Ie.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},Re=()=>{try{return De()||(()=>{if(void 0===xe||void 0===xe.env)return;const t=xe.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||Ne()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Oe=t=>{const e=(t=>{var e,n;return null===(n=null===(e=Re())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Le=()=>{var t;return null===(t=Re())||void 0===t?void 0:t.config};
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
class Me{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */class Pe extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$e.prototype.create)}}class $e{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(Fe,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new Pe(s,o,n)}}const Fe=/\{\$([^}]+)}/g;function Ve(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(Ue(n)&&Ue(i)){if(!Ve(n,i))return!1}else if(n!==i)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function Ue(t){return null!==t&&"object"==typeof t}
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
     */function Be(t){return t&&t._delegate?t._delegate:t}class je{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const ze="[DEFAULT]";
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
     */class qe{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Me;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:ze})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=ze){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=ze){return this.instances.has(t)}getOptions(t=ze){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===ze?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=ze){return this.component?this.component.multipleInstances?t:ze:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class He{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qe(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var Ge;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Ge||(Ge={}));const Ke={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},Qe=Ge.INFO,We={[Ge.DEBUG]:"log",[Ge.VERBOSE]:"log",[Ge.INFO]:"info",[Ge.WARN]:"warn",[Ge.ERROR]:"error"},Xe=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=We[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class Ye{constructor(t){this.name=t,this._logLevel=Qe,this._logHandler=Xe,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ge))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Ke[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ge.DEBUG,...t),this._logHandler(this,Ge.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ge.VERBOSE,...t),this._logHandler(this,Ge.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ge.INFO,...t),this._logHandler(this,Ge.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ge.WARN,...t),this._logHandler(this,Ge.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ge.ERROR,...t),this._logHandler(this,Ge.ERROR,...t)}}const Je=(t,e)=>e.some((e=>t instanceof e));let Ze,tn;const en=new WeakMap,nn=new WeakMap,sn=new WeakMap,rn=new WeakMap,on=new WeakMap;let an={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return nn.get(t);if("objectStoreNames"===e)return t.objectStoreNames||sn.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ln(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(tn||(tn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(un(this),e),hn(en.get(this))}:function(...e){return hn(t.apply(un(this),e))}:function(e,...n){const s=t.call(un(this),e,...n);return sn.set(s,e.sort?e.sort():[e]),hn(s)}}function cn(t){return"function"==typeof t?ln(t):(t instanceof IDBTransaction&&function(t){if(nn.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));nn.set(t,e)}(t),Je(t,Ze||(Ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,an):t)}function hn(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(hn(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&en.set(e,t)})).catch((()=>{})),on.set(e,t),e}(t);if(rn.has(t))return rn.get(t);const e=cn(t);return e!==t&&(rn.set(t,e),on.set(e,t)),e}const un=t=>on.get(t);const fn=["get","getKey","getAll","getAllKeys","count"],dn=["put","add","delete","clear"],pn=new Map;function gn(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(pn.get(e))return pn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=dn.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!fn.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return pn.set(e,i),i}an=(t=>({...t,get:(e,n,s)=>gn(e,n)||t.get(e,n,s),has:(e,n)=>!!gn(e,n)||t.has(e,n)}))(an);
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
class mn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const yn="@firebase/app",vn="0.9.20",wn=new Ye("@firebase/app"),bn="[DEFAULT]",En={[yn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},kn=new Map,_n=new Map;function Tn(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(_n.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;_n.set(e,t);for(const e of kn.values())Tn(e,t);return!0}
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
const Sn=new $e("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class In{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new je("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}
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
     */function An(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:bn,automaticDataCollectionEnabled:!1},e),r=s.name;if("string"!=typeof r||!r)throw Sn.create("bad-app-name",{appName:String(r)});if(n||(n=Le()),!n)throw Sn.create("no-options");const i=kn.get(r);if(i){if(Ve(n,i.options)&&Ve(s,i.config))return i;throw Sn.create("duplicate-app",{appName:r})}const o=new He(r);for(const t of _n.values())o.addComponent(t);const a=new In(n,s,o);return kn.set(r,a),a}function Cn(t,e,n){var s;let r=null!==(s=En[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void wn.warn(t.join(" "))}xn(new je(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
     */const Dn="firebase-heartbeat-database",Nn=1,Rn="firebase-heartbeat-store";let On=null;function Ln(){return On||(On=function(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=hn(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(hn(o.result),t.oldVersion,t.newVersion,hn(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(Dn,Nn,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Rn)}}).catch((t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})}))),On}async function Mn(t,e){try{const n=(await Ln()).transaction(Rn,"readwrite"),s=n.objectStore(Rn);await s.put(e,Pn(t)),await n.done}catch(t){if(t instanceof Pe)wn.warn(t.message);else{const e=Sn.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});wn.warn(e.message)}}}function Pn(t){return`${t.name}!${t.options.appId}`}
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
     */class $n{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Fn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Fn(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Un(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Un(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=Ce(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fn(){return(new Date).toISOString().substring(0,10)}class Vn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await Ln();return await e.transaction(Rn).objectStore(Rn).get(Pn(t))}catch(t){if(t instanceof Pe)wn.warn(t.message);else{const e=Sn.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});wn.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Un(t){return Ce(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var Bn;Bn="",xn(new je("platform-logger",(t=>new mn(t)),"PRIVATE")),xn(new je("heartbeat",(t=>new $n(t)),"PRIVATE")),Cn(yn,vn,Bn),Cn(yn,vn,"esm2017"),Cn("fire-js","");
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
Cn("firebase","10.5.0","app");var jn,zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==ee?ee:"undefined"!=typeof self?self:{},qn=qn||{},Hn=zn||self;function Gn(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Kn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Qn="closure_uid_"+(1e9*Math.random()>>>0),Wn=0;function Xn(t,e,n){return t.call.apply(t.bind,arguments)}function Yn(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Jn(t,e,n){return(Jn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xn:Yn).apply(null,arguments)}function Zn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ts(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function es(){this.s=this.s,this.o=this.o}es.prototype.s=!1,es.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Qn)&&t[Qn]||(t[Qn]=++Wn))},es.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ns=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ss(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function rs(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Gn(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let r=0;r<s;r++)t[e+r]=n[r]}else t.push(n)}}function is(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}is.prototype.h=function(){this.defaultPrevented=!0};var os=function(){if(!Hn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Hn.addEventListener("test",(()=>{}),e),Hn.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function as(t){return/^[\s\xa0]*$/.test(t)}function ls(){var t=Hn.navigator;return t&&(t=t.userAgent)?t:""}function cs(t){return-1!=ls().indexOf(t)}function hs(t){return hs[" "](t),t}hs[" "]=function(){};var us,fs,ds,ps=cs("Opera"),gs=cs("Trident")||cs("MSIE"),ms=cs("Edge"),ys=ms||gs,vs=cs("Gecko")&&!(-1!=ls().toLowerCase().indexOf("webkit")&&!cs("Edge"))&&!(cs("Trident")||cs("MSIE"))&&!cs("Edge"),ws=-1!=ls().toLowerCase().indexOf("webkit")&&!cs("Edge");function bs(){var t=Hn.document;return t?t.documentMode:void 0}t:{var Es="",ks=(fs=ls(),vs?/rv:([^\);]+)(\)|;)/.exec(fs):ms?/Edge\/([\d\.]+)/.exec(fs):gs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fs):ws?/WebKit\/(\S+)/.exec(fs):ps?/(?:Version)[ \/]?(\S+)/.exec(fs):void 0);if(ks&&(Es=ks?ks[1]:""),gs){var _s=bs();if(null!=_s&&_s>parseFloat(Es)){us=String(_s);break t}}us=Es}if(Hn.document&&gs){var Ts=bs();ds=Ts||(parseInt(us,10)||void 0)}else ds=void 0;var xs=ds;function Ss(t,e){if(is.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vs){t:{try{hs(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Is[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ss.$.h.call(this)}}ts(Ss,is);var Is={2:"touch",3:"pen",4:"mouse"};Ss.prototype.h=function(){Ss.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var As="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function Ds(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++Cs,this.fa=this.ia=!1}function Ns(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rs(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Os(t){const e={};for(const n in t)e[n]=t[n];return e}const Ls="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ms(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Ls.length;e++)n=Ls[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ps(t){this.src=t,this.g={},this.h=0}function $s(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=ns(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ns(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Fs(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}Ps.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=Fs(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Ds(e,this.src,i,!!s,r)).ia=n,t.push(e)),e};var Vs="closure_lm_"+(1e6*Math.random()|0),Us={};function Bs(t,e,n,s,r){if(s&&s.once)return zs(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bs(t,e[i],n,s,r);return null}return n=Xs(n),t&&t[As]?t.O(e,n,Kn(s)?!!s.capture:!!s,r):js(t,e,n,!1,s,r)}function js(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Kn(r)?!!r.capture:!!r,a=Qs(t);if(a||(t[Vs]=a=new Ps(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ks;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)os||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Gs(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function zs(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)zs(t,e[i],n,s,r);return null}return n=Xs(n),t&&t[As]?t.P(e,n,Kn(s)?!!s.capture:!!s,r):js(t,e,n,!0,s,r)}function qs(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)qs(t,e[i],n,s,r);else s=Kn(s)?!!s.capture:!!s,n=Xs(n),t&&t[As]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Fs(i=t.g[e],n,s,r))&&(Ns(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Qs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fs(e,n,s,r)),(n=-1<t?e[t]:null)&&Hs(n))}function Hs(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[As])$s(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gs(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Qs(e))?($s(n,t),0==n.h&&(n.src=null,e[Vs]=null)):Ns(t)}}}function Gs(t){return t in Us?Us[t]:Us[t]="on"+t}function Ks(t,e){if(t.fa)t=!0;else{e=new Ss(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Hs(t),t=n.call(s,e)}return t}function Qs(t){return(t=t[Vs])instanceof Ps?t:null}var Ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xs(t){return"function"==typeof t?t:(t[Ws]||(t[Ws]=function(e){return t.handleEvent(e)}),t[Ws])}function Ys(){es.call(this),this.i=new Ps(this),this.S=this,this.J=null}function Js(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new is(e,t);else if(e instanceof is)e.target=e.target||t;else{var r=e;Ms(e=new is(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Zs(o,s,!0,e)&&r}if(r=Zs(o=e.g=t,s,!0,e)&&r,r=Zs(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=Zs(o=e.g=n[i],s,!1,e)&&r}function Zs(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&$s(t.i,o),r=!1!==a.call(l,s)&&r}}return r&&!s.defaultPrevented}ts(Ys,es),Ys.prototype[As]=!0,Ys.prototype.removeEventListener=function(t,e,n,s){qs(this,t,e,n,s)},Ys.prototype.N=function(){if(Ys.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ns(n[s]);delete e.g[t],e.h--}}this.J=null},Ys.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ys.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var tr=Hn.JSON.stringify;function er(){var t=lr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var nr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new sr),(t=>t.reset()));class sr{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function rr(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ir(t){Hn.setTimeout((()=>{throw t}),0)}let or,ar=!1,lr=new class{constructor(){this.h=this.g=null}add(t,e){const n=nr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},cr=()=>{const t=Hn.Promise.resolve(void 0);or=()=>{t.then(hr)}};var hr=()=>{for(var t;t=er();){try{t.h.call(t.g)}catch(t){ir(t)}var e=nr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ar=!1};function ur(t,e){Ys.call(this),this.h=t||1,this.g=e||Hn,this.j=Jn(this.qb,this),this.l=Date.now()}function fr(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function dr(t,e,n){if("function"==typeof t)n&&(t=Jn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Jn(t.handleEvent,t)}return 2147483647<Number(e)?-1:Hn.setTimeout(t,e||0)}function pr(t){t.g=dr((()=>{t.g=null,t.i&&(t.i=!1,pr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ts(ur,Ys),(jn=ur.prototype).ga=!1,jn.T=null,jn.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Js(this,"tick"),this.ga&&(fr(this),this.start()))}},jn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},jn.N=function(){ur.$.N.call(this),fr(this),delete this.g};class gr extends es{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:pr(this)}N(){super.N(),this.g&&(Hn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(t){es.call(this),this.h=t,this.g={}}ts(mr,es);var yr=[];function vr(t,e,n,s){Array.isArray(n)||(n&&(yr[0]=n.toString()),n=yr);for(var r=0;r<n.length;r++){var i=Bs(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function wr(t){Rs(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Hs(t)}),t),t.g={}}function br(){this.g=!0}function Er(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return tr(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}mr.prototype.N=function(){mr.$.N.call(this),wr(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},br.prototype.Ea=function(){this.g=!1},br.prototype.info=function(){};var kr={},_r=null;function Tr(){return _r=_r||new Ys}function xr(t){is.call(this,kr.Ta,t)}function Sr(t){const e=Tr();Js(e,new xr(e))}function Ir(t,e){is.call(this,kr.STAT_EVENT,t),this.stat=e}function Ar(t){const e=Tr();Js(e,new Ir(e,t))}function Cr(t,e){is.call(this,kr.Ua,t),this.size=e}function Dr(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Hn.setTimeout((function(){t()}),e)}kr.Ta="serverreachability",ts(xr,is),kr.STAT_EVENT="statevent",ts(Ir,is),kr.Ua="timingevent",ts(Cr,is);var Nr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Rr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Or(){}function Lr(t){return t.h||(t.h=t.i())}function Mr(){}Or.prototype.h=null;var Pr,$r={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fr(){is.call(this,"d")}function Vr(){is.call(this,"c")}function Ur(){}function Br(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new mr(this),this.P=zr,t=ys?125:void 0,this.V=new ur(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jr}function jr(){this.i=null,this.g="",this.h=!1}ts(Fr,is),ts(Vr,is),ts(Ur,Or),Ur.prototype.g=function(){return new XMLHttpRequest},Ur.prototype.i=function(){return{}},Pr=new Ur;var zr=45e3,qr={},Hr={};function Gr(t,e,n){t.L=1,t.v=ui(oi(e)),t.s=n,t.S=!0,Kr(t,null)}function Kr(t,e){t.G=Date.now(),Yr(t),t.A=oi(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Ti(n.i,"t",s),t.C=0,n=t.l.J,t.h=new jr,t.g=xo(t.l,n?e:null,!t.s),0<t.O&&(t.M=new gr(Jn(t.Pa,t,t.g),t.O)),vr(t.U,t.g,"readystatechange",t.nb),e=t.I?Os(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Sr(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function Qr(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Wr(t,e,n){let s,r=!0;for(;!t.J&&t.C<n.length;){if(s=Xr(t,n),s==Hr){4==e&&(t.o=4,Ar(14),r=!1),Er(t.j,t.m,null,"[Incomplete Response]");break}if(s==qr){t.o=4,Ar(15),Er(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Er(t.j,t.m,s,null),ni(t,s)}Qr(t)&&s!=Hr&&s!=qr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ar(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),yo(e),e.M=!0,Ar(11))):(Er(t.j,t.m,n,"[Invalid Chunked Response]"),ei(t),ti(t))}function Xr(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Hr:(n=Number(e.substring(n,s)),isNaN(n)?qr:(s+=1)+n>e.length?Hr:(e=e.slice(s,s+n),t.C=s+n,e))}function Yr(t){t.Y=Date.now()+t.P,Jr(t,t.P)}function Jr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Dr(Jn(t.lb,t),e)}function Zr(t){t.B&&(Hn.clearTimeout(t.B),t.B=null)}function ti(t){0==t.l.H||t.J||bo(t.l,t)}function ei(t){Zr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,fr(t.V),wr(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ni(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Ni(n.i,t)))if(!t.K&&Ni(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;wo(n),lo(n)}mo(n),Ar(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Dr(Jn(n.ib,n),6e3));if(1>=Di(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else ko(n,11)}else if((t.K||n.g==t)&&wo(n),!as(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ri(i,i.h),i.h=null))}if(s.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,hi(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=To(s,s.J?s.pa:null,s.Y),o.K){Oi(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Zr(a),Yr(a)),s.g=o}else go(s);0<n.j.length&&ho(n)}else"stop"!=c[0]&&"close"!=c[0]||ko(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ko(n,7):ao(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Sr()}catch(t){}}function si(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Gn(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Gn(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Gn(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}(jn=Br.prototype).setTimeout=function(t){this.P=t},jn.nb=function(t){t=t.target;const e=this.M;e&&3==eo(t)?e.l():this.Pa(t)},jn.Pa=function(t){try{if(t==this.g)t:{const h=eo(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||ys||this.g&&(this.h.h||this.g.ja()||no(this.g)))){this.J||4!=h||7==e||Sr(),Zr(this);var n=this.g.da();this.ca=n;e:if(Qr(this)){var s=no(this.g);t="";var r=s.length,i=4==eo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ei(this),ti(this);var o="";break e}this.h.i=new Hn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!as(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Ar(12),ei(this),ti(this);break t}Er(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ni(this,n)}this.S?(Wr(this,h,o),ys&&this.i&&3==h&&(vr(this.U,this.V,"tick",this.mb),this.V.start())):(Er(this.j,this.m,o,null),ni(this,o)),4==h&&ei(this),this.i&&!this.J&&(4==h?bo(this.l,this):(this.i=!1,Yr(this)))}else(function(t){const e={};t=(t.g&&2<=eo(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(as(t[s]))continue;var n=rr(t[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ar(12)):(this.o=0,Ar(13)),ei(this),ti(this)}}}catch(t){}},jn.mb=function(){if(this.g){var t=eo(this.g),e=this.g.ja();this.C<e.length&&(Zr(this),Wr(this,t,e),this.i&&4!=t&&Yr(this))}},jn.cancel=function(){this.J=!0,ei(this)},jn.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Sr(),Ar(17)),ei(this),this.o=2,ti(this)):Jr(this,this.Y-t)};var ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ii(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ii){this.h=t.h,ai(this,t.j),this.s=t.s,this.g=t.g,li(this,t.m),this.l=t.l;var e=t.i,n=new bi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ci(this,n),this.o=t.o}else t&&(e=String(t).match(ri))?(this.h=!1,ai(this,e[1]||"",!0),this.s=fi(e[2]||""),this.g=fi(e[3]||"",!0),li(this,e[4]),this.l=fi(e[5]||"",!0),ci(this,e[6]||"",!0),this.o=fi(e[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}function oi(t){return new ii(t)}function ai(t,e,n){t.j=n?fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function li(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ci(t,e,n){e instanceof bi?(t.i=e,function(t,e){e&&!t.j&&(Ei(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ki(this,e),Ti(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=di(e,vi)),t.i=new bi(e,t.h))}function hi(t,e,n){t.i.set(e,n)}function ui(t){return hi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function di(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,pi),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pi(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(di(e,gi,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(di(e,gi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(di(n,"/"==n.charAt(0)?yi:mi,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",di(n,wi)),t.join("")};var gi=/[#\/\?@]/g,mi=/[#\?:]/g,yi=/[#\?]/g,vi=/[#\?@]/g,wi=/#/g;function bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ei(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ki(t,e){Ei(t),e=xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _i(t,e){return Ei(t),e=xi(t,e),t.g.has(e)}function Ti(t,e,n){ki(t,e),0<n.length&&(t.i=null,t.g.set(xi(t,e),ss(n)),t.h+=n.length)}function xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(jn=bi.prototype).add=function(t,e){Ei(this),this.i=null,t=xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},jn.forEach=function(t,e){Ei(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},jn.ta=function(){Ei(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},jn.Z=function(t){Ei(this);let e=[];if("string"==typeof t)_i(this,t)&&(e=e.concat(this.g.get(xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},jn.set=function(t,e){return Ei(this),this.i=null,_i(this,t=xi(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},jn.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},jn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var Si=class{constructor(t,e){this.g=t,this.map=e}};function Ii(t){this.l=t||Ai,Hn.PerformanceNavigationTiming?t=0<(t=Hn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Hn.g&&Hn.g.Ka&&Hn.g.Ka()&&Hn.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ai=10;function Ci(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Di(t){return t.h?1:t.g?t.g.size:0}function Ni(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ri(t,e){t.g?t.g.add(e):t.h=e}function Oi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Li(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ss(t.i)}Ii.prototype.cancel=function(){if(this.i=Li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Mi=class{stringify(t){return Hn.JSON.stringify(t,void 0)}parse(t){return Hn.JSON.parse(t,void 0)}};function Pi(){this.g=new Mi}function $i(t,e,n){const s=n||"";try{si(t,(function(t,n){let r=t;Kn(t)&&(r=tr(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Fi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(t){}}function Vi(t){this.l=t.ec||null,this.j=t.ob||!1}function Ui(t,e){Ys.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ts(Vi,Or),Vi.prototype.g=function(){return new Ui(this.l,this.j)},Vi.prototype.i=function(t){return function(){return t}}({}),ts(Ui,Ys);var Bi=0;function ji(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qi(t)}function qi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(jn=Ui.prototype).open=function(t,e){if(this.readyState!=Bi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qi(this)},jn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Hn).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},jn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,zi(this)),this.readyState=Bi},jn.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Hn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ji(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},jn.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zi(this):qi(this),3==this.readyState&&ji(this)}},jn.Za=function(t){this.g&&(this.response=this.responseText=t,zi(this))},jn.Ya=function(t){this.g&&(this.response=t,zi(this))},jn.ka=function(){this.g&&zi(this)},jn.setRequestHeader=function(t,e){this.v.append(t,e)},jn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},jn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Hi=Hn.JSON.parse;function Gi(t){Ys.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ki,this.L=this.M=!1}ts(Gi,Ys);var Ki="",Qi=/^https?$/i,Wi=["POST","PUT"];function Xi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yi(t),Zi(t)}function Yi(t){t.F||(t.F=!0,Js(t,"complete"),Js(t,"error"))}function Ji(t){if(t.h&&void 0!==qn&&(!t.C[1]||4!=eo(t)||2!=t.da()))if(t.v&&4==eo(t))dr(t.La,0,t);else if(Js(t,"readystatechange"),4==eo(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var r=String(t.I).match(ri)[1]||null;!r&&Hn.self&&Hn.self.location&&(r=Hn.self.location.protocol.slice(0,-1)),s=!Qi.test(r?r.toLowerCase():"")}n=s}if(n)Js(t,"complete"),Js(t,"success");else{t.m=6;try{var i=2<eo(t)?t.g.statusText:""}catch(t){i=""}t.j=i+" ["+t.da()+"]",Yi(t)}}finally{Zi(t)}}}function Zi(t,e){if(t.g){to(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Js(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function to(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Hn.clearTimeout(t.A),t.A=null)}function eo(t){return t.g?t.g.readyState:0}function no(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ki:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function so(t){let e="";return Rs(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ro(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=so(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):hi(t,e,n))}function io(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oo(t){this.Ga=0,this.j=[],this.l=new br,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=io("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=io("baseRetryDelayMs",5e3,t),this.hb=io("retryDelaySeedMs",1e4,t),this.eb=io("forwardChannelMaxRetries",2,t),this.xa=io("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ii(t&&t.concurrentRequestLimit),this.Ja=new Pi,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ao(t){if(co(t),3==t.H){var e=t.W++,n=oi(t.I);if(hi(n,"SID",t.K),hi(n,"RID",e),hi(n,"TYPE","terminate"),fo(t,n),(e=new Br(t,t.l,e)).L=2,e.v=ui(oi(n)),n=!1,Hn.navigator&&Hn.navigator.sendBeacon)try{n=Hn.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&Hn.Image&&((new Image).src=e.v,n=!0),n||(e.g=xo(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yr(e)}_o(t)}function lo(t){t.g&&(yo(t),t.g.cancel(),t.g=null)}function co(t){lo(t),t.u&&(Hn.clearTimeout(t.u),t.u=null),wo(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Hn.clearTimeout(t.m),t.m=null)}function ho(t){if(!Ci(t.i)&&!t.m){t.m=!0;var e=t.Na;or||cr(),ar||(or(),ar=!0),lr.add(e,t),t.C=0}}function uo(t,e){var n;n=e?e.m:t.W++;const s=oi(t.I);hi(s,"SID",t.K),hi(s,"RID",n),hi(s,"AID",t.V),fo(t,s),t.o&&t.s&&ro(s,t.o,t.s),n=new Br(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=po(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ri(t.i,n),Gr(n,s,e)}function fo(t,e){t.na&&Rs(t.na,(function(t,n){hi(e,n,t)})),t.h&&si({},(function(t,n){hi(e,n,t)}))}function po(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Jn(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),i=!1;else try{$i(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function go(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;or||cr(),ar||(or(),ar=!0),lr.add(e,t),t.A=0}}function mo(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Dr(Jn(t.Ma,t),Eo(t,t.A)),t.A++,!0)}function yo(t){null!=t.B&&(Hn.clearTimeout(t.B),t.B=null)}function vo(t){t.g=new Br(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=oi(t.wa);hi(e,"RID","rpc"),hi(e,"SID",t.K),hi(e,"AID",t.V),hi(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&hi(e,"TO",t.qa),hi(e,"TYPE","xmlhttp"),fo(t,e),t.o&&t.s&&ro(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ui(oi(e)),n.s=null,n.S=!0,Kr(n,t)}function wo(t){null!=t.v&&(Hn.clearTimeout(t.v),t.v=null)}function bo(t,e){var n=null;if(t.g==e){wo(t),yo(t),t.g=null;var s=2}else{if(!Ni(t.i,e))return;n=e.F,Oi(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;Js(s=Tr(),new Cr(s,n)),ho(t)}else go(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==s&&function(t,e){return!(Di(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Dr(Jn(t.Na,t,e),Eo(t,t.C)),t.C++,0)))}(t,e)||2==s&&mo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ko(t,5);break;case 4:ko(t,10);break;case 3:ko(t,6);break;default:ko(t,2)}}function Eo(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ko(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=Jn(t.pb,t);n||(n=new ii("//www.google.com/images/cleardot.gif"),Hn.location&&"http"==Hn.location.protocol||ai(n,"https"),ui(n)),function(t,e){const n=new br;if(Hn.Image){const s=new Image;s.onload=Zn(Fi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zn(Fi,n,s,"TestLoadImage: error",!1,e),s.onabort=Zn(Fi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zn(Fi,n,s,"TestLoadImage: timeout",!1,e),Hn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Ar(2);t.H=0,t.h&&t.h.za(e),_o(t),co(t)}function _o(t){if(t.H=0,t.ma=[],t.h){const e=Li(t.i);0==e.length&&0==t.j.length||(rs(t.ma,e),rs(t.ma,t.j),t.i.i.length=0,ss(t.j),t.j.length=0),t.h.ya()}}function To(t,e,n){var s=n instanceof ii?oi(n):new ii(n);if(""!=s.g)e&&(s.g=e+"."+s.g),li(s,s.m);else{var r=Hn.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ii(null);s&&ai(i,s),e&&(i.g=e),r&&li(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&hi(s,n,e),hi(s,"VER",t.ra),fo(t,s),s}function xo(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Gi(new Vi({ob:!0})):new Gi(t.va)).Oa(t.J),e}function So(){}function Io(){if(gs&&!(10<=Number(xs)))throw Error("Environmental error: no available transport.")}function Ao(t,e){Ys.call(this),this.g=new oo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!as(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!as(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new No(this)}function Co(t){Fr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Do(){Vr.call(this),this.status=1}function No(t){this.g=t}function Ro(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Oo(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;o=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^i&(n^r))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^i)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~i))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~i))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~i))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(r^(n|~i))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=i+((o=r+(e^(i|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}function Lo(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=0|t[r];s&&i==e||(n[r]=i,s=!1)}this.g=n}(jn=Gi.prototype).Oa=function(t){this.M=t},jn.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pr.g(),this.C=this.u?Lr(this.u):Lr(Pr),this.g.onreadystatechange=Jn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Xi(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Hn.FormData&&t instanceof Hn.FormData,!(0<=ns(Wi,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{to(this),0<this.B&&((this.L=function(t){return gs&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Jn(this.ua,this)):this.A=dr(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Xi(this,t)}},jn.ua=function(){void 0!==qn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Js(this,"timeout"),this.abort(8))},jn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Js(this,"complete"),Js(this,"abort"),Zi(this))},jn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zi(this,!0)),Gi.$.N.call(this)},jn.La=function(){this.s||(this.G||this.v||this.l?Ji(this):this.kb())},jn.kb=function(){Ji(this)},jn.isActive=function(){return!!this.g},jn.da=function(){try{return 2<eo(this)?this.g.status:-1}catch(t){return-1}},jn.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},jn.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Hi(e)}},jn.Ia=function(){return this.m},jn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(jn=oo.prototype).ra=8,jn.H=1,jn.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Br(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Os(i),Ms(i,this.U)):i=this.U),null!==this.o||this.O||(r.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=po(this,r,e),hi(n=oi(this.I),"RID",t),hi(n,"CVER",22),this.F&&hi(n,"X-HTTP-Session-Id",this.F),fo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(so(i)))+"&"+e:this.o&&ro(n,this.o,i)),Ri(this.i,r),this.bb&&hi(n,"TYPE","init"),this.P?(hi(n,"$req",e),hi(n,"SID","null"),r.aa=!0,Gr(r,n,null)):Gr(r,n,e),this.H=2}}else 3==this.H&&(t?uo(this,t):0==this.j.length||Ci(this.i)||uo(this))},jn.Ma=function(){if(this.u=null,vo(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Dr(Jn(this.jb,this),t)}},jn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ar(10),lo(this),vo(this))},jn.ib=function(){null!=this.v&&(this.v=null,lo(this),mo(this),Ar(19))},jn.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ar(2)):(this.l.info("Failed to ping google.com"),Ar(1))},jn.isActive=function(){return!!this.h&&this.h.isActive(this)},(jn=So.prototype).Ba=function(){},jn.Aa=function(){},jn.za=function(){},jn.ya=function(){},jn.isActive=function(){return!0},jn.Va=function(){},Io.prototype.g=function(t,e){return new Ao(t,e)},ts(Ao,Ys),Ao.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ar(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=To(t,null,t.Y),ho(t)},Ao.prototype.close=function(){ao(this.g)},Ao.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=tr(t),t=n);e.j.push(new Si(e.fb++,t)),3==e.H&&ho(e)},Ao.prototype.N=function(){this.g.h=null,delete this.j,ao(this.g),delete this.g,Ao.$.N.call(this)},ts(Co,Fr),ts(Do,Vr),ts(No,So),No.prototype.Ba=function(){Js(this.g,"a")},No.prototype.Aa=function(t){Js(this.g,new Co(t))},No.prototype.za=function(t){Js(this.g,new Do)},No.prototype.ya=function(){Js(this.g,"b")},ts(Ro,(function(){this.blockSize=-1})),Ro.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ro.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(0==r)for(;i<=n;)Oo(this,t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Oo(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Oo(this,s),r=0;break}}this.h=r,this.i+=e},Ro.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var Mo={};function Po(t){return-128<=t&&128>t?function(t,e){var n=Mo;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Lo([0|t],0>t?-1:0)})):new Lo([0|t],0>t?-1:0)}function $o(t){if(isNaN(t)||!isFinite(t))return Vo;if(0>t)return qo($o(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Fo;return new Lo(e,0)}var Fo=4294967296,Vo=Po(0),Uo=Po(1),Bo=Po(16777216);function jo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function zo(t){return-1==t.h}function qo(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Lo(n,~t.h).add(Uo)}function Ho(t,e){return t.add(qo(e))}function Go(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ko(t,e){this.g=t,this.h=e}function Qo(t,e){if(jo(e))throw Error("division by zero");if(jo(t))return new Ko(Vo,Vo);if(zo(t))return e=Qo(qo(t),e),new Ko(qo(e.g),qo(e.h));if(zo(e))return e=Qo(t,qo(e)),new Ko(qo(e.g),e.h);if(30<t.g.length){if(zo(t)||zo(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Uo,s=e;0>=s.X(t);)n=Wo(n),s=Wo(s);var r=Xo(n,1),i=Xo(s,1);for(s=Xo(s,2),n=Xo(n,2);!jo(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Xo(s,1),n=Xo(n,1)}return e=Ho(t,r.R(e)),new Ko(r,e)}for(r=Vo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(i=$o(n)).R(e);zo(o)||0<o.X(t);)o=(i=$o(n-=s)).R(e);jo(i)&&(i=Uo),r=r.add(i),t=Ho(t,o)}return new Ko(r,t)}function Wo(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Lo(n,t.h)}function Xo(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Lo(r,t.h)}(jn=Lo.prototype).ea=function(){if(zo(this))return-qo(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Fo+s)*e,e*=Fo}return t},jn.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(jo(this))return"0";if(zo(this))return"-"+qo(this).toString(t);for(var e=$o(Math.pow(t,6)),n=this,s="";;){var r=Qo(n,e).g,i=((0<(n=Ho(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(jo(n=r))return i+s;for(;6>i.length;)i="0"+i;s=i+s}},jn.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},jn.X=function(t){return zo(t=Ho(this,t))?-1:jo(t)?0:1},jn.abs=function(){return zo(this)?qo(this):this},jn.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(65535&this.D(r))+(65535&t.D(r)),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Lo(n,-2147483648&n[n.length-1]?-1:0)},jn.R=function(t){if(jo(this)||jo(t))return Vo;if(zo(this))return zo(t)?qo(this).R(qo(t)):qo(qo(this).R(t));if(zo(t))return qo(this.R(qo(t)));if(0>this.X(Bo)&&0>t.X(Bo))return $o(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=65535&this.D(s),a=t.D(r)>>>16,l=65535&t.D(r);n[2*s+2*r]+=o*l,Go(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Go(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Go(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Go(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Lo(n,0)},jn.gb=function(t){return Qo(this,t).h},jn.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Lo(n,this.h&t.h)},jn.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Lo(n,this.h|t.h)},jn.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Lo(n,this.h^t.h)},Io.prototype.createWebChannel=Io.prototype.g,Ao.prototype.send=Ao.prototype.u,Ao.prototype.open=Ao.prototype.m,Ao.prototype.close=Ao.prototype.close,Nr.NO_ERROR=0,Nr.TIMEOUT=8,Nr.HTTP_ERROR=6,Rr.COMPLETE="complete",Mr.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",Ys.prototype.listen=Ys.prototype.O,Gi.prototype.listenOnce=Gi.prototype.P,Gi.prototype.getLastError=Gi.prototype.Sa,Gi.prototype.getLastErrorCode=Gi.prototype.Ia,Gi.prototype.getStatus=Gi.prototype.da,Gi.prototype.getResponseJson=Gi.prototype.Wa,Gi.prototype.getResponseText=Gi.prototype.ja,Gi.prototype.send=Gi.prototype.ha,Gi.prototype.setWithCredentials=Gi.prototype.Oa,Ro.prototype.digest=Ro.prototype.l,Ro.prototype.reset=Ro.prototype.reset,Ro.prototype.update=Ro.prototype.j,Lo.prototype.add=Lo.prototype.add,Lo.prototype.multiply=Lo.prototype.R,Lo.prototype.modulo=Lo.prototype.gb,Lo.prototype.compare=Lo.prototype.X,Lo.prototype.toNumber=Lo.prototype.ea,Lo.prototype.toString=Lo.prototype.toString,Lo.prototype.getBits=Lo.prototype.D,Lo.fromNumber=$o,Lo.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return qo(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=$o(Math.pow(n,8)),r=Vo,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),a=parseInt(e.substring(i,i+o),n);8>o?(o=$o(Math.pow(n,o)),r=r.R(o).add($o(a))):r=(r=r.R(s)).add($o(a))}return r};var Yo=Nr,Jo=Rr,Zo=kr,ta=10,ea=11,na=Mr,sa=Gi,ra=Lo;const ia="@firebase/firestore";
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
     */class oa{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}oa.UNAUTHENTICATED=new oa(null),oa.GOOGLE_CREDENTIALS=new oa("google-credentials-uid"),oa.FIRST_PARTY=new oa("first-party-uid"),oa.MOCK_USER=new oa("mock-user");
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
let aa="10.5.0";
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
     */const la=new Ye("@firebase/firestore");function ca(){return la.logLevel}function ha(t,...e){if(la.logLevel<=Ge.DEBUG){const n=e.map(da);la.debug(`Firestore (${aa}): ${t}`,...n)}}function ua(t,...e){if(la.logLevel<=Ge.ERROR){const n=e.map(da);la.error(`Firestore (${aa}): ${t}`,...n)}}function fa(t,...e){if(la.logLevel<=Ge.WARN){const n=e.map(da);la.warn(`Firestore (${aa}): ${t}`,...n)}}function da(t){if("string"==typeof t)return t;try{
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
     */function pa(t="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+t;throw ua(e),new Error(e)}function ga(t,e){t||pa()}function ma(t,e){return t}
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
     */const ya={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class va extends Pe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class wa{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class ba{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ea{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(oa.UNAUTHENTICATED)))}shutdown(){}}class ka{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class _a{constructor(t){this.t=t,this.currentUser=oa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new wa;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new wa,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{ha("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ha("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new wa)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ha("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ga("string"==typeof e.accessToken),new ba(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ga(null===t||"string"==typeof t),new oa(t)}}class Ta{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=oa.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xa{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Ta(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(oa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ia{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&ha("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,ha("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{ha("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?s(t):ha("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ga("string"==typeof t.token),this.R=t.token,new Sa(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function Aa(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class Ca{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=Aa(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%62))}return n}}function Da(t,e){return t<e?-1:t>e?1:0}function Na(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class Ra{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new va(ya.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new va(ya.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new va(ya.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new va(ya.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ra.fromMillis(Date.now())}static fromDate(t){return Ra.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ra(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Da(this.nanoseconds,t.nanoseconds):Da(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class Oa{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Oa(t)}static min(){return new Oa(new Ra(0,0))}static max(){return new Oa(new Ra(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class La{constructor(t,e,n){void 0===e?e=0:e>t.length&&pa(),void 0===n?n=t.length-e:n>t.length-e&&pa(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===La.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof La?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ma extends La{construct(t,e,n){return new Ma(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new va(ya.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ma(e)}static emptyPath(){return new Ma([])}}const Pa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $a extends La{construct(t,e,n){return new $a(t,e,n)}static isValidIdentifier(t){return Pa.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$a.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $a(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new va(ya.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new va(ya.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new va(ya.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new va(ya.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $a(e)}static emptyPath(){return new $a([])}}
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
     */class Fa{constructor(t){this.path=t}static fromPath(t){return new Fa(Ma.fromString(t))}static fromName(t){return new Fa(Ma.fromString(t).popFirst(5))}static empty(){return new Fa(Ma.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ma.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ma.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fa(new Ma(t.slice()))}}function Va(t){return new Ua(t.readTime,t.key,-1)}class Ua{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ua(Oa.min(),Fa.empty(),-1)}static max(){return new Ua(Oa.max(),Fa.empty(),-1)}}function Ba(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Fa.comparator(t.documentKey,e.documentKey),0!==n?n:Da(t.largestBatchId,e.largestBatchId))}
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
     */const ja="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class za{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
     */async function qa(t){if(t.code!==ya.FAILED_PRECONDITION||t.message!==ja)throw t;ha("LocalStore","Unexpectedly lost primary lease")}
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
     */class Ha{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&pa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ha(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ha?e:Ha.resolve(e)}catch(t){return Ha.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ha.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ha.reject(e)}static resolve(t){return new Ha(((e,n)=>{e(t)}))}static reject(t){return new Ha(((e,n)=>{n(t)}))}static waitFor(t){return new Ha(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=Ha.resolve(!1);for(const n of t)e=e.next((t=>t?Ha.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Ha(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{i[l]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new Ha(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}function Ga(t){return"IndexedDbTransactionError"===t.name}
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
     */class Ka{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Qa(t){return null==t}function Wa(t){return 0===t&&1/t==-1/0}
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
function Xa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ya(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ja(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */Ka.ae=-1;class Za{constructor(t,e){this.comparator=t,this.root=e||el.EMPTY}insert(t,e){return new Za(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,el.BLACK,null,null))}remove(t){return new Za(this.comparator,this.root.remove(t,this.comparator).copy(null,null,el.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new tl(this.root,t,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new tl(this.root,t,this.comparator,!0)}}class tl{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class el{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:el.RED,this.left=null!=s?s:el.EMPTY,this.right=null!=r?r:el.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new el(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return el.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return el.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,el.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,el.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pa();if(this.right.isRed())throw pa();const t=this.left.check();if(t!==this.right.check())throw pa();return t+(this.isRed()?0:1)}}el.EMPTY=null,el.RED=!0,el.BLACK=!1,el.EMPTY=new class{constructor(){this.size=0}get key(){throw pa()}get value(){throw pa()}get color(){throw pa()}get left(){throw pa()}get right(){throw pa()}copy(t,e,n,s,r){return this}insert(t,e,n){return new el(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class nl{constructor(t){this.comparator=t,this.data=new Za(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sl(this.data.getIterator())}getIteratorFrom(t){return new sl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof nl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new nl(this.comparator);return e.data=t,e}}class sl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class rl{constructor(t){this.fields=t,t.sort($a.comparator)}static empty(){return new rl([])}unionWith(t){let e=new nl($a.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new rl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Na(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class ol{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new il("Invalid base64 string: "+t):t}}(t);return new ol(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ol(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Da(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ol.EMPTY_BYTE_STRING=new ol("");const al=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ll(t){if(ga(!!t),"string"==typeof t){let e=0;const n=al.exec(t);if(ga(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:cl(t.seconds),nanos:cl(t.nanos)}}function cl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function hl(t){return"string"==typeof t?ol.fromBase64String(t):ol.fromUint8Array(t)}
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
     */function ul(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function fl(t){const e=t.mapValue.fields.__previous_value__;return ul(e)?fl(e):e}function dl(t){const e=ll(t.mapValue.fields.__local_write_time__.timestampValue);return new Ra(e.seconds,e.nanos)}
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
     */class pl{constructor(t,e,n,s,r,i,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class gl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof gl&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ul(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:pa()}function vl(t,e){if(t===e)return!0;const n=yl(t);if(n!==yl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return dl(t).isEqual(dl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ll(t.timestampValue),s=ll(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return hl(t.bytesValue).isEqual(hl(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return cl(t.geoPointValue.latitude)===cl(e.geoPointValue.latitude)&&cl(t.geoPointValue.longitude)===cl(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return cl(t.integerValue)===cl(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=cl(t.doubleValue),s=cl(e.doubleValue);return n===s?Wa(n)===Wa(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Na(t.arrayValue.values||[],e.arrayValue.values||[],vl);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Xa(n)!==Xa(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!vl(n[t],s[t])))return!1;return!0}(t,e);default:return pa()}}function wl(t,e){return void 0!==(t.values||[]).find((t=>vl(t,e)))}function bl(t,e){if(t===e)return 0;const n=yl(t),s=yl(e);if(n!==s)return Da(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Da(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=cl(t.integerValue||t.doubleValue),s=cl(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return El(t.timestampValue,e.timestampValue);case 4:return El(dl(t),dl(e));case 5:return Da(t.stringValue,e.stringValue);case 6:return function(t,e){const n=hl(t),s=hl(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Da(n[t],s[t]);if(0!==e)return e}return Da(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Da(cl(t.latitude),cl(e.latitude));return 0!==n?n:Da(cl(t.longitude),cl(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=bl(n[t],s[t]);if(e)return e}return Da(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ml.mapValue&&e===ml.mapValue)return 0;if(t===ml.mapValue)return 1;if(e===ml.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=Da(s[t],i[t]);if(0!==e)return e;const o=bl(n[s[t]],r[i[t]]);if(0!==o)return o}return Da(s.length,i.length)}(t.mapValue,e.mapValue);default:throw pa()}}function El(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Da(t,e);const n=ll(t),s=ll(e),r=Da(n.seconds,s.seconds);return 0!==r?r:Da(n.nanos,s.nanos)}function kl(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ll(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return hl(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Fa.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=_l(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${_l(t.fields[r])}`;return n+"}"}(t.mapValue):pa()}function Tl(t){return!!t&&"integerValue"in t}function xl(t){return!!t&&"arrayValue"in t}function Sl(t){return!!t&&"mapValue"in t}function Il(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ya(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Il(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Il(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Al{constructor(t){this.value=t}static empty(){return new Al({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Sl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Il(e)}setAll(t){let e=$a.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Il(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());Sl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return vl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Sl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ya(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Al(Il(this.value))}}function Cl(t){const e=[];return Ya(t.fields,((t,n)=>{const s=new $a([t]);if(Sl(n)){const t=Cl(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new rl(e)
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
     */}class Dl{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Dl(t,0,Oa.min(),Oa.min(),Oa.min(),Al.empty(),0)}static newFoundDocument(t,e,n,s){return new Dl(t,1,e,Oa.min(),n,s,0)}static newNoDocument(t,e){return new Dl(t,2,e,Oa.min(),Oa.min(),Al.empty(),0)}static newUnknownDocument(t,e){return new Dl(t,3,e,Oa.min(),Oa.min(),Al.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Oa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Al.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Al.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oa.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Dl&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Dl(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Nl{constructor(t,e){this.position=t,this.inclusive=e}}function Rl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Fa.comparator(Fa.fromName(o.referenceValue),n.key):bl(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Ol(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vl(t.position[n],e.position[n]))return!1;return!0}
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
     */class Ll{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ml(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
     */class Pl{}class $l extends Pl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ql(t,e,n):"array-contains"===e?new Ql(t,n):"in"===e?new Wl(t,n):"not-in"===e?new Xl(t,n):"array-contains-any"===e?new Yl(t,n):new $l(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Hl(t,n):new Gl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(bl(e,this.value)):null!==e&&yl(this.value)===yl(e)&&this.matchesComparison(bl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return pa()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fl extends Pl{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Fl(t,e)}matches(t){return Vl(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Vl(t){return"and"===t.op}function Ul(t){return function(t){for(const e of t.filters)if(e instanceof Fl)return!1;return!0}(t)&&Vl(t)}function Bl(t){if(t instanceof $l)return t.field.canonicalString()+t.op.toString()+kl(t.value);if(Ul(t))return t.filters.map((t=>Bl(t))).join(",");{const e=t.filters.map((t=>Bl(t))).join(",");return`${t.op}(${e})`}}function jl(t,e){return t instanceof $l?function(t,e){return e instanceof $l&&t.op===e.op&&t.field.isEqual(e.field)&&vl(t.value,e.value)}(t,e):t instanceof Fl?function(t,e){return e instanceof Fl&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&jl(n,e.filters[s])),!0)}(t,e):void pa()}function zl(t){return t instanceof $l?function(t){return`${t.field.canonicalString()} ${t.op} ${kl(t.value)}`}(t):t instanceof Fl?function(t){return t.op.toString()+" {"+t.getFilters().map(zl).join(" ,")+"}"}(t):"Filter"}class ql extends $l{constructor(t,e,n){super(t,e,n),this.key=Fa.fromName(n.referenceValue)}matches(t){const e=Fa.comparator(t.key,this.key);return this.matchesComparison(e)}}class Hl extends $l{constructor(t,e){super(t,"in",e),this.keys=Kl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Gl extends $l{constructor(t,e){super(t,"not-in",e),this.keys=Kl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Kl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Fa.fromName(t.referenceValue)))}class Ql extends $l{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xl(e)&&wl(e.arrayValue,this.value)}}class Wl extends $l{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&wl(this.value.arrayValue,e)}}class Xl extends $l{constructor(t,e){super(t,"not-in",e)}matches(t){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!wl(this.value.arrayValue,e)}}class Yl extends $l{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>wl(this.value.arrayValue,t)))}}
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
     */class Jl{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.le=null}}function Zl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Jl(t,e,n,s,r,i,o)}function tc(t){const e=ma(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Bl(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Qa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>kl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>kl(t))).join(",")),e.le=t}return e.le}function ec(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ml(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ol(t.startAt,e.startAt)&&Ol(t.endAt,e.endAt)}
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
     */class nc{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function sc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function rc(t){const e=ma(t);if(null===e.he){e.he=[];const t=new Set;for(const n of e.explicitOrderBy)e.he.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",s=function(t){let e=new nl($a.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);s.forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new Ll(s,n))})),t.has($a.keyField().canonicalString())||e.he.push(new Ll($a.keyField(),n))}return e.he}function ic(t){const e=ma(t);return e.Pe||(e.Pe=function(t,e){if("F"===t.limitType)return Zl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ll(t.field,e)}));const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return Zl(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}(e,rc(t))),e.Pe}function oc(t,e,n){return new nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return ec(ic(t),ic(e))&&t.limitType===e.limitType}function lc(t){return`${tc(ic(t))}|lt:${t.limitType}`}function cc(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>zl(t))).join(", ")}]`),Qa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>kl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>kl(t))).join(",")),`Target(${e})`}(ic(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Fa.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of rc(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Rl(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,rc(t),e))&&!(t.endAt&&!function(t,e,n){const s=Rl(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,rc(t),e))}(t,e)}function uc(t,e,n){const s=t.field.isKeyField()?Fa.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?bl(s,r):pa()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return pa()}}
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
     */class fc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ya(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Ja(this.inner)}size(){return this.innerSize}}
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
     */const dc=new Za(Fa.comparator);function pc(){return dc}const gc=new Za(Fa.comparator);function mc(...t){let e=gc;for(const n of t)e=e.insert(n.key,n);return e}function yc(t){let e=gc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function vc(){return bc()}function wc(){return bc()}function bc(){return new fc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ec=new Za(Fa.comparator),kc=new nl(Fa.comparator);function _c(...t){let e=kc;for(const n of t)e=e.add(n);return e}const Tc=new nl(Da);
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
function xc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wa(e)?"-0":e}}function Sc(t){return{integerValue:""+t}}function Ic(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Sc(e):xc(t,e)}
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
     */class Ac{constructor(){this._=void 0}}function Cc(t,e,n){return t instanceof Rc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ul(e)&&(e=fl(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Oc?Lc(t,e):t instanceof Mc?Pc(t,e):function(t,e){const n=Nc(t,e),s=Fc(n)+Fc(t.Te);return Tl(n)&&Tl(t.Te)?Sc(s):xc(t.serializer,s)}(t,e)}function Dc(t,e,n){return t instanceof Oc?Lc(t,e):t instanceof Mc?Pc(t,e):n}function Nc(t,e){return t instanceof $c?function(t){return Tl(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Rc extends Ac{}class Oc extends Ac{constructor(t){super(),this.elements=t}}function Lc(t,e){const n=Vc(e);for(const e of t.elements)n.some((t=>vl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Mc extends Ac{constructor(t){super(),this.elements=t}}function Pc(t,e){let n=Vc(e);for(const e of t.elements)n=n.filter((t=>!vl(t,e)));return{arrayValue:{values:n}}}class $c extends Ac{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Fc(t){return cl(t.integerValue||t.doubleValue)}function Vc(t){return xl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Uc{constructor(t,e){this.version=t,this.transformResults=e}}class Bc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bc}static exists(t){return new Bc(void 0,t)}static updateTime(t){return new Bc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class zc{}function qc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new th(t.key,Bc.none()):new Wc(t.key,t.data,Bc.none());{const n=t.data,s=Al.empty();let r=new nl($a.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Xc(t.key,s,new rl(r.toArray()),Bc.none())}}function Hc(t,e,n){t instanceof Wc?function(t,e,n){const s=t.value.clone(),r=Jc(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Xc?function(t,e,n){if(!jc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Jc(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Yc(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Gc(t,e,n,s){return t instanceof Wc?function(t,e,n,s){if(!jc(t.precondition,e))return n;const r=t.value.clone(),i=Zc(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xc?function(t,e,n,s){if(!jc(t.precondition,e))return n;const r=Zc(t.fieldTransforms,s,e),i=e.data;return i.setAll(Yc(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return jc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Kc(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=Nc(s.transform,t||null);null!=r&&(null===n&&(n=Al.empty()),n.set(s.field,r))}return n||null}function Qc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Na(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Oc&&e instanceof Oc||t instanceof Mc&&e instanceof Mc?Na(t.elements,e.elements,vl):t instanceof $c&&e instanceof $c?vl(t.Te,e.Te):t instanceof Rc&&e instanceof Rc}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wc extends zc{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xc extends zc{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Yc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Jc(t,e,n){const s=new Map;ga(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Dc(o,a,n[r]))}return s}function Zc(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Cc(t,i,e))}return s}class th extends zc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eh extends zc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class nh{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Hc(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Gc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Gc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wc();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=qc(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(Oa.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),_c())}isEqual(t){return this.batchId===t.batchId&&Na(this.mutations,t.mutations,((t,e)=>Qc(t,e)))&&Na(this.baseMutations,t.baseMutations,((t,e)=>Qc(t,e)))}}class sh{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){ga(t.mutations.length===n.length);let s=Ec;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new sh(t,e,n,s)}}
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
     */class rh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */var ih,oh;(oh=ih||(ih={}))[oh.OK=0]="OK",oh[oh.CANCELLED=1]="CANCELLED",oh[oh.UNKNOWN=2]="UNKNOWN",oh[oh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oh[oh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oh[oh.NOT_FOUND=5]="NOT_FOUND",oh[oh.ALREADY_EXISTS=6]="ALREADY_EXISTS",oh[oh.PERMISSION_DENIED=7]="PERMISSION_DENIED",oh[oh.UNAUTHENTICATED=16]="UNAUTHENTICATED",oh[oh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oh[oh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oh[oh.ABORTED=10]="ABORTED",oh[oh.OUT_OF_RANGE=11]="OUT_OF_RANGE",oh[oh.UNIMPLEMENTED=12]="UNIMPLEMENTED",oh[oh.INTERNAL=13]="INTERNAL",oh[oh.UNAVAILABLE=14]="UNAVAILABLE",oh[oh.DATA_LOSS=15]="DATA_LOSS",
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
new ra([4294967295,4294967295],0);class ah{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ch(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hh(t,e){return lh(t,e.toTimestamp())}function uh(t){return ga(!!t),Oa.fromTimestamp(function(t){const e=ll(t);return new Ra(e.seconds,e.nanos)}(t))}function fh(t,e){return function(t){return new Ma(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function dh(t,e){return fh(t.databaseId,e.path)}function ph(t){const e=function(t){const e=Ma.fromString(t);return ga(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */(e)),e}(t);return 4===e.length?Ma.emptyPath():function(t){return ga(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function gh(t,e,n){return{name:dh(t,e),fields:n.value.mapValue.fields}}function mh(t){let e=ph(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ga(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=yh(t);return e instanceof Fl&&Ul(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ll(vh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Qa(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Nl(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Nl(n,e)}(n.endAt)),function(t,e,n,s,r,i,o,a){return new nc(t,e,n,s,r,i,o,a)}(e,r,o,i,a,"F",l,c)}function yh(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vh(t.unaryFilter.field);return $l.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vh(t.unaryFilter.field);return $l.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vh(t.unaryFilter.field);return $l.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=vh(t.unaryFilter.field);return $l.create(r,"!=",{nullValue:"NULL_VALUE"});default:return pa()}}(t):void 0!==t.fieldFilter?function(t){return $l.create(vh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pa()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Fl.create(t.compositeFilter.filters.map((t=>yh(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return pa()}}(t.compositeFilter.op))}(t):pa()}function vh(t){return $a.fromServerFormat(t.fieldPath)}function wh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class bh{constructor(t){this.ct=t}}function Eh(t){const e=mh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?oc(e,e.limit,"L"):e}
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
     */class kh{constructor(){this._n=new _h}addToCollectionParentIndex(t,e){return this._n.add(e),Ha.resolve()}getCollectionParents(t,e){return Ha.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return Ha.resolve()}deleteFieldIndex(t,e){return Ha.resolve()}deleteAllFieldIndexes(t){return Ha.resolve()}createTargetIndexes(t,e){return Ha.resolve()}getDocumentsMatchingTarget(t,e){return Ha.resolve(null)}getIndexType(t,e){return Ha.resolve(0)}getFieldIndexes(t,e){return Ha.resolve([])}getNextCollectionGroupToUpdate(t){return Ha.resolve(null)}getMinOffset(t,e){return Ha.resolve(Ua.min())}getMinOffsetFromCollectionGroup(t,e){return Ha.resolve(Ua.min())}updateCollectionGroup(t,e,n){return Ha.resolve()}updateIndexEntries(t,e){return Ha.resolve()}}class _h{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new nl(Ma.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new nl(Ma.comparator)).toArray()}}
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
     */class Th{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Th(0)}static Bn(){return new Th(-1)}}
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
     */class xh{constructor(){this.changes=new fc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Dl.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ha.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
     */class Sh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class Ih{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Gc(n.mutation,t,rl.empty(),Ra.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,_c()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=_c()){const s=vc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=mc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=vc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,_c())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=pc();const i=bc(),o=bc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Xc)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Gc(o.mutation,e,o.mutation.getFieldMask(),Ra.now())):i.set(e.key,rl.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Sh(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=bc();let s=new Za(((t,e)=>t-e)),r=_c();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||rl.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||_c()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,l=s.value,c=wc();l.forEach((t=>{if(!r.has(t)){const s=qc(e.get(t),n.get(t));null!==s&&c.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Ha.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,s){return function(t){return Fa.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):Ha.resolve(vc());let o=-1,a=r;return i.next((e=>Ha.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ha.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,_c()))).next((t=>({batchId:o,changes:yc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Fa(e)).next((t=>{let e=mc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const r=e.collectionGroup;let i=mc();return this.indexManager.getCollectionParents(t,r).next((o=>Ha.forEach(o,(o=>{const a=function(t,e){return new nc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,s)))).next((t=>{r.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Dl.newInvalidDocument(s)))}));let n=mc();return t.forEach(((t,s)=>{const i=r.get(t);void 0!==i&&Gc(i.mutation,s,rl.empty(),Ra.now()),hc(e,s)&&(n=n.insert(t,s))})),n}))}}
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
     */class Ah{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return Ha.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:uh(t.createTime)}}(e)),Ha.resolve()}getNamedQuery(t,e){return Ha.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:Eh(t.bundledQuery),readTime:uh(t.readTime)}}(e)),Ha.resolve()}}
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
     */class Ch{constructor(){this.overlays=new Za(Fa.comparator),this.hr=new Map}getOverlay(t,e){return Ha.resolve(this.overlays.get(e))}getOverlays(t,e){const n=vc();return Ha.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ht(t,e,s)})),Ha.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),Ha.resolve()}getOverlaysForCollection(t,e,n){const s=vc(),r=e.length+1,i=new Fa(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ha.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Za(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=vc(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=vc(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Ha.resolve(o)}ht(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new rh(e,n));let r=this.hr.get(e);void 0===r&&(r=_c(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}}
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
     */class Dh{constructor(){this.Pr=new nl(Nh.Ir),this.Tr=new nl(Nh.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Nh(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new Nh(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new Fa(new Ma([])),n=new Nh(e,t),s=new Nh(e,t+1),r=[];return this.Tr.forEachInRange([n,s],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new Fa(new Ma([])),n=new Nh(e,t),s=new Nh(e,t+1);let r=_c();return this.Tr.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Nh(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Nh{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return Fa.comparator(t.key,e.key)||Da(t.pr,e.pr)}static Er(t,e){return Da(t.pr,e.pr)||Fa.comparator(t.key,e.key)}}
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
     */class Rh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new nl(Nh.Ir)}checkEmpty(t){return Ha.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new nh(r,e,n,s);this.mutationQueue.push(i);for(const e of s)this.wr=this.wr.add(new Nh(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Ha.resolve(i)}lookupMutationBatch(t,e){return Ha.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),r=s<0?0:s;return Ha.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ha.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return Ha.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Nh(e,0),s=new Nh(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,s],(t=>{const e=this.Sr(t.pr);r.push(e)})),Ha.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nl(Da);return e.forEach((t=>{const e=new Nh(t,0),s=new Nh(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,s],(t=>{n=n.add(t.pr)}))})),Ha.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Fa.isDocumentKey(r)||(r=r.child(""));const i=new Nh(new Fa(r),0);let o=new nl(Da);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.pr)),!0)}),i),Ha.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ga(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return Ha.forEach(e.mutations,(s=>{const r=new Nh(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new Nh(e,0),s=this.wr.firstAfterOrEqual(n);return Ha.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ha.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class Oh{constructor(t){this.vr=t,this.docs=new Za(Fa.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ha.resolve(n?n.document.mutableCopy():Dl.newInvalidDocument(e))}getEntries(t,e){let n=pc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Dl.newInvalidDocument(t))})),Ha.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=pc();const i=e.path,o=new Fa(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Ba(Va(o),n)<=0||(s.has(o.key)||hc(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Ha.resolve(r)}getAllFromCollectionGroup(t,e,n,s){pa()}Fr(t,e){return Ha.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Lh(this)}getSize(t){return Ha.resolve(this.size)}}class Lh extends xh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)})),Ha.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
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
     */class Mh{constructor(t){this.persistence=t,this.Mr=new fc((t=>tc(t)),ec),this.lastRemoteSnapshotVersion=Oa.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Dh,this.targetCount=0,this.Br=Th.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),Ha.resolve()}getLastRemoteSnapshotVersion(t){return Ha.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ha.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),Ha.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),Ha.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Th(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,Ha.resolve()}updateTargetData(t,e){return this.qn(e),Ha.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,Ha.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Mr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ha.waitFor(r).next((()=>s))}getTargetCount(t){return Ha.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return Ha.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),Ha.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),Ha.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),Ha.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return Ha.resolve(n)}containsKey(t,e){return Ha.resolve(this.Nr.containsKey(e))}}
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
     */class Ph{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Ka(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Mh(this),this.indexManager=new kh,this.remoteDocumentCache=function(t){return new Oh(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new bh(e),this.$r=new Ah(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ch,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new Rh(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){ha("MemoryPersistence","Starting transaction:",t);const s=new $h(this.kr.next());return this.referenceDelegate.Ur(),n(s).next((t=>this.referenceDelegate.Wr(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gr(t,e){return Ha.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class $h extends za{constructor(t){super(),this.currentSequenceNumber=t}}class Fh{constructor(t){this.persistence=t,this.zr=new Dh,this.jr=null}static Hr(t){return new Fh(t)}get Jr(){if(this.jr)return this.jr;throw pa()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),Ha.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),Ha.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),Ha.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ha.forEach(this.Jr,(n=>{const s=Fa.fromPath(n);return this.Yr(t,s).next((t=>{t||e.removeEntry(s,Oa.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return Ha.or([()=>Ha.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
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
     */class Vh{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=_c(),s=_c();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Vh(t,e.fromCache,n,s)}}
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
     */class Uh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
     */class Bh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,s,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new Uh;return this.Ji(t,e,n).next((s=>{if(r.result=s,this.Ui)return this.Yi(t,e,n,s.size)}))})).next((()=>r.result))}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(ca()<=Ge.DEBUG&&ha("QueryEngine","SDK will not create cache indexes for query:",cc(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Ha.resolve()):(ca()<=Ge.DEBUG&&ha("QueryEngine","Query:",cc(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(ca()<=Ge.DEBUG&&ha("QueryEngine","The SDK decides to create cache indexes for query:",cc(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ic(e))):Ha.resolve())}ji(t,e){if(sc(e))return Ha.resolve(null);let n=ic(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=oc(e,null,"F"),n=ic(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=_c(...s);return this.zi.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Zi(e,s);return this.Xi(e,i,r,n.readTime)?this.ji(t,oc(e,null,"F")):this.es(t,i,e,n)}))))})))))}Hi(t,e,n,s){return sc(e)||s.isEqual(Oa.min())?Ha.resolve(null):this.zi.getDocuments(t,n).next((r=>{const i=this.Zi(e,r);return this.Xi(e,i,n,s)?Ha.resolve(null):(ca()<=Ge.DEBUG&&ha("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cc(e)),this.es(t,i,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Oa.fromTimestamp(1e9===s?new Ra(n+1,0):new Ra(n,s));return new Ua(r,Fa.empty(),e)}(s,-1)).next((t=>t)))}))}Zi(t,e){let n=new nl(function(t){return(e,n)=>{let s=!1;for(const r of rc(t)){const t=uc(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,s)=>{hc(t,s)&&(n=n.add(s))})),n}Xi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(t,e,n){return ca()<=Ge.DEBUG&&ha("QueryEngine","Using full collection scan to execute query:",cc(e)),this.zi.getDocumentsMatchingQuery(t,e,Ua.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class jh{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Za(Da),this.rs=new fc((t=>tc(t)),ec),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ih(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function zh(t,e){const n=ma(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=_c();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function qh(t,e){const n=ma(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Hh{constructor(){this.activeTargetIds=Tc}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gh{constructor(){this.no=new Hh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Hh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class Kh{io(t){}shutdown(){}}
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
     */class Qh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ha("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){ha("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let Wh=null;function Xh(){return null===Wh?Wh=268435456+Math.round(2147483648*Math.random()):Wh++,"0x"+Wh.toString(16)
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
     */}const Yh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class Jh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
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
     */const Zh="WebChannelConnection";class tu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${s}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${s}`}get wo(){return!1}So(t,e,n,s,r){const i=Xh(),o=this.bo(t,e);ha("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,s,r),this.Co(t,o,a,n).then((e=>(ha("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw fa("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,r,i){return this.So(t,e,n,s,r)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+aa,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Yh[t];return`${this.fo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,s){const r=Xh();return new Promise(((i,o)=>{const a=new sa;a.setWithCredentials(!0),a.listenOnce(Jo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Yo.NO_ERROR:const e=a.getResponseJson();ha(Zh,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),i(e);break;case Yo.TIMEOUT:ha(Zh,`RPC '${t}' ${r} timed out`),o(new va(ya.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const n=a.getStatus();if(ha(Zh,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ya).indexOf(e)>=0?e:ya.UNKNOWN}(e.status);o(new va(t,e.message))}else o(new va(ya.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new va(ya.UNAVAILABLE,"Connection failed."));break;default:pa()}}finally{ha(Zh,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(s);ha(Zh,`RPC '${t}' ${r} sending request:`,s),a.send(e,"POST",l,n,15)}))}Fo(t,e,n){const s=Xh(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Io,o=Tr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");ha(Zh,`Creating RPC '${t}' stream ${s}: ${c}`,a);const h=i.createWebChannel(c,a);let u=!1,f=!1;const d=new Jh({lo:e=>{f?ha(Zh,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(u||(ha(Zh,`Opening RPC '${t}' stream ${s} transport.`),h.open(),u=!0),ha(Zh,`RPC '${t}' stream ${s} sending:`,e),h.send(e))},ho:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,na.EventType.OPEN,(()=>{f||ha(Zh,`RPC '${t}' stream ${s} transport opened.`)})),p(h,na.EventType.CLOSE,(()=>{f||(f=!0,ha(Zh,`RPC '${t}' stream ${s} transport closed`),d.Vo())})),p(h,na.EventType.ERROR,(e=>{f||(f=!0,fa(Zh,`RPC '${t}' stream ${s} transport errored:`,e),d.Vo(new va(ya.UNAVAILABLE,"The operation could not be completed")))})),p(h,na.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];ga(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){ha(Zh,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=ih[t];if(void 0!==e)return function(t){if(void 0===t)return ua("GRPC error has no .code"),ya.UNKNOWN;switch(t){case ih.OK:return ya.OK;case ih.CANCELLED:return ya.CANCELLED;case ih.UNKNOWN:return ya.UNKNOWN;case ih.DEADLINE_EXCEEDED:return ya.DEADLINE_EXCEEDED;case ih.RESOURCE_EXHAUSTED:return ya.RESOURCE_EXHAUSTED;case ih.INTERNAL:return ya.INTERNAL;case ih.UNAVAILABLE:return ya.UNAVAILABLE;case ih.UNAUTHENTICATED:return ya.UNAUTHENTICATED;case ih.INVALID_ARGUMENT:return ya.INVALID_ARGUMENT;case ih.NOT_FOUND:return ya.NOT_FOUND;case ih.ALREADY_EXISTS:return ya.ALREADY_EXISTS;case ih.PERMISSION_DENIED:return ya.PERMISSION_DENIED;case ih.FAILED_PRECONDITION:return ya.FAILED_PRECONDITION;case ih.ABORTED:return ya.ABORTED;case ih.OUT_OF_RANGE:return ya.OUT_OF_RANGE;case ih.UNIMPLEMENTED:return ya.UNIMPLEMENTED;case ih.DATA_LOSS:return ya.DATA_LOSS;default:return pa()}}(e)}(e),r=o.message;void 0===n&&(n=ya.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Vo(new va(n,r)),h.close()}else ha(Zh,`RPC '${t}' stream ${s} received:`,r),d.mo(r)}})),p(o,Zo.STAT_EVENT,(e=>{e.stat===ta?ha(Zh,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===ea&&ha(Zh,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.Ro()}),0),d}}function eu(){return"undefined"!=typeof document?document:null}
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
     */function nu(t){return new ah(t,!0)}
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
     */class su{constructor(t,e,n=1e3,s=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=s,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),s=Math.max(0,e-n);s>0&&ha("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
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
     */class ru{constructor(t,e,n,s,r,i,o,a){this.oi=t,this.$o=n,this.Uo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new su(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===ya.RESOURCE_EXHAUSTED?(ua(e.toString()),ua("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===ya.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new va(ya.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return ha("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(ha("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iu extends ru{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(ga(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?(ga(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?uh(t.updateTime):uh(e);return n.isEqual(Oa.min())&&(n=uh(e)),new Uc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=uh(t.commitTime);return this.listener.T_(n,e)}return ga(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=function(t){return new Ma(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Wc)n={update:gh(t,e.key,e.value)};else if(e instanceof th)n={delete:dh(t,e.key)};else if(e instanceof Xc)n={update:gh(t,e.key,e.data),updateMask:wh(e.fieldMask)};else{if(!(e instanceof eh))return pa();n={verify:dh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Rc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Oc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Mc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof $c)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw pa()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:hh(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:pa()}(t,e.precondition)),n}(this.serializer,t)))};this.t_(e)}}
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
     */class ou extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new va(ya.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.So(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ya.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new va(ya.UNKNOWN,t.toString())}))}vo(t,e,n,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.vo(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ya.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new va(ya.UNKNOWN,t.toString())}))}terminate(){this.A_=!0}}class au{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ua(e),this.g_=!1):ha("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
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
     */class lu{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io((t=>{n.enqueueAndForget((async()=>{uu(this)&&(ha("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ma(t);e.v_.add(4),await hu(e),e.x_.set("Unknown"),e.v_.delete(4),await cu(e)}(this))}))})),this.x_=new au(n,s)}}async function cu(t){if(uu(t))for(const e of t.F_)await e(!0)}async function hu(t){for(const e of t.F_)await e(!1)}function uu(t){return 0===ma(t).v_.size}async function fu(t,e,n){if(!Ga(e))throw e;t.v_.add(1),await hu(t),t.x_.set("Offline"),n||(n=()=>function(t){const e=ma(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ha("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await cu(t)}))}function du(t,e){return e().catch((n=>fu(t,n,e)))}async function pu(t){const e=ma(t),n=Tu(e);let s=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;gu(e);)try{const t=await qh(e.localStore,s);if(null===t){0===e.D_.length&&n.Xo();break}s=t.batchId,mu(e,t)}catch(t){await fu(e,t)}yu(e)&&vu(e)}function gu(t){return uu(t)&&t.D_.length<10}function mu(t,e){t.D_.push(e);const n=Tu(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function yu(t){return uu(t)&&!Tu(t).Ho()&&t.D_.length>0}function vu(t){Tu(t).start()}async function wu(t){Tu(t).d_()}async function bu(t){const e=Tu(t);for(const n of t.D_)e.I_(n.mutations)}async function Eu(t,e,n){const s=t.D_.shift(),r=sh.from(s,e,n);await du(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await pu(t)}async function ku(t,e){e&&Tu(t).P_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return pa();case ya.CANCELLED:case ya.UNKNOWN:case ya.DEADLINE_EXCEEDED:case ya.RESOURCE_EXHAUSTED:case ya.INTERNAL:case ya.UNAVAILABLE:case ya.UNAUTHENTICATED:return!1;case ya.INVALID_ARGUMENT:case ya.NOT_FOUND:case ya.ALREADY_EXISTS:case ya.PERMISSION_DENIED:case ya.FAILED_PRECONDITION:case ya.ABORTED:case ya.OUT_OF_RANGE:case ya.UNIMPLEMENTED:case ya.DATA_LOSS:return!0}}(t)&&t!==ya.ABORTED}(e.code)){const n=t.D_.shift();Tu(t).Zo(),await du(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await pu(t)}}(t,e),yu(t)&&vu(t)}async function _u(t,e){const n=ma(t);n.asyncQueue.verifyOperationInProgress(),ha("RemoteStore","RemoteStore received new credentials");const s=uu(n);n.v_.add(3),await hu(n),s&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await cu(n)}function Tu(t){return t.B_||(t.B_=function(t,e,n){const s=ma(t);return s.R_(),new iu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Po:wu.bind(null,t),To:ku.bind(null,t),E_:bu.bind(null,t),T_:Eu.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await pu(t)):(await t.B_.stop(),t.D_.length>0&&(ha("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
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
     */}class xu{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new wa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new xu(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new va(ya.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(ua("AsyncQueue",`${e}: ${t}`),Ga(t))return new va(ya.UNAVAILABLE,`${e}: ${t}`);throw t}class Iu{constructor(){this.queries=new fc((t=>lc(t)),ac),this.onlineState="Unknown",this.Q_=new Set}}class Au{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.ma={},this.fa=new fc((t=>lc(t)),ac),this.ga=new Map,this.pa=new Set,this.ya=new Za(Fa.comparator),this.wa=new Map,this.Sa=new Dh,this.ba={},this.Da=new Map,this.Ca=Th.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return!0===this.va}}async function Cu(t,e,n){const s=function(t){const e=ma(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ru.bind(null,e),e}(t);try{const t=await function(t,e){const n=ma(t),s=Ra.now(),r=e.reduce(((t,e)=>t.add(e.key)),_c());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=pc(),l=_c();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Kc(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Xc(t.key,e,Cl(e.value.mapValue),Bc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:yc(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ba[t.currentUser.toKey()];s||(s=new Za(Da)),s=s.insert(e,n),t.ba[t.currentUser.toKey()]=s}(s,t.batchId,n),await Mu(s,t.changes),await pu(s.remoteStore)}catch(t){const e=Su(t,"Failed to persist write");n.reject(e)}}function Du(t,e,n){const s=ma(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.fa.forEach(((n,s)=>{const r=s.view.K_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=ma(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.K_(e)&&(s=!0)})),s&&function(t){t.Q_.forEach((t=>{t.next()}))}(n)}(s.eventManager,e),t.length&&s.ma.u_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Nu(t,e){const n=ma(t),s=e.batch.batchId;try{const t=await function(t,e){const n=ma(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=Ha.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);ga(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=_c();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);Lu(n,s,null),Ou(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Mu(n,t)}catch(t){await qa(t)}}async function Ru(t,e,n){const s=ma(t);try{const t=await function(t,e){const n=ma(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ga(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Lu(s,e,n),Ou(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Mu(s,t)}catch(n){await qa(n)}}function Ou(t,e){(t.Da.get(e)||[]).forEach((t=>{t.resolve()})),t.Da.delete(e)}function Lu(t,e,n){const s=ma(t);let r=s.ba[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.ba[s.currentUser.toKey()]=r}}async function Mu(t,e,n){const s=ma(t),r=[],i=[],o=[];s.fa.isEmpty()||(s.fa.forEach(((t,a)=>{o.push(s.Fa(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Vh.Ki(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.ma.u_(r),await async function(t,e){const n=ma(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ha.forEach(e,(e=>Ha.forEach(e.qi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ha.forEach(e.Qi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Ga(t))throw t;ha("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.ns=n.ns.insert(e,r)}}}(s.localStore,i))}async function Pu(t,e){const n=ma(t);if(!n.currentUser.isEqual(e)){ha("SyncEngine","User change. New user:",e.toKey());const t=await zh(n.localStore,e);n.currentUser=e,function(t,e){t.Da.forEach((t=>{t.forEach((t=>{t.reject(new va(ya.CANCELLED,e))}))})),t.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Mu(n,t.us)}}class $u{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=nu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,s){return new jh(t,e,n,s)}(this.persistence,new Bh,t.initialUser,this.serializer)}createPersistence(t){return new Ph(Fh.Hr,this.serializer)}createSharedClientState(t){return new Gh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Du(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pu.bind(null,this.syncEngine),await async function(t,e){const n=ma(t);e?(n.v_.delete(2),await cu(n)):e||(n.v_.add(2),await hu(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Iu}createDatastore(t){const e=nu(t.databaseInfo.databaseId),n=function(t){return new tu(t)}(t.databaseInfo);return function(t,e,n,s){return new ou(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,s,r){return new lu(t,e,n,s,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>Du(this.syncEngine,t,0)),Qh.C()?new Qh:new Kh)}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Au(t,e,n,s,r,i);return o&&(a.va=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ma(t);ha("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await hu(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore)}}
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
     */class Vu{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=oa.UNAUTHENTICATED,this.clientId=Ca.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ha("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ha("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new va(ya.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Su(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Uu(t,e){t.asyncQueue.verifyOperationInProgress(),ha("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await zh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Bu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ha("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===ya.FAILED_PRECONDITION||t.code===ya.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;fa("Error using user provided cache. Falling back to memory cache: "+n),await Uu(t,new $u)}}else ha("FirestoreClient","Using default OfflineComponentProvider"),await Uu(t,new $u);return t._offlineComponents}(t);ha("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>_u(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>_u(e.remoteStore,n))),t._onlineComponents=e}function ju(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ha("FirestoreClient","Using user provided OnlineComponentProvider"),await Bu(t,t._uninitializedComponentsProvider._online)):(ha("FirestoreClient","Using default OnlineComponentProvider"),await Bu(t,new Fu))),t._onlineComponents}(t).then((t=>t.syncEngine))}
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
     */function zu(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
     */}const qu=new Map;
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
     */function Hu(t,e,n){if(!n)throw new va(ya.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gu(t){if(!Fa.isDocumentKey(t))throw new va(ya.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ku(t){if(Fa.isDocumentKey(t))throw new va(ya.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":pa()}function Wu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new va(ya.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(t);throw new va(ya.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class Xu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new va(ya.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new va(ya.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new va(ya.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zu(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new va(ya.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new va(ya.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new va(ya.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yu{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new va(ya.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new va(ya.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ea;switch(t.type){case"firstParty":return new xa(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new va(ya.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=qu.get(t);e&&(ha("ComponentProvider","Removing Datastore"),qu.delete(t),e.terminate())}(this),Promise.resolve()}}function Ju(t,e,n,s={}){var r;const i=(t=Wu(t,Yu))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=oa.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ce(JSON.stringify({alg:"none",type:"JWT"})),Ce(JSON.stringify(i)),""].join(".")}(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new va(ya.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new oa(i)}t._authCredentials=new ka(new ba(e,n))}}
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
     */class Zu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Zu(this.firestore,t,this._query)}}class tf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ef(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tf(this.firestore,t,this._key)}}class ef extends Zu{constructor(t,e,n){super(t,e,function(t){return new nc(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tf(this.firestore,null,new Fa(t))}withConverter(t){return new ef(this.firestore,t,this._path)}}
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
class nf{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new su(this,"async_queue_retry"),this.su=()=>{const t=eu();t&&ha("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=eu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const e=eu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise((()=>{}));const e=new wa;return this._u((()=>this.Xa&&this.ru?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Za.push(t),this.au())))}async au(){if(0!==this.Za.length){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!Ga(t))throw t;ha("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo((()=>this.au()))}}_u(t){const e=this.Ya.then((()=>(this.nu=!0,t().catch((t=>{this.tu=t,this.nu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw ua("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.nu=!1,t))))));return this.Ya=e,e}enqueueAfterDelay(t,e,n){this.ou(),this.iu.indexOf(t)>-1&&(e=0);const s=xu.createAndSchedule(this,t,e,n,(t=>this.uu(t)));return this.eu.push(s),s}ou(){this.tu&&pa()}verifyOperationInProgress(){}async cu(){let t;do{t=this.Ya,await t}while(t!==this.Ya)}lu(t){for(const e of this.eu)if(e.timerId===t)return!0;return!1}hu(t){return this.cu().then((()=>{this.eu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.eu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.cu()}))}Pu(t){this.iu.push(t)}uu(t){const e=this.eu.indexOf(t);this.eu.splice(e,1)}}class sf extends Yu{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new nf,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rf(this),this._firestoreClient.terminate()}}function rf(t){var e,n,s;const r=t._freezeSettings(),i=function(t,e,n,s){return new pl(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,zu(s.experimentalLongPollingOptions),s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Vu(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
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
     */class of{constructor(t){this._byteString=t}static fromBase64String(t){try{return new of(ol.fromBase64String(t))}catch(t){throw new va(ya.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new of(ol.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class af{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new va(ya.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $a(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class lf{constructor(t){this._methodName=t}}
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
     */class cf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new va(ya.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new va(ya.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Da(this._lat,t._lat)||Da(this._long,t._long)}}
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
     */const hf=/^__.*__$/;class uf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Xc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wc(t,this.data,e,this.fieldTransforms)}}function ff(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pa()}}class df{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Iu(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new df(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Eu({path:n,Au:!1});return s.Ru(t),s}Vu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Eu({path:n,Au:!1});return s.Iu(),s}mu(t){return this.Eu({path:void 0,Au:!0})}fu(t){return _f(t,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Iu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ru(this.path.get(t))}Ru(t){if(0===t.length)throw this.fu("Document fields must not be empty");if(ff(this.Tu)&&hf.test(t))throw this.fu('Document fields cannot begin and end with "__"')}}class pf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||nu(t)}yu(t,e,n,s=!1){return new df({Tu:t,methodName:e,pu:n,path:$a.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gf(t){const e=t._freezeSettings(),n=nu(t._databaseId);return new pf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mf(t,e,n,s,r,i={}){const o=t.yu(i.merge||i.mergeFields?2:0,e,n,r);bf("Data must be an object, but it was:",o,s);const a=vf(s,o);let l,c;if(i.merge)l=new rl(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Ef(e,s,n);if(!o.contains(r))throw new va(ya.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Tf(t,r)||t.push(r)}l=new rl(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new uf(new Al(a),l,c)}function yf(t,e){if(wf(t=Be(t)))return bf("Unsupported field value:",e,t),vf(t,e);if(t instanceof lf)return function(t,e){if(!ff(e.Tu))throw e.fu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&4!==e.Tu)throw e.fu("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=yf(r,e.mu(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Be(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ic(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ra.fromDate(t);return{timestampValue:lh(e.serializer,n)}}if(t instanceof Ra){const n=new Ra(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:lh(e.serializer,n)}}if(t instanceof cf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof of)return{bytesValue:ch(e.serializer,t._byteString)};if(t instanceof tf){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.fu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fu(`Unsupported field value: ${Qu(t)}`)}(t,e)}function vf(t,e){const n={};return Ja(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ya(t,((t,s)=>{const r=yf(s,e.du(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function wf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ra||t instanceof cf||t instanceof of||t instanceof tf||t instanceof lf)}function bf(t,e,n){if(!wf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Qu(n);throw"an object"===s?e.fu(t+" a custom object"):e.fu(t+" "+s)}}function Ef(t,e,n){if((e=Be(e))instanceof af)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(kf)>=0)throw _f(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new af(...e.split("."))._internalPath}catch(s){throw _f(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw _f("Field path arguments must be of type string or ",t,!1,void 0,n)}const kf=new RegExp("[~\\*/\\[\\]]");function _f(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new va(ya.INVALID_ARGUMENT,a+t+l)}function Tf(t,e){return t.some((t=>t.isEqual(e)))}
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
     */function xf(t,e){const n=Wu(t.firestore,sf),s=function(t,e,...n){if(t=Be(t),1===arguments.length&&(e=Ca.V()),Hu("doc","path",e),t instanceof Yu){const s=Ma.fromString(e,...n);return Gu(s),new tf(t,null,new Fa(s))}{if(!(t instanceof tf||t instanceof ef))throw new va(ya.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ma.fromString(e,...n));return Gu(s),new tf(t.firestore,t instanceof ef?t.converter:null,new Fa(s))}}(t),r=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e);return function(t,e){return function(t,e){const n=new wa;return t.asyncQueue.enqueueAndForget((async()=>Cu(await ju(t),e,n))),n.promise}(function(t){return t._firestoreClient||rf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[mf(gf(t.firestore),"addDoc",s._key,r,null!==t.converter,{}).toMutation(s._key,Bc.exists(!1))]).then((()=>s))}!function(t,e=!0){!function(t){aa=t}("10.5.0"),xn(new je("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new sf(new _a(t.getProvider("auth-internal")),new Ia(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new va(ya.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(t.options.projectId,e)}(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),Cn(ia,"4.3.0",t),Cn(ia,"4.3.0","esm2017")}();const Sf=function(t,e){const n="object"==typeof t?t:function(t=bn){const e=kn.get(t);if(!e&&t===bn&&Le())return An();if(!e)throw Sn.create("no-app",{appName:t});return e}(),s="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=Oe("firestore");t&&Ju(r,...t)}return r}(An({apiKey:"AIzaSyB7oEQf-NoeZqsAdTLQAgWo84m3I1KnAZI",authDomain:"esplanade-46a07.firebaseapp.com",projectId:"esplanade-46a07",storageBucket:"esplanade-46a07.appspot.com",messagingSenderId:"803109975262",appId:"1:803109975262:web:f39f8e10520a6b6eb23e4f",measurementId:"1:803109975262:web:f39f8e10520a6b6eb23e4f"})),If=[];function Af(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Cf={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function Df(t){Cf=t}const Nf=/[&<>"']/,Rf=new RegExp(Nf.source,"g"),Of=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Lf=new RegExp(Of.source,"g"),Mf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pf=t=>Mf[t];function $f(t,e){if(e){if(Nf.test(t))return t.replace(Rf,Pf)}else if(Of.test(t))return t.replace(Lf,Pf);return t}const Ff=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;const Vf=/(^|[^\[])\^/g;function Uf(t,e){t="string"==typeof t?t:t.source,e=e||"";const n={replace:(e,s)=>(s=(s="object"==typeof s&&"source"in s?s.source:s).replace(Vf,"$1"),t=t.replace(e,s),n),getRegex:()=>new RegExp(t,e)};return n}function Bf(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch(t){return null}return t}const jf={exec:()=>null};function zf(t,e){const n=t.replace(/\|/g,((t,e,n)=>{let s=!1,r=e;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function qf(t,e,n){const s=t.length;if(0===s)return"";let r=0;for(;r<s;){const i=t.charAt(s-r-1);if(i!==e||n){if(i===e||!n)break;r++}else r++}return t.slice(0,s-r)}function Hf(t,e,n,s){const r=e.href,i=e.title?$f(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if("!"!==t[0].charAt(0)){s.state.inLink=!0;const t={type:"link",raw:n,href:r,title:i,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,t}return{type:"image",raw:n,href:r,title:i,text:$f(o)}}class Gf{options;rules;lexer;constructor(t){this.options=t||Cf}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:qf(t,"\n")}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const t=e[0],n=function(t,e){const n=t.match(/^(\s+)(?:```)/);if(null===n)return e;const s=n[1];return e.split("\n").map((t=>{const e=t.match(/^\s+/);if(null===e)return t;const[n]=e;return n.length>=s.length?t.slice(s.length):t})).join("\n")}(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:n}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let t=e[2].trim();if(/#$/.test(t)){const e=qf(t,"#");this.options.pedantic?t=e.trim():e&&!/ $/.test(e)||(t=e.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const t=qf(e[0].replace(/^ *>[ \t]?/gm,""),"\n"),n=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(t);return this.lexer.state.top=n,{type:"blockquote",raw:e[0],tokens:s,text:t}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=new RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`);let o="",a="",l=!1;for(;t;){let n=!1;if(!(e=i.exec(t)))break;if(this.rules.block.hr.test(t))break;o=e[0],t=t.substring(o.length);let s=e[2].split("\n",1)[0].replace(/^\t+/,(t=>" ".repeat(3*t.length))),c=t.split("\n",1)[0],h=0;this.options.pedantic?(h=2,a=s.trimStart()):(h=e[2].search(/[^ ]/),h=h>4?1:h,a=s.slice(h),h+=e[1].length);let u=!1;if(!s&&/^ *$/.test(c)&&(o+=c+"\n",t=t.substring(c.length+1),n=!0),!n){const e=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,h-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),r=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:\`\`\`|~~~)`),i=new RegExp(`^ {0,${Math.min(3,h-1)}}#`);for(;t;){const l=t.split("\n",1)[0];if(c=l,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),r.test(c))break;if(i.test(c))break;if(e.test(c))break;if(n.test(t))break;if(c.search(/[^ ]/)>=h||!c.trim())a+="\n"+c.slice(h);else{if(u)break;if(s.search(/[^ ]/)>=4)break;if(r.test(s))break;if(i.test(s))break;if(n.test(s))break;a+="\n"+c}u||c.trim()||(u=!0),o+=l+"\n",t=t.substring(l.length+1),s=c.slice(h)}}r.loose||(l?r.loose=!0:/\n *\n *$/.test(o)&&(l=!0));let f,d=null;this.options.gfm&&(d=/^\[[ xX]\] /.exec(a),d&&(f="[ ] "!==d[0],a=a.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:o,task:!!d,checked:f,loose:!1,text:a,tokens:[]}),r.raw+=o}r.items[r.items.length-1].raw=o.trimEnd(),r.items[r.items.length-1].text=a.trimEnd(),r.raw=r.raw.trimEnd();for(let t=0;t<r.items.length;t++)if(this.lexer.state.top=!1,r.items[t].tokens=this.lexer.blockTokens(r.items[t].text,[]),!r.loose){const e=r.items[t].tokens.filter((t=>"space"===t.type)),n=e.length>0&&e.some((t=>/\n.*\n/.test(t.raw)));r.loose=n}if(r.loose)for(let t=0;t<r.items.length;t++)r.items[t].loose=!0;return r}}html(t){const e=this.rules.block.html.exec(t);if(e){return{type:"html",block:!0,raw:e[0],pre:"pre"===e[1]||"script"===e[1]||"style"===e[1],text:e[0]}}}def(t){const e=this.rules.block.def.exec(t);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),n=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:s}}}table(t){const e=this.rules.block.table.exec(t);if(e){if(!/[:|]/.test(e[2]))return;const t={type:"table",raw:e[0],header:zf(e[1]).map((t=>({text:t,tokens:[]}))),align:e[2].replace(/^\||\| *$/g,"").split("|"),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(t.header.length===t.align.length){let e,n,s,r,i=t.align.length;for(e=0;e<i;e++){const n=t.align[e];n&&(/^ *-+: *$/.test(n)?t.align[e]="right":/^ *:-+: *$/.test(n)?t.align[e]="center":/^ *:-+ *$/.test(n)?t.align[e]="left":t.align[e]=null)}for(i=t.rows.length,e=0;e<i;e++)t.rows[e]=zf(t.rows[e],t.header.length).map((t=>({text:t,tokens:[]})));for(i=t.header.length,n=0;n<i;n++)t.header[n].tokens=this.lexer.inline(t.header[n].text);for(i=t.rows.length,n=0;n<i;n++)for(r=t.rows[n],s=0;s<r.length;s++)r[s].tokens=this.lexer.inline(r[s].text);return t}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const t="\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:$f(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const e=qf(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{const t=function(t,e){if(-1===t.indexOf(e[1]))return-1;let n=0;for(let s=0;s<t.length;s++)if("\\"===t[s])s++;else if(t[s]===e[0])n++;else if(t[s]===e[1]&&(n--,n<0))return s;return-1}(e[2],"()");if(t>-1){const n=(0===e[0].indexOf("!")?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,n).trim(),e[3]=""}}let n=e[2],s="";if(this.options.pedantic){const t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);t&&(n=t[1],s=t[3])}else s=e[3]?e[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(t)?n.slice(1):n.slice(1,-1)),Hf(e,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:s?s.replace(this.rules.inline._escapes,"$1"):s},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let t=(n[2]||n[1]).replace(/\s+/g," ");if(t=e[t.toLowerCase()],!t){const t=n[0].charAt(0);return{type:"text",raw:t,text:t}}return Hf(n,t,n[0],this.lexer)}}emStrong(t,e,n=""){let s=this.rules.inline.emStrong.lDelim.exec(t);if(!s)return;if(s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...s[0]].length-1;let r,i,o=n,a=0;const l="*"===s[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,e=e.slice(-1*t.length+n);null!=(s=l.exec(e));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=[...r].length,s[3]||s[4]){o+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){a+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+a);const e=[...s[0]][0].length,l=t.slice(0,n+s.index+e+i);if(Math.min(n,i)%2){const t=l.slice(1,-1);return{type:"em",raw:l,text:t,tokens:this.lexer.inlineTokens(t)}}const c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let t=e[2].replace(/\n/g," ");const n=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return n&&s&&(t=t.substring(1,t.length-1)),t=$f(t,!0),{type:"codespan",raw:e[0],text:t}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let t,n;return"@"===e[2]?(t=$f(e[1]),n="mailto:"+t):(t=$f(e[1]),n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let t,n;if("@"===e[2])t=$f(e[0]),n="mailto:"+t;else{let s;do{s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0]}while(s!==e[0]);t=$f(e[0]),n="www."===e[1]?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let t;return t=this.lexer.state.inRawBlock?e[0]:$f(e[0]),{type:"text",raw:e[0],text:t}}}}const Kf={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:jf,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Kf.def=Uf(Kf.def).replace("label",Kf._label).replace("title",Kf._title).getRegex(),Kf.bullet=/(?:[*+-]|\d{1,9}[.)])/,Kf.listItemStart=Uf(/^( *)(bull) */).replace("bull",Kf.bullet).getRegex(),Kf.list=Uf(Kf.list).replace(/bull/g,Kf.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Kf.def.source+")").getRegex(),Kf._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Kf._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Kf.html=Uf(Kf.html,"i").replace("comment",Kf._comment).replace("tag",Kf._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Kf.lheading=Uf(Kf.lheading).replace(/bull/g,Kf.bullet).getRegex(),Kf.paragraph=Uf(Kf._paragraph).replace("hr",Kf.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kf._tag).getRegex(),Kf.blockquote=Uf(Kf.blockquote).replace("paragraph",Kf.paragraph).getRegex(),Kf.normal={...Kf},Kf.gfm={...Kf.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},Kf.gfm.table=Uf(Kf.gfm.table).replace("hr",Kf.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kf._tag).getRegex(),Kf.gfm.paragraph=Uf(Kf._paragraph).replace("hr",Kf.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Kf.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kf._tag).getRegex(),Kf.pedantic={...Kf.normal,html:Uf("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Kf._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jf,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Uf(Kf.normal._paragraph).replace("hr",Kf.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Kf.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const Qf={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:jf,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:jf,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/,_punctuation:"\\p{P}$+<=>`^|~"};Qf.punctuation=Uf(Qf.punctuation,"u").replace(/punctuation/g,Qf._punctuation).getRegex(),Qf.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Qf.anyPunctuation=/\\[punct]/g,Qf._escapes=/\\([punct])/g,Qf._comment=Uf(Kf._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Qf.emStrong.lDelim=Uf(Qf.emStrong.lDelim,"u").replace(/punct/g,Qf._punctuation).getRegex(),Qf.emStrong.rDelimAst=Uf(Qf.emStrong.rDelimAst,"gu").replace(/punct/g,Qf._punctuation).getRegex(),Qf.emStrong.rDelimUnd=Uf(Qf.emStrong.rDelimUnd,"gu").replace(/punct/g,Qf._punctuation).getRegex(),Qf.anyPunctuation=Uf(Qf.anyPunctuation,"gu").replace(/punct/g,Qf._punctuation).getRegex(),Qf._escapes=Uf(Qf._escapes,"gu").replace(/punct/g,Qf._punctuation).getRegex(),Qf._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Qf._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Qf.autolink=Uf(Qf.autolink).replace("scheme",Qf._scheme).replace("email",Qf._email).getRegex(),Qf._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Qf.tag=Uf(Qf.tag).replace("comment",Qf._comment).replace("attribute",Qf._attribute).getRegex(),Qf._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Qf._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Qf._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Qf.link=Uf(Qf.link).replace("label",Qf._label).replace("href",Qf._href).replace("title",Qf._title).getRegex(),Qf.reflink=Uf(Qf.reflink).replace("label",Qf._label).replace("ref",Kf._label).getRegex(),Qf.nolink=Uf(Qf.nolink).replace("ref",Kf._label).getRegex(),Qf.reflinkSearch=Uf(Qf.reflinkSearch,"g").replace("reflink",Qf.reflink).replace("nolink",Qf.nolink).getRegex(),Qf.normal={...Qf},Qf.pedantic={...Qf.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Uf(/^!?\[(label)\]\((.*?)\)/).replace("label",Qf._label).getRegex(),reflink:Uf(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qf._label).getRegex()},Qf.gfm={...Qf.normal,escape:Uf(Qf.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Qf.gfm.url=Uf(Qf.gfm.url,"i").replace("email",Qf.gfm._extended_email).getRegex(),Qf.breaks={...Qf.gfm,br:Uf(Qf.br).replace("{2,}","*").getRegex(),text:Uf(Qf.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Wf{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Cf,this.options.tokenizer=this.options.tokenizer||new Gf,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:Kf.normal,inline:Qf.normal};this.options.pedantic?(e.block=Kf.pedantic,e.inline=Qf.pedantic):this.options.gfm&&(e.block=Kf.gfm,this.options.breaks?e.inline=Qf.breaks:e.inline=Qf.gfm),this.tokenizer.rules=e}static get rules(){return{block:Kf,inline:Qf}}static lex(t,e){return new Wf(e).lex(t)}static lexInline(t,e){return new Wf(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,"\n"),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,s,r,i;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,((t,e,n)=>e+"    ".repeat(n.length)));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s=>!!(n=s.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),1===n.raw.length&&e.length>0?e[e.length-1].raw+="\n":e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),s=e[e.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?e.push(n):(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),s=e[e.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(s.raw+="\n"+n.raw,s.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(r=t,this.options.extensions&&this.options.extensions.startBlock){let e=1/0;const n=t.slice(1);let s;this.options.extensions.startBlock.forEach((t=>{s=t.call({lexer:this},n),"number"==typeof s&&s>=0&&(e=Math.min(e,s))})),e<1/0&&e>=0&&(r=t.substring(0,e+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r)))s=e[e.length-1],i&&"paragraph"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(n),i=r.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),s=e[e.length-1],s&&"text"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(n);else if(t){const e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,s,r,i,o,a,l=t;if(this.tokens.links){const t=Object.keys(this.tokens.links);if(t.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)t.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.anyPunctuation.exec(l));)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((s=>!!(n=s.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),s=e[e.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),s=e[e.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,l,a))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t))){if(r=t,this.options.extensions&&this.options.extensions.startInline){let e=1/0;const n=t.slice(1);let s;this.options.extensions.startInline.forEach((t=>{s=t.call({lexer:this},n),"number"==typeof s&&s>=0&&(e=Math.min(e,s))})),e<1/0&&e>=0&&(r=t.substring(0,e+1))}if(n=this.tokenizer.inlineText(r))t=t.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,s=e[e.length-1],s&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):e.push(n);else if(t){const e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}else t=t.substring(n.raw.length),e.push(n);return e}}class Xf{options;constructor(t){this.options=t||Cf}code(t,e,n){const s=(e||"").match(/^\S*/)?.[0];return t=t.replace(/\n$/,"")+"\n",s?'<pre><code class="language-'+$f(s)+'">'+(n?t:$f(t,!0))+"</code></pre>\n":"<pre><code>"+(n?t:$f(t,!0))+"</code></pre>\n"}blockquote(t){return`<blockquote>\n${t}</blockquote>\n`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>\n`}hr(){return"<hr>\n"}list(t,e,n){const s=e?"ol":"ul";return"<"+s+(e&&1!==n?' start="'+n+'"':"")+">\n"+t+"</"+s+">\n"}listitem(t,e,n){return`<li>${t}</li>\n`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>\n`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"}tablerow(t){return`<tr>\n${t}</tr>\n`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const s=Bf(t);if(null===s)return n;let r='<a href="'+(t=s)+'"';return e&&(r+=' title="'+e+'"'),r+=">"+n+"</a>",r}image(t,e,n){const s=Bf(t);if(null===s)return n;let r=`<img src="${t=s}" alt="${n}"`;return e&&(r+=` title="${e}"`),r+=">",r}text(t){return t}}class Yf{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class Jf{options;renderer;textRenderer;constructor(t){this.options=t||Cf,this.options.renderer=this.options.renderer||new Xf,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Yf}static parse(t,e){return new Jf(e).parse(t)}static parseInline(t,e){return new Jf(e).parseInline(t)}parse(t,e=!0){let n="";for(let s=0;s<t.length;s++){const r=t[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const t=r,e=this.options.extensions.renderers[t.type].call({parser:this},t);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(t.type)){n+=e||"";continue}}switch(r.type){case"space":continue;case"hr":n+=this.renderer.hr();continue;case"heading":{const t=r;n+=this.renderer.heading(this.parseInline(t.tokens),t.depth,this.parseInline(t.tokens,this.textRenderer).replace(Ff,((t,e)=>"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")));continue}case"code":{const t=r;n+=this.renderer.code(t.text,t.lang,!!t.escaped);continue}case"table":{const t=r;let e="",s="";for(let e=0;e<t.header.length;e++)s+=this.renderer.tablecell(this.parseInline(t.header[e].tokens),{header:!0,align:t.align[e]});e+=this.renderer.tablerow(s);let i="";for(let e=0;e<t.rows.length;e++){const n=t.rows[e];s="";for(let e=0;e<n.length;e++)s+=this.renderer.tablecell(this.parseInline(n[e].tokens),{header:!1,align:t.align[e]});i+=this.renderer.tablerow(s)}n+=this.renderer.table(e,i);continue}case"blockquote":{const t=r,e=this.parse(t.tokens);n+=this.renderer.blockquote(e);continue}case"list":{const t=r,e=t.ordered,s=t.start,i=t.loose;let o="";for(let e=0;e<t.items.length;e++){const n=t.items[e],s=n.checked,r=n.task;let a="";if(n.task){const t=this.renderer.checkbox(!!s);i?n.tokens.length>0&&"paragraph"===n.tokens[0].type?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&"text"===n.tokens[0].tokens[0].type&&(n.tokens[0].tokens[0].text=t+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",text:t+" "}):a+=t+" "}a+=this.parse(n.tokens,i),o+=this.renderer.listitem(a,r,!!s)}n+=this.renderer.list(o,e,s);continue}case"html":{const t=r;n+=this.renderer.html(t.text,t.block);continue}case"paragraph":{const t=r;n+=this.renderer.paragraph(this.parseInline(t.tokens));continue}case"text":{let i=r,o=i.tokens?this.parseInline(i.tokens):i.text;for(;s+1<t.length&&"text"===t[s+1].type;)i=t[++s],o+="\n"+(i.tokens?this.parseInline(i.tokens):i.text);n+=e?this.renderer.paragraph(o):o;continue}default:{const t='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let s=0;s<t.length;s++){const r=t[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const t=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==t||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=t||"";continue}}switch(r.type){case"escape":{const t=r;n+=e.text(t.text);break}case"html":{const t=r;n+=e.html(t.text);break}case"link":{const t=r;n+=e.link(t.href,t.title,this.parseInline(t.tokens,e));break}case"image":{const t=r;n+=e.image(t.href,t.title,t.text);break}case"strong":{const t=r;n+=e.strong(this.parseInline(t.tokens,e));break}case"em":{const t=r;n+=e.em(this.parseInline(t.tokens,e));break}case"codespan":{const t=r;n+=e.codespan(t.text);break}case"br":n+=e.br();break;case"del":{const t=r;n+=e.del(this.parseInline(t.tokens,e));break}case"text":{const t=r;n+=e.text(t.text);break}default:{const t='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return n}}class Zf{options;constructor(t){this.options=t||Cf}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}const td=new class{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.#t(Wf.lex,Jf.parse);parseInline=this.#t(Wf.lexInline,Jf.parseInline);Parser=Jf;Renderer=Xf;TextRenderer=Yf;Lexer=Wf;Tokenizer=Gf;Hooks=Zf;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const t=s;for(const s of t.header)n=n.concat(this.walkTokens(s.tokens,e));for(const s of t.rows)for(const t of s)n=n.concat(this.walkTokens(t.tokens,e));break}case"list":{const t=s;n=n.concat(this.walkTokens(t.items,e));break}default:{const t=s;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach((s=>{n=n.concat(this.walkTokens(t[s],e))})):t.tokens&&(n=n.concat(this.walkTokens(t.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach((t=>{const n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach((t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){const n=e.renderers[t.name];e.renderers[t.name]=n?function(...e){let s=t.renderer.apply(this,e);return!1===s&&(s=n.apply(this,e)),s}:t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");const n=e[t.level];n?n.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)})),n.extensions=e),t.renderer){const e=this.defaults.renderer||new Xf(this.defaults);for(const n in t.renderer){const s=t.renderer[n],r=n,i=e[r];e[r]=(...t)=>{let n=s.apply(e,t);return!1===n&&(n=i.apply(e,t)),n||""}}n.renderer=e}if(t.tokenizer){const e=this.defaults.tokenizer||new Gf(this.defaults);for(const n in t.tokenizer){const s=t.tokenizer[n],r=n,i=e[r];e[r]=(...t)=>{let n=s.apply(e,t);return!1===n&&(n=i.apply(e,t)),n}}n.tokenizer=e}if(t.hooks){const e=this.defaults.hooks||new Zf;for(const n in t.hooks){const s=t.hooks[n],r=n,i=e[r];Zf.passThroughHooks.has(n)?e[r]=t=>{if(this.defaults.async)return Promise.resolve(s.call(e,t)).then((t=>i.call(e,t)));const n=s.call(e,t);return i.call(e,n)}:e[r]=(...t)=>{let n=s.apply(e,t);return!1===n&&(n=i.apply(e,t)),n}}n.hooks=e}if(t.walkTokens){const e=this.defaults.walkTokens,s=t.walkTokens;n.walkTokens=function(t){let n=[];return n.push(s.call(this,t)),e&&(n=n.concat(e.call(this,t))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Wf.lex(t,e??this.defaults)}parser(t,e){return Jf.parse(t,e??this.defaults)}#t(t,e){return(n,s)=>{const r={...s},i={...this.defaults,...r};!0===this.defaults.async&&!1===r.async&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);const o=this.#e(!!i.silent,!!i.async);if(null==n)return o(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then((e=>t(e,i))).then((t=>i.walkTokens?Promise.all(this.walkTokens(t,i.walkTokens)).then((()=>t)):t)).then((t=>e(t,i))).then((t=>i.hooks?i.hooks.postprocess(t):t)).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));const s=t(n,i);i.walkTokens&&this.walkTokens(s,i.walkTokens);let r=e(s,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(t){return o(t)}}}#e(t,e){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",t){const t="<p>An error occurred:</p><pre>"+$f(n.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(n);throw n}}};function ed(t,e){return td.parse(t,e)}function nd(t,e,n){const s=t.slice();return s[18]=e[n],s}function sd(t){let e,n=t[18].content+"";return{c(){e=f(n)},m(t,n){c(t,e,n)},p(t,s){2&s&&n!==(n=t[18].content+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(e,n)},d(t){t&&h(e)}}}function rd(t){let e,n,s=t[18].content+"";return{c(){e=new w(!1),n=f(""),e.a=n},m(t,r){e.m(s,t,r),c(t,n,r)},p(t,n){2&n&&s!==(s=t[18].content+"")&&e.p(s)},d(t){t&&h(n),t&&e.d()}}}function id(t){let e,n;function s(t,e){return t[18].isHtml?rd:sd}let r=s(t),i=r(t);return{c(){e=u("div"),i.c(),g(e,"class",n="message "+("Assistant"===t[18].sender?"assistant":"user")+" svelte-muqz1n"),y(e,"opacity",t[18].opacity)},m(t,n){c(t,e,n),i.m(e,null)},p(t,o){r===(r=s(t))&&i?i.p(t,o):(i.d(1),i=r(t),i&&(i.c(),i.m(e,null))),2&o&&n!==(n="message "+("Assistant"===t[18].sender?"assistant":"user")+" svelte-muqz1n")&&g(e,"class",n),2&o&&y(e,"opacity",t[18].opacity)},d(t){t&&h(e),i.d()}}}function od(t){let e;return{c(){e=u("div"),e.textContent="Typing...",g(e,"class","message-placeholder svelte-muqz1n")},m(t,n){c(t,e,n)},d(t){t&&h(e)}}}function ad(e){let n,r,i,o,f,y,w,b,E,k,_,T=e[1],x=[];for(let t=0;t<T.length;t+=1)x[t]=id(nd(e,T,t));let S=e[0]&&od();return{c(){n=u("div"),r=u("div");for(let t=0;t<x.length;t+=1)x[t].c();i=d(),S&&S.c(),f=d(),y=u("div"),w=u("input"),b=d(),E=u("input"),g(r,"class",o=a("messages "+(e[4]?"expanded":""))+" svelte-muqz1n"),g(w,"class","chat-input svelte-muqz1n"),g(w,"placeholder","Start typing or upload a file..."),g(E,"id","file-upload"),g(E,"type","file"),g(E,"class","file-upload svelte-muqz1n"),E.multiple=!0,g(y,"class","chat-input-container svelte-muqz1n"),g(n,"class","chat-container svelte-muqz1n"),v(n,"drag-over",e[3])},m(t,s){c(t,n,s),l(n,r);for(let t=0;t<x.length;t+=1)x[t]&&x[t].m(r,null);l(r,i),S&&S.m(r,null),l(n,f),l(n,y),l(y,w),m(w,e[2]),l(y,b),l(y,E),k||(_=[p(w,"input",e[12]),p(w,"keydown",e[13]),p(E,"change",e[10]),p(n,"dragover",e[7]),p(n,"dragleave",e[8]),p(n,"drop",e[9])],k=!0)},p(t,[e]){if(2&e){let n;for(T=t[1],n=0;n<T.length;n+=1){const s=nd(t,T,n);x[n]?x[n].p(s,e):(x[n]=id(s),x[n].c(),x[n].m(r,i))}for(;n<x.length;n+=1)x[n].d(1);x.length=T.length}t[0]?S||(S=od(),S.c(),S.m(r,null)):S&&(S.d(1),S=null),16&e&&o!==(o=a("messages "+(t[4]?"expanded":""))+" svelte-muqz1n")&&g(r,"class",o),4&e&&w.value!==t[2]&&m(w,t[2]),8&e&&v(n,"drag-over",t[3])},i:t,o:t,d(t){t&&h(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(x,t),S&&S.d(),k=!1,s(_)}}}function ld(){console.log("centerChatContainer");const t=document.getElementsByClassName("chat-container");if(t.length>0){const e=-100,n=t[0].getBoundingClientRect().top+window.scrollY+e;window.scrollTo({top:n,behavior:"smooth"})}else console.log("Chat container not found")}function cd(t){return/<[^>]+>/.test(t)}function hd(e,n,s){let r;var a=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(r,i){function o(t){try{l(s.next(t))}catch(t){i(t)}}function a(t){try{l(s.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((s=s.apply(t,e||[])).next())}))};let{firstname:l}=n;const c=function(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!If.length;for(const t of r)t[1](),If.push(t,e);if(t){for(let t=0;t<If.length;t+=2)If[t][0](If[t+1]);If.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const l=[i,a];return r.add(l),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(l),0===r.size&&s&&(s(),s=null)}}}}([]);o(e,c,(t=>s(1,r=t)));let h=!0,u="",f=!1,d="",p=!1,g=!1;var m;function y(){return a(this,void 0,void 0,(function*(){if(console.log("attempting to send message"),""!==u.trim()&&d){c.update((t=>{const e=t.map((t=>Object.assign(Object.assign({},t),{opacity:.7})));return e.push({sender:"User",content:u.trim(),opacity:1,isHtml:cd(u)}),e})),s(2,u="");try{const t=yield fetch("https://us-central1-esplanade-46a07.cloudfunctions.net/sendMessageToThread",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({threadId:d,message:r[r.length-1].content})});if(t.ok){const{runId:e}=yield t.json();!function(t){a(this,void 0,void 0,(function*(){console.log("Requesting response from OpenAI...");try{const e=yield fetch(`https://us-central1-esplanade-46a07.cloudfunctions.net/getAssistantResponse?threadId=${d}&runId=${t}`);if(e.ok){s(0,p=!1);const t=yield e.json();if(t.reply&&t.reply.length>0){let e=t.reply[0].text.value;e=ed.parse(e),console.log("Received response from OpenAI:",e),c.update((t=>{const n=t.map((t=>Object.assign(Object.assign({},t),{opacity:.8})));return n.push({sender:"Assistant",content:e,opacity:1,isHtml:cd(e)}),n}))}else console.log("No reply in response.")}else console.error("Error fetching response:",e.status,e.statusText)}catch(t){console.error("Error requesting response:",t)}console.log("Finished requesting response.")}))}(e),console.log("Message sent, runId:",e)}else{console.error("Failed to send message, status:",t.status);const e=yield t.text();console.error("Response body:",e)}}catch(t){console.error("Error sending message:",t)}s(0,p=!0)}else console.log("No input or threadId is missing")}))}m=()=>a(void 0,void 0,void 0,(function*(){if(console.log("onMount"),h){ld(),c.set([{sender:"Assistant",content:`Hi ${l}, how are you today?`,opacity:1,isHtml:!1}]);const t=yield fetch("https://us-central1-esplanade-46a07.cloudfunctions.net/startNewThread");if(t.ok){const e=yield t.json();d=e.threadId,console.log("Thread ID set:",d)}else console.error("Failed to start a new thread")}})),k().$$.on_mount.push(m);return e.$$set=t=>{"firstname"in t&&s(11,l=t.firstname)},e.$$.update=()=>{3&e.$$.dirty&&(r.length||p)&&ld(),2&e.$$.dirty&&s(4,g=r.some((t=>"User"===t.sender)))},[p,r,u,f,g,c,y,function(t){t.preventDefault(),s(3,f=!0)},function(t){t.preventDefault(),s(3,f=!1)},function(t){t.preventDefault(),s(3,f=!1);const e=t.dataTransfer.files;if(e.length>0){h=!0;for(const t of e)c.update((e=>[...e,{sender:"User",content:`Dropped file: ${t.name}`,opacity:1,isHtml:!1}]))}},function(t){const e=t.target.files;if(e.length>0){h=!0;for(const t of e)c.update((e=>[...e,{sender:"User",content:`Selected file: ${t.name}`,opacity:1,isHtml:!1}]))}},l,function(){u=this.value,s(2,u)},t=>"Enter"===t.key&&y()]}ed.options=ed.setOptions=function(t){return td.setOptions(t),ed.defaults=td.defaults,Df(ed.defaults),ed},ed.getDefaults=Af,ed.defaults=Cf,ed.use=function(...t){return td.use(...t),ed.defaults=td.defaults,Df(ed.defaults),ed},ed.walkTokens=function(t,e){return td.walkTokens(t,e)},ed.parseInline=td.parseInline,ed.Parser=Jf,ed.parser=Jf.parse,ed.Renderer=Xf,ed.TextRenderer=Yf,ed.Lexer=Wf,ed.lexer=Wf.lex,ed.Tokenizer=Gf,ed.Hooks=Zf,ed.parse=ed,ed.options,ed.setOptions,ed.use,ed.walkTokens,ed.parseInline,Jf.parse,Wf.lex;class ud extends z{constructor(t){super(),j(this,t,hd,ad,i,{firstname:11})}}function fd(t){let e,n;return e=new ud({props:{firstname:t[1]}}),{c(){!function(t){t&&t.c()}(e.$$.fragment)},m(t,s){V(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.firstname=t[1]),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function dd(e){let n,r,i,o,a,f;return{c(){n=u("div"),r=u("form"),i=u("div"),o=u("form"),o.innerHTML='<input type="text" name="fullname" placeholder="Full Name" required="" class="svelte-nx1oav"/> \n          <input type="tel" name="number" placeholder="Phone Number" required="" class="svelte-nx1oav"/> \n          <input type="email" name="email" placeholder="Email Address" required="" class="svelte-nx1oav"/> \n          <button type="submit" class="svelte-nx1oav">Submit</button>',g(o,"class","svelte-nx1oav"),g(i,"class","contact-form svelte-nx1oav"),g(r,"class","svelte-nx1oav"),g(n,"class","contact-form svelte-nx1oav")},m(t,s){c(t,n,s),l(n,r),l(r,i),l(i,o),a||(f=[p(o,"submit",e[2]),p(r,"submit",e[2])],a=!0)},p:t,i:t,o:t,d(t){t&&h(n),a=!1,s(f)}}}function pd(e){let n,i,o,a,l,f,p,m,y,v,w,b,E,k,_,T,x;const S=[dd,fd],I=[];function A(t,e){return t[0]?t[0]?1:-1:0}return~(y=A(e))&&(v=I[y]=S[y](e)),{c(){n=u("header"),n.innerHTML='<a href="index" class="svelte-nx1oav"><img src="/espWhite.png" alt="Your Logo" class="logo svelte-nx1oav"/></a>',i=d(),o=u("div"),o.textContent="Step into the future\n  with Esplanade AI. Revolutionise\n  your business operations and\n  experience unparalleled efficiency.",a=d(),l=u("div"),l.innerHTML='<video id="bgVideo" autoplay="" muted="" loop="" playsinline="" poster="tealPurple169-2.png" class="svelte-nx1oav"><source src="/siteBGcont2.mp4" type="video/mp4" class="svelte-nx1oav"/>\n    Your browser does not support the video tag.</video>',f=d(),p=u("div"),p.innerHTML='<a href="https://www.instagram.com/esplanade.ai/" class="svelte-nx1oav"><img src="/Instagram.png" alt="Instagram" class="svelte-nx1oav"/></a> \n  <a href="https://www.linkedin.com/company/esplanade-ai" class="svelte-nx1oav"><img src="/linkedin.png" alt="Linkedin" class="svelte-nx1oav"/></a>',m=d(),v&&v.c(),w=d(),b=u("div"),E=d(),k=u("footer"),k.innerHTML='<div class="footer-row svelte-nx1oav"><div class="footer-logo svelte-nx1oav"><img src="justLogoWhite.png" alt="Esplanade Logo" class="svelte-nx1oav"/></div> \n    <div class="address-contact svelte-nx1oav"><div class="svelte-nx1oav"><strong class="svelte-nx1oav">Address</strong> \n        <p class="svelte-nx1oav">Sydney, AUS</p></div> \n      <div class="svelte-nx1oav"><strong class="svelte-nx1oav">Contact</strong> \n        <p class="svelte-nx1oav">digital@esplanade.ai</p></div></div></div> \n\n  <div class="footer-divider svelte-nx1oav"></div> \n\n  <div class="footer-row svelte-nx1oav"><div class="svelte-nx1oav">© 2023 Esplanade.ai. All rights reserved.</div> \n    <div class="svelte-nx1oav"><a href="/terms-and-conditions" class="svelte-nx1oav">T&amp;Cs</a> \n      <a href="/privacy-policy" class="svelte-nx1oav">Privacy Policy</a></div></div>',g(n,"class","svelte-nx1oav"),g(o,"class","translucent-section centered-content large-text svelte-nx1oav"),g(l,"class","svelte-nx1oav"),g(p,"class","social-icons svelte-nx1oav"),g(b,"id","bpw-layout"),g(b,"class","svelte-nx1oav"),g(k,"class","svelte-nx1oav")},m(s,h){var u;c(s,n,h),c(s,i,h),c(s,o,h),c(s,a,h),c(s,l,h),c(s,f,h),c(s,p,h),c(s,m,h),~y&&I[y].m(s,h),c(s,w,h),c(s,b,h),c(s,E,h),c(s,k,h),_=!0,T||(u=e[3].call(null,o),x=u&&r(u.destroy)?u.destroy:t,T=!0)},p(t,[e]){let n=y;y=A(t),y===n?~y&&I[y].p(t,e):(v&&(P={r:0,c:[],p:P},F(I[n],1,1,(()=>{I[n]=null})),P.r||s(P.c),P=P.p),~y?(v=I[y],v?v.p(t,e):(v=I[y]=S[y](t),v.c()),$(v,1),v.m(w.parentNode,w)):v=null)},i(t){_||($(v),_=!0)},o(t){F(v),_=!1},d(t){t&&h(n),t&&h(i),t&&h(o),t&&h(a),t&&h(l),t&&h(f),t&&h(p),t&&h(m),~y&&I[y].d(t),t&&h(w),t&&h(b),t&&h(E),t&&h(k),T=!1,x()}}}function gd(t,e,n){var s=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(r,i){function o(t){try{l(s.next(t))}catch(t){i(t)}}function a(t){try{l(s.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((s=s.apply(t,e||[])).next())}))};let r="",i=!1,o="";const a=_();return[i,o,function(t){return s(this,void 0,void 0,(function*(){var e;console.log("submit"),t.preventDefault(),r=t.target.fullname.value,n(1,(e=r.split(" ")[0],o=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()));const s={fullname:t.target.fullname.value,number:t.target.number.value,email:t.target.email.value};console.log("data",s);try{console.log("try");const t=yield xf(function(t,e,...n){if(t=Be(t),Hu("collection","path",e),t instanceof Yu){const s=Ma.fromString(e,...n);return Ku(s),new ef(t,null,s)}{if(!(t instanceof tf||t instanceof ef))throw new va(ya.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ma.fromString(e,...n));return Ku(s),new ef(t.firestore,null,s)}}(Sf,"contacts"),s);console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}n(0,i=!0),a("formSubmitted")}))},function(t){const e=t.innerText.trim().split(" "),n=Math.ceil(e.length/4),s=[];e.forEach(((t,r)=>{s.push(`<span style="opacity: 0">${t}</span>`),(r+1)%n==0&&r!==e.length-1&&s.push("<br>")})),t.innerHTML=s.join(" ");const r=[...t.children];te(r,{opacity:[0,1]},{duration:3,delay:Wt(.3)}),setTimeout((()=>{r.forEach((t=>{const e=t.textContent.trim();("unparalleled"===e||e.includes("efficiency"))&&te(t,{color:"#d28cd1"},{duration:1})}))}),650*(.3*e.length+3))}]}return new class extends z{constructor(t){super(),j(this,t,gd,pd,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
