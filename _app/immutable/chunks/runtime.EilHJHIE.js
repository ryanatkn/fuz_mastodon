var bt=Array.isArray,cn=Array.from,_n=Object.isFrozen,pn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyDescriptors,dn=Object.prototype,hn=Array.prototype,Mt=Object.getPrototypeOf,ot=Map.prototype,Pt=ot.set,Ft=ot.get;function En(t,n,e){Pt.call(t,n,e)}function mn(t,n){return Ft.call(t,n)}function yn(t){return typeof t=="function"}const S=2,ut=4,D=8,lt=16,y=32,$=64,A=128,P=256,E=512,m=1024,R=2048,g=4096,C=8192,Ht=16384,it=32768,Tn=65536,J=Symbol("$state"),wn=Symbol("$state.frozen"),An=Symbol("");function at(t){return t===this.v}function Yt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ft(t){return!Yt(t,this.v)}const In=1,On=2,Sn=4,Rn=8,Nn=16,kn=64,xn=1,gn=2,Dn=4,Cn=8,qn=1,bn=2,Ln=4,Mn=1,Pn=2,Fn="[",jt="]",Hn="",Yn=`${jt}!`,jn={},Ut=Symbol(),Un=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Bn=["touchstart","touchmove","touchend"],Vn={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},zn="http://www.w3.org/2000/svg";function Gn(t,n="exclude-on"){return t.endsWith("capture")?n=="exclude-on"?t!=="gotpointercapture"&&t!=="lostpointercapture":t!=="ongotpointercapture"&&t!=="onlostpointercapture":!1}function Bt(t){throw new Error("effect_in_teardown")}function Vt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Gt(){throw new Error("effect_update_depth_exceeded")}function Kn(){throw new Error("hydration_failed")}function $n(t){throw new Error("props_invalid_value")}function Kt(){throw new Error("state_unsafe_mutation")}function ct(t){return{f:0,v:t,reactions:null,equals:at,version:0}}function Zn(t){var e;const n=ct(t);return n.equals=ft,f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(n),n}function $t(t,n){var e=t.v!==Ut;return e&&c!==null&&G()&&c.f&S&&Kt(),t.equals(n)||(t.v=n,t.version=St(),X(t,m,!0),G()&&e&&a!==null&&a.f&E&&!(a.f&y)&&(v!==null&&v.includes(t)?(h(a,m),U(a)):w===null?rn([t]):w.push(t))),n}function Wn(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function Zt(t){if(bt(t))for(var n=0;n<t.length;n++){var e=t[n];e.isConnected&&e.remove()}else t.isConnected&&t.remove()}function _t(t){a===null&&c===null&&zt(),c!==null&&c.f&A&&Vt(),W&&Bt()}function tt(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function q(t,n,e){var r=(t&$)!==0,s={ctx:f,deps:null,dom:null,f:t|m,first:null,fn:n,last:null,next:null,parent:r?null:a,prev:null,teardown:null,transitions:null};if(e){var o=k;try{nt(!0),j(s),s.f|=Ht}finally{nt(o)}}else n!==null&&U(s);var _=e&&s.deps===null&&s.first===null&&s.dom===null&&s.teardown===null;return!_&&!r&&(a!==null&&tt(s,a),c!==null&&c.f&S&&tt(s,c)),s}function Qn(t){const n=q(D,null,!1);return h(n,E),n.teardown=t,n}function Xn(t){_t();var n=a!==null&&(a.f&D)!==0&&f!==null&&!f.m;if(n){var e=f;(e.e??(e.e=[])).push(t)}else{var r=pt(t);return r}}function Jn(t){return _t(),vt(t)}function te(t){const n=q($,t,!0);return()=>{Z(n)}}function pt(t){return q(ut,t,!1)}function vt(t){return q(D,t,!0)}function ne(t){return vt(t)}function ee(t,n=0){return q(D|lt|n,t,!0)}function re(t){return q(D|y,t,!0)}function dt(t){var n=t.teardown;if(n!==null){const e=W,r=c;et(!0),rt(null);try{n.call(null)}finally{et(e),rt(r)}}}function Z(t,n=!0){var e=t.dom;if(e!==null&&n&&Zt(e),Q(t,n),Y(t,0),h(t,C),t.transitions)for(const s of t.transitions)s.stop();dt(t);var r=t.parent;r!==null&&t.f&y&&r.first!==null&&ht(t),t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function ht(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function se(t,n){var e=[];Et(t,e,!0),Wt(e,()=>{Z(t),n&&n()})}function Wt(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function Et(t,n,e){if(!(t.f&g)){if(t.f^=g,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var s=r.next,o=(r.f&it)!==0||(r.f&y)!==0;Et(r,n,o?e:!1),r=s}}}function oe(t){mt(t,!0)}function mt(t,n){if(t.f&g){t.f^=g,L(t)&&j(t);for(var e=t.first;e!==null;){var r=e.next,s=(e.f&it)!==0||(e.f&y)!==0;mt(e,s?n:!1),e=r}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}const ue=()=>{};function yt(t){for(var n=0;n<t.length;n++)t[n]()}const Qt=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let F=!1,H=!1,V=[],z=[];function Tt(){F=!1;const t=V.slice();V=[],yt(t)}function wt(){H=!1;const t=z.slice();z=[],yt(t)}function le(t){F||(F=!0,queueMicrotask(Tt)),V.push(t)}function ie(t){H||(H=!0,Qt(wt)),z.push(t)}function Xt(){F&&Tt(),H&&wt()}function Jt(t){let n=S|m;a===null&&(n|=A);const e={deps:null,deriveds:null,equals:at,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(c!==null&&c.f&S){var r=c;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function ae(t){const n=Jt(t);return n.equals=ft,n}function At(t){Q(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)tn(n[e])}}function It(t){At(t);var n=Rt(t),e=(N||t.f&A)&&t.deps!==null?R:E;h(t,e),t.equals(n)||(t.v=n,t.version=St(),X(t,m,!1))}function tn(t){At(t),Y(t,0),h(t,C),t.first=t.last=t.deps=t.reactions=t.fn=null}function nn(t){throw new Error("lifecycle_outside_component")}const Ot=0,en=1;let M=Ot,b=!1,k=!1,W=!1;function nt(t){k=t}function et(t){W=t}let O=[],x=0,c=null;function rt(t){c=t}let a=null,v=null,p=0,w=null;function rn(t){w=t}let sn=0,N=!1,f=null;function St(){return sn++}function G(){return f!==null&&f.l===null}function L(t){var I;var n=t.f,e=(n&m)!==0;if(e)return!0;var r=(n&A)!==0,s=(n&P)!==0;if(n&R){var o=t.deps;if(o!==null)for(var _=o.length,l,u=0;u<_;u++){var i=o[u];!e&&L(i)&&It(i);var d=i.version;if(r){if(d>t.version)return!0;!N&&!((I=i==null?void 0:i.reactions)!=null&&I.includes(t))&&(i.reactions??(i.reactions=[])).push(t)}else{if(t.f&m)return!0;s&&(d>t.version&&(e=!0),l=i.reactions,l===null?i.reactions=[t]:l.includes(t)||l.push(t))}}r||h(t,E),s&&(t.f^=P)}return e}function on(t,n,e){throw t}function Rt(t){const n=v,e=p,r=w,s=c,o=N;v=null,p=0,w=null,c=t.f&(y|$)?null:t,N=!k&&(t.f&A)!==0;try{let _=(0,t.fn)(),l=t.deps;if(v!==null){let u;if(l!==null){const i=l.length,d=p===0?v:l.slice(0,p).concat(v),T=d.length>16&&i-p>1?new Set(d):null;for(u=p;u<i;u++){const B=l[u];(T!==null?!T.has(B):!d.includes(B))&&Nt(t,B)}}if(l!==null&&p>0)for(l.length=p+v.length,u=0;u<v.length;u++)l[p+u]=v[u];else t.deps=l=v;if(!N)for(u=p;u<l.length;u++){const i=l[u],d=i.reactions;d===null?i.reactions=[t]:d[d.length-1]!==t&&!d.includes(t)&&d.push(t)}}else l!==null&&p<l.length&&(Y(t,p),l.length=p);return _}finally{v=n,p=e,w=r,c=s,N=o}}function Nt(t,n){const e=n.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(t);s!==-1&&(r===0?n.reactions=null:(e[s]=e[r],e.pop()))}r===0&&n.f&S&&(h(n,R),n.f&(A|P)||(n.f^=P),Y(n,0))}function Y(t,n){const e=t.deps;if(e!==null){const r=n===0?null:e.slice(0,n);let s;for(s=n;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&Nt(t,o)}}}function Q(t,n=!0){let e=t.first;t.first=null,t.last=null;for(var r;e!==null;)r=e.next,Z(e,n),e=r}function j(t){var n=t.f;if(!(n&C)){h(t,E);var e=t.ctx,r=a,s=f;a=t,f=e;try{n&lt||Q(t),dt(t);var o=Rt(t);t.teardown=typeof o=="function"?o:null}catch(_){on(_)}finally{a=r,f=s}}}function kt(){x>1e3&&(x=0,Gt()),x++}function xt(t){var n=t.length;if(n!==0){kt();var e=k;k=!0;try{for(var r=0;r<n;r++){var s=t[r];if(s.first===null&&!(s.f&y))st([s]);else{var o=[];gt(s,o),st(o)}}}finally{k=e}}}function st(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];!(r.f&(C|g))&&L(r)&&(j(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?ht(r):r.fn=null))}}function un(){if(b=!1,x>1001)return;const t=O;O=[],xt(t),b||(x=0)}function U(t){M===Ot&&(b||(b=!0,queueMicrotask(un)));for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&y){if(!(e&E))return;h(n,R)}}O.push(n)}function gt(t,n){var e=t.first,r=[];t:for(;e!==null;){var s=e.f,o=(s&(C|g))===0,_=s&y,l=(s&E)!==0,u=e.first;if(o&&(!_||!l)){if(_&&h(e,E),s&D){if(!_&&L(e)&&(j(e),u=e.first),u!==null){e=u;continue}}else if(s&ut)if(_||l){if(u!==null){e=u;continue}}else r.push(e)}var i=e.next;if(i===null){let T=e.parent;for(;T!==null;){if(t===T)break t;var d=T.next;if(d!==null){e=d;continue t}T=T.parent}}e=i}for(var I=0;I<r.length;I++)u=r[I],n.push(u),gt(u,n)}function Dt(t,n=!0){var e=M,r=O;try{kt();const o=[];M=en,O=o,b=!1,n&&xt(r);var s=t==null?void 0:t();return Xt(),(O.length>0||o.length>0)&&Dt(),x=0,s}finally{M=e,O=r}}async function fe(){await Promise.resolve(),Dt()}function Ct(t){const n=t.f;if(n&C)return t.v;if(c!==null){const e=(c.f&A)!==0,r=c.deps;v===null&&r!==null&&r[p]===t&&!(e&&a!==null)?p++:(r===null||p===0||r[p-1]!==t)&&(v===null?v=[t]:v[v.length-1]!==t&&v.push(t)),w!==null&&a!==null&&a.f&E&&!(a.f&y)&&w.includes(t)&&(h(a,m),U(a))}return n&S&&L(t)&&It(t),t.v}function X(t,n,e){var r=t.reactions;if(r!==null)for(var s=G(),o=r.length,_=0;_<o;_++){var l=r[_],u=l.f;if(!(u&m||(!e||!s)&&l===a)){h(l,n);var i=(u&R)!==0,d=(u&A)!==0;(u&E||i&&d)&&(l.f&S?X(l,R,e):U(l))}}}function ce(t){const n=c;try{return c=null,t()}finally{c=n}}const ln=~(m|R|E);function h(t,n){t.f=t.f&ln|n}function an(t){return typeof t=="object"&&t!==null&&typeof t.f=="number"}function _e(t){return qt().get(t)}function pe(t,n){return qt().set(t,n),n}function qt(t){return f===null&&nn(),f.c??(f.c=new Map(fn(f)||void 0))}function fn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function ve(t,n=1){var e=+Ct(t);return $t(t,e+n),e}function de(t,n=!1,e){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:ct(!1)})}function he(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const r=n.e;if(r!==null){n.e=null;for(var e=0;e<r.length;e++)pt(r[e])}f=n.p,n.m=!0}return t||{}}function Ee(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(J in t)K(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&J in e&&K(e)}}}function K(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{K(t[r],n)}catch{}const e=Mt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Lt(e);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function me(t){return an(t)?Ct(t):t}export{kn as $,dn as A,hn as B,pn as C,ct as D,it as E,bt as F,a as G,Yn as H,Mt as I,vt as J,le as K,Tn as L,f as M,nn as N,Xn as O,Dn as P,Wn as Q,Ee as R,wn as S,Jn as T,Ut as U,fe as V,Rn as W,Fn as X,g as Y,In as Z,On as _,he as a,Et as a0,Wt as a1,Z as a2,Nn as a3,Sn as a4,An as a5,mn as a6,En as a7,Gn as a8,Vn as a9,Un as aa,Lt as ab,ie as ac,jt as ad,jn as ae,Hn as af,Qn as ag,Dt as ah,Kn as ai,cn as aj,te as ak,Bn as al,Mn as am,Pn as an,me as ao,lt as ap,Ht as aq,qn as ar,bn as as,Ln as at,zn as au,pe as av,_e as aw,ve as ax,ee as b,oe as c,re as d,se as e,$n as f,vn as g,ft as h,Ct as i,$t as j,xn as k,gn as l,Jt as m,ue as n,ae as o,de as p,Cn as q,Zt as r,Yt as s,ne as t,ce as u,Zn as v,yn as w,pt as x,_n as y,J as z};
