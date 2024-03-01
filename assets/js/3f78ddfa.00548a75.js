/*! For license information please see 3f78ddfa.00548a75.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69654],{61647:(e,n,t)=>{t.d(n,{ZP:()=>a});var r=t(24246),o=t(71670);function i(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["This documentation is still ",(0,r.jsx)(n.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,r.jsxs)(n.p,{children:["Moreover, it contains several ",(0,r.jsx)(n.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},95676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var r=t(24246),o=t(71670),i=t(48375),a=t(86386),l=t(11674),s=t(61647);const d={id:"cxx-cxxturbomodules",title:"C++ Turbo Native Modules"},c=void 0,u={id:"the-new-architecture/cxx-cxxturbomodules",title:"C++ Turbo Native Modules",description:"This guide shows you how to implement a Turbo Native Module using C++ only, a way to share the same implementation with any supported platform (Android, iOS, macOS or Windows).",source:"@site/versioned_docs/version-0.73/the-new-architecture/cxx-cxxturbomodules.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/cxx-cxxturbomodules",permalink:"/docs/the-new-architecture/cxx-cxxturbomodules",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/the-new-architecture/cxx-cxxturbomodules.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"cxx-cxxturbomodules",title:"C++ Turbo Native Modules"},sidebar:"docs",previous:{title:"Codegen",permalink:"/docs/the-new-architecture/pillars-codegen"},next:{title:"Supporting Custom C++ Types",permalink:"/docs/the-new-architecture/cxx-custom-types"}},p={},h=[{value:"How to Create a C++ Turbo Native Module",id:"how-to-create-a-c-turbo-native-module",level:2},{value:"Setup a Test App for the New Architecture",id:"setup-a-test-app-for-the-new-architecture",level:3},{value:"Turbo Module Folder Setup",id:"turbo-module-folder-setup",level:3},{value:"1. JavaScript Specification",id:"1-javascript-specification",level:2},{value:"2. Codegen Configuration",id:"2-codegen-configuration",level:2},{value:"iOS: Create the <code>podspec</code> file",id:"ios-create-the-podspec-file",level:3},{value:"Android: <code>build.gradle</code>, <code>CMakeLists.txt</code>, <code>Onload.cpp</code>",id:"android-buildgradle-cmakeliststxt-onloadcpp",level:3},{value:"3. Module Registration",id:"3-module-registration",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"4. C++ Native Code",id:"4-c-native-code",level:2},{value:"Run Codegen",id:"run-codegen",level:3},{value:"Implementation",id:"implementation",level:3},{value:"5. Adding the C++ Turbo Native Module to your App",id:"5-adding-the-c-turbo-native-module-to-your-app",level:2},{value:"App TurboModuleProvider [Optional]",id:"app-turbomoduleprovider-optional",level:2},{value:"Calling OS specific APIs",id:"calling-os-specific-apis",level:2},{value:"Extending C++ Turbo Native Modules",id:"extending-c-turbo-native-modules",level:2}];function m(e){const n=Object.assign({p:"p",a:"a",admonition:"admonition",strong:"strong",h2:"h2",ol:"ol",li:"li",h3:"h3",pre:"pre",code:"code",h1:"h1",ul:"ul"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.p,{children:"This guide shows you how to implement a Turbo Native Module using C++ only, a way to share the same implementation with any supported platform (Android, iOS, macOS or Windows)."}),"\n",(0,r.jsxs)(n.p,{children:["Before continuing with this guide, please read the ",(0,r.jsx)(n.a,{href:"/docs/the-new-architecture/pillars-turbomodules",children:"Turbo Native Modules"})," section. As a further reference, we prepared an example for the RNTester app (",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/main/packages/rn-tester/NativeCxxModuleExample",children:"NativeCxxModuleExample"}),") and a sample run in our community repository (",(0,r.jsx)(n.a,{href:"https://github.com/react-native-community/RNNewArchitectureApp/tree/run/pure-cxx-module",children:"run/pure-cxx-module"}),")."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["C++ Turbo Native Modules work with the ",(0,r.jsx)(n.strong,{children:"New Architecture"})," enabled.\nTo migrate to the ",(0,r.jsx)(n.strong,{children:"New Architecture"}),", follow the ",(0,r.jsx)(n.a,{href:"../new-architecture-intro",children:"Migration guide"})]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-create-a-c-turbo-native-module",children:"How to Create a C++ Turbo Native Module"}),"\n",(0,r.jsx)(n.p,{children:"To create a C++ Turbo Native Module, you need to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Define the JavaScript specification."}),"\n",(0,r.jsx)(n.li,{children:"Configure Codegen to generate the scaffolding."}),"\n",(0,r.jsx)(n.li,{children:"Register the native module."}),"\n",(0,r.jsx)(n.li,{children:"Write the native code to finish implementing the module."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"setup-a-test-app-for-the-new-architecture",children:"Setup a Test App for the New Architecture"}),"\n",(0,r.jsx)(n.p,{children:"As first step, create a new application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npx react-native init CxxTurboModulesGuide\ncd CxxTurboModulesGuide\nyarn install\n"})}),"\n",(0,r.jsxs)(n.p,{children:["On Android enable the New Architecture by modifying the ",(0,r.jsx)(n.code,{children:"android/gradle.properties"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"- newArchEnabled=false\n+ newArchEnabled=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["On iOS enable the New Architecture when running ",(0,r.jsx)(n.code,{children:"pod install"})," in the ",(0,r.jsx)(n.code,{children:"ios"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"RCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n"})}),"\n",(0,r.jsx)(n.h3,{id:"turbo-module-folder-setup",children:"Turbo Module Folder Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"tm"})," folder inside the project. It will contain all C++ TurboModules of your application. The final result should look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"CxxTurboModulesGuide\n\u251c\u2500\u2500 android\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 tm\n"})}),"\n",(0,r.jsx)(n.h2,{id:"1-javascript-specification",children:"1. JavaScript Specification"}),"\n",(0,r.jsxs)(n.p,{children:["Create the following spec inside the ",(0,r.jsx)(n.code,{children:"tm"})," folder:"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"turbomodule-specs",queryString:!0,defaultValue:l.Z.defaultJavaScriptSpecLanguages,values:l.Z.javaScriptSpecLanguages,children:[(0,r.jsx)(a.Z,{value:"typescript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',children:"import {TurboModule, TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  readonly reverseString: (input: string) => string;\n}\n\nexport default TurboModuleRegistry.getEnforcing<Spec>(\n  'NativeSampleModule',\n);\n"})})}),(0,r.jsx)(a.Z,{value:"flow",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="NativeSampleModule.js"',children:"// @flow\nimport type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';\n// import type {TurboModule} from 'react-native'; in future versions\nimport {TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  +reverseString: (input: string) => string;\n}\n\nexport default (TurboModuleRegistry.getEnforcing<Spec>(\n  'NativeSampleModule',\n): Spec);\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"2-codegen-configuration",children:"2. Codegen Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Next, you need to add some configuration for ",(0,r.jsx)(n.a,{href:"/docs/the-new-architecture/pillars-codegen",children:(0,r.jsx)(n.strong,{children:"Codegen"})}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"application",children:"Application"}),"\n",(0,r.jsxs)(n.p,{children:["Update your app's ",(0,r.jsx)(n.code,{children:"package.json"})," file with the following entries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  // ...\n  "description": "React Native with Cxx Turbo Native Modules",\n  "author": "<Your Name> <your_email@your_provider.com> (https://github.com/<your_github_handle>)",\n  "license": "MIT",\n  "homepage": "https://github.com/<your_github_handle>/#readme",\n  // ...\n  "codegenConfig": {\n    "name": "AppSpecs",\n    "type": "all",\n    "jsSrcsDir": "tm",\n    "android": {\n      "javaPackageName": "com.facebook.fbreact.specs"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["It adds necessary properties which we will later re-use in the iOS ",(0,r.jsx)(n.code,{children:"podspec"})," file and configures ",(0,r.jsx)(n.strong,{children:"Codegen"})," to search for specs inside the ",(0,r.jsx)(n.code,{children:"tm"})," folder."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"C++ Turbo Native Modules don't autolink and need to be manually included into the app with the described steps below."})}),"\n",(0,r.jsxs)(n.h3,{id:"ios-create-the-podspec-file",children:["iOS: Create the ",(0,r.jsx)(n.code,{children:"podspec"})," file"]}),"\n",(0,r.jsxs)(n.p,{children:["For iOS, you'll need to create a ",(0,r.jsx)(n.code,{children:"AppTurboModules.podspec"})," file in the ",(0,r.jsx)(n.code,{children:"tm"})," folder - which will look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",metastring:'title="AppTurboModules.podspec"',children:'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "../package.json")))\n\nPod::Spec.new do |s|\n  s.name            = "AppTurboModules"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "12.4" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n  s.source_files    = "**/*.{h,cpp}"\n  s.pod_target_xcconfig = {\n    "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n  install_modules_dependencies(s)\nend\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You need to add it as a dependency to your application in ",(0,r.jsx)(n.code,{children:"ios/Podfile"}),", e.g., after the ",(0,r.jsx)(n.code,{children:"use_react_native!(...)"})," section:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"if ENV['RCT_NEW_ARCH_ENABLED'] == '1'\n  pod 'AppTurboModules', :path => \"./../tm\"\nend\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"android-buildgradle-cmakeliststxt-onloadcpp",children:["Android: ",(0,r.jsx)(n.code,{children:"build.gradle"}),", ",(0,r.jsx)(n.code,{children:"CMakeLists.txt"}),", ",(0,r.jsx)(n.code,{children:"Onload.cpp"})]}),"\n",(0,r.jsxs)(n.p,{children:["For Android, you'll need to create a ",(0,r.jsx)(n.code,{children:"CMakeLists.txt"})," file in the ",(0,r.jsx)(n.code,{children:"tm"})," folder - which will look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.13)\nset(CMAKE_VERBOSE_MAKEFILE on)\n\nadd_compile_options(\n        -fexceptions\n        -frtti\n        -std=c++17)\n\nfile(GLOB tm_SRC CONFIGURE_DEPENDS *.cpp)\nadd_library(tm STATIC ${tm_SRC})\n\ntarget_include_directories(tm PUBLIC .)\ntarget_include_directories(react_codegen_AppSpecs PUBLIC .)\n\ntarget_link_libraries(tm\n        jsi\n        react_nativemodule_core\n        react_codegen_AppSpecs)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It defines the ",(0,r.jsx)(n.code,{children:"tm"})," folder as a source for native code and sets up necessary dependencies."]}),"\n",(0,r.jsxs)(n.p,{children:["You need to add it as a dependency to your application in ",(0,r.jsx)(n.code,{children:"android/app/build.gradle"}),", e.g., at the very end of that file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle"',children:'android {\n   externalNativeBuild {\n       cmake {\n           path "src/main/jni/CMakeLists.txt"\n       }\n   }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Ensure to pick the correct ",(0,r.jsx)(n.strong,{children:"android/app/build.gradle"})," file and not android/build.gradle."]})}),"\n",(0,r.jsx)(n.h2,{id:"3-module-registration",children:"3. Module Registration"}),"\n",(0,r.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,r.jsxs)(n.p,{children:["To register a C++ Turbo Native Module in your app you will need to update ",(0,r.jsx)(n.code,{children:"ios/CxxTurboModulesGuide/AppDelegate.mm"})," with the following entries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'#import "AppDelegate.h"\n\n#import <React/RCTBundleURLProvider.h>\n+ #import <React/CoreModulesPlugins.h>\n+ #import <ReactCommon/RCTTurboModuleManager.h>\n+ #import <NativeSampleModule.h>\n\n+ @interface AppDelegate () <RCTTurboModuleManagerDelegate> {}\n+ @end\n\n// ...\n\n\u1806 (Class)getModuleClassFromName:(const char *)name\n{\n  return RCTCoreModulesClassProvider(name);\n}\n\n+ #pragma mark RCTTurboModuleManagerDelegate\n\n+ - (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name\n+                                                       jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n+ {\n+   if (name == "NativeSampleModule") {\n+     return std::make_shared<facebook::react::NativeSampleModule>(jsInvoker);\n+   }\n+   return nullptr;\n+ }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will instantiante a ",(0,r.jsx)(n.code,{children:"NativeSampleModule"})," associated with the name ",(0,r.jsx)(n.code,{children:"NativeSampleModule"})," as defined in our JavaScript spec file earlier."]}),"\n",(0,r.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,r.jsx)(n.p,{children:"Android apps aren't setup for native code compilation by default."}),"\n",(0,r.jsxs)(n.p,{children:["1.) Create the folder ",(0,r.jsx)(n.code,{children:"android/app/src/main/jni"})]}),"\n",(0,r.jsxs)(n.p,{children:["2.) Copy ",(0,r.jsx)(n.code,{children:"CMakeLists.txt"})," and ",(0,r.jsx)(n.code,{children:"Onload.cpp"})," from ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/main/packages/react-native/ReactAndroid/cmake-utils/default-app-setup",children:"node_modules/react-native/ReactAndroid/cmake-utils/default-app-setup"})," into the ",(0,r.jsx)(n.code,{children:"android/app/src/main/jni"})," folder."]}),"\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"Onload.cpp"})," with the following entries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'// ...\n\n#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>\n#include <rncli.h>\n+ #include <NativeSampleModule.h>\n\n// ...\n\nstd::shared_ptr<TurboModule> cxxModuleProvider(\n    const std::string &name,\n    const std::shared_ptr<CallInvoker> &jsInvoker) {\n+ if (name == "NativeSampleModule") {\n+   return std::make_shared<facebook::react::NativeSampleModule>(jsInvoker);\n+ }\n  return nullptr;\n}\n\n// ...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"CMakeLists.txt"})," with the following entries, e.g., at the very end of that file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"// ...\n\n# This file includes all the necessary to let you build your application with the New Architecture.\ninclude(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)\n\n+ # App needs to add and link against tm (TurboModules) folder\n+ add_subdirectory(${REACT_ANDROID_DIR}/../../../tm/ tm_build)\n+ target_link_libraries(${CMAKE_PROJECT_NAME} tm)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will instantiante a ",(0,r.jsx)(n.code,{children:"NativeSampleModule"})," associated with the name ",(0,r.jsx)(n.code,{children:"NativeSampleModule"})," as defined in our JavaScript spec file earlier."]}),"\n",(0,r.jsx)(n.h2,{id:"4-c-native-code",children:"4. C++ Native Code"}),"\n",(0,r.jsx)(n.p,{children:"For the final step, you'll need to write some native code to connect the JavaScript side to the native platforms. This process requires two main steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.strong,{children:"Codegen"})," to see what it generates."]}),"\n",(0,r.jsx)(n.li,{children:"Write your native code, implementing the generated interfaces."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"run-codegen",children:"Run Codegen"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Follow the ",(0,r.jsx)(n.a,{href:"./pillars-codegen",children:"Codegen"})," guide for general information."]})}),"\n",(0,r.jsxs)(n.p,{children:["On iOS Codegen is run each time you execute in the ",(0,r.jsx)(n.code,{children:"ios"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"RCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can inspect the generated ",(0,r.jsx)(n.code,{children:"AppSpecsJSI.h"})," and ",(0,r.jsx)(n.code,{children:"AppSpecsJSI-generated.cpp"})," files inside the ",(0,r.jsx)(n.code,{children:"CxxTurboModulesGuide/ios/build/generated/ios"})," folder."]}),"\n",(0,r.jsxs)(n.p,{children:["Those files are prefixed with ",(0,r.jsx)(n.code,{children:"AppSpecs"})," as this matches the ",(0,r.jsx)(n.code,{children:"codegenConfig.name"})," parameter added earlier to ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"On Android Codegen is run each time you execute:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn android\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can inspect the generated ",(0,r.jsx)(n.code,{children:"AppSpecsJSI.h"})," and ",(0,r.jsx)(n.code,{children:"AppSpecsJSI-generated.cpp"})," files inside the ",(0,r.jsx)(n.code,{children:"CxxTurboModulesGuide/android/app/build/generated/source/codegen/jni"})," folder."]}),"\n",(0,r.jsx)(n.p,{children:"You only need to re-run codegen if you have changed your JavaScript spec."}),"\n",(0,r.jsx)(n.p,{children:"The C++ function generated for our JavaScript spec file looks like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual jsi::String reverseString(jsi::Runtime &rt, jsi::String input) = 0;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can directly work with the lower level ",(0,r.jsx)(n.code,{children:"jsi::"})," types - but for convience C++ Turbo Native Modules automatically ",(0,r.jsx)(n.code,{children:"bridge"})," into ",(0,r.jsx)(n.code,{children:"std::"})," types for you."]}),"\n",(0,r.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsxs)(n.p,{children:["Now create a ",(0,r.jsx)(n.code,{children:"NativeSampleModule.h"})," file with the following content:"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Due to current differences in the CMake and CocoaPod setup we need some creativity to include the correct Codegen header on each platform."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#pragma once\n\n#if __has_include(<React-Codegen/AppSpecsJSI.h>) // CocoaPod headers on Apple\n#include <React-Codegen/AppSpecsJSI.h>\n#elif __has_include("AppSpecsJSI.h") // CMake headers on Android\n#include "AppSpecsJSI.h"\n#endif\n#include <memory>\n#include <string>\n\nnamespace facebook::react {\n\nclass NativeSampleModule : public NativeSampleModuleCxxSpec<NativeSampleModule> {\n public:\n  NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker);\n\n  std::string reverseString(jsi::Runtime& rt, std::string input);\n};\n\n} // namespace facebook::react\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this case you can use any C++ type which ",(0,r.jsx)(n.code,{children:"bridges"})," to a ",(0,r.jsx)(n.code,{children:"jsi::String"})," - default or ",(0,r.jsx)(n.a,{href:"/docs/the-new-architecture/cxx-custom-types",children:"custom one"}),". You can't specify an incompatible type such as ",(0,r.jsx)(n.code,{children:"bool"}),", ",(0,r.jsx)(n.code,{children:"float"})," or ",(0,r.jsx)(n.code,{children:"std::vector<>"})," as it does not ",(0,r.jsx)(n.code,{children:"bridge"})," to ",(0,r.jsx)(n.code,{children:"jsi::String"})," and hence results in a compilation error."]}),"\n",(0,r.jsxs)(n.p,{children:["Now add a ",(0,r.jsx)(n.code,{children:"NativeSampleModule.cpp"})," file with an implementation for it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include "NativeSampleModule.h"\n\nnamespace facebook::react {\n\nNativeSampleModule::NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker)\n    : NativeSampleModuleCxxSpec(std::move(jsInvoker)) {}\n\nstd::string NativeSampleModule::reverseString(jsi::Runtime& rt, std::string input) {\n  return std::string(input.rbegin(), input.rend());\n}\n\n} // namespace facebook::react\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As we have added new C++ files run in the ",(0,r.jsx)(n.code,{children:"ios"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"RCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n"})}),"\n",(0,r.jsxs)(n.p,{children:["for iOS. In Xcode they appear under the ",(0,r.jsx)(n.code,{children:"Pods"})," target in the ",(0,r.jsx)(n.code,{children:"Development Pods \\ TurboModules"})," subfolder."]}),"\n",(0,r.jsx)(n.p,{children:"You should now be able to compile your app both on Android and iOS."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"CxxTurboModulesGuide\n\u251c\u2500\u2500 android\n\u2502   \u2514\u2500\u2500 app\n\u2502       \u2502\u2500\u2500 src\n\u2502       \u2502   \u2514\u2500\u2500 main\n\u2502       \u2502       \u2514\u2500\u2500 jni\n\u2502       \u2502           \u251c\u2500\u2500 CMakeLists.txt\n\u2502       \u2502           \u2514\u2500\u2500 OnLoad.cpp\n\u2502       \u2514\u2500\u2500 build.gradle (updated)\n\u251c\u2500\u2500 ios\n\u2502   \u2514\u2500\u2500 CxxTurboModulesGuide\n\u2502       \u2514\u2500\u2500 AppDelegate.mm (updated)\n\u251c\u2500\u2500 js\n\u2502   \u2514\u2500\u2500 App.tsx|jsx (updated)\n\u2514\u2500\u2500 tm\n    \u251c\u2500\u2500 CMakeLists.txt\n    \u251c\u2500\u2500 NativeSampleModule.h\n    \u251c\u2500\u2500 NativeSampleModule.cpp\n    \u251c\u2500\u2500 NativeSampleModule.ts|js\n    \u2514\u2500\u2500 TurboModules.podspec\n"})}),"\n",(0,r.jsx)(n.h2,{id:"5-adding-the-c-turbo-native-module-to-your-app",children:"5. Adding the C++ Turbo Native Module to your App"}),"\n",(0,r.jsxs)(n.p,{children:["For demo purposes we can update our app's ",(0,r.jsx)(n.code,{children:"App.tsx|jsx"})," with the following entries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"//...\nimport {\n  Colors,\n  DebugInstructions,\n  Header,\n  LearnMoreLinks,\n  ReloadInstructions,\n} from 'react-native/Libraries/NewAppScreen';\n+ import NativeSampleModule from './tm/NativeSampleModule';\n//...\n        <View\n          style={{\n            backgroundColor: isDarkMode ? Colors.black : Colors.white,\n          }}>\n+         <Section title=\"Cxx TurboModule\">\n+          NativeSampleModule.reverseString(...) ={' '}\n+          {NativeSampleModule.reverseString(\n+            'the quick brown fox jumps over the lazy dog'\n+          )}\n+         </Section>;\n          <Section title=\"Step One\">\n            Edit <Text style={styles.highlight}>App.tsx</Text> to change this\n            screen and then come back to see your edits.\n          </Section>\n//...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run the app to see your C++ Turbo Native Module in action!"}),"\n",(0,r.jsx)(n.h2,{id:"app-turbomoduleprovider-optional",children:"App TurboModuleProvider [Optional]"}),"\n",(0,r.jsx)(n.p,{children:"You can avoid some code duplication once you added multiple C++ Turbo Native Modules by declaring an AppTurboModuleProvider:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="AppTurboModuleProvider.h"',children:"#pragma once\n\n#include <ReactCommon/TurboModuleBinding.h>\n#include <memory>\n#include <string>\n\nnamespace facebook::react {\n\nclass AppTurboModuleProvider {\n public:\n  std::shared_ptr<TurboModule> getTurboModule(\n      const std::string& name,\n      std::shared_ptr<CallInvoker> jsInvoker) const;\n};\n\n} // namespace facebook::react\n"})}),"\n",(0,r.jsx)(n.p,{children:"And implementing it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="AppTurboModuleProvider.cpp"',children:'#include "AppTurboModuleProvider.h"\n#include "NativeSampleModule.h"\n\nnamespace facebook::react {\n\nstd::shared_ptr<TurboModule> AppTurboModuleProvider::getTurboModule(\n    const std::string& name,\n    std::shared_ptr<CallInvoker> jsInvoker) const {\n  if (name == "NativeSampleModule") {\n    return std::make_shared<facebook::react::NativeSampleModule>(jsInvoker);\n  }\n  // Other C++ Turbo Native Modules for you app\n  return nullptr;\n}\n\n} // namespace facebook::react\n'})}),"\n",(0,r.jsxs)(n.p,{children:["And then re-using it in ",(0,r.jsx)(n.code,{children:"OnLoad.cpp"})," for Android and ",(0,r.jsx)(n.code,{children:"AppDelegate.mm"})," for iOS, e.g., via:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"static facebook::react::AppTurboModuleProvider appTurboModuleProvider;\nreturn appTurboModuleProvider.getTurboModule(name, jsInvoker);\n"})}),"\n",(0,r.jsx)(n.p,{children:"in the corresponding functions."}),"\n",(0,r.jsx)(n.h2,{id:"calling-os-specific-apis",children:"Calling OS specific APIs"}),"\n",(0,r.jsxs)(n.p,{children:["You can still call OS specific functions in the compilation unit (e.g., ",(0,r.jsx)(n.code,{children:"NS/CF"})," APIs on Apple or ",(0,r.jsx)(n.code,{children:"Win32/WinRT"})," APIs on Windows) as long as the method signatures only use ",(0,r.jsx)(n.code,{children:"std::"})," or ",(0,r.jsx)(n.code,{children:"jsi::"})," types."]}),"\n",(0,r.jsxs)(n.p,{children:["For Apple specific APIs you need to change the extension of your implementation file from ",(0,r.jsx)(n.code,{children:".cpp"})," to ",(0,r.jsx)(n.code,{children:".mm"})," to be able to consume ",(0,r.jsx)(n.code,{children:"NS/CF"})," APIs."]}),"\n",(0,r.jsx)(n.h2,{id:"extending-c-turbo-native-modules",children:"Extending C++ Turbo Native Modules"}),"\n",(0,r.jsxs)(n.p,{children:["If you need to support some types that are not supported yet, have a look at ",(0,r.jsx)(n.a,{href:"/docs/the-new-architecture/cxx-custom-types",children:"this other guide"}),"."]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(27378),o=t(38944);const i={tabItem:"tabItem_wHwb"};var a=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&c(e,t,n[t]);return e};function p({children:e,hidden:n,className:t}){return r.createElement("div",u({role:"tabpanel",className:(0,o.Z)(i.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>J});var r=t(27378),o=t(38944),i=t(12112),a=t(3620),l=t(69490),s=t(14953),d=t(27886),c=t(7106),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&f(e,t,n[t]);if(m)for(var t of m(n))x.call(n,t)&&f(e,t,n[t]);return e},v=(e,n)=>p(e,h(n));function j(e){var n,t;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function y(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return j(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function w({value:e,tabValues:n}){return n.some((n=>n.value===e))}function S({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),o=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace(v(b({},t.location),{search:n.toString()}))}),[o,t])]}function C(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=y(e),[a,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=S({queryString:t,groupId:o}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,o]=(0,c.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:o}),m=(()=>{const e=null!=d?d:p;return w({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!w({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var M=t(14185);const N={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var k=Object.defineProperty,T=Object.defineProperties,A=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,E=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,R=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&E(e,t,n[t]);if(_)for(var t of _(n))I.call(n,t)&&E(e,t,n[t]);return e},P=(e,n)=>T(e,A(n));function D({className:e,block:n,selectedValue:t,selectValue:a,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),o=l[r].value;o!==t&&(d(n),a(o))},u=e=>{var n,t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;r=null!=(t=s[n])?t:s[s.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:i})=>r.createElement("li",P(R({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:u,onClick:c},i),{className:(0,o.Z)("tabs__item",N.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function L({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function V(e){const n=C(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N.tabList)},r.createElement(D,R(R({},e),n)),r.createElement(L,R(R({},e),n)))}function J(e){const n=(0,M.Z)();return r.createElement(V,R({key:String(n)},e),j(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(63445);const o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),a={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:o?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var r=t(27378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var r=t(27378);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:l},n)}}}]);