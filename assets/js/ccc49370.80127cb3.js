"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[46103],{35670:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(27378),a=n(38944),l=n(40627),o=n(29453),i=n(32401),c=n(90144);function s({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(c.Z,{sidebar:e}):r.createElement(i.Z,{sidebar:e}):null}var m=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&f(e,n,t[n]);return e},g=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};function v(e){const t=e,{sidebar:n,toc:o,children:i}=t,c=g(t,["sidebar","toc","children"]),m=n&&n.items.length>0;return r.createElement(l.Z,b({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(s,{sidebar:n}),r.createElement("main",{className:(0,a.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"https://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},o))))}},40752:(e,t,n)=>{n.d(t,{Z:()=>ee});var r=n(27378),a=n(38944),l=n(68050),o=n(51448);function i({children:e,className:t}){var n,a;const{frontMatter:i,assets:c,metadata:{description:s}}=(0,l.C)(),{withBaseUrl:m}=(0,o.C)(),u=null!=(n=c.image)?n:i.image,d=null!=(a=i.keywords)?a:[];return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting"},s&&r.createElement("meta",{itemProp:"description",content:s}),u&&r.createElement("link",{itemProp:"image",href:m(u,{absolute:!0})}),d.length>0&&r.createElement("meta",{itemProp:"keywords",content:d.join(",")}),e)}var c=n(13067);const s={title:"title_Kdtz"};function m({className:e}){const{metadata:t,isBlogPostPage:n}=(0,l.C)(),{permalink:o,title:i}=t,m=n?"h1":"h2";return r.createElement(m,{className:(0,a.Z)(s.title,e),itemProp:"headline"},n?i:r.createElement(c.Z,{itemProp:"url",to:o},i))}var u=n(56381),d=n(83523);const p={container:"container_iZB2"};function f({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return r.createElement(r.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function g(){return r.createElement(r.Fragment,null," \xb7 ")}function v({className:e}){const{metadata:t}=(0,l.C)(),{date:n,formattedDate:o,readingTime:i}=t;return r.createElement("div",{className:(0,a.Z)(p.container,"margin-vert--md",e)},r.createElement(b,{date:n,formattedDate:o}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(g,null),r.createElement(f,{readingTime:i})))}var h=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&P(e,n,t[n]);if(E)for(var n of E(t))O.call(t,n)&&P(e,n,t[n]);return e};function N(e){return e.href?r.createElement(c.Z,w({},e)):r.createElement(r.Fragment,null,e.children)}function k({author:e,className:t}){const{name:n,title:l,url:o,imageURL:i,email:c}=e,s=o||c&&`mailto:${c}`||void 0;return r.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",t)},i&&r.createElement(N,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:n,itemProp:"image"})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(N,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const _={authorCol:"authorCol_v1VX",imageOnlyAuthorRow:"imageOnlyAuthorRow_RxZ1",imageOnlyAuthorCol:"imageOnlyAuthorCol_iWtj"};var j=Object.defineProperty,x=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&T(e,n,t[n]);if(L)for(var n of L(t))C.call(t,n)&&T(e,n,t[n]);return e},A=(e,t)=>x(e,Z(t));function F({className:e}){const{metadata:{authors:t},assets:n}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?_.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var l;return r.createElement("div",{className:(0,a.Z)(!o&&"col col--6",o?_.imageOnlyAuthorCol:_.authorCol),key:t},r.createElement(k,{author:A(H({},e),{imageURL:null!=(l=n.authorsImageUrls[t])?l:e.imageURL})}))})))}function B(){return r.createElement("header",null,r.createElement(m,null),r.createElement(v,null),r.createElement(F,null))}var M=n(60120),S=n(11355);function R({children:e,className:t}){const{isBlogPostPage:n}=(0,l.C)();return r.createElement("div",{id:n?M.blogPostContainerID:void 0,className:(0,a.Z)("markdown",t),itemProp:"articleBody"},r.createElement(S.Z,null,e))}var D=n(36100),U=n(87226),$=Object.defineProperty,z=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&q(e,n,t[n]);if(z)for(var n of z(t))G.call(t,n)&&q(e,n,t[n]);return e},Q=(e,t)=>{var n={};for(var r in e)W.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&z)for(var r of z(e))t.indexOf(r)<0&&G.call(e,r)&&(n[r]=e[r]);return n};function X(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function K(e){const t=e,{blogPostTitle:n}=t,a=Q(t,["blogPostTitle"]);return r.createElement(c.Z,J({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:n})},a),r.createElement(X,null))}const V={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_JgJa"};function Y(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:n,title:o,editUrl:i,hasTruncateMarker:c}=e,s=!t&&c,m=n.length>0;return m||s||i?r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&V.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":s})},r.createElement(U.Z,{tags:n})),t&&i&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(D.Z,{editUrl:i})),s&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":m})},r.createElement(K,{blogPostTitle:o,to:e.permalink}))):null}function ee({children:e,className:t}){const n=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(i,{className:(0,a.Z)(n,t)},r.createElement(B,null),r.createElement(R,null,e),r.createElement(Y,null))}},32888:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(27378),a=n(38944),l=n(88120),o=n(41149),i=n(68050),c=n(35670),s=n(40752),m=n(56381),u=n(27007),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&h(e,n,t[n]);return e},y=(e,t)=>p(e,f(t));function O(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(u.Z,y(E({},n),{subLabel:r.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(u.Z,y(E({},t),{subLabel:r.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function P(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:a,description:o,date:c,tags:s,authors:m,frontMatter:u}=n,{keywords:d}=u,p=null!=(e=t.image)?e:u.image;return r.createElement(l.d,{title:a,description:o,keywords:d,image:p},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&r.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var w=n(48159),N=n(48763);function k({sidebar:e,children:t}){const{metadata:n,toc:a}=(0,i.C)(),{nextItem:l,prevItem:o,frontMatter:m,unlisted:u}=n,{hide_table_of_contents:d,toc_min_heading_level:p,toc_max_heading_level:f}=m;return r.createElement(c.Z,{sidebar:e,toc:!d&&a.length>0?r.createElement(w.Z,{toc:a,minHeadingLevel:p,maxHeadingLevel:f}):void 0},u&&r.createElement(N.Z,null),r.createElement(s.Z,null,t),(l||o)&&r.createElement(O,{nextItem:l,prevItem:o}))}function _(e){const t=e.content;return r.createElement(i.n,{content:e.content,isBlogPostPage:!0},r.createElement(l.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},r.createElement(P,null),r.createElement(k,{sidebar:e.sidebar},r.createElement(t,null))))}},48159:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(27378),a=n(38944),l=n(68251);const o={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"};var i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&p(e,n,t[n]);return e},b=(e,t)=>c(e,s(t)),g=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const v="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function E(e){var t=e,{className:n}=t,i=g(t,["className"]);return r.createElement("div",{className:(0,a.Z)(o.tableOfContents,"thin-scrollbar",n)},r.createElement(l.Z,b(f({},i),{linkClassName:v,linkActiveClassName:h})))}},68251:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(27378),a=n(87371),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};function b(e){const t=e.map((e=>p(d({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const n=e,{parentIndex:a}=n,l=f(n,["parentIndex"]);a>=0?t[a].children.push(l):r.push(l)})),r}function g({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=g({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[p(d({},e),{children:r})]:r}))}function v(e){const t=e.getBoundingClientRect();return t.top===t.bottom?v(e.parentNode):t}function h(e,{anchorTopOffset:t}){var n,r;const a=e.find((e=>v(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(v(a))?a:null!=(n=e[e.indexOf(a)-1])?n:null}return null!=(r=e[e.length-1])?r:null}function E(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function y(e){const t=(0,r.useRef)(void 0),n=E();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=h(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var O=n(13067);const P=r.memo((function e({toc:t,className:n,linkClassName:a,isChild:l}){return t.length?r.createElement("ul",{className:l?void 0:n},t.map((t=>r.createElement("li",{key:t.id},r.createElement(O.Z,{to:`#${t.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:t.value}}),r.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:a}))))):null}));var w=Object.defineProperty,N=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&j(e,n,t[n]);if(N)for(var n of N(t))_.call(t,n)&&j(e,n,t[n]);return e},Z=(e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&N)for(var r of N(e))t.indexOf(r)<0&&_.call(e,r)&&(n[r]=e[r]);return n};function L(e){var t=e,{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:s}=t,m=Z(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const u=(0,a.L)(),d=null!=c?c:u.tableOfContents.minHeadingLevel,p=null!=s?s:u.tableOfContents.maxHeadingLevel,f=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)((()=>g({toc:b(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:n,minHeadingLevel:d,maxHeadingLevel:p});return y((0,r.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:p}}),[o,i,d,p])),r.createElement(P,x({toc:f,className:l,linkClassName:o},m))}},48763:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(27378),a=n(38944),l=n(56381),o=n(54820);function i(){return r.createElement(l.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function c(){return r.createElement(l.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function s(){return r.createElement(o.Z,null,r.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var m=n(41149),u=n(8741),d=Object.defineProperty,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))b.call(t,n)&&g(e,n,t[n]);return e};function h({className:e}){return r.createElement(u.Z,{type:"caution",title:r.createElement(i,null),className:(0,a.Z)(e,m.k.common.unlistedBanner)},r.createElement(c,null))}function E(e){return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement(h,v({},e)))}},68050:(e,t,n)=>{n.d(t,{C:()=>i,n:()=>o});var r=n(27378),a=n(75071);const l=r.createContext(null);function o({children:e,content:t,isBlogPostPage:n=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:n});return r.createElement(l.Provider,{value:a},e)}function i(){const e=(0,r.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},83523:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(27378),a=n(92676);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function s(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}},32401:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(27378),a=n(38944),l=n(13067),o=n(56381);const i={sidebar:"sidebar_brwN",sidebarHeader:"sidebarHeader_yTb0",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function c({sidebar:e}){let t=null;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,a.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,a.Z)(i.sidebarHeader,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,a.Z)(i.sidebarItemList,"clean-list")},e.items.map((e=>{const n=e.permalink.split("/")[2],a=t!==n&&r.createElement("h5",{className:i.sidebarItemTitle},n);return t=n,r.createElement(r.Fragment,null,a,r.createElement("li",{key:e.permalink,className:i.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))})))))}},90144:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(27378),a=n(13067),l=n(68561);const o={sidebarItemTitle:"sidebarItemTitle_z3uL"};function i({sidebar:e}){let t=null;return r.createElement("ul",{className:"menu__list blog-menu__list"},e.items.map((e=>{const n=e.permalink.split("/")[2],l=t!==n&&r.createElement("h5",{className:o.sidebarItemTitle},n);return t=n,r.createElement(r.Fragment,null,l,r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(a.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))})))}function c(e){return r.createElement(l.Zo,{component:i,props:e})}},37489:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(27378),a=n(69095),l=n(13067),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&d(e,n,t[n]);return e},f=(e,t)=>i(e,c(t));const b="md ";function g(e){return"string"==typeof e.children&&e.children.startsWith(b)?r.createElement(v,f(p({},e),{children:e.children.slice(b.length)})):r.createElement("code",p({},e))}const v=r.memo((function(e){const t=function(e){const t=new RegExp("(?<link>\\[(?<text>[^\\]]+)?\\]\\((?<url>[^)]+)\\))","g"),n=/\[[^\]]+?\]\([^)]+\)/g,a=[];let o;for(;null!==(o=t.exec(e));){const e=o.groups.link,t=o.groups.text,n=o.groups.url;if(n.endsWith(".md")||n.endsWith(".mdx"))throw new Error("Markdown links inside code blocks can't link using a filename extensions. Problematic link: "+e);a.push({link:e,text:t,url:n})}return e.split(n).map(((e,t)=>r.createElement(r.Fragment,{key:t},e,a[t]?r.createElement(l.Z,{to:a[t].url},a[t].text):null)))}(e.children);return r.createElement("code",f(p({},e),{children:t}))}));var h=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&P(e,n,t[n]);if(E)for(var n of E(t))O.call(t,n)&&P(e,n,t[n]);return e};function N(e){return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?r.createElement(g,w({},e)):r.createElement(a.Z,w({},e))}}}]);