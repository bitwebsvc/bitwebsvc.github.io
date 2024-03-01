/*! For license information please see 0a196f91.c590bb38.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[93924],{47772:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(24246),i=r(71670);function s(e){const t=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["This documentation is still ",(0,n.jsx)(t.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,n.jsxs)(t.p,{children:["Moreover, it contains several ",(0,n.jsx)(t.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},57703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(24246),i=r(71670),s=r(47772);const o={id:"why",title:"Why A New Architecture"},a=void 0,c={id:"the-new-architecture/why",title:"Why A New Architecture",description:"The goal of the New Architecture is to solve some of the issues that afflicted the Old Architecture in terms of performance and flexibility. This section provides the basic context to understand the Old Architecture limitations and how it has been possible to overcome them with the New Architecture.",source:"@site/versioned_docs/version-0.70/the-new-architecture/why.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/why",permalink:"/docs/0.70/the-new-architecture/why",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/the-new-architecture/why.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"why",title:"Why A New Architecture"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.70/the-new-architecture/landing-page"},next:{title:"Creating a New Architecture App",permalink:"/docs/0.70/the-new-architecture/use-app-template"}},h={},d=[{value:"Old Architecture&#39;s Issues",id:"old-architectures-issues",level:2},{value:"New Architecture&#39;s Improvements",id:"new-architectures-improvements",level:2},{value:"Further Reading",id:"further-reading",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",em:"em",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.ZP,{}),"\n",(0,n.jsx)(t.p,{children:"The goal of the New Architecture is to solve some of the issues that afflicted the Old Architecture in terms of performance and flexibility. This section provides the basic context to understand the Old Architecture limitations and how it has been possible to overcome them with the New Architecture."}),"\n",(0,n.jsxs)(t.p,{children:["This is not a technical deep dive: for further technical information, refer to the ",(0,n.jsx)(t.a,{href:"/architecture/overview",children:"Architecture"})," tab of the website."]}),"\n",(0,n.jsx)(t.h2,{id:"old-architectures-issues",children:"Old Architecture's Issues"}),"\n",(0,n.jsxs)(t.p,{children:["The Old Architecture used to work by serializing all the data that has to be passed from the JS layer to the native layer using a component called ",(0,n.jsx)(t.em,{children:"The Bridge"}),". ",(0,n.jsx)(t.em,{children:"The Bridge"})," can be imagined as a bus where the producer layer sent some data for the consumer layer. The consumer could read the data, deserialize it and execute the required operations."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"The Bridge"})," had some intrinsic limitations:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"It was asynchronous:"}),' one layer submitted the data to the bridge and asynchronously "waited" for the other layer to process them, even when this was not really necessary.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"It was single threaded:"})," JS used to work on a single thread, therefore the computation that happened in that world had to be performed on that single thread."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"It imposed extra overheads:"})," everytime one layer had to use the other one, it had to serialize some data. The other layer had to deserialize them. The chosen format was JSON, for its simplicity and human-readability, but despite being lightweight, it was a cost to pay."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"new-architectures-improvements",children:"New Architecture's Improvements"}),"\n",(0,n.jsxs)(t.p,{children:["The New Architecture dropped the concept of ",(0,n.jsx)(t.em,{children:"The Bridge"})," in favor of another communication mechanism: the ",(0,n.jsx)(t.em,{children:"JavaScript Interface (JSI)"}),". The ",(0,n.jsx)(t.em,{children:"JSI"})," is an interface that allows a JavaScript object to hold a reference to a C++ and viceversa."]}),"\n",(0,n.jsx)(t.p,{children:"Once an object has a reference to the other one, it can directly invoke methods on it. So, for example, a C++ object can now ask a JavaScript object to execute a method in the JavaScript world and viceversa."}),"\n",(0,n.jsx)(t.p,{children:"This idea allowed to unlock several benefits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Synchronous execution:"})," it is now possibile to execute synchronously those functions that should not have been asynchronous in the first place."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Concurrency:"})," it is possible from JavaScript to invoke functions that are executed on different thread."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Lower overhead:"})," the New Architecture don't have to serialize/deserialize the data anymore, therefore there are no serialization taxes to pay."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Code sharing:"})," by introducing C++, it is now possible to abstract all the platform agnostic code and to share it with ease between the platforms."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Type safety:"})," to make sure that JS can properly invoke methods on C++ objects and viceversa, a layer of code automatically generated has been added. The code is generated starting from some JS specification that must be typed through Flow or TypeScript."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These advantages are the foundations of the ",(0,n.jsx)(t.a,{href:"pillars-turbomodules",children:"New Native Module System"})," and a jumping stone to further enhancements. For example, it has been possible to develop a ",(0,n.jsx)(t.a,{href:"/architecture/fabric-renderer",children:"new renderer"})," which offers faster and more performant ",(0,n.jsx)(t.a,{href:"pillars-fabric-components",children:"Native Components"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,n.jsxs)(t.p,{children:["For a technical overview of the New Architecture, have a look at the ",(0,n.jsx)(t.a,{href:"/architecture/overview",children:"Architecture tab"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on the Fabric Renderer, have a look at the ",(0,n.jsx)(t.a,{href:"/architecture/fabric-renderer",children:"Fabric section"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},71426:(e,t,r)=>{var n=r(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var n,s={},h=null,d=null;for(n in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:h,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=h,t.jsxs=h},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>s});var n=r(27378);const i=n.createContext({});function s(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||o:s(e),n.createElement(i.Provider,{value:a},t)}}}]);