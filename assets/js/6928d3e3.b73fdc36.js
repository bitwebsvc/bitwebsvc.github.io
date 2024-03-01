/*! For license information please see 6928d3e3.b73fdc36.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[49090],{1001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(24246),a=n(71670);const r={id:"settings",title:"Settings"},c=void 0,i={id:"settings",title:"Settings",description:"Settings serves as a wrapper for NSUserDefaults, a persistent key-value store available only on iOS.",source:"@site/versioned_docs/version-0.73/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/settings.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"settings",title:"Settings"},sidebar:"api",previous:{title:"DynamicColorIOS",permalink:"/docs/dynamiccolorios"}},o={},d=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>clearWatch()</code>",id:"clearwatch",level:3},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>set()</code>",id:"set",level:3},{value:"<code>watchKeys()</code>",id:"watchkeys",level:3}];function l(e){const t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Settings"})," serves as a wrapper for ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/foundation/nsuserdefaults",children:(0,s.jsx)(t.code,{children:"NSUserDefaults"})}),", a persistent key-value store available only on iOS."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"Settings Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BButton%2C%20Settings%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(()%20%3D%3E%20Settings.get('data'))%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EStored%20value%3A%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bdata%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20Settings.set(%7Bdata%3A%20'React'%7D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setData(Settings.get('data'))%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Store%20'React'%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20Settings.set(%7Bdata%3A%20'Native'%7D)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setData(Settings.get('data'))%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Store%20'Native'%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20value%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%20%20marginVertical%3A%2012%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"clearwatch",children:(0,s.jsx)(t.code,{children:"clearWatch()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static clearWatch(watchId: number);\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"watchId"})," is the number returned by ",(0,s.jsx)(t.code,{children:"watchKeys()"})," when the subscription was originally configured."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"get",children:(0,s.jsx)(t.code,{children:"get()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static get(key: string): any;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Get the current value for a given ",(0,s.jsx)(t.code,{children:"key"})," in ",(0,s.jsx)(t.code,{children:"NSUserDefaults"}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"set",children:(0,s.jsx)(t.code,{children:"set()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static set(settings: Record<string, any>);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Set one or more values in ",(0,s.jsx)(t.code,{children:"NSUserDefaults"}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"watchkeys",children:(0,s.jsx)(t.code,{children:"watchKeys()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static watchKeys(keys: string | array<string>, callback: () => void): number;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Subscribe to be notified when the value for any of the keys specified by the ",(0,s.jsx)(t.code,{children:"keys"})," parameter has been changed in ",(0,s.jsx)(t.code,{children:"NSUserDefaults"}),". Returns a ",(0,s.jsx)(t.code,{children:"watchId"})," number that may be used with ",(0,s.jsx)(t.code,{children:"clearWatch()"})," to unsubscribe."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," ",(0,s.jsx)(t.code,{children:"watchKeys()"})," by design ignores internal ",(0,s.jsx)(t.code,{children:"set()"})," calls and fires callback only on changes preformed outside of React Native code."]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var s=n(27378),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,r={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,s)&&!o.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:d,ref:l,props:r,_owner:i.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>r});var s=n(27378);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),s.createElement(a.Provider,{value:i},t)}}}]);