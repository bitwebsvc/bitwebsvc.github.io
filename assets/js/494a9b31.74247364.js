/*! For license information please see 494a9b31.74247364.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83511],{27352:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(24246),a=r(71670);function o(e){const t=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["This documentation is still ",(0,n.jsx)(t.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,n.jsxs)(t.p,{children:["Moreover, it contains several ",(0,n.jsx)(t.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const i=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},99553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=r(24246),a=r(71670),o=r(27352),i=r(48375),l=r(86386),s=r(11674);const c={id:"new-architecture-app-intro",title:"Prerequisites for Applications"},u=void 0,d={id:"new-architecture-app-intro",title:"Prerequisites for Applications",description:"There are a few prerequisites that should be addressed before the New Architecture is enabled in your application.",source:"@site/../docs/new-architecture-app-intro.md",sourceDirName:".",slug:"/new-architecture-app-intro",permalink:"/docs/next/new-architecture-app-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/new-architecture-app-intro.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"new-architecture-app-intro",title:"Prerequisites for Applications"},sidebar:"docs",previous:{title:"Enabling in iOS Library",permalink:"/docs/next/new-architecture-library-ios"},next:{title:"React 18 & React Native",permalink:"/docs/next/react-18-and-react-native"}},p={},h=[{value:"Update to the latest React Native version",id:"update-to-the-latest-react-native-version",level:2},{value:"Android - Enable the New Architecture",id:"android---enable-the-new-architecture",level:2},{value:"iOS - Enable the New Architecture",id:"ios---enable-the-new-architecture",level:2},{value:"Running the App",id:"running-the-app",level:2},{value:"Advanced - Pass your component in the interop layer",id:"advanced---pass-your-component-in-the-interop-layer",level:2}];function b(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a",strong:"strong",admonition:"admonition",pre:"pre"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.ZP,{}),"\n",(0,n.jsx)(t.p,{children:"There are a few prerequisites that should be addressed before the New Architecture is enabled in your application."}),"\n",(0,n.jsx)(t.h2,{id:"update-to-the-latest-react-native-version",children:"Update to the latest React Native version"}),"\n",(0,n.jsxs)(t.p,{children:["React Native released the support for the New Architecture with the release ",(0,n.jsx)(t.code,{children:"0.68.0"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This guide is written with the expectation that you\u2019re using the ",(0,n.jsxs)(t.a,{href:"https://github.com/facebook/react-native/releases/latest",children:[(0,n.jsx)(t.strong,{children:"latest"})," React Native release"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can find instructions on how to upgrade in the page ",(0,n.jsx)(t.a,{href:"/docs/upgrading",children:"upgrading to new versions"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Remember to re-install the dependencies after upgrading (run ",(0,n.jsx)(t.code,{children:"npm install"})," or ",(0,n.jsx)(t.code,{children:"yarn"}),")."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Whenever you have to rename some files in the ",(0,n.jsx)(t.code,{children:"ios"})," folder, please ",(0,n.jsx)(t.strong,{children:"use Xcode to rename them"}),". This ensure that the file references are updated in the Xcode project as well. You might need to clean the build folder (",(0,n.jsx)(t.strong,{children:"Project"})," \u2192 ",(0,n.jsx)(t.strong,{children:"Clean Build Folder"})," or ",(0,n.jsx)("kbd",{children:"Cmd \u2318"})," + ",(0,n.jsx)("kbd",{children:"Shift \u21ea"})," + ",(0,n.jsx)("kbd",{children:"K"}),") before re-building the app. If the file is renamed outside of Xcode, you may need to click on the old ",(0,n.jsx)(t.code,{children:".m"})," file reference and Locate the new file."]})}),"\n",(0,n.jsx)(t.h2,{id:"android---enable-the-new-architecture",children:"Android - Enable the New Architecture"}),"\n",(0,n.jsxs)(t.p,{children:["If you successfully updated your project to the latest version of React Native, you ",(0,n.jsx)(t.strong,{children:"already meet"})," all the prerequisites to use the New Architecture on Android."]}),"\n",(0,n.jsxs)(t.p,{children:["You will only need to update your ",(0,n.jsx)(t.code,{children:"android/gradle.properties"})," file as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"# Use this property to enable support to the new architecture.\n# This will allow you to use TurboModules and the Fabric render in\n# your application. You should enable this flag either if you want\n# to write custom TurboModules/Fabric components OR use libraries that\n# are providing them.\n-newArchEnabled=false\n+newArchEnabled=true\n"})}),"\n",(0,n.jsx)(t.h2,{id:"ios---enable-the-new-architecture",children:"iOS - Enable the New Architecture"}),"\n",(0,n.jsxs)(t.p,{children:["If you successfully updated your project to the latest version of React Native, you ",(0,n.jsx)(t.strong,{children:"already meet"})," all the prerequisites to use the New Architecture on iOS."]}),"\n",(0,n.jsxs)(t.p,{children:["You will only need to reinstall your pods by running ",(0,n.jsx)(t.code,{children:"pod install"})," with the right flag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# Run pod install with the flag:\nRCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n"})}),"\n",(0,n.jsx)(t.h2,{id:"running-the-app",children:"Running the App"}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s now time to run your app to verify that everything works correctly:"}),"\n",(0,n.jsxs)(i.Z,{groupId:"run-app",queryString:!0,defaultValue:s.Z.defaultPackageManager,values:s.Z.packageManagers,children:[(0,n.jsx)(l.Z,{value:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# To run android\nyarn android\n\n# To run iOS\nyarn ios\n"})})}),(0,n.jsx)(l.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# To run android\nnpm run android\n\n# To run iOS\nnpm run ios\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"In your Metro terminal log, you will now see the following log to confirm that Fabric is running correctly:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'BUNDLE ./App.tsx\nLOG Running "App" with {"fabric":true,"initialProps":{"concurrentRoot": "true"},"rootTag":1}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"advanced---pass-your-component-in-the-interop-layer",children:"Advanced - Pass your component in the interop layer"}),"\n",(0,n.jsx)(t.p,{children:"If you followed the previous steps but your app uses some custom Native Components that have not been migrated to the New Architecture completely, you are going to see some reddish/pinkish boxes saying that the component is not compatible with Fabric. This is happening because custom Native Components written for the legacy architecture can't run as-is in the New Architecture."}),"\n",(0,n.jsxs)(t.p,{children:["Starting from ",(0,n.jsxs)(t.strong,{children:["React Native ",(0,n.jsx)(t.code,{children:"0.72.0"})]}),", we worked on an interoperability layer to let you use legacy components in the New Architecture without having to wait for them to be migrated."]}),"\n",(0,n.jsxs)(t.p,{children:["You can read more about the interoperability layer and how to use it ",(0,n.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/135",children:"here"}),". Follow this guide to register your components and then rerun your app with the commands:"]}),"\n",(0,n.jsxs)(i.Z,{groupId:"run-app",queryString:!0,defaultValue:s.Z.defaultPackageManager,values:s.Z.packageManagers,children:[(0,n.jsx)(l.Z,{value:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# To run android\nyarn android\n\n# To run iOS\nyarn ios\n"})})}),(0,n.jsx)(l.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# To run android\nnpm run android\n\n# To run iOS\nnpm run ios\n"})})})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(b,e)})):b(e)}},86386:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(27378),a=r(38944);const o={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};function p({children:e,hidden:t,className:r}){return n.createElement("div",d({role:"tabpanel",className:(0,a.Z)(o.tabItem,r)},{hidden:t}),e)}},48375:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(27378),a=r(38944),o=r(12112),i=r(3620),l=r(69490),s=r(14953),c=r(27886),u=r(7106),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&v(e,r,t[r]);if(b)for(var r of b(t))g.call(t,r)&&v(e,r,t[r]);return e},y=(e,t)=>p(e,h(t));function w(e){var t,r;return null!=(r=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?r:[]}function j(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const r=(0,i.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(y(m({},r.location),{search:t.toString()}))}),[a,r])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=j(e),[i,s]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(r=t.find((e=>e.default)))?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=O({queryString:r,groupId:a}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,u.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),b=(()=>{const e=null!=c?c:p;return x({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var N=r(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,A=Object.defineProperties,T=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&R(e,r,t[r]);if(P)for(var r of P(t))_.call(t,r)&&R(e,r,t[r]);return e},C=(e,t)=>A(e,T(t));function V({className:e,block:t,selectedValue:r,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=null!=(t=s[r])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(r=s[t])?r:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>n.createElement("li",C(Z({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},o),{className:(0,a.Z)("tabs__item",E.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function q({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function L(e){const t=k(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",E.tabList)},n.createElement(V,Z(Z({},e),t)),n.createElement(q,Z(Z({},e),t)))}function D(e){const t=(0,N.Z)();return n.createElement(L,Z({key:String(t)},e),w(e.children))}},11674:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(63445);const a=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:a?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,r)=>{var n=r(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>l,ah:()=>o});var n=r(27378);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:o(e),n.createElement(a.Provider,{value:l},t)}}}]);