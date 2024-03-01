/*! For license information please see 2a144c3d.24b6d842.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[47047],{78301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(24246),s=t(71670);const a={id:"height-and-width",title:"Height and Width"},o=void 0,d={id:"height-and-width",title:"Height and Width",description:"A component's height and width determine its size on the screen.",source:"@site/versioned_docs/version-0.72/height-and-width.md",sourceDirName:".",slug:"/height-and-width",permalink:"/docs/0.72/height-and-width",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/height-and-width.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"height-and-width",title:"Height and Width"},sidebar:"docs",previous:{title:"Style",permalink:"/docs/0.72/style"},next:{title:"Layout with Flexbox",permalink:"/docs/0.72/flexbox"}},r={},c=[{value:"Fixed Dimensions",id:"fixed-dimensions",level:2},{value:"Flex Dimensions",id:"flex-dimensions",level:2},{value:"Percentage Dimensions",id:"percentage-dimensions",level:2}];function l(e){const n=Object.assign({p:"p",h2:"h2",code:"code",div:"div",admonition:"admonition",a:"a",em:"em",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A component's height and width determine its size on the screen."}),"\n",(0,i.jsx)(n.h2,{id:"fixed-dimensions",children:"Fixed Dimensions"}),"\n",(0,i.jsxs)(n.p,{children:["The general way to set the dimensions of a component is by adding a fixed ",(0,i.jsx)(n.code,{children:"width"})," and ",(0,i.jsx)(n.code,{children:"height"})," to style. All dimensions in React Native are unitless, and represent density-independent pixels."]}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Height and Width","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FixedDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'powderblue'%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'skyblue'%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20150%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'steelblue'%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FixedDimensionsBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.p,{children:"Setting dimensions this way is common for components whose size should always be fixed to a number of points and not calculated based on screen size."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"There is no universal mapping from points to physical units of measurement. This means that a component with fixed dimensions might not have the same physical size, across different devices and screen sizes. However, this difference is unnoticeable for most use cases."})}),"\n",(0,i.jsx)(n.h2,{id:"flex-dimensions",children:"Flex Dimensions"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"flex"})," in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use ",(0,i.jsx)(n.code,{children:"flex: 1"}),", which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the ",(0,i.jsx)(n.code,{children:"flex"})," given, the higher the ratio of space a component will take compared to its siblings."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["A component can only expand to fill available space if its parent has dimensions greater than ",(0,i.jsx)(n.code,{children:"0"}),". If a parent does not have either a fixed ",(0,i.jsx)(n.code,{children:"width"})," and ",(0,i.jsx)(n.code,{children:"height"})," or ",(0,i.jsx)(n.code,{children:"flex"}),", the parent will have dimensions of ",(0,i.jsx)(n.code,{children:"0"})," and the ",(0,i.jsx)(n.code,{children:"flex"})," children will not be visible."]})}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Flex Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FlexDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%2F%2F%20Try%20removing%20the%20%60flex%3A%201%60%20on%20the%20parent%20View.%5Cn%20%20%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%5Cn%20%20%20%20%2F%2F%20What%20if%20you%20add%20%60height%3A%20300%60%20instead%20of%20%60flex%3A%201%60%3F%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%202%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%203%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FlexDimensionsBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsxs)(n.p,{children:["After you can control a component's size, the next step is to ",(0,i.jsx)(n.a,{href:"/docs/0.72/flexbox",children:"learn how to lay it out on the screen"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"percentage-dimensions",children:"Percentage Dimensions"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to fill a certain portion of the screen, but you ",(0,i.jsx)(n.em,{children:"don't"})," want to use the ",(0,i.jsx)(n.code,{children:"flex"})," layout, you ",(0,i.jsx)(n.em,{children:"can"})," use ",(0,i.jsx)(n.strong,{children:"percentage values"})," in the component's style. Similar to flex dimensions, percentage dimensions require parent with a defined size."]}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Percentage Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20PercentageDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%2F%2F%20Try%20removing%20the%20%60height%3A%20'100%25'%60%20on%20the%20parent%20View.%5Cn%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bheight%3A%20'100%25'%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20'15%25'%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'powderblue'%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20'66%25'%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20'35%25'%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'skyblue'%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20'33%25'%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20'50%25'%2C%5Cn%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'steelblue'%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20PercentageDimensionsBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},71426:(e,n,t)=>{var i=t(27378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,a={},c=null,l=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,i)&&!r.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===a[i]&&(a[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:l,props:a,_owner:d.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>a});var i=t(27378);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||o:a(e),i.createElement(s.Provider,{value:d},n)}}}]);