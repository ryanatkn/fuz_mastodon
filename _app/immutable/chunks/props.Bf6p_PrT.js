import{S as x,o as $,j as z,k as P,m as G,n as g,U as y,v as S,w,x as F,y as V,z as k,A as J,B as Q,C,D as Y,E as j,F as L,G as W,H as X,I as ee,J as re,K as te,L as q,M as ne,N as ae,O as ie,P as fe,Q as se,a as M,R as ue,T as le,V as U,W as ve,X as _e,Y as de,Z as K,_ as oe,$ as ce,a0 as ye,a1 as he,a2 as be,a3 as A}from"./runtime.D9Cf1qJ1.js";import{f as ge}from"./disclose-version.CgIEDwSC.js";function I(t,f=null,s){if(typeof t!="object"||t===null||x in t)return t;const i=k(t);if(i!==$&&i!==z)return t;var n=new Map,v=J(t),c=P(0);v&&n.set("length",P(t.length));var o;return new Proxy(t,{defineProperty(u,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&G();var a=n.get(e);return a===void 0?(a=P(r.value),n.set(e,a)):g(a,I(r.value,o)),!0},deleteProperty(u,e){var r=n.get(e);if(r===void 0)e in u&&n.set(e,P(y));else{if(v&&typeof e=="string"){var a=n.get("length"),l=Number(e);Number.isInteger(l)&&l<a.v&&g(a,l)}g(r,y),H(c)}return!0},get(u,e,r){var h;if(e===x)return t;var a=n.get(e),l=e in u;if(a===void 0&&(!l||(h=S(u,e))!=null&&h.writable)&&(a=P(I(l?u[e]:y,o)),n.set(e,a)),a!==void 0){var _=w(a);return _===y?void 0:_}return Reflect.get(u,e,r)},getOwnPropertyDescriptor(u,e){var r=Reflect.getOwnPropertyDescriptor(u,e);if(r&&"value"in r){var a=n.get(e);a&&(r.value=w(a))}else if(r===void 0){var l=n.get(e),_=l==null?void 0:l.v;if(l!==void 0&&_!==y)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return r},has(u,e){var _;if(e===x)return!0;var r=n.get(e),a=r!==void 0&&r.v!==y||Reflect.has(u,e);if(r!==void 0||F!==null&&(!a||(_=S(u,e))!=null&&_.writable)){r===void 0&&(r=P(a?I(u[e],o):y),n.set(e,r));var l=w(r);if(l===y)return!1}return a},set(u,e,r,a){var O;var l=n.get(e),_=e in u;if(v&&e==="length")for(var h=r;h<l.v;h+=1){var b=n.get(h+"");b!==void 0?g(b,y):h in u&&(b=P(y),n.set(h+"",b))}l===void 0?(!_||(O=S(u,e))!=null&&O.writable)&&(l=P(void 0),g(l,I(r,o)),n.set(e,l)):(_=l.v!==y,g(l,I(r,o)));var m=Reflect.getOwnPropertyDescriptor(u,e);if(m!=null&&m.set&&m.set.call(a,r),!_){if(v&&typeof e=="string"){var D=n.get("length"),E=Number(e);Number.isInteger(E)&&E>=D.v&&g(D,E+1)}H(c)}return!0},ownKeys(u){w(c);var e=Reflect.ownKeys(u).filter(l=>{var _=n.get(l);return _===void 0||_.v!==y});for(var[r,a]of n)a.v!==y&&!(r in u)&&e.push(r);return e},setPrototypeOf(){V()}})}function H(t,f=1){g(t,t.v+f)}function Ee(t,f,s,i=null,n=!1){L&&W();var v=t,c=null,o=null,u=null,e=n?X:0;Q(()=>{if(u===(u=!!f()))return;let r=!1;if(L){const a=v.data===ee;u===a&&(v=re(),te(v),q(!1),r=!0)}u?(c?C(c):c=Y(()=>s(v)),o&&j(o,()=>{o=null})):(o?C(o):i&&(o=Y(()=>i(v))),c&&j(c,()=>{c=null})),r&&q(!0)},e),L&&(v=ne)}const we={get(t,f){let s=t.props.length;for(;s--;){let i=t.props[s];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&f in i)return i[f]}},set(t,f,s){let i=t.props.length;for(;i--;){let n=t.props[i];A(n)&&(n=n());const v=S(n,f);if(v&&v.set)return v.set(s),!0}return!1},getOwnPropertyDescriptor(t,f){let s=t.props.length;for(;s--;){let i=t.props[s];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&f in i){const n=S(i,f);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,f){for(let s of t.props)if(A(s)&&(s=s()),s!=null&&f in s)return!0;return!1},ownKeys(t){const f=[];for(let s of t.props){A(s)&&(s=s());for(const i in s)f.includes(i)||f.push(i)}return f}};function Re(...t){return new Proxy({props:t},we)}function Z(t){for(var f=F,s=F;f!==null&&!(f.f&(ue|le));)f=f.parent;try{return U(f),t()}finally{U(s)}}function Ie(t,f,s,i){var B;var n=(s&ve)!==0,v=(s&_e)!==0,c=(s&de)!==0,o=(s&he)!==0,u=!1,e;c?[e,u]=ge(()=>t[f]):e=t[f];var r=(B=S(t,f))==null?void 0:B.set,a=i,l=!0,_=!1,h=()=>(_=!0,l&&(l=!1,o?a=M(i):a=i),a);e===void 0&&i!==void 0&&(r&&v&&ae(),e=h(),r&&r(e));var b;if(v)b=()=>{var d=t[f];return d===void 0?h():(l=!0,_=!1,d)};else{var m=Z(()=>(n?K:oe)(()=>t[f]));m.f|=ie,b=()=>{var d=w(m);return d!==void 0&&(a=void 0),d===void 0?a:d}}if(!(s&fe))return b;if(r){var D=t.$$legacy;return function(d,R){return arguments.length>0?((!v||!R||D||u)&&r(R?b():d),d):b()}}var E=!1,O=!1,N=be(e),T=Z(()=>K(()=>{var d=b(),R=w(N),p=ce;return E||d===void 0&&p.f&ye?(E=!1,O=!0,R):(O=!1,N.v=d)}));return n||(T.equals=se),function(d,R){if(arguments.length>0){const p=R?w(T):v&&c?I(d):d;return T.equals(p)||(E=!0,g(N,p),_&&a!==void 0&&(a=p),M(()=>w(T))),d}return w(T)}}export{I as a,Ee as i,Ie as p,Re as s};
