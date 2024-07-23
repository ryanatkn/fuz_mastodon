import{I as W,v as Y,f as B,g as F,w as q,V as G,m as R,W as H,X as Z,Y as K,Z as Q,y as X,p as j,b as z,c as J}from"./runtime.CLjFoVp-.js";function ee(e){console.warn("hydration_mismatch")}const de=1,_e=2,he=4,pe=8,ve=16,me=64,Ee=1,ye=2,ge=4,Te=8,we=4,te=1,ne=2,L="[",re="[!",k="]",b={},Se=Symbol(),Ie=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],ae=["touchstart","touchmove","touchend"],Ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function be(e,t="exclude-on"){return e.endsWith("capture")?t=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let s=!1;function T(e){s=e}let a;function v(e){return a=e}function O(){return a=a.nextSibling}function Ce(e){s&&(a=e)}function Ne(){s&&O()}function Re(){for(var e=0,t=a;;){if(t.nodeType===8){var n=t.data;if(n===k){if(e===0)return t;e-=1}else(n===L||n===re)&&(e+=1)}var i=t.nextSibling;t.remove(),t=i}}var P,oe;function x(){if(P===void 0){P=window,oe=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function m(){return document.createTextNode("")}function Le(e){if(!s)return e.firstChild;var t=a.firstChild;return t===null&&(t=a.appendChild(m())),v(t),t}function Oe(e,t){if(!s){var n=e.firstChild;return n instanceof Comment&&n.data===""?n.nextSibling:n}if(t&&(a==null?void 0:a.nodeType)!==3){var i=m();return a==null||a.before(i),v(i),i}return a}function De(e,t=!1){if(!s)return e.nextSibling;var n=a.nextSibling,i=n.nodeType;if(t&&i!==3){var o=m();return n==null||n.before(o),v(o),o}return v(n),n}function ie(e){e.textContent=""}const U=new Set,C=new Set;function se(e,t,n,i){function o(r){if(i.capture||w.call(t,r),!r.cancelBubble)return n.call(this,r)}return e.startsWith("pointer")||e==="wheel"?Y(()=>{t.addEventListener(e,o,i)}):t.addEventListener(e,o,i),o}function Pe(e,t,n,i,o){var r={capture:i,passive:o},u=se(e,t,n,r);(t===document.body||t===window||t===document)&&W(()=>{t.removeEventListener(e,u,r)})}function Me(e){for(var t=0;t<e.length;t++)U.add(e[t]);for(var n of C)n(e)}function w(e){var D;var t=this,n=t.ownerDocument,i=e.type,o=((D=e.composedPath)==null?void 0:D.call(e))||[],r=o[0]||e.target,u=0,_=e.__root;if(_){var c=o.indexOf(_);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var E=o.indexOf(t);if(E===-1)return;c<=E&&(u=c)}if(r=o[u]||e.target,r!==t){B(e,"currentTarget",{configurable:!0,get(){return r||n}});try{for(var y,f=[];r!==null;){var h=r.parentNode||r.host||null;try{var l=r["__"+i];if(l!==void 0&&!r.disabled)if(F(l)){var[S,...I]=l;S.apply(r,[e,...I])}else l.call(r,e)}catch(A){y?f.push(A):y=A}if(e.cancelBubble||h===t||h===null)break;r=h}if(y){for(let A of f)queueMicrotask(()=>{throw A});throw y}}finally{e.__root=t,r=t}}}let d;function ue(){d=void 0}function He(e){let t=null,n=s;var i;if(s){for(t=a,d===void 0&&(d=document.head.firstChild);d!==null&&(d.nodeType!==8||d.data!==L);)d=d.nextSibling;d===null?T(!1):d=v(d.nextSibling)}s||(i=document.head.appendChild(m()));try{q(()=>e(i),G)}finally{n&&(T(!0),d=a,v(t))}}function V(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var n;(n=R).nodes??(n.nodes={start:e,end:t})}function ke(e,t){var n=(t&te)!==0,i=(t&ne)!==0,o,r=!e.startsWith("<!>");return()=>{if(s)return p(a,null),a;o||(o=V(r?e:"<!>"+e),n||(o=o.firstChild));var u=i?document.importNode(o,!0):o.cloneNode(!0);if(n){var _=u.firstChild,c=u.lastChild;p(_,c)}else p(u,u);return u}}function xe(e,t,n="svg"){var i=!e.startsWith("<!>"),o=`<${n}>${i?e:"<!>"+e}</${n}>`,r;return()=>{if(s)return p(a,null),a;if(!r){var u=V(o),_=u.firstChild;r=_.firstChild}var c=r.cloneNode(!0);return p(c,c),c}}function Ue(){if(!s){var e=m();return p(e,e),e}var t=a;return t.nodeType!==3&&(t.before(t=m()),v(t)),p(t,t),t}function Ve(){if(s)return p(a,null),a;var e=document.createDocumentFragment(),t=document.createComment(""),n=m();return e.append(t,n),p(t,n),e}function $e(e,t){if(s){R.nodes.end=a,O();return}e!==null&&e.before(t)}let M=!0;function We(e,t){(e.__t??(e.__t=e.nodeValue))!==t&&(e.nodeValue=e.__t=t)}function ce(e,t){const n=t.anchor??t.target.appendChild(m());return H(()=>$(e,{...t,anchor:n}),!1)}function Ye(e,t){t.intro=t.intro??!1;const n=t.target,i=s,o=a;try{return H(()=>{for(var r=n.firstChild;r&&(r.nodeType!==8||r.data!==L);)r=r.nextSibling;if(!r)throw b;T(!0),v(r),O();const u=$(e,{...t,anchor:r});if(a.nodeType!==8||a.data!==k)throw ee(),b;return T(!1),u},!1)}catch(r){if(r===b)return t.recover===!1&&Z(),x(),ie(n),T(!1),ce(e,t);throw r}finally{T(i),v(o),ue()}}const g=new Map;function $(e,{target:t,anchor:n,props:i={},events:o,context:r,intro:u=!0}){x();var _=new Set,c=f=>{for(var h=0;h<f.length;h++){var l=f[h];if(!_.has(l)){_.add(l);var S=ae.includes(l);t.addEventListener(l,w,{passive:S});var I=g.get(l);I===void 0?(document.addEventListener(l,w,{passive:S}),g.set(l,1)):g.set(l,I+1)}}};c(K(U)),C.add(c);var E=void 0,y=Q(()=>(X(()=>{if(r){j({});var f=J;f.c=r}o&&(i.$$events=o),s&&p(n,null),M=u,E=e(n,i)||{},M=!0,s&&(R.nodes.end=a),r&&z()}),()=>{for(var f of _){t.removeEventListener(f,w);var h=g.get(f);--h===0?(document.removeEventListener(f,w),g.delete(f)):g.set(f,h)}C.delete(c),N.delete(E)}));return N.set(E,y),E}let N=new WeakMap;function Be(e){const t=N.get(e);t==null||t()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{P as $,_e as A,me as B,ie as C,m as D,de as E,ve as F,pe as G,re as H,he as I,be as J,se as K,Me as L,Ae as M,Ie as N,M as O,ge as P,xe as Q,Ne as R,He as S,we as T,Se as U,Pe as V,oe as W,$e as a,We as b,Le as c,O as d,Re as e,Oe as f,v as g,s as h,T as i,a as j,Ee as k,ye as l,Te as m,ee as n,b as o,p,V as q,Ce as r,De as s,ke as t,Ve as u,Ye as v,ce as w,Be as x,Ue as y,k as z};