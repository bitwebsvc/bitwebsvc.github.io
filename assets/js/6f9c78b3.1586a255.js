/*! For license information please see 6f9c78b3.1586a255.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96018],{30308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(24246),s=n(71670);const o={id:"handling-text-input",title:"Handling Text Input"},r=void 0,i={id:"handling-text-input",title:"Handling Text Input",description:"TextInput is a Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.",source:"@site/../docs/handling-text-input.md",sourceDirName:".",slug:"/handling-text-input",permalink:"/docs/next/handling-text-input",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/handling-text-input.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"handling-text-input",title:"Handling Text Input"},sidebar:"docs",previous:{title:"React Fundamentals",permalink:"/docs/next/intro-react"},next:{title:"Using a ScrollView",permalink:"/docs/next/using-a-scrollview"}},d={},c=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",div:"div"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"textinput#content",children:(0,a.jsx)(t.code,{children:"TextInput"})})," is a ",(0,a.jsx)(t.a,{href:"intro-react-native-components",children:"Core Component"})," that allows the user to enter text. It has an ",(0,a.jsx)(t.code,{children:"onChangeText"})," prop that takes a function to be called every time the text changed, and an ",(0,a.jsx)(t.code,{children:"onSubmitEditing"})," prop that takes a function to be called when the text is submitted."]}),"\n",(0,a.jsx)(t.p,{children:'For example, let\'s say that as the user types, you\'re translating their words into a different language. In this new language, every single word is written the same way: \ud83c\udf55. So the sentence "Hello there Bob" would be translated as "\ud83c\udf55 \ud83c\udf55 \ud83c\udf55".'}),"\n",(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"Handling Text Input","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BText%2C%20TextInput%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20PizzaTranslator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState('')%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bpadding%3A%2010%7D%7D%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2040%7D%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22Type%20here%20to%20translate!%5C%22%5Cn%20%20%20%20%20%20%20%20onChangeText%3D%7BnewText%20%3D%3E%20setText(newText)%7D%5Cn%20%20%20%20%20%20%20%20defaultValue%3D%7Btext%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%7Bpadding%3A%2010%2C%20fontSize%3A%2042%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%7Btext%5Cn%20%20%20%20%20%20%20%20%20%20.split('%20')%5Cn%20%20%20%20%20%20%20%20%20%20.map(word%20%3D%3E%20word%20%26%26%20'%F0%9F%8D%95')%5Cn%20%20%20%20%20%20%20%20%20%20.join('%20')%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20PizzaTranslator%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsxs)(t.p,{children:["In this example, we store ",(0,a.jsx)(t.code,{children:"text"})," in the state, because it changes over time."]}),"\n",(0,a.jsxs)(t.p,{children:["There are a lot more things you might want to do with a text input. For example, you could validate the text inside while the user types. For more detailed examples, see the ",(0,a.jsx)(t.a,{href:"https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable",children:"React docs on controlled components"}),", or the ",(0,a.jsx)(t.a,{href:"/docs/next/textinput",children:"reference docs for TextInput"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Text input is one of the ways the user interacts with the app. Next, let's look at another type of input and ",(0,a.jsx)(t.a,{href:"/docs/next/handling-touches",children:"learn how to handle touches"}),"."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var a=n(27378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,l=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,a)&&!d.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var a=n(27378);const s=a.createContext({});function o(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:o(e),a.createElement(s.Provider,{value:i},t)}}}]);