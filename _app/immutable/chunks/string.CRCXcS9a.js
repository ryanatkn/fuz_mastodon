import{B,C as T,D as P,A as _e,a6 as ie,H as ve,E as X,F as C,G as M,L as k,a7 as de,I as te,J as O,K as he,a8 as Z,x as Q,n as x,a9 as Y,aa as ge,Z as pe,k as j,ab as q,ac as Ee,ad as Ae,ae as Ne,af as F,ag as R,ah as Te,q as V,ai as fe,aj as ye,ak as le,al as be,am as Ie,M as ke,$ as we,z as m,an as Le,ao as Re,ap as Ce}from"./runtime.BvLbdK0R.js";import{d as ee,e as Oe,i as De,f as ae,g as He,n as Me,j as Se}from"./disclose-version.BPA94ELe.js";let S=null;function ze(e,a){return a}function Pe(e,a,r,s){for(var i=[],l=a.length,u=0;u<l;u++)Ee(a[u].e,i,!0);var c=l>0&&i.length===0&&r!==null;if(c){var d=r.parentNode;Ae(d),d.append(r),s.clear(),I(e,a[0].prev,a[l-1].next)}Ne(i,()=>{for(var E=0;E<l;E++){var g=a[E];c||(s.delete(g.k),I(e,g.prev,g.next)),F(g.e,!c)}})}function Ge(e,a,r,s,i,l=null){var u=e,c={flags:a,items:new Map,first:null},d=(a&fe)!==0;if(d){var E=e;u=T?C(R(E)):E.appendChild(Te())}T&&P();var g=null;B(()=>{var n=r(),A=_e(n)?n:n==null?[]:ie(n),v=A.length;let h=!1;if(T){var N=u.data===ve;N!==(v===0)&&(u=X(),C(u),M(!1),h=!0)}if(T){for(var p=null,o,f=0;f<v;f++){if(k.nodeType===8&&k.data===de){u=k,h=!0,M(!1);break}var t=A[f],_=s(t,f);o=ue(k,c,p,null,t,_,f,i,a),c.items.set(_,o),p=o}v>0&&C(X())}T||$e(A,c,u,i,a,s),l!==null&&(v===0?g?te(g):g=O(()=>l(u)):g!==null&&he(g,()=>{g=null})),h&&M(!0)}),T&&(u=k)}function $e(e,a,r,s,i,l){var z,G,K,J;var u=(i&ye)!==0,c=(i&(Y|q))!==0,d=e.length,E=a.items,g=a.first,n=g,A,v=null,h,N=[],p=[],o,f,t,_;if(u)for(_=0;_<d;_+=1)o=e[_],f=l(o,_),t=E.get(f),t!==void 0&&((z=t.a)==null||z.measure(),(h??(h=new Set)).add(t));for(_=0;_<d;_+=1){if(o=e[_],f=l(o,_),t=E.get(f),t===void 0){var y=n?n.e.nodes_start:r;v=ue(y,a,v,v===null?a.first:v.next,o,f,_,s,i),E.set(f,v),N=[],p=[],n=v.next;continue}if(c&&Be(t,o,_,i),t.e.f&Z&&(te(t.e),u&&((G=t.a)==null||G.unfix(),(h??(h=new Set)).delete(t))),t!==n){if(A!==void 0&&A.has(t)){if(N.length<p.length){var w=p[0],b;v=w.prev;var W=N[0],D=N[N.length-1];for(b=0;b<N.length;b+=1)re(N[b],w,r);for(b=0;b<p.length;b+=1)A.delete(p[b]);I(a,W.prev,D.next),I(a,v,W),I(a,D,w),n=w,v=D,_-=1,N=[],p=[]}else A.delete(t),re(t,n,r),I(a,t.prev,t.next),I(a,t,v===null?a.first:v.next),I(a,v,t),v=t;continue}for(N=[],p=[];n!==null&&n.k!==f;)n.e.f&Z||(A??(A=new Set)).add(n),p.push(n),n=n.next;if(n===null)continue;t=n}N.push(t),v=t,n=t.next}if(n!==null||A!==void 0){for(var L=A===void 0?[]:ie(A);n!==null;)L.push(n),n=n.next;var H=L.length;if(H>0){var ce=i&fe&&d===0?r:null;if(u){for(_=0;_<H;_+=1)(K=L[_].a)==null||K.measure();for(_=0;_<H;_+=1)(J=L[_].a)==null||J.fix()}Pe(a,L,ce,E)}}u&&V(()=>{var U;if(h!==void 0)for(t of h)(U=t.a)==null||U.apply()}),Q.first=a.first&&a.first.e,Q.last=v&&v.e}function Be(e,a,r,s){s&Y&&x(e.v,a),s&q?x(e.i,r):e.i=r}function ue(e,a,r,s,i,l,u,c,d){var E=S;try{var g=(d&Y)!==0,n=(d&ge)===0,A=g?n?pe(i):j(i):i,v=d&q?j(u):u,h={i:v,v:A,k:l,a:null,e:null,prev:r,next:s};return S=h,h.e=O(()=>c(e,A,v),T),h.e.prev=r&&r.e,h.e.next=s&&s.e,r===null?a.first=h:(r.next=h,r.e.next=h.e),s!==null&&(s.prev=h,s.e.prev=h.e),h}finally{S=E}}function re(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,l=e.e.nodes_start;l!==s;){var u=le(l);i.before(l),l=u}}function I(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Ke(e,a,r,s,i){var l=e,u="",c;B(()=>{if(u===(u=a()??"")){T&&P();return}c!==void 0&&(F(c),c=void 0),u!==""&&(c=O(()=>{if(T){k.data;for(var d=P(),E=d;d!==null&&(d.nodeType!==8||d.data!=="");)E=d,d=le(d);if(d===null)throw be(),Ie;ee(k,E),l=C(d);return}var g=u+"";r&&(g=`<svg>${g}</svg>`);var n=Oe(g);if((r||s)&&(n=R(n)),ee(R(n),n.lastChild),r||s)for(;R(n);)l.before(R(n));else l.before(n)}))})}function Je(e,a,...r){var s=e,i=we,l;B(()=>{i!==(i=a())&&(l&&(F(l),l=null),l=O(()=>i(s,...r)))},ke),T&&(s=k)}function Ye(e,a){if(a){const r=document.body;e.autofocus=!0,V(()=>{document.activeElement===r&&e.focus()})}}let se=!1;function qe(){se||(se=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const r of e.target.elements)(a=r.__on_r)==null||a.call(r)})},{capture:!0}))}function Ue(e){if(T){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;$(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;$(e,"checked",null),e.checked=i}}};e.__on_r=r,Ce(r),qe()}}function $(e,a,r,s){var i=e.__attributes??(e.__attributes={});T&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="loading"&&(e[Le]=r),r==null?e.removeAttribute(a):typeof r!="string"&&oe(e).includes(a)?e[a]=r:e.setAttribute(a,r))}function Xe(e,a,r,s,i=!1,l=!1,u=!1){var c=a||{},d=e.tagName==="OPTION";for(var E in a)E in r||(r[E]=null);s!==void 0&&(r.class=r.class?r.class+" "+s:s);var g=oe(e),n=e.__attributes??(e.__attributes={}),A=[];for(const o in r){let f=r[o];if(d&&o==="value"&&f==null){e.value=e.__value="",c[o]=f;continue}var v=c[o];if(f!==v){c[o]=f;var h=o[0]+o[1];if(h!=="$$")if(h==="on"){const t={},_="$$"+o;let y=o.slice(2);var N=Se(y);if(De(y)&&(y=y.slice(0,-7),t.capture=!0),!N&&v){if(f!=null)continue;e.removeEventListener(y,c[_],t),c[_]=null}if(f!=null)if(N)e[`__${y}`]=f,He([y]);else{let w=function(b){c[o].call(this,b)};a?c[_]=ae(y,e,w,t):A.push([o,f,()=>c[_]=ae(y,e,w,t)])}}else if(o==="style"&&f!=null)e.style.cssText=f+"";else if(o==="autofocus")Ye(e,!!f);else if(o==="__value"||o==="value"&&f!=null)e.value=e[o]=e.__value=f;else{var p=o;i||(p=Me(p)),f==null&&!l?(n[o]=null,e.removeAttribute(o)):g.includes(p)&&(l||typeof f!="string")?e[p]=f:typeof f!="function"&&(T&&(p==="src"||p==="href"||p==="srcset")||$(e,p,f))}}}return a||V(()=>{if(e.isConnected)for(const[o,f,t]of A)c[o]===f&&t()}),c}var ne=new Map;function oe(e){var a=ne.get(e.nodeName);if(a)return a;ne.set(e.nodeName,a=[]);for(var r,s=m(e);s.constructor.name!=="Element";){r=Re(s);for(var i in r)r[i].set&&a.push(i);s=m(s)}return a}function Ze(e,a){var r=e.__className,s=Fe(a);T&&e.className===s?e.__className=s:(r!==s||T&&e.className!==s)&&(a==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function Fe(e){return e??""}function Qe(e,a,r){if(r){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function xe(e,a,r,s,i){var l=e.__attributes??(e.__attributes={}),u=e.style,c="style-"+a;l[c]===r&&(!i||u.getPropertyValue(a)===r)||(l[c]=r,r==null?u.removeProperty(a):u.setProperty(a,r,""))}const je=(e,a)=>!a||!e.startsWith(a)?e:e.substring(a.length),me=(e,a)=>!a||!e.endsWith(a)?e:e.substring(0,e.length-a.length),ea=(e,a)=>e.endsWith(a)?e:e+a;export{Je as a,Xe as b,me as c,je as d,Ge as e,ea as f,$ as g,Ke as h,ze as i,Ze as j,qe as k,Ue as r,xe as s,Qe as t};
