import{n as U,m as w,o as W,e as k,s as L,c as P,a as S,d,f as M,p as C,q as D,r as c,u as O,i as y,g,v as I,w as V,x as j,t as F,b as G}from"./scheduler.P1FHDS8o.js";import{S as X,i as Y,t as z,a as B}from"./index.ccfgP9dp.js";import{g as Z}from"./string.upac9oU4.js";const $=n=>({}),Q=n=>({index:2}),x=n=>({}),R=n=>({index:1}),tt=n=>({}),T=n=>({index:0});function et(n){let e;return{c(){e=F("•")},l(s){e=G(s,"•")},m(s,_){y(s,e,_)},d(s){s&&d(e)}}}function st(n){let e;return{c(){e=F("•")},l(s){e=G(s,"•")},m(s,_){y(s,e,_)},d(s){s&&d(e)}}}function nt(n){let e;return{c(){e=F("•")},l(s){e=G(s,"•")},m(s,_){y(s,e,_)},d(s){s&&d(e)}}}function at(n){let e,s,_,i,m,o,a;const A=n[3].default,p=w(A,n,n[2],T),f=p||et(),E=n[3].default,h=w(E,n,n[2],R),r=h||st(),N=n[3].default,v=w(N,n,n[2],Q),u=v||nt();let q=[n[1],{class:"pending_animation"}],b={};for(let t=0;t<q.length;t+=1)b=W(b,q[t]);return{c(){e=k("div"),s=k("span"),f&&f.c(),_=L(),i=k("span"),r&&r.c(),m=L(),o=k("span"),u&&u.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var l=S(e);s=P(l,"SPAN",{style:!0,class:!0});var H=S(s);f&&f.l(H),H.forEach(d),_=M(l),i=P(l,"SPAN",{style:!0,class:!0});var J=S(i);r&&r.l(J),J.forEach(d),m=M(l),o=P(l,"SPAN",{style:!0,class:!0});var K=S(o);u&&u.l(K),K.forEach(d),l.forEach(d),this.h()},h(){C(s,"animation-delay","0s"),D(s,"class","svelte-1l85mor"),c(s,"running",n[0]),C(i,"animation-delay","0.09s"),D(i,"class","svelte-1l85mor"),c(i,"running",n[0]),C(o,"animation-delay","0.3s"),D(o,"class","svelte-1l85mor"),c(o,"running",n[0]),O(e,b),c(e,"svelte-1l85mor",!0)},m(t,l){y(t,e,l),g(e,s),f&&f.m(s,null),g(e,_),g(e,i),r&&r.m(i,null),g(e,m),g(e,o),u&&u.m(o,null),a=!0},p(t,[l]){p&&p.p&&(!a||l&4)&&I(p,A,t,t[2],a?j(A,t[2],l,tt):V(t[2]),T),(!a||l&1)&&c(s,"running",t[0]),h&&h.p&&(!a||l&4)&&I(h,E,t,t[2],a?j(E,t[2],l,x):V(t[2]),R),(!a||l&1)&&c(i,"running",t[0]),v&&v.p&&(!a||l&4)&&I(v,N,t,t[2],a?j(N,t[2],l,$):V(t[2]),Q),(!a||l&1)&&c(o,"running",t[0]),O(e,b=Z(q,[l&2&&t[1],{class:"pending_animation"}])),c(e,"svelte-1l85mor",!0)},i(t){a||(z(f,t),z(r,t),z(u,t),a=!0)},o(t){B(f,t),B(r,t),B(u,t),a=!1},d(t){t&&d(e),f&&f.d(t),r&&r.d(t),u&&u.d(t)}}}function lt(n,e,s){let{$$slots:_={},$$scope:i}=e,{running:m=!0}=e,{attrs:o=void 0}=e;return n.$$set=a=>{"running"in a&&s(0,m=a.running),"attrs"in a&&s(1,o=a.attrs),"$$scope"in a&&s(2,i=a.$$scope)},[m,o,i,_]}class ft extends X{constructor(e){super(),Y(this,e,lt,at,U,{running:0,attrs:1})}}export{ft as P};