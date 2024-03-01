/*! For license information please see 51d9b128.e541cad1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96840],{98878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(24246),a=n(71670);const o={id:"style",title:"Style"},r=void 0,i={id:"style",title:"Style",description:"With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.",source:"@site/versioned_docs/version-0.70/style.md",sourceDirName:".",slug:"/style",permalink:"/docs/0.70/style",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/style.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"style",title:"Style"},sidebar:"docs",previous:{title:"Upgrading to new versions",permalink:"/docs/0.70/upgrading"},next:{title:"Height and Width",permalink:"/docs/0.70/height-and-width"}},c={},l=[{value:"Known issues",id:"known-issues",level:2}];function d(e){const t=Object.assign({p:"p",code:"code",a:"a",div:"div",h2:"h2",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["With React Native, you style your application using JavaScript. All of the core components accept a prop named ",(0,s.jsx)(t.code,{children:"style"}),". The style names and ",(0,s.jsx)(t.a,{href:"/docs/0.70/colors",children:"values"})," usually match how CSS works on the web, except names are written using camel casing, e.g. ",(0,s.jsx)(t.code,{children:"backgroundColor"})," rather than ",(0,s.jsx)(t.code,{children:"background-color"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"style"})," prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles."]}),"\n",(0,s.jsxs)(t.p,{children:["As a component grows in complexity, it is often cleaner to use ",(0,s.jsx)(t.code,{children:"StyleSheet.create"})," to define several styles in one place. Here's an example:"]}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"Style","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20LotsOfStyles%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.red%7D%3Ejust%20red%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.bigBlue%7D%3Ejust%20bigBlue%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.bigBlue%2C%20styles.red%5D%7D%3EbigBlue%2C%20then%20red%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.red%2C%20styles.bigBlue%5D%7D%3Ered%2C%20then%20bigBlue%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20bigBlue%3A%20%7B%5Cn%20%20%20%20color%3A%20'blue'%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20fontSize%3A%2030%2C%5Cn%20%20%7D%2C%5Cn%20%20red%3A%20%7B%5Cn%20%20%20%20color%3A%20'red'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20LotsOfStyles%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(t.p,{children:["One common pattern is to make your component accept a ",(0,s.jsx)(t.code,{children:"style"}),' prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.']}),"\n",(0,s.jsxs)(t.p,{children:["There are a lot more ways to customize the text style. Check out the ",(0,s.jsx)(t.a,{href:"/docs/0.70/text",children:"Text component reference"})," for a complete list."]}),"\n",(0,s.jsxs)(t.p,{children:["Now you can make your text beautiful. The next step in becoming a style expert is to ",(0,s.jsx)(t.a,{href:"/docs/0.70/height-and-width",children:"learn how to control component size"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/29308#issuecomment-792864162",children:"react-native#29308"}),": In some cases React Native does not match how CSS works on the web, for example the touch area never extends past the parent view bounds and on Android negative margin is not supported."]}),"\n"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var s=n(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var s=n(27378);const a=s.createContext({});function o(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:o(e),s.createElement(a.Provider,{value:i},t)}}}]);