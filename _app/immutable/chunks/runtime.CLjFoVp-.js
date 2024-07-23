var en=Array.isArray,un=Array.from,ln=Object.isFrozen,sn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,Rt=Object.getOwnPropertyDescriptors,fn=Object.prototype,an=Array.prototype,Nt=Object.getPrototypeOf;function _n(t){return typeof t=="function"}const cn=()=>{};function et(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,ut=4,F=8,lt=16,E=32,V=64,T=128,M=256,d=512,m=1024,b=2048,C=4096,D=8192,jt=16384,st=32768,vn=65536,It=1<<18,J=Symbol("$state"),pn=Symbol("$state.frozen"),hn=Symbol("");function ot(t){return t===this.v}function Mt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function it(t){return!Mt(t,this.v)}function Lt(t){throw new Error("effect_in_teardown")}function Yt(){throw new Error("effect_in_unowned_derived")}function Pt(t){throw new Error("effect_orphan")}function Bt(){throw new Error("effect_update_depth_exceeded")}function wn(){throw new Error("hydration_failed")}function dn(t){throw new Error("props_invalid_value")}function Ht(){throw new Error("state_unsafe_mutation")}function ft(t){return{f:0,v:t,reactions:null,equals:ot,version:0}}function En(t){var r;const n=ft(t);return n.equals=it,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(n),n}function Ut(t,n){return a!==null&&$()&&a.f&g&&Ht(),t.equals(n)||(t.v=n,t.version=xt(),at(t,m),$()&&f!==null&&f.f&d&&!(f.f&E)&&(c!==null&&c.includes(t)?(h(f,m),U(f)):y===null?Jt([t]):y.push(t))),n}function at(t,n){var r=t.reactions;if(r!==null)for(var e=$(),l=r.length,u=0;u<l;u++){var s=r[u],o=s.f;o&m||!e&&s===f||(h(s,n),o&(d|T)&&(o&g?at(s,b):U(s)))}}function _t(t){f===null&&a===null&&Pt(),a!==null&&a.f&T&&Yt(),W&&Lt()}function Q(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function R(t,n,r,e=!0){var l=(t&V)!==0,u={ctx:i,deps:null,nodes:null,f:t|m,first:null,fn:n,last:null,next:null,parent:l?null:f,prev:null,teardown:null,transitions:null,version:0};if(r){var s=S;try{X(!0),H(u),u.f|=jt}catch(_){throw P(u),_}finally{X(s)}}else n!==null&&U(u);var o=r&&u.deps===null&&u.first===null&&u.nodes===null&&u.teardown===null;return!o&&!l&&e&&(f!==null&&Q(u,f),a!==null&&a.f&g&&Q(u,a)),u}function yn(t){const n=R(F,null,!1);return h(n,d),n.teardown=t,n}function mn(t){_t();var n=f!==null&&(f.f&F)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push(t)}else{var e=ct(t);return e}}function kn(t){return _t(),vt(t)}function gn(t){const n=R(V,t,!0);return()=>{P(n)}}function ct(t){return R(ut,t,!1)}function vt(t){return R(F,t,!0)}function Tn(t){return vt(t)}function xn(t,n=0){return R(F|lt|n,t,!0)}function qn(t,n=!0){return R(F|E,t,!0,n)}function pt(t){var n=t.teardown;if(n!==null){const r=W,e=a;tt(!0),nt(null);try{n.call(null)}finally{tt(r),nt(e)}}}function P(t,n=!0){var r=!1;if((n||t.f&It)&&t.nodes!==null){for(var e=t.nodes.start,l=t.nodes.end;e!==null;){var u=e===l?null:e.nextSibling;e.remove(),e=u}r=!0}if(Z(t,n&&!r),B(t,0),h(t,D),t.transitions)for(const o of t.transitions)o.stop();pt(t);var s=t.parent;s!==null&&t.f&E&&s.first!==null&&ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes=null}function ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function On(t,n){var r=[];wt(t,r,!0),zt(r,()=>{P(t),n&&n()})}function zt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function wt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,u=(e.f&st)!==0||(e.f&E)!==0;wt(e,n,u?r:!1),e=l}}}function Sn(t){dt(t,!0)}function dt(t,n){if(t.f&C){t.f^=C,j(t)&&H(t);for(var r=t.first;r!==null;){var e=r.next,l=(r.f&st)!==0||(r.f&E)!==0;dt(r,l?n:!1),r=e}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&u.in()}}const Kt=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let L=!1,Y=!1,z=[],K=[];function Et(){L=!1;const t=z.slice();z=[],et(t)}function yt(){Y=!1;const t=K.slice();K=[],et(t)}function An(t){L||(L=!0,queueMicrotask(Et)),z.push(t)}function Cn(t){Y||(Y=!0,Kt(yt)),K.push(t)}function $t(){L&&Et(),Y&&yt()}function Gt(t){let n=g|m;f===null&&(n|=T);const r={deps:null,deriveds:null,equals:ot,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(a!==null&&a.f&g){var e=a;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Fn(t){const n=Gt(t);return n.equals=it,n}function mt(t){Z(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)Vt(n[r])}}function kt(t){mt(t);var n=qt(t),r=(O||t.f&T)&&t.deps!==null?b:d;h(t,r),t.equals(n)||(t.v=n,t.version=xt())}function Vt(t){mt(t),B(t,0),h(t,D),t.first=t.last=t.deps=t.reactions=t.fn=null}function Wt(t){throw new Error("lifecycle_outside_component")}const gt=0,Zt=1;let I=gt,N=!1,S=!1,W=!1;function X(t){S=t}function tt(t){W=t}let k=[],A=0,a=null;function nt(t){a=t}let f=null,c=null,v=0,y=null;function Jt(t){y=t}let Tt=0,O=!1,i=null;function xt(){return Tt++}function $(){return i!==null&&i.l===null}function j(t){var s,o;var n=t.f;if(n&m)return!0;if(n&b){var r=t.deps;if(r!==null){var e=(n&T)!==0,l;if(n&M){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(t);t.f^=M}for(l=0;l<r.length;l++){var u=r[l];if(j(u)&&kt(u),u.version>t.version)return!0;e&&!O&&!((o=u==null?void 0:u.reactions)!=null&&o.includes(t))&&(u.reactions??(u.reactions=[])).push(t)}}h(t,d)}return!1}function Qt(t,n,r){throw t}function qt(t){var n=c,r=v,e=y,l=a,u=O;c=null,v=0,y=null,a=t.f&(E|V)?null:t,O=!S&&(t.f&T)!==0;try{var s=(0,t.fn)(),o=t.deps;if(c!==null){var _,p;if(o!==null){var x=v===0?c:o.slice(0,v).concat(c),q=x.length>16?new Set(x):null;for(p=v;p<o.length;p++)_=o[p],(q!==null?!q.has(_):!x.includes(_))&&Ot(t,_)}if(o!==null&&v>0)for(o.length=v+c.length,p=0;p<c.length;p++)o[v+p]=c[p];else t.deps=o=c;if(!O)for(p=v;p<o.length;p++){_=o[p];var w=_.reactions;w===null?_.reactions=[t]:w[w.length-1]!==t&&!w.includes(t)&&w.push(t)}}else o!==null&&v<o.length&&(B(t,v),o.length=v);return s}finally{c=n,v=r,y=e,a=l,O=u}}function Ot(t,n){const r=n.reactions;let e=0;if(r!==null){e=r.length-1;const l=r.indexOf(t);l!==-1&&(e===0?n.reactions=null:(r[l]=r[e],r.pop()))}e===0&&n.f&g&&(h(n,b),n.f&(T|M)||(n.f^=M),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n===0?null:r.slice(0,n),l=new Set,u=n;u<r.length;u++){var s=r[u];l.has(s)||(l.add(s),(e===null||!e.includes(s))&&Ot(t,s))}}function Z(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function H(t){var n=t.f;if(!(n&D)){h(t,d);var r=t.ctx,e=f,l=i;f=t,i=r;try{n&lt||Z(t),pt(t);var u=qt(t);t.teardown=typeof u=="function"?u:null,t.version=Tt}catch(s){Qt(s)}finally{f=e,i=l}}}function St(){A>1e3&&(A=0,Bt()),A++}function At(t){var n=t.length;if(n!==0){St();var r=S;S=!0;try{for(var e=0;e<n;e++){var l=t[e];if(l.first===null&&!(l.f&E))rt([l]);else{var u=[];Ct(l,u),rt(u)}}}finally{S=r}}}function rt(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(D|C))&&j(e)&&(H(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?ht(e):e.fn=null))}}function Xt(){if(N=!1,A>1001)return;const t=k;k=[],At(t),N||(A=0)}function U(t){I===gt&&(N||(N=!0,queueMicrotask(Xt)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&E){if(!(r&d))return;h(n,b)}}k.push(n)}function Ct(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,u=(l&(D|C))===0,s=l&E,o=(l&d)!==0,_=r.first;if(u&&(!s||!o)){if(s&&h(r,d),l&F){if(!s&&j(r)&&(H(r),_=r.first),_!==null){r=_;continue}}else if(l&ut)if(s||o){if(_!==null){r=_;continue}}else e.push(r)}var p=r.next;if(p===null){let w=r.parent;for(;w!==null;){if(t===w)break t;var x=w.next;if(x!==null){r=x;continue t}w=w.parent}}r=p}for(var q=0;q<e.length;q++)_=e[q],n.push(_),Ct(_,n)}function Ft(t,n=!0){var r=I,e=k;try{St();const u=[];I=Zt,k=u,N=!1,n&&At(e);var l=t==null?void 0:t();return $t(),(k.length>0||u.length>0)&&Ft(),A=0,l}finally{I=r,k=e}}async function bn(){await Promise.resolve(),Ft()}function bt(t){var n=t.f;if(n&D)return t.v;if(a!==null){var r=a.deps;c===null&&r!==null&&r[v]===t?v++:(r===null||v===0||r[v-1]!==t)&&(c===null?c=[t]:c[c.length-1]!==t&&c.push(t)),y!==null&&f!==null&&f.f&d&&!(f.f&E)&&y.includes(t)&&(h(f,m),U(f))}if(n&g){var e=t;j(e)&&kt(e)}return t.v}function Dn(t){const n=a;try{return a=null,t()}finally{a=n}}const tn=~(m|b|d);function h(t,n){t.f=t.f&tn|n}function nn(t){return typeof t=="object"&&t!==null&&typeof t.f=="number"}function Rn(t){return Dt().get(t)}function Nn(t,n){return Dt().set(t,n),n}function Dt(t){return i===null&&Wt(),i.c??(i.c=new Map(rn(i)||void 0))}function rn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function jn(t,n=1){var r=+bt(t);return Ut(t,r+n),r}function In(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:ft(!1)})}function Mn(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)ct(e[r])}i=n.p,n.m=!0}return t||{}}function Ln(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(J in t)G(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&J in r&&G(r)}}}function G(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{G(t[e],n)}catch{}const r=Nt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Rt(r);for(let l in e){const u=e[l].get;if(u)try{u.call(t)}catch{}}}}}function Yn(t){return nn(t)?bt(t):t}export{jt as $,dn as A,it as B,Gt as C,Fn as D,st as E,En as F,_n as G,cn as H,yn as I,P as J,Ln as K,vn as L,kn as M,bn as N,C as O,wt as P,zt as Q,hn as R,pn as S,Rt as T,Cn as U,It as V,Ft as W,wn as X,un as Y,gn as Z,lt as _,Dn as a,Yn as a0,Nn as a1,Rn as a2,Mt as a3,jn as a4,Mn as b,i as c,J as d,an as e,sn as f,en as g,Ut as h,ln as i,on as j,bt as k,Wt as l,f as m,Nt as n,fn as o,In as p,ct as q,vt as r,ft as s,Tn as t,mn as u,An as v,xn as w,Sn as x,qn as y,On as z};