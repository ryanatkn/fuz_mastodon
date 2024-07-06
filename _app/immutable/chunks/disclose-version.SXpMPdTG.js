import{y as P,I as W,C as q,v as G,x as H,b as Z,X as K,Y as M,Z as Q,_ as X,$ as j,c as z,p as J,a as ee,D as ne}from"./runtime.uz1JI_-t.js";function te(e){console.warn("hydration_mismatch")}const he=1,pe=2,ve=4,me=8,Ee=16,ye=64,Te=1,ge=2,Ie=4,Ce=8,we=1,Ae=2,Se=4,k=1,re=2,A="[",$="]",ae="",Ne=`${$}!`,S={},be=Symbol(),Re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],oe=["touchstart","touchmove","touchend"],Oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function De(e,n="exclude-on"){return e.endsWith("capture")?n=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let d=!1;function w(e){d=e}let v=null,s;function U(e){v=e,s=e&&e[0]}function R(){return s.previousSibling??s}function g(e){if(e.nodeType!==8)return e;var n=e;if(n.data!==A)return e;for(var t=[],o=0;(n=n.nextSibling)!==null;){if(n.nodeType===8){var r=n.data;if(r===A)o+=1;else if(r[0]===$){if(o===0)return v=t,s=t[0],n;o-=1}}t.push(n)}throw te(),S}var D,ie;function Y(){if(D===void 0){D=window,ie=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function E(){return document.createTextNode("")}function Le(e){const n=e.firstChild;return d?n===null?e.appendChild(E()):g(n):n}function Pe(e,n){var a;if(!d){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}if(n&&(s==null?void 0:s.nodeType)!==3){var o=E(),r=P;return((a=r.nodes)==null?void 0:a.start)===s&&(r.nodes.start=o),s==null||s.before(o),o}return g(s)}function se(e,n=!1){var t=e.nextSibling;if(!d)return t;var o=t.nodeType;if(o===8&&t.data===ae)return se(t,n);if(n&&o!==3){var r=E();return t==null||t.before(r),r}return g(t)}function ue(e){e.textContent=""}function ce(e,n,t,o){function r(a){if(o.capture||T.call(n,a),!a.cancelBubble)return t.call(this,a)}return e.startsWith("pointer")||e==="wheel"?q(()=>{n.addEventListener(e,r,o)}):n.addEventListener(e,r,o),r}function He(e,n,t,o,r){var a={capture:o,passive:r},i=ce(e,n,t,a);(n===document.body||n===window||n===document)&&W(()=>{n.removeEventListener(e,i,a)})}function Me(e){for(var n=0;n<e.length;n++)V.add(e[n]);for(var t of N)t(e)}function T(e){var O;var n=this,t=n.ownerDocument,o=e.type,r=((O=e.composedPath)==null?void 0:O.call(e))||[],a=r[0]||e.target,i=0,_=e.__root;if(_){var u=r.indexOf(_);if(u!==-1&&(n===document||n===window)){e.__root=n;return}var c=r.indexOf(n);if(c===-1)return;u<=c&&(i=u)}if(a=r[i]||e.target,a!==n){G(e,"currentTarget",{configurable:!0,get(){return a||t}});try{for(var m,l=[];a!==null;){var y=a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(H(h)){var[I,...x]=h;I.apply(a,[e,...x])}else h.call(a,e)}catch(C){m?l.push(C):m=C}if(e.cancelBubble||y===n||y===null)break;a=y}if(m){for(let C of l)queueMicrotask(()=>{throw C});throw m}}finally{e.__root=n,a=n}}}let f;function le(){f=void 0}function ke(e){let n=null,t=d;var o;if(d){for(n=v,f===void 0&&(f=document.head.firstChild);f.nodeType!==8||f.data!==A;)f=f.nextSibling;f=g(f),f=f.nextSibling}else o=document.head.appendChild(E());try{Z(()=>e(o),K)}finally{t&&U(n)}}const V=new Set,N=new Set;let L=!0;function $e(e,n){(e.__t??(e.__t=e.nodeValue))!==n&&(e.nodeValue=e.__t=n)}function fe(e,n){const t=n.anchor??n.target.appendChild(E());return M(()=>B(e,{...n,anchor:t}),!1)}function Ue(e,n){const t=n.target,o=v;try{return M(()=>{w(!0);for(var r=t.firstChild;r&&(r.nodeType!==8||r.data!==A);)r=r.nextSibling;if(!r)throw S;const a=g(r),i=B(e,{...n,anchor:a});return w(!1),i},!1)}catch(r){if(r===S)return n.recover===!1&&Q(),Y(),ue(t),w(!1),fe(e,n);throw r}finally{w(!!o),U(o),le()}}function B(e,{target:n,anchor:t,props:o={},events:r,context:a,intro:i=!1}){Y();const _=new Set,u=l=>{for(let y=0;y<l.length;y++){const h=l[y],I=oe.includes(h);_.has(h)||(_.add(h),n.addEventListener(h,T,{passive:I}),document.addEventListener(h,T,{passive:I}))}};u(X(V)),N.add(u);let c;const m=j(()=>(z(()=>{if(a){J({});var l=ne;l.c=a}r&&(o.$$events=r),L=i,c=e(t,o)||{},L=!0,a&&ee()}),()=>{for(const l of _)n.removeEventListener(l,T),document.removeEventListener(l,T);N.delete(u),b.delete(c)}));return b.set(c,m),c}let b=new WeakMap;function Ye(e){const n=b.get(e);n==null||n()}function F(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Ve(e){if(H(e))for(var n=0;n<e.length;n++){var t=e[n];t.isConnected&&t.remove()}else e.isConnected&&e.remove()}function p(e,n){var t;(t=P).nodes??(t.nodes={start:e,end:n})}function Be(e,n){var t=(n&k)!==0,o=(n&re)!==0,r,a=!e.startsWith("<!>");return()=>{if(d)return p(R(),v[v.length-1]),s;r||(r=F(a?e:"<!>"+e),t||(r=r.firstChild));var i=o?document.importNode(r,!0):r.cloneNode(!0);if(t){var _=i.firstChild,u=i.lastChild;p(_,u)}else p(i,i);return i}}function Fe(e,n,t="svg"){var o=!e.startsWith("<!>"),r=(n&k)!==0,a=`<${t}>${o?e:"<!>"+e}</${t}>`,i;return()=>{if(d)return p(R(),v[v.length-1]),s;if(!i){var _=F(a),u=_.firstChild;if(r)for(i=document.createDocumentFragment();u.firstChild;)i.appendChild(u.firstChild);else i=u.firstChild}var c=i.cloneNode(!0);if(r){var m=c.firstChild,l=c.lastChild;p(m,l)}else p(c,c);return c}}function xe(e){if(!d){var n=E();return p(n,n),n}var t=s;return t||e.before(t=E()),p(t,t),t}function We(){if(d)return p(R(),v[v.length-1]),s;var e=document.createDocumentFragment(),n=document.createComment(""),t=E();return e.append(n,t),p(n,t),e}function qe(e,n){d||e.before(n)}const de="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);export{D as $,pe as A,ye as B,ue as C,Ee as D,me as E,ve as F,De as G,Ne as H,ce as I,Me as J,Oe as K,Re as L,L as M,Ae as N,Se as O,Ie as P,Fe as Q,ke as R,He as S,we as T,be as U,ie as V,qe as a,se as b,Le as c,w as d,v as e,Pe as f,Te as g,d as h,ge as i,Ce as j,p as k,R as l,F as m,We as n,Ue as o,fe as p,xe as q,Ve as r,$e as s,Be as t,Ye as u,E as v,g as w,s as x,A as y,he as z};
