/*! For license information please see c02137fe.0fa177da.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[15967],{36457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(24246),o=a(71670),s=a(77579);const r={id:"native-modules-setup",title:"Native Modules NPM Package Setup"},i=void 0,l={id:"native-modules-setup",title:"Native Modules NPM Package Setup",description:"Native modules are usually distributed as npm packages, except that on top of the usual JavaScript they will include some native code per platform. To understand more about npm packages you may find this guide useful.",source:"@site/versioned_docs/version-0.71/native-modules-setup.md",sourceDirName:".",slug:"/native-modules-setup",permalink:"/docs/0.71/native-modules-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/native-modules-setup.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"native-modules-setup",title:"Native Modules NPM Package Setup"},sidebar:"docs",previous:{title:"iOS Native Modules",permalink:"/docs/0.71/native-modules-ios"},next:{title:"Android Native UI Components",permalink:"/docs/0.71/native-components-android"}},c={},d=[];function u(e){const t=Object.assign({p:"p",a:"a",pre:"pre",code:"code",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.ZP,{}),"\n",(0,n.jsxs)(t.p,{children:["Native modules are usually distributed as npm packages, except that on top of the usual JavaScript they will include some native code per platform. To understand more about npm packages you may find ",(0,n.jsx)(t.a,{href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry",children:"this guide"})," useful."]}),"\n",(0,n.jsxs)(t.p,{children:["To get set up with the basic project structure for a native module we will use the community tool called ",(0,n.jsx)(t.a,{href:"https://github.com/callstack/react-native-builder-bob",children:"create-react-native-library"}),". You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic script:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npx create-react-native-library@latest react-native-awesome-module\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Where ",(0,n.jsx)(t.code,{children:"react-native-awesome-module"})," is the name you would like for the new module. After doing this you will navigate into ",(0,n.jsx)(t.code,{children:"react-native-awesome-module"})," folder and bootstrap the example project by running:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"yarn\n"})}),"\n",(0,n.jsx)(t.p,{children:"When the bootstrap is done, you will be able to start the example app by executing one of the following commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# Android app\nyarn example android\n# iOS app\nyarn example ios\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When all steps above are done, you will be able to continue with ",(0,n.jsx)(t.a,{href:"native-modules-android",children:"Android Native Modules"})," or ",(0,n.jsx)(t.a,{href:"native-modules-ios",children:"iOS Native Modules"})," guides to add in some code."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["For a less opinionated setup, have a look at the third party tool ",(0,n.jsx)(t.a,{href:"https://github.com/brodybits/create-react-native-module",children:"create-react-native-module"}),"."]}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},77579:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(24246),o=a(71670);function s(e){const t=Object.assign({admonition:"admonition",p:"p",a:"a"},(0,o.ah)(),e.components);return(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,n.jsx)(t.a,{href:"./the-new-architecture/pillars-turbomodules",children:"Turbo Native Module"})," and ",(0,n.jsx)(t.a,{href:"./the-new-architecture/pillars-fabric-components",children:"Fabric Native Components"})," to achieve similar results."]})})}const r=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},71426:(e,t,a)=>{var n=a(27378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,s={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>s});var n=a(27378);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||r:s(e),n.createElement(o.Provider,{value:i},t)}}}]);