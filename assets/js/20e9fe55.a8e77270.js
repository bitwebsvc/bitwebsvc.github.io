/*! For license information please see 20e9fe55.a8e77270.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50901],{73856:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=a(24246),n=a(71670),l=a(48375),s=a(86386),o=a(11674);const i={id:"appearance",title:"Appearance"},c=void 0,u={id:"appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.72/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.72/appearance",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/appearance.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.72/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.72/appregistry"}},d={},h=[{value:"Developer notes",id:"developer-notes",level:4},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>getColorScheme()</code>",id:"getcolorscheme",level:3},{value:"<code>setColorScheme()</code>",id:"setcolorscheme",level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",level:3}];function p(e){const r=Object.assign({pre:"pre",code:"code",p:"p",h4:"h4",blockquote:"blockquote",a:"a",h2:"h2",hr:"hr",h1:"h1",h3:"h3",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import {Appearance} from 'react-native';\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"Appearance"})," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."]}),"\n",(0,t.jsx)(r.h4,{id:"developer-notes",children:"Developer notes"}),"\n",(0,t.jsxs)(l.Z,{groupId:"guide",queryString:!0,defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),children:[(0,t.jsx)(s.Z,{value:"web",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"Appearance"})," API is inspired by the ",(0,t.jsx)(r.a,{href:"https://drafts.csswg.org/mediaqueries-5/",children:"Media Queries draft"})," from the W3C. The color scheme preference is modeled after the ",(0,t.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",children:[(0,t.jsx)(r.code,{children:"prefers-color-scheme"})," CSS media feature"]}),"."]}),"\n"]})}),(0,t.jsx)(s.Z,{value:"android",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The color scheme preference will map to the user's Light or ",(0,t.jsx)(r.a,{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme",children:"Dark theme"})," preference on Android 10 (API level 29) devices and higher."]}),"\n"]})}),(0,t.jsx)(s.Z,{value:"ios",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The color scheme preference will map to the user's Light or ",(0,t.jsx)(r.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/",children:"Dark Mode"})," preference on iOS 13 devices and higher."]}),"\n"]})})]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["You can use the ",(0,t.jsx)(r.code,{children:"Appearance"})," module to determine if the user prefers a dark color scheme:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,t.jsx)(r.a,{href:"usecolorscheme",children:(0,t.jsx)(r.code,{children:"useColorScheme"})})," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,t.jsx)(r.code,{children:"StyleSheet"}),"."]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(r.h3,{id:"getcolorscheme",children:(0,t.jsx)(r.code,{children:"getColorScheme()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"static getColorScheme(): 'light' | 'dark' | null;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings or application-level selected user interface style via ",(0,t.jsx)(r.code,{children:"setColorScheme"}),") or on a schedule (e.g. light and dark themes that follow the day/night cycle)."]}),"\n",(0,t.jsx)(r.p,{children:"Supported color schemes:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"light"}),": The user prefers a light color theme."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"dark"}),": The user prefers a dark color theme."]}),"\n",(0,t.jsx)(r.li,{children:"null: The user has not indicated a preferred color theme."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["See also: ",(0,t.jsx)(r.code,{children:"useColorScheme"})," hook."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Note: ",(0,t.jsx)(r.code,{children:"getColorScheme()"})," will always return ",(0,t.jsx)(r.code,{children:"light"})," when debugging with Chrome."]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"setcolorscheme",children:(0,t.jsx)(r.code,{children:"setColorScheme()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"static setColorScheme('light' | 'dark' | null): void;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Force the application to always adopt a light or dark interface style. The default value is ",(0,t.jsx)(r.code,{children:"null"})," which causes the application to inherit the system's interface style. If you assign a different value, the new style applies to the application and all native elements within the application (Alerts, Pickers etc)."]}),"\n",(0,t.jsx)(r.p,{children:"Supported color schemes:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"light"}),": Apply light user interface style."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"dark"}),": Apply dark user interface style."]}),"\n",(0,t.jsx)(r.li,{children:"null: Follow the system's interface style."}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Note: The change will not affect the system's selected interface style or any style set in other applications."}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"addchangelistener",children:(0,t.jsx)(r.code,{children:"addChangeListener()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"static addChangeListener(\n  listener: (preferences: {colorScheme: 'light' | 'dark' | null}) => void,\n): NativeEventSubscription;\n"})}),"\n",(0,t.jsx)(r.p,{children:"Add an event handler that is fired when appearance preferences change."})]})}const m=function(e={}){const{wrapper:r}=Object.assign({},(0,n.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},86386:(e,r,a)=>{a.d(r,{Z:()=>h});var t=a(27378),n=a(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,a)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,d=(e,r)=>{for(var a in r||(r={}))i.call(r,a)&&u(e,a,r[a]);if(o)for(var a of o(r))c.call(r,a)&&u(e,a,r[a]);return e};function h({children:e,hidden:r,className:a}){return t.createElement("div",d({role:"tabpanel",className:(0,n.Z)(l.tabItem,a)},{hidden:r}),e)}},48375:(e,r,a)=>{a.d(r,{Z:()=>M});var t=a(27378),n=a(38944),l=a(12112),s=a(3620),o=a(69490),i=a(14953),c=a(27886),u=a(7106),d=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,r,a)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,g=(e,r)=>{for(var a in r||(r={}))f.call(r,a)&&v(e,a,r[a]);if(m)for(var a of m(r))b.call(r,a)&&v(e,a,r[a]);return e},x=(e,r)=>h(e,p(r));function y(e){var r,a;return null!=(a=null==(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))?a:[]}function j(e){const{values:r,children:a}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return y(e).map((({props:{value:e,label:r,attributes:a,default:t}})=>({value:e,label:r,attributes:a,default:t})))}(a);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function w({value:e,tabValues:r}){return r.some((r=>r.value===e))}function k({queryString:e=!1,groupId:r}){const a=(0,s.k6)(),n=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,i._X)(n),(0,t.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace(x(g({},a.location),{search:r.toString()}))}),[n,a])]}function S(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,l=j(e),[s,i]=(0,t.useState)((()=>function({defaultValue:e,tabValues:r}){var a;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(a=r.find((e=>e.default)))?a:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[c,d]=k({queryString:a,groupId:n}),[h,p]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,n]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:n}),m=(()=>{const e=null!=c?c:h;return w({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,l]),tabValues:l}}var O=a(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var C=Object.defineProperty,T=Object.defineProperties,A=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,P=(e,r,a)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,D=(e,r)=>{for(var a in r||(r={}))_.call(r,a)&&P(e,a,r[a]);if(I)for(var a of I(r))N.call(r,a)&&P(e,a,r[a]);return e},V=(e,r)=>T(e,A(r));function q({className:e,block:r,selectedValue:a,selectValue:s,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),n=o[t].value;n!==a&&(c(r),s(n))},d=e=>{var r,a;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=null!=(a=i[r])?a:i[i.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},e)},o.map((({value:e,label:r,attributes:l})=>t.createElement("li",V(D({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:u},l),{className:(0,n.Z)("tabs__item",E.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===e})}),null!=r?r:e))))}function L({lazy:e,children:r,selectedValue:a}){const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},n.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function Z(e){const r=S(e);return t.createElement("div",{className:(0,n.Z)("tabs-container",E.tabList)},t.createElement(q,D(D({},e),r)),t.createElement(L,D(D({},e),r)))}function M(e){const r=(0,O.Z)();return t.createElement(Z,D({key:String(r)},e),y(e.children))}},11674:(e,r,a)=>{a.d(r,{Z:()=>s});var t=a(63445);const n=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:n?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,r,a)=>{var t=a(27378),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,a){var t,l={},c=null,u=null;for(t in void 0!==a&&(c=""+a),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,t)&&!i.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:o.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},24246:(e,r,a)=>{e.exports=a(71426)},71670:(e,r,a)=>{a.d(r,{Zo:()=>o,ah:()=>l});var t=a(27378);const n=t.createContext({});function l(e){const r=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function o({components:e,children:r,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||s:l(e),t.createElement(n.Provider,{value:o},r)}}}]);