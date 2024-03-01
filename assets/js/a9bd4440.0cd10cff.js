/*! For license information please see a9bd4440.0cd10cff.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76071],{67877:(e,n,t)=>{t.d(n,{ZP:()=>i});var r=t(24246),a=t(71670);function o(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["This documentation is still ",(0,r.jsx)(n.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,r.jsxs)(n.p,{children:["Moreover, it contains several ",(0,r.jsx)(n.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const i=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},5904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var r=t(24246),a=t(71670),o=t(48375),i=t(86386),s=t(11674),l=t(67877);const c={id:"new-architecture-library-intro",title:"Prerequisites for Libraries"},d=void 0,p={id:"new-architecture-library-intro",title:"Prerequisites for Libraries",description:"The following steps will help ensure your modules and components are ready for the New Architecture.",source:"@site/versioned_docs/version-0.72/new-architecture-library-intro.md",sourceDirName:".",slug:"/new-architecture-library-intro",permalink:"/docs/0.72/new-architecture-library-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/new-architecture-library-intro.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"new-architecture-library-intro",title:"Prerequisites for Libraries"},sidebar:"docs",previous:{title:"Migrating to the New Architecture",permalink:"/docs/0.72/new-architecture-intro"},next:{title:"Enabling in Android Library",permalink:"/docs/0.72/new-architecture-library-android"}},u={},h=[{value:"Define Specs in JavaScript",id:"define-specs-in-javascript",level:2},{value:"Turbo Native Modules",id:"turbo-native-modules",level:3},{value:"Fabric Native Components",id:"fabric-native-components",level:3},{value:"Supported Types",id:"supported-types",level:3},{value:"Codegen Helper Types",id:"codegen-helper-types",level:3},{value:"Be Consistent Across Platforms and Eliminate Type Ambiguity",id:"be-consistent-across-platforms-and-eliminate-type-ambiguity",level:3},{value:"Configure Codegen",id:"configure-codegen",level:2},{value:"Migrating from <code>UIManager</code> JavaScript APIs",id:"migrating-from-uimanager-javascript-apis",level:2},{value:"Move the call to <code>requireNativeComponent</code> to a separate file",id:"move-the-call-to-requirenativecomponent-to-a-separate-file",level:3},{value:"Old way",id:"old-way",level:4},{value:"New way",id:"new-way",level:4},{value:"Flow support",id:"flow-support",level:4},{value:"Later on you can replace <code>requireNativeComponent</code>",id:"later-on-you-can-replace-requirenativecomponent",level:4},{value:"Migrating off <code>dispatchViewManagerCommand</code>",id:"migrating-off-dispatchviewmanagercommand",level:3},{value:"Using Your Command",id:"using-your-command",level:4},{value:"Updating Native Implementation",id:"updating-native-implementation",level:4}];function m(e){const n=Object.assign({p:"p",h2:"h2",strong:"strong",admonition:"admonition",h3:"h3",code:"code",a:"a",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",ol:"ol",h4:"h4"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.p,{children:"The following steps will help ensure your modules and components are ready for the New Architecture."}),"\n",(0,r.jsx)(n.h2,{id:"define-specs-in-javascript",children:"Define Specs in JavaScript"}),"\n",(0,r.jsxs)(n.p,{children:["The JavaScript specs serve as the source of truth for the methods provided by each native module. They define all APIs provided by the native module, along with the types of those constants and functions.\nUsing a ",(0,r.jsx)(n.strong,{children:"typed"})," spec file allows you to be intentional and declare all the input arguments and outputs of your native module\u2019s methods."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TypeScript"})," support is in beta right now."]})}),"\n",(0,r.jsx)(n.p,{children:"To adopt the New Architecture, you start by creating these specs for your native modules and native components. You can do this before migrating to the New Architecture: the specs will be used later on to generate native interface code for all the supported platforms as a way to enforce uniform APIs across platforms."}),"\n",(0,r.jsx)(n.h3,{id:"turbo-native-modules",children:"Turbo Native Modules"}),"\n",(0,r.jsxs)(n.p,{children:["JavaScript spec files ",(0,r.jsx)(n.strong,{children:"must"})," be named ",(0,r.jsx)(n.code,{children:"Native<MODULE_NAME>.js"}),", and they export a ",(0,r.jsx)(n.code,{children:"TurboModuleRegistry"})," ",(0,r.jsx)(n.code,{children:"Spec"})," object. The name convention is important because the Codegen process looks for modules whose ",(0,r.jsx)(n.code,{children:"js"})," (",(0,r.jsx)(n.code,{children:"jsx"}),", ",(0,r.jsx)(n.code,{children:"ts"}),", or ",(0,r.jsx)(n.code,{children:"tsx"}),") spec file starts with the keyword ",(0,r.jsx)(n.code,{children:"Native"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is a basic JavaScript spec template, written using the ",(0,r.jsx)(n.a,{href:"https://flow.org/",children:"Flow"})," and ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," syntax."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"fabric-component-backward-compatibility",queryString:!0,defaultValue:s.Z.defaultFabricComponentSpecLanguage,values:s.Z.fabricComponentSpecLanguages,children:[(0,r.jsx)(i.Z,{value:"Flow",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// @flow strict\n\nimport type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';\nimport {TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  +getConstants: () => {||};\n\n  // your module methods go here, for example:\n  getString(id: string): Promise<string>;\n}\n\nexport default (TurboModuleRegistry.get<Spec>(\n  '<MODULE_NAME>',\n): ?Spec);\n"})})}),(0,r.jsx)(i.Z,{value:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {TurboModule, TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  readonly getConstants: () => {};\n\n  // your module methods go here, for example:\n  getString(id: string): Promise<string>;\n}\n\nexport default TurboModuleRegistry.get<Spec>('<MODULE_NAME>');\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"fabric-native-components",children:"Fabric Native Components"}),"\n",(0,r.jsxs)(n.p,{children:["JavaScript spec files ",(0,r.jsx)(n.strong,{children:"must"})," be named ",(0,r.jsx)(n.code,{children:"<FABRIC COMPONENT>NativeComponent.js"})," (for TypeScript use extension ",(0,r.jsx)(n.code,{children:".ts"})," or ",(0,r.jsx)(n.code,{children:".tsx"}),") and they export a ",(0,r.jsx)(n.code,{children:"HostComponent"})," object. The name convention is important: the Codegen process looks for components whose spec file (either JavaScript or TypeScript) ends with the suffix ",(0,r.jsx)(n.code,{children:"NativeComponent"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following snippet shows a basic JavaScript spec template, written in ",(0,r.jsx)(n.a,{href:"https://flow.org/",children:"Flow"})," as well as ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),"."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"fabric-component-backward-compatibility",queryString:!0,defaultValue:s.Z.defaultFabricComponentSpecLanguage,values:s.Z.fabricComponentSpecLanguages,children:[(0,r.jsx)(i.Z,{value:"Flow",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// @flow strict-local\n\nimport type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';\nimport type {HostComponent} from 'react-native';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\ntype NativeProps = $ReadOnly<{|\n  ...ViewProps,\n  // add other props here\n|}>;\n\nexport default (codegenNativeComponent<NativeProps>(\n  '<FABRIC COMPONENT>',\n): HostComponent<NativeProps>);\n"})})}),(0,r.jsx)(i.Z,{value:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import type {ViewProps} from 'ViewPropTypes';\nimport type {HostComponent} from 'react-native';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\nexport interface NativeProps extends ViewProps {\n  // add other props here\n}\n\nexport default codegenNativeComponent<NativeProps>(\n  '<FABRIC COMPONENT>',\n) as HostComponent<NativeProps>;\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"supported-types",children:"Supported Types"}),"\n",(0,r.jsxs)(n.p,{children:["When using Flow or TypeScript, you will be using ",(0,r.jsx)(n.a,{href:"https://flow.org/en/docs/types/",children:"type annotations"})," to define your spec. Keeping in mind that the goal of defining a JavaScript spec is to ensure the generated native interface code is type-safe, the set of supported types will be those that can be mapped one-to-one to a corresponding type on the native platform."]}),"\n",(0,r.jsxs)(n.p,{children:["In general, this means you can use primitive types (strings, numbers, booleans), function types, object types, and array types. Union types, on the other hand, are not supported. All types must be read-only. For Flow: either ",(0,r.jsx)(n.code,{children:"+"})," or ",(0,r.jsx)(n.code,{children:"$ReadOnly<>"})," or ",(0,r.jsx)(n.code,{children:"{||}"})," objects. For TypeScript: ",(0,r.jsx)(n.code,{children:"readonly"})," for properties, ",(0,r.jsx)(n.code,{children:"Readonly<>"})," for objects, and ",(0,r.jsx)(n.code,{children:"ReadonlyArray<>"})," for arrays."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["See Appendix ",(0,r.jsx)(n.a,{href:"new-architecture-appendix#ii-flow-type-to-native-type-mapping",children:"II. Flow Type to Native Type Mapping"}),".\nSee Appendix ",(0,r.jsx)(n.a,{href:"new-architecture-appendix#iii-typescript-to-native-type-mapping",children:"III. TypeScript to Native Type Mapping"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"codegen-helper-types",children:"Codegen Helper Types"}),"\n",(0,r.jsx)(n.p,{children:"You can use predefined types for your JavaScript spec, here is a list of them:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Double"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Float"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Int32"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UnsafeObject"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WithDefault<Type, Value>"})," - Sets default value for type"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BubblingEventHandler<T>"})," - For events that are propagated (bubbled) up the component tree from child to parent up to the root (eg: ",(0,r.jsx)(n.code,{children:"onStartShouldSetResponder"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DirectEventHandler<T>"})," - For events that are called only on element recieving the event (eg: ",(0,r.jsx)(n.code,{children:"onClick"}),") and don't bubble."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Later on those types are compiled to coresponding equivalents on target platforms."}),"\n",(0,r.jsx)(n.h3,{id:"be-consistent-across-platforms-and-eliminate-type-ambiguity",children:"Be Consistent Across Platforms and Eliminate Type Ambiguity"}),"\n",(0,r.jsx)(n.p,{children:"Before adopting the New Architecture in your native module, you should ensure your methods are consistent across platforms. You will realize this as you set out to write the JavaScript spec for your native module - remember that JavaScript spec defines what the methods will look like on all supported platforms."}),"\n",(0,r.jsx)(n.p,{children:"If your existing native module has methods with the same name on multiple platforms, but with different numbers or types of arguments across platforms, you will need to find a way to make these consistent. If you have methods that can take two or more different types for the same argument, then you need to find a way to resolve this type of ambiguity as type unions are intentionally not supported."}),"\n",(0,r.jsx)(n.h2,{id:"configure-codegen",children:"Configure Codegen"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"the-new-architecture/pillars-codegen",children:"Codegen"})," is a tool that runs when you build an Android app or install the dependencies of an iOS app. It creates some scaffolding code that you won't have to create manually."]}),"\n",(0,r.jsxs)(n.p,{children:["Codegen can be configured in the ",(0,r.jsx)(n.code,{children:"package.json"})," file of your Library. Add the following JSON object at the end of it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'  },\n+  "codegenConfig": {\n+    "name": "<library name>",\n+    "type": "all",\n+    "jsSrcsDir": ".",\n+    "android": {\n+      "javaPackageName": "com.facebook.fbreact.specs"\n+    }\n+  }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"codegenConfig"})," is the key used by the Codegen to verify that there is some code to generate."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"name"})," field is the name of the library."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"type"})," field is used to identify the type of module we want to create. We suggest keeping ",(0,r.jsx)(n.code,{children:"all"})," to support libraries that contain both Turbo Native Module and Fabric Native Components."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"jsSrcsDir"})," is the directory where the codegen will start looking for JavaScript specs."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"android.javaPackageName"})," is the name of the package where the generated code ends up."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Android also requires to have the ",(0,r.jsx)(n.a,{href:"new-architecture-app-intro#android-specifics",children:"React Gradle Plugin properly configured"})," in your app."]}),"\n",(0,r.jsxs)(n.h2,{id:"migrating-from-uimanager-javascript-apis",children:["Migrating from ",(0,r.jsx)(n.code,{children:"UIManager"})," JavaScript APIs"]}),"\n",(0,r.jsxs)(n.p,{children:["In the New Architecture, most ",(0,r.jsx)(n.code,{children:"UIManager"})," methods will become available as instance methods on native component instances obtained via ",(0,r.jsx)(n.code,{children:"ref"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function MyComponent(props: Props) {\n  const viewRef = useRef(null);\n\n  useEffect(() => {\n    viewRef.current.measure(((left, top, width, height, pageX, pageY) => {\n      // ...\n    });\n  }, []);\n\n  return <View ref={viewRef} />;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This new API design provides several benefits:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Better developer ergonomics by removing the need for separately importing ",(0,r.jsx)(n.code,{children:"UIManager"})," or calling ",(0,r.jsx)(n.code,{children:"findNodeHandle"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Better performance by avoiding the node handle lookup step."}),"\n",(0,r.jsxs)(n.li,{children:["Directionally aligned with ",(0,r.jsxs)(n.a,{href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage",children:["the analogous deprecation of ",(0,r.jsx)(n.code,{children:"findDOMNode"})]}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["We will eventually deprecate ",(0,r.jsx)(n.code,{children:"UIManager"}),". However, we recognize that migrations demand a high cost for many application and library authors. In order to minimize this cost, we plan to continue supporting as many of the methods on ",(0,r.jsx)(n.code,{children:"UIManager"})," as possible in the New Architecture."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Support for ",(0,r.jsx)(n.code,{children:"UIManager"})," methods in the New Architecture is actively being developed."]})," While we make progress here, early adopters can still experiment with the New Architecture by following these steps to migrate off common ",(0,r.jsx)(n.code,{children:"UIManager"})," APIs:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Move the call to ",(0,r.jsx)(n.code,{children:"requireNativeComponent"})," to a separate file"]}),"\n",(0,r.jsxs)(n.li,{children:["Migrating off ",(0,r.jsx)(n.code,{children:"dispatchViewManagerCommand"})]}),"\n",(0,r.jsxs)(n.li,{children:["Creating NativeCommands with ",(0,r.jsx)(n.code,{children:"codegenNativeCommands"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"move-the-call-to-requirenativecomponent-to-a-separate-file",children:["Move the call to ",(0,r.jsx)(n.code,{children:"requireNativeComponent"})," to a separate file"]}),"\n",(0,r.jsxs)(n.p,{children:["This will prepare for the JS to be ready for the new codegen system for the New Architecture. The new file should be named ",(0,r.jsx)(n.code,{children:"<ComponentName>NativeComponent.js."})]}),"\n",(0,r.jsx)(n.h4,{id:"old-way",children:"Old way"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const RNTMyNativeView = requireNativeComponent('RNTMyNativeView');\n\n[...]\n\nreturn <RNTMyNativeView />;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"new-way",children:"New way"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="RNTMyNativeNativeComponent.js"',children:"import RNTMyNativeViewNativeComponent from './RNTMyNativeViewNativeComponent';\n\n[...]\n\nreturn <RNTMyNativeViewNativeComponent />;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="RNTMyNativeViewNativeComponent.js"',children:"import {requireNativeComponent} from 'react-native';\n\nconst RNTMyNativeViewNativeComponent = requireNativeComponent(\n  'RNTMyNativeView',\n);\n\nexport default RNTMyNativeViewNativeComponent;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"flow-support",children:"Flow support"}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"requireNativeComponent"})," is not typed, you can temporarily use the ",(0,r.jsx)(n.code,{children:"mixed"})," type to fix the Flow warning, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// @flow strict-local\n\nimport type {HostComponent} from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';\n// ...\nconst RCTWebViewNativeComponent: HostComponent<mixed> =\n  requireNativeComponent<mixed>('RNTMyNativeView');\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"later-on-you-can-replace-requirenativecomponent",children:["Later on you can replace ",(0,r.jsx)(n.code,{children:"requireNativeComponent"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you are ready to migrate to Fabric you can replace ",(0,r.jsx)(n.code,{children:"requireNativeComponent"})," with ",(0,r.jsx)(n.code,{children:"codegenNativeComponent"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="RNTMyNativeViewNativeComponent.js"',children:"// @flow strict-local\n\nexport default (codegenNativeComponent<NativeProps>(\n  'RNTMyNativeView',\n): HostComponent<NativeProps>);\n"})}),"\n",(0,r.jsx)(n.p,{children:"And update the main file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="RNTMyNativeNativeComponent.js"',children:"// @flow strict-local\n\nexport default require('./RNTMyNativeViewNativeComponent')\n  .default;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"migrating-off-dispatchviewmanagercommand",children:["Migrating off ",(0,r.jsx)(n.code,{children:"dispatchViewManagerCommand"})]}),"\n",(0,r.jsxs)(n.p,{children:["Similar to the one above, in an effort to avoid calling methods on the UIManager, all view manager methods are now called through an instance of ",(0,r.jsx)(n.code,{children:"NativeCommands"}),". ",(0,r.jsx)(n.code,{children:"codegenNativeCommands"})," is a new API to code-generate ",(0,r.jsx)(n.code,{children:"NativeCommands"})," given an interface of your view manager\u2019s commands."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Before"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"class MyComponent extends React.Component<Props> {\n  _moveToRegion: (region: Region, duration: number) => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      'moveToRegion',\n      [region, duration]\n    );\n  }\n\n  render() {\n    return <MyCustomMapNativeComponent onPress={this._moveToRegion} />\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Creating NativeCommands with ",(0,r.jsx)(n.code,{children:"codegenNativeCommands"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="MyCustomMapNativeComponent.js"',children:"// @flow strict-local\n\nimport codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';\nimport type {HostComponent} from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';\n\ntype MyCustomMapNativeComponentType = HostComponent<NativeProps>;\n\ninterface NativeCommands {\n  +moveToRegion: (\n    viewRef: React.ElementRef<MyCustomMapNativeComponentType>,\n    region: MapRegion,\n    duration: number,\n  ) => void;\n}\n\nexport const Commands: NativeCommands =\n  codegenNativeCommands<NativeCommands>({\n    supportedCommands: ['moveToRegion'],\n  });\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The first argument in the ",(0,r.jsx)(n.code,{children:"moveToRegion"})," command is a HostComponent ref of the native component"]}),"\n",(0,r.jsxs)(n.li,{children:["The arguments to the ",(0,r.jsx)(n.code,{children:"moveToRegion"})," command are enumerated in the signature"]}),"\n",(0,r.jsx)(n.li,{children:"The command definition is co-located with the native component. This is an encouraged pattern"}),"\n",(0,r.jsxs)(n.li,{children:["Ensure you have included your command name in the ",(0,r.jsx)(n.code,{children:"supportedCommands"})," array"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"using-your-command",children:"Using Your Command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// @flow strict-local\n\nimport {Commands, ...} from './MyCustomMapNativeComponent';\n\nclass MyComponent extends React.Component<Props> {\n  _ref: ?React.ElementRef<typeof MyCustomMapNativeComponent>;\n\n  _captureRef: (ref: React.ElementRef<typeof MyCustomMapNativeComponent>) => {\n    this._ref = ref;\n  }\n\n  _moveToRegion: (region: Region, duration: number) => {\n    if (this._ref != null) {\n      Commands.moveToRegion(this._ref, region, duration);\n    }\n  }\n\n  render() {\n    return <MyCustomMapNativeComponent\n       ref={this._captureRef}\n       onPress={this._moveToRegion} />\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"updating-native-implementation",children:"Updating Native Implementation"}),"\n",(0,r.jsxs)(n.p,{children:["In the example, the code-generated ",(0,r.jsx)(n.code,{children:"Commands"})," will dispatch ",(0,r.jsx)(n.code,{children:"moveToRegion"})," call to the native component\u2019s view manager. In addition to writing the JS interface, you\u2019ll need to update your native implementation signatures to match the dispatched method call. See the mapping for ",(0,r.jsx)(n.a,{href:"https://facebook.github.io/react-native/docs/native-modules-android#argument-types",children:"Android argument types"})," and",(0,r.jsx)(n.a,{href:"https://facebook.github.io/react-native/docs/native-modules-ios#argument-types",children:"iOS argument types"})," for reference."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"iOS"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-objc",children:"RCT_EXPORT_METHOD(moveToRegion:(nonnull NSNumber *)reactTag\n                        region:(NSDictionary *)region\n                      duration:(double)duration\n{\n   ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Android"})}),"\n",(0,r.jsxs)(o.Z,{groupId:"android-language",queryString:!0,defaultValue:s.Z.defaultAndroidLanguage,values:s.Z.androidLanguages,children:[(0,r.jsx)(i.Z,{value:"kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'    fun receiveCommand(\n        view: ReactMapDrawerView?, commandId: String?, args: ReadableArray?\n    ) {\n        when (commandId) {\n            "moveToRegion" -> {\n                if (args != null) {\n                    val region: ReadableMap = args.getMap(0)\n                    val durationMs: Int = args.getInt(1)\n                    // ... act on the view...\n                }\n            }\n        }\n    }\n'})})}),(0,r.jsx)(i.Z,{value:"java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// receiveCommand signature has changed to receive String commandId\n@Override\n  public void receiveCommand(\n      ReactMapDrawerView view, String commandId, @Nullable ReadableArray args) {\n    switch (commandId) {\n      case "moveToRegion":\n        if (args == null) {\n          break;\n        }\n\n        ReadableMap region = args.getMap(0);\n        int durationMs = args.getInt(1);\n        // ... act on the view...\n        break;\n    }\n  }\n'})})})]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(27378),a=t(38944);const o={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&d(e,t,n[t]);return e};function u({children:e,hidden:n,className:t}){return r.createElement("div",p({role:"tabpanel",className:(0,a.Z)(o.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(27378),a=t(38944),o=t(12112),i=t(3620),s=t(69490),l=t(14953),c=t(27886),d=t(7106),p=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&f(e,t,n[t]);if(m)for(var t of m(n))v.call(n,t)&&f(e,t,n[t]);return e},j=(e,n)=>u(e,h(n));function b(e){var n,t;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function x(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return b(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function w({value:e,tabValues:n}){return n.some((n=>n.value===e))}function N({queryString:e=!1,groupId:n}){const t=(0,i.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace(j(y({},t.location),{search:n.toString()}))}),[a,t])]}function C(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=x(e),[i,l]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,p]=N({queryString:t,groupId:a}),[u,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:u;return w({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!w({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var T=t(14185);const M={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,R=Object.defineProperties,I=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,A=(e,n,t)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,E=(e,n)=>{for(var t in n||(n={}))k.call(n,t)&&A(e,t,n[t]);if(O)for(var t of O(n))P.call(n,t)&&A(e,t,n[t]);return e},V=(e,n)=>R(e,I(n));function _({className:e,block:n,selectedValue:t,selectValue:i,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(c(n),i(a))},p=e=>{var n,t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=null!=(t=l[n])?t:l[l.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:o})=>r.createElement("li",V(E({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:p,onClick:d},o),{className:(0,a.Z)("tabs__item",M.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function L({lazy:e,children:n,selectedValue:t}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function q(e){const n=C(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",M.tabList)},r.createElement(_,E(E({},e),n)),r.createElement(L,E(E({},e),n)))}function D(e){const n=(0,T.Z)();return r.createElement(q,E({key:String(n)},e),b(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:a?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var r=t(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(27378);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:o(e),r.createElement(a.Provider,{value:s},n)}}}]);