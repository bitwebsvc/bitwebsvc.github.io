/*! For license information please see c28f96f6.86a842bc.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20394],{61647:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(24246),o=r(71670);function i(e){const t=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,o.ah)(),e.components);return(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["This documentation is still ",(0,n.jsx)(t.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,n.jsxs)(t.p,{children:["Moreover, it contains several ",(0,n.jsx)(t.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const a=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},81027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(24246),o=r(71670),i=r(61647);const a={id:"new-architecture-library-ios",title:"Enabling in iOS Library"},s=void 0,c={id:"new-architecture-library-ios",title:"Enabling in iOS Library",description:"You have defined the JavaScript specs for your native modules as part of the prerequisites, and you are now ready to migrate your library to the New Architecture. Here are the steps you can follow to accomplish this.",source:"@site/versioned_docs/version-0.73/new-architecture-library-ios.md",sourceDirName:".",slug:"/new-architecture-library-ios",permalink:"/docs/new-architecture-library-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/new-architecture-library-ios.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"new-architecture-library-ios",title:"Enabling in iOS Library"},sidebar:"docs",previous:{title:"Enabling in Android Library",permalink:"/docs/new-architecture-library-android"},next:{title:"Prerequisites for Applications",permalink:"/docs/new-architecture-app-intro"}},d={},l=[{value:"1. Updating your Podspec for the New Architecture",id:"1-updating-your-podspec-for-the-new-architecture",level:2},{value:"Add Folly and Other Dependencies",id:"add-folly-and-other-dependencies",level:3},{value:"2. Extend or Implement the Code-generated Native Interfaces",id:"2-extend-or-implement-the-code-generated-native-interfaces",level:2},{value:"Conform to the protocols provided by the native interface code",id:"conform-to-the-protocols-provided-by-the-native-interface-code",level:3}];function h(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre",strong:"strong"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.ZP,{}),"\n",(0,n.jsxs)(t.p,{children:["You have defined the JavaScript specs for your native modules as part of the ",(0,n.jsx)(t.a,{href:"new-architecture-library-intro",children:"prerequisites"}),", and you are now ready to migrate your library to the New Architecture. Here are the steps you can follow to accomplish this."]}),"\n",(0,n.jsx)(t.h2,{id:"1-updating-your-podspec-for-the-new-architecture",children:"1. Updating your Podspec for the New Architecture"}),"\n",(0,n.jsx)(t.p,{children:"The New Architecture makes use of CocoaPods."}),"\n",(0,n.jsx)(t.h3,{id:"add-folly-and-other-dependencies",children:"Add Folly and Other Dependencies"}),"\n",(0,n.jsxs)(t.p,{children:["The New Architecture requires some specific dependencies to work properly. You can set up your podspec to automatically install the required dependencies by modifying the ",(0,n.jsx)(t.code,{children:".podspec"})," file. In your ",(0,n.jsx)(t.code,{children:"Pod::Spec.new"})," block, add the following line:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"Pod::Spec.new do |s|\n  # ...\n+  install_modules_dependencies(s)\n  # ...\nend\n"})}),"\n",(0,n.jsxs)(t.p,{children:["At this ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L192-L197",children:"link"}),", you can find the documentation of the ",(0,n.jsx)(t.code,{children:"install_modules_dependencies"})," function."]}),"\n",(0,n.jsxs)(t.p,{children:["If you need to explicitly know which ",(0,n.jsx)(t.code,{children:"folly_flags"})," React Native is using, you can query them using the ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L188",children:(0,n.jsx)(t.code,{children:"folly_flag"})})," function."]}),"\n",(0,n.jsx)(t.h2,{id:"2-extend-or-implement-the-code-generated-native-interfaces",children:"2. Extend or Implement the Code-generated Native Interfaces"}),"\n",(0,n.jsx)(t.p,{children:"The JavaScript spec for your native module or component will be used to generate native interface code for each supported platform (i.e., Android and iOS). These native interface files will be generated when a React Native application that depends on your library is built."}),"\n",(0,n.jsxs)(t.p,{children:["While this generated native interface code ",(0,n.jsx)(t.strong,{children:"will not ship as part of your library"}),", you do need to make sure your Objective-C or Java code conforms to the protocols provided by these native interface files. You can use the Codegen script to generate your library\u2019s native interface code in order to use it ",(0,n.jsx)(t.strong,{children:"as a reference"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"cd <path/to/your/app>\nnode node_modules/react-native/scripts/generate-codegen-artifacts.js \\\n    --path <your app>/ \\\n    --outputPath <an/output/path> \\\n"})}),"\n",(0,n.jsx)(t.p,{children:"This command will generate the boilerplate code required by iOS in the output path provided as a parameter."}),"\n",(0,n.jsxs)(t.p,{children:["The files that are output by the script ",(0,n.jsx)(t.strong,{children:"should not be committed"}),", but you\u2019ll need to refer to them to determine what changes you need to make to your native modules in order for them to provide an implementation for each generated ",(0,n.jsx)(t.code,{children:"@protocol"})," / native interface."]}),"\n",(0,n.jsx)(t.h3,{id:"conform-to-the-protocols-provided-by-the-native-interface-code",children:"Conform to the protocols provided by the native interface code"}),"\n",(0,n.jsx)(t.p,{children:"Update your native module or component to ensure it implements/extends the native interface that has been generated from your JavaScript specs."}),"\n",(0,n.jsxs)(t.p,{children:["Following the example set forth in the previous section, your library might import ",(0,n.jsx)(t.code,{children:"MyAwesomeSpecs.h"}),", extend the relevant native interface, and implement the necessary methods for this interface:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-objc",children:"#import <MyAwesomeSpecs/MyAwesomeSpecs.h>\n\n@interface MyAwesomeModule () <StringGetterSpec>\n@end\n\nRCT_EXPORT_METHOD(getString:(NSString *)string\n                   callback:(RCTResponseSenderBlock)callback)\n{\n  // Implement this method\n}\n\n- (std::shared_ptr<TurboModule>)getTurboModule:(const ObjCTurboModule::InitParams &)params\n{\n  return std::make_shared<StringGetterSpecJSI>(params);\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For an existing native module, you will likely already have one or more instances of ",(0,n.jsx)(t.a,{href:"native-modules-ios#export-a-native-method-to-javascript",children:(0,n.jsx)(t.code,{children:"RCT_EXPORT_METHOD"})}),". To migrate to the New Architecture, you\u2019ll need to make sure the method signature uses the structs provided by the Codegen output."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},71426:(e,t,r)=>{var n=r(27378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(27378);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:s},t)}}}]);