/*! For license information please see c9fc4253.97c3e391.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71609],{16846:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(24246),r=s(71670);const t={id:"hermes",title:"Using Hermes"},a=void 0,o={id:"hermes",title:"Using Hermes",description:"Hermes is an open-source JavaScript engine optimized for React Native. For many apps, using Hermes will result in improved start-up time, decreased memory usage, and smaller app size when compared to JavaScriptCore.",source:"@site/versioned_docs/version-0.71/hermes.md",sourceDirName:".",slug:"/hermes",permalink:"/docs/0.71/hermes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/hermes.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"hermes",title:"Using Hermes"},sidebar:"docs",previous:{title:"Timers",permalink:"/docs/0.71/timers"},next:{title:"Native Modules Intro",permalink:"/docs/0.71/native-modules-intro"}},l={},d=[{value:"Bundled Hermes",id:"bundled-hermes",level:2},{value:"Confirming Hermes is in use",id:"confirming-hermes-is-in-use",level:2},{value:"Debugging JS on Hermes using Google Chrome&#39;s DevTools",id:"debugging-js-on-hermes-using-google-chromes-devtools",level:2},{value:"Enabling Hermes on Older Versions of React Native",id:"enabling-hermes-on-older-versions-of-react-native",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Switching back to JavaScriptCore",id:"switching-back-to-javascriptcore",level:2},{value:"Android",id:"android-1",level:3},{value:"iOS",id:"ios-1",level:3}];function c(e){const n=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",img:"img",code:"code",pre:"pre",admonition:"admonition",ol:"ol",li:"li",h3:"h3"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{href:"https://hermesengine.dev",children:(0,i.jsx)("img",{width:300,height:300,className:"hermes-logo",src:"/docs/assets/HermesLogo.svg",style:{height:"auto"}})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://hermesengine.dev",children:"Hermes"})," is an open-source JavaScript engine optimized for React Native. For many apps, using Hermes will result in improved start-up time, decreased memory usage, and smaller app size when compared to JavaScriptCore.\nHermes is used by default by React Native and no additional configuration is required to enable it."]}),"\n",(0,i.jsx)(n.h2,{id:"bundled-hermes",children:"Bundled Hermes"}),"\n",(0,i.jsxs)(n.p,{children:["React Native comes with a ",(0,i.jsx)(n.strong,{children:"bundled version"})," of Hermes.\nWe will be building a version of Hermes for you whenever we release a new version of React Native. This will make sure you're consuming a version of Hermes which is fully compatible with the version of React Native you're using."]}),"\n",(0,i.jsx)(n.p,{children:"Historically, we had problems with matching versions of Hermes with versions of React Native. This fully eliminates this problem, and offers users a JS engine that is compatible with the specific React Native version."}),"\n",(0,i.jsxs)(n.p,{children:["This change is fully transparent to users of React Native. You can still disable Hermes using the command described in this page.\nYou can ",(0,i.jsx)(n.a,{href:"/architecture/bundled-hermes",children:"read more about the technical implementation on this page"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"confirming-hermes-is-in-use",children:"Confirming Hermes is in use"}),"\n",(0,i.jsx)(n.p,{children:"If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Where to find JS engine status in AwesomeProject",src:s(22477).Z+"",width:"405",height:"833"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"HermesInternal"})," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const isHermes = () => !!global.HermesInternal;\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["If you are using a non-standard way of loading the JS bundle, it is possible that the ",(0,i.jsx)(n.code,{children:"HermesInternal"})," variable is available but you aren't using the highly optimised pre-compiled bytecode.\nConfirm that you are using the ",(0,i.jsx)(n.code,{children:".hbc"})," file and also benchmark the before/after as detailed below."]})}),"\n",(0,i.jsx)(n.p,{children:"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ npx react-native run-android --mode release\n"})}),"\n",(0,i.jsx)(n.p,{children:"or for iOS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ npx react-native run-ios --mode Release\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."}),"\n",(0,i.jsx)(n.h2,{id:"debugging-js-on-hermes-using-google-chromes-devtools",children:"Debugging JS on Hermes using Google Chrome's DevTools"}),"\n",(0,i.jsx)(n.p,{children:"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:['Note that this is very different with the "Remote JS Debugging" from the In-App Developer Menu documented in the ',(0,i.jsx)(n.a,{href:"debugging#debugging-using-a-custom-javascript-debugger",children:"Debugging"})," section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop)."]})}),"\n",(0,i.jsxs)(n.p,{children:["Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",(0,i.jsx)(n.code,{children:"localhost:8081"}),", but this is ",(0,i.jsx)(n.a,{href:"https://metrobundler.dev/docs/configuration",children:"configurable"}),". When running ",(0,i.jsx)(n.code,{children:"yarn start"})," the address is written to stdout on startup."]}),"\n",(0,i.jsx)(n.p,{children:"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"chrome://inspect"})," in a Chrome browser instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"Configure..."})," button to add the Metro server address (typically ",(0,i.jsx)(n.code,{children:"localhost:8081"})," as described above)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure button in Chrome DevTools devices page",src:s(68743).Z+"",width:"1114",height:"824"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Dialog for adding Chrome DevTools network targets",src:s(71220).Z+"",width:"618",height:"656"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',(0,i.jsx)(n.img,{alt:"Target inspect link",src:s(2904).Z+"",width:"1114",height:"824"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",(0,i.jsx)(n.img,{alt:"Pause button in debug tools",src:s(19365).Z+"",width:"1280",height:"794"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enabling-hermes-on-older-versions-of-react-native",children:"Enabling Hermes on Older Versions of React Native"}),"\n",(0,i.jsx)(n.p,{children:"Hermes is the default engine as of React Native 0.70. This section explains how to enable Hermes on older versions of React Native.\nFirst, ensure you're using at least version 0.60.4 of React Native to enable Hermes on Android or 0.64 of React Native to enable Hermes on iOS."}),"\n",(0,i.jsxs)(n.p,{children:["If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",(0,i.jsx)(n.a,{href:"/docs/upgrading",children:"Upgrading to new React Native Versions"})," for how to do this. After upgrading the app, make sure everything works before trying to switch to Hermes."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note for React Native compatibility",type:"caution",children:(0,i.jsxs)(n.p,{children:["Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/hermes/releases",children:"Hermes releases"})," strictly.\nVersion mismatch can result in instant crash of your apps in the worst case scenario."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Note for Windows users",type:"info",children:(0,i.jsxs)(n.p,{children:["Hermes requires ",(0,i.jsx)(n.a,{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145",children:"Microsoft Visual C++ 2015 Redistributable"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(n.p,{children:["Edit your ",(0,i.jsx)(n.code,{children:"android/gradle.properties"})," file and make sure ",(0,i.jsx)(n.code,{children:"hermesEnabled"})," is true:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"# Use this property to enable or disable the Hermes JS engine.\n# If set to false, you will be using JSC instead.\nhermesEnabled=true\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This property was added in React Native 0.71. If you can't find it in your ",(0,i.jsx)(n.code,{children:"gradle.properties"})," file, please refer to the documentation for the corresponding React Native version you're using."]})}),"\n",(0,i.jsxs)(n.p,{children:["Also, if you're using ProGuard, you will need to add these rules in ",(0,i.jsx)(n.code,{children:"proguard-rules.pro"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, if you've already built your app at least once, clean the build:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ cd android && ./gradlew clean\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's it! You should now be able to develop and deploy your app as usual:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ npx react-native run-android\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,i.jsxs)(n.p,{children:["Since React Native 0.64, Hermes also runs on iOS. To enable Hermes for iOS, edit your ",(0,i.jsx)(n.code,{children:"ios/Podfile"})," file and make the change illustrated below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"   use_react_native!(\n     :path => config[:reactNativePath],\n     # to enable hermes on iOS, change `false` to `true` and then install pods\n     # By default, Hermes is disabled on Old Architecture, and enabled on New Architecture.\n     # You can enable/disable it manually by replacing `flags[:hermes_enabled]` with `true` or `false`.\n-    :hermes_enabled => flags[:hermes_enabled],\n+    :hermes_enabled => true\n   )\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, you will be using Hermes if you're on the New Architecture. By specifying a value such\nas ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"})," you can enable/disable Hermes as you wish."]}),"\n",(0,i.jsx)(n.p,{children:"Once you've configured it, you can install the Hermes pods with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ cd ios && pod install\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's it! You should now be able to develop and deploy your app as usual:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ npx react-native run-ios\n"})}),"\n",(0,i.jsx)(n.h2,{id:"switching-back-to-javascriptcore",children:"Switching back to JavaScriptCore"}),"\n",(0,i.jsxs)(n.p,{children:["React Native also supports using JavaScriptCore as the ",(0,i.jsx)(n.a,{href:"javascript-environment",children:"JavaScript engine"}),". Follow these instructions to opt-out of Hermes."]}),"\n",(0,i.jsx)(n.h3,{id:"android-1",children:"Android"}),"\n",(0,i.jsxs)(n.p,{children:["Edit your ",(0,i.jsx)(n.code,{children:"android/gradle.properties"})," file and flip ",(0,i.jsx)(n.code,{children:"hermesEnabled"})," back to false:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"# Use this property to enable or disable the Hermes JS engine.\n# If set to false, you will be using JSC instead.\nhermesEnabled=false\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ios-1",children:"iOS"}),"\n",(0,i.jsxs)(n.p,{children:["Edit your ",(0,i.jsx)(n.code,{children:"ios/Podfile"})," file and make the change illustrated below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"   use_react_native!(\n     :path => config[:reactNativePath],\n     # Hermes is now enabled by default. Disable by setting this flag to false.\n     # Upcoming versions of React Native may rely on get_default_flags(), but\n     # we make it explicit here to aid in the React Native upgrade process.\n-    :hermes_enabled => flags[:hermes_enabled],\n+    :hermes_enabled => false,\n   )\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,s)=>{var i=s(27378),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,t={},d=null,c=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,i)&&!l.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},24246:(e,n,s)=>{e.exports=s(71426)},22477:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},68743:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},2904:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},71220:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},19365:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"},71670:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var i=s(27378);const r=i.createContext({});function t(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:t(e),i.createElement(r.Provider,{value:o},n)}}}]);