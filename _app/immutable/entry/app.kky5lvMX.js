var D=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var a=(s,t,e)=>(D(s,t,"read from private field"),e?e.call(s):t.get(s)),w=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},x=(s,t,e,r)=>(D(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e);import{p as B,b as P}from"../chunks/this.NZLguBwK.js";import{i as N,m as W,u as z,g as R,a as g,t as q,f as b,b as I,s as F,c as G,j as H}from"../chunks/disclose-version.CWdZUnmt.js";import{q as J,w as K,x as Q,e as X,a as Y,E as Z,u as $,j as y,g as L,L as tt,p as et,s as O,r as rt}from"../chunks/runtime.V07bGIEC.js";import{p as C,i as S}from"../chunks/props.lxBRUbxu.js";import{o as st}from"../chunks/index-client.dRFNq8kD.js";function T(s,t,e){let r,n;J(()=>{r!==(r=t())&&(n&&(Q(n),n=null),r&&(n=K(()=>e(r))))})}function nt(s){return class extends ot{constructor(t){super({component:s,...t})}}}var m,l;class ot{constructor(t){w(this,m,void 0);w(this,l,void 0);const e=B({...t.props||{},$$events:{}},!1);x(this,l,(t.hydrate?N:W)(t.component,{target:t.target,props:e,context:t.context,intro:t.intro,recover:t.recover})),x(this,m,e.$$events);for(const r of Object.keys(a(this,l)))r==="$set"||r==="$destroy"||r==="$on"||X(this,r,{get(){return a(this,l)[r]},set(n){a(this,l)[r]=n},enumerable:!0});a(this,l).$set=r=>{Object.assign(e,r)},a(this,l).$destroy=()=>{z(a(this,l))}}$set(t){a(this,l).$set(t)}$on(t,e){a(this,m)[t]=a(this,m)[t]||[];const r=(...n)=>e.call(this,...n);return a(this,m)[t].push(r),()=>{a(this,m)[t]=a(this,m)[t].filter(n=>n!==r)}}$destroy(){a(this,l).$destroy()}}m=new WeakMap,l=new WeakMap;const at="modulepreload",it=function(s,t){return new URL(s,t).href},V={},E=function(t,e,r){let n=Promise.resolve();if(e&&e.length>0){const u=document.getElementsByTagName("link");n=Promise.all(e.map(o=>{if(o=it(o,r),o in V)return;V[o]=!0;const d=o.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let i=u.length-1;i>=0;i--){const c=u[i];if(c.href===o&&(!d||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":at,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((i,c)=>{f.addEventListener("load",i),f.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})}))}return n.then(()=>t()).catch(u=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=u,window.dispatchEvent(o),!o.defaultPrevented)throw u})},pt={};var ct=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),lt=q("<!> <!>",1);function ut(s,t){Y(t,!0);let e=C(t,"components",11,()=>[]),r=C(t,"data_0",3,null),n=C(t,"data_1",3,null);Z(()=>t.stores.page.set(t.page)),$(()=>{t.stores,t.page,t.constructors,e(),t.form,r(),n(),t.stores.page.notify()});let u=O(!1),o=O(!1),d=O(null);st(()=>{const i=t.stores.page.subscribe(()=>{y(u)&&(L(o,!0),tt().then(()=>{L(d,B(document.title||"untitled page"))}))});return L(u,!0),i});var p=lt(),k=b(p);S(k,()=>t.constructors[1],i=>{var c=R(),_=b(c);T(_,()=>t.constructors[0],v=>{P(v(_,{get data(){return r()},children:(h,ft)=>{var j=R(),A=b(j);T(A,()=>t.constructors[1],U=>{P(U(A,{get data(){return n()},get form(){return t.form}}),M=>e()[1]=M,()=>e()[1])}),g(h,j)}}),h=>e()[0]=h,()=>e()[0])}),g(i,c)},i=>{var c=R(),_=b(c);T(_,()=>t.constructors[0],v=>{P(v(_,{get data(){return r()},get form(){return t.form}}),h=>e()[0]=h,()=>e()[0])}),g(i,c)});var f=I(I(k,!0));S(f,()=>y(u),i=>{var c=ct(),_=G(c);S(_,()=>y(o),v=>{var h=H(v);rt(()=>F(h,y(d))),g(v,h)}),g(i,c)}),g(s,p),et()}const bt=nt(ut),yt=[()=>E(()=>import("../nodes/0.cgtf72B7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>E(()=>import("../nodes/1.NhRaultG.js"),__vite__mapDeps([12,1,2,7,8,13,14]),import.meta.url),()=>E(()=>import("../nodes/2.37c8o5mv.js"),__vite__mapDeps([15,1,2,3,4,7,8,16,17,13,14,5,6,10,18]),import.meta.url),()=>E(()=>import("../nodes/3.jwE7eNpe.js"),__vite__mapDeps([19,1,2,7,8,3,4,13,14,16,17,20]),import.meta.url)],Et=[],kt={"/":[2],"/about":[3]},wt={handleError:({error:s})=>{console.error(s)},reroute:()=>{}};export{kt as dictionary,wt as hooks,pt as matchers,yt as nodes,bt as root,Et as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.cgtf72B7.js","../chunks/disclose-version.CWdZUnmt.js","../chunks/runtime.V07bGIEC.js","../chunks/props.lxBRUbxu.js","../chunks/string.6vm0uh3s.js","../chunks/Pending_Animation.vzSQi0lY.js","../assets/Pending_Animation.1mBIy_-5.css","../chunks/store.Rqv6ed-P.js","../chunks/index.EZOAQTkM.js","../chunks/this.NZLguBwK.js","../chunks/index-client.dRFNq8kD.js","../assets/0.hCbyfDHt.css","../nodes/1.NhRaultG.js","../chunks/stores.TCUCK9Wx.js","../chunks/entry.Emh5W_nM.js","../nodes/2.37c8o5mv.js","../chunks/package.o_ZepBFn.js","../assets/package.oft7DLrN.css","../assets/2.6Li73PLa.css","../nodes/3.jwE7eNpe.js","../assets/3.s5Aj39rx.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
