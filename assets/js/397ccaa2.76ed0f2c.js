/*! For license information please see 397ccaa2.76ed0f2c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[31483],{41482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(24246),r=a(71670),l=a(48375),i=a(86386),s=a(11674);const o={id:"activityindicator",title:"ActivityIndicator"},c=void 0,d={id:"activityindicator",title:"ActivityIndicator",description:"Displays a circular loading indicator.",source:"@site/versioned_docs/version-0.71/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/0.71/activityindicator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/activityindicator.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"activityindicator",title:"ActivityIndicator"},sidebar:"components",previous:{title:"Core Components and APIs",permalink:"/docs/0.71/components-and-apis"},next:{title:"Button",permalink:"/docs/0.71/button"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",level:3},{value:"<code>size</code>",id:"size",level:3}];function h(e){const t=Object.assign({p:"p",h2:"h2",div:"div",h1:"h1",h3:"h3",a:"a",hr:"hr",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Displays a circular loading indicator."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(l.Z,{groupId:"syntax",queryString:!0,defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,children:[(0,n.jsx)(i.Z,{value:"functional",children:(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"ActivityIndicator Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20StyleSheet%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,n.jsx)(i.Z,{value:"classical",children:(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"ActivityIndicator Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20StyleSheet%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,n.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(t.h3,{id:"view-props",children:(0,n.jsx)(t.a,{href:"view#props",children:"View Props"})}),"\n",(0,n.jsxs)(t.p,{children:["Inherits ",(0,n.jsx)(t.a,{href:"view#props",children:"View Props"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"animating",children:(0,n.jsx)(t.code,{children:"animating"})}),"\n",(0,n.jsxs)(t.p,{children:["Whether to show the indicator (",(0,n.jsx)(t.code,{children:"true"}),") or hide it (",(0,n.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"color",children:(0,n.jsx)(t.code,{children:"color"})}),"\n",(0,n.jsx)(t.p,{children:"The foreground color of the spinner."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"colors",children:"color"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"null"})," (system accent default color)",(0,n.jsx)("div",{class:"label android",children:"Android"}),(0,n.jsx)("hr",{}),(0,n.jsx)("ins",{style:{background:"#999"},className:"color-box"}),(0,n.jsx)(t.code,{children:"'#999999'"})," ",(0,n.jsx)("div",{className:"label ios",children:"iOS"})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.h3,{id:"hideswhenstopped-ios",children:[(0,n.jsx)(t.code,{children:"hidesWhenStopped"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,n.jsx)(t.p,{children:"Whether the indicator should hide when not animating."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"size",children:(0,n.jsx)(t.code,{children:"size"})}),"\n",(0,n.jsx)(t.p,{children:"Size of the indicator."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["enum(",(0,n.jsx)(t.code,{children:"'small'"}),", ",(0,n.jsx)(t.code,{children:"'large'"}),")",(0,n.jsx)("hr",{}),"number ",(0,n.jsx)("div",{class:"label android",children:"Android"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"'small'"})})]})})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const l={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&d(e,a,t[a]);return e};function p({children:e,hidden:t,className:a}){return n.createElement("div",u({role:"tabpanel",className:(0,r.Z)(l.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>L});var n=a(27378),r=a(38944),l=a(12112),i=a(3620),s=a(69490),o=a(14953),c=a(27886),d=a(7106),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&m(e,a,t[a]);if(f)for(var a of f(t))b.call(t,a)&&m(e,a,t[a]);return e},y=(e,t)=>p(e,h(t));function x(e){var t,a;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function j(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return x(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function w({queryString:e=!1,groupId:t}){const a=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace(y(C({},a.location),{search:t.toString()}))}),[r,a])]}function D(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=j(e),[i,o]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,u]=w({queryString:a,groupId:r}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,d.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:p;return g({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(14185);const A={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,O=Object.defineProperties,S=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&P(e,a,t[a]);if(I)for(var a of I(t))V.call(t,a)&&P(e,a,t[a]);return e},T=(e,t)=>O(e,S(t));function N({className:e,block:t,selectedValue:a,selectValue:i,tabValues:s}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==a&&(c(t),i(r))},u=e=>{var t,a;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=null!=(t=o[a])?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=null!=(a=o[t])?a:o[o.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:l})=>n.createElement("li",T(_({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:d},l),{className:(0,r.Z)("tabs__item",A.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function z({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function F(e){const t=D(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",A.tabList)},n.createElement(N,_(_({},e),t)),n.createElement(z,_(_({},e),t)))}function L(e){const t=(0,k.Z)();return n.createElement(F,_({key:String(t)},e),x(e.children))}},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,a)=>{var n=a(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,l={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!o.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:s.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>s,ah:()=>l});var n=a(27378);const r=n.createContext({});function l(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:a}){let s;return s=a?"function"==typeof e?e({}):e||i:l(e),n.createElement(r.Provider,{value:s},t)}}}]);