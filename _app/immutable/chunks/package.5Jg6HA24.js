import{n as F,E as P,ao as Q,ap as Z,x as J,u as V,aq as X,G as Y,w as $,K as tt,ar as et,as as st,t as z,i as q,m as U,p as at,a as ot}from"./runtime.GpU-9a05.js";import{v as nt,a as T,w as rt,c as C,t as D,g as b,f as x,b as w,s as it}from"./disclose-version.kQ00h3cW.js";import{p as E,i as M}from"./props.CdlSa-dP.js";import{b as N,c as L,a as dt,d as B,e as A,s as k}from"./string.Akn4E1FC.js";const H=typeof window<"u",lt=H?requestAnimationFrame:F,ut=H?()=>performance.now():()=>Date.now(),g={tick:e=>lt(e),now:()=>ut(),tasks:new Set};function K(e){g.tasks.forEach(t=>{t.c(e)||(g.tasks.delete(t),t.f())}),g.tasks.size!==0&&g.tick(K)}function _t(e){let t;return g.tasks.size===0&&g.tick(K),{promise:new Promise(i=>{g.tasks.add(t={c:e,f:i})}),abort(){g.tasks.delete(t)}}}function I(e,t){e.dispatchEvent(new CustomEvent(t))}function vt(e){const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function pt(e){const t={},i=e.split(";");for(const d of i){const[n,o]=d.split(":");if(!n||o===void 0)break;const p=vt(n.trim());t[p]=o.trim()}return t}const ft=e=>e;function St(e,t,i,d){var n=(e&X)!==0,o=(e&et)!==0,p=(e&st)!==0,l=n&&o?"both":n?"in":"out",f,r=t.inert,v,a,s;function _(){return f??(f=i()(t,d==null?void 0:d(),{direction:l}))}var y={is_global:p,in(){t.inert=r,n?(I(t,"introstart"),v=G(t,_(),a,1,()=>{I(t,"introend"),v=f=void 0})):(a==null||a.abort(),s==null||s())},out(u){o?(t.inert=!0,I(t,"outrostart"),a=G(t,_(),v,0,()=>{I(t,"outroend"),a=f=void 0,u==null||u()}),s=a.reset):u==null||u()},stop:()=>{v==null||v.abort(),a==null||a.abort()}},c=Y;if((c.transitions??(c.transitions=[])).push(y),n&&nt){let u=p;if(!u){for(var m=c.parent;m&&m.f&P;)for(;(m=m.parent)&&!(m.f&Q););u=!m||(m.f&Z)!==0}u&&J(()=>{V(()=>y.in())})}}function G(e,t,i,d,n){if($(t)){var o;return tt(()=>{var h=t({direction:d===1?"in":"out"});o=G(e,h,i,d,n)}),{abort:()=>o.abort(),deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:h=>o.t(h)}}if(i==null||i.deactivate(),!(t!=null&&t.duration))return n==null||n(),{abort:F,deactivate:F,reset:F,t:()=>d};var{delay:p=0,duration:l,css:f,tick:r,easing:v=ft}=t,a=g.now()+p,s=(i==null?void 0:i.t(a))??1-d,_=d-s;l*=Math.abs(_);var y=a+l,c,m;if(f){for(var u=[],O=Math.ceil(l/16.666666666666668),j=0;j<=O;j+=1){var R=s+_*v(j/O),W=f(R,1-R);u.push(pt(W))}c=e.animate(u,{delay:p,duration:l,easing:"linear",fill:"forwards"}),c.finished.then(()=>{n==null||n(),d===1&&c.cancel()}).catch(h=>{if(c.startTime!==null&&c.currentTime!==null)throw h})}else s===0&&(r==null||r(0,1)),m=_t(h=>{if(h>=y)return r==null||r(d,1-d),n==null||n(),!1;if(h>=a){var S=s+_*v((h-a)/l);r==null||r(S,1-S)}return!0});return{abort:()=>{c==null||c.cancel(),m==null||m.abort()},deactivate:()=>{n=void 0},reset:()=>{d===0&&(r==null||r(1,0))},t:h=>{var S=s+_*v((h-a)/l);return Math.min(1,Math.max(0,S))}}}const ct=e=>N(L(L(e,"https://"),"www."),"/");var mt=rt(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function ht(e,t){const i=E(t,"fill",3,"var(--text_color, #000)"),d=E(t,"size",3,"var(--space_xl7, 64px)"),n=E(t,"label",3,"the GitHub icon, an octocat silhouette"),o=U(()=>t.width??d()),p=U(()=>t.height??d());var l=mt();let f;var r=C(l);z(()=>{f=dt(l,f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t.attrs,"aria-label":n(),class:t.classes},!1,""),B(l,"width",q(o)),B(l,"height",q(p)),A(r,"fill",i())}),T(e,l)}var gt=D('<div class="root_url svelte-cs8o0f"><a> </a></div>'),yt=D('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function kt(e,t){at(t,!0);const i=E(t,"root_url",3,null);var d=yt(),n=C(d);M(n,()=>t.children,a=>{var s=b(),_=x(s);k(()=>t.children,_),T(a,s)});var o=w(w(n,!0)),p=C(o);M(p,()=>t.logo_header,a=>{var s=b(),_=x(s);k(()=>t.logo_header,_),T(a,s)});var l=w(w(p,!0)),f=C(l);M(f,()=>t.logo,a=>{var s=b(),_=x(s);k(()=>t.logo,_),T(a,s)},a=>{var s=b(),_=x(s);ht(_,{}),T(a,s)});var r=w(w(l,!0));M(r,()=>t.logo_footer,a=>{var s=b(),_=x(s);k(()=>t.logo_footer,_),T(a,s)});var v=w(w(o,!0));M(v,i,a=>{var s=gt(),_=C(s),y=C(_);z(()=>it(y,ct(i()))),z(()=>A(_,"href",i())),T(a,s)}),z(()=>A(l,"href",t.pkg.repo_url)),T(e,d),ot()}const It=(e,t,i)=>{const{name:d}=t,o=(s=>s?N(L(N(s,".git"),"git+"),"/"):null)(t.repository?typeof t.repository=="string"?t.repository:t.repository.url:null),p=t.homepage??null,l=!t.private&&!!t.exports&&t.version!=="0.0.1",f=l?"https://www.npmjs.com/package/"+t.name:null,r=l&&o?o+"/blob/main/CHANGELOG.md":null,v=wt(d),a=o?L(o,"https://github.com/").split("/")[0]:null;return{url:e,package_json:t,src_json:i,name:d,repo_name:v,repo_url:o,owner_name:a,homepage_url:p,npm_url:f,changelog_url:r,published:l}},wt=e=>e[0]==="@"?e.split("/")[1]:e;function Tt(e){const t=e-1;return t*t*t+1}function Ft(e,{delay:t=0,duration:i=400,easing:d=Tt,axis:n="y"}={}){const o=getComputedStyle(e),p=+o.opacity,l=n==="y"?"height":"width",f=parseFloat(o[l]),r=n==="y"?["top","bottom"]:["left","right"],v=r.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),a=parseFloat(o[`padding${v[0]}`]),s=parseFloat(o[`padding${v[1]}`]),_=parseFloat(o[`margin${v[0]}`]),y=parseFloat(o[`margin${v[1]}`]),c=parseFloat(o[`border${v[0]}Width`]),m=parseFloat(o[`border${v[1]}Width`]);return{delay:t,duration:i,easing:d,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*p};${l}: ${u*f}px;padding-${r[0]}: ${u*a}px;padding-${r[1]}: ${u*s}px;margin-${r[0]}: ${u*_}px;margin-${r[1]}: ${u*y}px;border-${r[0]}-width: ${u*c}px;border-${r[1]}-width: ${u*m}px;`}}const zt={name:"@ryanatkn/fuz_mastodon",version:"0.14.1",description:"Mastodon components and helpers for Svelte, SvelteKit, and Fuz",glyph:"🦣",logo:"logo.svg",logo_alt:"a friendly purple spider facing you",public:!0,license:"MIT",homepage:"https://mastodon.fuz.dev/",repository:"https://github.com/ryanatkn/fuz_mastodon",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/fuz_mastodon/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",test:"gro test",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/fuz":"*","@sveltejs/kit":"^2",svelte:"^5.0.0-next.0","svelte-intersect":"^0.14"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.1","@ryanatkn/eslint-config":"^0.1.3","@ryanatkn/fuz":"^0.107.1","@ryanatkn/fuz_code":"^0.15.1","@ryanatkn/gro":"^0.129.0","@ryanatkn/moss":"^0.6.3","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.17","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1","@typescript-eslint/eslint-plugin":"^7.13.1","@typescript-eslint/parser":"^7.13.1","date-fns":"^3.6.0",eslint:"^8.57.0","eslint-plugin-svelte":"^2.41.0","esm-env":"^1.0.0",prettier:"^3.3.2","prettier-plugin-svelte":"^3.2.5","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.165","svelte-check":"^3.8.2","svelte-intersect":"^0.14.1",tslib:"^2.6.3",typescript:"^5.5.2",uvu:"^0.5.6"},eslintConfig:{root:!0,extends:"@ryanatkn",rules:{"no-console":1}},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"],exports:{"./package.json":"./package.json","./Mastodon_Status_Item.svelte":{types:"./dist/Mastodon_Status_Item.svelte.d.ts",svelte:"./dist/Mastodon_Status_Item.svelte",default:"./dist/Mastodon_Status_Item.svelte"},"./Mastodon_Status_Tree.svelte":{types:"./dist/Mastodon_Status_Tree.svelte.d.ts",svelte:"./dist/Mastodon_Status_Tree.svelte",default:"./dist/Mastodon_Status_Tree.svelte"},"./mastodon.js":{types:"./dist/mastodon.d.ts",default:"./dist/mastodon.js"},"./storage.js":{types:"./dist/storage.d.ts",default:"./dist/storage.js"},"./Toot_Input.svelte":{types:"./dist/Toot_Input.svelte.d.ts",svelte:"./dist/Toot_Input.svelte",default:"./dist/Toot_Input.svelte"},"./Toot_Loader.svelte":{types:"./dist/Toot_Loader.svelte.d.ts",svelte:"./dist/Toot_Loader.svelte",default:"./dist/Toot_Loader.svelte"},"./Toot.svelte":{types:"./dist/Toot.svelte.d.ts",svelte:"./dist/Toot.svelte",default:"./dist/Toot.svelte"}}},Et={name:"@ryanatkn/fuz_mastodon",version:"0.14.1",modules:{"./package.json":{path:"package.json",declarations:[]},"./Mastodon_Status_Item.svelte":{path:"Mastodon_Status_Item.svelte",declarations:[]},"./Mastodon_Status_Tree.svelte":{path:"Mastodon_Status_Tree.svelte",declarations:[]},"./mastodon.js":{path:"mastodon.ts",declarations:[{name:"to_mastodon_status_url",kind:"function"},{name:"to_mastodon_status_url_with_author",kind:"function"},{name:"to_mastodon_status_url_with_users_author",kind:"function"},{name:"to_mastodon_api_status_url",kind:"function"},{name:"to_mastodon_api_status_context_url",kind:"function"},{name:"to_mastodon_api_favourites_url",kind:"function"},{name:"Mastodon_Status_Url",kind:"type"},{name:"parse_mastodon_status_url",kind:"function"},{name:"fetch_mastodon_status_context",kind:"function"},{name:"fetch_mastodon_status",kind:"function"},{name:"fetch_mastodon_favourites",kind:"function"},{name:"Mastodon_Status_Context",kind:"type"},{name:"Mastodon_Status",kind:"type"},{name:"Mastodon_Favourite",kind:"type"}]},"./storage.js":{path:"storage.ts",declarations:[{name:"load_from_storage",kind:"function"},{name:"set_in_storage",kind:"function"}]},"./Toot_Input.svelte":{path:"Toot_Input.svelte",declarations:[]},"./Toot_Loader.svelte":{path:"Toot_Loader.svelte",declarations:[]},"./Toot.svelte":{path:"Toot.svelte",declarations:[]}}};export{kt as L,zt as a,Et as b,ct as f,It as p,Ft as s,St as t};