/*! For license information please see 8e40a65f.735572b8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55559],{61647:(e,n,i)=>{i.d(n,{ZP:()=>a});var r=i(24246),t=i(71670);function o(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["This documentation is still ",(0,r.jsx)(n.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,r.jsxs)(n.p,{children:["Moreover, it contains several ",(0,r.jsx)(n.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},43130:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>h});var r=i(24246),t=i(71670),o=i(61647),a=i(20712);const d={id:"new-architecture-appendix",title:"Appendix"},l=void 0,s={id:"new-architecture-appendix",title:"Appendix",description:"I. Terminology",source:"@site/versioned_docs/version-0.73/new-architecture-appendix.md",sourceDirName:".",slug:"/new-architecture-appendix",permalink:"/docs/new-architecture-appendix",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/new-architecture-appendix.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"new-architecture-appendix",title:"Appendix"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/new-architecture-troubleshooting"},next:{title:"Headless JS",permalink:"/docs/headless-js-android"}},c={},h=[{value:"I. Terminology",id:"i-terminology",level:2},{value:"II. Flow Type to Native Type Mapping",id:"ii-flow-type-to-native-type-mapping",level:2},{value:"<code>string</code>",id:"string",level:3},{value:"<code>boolean</code>",id:"boolean",level:3},{value:"Object literal",id:"object-literal",level:3},{value:"<code>Object</code>",id:"object",level:3},{value:"<code>Array&lt;*&gt;</code>",id:"array",level:3},{value:"<code>Function</code>",id:"function",level:3},{value:"<code>Promise&lt;*&gt;</code>",id:"promise",level:3},{value:"Type Unions",id:"type-unions",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"III. TypeScript to Native Type Mapping",id:"iii-typescript-to-native-type-mapping",level:2},{value:"<code>string</code>",id:"string-1",level:3},{value:"<code>boolean</code>",id:"boolean-1",level:3},{value:"<code>number</code>",id:"number",level:3},{value:"Object literal",id:"object-literal-1",level:3},{value:"<code>Object</code>",id:"object-1",level:3},{value:"<code>Array&lt;*&gt;</code>",id:"array-1",level:3},{value:"<code>Function</code>",id:"function-1",level:3},{value:"<code>Promise&lt;*&gt;</code>",id:"promise-1",level:3},{value:"Type Unions",id:"type-unions-1",level:3},{value:"Callbacks",id:"callbacks-1",level:3},{value:"IV. Invoking the code-gen during development",id:"iv-invoking-the-code-gen-during-development",level:2},{value:"Android - Invoking a Gradle task directly",id:"android---invoking-a-gradle-task-directly",level:3},{value:"Invoking the script manually",id:"invoking-the-script-manually",level:3},{value:"Generating the schema file",id:"generating-the-schema-file",level:4},{value:"Generating the native code artifacts",id:"generating-the-native-code-artifacts",level:4},{value:"Example",id:"example",level:5},{value:"V. Note on Existing Apps",id:"v-note-on-existing-apps",level:2},{value:"Finding your bridge delegate",id:"finding-your-bridge-delegate",level:3}];function p(e){const n=Object.assign({h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",h3:"h3",code:"code",admonition:"admonition",a:"a",blockquote:"blockquote",ol:"ol",pre:"pre",h4:"h4",h5:"h5"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"i-terminology",children:"I. Terminology"}),"\n",(0,r.jsxs)(n.p,{children:["The whole New Architecture related guides will stick to the following ",(0,r.jsx)(n.strong,{children:"terminology"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Legacy Native Components"})," - To refer to Components which are running on the old React Native architecture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Legacy Native Modules"})," - To refer to Modules which are running on the old React Native architecture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fabric Native Components"})," - To refer to Components which have been adapted to work well with the New Architecture, namely the new renderer. For brevity you might find them referred as ",(0,r.jsx)(n.strong,{children:"Fabric Components"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Turbo Native Modules"})," - To refer to Modules which have been adapted to work well with the New Architecture, namely the new Native Module System. For brevity you might find them referred as ",(0,r.jsx)(n.strong,{children:"Turbo Modules"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ii-flow-type-to-native-type-mapping",children:"II. Flow Type to Native Type Mapping"}),"\n",(0,r.jsx)(n.p,{children:"You may use the following table as a reference for which types are supported and what they map to in each platform:"}),"\n",(0,r.jsx)(n.h3,{id:"string",children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?string"})],["Android (Java)",(0,r.jsx)(n.code,{children:"String"})],["iOS",(0,r.jsx)(n.code,{children:"NSString"})]]}),"\n",(0,r.jsx)(n.h3,{id:"boolean",children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?boolean"})],["Android (Java)",(0,r.jsx)(n.code,{children:"Boolean"})],["iOS",(0,r.jsx)(n.code,{children:"NSNumber"})]]}),"\n",(0,r.jsx)(n.h3,{id:"object-literal",children:"Object literal"}),"\n",(0,r.jsxs)(n.p,{children:["This is recommended over using plain ",(0,r.jsx)(n.code,{children:"Object"}),", for type safety."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"{| foo: string, ... |}"})]}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?{| foo: string, ...|}"})],["Android (Java)","-"],["iOS","-"]]}),"\n",(0,r.jsx)(n.h3,{id:"object",children:(0,r.jsx)(n.code,{children:"Object"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Recommended to use ",(0,r.jsx)(n.a,{href:"#object-literal",children:"Object literal"})," instead."]})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?Object"})],["Android (Java)",(0,r.jsx)(n.code,{children:"ReadableMap"})],["iOS",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.code,{children:"@"})," (untyped dictionary)"]})]]}),"\n",(0,r.jsx)(n.h3,{id:"array",children:(0,r.jsx)(n.code,{children:"Array<*>"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?Array<*>"})],["Android (Java)",(0,r.jsx)(n.code,{children:"ReadableArray"})],["iOS",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.code,{children:"NSArray"})," (or ",(0,r.jsx)(n.code,{children:"RCTConvertVecToArray"})," when used inside objects)"]})]]}),"\n",(0,r.jsx)(n.h3,{id:"function",children:(0,r.jsx)(n.code,{children:"Function"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?Function"})],["Android (Java)","-"],["iOS","-"]]}),"\n",(0,r.jsx)(n.h3,{id:"promise",children:(0,r.jsx)(n.code,{children:"Promise<*>"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"?Promise<*>"})],["Android (Java)",(0,r.jsx)(n.code,{children:"com.facebook.react.bridge.Promise"})],["iOS",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.code,{children:"RCTPromiseResolve"})," and ",(0,r.jsx)(n.code,{children:"RCTPromiseRejectBlock"})]})]]}),"\n",(0,r.jsx)(n.h3,{id:"type-unions",children:"Type Unions"}),"\n",(0,r.jsx)(n.p,{children:"Type unions are only supported as callbacks."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"'SUCCESS' | 'FAIL'"})]}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?","Only as callbacks."],["Android (Java)","-"],["iOS","-"]]}),"\n",(0,r.jsx)(n.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,r.jsxs)(n.p,{children:["Callback functions are not type checked, and are generalized as ",(0,r.jsx)(n.code,{children:"Object"}),"s."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"() =>"})]}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?","Yes"],["Android (Java)",(0,r.jsx)(n.code,{children:"com.facebook.react.bridge.Callback"})],["iOS",(0,r.jsx)(n.code,{children:"RCTResponseSenderBlock"})]]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the ",(0,r.jsx)(n.code,{children:"Libraries/"})," directory in the React Native repository."]})}),"\n",(0,r.jsx)(n.h2,{id:"iii-typescript-to-native-type-mapping",children:"III. TypeScript to Native Type Mapping"}),"\n",(0,r.jsx)(n.p,{children:"You may use the following table as a reference for which types are supported and what they map to in each platform:"}),"\n",(0,r.jsx)(n.h3,{id:"string-1",children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"string | null"})],["Android (Java)",(0,r.jsx)(n.code,{children:"String"})],["iOS",(0,r.jsx)(n.code,{children:"NSString"})]]}),"\n",(0,r.jsx)(n.h3,{id:"boolean-1",children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"boolean | null"})],["Android (Java)",(0,r.jsx)(n.code,{children:"Boolean"})],["iOS",(0,r.jsx)(n.code,{children:"NSNumber"})]]}),"\n",(0,r.jsx)(n.h3,{id:"number",children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?","No"],["Android (Java)",(0,r.jsx)(n.code,{children:"double"})],["iOS",(0,r.jsx)(n.code,{children:"NSNumber"})]]}),"\n",(0,r.jsx)(n.h3,{id:"object-literal-1",children:"Object literal"}),"\n",(0,r.jsxs)(n.p,{children:["This is recommended over using plain ",(0,r.jsx)(n.code,{children:"Object"}),", for type safety."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"{| foo: string, ... |}"})]}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"{| foo: string, ...|} | null"})],["Android (Java)","-"],["iOS","-"]]}),"\n",(0,r.jsx)(n.h3,{id:"object-1",children:(0,r.jsx)(n.code,{children:"Object"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Recommended to use ",(0,r.jsx)(n.a,{href:"#object-literal-1",children:"Object literal"})," instead."]})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"Object | null"})],["Android (Java)",(0,r.jsx)(n.code,{children:"ReadableMap"})],["iOS",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.code,{children:"@"})," (untyped dictionary)"]})]]}),"\n",(0,r.jsx)(n.h3,{id:"array-1",children:(0,r.jsx)(n.code,{children:"Array<*>"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"Array<*> | null"})],["Android (Java)",(0,r.jsx)(n.code,{children:"ReadableArray"})],["iOS",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.code,{children:"NSArray"})," (or ",(0,r.jsx)(n.code,{children:"RCTConvertVecToArray"})," when used inside objects)"]})]]}),"\n",(0,r.jsx)(n.h3,{id:"function-1",children:(0,r.jsx)(n.code,{children:"Function"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsxs)(n.code,{children:["?","Function | null"]})],["Android (Java)","-"],["iOS","-"]]}),"\n",(0,r.jsx)(n.h3,{id:"promise-1",children:(0,r.jsx)(n.code,{children:"Promise<*>"})}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?",(0,r.jsx)(n.code,{children:"Promise<*> | null"})],["Android (Java)",(0,r.jsx)(n.code,{children:"com.facebook.react.bridge.Promise"})],["iOS",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.code,{children:"RCTPromiseResolve"})," and ",(0,r.jsx)(n.code,{children:"RCTPromiseRejectBlock"})]})]]}),"\n",(0,r.jsx)(n.h3,{id:"type-unions-1",children:"Type Unions"}),"\n",(0,r.jsx)(n.p,{children:"Type unions are only supported as callbacks."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"'SUCCESS' | 'FAIL'"})]}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?","Only as callbacks."],["Android (Java)","-"],["iOS","-"]]}),"\n",(0,r.jsx)(n.h3,{id:"callbacks-1",children:"Callbacks"}),"\n",(0,r.jsxs)(n.p,{children:["Callback functions are not type checked, and are generalized as ",(0,r.jsx)(n.code,{children:"Object"}),"s."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"() =>"})]}),"\n",(0,r.jsx)(a.Z,{data:[["Nullable Support?","Yes"],["Android (Java)",(0,r.jsx)(n.code,{children:"com.facebook.react.bridge.Callback"})],["iOS",(0,r.jsx)(n.code,{children:"RCTResponseSenderBlock"})]]}),"\n",(0,r.jsxs)(n.p,{children:["You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the ",(0,r.jsx)(n.code,{children:"Libraries/"})," directory in the React Native repository."]}),"\n",(0,r.jsx)(n.h2,{id:"iv-invoking-the-code-gen-during-development",children:"IV. Invoking the code-gen during development"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This section contains information specific to v0.66 of React Native."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The Codegen is typically invoked at build time, but you may find it useful to generate your native interface code on demand for troubleshooting."}),"\n",(0,r.jsx)(n.p,{children:"If you wish to invoke the codegen manually, you have two options:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Invoking a Gradle task directly (Android)."}),"\n",(0,r.jsx)(n.li,{children:"Invoking a script manually."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"android---invoking-a-gradle-task-directly",children:"Android - Invoking a Gradle task directly"}),"\n",(0,r.jsx)(n.p,{children:"You can trigger the Codegen by invoking the following task:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./gradlew generateCodegenArtifactsFromSchema --rerun-tasks\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The extra ",(0,r.jsx)(n.code,{children:"--rerun-tasks"})," flag is added to make sure Gradle is ignoring the ",(0,r.jsx)(n.code,{children:"UP-TO-DATE"})," checks for this task. You should not need it during normal development."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"generateCodegenArtifactsFromSchema"})," task normally runs before the ",(0,r.jsx)(n.code,{children:"preBuild"})," task, so you should not need to invoke it manually, but it will be triggered before your builds."]}),"\n",(0,r.jsx)(n.h3,{id:"invoking-the-script-manually",children:"Invoking the script manually"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can invoke the Codegen directly, bypassing the Gradle Plugin or CocoaPods infrastructure.\nThis can be done with the following commands."}),"\n",(0,r.jsx)(n.p,{children:"The parameters to provide will look quite familiar to you now that you have already configured the Gradle plugin or CocoaPods library."}),"\n",(0,r.jsx)(n.h4,{id:"generating-the-schema-file",children:"Generating the schema file"}),"\n",(0,r.jsxs)(n.p,{children:["First, you\u2019ll need to generate a schema file from your JavaScript sources. You only need to do this whenever your JavaScript specs change. The script to generate this schema is provided as part of the ",(0,r.jsx)(n.code,{children:"react-native-codegen"})," package. If running this from within your React Native application, you can use the package from ",(0,r.jsx)(n.code,{children:"node_modules"})," directly:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node node_modules/react-native-codegen/lib/cli/combine/combine-js-to-schema-cli.js \\\n  <output_file_schema_json> <javascript_sources_dir>\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The source for the ",(0,r.jsx)(n.code,{children:"react-native-codegen"})," is available in the React Native repository, under ",(0,r.jsx)(n.code,{children:"packages/react-native-codegen"}),". Run ",(0,r.jsx)(n.code,{children:"yarn install"})," and ",(0,r.jsx)(n.code,{children:"yarn build"})," in that directory to build your own ",(0,r.jsx)(n.code,{children:"react-native-codegen"})," package from source. In most cases, you will not want to do this as the guide assumes the use of the ",(0,r.jsx)(n.code,{children:"react-native-codegen"})," package version that is associated with the relevant React Native nightly release."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"generating-the-native-code-artifacts",children:"Generating the native code artifacts"}),"\n",(0,r.jsx)(n.p,{children:"Once you have a schema file for your native modules or components, you can use a second script to generate the actual native code artifacts for your library. You can use the same schema file generated by the previous script."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node node_modules/react-native/scripts/generate-specs-cli.js \\\n  --platform <ios|android> \\\n  --schemaPath <generated_schema_json_file> \\\n  --outputDir <output_dir> \\\n  [--libraryName library_name] \\\n  [--javaPackageName java_package_name] \\\n  [--libraryType all(default)|modules|components]\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE:"})," The output artifacts of the Codegen are inside the build folder and should not be committed.\nThey should be considered only for reference."]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following is a basic example of invoking the Codegen script to generate native iOS interface code for a library that provides native modules. The JavaScript spec sources for this library are located in a ",(0,r.jsx)(n.code,{children:"js/"})," subdirectory, and this library\u2019s native code expects the native interfaces to be available in the ",(0,r.jsx)(n.code,{children:"ios"})," subdirectory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Generate schema - only needs to be done whenever JS specs change\nnode node_modules/react-native-codegen/lib/cli/combine/combine-js-to-schema-cli.js /tmp/schema.json ./js\n\n# Generate native code artifacts\nnode node_modules/react-native/scripts/generate-specs-cli.js \\\n  --platform ios \\\n  --schemaPath /tmp/schema.json \\\n  --outputDir ./ios \\\n  --libraryName MyLibSpecs \\\n  --libraryType modules\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the above example, the code-gen script will generate several files: ",(0,r.jsx)(n.code,{children:"MyLibSpecs.h"})," and ",(0,r.jsx)(n.code,{children:"MyLibSpecs-generated.mm"}),", as well as a handful of ",(0,r.jsx)(n.code,{children:".h"})," and ",(0,r.jsx)(n.code,{children:".cpp"})," files, all located in the ",(0,r.jsx)(n.code,{children:"ios"})," directory."]}),"\n",(0,r.jsx)(n.h2,{id:"v-note-on-existing-apps",children:"V. Note on Existing Apps"}),"\n",(0,r.jsx)(n.p,{children:"This guide provides instructions for migrating an application that is based on the default app template that is provided by React Native. If your app has deviated from the template, or you are working with an application that was never based off the template, then the following sections might help."}),"\n",(0,r.jsx)(n.h3,{id:"finding-your-bridge-delegate",children:"Finding your bridge delegate"}),"\n",(0,r.jsxs)(n.p,{children:["This guide assumes that the ",(0,r.jsx)(n.code,{children:"AppDelegate"})," is configured as the bridge delegate. If you are not sure which is your bridge delegate, then place a breakpoint in ",(0,r.jsx)(n.code,{children:"RCTBridge"})," and ",(0,r.jsx)(n.code,{children:"RCTCxxBridge"}),", run your app, and inspect ",(0,r.jsx)(n.code,{children:"self.delegate"}),"."]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},20712:(e,n,i)=>{i.d(n,{Z:()=>t});var r=i(27378);const t=({data:e})=>r.createElement("table",null,e.map((e=>r.createElement("tr",null,r.createElement("th",{style:{minWidth:"180px"}},e[0]),r.createElement("td",{style:{width:"100%"}},e[1])))))},71426:(e,n,i)=>{var r=i(27378),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,i){var r,o={},s=null,c=null;for(r in void 0!==i&&(s=""+i),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:s,ref:c,props:o,_owner:d.current}}n.Fragment=o,n.jsx=s,n.jsxs=s},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>d,ah:()=>o});var r=i(27378);const t=r.createContext({});function o(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function d({components:e,children:n,disableParentContext:i}){let d;return d=i?"function"==typeof e?e({}):e||a:o(e),r.createElement(t.Provider,{value:d},n)}}}]);