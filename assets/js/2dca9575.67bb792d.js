/*! For license information please see 2dca9575.67bb792d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[14567],{8701:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=n(24246),a=n(71670);const o={id:"shadow-props",title:"Shadow Props"},d=void 0,r={id:"shadow-props",title:"Shadow Props",description:"Props",source:"@site/versioned_docs/version-0.70/shadow-props.md",sourceDirName:".",slug:"/shadow-props",permalink:"/docs/0.70/shadow-props",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/shadow-props.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"shadow-props",title:"Shadow Props"},sidebar:"components",previous:{title:"Layout Props",permalink:"/docs/0.70/layout-props"},next:{title:"Text Style Props",permalink:"/docs/0.70/text-style-props"}},i={},l=[{value:"Props",id:"props",level:2},{value:"<code>shadowColor</code>",id:"shadowcolor",level:3},{value:'<code>shadowOffset</code> <div class="label ios">iOS</div>',id:"shadowoffset-ios",level:3},{value:'<code>shadowOpacity</code> <div class="label ios">iOS</div>',id:"shadowopacity-ios",level:3},{value:'<code>shadowRadius</code> <div class="label ios">iOS</div>',id:"shadowradius-ios",level:3}];function h(e){const s=Object.assign({div:"div",h1:"h1",h2:"h2",h3:"h3",code:"code",p:"p",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.div,{class:"snack-player","data-snack-name":"Shadow Props","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnimport%20Slider%20from%20'%40react-native-community%2Fslider'%3B%5Cn%5Cnconst%20ShadowPropSlider%20%3D%20(%7B%20label%2C%20value%2C%20...props%20%7D)%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%7Blabel%7D%20(%7Bvalue.toFixed(2)%7D)%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CSlider%20step%3D%7B1%7D%20value%3D%7Bvalue%7D%20%7B...props%7D%20%2F%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BshadowOffsetWidth%2C%20setShadowOffsetWidth%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BshadowOffsetHeight%2C%20setShadowOffsetHeight%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BshadowRadius%2C%20setShadowRadius%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BshadowOpacity%2C%20setShadowOpacity%5D%20%3D%20useState(0.1)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.square%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20shadowOffset%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20shadowOffsetWidth%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20-shadowOffsetHeight%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20shadowOpacity%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20shadowRadius%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.controls%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowOffset%20-%20X%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetWidth%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetWidth(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowOffset%20-%20Y%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetHeight%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetHeight(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowRadius%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B100%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowRadius%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowRadius(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowOpacity%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%20%20step%3D%7B0.05%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOpacity%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOpacity(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20square%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20shadowColor%3A%20%5C%22black%5C%22%2C%5Cn%20%20%20%20width%3A%20150%5Cn%20%20%7D%2C%5Cn%20%20controls%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%2012%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"@react-native-community/slider","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,t.jsx)(s.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(s.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(s.h3,{id:"shadowcolor",children:(0,t.jsx)(s.code,{children:"shadowColor"})}),"\n",(0,t.jsx)(s.p,{children:"Sets the drop shadow color."}),"\n",(0,t.jsxs)(s.p,{children:["This property will only work on Android API 28 and above. For similar functionality on lower Android APIs, use the ",(0,t.jsxs)(s.a,{href:"view-style-props#elevation",children:[(0,t.jsx)(s.code,{children:"elevation"})," property"]}),"."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"Type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/0.70/colors",children:"color"})})})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h3,{id:"shadowoffset-ios",children:[(0,t.jsx)(s.code,{children:"shadowOffset"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(s.p,{children:"Sets the drop shadow offset."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"Type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:["object: ",(0,t.jsx)(s.code,{children:"{width: number,height: number}"})]})})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h3,{id:"shadowopacity-ios",children:[(0,t.jsx)(s.code,{children:"shadowOpacity"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(s.p,{children:"Sets the drop shadow opacity (multiplied by the color's alpha component)."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"Type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.td,{children:"number"})})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h3,{id:"shadowradius-ios",children:[(0,t.jsx)(s.code,{children:"shadowRadius"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(s.p,{children:"Sets the drop shadow blur radius."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"Type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.td,{children:"number"})})})]})]})}const c=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},71426:(e,s,n)=>{var t=n(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,o={},l=null,h=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(h=s.ref),s)d.call(s,t)&&!i.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:a,type:e,key:l,ref:h,props:o,_owner:r.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},24246:(e,s,n)=>{e.exports=n(71426)},71670:(e,s,n)=>{n.d(s,{Zo:()=>r,ah:()=>o});var t=n(27378);const a=t.createContext({});function o(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function r({components:e,children:s,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||d:o(e),t.createElement(a.Provider,{value:r},s)}}}]);