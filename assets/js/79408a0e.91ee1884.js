/*! For license information please see 79408a0e.91ee1884.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[44255],{47772:(e,t,r)=>{r.d(t,{ZP:()=>s});var i=r(24246),n=r(71670);function a(e){const t=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,n.ah)(),e.components);return(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsxs)(t.p,{children:["This documentation is still ",(0,i.jsx)(t.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,i.jsxs)(t.p,{children:["Moreover, it contains several ",(0,i.jsx)(t.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const s=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},35485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=r(24246),n=r(71670),a=r(47772);const s={id:"landing-page",title:"Introduction"},o=void 0,c={id:"the-new-architecture/landing-page",title:"Introduction",description:"Starting from version 0.68, React Native provides the New Architecture, which offers developers new capabilities for building highly performant and responsive apps. Visit Why a New Architecture to learn more about what drove the decision to re-architect, and the benefits it provides.",source:"@site/versioned_docs/version-0.70/the-new-architecture/landing-page.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/landing-page",permalink:"/docs/0.70/the-new-architecture/landing-page",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/the-new-architecture/landing-page.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"landing-page",title:"Introduction"},sidebar:"docs",previous:{title:"Direct Manipulation",permalink:"/docs/0.70/direct-manipulation"},next:{title:"Why A New Architecture",permalink:"/docs/0.70/the-new-architecture/why"}},h={},l=[{value:"Get started with the New Architecture",id:"get-started-with-the-new-architecture",level:2},{value:"For app developers",id:"for-app-developers",level:3},{value:"For library maintainers",id:"for-library-maintainers",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",h2:"h2",h3:"h3",strong:"strong"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsxs)(t.p,{children:["Starting from version 0.68, React Native provides the New Architecture, which offers developers new capabilities for building highly performant and responsive apps. Visit ",(0,i.jsx)(t.a,{href:"why",children:"Why a New Architecture"})," to learn more about what drove the decision to re-architect, and the benefits it provides."]}),"\n",(0,i.jsxs)(t.p,{children:["In order to achieve these benefits, we had to rethink how Native Modules and Native Components work. This led us to develop the ",(0,i.jsx)(t.a,{href:"pillars",children:"Pillars of the New Architecture"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"pillars-turbomodules",children:"The New Native Module System - Turbo Modules"}),", a framework to support efficient and flexible integration with native code"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"pillars-fabric-components",children:"The New Native Renderer - Fabric"}),", which offer improved capabilities, cross-platform consistency, and performance in rendering"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"pillars-codegen",children:"The Codegen"}),", which generates boilerplate C++ required by the New Architecture via static typing in JavaScript"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"get-started-with-the-new-architecture",children:"Get started with the New Architecture"}),"\n",(0,i.jsx)(t.h3,{id:"for-app-developers",children:"For app developers"}),"\n",(0,i.jsxs)(t.p,{children:["To ",(0,i.jsx)(t.strong,{children:"create a new app"})," using the New Architecture, head over to ",(0,i.jsx)(t.a,{href:"use-app-template",children:"Creating a New Architecture App"}),", which will get you up and running in a few quick steps with the new app template."]}),"\n",(0,i.jsxs)(t.p,{children:["To ",(0,i.jsx)(t.strong,{children:"migrate an existing app"})," to the New Architecture, follow ",(0,i.jsx)(t.a,{href:"../new-architecture-intro",children:"Adopting the New Architecture"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"for-library-maintainers",children:"For library maintainers"}),"\n",(0,i.jsxs)(t.p,{children:["First, read up on the core concepts outlined in the ",(0,i.jsx)(t.a,{href:"pillars",children:"Pillars"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, for a ",(0,i.jsx)(t.strong,{children:"how-to guide"})," on supporting the New Architecture, check out the ",(0,i.jsx)(t.a,{href:"../new-architecture-library-intro",children:"Migration"})," guide."]}),"\n",(0,i.jsxs)(t.p,{children:["For information on ",(0,i.jsx)(t.strong,{children:"supporting both the Old and New Architectures"}),", see the ",(0,i.jsx)(t.a,{href:"backward-compatibility",children:"Backwards Compatibility"})," guide."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,t,r)=>{var i=r(27378),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var i,a={},h=null,l=null;for(i in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:h,ref:l,props:a,_owner:o.current}}t.Fragment=a,t.jsx=h,t.jsxs=h},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>o,ah:()=>a});var i=r(27378);const n=i.createContext({});function a(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||s:a(e),i.createElement(n.Provider,{value:o},t)}}}]);