/*! For license information please see c1e04fa9.a5e5affb.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32669],{34026:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=n(24246),i=n(71670);const t={id:"appregistry",title:"AppRegistry"},d=void 0,l={id:"appregistry",title:"AppRegistry",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.72/appregistry.md",sourceDirName:".",slug:"/appregistry",permalink:"/docs/0.72/appregistry",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/appregistry.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"appregistry",title:"AppRegistry"},sidebar:"api",previous:{title:"Appearance",permalink:"/docs/0.72/appearance"},next:{title:"AppState",permalink:"/docs/0.72/appstate"}},c={},a=[{value:"Methods",id:"methods",level:2},{value:"<code>getAppKeys()</code>",id:"getappkeys",level:3},{value:"<code>getRegistry()</code>",id:"getregistry",level:3},{value:"<code>getRunnable()</code>",id:"getrunnable",level:3},{value:"<code>getSectionKeys()</code>",id:"getsectionkeys",level:3},{value:"<code>getSections()</code>",id:"getsections",level:3},{value:"<code>registerCancellableHeadlessTask()</code>",id:"registercancellableheadlesstask",level:3},{value:"<code>registerComponent()</code>",id:"registercomponent",level:3},{value:"<code>registerConfig()</code>",id:"registerconfig",level:3},{value:"<code>registerHeadlessTask()</code>",id:"registerheadlesstask",level:3},{value:"<code>registerRunnable()</code>",id:"registerrunnable",level:3},{value:"<code>registerSection()</code>",id:"registersection",level:3},{value:"<code>runApplication()</code>",id:"runapplication",level:3},{value:"<code>setComponentProviderInstrumentationHook()</code>",id:"setcomponentproviderinstrumentationhook",level:3},{value:"<code>setWrapperComponentProvider()</code>",id:"setwrappercomponentprovider",level:3},{value:"<code>startHeadlessTask()</code>",id:"startheadlesstask",level:3},{value:"<code>unmountApplicationComponentAtRootTag()</code>",id:"unmountapplicationcomponentatroottag",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:"AppConfig",id:"appconfig",level:3},{value:"Registry",id:"registry",level:3},{value:"Runnable",id:"runnable",level:3},{value:"Runnables",id:"runnables",level:3},{value:"Task",id:"task",level:3},{value:"TaskCanceller",id:"taskcanceller",level:3},{value:"TaskCancelProvider",id:"taskcancelprovider",level:3},{value:"TaskProvider",id:"taskprovider",level:3}];function h(e){const s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",h1:"h1",h2:"h2",h3:"h3",a:"a",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"banner-native-code-required",children:[(0,r.jsx)("h3",{children:"Project with Native Code Required"}),(0,r.jsx)("p",{children:(0,r.jsxs)(s.p,{children:["If you are using the managed Expo workflow there is only ever one entry component registered with ",(0,r.jsx)("code",{children:"AppRegistry"})," and it is handled automatically (or through ",(0,r.jsx)("a",{href:"https://docs.expo.dev/versions/latest/sdk/register-root-component/",children:"registerRootComponent"}),"). You do not need to use this API."]})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"AppRegistry"})," is the JS entry point to running all React Native apps. App root components should register themselves with ",(0,r.jsx)(s.code,{children:"AppRegistry.registerComponent"}),", then the native system can load the bundle for the app and then actually run the app when it's ready by invoking ",(0,r.jsx)(s.code,{children:"AppRegistry.runApplication"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import {Text, AppRegistry} from 'react-native';\n\nconst App = () => (\n  <View>\n    <Text>App1</Text>\n  </View>\n);\n\nAppRegistry.registerComponent('Appname', () => App);\n"})}),"\n",(0,r.jsxs)(s.p,{children:['To "stop" an application when a view should be destroyed, call ',(0,r.jsx)(s.code,{children:"AppRegistry.unmountApplicationComponentAtRootTag"})," with the tag that was passed into ",(0,r.jsx)(s.code,{children:"runApplication"}),". These should always be used as a pair."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"AppRegistry"})," should be required early in the ",(0,r.jsx)(s.code,{children:"require"})," sequence to make sure the JS execution environment is setup before other modules are required."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"getappkeys",children:(0,r.jsx)(s.code,{children:"getAppKeys()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static getAppKeys(): string[];\n"})}),"\n",(0,r.jsx)(s.p,{children:"Returns an array of strings."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getregistry",children:(0,r.jsx)(s.code,{children:"getRegistry()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static getRegistry(): {sections: string[]; runnables: Runnable[]};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns a ",(0,r.jsx)(s.a,{href:"appregistry#registry",children:"Registry"})," object."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getrunnable",children:(0,r.jsx)(s.code,{children:"getRunnable()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static getRunnable(appKey: string): : Runnable | undefined;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns a ",(0,r.jsx)(s.a,{href:"appregistry#runnable",children:"Runnable"})," object."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"})]})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getsectionkeys",children:(0,r.jsx)(s.code,{children:"getSectionKeys()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static getSectionKeys(): string[];\n"})}),"\n",(0,r.jsx)(s.p,{children:"Returns an array of strings."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getsections",children:(0,r.jsx)(s.code,{children:"getSections()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static getSections(): Record<string, Runnable>;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns a ",(0,r.jsx)(s.a,{href:"appregistry#runnables",children:"Runnables"})," object."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registercancellableheadlesstask",children:(0,r.jsx)(s.code,{children:"registerCancellableHeadlessTask()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static registerCancellableHeadlessTask(\n  taskKey: string,\n  taskProvider: TaskProvider,\n  taskCancelProvider: TaskCancelProvider,\n);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskKey",(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The native id for this task instance that was used when startHeadlessTask was called."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskProvider",(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"appregistry#taskprovider",children:"TaskProvider"})}),(0,r.jsx)(s.td,{children:"A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskCancelProvider",(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"appregistry#taskcancelprovider",children:"TaskCancelProvider"})}),(0,r.jsx)(s.td,{children:"a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP."})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registercomponent",children:(0,r.jsx)(s.code,{children:"registerComponent()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static registerComponent(\n  appKey: string,\n  getComponentFunc: ComponentProvider,\n  section?: boolean,\n): string;\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["componentProvider ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"ComponentProvider"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"section"}),(0,r.jsx)(s.td,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registerconfig",children:(0,r.jsx)(s.code,{children:"registerConfig()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static registerConfig(config: AppConfig[]);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["config ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"appregistry#appconfig",children:"AppConfig"}),"[]"]})]})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registerheadlesstask",children:(0,r.jsx)(s.code,{children:"registerHeadlessTask()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static registerHeadlessTask(\n  taskKey: string,\n  taskProvider: TaskProvider,\n);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Register a headless task. A headless task is a bit of code that runs without a UI."}),"\n",(0,r.jsx)(s.p,{children:"This is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskKey ",(0,r.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The native id for this task instance that was used when startHeadlessTask was called."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskProvider ",(0,r.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"appregistry#taskprovider",children:"TaskProvider"})}),(0,r.jsx)(s.td,{children:"A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context."})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registerrunnable",children:(0,r.jsx)(s.code,{children:"registerRunnable()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static registerRunnable(appKey: string, func: Runnable): string;\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["run ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"function"})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registersection",children:(0,r.jsx)(s.code,{children:"registerSection()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static registerSection(\n  appKey: string,\n  component: ComponentProvider,\n);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["component ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"ComponentProvider"})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"runapplication",children:(0,r.jsx)(s.code,{children:"runApplication()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static runApplication(appKey: string, appParameters: any): void;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Loads the JavaScript bundle and runs the app."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appParameters ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"any"})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setcomponentproviderinstrumentationhook",children:(0,r.jsx)(s.code,{children:"setComponentProviderInstrumentationHook()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static setComponentProviderInstrumentationHook(\n  hook: ComponentProviderInstrumentationHook,\n);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["hook ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"function"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:["A valid ",(0,r.jsx)(s.code,{children:"hook"})," function accepts the following as arguments:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["component ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"ComponentProvider"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["scopedPerformanceLogger ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"IPerformanceLogger"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"The function must also return a React Component."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setwrappercomponentprovider",children:(0,r.jsx)(s.code,{children:"setWrapperComponentProvider()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static setWrapperComponentProvider(\n  provider: WrapperComponentProvider,\n);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["provider ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"ComponentProvider"})]})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"startheadlesstask",children:(0,r.jsx)(s.code,{children:"startHeadlessTask()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static startHeadlessTask(\n  taskId: number,\n  taskKey: string,\n  data: any,\n);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Only called from native code. Starts a headless task."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskId ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"The native id for this task instance to keep track of its execution."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["taskKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"The key for the task to start."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["data ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"The data to pass to the task."})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"unmountapplicationcomponentatroottag",children:(0,r.jsx)(s.code,{children:"unmountApplicationComponentAtRootTag()"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"static unmountApplicationComponentAtRootTag(rootTag: number);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Stops an application when a view should be destroyed."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["rootTag ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"number"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,r.jsx)(s.h3,{id:"appconfig",children:"AppConfig"}),"\n",(0,r.jsxs)(s.p,{children:["Application configuration for the ",(0,r.jsx)(s.code,{children:"registerConfig"})," method."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"object"})})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Properties:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["appKey ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"component"}),(0,r.jsx)(s.td,{children:"ComponentProvider"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"run"}),(0,r.jsx)(s.td,{children:"function"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"section"}),(0,r.jsx)(s.td,{children:"boolean"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," Every config is expected to set either ",(0,r.jsx)(s.code,{children:"component"})," or ",(0,r.jsx)(s.code,{children:"run"})," function."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"registry",children:"Registry"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"object"})})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Properties:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"runnables"}),(0,r.jsxs)(s.td,{children:["array of ",(0,r.jsx)(s.a,{href:"appregistry#runnable",children:"Runnables"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sections"}),(0,r.jsx)(s.td,{children:"array of strings"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"runnable",children:"Runnable"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"object"})})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Properties:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"component"}),(0,r.jsx)(s.td,{children:"ComponentProvider"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"run"}),(0,r.jsx)(s.td,{children:"function"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"runnables",children:"Runnables"}),"\n",(0,r.jsxs)(s.p,{children:["An object with key of ",(0,r.jsx)(s.code,{children:"appKey"})," and value of type of ",(0,r.jsx)(s.a,{href:"appregistry#runnable",children:(0,r.jsx)(s.code,{children:"Runnable"})}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"object"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"task",children:"Task"}),"\n",(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.code,{children:"Task"})," is a function that accepts any data as argument and returns a Promise that resolves to ",(0,r.jsx)(s.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"function"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"taskcanceller",children:"TaskCanceller"}),"\n",(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.code,{children:"TaskCanceller"})," is a function that accepts no argument and returns void."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"function"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"taskcancelprovider",children:"TaskCancelProvider"}),"\n",(0,r.jsxs)(s.p,{children:["A valid ",(0,r.jsx)(s.code,{children:"TaskCancelProvider"})," is a function that returns a ",(0,r.jsx)(s.a,{href:"appregistry#taskcanceller",children:(0,r.jsx)(s.code,{children:"TaskCanceller"})}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"function"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"taskprovider",children:"TaskProvider"}),"\n",(0,r.jsxs)(s.p,{children:["A valid ",(0,r.jsx)(s.code,{children:"TaskProvider"})," is a function that returns a ",(0,r.jsx)(s.a,{href:"appregistry#task",children:(0,r.jsx)(s.code,{children:"Task"})}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"function"})})})]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},71426:(e,s,n)=>{var r=n(27378),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var r,t={},a=null,h=null;for(r in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(h=s.ref),s)d.call(s,r)&&!c.hasOwnProperty(r)&&(t[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===t[r]&&(t[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:h,props:t,_owner:l.current}}s.Fragment=t,s.jsx=a,s.jsxs=a},24246:(e,s,n)=>{e.exports=n(71426)},71670:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>t});var r=n(27378);const i=r.createContext({});function t(e){const s=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||d:t(e),r.createElement(i.Provider,{value:l},s)}}}]);