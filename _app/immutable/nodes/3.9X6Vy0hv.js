import{a as n,t as u,g as w,b as a,f as p,c as v,j as re,s as j}from"../chunks/disclose-version.kQ00h3cW.js";import{J as Ce,ag as Ie,p as V,t as g,a as X,i as r,m as y,at as b}from"../chunks/runtime.GpU-9a05.js";import{p as Me,i as m}from"../chunks/props.CdlSa-dP.js";import{s as P,a as pe,e as E,t as H,d as U,f as ae,g as te,i as ye,h as Ae,c as he,b as fe}from"../chunks/string.Akn4E1FC.js";import{u as je,s as xe}from"../chunks/store.ScVJZaie.js";import{p as be}from"../chunks/stores.N8N6EPn0.js";import{t as Ge,s as He,f as Ke,L as Qe,p as Re,a as ke,b as Te}from"../chunks/package.EZXTkA-Q.js";import{b as Ue}from"../chunks/entry.XyYoXVPt.js";function Ve(x,e,c,f,k){var h=()=>{f(c[x])};c.addEventListener(e,h),k?Ce(()=>{c[x]=k()}):h(),(c===document.body||c===window||c===document)&&Ie(()=>{c.removeEventListener(e,h)})}var Xe=u("<div><!></div>"),Ye=u("<details><summary><!></summary> <!></details>");function Ze(x,e){V(e,!0);let c=Me(e,"open",7);var f=Ye();let k;var h=v(f);let l;var O=v(h);P(()=>e.summary,O);var q=a(a(h,!0));m(q,()=>e.eager,z=>{var L=w(),F=p(L);P(()=>e.children,F),n(z,L)},z=>{var L=w(),F=p(L);m(F,c,B=>{var D=Xe();Ge(3,D,()=>He);var W=v(D);P(()=>e.children,W),n(B,D)},null,!0),n(z,L)}),g(()=>{k=pe(f,k,{...e.attrs},!0,""),l=pe(h,l,{...e.summary_attrs},!0,"")}),Ve("open","toggle",f,z=>c(z),c),n(x,f),X()}var $e=u('<div class="repo_name svelte-19y7aej"> <!></div>'),ea=u('<div class="description svelte-19y7aej"> </div>'),aa=u('<div class="motto svelte-19y7aej"> </div>'),ta=u('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),ra=u('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),sa=u('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),va=u('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),na=u('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),oa=u('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),la=u('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),ia=u('<div class="logo svelte-19y7aej"><img></div>'),_a=u("<li> </li>"),ca=u('<ul class="declarations unstyled svelte-19y7aej"></ul>'),da=u('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),ga=u('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),ua=u("raw data for <code>pkg: Package_Meta</code>",1),ma=u("<pre><code> </code></pre>"),pa=u('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function ha(x,e){V(e,!0);const c={};je(c);const f=()=>xe(be,"$page",c),k=y(()=>e.pkg),h=y(()=>{let{package_json:o,src_json:t}=r(k);return[o,t]}),l=y(()=>r(h)[0]),O=y(()=>r(h)[1]),q=y(()=>r(O)),z=y(()=>{let{modules:o}=r(q);return[o]}),L=y(()=>r(z)[0]),F=y(()=>r(l).repository?he(fe(fe(typeof r(l).repository=="string"?r(l).repository:r(l).repository.url,".git"),"/"),"git+"):null),B=y(()=>r(l).license&&r(F)?r(F)+"/blob/main/LICENSE":null),D=(o,t)=>o+"/blob/main/src/lib/"+(t.endsWith(".js")?t.slice(0,-3)+".ts":t),W=y(()=>r(l).exports&&Object.keys(r(l).exports)),C=y(()=>r(l).exports?Object.keys(r(l).exports).map(o=>{const t=he(o,"./");return t==="."?"index.js":t}):null),M=y(()=>e.pkg.homepage_url?ae(e.pkg.homepage_url,"/")+(e.pkg.package_json.logo??"favicon.png"):void 0),A=e.pkg.package_json.logo_alt??`logo for ${e.pkg.repo_name}`;var K=pa(),J=v(K),Q=v(J),R=v(Q),G=v(R),Z=v(G);m(Z,()=>e.repo_name,o=>{var t=w(),i=p(t);P(()=>e.repo_name,i,()=>e.pkg.repo_name),n(o,t)},o=>{var t=$e(),i=v(t),_=a(i);m(_,()=>r(l).glyph,s=>{var d=re(s);g(()=>j(d,` ${r(l).glyph??""}`)),n(s,d)}),g(()=>j(i,e.pkg.repo_name)),n(o,t)});var se=a(a(G,!0));m(se,()=>e.children,o=>{var t=w(),i=p(t);P(()=>e.children,i,()=>e.pkg),n(o,t)});var ve=a(a(se,!0));m(ve,()=>r(l).description,o=>{var t=w(),i=p(t);m(i,()=>e.description,_=>{var s=w(),d=p(s);P(()=>e.description,d,()=>r(l).description),n(_,s)},_=>{var s=ea(),d=v(s);g(()=>j(d,r(l).description)),n(_,s)}),n(o,t)});var ne=a(a(ve,!0));m(ne,()=>r(l).motto,o=>{var t=w(),i=p(t);m(i,()=>e.motto,_=>{var s=w(),d=p(s);P(()=>e.motto,d,()=>r(l).motto),n(_,s)},_=>{var s=aa(),d=v(s);g(()=>j(d,r(l).motto)),n(_,s)}),n(o,t)});var oe=a(a(ne,!0));m(oe,()=>e.pkg.npm_url,o=>{var t=w(),i=p(t);m(i,()=>e.npm_url,_=>{var s=w(),d=p(s);P(()=>e.npm_url,d,()=>e.pkg.npm_url),n(_,s)},_=>{var s=ta(),d=v(s);g(()=>j(d,`npm i -D ${r(l).name??""}`)),n(_,s)}),n(o,t)});var ze=a(a(oe,!0)),le=v(ze);m(le,()=>e.pkg.homepage_url,o=>{var t=w(),i=p(t);m(i,()=>e.homepage_url,_=>{var s=w(),d=p(s);P(()=>e.homepage_url,d,()=>e.pkg.homepage_url),n(_,s)},_=>{var s=ra(),d=p(s),I=a(a(d,!0)),T=v(I),S=v(T);E(S,"alt",A);var Y=a(S,!0);g(()=>j(Y,` ${Ke(e.pkg.homepage_url)??""}`)),g(()=>{E(T,"href",e.pkg.homepage_url),H(T,"selected",e.pkg.homepage_url===f().url.href),E(S,"src",r(M)),U(S,"width","16px"),U(S,"height","16px"),U(S,"margin-right","var(--space_xs)")}),n(_,s)}),n(o,t)});var ie=a(a(le,!0));m(ie,()=>e.pkg.repo_url,o=>{var t=sa(),i=p(t),_=a(a(i,!0)),s=v(_),d=v(s);g(()=>{E(s,"href",e.pkg.repo_url),j(d,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),n(o,t)});var _e=a(a(ie,!0));m(_e,()=>e.pkg.npm_url,o=>{var t=va(),i=p(t),_=a(a(i,!0)),s=v(_),d=v(s);g(()=>{E(s,"href",e.pkg.npm_url),j(d,r(l).name)}),n(o,t)});var ce=a(a(_e,!0));m(ce,()=>e.pkg.changelog_url,o=>{var t=na(),i=p(t),_=a(a(i,!0)),s=v(_),d=v(s);g(()=>{E(s,"href",e.pkg.changelog_url),j(d,r(l).version)}),n(o,t)});var de=a(a(ce,!0));m(de,()=>r(B),o=>{var t=oa(),i=p(t),_=a(a(i,!0)),s=v(_),d=v(s);g(()=>{E(s,"href",r(B)),j(d,r(l).license)}),n(o,t)});var Le=a(a(de,!0));m(Le,()=>e.pkg.homepage_url,o=>{var t=la(),i=p(t),_=a(a(i,!0)),s=v(_);g(()=>E(s,"href",`${ae(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var d=a(a(s,!0));g(()=>E(d,"href",`${ae(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),n(o,t)});var We=a(a(Q,!0));m(We,()=>r(M),o=>{var t=ia(),i=v(t);E(i,"alt",A),g(()=>{E(i,"src",r(M)),U(i,"width","var(--size, var(--icon_size_xl2))"),U(i,"height","var(--size, var(--icon_size_xl2))")}),n(o,t)});var ge=a(a(J,!0));m(ge,()=>r(C)&&e.pkg.repo_url,o=>{var t=ga(),i=v(t);te(i,79,()=>r(C),(_,s)=>b(_),(_,s,d)=>{var I=da();const T=y(()=>D(e.pkg.repo_url,b(s))),S=y(()=>{var N;return(N=r(W))==null?void 0:N[b(d)]}),Y=y(()=>{var N;return r(S)&&((N=r(L))==null?void 0:N[r(S)])});g(()=>H(I,"ts",b(s).endsWith(".js"))),g(()=>H(I,"svelte",b(s).endsWith(".svelte"))),g(()=>H(I,"css",b(s).endsWith(".css"))),g(()=>H(I,"json",b(s).endsWith(".json")));var Oe=v(I),$=v(Oe),Pe=v($),Fe=a(a($,!0));m(Fe,()=>{var N;return(N=r(Y))==null?void 0:N.declarations.length},N=>{var ue=ca();te(ue,73,()=>r(Y).declarations,ye,(Je,me,Ea)=>{let Ne=()=>b(b(me)).name,Se=()=>b(b(me)).kind;var ee=_a(),Be=v(ee);g(()=>{Ae(ee,`declaration chip ${Se()??""}_declaration svelte-19y7aej`),j(Be,Ne())}),n(Je,ee)}),n(N,ue)}),g(()=>{E($,"href",r(T)),j(Pe,b(s))}),n(_,I)}),n(o,t)});var Ee=a(a(ge,!0)),qe=v(Ee);{var De=o=>{var t=ua();n(o,t)};Ze(qe,{summary:De,children:(o,t)=>{var i=ma(),_=v(i),s=v(_);g(()=>j(s,JSON.stringify(e.pkg,null,"	"))),n(o,i)},$$slots:{default:!0}})}n(x,K),X()}const fa=x=>x.split("/").filter(e=>e&&e!=="."&&e!==".."),ka=x=>{const e=[],c=fa(x);c.length&&e.push({type:"separator",path:"/"});let f="";for(let k=0;k<c.length;k++){const h=c[k];f+="/"+h,e.push({type:"piece",name:h,path:f}),k!==c.length-1&&e.push({type:"separator",path:f})}return e};var ya=u("•",1),ja=u('<a class="svelte-44vg7j"> </a>'),xa=u("/",1),ba=u('<span class="separator svelte-44vg7j"><!></span>'),wa=u('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function we(x,e){V(e,!0);const c={};je(c);const f=()=>xe(be,"$page",c),k=y(()=>e.path??f().url.pathname),h=y(()=>e.selected_path===null?null:e.selected_path===void 0?r(k):e.selected_path),l=y(()=>e.base_path??Ue),O=y(()=>ka(r(k))),q=y(()=>r(l)||"/");var z=wa(),L=v(z),F=v(L);m(F,()=>e.children,D=>{var W=w(),C=p(W);P(()=>e.children,C),n(D,W)},D=>{var W=ya();n(D,W)});var B=a(L);te(B,65,()=>r(O),ye,(D,W,C)=>{var M=w(),A=p(M);m(A,()=>b(W).type==="piece",K=>{var J=ja(),Q=v(J);g(()=>{E(J,"href",r(l)+b(W).path),H(J,"selected",b(W).path===r(h)),j(Q,b(W).name)}),n(K,J)},K=>{var J=ba(),Q=v(J);m(Q,()=>e.separator,R=>{var G=w(),Z=p(G);P(()=>e.separator,Z),n(R,G)},R=>{var G=xa();n(R,G)}),n(K,J)}),n(D,M)}),g(()=>{E(L,"href",r(q)),H(L,"selected",r(q)===r(h))}),n(x,z),X()}var za=u('<footer class="svelte-8i947s"><nav class="svelte-8i947s"><!></nav> <!></footer>');function La(x,e){V(e,!0);var c=za(),f=v(c),k=v(f);we(k,{children:(l,O)=>{var q=re(l);g(()=>{var z;return j(q,(z=e.pkg.package_json)==null?void 0:z.glyph)}),n(l,q)},$$slots:{default:!0}});var h=a(a(f,!0));m(h,()=>e.pkg.package_json,l=>{var O=w(),q=p(O);Qe(q,{get pkg(){return e.pkg},root_url:"https://www.fuz.dev/"}),n(l,O)}),n(x,c),X()}var Wa=u('<main class="width_md svelte-m017mk"><div class="box"><header><h1 class="my_xl3 svelte-m017mk"> </h1></header> <nav class="mb_xl3"><!></nav></div> <section class="box w_100 mb_lg"><div class="panel p_md width_md"><!></div></section> <div class="box"><!></div></main>');function Ba(x,e){V(e,!0);const c=Re(ke.homepage,ke,Te);var f=Wa(),k=v(f),h=v(k),l=v(h),O=v(l),q=a(a(h,!0)),z=v(q);we(z,{children:(C,M)=>{var A=re(C);g(()=>j(A,c.package_json.glyph)),n(C,A)},$$slots:{default:!0}});var L=a(a(k,!0)),F=v(L),B=v(F);ha(B,{pkg:c});var D=a(a(L,!0)),W=v(D);La(W,{pkg:c}),g(()=>j(O,c.repo_name)),n(x,f),X()}export{Ba as component};
