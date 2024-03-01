var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t){return null==t?"":t}const c="undefined"!=typeof window;let h=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&u(d)}function p(t){let e;return 0===f.size&&u(d),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function g(t,e){t.appendChild(e)}function m(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=b("style");return function(t,e){g(t.head||t,e),e.sheet}(m(t),e),e.sheet}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function k(){return E(" ")}function _(){return E("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e){t.value=null==e?"":e}function I(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function A(t,e,n){t.classList[n?"add":"remove"](e)}function C(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}class D{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e.nodeName):this.e=b(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(w)}}const N=new Map;let R,O=0;function L(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*r(t);c+=100*t+`%{${o(s,1-s)}}\n`}const h=c+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(h)}_${a}`,f=m(t),{stylesheet:d,rules:p}=N.get(f)||function(t,e){const n={stylesheet:y(e),rules:{}};return N.set(t,n),n}(f,t);p[u]||(p[u]=!0,d.insertRule(`@keyframes ${u} ${h}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,O+=1,u}function M(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-s.length;i&&(t.style.animation=s.join(", "),O-=i,O||u((()=>{O||(N.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)})),N.clear())})))}function P(t){R=t}function $(){if(!R)throw new Error("Function called outside component initialization");return R}const F=[],V=[];let U=[];const j=[],B=Promise.resolve();let z=!1;function q(){z||(z=!0,B.then(W))}function H(t){U.push(t)}const K=new Set;let G,Q=0;function W(){if(0!==Q)return;const t=R;do{try{for(;Q<F.length;){const t=F[Q];Q++,P(t),X(t.$$)}}catch(t){throw F.length=0,Q=0,t}for(P(null),F.length=0,Q=0;V.length;)V.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];K.has(e)||(K.add(e),e())}U.length=0}while(F.length);for(;j.length;)j.pop()();z=!1,K.clear(),P(t)}function X(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function Y(){return G||(G=Promise.resolve(),G.then((()=>{G=null}))),G}function J(t,e,n){t.dispatchEvent(C(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||i(tt.c),tt=tt.p}function st(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function it(t,e,n,s){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}const rt={duration:0};function ot(t,e,s,o){const{fragment:a,after_update:l}=t.$$;a&&a.m(e,s),o||H((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):i(e),t.$$.on_mount=[]})),l.forEach(H)}function at(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];U.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),U=e}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(e,n,r,o,a,l,c,h=[-1]){const u=R;P(e);const f=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:s(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};c&&c(f.root);let d=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),d&&function(t,e){-1===t.$$.dirty[0]&&(F.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),d=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&st(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),W()}P(u)}class ct{$destroy(){at(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht=(t,e,n)=>Math.min(Math.max(n,t),e),ut={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},ft=t=>"number"==typeof t,dt=t=>Array.isArray(t)&&!ft(t[0]),pt=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t};const gt=(t,e,n)=>-n*t+n*e+t,mt=()=>{},yt=t=>t,vt=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function wt(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=vt(0,e,s);t.push(gt(n,1,i))}}function bt(t,e=function(t){const e=[0];return wt(e,t-1),e}(t.length),n=yt){const s=t.length,i=s-e.length;return i>0&&wt(e,i),i=>{let r=0;for(;r<s-2&&!(i<e[r+1]);r++);let o=ht(0,1,vt(e[r],e[r+1],i));const a=function(t,e){return dt(t)?t[pt(0,t.length,e)]:t}(n,r);return o=a(o),gt(t[r],t[r+1],o)}}const Et=t=>Array.isArray(t)&&ft(t[0]),kt=t=>"object"==typeof t&&Boolean(t.createAnimation),_t=t=>"function"==typeof t,xt=t=>"string"==typeof t,Tt={ms:t=>1e3*t,s:t=>t/1e3},St=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,It=1e-7,At=12;function Ct(t,e,n,s){if(t===e&&n===s)return yt;const i=e=>function(t,e,n,s,i){let r,o,a=0;do{o=e+(n-e)/2,r=St(o,s,i)-t,r>0?n=o:e=o}while(Math.abs(r)>It&&++a<At);return o}(e,0,1,t,n);return t=>0===t||1===t?t:St(i(t),e,s)}const Dt=(t,e="end")=>n=>{const s=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,i="end"===e?Math.floor(s):Math.ceil(s);return ht(0,1,i/t)},Nt={ease:Ct(.25,.1,.25,1),"ease-in":Ct(.42,0,1,1),"ease-in-out":Ct(.42,0,.58,1),"ease-out":Ct(0,0,.58,1)},Rt=/\((.*?)\)/;function Ot(t){if(_t(t))return t;if(Et(t))return Ct(...t);if(Nt[t])return Nt[t];if(t.startsWith("steps")){const e=Rt.exec(t);if(e){const t=e[1].split(",");return Dt(parseFloat(t[0]),t[1].trim())}}return yt}class Lt{constructor(t,e=[0,1],{easing:n,duration:s=ut.duration,delay:i=ut.delay,endDelay:r=ut.endDelay,repeat:o=ut.repeat,offset:a,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=yt,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||ut.easing,kt(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,s=t.duration||s}this.repeat=o,this.easing=dt(n)?yt:Ot(n),this.updateDuration(s);const c=bt(e,a,dt(n)?n.map(Ot):yt);this.tick=e=>{var n;let s=0;s=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=s,s/=1e3,s=Math.max(s-i,0),"finished"===this.playState&&void 0===this.pauseTime&&(s=this.totalDuration);const o=s/this.duration;let a=Math.floor(o),h=o%1;!h&&o>=1&&(h=1),1===h&&a--;const u=a%2;("reverse"===l||"alternate"===l&&u||"alternate-reverse"===l&&!u)&&(h=1-h);const f=s>=this.totalDuration?1:Math.min(h,1),d=c(this.easing(f));t(d);void 0===this.pauseTime&&("finished"===this.playState||s>=this.totalDuration+r)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,d)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class Mt{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const Pt=new WeakMap;function $t(t){return Pt.has(t)||Pt.set(t,{transforms:[],values:new Map}),Pt.get(t)}const Ft=["","X","Y","Z"],Vt={x:"translateX",y:"translateY",z:"translateZ"},Ut={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},jt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:Ut,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:yt},skew:Ut},Bt=new Map,zt=t=>`--motion-${t}`,qt=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{Ft.forEach((e=>{qt.push(t+e),Bt.set(zt(t+e),jt[t])}))}));const Ht=(t,e)=>qt.indexOf(t)-qt.indexOf(e),Kt=new Set(qt),Gt=t=>Kt.has(t),Qt=(t,e)=>{Vt[e]&&(e=Vt[e]);const{transforms:n}=$t(t);var s,i;i=e,-1===(s=n).indexOf(i)&&s.push(i),t.style.transform=Wt(n)},Wt=t=>t.sort(Ht).reduce(Xt,"").trim(),Xt=(t,e)=>`${t} ${e}(var(${zt(e)}))`,Yt=t=>t.startsWith("--"),Jt=new Set;const Zt=(t,e)=>document.createElement("div").animate(t,e),te={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Zt({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(Zt({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{Zt({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},ee={},ne={};for(const t in te)ne[t]=()=>(void 0===ee[t]&&(ee[t]=te[t]()),ee[t]);const se=(t,e)=>_t(t)?ne.linearEasing()?`linear(${((t,e)=>{let n="";const s=Math.round(e/.015);for(let e=0;e<s;e++)n+=t(vt(0,s-1,e))+", ";return n.substring(0,n.length-2)})(t,e)})`:ut.easing:Et(t)?ie(t):t,ie=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`;const re=t=>Array.isArray(t)?t:[t];function oe(t){return Vt[t]&&(t=Vt[t]),Gt(t)?zt(t):t}const ae={get:(t,e)=>{e=oe(e);let n=Yt(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=Bt.get(e);t&&(n=t.initialValue)}return n},set:(t,e,n)=>{e=oe(e),Yt(e)?t.style.setProperty(e,n):t.style[e]=n}};function le(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}function ce(t,e,n,s={},i){const r=window.__MOTION_DEV_TOOLS_RECORD,o=!1!==s.record&&r;let a,{duration:l=ut.duration,delay:c=ut.delay,endDelay:h=ut.endDelay,repeat:u=ut.repeat,easing:f=ut.easing,persist:d=!1,direction:p,offset:g,allowWebkitAcceleration:m=!1}=s;const y=$t(t),v=Gt(e);let w=ne.waapi();v&&Qt(t,e);const b=oe(e),E=function(t,e){return t.has(e)||t.set(e,new Mt),t.get(e)}(y.values,b),k=Bt.get(b);return le(E.animation,!(kt(f)&&E.generator)&&!1!==s.record),()=>{const y=()=>{var e,n;return null!==(n=null!==(e=ae.get(t,b))&&void 0!==e?e:null==k?void 0:k.initialValue)&&void 0!==n?n:0};let _=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}(re(n),y);const x=function(t,e){var n;let s=(null==e?void 0:e.toDefaultUnit)||yt;const i=t[t.length-1];if(xt(i)){const t=(null===(n=i.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(s=e=>e+t)}return s}(_,k);if(kt(f)){const t=f.createAnimation(_,"opacity"!==e,y,b,E);f=t.easing,_=t.keyframes||_,l=t.duration||l}if(Yt(b)&&(ne.cssRegisterProperty()?function(t){if(!Jt.has(t)){Jt.add(t);try{const{syntax:e,initialValue:n}=Bt.has(t)?Bt.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(b):w=!1),v&&!ne.linearEasing()&&(_t(f)||dt(f)&&f.some(_t))&&(w=!1),w){k&&(_=_.map((t=>ft(t)?k.toDefaultUnit(t):t))),1!==_.length||ne.partialKeyframes()&&!o||_.unshift(y());const e={delay:Tt.ms(c),duration:Tt.ms(l),endDelay:Tt.ms(h),easing:dt(f)?void 0:se(f,l),direction:p,iterations:u+1,fill:"both"};a=t.animate({[b]:_,offset:g,easing:dt(f)?f.map((t=>se(t,l))):void 0},e),a.finished||(a.finished=new Promise(((t,e)=>{a.onfinish=t,a.oncancel=e})));const n=_[_.length-1];a.finished.then((()=>{d||(ae.set(t,b,n),a.cancel())})).catch(mt),m||(a.playbackRate=1.000001)}else if(i&&v)_=_.map((t=>"string"==typeof t?parseFloat(t):t)),1===_.length&&_.unshift(parseFloat(y())),a=new i((e=>{ae.set(t,b,x?x(e):e)}),_,Object.assign(Object.assign({},s),{duration:l,easing:f}));else{const e=_[_.length-1];ae.set(t,b,k&&ft(e)?k.toDefaultUnit(e):e)}return o&&r(t,e,_,{duration:l,delay:c,easing:f,repeat:u,offset:g},"motion-one"),E.setAnimation(a),a}}const he=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);const ue=t=>t(),fe=(t,e,n=ut.duration)=>new Proxy({animations:t.map(ue).filter(Boolean),duration:n,options:e},de),de={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return Tt.s((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(pe)).catch(mt)),t.finished;case"stop":return()=>{t.animations.forEach((t=>le(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=Tt.ms(n);case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][e]=n;return!0}return!1}},pe=t=>t.finished;function ge(t=.1,{start:e=0,from:n=0,easing:s}={}){return(i,r)=>{const o=ft(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,r),a=Math.abs(o-i);let l=t*a;if(s){const e=r*t;l=Ot(s)(l/e)*e}return e+l}}function me(t,e,n){return _t(t)?t(e,n):t}const ye=(ve=Lt,function(t,e,n={}){const s=(t=function(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(t)).length,i=[];for(let r=0;r<s;r++){const o=t[r];for(const t in e){const a=he(n,t);a.delay=me(a.delay,r,s);const l=ce(o,t,e[t],a,ve);i.push(l)}}return fe(i,n,n.duration)});var ve;function we(t,e={}){return fe([()=>{const n=new Lt(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function be(t,e,n){return(_t(t)?we:ye)(t,e,n)}var Ee="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ke(){throw new Error("setTimeout has not been defined")}function _e(){throw new Error("clearTimeout has not been defined")}var xe=ke,Te=_e;function Se(t){if(xe===setTimeout)return setTimeout(t,0);if((xe===ke||!xe)&&setTimeout)return xe=setTimeout,setTimeout(t,0);try{return xe(t,0)}catch(e){try{return xe.call(null,t,0)}catch(e){return xe.call(this,t,0)}}}"function"==typeof Ee.setTimeout&&(xe=setTimeout),"function"==typeof Ee.clearTimeout&&(Te=clearTimeout);var Ie,Ae=[],Ce=!1,De=-1;function Ne(){Ce&&Ie&&(Ce=!1,Ie.length?Ae=Ie.concat(Ae):De=-1,Ae.length&&Re())}function Re(){if(!Ce){var t=Se(Ne);Ce=!0;for(var e=Ae.length;e;){for(Ie=Ae,Ae=[];++De<e;)Ie&&Ie[De].run();De=-1,e=Ae.length}Ie=null,Ce=!1,function(t){if(Te===clearTimeout)return clearTimeout(t);if((Te===_e||!Te)&&clearTimeout)return Te=clearTimeout,clearTimeout(t);try{return Te(t)}catch(e){try{return Te.call(null,t)}catch(e){return Te.call(this,t)}}}(t)}}function Oe(t,e){this.fun=t,this.array=e}Oe.prototype.run=function(){this.fun.apply(null,this.array)};function Le(){}var Me=Le,Pe=Le,$e=Le,Fe=Le,Ve=Le,Ue=Le,je=Le;var Be=Ee.performance||{},ze=Be.now||Be.mozNow||Be.msNow||Be.oNow||Be.webkitNow||function(){return(new Date).getTime()};var qe=new Date;var He={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Ae.push(new Oe(t,e)),1!==Ae.length||Ce||Se(Re)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:Me,addListener:Pe,once:$e,off:Fe,removeListener:Ve,removeAllListeners:Ue,emit:je,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*ze.call(Be),n=Math.floor(e),s=Math.floor(e%1*1e9);return t&&(n-=t[0],(s-=t[1])<0&&(n--,s+=1e9)),[n,s]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-qe)/1e3}};
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
     */const Ke=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},Ge={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=i>>2,h=(3&i)<<4|o>>4;let u=(15&o)<<2|l>>6,f=63&l;a||(f=64,r||(u=64)),s.push(n[c],n[h],n[u],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ke(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new Qe;const l=i<<2|r>>4;if(s.push(l),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qe extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const We=function(t){return function(t){const e=Ke(t);return Ge.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const Xe=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==Ee)return Ee;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ye=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return Ge.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},Je=()=>{try{return Xe()||(()=>{if(void 0===He||void 0===He.env)return;const t=He.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||Ye()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Ze=t=>{const e=(t=>{var e,n;return null===(n=null===(e=Je())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tn=()=>{var t;return null===(t=Je())||void 0===t?void 0:t.config};
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
class en{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */class nn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(rn,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new nn(s,o,n)}}const rn=/\{\$([^}]+)}/g;function on(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(an(n)&&an(r)){if(!on(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function an(t){return null!==t&&"object"==typeof t}
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
     */function ln(t){return t&&t._delegate?t._delegate:t}class cn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const hn="[DEFAULT]";
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
     */class un{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new en;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:hn})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=hn){return this.instances.has(t)}getOptions(t=hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===hn?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=hn){return this.component?this.component.multipleInstances?t:hn:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class fn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new un(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var dn;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(dn||(dn={}));const pn={debug:dn.DEBUG,verbose:dn.VERBOSE,info:dn.INFO,warn:dn.WARN,error:dn.ERROR,silent:dn.SILENT},gn=dn.INFO,mn={[dn.DEBUG]:"log",[dn.VERBOSE]:"log",[dn.INFO]:"info",[dn.WARN]:"warn",[dn.ERROR]:"error"},yn=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=mn[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class vn{constructor(t){this.name=t,this._logLevel=gn,this._logHandler=yn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dn))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?pn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dn.DEBUG,...t),this._logHandler(this,dn.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dn.VERBOSE,...t),this._logHandler(this,dn.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dn.INFO,...t),this._logHandler(this,dn.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dn.WARN,...t),this._logHandler(this,dn.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dn.ERROR,...t),this._logHandler(this,dn.ERROR,...t)}}const wn=(t,e)=>e.some((e=>t instanceof e));let bn,En;const kn=new WeakMap,_n=new WeakMap,xn=new WeakMap,Tn=new WeakMap,Sn=new WeakMap;let In={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return _n.get(t);if("objectStoreNames"===e)return t.objectStoreNames||xn.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function An(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(En||(En=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Nn(this),e),Dn(kn.get(this))}:function(...e){return Dn(t.apply(Nn(this),e))}:function(e,...n){const s=t.call(Nn(this),e,...n);return xn.set(s,e.sort?e.sort():[e]),Dn(s)}}function Cn(t){return"function"==typeof t?An(t):(t instanceof IDBTransaction&&function(t){if(_n.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));_n.set(t,e)}(t),wn(t,bn||(bn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,In):t)}function Dn(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(Dn(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&kn.set(e,t)})).catch((()=>{})),Sn.set(e,t),e}(t);if(Tn.has(t))return Tn.get(t);const e=Cn(t);return e!==t&&(Tn.set(t,e),Sn.set(e,t)),e}const Nn=t=>Sn.get(t);const Rn=["get","getKey","getAll","getAllKeys","count"],On=["put","add","delete","clear"],Ln=new Map;function Mn(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Ln.get(e))return Ln.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=On.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!Rn.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return Ln.set(e,r),r}In=(t=>({...t,get:(e,n,s)=>Mn(e,n)||t.get(e,n,s),has:(e,n)=>!!Mn(e,n)||t.has(e,n)}))(In);
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
class Pn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const $n="@firebase/app",Fn="0.9.20",Vn=new vn("@firebase/app"),Un="[DEFAULT]",jn={[$n]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Bn=new Map,zn=new Map;function qn(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(zn.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;zn.set(e,t);for(const e of Bn.values())qn(e,t);return!0}
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
const Kn=new sn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Gn{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}
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
     */function Qn(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:Un,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=tn()),!n)throw Kn.create("no-options");const r=Bn.get(i);if(r){if(on(n,r.options)&&on(s,r.config))return r;throw Kn.create("duplicate-app",{appName:i})}const o=new fn(i);for(const t of zn.values())o.addComponent(t);const a=new Gn(n,s,o);return Bn.set(i,a),a}function Wn(t,e,n){var s;let i=null!==(s=jn[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Vn.warn(t.join(" "))}Hn(new cn(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */const Xn="firebase-heartbeat-database",Yn=1,Jn="firebase-heartbeat-store";let Zn=null;function ts(){return Zn||(Zn=function(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Dn(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(Dn(o.result),t.oldVersion,t.newVersion,Dn(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(Xn,Yn,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Jn)}}).catch((t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})}))),Zn}async function es(t,e){try{const n=(await ts()).transaction(Jn,"readwrite"),s=n.objectStore(Jn);await s.put(e,ns(t)),await n.done}catch(t){if(t instanceof nn)Vn.warn(t.message);else{const e=Kn.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Vn.warn(e.message)}}}function ns(t){return`${t.name}!${t.options.appId}`}
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
     */class ss{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rs(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=is();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=is(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),os(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),os(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=We(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function is(){return(new Date).toISOString().substring(0,10)}class rs{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await ts();return await e.transaction(Jn).objectStore(Jn).get(ns(t))}catch(t){if(t instanceof nn)Vn.warn(t.message);else{const e=Kn.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Vn.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return es(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return es(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function os(t){return We(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var as;as="",Hn(new cn("platform-logger",(t=>new Pn(t)),"PRIVATE")),Hn(new cn("heartbeat",(t=>new ss(t)),"PRIVATE")),Wn($n,Fn,as),Wn($n,Fn,"esm2017"),Wn("fire-js","");
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
Wn("firebase","10.5.0","app");var ls,cs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Ee?Ee:"undefined"!=typeof self?self:{},hs=hs||{},us=cs||self;function fs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ds(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ps="closure_uid_"+(1e9*Math.random()>>>0),gs=0;function ms(t,e,n){return t.call.apply(t.bind,arguments)}function ys(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function vs(t,e,n){return(vs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ms:ys).apply(null,arguments)}function ws(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function bs(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Es(){this.s=this.s,this.o=this.o}Es.prototype.s=!1,Es.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ps)&&t[ps]||(t[ps]=++gs))},Es.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ks=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _s(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function xs(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(fs(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function Ts(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ts.prototype.h=function(){this.defaultPrevented=!0};var Ss=function(){if(!us.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{us.addEventListener("test",(()=>{}),e),us.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function Is(t){return/^[\s\xa0]*$/.test(t)}function As(){var t=us.navigator;return t&&(t=t.userAgent)?t:""}function Cs(t){return-1!=As().indexOf(t)}function Ds(t){return Ds[" "](t),t}Ds[" "]=function(){};var Ns,Rs,Os,Ls=Cs("Opera"),Ms=Cs("Trident")||Cs("MSIE"),Ps=Cs("Edge"),$s=Ps||Ms,Fs=Cs("Gecko")&&!(-1!=As().toLowerCase().indexOf("webkit")&&!Cs("Edge"))&&!(Cs("Trident")||Cs("MSIE"))&&!Cs("Edge"),Vs=-1!=As().toLowerCase().indexOf("webkit")&&!Cs("Edge");function Us(){var t=us.document;return t?t.documentMode:void 0}t:{var js="",Bs=(Rs=As(),Fs?/rv:([^\);]+)(\)|;)/.exec(Rs):Ps?/Edge\/([\d\.]+)/.exec(Rs):Ms?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Rs):Vs?/WebKit\/(\S+)/.exec(Rs):Ls?/(?:Version)[ \/]?(\S+)/.exec(Rs):void 0);if(Bs&&(js=Bs?Bs[1]:""),Ms){var zs=Us();if(null!=zs&&zs>parseFloat(js)){Ns=String(zs);break t}}Ns=js}if(us.document&&Ms){var qs=Us();Os=qs||(parseInt(Ns,10)||void 0)}else Os=void 0;var Hs=Os;function Ks(t,e){if(Ts.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fs){t:{try{Ds(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Gs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ks.$.h.call(this)}}bs(Ks,Ts);var Gs={2:"touch",3:"pen",4:"mouse"};Ks.prototype.h=function(){Ks.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qs="closure_listenable_"+(1e6*Math.random()|0),Ws=0;function Xs(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Ws,this.fa=this.ia=!1}function Ys(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Js(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Zs(t){const e={};for(const n in t)e[n]=t[n];return e}const ti="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ei(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<ti.length;e++)n=ti[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ni(t){this.src=t,this.g={},this.h=0}function si(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ks(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Ys(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ii(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}ni.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ii(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Xs(e,this.src,r,!!s,i)).ia=n,t.push(e)),e};var ri="closure_lm_"+(1e6*Math.random()|0),oi={};function ai(t,e,n,s,i){if(s&&s.once)return ci(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ai(t,e[r],n,s,i);return null}return n=mi(n),t&&t[Qs]?t.O(e,n,ds(s)?!!s.capture:!!s,i):li(t,e,n,!1,s,i)}function li(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ds(i)?!!i.capture:!!i,a=pi(t);if(a||(t[ri]=a=new ni(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=di;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ss||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(fi(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function ci(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ci(t,e[r],n,s,i);return null}return n=mi(n),t&&t[Qs]?t.P(e,n,ds(s)?!!s.capture:!!s,i):li(t,e,n,!0,s,i)}function hi(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)hi(t,e[r],n,s,i);else s=ds(s)?!!s.capture:!!s,n=mi(n),t&&t[Qs]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ii(r=t.g[e],n,s,i))&&(Ys(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=pi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ii(e,n,s,i)),(n=-1<t?e[t]:null)&&ui(n))}function ui(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Qs])si(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fi(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=pi(e))?(si(n,t),0==n.h&&(n.src=null,e[ri]=null)):Ys(t)}}}function fi(t){return t in oi?oi[t]:oi[t]="on"+t}function di(t,e){if(t.fa)t=!0;else{e=new Ks(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ui(t),t=n.call(s,e)}return t}function pi(t){return(t=t[ri])instanceof ni?t:null}var gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function mi(t){return"function"==typeof t?t:(t[gi]||(t[gi]=function(e){return t.handleEvent(e)}),t[gi])}function yi(){Es.call(this),this.i=new ni(this),this.S=this,this.J=null}function vi(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new Ts(e,t);else if(e instanceof Ts)e.target=e.target||t;else{var i=e;ei(e=new Ts(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=wi(o,s,!0,e)&&i}if(i=wi(o=e.g=t,s,!0,e)&&i,i=wi(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=wi(o=e.g=n[r],s,!1,e)&&i}function wi(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&si(t.i,o),i=!1!==a.call(l,s)&&i}}return i&&!s.defaultPrevented}bs(yi,Es),yi.prototype[Qs]=!0,yi.prototype.removeEventListener=function(t,e,n,s){hi(this,t,e,n,s)},yi.prototype.N=function(){if(yi.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ys(n[s]);delete e.g[t],e.h--}}this.J=null},yi.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},yi.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var bi=us.JSON.stringify;function Ei(){var t=Ai;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ki=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new _i),(t=>t.reset()));class _i{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xi(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ti(t){us.setTimeout((()=>{throw t}),0)}let Si,Ii=!1,Ai=new class{constructor(){this.h=this.g=null}add(t,e){const n=ki.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Ci=()=>{const t=us.Promise.resolve(void 0);Si=()=>{t.then(Di)}};var Di=()=>{for(var t;t=Ei();){try{t.h.call(t.g)}catch(t){Ti(t)}var e=ki;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ii=!1};function Ni(t,e){yi.call(this),this.h=t||1,this.g=e||us,this.j=vs(this.qb,this),this.l=Date.now()}function Ri(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Oi(t,e,n){if("function"==typeof t)n&&(t=vs(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=vs(t.handleEvent,t)}return 2147483647<Number(e)?-1:us.setTimeout(t,e||0)}function Li(t){t.g=Oi((()=>{t.g=null,t.i&&(t.i=!1,Li(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}bs(Ni,yi),(ls=Ni.prototype).ga=!1,ls.T=null,ls.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),vi(this,"tick"),this.ga&&(Ri(this),this.start()))}},ls.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ls.N=function(){Ni.$.N.call(this),Ri(this),delete this.g};class Mi extends Es{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(us.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(t){Es.call(this),this.h=t,this.g={}}bs(Pi,Es);var $i=[];function Fi(t,e,n,s){Array.isArray(n)||(n&&($i[0]=n.toString()),n=$i);for(var i=0;i<n.length;i++){var r=ai(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Vi(t){Js(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ui(t)}),t),t.g={}}function Ui(){this.g=!0}function ji(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return bi(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Pi.prototype.N=function(){Pi.$.N.call(this),Vi(this)},Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ui.prototype.Ea=function(){this.g=!1},Ui.prototype.info=function(){};var Bi={},zi=null;function qi(){return zi=zi||new yi}function Hi(t){Ts.call(this,Bi.Ta,t)}function Ki(t){const e=qi();vi(e,new Hi(e))}function Gi(t,e){Ts.call(this,Bi.STAT_EVENT,t),this.stat=e}function Qi(t){const e=qi();vi(e,new Gi(e,t))}function Wi(t,e){Ts.call(this,Bi.Ua,t),this.size=e}function Xi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return us.setTimeout((function(){t()}),e)}Bi.Ta="serverreachability",bs(Hi,Ts),Bi.STAT_EVENT="statevent",bs(Gi,Ts),Bi.Ua="timingevent",bs(Wi,Ts);var Yi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ji={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zi(){}function tr(t){return t.h||(t.h=t.i())}function er(){}Zi.prototype.h=null;var nr,sr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ir(){Ts.call(this,"d")}function rr(){Ts.call(this,"c")}function or(){}function ar(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Pi(this),this.P=cr,t=$s?125:void 0,this.V=new Ni(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lr}function lr(){this.i=null,this.g="",this.h=!1}bs(ir,Ts),bs(rr,Ts),bs(or,Zi),or.prototype.g=function(){return new XMLHttpRequest},or.prototype.i=function(){return{}},nr=new or;var cr=45e3,hr={},ur={};function fr(t,e,n){t.L=1,t.v=Nr(Sr(e)),t.s=n,t.S=!0,dr(t,null)}function dr(t,e){t.G=Date.now(),yr(t),t.A=Sr(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),qr(n.i,"t",s),t.C=0,n=t.l.J,t.h=new lr,t.g=Ho(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Mi(vs(t.Pa,t,t.g),t.O)),Fi(t.U,t.g,"readystatechange",t.nb),e=t.I?Zs(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ki(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function pr(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function gr(t,e,n){let s,i=!0;for(;!t.J&&t.C<n.length;){if(s=mr(t,n),s==ur){4==e&&(t.o=4,Qi(14),i=!1),ji(t.j,t.m,null,"[Incomplete Response]");break}if(s==hr){t.o=4,Qi(15),ji(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ji(t.j,t.m,s,null),kr(t,s)}pr(t)&&s!=ur&&s!=hr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Qi(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$o(e),e.M=!0,Qi(11))):(ji(t.j,t.m,n,"[Invalid Chunked Response]"),Er(t),br(t))}function mr(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ur:(n=Number(e.substring(n,s)),isNaN(n)?hr:(s+=1)+n>e.length?ur:(e=e.slice(s,s+n),t.C=s+n,e))}function yr(t){t.Y=Date.now()+t.P,vr(t,t.P)}function vr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Xi(vs(t.lb,t),e)}function wr(t){t.B&&(us.clearTimeout(t.B),t.B=null)}function br(t){0==t.l.H||t.J||Uo(t.l,t)}function Er(t){wr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ri(t.V),Vi(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function kr(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Yr(n.i,t)))if(!t.K&&Yr(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Vo(n),Co(n)}Po(n),Qi(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Xi(vs(n.ib,n),6e3));if(1>=Xr(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Bo(n,11)}else if((t.K||n.g==t)&&Vo(n),!Is(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Jr(r,r.h),r.h=null))}if(s.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,Dr(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=qo(s,s.J?s.pa:null,s.Y),o.K){Zr(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(wr(a),yr(a)),s.g=o}else Mo(s);0<n.j.length&&No(n)}else"stop"!=c[0]&&"close"!=c[0]||Bo(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Bo(n,7):Ao(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Ki()}catch(t){}}function _r(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(fs(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(fs(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(fs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(ls=ar.prototype).setTimeout=function(t){this.P=t},ls.nb=function(t){t=t.target;const e=this.M;e&&3==ko(t)?e.l():this.Pa(t)},ls.Pa=function(t){try{if(t==this.g)t:{const h=ko(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||$s||this.g&&(this.h.h||this.g.ja()||_o(this.g)))){this.J||4!=h||7==e||Ki(),wr(this);var n=this.g.da();this.ca=n;e:if(pr(this)){var s=_o(this.g);t="";var i=s.length,r=4==ko(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Er(this),br(this);var o="";break e}this.h.i=new us.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Is(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Qi(12),Er(this),br(this);break t}ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kr(this,n)}this.S?(gr(this,h,o),$s&&this.i&&3==h&&(Fi(this.U,this.V,"tick",this.mb),this.V.start())):(ji(this.j,this.m,o,null),kr(this,o)),4==h&&Er(this),this.i&&!this.J&&(4==h?Uo(this.l,this):(this.i=!1,yr(this)))}else(function(t){const e={};t=(t.g&&2<=ko(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(Is(t[s]))continue;var n=xi(t[s]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Qi(12)):(this.o=0,Qi(13)),Er(this),br(this)}}}catch(t){}},ls.mb=function(){if(this.g){var t=ko(this.g),e=this.g.ja();this.C<e.length&&(wr(this),gr(this,t,e),this.i&&4!=t&&yr(this))}},ls.cancel=function(){this.J=!0,Er(this)},ls.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Ki(),Qi(17)),Er(this),this.o=2,br(this)):vr(this,this.Y-t)};var xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tr){this.h=t.h,Ir(this,t.j),this.s=t.s,this.g=t.g,Ar(this,t.m),this.l=t.l;var e=t.i,n=new Ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cr(this,n),this.o=t.o}else t&&(e=String(t).match(xr))?(this.h=!1,Ir(this,e[1]||"",!0),this.s=Rr(e[2]||""),this.g=Rr(e[3]||"",!0),Ar(this,e[4]),this.l=Rr(e[5]||"",!0),Cr(this,e[6]||"",!0),this.o=Rr(e[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}function Sr(t){return new Tr(t)}function Ir(t,e,n){t.j=n?Rr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ar(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cr(t,e,n){e instanceof Ur?(t.i=e,function(t,e){e&&!t.j&&(jr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Br(this,e),qr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Or(e,Fr)),t.i=new Ur(e,t.h))}function Dr(t,e,n){t.i.set(e,n)}function Nr(t){return Dr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Or(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Lr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Or(e,Mr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Or(e,Mr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Or(n,"/"==n.charAt(0)?$r:Pr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Or(n,Vr)),t.join("")};var Mr=/[#\/\?@]/g,Pr=/[#\?:]/g,$r=/[#\?]/g,Fr=/[#\?@]/g,Vr=/#/g;function Ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Br(t,e){jr(t),e=Hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zr(t,e){return jr(t),e=Hr(t,e),t.g.has(e)}function qr(t,e,n){Br(t,e),0<n.length&&(t.i=null,t.g.set(Hr(t,e),_s(n)),t.h+=n.length)}function Hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ls=Ur.prototype).add=function(t,e){jr(this),this.i=null,t=Hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ls.forEach=function(t,e){jr(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},ls.ta=function(){jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},ls.Z=function(t){jr(this);let e=[];if("string"==typeof t)zr(this,t)&&(e=e.concat(this.g.get(Hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},ls.set=function(t,e){return jr(this),this.i=null,zr(this,t=Hr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ls.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},ls.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};var Kr=class{constructor(t,e){this.g=t,this.map=e}};function Gr(t){this.l=t||Qr,us.PerformanceNavigationTiming?t=0<(t=us.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(us.g&&us.g.Ka&&us.g.Ka()&&us.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qr=10;function Wr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Xr(t){return t.h?1:t.g?t.g.size:0}function Yr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jr(t,e){t.g?t.g.add(e):t.h=e}function Zr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function to(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _s(t.i)}Gr.prototype.cancel=function(){if(this.i=to(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var eo=class{stringify(t){return us.JSON.stringify(t,void 0)}parse(t){return us.JSON.parse(t,void 0)}};function no(){this.g=new eo}function so(t,e,n){const s=n||"";try{_r(t,(function(t,n){let i=t;ds(t)&&(i=bi(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function io(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function ro(t){this.l=t.ec||null,this.j=t.ob||!1}function oo(t,e){yi.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ao,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bs(ro,Zi),ro.prototype.g=function(){return new oo(this.l,this.j)},ro.prototype.i=function(t){return function(){return t}}({}),bs(oo,yi);var ao=0;function lo(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function co(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ho(t)}function ho(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ls=oo.prototype).open=function(t,e){if(this.readyState!=ao)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ho(this)},ls.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||us).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},ls.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,co(this)),this.readyState=ao},ls.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==us.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lo(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},ls.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?co(this):ho(this),3==this.readyState&&lo(this)}},ls.Za=function(t){this.g&&(this.response=this.responseText=t,co(this))},ls.Ya=function(t){this.g&&(this.response=t,co(this))},ls.ka=function(){this.g&&co(this)},ls.setRequestHeader=function(t,e){this.v.append(t,e)},ls.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ls.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var uo=us.JSON.parse;function fo(t){yi.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=po,this.L=this.M=!1}bs(fo,yi);var po="",go=/^https?$/i,mo=["POST","PUT"];function yo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vo(t),bo(t)}function vo(t){t.F||(t.F=!0,vi(t,"complete"),vi(t,"error"))}function wo(t){if(t.h&&void 0!==hs&&(!t.C[1]||4!=ko(t)||2!=t.da()))if(t.v&&4==ko(t))Oi(t.La,0,t);else if(vi(t,"readystatechange"),4==ko(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var i=String(t.I).match(xr)[1]||null;!i&&us.self&&us.self.location&&(i=us.self.location.protocol.slice(0,-1)),s=!go.test(i?i.toLowerCase():"")}n=s}if(n)vi(t,"complete"),vi(t,"success");else{t.m=6;try{var r=2<ko(t)?t.g.statusText:""}catch(t){r=""}t.j=r+" ["+t.da()+"]",vo(t)}}finally{bo(t)}}}function bo(t,e){if(t.g){Eo(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||vi(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Eo(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(us.clearTimeout(t.A),t.A=null)}function ko(t){return t.g?t.g.readyState:0}function _o(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case po:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xo(t){let e="";return Js(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function To(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=xo(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Dr(t,e,n))}function So(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Io(t){this.Ga=0,this.j=[],this.l=new Ui,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=So("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=So("baseRetryDelayMs",5e3,t),this.hb=So("retryDelaySeedMs",1e4,t),this.eb=So("forwardChannelMaxRetries",2,t),this.xa=So("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gr(t&&t.concurrentRequestLimit),this.Ja=new no,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Ao(t){if(Do(t),3==t.H){var e=t.W++,n=Sr(t.I);if(Dr(n,"SID",t.K),Dr(n,"RID",e),Dr(n,"TYPE","terminate"),Oo(t,n),(e=new ar(t,t.l,e)).L=2,e.v=Nr(Sr(n)),n=!1,us.navigator&&us.navigator.sendBeacon)try{n=us.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&us.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ho(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yr(e)}zo(t)}function Co(t){t.g&&($o(t),t.g.cancel(),t.g=null)}function Do(t){Co(t),t.u&&(us.clearTimeout(t.u),t.u=null),Vo(t),t.i.cancel(),t.m&&("number"==typeof t.m&&us.clearTimeout(t.m),t.m=null)}function No(t){if(!Wr(t.i)&&!t.m){t.m=!0;var e=t.Na;Si||Ci(),Ii||(Si(),Ii=!0),Ai.add(e,t),t.C=0}}function Ro(t,e){var n;n=e?e.m:t.W++;const s=Sr(t.I);Dr(s,"SID",t.K),Dr(s,"RID",n),Dr(s,"AID",t.V),Oo(t,s),t.o&&t.s&&To(s,t.o,t.s),n=new ar(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Lo(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jr(t.i,n),fr(n,s,e)}function Oo(t,e){t.na&&Js(t.na,(function(t,n){Dr(e,n,t)})),t.h&&_r({},(function(t,n){Dr(e,n,t)}))}function Lo(t,e,n){n=Math.min(t.j.length,n);var s=t.h?vs(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),r=!1;else try{so(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function Mo(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Si||Ci(),Ii||(Si(),Ii=!0),Ai.add(e,t),t.A=0}}function Po(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Xi(vs(t.Ma,t),jo(t,t.A)),t.A++,!0)}function $o(t){null!=t.B&&(us.clearTimeout(t.B),t.B=null)}function Fo(t){t.g=new ar(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Sr(t.wa);Dr(e,"RID","rpc"),Dr(e,"SID",t.K),Dr(e,"AID",t.V),Dr(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Dr(e,"TO",t.qa),Dr(e,"TYPE","xmlhttp"),Oo(t,e),t.o&&t.s&&To(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Nr(Sr(e)),n.s=null,n.S=!0,dr(n,t)}function Vo(t){null!=t.v&&(us.clearTimeout(t.v),t.v=null)}function Uo(t,e){var n=null;if(t.g==e){Vo(t),$o(t),t.g=null;var s=2}else{if(!Yr(t.i,e))return;n=e.F,Zr(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;vi(s=qi(),new Wi(s,n)),No(t)}else Mo(t);else if(3==(i=e.o)||0==i&&0<e.ca||!(1==s&&function(t,e){return!(Xr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Xi(vs(t.Na,t,e),jo(t,t.C)),t.C++,0)))}(t,e)||2==s&&Po(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Bo(t,5);break;case 4:Bo(t,10);break;case 3:Bo(t,6);break;default:Bo(t,2)}}function jo(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Bo(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=vs(t.pb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),us.location&&"http"==us.location.protocol||Ir(n,"https"),Nr(n)),function(t,e){const n=new Ui;if(us.Image){const s=new Image;s.onload=ws(io,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ws(io,n,s,"TestLoadImage: error",!1,e),s.onabort=ws(io,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ws(io,n,s,"TestLoadImage: timeout",!1,e),us.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Qi(2);t.H=0,t.h&&t.h.za(e),zo(t),Do(t)}function zo(t){if(t.H=0,t.ma=[],t.h){const e=to(t.i);0==e.length&&0==t.j.length||(xs(t.ma,e),xs(t.ma,t.j),t.i.i.length=0,_s(t.j),t.j.length=0),t.h.ya()}}function qo(t,e,n){var s=n instanceof Tr?Sr(n):new Tr(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Ar(s,s.m);else{var i=us.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Tr(null);s&&Ir(r,s),e&&(r.g=e),i&&Ar(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Dr(s,n,e),Dr(s,"VER",t.ra),Oo(t,s),s}function Ho(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new fo(new ro({ob:!0})):new fo(t.va)).Oa(t.J),e}function Ko(){}function Go(){if(Ms&&!(10<=Number(Hs)))throw Error("Environmental error: no available transport.")}function Qo(t,e){yi.call(this),this.g=new Io(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Is(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Is(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Yo(this)}function Wo(t){ir.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Xo(){rr.call(this),this.status=1}function Yo(t){this.g=t}function Jo(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Zo(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(e^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function ta(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}(ls=fo.prototype).Oa=function(t){this.M=t},ls.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nr.g(),this.C=this.u?tr(this.u):tr(nr),this.g.onreadystatechange=vs(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void yo(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=us.FormData&&t instanceof us.FormData,!(0<=ks(mo,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Eo(this),0<this.B&&((this.L=function(t){return Ms&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vs(this.ua,this)):this.A=Oi(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){yo(this,t)}},ls.ua=function(){void 0!==hs&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vi(this,"timeout"),this.abort(8))},ls.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vi(this,"complete"),vi(this,"abort"),bo(this))},ls.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bo(this,!0)),fo.$.N.call(this)},ls.La=function(){this.s||(this.G||this.v||this.l?wo(this):this.kb())},ls.kb=function(){wo(this)},ls.isActive=function(){return!!this.g},ls.da=function(){try{return 2<ko(this)?this.g.status:-1}catch(t){return-1}},ls.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ls.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),uo(e)}},ls.Ia=function(){return this.m},ls.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ls=Io.prototype).ra=8,ls.H=1,ls.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ar(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Zs(r),ei(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Lo(this,i,e),Dr(n=Sr(this.I),"RID",t),Dr(n,"CVER",22),this.F&&Dr(n,"X-HTTP-Session-Id",this.F),Oo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(xo(r)))+"&"+e:this.o&&To(n,this.o,r)),Jr(this.i,i),this.bb&&Dr(n,"TYPE","init"),this.P?(Dr(n,"$req",e),Dr(n,"SID","null"),i.aa=!0,fr(i,n,null)):fr(i,n,e),this.H=2}}else 3==this.H&&(t?Ro(this,t):0==this.j.length||Wr(this.i)||Ro(this))},ls.Ma=function(){if(this.u=null,Fo(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xi(vs(this.jb,this),t)}},ls.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qi(10),Co(this),Fo(this))},ls.ib=function(){null!=this.v&&(this.v=null,Co(this),Po(this),Qi(19))},ls.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qi(2)):(this.l.info("Failed to ping google.com"),Qi(1))},ls.isActive=function(){return!!this.h&&this.h.isActive(this)},(ls=Ko.prototype).Ba=function(){},ls.Aa=function(){},ls.za=function(){},ls.ya=function(){},ls.isActive=function(){return!0},ls.Va=function(){},Go.prototype.g=function(t,e){return new Qo(t,e)},bs(Qo,yi),Qo.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qi(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qo(t,null,t.Y),No(t)},Qo.prototype.close=function(){Ao(this.g)},Qo.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bi(t),t=n);e.j.push(new Kr(e.fb++,t)),3==e.H&&No(e)},Qo.prototype.N=function(){this.g.h=null,delete this.j,Ao(this.g),delete this.g,Qo.$.N.call(this)},bs(Wo,ir),bs(Xo,rr),bs(Yo,Ko),Yo.prototype.Ba=function(){vi(this.g,"a")},Yo.prototype.Aa=function(t){vi(this.g,new Wo(t))},Yo.prototype.za=function(t){vi(this.g,new Xo)},Yo.prototype.ya=function(){vi(this.g,"b")},bs(Jo,(function(){this.blockSize=-1})),Jo.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Jo.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(0==i)for(;r<=n;)Zo(this,t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Zo(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Zo(this,s),i=0;break}}this.h=i,this.i+=e},Jo.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var ea={};function na(t){return-128<=t&&128>t?function(t,e){var n=ea;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new ta([0|t],0>t?-1:0)})):new ta([0|t],0>t?-1:0)}function sa(t){if(isNaN(t)||!isFinite(t))return ra;if(0>t)return ha(sa(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ia;return new ta(e,0)}var ia=4294967296,ra=na(0),oa=na(1),aa=na(16777216);function la(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function ca(t){return-1==t.h}function ha(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ta(n,~t.h).add(oa)}function ua(t,e){return t.add(ha(e))}function fa(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function da(t,e){this.g=t,this.h=e}function pa(t,e){if(la(e))throw Error("division by zero");if(la(t))return new da(ra,ra);if(ca(t))return e=pa(ha(t),e),new da(ha(e.g),ha(e.h));if(ca(e))return e=pa(t,ha(e)),new da(ha(e.g),e.h);if(30<t.g.length){if(ca(t)||ca(e))throw Error("slowDivide_ only works with positive integers.");for(var n=oa,s=e;0>=s.X(t);)n=ga(n),s=ga(s);var i=ma(n,1),r=ma(s,1);for(s=ma(s,2),n=ma(n,2);!la(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=ma(s,1),n=ma(n,1)}return e=ua(t,i.R(e)),new da(i,e)}for(i=ra;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(r=sa(n)).R(e);ca(o)||0<o.X(t);)o=(r=sa(n-=s)).R(e);la(r)&&(r=oa),i=i.add(r),t=ua(t,o)}return new da(i,t)}function ga(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ta(n,t.h)}function ma(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ta(i,t.h)}(ls=ta.prototype).ea=function(){if(ca(this))return-ha(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ia+s)*e,e*=ia}return t},ls.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(la(this))return"0";if(ca(this))return"-"+ha(this).toString(t);for(var e=sa(Math.pow(t,6)),n=this,s="";;){var i=pa(n,e).g,r=((0<(n=ua(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(la(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},ls.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},ls.X=function(t){return ca(t=ua(this,t))?-1:la(t)?0:1},ls.abs=function(){return ca(this)?ha(this):this},ls.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(65535&this.D(i))+(65535&t.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ta(n,-2147483648&n[n.length-1]?-1:0)},ls.R=function(t){if(la(this)||la(t))return ra;if(ca(this))return ca(t)?ha(this).R(ha(t)):ha(ha(this).R(t));if(ca(t))return ha(this.R(ha(t)));if(0>this.X(aa)&&0>t.X(aa))return sa(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=t.D(i)>>>16,l=65535&t.D(i);n[2*s+2*i]+=o*l,fa(n,2*s+2*i),n[2*s+2*i+1]+=r*l,fa(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,fa(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,fa(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ta(n,0)},ls.gb=function(t){return pa(this,t).h},ls.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ta(n,this.h&t.h)},ls.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ta(n,this.h|t.h)},ls.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ta(n,this.h^t.h)},Go.prototype.createWebChannel=Go.prototype.g,Qo.prototype.send=Qo.prototype.u,Qo.prototype.open=Qo.prototype.m,Qo.prototype.close=Qo.prototype.close,Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Ji.COMPLETE="complete",er.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",yi.prototype.listen=yi.prototype.O,fo.prototype.listenOnce=fo.prototype.P,fo.prototype.getLastError=fo.prototype.Sa,fo.prototype.getLastErrorCode=fo.prototype.Ia,fo.prototype.getStatus=fo.prototype.da,fo.prototype.getResponseJson=fo.prototype.Wa,fo.prototype.getResponseText=fo.prototype.ja,fo.prototype.send=fo.prototype.ha,fo.prototype.setWithCredentials=fo.prototype.Oa,Jo.prototype.digest=Jo.prototype.l,Jo.prototype.reset=Jo.prototype.reset,Jo.prototype.update=Jo.prototype.j,ta.prototype.add=ta.prototype.add,ta.prototype.multiply=ta.prototype.R,ta.prototype.modulo=ta.prototype.gb,ta.prototype.compare=ta.prototype.X,ta.prototype.toNumber=ta.prototype.ea,ta.prototype.toString=ta.prototype.toString,ta.prototype.getBits=ta.prototype.D,ta.fromNumber=sa,ta.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return ha(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=sa(Math.pow(n,8)),i=ra,r=0;r<e.length;r+=8){var o=Math.min(8,e.length-r),a=parseInt(e.substring(r,r+o),n);8>o?(o=sa(Math.pow(n,o)),i=i.R(o).add(sa(a))):i=(i=i.R(s)).add(sa(a))}return i};var ya=Yi,va=Ji,wa=Bi,ba=10,Ea=11,ka=er,_a=fo,xa=ta;const Ta="@firebase/firestore";
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
     */class Sa{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Sa.UNAUTHENTICATED=new Sa(null),Sa.GOOGLE_CREDENTIALS=new Sa("google-credentials-uid"),Sa.FIRST_PARTY=new Sa("first-party-uid"),Sa.MOCK_USER=new Sa("mock-user");
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
let Ia="10.5.0";
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
     */const Aa=new vn("@firebase/firestore");function Ca(){return Aa.logLevel}function Da(t,...e){if(Aa.logLevel<=dn.DEBUG){const n=e.map(Oa);Aa.debug(`Firestore (${Ia}): ${t}`,...n)}}function Na(t,...e){if(Aa.logLevel<=dn.ERROR){const n=e.map(Oa);Aa.error(`Firestore (${Ia}): ${t}`,...n)}}function Ra(t,...e){if(Aa.logLevel<=dn.WARN){const n=e.map(Oa);Aa.warn(`Firestore (${Ia}): ${t}`,...n)}}function Oa(t){if("string"==typeof t)return t;try{
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
     */function La(t="Unexpected state"){const e=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: `+t;throw Na(e),new Error(e)}function Ma(t,e){t||La()}function Pa(t,e){return t}
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
     */const $a={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fa extends nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Va{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ja{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Sa.UNAUTHENTICATED)))}shutdown(){}}class Ba{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class za{constructor(t){this.t=t,this.currentUser=Sa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Va;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Va,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Da("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Da("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Va)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Da("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ma("string"==typeof e.accessToken),new Ua(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ma(null===t||"string"==typeof t),new Sa(t)}}class qa{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Sa.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ha{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new qa(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Sa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ka{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ga{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Da("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Da("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Da("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?s(t):Da("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ma("string"==typeof t.token),this.R=t.token,new Ka(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function Qa(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class Wa{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=Qa(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function Xa(t,e){return t<e?-1:t>e?1:0}function Ya(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class Ja{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Fa($a.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Fa($a.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Fa($a.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Fa($a.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ja.fromMillis(Date.now())}static fromDate(t){return Ja.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ja(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Xa(this.nanoseconds,t.nanoseconds):Xa(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class Za{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Za(t)}static min(){return new Za(new Ja(0,0))}static max(){return new Za(new Ja(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class tl{constructor(t,e,n){void 0===e?e=0:e>t.length&&La(),void 0===n?n=t.length-e:n>t.length-e&&La(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class el extends tl{construct(t,e,n){return new el(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Fa($a.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new el(e)}static emptyPath(){return new el([])}}const nl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sl extends tl{construct(t,e,n){return new sl(t,e,n)}static isValidIdentifier(t){return nl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sl(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Fa($a.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Fa($a.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Fa($a.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Fa($a.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new sl(e)}static emptyPath(){return new sl([])}}
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
     */class il{constructor(t){this.path=t}static fromPath(t){return new il(el.fromString(t))}static fromName(t){return new il(el.fromString(t).popFirst(5))}static empty(){return new il(el.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===el.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return el.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new il(new el(t.slice()))}}function rl(t){return new ol(t.readTime,t.key,-1)}class ol{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ol(Za.min(),il.empty(),-1)}static max(){return new ol(Za.max(),il.empty(),-1)}}function al(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=il.comparator(t.documentKey,e.documentKey),0!==n?n:Xa(t.largestBatchId,e.largestBatchId))}
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
     */const ll="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
     */async function hl(t){if(t.code!==$a.FAILED_PRECONDITION||t.message!==ll)throw t;Da("LocalStore","Unexpectedly lost primary lease")}
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
     */class ul{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&La(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ul(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ul?e:ul.resolve(e)}catch(t){return ul.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ul.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ul.reject(e)}static resolve(t){return new ul(((e,n)=>{e(t)}))}static reject(t){return new ul(((e,n)=>{n(t)}))}static waitFor(t){return new ul(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=ul.resolve(!1);for(const n of t)e=e.next((t=>t?ul.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new ul(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new ul(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function fl(t){return"IndexedDbTransactionError"===t.name}
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
     */class dl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function pl(t){return null==t}function gl(t){return 0===t&&1/t==-1/0}
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
function ml(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */dl.ae=-1;class wl{constructor(t,e){this.comparator=t,this.root=e||El.EMPTY}insert(t,e){return new wl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,El.BLACK,null,null))}remove(t){return new wl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,El.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bl(this.root,t,this.comparator,!1)}getReverseIterator(){return new bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bl(this.root,t,this.comparator,!0)}}class bl{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class El{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:El.RED,this.left=null!=s?s:El.EMPTY,this.right=null!=i?i:El.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new El(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return El.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return El.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,El.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,El.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw La();if(this.right.isRed())throw La();const t=this.left.check();if(t!==this.right.check())throw La();return t+(this.isRed()?0:1)}}El.EMPTY=null,El.RED=!0,El.BLACK=!1,El.EMPTY=new class{constructor(){this.size=0}get key(){throw La()}get value(){throw La()}get color(){throw La()}get left(){throw La()}get right(){throw La()}copy(t,e,n,s,i){return this}insert(t,e,n){return new El(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class kl{constructor(t){this.comparator=t,this.data=new wl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _l(this.data.getIterator())}getIteratorFrom(t){return new _l(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof kl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new kl(this.comparator);return e.data=t,e}}class _l{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class xl{constructor(t){this.fields=t,t.sort(sl.comparator)}static empty(){return new xl([])}unionWith(t){let e=new kl(sl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new xl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ya(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class Tl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class Sl{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Tl("Invalid base64 string: "+t):t}}(t);return new Sl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Sl(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xa(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Sl.EMPTY_BYTE_STRING=new Sl("");const Il=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Al(t){if(Ma(!!t),"string"==typeof t){let e=0;const n=Il.exec(t);if(Ma(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Cl(t.seconds),nanos:Cl(t.nanos)}}function Cl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Dl(t){return"string"==typeof t?Sl.fromBase64String(t):Sl.fromUint8Array(t)}
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
     */function Nl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Rl(t){const e=t.mapValue.fields.__previous_value__;return Nl(e)?Rl(e):e}function Ol(t){const e=Al(t.mapValue.fields.__local_write_time__.timestampValue);return new Ja(e.seconds,e.nanos)}
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
     */class Ll{constructor(t,e,n,s,i,r,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Ml{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ml("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ml&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $l(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nl(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:La()}function Fl(t,e){if(t===e)return!0;const n=$l(t);if(n!==$l(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ol(t).isEqual(Ol(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Al(t.timestampValue),s=Al(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Dl(t.bytesValue).isEqual(Dl(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Cl(t.geoPointValue.latitude)===Cl(e.geoPointValue.latitude)&&Cl(t.geoPointValue.longitude)===Cl(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Cl(t.integerValue)===Cl(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Cl(t.doubleValue),s=Cl(e.doubleValue);return n===s?gl(n)===gl(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Ya(t.arrayValue.values||[],e.arrayValue.values||[],Fl);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ml(n)!==ml(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Fl(n[t],s[t])))return!1;return!0}(t,e);default:return La()}}function Vl(t,e){return void 0!==(t.values||[]).find((t=>Fl(t,e)))}function Ul(t,e){if(t===e)return 0;const n=$l(t),s=$l(e);if(n!==s)return Xa(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xa(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Cl(t.integerValue||t.doubleValue),s=Cl(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return jl(t.timestampValue,e.timestampValue);case 4:return jl(Ol(t),Ol(e));case 5:return Xa(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Dl(t),s=Dl(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Xa(n[t],s[t]);if(0!==e)return e}return Xa(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Xa(Cl(t.latitude),Cl(e.latitude));return 0!==n?n:Xa(Cl(t.longitude),Cl(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Ul(n[t],s[t]);if(e)return e}return Xa(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Pl.mapValue&&e===Pl.mapValue)return 0;if(t===Pl.mapValue)return 1;if(e===Pl.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Xa(s[t],r[t]);if(0!==e)return e;const o=Ul(n[s[t]],i[r[t]]);if(0!==o)return o}return Xa(s.length,r.length)}(t.mapValue,e.mapValue);default:throw La()}}function jl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Xa(t,e);const n=Al(t),s=Al(e),i=Xa(n.seconds,s.seconds);return 0!==i?i:Xa(n.nanos,s.nanos)}function Bl(t){return zl(t)}function zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Al(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Dl(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return il.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=zl(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${zl(t.fields[i])}`;return n+"}"}(t.mapValue):La()}function ql(t){return!!t&&"integerValue"in t}function Hl(t){return!!t&&"arrayValue"in t}function Kl(t){return!!t&&"mapValue"in t}function Gl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yl(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Gl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gl(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ql{constructor(t){this.value=t}static empty(){return new Ql({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Kl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gl(e)}setAll(t){let e=sl.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Gl(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Kl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Kl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){yl(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ql(Gl(this.value))}}function Wl(t){const e=[];return yl(t.fields,((t,n)=>{const s=new sl([t]);if(Kl(n)){const t=Wl(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new xl(e)
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
     */}class Xl{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new Xl(t,0,Za.min(),Za.min(),Za.min(),Ql.empty(),0)}static newFoundDocument(t,e,n,s){return new Xl(t,1,e,Za.min(),n,s,0)}static newNoDocument(t,e){return new Xl(t,2,e,Za.min(),Za.min(),Ql.empty(),0)}static newUnknownDocument(t,e){return new Xl(t,3,e,Za.min(),Za.min(),Ql.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Za.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ql.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ql.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Za.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Xl&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xl(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Yl{constructor(t,e){this.position=t,this.inclusive=e}}function Jl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?il.comparator(il.fromName(o.referenceValue),n.key):Ul(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Zl(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fl(t.position[n],e.position[n]))return!1;return!0}
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
     */class tc{constructor(t,e="asc"){this.field=t,this.dir=e}}function ec(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
     */class nc{}class sc extends nc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new hc(t,e,n):"array-contains"===e?new pc(t,n):"in"===e?new gc(t,n):"not-in"===e?new mc(t,n):"array-contains-any"===e?new yc(t,n):new sc(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new uc(t,n):new fc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ul(e,this.value)):null!==e&&$l(this.value)===$l(e)&&this.matchesComparison(Ul(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return La()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ic extends nc{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new ic(t,e)}matches(t){return rc(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function rc(t){return"and"===t.op}function oc(t){return function(t){for(const e of t.filters)if(e instanceof ic)return!1;return!0}(t)&&rc(t)}function ac(t){if(t instanceof sc)return t.field.canonicalString()+t.op.toString()+Bl(t.value);if(oc(t))return t.filters.map((t=>ac(t))).join(",");{const e=t.filters.map((t=>ac(t))).join(",");return`${t.op}(${e})`}}function lc(t,e){return t instanceof sc?function(t,e){return e instanceof sc&&t.op===e.op&&t.field.isEqual(e.field)&&Fl(t.value,e.value)}(t,e):t instanceof ic?function(t,e){return e instanceof ic&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&lc(n,e.filters[s])),!0)}(t,e):void La()}function cc(t){return t instanceof sc?function(t){return`${t.field.canonicalString()} ${t.op} ${Bl(t.value)}`}(t):t instanceof ic?function(t){return t.op.toString()+" {"+t.getFilters().map(cc).join(" ,")+"}"}(t):"Filter"}class hc extends sc{constructor(t,e,n){super(t,e,n),this.key=il.fromName(n.referenceValue)}matches(t){const e=il.comparator(t.key,this.key);return this.matchesComparison(e)}}class uc extends sc{constructor(t,e){super(t,"in",e),this.keys=dc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fc extends sc{constructor(t,e){super(t,"not-in",e),this.keys=dc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>il.fromName(t.referenceValue)))}class pc extends sc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hl(e)&&Vl(e.arrayValue,this.value)}}class gc extends sc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Vl(this.value.arrayValue,e)}}class mc extends sc{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Vl(this.value.arrayValue,e)}}class yc extends sc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Vl(this.value.arrayValue,t)))}}
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
     */class vc{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.le=null}}function wc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new vc(t,e,n,s,i,r,o)}function bc(t){const e=Pa(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ac(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),pl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Bl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Bl(t))).join(",")),e.le=t}return e.le}function Ec(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ec(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zl(t.startAt,e.startAt)&&Zl(t.endAt,e.endAt)}
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
     */class kc{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function _c(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function xc(t){const e=Pa(t);if(null===e.he){e.he=[];const t=new Set;for(const n of e.explicitOrderBy)e.he.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",s=function(t){let e=new kl(sl.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);s.forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new tc(s,n))})),t.has(sl.keyField().canonicalString())||e.he.push(new tc(sl.keyField(),n))}return e.he}function Tc(t){const e=Pa(t);return e.Pe||(e.Pe=function(t,e){if("F"===t.limitType)return wc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new tc(t.field,e)}));const n=t.endAt?new Yl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Yl(t.startAt.position,t.startAt.inclusive):null;return wc(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}(e,xc(t))),e.Pe}function Sc(t,e,n){return new kc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return Ec(Tc(t),Tc(e))&&t.limitType===e.limitType}function Ac(t){return`${bc(Tc(t))}|lt:${t.limitType}`}function Cc(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>cc(t))).join(", ")}]`),pl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Bl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Bl(t))).join(",")),`Target(${e})`}(Tc(t))}; limitType=${t.limitType})`}function Dc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):il.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of xc(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Jl(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,xc(t),e))&&!(t.endAt&&!function(t,e,n){const s=Jl(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,xc(t),e))}(t,e)}function Nc(t,e,n){const s=t.field.isKeyField()?il.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Ul(s,i):La()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return La()}}
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
     */class Rc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){yl(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return vl(this.inner)}size(){return this.innerSize}}
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
     */const Oc=new wl(il.comparator);function Lc(){return Oc}const Mc=new wl(il.comparator);function Pc(...t){let e=Mc;for(const n of t)e=e.insert(n.key,n);return e}function $c(t){let e=Mc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Fc(){return Uc()}function Vc(){return Uc()}function Uc(){return new Rc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const jc=new wl(il.comparator),Bc=new kl(il.comparator);function zc(...t){let e=Bc;for(const n of t)e=e.add(n);return e}const qc=new kl(Xa);
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
function Hc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function Kc(t){return{integerValue:""+t}}function Gc(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Kc(e):Hc(t,e)}
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
     */class Qc{constructor(){this._=void 0}}function Wc(t,e,n){return t instanceof Jc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Nl(e)&&(e=Rl(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Zc?th(t,e):t instanceof eh?nh(t,e):function(t,e){const n=Yc(t,e),s=ih(n)+ih(t.Te);return ql(n)&&ql(t.Te)?Kc(s):Hc(t.serializer,s)}(t,e)}function Xc(t,e,n){return t instanceof Zc?th(t,e):t instanceof eh?nh(t,e):n}function Yc(t,e){return t instanceof sh?function(t){return ql(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Jc extends Qc{}class Zc extends Qc{constructor(t){super(),this.elements=t}}function th(t,e){const n=rh(e);for(const e of t.elements)n.some((t=>Fl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class eh extends Qc{constructor(t){super(),this.elements=t}}function nh(t,e){let n=rh(e);for(const e of t.elements)n=n.filter((t=>!Fl(t,e)));return{arrayValue:{values:n}}}class sh extends Qc{constructor(t,e){super(),this.serializer=t,this.Te=e}}function ih(t){return Cl(t.integerValue||t.doubleValue)}function rh(t){return Hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class oh{constructor(t,e){this.version=t,this.transformResults=e}}class ah{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ah}static exists(t){return new ah(void 0,t)}static updateTime(t){return new ah(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function lh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ch{}function hh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new bh(t.key,ah.none()):new gh(t.key,t.data,ah.none());{const n=t.data,s=Ql.empty();let i=new kl(sl.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new mh(t.key,s,new xl(i.toArray()),ah.none())}}function uh(t,e,n){t instanceof gh?function(t,e,n){const s=t.value.clone(),i=vh(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof mh?function(t,e,n){if(!lh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=vh(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(yh(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function fh(t,e,n,s){return t instanceof gh?function(t,e,n,s){if(!lh(t.precondition,e))return n;const i=t.value.clone(),r=wh(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof mh?function(t,e,n,s){if(!lh(t.precondition,e))return n;const i=wh(t.fieldTransforms,s,e),r=e.data;return r.setAll(yh(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return lh(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function dh(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=Yc(s.transform,t||null);null!=i&&(null===n&&(n=Ql.empty()),n.set(s.field,i))}return n||null}function ph(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ya(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Zc&&e instanceof Zc||t instanceof eh&&e instanceof eh?Ya(t.elements,e.elements,Fl):t instanceof sh&&e instanceof sh?Fl(t.Te,e.Te):t instanceof Jc&&e instanceof Jc}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gh extends ch{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mh extends ch{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function vh(t,e,n){const s=new Map;Ma(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Xc(o,a,n[i]))}return s}function wh(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Wc(t,r,e))}return s}class bh extends ch{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends ch{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class kh{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&uh(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Vc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=hh(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Za.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),zc())}isEqual(t){return this.batchId===t.batchId&&Ya(this.mutations,t.mutations,((t,e)=>ph(t,e)))&&Ya(this.baseMutations,t.baseMutations,((t,e)=>ph(t,e)))}}class _h{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Ma(t.mutations.length===n.length);let s=jc;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new _h(t,e,n,s)}}
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
     */class xh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */var Th,Sh;(Sh=Th||(Th={}))[Sh.OK=0]="OK",Sh[Sh.CANCELLED=1]="CANCELLED",Sh[Sh.UNKNOWN=2]="UNKNOWN",Sh[Sh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sh[Sh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sh[Sh.NOT_FOUND=5]="NOT_FOUND",Sh[Sh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sh[Sh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sh[Sh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sh[Sh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sh[Sh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sh[Sh.ABORTED=10]="ABORTED",Sh[Sh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sh[Sh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sh[Sh.INTERNAL=13]="INTERNAL",Sh[Sh.UNAVAILABLE=14]="UNAVAILABLE",Sh[Sh.DATA_LOSS=15]="DATA_LOSS",
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
new xa([4294967295,4294967295],0);class Ih{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ah(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ch(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Dh(t,e){return Ah(t,e.toTimestamp())}function Nh(t){return Ma(!!t),Za.fromTimestamp(function(t){const e=Al(t);return new Ja(e.seconds,e.nanos)}(t))}function Rh(t,e){return function(t){return new el(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Oh(t,e){return Rh(t.databaseId,e.path)}function Lh(t){const e=function(t){const e=el.fromString(t);return Ma(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */(e)),e}(t);return 4===e.length?el.emptyPath():function(t){return Ma(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function Mh(t,e,n){return{name:Oh(t,e),fields:n.value.mapValue.fields}}function Ph(t){let e=Lh(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ma(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=$h(t);return e instanceof ic&&oc(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new tc(Fh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,pl(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Yl(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Yl(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new kc(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",l,c)}function $h(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fh(t.unaryFilter.field);return sc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fh(t.unaryFilter.field);return sc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fh(t.unaryFilter.field);return sc.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fh(t.unaryFilter.field);return sc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return La()}}(t):void 0!==t.fieldFilter?function(t){return sc.create(Fh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return La()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ic.create(t.compositeFilter.filters.map((t=>$h(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return La()}}(t.compositeFilter.op))}(t):La()}function Fh(t){return sl.fromServerFormat(t.fieldPath)}function Vh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class Uh{constructor(t){this.ct=t}}function jh(t){const e=Ph({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Sc(e,e.limit,"L"):e}
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
     */class Bh{constructor(){this._n=new zh}addToCollectionParentIndex(t,e){return this._n.add(e),ul.resolve()}getCollectionParents(t,e){return ul.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return ul.resolve()}deleteFieldIndex(t,e){return ul.resolve()}deleteAllFieldIndexes(t){return ul.resolve()}createTargetIndexes(t,e){return ul.resolve()}getDocumentsMatchingTarget(t,e){return ul.resolve(null)}getIndexType(t,e){return ul.resolve(0)}getFieldIndexes(t,e){return ul.resolve([])}getNextCollectionGroupToUpdate(t){return ul.resolve(null)}getMinOffset(t,e){return ul.resolve(ol.min())}getMinOffsetFromCollectionGroup(t,e){return ul.resolve(ol.min())}updateCollectionGroup(t,e,n){return ul.resolve()}updateIndexEntries(t,e){return ul.resolve()}}class zh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new kl(el.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new kl(el.comparator)).toArray()}}
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
     */class qh{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new qh(0)}static Bn(){return new qh(-1)}}
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
     */class Hh{constructor(){this.changes=new Rc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Xl.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ul.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
     */class Kh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class Gh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&fh(n.mutation,t,xl.empty(),Ja.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,zc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=zc()){const s=Fc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Pc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Fc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,zc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Lc();const r=Uc(),o=Uc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof mh)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),fh(o.mutation,e,o.mutation.getFieldMask(),Ja.now())):r.set(e.key,xl.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Kh(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Uc();let s=new wl(((t,e)=>t-e)),i=zc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||xl.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||zc()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,l=s.value,c=Vc();l.forEach((t=>{if(!i.has(t)){const s=hh(e.get(t),n.get(t));null!==s&&c.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ul.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,s){return function(t){return il.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):ul.resolve(Fc());let o=-1,a=i;return r.next((e=>ul.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?ul.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,zc()))).next((t=>({batchId:o,changes:$c(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new il(e)).next((t=>{let e=Pc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let r=Pc();return this.indexManager.getCollectionParents(t,i).next((o=>ul.forEach(o,(o=>{const a=function(t,e){return new kc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((t=>{i.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Xl.newInvalidDocument(s)))}));let n=Pc();return t.forEach(((t,s)=>{const r=i.get(t);void 0!==r&&fh(r.mutation,s,xl.empty(),Ja.now()),Dc(e,s)&&(n=n.insert(t,s))})),n}))}}
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
     */class Qh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return ul.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Nh(t.createTime)}}(e)),ul.resolve()}getNamedQuery(t,e){return ul.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:jh(t.bundledQuery),readTime:Nh(t.readTime)}}(e)),ul.resolve()}}
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
     */class Wh{constructor(){this.overlays=new wl(il.comparator),this.hr=new Map}getOverlay(t,e){return ul.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Fc();return ul.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ht(t,e,s)})),ul.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),ul.resolve()}getOverlaysForCollection(t,e,n){const s=Fc(),i=e.length+1,r=new il(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return ul.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new wl(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Fc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Fc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return ul.resolve(o)}ht(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new xh(e,n));let i=this.hr.get(e);void 0===i&&(i=zc(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}
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
     */class Xh{constructor(){this.Pr=new kl(Yh.Ir),this.Tr=new kl(Yh.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Yh(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new Yh(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new il(new el([])),n=new Yh(e,t),s=new Yh(e,t+1),i=[];return this.Tr.forEachInRange([n,s],(t=>{this.Ar(t),i.push(t.key)})),i}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new il(new el([])),n=new Yh(e,t),s=new Yh(e,t+1);let i=zc();return this.Tr.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Yh(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Yh{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return il.comparator(t.key,e.key)||Xa(t.pr,e.pr)}static Er(t,e){return Xa(t.pr,e.pr)||il.comparator(t.key,e.key)}}
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
     */class Jh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new kl(Yh.Ir)}checkEmpty(t){return ul.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new kh(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.wr=this.wr.add(new Yh(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ul.resolve(r)}lookupMutationBatch(t,e){return ul.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),i=s<0?0:s;return ul.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ul.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return ul.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Yh(e,0),s=new Yh(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,s],(t=>{const e=this.Sr(t.pr);i.push(e)})),ul.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new kl(Xa);return e.forEach((t=>{const e=new Yh(t,0),s=new Yh(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,s],(t=>{n=n.add(t.pr)}))})),ul.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;il.isDocumentKey(i)||(i=i.child(""));const r=new Yh(new il(i),0);let o=new kl(Xa);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.pr)),!0)}),r),ul.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ma(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return ul.forEach(e.mutations,(s=>{const i=new Yh(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new Yh(e,0),s=this.wr.firstAfterOrEqual(n);return ul.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,ul.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class Zh{constructor(t){this.vr=t,this.docs=new wl(il.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ul.resolve(n?n.document.mutableCopy():Xl.newInvalidDocument(e))}getEntries(t,e){let n=Lc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Xl.newInvalidDocument(t))})),ul.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Lc();const r=e.path,o=new il(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||al(rl(o),n)<=0||(s.has(o.key)||Dc(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ul.resolve(i)}getAllFromCollectionGroup(t,e,n,s){La()}Fr(t,e){return ul.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new tu(this)}getSize(t){return ul.resolve(this.size)}}class tu extends Hh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)})),ul.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
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
     */class eu{constructor(t){this.persistence=t,this.Mr=new Rc((t=>bc(t)),Ec),this.lastRemoteSnapshotVersion=Za.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xh,this.targetCount=0,this.Br=qh.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),ul.resolve()}getLastRemoteSnapshotVersion(t){return ul.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ul.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ul.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),ul.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new qh(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,ul.resolve()}updateTargetData(t,e){return this.qn(e),ul.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,ul.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Mr.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),ul.waitFor(i).next((()=>s))}getTargetCount(t){return ul.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return ul.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),ul.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),ul.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),ul.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return ul.resolve(n)}containsKey(t,e){return ul.resolve(this.Nr.containsKey(e))}}
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
     */class nu{constructor(t,e){this.Lr={},this.overlays={},this.kr=new dl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new eu(this),this.indexManager=new Bh,this.remoteDocumentCache=function(t){return new Zh(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new Uh(e),this.$r=new Qh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new Jh(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Da("MemoryPersistence","Starting transaction:",t);const s=new su(this.kr.next());return this.referenceDelegate.Ur(),n(s).next((t=>this.referenceDelegate.Wr(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gr(t,e){return ul.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class su extends cl{constructor(t){super(),this.currentSequenceNumber=t}}class iu{constructor(t){this.persistence=t,this.zr=new Xh,this.jr=null}static Hr(t){return new iu(t)}get Jr(){if(this.jr)return this.jr;throw La()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),ul.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),ul.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),ul.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ul.forEach(this.Jr,(n=>{const s=il.fromPath(n);return this.Yr(t,s).next((t=>{t||e.removeEntry(s,Za.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return ul.or([()=>ul.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
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
     */class ru{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=zc(),s=zc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new ru(t,e.fromCache,n,s)}}
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
     */class ou{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
     */class au{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ji(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Hi(t,e,s,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new ou;return this.Ji(t,e,n).next((s=>{if(i.result=s,this.Ui)return this.Yi(t,e,n,s.size)}))})).next((()=>i.result))}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(Ca()<=dn.DEBUG&&Da("QueryEngine","SDK will not create cache indexes for query:",Cc(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),ul.resolve()):(Ca()<=dn.DEBUG&&Da("QueryEngine","Query:",Cc(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(Ca()<=dn.DEBUG&&Da("QueryEngine","The SDK decides to create cache indexes for query:",Cc(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Tc(e))):ul.resolve())}ji(t,e){if(_c(e))return ul.resolve(null);let n=Tc(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Sc(e,null,"F"),n=Tc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=zc(...s);return this.zi.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Zi(e,s);return this.Xi(e,r,i,n.readTime)?this.ji(t,Sc(e,null,"F")):this.es(t,r,e,n)}))))})))))}Hi(t,e,n,s){return _c(e)||s.isEqual(Za.min())?ul.resolve(null):this.zi.getDocuments(t,n).next((i=>{const r=this.Zi(e,i);return this.Xi(e,r,n,s)?ul.resolve(null):(Ca()<=dn.DEBUG&&Da("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cc(e)),this.es(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Za.fromTimestamp(1e9===s?new Ja(n+1,0):new Ja(n,s));return new ol(i,il.empty(),e)}(s,-1)).next((t=>t)))}))}Zi(t,e){let n=new kl(function(t){return(e,n)=>{let s=!1;for(const i of xc(t)){const t=Nc(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}(t));return e.forEach(((e,s)=>{Dc(t,s)&&(n=n.add(s))})),n}Xi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,n){return Ca()<=dn.DEBUG&&Da("QueryEngine","Using full collection scan to execute query:",Cc(e)),this.zi.getDocumentsMatchingQuery(t,e,ol.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class lu{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new wl(Xa),this.rs=new Rc((t=>bc(t)),Ec),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function cu(t,e){const n=Pa(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=zc();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function hu(t,e){const n=Pa(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class uu{constructor(){this.activeTargetIds=qc}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fu{constructor(){this.no=new uu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new uu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class du{io(t){}shutdown(){}}
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
     */class pu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Da("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Da("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let gu=null;function mu(){return null===gu?gu=268435456+Math.round(2147483648*Math.random()):gu++,"0x"+gu.toString(16)
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
     */}const yu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class vu{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
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
     */const wu="WebChannelConnection";class bu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${s}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${s}`}get wo(){return!1}So(t,e,n,s,i){const r=mu(),o=this.bo(t,e);Da("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,s,i),this.Co(t,o,a,n).then((e=>(Da("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw Ra("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,i,r){return this.So(t,e,n,s,i)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ia,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=yu[t];return`${this.fo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,s){const i=mu();return new Promise(((r,o)=>{const a=new _a;a.setWithCredentials(!0),a.listenOnce(va.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ya.NO_ERROR:const e=a.getResponseJson();Da(wu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case ya.TIMEOUT:Da(wu,`RPC '${t}' ${i} timed out`),o(new Fa($a.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const n=a.getStatus();if(Da(wu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values($a).indexOf(e)>=0?e:$a.UNKNOWN}(e.status);o(new Fa(t,e.message))}else o(new Fa($a.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fa($a.UNAVAILABLE,"Connection failed."));break;default:La()}}finally{Da(wu,`RPC '${t}' ${i} completed.`)}}));const l=JSON.stringify(s);Da(wu,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",l,n,15)}))}Fo(t,e,n){const s=mu(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Go,o=qi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Da(wu,`Creating RPC '${t}' stream ${s}: ${c}`,a);const h=r.createWebChannel(c,a);let u=!1,f=!1;const d=new vu({lo:e=>{f?Da(wu,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(u||(Da(wu,`Opening RPC '${t}' stream ${s} transport.`),h.open(),u=!0),Da(wu,`RPC '${t}' stream ${s} sending:`,e),h.send(e))},ho:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,ka.EventType.OPEN,(()=>{f||Da(wu,`RPC '${t}' stream ${s} transport opened.`)})),p(h,ka.EventType.CLOSE,(()=>{f||(f=!0,Da(wu,`RPC '${t}' stream ${s} transport closed`),d.Vo())})),p(h,ka.EventType.ERROR,(e=>{f||(f=!0,Ra(wu,`RPC '${t}' stream ${s} transport errored:`,e),d.Vo(new Fa($a.UNAVAILABLE,"The operation could not be completed")))})),p(h,ka.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];Ma(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Da(wu,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Th[t];if(void 0!==e)return function(t){if(void 0===t)return Na("GRPC error has no .code"),$a.UNKNOWN;switch(t){case Th.OK:return $a.OK;case Th.CANCELLED:return $a.CANCELLED;case Th.UNKNOWN:return $a.UNKNOWN;case Th.DEADLINE_EXCEEDED:return $a.DEADLINE_EXCEEDED;case Th.RESOURCE_EXHAUSTED:return $a.RESOURCE_EXHAUSTED;case Th.INTERNAL:return $a.INTERNAL;case Th.UNAVAILABLE:return $a.UNAVAILABLE;case Th.UNAUTHENTICATED:return $a.UNAUTHENTICATED;case Th.INVALID_ARGUMENT:return $a.INVALID_ARGUMENT;case Th.NOT_FOUND:return $a.NOT_FOUND;case Th.ALREADY_EXISTS:return $a.ALREADY_EXISTS;case Th.PERMISSION_DENIED:return $a.PERMISSION_DENIED;case Th.FAILED_PRECONDITION:return $a.FAILED_PRECONDITION;case Th.ABORTED:return $a.ABORTED;case Th.OUT_OF_RANGE:return $a.OUT_OF_RANGE;case Th.UNIMPLEMENTED:return $a.UNIMPLEMENTED;case Th.DATA_LOSS:return $a.DATA_LOSS;default:return La()}}(e)}(e),i=o.message;void 0===n&&(n=$a.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.Vo(new Fa(n,i)),h.close()}else Da(wu,`RPC '${t}' stream ${s} received:`,i),d.mo(i)}})),p(o,wa.STAT_EVENT,(e=>{e.stat===ba?Da(wu,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===Ea&&Da(wu,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.Ro()}),0),d}}function Eu(){return"undefined"!=typeof document?document:null}
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
     */function ku(t){return new Ih(t,!0)}
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
     */class _u{constructor(t,e,n=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),s=Math.max(0,e-n);s>0&&Da("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
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
     */class xu{constructor(t,e,n,s,i,r,o,a){this.oi=t,this.$o=n,this.Uo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new _u(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===$a.RESOURCE_EXHAUSTED?(Na(e.toString()),Na("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===$a.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new Fa($a.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return Da("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(Da("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tu extends xu{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(Ma(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?(Ma(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Nh(t.updateTime):Nh(e);return n.isEqual(Za.min())&&(n=Nh(e)),new oh(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Nh(t.commitTime);return this.listener.T_(n,e)}return Ma(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=function(t){return new el(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof gh)n={update:Mh(t,e.key,e.value)};else if(e instanceof bh)n={delete:Oh(t,e.key)};else if(e instanceof mh)n={update:Mh(t,e.key,e.data),updateMask:Vh(e.fieldMask)};else{if(!(e instanceof Eh))return La();n={verify:Oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Jc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof eh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sh)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw La()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Dh(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:La()}(t,e.precondition)),n}(this.serializer,t)))};this.t_(e)}}
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
     */class Su extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new Fa($a.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.So(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$a.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fa($a.UNKNOWN,t.toString())}))}vo(t,e,n,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$a.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fa($a.UNKNOWN,t.toString())}))}terminate(){this.A_=!0}}class Iu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Na(e),this.g_=!1):Da("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
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
     */class Au{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((t=>{n.enqueueAndForget((async()=>{Nu(this)&&(Da("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Pa(t);e.v_.add(4),await Du(e),e.x_.set("Unknown"),e.v_.delete(4),await Cu(e)}(this))}))})),this.x_=new Iu(n,s)}}async function Cu(t){if(Nu(t))for(const e of t.F_)await e(!0)}async function Du(t){for(const e of t.F_)await e(!1)}function Nu(t){return 0===Pa(t).v_.size}async function Ru(t,e,n){if(!fl(e))throw e;t.v_.add(1),await Du(t),t.x_.set("Offline"),n||(n=()=>function(t){const e=Pa(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Da("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Cu(t)}))}function Ou(t,e){return e().catch((n=>Ru(t,n,e)))}async function Lu(t){const e=Pa(t),n=qu(e);let s=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Mu(e);)try{const t=await hu(e.localStore,s);if(null===t){0===e.D_.length&&n.Xo();break}s=t.batchId,Pu(e,t)}catch(t){await Ru(e,t)}$u(e)&&Fu(e)}function Mu(t){return Nu(t)&&t.D_.length<10}function Pu(t,e){t.D_.push(e);const n=qu(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function $u(t){return Nu(t)&&!qu(t).Ho()&&t.D_.length>0}function Fu(t){qu(t).start()}async function Vu(t){qu(t).d_()}async function Uu(t){const e=qu(t);for(const n of t.D_)e.I_(n.mutations)}async function ju(t,e,n){const s=t.D_.shift(),i=_h.from(s,e,n);await Ou(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Lu(t)}async function Bu(t,e){e&&qu(t).P_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return La();case $a.CANCELLED:case $a.UNKNOWN:case $a.DEADLINE_EXCEEDED:case $a.RESOURCE_EXHAUSTED:case $a.INTERNAL:case $a.UNAVAILABLE:case $a.UNAUTHENTICATED:return!1;case $a.INVALID_ARGUMENT:case $a.NOT_FOUND:case $a.ALREADY_EXISTS:case $a.PERMISSION_DENIED:case $a.FAILED_PRECONDITION:case $a.ABORTED:case $a.OUT_OF_RANGE:case $a.UNIMPLEMENTED:case $a.DATA_LOSS:return!0}}(t)&&t!==$a.ABORTED}(e.code)){const n=t.D_.shift();qu(t).Zo(),await Ou(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Lu(t)}}(t,e),$u(t)&&Fu(t)}async function zu(t,e){const n=Pa(t);n.asyncQueue.verifyOperationInProgress(),Da("RemoteStore","RemoteStore received new credentials");const s=Nu(n);n.v_.add(3),await Du(n),s&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Cu(n)}function qu(t){return t.B_||(t.B_=function(t,e,n){const s=Pa(t);return s.R_(),new Tu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Po:Vu.bind(null,t),To:Bu.bind(null,t),E_:Uu.bind(null,t),T_:ju.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await Lu(t)):(await t.B_.stop(),t.D_.length>0&&(Da("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
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
     */}class Hu{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Va,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Hu(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fa($a.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ku(t,e){if(Na("AsyncQueue",`${e}: ${t}`),fl(t))return new Fa($a.UNAVAILABLE,`${e}: ${t}`);throw t}class Gu{constructor(){this.queries=new Rc((t=>Ac(t)),Ic),this.onlineState="Unknown",this.Q_=new Set}}class Qu{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.ma={},this.fa=new Rc((t=>Ac(t)),Ic),this.ga=new Map,this.pa=new Set,this.ya=new wl(il.comparator),this.wa=new Map,this.Sa=new Xh,this.ba={},this.Da=new Map,this.Ca=qh.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return!0===this.va}}async function Wu(t,e,n){const s=function(t){const e=Pa(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ju.bind(null,e),e}(t);try{const t=await function(t,e){const n=Pa(t),s=Ja.now(),i=e.reduce(((t,e)=>t.add(e.key)),zc());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Lc(),l=zc();return n.os.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=dh(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new mh(t.key,e,Wl(e.value.mapValue),ah.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:$c(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ba[t.currentUser.toKey()];s||(s=new wl(Xa)),s=s.insert(e,n),t.ba[t.currentUser.toKey()]=s}(s,t.batchId,n),await ef(s,t.changes),await Lu(s.remoteStore)}catch(t){const e=Ku(t,"Failed to persist write");n.reject(e)}}function Xu(t,e,n){const s=Pa(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.fa.forEach(((n,s)=>{const i=s.view.K_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Pa(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.K_(e)&&(s=!0)})),s&&function(t){t.Q_.forEach((t=>{t.next()}))}(n)}(s.eventManager,e),t.length&&s.ma.u_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Yu(t,e){const n=Pa(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Pa(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=ul.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Ma(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=zc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);tf(n,s,null),Zu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ef(n,t)}catch(t){await hl(t)}}async function Ju(t,e,n){const s=Pa(t);try{const t=await function(t,e){const n=Pa(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ma(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);tf(s,e,n),Zu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ef(s,t)}catch(n){await hl(n)}}function Zu(t,e){(t.Da.get(e)||[]).forEach((t=>{t.resolve()})),t.Da.delete(e)}function tf(t,e,n){const s=Pa(t);let i=s.ba[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ba[s.currentUser.toKey()]=i}}async function ef(t,e,n){const s=Pa(t),i=[],r=[],o=[];s.fa.isEmpty()||(s.fa.forEach(((t,a)=>{o.push(s.Fa(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=ru.Ki(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.ma.u_(i),await async function(t,e){const n=Pa(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ul.forEach(e,(e=>ul.forEach(e.qi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>ul.forEach(e.Qi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!fl(t))throw t;Da("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.ns=n.ns.insert(e,i)}}}(s.localStore,r))}async function nf(t,e){const n=Pa(t);if(!n.currentUser.isEqual(e)){Da("SyncEngine","User change. New user:",e.toKey());const t=await cu(n.localStore,e);n.currentUser=e,function(t,e){t.Da.forEach((t=>{t.forEach((t=>{t.reject(new Fa($a.CANCELLED,e))}))})),t.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ef(n,t.us)}}class sf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ku(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,s){return new lu(t,e,n,s)}(this.persistence,new au,t.initialUser,this.serializer)}createPersistence(t){return new nu(iu.Hr,this.serializer)}createSharedClientState(t){return new fu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Xu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=nf.bind(null,this.syncEngine),await async function(t,e){const n=Pa(t);e?(n.v_.delete(2),await Cu(n)):e||(n.v_.add(2),await Du(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gu}createDatastore(t){const e=ku(t.databaseInfo.databaseId),n=function(t){return new bu(t)}(t.databaseInfo);return function(t,e,n,s){return new Su(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,s,i){return new Au(t,e,n,s,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Xu(this.syncEngine,t,0)),pu.C()?new pu:new du)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Qu(t,e,n,s,i,r);return o&&(a.va=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Pa(t);Da("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Du(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore)}}
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
     */class of{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Sa.UNAUTHENTICATED,this.clientId=Wa.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Da("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Da("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fa($a.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Va;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ku(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function af(t,e){t.asyncQueue.verifyOperationInProgress(),Da("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await cu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function lf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Da("FirestoreClient","Using user provided OfflineComponentProvider");try{await af(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===$a.FAILED_PRECONDITION||t.code===$a.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Ra("Error using user provided cache. Falling back to memory cache: "+n),await af(t,new sf)}}else Da("FirestoreClient","Using default OfflineComponentProvider"),await af(t,new sf);return t._offlineComponents}(t);Da("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>zu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>zu(e.remoteStore,n))),t._onlineComponents=e}function cf(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Da("FirestoreClient","Using user provided OnlineComponentProvider"),await lf(t,t._uninitializedComponentsProvider._online)):(Da("FirestoreClient","Using default OnlineComponentProvider"),await lf(t,new rf))),t._onlineComponents}(t).then((t=>t.syncEngine))}
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
     */function hf(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
     */}const uf=new Map;
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
     */function ff(t,e,n){if(!n)throw new Fa($a.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function df(t){if(!il.isDocumentKey(t))throw new Fa($a.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pf(t){if(il.isDocumentKey(t))throw new Fa($a.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":La()}function mf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Fa($a.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gf(t);throw new Fa($a.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class yf{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Fa($a.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Fa($a.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new Fa($a.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hf(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Fa($a.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Fa($a.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Fa($a.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vf{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fa($a.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Fa($a.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ja;switch(t.type){case"firstParty":return new Ha(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Fa($a.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=uf.get(t);e&&(Da("ComponentProvider","Removing Datastore"),uf.delete(t),e.terminate())}(this),Promise.resolve()}}function wf(t,e,n,s={}){var i;const r=(t=mf(t,vf))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&Ra("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Sa.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[We(JSON.stringify({alg:"none",type:"JWT"})),We(JSON.stringify(r)),""].join(".")}(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Fa($a.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Sa(r)}t._authCredentials=new Ba(new Ua(e,n))}}
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
     */class bf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new bf(this.firestore,t,this._query)}}class Ef{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ef(this.firestore,t,this._key)}}class kf extends bf{constructor(t,e,n){super(t,e,function(t){return new kc(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ef(this.firestore,null,new il(t))}withConverter(t){return new kf(this.firestore,t,this._path)}}
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
class _f{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new _u(this,"async_queue_retry"),this.su=()=>{const t=Eu();t&&Da("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=Eu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const e=Eu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise((()=>{}));const e=new Va;return this._u((()=>this.Xa&&this.ru?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Za.push(t),this.au())))}async au(){if(0!==this.Za.length){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!fl(t))throw t;Da("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo((()=>this.au()))}}_u(t){const e=this.Ya.then((()=>(this.nu=!0,t().catch((t=>{this.tu=t,this.nu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Na("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.nu=!1,t))))));return this.Ya=e,e}enqueueAfterDelay(t,e,n){this.ou(),this.iu.indexOf(t)>-1&&(e=0);const s=Hu.createAndSchedule(this,t,e,n,(t=>this.uu(t)));return this.eu.push(s),s}ou(){this.tu&&La()}verifyOperationInProgress(){}async cu(){let t;do{t=this.Ya,await t}while(t!==this.Ya)}lu(t){for(const e of this.eu)if(e.timerId===t)return!0;return!1}hu(t){return this.cu().then((()=>{this.eu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.eu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.cu()}))}Pu(t){this.iu.push(t)}uu(t){const e=this.eu.indexOf(t);this.eu.splice(e,1)}}class xf extends vf{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new _f,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tf(this),this._firestoreClient.terminate()}}function Tf(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new Ll(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hf(s.experimentalLongPollingOptions),s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new of(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
     */class Sf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sf(Sl.fromBase64String(t))}catch(t){throw new Fa($a.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Sf(Sl.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class If{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Fa($a.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sl(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Af{constructor(t){this._methodName=t}}
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
     */class Cf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Fa($a.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Fa($a.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Xa(this._lat,t._lat)||Xa(this._long,t._long)}}
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
     */const Df=/^__.*__$/;class Nf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mh(t,this.data,this.fieldMask,e,this.fieldTransforms):new gh(t,this.data,e,this.fieldTransforms)}}function Rf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw La()}}class Of{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Of(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Eu({path:n,Au:!1});return s.Ru(t),s}Vu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Eu({path:n,Au:!1});return s.Iu(),s}mu(t){return this.Eu({path:void 0,Au:!0})}fu(t){return zf(t,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Iu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ru(this.path.get(t))}Ru(t){if(0===t.length)throw this.fu("Document fields must not be empty");if(Rf(this.Tu)&&Df.test(t))throw this.fu('Document fields cannot begin and end with "__"')}}class Lf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ku(t)}yu(t,e,n,s=!1){return new Of({Tu:t,methodName:e,pu:n,path:sl.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new Lf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pf(t,e,n,s,i,r={}){const o=t.yu(r.merge||r.mergeFields?2:0,e,n,i);Uf("Data must be an object, but it was:",o,s);const a=Ff(s,o);let l,c;if(r.merge)l=new xl(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=jf(e,s,n);if(!o.contains(i))throw new Fa($a.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);qf(t,i)||t.push(i)}l=new xl(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Nf(new Ql(a),l,c)}function $f(t,e){if(Vf(t=ln(t)))return Uf("Unsupported field value:",e,t),Ff(t,e);if(t instanceof Af)return function(t,e){if(!Rf(e.Tu))throw e.fu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&4!==e.Tu)throw e.fu("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=$f(i,e.mu(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ln(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Gc(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ja.fromDate(t);return{timestampValue:Ah(e.serializer,n)}}if(t instanceof Ja){const n=new Ja(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ah(e.serializer,n)}}if(t instanceof Cf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sf)return{bytesValue:Ch(e.serializer,t._byteString)};if(t instanceof Ef){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.fu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Rh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fu(`Unsupported field value: ${gf(t)}`)}(t,e)}function Ff(t,e){const n={};return vl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yl(t,((t,s)=>{const i=$f(s,e.du(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Vf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ja||t instanceof Cf||t instanceof Sf||t instanceof Ef||t instanceof Af)}function Uf(t,e,n){if(!Vf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=gf(n);throw"an object"===s?e.fu(t+" a custom object"):e.fu(t+" "+s)}}function jf(t,e,n){if((e=ln(e))instanceof If)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Bf)>=0)throw zf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new If(...e.split("."))._internalPath}catch(s){throw zf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw zf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bf=new RegExp("[~\\*/\\[\\]]");function zf(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new Fa($a.INVALID_ARGUMENT,a+t+l)}function qf(t,e){return t.some((t=>t.isEqual(e)))}
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
     */function Hf(t,e){const n=mf(t.firestore,xf),s=function(t,e,...n){if(t=ln(t),1===arguments.length&&(e=Wa.V()),ff("doc","path",e),t instanceof vf){const s=el.fromString(e,...n);return df(s),new Ef(t,null,new il(s))}{if(!(t instanceof Ef||t instanceof kf))throw new Fa($a.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(el.fromString(e,...n));return df(s),new Ef(t.firestore,t instanceof kf?t.converter:null,new il(s))}}(t),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e);return function(t,e){return function(t,e){const n=new Va;return t.asyncQueue.enqueueAndForget((async()=>Wu(await cf(t),e,n))),n.promise}(function(t){return t._firestoreClient||Tf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[Pf(Mf(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,ah.exists(!1))]).then((()=>s))}!function(t,e=!0){!function(t){Ia=t}("10.5.0"),Hn(new cn("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new xf(new za(t.getProvider("auth-internal")),new Ga(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Fa($a.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Wn(Ta,"4.3.0",t),Wn(Ta,"4.3.0","esm2017")}();const Kf=function(t,e){const n="object"==typeof t?t:function(t=Un){const e=Bn.get(t);if(!e&&t===Un&&tn())return Qn();if(!e)throw Kn.create("no-app",{appName:t});return e}(),s="string"==typeof t?t:e||"(default)",i=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=Ze("firestore");t&&wf(i,...t)}return i}(Qn({apiKey:"AIzaSyB7oEQf-NoeZqsAdTLQAgWo84m3I1KnAZI",authDomain:"esplanade-46a07.firebaseapp.com",projectId:"esplanade-46a07",storageBucket:"esplanade-46a07.appspot.com",messagingSenderId:"803109975262",appId:"1:803109975262:web:f39f8e10520a6b6eb23e4f",measurementId:"1:803109975262:web:f39f8e10520a6b6eb23e4f"}));function Gf(t,{delay:n=0,duration:s=400,easing:i=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:i,css:t=>"opacity: "+t*r}}const Qf=[];function Wf(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Xf={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function Yf(t){Xf=t}const Jf=/[&<>"']/,Zf=new RegExp(Jf.source,"g"),td=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ed=new RegExp(td.source,"g"),nd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sd=t=>nd[t];function id(t,e){if(e){if(Jf.test(t))return t.replace(Zf,sd)}else if(td.test(t))return t.replace(ed,sd);return t}const rd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;const od=/(^|[^\[])\^/g;function ad(t,e){t="string"==typeof t?t:t.source,e=e||"";const n={replace:(e,s)=>(s=(s="object"==typeof s&&"source"in s?s.source:s).replace(od,"$1"),t=t.replace(e,s),n),getRegex:()=>new RegExp(t,e)};return n}function ld(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch(t){return null}return t}const cd={exec:()=>null};function hd(t,e){const n=t.replace(/\|/g,((t,e,n)=>{let s=!1,i=e;for(;--i>=0&&"\\"===n[i];)s=!s;return s?"|":" |"})).split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function ud(t,e,n){const s=t.length;if(0===s)return"";let i=0;for(;i<s;){const r=t.charAt(s-i-1);if(r!==e||n){if(r===e||!n)break;i++}else i++}return t.slice(0,s-i)}function fd(t,e,n,s){const i=e.href,r=e.title?id(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if("!"!==t[0].charAt(0)){s.state.inLink=!0;const t={type:"link",raw:n,href:i,title:r,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,t}return{type:"image",raw:n,href:i,title:r,text:id(o)}}class dd{options;rules;lexer;constructor(t){this.options=t||Xf}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:ud(t,"\n")}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const t=e[0],n=function(t,e){const n=t.match(/^(\s+)(?:```)/);if(null===n)return e;const s=n[1];return e.split("\n").map((t=>{const e=t.match(/^\s+/);if(null===e)return t;const[n]=e;return n.length>=s.length?t.slice(s.length):t})).join("\n")}(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:n}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let t=e[2].trim();if(/#$/.test(t)){const e=ud(t,"#");this.options.pedantic?t=e.trim():e&&!/ $/.test(e)||(t=e.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const t=ud(e[0].replace(/^ *>[ \t]?/gm,""),"\n"),n=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(t);return this.lexer.state.top=n,{type:"blockquote",raw:e[0],tokens:s,text:t}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`);let o="",a="",l=!1;for(;t;){let n=!1;if(!(e=r.exec(t)))break;if(this.rules.block.hr.test(t))break;o=e[0],t=t.substring(o.length);let s=e[2].split("\n",1)[0].replace(/^\t+/,(t=>" ".repeat(3*t.length))),c=t.split("\n",1)[0],h=0;this.options.pedantic?(h=2,a=s.trimStart()):(h=e[2].search(/[^ ]/),h=h>4?1:h,a=s.slice(h),h+=e[1].length);let u=!1;if(!s&&/^ *$/.test(c)&&(o+=c+"\n",t=t.substring(c.length+1),n=!0),!n){const e=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,h-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:\`\`\`|~~~)`),r=new RegExp(`^ {0,${Math.min(3,h-1)}}#`);for(;t;){const l=t.split("\n",1)[0];if(c=l,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),i.test(c))break;if(r.test(c))break;if(e.test(c))break;if(n.test(t))break;if(c.search(/[^ ]/)>=h||!c.trim())a+="\n"+c.slice(h);else{if(u)break;if(s.search(/[^ ]/)>=4)break;if(i.test(s))break;if(r.test(s))break;if(n.test(s))break;a+="\n"+c}u||c.trim()||(u=!0),o+=l+"\n",t=t.substring(l.length+1),s=c.slice(h)}}i.loose||(l?i.loose=!0:/\n *\n *$/.test(o)&&(l=!0));let f,d=null;this.options.gfm&&(d=/^\[[ xX]\] /.exec(a),d&&(f="[ ] "!==d[0],a=a.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!d,checked:f,loose:!1,text:a,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=a.trimEnd(),i.raw=i.raw.trimEnd();for(let t=0;t<i.items.length;t++)if(this.lexer.state.top=!1,i.items[t].tokens=this.lexer.blockTokens(i.items[t].text,[]),!i.loose){const e=i.items[t].tokens.filter((t=>"space"===t.type)),n=e.length>0&&e.some((t=>/\n.*\n/.test(t.raw)));i.loose=n}if(i.loose)for(let t=0;t<i.items.length;t++)i.items[t].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e){return{type:"html",block:!0,raw:e[0],pre:"pre"===e[1]||"script"===e[1]||"style"===e[1],text:e[0]}}}def(t){const e=this.rules.block.def.exec(t);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),n=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:s}}}table(t){const e=this.rules.block.table.exec(t);if(e){if(!/[:|]/.test(e[2]))return;const t={type:"table",raw:e[0],header:hd(e[1]).map((t=>({text:t,tokens:[]}))),align:e[2].replace(/^\||\| *$/g,"").split("|"),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(t.header.length===t.align.length){let e,n,s,i,r=t.align.length;for(e=0;e<r;e++){const n=t.align[e];n&&(/^ *-+: *$/.test(n)?t.align[e]="right":/^ *:-+: *$/.test(n)?t.align[e]="center":/^ *:-+ *$/.test(n)?t.align[e]="left":t.align[e]=null)}for(r=t.rows.length,e=0;e<r;e++)t.rows[e]=hd(t.rows[e],t.header.length).map((t=>({text:t,tokens:[]})));for(r=t.header.length,n=0;n<r;n++)t.header[n].tokens=this.lexer.inline(t.header[n].text);for(r=t.rows.length,n=0;n<r;n++)for(i=t.rows[n],s=0;s<i.length;s++)i[s].tokens=this.lexer.inline(i[s].text);return t}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const t="\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:id(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const e=ud(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{const t=function(t,e){if(-1===t.indexOf(e[1]))return-1;let n=0;for(let s=0;s<t.length;s++)if("\\"===t[s])s++;else if(t[s]===e[0])n++;else if(t[s]===e[1]&&(n--,n<0))return s;return-1}(e[2],"()");if(t>-1){const n=(0===e[0].indexOf("!")?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,n).trim(),e[3]=""}}let n=e[2],s="";if(this.options.pedantic){const t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);t&&(n=t[1],s=t[3])}else s=e[3]?e[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(t)?n.slice(1):n.slice(1,-1)),fd(e,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:s?s.replace(this.rules.inline._escapes,"$1"):s},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let t=(n[2]||n[1]).replace(/\s+/g," ");if(t=e[t.toLowerCase()],!t){const t=n[0].charAt(0);return{type:"text",raw:t,text:t}}return fd(n,t,n[0],this.lexer)}}emStrong(t,e,n=""){let s=this.rules.inline.emStrong.lDelim.exec(t);if(!s)return;if(s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...s[0]].length-1;let i,r,o=n,a=0;const l="*"===s[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,e=e.slice(-1*t.length+n);null!=(s=l.exec(e));){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(r=[...i].length,s[3]||s[4]){o+=r;continue}if((s[5]||s[6])&&n%3&&!((n+r)%3)){a+=r;continue}if(o-=r,o>0)continue;r=Math.min(r,r+o+a);const e=[...s[0]][0].length,l=t.slice(0,n+s.index+e+r);if(Math.min(n,r)%2){const t=l.slice(1,-1);return{type:"em",raw:l,text:t,tokens:this.lexer.inlineTokens(t)}}const c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let t=e[2].replace(/\n/g," ");const n=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return n&&s&&(t=t.substring(1,t.length-1)),t=id(t,!0),{type:"codespan",raw:e[0],text:t}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let t,n;return"@"===e[2]?(t=id(e[1]),n="mailto:"+t):(t=id(e[1]),n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let t,n;if("@"===e[2])t=id(e[0]),n="mailto:"+t;else{let s;do{s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0]}while(s!==e[0]);t=id(e[0]),n="www."===e[1]?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let t;return t=this.lexer.state.inRawBlock?e[0]:id(e[0]),{type:"text",raw:e[0],text:t}}}}const pd={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:cd,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};pd.def=ad(pd.def).replace("label",pd._label).replace("title",pd._title).getRegex(),pd.bullet=/(?:[*+-]|\d{1,9}[.)])/,pd.listItemStart=ad(/^( *)(bull) */).replace("bull",pd.bullet).getRegex(),pd.list=ad(pd.list).replace(/bull/g,pd.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+pd.def.source+")").getRegex(),pd._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pd._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,pd.html=ad(pd.html,"i").replace("comment",pd._comment).replace("tag",pd._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pd.lheading=ad(pd.lheading).replace(/bull/g,pd.bullet).getRegex(),pd.paragraph=ad(pd._paragraph).replace("hr",pd.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pd._tag).getRegex(),pd.blockquote=ad(pd.blockquote).replace("paragraph",pd.paragraph).getRegex(),pd.normal={...pd},pd.gfm={...pd.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},pd.gfm.table=ad(pd.gfm.table).replace("hr",pd.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pd._tag).getRegex(),pd.gfm.paragraph=ad(pd._paragraph).replace("hr",pd.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",pd.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pd._tag).getRegex(),pd.pedantic={...pd.normal,html:ad("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",pd._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cd,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ad(pd.normal._paragraph).replace("hr",pd.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",pd.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const gd={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:cd,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:cd,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/,_punctuation:"\\p{P}$+<=>`^|~"};gd.punctuation=ad(gd.punctuation,"u").replace(/punctuation/g,gd._punctuation).getRegex(),gd.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,gd.anyPunctuation=/\\[punct]/g,gd._escapes=/\\([punct])/g,gd._comment=ad(pd._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),gd.emStrong.lDelim=ad(gd.emStrong.lDelim,"u").replace(/punct/g,gd._punctuation).getRegex(),gd.emStrong.rDelimAst=ad(gd.emStrong.rDelimAst,"gu").replace(/punct/g,gd._punctuation).getRegex(),gd.emStrong.rDelimUnd=ad(gd.emStrong.rDelimUnd,"gu").replace(/punct/g,gd._punctuation).getRegex(),gd.anyPunctuation=ad(gd.anyPunctuation,"gu").replace(/punct/g,gd._punctuation).getRegex(),gd._escapes=ad(gd._escapes,"gu").replace(/punct/g,gd._punctuation).getRegex(),gd._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,gd._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,gd.autolink=ad(gd.autolink).replace("scheme",gd._scheme).replace("email",gd._email).getRegex(),gd._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,gd.tag=ad(gd.tag).replace("comment",gd._comment).replace("attribute",gd._attribute).getRegex(),gd._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,gd._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,gd._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,gd.link=ad(gd.link).replace("label",gd._label).replace("href",gd._href).replace("title",gd._title).getRegex(),gd.reflink=ad(gd.reflink).replace("label",gd._label).replace("ref",pd._label).getRegex(),gd.nolink=ad(gd.nolink).replace("ref",pd._label).getRegex(),gd.reflinkSearch=ad(gd.reflinkSearch,"g").replace("reflink",gd.reflink).replace("nolink",gd.nolink).getRegex(),gd.normal={...gd},gd.pedantic={...gd.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ad(/^!?\[(label)\]\((.*?)\)/).replace("label",gd._label).getRegex(),reflink:ad(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",gd._label).getRegex()},gd.gfm={...gd.normal,escape:ad(gd.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},gd.gfm.url=ad(gd.gfm.url,"i").replace("email",gd.gfm._extended_email).getRegex(),gd.breaks={...gd.gfm,br:ad(gd.br).replace("{2,}","*").getRegex(),text:ad(gd.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class md{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Xf,this.options.tokenizer=this.options.tokenizer||new dd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:pd.normal,inline:gd.normal};this.options.pedantic?(e.block=pd.pedantic,e.inline=gd.pedantic):this.options.gfm&&(e.block=pd.gfm,this.options.breaks?e.inline=gd.breaks:e.inline=gd.gfm),this.tokenizer.rules=e}static get rules(){return{block:pd,inline:gd}}static lex(t,e){return new md(e).lex(t)}static lexInline(t,e){return new md(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,"\n"),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,s,i,r;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,((t,e,n)=>e+"    ".repeat(n.length)));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s=>!!(n=s.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),1===n.raw.length&&e.length>0?e[e.length-1].raw+="\n":e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),s=e[e.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?e.push(n):(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),s=e[e.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(s.raw+="\n"+n.raw,s.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(i=t,this.options.extensions&&this.options.extensions.startBlock){let e=1/0;const n=t.slice(1);let s;this.options.extensions.startBlock.forEach((t=>{s=t.call({lexer:this},n),"number"==typeof s&&s>=0&&(e=Math.min(e,s))})),e<1/0&&e>=0&&(i=t.substring(0,e+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i)))s=e[e.length-1],r&&"paragraph"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(n),r=i.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),s=e[e.length-1],s&&"text"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):e.push(n);else if(t){const e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,s,i,r,o,a,l=t;if(this.tokens.links){const t=Object.keys(this.tokens.links);if(t.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(l));)t.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(l));)l=l.slice(0,r.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((s=>!!(n=s.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),s=e[e.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),s=e[e.length-1],s&&"text"===n.type&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,l,a))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t))){if(i=t,this.options.extensions&&this.options.extensions.startInline){let e=1/0;const n=t.slice(1);let s;this.options.extensions.startInline.forEach((t=>{s=t.call({lexer:this},n),"number"==typeof s&&s>=0&&(e=Math.min(e,s))})),e<1/0&&e>=0&&(i=t.substring(0,e+1))}if(n=this.tokenizer.inlineText(i))t=t.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,s=e[e.length-1],s&&"text"===s.type?(s.raw+=n.raw,s.text+=n.text):e.push(n);else if(t){const e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}else t=t.substring(n.raw.length),e.push(n);return e}}class yd{options;constructor(t){this.options=t||Xf}code(t,e,n){const s=(e||"").match(/^\S*/)?.[0];return t=t.replace(/\n$/,"")+"\n",s?'<pre><code class="language-'+id(s)+'">'+(n?t:id(t,!0))+"</code></pre>\n":"<pre><code>"+(n?t:id(t,!0))+"</code></pre>\n"}blockquote(t){return`<blockquote>\n${t}</blockquote>\n`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>\n`}hr(){return"<hr>\n"}list(t,e,n){const s=e?"ol":"ul";return"<"+s+(e&&1!==n?' start="'+n+'"':"")+">\n"+t+"</"+s+">\n"}listitem(t,e,n){return`<li>${t}</li>\n`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>\n`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"}tablerow(t){return`<tr>\n${t}</tr>\n`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const s=ld(t);if(null===s)return n;let i='<a href="'+(t=s)+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){const s=ld(t);if(null===s)return n;let i=`<img src="${t=s}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=">",i}text(t){return t}}class vd{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class wd{options;renderer;textRenderer;constructor(t){this.options=t||Xf,this.options.renderer=this.options.renderer||new yd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new vd}static parse(t,e){return new wd(e).parse(t)}static parseInline(t,e){return new wd(e).parseInline(t)}parse(t,e=!0){let n="";for(let s=0;s<t.length;s++){const i=t[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const t=i,e=this.options.extensions.renderers[t.type].call({parser:this},t);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(t.type)){n+=e||"";continue}}switch(i.type){case"space":continue;case"hr":n+=this.renderer.hr();continue;case"heading":{const t=i;n+=this.renderer.heading(this.parseInline(t.tokens),t.depth,this.parseInline(t.tokens,this.textRenderer).replace(rd,((t,e)=>"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")));continue}case"code":{const t=i;n+=this.renderer.code(t.text,t.lang,!!t.escaped);continue}case"table":{const t=i;let e="",s="";for(let e=0;e<t.header.length;e++)s+=this.renderer.tablecell(this.parseInline(t.header[e].tokens),{header:!0,align:t.align[e]});e+=this.renderer.tablerow(s);let r="";for(let e=0;e<t.rows.length;e++){const n=t.rows[e];s="";for(let e=0;e<n.length;e++)s+=this.renderer.tablecell(this.parseInline(n[e].tokens),{header:!1,align:t.align[e]});r+=this.renderer.tablerow(s)}n+=this.renderer.table(e,r);continue}case"blockquote":{const t=i,e=this.parse(t.tokens);n+=this.renderer.blockquote(e);continue}case"list":{const t=i,e=t.ordered,s=t.start,r=t.loose;let o="";for(let e=0;e<t.items.length;e++){const n=t.items[e],s=n.checked,i=n.task;let a="";if(n.task){const t=this.renderer.checkbox(!!s);r?n.tokens.length>0&&"paragraph"===n.tokens[0].type?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&"text"===n.tokens[0].tokens[0].type&&(n.tokens[0].tokens[0].text=t+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",text:t+" "}):a+=t+" "}a+=this.parse(n.tokens,r),o+=this.renderer.listitem(a,i,!!s)}n+=this.renderer.list(o,e,s);continue}case"html":{const t=i;n+=this.renderer.html(t.text,t.block);continue}case"paragraph":{const t=i;n+=this.renderer.paragraph(this.parseInline(t.tokens));continue}case"text":{let r=i,o=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<t.length&&"text"===t[s+1].type;)r=t[++s],o+="\n"+(r.tokens?this.parseInline(r.tokens):r.text);n+=e?this.renderer.paragraph(o):o;continue}default:{const t='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let s=0;s<t.length;s++){const i=t[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const t=this.options.extensions.renderers[i.type].call({parser:this},i);if(!1!==t||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=t||"";continue}}switch(i.type){case"escape":{const t=i;n+=e.text(t.text);break}case"html":{const t=i;n+=e.html(t.text);break}case"link":{const t=i;n+=e.link(t.href,t.title,this.parseInline(t.tokens,e));break}case"image":{const t=i;n+=e.image(t.href,t.title,t.text);break}case"strong":{const t=i;n+=e.strong(this.parseInline(t.tokens,e));break}case"em":{const t=i;n+=e.em(this.parseInline(t.tokens,e));break}case"codespan":{const t=i;n+=e.codespan(t.text);break}case"br":n+=e.br();break;case"del":{const t=i;n+=e.del(this.parseInline(t.tokens,e));break}case"text":{const t=i;n+=e.text(t.text);break}default:{const t='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return n}}class bd{options;constructor(t){this.options=t||Xf}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}const Ed=new class{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.#t(md.lex,wd.parse);parseInline=this.#t(md.lexInline,wd.parseInline);Parser=wd;Renderer=yd;TextRenderer=vd;Lexer=md;Tokenizer=dd;Hooks=bd;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const t=s;for(const s of t.header)n=n.concat(this.walkTokens(s.tokens,e));for(const s of t.rows)for(const t of s)n=n.concat(this.walkTokens(t.tokens,e));break}case"list":{const t=s;n=n.concat(this.walkTokens(t.items,e));break}default:{const t=s;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach((s=>{n=n.concat(this.walkTokens(t[s],e))})):t.tokens&&(n=n.concat(this.walkTokens(t.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach((t=>{const n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach((t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){const n=e.renderers[t.name];e.renderers[t.name]=n?function(...e){let s=t.renderer.apply(this,e);return!1===s&&(s=n.apply(this,e)),s}:t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");const n=e[t.level];n?n.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)})),n.extensions=e),t.renderer){const e=this.defaults.renderer||new yd(this.defaults);for(const n in t.renderer){const s=t.renderer[n],i=n,r=e[i];e[i]=(...t)=>{let n=s.apply(e,t);return!1===n&&(n=r.apply(e,t)),n||""}}n.renderer=e}if(t.tokenizer){const e=this.defaults.tokenizer||new dd(this.defaults);for(const n in t.tokenizer){const s=t.tokenizer[n],i=n,r=e[i];e[i]=(...t)=>{let n=s.apply(e,t);return!1===n&&(n=r.apply(e,t)),n}}n.tokenizer=e}if(t.hooks){const e=this.defaults.hooks||new bd;for(const n in t.hooks){const s=t.hooks[n],i=n,r=e[i];bd.passThroughHooks.has(n)?e[i]=t=>{if(this.defaults.async)return Promise.resolve(s.call(e,t)).then((t=>r.call(e,t)));const n=s.call(e,t);return r.call(e,n)}:e[i]=(...t)=>{let n=s.apply(e,t);return!1===n&&(n=r.apply(e,t)),n}}n.hooks=e}if(t.walkTokens){const e=this.defaults.walkTokens,s=t.walkTokens;n.walkTokens=function(t){let n=[];return n.push(s.call(this,t)),e&&(n=n.concat(e.call(this,t))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return md.lex(t,e??this.defaults)}parser(t,e){return wd.parse(t,e??this.defaults)}#t(t,e){return(n,s)=>{const i={...s},r={...this.defaults,...i};!0===this.defaults.async&&!1===i.async&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=this.#e(!!r.silent,!!r.async);if(null==n)return o(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then((e=>t(e,r))).then((t=>r.walkTokens?Promise.all(this.walkTokens(t,r.walkTokens)).then((()=>t)):t)).then((t=>e(t,r))).then((t=>r.hooks?r.hooks.postprocess(t):t)).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));const s=t(n,r);r.walkTokens&&this.walkTokens(s,r.walkTokens);let i=e(s,r);return r.hooks&&(i=r.hooks.postprocess(i)),i}catch(t){return o(t)}}}#e(t,e){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",t){const t="<p>An error occurred:</p><pre>"+id(n.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(n);throw n}}};function kd(t,e){return Ed.parse(t,e)}function _d(t,e,n){const s=t.slice();return s[27]=e[n],s}function xd(t){let e,n,s=kd.parse(t[27].content)+"";return{c(){e=new D(!1),n=_(),e.a=n},m(t,i){e.m(s,t,i),v(t,n,i)},p(t,n){4&n&&s!==(s=kd.parse(t[27].content)+"")&&e.p(s)},d(t){t&&w(n),t&&e.d()}}}function Td(t){let e,n,s=t[27].content.replace(/<a /g,'<a style="color: #d28cd1;" ')+"";return{c(){e=new D(!1),n=_(),e.a=n},m(t,i){e.m(s,t,i),v(t,n,i)},p(t,n){4&n&&s!==(s=t[27].content.replace(/<a /g,'<a style="color: #d28cd1;" ')+"")&&e.p(s)},d(t){t&&w(n),t&&e.d()}}}function Sd(t){let e,n,s,i,r,o,a,c="Assistant"===t[27].sender?"support_agent":"account_circle";function h(t,e){return t[27].isHtml?Td:xd}let u=h(t),f=u(t);return{c(){e=b("div"),n=b("span"),s=E(c),r=k(),o=b("div"),f.c(),T(n,"class",i="message-icon material-symbols-outlined "+(t[27]===t[6]?"active":"")+" svelte-13y2aaa"),T(o,"class",a=l(`message ${t[27].sender.toLowerCase()}`)+" svelte-13y2aaa"),I(o,"opacity",t[27].opacity),T(e,"class","message-row svelte-13y2aaa")},m(t,i){v(t,e,i),g(e,n),g(n,s),g(e,r),g(e,o),f.m(o,null)},p(t,e){4&e&&c!==(c="Assistant"===t[27].sender?"support_agent":"account_circle")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(s,c),68&e&&i!==(i="message-icon material-symbols-outlined "+(t[27]===t[6]?"active":"")+" svelte-13y2aaa")&&T(n,"class",i),u===(u=h(t))&&f?f.p(t,e):(f.d(1),f=u(t),f&&(f.c(),f.m(o,null))),4&e&&a!==(a=l(`message ${t[27].sender.toLowerCase()}`)+" svelte-13y2aaa")&&T(o,"class",a),4&e&&I(o,"opacity",t[27].opacity)},d(t){t&&w(e),f.d()}}}function Id(n){let s,o,a,l,c,u,f;return{c(){s=b("div"),o=b("span"),o.textContent="support_agent",a=k(),l=b("div"),l.textContent="Typing",T(o,"class","message-icon material-symbols-outlined svelte-13y2aaa"),T(l,"class","message-placeholder svelte-13y2aaa"),T(s,"class","message-row svelte-13y2aaa")},m(t,e){v(t,s,e),g(s,o),g(s,a),g(s,l),f=!0},i(n){f||(H((()=>{f&&(u&&u.end(1),c=function(n,s,i){const o={direction:"in"};let a,l,c=s(n,i,o),u=!1,f=0;function d(){a&&M(n,a)}function g(){const{delay:s=0,duration:i=300,easing:r=e,tick:o=t,css:g}=c||rt;g&&(a=L(n,0,1,i,s,r,g,f++)),o(0,1);const m=h()+s,y=m+i;l&&l.abort(),u=!0,H((()=>J(n,!0,"start"))),l=p((t=>{if(u){if(t>=y)return o(1,0),J(n,!0,"end"),d(),u=!1;if(t>=m){const e=r((t-m)/i);o(e,1-e)}}return u}))}let m=!1;return{start(){m||(m=!0,M(n),r(c)?(c=c(o),Y().then(g)):g())},invalidate(){m=!1},end(){u&&(d(),u=!1)}}}(l,Gf,{duration:200,delay:200}),c.start())})),f=!0)},o(n){c&&c.invalidate(),u=function(n,s,o){const a={direction:"out"};let l,c=s(n,o,a),u=!0;const f=tt;function d(){const{delay:s=0,duration:r=300,easing:o=e,tick:a=t,css:d}=c||rt;d&&(l=L(n,1,0,r,s,o,d));const g=h()+s,m=g+r;H((()=>J(n,!1,"start"))),p((t=>{if(u){if(t>=m)return a(0,1),J(n,!1,"end"),--f.r||i(f.c),!1;if(t>=g){const e=o((t-g)/r);a(1-e,e)}}return u}))}return f.r+=1,r(c)?Y().then((()=>{c=c(a),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),u&&(l&&M(n,l),u=!1)}}}(l,Gf,{duration:200,delay:0}),f=!1},d(t){t&&w(s),t&&u&&u.end()}}}function Ad(t){let e,n,s,r,o,a,c,h,u,f,d,p,m,y,E,_,I=t[2],C=[];for(let e=0;e<I.length;e+=1)C[e]=Sd(_d(t,I,e));let D=t[1]&&Id();return{c(){e=b("div"),n=b("div");for(let t=0;t<C.length;t+=1)C[t].c();s=k(),D&&D.c(),o=k(),a=b("div"),c=b("span"),c.textContent="attach_file",h=k(),u=b("textarea"),f=k(),d=b("button"),d.textContent="send",p=k(),m=b("input"),T(n,"class",r=l("messages "+(t[4]?"expanded":""))+" svelte-13y2aaa"),T(c,"class","material-symbols-outlined file-upload-icon svelte-13y2aaa"),T(u,"class","chat-input svelte-13y2aaa"),T(u,"placeholder","Start typing or upload a file..."),T(u,"rows","1"),T(d,"class","material-symbols-outlined send-button svelte-13y2aaa"),T(m,"id","file-upload"),T(m,"type","file"),T(m,"class","file-upload svelte-13y2aaa"),m.multiple=!0,T(a,"class","chat-input-container svelte-13y2aaa"),T(e,"class","chat-container svelte-13y2aaa"),A(e,"drag-over",t[3])},m(i,r){v(i,e,r),g(e,n);for(let t=0;t<C.length;t+=1)C[t]&&C[t].m(n,null);g(n,s),D&&D.m(n,null),g(e,o),g(e,a),g(a,c),g(a,h),g(a,u),t[17](u),S(u,t[0]),g(a,f),g(a,d),g(a,p),g(a,m),y=!0,E||(_=[x(u,"input",t[18]),x(u,"input",t[8]),x(u,"keydown",t[9]),x(d,"click",t[10]),x(m,"change",t[14]),x(e,"dragover",t[11]),x(e,"dragleave",t[12]),x(e,"drop",t[13])],E=!0)},p(t,[i]){if(68&i){let e;for(I=t[2],e=0;e<I.length;e+=1){const r=_d(t,I,e);C[e]?C[e].p(r,i):(C[e]=Sd(r),C[e].c(),C[e].m(n,s))}for(;e<C.length;e+=1)C[e].d(1);C.length=I.length}t[1]?D?2&i&&st(D,1):(D=Id(),D.c(),st(D,1),D.m(n,null)):D&&(et(),it(D,1,1,(()=>{D=null})),nt()),(!y||16&i&&r!==(r=l("messages "+(t[4]?"expanded":""))+" svelte-13y2aaa"))&&T(n,"class",r),1&i&&S(u,t[0]),(!y||8&i)&&A(e,"drag-over",t[3])},i(t){y||(st(D),y=!0)},o(t){it(D),y=!1},d(n){n&&w(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(C,n),D&&D.d(),t[17](null),E=!1,i(_)}}}function Cd(){const t=document.querySelector(".messages");t&&t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}function Dd(t){return/<[^>]+>/.test(t)}function Nd(e,n,s){let i,r;var l=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(i,r){function o(t){try{l(s.next(t))}catch(t){r(t)}}function a(t){try{l(s.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((s=s.apply(t,e||[])).next())}))};let{firstname:c}=n,{threadId:h}=n;const u=function(e,n=t){let s;const i=new Set;function r(t){if(o(e,t)&&(e=t,s)){const t=!Qf.length;for(const t of i)t[1](),Qf.push(t,e);if(t){for(let t=0;t<Qf.length;t+=2)Qf[t][0](Qf[t+1]);Qf.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const l=[o,a];return i.add(l),1===i.size&&(s=n(r)||t),o(e),()=>{i.delete(l),0===i.size&&s&&(s(),s=null)}}}}([]);a(e,u,(t=>s(2,r=t)));let f,d,p,g="",m=!1,y=!1,v=!1;var w;function b(){return l(this,void 0,void 0,(function*(){if(f){yield(q(),B);const t=200;s(5,f.style.height="auto",f),f.scrollHeight>t?(s(5,f.style.overflowY="auto",f),s(5,f.style.height=`${t}px`,f)):(s(5,f.style.overflowY="hidden",f),s(5,f.style.height=`${f.scrollHeight}px`,f))}}))}function E(){return l(this,void 0,void 0,(function*(){if(console.log("attempting to send message"),""!==g.trim()&&h){kd.parse(g),u.update((t=>{const e=t.map((t=>Object.assign(Object.assign({},t),{opacity:.7})));return e.push({sender:"User",content:g,opacity:1,isHtml:Dd(g)}),e})),s(0,g=""),s(1,y=!0);try{const t=yield fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({threadId:h,message:r[r.length-1].content})});if(t.ok){const{runId:e}=yield t.json();!function(t){l(this,void 0,void 0,(function*(){console.log("Requesting response from OpenAI...");try{const e=yield fetch(`${p}?threadId=${h}&runId=${t}`);if(e.ok){const t=yield e.json();if(t.reply&&t.reply.length>0){let e=t.reply[0].text.value;e=kd.parse(e),console.log("Received response from OpenAI:",e),s(1,y=!1),u.update((t=>{const n=t.map((t=>Object.assign(Object.assign({},t),{opacity:.7})));return n.push({sender:"Assistant",content:e,opacity:1,isHtml:Dd(e)}),n}))}else console.log("No reply in response.")}else console.error("Error fetching response:",e.status,e.statusText)}catch(t){console.error("Error requesting response:",t)}console.log("Finished requesting response.")}))}(e),console.log("Message sent, runId:",e)}else{console.error("Failed to send message, status:",t.status);const e=yield t.text();console.error("Response body:",e)}}catch(t){console.error("Error sending message:",t)}}else console.log("No input or threadId is missing")}))}return w=()=>l(void 0,void 0,void 0,(function*(){console.log("onMount"),f.focus(),u.set([{sender:"Assistant",content:`<p style="font-weight:bold;">Hi ${c},  It's Mason your digital consultant from Esplanade AI. How are you today?</p>`,opacity:1,isHtml:!0}]),console.log("production settings"),d="https://us-central1-esplanade-46a07.cloudfunctions.net/sendMessageToThread",p="https://us-central1-esplanade-46a07.cloudfunctions.net/getAssistantResponse"})),$().$$.on_mount.push(w),e.$$set=t=>{"firstname"in t&&s(15,c=t.firstname),"threadId"in t&&s(16,h=t.threadId)},e.$$.update=()=>{4&e.$$.dirty&&s(4,v=r.some((t=>"User"===t.sender))),4&e.$$.dirty&&s(6,i=r[r.length-1]),2&e.$$.dirty&&y&&setTimeout(Cd,200),4&e.$$.dirty&&r&&function(){const t=document.querySelector(".messages");t&&t.querySelectorAll("a").forEach((t=>{t.hasAttribute("target")||t.setAttribute("target","_blank")}))}(),1&e.$$.dirty&&b(),4&e.$$.dirty&&r.length&&"Assistant"===r[r.length-1].sender&&setTimeout((()=>{!function(){const t=document.querySelector(".messages").querySelectorAll(".message.assistant"),e=t[t.length-1];console.log(e),e&&e.scrollIntoView({behavior:"smooth",block:"nearest"})}(),console.log("running scroll into")}),500)},[g,y,r,m,v,f,i,u,b,function(t){"Enter"!==t.key||t.shiftKey?"Enter"===t.key&&t.shiftKey&&s(0,g+="\n"):(t.preventDefault(),E())},E,function(t){t.preventDefault(),s(3,m=!0)},function(t){t.preventDefault(),s(3,m=!1)},function(t){t.preventDefault(),s(3,m=!1);const e=t.dataTransfer.files;if(e.length>0)for(const t of e)u.update((e=>[...e,{sender:"User",content:`Dropped file: ${t.name}`,opacity:1,isHtml:!1}]))},function(t){const e=t.target.files;if(e.length>0)for(const t of e)u.update((e=>[...e,{sender:"User",content:`Selected file: ${t.name}`,opacity:1,isHtml:!1}]))},c,h,function(t){V[t?"unshift":"push"]((()=>{f=t,s(5,f)}))},function(){g=this.value,s(0,g)}]}kd.options=kd.setOptions=function(t){return Ed.setOptions(t),kd.defaults=Ed.defaults,Yf(kd.defaults),kd},kd.getDefaults=Wf,kd.defaults=Xf,kd.use=function(...t){return Ed.use(...t),kd.defaults=Ed.defaults,Yf(kd.defaults),kd},kd.walkTokens=function(t,e){return Ed.walkTokens(t,e)},kd.parseInline=Ed.parseInline,kd.Parser=wd,kd.parser=wd.parse,kd.Renderer=yd,kd.TextRenderer=vd,kd.Lexer=md,kd.lexer=md.lex,kd.Tokenizer=dd,kd.Hooks=bd,kd.parse=kd,kd.options,kd.setOptions,kd.use,kd.walkTokens,kd.parseInline,wd.parse,md.lex;class Rd extends ct{constructor(t){super(),lt(this,t,Nd,Ad,o,{firstname:15,threadId:16})}}function Od(t){let e,n;return e=new Rd({props:{firstname:t[1],threadId:t[2]}}),{c(){!function(t){t&&t.c()}(e.$$.fragment)},m(t,s){ot(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.firstname=t[1]),4&n&&(s.threadId=t[2]),e.$set(s)},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function Ld(e){let n,s,r,o,a,l;return{c(){n=b("div"),s=b("form"),r=b("div"),o=b("form"),o.innerHTML='<input type="text" name="fullname" placeholder="Full Name" required="" class="svelte-xbijpx"/> \n          <input type="tel" name="number" placeholder="Phone Number" required="" class="svelte-xbijpx"/> \n          <input type="email" name="email" placeholder="Email Address" required="" class="svelte-xbijpx"/> \n          <button type="submit" class="svelte-xbijpx">Instant Demonstration</button>',T(o,"class","svelte-xbijpx"),T(r,"class","contact-form svelte-xbijpx"),T(s,"class","svelte-xbijpx"),T(n,"class","contact-form svelte-xbijpx")},m(t,i){v(t,n,i),g(n,s),g(s,r),g(r,o),a||(l=[x(o,"submit",e[3]),x(s,"submit",e[3])],a=!0)},p:t,i:t,o:t,d(t){t&&w(n),a=!1,i(l)}}}function Md(e){let n,s,i,o,a,l,c,h,u,f,d,p,g,m,y,E,_;const x=[Ld,Od],S=[];function I(t,e){return t[0]?t[0]?1:-1:0}return~(u=I(e))&&(f=S[u]=x[u](e)),{c(){n=b("header"),n.innerHTML='<a href="index" class="svelte-xbijpx"><img src="/espWhite.png" alt="Your Logo" class="logo svelte-xbijpx"/></a>',s=k(),i=b("div"),i.textContent="Step into the future\n  with Esplanade AI. Revolutionise\n  your business operations and\n  experience unparalleled efficiency.",o=k(),a=b("div"),a.innerHTML='<video id="bgVideo" autoplay="" muted="" loop="" playsinline="" poster="tealPurple169-2.png" class="svelte-xbijpx"><source src="/siteBGcont2.mp4" type="video/mp4" class="svelte-xbijpx"/>\n    Your browser does not support the video tag.</video>',l=k(),c=b("div"),c.innerHTML='<a href="https://www.instagram.com/esplanade.ai/" class="svelte-xbijpx"><img src="/Instagram.png" alt="Instagram" class="svelte-xbijpx"/></a> \n  <a href="https://www.linkedin.com/company/esplanade-ai" class="svelte-xbijpx"><img src="/linkedin.png" alt="Linkedin" class="svelte-xbijpx"/></a>',h=k(),f&&f.c(),d=k(),p=b("div"),g=k(),m=b("footer"),m.innerHTML='<div class="footer-row svelte-xbijpx"><div class="footer-logo svelte-xbijpx"><img src="justLogoWhite.png" alt="Esplanade Logo" class="svelte-xbijpx"/></div> \n    <div class="address-contact svelte-xbijpx"><div class="svelte-xbijpx"><strong class="svelte-xbijpx">Address</strong> \n        <p class="svelte-xbijpx">Sydney, AUS</p></div> \n      <div class="svelte-xbijpx"><strong class="svelte-xbijpx">Contact</strong> \n        <p class="svelte-xbijpx">digital@esplanade.ai</p></div></div></div> \n\n  <div class="footer-divider svelte-xbijpx"></div> \n\n  <div class="footer-row svelte-xbijpx"><div class="svelte-xbijpx">© 2023 Esplanade.ai. All rights reserved.</div> \n    <div class="svelte-xbijpx"><a href="/terms-and-conditions" class="svelte-xbijpx">T&amp;Cs</a> \n      <a href="/privacy-policy" class="svelte-xbijpx">Privacy Policy</a></div></div>',T(n,"class","svelte-xbijpx"),T(i,"class","translucent-section centered-content large-text svelte-xbijpx"),T(a,"class","svelte-xbijpx"),T(c,"class","social-icons svelte-xbijpx"),T(p,"id","bpw-layout"),T(p,"class","svelte-xbijpx"),T(m,"class","svelte-xbijpx")},m(f,w){var b;v(f,n,w),v(f,s,w),v(f,i,w),v(f,o,w),v(f,a,w),v(f,l,w),v(f,c,w),v(f,h,w),~u&&S[u].m(f,w),v(f,d,w),v(f,p,w),v(f,g,w),v(f,m,w),y=!0,E||(b=e[4].call(null,i),_=b&&r(b.destroy)?b.destroy:t,E=!0)},p(t,[e]){let n=u;u=I(t),u===n?~u&&S[u].p(t,e):(f&&(et(),it(S[n],1,1,(()=>{S[n]=null})),nt()),~u?(f=S[u],f?f.p(t,e):(f=S[u]=x[u](t),f.c()),st(f,1),f.m(d.parentNode,d)):f=null)},i(t){y||(st(f),y=!0)},o(t){it(f),y=!1},d(t){t&&w(n),t&&w(s),t&&w(i),t&&w(o),t&&w(a),t&&w(l),t&&w(c),t&&w(h),~u&&S[u].d(t),t&&w(d),t&&w(p),t&&w(g),t&&w(m),E=!1,_()}}}function Pd(t,e,n){var s=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(i,r){function o(t){try{l(s.next(t))}catch(t){r(t)}}function a(t){try{l(s.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((s=s.apply(t,e||[])).next())}))};let i="",r=!1,o="",a="";const l=function(){const t=$();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=C(e,n,{cancelable:s});return i.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}();return[r,o,a,function(t){return s(this,void 0,void 0,(function*(){console.log("submit"),t.preventDefault();const e=yield fetch("https://us-central1-esplanade-46a07.cloudfunctions.net/startNewThread");if(e.ok){const t=yield e.json();n(2,a=t.threadId),console.log("Thread ID set:",a)}else console.error("Failed to start a new thread"),console.error("Response status:",e.status);var s;i=t.target.fullname.value,n(1,(s=i.split(" ")[0],o=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()));const c={fullname:t.target.fullname.value,number:t.target.number.value,email:t.target.email.value,threadId:a,date:Date.now()};console.log("data",c);try{console.log("try");const t=yield Hf(function(t,e,...n){if(t=ln(t),ff("collection","path",e),t instanceof vf){const s=el.fromString(e,...n);return pf(s),new kf(t,null,s)}{if(!(t instanceof Ef||t instanceof kf))throw new Fa($a.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(el.fromString(e,...n));return pf(s),new kf(t.firestore,null,s)}}(Kf,"contacts"),c);console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}n(0,r=!0),l("formSubmitted")}))},function(t){const e=t.innerText.trim().split(" "),n=Math.ceil(e.length/4),s=[];e.forEach(((t,i)=>{s.push(`<span style="opacity: 0">${t}</span>`),(i+1)%n==0&&i!==e.length-1&&s.push("<br>")})),t.innerHTML=s.join(" ");const i=[...t.children];be(i,{opacity:[0,1]},{duration:3,delay:ge(.3)}),setTimeout((()=>{i.forEach((t=>{const e=t.textContent.trim();("unparalleled"===e||e.includes("efficiency"))&&be(t,{color:"#d28cd1"},{duration:1})}))}),650*(.3*e.length+3))}]}return new class extends ct{constructor(t){super(),lt(this,t,Pd,Md,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
