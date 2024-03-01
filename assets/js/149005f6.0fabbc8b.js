/*! For license information please see 149005f6.0fabbc8b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[46126],{57082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(24246),r=n(71670),s=n(48375),i=n(86386),l=n(11674);const o={id:"appstate",title:"AppState"},c=void 0,d={id:"appstate",title:"AppState",description:"AppState can tell you if the app is in the foreground or background, and notify you when the state changes.",source:"@site/versioned_docs/version-0.70/appstate.md",sourceDirName:".",slug:"/appstate",permalink:"/docs/0.70/appstate",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/appstate.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"appstate",title:"AppState"},sidebar:"api",previous:{title:"AppRegistry",permalink:"/docs/0.70/appregistry"},next:{title:"DevSettings",permalink:"/docs/0.70/devsettings"}},u={},p=[{value:"App States",id:"app-states",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>change</code>",id:"change",level:3},{value:"<code>memoryWarning</code>",id:"memorywarning",level:3},{value:'<code>focus</code> <div class="label android">Android</div>',id:"focus-android",level:3},{value:'<code>blur</code> <div class="label android">Android</div>',id:"blur-android",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>currentState</code>",id:"currentstate",level:3}];function h(e){const t=Object.assign({p:"p",code:"code",h3:"h3",ul:"ul",li:"li",a:"a",h2:"h2",div:"div",hr:"hr",h1:"h1",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"AppState"})," can tell you if the app is in the foreground or background, and notify you when the state changes."]}),"\n",(0,a.jsx)(t.p,{children:"AppState is frequently used to determine the intent and proper behavior when handling push notifications."}),"\n",(0,a.jsx)(t.h3,{id:"app-states",children:"App States"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"active"})," - The app is running in the foreground"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"background"})," - The app is running in the background. The user is either:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"in another app"}),"\n",(0,a.jsx)(t.li,{children:"on the home screen"}),"\n",(0,a.jsxs)(t.li,{children:["[Android] on another ",(0,a.jsx)(t.code,{children:"Activity"})," (even if it was launched by your app)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["[iOS] ",(0,a.jsx)(t.code,{children:"inactive"})," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the multitasking view, opening the Notification Center or in the event of an incoming call."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["For more information, see ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle",children:"Apple's documentation"})]}),"\n",(0,a.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsxs)(t.p,{children:["To see the current state, you can check ",(0,a.jsx)(t.code,{children:"AppState.currentState"}),", which will be kept up-to-date. However, ",(0,a.jsx)(t.code,{children:"currentState"})," will be null at launch while ",(0,a.jsx)(t.code,{children:"AppState"})," retrieves it over the bridge."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"syntax",queryString:!0,defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,a.jsxs)(i.Z,{value:"functional",children:[(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%5Cn%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20subscription%20%3D%20AppState.addEventListener(%5C%22change%5C%22%2C%20nextAppState%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20if%20(%5Cn%20%20%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%5Cn%20%20%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%5C%22active%5C%22%5Cn%20%20%20%20%20%20)%20%7B%5Cn%20%20%20%20%20%20%20%20console.log(%5C%22App%20has%20come%20to%20the%20foreground!%5C%22)%3B%5Cn%20%20%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%20%20appState.current%20%3D%20nextAppState%3B%5Cn%20%20%20%20%20%20setAppStateVisible(appState.current)%3B%5Cn%20%20%20%20%20%20console.log(%5C%22AppState%5C%22%2C%20appState.current)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20subscription.remove()%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AppStateExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),(0,a.jsxs)(t.p,{children:["If you don't want to see the AppState update from ",(0,a.jsx)(t.code,{children:"active"})," to ",(0,a.jsx)(t.code,{children:"inactive"})," on iOS you can remove the state variable and use the ",(0,a.jsx)(t.code,{children:"appState.current"})," value."]})]}),(0,a.jsx)(i.Z,{value:"classical",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20AppStateExample%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20appState%3A%20AppState.currentState%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.appStateSubscription%20%3D%20AppState.addEventListener(%5Cn%20%20%20%20%20%20%5C%22change%5C%22%2C%5Cn%20%20%20%20%20%20nextAppState%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(%5Cn%20%20%20%20%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%5Cn%20%20%20%20%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%5C%22active%5C%22%5Cn%20%20%20%20%20%20%20%20)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20console.log(%5C%22App%20has%20come%20to%20the%20foreground!%5C%22)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.appStateSubscription.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AppStateExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsxs)(t.p,{children:['This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',(0,a.jsx)(t.code,{children:"active"})," state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(t.h3,{id:"change",children:(0,a.jsx)(t.code,{children:"change"})}),"\n",(0,a.jsxs)(t.p,{children:["This event is received when the app state has changed. The listener is called with one of ",(0,a.jsx)(t.a,{href:"appstate#app-states",children:"the current app state values"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"memorywarning",children:(0,a.jsx)(t.code,{children:"memoryWarning"})}),"\n",(0,a.jsx)(t.p,{children:"This event is used in the need of throwing memory warning or releasing it."}),"\n",(0,a.jsxs)(t.h3,{id:"focus-android",children:[(0,a.jsx)(t.code,{children:"focus"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsx)(t.p,{children:"Received when the app gains focus (the user is interacting with the app)."}),"\n",(0,a.jsxs)(t.h3,{id:"blur-android",children:[(0,a.jsx)(t.code,{children:"blur"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsxs)(t.p,{children:["Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",(0,a.jsx)(t.a,{href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer",children:"notification drawer"}),". ",(0,a.jsx)(t.code,{children:"AppState"})," won't change but the ",(0,a.jsx)(t.code,{children:"blur"})," event will get fired."]}),"\n",(0,a.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(t.h3,{id:"addeventlistener",children:(0,a.jsx)(t.code,{children:"addEventListener()"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"addEventListener(eventType, listener);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Sets up a function that will be called whenever the specified event type on AppState occurs. Valid values for ",(0,a.jsx)(t.code,{children:"eventType"})," are\n",(0,a.jsx)(t.a,{href:"#events",children:"listed above"}),". Returns the ",(0,a.jsx)(t.code,{children:"EventSubscription"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"removeeventlistener",children:(0,a.jsx)(t.code,{children:"removeEventListener()"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"removeEventListener(eventType, listener);\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Deprecated."})," Use the ",(0,a.jsx)(t.code,{children:"remove()"})," method on the ",(0,a.jsx)(t.code,{children:"EventSubscription"})," returned by ",(0,a.jsx)(t.a,{href:"#addeventlistener",children:(0,a.jsx)(t.code,{children:"addEventListener()"})}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(t.h3,{id:"currentstate",children:(0,a.jsx)(t.code,{children:"currentState"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"AppState.currentState;\n"})})]})}const v=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const s={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};function p({children:e,hidden:t,className:n}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(s.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(27378),r=n(38944),s=n(12112),i=n(3620),l=n(69490),o=n(14953),c=n(27886),d=n(7106),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&m(e,n,t[n]);if(v)for(var n of v(t))b.call(t,n)&&m(e,n,t[n]);return e},g=(e,t)=>p(e,h(t));function x(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function y(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return x(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j({value:e,tabValues:t}){return t.some((t=>t.value===e))}function w({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(g(C({},n.location),{search:t.toString()}))}),[r,n])]}function S(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=y(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=w({queryString:n,groupId:r}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),v=(()=>{const e=null!=c?c:p;return j({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var A=n(14185);const D={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var k=Object.defineProperty,E=Object.defineProperties,B=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&V(e,n,t[n]);if(O)for(var n of O(t))_.call(t,n)&&V(e,n,t[n]);return e},L=(e,t)=>E(e,B(t));function P({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),r=l[a].value;r!==n&&(c(t),i(r))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=null!=(t=o[n])?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=null!=(n=o[t])?n:o[o.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:s})=>a.createElement("li",L(I({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:d},s),{className:(0,r.Z)("tabs__item",D.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function N({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function q(e){const t=S(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",D.tabList)},a.createElement(P,I(I({},e),t)),a.createElement(N,I(I({},e),t)))}function R(e){const t=(0,A.Z)();return a.createElement(q,I({key:String(t)},e),x(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,s={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!o.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>s});var a=n(27378);const r=a.createContext({});function s(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:l},t)}}}]);