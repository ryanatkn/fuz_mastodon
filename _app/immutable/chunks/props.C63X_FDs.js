import{i as k,S as d,o as z,d as C,f as F,s as E,g as K,h as v,j as R,k as _,m as H,a as U,n as Z,v as $,w as L,x,y as N,E as G,z as V,L as J,A as Q,B as j,C as W,D as X,F as g}from"./runtime.Cd6WWQOy.js";import{U as p,h as I,d as ee,H as ne,e as te,g as se,i as q,j as re,P as ae,k as ie,l as fe,m as ue,n as le}from"./disclose-version.Bh6ov7Po.js";function b(e,n=null,t){if(typeof e=="object"&&e!=null&&!k(e)){if(d in e){const r=e[d];if(r.t===e||r.p===e)return r.p}const s=Z(e);if(s===z||s===C){const r=new Proxy(e,oe);return F(e,d,{value:{s:new Map,v:E(0),a:K(e),p:r,t:e},writable:!0,enumerable:!1}),r}}return e}function B(e,n=1){v(e,e.v+n)}const oe={defineProperty(e,n,t){if(t.value){const s=e[d],r=s.s.get(n);r!==void 0&&v(r,b(t.value,s))}return Reflect.defineProperty(e,n,t)},deleteProperty(e,n){const t=e[d],s=t.s.get(n),r=t.a,a=delete e[n];if(r&&a){const i=t.s.get("length"),o=e.length-1;i!==void 0&&i.v!==o&&v(i,o)}return s!==void 0&&v(s,p),a&&B(t.v),a},get(e,n,t){var a;if(n===d)return Reflect.get(e,d);const s=e[d];let r=s.s.get(n);if(r===void 0&&(!(n in e)||(a=R(e,n))!=null&&a.writable)&&(r=E(b(e[n],s)),s.s.set(n,r)),r!==void 0){const i=_(r);return i===p?void 0:i}return Reflect.get(e,n,t)},getOwnPropertyDescriptor(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);if(t&&"value"in t){const r=e[d].s.get(n);r&&(t.value=_(r))}return t},has(e,n){var a;if(n===d)return!0;const t=e[d],s=Reflect.has(e,n);let r=t.s.get(n);return(r!==void 0||H!==null&&(!s||(a=R(e,n))!=null&&a.writable))&&(r===void 0&&(r=E(s?b(e[n],t):p),t.s.set(n,r)),_(r)===p)?!1:s},set(e,n,t,s){const r=e[d];let a=r.s.get(n);a===void 0&&(U(()=>s[n]),a=r.s.get(n)),a!==void 0&&v(a,b(t,r));const i=r.a,o=!(n in e);if(i&&n==="length")for(let f=t;f<e.length;f+=1){const c=r.s.get(f+"");c!==void 0&&v(c,p)}var l=Reflect.getOwnPropertyDescriptor(e,n);if(l!=null&&l.set?l.set.call(s,t):e[n]=t,o){if(i){const f=r.s.get("length"),c=e.length;f!==void 0&&f.v!==c&&v(f,c)}B(r.v)}return!0},ownKeys(e){const n=e[d];return _(n.v),Reflect.ownKeys(e)}};function ve(e,n,t,s=null,r=!1){I&&ee();var a=e,i=null,o=null,l=null,f=r?G:0;$(()=>{if(l===(l=!!n()))return;let c=!1;if(I){const m=a.data===ne;l===m&&(a=te(),se(a),q(!1),c=!0)}l?(i?L(i):i=x(()=>t(a)),o&&N(o,()=>{o=null})):(o?L(o):s&&(o=x(()=>s(a))),i&&N(i,()=>{i=null})),c&&q(!0)},f),I&&(a=re)}const ce={get(e,n){let t=e.props.length;for(;t--;){let s=e.props[t];if(g(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let s=e.props[t];if(g(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s){const r=R(s,n);return r&&!r.configurable&&(r.configurable=!0),r}}},has(e,n){for(let t of e.props)if(g(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){g(t)&&(t=t());for(const s in t)n.includes(s)||n.push(s)}return n}};function he(...e){return new Proxy({props:e},ce)}function ye(e,n,t,s){var O;var r=(t&ie)!==0,a=(t&fe)!==0,i=(t&ue)!==0,o=(t&le)!==0,l=e[n],f=(O=R(e,n))==null?void 0:O.set,c=s,m=!0,A=()=>(o&&m&&(m=!1,c=U(s)),c);l===void 0&&s!==void 0&&(f&&a&&V(),l=A(),f&&f(l));var h;if(a)h=()=>{var u=e[n];return u===void 0?A():(m=!0,u)};else{var D=(r?j:W)(()=>e[n]);D.f|=J,h=()=>{var u=_(D);return u!==void 0&&(c=void 0),u===void 0?c:u}}if(!(t&ae))return h;if(f){var M=e.$$legacy;return function(u,y){return arguments.length>0?((!a||!y||M)&&f(y?h():u),u):h()}}var w=!1,S=X(l),P=j(()=>{var u=h(),y=_(S);return w?(w=!1,y):S.v=u});return r||(P.equals=Q),function(u,y){var Y=_(P);if(arguments.length>0){const T=y?_(P):a&&i?b(u):u;return P.equals(T)||(w=!0,v(S,T),_(P)),u}return Y}}export{b as a,ve as i,ye as p,he as s};
