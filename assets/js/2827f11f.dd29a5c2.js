/*! For license information please see 2827f11f.dd29a5c2.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22107],{23014:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(24246),o=t(71670);function i(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,o.ah)(),e.components);return(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["This documentation is still ",(0,a.jsx)(n.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,a.jsxs)(n.p,{children:["Moreover, it contains several ",(0,a.jsx)(n.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const r=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},49236:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(24246),o=t(71670);function i(e){const n=Object.assign({admonition:"admonition",p:"p"},(0,o.ah)(),e.components);return(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"The TypeScript support for the New Architecture is still in beta."})})}const r=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},87591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var a=t(24246),o=t(71670),i=t(48375),r=t(86386),l=t(11674),s=t(49236),c=t(23014);const d={id:"backward-compatibility-turbomodules",title:"Turbo Modules as Legacy Native Modules"},u=void 0,h={id:"the-new-architecture/backward-compatibility-turbomodules",title:"Turbo Modules as Legacy Native Modules",description:"Creating a backward compatible Turbo Native Module requires the knowledge of how to create a Legacy Native Module. To recall these concepts, have a look at this guide.",source:"@site/versioned_docs/version-0.71/the-new-architecture/backward-compatibility-turbomodules.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility-turbomodules",permalink:"/docs/0.71/the-new-architecture/backward-compatibility-turbomodules",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/the-new-architecture/backward-compatibility-turbomodules.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"backward-compatibility-turbomodules",title:"Turbo Modules as Legacy Native Modules"},sidebar:"docs",previous:{title:"What Backward Compatibility Is",permalink:"/docs/0.71/the-new-architecture/backward-compatibility"},next:{title:"Fabric Components as Legacy Native Components",permalink:"/docs/0.71/the-new-architecture/backward-compatibility-fabric-components"}},p={},m=[{value:"Configure the Turbo Native Module Dependencies",id:"configure-the-turbo-native-module-dependencies",level:2},{value:"iOS",id:"dependencies-ios",level:3},{value:"Android",id:"android",level:3},{value:"Update the codebase",id:"update-the-codebase",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android-1",level:3},{value:"Unify the JavaScript specs",id:"unify-the-javascript-specs",level:2}];function f(e){const n=Object.assign({admonition:"admonition",p:"p",a:"a",ol:"ol",li:"li",strong:"strong",ul:"ul",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Creating a backward compatible Turbo Native Module requires the knowledge of how to create a Legacy Native Module. To recall these concepts, have a look at this ",(0,a.jsx)(n.a,{href:"pillars-turbomodules",children:"guide"}),"."]}),(0,a.jsxs)(n.p,{children:["TurboModules only works when the New Architecture is properly set up. If you already have a library that you want to migrate to the New Architecture, have a look at the ",(0,a.jsx)(n.a,{href:"../new-architecture-intro",children:"migration guide"})," as well."]})]}),"\n",(0,a.jsx)(n.p,{children:"Creating a backward compatible TurboModule lets your users continue to leverage your library, independently from the architecture they use. The creation of such a module requires a few steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Configure the library so that dependencies are prepared set up properly for both the Old and the New Architecture."}),"\n",(0,a.jsx)(n.li,{children:"Update the codebase so that the New Architecture types are not compiled when not available."}),"\n",(0,a.jsx)(n.li,{children:"Uniform the JavaScript API so that your user code won't need changes."}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["For the sake of this guide we're going to use the following ",(0,a.jsx)(n.strong,{children:"terminology"}),":"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Legacy Native Modules"})," - To refer to Modules which are running on the old React Native architecture."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Turbo Native Modules"})," - To refer to Modules which have been adapted to work well with the New Native Module System. For brevity you might find them referred as ",(0,a.jsx)(n.strong,{children:"Turbo Modules"}),"."]}),"\n"]})]}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.p,{children:"While the last step is the same for all the platforms, the first two steps are different for iOS and Android."}),"\n",(0,a.jsx)(n.h2,{id:"configure-the-turbo-native-module-dependencies",children:"Configure the Turbo Native Module Dependencies"}),"\n",(0,a.jsx)(n.h3,{id:"dependencies-ios",children:"iOS"}),"\n",(0,a.jsxs)(n.p,{children:["The Apple platform installs Turbo Native Modules using ",(0,a.jsx)(n.a,{href:"https://cocoapods.org",children:"CocoaPods"})," as a dependency manager."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are already using the ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/82e9c6ad611f1fb816de056ff031716f8cb24b4e/scripts/react_native_pods.rb#L145",children:(0,a.jsx)(n.code,{children:"install_module_dependencies"})})," function, then ",(0,a.jsx)(n.strong,{children:"there is nothing to do"}),". The function already takes care of installing the proper dependencies when the New Architecture is enabled and avoids them when it is not enabled."]}),"\n",(0,a.jsxs)(n.p,{children:["Otherwise, your Turbo Native Module's ",(0,a.jsx)(n.code,{children:"podspec"})," should look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<TM Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n  s.dependency "React-Core"\n\n  #\xa0The following lines are required by the New Architecture.\n  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n  s.pod_target_xcconfig    = {\n      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly"\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\n\nend\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You should install the extra dependencies when the New Architecture is enabled, and avoid installing them when it's not.\nTo achieve this, you can use the ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/82e9c6ad611f1fb816de056ff031716f8cb24b4e/scripts/react_native_pods.rb#L145",children:(0,a.jsx)(n.code,{children:"install_modules_dependencies"})}),". Update the ",(0,a.jsx)(n.code,{children:".podspec"})," file as it follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\n-folly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<TM Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n+  install_modules_dependencies(s)\n-  s.dependency "React-Core"\n-\n-  #\xa0The following lines are required by the New Architecture.\n-  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n-  s.pod_target_xcconfig    = {\n-      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n-      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n-  }\n-\n-  s.dependency "React-Codegen"\n-  s.dependency "RCT-Folly"\n-  s.dependency "RCTRequired"\n-  s.dependency "RCTTypeSafety"\n-  s.dependency "ReactCommon/turbomodule/core"\nend\n'})}),"\n",(0,a.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,a.jsxs)(n.p,{children:["To create a module that can work with both architectures, you need to configure Gradle to choose which files need to be compiled depending on the chosen architecture. This can be achieved by using ",(0,a.jsx)(n.strong,{children:"different source sets"})," in the Gradle configuration."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Please note that this is currently the suggested approach. While it might lead to some code duplication, it will ensure the maximum compatibility with both architectures. You will see how to reduce the duplication in the next section."})}),"\n",(0,a.jsxs)(n.p,{children:["To configure the Turbo Native Module so that it picks the proper sourceset, you have to update the ",(0,a.jsx)(n.code,{children:"build.gradle"})," file in the following way:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="build.gradle"',children:"+// Add this function in case you don't have it already\n+ def isNewArchitectureEnabled() {\n+    return project.hasProperty(\"newArchEnabled\") && project.newArchEnabled == \"true\"\n+}\n\n\n// ... other parts of the build file\n\ndefaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 31)\n+        buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", isNewArchitectureEnabled().toString())\n+    }\n+\n+    sourceSets {\n+        main {\n+            if (isNewArchitectureEnabled()) {\n+                java.srcDirs += ['src/newarch']\n+            } else {\n+                java.srcDirs += ['src/oldarch']\n+            }\n+        }\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This changes do three main things:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The first lines define a function that returns whether the New Architecture is enabled or not."}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"buildConfigField"})," line defines a build configuration boolean field called ",(0,a.jsx)(n.code,{children:"IS_NEW_ARCHITECTURE_ENABLED"}),", and initialize it using the function declared in the first step. This allows you to check at runtime if a user has specified the ",(0,a.jsx)(n.code,{children:"newArchEnabled"})," property or not."]}),"\n",(0,a.jsx)(n.li,{children:"The last lines leverage the function declared in step one to decide which source sets we need to build, depending on the chosen architecture."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"update-the-codebase",children:"Update the codebase"}),"\n",(0,a.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,a.jsx)(n.p,{children:"The second step is to instruct Xcode to avoid compiling all the lines using the New Architecture types and files when we are building an app with the Old Architecture."}),"\n",(0,a.jsxs)(n.p,{children:["There are two files to change. The module implementation file, which is usually a ",(0,a.jsx)(n.code,{children:"<your-module>.mm"})," file, and the module header, which is usually a ",(0,a.jsx)(n.code,{children:"<your-module>.h"})," file."]}),"\n",(0,a.jsx)(n.p,{children:"That implementation file is structured as follows:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Some ",(0,a.jsx)(n.code,{children:"#import"})," statements, among which there is a ",(0,a.jsx)(n.code,{children:"<GeneratedSpec>.h"})," file."]}),"\n",(0,a.jsxs)(n.li,{children:["The module implementation, using the various ",(0,a.jsx)(n.code,{children:"RCT_EXPORT_xxx"})," and ",(0,a.jsx)(n.code,{children:"RCT_REMAP_xxx"})," macros."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"getTurboModule:"})," function, which uses the ",(0,a.jsx)(n.code,{children:"<MyModuleSpecJSI>"})," type, generated by The New Architecture."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"goal"})," is to make sure that the ",(0,a.jsx)(n.code,{children:"Turbo Native Module"})," still builds with the Old Architecture. To achieve that, we can wrap the ",(0,a.jsx)(n.code,{children:'#import "<GeneratedSpec>.h"'})," and the ",(0,a.jsx)(n.code,{children:"getTurboModule:"})," function into an ",(0,a.jsx)(n.code,{children:"#ifdef RCT_NEW_ARCH_ENABLED"})," compilation directive, as shown in the following example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'#import "<MyModuleHeader>.h"\n+ #ifdef RCT_NEW_ARCH_ENABLED\n#import "<GeneratedSpec>.h"\n+ #endif\n\n// ... rest of your module\n\n+ #ifdef RCT_NEW_ARCH_ENABLED\n - (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:\n    (const facebook::react::ObjCTurboModule::InitParams &)params\n {\n    return std::make_shared<facebook::react::<MyModuleSpecJSI>>(params);\n }\n+ #endif\n\n@end\n'})}),"\n",(0,a.jsx)(n.p,{children:"A similar thing needs to be done for the header file. Add the following lines at the bottom of your module header. You need to first import the header and then, if the New Architecture is enabled, make it conform to the Spec protocol."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"#import <React/RCTBridgeModule.h>\n+ #ifdef RCT_NEW_ARCH_ENABLED\n+ #import <YourModuleSpec/YourModuleSpec.h>\n+ #endif\n\n@interface YourModule: NSObject <RCTBridgeModule>\n\n@end\n\n+ #ifdef RCT_NEW_ARCH_ENABLED\n+ @interface YourModule () <YourModuleSpec>\n\n+ @end\n+ #endif\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This snippets uses the same ",(0,a.jsx)(n.code,{children:"RCT_NEW_ARCH_ENABLED"})," flag used in the previous ",(0,a.jsx)(n.a,{href:"#dependencies-ios",children:"section"}),". When this flag is not set, Xcode skips the lines within the ",(0,a.jsx)(n.code,{children:"#ifdef"})," during compilation and it does not include them into the compiled binary."]}),"\n",(0,a.jsx)(n.h3,{id:"android-1",children:"Android"}),"\n",(0,a.jsx)(n.p,{children:"As we can't use conditional compilation blocks on Android, we will define two different source sets. This will allow to create a backward compatible Turbo Native Module with the proper source that is loaded and compiled depending on the used architecture."}),"\n",(0,a.jsx)(n.p,{children:"Therefore, you have to:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a Legacy Native Module in the ",(0,a.jsx)(n.code,{children:"src/oldarch"})," path. See ",(0,a.jsx)(n.a,{href:"../native-modules-intro",children:"this guide"})," to learn how to create a Legacy Native Module."]}),"\n",(0,a.jsxs)(n.li,{children:["Create a Turbo Native Module in the ",(0,a.jsx)(n.code,{children:"src/newarch"})," path. See ",(0,a.jsx)(n.a,{href:"./pillars-turbomodules",children:"this guide"})," to learn how to create a Turbo Native Module"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"and then instruct Gradle to decide which implementation to pick."}),"\n",(0,a.jsx)(n.p,{children:"Some files can be shared between a Legacy Native Module and a Turbo Native Module: these should be created or moved into a folder that is loaded by both the architectures. These files are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["the ",(0,a.jsx)(n.code,{children:"<MyModule>Package.java"})," file used to load the module."]}),"\n",(0,a.jsxs)(n.li,{children:["a ",(0,a.jsx)(n.code,{children:"<MyTurboModule>Impl.java"})," file where we can put the code that both the Legacy Native Module and the Turbo Native Module has to execute."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The final folder structure looks like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"my-module\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 build.gradle\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 main\n\u2502       \u2502   \u251c\u2500\u2500 AndroidManifest.xml\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 mymodule\n\u2502       \u2502               \u251c\u2500\u2500 MyModuleImpl.java\n\u2502       \u2502               \u2514\u2500\u2500 MyModulePackage.java\n\u2502       \u251c\u2500\u2500 newarch\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyModule.java\n\u2502       \u2514\u2500\u2500 oldarch\n\u2502           \u2514\u2500\u2500 java\n\u2502               \u2514\u2500\u2500 com\n\u2502                   \u2514\u2500\u2500 MyModule.java\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The code that should go in the ",(0,a.jsx)(n.code,{children:"MyModuleImpl.java"}),", and that can be shared by the Legacy Native Module and the Turbo Native Module is, for example:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(r.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="example of MyModuleImpl.java"',children:'package com.mymodule;\n\nimport androidx.annotation.NonNull;\nimport com.facebook.react.bridge.Promise;\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class MyModuleImpl {\n\n    public static final String NAME = "MyModule";\n\n    public void foo(double a, double b, Promise promise) {\n        // implement the logic for foo and then invoke promise.resolve or\n        // promise.reject.\n    }\n}\n'})})}),(0,a.jsx)(r.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="example of MyModuleImpl.kt"',children:'package com.mymodule;\n\nimport com.facebook.react.bridge.Promise\n\nclass MyModuleImpl {\n  fun foo(a: Double, b: Double, promise: Promise) {\n    // implement the logic for foo and then invoke\n    // promise.resolve or promise.reject.\n  }\n\n  companion object {\n    const val NAME = "MyModule"\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"Then, the Legacy Native Module and the Turbo Native Module can be updated with the following steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a private instance of the ",(0,a.jsx)(n.code,{children:"MyModuleImpl"})," class."]}),"\n",(0,a.jsx)(n.li,{children:"Initialize the instance in the module constructor."}),"\n",(0,a.jsx)(n.li,{children:"Use the private instance in the modules methods."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For example, for a Legacy Native Module:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(r.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Native Module using the Impl module"',children:"public class MyModule extends ReactContextBaseJavaModule {\n\n    // declare an instance of the implementation\n    private MyModuleImpl implementation;\n\n    MyModule(ReactApplicationContext context) {\n        super(context);\n        // initialize the implementation of the module\n        implementation = MyModuleImpl();\n    }\n\n    @Override\n    public String getName() {\n        // NAME is a static variable, so we can access it using the class name.\n        return MyModuleImpl.NAME;\n    }\n\n    @ReactMethod\n    public void foo(int a, int b, Promise promise) {\n        // Use the implementation instance to execute the function.\n        implementation.foo(a, b, promise);\n    }\n}\n"})})}),(0,a.jsx)(r.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Native Module using the Impl module"',children:"class MyModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {\n  // declare an instance of the implementation and use it in all the methods\n  private var implementation: MyModuleImpl = MyModuleImpl()\n\n  override fun getName(): String = MyModuleImpl.NAME\n\n  @ReactMethod\n  fun foo(a: Double, b: Double, promise: Promise) {\n    // Use the implementation instance to execute the function.\n    implementation.foo(a, b, promise)\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"And, for a Turbo Native Module:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(r.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TurboModule using the Impl module"',children:"public class MyModule extends MyModuleSpec {\n    // declare an instance of the implementation\n    private MyModuleImpl implementation;\n\n    MyModule(ReactApplicationContext context) {\n        super(context);\n        // initialize the implementation of the module\n        implementation = MyModuleImpl();\n    }\n\n    @Override\n    @NonNull\n    public String getName() {\n        // NAME is a static variable, so we can access it using the class name.\n        return MyModuleImpl.NAME;\n    }\n\n    @Override\n    public void foo(double a, double b, Promise promise) {\n        // Use the implementation instance to execute the function.\n        implementation.foo(a, b, promise);\n    }\n}\n"})})}),(0,a.jsx)(r.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TurboModule using the Impl module"',children:"class MyModule(reactContext: ReactApplicationContext) : MyModuleSpec(reactContext) {\n  // declare an instance of the implementation and use it in all the methods\n  private var implementation: MyModuleImpl = MyModuleImpl()\n\n  override fun getName(): String = MyModuleImpl.NAME\n\n  override fun foo(a: Double, b: Double, promise: Promise) {\n    // Use the implementation instance to execute the function.\n    implementation.foo(a, b, promise)\n  }\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["For a step-by-step example on how to achieve this, have a look at ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/back-turbomodule",children:"this repo"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"unify-the-javascript-specs",children:"Unify the JavaScript specs"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.p,{children:"The last step makes sure that the JavaScript behaves transparently to chosen architecture."}),"\n",(0,a.jsxs)(n.p,{children:["For a Turbo Native Module, the source of truth is the ",(0,a.jsx)(n.code,{children:"Native<MyModule>.js"})," (or ",(0,a.jsx)(n.code,{children:".ts"}),") spec file. The app accesses the spec file like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import MyModule from 'your-module/src/index';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.code,{children:"TurboModuleRegistry.get"})," taps into the old Native Modules API under the hood, we need to re-export our module, to avoid registering it multiple times."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"turbomodule-backward-compatibility",queryString:!0,defaultValue:l.Z.defaultTurboModuleSpecLanguage,values:l.Z.turboModuleSpecLanguages,children:[(0,a.jsx)(r.Z,{value:"Flow",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// @flow\nexport default require('./Native<MyModule>').default;\n"})})}),(0,a.jsx)(r.Z,{value:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default require('./Native<MyModule>').default;\n"})})})]})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(f,e)})):f(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(27378),o=t(38944);const i={tabItem:"tabItem_wHwb"};var r=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&d(e,t,n[t]);return e};function h({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,o.Z)(i.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>F});var a=t(27378),o=t(38944),i=t(12112),r=t(3620),l=t(69490),s=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&g(e,t,n[t]);if(m)for(var t of m(n))b.call(n,t)&&g(e,t,n[t]);return e},j=(e,n)=>h(e,p(n));function x(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function y(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return x(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function w({value:e,tabValues:n}){return n.some((n=>n.value===e))}function M({queryString:e=!1,groupId:n}){const t=(0,r.k6)(),o=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace(j(v({},t.location),{search:n.toString()}))}),[o,t])]}function N(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=y(e),[r,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=M({queryString:t,groupId:o}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,o]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:o}),m=(()=>{const e=null!=c?c:h;return w({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!w({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var T=t(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var _=Object.defineProperty,A=Object.defineProperties,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,I=(e,n,t)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))C.call(n,t)&&I(e,t,n[t]);if(S)for(var t of S(n))O.call(n,t)&&I(e,t,n[t]);return e},R=(e,n)=>A(e,E(n));function D({className:e,block:n,selectedValue:t,selectValue:r,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=s.indexOf(n),o=l[a].value;o!==t&&(c(n),r(o))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=null!=(t=s[n])?t:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:i})=>a.createElement("li",R(L({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:u,onClick:d},i),{className:(0,o.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function P({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function Z(e){const n=N(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(D,L(L({},e),n)),a.createElement(P,L(L({},e),n)))}function F(e){const n=(0,T.Z)();return a.createElement(Z,L({key:String(n)},e),x(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(63445);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:o?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,i={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,a)&&!s.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var a=t(27378);const o=a.createContext({});function i(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:i(e),a.createElement(o.Provider,{value:l},n)}}}]);