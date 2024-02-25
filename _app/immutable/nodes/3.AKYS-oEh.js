import{n as de,m as se,e as g,s as C,t as w,c as k,a as v,d as h,f as T,Z as rl,b as q,q as p,i as D,g as u,v as re,w as oe,x as ae,h as Z,k as el,_ as Ie,p as ve,r as Y,$ as ll,z as De,j as be}from"../chunks/scheduler.P1FHDS8o.js";import{S as ge,i as ke,t as j,g as fe,a as A,c as ie,b as _e,d as ue,m as he,e as pe}from"../chunks/index.ccfgP9dp.js";import{s as Ae,a as Oe,e as ne,b as ce,u as ol,d as al}from"../chunks/string.upac9oU4.js";import{p as tl}from"../chunks/stores.WG6nfhbz.js";import{f as Se,L as nl,p as fl,a as Ve,s as il}from"../chunks/package.L02OYDMe.js";import{b as cl}from"../chunks/entry.s1FRC_d8.js";function Ne(o,e,t){var n,i;const l=o.slice();l[24]=e[t],l[29]=t;const s=l[16](l[11],l[24]);l[25]=s;const r=(n=l[3])==null?void 0:n[l[29]];l[26]=r;const a=l[26]&&((i=l[5])==null?void 0:i[l[26]]);return l[27]=a,l}function Ce(o,e,t){const l=o.slice();return l[15]=e[t].name,l[30]=e[t].kind,l}const _l=o=>({homepage_url:o[0]&512}),Te=o=>({homepage_url:o[9]}),ul=o=>({npm_url:o[0]&8192}),Le=o=>({npm_url:o[13]}),hl=o=>({description:o[0]&128}),Me=o=>({description:o[7]}),pl=o=>({repo_name:o[0]&4096}),We=o=>({repo_name:o[12]});function Pe(o){let e=" ",t,l;return{c(){t=w(e),l=w(o[6])},l(s){t=q(s,e),l=q(s,o[6])},m(s,r){D(s,t,r),D(s,l,r)},p(s,r){r[0]&64&&Z(l,s[6])},d(s){s&&(h(t),h(l))}}}function ml(o){let e,t,l=o[6]&&Pe(o);return{c(){e=g("div"),t=w(o[12]),l&&l.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var r=v(e);t=q(r,o[12]),l&&l.l(r),r.forEach(h),this.h()},h(){p(e,"class","repo_name svelte-11qjk3r")},m(s,r){D(s,e,r),u(e,t),l&&l.m(e,null)},p(s,r){r[0]&4096&&Z(t,s[12]),s[6]?l?l.p(s,r):(l=Pe(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(s){s&&h(e),l&&l.d()}}}function He(o){let e;const t=o[23].description,l=se(t,o,o[22],Me),s=l||dl(o);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,a){s&&s.m(r,a),e=!0},p(r,a){l?l.p&&(!e||a[0]&4194432)&&re(l,t,r,r[22],e?ae(t,r[22],a,hl):oe(r[22]),Me):s&&s.p&&(!e||a[0]&128)&&s.p(r,e?a:[-1,-1])},i(r){e||(j(s,r),e=!0)},o(r){A(s,r),e=!1},d(r){s&&s.d(r)}}}function dl(o){let e,t;return{c(){e=g("div"),t=w(o[7]),this.h()},l(l){e=k(l,"DIV",{class:!0});var s=v(e);t=q(s,o[7]),s.forEach(h),this.h()},h(){p(e,"class","spaced")},m(l,s){D(l,e,s),u(e,t)},p(l,s){s[0]&128&&Z(t,l[7])},d(l){l&&h(e)}}}function Re(o){let e;const t=o[23].npm_url,l=se(t,o,o[22],Le),s=l||gl(o);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,a){s&&s.m(r,a),e=!0},p(r,a){l?l.p&&(!e||a[0]&4202496)&&re(l,t,r,r[22],e?ae(t,r[22],a,ul):oe(r[22]),Le):s&&s.p&&(!e||a[0]&32768)&&s.p(r,e?a:[-1,-1])},i(r){e||(j(s,r),e=!0)},o(r){A(s,r),e=!1},d(r){s&&s.d(r)}}}function gl(o){let e,t,l;return{c(){e=g("blockquote"),t=w("npm i -D "),l=w(o[15]),this.h()},l(s){e=k(s,"BLOCKQUOTE",{class:!0});var r=v(e);t=q(r,"npm i -D "),l=q(r,o[15]),r.forEach(h),this.h()},h(){p(e,"class","npm_url spaced svelte-11qjk3r")},m(s,r){D(s,e,r),u(e,t),u(e,l)},p(s,r){r[0]&32768&&Z(l,s[15])},d(s){s&&h(e)}}}function Ue(o){let e;const t=o[23].homepage_url,l=se(t,o,o[22],Te),s=l||kl(o);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,a){s&&s.m(r,a),e=!0},p(r,a){l?l.p&&(!e||a[0]&4194816)&&re(l,t,r,r[22],e?ae(t,r[22],a,_l):oe(r[22]),Te):s&&s.p&&(!e||a[0]&16896)&&s.p(r,e?a:[-1,-1])},i(r){e||(j(s,r),e=!0)},o(r){A(s,r),e=!1},d(r){s&&s.d(r)}}}function kl(o){let e,t,l,s,r,a,n,i=Se(o[9])+"",m;return{c(){e=g("div"),t=w(`homepage:
					`),l=g("a"),s=g("img"),n=C(),m=w(i),this.h()},l(f){e=k(f,"DIV",{class:!0});var c=v(e);t=q(c,`homepage:
					`),l=k(c,"A",{class:!0,href:!0});var _=v(l);s=k(_,"IMG",{src:!0,alt:!0}),n=T(_),m=q(_,i),_.forEach(h),c.forEach(h),this.h()},h(){Ie(s.src,r=ne(o[9],"/")+"favicon.png")||p(s,"src",r),p(s,"alt",a="favicon to homepage at "+o[9]),ve(s,"width","16px"),ve(s,"height","16px"),ve(s,"margin-right","var(--spacing_xs)"),p(l,"class","chip row svelte-11qjk3r"),p(l,"href",o[9]),Y(l,"selected",o[9]===o[14].url.href),p(e,"class","row svelte-11qjk3r")},m(f,c){D(f,e,c),u(e,t),u(e,l),u(l,s),u(l,n),u(l,m)},p(f,c){c[0]&512&&!Ie(s.src,r=ne(f[9],"/")+"favicon.png")&&p(s,"src",r),c[0]&512&&a!==(a="favicon to homepage at "+f[9])&&p(s,"alt",a),c[0]&512&&i!==(i=Se(f[9])+"")&&Z(m,i),c[0]&512&&p(l,"href",f[9]),c[0]&16896&&Y(l,"selected",f[9]===f[14].url.href)},d(f){f&&h(e)}}}function Be(o){let e,t,l,s;return{c(){e=g("div"),t=w("repo: "),l=g("a"),s=w(o[12]),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=v(e);t=q(a,"repo: "),l=k(a,"A",{class:!0,title:!0,href:!0});var n=v(l);s=q(n,o[12]),n.forEach(h),a.forEach(h),this.h()},h(){p(l,"class","chip svelte-11qjk3r"),p(l,"title","repo"),p(l,"href",o[11]),p(e,"class","row svelte-11qjk3r")},m(r,a){D(r,e,a),u(e,t),u(e,l),u(l,s)},p(r,a){a[0]&4096&&Z(s,r[12]),a[0]&2048&&p(l,"href",r[11])},d(r){r&&h(e)}}}function Fe(o){let e,t,l,s;return{c(){e=g("div"),t=w("npm: "),l=g("a"),s=w(o[15]),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=v(e);t=q(a,"npm: "),l=k(a,"A",{class:!0,title:!0,href:!0});var n=v(l);s=q(n,o[15]),n.forEach(h),a.forEach(h),this.h()},h(){p(l,"class","chip svelte-11qjk3r"),p(l,"title","npm"),p(l,"href",o[13]),p(e,"class","row svelte-11qjk3r")},m(r,a){D(r,e,a),u(e,t),u(e,l),u(l,s)},p(r,a){a[0]&32768&&Z(s,r[15]),a[0]&8192&&p(l,"href",r[13])},d(r){r&&h(e)}}}function ze(o){let e,t,l,s;return{c(){e=g("div"),t=w("version: "),l=g("a"),s=w(o[8]),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=v(e);t=q(a,"version: "),l=k(a,"A",{class:!0,title:!0,href:!0});var n=v(l);s=q(n,o[8]),n.forEach(h),a.forEach(h),this.h()},h(){p(l,"class","chip svelte-11qjk3r"),p(l,"title","version"),p(l,"href",o[10]),p(e,"class","row svelte-11qjk3r")},m(r,a){D(r,e,a),u(e,t),u(e,l),u(l,s)},p(r,a){a[0]&256&&Z(s,r[8]),a[0]&1024&&p(l,"href",r[10])},d(r){r&&h(e)}}}function Je(o){let e,t,l,s;return{c(){e=g("div"),t=w("license: "),l=g("a"),s=w(o[1]),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=v(e);t=q(a,"license: "),l=k(a,"A",{class:!0,title:!0,href:!0});var n=v(l);s=q(n,o[1]),n.forEach(h),a.forEach(h),this.h()},h(){p(l,"class","chip svelte-11qjk3r"),p(l,"title","license"),p(l,"href",o[4]),p(e,"class","row svelte-11qjk3r")},m(r,a){D(r,e,a),u(e,t),u(e,l),u(l,s)},p(r,a){a[0]&2&&Z(s,r[1]),a[0]&16&&p(l,"href",r[4])},d(r){r&&h(e)}}}function Ge(o){let e,t,l,s,r,a,n,i,m;return{c(){e=g("section"),t=w(`data:
				`),l=g("a"),s=w("package.json"),a=C(),n=g("a"),i=w("src.json"),this.h()},l(f){e=k(f,"SECTION",{class:!0});var c=v(e);t=q(c,`data:
				`),l=k(c,"A",{class:!0,title:!0,href:!0});var _=v(l);s=q(_,"package.json"),_.forEach(h),a=T(c),n=k(c,"A",{class:!0,title:!0,href:!0});var E=v(n);i=q(E,"src.json"),E.forEach(h),c.forEach(h),this.h()},h(){p(l,"class","chip svelte-11qjk3r"),p(l,"title","data"),p(l,"href",r=ne(o[9],"/")+".well-known/package.json"),p(n,"class","chip svelte-11qjk3r"),p(n,"title","data"),p(n,"href",m=ne(o[9],"/")+".well-known/src.json"),p(e,"class","row spaced svelte-11qjk3r")},m(f,c){D(f,e,c),u(e,t),u(e,l),u(l,s),u(e,a),u(e,n),u(n,i)},p(f,c){c[0]&512&&r!==(r=ne(f[9],"/")+".well-known/package.json")&&p(l,"href",r),c[0]&512&&m!==(m=ne(f[9],"/")+".well-known/src.json")&&p(n,"href",m)},d(f){f&&h(e)}}}function Ke(o){let e,t,l=[],s=new Map,r=ce(o[2]);const a=n=>n[24];for(let n=0;n<r.length;n+=1){let i=Ne(o,r,n),m=a(i);s.set(m,l[n]=Ze(m,i))}return{c(){e=g("section"),t=g("menu");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=k(n,"SECTION",{class:!0});var i=v(e);t=k(i,"MENU",{});var m=v(t);for(let f=0;f<l.length;f+=1)l[f].l(m);m.forEach(h),i.forEach(h),this.h()},h(){p(e,"class","width_full spaced")},m(n,i){D(n,e,i),u(e,t);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(t,null)},p(n,i){i[0]&67628&&(r=ce(n[2]),l=ol(l,i,a,1,n,r,s,t,al,Ze,null,Ne))},d(n){n&&h(e);for(let i=0;i<l.length;i+=1)l[i].d()}}}function Qe(o){let e,t=ce(o[27].declarations),l=[];for(let s=0;s<t.length;s+=1)l[s]=Ye(Ce(o,t,s));return{c(){e=g("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=k(s,"UL",{class:!0});var r=v(e);for(let a=0;a<l.length;a+=1)l[a].l(r);r.forEach(h),this.h()},h(){p(e,"class","declarations svelte-11qjk3r")},m(s,r){D(s,e,r);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(s,r){if(r[0]&44){t=ce(s[27].declarations);let a;for(a=0;a<t.length;a+=1){const n=Ce(s,t,a);l[a]?l[a].p(n,r):(l[a]=Ye(n),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(s){s&&h(e),ll(l,s)}}}function Ye(o){let e,t=o[15]+"",l,s,r;return{c(){e=g("li"),l=w(t),s=C(),this.h()},l(a){e=k(a,"LI",{class:!0});var n=v(e);l=q(n,t),s=T(n),n.forEach(h),this.h()},h(){p(e,"class",r="declaration chip "+o[30]+"_declaration svelte-11qjk3r")},m(a,n){D(a,e,n),u(e,l),u(e,s)},p(a,n){n[0]&44&&t!==(t=a[15]+"")&&Z(l,t),n[0]&44&&r!==(r="declaration chip "+a[30]+"_declaration svelte-11qjk3r")&&p(e,"class",r)},d(a){a&&h(e)}}}function Ze(o,e){let t,l,s,r=e[24]+"",a,n,i,m,f=e[27]&&Qe(e);return{key:o,first:null,c(){t=g("li"),l=g("div"),s=g("a"),a=w(r),i=C(),f&&f.c(),m=C(),this.h()},l(c){t=k(c,"LI",{class:!0});var _=v(t);l=k(_,"DIV",{});var E=v(l);s=k(E,"A",{class:!0,href:!0});var I=v(s);a=q(I,r),I.forEach(h),E.forEach(h),i=T(_),f&&f.l(_),m=T(_),_.forEach(h),this.h()},h(){p(s,"class","chip svelte-11qjk3r"),p(s,"href",n=e[25]),p(t,"class","module svelte-11qjk3r"),Y(t,"ts",e[24].endsWith(".js")),Y(t,"svelte",e[24].endsWith(".svelte")),Y(t,"css",e[24].endsWith(".css")),Y(t,"json",e[24].endsWith(".json")),this.first=t},m(c,_){D(c,t,_),u(t,l),u(l,s),u(s,a),u(t,i),f&&f.m(t,null),u(t,m)},p(c,_){e=c,_[0]&4&&r!==(r=e[24]+"")&&Z(a,r),_[0]&2052&&n!==(n=e[25])&&p(s,"href",n),e[27]?f?f.p(e,_):(f=Qe(e),f.c(),f.m(t,m)):f&&(f.d(1),f=null),_[0]&4&&Y(t,"ts",e[24].endsWith(".js")),_[0]&4&&Y(t,"svelte",e[24].endsWith(".svelte")),_[0]&4&&Y(t,"css",e[24].endsWith(".css")),_[0]&4&&Y(t,"json",e[24].endsWith(".json"))},d(c){c&&h(t),f&&f.d()}}}function vl(o){let e,t,l,s,r,a,n,i,m,f,c,_,E,I,L,S,K,V="raw data for <code>pkg: Package_Meta</code>",H,Q,X,x=JSON.stringify(o[0],null,"	")+"",le,R;const N=o[23].repo_name,te=se(N,o,o[22],We),O=te||ml(o),ee=o[23].default,y=se(ee,o,o[22],null);let M=o[7]&&He(o),W=o[13]&&Re(o),P=o[9]&&Ue(o),U=o[11]&&Be(o),B=o[13]&&Fe(o),F=o[10]&&ze(o),z=o[4]&&Je(o),J=o[9]&&Ge(o),G=o[2]&&o[11]&&Ke(o);return{c(){e=g("div"),t=g("header"),O&&O.c(),l=C(),y&&y.c(),s=C(),M&&M.c(),r=C(),W&&W.c(),a=C(),n=g("section"),P&&P.c(),i=C(),U&&U.c(),m=C(),B&&B.c(),f=C(),F&&F.c(),c=C(),z&&z.c(),_=C(),J&&J.c(),E=C(),G&&G.c(),I=C(),L=g("section"),S=g("details"),K=g("summary"),K.innerHTML=V,H=C(),Q=g("pre"),X=g("code"),le=w(x),this.h()},l(d){e=k(d,"DIV",{class:!0});var b=v(e);t=k(b,"HEADER",{class:!0});var Ee=v(t);O&&O.l(Ee),Ee.forEach(h),l=T(b),y&&y.l(b),s=T(b),M&&M.l(b),r=T(b),W&&W.l(b),a=T(b),n=k(b,"SECTION",{class:!0});var $=v(n);P&&P.l($),i=T($),U&&U.l($),m=T($),B&&B.l($),f=T($),F&&F.l($),c=T($),z&&z.l($),_=T($),J&&J.l($),$.forEach(h),E=T(b),G&&G.l(b),I=T(b),L=k(b,"SECTION",{class:!0});var je=v(L);S=k(je,"DETAILS",{});var me=v(S);K=k(me,"SUMMARY",{"data-svelte-h":!0}),rl(K)!=="svelte-k220bw"&&(K.innerHTML=V),H=T(me),Q=k(me,"PRE",{class:!0});var we=v(Q);X=k(we,"CODE",{});var qe=v(X);le=q(qe,x),qe.forEach(h),we.forEach(h),me.forEach(h),je.forEach(h),b.forEach(h),this.h()},h(){p(t,"class","spaced"),p(n,"class","properties width_full spaced svelte-11qjk3r"),p(Q,"class","svelte-11qjk3r"),p(L,"class","width_full spaced"),p(e,"class","package_detail svelte-11qjk3r")},m(d,b){D(d,e,b),u(e,t),O&&O.m(t,null),u(e,l),y&&y.m(e,null),u(e,s),M&&M.m(e,null),u(e,r),W&&W.m(e,null),u(e,a),u(e,n),P&&P.m(n,null),u(n,i),U&&U.m(n,null),u(n,m),B&&B.m(n,null),u(n,f),F&&F.m(n,null),u(n,c),z&&z.m(n,null),u(n,_),J&&J.m(n,null),u(e,E),G&&G.m(e,null),u(e,I),u(e,L),u(L,S),u(S,K),u(S,H),u(S,Q),u(Q,X),u(X,le),R=!0},p(d,b){te?te.p&&(!R||b[0]&4198400)&&re(te,N,d,d[22],R?ae(N,d[22],b,pl):oe(d[22]),We):O&&O.p&&(!R||b[0]&4160)&&O.p(d,R?b:[-1,-1]),y&&y.p&&(!R||b[0]&4194304)&&re(y,ee,d,d[22],R?ae(ee,d[22],b,null):oe(d[22]),null),d[7]?M?(M.p(d,b),b[0]&128&&j(M,1)):(M=He(d),M.c(),j(M,1),M.m(e,r)):M&&(fe(),A(M,1,1,()=>{M=null}),ie()),d[13]?W?(W.p(d,b),b[0]&8192&&j(W,1)):(W=Re(d),W.c(),j(W,1),W.m(e,a)):W&&(fe(),A(W,1,1,()=>{W=null}),ie()),d[9]?P?(P.p(d,b),b[0]&512&&j(P,1)):(P=Ue(d),P.c(),j(P,1),P.m(n,i)):P&&(fe(),A(P,1,1,()=>{P=null}),ie()),d[11]?U?U.p(d,b):(U=Be(d),U.c(),U.m(n,m)):U&&(U.d(1),U=null),d[13]?B?B.p(d,b):(B=Fe(d),B.c(),B.m(n,f)):B&&(B.d(1),B=null),d[10]?F?F.p(d,b):(F=ze(d),F.c(),F.m(n,c)):F&&(F.d(1),F=null),d[4]?z?z.p(d,b):(z=Je(d),z.c(),z.m(n,_)):z&&(z.d(1),z=null),d[9]?J?J.p(d,b):(J=Ge(d),J.c(),J.m(n,null)):J&&(J.d(1),J=null),d[2]&&d[11]?G?G.p(d,b):(G=Ke(d),G.c(),G.m(e,I)):G&&(G.d(1),G=null),(!R||b[0]&1)&&x!==(x=JSON.stringify(d[0],null,"	")+"")&&Z(le,x)},i(d){R||(j(O,d),j(y,d),j(M),j(W),j(P),R=!0)},o(d){A(O,d),A(y,d),A(M),A(W),A(P),R=!1},d(d){d&&h(e),O&&O.d(d),y&&y.d(d),M&&M.d(),W&&W.d(),P&&P.d(),U&&U.d(),B&&B.d(),F&&F.d(),z&&z.d(),J&&J.d(),G&&G.d()}}}function bl(o,e,t){let l,s,r,a,n,i,m,f,c,_,E,I,L,S,K,V,H,Q,X,x;el(o,tl,O=>t(14,x=O));let{$$slots:le={},$$scope:R}=e,{pkg:N}=e;const te=(O,ee)=>O+"/blob/main/src/lib/"+(ee.endsWith(".js")?ee.slice(0,-3)+".ts":ee);return o.$$set=O=>{"pkg"in O&&t(0,N=O.pkg),"$$scope"in O&&t(22,R=O.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&1&&t(21,{package_json:l,src_json:s,npm_url:r,repo_name:a,repo_url:n,changelog_url:i,homepage_url:m}=N,l,(t(20,s),t(0,N)),(t(13,r),t(0,N)),(t(12,a),t(0,N)),(t(11,n),t(0,N)),(t(10,i),t(0,N)),(t(9,m),t(0,N))),o.$$.dirty[0]&2097152&&t(15,{name:f,version:c,description:_,icon:E,license:I,repository:L,exports:S}=l,f,(t(8,c),t(21,l),t(0,N)),(t(7,_),t(21,l),t(0,N)),(t(6,E),t(21,l),t(0,N)),(t(1,I),t(21,l),t(0,N)),(t(19,L),t(21,l),t(0,N)),(t(17,S),t(21,l),t(0,N))),o.$$.dirty[0]&1048576&&t(5,{modules:K}=s,K),o.$$.dirty[0]&524288&&t(18,V=L?Ae(Oe(Oe(typeof L=="string"?L:L.url,".git"),"/"),"git+"):null),o.$$.dirty[0]&262146&&t(4,H=I&&V?V+"/blob/main/LICENSE":null),o.$$.dirty[0]&131072&&t(3,Q=S&&Object.keys(S)),o.$$.dirty[0]&131072&&t(2,X=S?Object.keys(S).map(O=>{const ee=Ae(O,"./");return ee==="."?"index.js":ee}):null)},[N,I,X,Q,H,K,E,_,c,m,i,n,a,r,x,f,te,S,V,L,s,l,R,le]}class El extends ge{constructor(e){super(),ke(this,e,bl,vl,de,{pkg:0},null,[-1,-1])}}const jl=o=>o.split("/").filter(e=>e&&e!=="."&&e!==".."),wl=o=>{const e=[],t=jl(o);t.length&&e.push({type:"separator",path:"/"});let l="";for(let s=0;s<t.length;s++){const r=t[s];l+="/"+r,e.push({type:"piece",name:r,path:l}),s!==t.length-1&&e.push({type:"separator",path:l})}return e};function Xe(o,e,t){const l=o.slice();return l[11]=e[t],l}const ql=o=>({}),ye=o=>({});function Il(o){let e;return{c(){e=w("•")},l(t){e=q(t,"•")},m(t,l){D(t,e,l)},d(t){t&&h(e)}}}function Dl(o){let e,t;const l=o[10].separator,s=se(l,o,o[9],ye),r=s||Ol();return{c(){e=g("span"),r&&r.c(),this.h()},l(a){e=k(a,"SPAN",{class:!0});var n=v(e);r&&r.l(n),n.forEach(h),this.h()},h(){p(e,"class","separator svelte-g6c005")},m(a,n){D(a,e,n),r&&r.m(e,null),t=!0},p(a,n){s&&s.p&&(!t||n&512)&&re(s,l,a,a[9],t?ae(l,a[9],n,ql):oe(a[9]),ye)},i(a){t||(j(r,a),t=!0)},o(a){A(r,a),t=!1},d(a){a&&h(e),r&&r.d(a)}}}function Al(o){let e,t=o[11].name+"",l,s;return{c(){e=g("a"),l=w(t),this.h()},l(r){e=k(r,"A",{href:!0,class:!0});var a=v(e);l=q(a,t),a.forEach(h),this.h()},h(){p(e,"href",s=o[0]+o[11].path),p(e,"class","svelte-g6c005"),Y(e,"selected",o[11].path===o[3])},m(r,a){D(r,e,a),u(e,l)},p(r,a){a&4&&t!==(t=r[11].name+"")&&Z(l,t),a&5&&s!==(s=r[0]+r[11].path)&&p(e,"href",s),a&12&&Y(e,"selected",r[11].path===r[3])},i:be,o:be,d(r){r&&h(e)}}}function Ol(o){let e;return{c(){e=w("/")},l(t){e=q(t,"/")},m(t,l){D(t,e,l)},d(t){t&&h(e)}}}function $e(o){let e,t,l,s;const r=[Al,Dl],a=[];function n(i,m){return i[11].type==="piece"?0:1}return e=n(o),t=a[e]=r[e](o),{c(){t.c(),l=De()},l(i){t.l(i),l=De()},m(i,m){a[e].m(i,m),D(i,l,m),s=!0},p(i,m){let f=e;e=n(i),e===f?a[e].p(i,m):(fe(),A(a[f],1,1,()=>{a[f]=null}),ie(),t=a[e],t?t.p(i,m):(t=a[e]=r[e](i),t.c()),j(t,1),t.m(l.parentNode,l))},i(i){s||(j(t),s=!0)},o(i){A(t),s=!1},d(i){i&&h(l),a[e].d(i)}}}function Sl(o){let e,t,l;const s=o[10].default,r=se(s,o,o[9],null),a=r||Il();let n=ce(o[2]),i=[];for(let f=0;f<n.length;f+=1)i[f]=$e(Xe(o,n,f));const m=f=>A(i[f],1,1,()=>{i[f]=null});return{c(){e=g("div"),t=g("a"),a&&a.c();for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=k(f,"DIV",{class:!0});var c=v(e);t=k(c,"A",{href:!0,class:!0});var _=v(t);a&&a.l(_),_.forEach(h);for(let E=0;E<i.length;E+=1)i[E].l(c);c.forEach(h),this.h()},h(){p(t,"href",o[1]),p(t,"class","svelte-g6c005"),Y(t,"selected",o[1]===o[3]),p(e,"class","breadcrumb svelte-g6c005")},m(f,c){D(f,e,c),u(e,t),a&&a.m(t,null);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(e,null);l=!0},p(f,[c]){if(r&&r.p&&(!l||c&512)&&re(r,s,f,f[9],l?ae(s,f[9],c,null):oe(f[9]),null),(!l||c&2)&&p(t,"href",f[1]),(!l||c&10)&&Y(t,"selected",f[1]===f[3]),c&525){n=ce(f[2]);let _;for(_=0;_<n.length;_+=1){const E=Xe(f,n,_);i[_]?(i[_].p(E,c),j(i[_],1)):(i[_]=$e(E),i[_].c(),j(i[_],1),i[_].m(e,null))}for(fe(),_=n.length;_<i.length;_+=1)m(_);ie()}},i(f){if(!l){j(a,f);for(let c=0;c<n.length;c+=1)j(i[c]);l=!0}},o(f){A(a,f),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)A(i[c]);l=!1},d(f){f&&h(e),a&&a.d(f),ll(i,f)}}}function Vl(o,e,t){let l,s,r,a,n,i;el(o,tl,I=>t(8,i=I));let{$$slots:m={},$$scope:f}=e,{path:c=void 0}=e,{selected_path:_=void 0}=e,{base_path:E=void 0}=e;return o.$$set=I=>{"path"in I&&t(4,c=I.path),"selected_path"in I&&t(5,_=I.selected_path),"base_path"in I&&t(6,E=I.base_path),"$$scope"in I&&t(9,f=I.$$scope)},o.$$.update=()=>{o.$$.dirty&272&&t(7,l=c??i.url.pathname),o.$$.dirty&160&&t(3,s=_===null?null:_===void 0?l:_),o.$$.dirty&64&&t(0,r=E??cl),o.$$.dirty&128&&t(2,a=wl(l)),o.$$.dirty&1&&t(1,n=r||"/")},[r,n,a,s,c,_,E,l,i,f,m]}class sl extends ge{constructor(e){super(),ke(this,e,Vl,Sl,de,{path:4,selected_path:5,base_path:6})}}function xe(o){let e,t;return e=new nl({props:{pkg:o[0],root_url:"https://www.fuz.dev/"}}),{c(){_e(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,s){he(e,l,s),t=!0},p(l,s){const r={};s&1&&(r.pkg=l[0]),e.$set(r)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){pe(e,l)}}}function Nl(o){var l;let e=((l=o[0].package_json)==null?void 0:l.icon)+"",t;return{c(){t=w(e)},l(s){t=q(s,e)},m(s,r){D(s,t,r)},p(s,r){var a;r&1&&e!==(e=((a=s[0].package_json)==null?void 0:a.icon)+"")&&Z(t,e)},d(s){s&&h(t)}}}function Cl(o){let e,t,l,s,r,a,n=o[0].package_json&&xe(o);const i=o[1].default,m=se(i,o,o[2],null);return r=new sl({props:{$$slots:{default:[Nl]},$$scope:{ctx:o}}}),{c(){e=g("footer"),n&&n.c(),t=C(),m&&m.c(),l=C(),s=g("div"),_e(r.$$.fragment),this.h()},l(f){e=k(f,"FOOTER",{class:!0});var c=v(e);n&&n.l(c),t=T(c),m&&m.l(c),l=T(c),s=k(c,"DIV",{class:!0});var _=v(s);ue(r.$$.fragment,_),_.forEach(h),c.forEach(h),this.h()},h(){p(s,"class","breadcrumb_wrapper svelte-1tl3dpi"),p(e,"class","svelte-1tl3dpi")},m(f,c){D(f,e,c),n&&n.m(e,null),u(e,t),m&&m.m(e,null),u(e,l),u(e,s),he(r,s,null),a=!0},p(f,[c]){f[0].package_json?n?(n.p(f,c),c&1&&j(n,1)):(n=xe(f),n.c(),j(n,1),n.m(e,t)):n&&(fe(),A(n,1,1,()=>{n=null}),ie()),m&&m.p&&(!a||c&4)&&re(m,i,f,f[2],a?ae(i,f[2],c,null):oe(f[2]),null);const _={};c&5&&(_.$$scope={dirty:c,ctx:f}),r.$set(_)},i(f){a||(j(n),j(m,f),j(r.$$.fragment,f),a=!0)},o(f){A(n),A(m,f),A(r.$$.fragment,f),a=!1},d(f){f&&h(e),n&&n.d(),m&&m.d(f),pe(r)}}}function Tl(o,e,t){let{$$slots:l={},$$scope:s}=e,{pkg:r}=e;return o.$$set=a=>{"pkg"in a&&t(0,r=a.pkg),"$$scope"in a&&t(2,s=a.$$scope)},[r,l,s]}class Ll extends ge{constructor(e){super(),ke(this,e,Tl,Cl,de,{pkg:0})}}function Ml(o){let e=o[0].package_json.icon+"",t;return{c(){t=w(e)},l(l){t=q(l,e)},m(l,s){D(l,t,s)},p:be,d(l){l&&h(t)}}}function Wl(o){let e,t,l,s,r,a=o[0].repo_name+"",n,i,m,f,c,_,E,I,L,S,K;return m=new sl({props:{$$slots:{default:[Ml]},$$scope:{ctx:o}}}),E=new El({props:{pkg:o[0]}}),S=new Ll({props:{pkg:o[0]}}),{c(){e=g("main"),t=g("div"),l=g("section"),s=g("header"),r=g("h1"),n=w(a),i=C(),_e(m.$$.fragment),f=C(),c=g("section"),_=g("div"),_e(E.$$.fragment),I=C(),L=g("div"),_e(S.$$.fragment),this.h()},l(V){e=k(V,"MAIN",{class:!0});var H=v(e);t=k(H,"DIV",{class:!0});var Q=v(t);l=k(Q,"SECTION",{});var X=v(l);s=k(X,"HEADER",{});var x=v(s);r=k(x,"H1",{class:!0});var le=v(r);n=q(le,a),le.forEach(h),x.forEach(h),i=T(X),ue(m.$$.fragment,X),X.forEach(h),Q.forEach(h),f=T(H),c=k(H,"SECTION",{class:!0});var R=v(c);_=k(R,"DIV",{class:!0});var N=v(_);ue(E.$$.fragment,N),N.forEach(h),R.forEach(h),I=T(H),L=k(H,"DIV",{class:!0});var te=v(L);ue(S.$$.fragment,te),te.forEach(h),H.forEach(h),this.h()},h(){p(r,"class","svelte-m017mk"),p(t,"class","prose"),p(_,"class","panel padded_md width_md"),p(c,"class","box width_full spaced"),p(L,"class","box"),p(e,"class","width_md svelte-m017mk")},m(V,H){D(V,e,H),u(e,t),u(t,l),u(l,s),u(s,r),u(r,n),u(l,i),he(m,l,null),u(e,f),u(e,c),u(c,_),he(E,_,null),u(e,I),u(e,L),he(S,L,null),K=!0},p(V,[H]){const Q={};H&2&&(Q.$$scope={dirty:H,ctx:V}),m.$set(Q)},i(V){K||(j(m.$$.fragment,V),j(E.$$.fragment,V),j(S.$$.fragment,V),K=!0)},o(V){A(m.$$.fragment,V),A(E.$$.fragment,V),A(S.$$.fragment,V),K=!1},d(V){V&&h(e),pe(m),pe(E),pe(S)}}}function Pl(o){return[fl(Ve.homepage,Ve,il)]}class Jl extends ge{constructor(e){super(),ke(this,e,Pl,Wl,de,{})}}export{Jl as component};
