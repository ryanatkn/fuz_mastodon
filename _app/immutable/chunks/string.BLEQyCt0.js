import{B,F as N,G as $,A as ca,a9 as na,I as va,J as Q,K as C,L as M,M as k,C as fa,D as O,E as da,aa as S,x as Z,ab as x,ac as Y,ad as ha,a2 as pa,k as j,ae as F,af as ga,ag as Ea,ah as ya,ai as W,aj as R,ak as Aa,al as Na,q as z,am as ta,an as Ta,ao as la,ap as Ia,aq as wa,H as ka,ar as ba,z as m,as as La,at as Ra,au as Ca}from"./runtime.D9Cf1qJ1.js";import{g as aa,i as Oa,j as Da,k as ea,l as Ha,n as Ma,o as Sa}from"./disclose-version.CgIEDwSC.js";let P=null;function Ga(a,e){return e}function Pa(a,e,r,s){for(var f=[],t=e.length,_=0;_<t;_++)ga(e[_].e,f,!0);var c=t>0&&f.length===0&&r!==null;if(c){var h=r.parentNode;Ea(h),h.append(r),s.clear(),w(a,e[0].prev,e[t-1].next)}ya(f,()=>{for(var g=0;g<t;g++){var p=e[g];c||(s.delete(p.k),w(a,p.prev,p.next)),W(p.e,!c)}})}function Ka(a,e,r,s,f,t=null){var _=a,c={flags:e,items:new Map,first:null},h=(e&ta)!==0;if(h){var g=a;_=N?C(R(g)):g.appendChild(Aa())}N&&$();var p=null,n=!1;B(()=>{var E=r(),v=ca(E)?E:E==null?[]:na(E),d=v.length;if(n&&d===0)return;n=d===0;let A=!1;if(N){var y=_.data===va;y!==(d===0)&&(_=Q(),C(_),M(!1),A=!0)}if(N){for(var l=null,u,i=0;i<d;i++){if(k.nodeType===8&&k.data===Na){_=k,A=!0,M(!1);break}var o=v[i],T=s(o,i);u=ua(k,c,l,null,o,T,i,f,e),c.items.set(T,u),l=u}d>0&&C(Q())}N||$a(v,c,_,f,e,s),t!==null&&(d===0?p?fa(p):p=O(()=>t(_)):p!==null&&da(p,()=>{p=null})),A&&M(!0),r()}),N&&(_=k)}function $a(a,e,r,s,f,t){var K,V,J,U;var _=(f&Ta)!==0,c=(f&(Y|F))!==0,h=a.length,g=e.items,p=e.first,n=p,E,v=null,d,A=[],y=[],l,u,i,o;if(_)for(o=0;o<h;o+=1)l=a[o],u=t(l,o),i=g.get(u),i!==void 0&&((K=i.a)==null||K.measure(),(d??(d=new Set)).add(i));for(o=0;o<h;o+=1){if(l=a[o],u=t(l,o),i=g.get(u),i===void 0){var T=n?n.e.nodes_start:r;v=ua(T,e,v,v===null?e.first:v.next,l,u,o,s,f),g.set(u,v),A=[],y=[],n=v.next;continue}if(c&&qa(i,l,o,f),i.e.f&S&&(fa(i.e),_&&((V=i.a)==null||V.unfix(),(d??(d=new Set)).delete(i))),i!==n){if(E!==void 0&&E.has(i)){if(A.length<y.length){var b=y[0],I;v=b.prev;var G=A[0],D=A[A.length-1];for(I=0;I<A.length;I+=1)ra(A[I],b,r);for(I=0;I<y.length;I+=1)E.delete(y[I]);w(e,G.prev,D.next),w(e,v,G),w(e,D,b),n=b,v=D,o-=1,A=[],y=[]}else E.delete(i),ra(i,n,r),w(e,i.prev,i.next),w(e,i,v===null?e.first:v.next),w(e,v,i),v=i;continue}for(A=[],y=[];n!==null&&n.k!==u;)n.e.f&S||(E??(E=new Set)).add(n),y.push(n),n=n.next;if(n===null)continue;i=n}A.push(i),v=i,n=i.next}if(n!==null||E!==void 0){for(var L=E===void 0?[]:na(E);n!==null;)n.e.f&S||L.push(n),n=n.next;var H=L.length;if(H>0){var _a=f&ta&&h===0?r:null;if(_){for(o=0;o<H;o+=1)(J=L[o].a)==null||J.measure();for(o=0;o<H;o+=1)(U=L[o].a)==null||U.fix()}Pa(e,L,_a,g)}}_&&z(()=>{var X;if(d!==void 0)for(i of d)(X=i.a)==null||X.apply()}),Z.first=e.first&&e.first.e,Z.last=v&&v.e}function qa(a,e,r,s){s&Y&&x(a.v,e),s&F?x(a.i,r):a.i=r}function ua(a,e,r,s,f,t,_,c,h){var g=P;try{var p=(h&Y)!==0,n=(h&ha)===0,E=p?n?pa(f):j(f):f,v=h&F?j(_):_,d={i:v,v:E,k:t,a:null,e:null,prev:r,next:s};return P=d,d.e=O(()=>c(a,E,v),N),d.e.prev=r&&r.e,d.e.next=s&&s.e,r===null?e.first=d:(r.next=d,r.e.next=d.e),s!==null&&(s.prev=d,s.e.prev=d.e),d}finally{P=g}}function ra(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,f=e?e.e.nodes_start:r,t=a.e.nodes_start;t!==s;){var _=la(t);f.before(t),t=_}}function w(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Va(a,e,r,s,f){var t=a,_="",c;B(()=>{if(_===(_=e()??"")){N&&$();return}c!==void 0&&(W(c),c=void 0),_!==""&&(c=O(()=>{if(N){k.data;for(var h=$(),g=h;h!==null&&(h.nodeType!==8||h.data!=="");)g=h,h=la(h);if(h===null)throw Ia(),wa;aa(k,g),t=C(h);return}var p=_+"";r&&(p=`<svg>${p}</svg>`);var n=Oa(p);if((r||s)&&(n=R(n)),aa(R(n),n.lastChild),r||s)for(;R(n);)t.before(R(n));else t.before(n)}))})}function Ja(a,e,...r){var s=a,f=ba,t;B(()=>{f!==(f=e())&&(t&&(W(t),t=null),t=O(()=>f(s,...r)))},ka),N&&(s=k)}function Ba(a,e){if(e){const r=document.body;a.autofocus=!0,z(()=>{document.activeElement===r&&a.focus()})}}let sa=!1;function Ya(){sa||(sa=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{var e;if(!a.defaultPrevented)for(const r of a.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Ua(a){if(N){var e=!1,r=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var s=a.value;q(a,"value",null),a.value=s}if(a.hasAttribute("checked")){var f=a.checked;q(a,"checked",null),a.checked=f}}};a.__on_r=r,Ca(r),Ya()}}function q(a,e,r,s){var f=a.__attributes??(a.__attributes={});N&&(f[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||f[e]!==(f[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[La]=r),r==null?a.removeAttribute(e):typeof r!="string"&&oa(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function Xa(a,e,r,s,f=!1,t=!1,_=!1){var c=e||{},h=a.tagName==="OPTION";for(var g in e)g in r||(r[g]=null);s!==void 0&&(r.class=r.class?r.class+" "+s:s);var p=oa(a),n=a.__attributes??(a.__attributes={}),E=[];for(const l in r){let u=r[l];if(h&&l==="value"&&u==null){a.value=a.__value="",c[l]=u;continue}var v=c[l];if(u!==v){c[l]=u;var d=l[0]+l[1];if(d!=="$$"){if(d==="on"){const i={},o="$$"+l;let T=l.slice(2);var A=Sa(T);if(Da(T)&&(T=T.slice(0,-7),i.capture=!0),!A&&v){if(u!=null)continue;a.removeEventListener(T,c[o],i),c[o]=null}if(u!=null)if(A)a[`__${T}`]=u,Ha([T]);else{let b=function(I){c[l].call(this,I)};e?c[o]=ea(T,a,b,i):E.push([l,u,()=>c[o]=ea(T,a,b,i)])}}else if(l==="style"&&u!=null)a.style.cssText=u+"";else if(l==="autofocus")Ba(a,!!u);else if(l==="__value"||l==="value"&&u!=null)a.value=a[l]=a.__value=u;else{var y=l;f||(y=Ma(y)),u==null&&!t?(n[l]=null,a.removeAttribute(l)):p.includes(y)&&(t||typeof u!="string")?a[y]=u:typeof u!="function"&&(N&&(y==="src"||y==="href"||y==="srcset")||q(a,y,u))}l==="style"&&"__styles"in a&&(a.__styles={})}}}return e||z(()=>{if(a.isConnected)for(const[l,u,i]of E)c[l]===u&&i()}),c}var ia=new Map;function oa(a){var e=ia.get(a.nodeName);if(e)return e;ia.set(a.nodeName,e=[]);for(var r,s=m(a),f=Element.prototype;f!==s;){r=Ra(s);for(var t in r)r[t].set&&e.push(t);s=m(s)}return e}function Qa(a,e){var r=a.__className,s=Fa(e);N&&a.className===s?a.__className=s:(r!==s||N&&a.className!==s)&&(e==null?a.removeAttribute("class"):a.className=s,a.__className=s)}function Fa(a){return a??""}function Za(a,e,r){if(r){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function xa(a,e,r,s){var f=a.__styles??(a.__styles={});f[e]!==r&&(f[e]=r,r==null?a.style.removeProperty(e):a.style.setProperty(e,r,""))}const ja=(a,e)=>!e||!a.startsWith(e)?a:a.substring(e.length),ma=(a,e)=>!e||!a.endsWith(e)?a:a.substring(0,a.length-e.length),ae=(a,e)=>a.endsWith(e)?a:a+e;export{Ja as a,Xa as b,ma as c,ja as d,Ka as e,ae as f,q as g,Va as h,Ga as i,Qa as j,Ya as k,Ua as r,xa as s,Za as t};
