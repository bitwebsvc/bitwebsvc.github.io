/*! For license information please see 784fecab.465bc5c3.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[94749],{5434:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=a(24246),s=a(71670),t=a(48375),i=a(86386),l=a(11674);const o={id:"hermes",title:"Using Hermes"},c=void 0,d={id:"hermes",title:"Using Hermes",description:"Hermes is an open-source JavaScript engine optimized for React Native. For many apps, using Hermes will result in improved start-up time, decreased memory usage, and smaller app size when compared to JavaScriptCore.",source:"@site/versioned_docs/version-0.72/hermes.md",sourceDirName:".",slug:"/hermes",permalink:"/docs/0.72/hermes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/hermes.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"hermes",title:"Using Hermes"},sidebar:"docs",previous:{title:"Timers",permalink:"/docs/0.72/timers"},next:{title:"Native Modules Intro",permalink:"/docs/0.72/native-modules-intro"}},u={},h=[{value:"Bundled Hermes",id:"bundled-hermes",level:2},{value:"Confirming Hermes is in use",id:"confirming-hermes-is-in-use",level:2},{value:"Debugging JS on Hermes using Google Chrome&#39;s DevTools",id:"debugging-js-on-hermes-using-google-chromes-devtools",level:2},{value:"Enabling Hermes on Older Versions of React Native",id:"enabling-hermes-on-older-versions-of-react-native",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Switching back to JavaScriptCore",id:"switching-back-to-javascriptcore",level:2},{value:"Android",id:"android-1",level:3},{value:"iOS",id:"ios-1",level:3}];function p(e){const n=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",img:"img",code:"code",pre:"pre",admonition:"admonition",ol:"ol",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:"https://hermesengine.dev",children:(0,r.jsx)("img",{width:300,height:300,className:"hermes-logo",src:"/docs/assets/HermesLogo.svg",style:{height:"auto"}})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://hermesengine.dev",children:"Hermes"})," is an open-source JavaScript engine optimized for React Native. For many apps, using Hermes will result in improved start-up time, decreased memory usage, and smaller app size when compared to JavaScriptCore.\nHermes is used by default by React Native and no additional configuration is required to enable it."]}),"\n",(0,r.jsx)(n.h2,{id:"bundled-hermes",children:"Bundled Hermes"}),"\n",(0,r.jsxs)(n.p,{children:["React Native comes with a ",(0,r.jsx)(n.strong,{children:"bundled version"})," of Hermes.\nWe will be building a version of Hermes for you whenever we release a new version of React Native. This will make sure you're consuming a version of Hermes which is fully compatible with the version of React Native you're using."]}),"\n",(0,r.jsx)(n.p,{children:"Historically, we had problems with matching versions of Hermes with versions of React Native. This fully eliminates this problem, and offers users a JS engine that is compatible with the specific React Native version."}),"\n",(0,r.jsxs)(n.p,{children:["This change is fully transparent to users of React Native. You can still disable Hermes using the command described in this page.\nYou can ",(0,r.jsx)(n.a,{href:"/architecture/bundled-hermes",children:"read more about the technical implementation on this page"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"confirming-hermes-is-in-use",children:"Confirming Hermes is in use"}),"\n",(0,r.jsx)(n.p,{children:"If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Where to find JS engine status in AwesomeProject",src:a(98016).Z+"",width:"405",height:"833"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"HermesInternal"})," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const isHermes = () => !!global.HermesInternal;\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If you are using a non-standard way of loading the JS bundle, it is possible that the ",(0,r.jsx)(n.code,{children:"HermesInternal"})," variable is available but you aren't using the highly optimised pre-compiled bytecode.\nConfirm that you are using the ",(0,r.jsx)(n.code,{children:".hbc"})," file and also benchmark the before/after as detailed below."]})}),"\n",(0,r.jsx)(n.p,{children:"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example; from the root of your project:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"platform",queryString:!0,defaultValue:l.Z.defaultPlatform,values:l.Z.platforms,className:"pill-tabs",children:[(0,r.jsx)(i.Z,{value:"android",children:(0,r.jsxs)(t.Z,{groupId:"package-manager",queryString:!0,defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'npm run android -- --mode="release"\n'})})}),(0,r.jsx)(i.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn android --mode release\n"})})})]})}),(0,r.jsx)(i.Z,{value:"ios",children:(0,r.jsxs)(t.Z,{groupId:"package-manager",queryString:!0,defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'npm run ios -- --mode="Release"\n'})})}),(0,r.jsx)(i.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn ios --mode Release\n"})})})]})})]}),"\n",(0,r.jsx)(n.p,{children:"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."}),"\n",(0,r.jsx)(n.h2,{id:"debugging-js-on-hermes-using-google-chromes-devtools",children:"Debugging JS on Hermes using Google Chrome's DevTools"}),"\n",(0,r.jsx)(n.p,{children:"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:['Note that this is very different with the "Remote JS Debugging" from the In-App Dev Menu documented in the ',(0,r.jsx)(n.a,{href:"debugging#debugging-using-a-custom-javascript-debugger",children:"Debugging"})," section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop)."]})}),"\n",(0,r.jsxs)(n.p,{children:["Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",(0,r.jsx)(n.code,{children:"localhost:8081"}),", but this is ",(0,r.jsx)(n.a,{href:"https://metrobundler.dev/docs/configuration",children:"configurable"}),". When running ",(0,r.jsx)(n.code,{children:"yarn start"})," the address is written to stdout on startup."]}),"\n",(0,r.jsx)(n.p,{children:"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.code,{children:"chrome://inspect"})," in a Chrome browser instance."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"Configure..."})," button to add the Metro server address (typically ",(0,r.jsx)(n.code,{children:"localhost:8081"})," as described above)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Configure button in Chrome DevTools devices page",src:a(96062).Z+"",width:"1114",height:"824"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Dialog for adding Chrome DevTools network targets",src:a(12412).Z+"",width:"618",height:"656"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',(0,r.jsx)(n.img,{alt:"Target inspect link",src:a(33153).Z+"",width:"1114",height:"824"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",(0,r.jsx)(n.img,{alt:"Pause button in debug tools",src:a(99509).Z+"",width:"1280",height:"794"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"enabling-hermes-on-older-versions-of-react-native",children:"Enabling Hermes on Older Versions of React Native"}),"\n",(0,r.jsx)(n.p,{children:"Hermes is the default engine as of React Native 0.70. This section explains how to enable Hermes on older versions of React Native.\nFirst, ensure you're using at least version 0.60.4 of React Native to enable Hermes on Android or 0.64 of React Native to enable Hermes on iOS."}),"\n",(0,r.jsxs)(n.p,{children:["If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",(0,r.jsx)(n.a,{href:"/docs/upgrading",children:"Upgrading to new React Native Versions"})," for how to do this. After upgrading the app, make sure everything works before trying to switch to Hermes."]}),"\n",(0,r.jsx)(n.admonition,{title:"Note for React Native compatibility",type:"caution",children:(0,r.jsxs)(n.p,{children:["Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/hermes/releases",children:"Hermes releases"})," strictly.\nVersion mismatch can result in instant crash of your apps in the worst case scenario."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Note for Windows users",type:"info",children:(0,r.jsxs)(n.p,{children:["Hermes requires ",(0,r.jsx)(n.a,{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145",children:"Microsoft Visual C++ 2015 Redistributable"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,r.jsxs)(n.p,{children:["Edit your ",(0,r.jsx)(n.code,{children:"android/gradle.properties"})," file and make sure ",(0,r.jsx)(n.code,{children:"hermesEnabled"})," is true:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# Use this property to enable or disable the Hermes JS engine.\n# If set to false, you will be using JSC instead.\nhermesEnabled=true\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This property was added in React Native 0.71. If you can't find it in your ",(0,r.jsx)(n.code,{children:"gradle.properties"})," file, please refer to the documentation for the corresponding React Native version you're using."]})}),"\n",(0,r.jsxs)(n.p,{children:["Also, if you're using ProGuard, you will need to add these rules in ",(0,r.jsx)(n.code,{children:"proguard-rules.pro"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, if you've already built your app at least once, clean the build:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ cd android && ./gradlew clean\n"})}),"\n",(0,r.jsx)(n.p,{children:"That's it! You should now be able to develop and deploy your app as usual:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"package-manager",queryString:!0,defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run android\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn android\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,r.jsxs)(n.p,{children:["Since React Native 0.64, Hermes also runs on iOS. To enable Hermes for iOS, edit your ",(0,r.jsx)(n.code,{children:"ios/Podfile"})," file and make the change illustrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"   use_react_native!(\n     :path => config[:reactNativePath],\n     # to enable hermes on iOS, change `false` to `true` and then install pods\n     # By default, Hermes is disabled on Old Architecture, and enabled on New Architecture.\n     # You can enable/disable it manually by replacing `flags[:hermes_enabled]` with `true` or `false`.\n-    :hermes_enabled => flags[:hermes_enabled],\n+    :hermes_enabled => true\n   )\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, you will be using Hermes if you're on the New Architecture. By specifying a value such\nas ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"})," you can enable/disable Hermes as you wish."]}),"\n",(0,r.jsx)(n.p,{children:"Once you've configured it, you can install the Hermes pods with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ cd ios && pod install\n"})}),"\n",(0,r.jsx)(n.p,{children:"That's it! You should now be able to develop and deploy your app as usual:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"package-manager",queryString:!0,defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run ios\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn ios\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"switching-back-to-javascriptcore",children:"Switching back to JavaScriptCore"}),"\n",(0,r.jsxs)(n.p,{children:["React Native also supports using JavaScriptCore as the ",(0,r.jsx)(n.a,{href:"javascript-environment",children:"JavaScript engine"}),". Follow these instructions to opt-out of Hermes."]}),"\n",(0,r.jsx)(n.h3,{id:"android-1",children:"Android"}),"\n",(0,r.jsxs)(n.p,{children:["Edit your ",(0,r.jsx)(n.code,{children:"android/gradle.properties"})," file and flip ",(0,r.jsx)(n.code,{children:"hermesEnabled"})," back to false:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# Use this property to enable or disable the Hermes JS engine.\n# If set to false, you will be using JSC instead.\nhermesEnabled=false\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ios-1",children:"iOS"}),"\n",(0,r.jsxs)(n.p,{children:["Edit your ",(0,r.jsx)(n.code,{children:"ios/Podfile"})," file and make the change illustrated below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"   use_react_native!(\n     :path => config[:reactNativePath],\n     # Hermes is now enabled by default. Disable by setting this flag to false.\n     # Upcoming versions of React Native may rely on get_default_flags(), but\n     # we make it explicit here to aid in the React Native upgrade process.\n-    :hermes_enabled => flags[:hermes_enabled],\n+    :hermes_enabled => false,\n   )\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},86386:(e,n,a)=>{a.d(n,{Z:()=>h});var r=a(27378),s=a(38944);const t={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,a)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,u=(e,n)=>{for(var a in n||(n={}))o.call(n,a)&&d(e,a,n[a]);if(l)for(var a of l(n))c.call(n,a)&&d(e,a,n[a]);return e};function h({children:e,hidden:n,className:a}){return r.createElement("div",u({role:"tabpanel",className:(0,s.Z)(t.tabItem,a)},{hidden:n}),e)}},48375:(e,n,a)=>{a.d(n,{Z:()=>A});var r=a(27378),s=a(38944),t=a(12112),i=a(3620),l=a(69490),o=a(14953),c=a(27886),d=a(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,n,a)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,v=(e,n)=>{for(var a in n||(n={}))g.call(n,a)&&f(e,a,n[a]);if(m)for(var a of m(n))b.call(n,a)&&f(e,a,n[a]);return e},j=(e,n)=>h(e,p(n));function y(e){var n,a;return null!=(a=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?a:[]}function x(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return y(e).map((({props:{value:e,label:n,attributes:a,default:r}})=>({value:e,label:n,attributes:a,default:r})))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function w({value:e,tabValues:n}){return n.some((n=>n.value===e))}function k({queryString:e=!1,groupId:n}){const a=(0,i.k6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace(j(v({},a.location),{search:n.toString()}))}),[s,a])]}function S(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,t=x(e),[i,o]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){var a;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(a=n.find((e=>e.default)))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[c,u]=k({queryString:a,groupId:s}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,s]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:s}),m=(()=>{const e=null!=c?c:h;return w({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!w({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,t]),tabValues:t}}var N=a(14185);const H={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var O=Object.defineProperty,C=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,T=(e,n,a)=>n in e?O(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,R=(e,n)=>{for(var a in n||(n={}))I.call(n,a)&&T(e,a,n[a]);if(E)for(var a of E(n))_.call(n,a)&&T(e,a,n[a]);return e},P=(e,n)=>C(e,Z(n));function D({className:e,block:n,selectedValue:a,selectValue:i,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),s=l[r].value;s!==a&&(c(n),i(s))},u=e=>{var n,a;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;r=null!=(n=o[a])?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=null!=(a=o[n])?a:o[o.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:t})=>r.createElement("li",P(R({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:d},t),{className:(0,s.Z)("tabs__item",H.tabItem,null==t?void 0:t.className,{"tabs__item--active":a===e})}),null!=n?n:e))))}function V({lazy:e,children:n,selectedValue:a}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function J(e){const n=S(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",H.tabList)},r.createElement(D,R(R({},e),n)),r.createElement(V,R(R({},e),n)))}function A(e){const n=(0,N.Z)();return r.createElement(J,R({key:String(n)},e),y(e.children))}},11674:(e,n,a)=>{a.d(n,{Z:()=>i});var r=a(63445);const s=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),t=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:s?"macos":t?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:s?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,a)=>{var r=a(27378),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var r,t={},c=null,d=null;for(r in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:t,_owner:l.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},24246:(e,n,a)=>{e.exports=a(71426)},98016:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},96062:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},33153:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},12412:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},99509:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"},71670:(e,n,a)=>{a.d(n,{Zo:()=>l,ah:()=>t});var r=a(27378);const s=r.createContext({});function t(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||i:t(e),r.createElement(s.Provider,{value:l},n)}}}]);