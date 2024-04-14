/*! For license information please see 0602bf05.b39dd1cd.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51888],{72899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=t(24246),r=t(71670),s=t(48375),i=t(86386),l=t(11674);const o={id:"keyboard",title:"Keyboard"},d=void 0,c={id:"keyboard",title:"Keyboard",description:"Keyboard module to control keyboard events.",source:"@site/versioned_docs/version-0.70/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/0.70/keyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/keyboard.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"InteractionManager",permalink:"/docs/0.70/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/0.70/layoutanimation"}},u={},h=[{value:"Usage",id:"usage",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>dismiss()</code>",id:"dismiss",level:3},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",level:3}];function p(e){const n=Object.assign({p:"p",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",blockquote:"blockquote",a:"a"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Keyboard"})," module to control keyboard events."]}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it."}),"\n",(0,a.jsxs)(s.Z,{groupId:"syntax",queryString:!0,defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,a.jsx)(i.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Keyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Example%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BkeyboardStatus%2C%20setKeyboardStatus%5D%20%3D%20useState(undefined)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20showSubscription%20%3D%20Keyboard.addListener(%5C%22keyboardDidShow%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setKeyboardStatus(%5C%22Keyboard%20Shown%5C%22)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20const%20hideSubscription%20%3D%20Keyboard.addListener(%5C%22keyboardDidHide%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setKeyboardStatus(%5C%22Keyboard%20Hidden%5C%22)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20showSubscription.remove()%3B%5Cn%20%20%20%20%20%20hideSubscription.remove()%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D'Click%20here%E2%80%A6'%5Cn%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%7BkeyboardStatus%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2036%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(i.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Keyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20Example%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20keyboardStatus%3A%20undefined%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.keyboardDidShowSubscription%20%3D%20Keyboard.addListener(%5Cn%20%20%20%20%20%20'keyboardDidShow'%2C%5Cn%20%20%20%20%20%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7B%20keyboardStatus%3A%20'Keyboard%20Shown'%20%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.keyboardDidHideSubscription%20%3D%20Keyboard.addListener(%5Cn%20%20%20%20%20%20'keyboardDidHide'%2C%5Cn%20%20%20%20%20%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7B%20keyboardStatus%3A%20'Keyboard%20Hidden'%20%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.keyboardDidShowSubscription.remove()%3B%5Cn%20%20%20%20this.keyboardDidHideSubscription.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20placeholder%3D'Click%20here%E2%80%A6'%5Cn%20%20%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.keyboardStatus%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2036%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"addlistener",children:(0,a.jsx)(n.code,{children:"addListener()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static addListener(eventName, callback)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"addListener"})," function connects a JavaScript function to an identified native keyboard notification event."]}),"\n",(0,a.jsx)(n.p,{children:"This function then returns the reference to the listener."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["eventName ",(0,a.jsx)("div",{className:"label basic two-lines required",children:"Required"})]}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"The string that identifies the event you're listening for. See the list below."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["callback ",(0,a.jsx)("div",{className:"label basic two-lines required",children:"Required"})]}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"The function to be called when the event fires"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"eventName"})})}),"\n",(0,a.jsx)(n.p,{children:"This can be any of the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"keyboardWillShow"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"keyboardDidShow"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"keyboardWillHide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"keyboardDidHide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"keyboardWillChangeFrame"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"keyboardDidChangeFrame"})}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note that only ",(0,a.jsx)(n.code,{children:"keyboardDidShow"})," and ",(0,a.jsx)(n.code,{children:"keyboardDidHide"})," events are available on Android. The events will not be fired when using Android 10 and under if your activity has ",(0,a.jsx)(n.code,{children:"android:windowSoftInputMode"})," set to ",(0,a.jsx)(n.code,{children:"adjustNothing"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"removelistener",children:(0,a.jsx)(n.code,{children:"removeListener()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static removeListener(eventName, callback)\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Deprecated."})," Use the ",(0,a.jsx)(n.code,{children:"remove()"})," method on the event subscription returned by ",(0,a.jsx)(n.a,{href:"#addlistener",children:(0,a.jsx)(n.code,{children:"addListener()"})}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"eventName"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsxs)(n.td,{children:["The ",(0,a.jsx)(n.code,{children:"nativeEvent"})," is the string that identifies the event you're listening for"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"callback"}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"The function to be called when the event fires"})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"removealllisteners",children:(0,a.jsx)(n.code,{children:"removeAllListeners()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static removeAllListeners(eventName)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Removes all listeners for a specific event type."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"eventType"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"The native event string listeners are watching which will be removed"})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"dismiss",children:(0,a.jsx)(n.code,{children:"dismiss()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static dismiss()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Dismisses the active keyboard and removes focus."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"schedulelayoutanimation",children:(0,a.jsx)(n.code,{children:"scheduleLayoutAnimation"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static scheduleLayoutAnimation(event)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(27378),r=t(38944);const s={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&c(e,t,n[t]);return e};function h({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(s.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>q});var a=t(27378),r=t(38944),s=t(12112),i=t(3620),l=t(69490),o=t(14953),d=t(27886),c=t(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&v(e,t,n[t]);if(b)for(var t of b(n))C.call(n,t)&&v(e,t,n[t]);return e},f=(e,n)=>h(e,p(n));function y(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function j(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return y(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function D({queryString:e=!1,groupId:n}){const t=(0,i.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(f(x({},t.location),{search:n.toString()}))}),[r,t])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=j(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=D({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),b=(()=>{const e=null!=d?d:h;return g({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var w=t(14185);const S={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var B=Object.defineProperty,E=Object.defineProperties,A=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,N=(e,n,t)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))T.call(n,t)&&N(e,t,n[t]);if(O)for(var t of O(n))L.call(n,t)&&N(e,t,n[t]);return e},_=(e,n)=>E(e,A(n));function V({className:e,block:n,selectedValue:t,selectValue:i,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(d(n),i(r))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=null!=(n=o[t])?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=null!=(t=o[n])?t:o[o.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:s})=>a.createElement("li",_(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:c},s),{className:(0,r.Z)("tabs__item",S.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function P({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function K(e){const n=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",S.tabList)},a.createElement(V,I(I({},e),n)),a.createElement(P,I(I({},e),n)))}function q(e){const n=(0,w.Z)();return a.createElement(K,I({key:String(n)},e),y(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var a,s={},d=null,c=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,a)&&!o.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:d,ref:c,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>s});var a=t(27378);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:l},n)}}}]);