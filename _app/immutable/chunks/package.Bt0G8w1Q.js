import{M as $,ax as tt,ay as et,e as at,x as st,a as ot,_ as nt,q as it,$ as y,az as rt,p as D,t as w,b as K,d as V,s as k,r as b,f as j,w as x,W as S}from"./runtime.BvLbdK0R.js";import{k as lt,a as H,l as P,c as R,t as Q,s as dt}from"./disclose-version.BlGBA3Br.js";import{i as L,p as vt}from"./props.DzDl1slS.js";import{c as Z,d as C,h as ut,e as _t,b as G,t as ct,s as O,f as X,a as F,g as W}from"./string.CSo7nFfY.js";const ft=requestAnimationFrame,ht=()=>performance.now(),g={tick:e=>ft(e),now:()=>ht(),tasks:new Set};function J(e){g.tasks.forEach(t=>{t.c(e)||(g.tasks.delete(t),t.f())}),g.tasks.size!==0&&g.tick(J)}function pt(e){let t;return g.tasks.size===0&&g.tick(J),{promise:new Promise(a=>{g.tasks.add(t={c:e,f:a})}),abort(){g.tasks.delete(t)}}}function I(e,t){e.dispatchEvent(new CustomEvent(t))}function mt(e){const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function U(e){const t={},a=e.split(";");for(const u of a){const[i,n]=u.split(":");if(!i||n===void 0)break;const o=mt(i.trim());t[o]=n.trim()}return t}const gt=e=>e;function It(e,t,a,u){var i=(e&rt)!==0,n="both",o,f=t.inert,_,r;function s(){return o??(o=a()(t,{},{direction:n}))}var d={is_global:i,in(){t.inert=f,I(t,"introstart"),_=A(t,s(),r,1,()=>{I(t,"introend"),_==null||_.abort(),_=o=void 0})},out(h){t.inert=!0,I(t,"outrostart"),r=A(t,s(),_,0,()=>{I(t,"outroend"),h==null||h()})},stop:()=>{_==null||_.abort(),r==null||r.abort()}},l=st;if((l.transitions??(l.transitions=[])).push(d),lt){var v=i;if(!v){for(var c=l.parent;c&&c.f&$;)for(;(c=c.parent)&&!(c.f&tt););v=!c||(c.f&et)!==0}v&&at(()=>{ot(()=>d.in())})}}function A(e,t,a,u,i){var n=u===1;if(nt(t)){var o,f=!1;return it(()=>{if(!f){var m=t({direction:n?"in":"out"});o=A(e,m,a,u,i)}}),{abort:()=>{f=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(a==null||a.deactivate(),!(t!=null&&t.duration))return i(),{abort:y,deactivate:y,reset:y,t:()=>u};const{delay:_=0,css:r,tick:s,easing:d=gt}=t;var l=[];if(n&&a===void 0&&(s&&s(0,1),r)){var v=U(r(0,1));l.push(v,v)}var c=()=>1-u,h=e.animate(l,{duration:_});return h.onfinish=()=>{var m=(a==null?void 0:a.t())??1-u;a==null||a.abort();var p=u-m,M=t.duration*Math.abs(p),B=[];if(M>0){if(r)for(var N=Math.ceil(M/16.666666666666668),E=0;E<=N;E+=1){var q=m+p*d(E/N),Y=r(q,1-q);B.push(U(Y))}c=()=>{var z=h.currentTime;return m+p*d(z/M)},s&&pt(()=>{if(h.playState!=="running")return!1;var z=c();return s(z,1-z),!0})}h=e.animate(B,{duration:M,fill:"forwards"}),h.onfinish=()=>{c=()=>u,s==null||s(u,1-u),i()}},{abort:()=>{h&&(h.cancel(),h.effect=null)},deactivate:()=>{i=y},reset:()=>{u===0&&(s==null||s(1,0))},t:()=>c()}}const yt=e=>Z(C(C(e,"https://"),"www."),"/");var Ht=P("<path></path>"),Vt=P("<svg><!><!></svg>");function bt(e,t){D(t,!0);const a=S(()=>t.fill??t.data.fill??"var(--text_color, #000)"),u=S(()=>t.width??t.size),i=S(()=>t.height??t.size),n=S(()=>{var s,d,l,v;return(s=t.data.attrs)!=null&&s.style&&((d=t.attrs)!=null&&d.style)?X(t.data.attrs.style,";")+" "+t.attrs.style:((l=t.data.attrs)==null?void 0:l.style)??((v=t.attrs)==null?void 0:v.style)});var o=Vt();let f;var _=V(o);L(_,()=>t.data.raw,s=>{var d=R(),l=j(d);ut(l,()=>t.data.raw,!0,!1),H(s,d)});var r=k(_);L(r,()=>t.data.paths,s=>{var d=R(),l=j(d);_t(l,16,()=>t.data.paths,v=>v,(v,c)=>{var h=Ht();let m;w(()=>m=G(h,m,{fill:x(a),...c},"svelte-16ciom8",!0)),H(v,h)}),H(s,d)}),b(o),w(()=>{f=G(o,f,{viewBox:t.data.viewBox??"0 0 100 100",...t.data.attrs,...t.attrs,"aria-label":t.label??t.data.label,style:x(n),class:t.classes},"svelte-16ciom8",!0),ct(o,"inline",t.inline),O(o,"width",x(u),void 0,!0),O(o,"height",x(i),void 0,!0)}),H(e,o),K()}const Lt={label:"three sleepy z's",fill:"#e55d95",paths:[{d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},{d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},{d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"}]},Et={label:"a pixelated green oak acorn with a glint of sun",paths:[{fill:"#6f974c",d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},{fill:"#5e853f",d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},{fill:"#6f492b",d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},{fill:"#3b730f",d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},{fill:"#473323",d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},{fill:"#2e6006",d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},{fill:"#34251a",d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"}]},T={label:"a friendly brown spider facing you",fill:"#84522a",paths:[{d:"M 26.253917,88.532336 29.904106,71.394855 40.667193,53.342811 40.258534,49.99234 38.417407,49.000991 22.876908,50.369035 9.4865496,53.880193 2.3019024,57.978424 0.42708056,57.27994 7.2642726,51.086985 20.811326,45.373351 37.960128,42.356792 39.354818,40.107008 38.229925,38.149883 26.030989,27.105568 14.46539,21.861786 8.0479986,18.615387 l -0.41428,-1.710463 8.2789464,1.499862 13.012873,5.003724 13.447448,10.696856 1.680801,-0.729547 0.222439,-1.343157 -3.983998,-12.128053 -5.730215,-9.573597 -0.823624,-5.1744052 1.16944,-1.165102 2.604334,6.3355162 6.612025,7.08777 4.874534,11.55989 2.800804,0.515574 4.48815,-1.359246 1.521623,-8.687062 5.685014,-8.620764 2.75965,-6.8316782 1.094578,1.128569 -1.293029,5.4222362 -4.084776,11.06803 -0.484994,8.377408 0.194311,1.192896 1.42954,1.700726 11.563936,-10.644623 9.878262,-8.331535 8.732915,-3.390708 -0.387305,1.402757 -5.294686,3.023816 -10.445054,10.705792 -9.561599,13.627899 -0.438945,1.602755 1.001398,1.666754 17.376932,3.986302 9.537375,6.940531 4.325785,4.636405 0.211208,1.557106 -6.15842,-4.279925 -10.413771,-5.155697 -15.838715,-1.696223 -0.83461,1.144484 0.774499,2.593247 9.737644,16.194355 3.925704,17.214082 0.07146,10.277289 -1.706242,1.13628 -2.009721,-9.21637 -5.894265,-16.88027 -12.292087,-17.295813 -4.177778,-0.585888 -7.294671,2.935716 -11.138052,16.645915 -6.462422,17.752509 -1.634756,7.206641 -2.070766,-1.52923 z"}]},jt={label:"a fuzzy tuft of green moss",fill:"#3db33d",paths:T.paths,attrs:{style:"transform: scaleX(-1) rotate(180deg)"}};T.paths;T.paths;T.paths;T.paths;const Rt={label:"a friendly orange pixelated spider facing you",fill:"#f4672f",paths:[{d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"}]},kt={label:"the GitHub logo, an octocat silhouette",paths:[{d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z","fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)"}],viewBox:"0 0 1024 1024"};var wt=Q('<div class="root_url svelte-cs8o0f"><a> </a></div>'),Ct=Q('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function Zt(e,t){D(t,!0);const a=vt(t,"root_url",3,null);var u=Ct(),i=V(u);F(i,()=>t.children??y);var n=k(i,2),o=V(n);F(o,()=>t.logo_header??y);var f=k(o,2),_=V(f);L(_,()=>t.logo,d=>{var l=R(),v=j(l);F(v,()=>t.logo),H(d,l)},d=>{bt(d,{data:kt,size:"var(--icon_size_lg)"})}),b(f);var r=k(f,2);F(r,()=>t.logo_footer??y),b(n);var s=k(n,2);L(s,a,d=>{var l=wt(),v=V(l),c=V(v);w(()=>dt(c,yt(a()))),b(v),b(l),w(()=>W(v,"href",a())),H(d,l)}),b(u),w(()=>W(f,"href",t.pkg.repo_url)),H(e,u),K()}const At=(e,t)=>{const{name:a}=e,i=(v=>v?Z(C(Z(v,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!i)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const n=e.homepage??null,o=!e.private&&!!e.exports&&e.version!=="0.0.1",f=o?"https://www.npmjs.com/package/"+e.name:null,_=o&&i?i+"/blob/main/CHANGELOG.md":null,r=Tt(a),s=i?C(i,"https://github.com/").split("/")[0]:null,d=n?X(n,"/")+(e.logo?C(e.logo,"/"):"favicon.png"):null,l=e.logo_alt??`logo for ${r}`;return{package_json:e,src_json:t,name:a,repo_name:r,repo_url:i,owner_name:s,homepage_url:n,logo_url:d,logo_alt:l,npm_url:f,changelog_url:_,published:o}},Tt=e=>e[0]==="@"?e.split("/")[1]:e;function Mt(e){const t=e-1;return t*t*t+1}function Bt(e,{delay:t=0,duration:a=400,easing:u=Mt,axis:i="y"}={}){const n=getComputedStyle(e),o=+n.opacity,f=i==="y"?"height":"width",_=parseFloat(n[f]),r=i==="y"?["top","bottom"]:["left","right"],s=r.map(p=>`${p[0].toUpperCase()}${p.slice(1)}`),d=parseFloat(n[`padding${s[0]}`]),l=parseFloat(n[`padding${s[1]}`]),v=parseFloat(n[`margin${s[0]}`]),c=parseFloat(n[`margin${s[1]}`]),h=parseFloat(n[`border${s[0]}Width`]),m=parseFloat(n[`border${s[1]}Width`]);return{delay:t,duration:a,easing:u,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*o};${f}: ${p*_}px;padding-${r[0]}: ${p*d}px;padding-${r[1]}: ${p*l}px;margin-${r[0]}: ${p*v}px;margin-${r[1]}: ${p*c}px;border-${r[0]}-width: ${p*h}px;border-${r[1]}-width: ${p*m}px;`}}const Nt={name:"@ryanatkn/fuz_mastodon",version:"0.26.0",description:"Mastodon components and helpers for Svelte, SvelteKit, and Fuz",glyph:"🦣",logo:"logo.svg",logo_alt:"a friendly purple spider facing you",public:!0,license:"MIT",homepage:"https://mastodon.fuz.dev/",repository:"https://github.com/ryanatkn/fuz_mastodon",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/fuz_mastodon/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.17"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/fuz":"*","@ryanatkn/moss":"*","@sveltejs/kit":"^2","date-fns":"^4","esm-env":"^1",svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.25.0","@ryanatkn/eslint-config":"^0.5.3","@ryanatkn/fuz":"^0.127.0","@ryanatkn/fuz_code":"^0.19.0","@ryanatkn/gro":"^0.135.1","@ryanatkn/moss":"^0.16.1","@sveltejs/adapter-static":"^3.0.5","@sveltejs/kit":"^2.5.28","@sveltejs/package":"^2.3.5","@sveltejs/vite-plugin-svelte":"^3.1.2","date-fns":"^4.1.0",eslint:"^9.11.0","eslint-plugin-svelte":"^2.44.0","esm-env":"^1.0.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.257","svelte-check":"^4.0.2",tslib:"^2.7.0",typescript:"^5.6.2","typescript-eslint":"^8.6.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{"./package.json":"./package.json","./mastodon_cache.svelte.js":{types:"./dist/mastodon_cache.svelte.d.ts",default:"./dist/mastodon_cache.svelte.js"},"./Mastodon_Status_Item.svelte":{types:"./dist/Mastodon_Status_Item.svelte.d.ts",svelte:"./dist/Mastodon_Status_Item.svelte",default:"./dist/Mastodon_Status_Item.svelte"},"./Mastodon_Status_Tree.svelte":{types:"./dist/Mastodon_Status_Tree.svelte.d.ts",svelte:"./dist/Mastodon_Status_Tree.svelte",default:"./dist/Mastodon_Status_Tree.svelte"},"./mastodon.js":{types:"./dist/mastodon.d.ts",default:"./dist/mastodon.js"},"./storage.js":{types:"./dist/storage.d.ts",default:"./dist/storage.js"},"./Toot_Input.svelte":{types:"./dist/Toot_Input.svelte.d.ts",svelte:"./dist/Toot_Input.svelte",default:"./dist/Toot_Input.svelte"},"./Toot_Loader.svelte":{types:"./dist/Toot_Loader.svelte.d.ts",svelte:"./dist/Toot_Loader.svelte",default:"./dist/Toot_Loader.svelte"},"./Toot.svelte":{types:"./dist/Toot.svelte.d.ts",svelte:"./dist/Toot.svelte",default:"./dist/Toot.svelte"}}},qt={name:"@ryanatkn/fuz_mastodon",version:"0.26.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./mastodon_cache.svelte.js":{path:"mastodon_cache.svelte.ts",declarations:[{name:"Mastodon_Cache",kind:"class"},{name:"get_mastodon_cache",kind:"function"},{name:"set_mastodon_cache",kind:"function"}]},"./Mastodon_Status_Item.svelte":{path:"Mastodon_Status_Item.svelte",declarations:[]},"./Mastodon_Status_Tree.svelte":{path:"Mastodon_Status_Tree.svelte",declarations:[]},"./mastodon.js":{path:"mastodon.ts",declarations:[{name:"to_mastodon_status_url",kind:"function"},{name:"to_mastodon_status_url_with_author",kind:"function"},{name:"to_mastodon_status_url_with_users_author",kind:"function"},{name:"to_mastodon_api_status_url",kind:"function"},{name:"to_mastodon_api_status_context_url",kind:"function"},{name:"to_mastodon_api_favourites_url",kind:"function"},{name:"Mastodon_Status_Url",kind:"type"},{name:"parse_mastodon_status_url",kind:"function"},{name:"fetch_mastodon_status_context",kind:"function"},{name:"fetch_mastodon_status",kind:"function"},{name:"fetch_mastodon_favourites",kind:"function"},{name:"Mastodon_Status_Context",kind:"type"},{name:"Mastodon_Status",kind:"type"},{name:"Mastodon_Favourite",kind:"type"},{name:"Reply_Filter",kind:"type"},{name:"Favourited_By_Reply_Filter",kind:"type"},{name:"Minimum_Favourites_Reply_Filter",kind:"type"},{name:"Custom_Reply_Filter",kind:"type"},{name:"Create_Reply_Filters",kind:"type"},{name:"filter_valid_replies",kind:"function"}]},"./storage.js":{path:"storage.ts",declarations:[{name:"load_from_storage",kind:"function"},{name:"set_in_storage",kind:"function"}]},"./Toot_Input.svelte":{path:"Toot_Input.svelte",declarations:[]},"./Toot_Loader.svelte":{path:"Toot_Loader.svelte",declarations:[]},"./Toot.svelte":{path:"Toot.svelte",declarations:[]}}};export{Zt as L,bt as S,T as a,Rt as b,qt as c,Nt as d,yt as f,Et as g,jt as m,At as p,Bt as s,It as t,Lt as z};
