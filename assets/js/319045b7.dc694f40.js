/*! For license information please see 319045b7.dc694f40.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[26040],{43438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(24246),o=n(71670);const i={id:"clipboard",title:"\ud83d\udea7 Clipboard"},s=void 0,a={id:"clipboard",title:"\ud83d\udea7 Clipboard",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.71/clipboard.md",sourceDirName:".",slug:"/clipboard",permalink:"/docs/0.71/clipboard",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/clipboard.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"clipboard",title:"\ud83d\udea7 Clipboard"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>getString()</code>",id:"getstring",level:3},{value:"<code>setString()</code>",id:"setstring",level:3}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",hr:"hr",h2:"h2",div:"div",h1:"h1",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Removed."})," Use one of the ",(0,r.jsx)(t.a,{href:"https://reactnative.directory/?search=clipboard",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Clipboard"})," gives you an interface for setting and getting content from Clipboard on both Android and iOS"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"Clipboard API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20SafeAreaView%2C%5Cn%20%20View%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20Clipboard%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BcopiedText%2C%20setCopiedText%5D%20%3D%20useState('')%3B%5Cn%5Cn%20%20const%20copyToClipboard%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Clipboard.setString('hello%20world')%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20fetchCopiedText%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20text%20%3D%20await%20Clipboard.getString()%3B%5Cn%20%20%20%20setCopiedText(text)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20copyToClipboard()%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EClick%20here%20to%20copy%20to%20Clipboard%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20fetchCopiedText()%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EView%20copied%20text%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.copiedText%7D%3E%7BcopiedText%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20copiedText%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2010%2C%5Cn%20%20%20%20color%3A%20'red'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"getstring",children:(0,r.jsx)(t.code,{children:"getString()"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"static getString()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Get content of string type, this method returns a ",(0,r.jsx)(t.code,{children:"Promise"}),", so you can use following code to get clipboard content"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"async _getContent() {\n  var content = await Clipboard.getString();\n}\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"setstring",children:(0,r.jsx)(t.code,{children:"setString()"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"static setString(content)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Set content of string type. You can use following code to set clipboard content"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"_setContent() {\n  Clipboard.setString('hello world');\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"content"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"The content to be stored in the clipboard"})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Notice"})}),"\n",(0,r.jsxs)(t.p,{children:["Be careful when you're trying to copy to clipboard any data except ",(0,r.jsx)(t.code,{children:"string"})," and ",(0,r.jsx)(t.code,{children:"number"}),", some data need additional stringification. For example, if you will try to copy array - Android will raise an exception, but iOS will not."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var r=n(27378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(27378);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);