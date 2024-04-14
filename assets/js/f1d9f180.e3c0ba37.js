/*! For license information please see f1d9f180.e3c0ba37.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68399],{24690:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var i=s(24246),t=s(71670);const d={id:"dimensions",title:"Dimensions"},r=void 0,c={id:"dimensions",title:"Dimensions",description:"useWindowDimensions is the preferred API for React components. Unlike Dimensions, it updates as the window's dimensions update. This works nicely with the React paradigm.",source:"@site/versioned_docs/version-0.73/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/dimensions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/dimensions.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"dimensions",title:"Dimensions"},sidebar:"api",previous:{title:"DevSettings",permalink:"/docs/devsettings"},next:{title:"Easing",permalink:"/docs/easing"}},o={},a=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>get()</code>",id:"get",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:"DimensionsValue",id:"dimensionsvalue",level:3},{value:"ScaledSize",id:"scaledsize",level:3}];function l(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",div:"div",h1:"h1",h3:"h3",ul:"ul",li:"li",hr:"hr",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"usewindowdimensions",children:(0,i.jsx)(n.code,{children:"useWindowDimensions"})})," is the preferred API for React components. Unlike ",(0,i.jsx)(n.code,{children:"Dimensions"}),", it updates as the window's dimensions update. This works nicely with the React paradigm."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {Dimensions} from 'react-native';\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can get the application window's width and height using the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ",(0,i.jsx)(n.code,{children:"StyleSheet"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20Text%2C%20Dimensions%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20windowDimensions%20%3D%20Dimensions.get('window')%3B%5Cnconst%20screenDimensions%20%3D%20Dimensions.get('screen')%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%5Cn%20%20%20%20window%3A%20windowDimensions%2C%5Cn%20%20%20%20screen%3A%20screenDimensions%2C%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20subscription%20%3D%20Dimensions.addEventListener(%5Cn%20%20%20%20%20%20'change'%2C%5Cn%20%20%20%20%20%20(%7Bwindow%2C%20screen%7D)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setDimensions(%7Bwindow%2C%20screen%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20subscription%3F.remove()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EWindow%20Dimensions%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BObject.entries(dimensions.window).map((%5Bkey%2C%20value%5D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%7D%20-%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EScreen%20Dimensions%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BObject.entries(dimensions.screen).map((%5Bkey%2C%20value%5D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%7D%20-%20%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20))%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%20%20marginVertical%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"addeventlistener",children:(0,i.jsx)(n.code,{children:"addEventListener()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"static addEventListener(\n  type: 'change',\n  handler: ({\n    window,\n    screen,\n  }: DimensionsValue) => void,\n): EmitterSubscription;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add an event handler. Supported events:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"change"}),": Fires when a property within the ",(0,i.jsx)(n.code,{children:"Dimensions"})," object changes. The argument to the event handler is a ",(0,i.jsx)(n.a,{href:"#dimensionsvalue",children:(0,i.jsx)(n.code,{children:"DimensionsValue"})})," type object."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get",children:(0,i.jsx)(n.code,{children:"get()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"static get(dim: 'window' | 'screen'): ScaledSize;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Initial dimensions are set before ",(0,i.jsx)(n.code,{children:"runApplication"})," is called so they should be available before any other require's are run, but may be updated later."]}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"const {height, width} = Dimensions.get('window');"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["dim ",(0,i.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsxs)(n.td,{children:["Name of dimension as defined when calling ",(0,i.jsx)(n.code,{children:"set"}),". Returns value for the dimension."]})]})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For Android the ",(0,i.jsx)(n.code,{children:"window"})," dimension will exclude the size used by the ",(0,i.jsx)(n.code,{children:"status bar"})," (if not translucent) and ",(0,i.jsx)(n.code,{children:"bottom navigation bar"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,i.jsx)(n.h3,{id:"dimensionsvalue",children:"DimensionsValue"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Properties:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"window"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"dimensions#scaledsize",children:"ScaledSize"})}),(0,i.jsx)(n.td,{children:"Size of the visible Application window."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"screen"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"dimensions#scaledsize",children:"ScaledSize"})}),(0,i.jsx)(n.td,{children:"Size of the device's screen."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"scaledsize",children:"ScaledSize"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"object"})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Properties:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:"number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:"number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scale"}),(0,i.jsx)(n.td,{children:"number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fontScale"}),(0,i.jsx)(n.td,{children:"number"})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},71426:(e,n,s)=>{var i=s(27378),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,d={},a=null,l=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,i)&&!o.hasOwnProperty(i)&&(d[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===d[i]&&(d[i]=n[i]);return{$$typeof:t,type:e,key:a,ref:l,props:d,_owner:c.current}}n.Fragment=d,n.jsx=a,n.jsxs=a},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>d});var i=s(27378);const t=i.createContext({});function d(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:d(e),i.createElement(t.Provider,{value:c},n)}}}]);