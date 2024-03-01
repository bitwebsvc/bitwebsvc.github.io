/*! For license information please see 0ba118cc.9529fbd7.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50788],{61647:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(24246),a=n(71670);function s(e){const t=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.p,{children:["This documentation is still ",(0,r.jsx)(t.strong,{children:"experimental"})," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"discussion inside the working group"})," for this page."]}),(0,r.jsxs)(t.p,{children:["Moreover, it contains several ",(0,r.jsx)(t.strong,{children:"manual steps"}),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."]})]})}const i=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},79109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(24246),a=n(71670),s=n(48375),i=n(86386),o=n(11674),l=n(61647);const c={id:"cxx-custom-types",title:"Supporting Custom C++ Types"},u=void 0,d={id:"the-new-architecture/cxx-custom-types",title:"Supporting Custom C++ Types",description:"By default C++ Turbo Native Modules support bridging functionality for most std:: standard types.",source:"@site/versioned_docs/version-0.73/the-new-architecture/cxx-custom-types.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/cxx-custom-types",permalink:"/docs/the-new-architecture/cxx-custom-types",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/the-new-architecture/cxx-custom-types.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"cxx-custom-types",title:"Supporting Custom C++ Types"},sidebar:"docs",previous:{title:"C++ Turbo Native Modules",permalink:"/docs/the-new-architecture/cxx-cxxturbomodules"},next:{title:"What Backward Compatibility Is",permalink:"/docs/the-new-architecture/backward-compatibility"}},p={},h=[{value:"Example: Int64",id:"example-int64",level:2},{value:"Any custom type",id:"any-custom-type",level:2},{value:"Custom structs",id:"custom-structs",level:2},{value:"Manually typed",id:"manually-typed",level:3},{value:"Struct generator",id:"struct-generator",level:3},{value:"Member types",id:"member-types",level:4},{value:"Base class",id:"base-class",level:4}];function m(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",em:"em",h3:"h3",strong:"strong",h4:"h4"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsxs)(t.p,{children:["By default C++ Turbo Native Modules support ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/react/bridging",children:"bridging functionality"})," for most ",(0,r.jsx)(t.code,{children:"std::"})," standard types."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to add support for new / custom types in your app / library, you only need to provide the necessary ",(0,r.jsx)(t.code,{children:"bridging"})," header file."]}),"\n",(0,r.jsxs)(t.p,{children:["This guide continues the previous ",(0,r.jsx)(t.a,{href:"./cxx-cxxturbomodules",children:"C++ Turbo Native Modules"})," section."]}),"\n",(0,r.jsx)(t.h2,{id:"example-int64",children:"Example: Int64"}),"\n",(0,r.jsxs)(t.p,{children:["C++ Turbo Native Modules don't support ",(0,r.jsx)(t.code,{children:"int64_t"})," numbers yet - because JavaScript doesn't support numbers greater ",(0,r.jsx)(t.code,{children:"2^53"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["We can't represent numbers > ",(0,r.jsx)(t.code,{children:"2^53"})," as JavaScript ",(0,r.jsx)(t.code,{children:"number"}),"'s - but we can represent them as JavaScript ",(0,r.jsx)(t.code,{children:"string"}),"'s and automatically convert (aka. ",(0,r.jsx)(t.code,{children:"bridge"}),") them to C++ ",(0,r.jsx)(t.code,{children:"int64_t"}),"'s by creating a custom Bridging header file called ",(0,r.jsx)(t.code,{children:"Int64.h"})," in the ",(0,r.jsx)(t.code,{children:"tm"})," folder:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",metastring:"Int64.h",children:'#pragma once\n\n#include <react/bridging/Bridging.h>\n\nnamespace facebook::react {\n\ntemplate <>\nstruct Bridging<int64_t> {\n  static int64_t fromJs(jsi::Runtime &rt, const jsi::String &value) {\n    try {\n      size_t pos;\n      auto str = value.utf8(rt);\n      auto num = std::stoll(str, &pos);\n      if (pos != str.size()) {\n        throw std::invalid_argument("Invalid number"); // don\'t support alphanumeric strings\n      }\n      return num;\n    } catch (const std::logic_error &e) {\n      throw jsi::JSError(rt, e.what());\n    }\n  }\n\n  static jsi::String toJs(jsi::Runtime &rt, int64_t value) {\n    return bridging::toJs(rt, std::to_string(value));\n  }\n};\n\n} // namespace facebook::react\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The key components for your custom ",(0,r.jsx)(t.code,{children:"bridging"})," header are:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Explicit specialization of the ",(0,r.jsx)(t.code,{children:"Bridging"})," struct for your custom type, ",(0,r.jsx)(t.code,{children:"int64_t"})," in this case"]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"fromJs"})," function to convert from ",(0,r.jsx)(t.code,{children:"jsi::"})," types to your custom type"]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"toJS"})," function to convert from your custom type to ",(0,r.jsx)(t.code,{children:"jsi:"})," types"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Omitting either ",(0,r.jsx)(t.code,{children:"fromJS"})," or ",(0,r.jsx)(t.code,{children:"toJS"})," would make you ",(0,r.jsx)(t.code,{children:"bridging"})," header either ",(0,r.jsx)(t.em,{children:"readonly"})," or ",(0,r.jsx)(t.em,{children:"writeonly"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Now you can add the following function to your JavaScript spec:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"turbomodule-specs",queryString:!0,defaultValue:o.Z.defaultJavaScriptSpecLanguages,values:o.Z.javaScriptSpecLanguages,children:[(0,r.jsx)(i.Z,{value:"typescript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',children:"   // ...\n   readonly cubicRoot: (input: string) => number;\n   // ..\n"})})}),(0,r.jsx)(i.Z,{value:"flow",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="NativeSampleModule.js"',children:"   // ...\n   +cubicRoot: (input: string) => number;\n   // ..\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Declare it in your ",(0,r.jsx)(t.code,{children:"NativeSampleModule.h"})," file and include the ",(0,r.jsx)(t.code,{children:"Int64.h"})," header file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'//...\n#include "Int64.h"\n//...\nint32_t cubicRoot(jsi::Runtime& rt, int64_t input);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["And implement it in ",(0,r.jsx)(t.code,{children:"NativeSampleModule.cpp"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"//...\n#include <cmath>\n//...\nint32_t NativeSampleModule::cubicRoot(jsi::Runtime& rt, int64_t input) {\n    return std::cbrt(input);\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"In your app you can call this new native function via:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"<Section title=\"Cxx TurboModule\">\n  NativeSampleModule.cubicRoot(...) ={' '}\n  {JSON.stringify(\n    NativeSampleModule.cubicRoot('9223372036854775807'),\n  )}\n</Section>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["which should return ",(0,r.jsx)(t.code,{children:"2097152"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"any-custom-type",children:"Any custom type"}),"\n",(0,r.jsxs)(t.p,{children:["Similar to the example above you can now write custom ",(0,r.jsx)(t.code,{children:"bridging"})," functionality for any custom C++ type you want to expose to react-native. E.g., you can add support for ",(0,r.jsx)(t.code,{children:"folly::StringPiece"}),", ",(0,r.jsx)(t.code,{children:"QString"}),", ",(0,r.jsx)(t.code,{children:"boost::filesystem::path"}),", ",(0,r.jsx)(t.code,{children:"absl::optional"})," or any other type you need to support in your C++ Turbo Native Modules."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",metastring:'title="Path.h"',children:"#pragma once\n\n#include <react/bridging/Bridging.h>\n#include <boost/filesystem.hpp>\n\nnamespace facebook::react {\n\ntemplate<>\nstruct Bridging<boost::filesystem::path> {\n  static boost::filesystem::path fromJs(jsi::Runtime& rt, const std::string& value) { // auto-bridge from jsi::String to std::string\n    return boost::filesystem::path(value);\n  }\n\n  static jsi::String toJs(jsi::Runtime& rt, boost::filesystem::path value) {\n    return bridging::toJs(rt, value.string());\n  }\n};\n\n} // namespace facebook::react\n"})}),"\n",(0,r.jsx)(t.h2,{id:"custom-structs",children:"Custom structs"}),"\n",(0,r.jsx)(t.p,{children:"You can use the same approach for you custom types in JavaScript such as this one:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"export type CustomType = {\n  key: string,\n  enabled: boolean,\n  time?: number,\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"which can be exposed to your C++ Turbo Native Module via"}),"\n",(0,r.jsxs)(s.Z,{groupId:"turbomodule-specs",queryString:!0,defaultValue:o.Z.defaultJavaScriptSpecLanguages,values:o.Z.javaScriptSpecLanguages,children:[(0,r.jsx)(i.Z,{value:"typescript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',children:"   // ...\n   readonly passCustomType: (input: CustomType) => CustomType;\n   // ..\n"})})}),(0,r.jsx)(i.Z,{value:"flow",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="NativeSampleModule.js"',children:"   // ...\n   +passCustomType: (input: CustomType) => CustomType;\n   // ..\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"manually-typed",children:"Manually typed"}),"\n",(0,r.jsxs)(t.p,{children:["To use this custom type in C++, you need to define your custom Struct and ",(0,r.jsx)(t.code,{children:"bridging"})," function e.g., directly in ",(0,r.jsx)(t.code,{children:"NativeSampleModule.h"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'struct CustomType {\n  std::string key;\n  bool enabled;\n  std::optional<int32_t> time;\n};\n\ntemplate <>\nstruct Bridging<CustomType> {\n  static CustomType fromJs(\n      jsi::Runtime &rt,\n      const jsi::Object &value,\n      const std::shared_ptr<CallInvoker> &jsInvoker) {\n    return CustomType{\n        bridging::fromJs<std::string>(\n            rt, value.getProperty(rt, "key"), jsInvoker),\n        bridging::fromJs<bool>(\n            rt, value.getProperty(rt, "enabled"), jsInvoker),\n        bridging::fromJs<std::optional<int32_t>>(\n            rt, value.getProperty(rt, "time"), jsInvoker)};\n  }\n\n  static jsi::Object toJs(jsi::Runtime &rt, const CustomType &value) {\n    auto result = facebook::jsi::Object(rt);\n    result.setProperty(rt, "key", bridging::toJs(rt, value.key));\n    result.setProperty(rt, "enabled", bridging::toJs(rt, value.enabled));\n    if (value.time) {\n      result.setProperty(rt, "time", bridging::toJs(rt, value.time.value()));\n    }\n    return result;\n  }\n};\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Declare it in your ",(0,r.jsx)(t.code,{children:"NativeSampleModule.h"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"  CustomType passCustomType(jsi::Runtime& rt, CustomType input);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Implement it in ",(0,r.jsx)(t.code,{children:"NativeSampleModule.cpp"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'CustomType NativeSampleModule::passCustomType(jsi::Runtime& rt, CustomType input) {\n  input.key = "1909";\n  input.enabled = !input.enabled;\n  input.time = 42;\n  return input;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"In your app you can call this new native function via:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"<Section title=\"Cxx TurboModule\">\n  NativeSampleModule.passCustomType(...) ={' '}\n  {JSON.stringify(\n    NativeSampleModule.passCustomType({\n      key: '123',\n      enabled: true,\n      time: undefined,\n    }),\n  )}\n</Section>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["which should return ",(0,r.jsx)(t.code,{children:'{"key":"1909","enabled":false","time":42}'}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This works - but is quite complex."}),"\n",(0,r.jsx)(t.h3,{id:"struct-generator",children:"Struct generator"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/the-new-architecture/pillars-codegen",children:(0,r.jsx)(t.strong,{children:"Codegen"})})," for C++ Turbo Native Modules does support struct generators, so you can simplify the code above in ",(0,r.jsx)(t.code,{children:"NativeSampleModule.h"})," to:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"using CustomType = NativeSampleModuleBaseCustomType<std::string, bool, std::optional<int32_t>>;\ntemplate <>\nstruct Bridging<CustomType>\n    : NativeSampleModuleBaseCustomTypeBridging<std::string, bool, std::optional<int32_t>> {};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"using CustomType"})," you declare a name for your concrete struct."]}),"\n",(0,r.jsx)(t.h4,{id:"member-types",children:"Member types"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"std::string, bool, std::optional<int32_t>"})," you define the property types of the struct members in the order they were defined in your JavaScript spec. The ",(0,r.jsx)(t.strong,{children:"order matters"}),". The ",(0,r.jsx)(t.em,{children:"1st"})," template argument refers to the ",(0,r.jsx)(t.em,{children:"1st"})," data type of the struct, and so forth."]}),"\n",(0,r.jsx)(t.p,{children:"Without any custom conversion functions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["you can only ",(0,r.jsx)(t.code,{children:"bridge"})," a JS string to a ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/AString.h",children:"std::string"})," and a JS boolean to a ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/Bool.h",children:"bool"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["but you can choose different JS ",(0,r.jsx)(t.code,{children:"number"})," ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/Number.h",children:"representations in C++"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"base-class",children:"Base class"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NativeSampleModuleBaseCustomType"})," is an auto-generated template in your ",(0,r.jsx)(t.code,{children:"AppSpecsJSI.h"})," which name is generated by:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NativeSampleModule"})," (name of C++ Turbo Native Module in the JavaScript spec) +"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Base"})," (constant) +"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"CustomType"})," (name of type in the JavaScript spec)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The same naming schema applies to the necessary ",(0,r.jsx)(t.code,{children:"Bridging"})," struct which is defined via ",(0,r.jsx)(t.code,{children:"struct Bridging<CustomType>"}),"."]})]})}const g=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(27378),a=n(38944);const s={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&u(e,n,t[n]);return e};function p({children:e,hidden:t,className:n}){return r.createElement("div",d({role:"tabpanel",className:(0,a.Z)(s.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(27378),a=n(38944),s=n(12112),i=n(3620),o=n(69490),l=n(14953),c=n(27886),u=n(7106),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&y(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&y(e,n,t[n]);return e},f=(e,t)=>p(e,h(t));function j(e){var t,n;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return j(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function S({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(f(v({},n.location),{search:t.toString()}))}),[a,n])]}function C(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=x(e),[i,l]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=S({queryString:n,groupId:a}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,u.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:p;return w({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!w({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var k=n(14185);const T={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var N=Object.defineProperty,O=Object.defineProperties,_=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&E(e,n,t[n]);if(I)for(var n of I(t))J.call(t,n)&&E(e,n,t[n]);return e},R=(e,t)=>O(e,_(t));function B({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),i(a))},d=e=>{var t,n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=null!=(n=l[t])?n:l[l.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:s})=>r.createElement("li",R(P({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>l.push(e),onKeyDown:d,onClick:u},s),{className:(0,a.Z)("tabs__item",T.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function Z({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function V(e){const t=C(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",T.tabList)},r.createElement(B,P(P({},e),t)),r.createElement(Z,P(P({},e),t)))}function A(e){const t=(0,k.Z)();return r.createElement(V,P({key:String(t)},e),j(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:a?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var r=n(27378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var r=n(27378);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:s(e),r.createElement(a.Provider,{value:o},t)}}}]);