import{c as r,s as a,a as i,t as p,u as T,f as L,r as t,y as ce,R as ve,b as E,Q as ie}from"../chunks/disclose-version.DTirwxKt.js";import{B as Ne,I as Ue,p as $,t as H,a as ee,f as l,i as V,a0 as G}from"../chunks/runtime.DLxkCxf-.js";import{p as Y,i as z}from"../chunks/props.DQyvRykI.js";import{a as q,b as F,e as D,t as O,s as M,f as we,g as _e,d as He,i as ze,h as qe,c as ye}from"../chunks/string.Dwwq2Q1b.js";import{s as xe,a as je,p as Le}from"../chunks/stores.CHOgjZQn.js";import{t as Ie,s as Ke,f as Oe,U as Me,L as Ye,p as Re,a as Ve,b as Xe}from"../chunks/package.DLqi0BWc.js";import{b as Je}from"../chunks/entry.rn6AEY9K.js";function Qe(h,e,o,c,d){var _=()=>{c(o[h])};o.addEventListener(e,_),d?Ne(()=>{o[h]=d()}):_(),(o===document.body||o===window||o===document)&&Ue(()=>{o.removeEventListener(e,_)})}var Ae=p("<div><!></div>"),$e=p("<details><summary><!></summary> <!></details>");function ea(h,e){$(e,!0);let o=Y(e,"open",7);var c=$e();let d;var _=r(c);let s;var b=r(_);q(b,()=>e.summary),t(_);var k=a(a(_,!0));z(k,()=>e.eager,g=>{var y=T(),j=L(y);q(j,()=>e.children),i(g,y)},g=>{var y=T(),j=L(y);z(j,o,S=>{var Z=Ae();Ie(3,Z,()=>Ke);var x=r(Z);q(x,()=>e.children),t(Z),i(S,Z)},null,!0),i(g,y)}),t(c),H(()=>{d=F(c,d,{...e.attrs},!0,""),s=F(_,s,{...e.summary_attrs},!0,"")}),Qe("open","toggle",c,g=>o(g),o),i(h,c),ee()}var aa=p('<div class="repo_name svelte-keb345"> <!></div>'),ta=p('<div class="description svelte-keb345"> </div>'),ra=p('<div class="motto svelte-keb345"> </div>'),sa=p('<blockquote class="npm_url svelte-keb345"> </blockquote>'),la=p('<span class="title svelte-keb345">homepage</span> <div class="content svelte-keb345"><a class="chip svelte-keb345"><img> </a></div>',1),na=p('<span class="title svelte-keb345">repo</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="repo"> </a></div>',1),va=p('<span class="title svelte-keb345">npm</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="npm"> </a></div>',1),ia=p('<span class="title svelte-keb345">version</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="version"> </a></div>',1),oa=p('<span class="title svelte-keb345">license</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="license"> </a></div>',1),_a=p('<span class="title svelte-keb345">data</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="data">package.json</a> <a class="chip svelte-keb345" title="data">src.json</a></div>',1),ca=p('<div class="logo svelte-keb345"><img></div>'),da=p("<li> </li>"),ha=p('<ul class="declarations unstyled svelte-keb345"></ul>'),ua=p('<li class="module svelte-keb345"><div class="module_content svelte-keb345"><a class="chip"> </a> <!></div></li>'),ga=p('<section class="svelte-keb345"><menu class="unstyled"></menu></section>'),fa=p("raw data for <code>pkg: Package_Meta</code>",1),ma=p("<pre><code> </code></pre>"),ba=p('<div class="package_detail svelte-keb345"><div class="info svelte-keb345"><div class="flex flex_1"><div><header class="svelte-keb345"><!></header> <!> <!> <!> <!> <section class="properties svelte-keb345"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-keb345"><!></section></div>');function ka(h,e){$(e,!0);const o=xe(),c=()=>je(Le,"$page",o),d=V(()=>e.pkg),_=V(()=>{let{package_json:f,src_json:v}=l(d);return[f,v]}),s=V(()=>l(_)[0]),b=V(()=>l(_)[1]),k=V(()=>l(b)),g=V(()=>{let{modules:f}=l(k);return[f]}),y=V(()=>l(g)[0]),j=V(()=>l(s).repository?He(ye(ye(typeof l(s).repository=="string"?l(s).repository:l(s).repository.url,".git"),"/"),"git+"):null),S=V(()=>l(s).license&&l(j)?l(j)+"/blob/main/LICENSE":null),Z=(f,v)=>f+"/blob/main/src/lib/"+(v.endsWith(".js")?v.slice(0,-3)+".ts":v),x=V(()=>l(s).exports&&Object.keys(l(s).exports)),B=V(()=>l(s).exports?Object.keys(l(s).exports).map(f=>{const v=He(f,"./");return v==="."?"index.js":v}):null);var N=ba(),C=r(N),W=r(C),P=r(W),U=r(P),R=r(U);z(R,()=>e.repo_name,f=>{var v=T(),m=L(v);q(m,()=>e.repo_name,()=>e.pkg.repo_name),i(f,v)},f=>{var v=aa(),m=r(v),u=a(m);z(u,()=>l(s).glyph,n=>{var w=ce();H(()=>E(w,` ${l(s).glyph??""}`)),i(n,w)}),t(v),H(()=>E(m,e.pkg.repo_name)),i(f,v)}),t(U);var X=a(a(U,!0));z(X,()=>e.children,f=>{var v=T(),m=L(v);q(m,()=>e.children,()=>e.pkg),i(f,v)});var ae=a(a(X,!0));z(ae,()=>l(s).description,f=>{var v=T(),m=L(v);z(m,()=>e.description,u=>{var n=T(),w=L(n);q(w,()=>e.description,()=>l(s).description),i(u,n)},u=>{var n=ta(),w=r(n);t(n),H(()=>E(w,l(s).description)),i(u,n)}),i(f,v)});var re=a(a(ae,!0));z(re,()=>l(s).motto,f=>{var v=T(),m=L(v);z(m,()=>e.motto,u=>{var n=T(),w=L(n);q(w,()=>e.motto,()=>l(s).motto),i(u,n)},u=>{var n=ra(),w=r(n);t(n),H(()=>E(w,l(s).motto)),i(u,n)}),i(f,v)});var Q=a(a(re,!0));z(Q,()=>e.pkg.npm_url,f=>{var v=T(),m=L(v);z(m,()=>e.npm_url,u=>{var n=T(),w=L(n);q(w,()=>e.npm_url,()=>e.pkg.npm_url),i(u,n)},u=>{var n=sa(),w=r(n);t(n),H(()=>E(w,`npm i -D ${l(s).name??""}`)),i(u,n)}),i(f,v)});var A=a(a(Q,!0)),de=r(A);z(de,()=>e.pkg.homepage_url,f=>{var v=T(),m=L(v);z(m,()=>e.homepage_url,u=>{var n=T(),w=L(n);q(w,()=>e.homepage_url,()=>e.pkg.homepage_url),i(u,n)},u=>{var n=la(),w=L(n),I=a(a(w,!0)),te=r(I),J=r(te),se=a(J,!0);H(()=>E(se,` ${Oe(e.pkg.homepage_url)??""}`)),t(te),t(I),H(()=>{D(te,"href",e.pkg.homepage_url),O(te,"selected",e.pkg.homepage_url===c().url.href),D(J,"src",e.pkg.logo_url),D(J,"alt",e.pkg.logo_alt),M(J,"width","16px"),M(J,"height","16px"),M(J,"margin-right","var(--space_xs)")}),i(u,n)}),i(f,v)});var he=a(a(de,!0));z(he,()=>e.pkg.repo_url,f=>{var v=na(),m=L(v),u=a(a(m,!0)),n=r(u),w=r(n);t(n),t(u),H(()=>{D(n,"href",e.pkg.repo_url),E(w,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),i(f,v)});var ue=a(a(he,!0));z(ue,()=>e.pkg.npm_url,f=>{var v=va(),m=L(v),u=a(a(m,!0)),n=r(u),w=r(n);t(n),t(u),H(()=>{D(n,"href",e.pkg.npm_url),E(w,l(s).name)}),i(f,v)});var ge=a(a(ue,!0));z(ge,()=>e.pkg.changelog_url,f=>{var v=ia(),m=L(v),u=a(a(m,!0)),n=r(u),w=r(n);t(n),t(u),H(()=>{D(n,"href",e.pkg.changelog_url),E(w,l(s).version)}),i(f,v)});var fe=a(a(ge,!0));z(fe,()=>l(S),f=>{var v=oa(),m=L(v),u=a(a(m,!0)),n=r(u),w=r(n);t(n),t(u),H(()=>{D(n,"href",l(S)),E(w,l(s).license)}),i(f,v)});var Pe=a(a(fe,!0));z(Pe,()=>e.pkg.homepage_url,f=>{var v=_a(),m=L(v),u=a(a(m,!0)),n=r(u);H(()=>D(n,"href",`${we(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var w=a(a(n,!0));H(()=>D(w,"href",`${we(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),t(u),i(f,v)}),t(A),t(P),t(W);var Fe=a(a(W,!0));z(Fe,()=>e.pkg.logo_url,f=>{var v=ca(),m=r(v);t(v),H(()=>{D(m,"src",e.pkg.logo_url),D(m,"alt",e.pkg.logo_alt),M(m,"width","var(--size, var(--icon_size_xl2))"),M(m,"height","var(--size, var(--icon_size_xl2))")}),i(f,v)}),t(C);var me=a(a(C,!0));z(me,()=>l(B)&&e.pkg.repo_url,f=>{var v=ga(),m=r(v);_e(m,79,()=>l(B),(u,n)=>G(u),(u,n,w)=>{var I=ua();const te=V(()=>Z(e.pkg.repo_url,G(n))),J=V(()=>{var K;return(K=l(x))==null?void 0:K[G(w)]}),se=V(()=>{var K;return l(J)&&((K=l(y))==null?void 0:K[l(J)])});H(()=>O(I,"ts",G(n).endsWith(".js"))),H(()=>O(I,"svelte",G(n).endsWith(".svelte"))),H(()=>O(I,"css",G(n).endsWith(".css"))),H(()=>O(I,"json",G(n).endsWith(".json")));var ke=r(I),le=r(ke),Ee=r(le);t(le);var Ge=a(a(le,!0));z(Ge,()=>{var K;return(K=l(se))==null?void 0:K.declarations.length},K=>{var oe=ha();_e(oe,73,()=>l(se).declarations,ze,(Te,pe,Qa)=>{let We=()=>G(G(pe)).name,Ce=()=>G(G(pe)).kind;var ne=da(),De=r(ne);t(ne),H(()=>{qe(ne,`declaration chip ${Ce()??""}_declaration svelte-keb345`),E(De,We())}),i(Te,ne)}),t(oe),i(K,oe)}),t(ke),t(I),H(()=>{D(le,"href",l(te)),E(Ee,G(n))}),i(u,I)}),t(m),t(v),i(f,v)});var be=a(a(me,!0)),Be=r(be);ea(Be,{summary:v=>{ve();var m=fa();a(L(m,!0)),i(v,m)},children:(v,m)=>{var u=ma(),n=r(u),w=r(n);H(()=>E(w,JSON.stringify(e.pkg,null,"	"))),t(n),t(u),i(v,u)},$$slots:{default:!0}}),t(be),t(N),i(h,N),ee()}const pa=h=>h.split("/").filter(e=>e&&e!=="."&&e!==".."),wa=h=>{const e=[],o=pa(h);o.length&&e.push({type:"separator",path:"/"});let c="";for(let d=0;d<o.length;d++){const _=o[d];c+="/"+_,e.push({type:"piece",name:_,path:c}),d!==o.length-1&&e.push({type:"separator",path:c})}return e};var Ha=p("•",1),ya=p('<a class="svelte-44vg7j"> </a>'),Va=p("/",1),za=p('<span class="separator svelte-44vg7j"><!></span>'),xa=p('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function Ze(h,e){$(e,!0);const o=xe(),c=()=>je(Le,"$page",o),d=V(()=>e.path??c().url.pathname),_=V(()=>e.selected_path===null?null:e.selected_path??l(d)),s=V(()=>e.base_path??Je),b=V(()=>wa(l(d))),k=V(()=>l(s)||"/");var g=xa(),y=r(g),j=r(y);z(j,()=>e.children,Z=>{var x=T(),B=L(x);q(B,()=>e.children),i(Z,x)},Z=>{var x=Ha();i(Z,x)}),t(y);var S=a(y);_e(S,65,()=>l(b),ze,(Z,x,B)=>{var N=T(),C=L(N);z(C,()=>G(x).type==="piece",W=>{var P=ya(),U=r(P);t(P),H(()=>{D(P,"href",l(s)+G(x).path),O(P,"selected",G(x).path===l(_)),E(U,G(x).name)}),i(W,P)},W=>{var P=za(),U=r(P);z(U,()=>e.separator,R=>{var X=T(),ae=L(X);q(ae,()=>e.separator),i(R,X)},R=>{var X=Va();i(R,X)}),t(P),i(W,P)}),i(Z,N)}),t(g),H(()=>{D(y,"href",l(k)),O(y,"selected",l(k)===l(_))}),i(h,g),ee()}var ja=p(", you are here",1),La=p(", you are here",1),Ma=p(", you are here",1),Za=p(`<ul><li>join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community</li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a> - nontechnical design videos where we'll make a social website together with <a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel <a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>`);function Sa(h,e){var o=Za(),c=r(o);a(r(c)),ve(),t(c);var d=a(a(c,!0)),_=r(d),s=a(a(_,!0)),b=a(a(s,!0)),k=a(b);z(k,()=>e.selected==="webdevladder.net",Q=>{var A=ja();i(Q,A)}),t(d);var g=a(a(d,!0)),y=r(g),j=a(a(y,!0)),S=a(a(j,!0)),Z=a(S);z(Z,()=>e.selected==="spiderspace.org",Q=>{var A=La();i(Q,A)}),t(g);var x=a(a(g,!0)),B=r(x),N=a(a(B,!0));z(N,()=>e.selected==="ryanatkn.com",Q=>{var A=Ma();i(Q,A)}),t(x);var C=a(a(x,!0)),W=a(r(C));a(a(W,!0)),t(C);var P=a(a(C,!0)),U=a(r(P));a(a(U,!0)),t(P);var R=a(a(P,!0)),X=a(r(R)),ae=a(a(X,!0));a(a(ae,!0)),t(R);var re=a(a(R,!0));a(r(re)),t(re),t(o),H(()=>{O(_,"selected",e.selected==="webdevladder.net"),O(y,"selected",e.selected==="spiderspace.org"),O(B,"selected",e.selected==="ryanatkn.com")}),i(h,o)}var Pa=ie("<svg><g><path></path></g><g><path></path><path></path></g></svg>");function Fa(h,e){const o=Y(e,"fill",3,"hsl(var(--color_g_5))"),c=Y(e,"label",3,"three sleepy z's"),d=V(()=>e.width??e.size),_=V(()=>e.height??e.size);var s=Pa();let b;var k=r(s),g=r(k);let y;t(k);var j=a(k),S=r(j);let Z;var x=a(S);let B;t(j),t(s),H(()=>{b=F(s,b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":c(),class:e.classes},!1,""),M(s,"width",l(d)),M(s,"height",l(_)),y=F(g,y,{...e.path_attrs,d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},!1,""),M(g,"fill",o()),Z=F(S,Z,{...e.path_attrs,d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},!1,""),M(S,"fill",o()),B=F(x,B,{...e.path_attrs,d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"},!1,""),M(x,"fill",o())}),i(h,s)}var Ba=ie("<svg><path></path></svg>");function Se(h,e){const o=Y(e,"fill",3,"var(--text_color, #000)"),c=Y(e,"label",3,"a friendly spider facing you"),d=V(()=>e.width??e.size),_=V(()=>e.height??e.size);var s=Ba();let b;var k=r(s);let g;t(s),H(()=>{b=F(s,b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":c(),class:e.classes},!1,""),M(s,"width",l(d)),M(s,"height",l(_)),g=F(k,g,{...e.path_attrs,d:"M 26.253917,88.532336 29.904106,71.394855 40.667193,53.342811 40.258534,49.99234 38.417407,49.000991 22.876908,50.369035 9.4865496,53.880193 2.3019024,57.978424 0.42708056,57.27994 7.2642726,51.086985 20.811326,45.373351 37.960128,42.356792 39.354818,40.107008 38.229925,38.149883 26.030989,27.105568 14.46539,21.861786 8.0479986,18.615387 l -0.41428,-1.710463 8.2789464,1.499862 13.012873,5.003724 13.447448,10.696856 1.680801,-0.729547 0.222439,-1.343157 -3.983998,-12.128053 -5.730215,-9.573597 -0.823624,-5.1744052 1.16944,-1.165102 2.604334,6.3355162 6.612025,7.08777 4.874534,11.55989 2.800804,0.515574 4.48815,-1.359246 1.521623,-8.687062 5.685014,-8.620764 2.75965,-6.8316782 1.094578,1.128569 -1.293029,5.4222362 -4.084776,11.06803 -0.484994,8.377408 0.194311,1.192896 1.42954,1.700726 11.563936,-10.644623 9.878262,-8.331535 8.732915,-3.390708 -0.387305,1.402757 -5.294686,3.023816 -10.445054,10.705792 -9.561599,13.627899 -0.438945,1.602755 1.001398,1.666754 17.376932,3.986302 9.537375,6.940531 4.325785,4.636405 0.211208,1.557106 -6.15842,-4.279925 -10.413771,-5.155697 -15.838715,-1.696223 -0.83461,1.144484 0.774499,2.593247 9.737644,16.194355 3.925704,17.214082 0.07146,10.277289 -1.706242,1.13628 -2.009721,-9.21637 -5.894265,-16.88027 -12.292087,-17.295813 -4.177778,-0.585888 -7.294671,2.935716 -11.138052,16.645915 -6.462422,17.752509 -1.634756,7.206641 -2.070766,-1.52923 z",fill:o()},!1,"")}),i(h,s)}function Ea(h,e){$(e,!0);const o=Y(e,"fill",3,"hsl(var(--color_b_5))"),c=Y(e,"label",3,"a fuzzy tuft of green moss"),d="transform: scaleX(-1) rotate(180deg)",_=V(()=>{var b;return(b=e.attrs)!=null&&b.style?d+"; "+e.attrs.style:d});var s=V(()=>({...e.attrs,style:l(_)}));Se(h,{get fill(){return o()},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return c()},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return l(s)}}),ee()}const Ga=h=>{switch(h){case"fuz":return"#6a3e1b";case"fuz_code":return"#e03e81";case"fuz_blog":return"#b19a25";case"fuz_mastodon":return"#6a40bf";case"fuz_gitops":return"#397fc6";default:throw new Me(h)}},Ta=h=>{switch(h){case"fuz":return"blue";case"fuz_code":return"pink";case"fuz_blog":return"yellow";case"fuz_mastodon":return"purple";case"fuz_gitops":return"blue";default:throw new Me(h)}};function Wa(h,e){$(e,!0);const o=V(()=>e.project?Ga(e.project):e.fill??"hsl(var(--color_f_5))"),c=V(()=>e.label??(e.project?`a friendly ${Ta(e.project)} spider facing you`:e.fill?"a friendly spider facing you":"a friendly brown spider facing you"));Se(h,{get fill(){return l(o)},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return l(c)},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return e.attrs}}),ee()}var Ca=ie("<svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>");function Da(h,e){const o=Y(e,"label",3,"a pixelated green oak acorn with a glint of sun"),c=V(()=>e.width??e.size),d=V(()=>e.height??e.size);var _=Ca();let s;var b=r(_);let k;var g=a(b);let y;var j=a(g);let S;var Z=a(j);let x;var B=a(Z);let N;var C=a(B);let W;var P=a(C);let U;t(_),H(()=>{s=F(_,s,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":o(),class:e.classes},!1,""),M(_,"width",l(c)),M(_,"height",l(d)),k=F(b,k,{...e.path_attrs,d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},!1,""),M(b,"fill","#6f974c"),y=F(g,y,{...e.path_attrs,d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},!1,""),M(g,"fill","#5e853f"),S=F(j,S,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,""),M(j,"fill","#6f492b"),x=F(Z,x,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,""),M(Z,"fill","#3b730f"),N=F(B,N,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},!1,""),M(B,"fill","#473323"),W=F(C,W,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},!1,""),M(C,"fill","#2e6006"),U=F(P,U,{...e.path_attrs,d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"},!1,""),M(P,"fill","#34251a")}),i(h,_)}var Na=ie("<svg><g><path></path></g></svg>");function Ua(h,e){const o=Y(e,"fill",3,"#f75e22"),c=Y(e,"label",3,"a friendly pixelated spider facing you"),d=V(()=>e.width??e.size),_=V(()=>e.height??e.size);var s=Na();let b;var k=r(s),g=r(k);let y;t(k),t(s),H(()=>{b=F(s,b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":c(),class:e.classes},!1,""),M(s,"width",l(d)),M(s,"height",l(_)),y=F(g,y,{...e.path_attrs,d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"},!1,""),M(g,"fill",o())}),i(h,s)}var qa=p('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Ia(h){const e="var(--icon_size_lg)";var o=qa(),c=L(o),d=r(c);Fa(d,{size:e}),a(d),t(c);var _=a(a(c,!0)),s=r(_);Ea(s,{size:e}),a(s),t(_);var b=a(a(_,!0)),k=r(b);Wa(k,{size:e}),a(k),t(b);var g=a(a(b,!0)),y=r(g);Da(y,{size:e}),a(y),t(g);var j=a(a(g,!0)),S=r(j);Ua(S,{size:e}),a(S),t(j),i(h,o)}var Ka=p('<h2 class="mt_0 mb_lg">Links</h2>'),Oa=p('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Ya(h,e){$(e,!0);var o=Oa(),c=r(o);z(c,()=>e.children,b=>{var k=T(),g=L(k);q(g,()=>e.children),i(b,k)},b=>{var k=Ka();i(b,k)});var d=a(a(c,!0));Sa(d,{});var _=a(a(d,!0)),s=r(_);Ia(s),t(_),t(o),i(h,o),ee()}var Ra=p('<footer class="svelte-8i947s"><nav class="svelte-8i947s"><!></nav> <!></footer>');function Xa(h,e){$(e,!0);var o=Ra(),c=r(o),d=r(c);Ze(d,{children:(s,b)=>{ve();var k=ce();H(()=>E(k,e.pkg.package_json.glyph)),i(s,k)},$$slots:{default:!0}}),t(c);var _=a(a(c,!0));z(_,()=>e.pkg.package_json,s=>{Ye(s,{get pkg(){return e.pkg},root_url:"https://www.fuz.dev/"})}),t(o),i(h,o),ee()}var Ja=p('<main class="width_md svelte-m017mk"><div class="box"><header><h1 class="my_xl3 svelte-m017mk"> </h1></header> <nav class="mb_xl3"><!></nav></div> <!> <section class="box w_100 mb_lg"><div class="panel p_md width_md"><!></div></section> <div class="box"><!></div></main>');function lt(h,e){$(e,!0);const o=Re(Ve.homepage,Ve,Xe);var c=Ja(),d=r(c),_=r(d),s=r(_),b=r(s);t(s),t(_);var k=a(a(_,!0)),g=r(k);Ze(g,{children:(N,C)=>{ve();var W=ce();H(()=>E(W,o.package_json.glyph)),i(N,W)},$$slots:{default:!0}}),t(k),t(d);var y=a(a(d,!0));Ya(y,{});var j=a(a(y,!0)),S=r(j),Z=r(S);ka(Z,{pkg:o}),t(S),t(j);var x=a(a(j,!0)),B=r(x);Xa(B,{pkg:o}),t(x),t(c),H(()=>E(b,o.repo_name)),i(h,c),ee()}export{lt as component};
