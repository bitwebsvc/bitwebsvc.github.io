/*! For license information please see 7e4d0154.1a8cdaae.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75728],{99800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(24246),r=a(71670),o=a(48375),l=a(86386),s=a(11674);const i={id:"state",title:"State"},u=void 0,c={id:"state",title:"State",description:"There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.",source:"@site/versioned_docs/version-0.73/state.md",sourceDirName:".",slug:"/state",permalink:"/docs/state",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/state.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"state",title:"State"}},d={},p=[];function f(e){const t=Object.assign({p:"p",code:"code",div:"div",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["There are two types of data that control a component: ",(0,n.jsx)(t.code,{children:"props"})," and ",(0,n.jsx)(t.code,{children:"state"}),". ",(0,n.jsx)(t.code,{children:"props"})," are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use ",(0,n.jsx)(t.code,{children:"state"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In general, you should initialize ",(0,n.jsx)(t.code,{children:"state"})," in the constructor, and then call ",(0,n.jsx)(t.code,{children:"setState"})," when you want to change it."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, let's say we want to make text that blinks all the time. The text itself gets set once when the blinking component gets created, so the text itself is a ",(0,n.jsx)(t.code,{children:"prop"}),'. The "whether the text is currently on or off" changes over time, so that should be kept in ',(0,n.jsx)(t.code,{children:"state"}),"."]}),"\n",(0,n.jsxs)(o.Z,{groupId:"language",queryString:!0,defaultValue:s.Z.defaultSnackLanguage,values:s.Z.snackLanguages,children:[(0,n.jsx)(l.Z,{value:"javascript",children:(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"State","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BText%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Blink%20%3D%20props%20%3D%3E%20%7B%5Cn%20%20const%20%5BisShowingText%2C%20setIsShowingText%5D%20%3D%20useState(true)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20toggle%20%3D%20setInterval(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setIsShowingText(!isShowingText)%3B%5Cn%20%20%20%20%7D%2C%201000)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20clearInterval(toggle)%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20if%20(!isShowingText)%20%7B%5Cn%20%20%20%20return%20null%3B%5Cn%20%20%7D%5Cn%5Cn%20%20return%20%3CText%3E%7Bprops.text%7D%3C%2FText%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20BlinkApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22I%20love%20to%20blink%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22Yes%20blinking%20is%20so%20great%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22Why%20did%20they%20ever%20take%20this%20out%20of%20HTML%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22Look%20at%20me%20look%20at%20me%20look%20at%20me%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20BlinkApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,n.jsx)(l.Z,{value:"typescript",children:(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"State","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BText%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cntype%20BlinkProps%20%3D%20%7B%5Cn%20%20text%3A%20string%3B%5Cn%7D%3B%5Cn%5Cnconst%20Blink%20%3D%20(props%3A%20BlinkProps)%20%3D%3E%20%7B%5Cn%20%20const%20%5BisShowingText%2C%20setIsShowingText%5D%20%3D%20useState(true)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20toggle%20%3D%20setInterval(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setIsShowingText(!isShowingText)%3B%5Cn%20%20%20%20%7D%2C%201000)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20clearInterval(toggle)%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20if%20(!isShowingText)%20%7B%5Cn%20%20%20%20return%20null%3B%5Cn%20%20%7D%5Cn%5Cn%20%20return%20%3CText%3E%7Bprops.text%7D%3C%2FText%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20BlinkApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22I%20love%20to%20blink%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22Yes%20blinking%20is%20so%20great%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22Why%20did%20they%20ever%20take%20this%20out%20of%20HTML%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D%5C%22Look%20at%20me%20look%20at%20me%20look%20at%20me%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20BlinkApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,n.jsxs)(t.p,{children:["In a real application, you probably won't be setting state with a timer. You might set state when you have new data from the server, or from user input. You can also use a state container like ",(0,n.jsx)(t.a,{href:"https://redux.js.org/",children:"Redux"})," or ",(0,n.jsx)(t.a,{href:"https://mobx.js.org/",children:"MobX"})," to control your data flow. In that case you would use Redux or MobX to modify your state rather than calling ",(0,n.jsx)(t.code,{children:"setState"})," directly."]}),"\n",(0,n.jsx)(t.p,{children:"When setState is called, BlinkApp will re-render its Component. By calling setState within the Timer, the component will re-render every time the Timer ticks."}),"\n",(0,n.jsxs)(t.p,{children:["State works the same way as it does in React, so for more details on handling state, you can look at the ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/react-component.html#setstate",children:"React.Component API"}),". At this point, you may have noticed that most of our examples use the default text color. To customize the text color, you will have to ",(0,n.jsx)(t.a,{href:"/docs/style",children:"learn about Style"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const o={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))u.call(t,a)&&c(e,a,t[a]);return e};function p({children:e,hidden:t,className:a}){return n.createElement("div",d({role:"tabpanel",className:(0,r.Z)(o.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(27378),r=a(38944),o=a(12112),l=a(3620),s=a(69490),i=a(14953),u=a(27886),c=a(7106),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(h)for(var a of h(t))m.call(t,a)&&v(e,a,t[a]);return e},C=(e,t)=>p(e,f(t));function y(e){var t,a;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function w(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return y(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function x({queryString:e=!1,groupId:t}){const a=(0,l.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace(C(g({},a.location),{search:t.toString()}))}),[r,a])]}function B(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=w(e),[l,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=x({queryString:a,groupId:r}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),h=(()=>{const e=null!=u?u:p;return k({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var D=a(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=Object.defineProperty,S=Object.defineProperties,T=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,V=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&_(e,a,t[a]);if(O)for(var a of O(t))A.call(t,a)&&_(e,a,t[a]);return e},P=(e,t)=>S(e,T(t));function L({className:e,block:t,selectedValue:a,selectValue:l,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==a&&(u(t),l(r))},d=e=>{var t,a;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=null!=(t=i[a])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=null!=(a=i[t])?a:i[i.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:o})=>n.createElement("li",P(V({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:c},o),{className:(0,r.Z)("tabs__item",E.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function F({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=B(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",E.tabList)},n.createElement(L,V(V({},e),t)),n.createElement(F,V(V({},e),t)))}function Z(e){const t=(0,D.Z)();return n.createElement(N,V({key:String(t)},e),y(e.children))}},11674:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,a)=>{var n=a(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,o={},u=null,c=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:u,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>s,ah:()=>o});var n=a(27378);const r=n.createContext({});function o(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function s({components:e,children:t,disableParentContext:a}){let s;return s=a?"function"==typeof e?e({}):e||l:o(e),n.createElement(r.Provider,{value:s},t)}}}]);