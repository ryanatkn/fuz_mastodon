import{b as q,r as I,c as b,d as A,E as N,g as w,e as j,L as k,s as x,f as d,h as U,u as Y,i as T,j as C,m as F,k as m}from"./runtime.kSNp_RYE.js";import{h as E,d as H,H as M,e as $,g as z,i as O,j as B,P as G,k as K,l as V,m as Z}from"./disclose-version.Sd1RApNT.js";function X(a,n,r,e=null,p=!1){E&&H();var i=a,u=null,s=null,f=null,l=p?N:0;q(()=>{if(f===(f=!!n()))return;let o=!1;if(E){const h=i.data===M;f===h&&(i=$(),z(i),O(!1),o=!0)}f?(u?I(u):u=b(()=>r(i)),s&&A(s,()=>{s=null})):(s?I(s):e&&(s=b(()=>e(i))),u&&A(u,()=>{u=null})),o&&O(!0)},l),E&&(i=B)}const J={get(a,n){let r=a.props.length;for(;r--;){let e=a.props[r];if(m(e)&&(e=e()),typeof e=="object"&&e!==null&&n in e)return e[n]}},getOwnPropertyDescriptor(a,n){let r=a.props.length;for(;r--;){let e=a.props[r];if(m(e)&&(e=e()),typeof e=="object"&&e!==null&&n in e)return w(e,n)}},has(a,n){for(let r of a.props)if(m(r)&&(r=r()),r!=null&&n in r)return!0;return!1},ownKeys(a){const n=[];for(let r of a.props){m(r)&&(r=r());for(const e in r)n.includes(e)||n.push(e)}return n}};function ee(...a){return new Proxy({props:a},J)}function re(a,n,r,e){var R;var p=(r&K)!==0,i=(r&V)!==0,u=(r&Z)!==0,s=a[n],f=(R=w(a,n))==null?void 0:R.set,l=e,o=!0,h=()=>(u&&o&&(o=!1,l=Y(e)),l);s===void 0&&e!==void 0&&(f&&i&&j(),s=h(),f&&f(s));var _;if(i)_=()=>{var t=a[n];return t===void 0?h():(o=!0,t)};else{var S=(p?T:C)(()=>a[n]);S.f|=k,_=()=>{var t=d(S);return t!==void 0&&(l=void 0),t===void 0?l:t}}if(!(r&G))return _;if(f){var D=a.$$legacy;return function(t,c){return arguments.length>0?((!i||!c||D)&&f(c?_():t),t):_()}}var P=!1,g=F(s),v=T(()=>{var t=_(),c=d(g);return P?(P=!1,c):g.v=t});return p||(v.equals=x),function(t,c){var L=d(v);if(arguments.length>0){const y=c?d(v):t;return v.equals(y)||(P=!0,U(g,y),d(v)),t}return L}}export{X as i,re as p,ee as s};
