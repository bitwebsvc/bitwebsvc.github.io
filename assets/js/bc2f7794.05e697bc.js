/*! For license information please see bc2f7794.05e697bc.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[620],{24975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(24246),r=t(71670);const o={id:"keyboardavoidingview",title:"KeyboardAvoidingView"},d=void 0,s={id:"keyboardavoidingview",title:"KeyboardAvoidingView",description:"This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.",source:"@site/versioned_docs/version-0.70/keyboardavoidingview.md",sourceDirName:".",slug:"/keyboardavoidingview",permalink:"/docs/0.70/keyboardavoidingview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/keyboardavoidingview.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"keyboardavoidingview",title:"KeyboardAvoidingView"},sidebar:"components",previous:{title:"ImageBackground",permalink:"/docs/0.70/imagebackground"},next:{title:"Modal",permalink:"/docs/0.70/modal"}},a={},l=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>behavior</code>",id:"behavior",level:3},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>keyboardVerticalOffset</code>",id:"keyboardverticaloffset",level:3}];function c(e){const n=Object.assign({p:"p",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",a:"a",code:"code",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"KeyboardAvoidingView","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%2C%20KeyboardAvoidingView%2C%20TextInput%2C%20StyleSheet%2C%20Text%2C%20Platform%2C%20TouchableWithoutFeedback%2C%20Button%2C%20Keyboard%20%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20KeyboardAvoidingComponent%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CKeyboardAvoidingView%5Cn%20%20%20%20%20%20behavior%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22ios%5C%22%20%3F%20%5C%22padding%5C%22%20%3A%20%5C%22height%5C%22%7D%5Cn%20%20%20%20%20%20style%3D%7Bstyles.container%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7BKeyboard.dismiss%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.inner%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EHeader%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CTextInput%20placeholder%3D%5C%22Username%5C%22%20style%3D%7Bstyles.textInput%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.btnContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Submit%5C%22%20onPress%3D%7B()%20%3D%3E%20null%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%5Cn%20%20%20%20%3C%2FKeyboardAvoidingView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20inner%3A%20%7B%5Cn%20%20%20%20padding%3A%2024%2C%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2036%2C%5Cn%20%20%20%20marginBottom%3A%2048%5Cn%20%20%7D%2C%5Cn%20%20textInput%3A%20%7B%5Cn%20%20%20%20height%3A%2040%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%23000000%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%201%2C%5Cn%20%20%20%20marginBottom%3A%2036%5Cn%20%20%7D%2C%5Cn%20%20btnContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20marginTop%3A%2012%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20KeyboardAvoidingComponent%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(n.h3,{id:"view-props",children:(0,i.jsx)(n.a,{href:"/docs/0.70/view#props",children:"View Props"})}),"\n",(0,i.jsxs)(n.p,{children:["Inherits ",(0,i.jsx)(n.a,{href:"/docs/0.70/view#props",children:"View Props"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"behavior",children:(0,i.jsx)(n.code,{children:"behavior"})}),"\n",(0,i.jsx)(n.p,{children:"Specify how to react to the presence of the keyboard."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Android and iOS both interact with this prop differently. On both iOS and Android, setting ",(0,i.jsx)(n.code,{children:"behavior"})," is recommended."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'height'"}),", ",(0,i.jsx)(n.code,{children:"'position'"}),", ",(0,i.jsx)(n.code,{children:"'padding'"}),")"]})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"contentcontainerstyle",children:(0,i.jsx)(n.code,{children:"contentContainerStyle"})}),"\n",(0,i.jsxs)(n.p,{children:["The style of the content container (View) when behavior is ",(0,i.jsx)(n.code,{children:"'position'"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/0.70/view-style-props",children:"View Style"})})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enabled",children:(0,i.jsx)(n.code,{children:"enabled"})}),"\n",(0,i.jsx)(n.p,{children:"Enabled or disabled KeyboardAvoidingView."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"keyboardverticaloffset",children:(0,i.jsx)(n.code,{children:"keyboardVerticalOffset"})}),"\n",(0,i.jsx)(n.p,{children:"This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0"})})]})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,t)=>{var i=t(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,o={},l=null,c=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,i)&&!a.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:c,props:o,_owner:s.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var i=t(27378);const r=i.createContext({});function o(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||d:o(e),i.createElement(r.Provider,{value:s},n)}}}]);