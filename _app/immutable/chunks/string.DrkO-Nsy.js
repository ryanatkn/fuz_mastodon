import{h as T,d as ie,H as fe,e as G,g as D,i as H,j as I,z as le,E as R,A as x,B as M,C as ue,D as oe,F as _e,G as ee,I as ce,J as ve,K as J,L as de,M as he,N as ge}from"./disclose-version.D2vY3w-r.js";import{w as re,g as Ee,x as se,y as Y,z as Ae,O as pe,v as B,m as K,h as Q,F as ye,s as U,P as Te,Q as Ne,J as ae,i as Se,S as Ce,d as be,E as Ie,R as Le,n as X,T as Re,U as we}from"./runtime.CLjFoVp-.js";let k=null;function $e(e,r){return r}function Oe(e,r,s,a){for(var n=[],_=r.length,f=0;f<_;f++)Te(r[f].e,n,!0);var y=_>0&&n.length===0&&s!==null;if(y){var p=s.parentNode;ue(p),p.append(s),a.clear(),S(e,r[0].prev,r[_-1].next)}Ne(n,()=>{for(var E=0;E<_;E++){var A=r[E];y||(a.delete(A.k),S(e,A.prev,A.next)),ae(A.e,!y)}})}function ze(e,r,s,a,n,_=null){var f=e,y={flags:r,items:new Map,first:null},p=(r&ee)!==0;if(p){var E=e;f=T?D(E.firstChild):E.appendChild(oe())}T&&ie();var A=null;re(()=>{var o=s(),h=Ee(o)?o:o==null?[]:Array.from(o),c=h.length,d=y.flags;d&M&&!Se(h)&&!(Ce in h)&&!(be in h)&&(d^=M,d&ce&&!(d&R)&&(d^=R));let v=!1;if(T){var l=f.data===fe;l!==(c===0)&&(f=G(),D(f),H(!1),v=!0)}if(T){for(var u=null,g,t=0;t<c;t++){if(I.nodeType===8&&I.data===le){f=I,v=!0,H(!1);break}var i=h[t],C=a(i,t);g=te(I,y,u,null,i,C,t,n,d),y.items.set(C,g),u=g}c>0&&D(G())}T||De(h,y,f,n,d,a),_!==null&&(c===0?A?se(A):A=Y(()=>_(f)):A!==null&&Ae(A,()=>{A=null})),v&&H(!0)}),T&&(f=I)}function De(e,r,s,a,n,_){var $,z,V,W;var f=(n&_e)!==0,y=(n&(R|x))!==0,p=e.length,E=r.items,A=r.first,o=A,h=new Set,c=null,d=new Set,v=[],l=[],u,g,t,i;if(f)for(i=0;i<p;i+=1)u=e[i],g=_(u,i),t=E.get(g),t!==void 0&&(($=t.a)==null||$.measure(),d.add(t));for(i=0;i<p;i+=1){if(u=e[i],g=_(u,i),t=E.get(g),t===void 0){var C=o?o.e.nodes.start:s;c=te(C,r,c,c===null?r.first:c.next,u,g,i,a,n),E.set(g,c),v=[],l=[],o=c.next;continue}if(y&&He(t,u,i,n),t.e.f&pe&&(se(t.e),f&&((z=t.a)==null||z.unfix(),d.delete(t))),t!==o){if(h.has(t)){if(v.length<l.length){var b=l[0],N;c=b.prev;var F=v[0],w=v[v.length-1];for(N=0;N<v.length;N+=1)Z(v[N],b,s);for(N=0;N<l.length;N+=1)h.delete(l[N]);S(r,F.prev,w.next),S(r,c,F),S(r,w,b),o=b,c=w,i-=1,v=[],l=[]}else h.delete(t),Z(t,o,s),S(r,t.prev,t.next),S(r,t,c===null?r.first:c.next),S(r,c,t),c=t;continue}for(v=[],l=[];o!==null&&o.k!==g;)h.add(o),l.push(o),o=o.next;if(o===null)continue;t=o}v.push(t),c=t,o=t.next}const L=Array.from(h);for(;o!==null;)L.push(o),o=o.next;var O=L.length;if(O>0){var ne=n&ee&&p===0?s:null;if(f){for(i=0;i<O;i+=1)(V=L[i].a)==null||V.measure();for(i=0;i<O;i+=1)(W=L[i].a)==null||W.fix()}Oe(r,L,ne,E)}f&&B(()=>{var q;for(t of d)(q=t.a)==null||q.apply()}),K.first=r.first&&r.first.e,K.last=c&&c.e}function He(e,r,s,a){a&R&&Q(e.v,r),a&x?Q(e.i,s):e.i=s}function te(e,r,s,a,n,_,f,y,p){var E=k;try{var A=(p&R)!==0,o=(p&M)===0,h=A?o?ye(n):U(n):n,c=p&x?U(f):f,d={i:c,v:h,k:_,a:null,e:null,prev:s,next:a};return k=d,d.e=Y(()=>y(e,h,c),T),d.e.prev=s&&s.e,d.e.next=a&&a.e,s===null?r.first=d:(s.next=d,s.e.next=d.e),a!==null&&(a.prev=d,a.e.prev=d.e),d}finally{k=E}}function Z(e,r,s){for(var a=e.next?e.next.e.nodes.start:s,n=r?r.e.nodes.start:s,_=e.e.nodes.start;_!==a;){var f=_.nextSibling;n.before(_),_=f}}function S(e,r,s){r===null?e.first=s:(r.next=s,r.e.next=s&&s.e),s!==null&&(s.prev=r,s.e.prev=r&&r.e)}function Ve(e,r,...s){var a=e,n,_;re(()=>{n!==(n=r())&&(_&&(ae(_),_=null),n&&(_=Y(()=>n(a,...s))))},Ie),T&&(a=I)}function ke(e,r){if(r){const s=document.body;e.autofocus=!0,B(()=>{document.activeElement===s&&e.focus()})}}let j=!1;function Me(){j||(j=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const s of e.target.elements)(r=s.__on_r)==null||r.call(s)})},{capture:!0}))}function We(e){if(T){var r=!1,s=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var a=e.value;P(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var n=e.checked;P(e,"checked",null),e.checked=n}}};e.__on_r=s,we(s),Me()}}function P(e,r,s){s=s==null?null:s+"";var a=e.__attributes??(e.__attributes={});T&&(a[r]=e.getAttribute(r),r==="src"||r==="href"||r==="srcset")||a[r]!==(a[r]=s)&&(r==="loading"&&(e[Le]=s),s===null?e.removeAttribute(r):e.setAttribute(r,s))}function qe(e,r,s,a,n){var _=n.length!==0,f=r||{},y=e.tagName==="OPTION";for(var p in r)p in s||(s[p]=null);_&&!s.class&&(s.class="");var E=m.get(e.nodeName);E||m.set(e.nodeName,E=xe(e));var A=e.__attributes??(e.__attributes={}),o=[];for(const l in s){let u=s[l];if(y&&l==="value"&&u==null){e.value=e.__value="",f[l]=u;continue}var h=f[l];if(u!==h){f[l]=u;var c=l[0]+l[1];if(c!=="$$")if(c==="on"){const g={},t="$$"+l;let i=l.slice(2);var d=ge.includes(i);if(ve(i)&&(i=i.slice(0,-7),g.capture=!0),!d&&h){if(u!=null)continue;e.removeEventListener(i,f[t],g),f[t]=null}if(u!=null)if(d)e[`__${i}`]=u,de([i]);else{let C=function(b){f[l].call(this,b)};r?f[t]=J(i,e,C,g):o.push([l,u,()=>f[t]=J(i,e,C,g)])}}else if(u==null)A[l]=null,e.removeAttribute(l);else if(l==="style")e.style.cssText=u+"";else if(l==="autofocus")ke(e,!!u);else if(l==="__value"||l==="value")e.value=e[l]=e.__value=u;else{var v=l;a&&(v=v.toLowerCase(),v=he[v]||v),E.includes(v)?T&&(v==="src"||v==="href"||v==="srcset")||(e[v]=u):typeof u!="function"&&(_&&v==="class"&&(u&&(u+=" "),u+=n),P(e,v,u))}}}return r||B(()=>{if(e.isConnected)for(const[l,u,g]of o)f[l]===u&&g()}),f}var Pe=["width","height"],m=new Map;function xe(e){for(var r=[],s,a=X(e);a.constructor.name!=="Element";){s=Re(a);for(var n in s)s[n].set&&!Pe.includes(n)&&r.push(n);a=X(a)}return r}function Ge(e,r){var s=e.__className,a=Ye(r);T&&e.className===a?e.__className=a:(s!==a||T&&e.className!==a)&&(r==null?e.removeAttribute("class"):e.className=a,e.__className=a)}function Ye(e){return e??""}function Je(e,r,s){s?e.classList.add(r):e.classList.remove(r)}function Ke(e,r,s,a){const n=e.style,_=n.getPropertyValue(r);s==null?_!==""&&n.removeProperty(r):_!==s&&n.setProperty(r,s,"")}const Qe=(e,r)=>!r||!e.startsWith(r)?e:e.substring(r.length),Ue=(e,r)=>!r||!e.endsWith(r)?e:e.substring(0,e.length-r.length),Xe=(e,r)=>e.endsWith(r)?e:e+r;export{Ve as a,qe as b,Ue as c,Qe as d,P as e,Xe as f,ze as g,Ge as h,$e as i,Me as j,We as r,Ke as s,Je as t};